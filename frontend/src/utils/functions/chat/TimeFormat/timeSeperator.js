
const timeSeperator=(InputDate)=>{
    let date=new Date(InputDate)
    let dateDisplay='';
    let hoursOfDisplay=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    return {hoursOfDisplay,dateDisplay,date}
}

export default  timeSeperator
