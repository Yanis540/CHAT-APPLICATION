
/**
 * 
 * @param {*} users : Users array with full details (photo , name ,...) 
 * @returns 
 */
const getChatPhotoName=({user,users,chat})=>{
    let photoURL;
    let chatName;
    if(chat.groupChat) {
        photoURL=chat.photoURL;
        chatName=chat.name;
    }
    else{
        let usersLength=users.length;
        if(usersLength===1) {
            photoURL=user.photoURL;
            chatName=user.name;
        }
        else{
            let otherUser=users.find(e=>e.id!==req.user.id)
            photoURL=otherUser?.photoURL
            chatName=otherUser?.name
        }
    }
    return {photoURL,chatName}

}
export default getChatPhotoName