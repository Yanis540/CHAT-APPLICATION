import Message from "../../../models/messageModel.js";
import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js"

const onMessage=(io,socket)=>{
    // add the authUser + authUserInRoom
    // user should be in the socket but anyway  
    socket.on('message',async({data,chatID})=>{
        // user id should be stored inside the token or socket 
   
        try{
            await authUserSocket(socket);
            await authUserInChatSocket(socket,chatID);
            if(!data.isFile && !data.message ) throw new Error("Can't send an empty message"); 
            if(data.isFile && (! data.fileType  || !data.fileName || ! data.fileExtension  )) throw new Error("Can't send file ");
            const chat=socket.chat;
            const userId=socket.user?._id?socket.user._id:socket.user?.id
            const messageDb=await Message.create({
                senderID:userId, 
                chatID:chat?._id,
                seenBy:[userId],
                ...data
            })
            await Message.findByIdAndUpdate(messageDb.id,{
                fileURL:`${process.env.FRONTEND_URLS}/${messageDb.id}`
            })
            const message={
                id:messageDb.id,
                message:messageDb.message,
                sentHour:messageDb.createdAt,
                user:{
                    photoURL:socket.user.photoURL,
                    email:socket.user.email,
                    name:socket.user.name,
                    _id:socket.userId
                },
                seenBy:messageDb?.seenBy?.map(id=>id.toHexString())??[],
                lastHourSeen:messageDb.createdAt,
                isFile:messageDb.isFile ,
                file:messageDb.file,
                fileName:messageDb.fileName,
                fileType:messageDb.fileType,
                fileExtension:messageDb.fileExtension,
                fileURL:messageDb.fileURL,
            }
            io.to(chatID).emit('message',{message:message,chatID})
        }
        catch(err){
            socket.emit('error',{message:err.message,cause:err.cause})
        }


    })
}

export default  onMessage
