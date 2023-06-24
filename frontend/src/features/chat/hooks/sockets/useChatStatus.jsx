import {useEffect} from 'react'
import { emitCurrentUserOnline } from '../../chat';
import { 
  //! online status 
  onUserOnline, 
  onUserOffline, 

  //! typing  status 
  onUserIsTyping, 
  onUserStoppedTyping 
} from './functions/socket';
/**
 * UseChatStatus  hook.
 * @param currentUserId  The user ID .
 * @param socket The User Socket .
 * @function : Handle Online && Offline status .
 * @function : Handle Users Typing. 
 */
function useChatStatus({currentUserId,socket,dispatch,chatID}) {
  
  //! Online Status
  useEffect(()=>{
    if(socket && currentUserId){
      //! everytime the socket is generated we need to tell other users that the current one is online 
      emitCurrentUserOnline(socket);

      //? Online Status 
      onUserOnline(socket,currentUserId,dispatch);
      onUserOffline(socket,currentUserId,dispatch);
    }
  },[socket,currentUserId,dispatch]);

  //! Typing Status 
  useEffect(()=>{
    if(socket){
      onUserIsTyping(socket,chatID,dispatch)
      onUserStoppedTyping(socket,chatID,dispatch)
    }
  },[socket,chatID,dispatch])
}

export default useChatStatus