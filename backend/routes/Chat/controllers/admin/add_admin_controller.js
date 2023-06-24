
import Chat from "../../../../models/chatModel.js";
import asyncHandler from 'express-async-handler'
import User from "../../../../models/userModel.js";





/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Add Admins 
 */

 const add_admin_controller=asyncHandler(async(req,res)=>{
    let {usersIds}=req.body;
    if(!usersIds || !usersIds?.length) throw new Error('Need To Add users');
    let chat=req.chat
    for(let userId of usersIds){
        if(!chat.users.includes(userId)) throw new Error(`User With ID ${userId} Not in the group`) 
    }
    const chatUpdated=await Chat.findByIdAndUpdate(req.params.chatID,{
        "$addToSet":{
            "admins":{
                "$each":usersIds
            }
        }
    },{new:true})
    let newAdmins=[]
    for(let user of usersIds){
        newAdmins.push(await User.findById(user).select('name email id photoURL'));
    }
    res.json(newAdmins)
    
})
export default add_admin_controller