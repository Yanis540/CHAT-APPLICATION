const currentUserOnline=async(io,socket)=>{

    //! once the current user gets to know that a certain user X  is online he needs to 
    //! tell to X that he's also online  so send back to him a response 
    socket.on('current_user_online',()=>{
        if(!socket.userId || !socket.activeRooms) return  
        socket.to(socket.activeRooms).emit('on_user_online',({userId:socket.userId,recievedNewUser:false,gotOtherUsers:true}))
    })
}
export default currentUserOnline
