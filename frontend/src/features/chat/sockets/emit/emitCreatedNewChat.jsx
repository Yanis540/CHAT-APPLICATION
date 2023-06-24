import emitEvent from "./service/emit"

const emitCreatedNewChat=(socket, {chatID})=>{
    emitEvent(socket,'created_new_chat',({chatID}))
}
export default emitCreatedNewChat