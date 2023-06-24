import { timeSeperator } from "../../../utils";

const  timeDelay=(InputDate)=>{
    let {hoursOfDisplay,dateDisplay,date}=timeSeperator(InputDate);
    let dayInMs=1000*60*60*24;
    if((new Date()-date.getTime())> dayInMs) dateDisplay=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+ date.getDate();
    return {hoursOfDisplay,dateDisplay}
}
export default timeDelay