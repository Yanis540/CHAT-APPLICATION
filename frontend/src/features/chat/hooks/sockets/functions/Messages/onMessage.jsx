const onMessage=(socket,setData)=>{
    socket.on("message",({message,chatID})=>{
        setData(prev=>{
            if(!prev?.isChatsForSideBar && ! prev?.isChatContent)return prev;
            if(prev.isChatContent)return ({
                ...prev,
                messages:[...prev.messages,message]
            })
            const chats=prev.chats.map(chat=>chat.id!==chatID?chat:{
                ...chat,
                lastMessage:{
                    id:message?.id,
                    senderID:message?.user?._id,
                    senderName:message?.user?.name,
                    message:message?.message,
                    sentHour:message?.sentHour,
                    seenBy:message?.seenBy,
                    isFile:message?.isFile,
                    lastHourSeen:message?.lastHourSeen,
                }
            })
            return({
                ...prev,
                chats:chats
            })
        })
    })
}
export default onMessage