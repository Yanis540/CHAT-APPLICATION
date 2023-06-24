const isChatActive=(usersIds=[],usersOnline=[])=>{
    return usersIds.some(id=>usersOnline?.includes(id))
}
export default isChatActive