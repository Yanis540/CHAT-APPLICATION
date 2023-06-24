/* eslint-disable no-unused-vars */
import { useAudio, useDimensions } from '../../../../../../../../../../../../../hooks/hooks';
import { ToolTip, ToolTipDisplay } from '../../../../../../../../../../../../../layouts/layouts';
import { convertMs } from '../../../../../../../../../../../../../utils/utils';

import PlayPause from './components/PlayPause';
import Timer from './components/Timer';
import Invisible from './components/Invisible';
import useProgressWidth from './Hooks/useProgressWidth';
function Audio(data) {
  const  {
    url,
    handleDownload,
    message,
    isLoggedInUserTheSender,
    borderRadius,
    hoursOfDisplay,
    dateDisplay
  }=data;

  const {playing,toggle,currentTime=0,duration,progress}=useAudio({src:url,type:message?.fileType});
  const timePassed=convertMs(currentTime*1000);
  const {dimensions,ref}=useDimensions();
  const {progressWidth} = useProgressWidth({progress,duration,dimensions})
  return (
    <div ref={ref} className={
      ` 
        p-2 
        flex-1 
        relative 
        flex-wrap 
        ${isLoggedInUserTheSender?'bg-[#0084FF]  ':'bg-[#3E4042]'} 
        ${borderRadius} 
      `}
    >
      <ToolTip Class={"relative flex flex-row  items-center justify-start group gap-[5px]"}>
        <PlayPause playing={playing} toggle={toggle} /> 
        <Timer time={timePassed} /> 
        <Invisible duration={duration} progress={progress} dimensions={dimensions} /> 
        <ToolTipDisplay elements={[dateDisplay,hoursOfDisplay]} />

      </ToolTip> 
  </div>
  )
}

export default Audio