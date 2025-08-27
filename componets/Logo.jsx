import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/assets/logo-fav.png"
        alt="header-logo"
        width={70}
        height={70}
      />
      <h1 className="font-bold">Theta Ai</h1>
     
    </div>
  );
};

export default Logo;
