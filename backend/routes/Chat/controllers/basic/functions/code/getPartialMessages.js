import Message from "../../../../../../models/messageModel.js";

/**
 * 
 * @param chat :  chat 
 * @param firstMessage :  first Message 
 * @return 20 last messages 
 * @error  {message,cause}
 */
const getPartialMessages=async({chat,firstMessage,numberOfMessagesToFetch=20})=>{
    let messagesDB=await Message.find(
        {
            chatID:chat.id,
            createdAt:{
             '$lt':new Date(firstMessage?.sentHour??new Date())
            }
        }).sort({createdAt:-1}).limit(numberOfMessagesToFetch);
    messagesDB?.sort((a,b)=>a.createdAt-b.createdAt)
    return messagesDB;
}
export default getPartialMessages