
const sortChatsByDate=(chats)=>
    chats?.sort((a,b)=>{
        if(!a.lastMessage||!b.lastMessage) return 1
        const dateA=new Date(a.lastMessage.sentHour)
        const dateB=new Date(b.lastMessage.sentHour)
        return dateB - dateA
    });

export  default   sortChatsByDate

