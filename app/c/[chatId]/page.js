'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import ChatHistory from '@/componets/ChatHistory'
import ChatContainer from '@/componets/ChatContainer'

const Chat = () => {
    const params = useParams()
  return (
    <main className='h-screen flex'>
     
    <ChatHistory/>
    <ChatContainer/>
    </main>
  )
}

export default Chat
