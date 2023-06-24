import { fileExtension } from "../../../../utils/utils";
import emitEvent from "./service/emit"

const emitMessage=(socket, {file,message,chatID})=>{
    if(! message &&  !file ) return ; 
    const data=!file?{
        message
    }:{
        isFile:true,
        fileType:file.type,
        fileExtension:fileExtension(file.name),
        fileName:file.name,
        file
    }
    emitEvent(socket,'message',{data:data,chatID})
}
export default emitMessage