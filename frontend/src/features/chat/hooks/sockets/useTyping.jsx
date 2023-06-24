import {useEffect} from 'react'
import { emitStoppedTyping, emitTyping } from '../../chat';

function useTyping({input,socket,chatID,user,usersTyping}) {
  useEffect(()=>{
    if(!socket) return ;
    if(!input){
      if(!usersTyping.includes(user?.id)) return ;
      emitStoppedTyping(socket,{chatID});
      return ;
    }
    if(usersTyping.includes(user?.id)) return ;
    emitTyping(socket,{chatID})

  },[socket ,input,chatID,usersTyping,user?.id]);
  return ;
}

export default useTyping