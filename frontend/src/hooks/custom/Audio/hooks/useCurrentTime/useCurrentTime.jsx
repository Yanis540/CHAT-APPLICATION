import {useEffect} from 'react'

function useCurrentTime({src,playing,audio,setCurrentTime}) {
    useEffect(()=>{
        if(src && playing){
            var time=setInterval(()=>{
                setCurrentTime(audio?.current?.currentTime??0);
            },1000)
        }
        return ()=> clearInterval(time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[src,playing,audio?.current?.currentTime])
}

export default useCurrentTime