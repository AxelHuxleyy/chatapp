import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Message from "../components/conversations/chat/mesagge"
import { useQuery, useMutation } from '@apollo/client';
import { GET_MY_MESSAGE } from '../graphQL/user/querys';
import { NEW_MESSAGE } from '../graphQL/user/mutations';


const ImpleSocket = () => {
  const action = useSelector((state) => state.actions)
  const me = useSelector((state) => state.me)
  const [message, setMessage] = useState('')
  const divChat = useRef(null)

  const { loading, error, data, refetch } = useQuery(GET_MY_MESSAGE, {
    variables: { input: { idConversation: action.action.idConversation }}
  });
  const [newMessage] = useMutation(NEW_MESSAGE);


  useEffect(() => {
    if (action.action.type === "chat") {
      refetch({ idConversation: action.action.idConversation })
    }
  }, [action.action.idConversation])

  useEffect(() => {
    if (data?.getMyMessage?.length !== 0 && loading === false) {
      divChat.current.scrollTop = divChat.current.scrollHeight
    }
  }, [data])

  if (action.action.type == "") {
    return (
      <div className='p-0 m-0 w-full h-full flex items-center justify-center'>
        <p className='text-white text-2xl font-semibold'> Select a chat or start with a new chat</p>
      </div>
    )
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message) {
      newMessage({
        variables: {
          input: {
            userId: action.action.idFriend,
            message
          }
        },
        onCompleted: (data) => {
          setMessage('')
          refetch({ idConversation: data.newMessage.conversation })
        }
      });
    }
  }

  return (
    <div className='p-0 m-0'>
      <div className="text-white p-4  w-full overflow-y-auto flex flex-col gap-5" style={{ height: `calc(100vh - 12rem)` }} ref={divChat}>
        {loading ? <p>Loading...</p>
          : error ? <p>Error</p>
            : data.getMyMessage.map(message => <Message key={message.id} message={message.message} own={me.me.id == message.sender} />)}

      </div>
      <form onSubmit={handleSendMessage}>

        <div className='h-28 p-3   w-full flex items-center border-t-2 border-gray-800'>
          <input className='h-full w-10/12 bg-gray-300 m-0  text-lg ' aria-disabled aria-expanded="false" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button className="bg-blue-800 p-3 rounded-2xl m-auto w-20 text-2xl text-white"type='submit' > Send</button>
        </div>
      </form>
    </div>
  );
}
 
export default ImpleSocket;