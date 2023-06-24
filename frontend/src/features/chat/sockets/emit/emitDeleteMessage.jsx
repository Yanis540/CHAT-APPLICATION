import emitEvent from "./service/emit"

const emitDeleteMessage=(socket, {messageId,chatID})=>{
    emitEvent(socket,'delete_message',({messageId,chatID}))
}
export default emitDeleteMessage