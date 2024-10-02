"use client";

import { SiteStore } from "@/stores";
import { CodeBlock } from "./code-block";
import { Button } from "./ui/button";

export function Lander() {
  const { setStarted } = SiteStore();
  const exampleContent = `
  
      export function Hello() {
        return (
          <div>
            Hello!
          </div>
        )
      }
  
    `;

  return (
    <div className="min-h-screen flex flex-row items-center">
      <div className="container max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-12 ">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-black text-4xl">Kodbitar</h1>
            <h1 className="font-bold text-2xl">
              A simple code snippet manager.
            </h1>
            <h2>
              Kodbitar provides a simple but modern platform for saving and
              sharing snippets of code. All code is stored client-side through
              local storage.
            </h2>
          </div>
          <ul className="ml-6 font-semibold pb-4">
            <li className="flex flex-row gap-2 items-center">
              <div className="aspect-square h-3 bg-black rounded"></div> Easy
              management
            </li>
            <li className="flex flex-row gap-2 items-center">
              <div className="aspect-square h-3 bg-black rounded"></div>{" "}
              Shareable snippets
            </li>
            <li className="flex flex-row gap-2 items-center">
              <div className="aspect-square h-3 bg-black rounded"></div>{" "}
              Complete data ownership
            </li>
          </ul>
          <div className="flex justify-center">
            <Button className="w-full" onClick={() => setStarted()}>
              Get started
            </Button>
          </div>
        </div>
        <div>
          <CodeBlock language="typescript" content={exampleContent} />
        </div>
      </div>
    </div>
  );
}
