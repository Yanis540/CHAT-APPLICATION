import { getInitialChatMessagesEndPoint } from "../../../../Endpoints/endpoints";
import { useChat } from "../../chat";



/**
 * useChatBody  hook.
 * @param token  : AccessToken.
 * @param socket : socket object  .
 * @param userId : user id  .
 */
const useChatBody=({token,userId,socket,chatID,chat})=>{
    const endpoint=getInitialChatMessagesEndPoint(chatID)
    return useChat({endpoint:endpoint,token,userId,socket,cache:chat,options:{method:'GET'}})
}
export default useChatBody;