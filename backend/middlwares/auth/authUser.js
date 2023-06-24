import Token from "../../models/tokenModel.js";
import User from "../../models/userModel.js";
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler';
import { INVALID_ACCESS_TOKEN,ACCESS_TOKEN_UNAUTHORIZED } from "../../types/errorTypes.js";

/**
 * 
 * @function Verify if access Token is valid 
 * @return user in the request object 
 * @error  {message,cause}
 * @errorTypes {INVALID_ACCESS_TOKEN,ACCESS_TOKEN_UNAUTHORIZED}
 * 
 */
const authUser=asyncHandler(async(req,res,next)=>{

    let token;
    try{
        if(!req.headers|| ! req.headers.authorization || ! req.headers.authorization.startsWith('Bearer') ) throw new Error('Unauthorized',{cause:INVALID_ACCESS_TOKEN});
        token=req.headers.authorization.split(' ')[1]
        let decode;
        try{
            decode=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        }
        catch(err){
            throw new Error('Invalid/ Expired  Token',{cause:INVALID_ACCESS_TOKEN})
        }
        let user=await User.findById(decode.id).select('-password')
        if(!user) throw new Error('Invalid User ');

        const tokenFromDb=await Token.findOne({token:token,userId:user?.id})
        if(!tokenFromDb) throw new Error('Unauthorized',{cause:ACCESS_TOKEN_UNAUTHORIZED})

        req.user=user;
        next()
    }
    catch(err){
        throw new Error(err.message,{cause:err.cause})
    }

})
export default authUser