import { updateUserPhotoEndPoint } from "../../../Endpoints/endpoints";
import {useRequestFn} from "../../../hooks/hooks.js";


const useUpdatePhoto=({token})=>{
    const endpoint=updateUserPhotoEndPoint
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useUpdatePhoto;