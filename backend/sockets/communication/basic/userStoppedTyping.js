import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js"

const userStoppedTyping=(io,socket)=>{
    socket.on('stopped_typing',async({chatID})=>{
        try{
            await authUserSocket(socket)
            await authUserInChatSocket(socket,chatID);
            io.to(chatID).emit('user_stopped_typing',({userId:socket?.userId,chatID}))

        }
        catch(err){
            socket.emit('error',err.message)
        }
    })
}
export default userStoppedTyping
