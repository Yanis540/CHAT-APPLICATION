import mongoose from "mongoose";

const Schema=mongoose.Schema;

const chatSchema=new Schema({
    users:[
        Schema.Types.ObjectId
    ],
    name:{
        type:String,
    },
    groupChat:{
        type:Boolean,
        default:false
    },
    admins:[
        Schema.Types.ObjectId
    ],
    superAdmin:{
        type:Schema.Types.ObjectId, 
        required:true
    },
    requests:[
        Schema.Types.ObjectId
    ],
    photoURL:{
        type:String,
        default:''
    }
},{
    timestamps:true
})


const Chat=mongoose.model('Chat',chatSchema,'chats')

export default Chat;