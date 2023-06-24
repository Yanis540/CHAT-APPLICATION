import { loginEndPoint } from "../../../Endpoints/endpoints"
import {useRequestFn} from "../../../hooks/hooks.js";


const useLogin=(params={})=>{
    const url=loginEndPoint;
    const response=useRequestFn({endpoint:url,options:{params,method:'POST'}})
    return response 
}   
export default useLogin