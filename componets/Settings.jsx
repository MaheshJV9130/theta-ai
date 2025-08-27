'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
const Settings = ({ref , email}) => {
  return (
    <div ref={ref} className='absolute top-12 right-4 text-center bg-zinc-900 p-2 rounded-xl  text-white'>
      <p className='text-gray-400'>{email}</p>
      <p className='hover:bg-zinc-600 rounded-xl'>Settings</p>
      <button onClick={signOut} className='hover:bg-zinc-600 w-full rounded-xl'>Log out</button>
    </div>
  )
}

export default Settings
