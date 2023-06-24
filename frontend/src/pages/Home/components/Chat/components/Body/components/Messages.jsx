import { useStateValue } from '../../../../../../../state/StateProvider';
import { useChatValue } from '../../../../../../../features/chat/chat';
import useMessagesHeight from './hooks/useMessagesHeight';
import Message from './Message/Message'
import { InView } from 'react-intersection-observer';
import useEmitSeenMessage from './hooks/useEmitSeenMessage';
function Messages({initialRef,observe}) {
  const [{user,socket}]=useStateValue()
  const [{
    chat:{
      id:chatID='',
      messages=[],
    }
  }]=useChatValue()
  useMessagesHeight({messages,user,chatID,socket,ref:initialRef})
  useEmitSeenMessage({messages,user,chatID,socket,ref:initialRef})
  return (
    <>
      {
        messages&& 
        messages.length>0&& 
        messages.map((message,index)=>{
          const previousMessage=messages[index-1]??null;
          const nextMessage=messages[index+1]??null;
          const dataForMessage={previousMessage,nextMessage,message}

          //! if there's a previous send the message component 
          if(previousMessage)
            return <Message key={message.id}  {...dataForMessage} /> ;
          
          //! otherwise observe the first component 
          return (
            <InView as="div" key={message.id} onChange={(inView, entry)=>observe(inView,entry,message)}>
              <Message   {...dataForMessage} /> 
            </InView>
          )
        })
      }


    </>
  )
}

export default Messages