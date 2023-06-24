import emitEvent from "./service/emit"

const emitCurrentUserOnline=(socket)=>{
    emitEvent(socket,'current_user_online')
}
export default emitCurrentUserOnline