import { getGroupChatSideBar, getNonGroupChatSideBar } from "./getChatForSideBar.js"

const getChatSideBar=async(socket)=>{
    // if we accepted chat that means that ist's a group chat , 
    return socket.chat?.groupChat?getGroupChatSideBar(socket):getNonGroupChatSideBar(socket)
}

export {
    getChatSideBar
}