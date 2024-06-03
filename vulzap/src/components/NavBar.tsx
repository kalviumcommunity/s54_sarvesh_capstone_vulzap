import React from "react";

const NavBar = () => {
  return (
    <nav className="w-[1109px] h-[106px] flex items-center justify-between p-6 glass-effect mx-auto my-4 rounded-[13px]">
      <div className="flex space-x-8">
        <a href="#" className="text-white hover:text-gray-300">
          Hacktivity
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          About
        </a>
      </div>
      <div>
        <img src="/path/to/your/logo.png" alt="Logo" className="h-10" />
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-300">
          Sign Up
        </a>
        <a
          href="#"
          className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700"
        >
          Log In
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
