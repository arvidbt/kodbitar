"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SiteState {
  started: boolean;
  setStarted: () => void;
  getStarted: () => boolean;
}
export const SiteStore = create<SiteState>()(
  persist(
    (set, get) => ({
      started: false,
      setStarted: () => set({ started: true }),
      getStarted: () => get().started,
    }),
    { name: "started" }
  )
);
