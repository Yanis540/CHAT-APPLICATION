import emitEvent from "./service/emit"

const emitSetActiveChats=(socket, {joinedChats,userId})=>{
    emitEvent(socket,'set_active_chats',({joinedChats,userId}))
}
export default emitSetActiveChats