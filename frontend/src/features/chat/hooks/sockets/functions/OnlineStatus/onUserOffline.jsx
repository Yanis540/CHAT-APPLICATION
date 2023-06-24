import { ACTIONS } from "../../../../../../state/StateProvider"

const {
    SET_USERS_ONLINE,
    SET_USERS_TYPING
}=ACTIONS
const onUserOffline=(socket,id,dispatch)=>{
    socket.on('on_user_offline',(userId)=>{
        if(userId===id) return ;
        dispatch({
            type:SET_USERS_ONLINE,
            payload:{isOnline:false,userId}
        })
        dispatch({
            type:SET_USERS_TYPING,
            payload:{userId,isTyping:false}
        })

    })

}
export default onUserOffline