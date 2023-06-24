import { isSeenByOthers } from "../../../utils";

const messageAndDelay=(lastMessage,user)=>{
    if(!lastMessage) return {message:'',dateToDisplay:undefined};
    const isLastMessageSentByTheCurrentUser=lastMessage?.senderID===user?.id
    const seenByOthers=isSeenByOthers(lastMessage?.seenBy,user?.id,lastMessage?.senderID)
    //! if the last message is not sent  by the user or if it's sent but none has seen it 
    //!    if the lastMessage is not a file show the message  
    //!    else show that a file is sent  
    //!  else just show seen  
    const message= (!isLastMessageSentByTheCurrentUser || (isLastMessageSentByTheCurrentUser && !seenByOthers))?(
        !lastMessage?.isFile  ?(
            lastMessage?.message?.length<=10?lastMessage?.message:lastMessage?.message?.substring(0,10)+'....' 
        ):(
            `${isLastMessageSentByTheCurrentUser?'':lastMessage?.senderName} sent a file`
        )
    ):(
       `Seen` 
    )

    const dateToDisplay=(!isLastMessageSentByTheCurrentUser || (isLastMessageSentByTheCurrentUser && !seenByOthers))?(
        lastMessage.sentHour
    ):(
       lastMessage.lastHourSeen
    )
    return {message,dateToDisplay}
}

export default messageAndDelay