import { GlobeDemo } from "./GlobeComponent";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 justify-evenly">
      <div className="flex flex-col gap-10 text-white font-bold leading-relaxed pl-16">
        <div className="flex gap-4 w-full roll-in-left text-5xl pt-14">
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
            Over <span className="text-text-1 font-semibold"> 2 million+</span>{" "}
            cyberattacks happen a year worldwide.
            <br /> Traditional security misses blind spots.{" "}
            <span className="text-text-1 font-semibold"> Vulzap</span>, the{" "}
            <br />
            next-gen VDP, empowers you to find and fix these <br />
            vulnerabilities before attackers strike.
          </h2>
          <h2 className="text-md font-medium">
            Become a cyber guardian with Vulzap. Report vulnerabilities <br />{" "}
            get <span className="text-text-1">rewards & hall of fame</span> .
          </h2>
        </div>

        <div className="font-medium text-medium flex gap-16 text-text-1 pr-10">
          <h1>Trusted By 100+ Companies</h1>
          <h1>30+ Programs</h1>
          <h1>500+ Active Researchers</h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-[600px] h-[550px]">
        <GlobeDemo />
      </div>
    </div>
  );
};

export default Hero;
