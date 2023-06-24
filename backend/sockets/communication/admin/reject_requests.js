const reject_requests=(io,socket)=>{
    socket.on('rejected_users',async({usersIds,chatID})=>{
        // socket.emit('list_rejected_users',{usersIds,chatID})
        io.to(chatID).emit('list_rejected_users',{usersIds,chatID})
    })
}

export default reject_requests