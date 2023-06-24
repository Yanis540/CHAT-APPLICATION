// import {  generateAuthToken } from '../../../../token/generateToken.js';
import bcrypt from 'bcrypt'
import User from '../../../../models/userModel.js';
import asyncHandler from 'express-async-handler';
import validator from 'email-validator'
import sendEmail from '../../../../email/sendEmail.js';

const register_controller=asyncHandler(async(req,res)=>{
    const {email,password,name,photoURL,confirmPassword}=req.body;
    const array=[email,password,name,confirmPassword]
    for(let  element of array ) if(!element || !element.trim()) throw new Error('Fields required');

    if(!validator.validate(email)) throw new Error('Invalid Email');
    if(password!==confirmPassword) throw new Error('Passwords does not match')
    const userIsFound=await User.findOne({email:email})
    if(userIsFound) throw new Error('Email Already Used');

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const ipAddress=req.socket.remoteAddress
    const user=await User.create({
        name,
        email,
        password:hashedPassword,
        photoURL
    })
    if(!user) throw new Error('Error')
    await sendEmail(user,ipAddress)
    
    res.status(201).json({
        message:'Account Created ! '
    })
})
export default register_controller