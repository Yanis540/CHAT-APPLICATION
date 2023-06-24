import emitEvent from "./service/emit"

const emitGetOlderMessages=(socket, {firstMessage,chatID,users})=>{
    emitEvent(socket,'get_older_messages',({firstMessage,chatID,users}))
}
export default emitGetOlderMessages