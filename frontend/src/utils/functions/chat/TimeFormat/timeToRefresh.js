const timeStamps={
    TEN_SECONDS_MINUTE:10*1000,
    ONE_MINUTE:60*1000,
    ONE_HOUR_MINUTE:3600*1000,
    ONE_DAY_MINUTE:24*3600*1000,
}
const timeToRefresh=(timeThatHasBeenSent)=>{
    if(!timeThatHasBeenSent) return 3600*1000
    if(timeThatHasBeenSent.includes('seconds')) return timeStamps.TEN_SECONDS_MINUTE
    if(timeThatHasBeenSent.includes('minute')) return timeStamps.ONE_MINUTE
    if(timeThatHasBeenSent.includes('hour')) return timeStamps.ONE_HOUR_MINUTE
    if(timeThatHasBeenSent.includes('day')) return timeStamps.ONE_HOUR_MINUTE
}
export default  timeToRefresh