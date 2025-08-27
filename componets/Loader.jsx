import React from "react";

const Loader = () => {
  return (
    <div className="flex relative flex-col items-center justify-center w-[85vw] h-screen bg-zinc-800">
      <div className="w-16 h-16 rounded-full bg-zinc-700 animate-pulse mb-6"></div>
      <div className="w-56 h-6 rounded-md bg-zinc-700 animate-pulse mb-8"></div>
      <div className="w-full absolute bottom-5 h-12 rounded-md bg-zinc-900 animate-pulse"></div>
    </div>
  );
};

export default Loader;
