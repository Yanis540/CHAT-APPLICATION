import emitEvent from "./service/emit"

const emitSeenMessage=(socket,{messageID,chatID})=>{
    emitEvent(socket,'seen_message',{messageID,chatID});

}

export default emitSeenMessage