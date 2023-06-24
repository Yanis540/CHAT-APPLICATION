import emitEvent from "./service/emit"

const emitRejectUserRequests=(socket, {usersIds,chatID})=>{
    emitEvent(socket,'rejected_users',{usersIds,chatID})
}
export default emitRejectUserRequests