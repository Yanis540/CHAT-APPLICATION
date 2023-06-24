/* eslint-disable no-unused-vars */
import { ToolTip, ToolTipDisplay } from '../../../../../../../../../../../../../layouts/layouts'

function Video(data) {
    const  {
        handleDownload,
        message,
        isLoggedInUserTheSender,
        borderRadius,
        hoursOfDisplay,
        dateDisplay

    }=data
  return (
    <div className=' '>
        <ToolTip >
            <h2>this is a video </h2>

          <ToolTipDisplay elements={[dateDisplay,hoursOfDisplay]} />
        </ToolTip> 
      </div>
  )
}

export default Video