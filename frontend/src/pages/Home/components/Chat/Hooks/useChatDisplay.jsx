import  { useEffect } from 'react'
import { useChatBody, useChatValue } from '../../../../../features/chat/chat';
import { ACTIONS, useStateValue } from '../../../../../state/StateProvider';
import { CHAT_ACTIONS } from '../../../../../features/chat/context/ChatProvider';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
const {
    SET_CHATS
  }=ACTIONS
  const {
    SET_CHAT,
    SET_LOADING,
    SET_ERROR
  }=CHAT_ACTIONS
function useChatDisplay() {
  const [{user,socket,chats},dispatch]=useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [_,dispatchChat]=useChatValue();
  
  const {chatID}=useParams()
  const chat=chats?.find(chat=>chat.id === chatID);
  const {error,loading,data}=useChatBody({token:user?.accessToken,userId:user?.id,socket,chatID,chat});

  //! just to let now the other components that the chat is loading 
  useEffect(()=>{
      dispatchChat({
        type:SET_LOADING,
        loading:loading
      })  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loading])
  
    useEffect(()=>{
      if(error){
        toast.error(error.message);
        dispatchChat({
          type:SET_ERROR,
          error:error
        })
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])
    
  
    useEffect(()=>{
      if(data?.messages&& data?.id   && ! error ){
        dispatchChat({
          type:SET_CHAT,
          chat:{...data},
          loading:loading
        })
        dispatch({
          type:SET_CHATS,
          chat:{...data}
        })
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data?.messages,data?.id,data?.users,data?.admins])

  return {
    data,loading,error,chat
  }
}

export default useChatDisplay