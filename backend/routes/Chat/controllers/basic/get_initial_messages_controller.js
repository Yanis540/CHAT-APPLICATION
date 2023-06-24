
import asyncHandler from 'express-async-handler'
import { getChatPhotoName, fillMessages, getUsers, getPartialMessages } from './functions/functions.js';

/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  gets messages of user   
 */
 const get_initial_messages_controller=asyncHandler(async(req,res)=>{
    const chat=req.chat;

    const users=await getUsers(chat.users)
    const {chatName,photoURL}=getChatPhotoName({user:req.user,users,chat})


    const messagesDB=await getPartialMessages({chat})
    const messages=await fillMessages({messagesDB,users,chat})
    const returnObject={
        admins:chat.admins, 
        messages,
        users,
        groupChat:chat.groupChat,
        photoURL,
        chatName,
        id:chat?.id,
        isChatContent:true
    }
    res.json(returnObject);
})
export default get_initial_messages_controller;