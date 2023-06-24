import User from "../../../../../../models/userModel.js";


const fillMessages=async({messagesDB,users,chat})=>{
    let messages=[]
    for(const message of messagesDB){
        let user=users.find(user=>user._id===message.senderID)??null;
        if(user==null) user=await User.findById(message.senderID).select("id photoURL name")
        const responseMessage={
            id:message._id, 
            message:message.message,
            sentHour:message.createdAt,
            lastHourSeen:message.updatedAt, 
            user,
            seenBy:message?.seenBy,
            chatID:chat.id,
            isFile:message.isFile,
            file:message.file,
            fileName:message.fileName,
            fileType:message.fileType,
            fileExtension:message.fileExtension,
            fileURL:message.fileURL,
        }
        messages.push(responseMessage)
    }
    return messages
}
export default fillMessages;