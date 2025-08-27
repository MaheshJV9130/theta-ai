import Link from "next/link";
import React from "react";

import ChatHistoryChat from "./ChatHistoryChat";
import Logo from "./Logo";

const ChatHistory = ({isMenu = false}) => {
  const arr = [1,2,3,4,5,5,6,6,6,6,6,6]
  return (
    <section className={`${
        isMenu ? "block w-full h-full" : "hidden lg:block w-[25vw] h-full"
      } relative overflow-auto text-center bg-zinc-900 text-white`}>
      <Logo/>
      <div className="flex sticky top-0 bg-zinc-900 justify-between items-center p-2 py-2">
        <p>Chats</p>
        <button className="text-xs text-blue-800 cursor-pointer">Clear All</button>
      </div>
      <div className="lg:text-xs text-xl max-h-[90%] mt-2 border-white">
        {
          arr.map((i,idx)=>(
            <ChatHistoryChat key={idx} chatID={idx}/>
          ))
        }
      </div>
      
    </section>
  );
};

export default ChatHistory;
