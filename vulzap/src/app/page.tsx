"use client";
import NavBar from "@/components/NavBar";
import { Spotlight } from "@/components/ui/Spotlight";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Hero from "@/components/Hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-center flex-col">
          <NavBar />
          <div className="h-screen pt-24 w-full flex md:items-center md:justify-center bg-black/[0.98] antialiased bg-grid-white/[0.03] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#7A28A4"
            />
            <Spotlight
              className="-top-56 bottom-3 md:left-60 md:-top-20"
              fill="#7A28A4"
            />
            {/* Hero Section */}
            <Hero />
          </div>
        </div>
      )}
    </>
  );
}
