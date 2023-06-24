import { addUserToChatEndPoint } from "../../../../Endpoints/endpoints";
import { useRequestFn } from "../../../../hooks/hooks";


const useAddUserToChat=({token,chatID})=>{
    const endpoint=addUserToChatEndPoint(chatID)
    
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useAddUserToChat;