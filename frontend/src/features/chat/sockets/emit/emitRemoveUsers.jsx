import emitEvent from "./service/emit"

const emitRemoveUsers=(socket, {usersIds,chatID})=>{
    emitEvent(socket,'remove_users',{usersIds,chatID})
}
export default emitRemoveUsers