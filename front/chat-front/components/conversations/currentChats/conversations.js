import React from 'react';
import Card from './card';

const Conversation = () => {
  return ( 
    <div className='w-full h-full flex flex-col overflow-y-auto border-r-2 border-r-gray-800 '>
      <Card />
      <Card />
      <Card />
    </div>
   );
}
 
export default Conversation;