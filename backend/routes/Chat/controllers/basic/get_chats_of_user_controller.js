import Chat from "../../../../models/chatModel.js";
import User from "../../../../models/userModel.js";
import Message from '../../../../models/messageModel.js';
import asyncHandler from 'express-async-handler'

/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  gets chats   
 */

 const get_chats_of_user_controller=asyncHandler(async(req,res)=>{
    let user=await User.findById(req.user.id).select('-password');
    let chatsUser=user.joinedChats;
    let chats=[]
    for(let chatUser of chatsUser){
        let chat=await Chat.findById(chatUser);
        let chatPhotoURL;
        let chatName;
        if(!chat.groupChat){
            let usersLength=chat.users.length
            if(usersLength===1) {
                chatPhotoURL=req.user.photoURL;
                chatName=req.user.name
            }
            else{
                /*Not A group chat is either the user only , or the user with another person  */
                let user=await User.findById(chat.users.find(id=>id!==req.user.id)).select('-password');
                chatName=user.name
                chatPhotoURL=user.photoURL;
            }
        }else {
            chatName=chat.name;
            chatPhotoURL=chat.photoURL;
        }
        let lastMessageDb;
        let lastMessage;
        try{

            lastMessageDb=await Message.find({chatID:chat.id}).limit(1).sort({"$natural":-1});
            lastMessageDb=lastMessageDb[0]
            const user=await User.findById(lastMessageDb.senderID).select('id name')

            lastMessage={
                id:lastMessageDb._id,
                senderID:lastMessageDb.senderID,
                senderName:user?user.name:"Unkown",
                message:lastMessageDb.message,
                sentHour:lastMessageDb.createdAt,
                seenBy:lastMessageDb.seenBy,
                lastHourSeen:lastMessageDb.updatedAt,
                isFile:lastMessageDb.isFile,
                fileExtension:lastMessageDb.fileExtension,

            }

        }
        catch(err){
            lastMessage=null;
        }

        chats.push({
            id:chat.id,
            chatName,
            photoURL:chatPhotoURL,
            lastMessage,
            groupChat:chat.groupChat,
            usersIds:chat.users
        })
    }
    res.json({chats,isChatsForSideBar:true})
})
export default get_chats_of_user_controller;