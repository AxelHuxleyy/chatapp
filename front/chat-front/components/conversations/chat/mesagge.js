import React from 'react';

const Message = ({ own }) => {
  return (
    <div className={`flex gap-2 ${own ? "flex-row-reverse" : ""}`}>
      <img
        className={`h-14 w-14 rounded-full border-2 border-gray-600 object-cover `}
        src='https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80' />
      <div className={`max-w-lg rounded-xl p-2 cursor-default ${own ? "bg-blue-900" : "bg-blue-600"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe fuga dicta nihil porro ipsa eius! Architecto aspernatur deserunt ab molestias recusandae quasi quam veniam, quas ad sapiente ut provident.
      </div>
    </div>
  );
}

export default Message;