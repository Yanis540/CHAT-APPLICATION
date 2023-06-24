

import Chat from "../../../../models/chatModel.js";
import asyncHandler from 'express-async-handler'
import User from "../../../../models/userModel.js";




/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Remove People from chat 
 */
 const remove_user_controller=asyncHandler(async(req,res)=>{
    let {usersIds=[]}=req.body
    if(!usersIds || !usersIds?.length) throw new Error('No Users Selected');
    let {chatID}=req.params;
    let chat=req.chat
    for(let userId of usersIds){
        if(!chat.users.includes(userId)) throw new Error(`User(${userId}) Not In The Chat`);
        if(userId===chat.superAdmin) throw new Error('Can Not Delete Super User' );
        const userUpdated=await User.findByIdAndUpdate(userId,{
            "$pull":{
                "joinedChats":chatID
            }
        },{new:true});
    }
    const updatedChat=await Chat.findByIdAndUpdate(chatID,{
        "$pullAll":{
            "users":usersIds,
            "admins":usersIds
        },
    },{new:true})
    res.json({chat:updatedChat,usersIds})
})

export default remove_user_controller