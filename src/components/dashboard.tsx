"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { config } from "@/config";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

import { CodeBlock } from "./code-block";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";

const initialCards = [
  {
    name: "NextAuth config for Google",
    description: "A boilerplate NextAuth config for v.5.0.0-beta.20",
    content: `
import { type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import {
  users,
  accounts,
  sessions,
  verificationTokens,
} from "@/server/db/schema";
import { env } from "@/env";
import { db } from "@/server/db";

export const authConfig = {
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn({ profile }) {
      if (profile && profile.email) {
        return profile.email.endsWith("@cygni.se");
      }
      return false;
    },
  },
} satisfies NextAuthConfig;`,
    language: "typescript",
    tags: ["Next", "Auth", "Config", "Drizzle"],
  },

  {
    name: "ShadCN components setup",
    description: "A boilerplate NextAuth config for v.5.0.0-beta.20",
    content: `
    {
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}

    `,
    language: "json",
    tags: ["ShadCN", "UI", "Design"],
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const [content, setContent] = useState<{
    code: string;
    language: string;
    name: string;
  }>();

  const [editing, setEditing] = useState(false);

  const filteredCards = initialCards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="container max-w-7xl mx-auto p-4 space-y-4">
      <div className="w-full flex items-center justify-between sticky top-0 h-16 z-10 bg-white">
        <h1 className="font-black text-2xl">{config.site.name}</h1>
        <div className="flex flex-row gap-2">
          <Button>Add kodbit</Button>
          <Button variant={"destructive"}>Clear storage</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[calc(100vh-8rem)] overflow-x-scroll">
        <div className="col-span-1 flex gap-4 flex-col p-2">
          <Input
            type="text"
            placeholder="Search by name or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          <ScrollArea className="max-h-[calc(100vh-12rem)]">
            {filteredCards.map((card, i) => (
              <Card
                key={i}
                className={cn(
                  "border rounded space-y-2 my-2",
                  card.name === content?.name && "invert"
                )}
                onClick={() => {
                  setContent({
                    code: card.content,
                    language: card.language,
                    name: card.name,
                  });
                }}
              >
                <CardHeader>
                  <CardTitle className="font-semibold text-lg w-full flex items-center justify-start text-left">
                    {card.name}
                  </CardTitle>
                  <CardDescription>
                    <p>{card.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="space-x-2 space-y-2">
                    {card.tags.map((tag, i) => (
                      <Badge key={i}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
          <Button>Add a kodbit</Button>
        </div>
        <div className="col-span-2 bg-[#0d1117] flex-grow flex flex-col rounded-md justify-between relative">
          <ScrollArea>
            <div className="max-h-[calc(100vh-12rem)] flex-grow">
              <CodeBlock
                content={content?.code ?? ""}
                language={content?.language ?? ""}
              />
            </div>
          </ScrollArea>
          <div className="bg-white h-14 p-4 mx-auto flex items-center justify-between absolute bottom-0 w-full">
            <div>
              <Button onClick={() => setEditing(!editing)}>
                {editing ? "Save" : "Edit"}
              </Button>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Button>Share</Button>
              <Button>Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
