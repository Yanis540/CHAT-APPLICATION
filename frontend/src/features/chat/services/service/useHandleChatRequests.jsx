import { acceptChatRequestsEndPoint, rejectChatRequestsEndPoint } from "../../../../Endpoints/endpoints";
import { useRequestFn } from "../../../../hooks/hooks";



const useHandleChatRequests=({add,token,chatID})=>{
    //! settings up the url 
    const endpoint=add?acceptChatRequestsEndPoint(chatID):rejectChatRequestsEndPoint(chatID)
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useHandleChatRequests;