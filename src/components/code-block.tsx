"use client";

import hljs from "highlight.js";
import { useRef, useEffect } from "react";
import "highlight.js/styles/github-dark.css";

interface CodeBlockProps {
  language: string;
  content: string;
}

export function CodeBlock({ language, content }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  const highlightCode = () => {
    if (codeRef.current) {
      codeRef.current.removeAttribute("data-highlighted");
      hljs.highlightElement(codeRef.current);
      codeRef.current.setAttribute("data-highlighted", "yes");
    }
  };

  useEffect(() => {
    highlightCode();
  }, [content]);

  return (
    <div className="w-full">
      <pre className="rounded-xl w-full">
        <code className={`language-${language} rounded-lg`} ref={codeRef}>
          {content}
        </code>
      </pre>
    </div>
  );
}
