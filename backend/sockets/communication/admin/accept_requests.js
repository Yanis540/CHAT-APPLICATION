import User from "../../../models/userModel.js";
import { authUserInChatSocket, authUserSocket } from "../../middlewares/authMiddlware.js";
import { getChatSideBar } from "../utils/getChat.js";

const accept_requests=(io,socket)=>{
    socket.on('accepted_users',async({usersIds,chatID})=>{
        try{
            await authUserSocket(socket);
            await authUserInChatSocket(socket,chatID);
            const chatForAcceptedUsersSideBar=await getChatSideBar(socket);
            io.to(usersIds).emit('join_new_chat',{chat:chatForAcceptedUsersSideBar})
            let users=[];
            for(let userId of usersIds){
                users.push(await User.findById(userId).select('name _id photoURL') )
            }
            io.to(chatID).emit('list_accepted_users',{users,usersIds,chatID})
        }
        catch(err){
            socket.emit('error',err.message)
        }

    })
}
export default accept_requests