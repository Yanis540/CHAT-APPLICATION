import emitEvent from "./service/emit"

const emitStoppedTyping=(socket, {chatID})=>{
    emitEvent(socket,'stopped_typing',{chatID})
}
export default emitStoppedTyping