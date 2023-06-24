import { useStateValue } from '../../../../../../../../state/StateProvider';
import { useChatValue } from '../../../../../../../../features/chat/chat';
import MessageContent from './components/MessageContent';
import MoreMessage from '../components/MoreMessage';
import SeenAt from '../components/SeenAt';


import {
    CanShowSeen,  
    IsLoggedInUserTheSender
} from '../assets/assets';
import AvatarMessage from './components/AvatarMessage';

function Message({message,nextMessage,previousMessage}) {
    // const {message,user,socket,chatID,loading,nextMessage,previousMessage,users,groupChat}=data
    const [{user,socket}]=useStateValue()
    const [{
        chat:{
          id:chatID='',
          users=[],
          groupChat
        },
        loading,
      }]=useChatValue()
    const isLoggedInUserTheSender=IsLoggedInUserTheSender(message,user);

    
    const {
        canShowSeen,
        NotGroupChatCondition,
        usersWhoSawMessage,
        usersNamesWhoSawMessage
    }=CanShowSeen({message,groupChat,isLoggedInUserTheSender,nextMessage,user,users})
    // disign stuff 

    const dataForMore={message,socket,chatID};
    const dataForMessageContent={isLoggedInUserTheSender,message,nextMessage,previousMessage}
    const dataForSeen={message,NotGroupChatCondition,usersWhoSawMessage,usersNamesWhoSawMessage}

    return (
        <>
            <div className={`flex flex-column  items-end  gap-[5px] relative ${!nextMessage && 'pb-[4px]'}`}>
            
                {
                    !isLoggedInUserTheSender && (
                    <AvatarMessage message={message} nextMessage={nextMessage} /> 
                ) }
                <div className={`flex flex-row  items-center  ${isLoggedInUserTheSender?'justify-end':'justify-start'} flex-1`}>
                    {
                        isLoggedInUserTheSender&&
                        !loading  && 
                        <MoreMessage  {...dataForMore} />
                     }
                    <MessageContent {...dataForMessageContent} /> 
                </div>
                {
                    // isLoggedInUserTheSender&&isLastMessage&& canShowSeen && (
                    canShowSeen&&(<SeenAt {...dataForSeen} />)
                }
            </div>

        </>
    )
}

export default Message