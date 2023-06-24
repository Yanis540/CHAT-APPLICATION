import Message from "../../../models/messageModel.js";
import User from "../../../models/userModel.js";
import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js";


const retrieveMessages=(io,socket)=>{
    socket.on('fetch_chat_messages',async({userId,chatID})=>{
        try{
            await authUserSocket(socket);
            await authUserInChatSocket(socket,chatID);
            let chat=socket.chat
            let photoURL;
            let chatName;
            let users=[]
            for(let user of chat.users){
                users.push(await User.findById(user).select('name id photoURL'))
            }
            if(chat.groupChat) {
                photoURL=chat.photoURL;
                chatName=chat.name;
            }
            else{
                let usersLength=users.length;
                if(usersLength===1) {
                    photoURL=socket.user.photoURL;
                    chatName=socket.user.name;
                }
                else{
                    let otherUser=users.find(e=>e.id!==socket.user.id)
                    photoURL=otherUser?.photoURL
                    chatName=otherUser?.name
                }
            }
        
            let messagesDB=await Message.find({chatID:chat.id}).select('-__v -chatID');
            let messages=[]
            for(let message of messagesDB){
                let user=users.filter(user=>user._id===message.senderID)?users.filter(user=>user._id===message.senderID)[0]:null;
                if(user==null) user=await User.findById(message.senderID)
                messages.push({
                    id:message._id, 
                    message:message.message,
                    sentHour:message.createdAt, 
                    lastHourSeen:message.updatedAt, 
                    user,
                    lastHourSeen:message.updatedAt, 
                    chatID:chat.id
                })
            }
            socket.to(chatID).emit('chat_messages_fetched',{messages,users,groupChat:chat.groupChat,photoURL,chatName})
        }
        catch(err){
            socket.emit('error',err.message)
        }
    })

}
export default retrieveMessages
