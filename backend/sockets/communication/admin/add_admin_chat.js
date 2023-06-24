const add_admin_chat=(io,socket)=>{
    socket.on('add_admins',({usersIds,chatID})=>{
        io.to(chatID).emit('list_new_admins',{usersIds,chatID})
    })
}
export default add_admin_chat