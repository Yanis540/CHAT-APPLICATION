import {useEffect} from 'react'
import { timeFormat, timeToRefresh } from '../../../../../../utils/utils'

function useMessageDelay({lastMessage,dateToDisplay,setMessageDelay,messageDelay}) {
    useEffect(()=>{
        if(lastMessage)
        setMessageDelay(timeFormat(dateToDisplay))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lastMessage,dateToDisplay])
 
    useEffect(()=>{
        if(lastMessage){
            const interval=setInterval(()=>{
                setMessageDelay(timeFormat(dateToDisplay))
            },timeToRefresh(messageDelay))
            return ()=>clearInterval(interval)
        }    
        return ()=>{}        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lastMessage,messageDelay,dateToDisplay])
}

export default useMessageDelay