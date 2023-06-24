
const IsNextMessageSentByTheSameUser=(message,nextMessage)=>message?.user?._id===nextMessage?.user?._id;

export default IsNextMessageSentByTheSameUser
