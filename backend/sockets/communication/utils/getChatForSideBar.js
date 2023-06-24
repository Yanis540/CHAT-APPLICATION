import Message from "../../../models/messageModel.js";
import User from "../../../models/userModel.js";

const getGroupChatSideBar=async(socket)=>{
    const chat=socket.chat;
    let lastMessageDb;
    let lastMessage;
    try{

        lastMessageDb=await Message.find({chatID:chat.id}).limit(1).sort({"$natural":-1});
        lastMessageDb=lastMessageDb[0]
        const user=await User.findById(lastMessageDb.senderID).select('id name')
        lastMessage={
            id:lastMessageDb.id,
            senderID:lastMessageDb.senderID,
            senderName:user?user.name:"Unkown",
            message:lastMessageDb.message,
            sentHour:lastMessageDb.createdAt,
            isFile:lastMessageDb.isFile,
        }

    }
    catch(err){
        lastMessage=null;
    }
    return {
        id:chat.id,
        chatName:chat.name,
        photoURL:chat.photoURL,
        usersIds:chat.users,
        lastMessage,
        groupChat:chat.groupChat
    }
}
const getNonGroupChatSideBar=async(socket)=>{
    const chat=socket.chat;
    let lastMessageDb;
    let lastMessage;
    let chatName;
    let photoURL;
    try{
        if(!chat) throw new Error('No Chat')
        if(chat?.users.length===1){
            chatName=socket.user.name
            photoURL=socket.user.photoURL
        }
        else{
            const otherUserId=chat.users.find(id=>id.toHexString()!==socket.user?._id.toHexString());
            const otherUser=await User.findById(otherUserId).select('-password');
            chatName=otherUser.name;
            photoURL=otherUser.photoURL;
        }
        lastMessageDb=await Message.find({chatID:chat.id}).limit(1).sort({"$natural":-1});
        lastMessageDb=lastMessageDb[0]
        const user=await User.findById(lastMessageDb.senderID).select('id name')
        
        lastMessage={
            id:lastMessageDb.id,
            senderID:lastMessageDb.senderID,
            senderName:user?user.name:"Unkown",
            message:lastMessageDb.message,
            sentHour:lastMessageDb.createdAt,
            seenBy:lastMessageDb.seenBy,
            lastHourSeen:lastMessageDb.updatedAt,
            chatID:chat.id
        }

    }
    catch(err){
        lastMessage=null;
    }
    return {
        id:chat.id,
        chatName:chatName,
        photoURL:photoURL,
        usersIds:chat.users,
        lastMessage,
        groupChat:chat.groupChat
    }
}
export {
    getGroupChatSideBar,
    getNonGroupChatSideBar
}