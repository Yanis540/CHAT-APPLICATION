import Chat from "../../../../models/chatModel.js";
import asyncHandler from 'express-async-handler'



/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Remove Requests 
 */
 const reject_users_controller=asyncHandler(async(req,res)=>{
    let {usersIds}=req.body;
    let {chatID}=req.params;
    // check if the user
    if(!usersIds||usersIds?.length===0) throw new Error('Invalid Action');
    let chat=await Chat.findById(chatID);
    const updatedChat=await Chat.findByIdAndUpdate(chat.id,{
        "$pull":{
            "requests":{
                "$in":usersIds
            }
        }
    },{new:true});
    res.json(updatedChat)
})

export default reject_users_controller