import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js";
import { 
    fillMessages, 
    getPartialMessages, 
    getUsers 
} from "../../../routes/Chat/controllers/basic/functions/functions.js";


const getOlderMessages=(io,socket)=>{
    socket.on('get_older_messages',async({chatID,users:usersFromFront,firstMessage=null})=>{
        try{
            await authUserSocket(socket)
            await authUserInChatSocket(socket,chatID)
            const chat=socket.chat;
    
            const users=usersFromFront&& usersFromFront.length?
                usersFromFront
              : await getUsers(chat.users)
            ;
            const messagesDB=await getPartialMessages({chat,firstMessage ,numberOfMessagesToFetch:10})

            const olderMessages=await fillMessages({messagesDB,users,chat})
            socket.emit('receive_older_messages',({olderMessages,chatID}))
        }catch(err){
            socket.emit('error',({message:err.message,cause:err.cause}))
        }

    })
}
export default getOlderMessages