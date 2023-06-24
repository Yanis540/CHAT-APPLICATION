
const onDeletedMessage=(socket,setData)=>{
    socket.on('deleted_message',({messageId,lastMessage,chatID})=>{
        setData(prev=>{
            if(!prev.isChatsForSideBar && ! prev.isChatContent) return prev; 

            if(prev.isChatsForSideBar){
                const chats=prev.chats.map(chat=>chat.id!==chatID?chat:({
                    ...chat, 
                    lastMessage:lastMessage
                }))
                return ({
                    ...prev,
                    chats
                })
            } 
            // handle for the chat messages 
            const messages=prev.messages?.filter(message=>message.id!==messageId)
            return ({
                ...prev,
                messages:messages
            })
        })
    })
}
export default onDeletedMessage