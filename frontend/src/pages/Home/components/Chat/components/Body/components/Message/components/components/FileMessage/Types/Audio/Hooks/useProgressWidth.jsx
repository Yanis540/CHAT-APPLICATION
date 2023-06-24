import {useEffect, useState} from 'react'
/**
 * 
 * @param {*} progress : in seconds  
 * @param {*} duration : in seconds  
 * @param {*} dimensions object : {width,height}  by the useDimensions hook 
 * @returns {progressWidth} : in pixels 
 */
function useProgressWidth({progress,duration,dimensions}) {
    const [progressWidth,setProgressWidth] = useState(0)
    useEffect(()=>{
        setProgressWidth(parseInt(progress /duration * dimensions?.width) ?? 0)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[progress])
      return {progressWidth}
}

export default useProgressWidth