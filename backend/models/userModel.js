import mongoose from "mongoose";

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'Name Required']
    },
    email:{
        type:String,
        required:[true,'Email Required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Email Required'],
        unique:true
    },
    joinedChats:[
        Schema.Types.ObjectId
    ],
    photoURL:{
        type:String,
        default:''
    },
    isValid:{
        type:Boolean,
        default:false
    }
}, {
    timestamps:true
})

const User=mongoose.model('User',userSchema,'users');
export default User ; 