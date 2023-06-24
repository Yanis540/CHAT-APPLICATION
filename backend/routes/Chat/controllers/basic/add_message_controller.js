import Message from '../../../../models/messageModel.js';
import asyncHandler from 'express-async-handler'

/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Adds Message Into A Room  
 */
const  add_message_controller=asyncHandler(async(req,res)=>{
    let chat=req.chat;
    let {message}=req.body;
    if(!message) throw new Error("Can't send Empty Message")
    let messageDb=await Message.create({
        message,
        senderID:req.user.id, 
        chatID:chat.id
    })
    res.json({
        id:messageDb.id,
        message,
        sentHour:messageDb.createdAt,
        user:req.user
    })
})


export default add_message_controller