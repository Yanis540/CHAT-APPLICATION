import Chat from "../../../../models/chatModel.js";
import User from "../../../../models/userModel.js";
import asyncHandler from 'express-async-handler'

/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Creates A chat ( with or without people)
 */
 const add_chat_controller=asyncHandler(async(req,res)=>{
    let {name,userChosenId,groupChat}=req.body;
    let usersIdsArray;
    if(userChosenId) usersIdsArray=[req.user.id,userChosenId];
    else usersIdsArray=[req.user.id];
    let chat=await Chat.create({
        users:usersIdsArray,
        name,
        groupChat:groupChat?groupChat:false,
        admins:[req.user.id],
        superAdmin:req.user.id
    });
    for(let user of usersIdsArray){
        await User.findByIdAndUpdate(user,{
            "$addToSet":{
                "joinedChats":chat.id
            }
        },{new:true})
    }
    res.json({chat})
})
export default add_chat_controller