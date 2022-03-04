import React from 'react';


const Card = () => {
  const message= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure distinctio ad, dolorem enim ullam eveniet alias voluptate labore fugit praesentium iusto eligendi recusandae vel, culpa, aspernatur repellendus facere consectetur obcaecati."
  return ( 
    <div className="h-24 w-full p-3 border-b-2 border-b-gray-700  flex items-center gap-4 cursor-pointer my-1">
        <img
        src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        className='h-16 w-16 rounded-full object-cover border-2 border-solid border-gray-400' />
        <div>
        <p className='text-gray-200 font-medium text-2xl '>Axel Huxley</p> 
        <p className='text-gray-300 font-light text-1xl '>{message.substring(0,95)}...</p> 
        </div>
    </div>
   );
}
 
export default Card;