import jwt from 'jsonwebtoken'
import Chat from '../../models/chatModel.js';
import Token from '../../models/tokenModel.js';

import User from "../../models/userModel.js";
import { 
    INVALID_ACCESS_TOKEN ,
    ACCESS_TOKEN_UNAUTHORIZED ,
    USER_NOT_IN_CHAT,
} from '../../types/errorTypes.js';

// import asyncHandler from 'express-async-handler';

/**
 * 
 * @param socket :  socket 
 * @does Verify if the accessToken is valid or not 
 * @return socket.user
 * @error  {message,cause}
 */
const authUserSocket=async(socket)=>{
    let token;
    try{
        if(!socket.handshake.headers || ! socket.handshake.headers.authorization || ! socket.handshake.headers.authorization.startsWith('Bearer') ) throw new Error('Unauthorized');
        token=socket.handshake.headers.authorization.split(' ')[1];
        let decode;

        try{
            decode=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        }catch(err){
            throw new Error('Invalid/ Expired  Token',{cause:INVALID_ACCESS_TOKEN})
        }

        let user=await User.findById(decode.id).select('-password')
        if(!user) throw new Error('Invalid User ');
        
        try{
            const tokenFromDb=await Token.findOne({token:token,userId:user?.id})
            if(!tokenFromDb) throw new Error('Unauthorized')

        }catch(err){
            throw new Error(err.message,{cause:ACCESS_TOKEN_UNAUTHORIZED})
        }

        socket.user=user;
    }
    catch(err){
        socket.emit('error',{message:err.message,cause:err.cause})
    }
}

/**
 * 
 * @param socket :  socket 
 * @param chatID :  ChatID 
 * @does Verify if the user is in the chat  
 * @return socket.chat
 * @error {message,cause}
 */
let authUserInChatSocket=async(socket,chatID)=>{
    try{
        if(!chatID) throw new Error('No Chat Id');
        let chat=await Chat.findById(chatID);
        if(!chat) throw new Error('Chat Not Found');
        try{
            if(!socket.user?.joinedChats || !socket.user.joinedChats.length ||!socket.user.joinedChats.includes(chatID) ) throw new Error('Unauthorized')
            if(!chat.users.includes(socket.user.id)) throw new Error('Unauthorized');
        }catch(err){
            throw new Error(err.message,{cause:USER_NOT_IN_CHAT})
        }
        socket.chat=chat;

    }
    catch(err){
        socket.emit('error',{message:err.message,err:err.cause})
    }
}
export {
    authUserSocket,
    authUserInChatSocket
}