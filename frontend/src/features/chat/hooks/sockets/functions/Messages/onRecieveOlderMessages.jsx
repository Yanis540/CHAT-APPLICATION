
const onRecieveOlderMessages=(socket,setData)=>{
    socket.on("receive_older_messages",({olderMessages,chatID})=>{
        setData(prev=>{
            if(!prev?.isChatContent)return prev;
            if(prev.id!==chatID || !olderMessages?.length) return prev ; 
            const firstMessage=olderMessages[0]
            // if the firstMessage of the older messages is in the array WE SHOULD NOT UPDATE THE STATE CAUSE IT'S ALREADY IN THERE 
            if(prev.messages?.some(message=>message.id===firstMessage.id)) return prev; 
            const messages=prev?.messages?.length?[...olderMessages,...prev.messages]:olderMessages
            
            return ({
                ...prev,
                messages:messages
            })
            
        })
    })
}
export default onRecieveOlderMessages