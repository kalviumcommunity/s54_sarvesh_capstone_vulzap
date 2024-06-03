import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const NavBar = () => {
  return (
    <nav className="fixed z-50 glass-effect shimmer-effect border border-purple-800 font-semibold w-[900px] h-20 flex items-center justify-between px-16 mx-auto my-4 rounded-[13px] ">
      <div className="flex space-x-8 gap-10 items-center">
        <Link href="#" className="text-white hover:text-text-1">
          Hacktivity
        </Link>
        <Link href="#" className="text-white hover:text-text-1">
          About
        </Link>
      </div>
      <div>
        <Link
          href={"/"}
          className="hover:scale-105 cursor-pointer relative logo-container"
        >
          <Image
            className=""
            src={"/logo.svg"}
            height={50}
            width={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex space-x-4 gap-10 items-center">
        <Link href="/signup" className="text-white hover:text-text-1">
          Sign Up
        </Link>
        <Link href={"/login"}>
          <HoverBorderGradient
            containerClassName="rounded-[14px] border-0 hover:scale-105"
            as="button"
            className="bg-text-2 bg-opacity-55 text-white flex items-center space-x-2"
          >
            <span>Log In</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
