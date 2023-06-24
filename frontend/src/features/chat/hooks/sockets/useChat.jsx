import { useEffect } from 'react'
import { useRequestFn } from '../../../../hooks/hooks';
import { 
    onAcceptedUsers, 
    onAddAdmins, 
    onDeletedMessage, 
    onRecieveOlderMessages,
    onJoinNewChat, 
    onMessage, 
    onRejectedUsers, 
    onRemoveUsers,
    onSeenMessage, 
} from './functions/socket';
/**
 * useChat  hook.
 * @param endpoint endpoint of the request.
 * @param accessToken The User's accessToken .
 * @param id The User's id .
 * @param socket The User's socket .
 * @param cache The cache values that are stored in localhost .
 * @function useChat : Get's the request , puts cache if it exist , and handles all the fancy sockets such as getting a message , getting older messages etc ... .
 * @returns Object : {
 *  error: { cause , message },
 *  data,
 *  loading
 * }
 */
function useChat( {endpoint,token,userId,socket,cache=null,options}) {
 
    const {error,data,loading,execute,setData,setError}=useRequestFn({endpoint,token:token,options})
    useEffect(()=>{
        if(cache || cache?.id){
            setData(cache);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cache,cache?.id])
    useEffect(()=>{
        if(endpoint){
            execute();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[endpoint]);

    useEffect(()=>{
        if(socket && userId ){
            //! Chat Requests
            onAcceptedUsers(socket,setData)
            onAddAdmins(socket,setData)
            onRejectedUsers(socket,setData)
            onRemoveUsers(socket,setData,userId)

            //! new Chat
            onJoinNewChat(socket,setData)
            

            //! Chat Messaging 
            onMessage(socket,setData)
            onDeletedMessage(socket,setData)
            onRecieveOlderMessages(socket,setData)
            onSeenMessage(socket,setData,userId)


            socket.on('error',({message,cause})=>{
                setError({message,cause})
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[socket,userId])


    return {error,loading,data}
    
}

export default useChat