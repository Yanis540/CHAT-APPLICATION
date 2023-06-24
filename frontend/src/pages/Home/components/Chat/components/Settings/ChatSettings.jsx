import { useEffect } from 'react'
import {toast} from 'react-toastify'

// COMPONENTS


import { useChatSettings, useChatValue } from '../../../../../../features/chat/chat';
import { useStateValue } from '../../../../../../state/StateProvider'
import ChatSettingsError from './ErrorComponent/ChatSettingsError'
import { Spinner } from '../../../../../../layouts/layouts';
import Settings from './Settings';

function ChatSettings() {
  const [{socket,user}]=useStateValue()
  const [{chat:{id:chatID}}]=useChatValue();
  const {data,loading,error}=useChatSettings({token:user?.accessToken,userId:user?.id,socket,chatID});
  const {requests=[],superAdmin=''}=data || {}


  useEffect(()=>{
    if(error) toast.error(error.message)
  },[error])


  return (
    <>
    {
      !data &&(error || loading) ?(
        loading?(
          <Spinner />
        ):(

          <ChatSettingsError loading={loading} error={error} chatID={chatID} />
        )
      ):(
        <>
          <Settings requests={requests} superAdmin={superAdmin}/>
        </>
      )
    }
    </>

  )
}

export default ChatSettings