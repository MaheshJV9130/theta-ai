import Link from "next/link";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
const ChatHistoryChat = ({title = 'Lorem ipsum dolor sit amet consectetur' , chatID}) => {
  return (
    <div className="flex justify-between items-center p-2">
      <Link href={`${chatID}`}>{title}</Link>
      <AiFillDelete className="text-red-800" size={20}/>
    </div>
  );
};

export default ChatHistoryChat;
