
import {
    accept_requests, 
    add_admin_chat,
    reject_requests, 
    remove_user_from_chat
 } from './communication/adminFunctionsRoom.js'

import {
    addedNewChat,
    currentUserOnline,
    deleteMessage,
    getOlderMessages,
    joiningAchat,
    onMessage,
    onMessageFile,
    retrieveMessages,
    seenMessage,
    setActiveChats,
    userIsTyping,
    userStoppedTyping,
} from './communication/basic.js'

const useSocket=(io,socket)=>{
    accept_requests(io,socket)
    add_admin_chat(io,socket)
    reject_requests(io,socket)
    remove_user_from_chat(io,socket)
    
    addedNewChat(io,socket)
    currentUserOnline(io,socket)
    deleteMessage(io,socket)
    getOlderMessages(io,socket)
    joiningAchat(io,socket)
    onMessage(io,socket)
    onMessageFile(io,socket)
    retrieveMessages(io,socket)
    seenMessage(io,socket)
    setActiveChats(io,socket)
    userIsTyping(io,socket)
    userStoppedTyping(io,socket)

}
export default useSocket