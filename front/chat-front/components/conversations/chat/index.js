import React from 'react';
import Message from './mesagge';

const Chat = () => {
  return (
    <div className='p-0 m-0'>
      <div className="text-white p-4  w-full overflow-y-auto flex flex-col gap-5" style={{height: `calc(100vh - 12rem)`}}>
        <Message />
        <Message own={true}/>
        <Message />
        <Message own={true}/>
        <Message />
      </div>
      <div className='h-28 p-3   w-full flex items-center border-t-2 border-gray-800'>
        <textarea className='h-full w-10/12 bg-gray-300 m-0 p-0' aria-disabled aria-expanded="false"/>
        <button className="bg-blue-800 p-3 rounded-2xl m-auto w-20 text-2xl text-white"> Send</button>
      </div>
    </div>
  );
}

export default Chat;