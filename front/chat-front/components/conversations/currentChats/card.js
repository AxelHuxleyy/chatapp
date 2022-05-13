import React from 'react';
import { useDispatch } from 'react-redux'
import { setAction, setIdConversation, setIdFriend } from '../../../redux/actions'
import moment from "moment"

const Card = ({ conversation, message, owner, friendChat, createdAt }) => {
  const dispatch = useDispatch()

  const  handleClick = () => {
    dispatch(setAction("chat"))
    dispatch(setIdConversation(conversation.conversation.id))
    dispatch(setIdFriend(conversation.conversation.members[0].id))
  }
  const date = new Date(Number(createdAt))
  console.log(moment(date).fromNow())
  
  return (
    <div className="h-24 w-full p-3 border-b-2 border-b-gray-700  flex items-center gap-4 cursor-pointer hover:bg-blue-900" onClick={handleClick}>
      <img
        src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        className='h-16 w-16 rounded-full object-cover border-2 border-solid border-gray-400' />
      <div>
        <p className='text-gray-200 font-medium text-2xl '>{`${friendChat.name} ${friendChat.lastName} `}</p>
        <p className='text-gray-300 font-light text-1xl '>{owner ? `you:` : ""}  {message.length > 90 ? `${message.substring(0, 95)}... ` : message} {moment(date).fromNow()} </p>
      </div>
    </div>
  );
}

export default Card;