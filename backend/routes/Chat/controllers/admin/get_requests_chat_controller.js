import asyncHandler from 'express-async-handler'
import User from "../../../../models/userModel.js";

/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Get users request 
 */
 const get_requests_chat_controller=asyncHandler(async(req,res)=>{
    let chat=req.chat;
    if(!chat.groupChat) throw new Error('Unauthorized ,  Not A Group Chat')
    let requests=[];
    for(let userId of chat.requests ){
        requests.push(await User.findById(userId).select('id name photoURL'))
    }
    res.json({requests,admins:chat.admins,superAdmin:chat.superAdmin,isChatRequests:true})
})

export default get_requests_chat_controller