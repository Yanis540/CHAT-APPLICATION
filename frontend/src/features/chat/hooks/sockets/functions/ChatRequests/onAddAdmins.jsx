const onAddAdmins=(socket,setData)=>{
    socket.on('list_new_admins',({usersIds,chatID})=>{
        
        setData(prev=>{
            if(!prev?.isChatContent) return prev;
            const admins=Array.from(new Set([...prev.admins,...usersIds]))
            return ({
                ...prev,
                admins:admins
            })
        })
    
    })
}
export default onAddAdmins