'use client'
import React from "react";
import {signIn, signOut } from "next-auth/react"
const LoginBtn = ({ icon, provider }) => {
const signInOP = provider.toLowerCase()
  return (
    <button
    onClick={()=>signIn(signInOP)}
      type="button"
      className="text-white w-full justify-center  bg-zinc-950 hover:bg-zinc-950/50    font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 gap-2"
    >
      {icon}
      <p>Continue with {provider}</p>
    </button>
  );
};

export default LoginBtn;
