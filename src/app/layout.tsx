import "@/styles/globals.css";

import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { sourceSans } from "@/styles/fonts";
import { config } from "@/config";

export const metadata: Metadata = {
  title: config.site.name,
  description: config.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-source min-h-screen bg-background antialiased",
          sourceSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
