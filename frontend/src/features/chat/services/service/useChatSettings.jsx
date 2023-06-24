import { getChatRequestsEndPoint } from "../../../../Endpoints/endpoints";
import { useChat } from "../../chat";



/**
 * useChatSettings  hook.
 * @param token  : AccessToken.
 * @param socket : socket object  .
 * @param userId : user id  .
 */
const useChatSettings=({token,userId,socket,chatID})=>{
    const endpoint=getChatRequestsEndPoint(chatID)
    return useChat({endpoint:endpoint,token,userId,socket,options:{method:'GET'}})
}
export default useChatSettings;