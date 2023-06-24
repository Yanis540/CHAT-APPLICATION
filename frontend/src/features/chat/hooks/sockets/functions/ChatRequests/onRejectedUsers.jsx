const onRejectedUsers=(socket,setData)=>{
    socket.on('list_rejected_users',({usersIds,chatID})=>{
        setData(prev=>{
            if(!prev.isChatRequests ) return prev;
            return {
                ...prev,
                requests:prev.requests?.filter(user=>!usersIds.includes(user._id))
            }
        })
    })
    
}
export default onRejectedUsers