const onJoinNewChat=(socket,setData)=>{
    socket.on('join_new_chat',({chat})=>{
        setData(prev=>{
            if(!prev?.isChatsForSideBar) return prev; 
            return ({
                ...prev,
                chats:[...prev.chats,chat]
            })
        })

    })
}

export default onJoinNewChat