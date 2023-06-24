import emitEvent from "./service/emit"

const emitTyping=(socket, {chatID})=>{
    emitEvent(socket,'typing',{chatID})
}
export default emitTyping