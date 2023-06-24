import { addChatEndPoint } from "../../../../Endpoints/endpoints.js";
import { useRequestFn } from "../../../../hooks/hooks.js";


/**
 * UseAddChat  hook.
 * @param endpoint Server end point .
 * @param params Request Params (Query params /?q=something) .
 */
const useAddChat=({token})=>{
    const endpoint=addChatEndPoint
    return useRequestFn({endpoint:endpoint,token,options:{method:'POST'}})
}
export default useAddChat;