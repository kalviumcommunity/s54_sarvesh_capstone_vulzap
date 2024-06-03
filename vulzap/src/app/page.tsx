"use client";
import { GlobeDemo } from "@/components/GlobeComponent";
import NavBar from "@/components/NavBar";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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

            <div className="flex flex-col md:flex-row items-center gap-1 justify-evenly">
              <div className="flex flex-col gap-10 text-white font-bold leading-relaxed pl-20">
                <div className="flex gap-4 w-full roll-in-left text-5xl">
                  <h1 className="text-text-1">{`>`}</h1>
                  <h1 className="w-full">
                    <Typewriter
                      options={{
                        strings: [
                          "Unify. Disclose. Secure",
                          "Hack Ethically",
                          "Report Vulnerabilities",
                          "Earn Rewards",
                          "Get Honoured",
                          "Beyond Blind Spots",
                        ],
                        delay: 55,
                        deleteSpeed: 10,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                </div>
                <div className="flex gap-4 flex-col  slide-in-blurred-top">
                  <h2 className="text-lg font-light">
                    Over{" "}
                    <span className="text-text-1 font-semibold">
                      {" "}
                      2 million+
                    </span>{" "}
                    cyberattacks happen a year worldwide.
                    <br /> Traditional security misses blind spots.{" "}
                    <span className="text-text-1 font-semibold"> Vulzap</span>,
                    the <br />
                    next-gen VDP, empowers you to find and fix these <br />
                    vulnerabilities before attackers strike.
                  </h2>
                  <h2 className="text-md font-medium">
                    Become a cyber guardian with Vulzap. Report vulnerabilities{" "}
                    <br /> get{" "}
                    <span className="text-text-1">rewards & hall of fame</span>{" "}
                    .
                  </h2>
                </div>

                <div className="font-medium text-medium flex gap-16 text-text-1 pr-10">
                  <h1>Trusted By 100+ Companies</h1>
                  <h1>30+ Programs</h1>
                  <h1>500+ Active Researchers</h1>
                </div>
              </div>
              <div className="flex items-center justify-center w-[600px] h-[500px]">
                <GlobeDemo />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
