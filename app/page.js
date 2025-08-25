import FeatureCard from "@/componets/FeatureCard";
import Logo from "@/componets/Logo";
import Nav from "@/componets/Nav";
import Link from "next/link";
import { Fragment } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaBoltLightning , FaLock } from 'react-icons/fa6';

export default function Home() {
  const features = [
    {
      icon:<FaBoltLightning/>,
      title:'Instant AI Responses',
      desc:'Get lightning-fast answers with optimized performance and no delays.'
    },
    {
      icon:<FaLock/>,
      title:'Privacy First',
      desc:'Your data stays secure and protected while using our AI tools.'
    },
    {
      icon:<BsRocketTakeoff/>,
      title:'Seamless Performance',
      desc:'Theta Ai runs smoothly across all devices with zero interruptions.'
    },
  ]
  return (
    <>
      <Nav />
      <main>
        <section className="h-screen flex bg-gradient-to-r from-black via-blue-900 to-purple-900">
          <div className="w-1/2 text-white h-full flex justify-center gap-20 items-center text-center flex-col mx-auto">
            <h1 className="text-6xl font-extrabold">Theta Ai</h1>
            <p className="text-xl text-gray-300">
              Power in Silence - Experience instant AI responses, futuristic
              tools, and seamless performance. All free, all silent.
            </p>

            <Link href='/get-started' className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl cursor-pointer  w-fit flex gap-2 items-center justify-center">
              <BsRocketTakeoff size={30} /> Get Started
            </Link>
          </div>
          <div className="w-1/2 h-full relative">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section
          id="features"
          className="px-8 md:px-16 py-20 bg-black text-white"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">⚡ Features</h2>
            <p className="mt-2 text-gray-400">
              Discover what makes Theta Ai powerful and unique.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map(feature=>(
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} desc={feature.desc}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
