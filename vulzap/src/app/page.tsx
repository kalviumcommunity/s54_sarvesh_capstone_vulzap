"use client";
import { GlobeDemo } from "@/components/GlobeComponent";
import { Spotlight } from "@/components/ui/Spotlight";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen pt-14 w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#7A28A4"
        />
        <Spotlight
          className="-top-56 bottom-3 md:left-60 md:-top-20"
          fill="#7A28A4"
        />

        <div className="flex flex-col md:flex-row items-center justify-evenly px-28">
          <div className="flex flex-col  text-5xl gap-1 text-white font-bold leading-relaxed w-full">
            <div className="flex gap-3">
              <h1 className="text-text-1">{`>`}</h1>
              <h1 className="w-full">
                <Typewriter
                  options={{
                    strings: [
                      "Report Vulnerabilities",
                      "Earn Rewards",
                      "Unify. Disclose. Secure.",
                      "Beyond Blind Spots",
                    ],
                    delay: 50,
                    deleteSpeed: 10,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <h2 className="text-xl font-light">
              Over <span className="text-text-1 font-semibold"> 2 million</span>{" "}
              cyberattacks happen annually. Traditional <br />
              security has blind spots. Vulzap, the next-gen VDP, empowers you{" "}
              <br />
              to find and fix these vulnerabilities before attackers do.
            </h2>
          </div>
          <div className="flex items-center justify-center w-[790px] h-[650px]">
            <GlobeDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
