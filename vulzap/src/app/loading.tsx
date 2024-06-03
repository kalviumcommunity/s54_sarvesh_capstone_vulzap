"use client";

import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    async function getLoader() {
      const { trefoil } = await import("ldrs");
      trefoil.register();
    }
    getLoader();
  }, []);
  return (
    <div className="h-screen  w-full flex md:items-center md:justify-center bg-black/[0.98] antialiased bg-grid-white/[0.03] relative overflow-hidden">
      {" "}
      <div className="h-full w-full bg-primary-1 flex items-center justify-center">
        <div className="flex justify-center items-center">
          {/* <div className="rounded-full h-20 w-20 bg-primary-3 animate-ping"></div> */}
          <l-trefoil
            size="120"
            stroke={8}
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4"
            color="#AD00FF"
          ></l-trefoil>
        </div>
      </div>
    </div>
  );
};

export default Loading;
