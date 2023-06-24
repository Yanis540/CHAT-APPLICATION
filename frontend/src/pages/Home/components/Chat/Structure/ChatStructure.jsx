import { useChatValue } from '../../../../../features/chat/chat'
import ChatBody from '../components/Body/ChatBody'
import ChatBodyError from '../components/Body/ErrorComponent/ChatBodyError'
import ChatFooter from '../components/Footer/ChatFooter'
import ChatFooterError from '../components/Footer/ErrorComponent/ChatFooterError'
import ChatHeader from '../components/Header/ChatHeader'
import ChatHeaderError from '../components/Header/ErrorComponent/ChatHeaderError'
import ChatSettings from '../components/Settings/ChatSettings'
import ChatSettingsError from '../components/Settings/ErrorComponent/ChatSettingsError'
import ChatUsers from '../utils/ChatUsers'

function ChatStructure({chat,loading,error,settings}) {
  const [{chat:chatFromState}]=useChatValue();
  return (
    <>
    {
      !settings?(
        <>
          {
            ( 
              ( 
                ( chatFromState&&!loading)|| 
                ( chatFromState&&chat && chat?.id===chatFromState?.id  ) 
              )&&
              (
                !error?.cause && ! error?.message.includes('Chat Not')
              )
            )
            ?(
            <>
              <ChatHeader  /> 
              <ChatBody /> 
              <ChatFooter /> 
            </>
            ):(
              <>
              <ChatHeaderError chatFromState={chatFromState} loading={loading} error={error} chat={chat} /> 
              <ChatBodyError chatFromState={chatFromState} loading={loading} error={error} chat={chat} /> 
              <ChatFooterError chatFromState={chatFromState} loading={loading} error={error} chat={chat} />

            </>
            )
          }
          <ChatUsers /> 
        </>
      ):(
        // if it's settting and not loading and there's no errors 
        ((!loading && chatFromState && chat &&( chat?.id===chatFromState?.id ) && !error )) ?(
          <ChatSettings/> 
        ):(
          <ChatSettingsError chatFromState={chatFromState} loading={loading} error={error} chatID={chat?.id} /> 
        )
      )
    }
    </>
  )
}

export default ChatStructure