import mongoose from "mongoose";


const Schema=mongoose.Schema; 

const tokenSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    token:{
        type:String,
        required:true 
    },
    expiresIn:{
        type:Date
    },
    isRefreshToken:{
        type:Boolean,
        default:false
    },
    isValidationToken:{
        type:Boolean,
        default:false
    },
    ipAddress:{
        type:Schema.Types.String,
        required:true
    }

},{
    timestamps:true
});

const Token=mongoose.model('Token',tokenSchema,'tokens');

export default Token