import emitEvent from "./service/emit"

const emitJoinChat=(socket, {chatID,userId})=>{
    emitEvent(socket,'join_chat',({chatID,userId}))
}
export default emitJoinChat