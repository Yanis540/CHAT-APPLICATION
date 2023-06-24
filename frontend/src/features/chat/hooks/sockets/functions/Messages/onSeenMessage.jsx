const onSeenMessage=(socket,setData,currentUserId)=>{
    socket.on('user_seen_message',({messageID,seenBy,lastHourSeen,chatID})=>{
        setData(prev=>{
            if(!prev?.isChatsForSideBar && ! prev?.isChatContent) return prev;
            if(prev.isChatsForSideBar){
                const chats=prev?.chats.map(
                    chat=>{
                        if(chat.id!==chatID || chat.lastMessage?.id!==messageID)
                            return chat;
                        const lastMessage={...chat.lastMessage,seenBy,lastHourSeen};
                        const newChat={
                            ...chat,
                            lastMessage
                        }
                        return newChat;
                       
                    }
                )
                return ({
                    ...prev,
                    chats:chats
                })
            } 
            //! making sure we are on the right chat 
            if(prev.id!==chatID) return prev; 
            const messages=prev?.messages?.map(message=>{
                if(message.id!==messageID) return message;
                const updatedMessage=({
                    ...message,
                    seenBy,
                    lastHourSeen
                })
                return updatedMessage
            });
            return ({
                ...prev,
                messages:messages
            })
        })
    })
}
export default onSeenMessage 