import asyncHandler from 'express-async-handler';
import { USER_NOT_CHAT_ADMIN } from '../../types/errorTypes.js';

/**
 * 
 * @function Verify if user is a chat admin 
 * @error  {message,cause}
 * @errorTypes {USER_NOT_CHAT_ADMIN}
 * 
 */
const authAdminChat=asyncHandler(async(req,res,next)=>{

    try{
        if(!req.chat) throw new Error('Chat Not Found');
        if(!req.chat.admins.includes(req.user?.id)) throw new Error('Unauthorized For Non Admin',{cause:USER_NOT_CHAT_ADMIN});
        next()
    }
    catch(err){
        // res.status(401);
        throw new Error(err.message,{cause:err.cause})
    }
    
    
})
export default authAdminChat