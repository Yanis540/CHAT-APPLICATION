import Message from "../../../models/messageModel.js"
import User from "../../../models/userModel.js"
import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js"


const deleteMessage=(io,socket)=>{
    socket.on('delete_message',async({messageId,chatID})=>{
        try{
            await authUserSocket(socket)
            await authUserInChatSocket(socket,chatID)
            const message=await Message.findById(messageId).select('id senderID')
            // let sender=await User.findById(message.senderID)
            if(message.senderID.toHexString()!==socket.user._id.toHexString()) throw new Error('Unauthorized Action')
            const deletedMessage=await Message.findByIdAndRemove(messageId);
            let lastMessage;
            try{
                let lastMessageDb=await Message.find({chatID}).limit(1).sort({"$natural":-1});
                lastMessageDb=lastMessageDb[0]
                let lastSender=await User.findById(lastMessageDb.senderID)
                lastMessage={
                    id:lastMessageDb.id,
                    senderID:lastMessageDb.senderID,
                    senderName:lastSender?lastSender.name:"Unkown",
                    message:lastMessageDb.message,
                    sentHour:lastMessageDb.createdAt,
                    seenBy:lastMessageDb.seenBy,
                    lastHourSeen:lastMessageDb.updatedAt,
                    chatID
                }
            }
            catch(err){
                lastMessage=null;
            }
            io.to(chatID).emit('deleted_message',({messageId,lastMessage,chatID}))
        }
        catch(err){
            socket.emit('error',err.message)
        }
    })

}
export default deleteMessage
