const onRemoveUsers=(socket,setData,id)=>{
    socket.on('list_removed_users',({usersIds,chatID})=>{
        
        setData(prev=>{
            if(!prev?.isChatsForSideBar && !prev?.isChatContent) return prev
            //! remove chat from the chat sidebar if the current user is removed 

            //! if the request is from the sidebar  update usersIds of the chat  
            /*code */
            if(prev?.isChatsForSideBar){
                return ({
                    ...prev,
                    chats:prev.chats?.map(chat=>chat?.id!==chatID?chat:(
                        {
                            ...chat,
                            usersIds:chat?.usersIds?.filter(userId=>!usersIds.includes(userId))
                        }
                    ))
                })
            }
            //! if the request is from the chat than update the users  

            if(prev?.isChatContent ){
                const newUsers=prev.users?.filter(user=>!usersIds.includes(user._id));
                const newAdmins=prev.admins?.filter(user=>!usersIds.includes(user._id));
                return ({
                    ...prev,
                    users:newUsers,
                    admins:newAdmins
                })
            }
        })
    })
    socket.on('remove_user_from_chat',({chatID})=>{
        setData(prev=>{
            if(!prev?.chats) return prev ; 
            return({
                ...prev,
                chats:prev.chats.filter(chat=>chat.id!==chatID)
            })
        })
    })
    
}
export default onRemoveUsers