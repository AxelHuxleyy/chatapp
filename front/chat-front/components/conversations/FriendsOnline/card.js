import React from 'react';
import { useDispatch } from 'react-redux'
import { setAction, setIdConversation, setIdFriend } from '../../../redux/actions'
import { useQuery } from '@apollo/client';
import { IS_ALREADY_CONVERSATION } from '../../../graphQL/user/querys';


const CardOnline = ({name, lastName, id}) => {

  const dispatch = useDispatch()
  const { loading, error, data, refetch } = useQuery(IS_ALREADY_CONVERSATION, {
    variables: {
      user: id
    }
  });


  const handleNewConversation = () => {
    if(data?.isAlreadyConversation !== null) {
      dispatch(setAction("chat"))
      dispatch(setIdConversation(data.isAlreadyConversation))
      dispatch(setIdFriend(id))
    }
    else {
      dispatch(setAction("newChat"))
      dispatch(setIdConversation(null))
      dispatch(setIdFriend(id))
    }
  }

  return (
    <div className='flex h-24 w-full items-center p-2 border-b-2 border-gray-800 cursor-pointer hover:bg-blue-900' onClick={handleNewConversation}>
      <img
        className={`h-16 w-16 rounded-full border-2 border-gray-300 object-cover `}
        src='https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <p className='text-white ml-2 text-xl font-medium'>
          {`${name} ${lastName}`}
        </p>
    </div>
  );
}

export default CardOnline;