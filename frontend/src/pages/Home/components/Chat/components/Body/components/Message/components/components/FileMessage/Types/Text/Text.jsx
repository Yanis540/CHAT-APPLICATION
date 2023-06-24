import React from 'react'
import { ToolTip, ToolTipDisplay } from '../../../../../../../../../../../../../layouts/layouts'

function Text(data) {
  const  {
    handleDownload,
    message,
    isLoggedInUserTheSender,
    borderRadius,
    hoursOfDisplay,
    dateDisplay

  }=data

  return (
    <div 
      className={` p-2 flex-1 flex-wrap  ${isLoggedInUserTheSender?'bg-[#0084FF]  ':'bg-[#3E4042]'} ${borderRadius}  underline  underline-offset-4`}
      onClick={handleDownload}
    >
      <ToolTip >
        {
          message.fileName
        }
        <ToolTipDisplay elements={[dateDisplay,hoursOfDisplay]} />
      </ToolTip> 
    </div>
  )

}

export default Text