import React from 'react';

const CardOnline = () => {
  return (
    <div className='flex h-24 w-full items-center p-2 border-b-2 border-gray-800 cursor-pointer'>
      <img
        className={`h-16 w-16 rounded-full border-2 border-gray-300 object-cover `}
        src='https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <p className='text-white ml-2 text-xl font-medium'>
          Julia Guzman
        </p>
    </div>
  );
}

export default CardOnline;