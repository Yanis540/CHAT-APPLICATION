import emitEvent from "./service/emit"

const emitMessageFile=(socket,{fileType,fileName,file,chatID})=>{
    const data={
        isFile:true,
        fileType,
        fileName,
        file
    }
    console.log(data)
    emitEvent(socket,'message_file',{data,chatID});

}

export default emitMessageFile