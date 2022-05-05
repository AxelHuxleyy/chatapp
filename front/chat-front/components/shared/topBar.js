import React from 'react';

const TopBar = () => {
  return ( 
    <div className='bg-blue-800 h-20 w-full p-5 text-white grid grid-cols-4 gap-3'>
        <div className='col-span-2 pl-2 '>
        <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-blue-800 to-yellow-300">
            ChatApp
          </p>
        </div>
        <div className=' '>
          
        </div>
        <div className='text-white flex justify-end'>
          <p className="text-2xl font-mono">Log out</p>
          
        </div>
    </div>
   );
}
 
export default TopBar;