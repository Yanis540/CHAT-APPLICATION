const onAcceptedUsers=(socket,setData)=>{
    socket.on('list_accepted_users',({users,usersIds,chatID})=>{
        setData(prev=>{
           //!  once you accepted user update the users list in the chat remove the requests 
           //! for the siderbar just add those people ids to the usersIds 
            if(!prev?.isChatContent && !prev?.isChatRequests && !prev?.isChatsForSideBar) return prev;
            if(prev?.isChatsForSideBar)return({
                ...prev,
                chats:prev?.chats?.map(chat=>chat.id!==chatID?chat:({
                    ...chat,
                    usersIds:chat?.usersIds?[...chat?.usersIds,usersIds]:[usersIds]
                }))
            })
            //! update requests
            if(prev?.isChatRequests) return ({
                ...prev,
                requests:prev.requests?.filter(user=>!usersIds.includes(user._id))
            })
            // update the state for of the Chat component 
            return ({
                ...prev, 
                users:[...prev.users,...users]
            })
        })
    })
}

export default onAcceptedUsers