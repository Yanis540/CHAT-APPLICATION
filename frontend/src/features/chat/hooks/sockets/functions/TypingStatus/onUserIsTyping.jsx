import { ACTIONS } from "../../../../../../state/StateProvider"

const {
    SET_USERS_TYPING
}=ACTIONS
const onUserIsTyping=(socket,chatID,dispatch)=>{
    socket.on('user_typing',({userId,chatID:chatIdOfTypingUser})=>{


        if(!chatID || chatIdOfTypingUser!==chatID) return ; 
        dispatch({
            type:SET_USERS_TYPING,
            payload:{userId,isTyping:true}
        })
    })
}
export default onUserIsTyping