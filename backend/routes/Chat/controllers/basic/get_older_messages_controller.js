import Message from '../../../../models/messageModel.js';
import asyncHandler from 'express-async-handler'
import { 
    fillMessages, 
    getUsers ,
    getPartialMessages
} from './functions/functions.js';


/**
 * 
 * @param {(req,res)}  (request,response) @param {(function)}
 * @return : {OlderMessage,isChatContent:true}   
 */
 const get_older_messages_controller=asyncHandler(async(req,res)=>{
    const chat=req.chat;
    
    const {users:usersFromFront=[],message=null}=req.body
    const users=usersFromFront&& usersFromFront.length?
        usersFromFront
      : await getUsers(chat.users)
    ;
   
    const messagesDB=await getPartialMessages({chat,firstMessage})
    
    const olderMessages=await fillMessages({messagesDB,users,chat})
    res.json({olderMessages,isChatContent:true});
})
export default get_older_messages_controller;