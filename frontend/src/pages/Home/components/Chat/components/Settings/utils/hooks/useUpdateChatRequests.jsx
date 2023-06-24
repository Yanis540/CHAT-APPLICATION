import {useEffect} from 'react'
import { toast } from 'react-toastify'
import { emitAcceptUserRequests, emitRejectUserRequests } from '../../../../../../../../features/chat/chat'

function useUpdateChatRequests({data,error,add,setAdd,socket,usersIds,chatID,setSelectedUsersId,array,handleRequests}) {
    useEffect(()=>{
      if(error){
        toast.error(error.message)
        setAdd(null)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])
    useEffect(()=>{

      if(data){
        array.map(element=>element.checkBox.checked=false);
        if(!add) emitRejectUserRequests(socket,{usersIds,chatID})
        else emitAcceptUserRequests(socket,{usersIds,chatID})
        setSelectedUsersId(new Set());
        setAdd(null)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error,data])
    useEffect(()=>{

      if(add!==null){
        const someFunction=async()=>{
          await handleRequests({usersIds})
        }
        someFunction()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[add])
}

export default useUpdateChatRequests