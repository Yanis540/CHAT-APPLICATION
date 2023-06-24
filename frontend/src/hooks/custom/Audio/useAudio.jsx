import { useState, useRef  } from "react";
import { usePlaying } from "./hooks/audio";
import useCurrentTime from "./hooks/useCurrentTime/useCurrentTime";
/**
 * 
 * @param {*} src : source of the audio should be a url  
 * @param {*} type : audio type :(mp3,....)  
 * @returns 
 * @param {*} playing : Boolean 
 * @param {*} toggle : Function that play/pause  
 * @param {*} currentTime {seconds} : Current Time in the audio   
 * @param {ms} duration {seconds} : audio duration   
 * @param {*} progress {percentage}: progress percentage of the current time with the duration    
 * @param {*} progress {percentage}: progress percentage of the current time with the duration    
 */
const useAudio = ({src,type}) => {
  const audio = useRef(new Audio(src));
  audio.current.type=type;
  
  const duration=audio?.current?.duration??0;

  const [playing,setPlaying]=useState(false);
  const [currentTime,setCurrentTime]=useState(0);

  const toggle=()=>setPlaying(!playing);


  const slideCurrentTime=(time)=>{
    audio.current.currentTime=time<=duration?time:0;
  }


  usePlaying({src,playing,setPlaying,audio});
  useCurrentTime({src,playing,audio,setCurrentTime});
  return {
    playing,
    toggle,
    currentTime:currentTime,
    duration:audio?.current?.duration?Math.floor(audio?.current?.duration):0,
    progress:currentTime/duration?currentTime*100/duration:0,
    slideCurrentTime
  }
};
export default useAudio