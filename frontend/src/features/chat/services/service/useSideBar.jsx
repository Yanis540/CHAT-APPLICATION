import { siderBarChatsEndPoint } from "../../../../Endpoints/endpoints";
import { useChat } from "../../chat";



/**
 * useSideBar  hook.
 * @param token  : AccessToken.
 * @param socket : socket object  .
 * @param userId : user id  .
 */
const useSideBar=({token,userId,socket})=>{
    const endpoint=siderBarChatsEndPoint
    return useChat({endpoint:endpoint,token,userId,socket,options:{method:'GET'}})
}
export default useSideBar;