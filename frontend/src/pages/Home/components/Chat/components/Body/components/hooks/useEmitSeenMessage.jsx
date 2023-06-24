import {useEffect} from 'react'
import { emitSeenMessage } from '../../../../../../../../features/chat/chat';

function useEmitSeenMessage({messages,user,chatID,socket,ref}) {
    useEffect(()=>{
        const messagesLength=messages?.length?messages?.length:null;

        if( messagesLength && user?.id && chatID && !messages[messagesLength-1].seenBy?.includes(user?.id)){
            emitSeenMessage(socket,{messageID:messages[messagesLength-1].id,chatID})
        }
    },[messages,socket,user?.id,chatID])
}

export default useEmitSeenMessage