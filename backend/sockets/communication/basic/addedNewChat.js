import Chat from "../../../models/chatModel.js";
import { authUserSocket } from "../../middlewares/authMiddlware.js";
import { getChatSideBar } from "../utils/getChat.js";

const addedNewChat=(io,socket)=>{
    socket.on('created_new_chat',async({chatID})=>{
        try{
            await authUserSocket(socket)
            socket.chat=await Chat.findById(chatID)
            const chatToSend=await getChatSideBar(socket);

            if(socket.chat?.groupChat) return socket.to(chatToSend?.usersIds).emit('join_new_chat',({chat:chatToSend}))
            
            if( socket.chat?.users?.length ===1) return socket.to(chatToSend?.usersIds).emit('join_new_chat',({chat:chatToSend}));

            // we are doing duo converstion
            socket.emit('join_new_chat',({chat:chatToSend}));
            const usersIdsFiltered=chatToSend?.usersIds?.filter(id=>id.toHexString()!== socket.user?._id.toHexString())??[];
            const usersIdsToSend=usersIdsFiltered?.map(id=>id.toHexString());
            io
                .to(usersIdsToSend)
                .emit('join_new_chat',(
                    {
                        chat:{
                            ...chatToSend,
                            chatName:socket?.user?.name,
                            photoURL:socket?.user?.photoURL,
                        }
                    }
                ));
        }
        catch(err){
            socket.emit('error',err.message)
        }
    })
}
export default addedNewChat
