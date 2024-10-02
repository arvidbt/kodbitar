import { Inter as FontSans } from "next/font/google";

import { Source_Sans_3 as SourceSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const sourceSans = SourceSans({
  subsets: ["latin"],
  variable: "--font-source",
});
