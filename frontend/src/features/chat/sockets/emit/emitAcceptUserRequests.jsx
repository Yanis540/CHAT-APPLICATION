import emitEvent from "./service/emit"

const emitAcceptUserRequests=(socket, {usersIds,chatID})=>{
    emitEvent(socket,'accepted_users',{usersIds,chatID})
}
export default emitAcceptUserRequests