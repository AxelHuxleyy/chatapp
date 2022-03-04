import React from 'react';
import TopBar from '../components/shared/topBar';
import Conversation from '../components/conversations/currentChats/conversations';
import Chat from '../components/conversations/chat';
import Online from '../components/conversations/FriendsOnline';

export default function Home() {
  return (
    <div className='h-screen '>
      <TopBar />
      <div className='w-full bg-gray-900 flex ' style={{height: `calc(100vh - 5rem)`}}>
        <div className=' flex-1'>
          <Conversation />
        </div>
        <div className='border-r-gray-800 border-r-2 ' style={{flex: "2"}}>
          <Chat />
        </div>
        <div className=" flex-1">
          <Online />
        </div>
      </div>

    </div>
  )
}
