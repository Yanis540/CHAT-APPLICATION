import { ACTIONS } from "../../../../../../state/StateProvider"

const {
    SET_USERS_TYPING
}=ACTIONS
const onUserStoppedTyping=(socket,chatID,dispatch)=>{
    socket.on('user_stopped_typing',({userId,chatID:chatIdOfTypingUser})=>{


        if(!chatID|| chatIdOfTypingUser!==chatID ) return ; 
        dispatch({
            type:SET_USERS_TYPING,
            payload:{userId,isTyping:false}
        })
    })
}
export default onUserStoppedTyping