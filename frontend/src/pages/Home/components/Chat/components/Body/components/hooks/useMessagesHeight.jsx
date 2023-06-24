import {useEffect} from 'react'

/**
 * 
 * @param socket :  socket 
 * @does autoscroll down 
 * @does send seen notification to others   
 */
function useMessagesHeight({messages,user,chatID,socket,ref}) {
    useEffect(()=>{
        if(ref){
            ref.current.scrollTop=ref.current?.scrollHeight??0;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}

export default useMessagesHeight