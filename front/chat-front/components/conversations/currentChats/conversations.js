import React from 'react';
import Card from './card';
import { useQuery } from "@apollo/client";
import { GET_MY_CONVERSATION } from '../../../graphQL/user/querys';
import { useSelector } from 'react-redux'

const Conversation = () => {
  const { loading, error, data } = useQuery(GET_MY_CONVERSATION);
  const me = useSelector((state) => state.me)

  loading ? console.log("loading") : console.log(data)
  return ( 
    <div className='w-full h-full flex flex-col overflow-y-auto border-r-2 border-r-gray-800 '>
      {loading ? <p>Loading...</p> 
      : error ? <p>Error</p> 
      : data.getMyConversations.map(conversation => <Card key={conversation.id} conversation={conversation} message={conversation.message} owner={me.me.id == conversation.sender.id} friendChat={conversation.conversation.members[0]} />)}
    </div>
   );
}

export default Conversation;