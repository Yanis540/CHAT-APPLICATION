import asyncHandler from 'express-async-handler';
import Chat from '../../models/chatModel.js';
import { USER_NOT_IN_CHAT } from '../../types/errorTypes.js';


/**
 * 
 * @function Verify if the user in the in the chat .
 * @returns : chat in the request Object 
 * @error  {message,cause}
 * @errorTypes {USER_NOT_IN_CHAT}
 */
const authUserInChat=asyncHandler(async(req,res,next)=>{
    let chatID=req.params.chatID;
    try{
        if(!chatID) throw new Error('No Chat Id');
        let chat=await Chat.findById(chatID);
        if(!chat) throw new Error('Chat Not Found');
        if(!req.user?.joinedChats || !req.user.joinedChats.length ||!req.user.joinedChats.includes(chatID) ) throw new Error('Unauthorized',{cause:USER_NOT_IN_CHAT})
        if(!chat.users.includes(req.user.id)) throw new Error('Unauthorized',{cause:USER_NOT_IN_CHAT});
        req.chat=chat;
        next()
    }
    catch(err){
        throw new Error(err.message,{cause:err.cause})
    }
})
export default authUserInChat