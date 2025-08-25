
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Nav = () => {

  return (
    <header>
      <nav className="h-16 flex justify-evenly items-center ">
        <Logo/>
        <ol className="flex justify-center items-center gap-5 p-2 rounded-xl bg-blue-600 text-white">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#faq">FAQ's</Link>
          </li>
        </ol>
        <Link href='/get-started' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " >
          Get Started
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
