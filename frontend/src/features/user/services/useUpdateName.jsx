import { updateUserNameEndPoint } from "../../../Endpoints/endpoints";
import {useRequestFn} from "../../../hooks/hooks.js";


const useUpdateName=({token})=>{
    const endpoint=updateUserNameEndPoint
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useUpdateName;