import TopBar from '../components/shared/topBar';
import Conversation from '../components/conversations/currentChats/conversations';
import Chat from '../components/conversations/chat';
import Online from '../components/conversations/FriendsOnline';
import { useDispatch } from 'react-redux';
import { AUTH_ME } from '../graphQL/user/querys';
import { useQuery } from '@apollo/client';
import { setMe } from '../redux/meSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(AUTH_ME);

  loading ? <p>loading...</p> : error ? <p>error</p> : dispatch(setMe(data.authMe));

  return (
    <div className='h-screen '>
      <TopBar />
      <div className='w-full bg-gray-900 flex ' style={{height: `calc(100vh - 5rem)`}}>
        <div className=' flex-1'>
          <Conversation />
        </div>
        <div className='border-r-gray-800 border-r-2 ' style={{flex: "2"}}>
          <Chat />
        </div>
        <div className=" flex-1">
          <Online />
        </div>
      </div>
    </div>
  )
}