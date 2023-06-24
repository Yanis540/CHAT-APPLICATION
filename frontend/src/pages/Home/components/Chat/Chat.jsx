import { useParams } from 'react-router-dom'
import {  
  useChatStatus, 
} from '../../../../features/chat/chat';
import { useStateValue } from '../../../../state/StateProvider';

import ChatStructure from './Structure/ChatStructure';
import useChatDisplay from './Hooks/useChatDisplay';



function Chat({settings}) {

  // eslint-disable-next-line no-empty-pattern

  const [{user,socket},dispatch]=useStateValue();
  const {chatID}=useParams()
  const {error,loading,chat} = useChatDisplay()
  useChatStatus({currentUserId:user?.id,socket,dispatch,chatID:chatID})





  return (
    <div className='flex-[0.8] flex flex-col justify-start h-[100%] relative'>
      <ChatStructure chat={chat}  loading={loading} error={error} settings={settings} /> 
    </div>
  )
}

export default Chat