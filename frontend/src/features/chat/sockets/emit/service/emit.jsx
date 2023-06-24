const emitEvent=(socket,event,options)=>{
    // console.log({connected:socket?.connected,event,options})
    socket?.emit(event,options)

}
export default emitEvent