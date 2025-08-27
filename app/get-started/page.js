'use client'
import { useSession} from "next-auth/react"
import LoginBtn from "@/componets/LoginBtn";
import React, { useEffect } from "react";
import {  FaApple, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const GetStarted = () => {
  
  const router = useRouter()
  const {data : session , status } = useSession()
  useEffect(() => {
    if(session){
      router.push('/c/123')
      
    }
   
  }, [status])
  
  return (
    <section className="bg-gradient-to-r h-screen from-black flex justify-center via-blue-900 to-purple-900">
      <div className="w-fit flex flex-col justify-center items-center gap-5 p-5 flex-wrap mx-auto">
        <h1 className="text-3xl text-center md:text-6xl m-5 text-white font-extrabold">
          Get Started with Theta Ai
        </h1>
        <div className="mg:w-1/2  text-center">
          <LoginBtn icon={<FaGoogle />} provider={"Google"} />
          <LoginBtn icon={<FaGithub />} provider={"Github"} />
          <LoginBtn icon={<FaMicrosoft />} provider={"Microsoft"} />
          <LoginBtn icon={<FaApple />} provider={"Apple"} />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
