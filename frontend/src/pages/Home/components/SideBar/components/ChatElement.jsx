import {useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import { useStateValue } from '../../../../../state/StateProvider';
import { isChatActive }  from '../../../../../utils/utils';
import { messageAndDelay } from '../../../../../utils/utils';
import { Avatar } from '../../../../../layouts/layouts';
import IsLastMessageSeen from './utils/IsLastMessageSeen';
import useMessageDelay from './hooks/useMessageDelay';
function ChatElement({chat}) {
    //! the chat will have the following also : usersIds
    const [{user,usersOnline}]=useStateValue()
    const {photoURL,id,chatName,lastMessage,usersIds}=chat;
    const online=isChatActive(usersIds,usersOnline);

    const {chatID}=useParams();
    
    const isLastMessageSeen=IsLastMessageSeen(lastMessage,user)
    const {message,dateToDisplay}=messageAndDelay(lastMessage,user)
    const [messageDelay,setMessageDelay]=useState('');
    useMessageDelay({lastMessage,dateToDisplay,setMessageDelay,messageDelay})


  return (
    <div className={`p-5 flex flex-row items-center  gap-[10px] ${lastMessage &&!isLastMessageSeen && 'bg-[#2a303c]'  } ${!chatID|| chatID!==id?'bg-gray-900':'bg-gray-800'} rounded border-b border-b-gray-600 hover:bg-gray-600 ease-in-out duration-150`}>
      <Avatar url={photoURL} online={online} />
      <div className="flex flex-col justify-start flex-1">
        <Link  to={`/chat/${id}`}><h2 className='dark:text-gray-100 capitalize text-[1.2rem] font-bold '>{chatName}</h2></Link>
        <div className='flex flex-row items-center justify-between'>
          <p className={`${!isLastMessageSeen?'dark:text-gray-200':'dark:text-gray-500'} ease-in-out duration-150`}>{message}</p>
          <p className="dark:text-gray-300">{messageDelay}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatElement