import {useEffect} from 'react'
import { emitJoinChat, emitSetActiveChats } from '../../chat';

function useJoinChat(id='',joinedChats=[],socket,chatID) {
    useEffect(()=>{
        // console.log('joining! ',chatID)
        if(socket&& chatID) {
            emitJoinChat(socket,{chatID,userId:id})
        }

        socket?.on('connect',()=>{
            emitSetActiveChats(socket,{joinedChats,userId:id})
        })

        
    },[socket,chatID,id,joinedChats])
}

export default useJoinChat