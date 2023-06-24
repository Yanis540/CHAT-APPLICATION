import { getOtherUserEndPoint } from "../../../Endpoints/endpoints";
import { useRequestFn } from "../../../hooks/hooks.js";


const useGetOtherUser=({token,params={}})=>{
    const endpoint=getOtherUserEndPoint
    return useRequestFn({endpoint,token,options:{params,method:'GET'}})
}
export default useGetOtherUser;