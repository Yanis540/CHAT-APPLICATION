import { addUserToChatAdminEndPoint, removeUserFromChatEndPoint } from "../../../../Endpoints/endpoints";
import { useRequestFn } from "../../../../hooks/hooks";



const useHandleChatUsers=({addAdmin,token,chatID})=>{
    const endpoint=addAdmin?addUserToChatAdminEndPoint(chatID):removeUserFromChatEndPoint(chatID)
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useHandleChatUsers;