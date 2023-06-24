import {useEffect} from 'react'
import { toast } from 'react-toastify'
import { emitAddAdmins, emitRemoveUsers } from '../../../../../../../../features/chat/chat'
function useUpdateChatUsers({
    data,
    error,
    setAddAdmin,
    setSelectedUsersId,
    socket,
    usersIds,
    chatID,
    array,
    addAdmin,
    handleChatUsers}) {
    useEffect(()=>{
      if(error){
        toast.error(error.message)
        setAddAdmin(null)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])
      
    useEffect(()=>{
      if(data){
          
        array.map(element=>element.checkBox.checked=false);
        if(!addAdmin) emitRemoveUsers(socket,{usersIds,chatID})
        else emitAddAdmins(socket,{usersIds,chatID})

        setSelectedUsersId(new Set());
        setAddAdmin(null)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error,data])
    
    useEffect(()=>{

    if(addAdmin!==null){
      const someFunction=async()=>{
        await handleChatUsers({usersIds})
      }
      someFunction()
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[addAdmin])
}

export default useUpdateChatUsers