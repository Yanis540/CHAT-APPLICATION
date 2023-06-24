import { useRef } from 'react'
import { emitGetOlderMessages, useChatValue } from '../../../../../../features/chat/chat';
import { useStateValue } from '../../../../../../state/StateProvider';
import { UsersTyping } from '../../../../../../layouts/layouts';
import { customChatBodyClass } from './styles/style';
import { UsersWhoAreTyping } from '../../../../../../utils/utils';
import Messages from './components/Messages'

function ChatBody() {
  const [{user,usersTyping,socket}]=useStateValue()
  const [{
    chat:{
      id:chatID='',
      users=[],
      messages=[],
    }
  }]=useChatValue()
  const customClass=customChatBodyClass
  const ref=useRef({})

  
  const usersWhoAreTyping=UsersWhoAreTyping({users,usersTyping,id:user?.id});


  const observe=(inView, entry,message)=>{
    if(inView)
      emitGetOlderMessages(socket,{firstMessage:message,chatID,users});
  }
  return (
    <div ref={ref} className={`${customClass}  p-5 relative`} id='messages'>
      {
        messages?.length?(
          <Messages observe={observe} initialRef={ref}/> 
        ):(
          <h2 className='text-center text-gray-700'>Halab Chwiya</h2>
        )
      }
      <UsersTyping usersWhoAreTyping={usersWhoAreTyping} />
      
    </div>
      
  )
}

export default ChatBody