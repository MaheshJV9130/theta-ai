import LoginBtn from "@/componets/LoginBtn";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-r h-screen from-black flex justify-center via-blue-900 to-purple-900">
      <div className="w-fit flex flex-col justify-center items-center gap-5 p-5 flex-wrap mx-auto">
        <h1 className="text-6xl m-5 text-white font-extrabold">
          Get Started with Theta Ai
        </h1>
        <div className="w-1/2 text-center">
          <LoginBtn icon={<FaGoogle />} provider={"Google"} />
          <LoginBtn icon={<FaFacebook />} provider={"Facebook"} />
          <LoginBtn icon={<FaGoogle />} provider={"Google"} />
          <LoginBtn icon={<FaGoogle />} provider={"Google"} />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
