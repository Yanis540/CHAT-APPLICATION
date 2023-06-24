import Token from "../../models/tokenModel.js";
import User from "../../models/userModel.js";
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken'
import { INVALID_REFRESH_TOKEN,REFRESH_TOKEN_UNAUTHORIZED } from "../../types/errorTypes.js";

/**
 * 
 * @function Verify if refresh token is valid  
 * @error  {message,cause}
 * @errorTypes {INVALID_REFRESH_TOKEN,REFRESH_TOKEN_UNAUTHORIZED}
 * 
 */
const authRefresh=asyncHandler(async(req,res,next)=>{
    let token;
    try{
        if(!req.headers|| ! req.headers.authorization || ! req.headers.authorization.startsWith('Bearer') ) throw new Error('Unauthorized',{cause:NO_REFRESH_TOKEN});
        token=req.headers.authorization.split(' ')[1]
        let decode;
        try{
            decode=jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
        }
        catch(err){
            throw new Error('Session Expired',{cause:INVALID_REFRESH_TOKEN})
        }
        let user=await User.findById(decode.id).select('-password')
        if(!user) throw new Error('Invalid User ',{cause:REFRESH_TOKEN_UNAUTHORIZED})

        const tokenFromDb=await Token.findOne({token:token,userId:user?.id})
        if(!tokenFromDb) throw new Error('Unauthorized',{cause:REFRESH_TOKEN_UNAUTHORIZED})

 
        req.user=user;
        next()
    }
    catch(err){
        throw new Error(err.message,{cause:err.cause})
    }

})
export default authRefresh