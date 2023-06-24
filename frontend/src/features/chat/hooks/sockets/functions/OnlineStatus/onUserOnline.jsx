import { ACTIONS } from "../../../../../../state/StateProvider";
import { emitCurrentUserOnline } from "../../../../chat";

const {
    SET_USERS_ONLINE
}=ACTIONS
const onUserOnline=(socket,id,dispatch)=>{
    socket.on('on_user_online',({userId,recievedNewUser,gotOtherUsers})=>{
        if(recievedNewUser && userId!==id)emitCurrentUserOnline(socket)
        
        if((recievedNewUser && userId!==id)||(gotOtherUsers && userId !==id))
        {
            dispatch({
                type:SET_USERS_ONLINE,
                payload:{isOnline:true,userId}
            })
            return ;
        }


    })

}
export default onUserOnline