"use client";

import Dashboard from "@/components/dashboard";
import { Lander } from "@/components/lander";
import { Spinner } from "@/components/loading";
import { SiteStore } from "@/stores";
import { useEffect, useState } from "react";

function HomePage() {
  const { getStarted } = SiteStore();
  const started = getStarted();

  return started ? <Dashboard /> : <Lander />;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <Spinner />;
  }

  return <HomePage />;
}
