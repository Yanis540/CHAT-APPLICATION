import {  generateAuthToken } from '../../../../token/generateToken.js';
import bcrypt from 'bcrypt'
import User from '../../../../models/userModel.js';
import Token from '../../../../models/tokenModel.js';
import asyncHandler from 'express-async-handler';
import validator from 'email-validator'
const login_controller=asyncHandler(async(req,res)=>{
    const {email,password}=req.body; 
    if(!email||!password ) throw new Error('Email/Password required');
    let user= await User.findOne({email})
    if(!user || ! bcrypt.compareSync(password,user.password)) throw new Error('Email / Password Invalid');
    const {refreshToken,accessToken,expiresIn}=generateAuthToken(user.id);
    const ipAddress = req.socket.remoteAddress;
    const tokens=await Token.insertMany([
        //! save accessToken
        {
            token:accessToken,
            expiresIn:new Date(expiresIn),
            userId:user?._id,
            ipAddress
        },
        //! save refresh Token 
        {
            token:refreshToken,
            userId:user?._id,
            ipAddress,
            isRefreshToken:true
        }
    ])
    res.json({
        user:{
            id:user.id,
            name:user.name,
            email:user.email,
            photoURL:user.photoURL,
            joinedChats:user.joinedChats,
            isValid:user?.isValid
        },
        refreshToken,
        accessToken,expiresIn
    })
})

export default login_controller