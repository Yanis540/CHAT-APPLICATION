import Message from "../../../models/messageModel.js";
import { authUserSocket ,authUserInChatSocket} from "../../middlewares/authMiddlware.js"

const onMessageFile=(io,socket)=>{
    socket.on('message_file',async({data,chatID})=>{
        try{
            await authUserSocket(socket);
            await authUserInChatSocket(socket,chatID);
            const userId=socket.user?._id?socket.user._id:socket.user?.id
            const messageDb=await Message.create({
                senderID:userId, 
                chatID,
                seenBy:[userId],
                ...data
            })
            io.to(chatID).emit('message',{message:{
                id:messageDb._id,
                sentHour:messageDb.createdAt,
                user:socket.user,
                seenBy:messageDb?.seenBy,
                lastHourSeen:messageDb.createdAt,
                isFile:messageDb.isFile ,
                file:messageDb.file ,
                fileName:messageDb.fileName,
                fileType:messageDb.fileType,
                fileExtension:messageDb.fileExtension,
            },chatID})
        }
        catch(err){
            socket.emit('error',({message:err.message,cause:err.cause}))
            
        }
    })
}
export default onMessageFile