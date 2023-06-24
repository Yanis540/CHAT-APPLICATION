import {  generateAccessToken } from '../../../../token/generateToken.js';
import asyncHandler from 'express-async-handler';
import Token from '../../../../models/tokenModel.js';


const refreshToken_controller=asyncHandler(async(req,res)=>{
    const user=req.user; 
    const {accessToken,expiresIn}=generateAccessToken(user.id)
    const ipAddress=req.socket.remoteAddress

    //! save accessToken
    const token=await Token.create( {
        token:accessToken,
        expiresIn:new Date(expiresIn),
        userId:user?.id,
        ipAddress
    })
    res.json({
        accessToken,
        expiresIn
    })

})

export default refreshToken_controller