import Chat from "../../../../models/chatModel.js";
import asyncHandler from 'express-async-handler'
import User from "../../../../models/userModel.js";

/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Add a User Into A Chat  
 */
 const add_user_to_chat_controller=asyncHandler(async(req,res)=>{
    let {chatID}=req.params;
    let {userId}=req.body;
    if(!userId) throw new Error('No Users Selected');
    if(!await User.findById(userId)) throw new Error(`User With Id : ${userId} Not Found`)
    let chat=await Chat.findById(chatID);
    if(chat.users.includes(userId)) throw new Error('Already In The Chat ')
    const updatedChat=await Chat.findByIdAndUpdate(chat.id,{
        "$addToSet":{
            "requests":userId
        }
    },{new:true});
    
    
    res.json({message:'Request Added'})
})

export default add_user_to_chat_controller;