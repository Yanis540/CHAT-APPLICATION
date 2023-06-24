import {useEffect} from 'react'

function usePlaying({src,playing,setPlaying,audio}) {
  useEffect(()=>{
    if(src){
      if(playing)
        audio.current.play();
      else 
        audio.current.pause();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[src,playing]);
  useEffect(()=>{
    audio.current.addEventListener("ended",()=>{
        setPlaying(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return ()=>audio.current.removeEventListener('ended',()=>{
        setPlaying(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

}

export default usePlaying