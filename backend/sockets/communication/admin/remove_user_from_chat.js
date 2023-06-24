const remove_user_from_chat=(io,socket)=>{
    socket.on('remove_users',({usersIds,chatID})=>{
        io.to(usersIds).emit('remove_user_from_chat',({chatID}))
        io.to(chatID).emit('list_removed_users',{usersIds,chatID})
    })
}
export default remove_user_from_chat;