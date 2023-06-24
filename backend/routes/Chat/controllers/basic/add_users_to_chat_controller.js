import Chat from "../../../../models/chatModel.js";
import asyncHandler from 'express-async-handler'

/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Adds Users Into A Room  
 */
 const add_users_to_chat_controller=asyncHandler(async(req,res)=>{
    let {chatID}=req.params;
    let {usersIds}=req.body;
    if(!usersIds || !usersIds.length) throw new Error('No Users Selected');
    let chat=await Chat.findById(chatID);
    let users=[]
    for(let userId of usersIds){
        if(!chat.users.includes(userId)) users.push(userId)
    }
    if(users.length>0){
        const updatedChat=await Chat.findByIdAndUpdate(chat.id,{
            "$addToSet":{
                "requests":{
                    "$each":users
                }
            }
        },{new:true});
    }
    
    res.json({message:'Request Added'})
})

export default add_users_to_chat_controller;
