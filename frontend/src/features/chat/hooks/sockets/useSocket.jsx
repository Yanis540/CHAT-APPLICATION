import {useEffect,useState} from 'react'
import {io} from 'socket.io-client'
import { SERVER_URL } from '../../../../ENV/base';
import { ACTIONS } from '../../../../state/StateProvider'

let {
    SET_SOCKET
}=ACTIONS
function useSocket(dispatch,user) {
    let id="";
    let accessToken="";
    if(user) {
        id=user.id
        accessToken=user.accessToken
    }
    const [socket,setSocket]=useState(null)
    useEffect(()=>{
        if(id&&accessToken){
            const newSocket =io(SERVER_URL,{
                withCredentials:true,
                extraHeaders:{
                    Authorization:`Bearer ${accessToken}`
                },
                query:{
                    userId:id
                }
            });
            if(newSocket) newSocket.userId=id;
            setSocket(newSocket);
            dispatch({
                type:SET_SOCKET,
                socket:newSocket
            })
            return ()=>newSocket.close()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id,accessToken])
    return socket
}


export default useSocket