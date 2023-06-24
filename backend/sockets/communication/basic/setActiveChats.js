
const setActiveChats=(io,socket)=>{
    //! join all the rooms and send back to them that he's online 
    socket.on("set_active_chats",({joinedChats,userId})=>{
        socket.userId=userId
        socket.join(userId)
        for(let chatId of joinedChats){ 
            socket.join(chatId);
        }
        socket.activeRooms=joinedChats
        socket.to(socket.activeRooms).emit('on_user_online',({userId,recievedNewUser:true,gotOtherUsers:false}))
    })
}
export default setActiveChats