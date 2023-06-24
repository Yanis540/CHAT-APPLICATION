import { updateUserPasswordEndPoint } from "../../../Endpoints/endpoints";
import {useRequestFn} from "../../../hooks/hooks.js";


const useUpdatePassword=({token})=>{
    const endpoint=updateUserPasswordEndPoint
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useUpdatePassword;