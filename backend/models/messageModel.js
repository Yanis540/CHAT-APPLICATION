import mongoose from "mongoose";

const Schema=mongoose.Schema


const messageSchema=new Schema({
    senderID:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    message:{
        type:String
    },
    chatID:{
        type:Schema.Types.ObjectId
    },
    seenBy:[
        Schema.Types.ObjectId
    ],
    isFile:{
        type:Boolean
    },
    file:{
        type:Buffer
    },
    fileName:{
        type:String
    },
    fileType:{
        type:String
    },
    
    fileExtension:{
        type:String
    },
    fileURL:{
        type:String
    }

},{
    timestamps:true
})



const Message=mongoose.model('Message',messageSchema,'messages');

export default Message;
