import { ToolTip, ToolTipDisplay } from "../../../../../../../../../../../layouts/layouts";

function BasicMessage(data) {
    const  {
      message,
      isLoggedInUserTheSender,
      borderRadius,
      hoursOfDisplay, 
      dateDisplay

    }=data



  return (
    <div className={` p-2 ${isLoggedInUserTheSender?'bg-[#0084FF]  ':'bg-[#3E4042]'} ${borderRadius} max-w-[75%] flex flex-wrap `}>
      <ToolTip >
        {
          message.message
        }  
        <ToolTipDisplay elements={[dateDisplay,hoursOfDisplay]} /> 
      </ToolTip> 
    </div>
  )
}

export default BasicMessage