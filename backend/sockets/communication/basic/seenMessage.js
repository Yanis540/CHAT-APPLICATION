import Message from "../../../models/messageModel.js"
import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js"


const seenMessage=(io,socket)=>{
    socket.on('seen_message',async({messageID,chatID})=>{
        try{
            await authUserSocket(socket);
            await authUserInChatSocket(socket,chatID); 
            const userId=socket.userId;
            const message=await Message.findById(messageID);

            //! preventing to update the message if the user has already seen message
            //! just for protection in the backend should add the frontend code  
            if(message?.seenBy?.includes(userId)) return ;
            const updatedMessage=await Message.findByIdAndUpdate(messageID,{
                "$addToSet":{
                    "seenBy":userId
                }
            },{new:true});
            io.to(chatID).emit('user_seen_message',(
                {
                    messageID,
                    seenBy:updatedMessage?.seenBy,
                    lastHourSeen:updatedMessage?.updatedAt,
                    chatID
                })
            )
        }
        catch(err){
            socket.emit('error',err.message)
        }
    })

}
export default  seenMessage
