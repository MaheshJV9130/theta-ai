"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import UserMsg from "./UserMsg";
import Responce from "./Responce";
import { FaBars } from "react-icons/fa6";
import ChatHistory from "./ChatHistory";
import { AiOutlineClose } from "react-icons/ai";
import Settings from "./Settings";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
const ChatContainer = () => {
  const [promptArr, setPromptArr] = useState([]);
  
  const [isChatings, setIsChatings] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isMenu, setIsMenu] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const componentRef = useRef(0);
  const {data : session , status} = useSession()
  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsSettings(false);
    }
  };
 
  
  useEffect(() => {
   
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsChatings(true);
    setPromptArr((prev) => [...prev, prompt]);
    setPrompt("");
  };
 if(status === 'loading'){
      return <Loader/>
    }
  return (
    <section className="bg-zinc-800 relative w-full lg:w-[85vw] h-screen text-gray-300 flex flex-col">
      {isMenu && (
        <div className="absolute top-0 left-0 bg-zinc-900 w-full z-20 h-full">
          <button
            className="absolute top-5 right-5 z-30"
            onClick={() => setIsMenu(false)}
          >
            
            <AiOutlineClose size={30} />
          </button>
          <ChatHistory isMenu={true} />
        </div>
      )}
      <nav className="relative flex justify-between px-5 py-2 border-b lg:border-0 lg:self-end border-zinc-700">
        <button className="lg:hidden" onClick={() => setIsMenu(true)}>
          <FaBars size={20} />
        </button>
        <img
          src={session.user.image}
          width={30}
          height={30}
          onClick={() => setIsSettings((prev) => !prev)}
          className="rounded-full object-cover"
        />
      </nav>
      {isSettings && <Settings email={session.user.email} ref={componentRef} />}

      <div className="flex-1 flex flex-col overflow-y-auto px-5 py-4 chat">
        {!isChatings && (
          <div className="flex flex-col justify-center items-center flex-1 gap-3">
            <img src="/assets/logo-fav.png" alt="logo" width={80} height={80} />
            <h2 className="text-3xl text-center">Welcome {session.user.name}</h2>
          </div>
        )}

        {isChatings && (
          <div className="flex flex-col gap-4">
            {promptArr.map((prompt, idx) => (
              <UserMsg prompt={prompt} key={idx} />
            ))}
            <Responce responce={"What can I help with?"} />
          </div>
        )}
      </div>

      <form
        onSubmit={handleSend}
        className="fixed  bottom-1 w-full lg:static border-zinc-700 flex items-center gap-2 p-3"
      >
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          name="prompt"
          id="prompt"
          rows={1}
          className="flex-1 rounded-lg prompt bg-zinc-900 text-gray-200 resize-none outline-none placeholder-gray-500 border border-zinc-700 p-4"
          placeholder="Ask anything..."
        />
        <button
          type="submit"
          className="p-2 rounded-lg hover:bg-zinc-700 transition"
        >
          <AiOutlineSend size={30} />
        </button>
      </form>
      {console.log(session)}
    </section>
  );
};

export default ChatContainer;
