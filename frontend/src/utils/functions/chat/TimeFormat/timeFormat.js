/**
 * 
 * @param {(sentHour)}  Date Format (yyyy/mm/dd hh:mm:ss)  @param {(function)}
 *  Returns Time In Right Format
 */
const timeFormat=(sentHour)=>{
    let then=new Date(sentHour).getTime()
    let now=new Date()
    const days = parseInt((now - then) / (1000 * 60 * 60 * 24));
    const hours = parseInt(Math.abs(now - then) / (1000 * 60 * 60) % 24);
    const minutes = parseInt(Math.abs(now - then) / (1000 * 60) % 60);
    const seconds = parseInt(Math.abs(now - then) / (1000) % 60); 
    if(days)  return days+' day'+(days===1?'':'s')  
    if(hours) return  hours + ' hour'+(hours===1?'':'s') 
    if(minutes) return minutes+' minute'+(minutes===1?'':'s')
    return seconds+'seconds'
}
export default timeFormat