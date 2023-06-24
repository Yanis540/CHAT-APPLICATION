import Chat from "../../../../models/chatModel.js";
import User from "../../../../models/userModel.js";
import asyncHandler from 'express-async-handler'


/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 *  Accepts users request 
 */
 const accept_users_controller=asyncHandler(async(req,res)=>{
    let {usersIds}=req.body;
    let {chatID}=req.params;
    // check if the user
    if(!usersIds||usersIds?.length===0) throw new Error('Invalid Action');
    let chat=await Chat.findById(chatID);
    const updatedChat=await Chat.findByIdAndUpdate(chat.id,{
        "$addToSet":{
            "users":{
                "$each":usersIds
            }
        },
        "$pull":{
            "requests":{
                "$in":usersIds
            }
        }
    },{new:true});
    let newUsers=[]
    for(let userId of usersIds ){
        newUsers.push(await User.findByIdAndUpdate(userId,{
            "$addToSet":{
                "joinedChats":chat.id
            }
        }).select('-password -createdAt -updatedAt ')
        )
    }
    res.json(updatedChat)
})
export default accept_users_controller