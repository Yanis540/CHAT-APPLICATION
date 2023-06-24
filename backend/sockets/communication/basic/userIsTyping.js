import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js"

const userIsTyping=(io,socket)=>{
    socket.on('typing',async({chatID})=>{
        try{
            await authUserSocket(socket)
            await authUserInChatSocket(socket,chatID);
            io.to(chatID).emit('user_typing',({userId:socket?.userId,chatID}))

        }
        catch(err){
            socket.emit('error',err.message)
        }
    })
}
export default  userIsTyping
    
