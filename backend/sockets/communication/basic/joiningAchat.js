const joiningAchat=(io,socket)=>{
    // add the authUser + authUserInRoom ( that will ensure that the user is inside the room )
    // user should be in the socket but anyway 
    socket.on('join_chat',async({chatID,userId})=>{
        socket.join(userId)
        socket.userId=userId
        socket.join(chatID);
        socket.activeRoom=chatID
        socket.emit('joined_chat',chatID);

    })

}

export default joiningAchat
