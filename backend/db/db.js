import mongoose from "mongoose";

const connectDb=async(DB_URL)=>{
    await mongoose.connect(DB_URL)
    .then(()=>console.log('Connected To MongoDb'))
    .catch(err=>console.log(err))
}

export {
    connectDb
}