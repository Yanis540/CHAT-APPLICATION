import emitEvent from "./service/emit"

const emitAddAdmins=(socket, {usersIds,chatID})=>{
    emitEvent(socket,'add_admins',{usersIds,chatID})
}
export default emitAddAdmins