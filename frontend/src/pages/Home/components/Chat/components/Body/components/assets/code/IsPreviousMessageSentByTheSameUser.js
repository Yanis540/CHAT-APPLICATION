const IsPreviousMessageSentByTheSameUser=(message,previousMessage)=>message?.user?._id === previousMessage?.user?._id;

export default IsPreviousMessageSentByTheSameUser