import nodemailer from 'nodemailer'
import Token from '../models/tokenModel.js';
import { generateValidationToken } from '../token/generateToken.js';


/**
 * 
 * @function Verify sends Email of the validationToken 
 * @does saves the token in the database with the ipAdress of the user for security purpose only , 
 * 
 */
const sendEmail=async(user,ipAddress)=>{
    //! might wanna use gmail auth but anyway 
    const smtpTransport=nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_ID,
            clientId:process.env.GOOGLE_PROJECT_CLIENT_ID ,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET ,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN ,

        }
        
    })
    
    const token=generateValidationToken(user?._id)
    const tokenSavedInDb=await Token.create({
        token,
        userId:user?._id,
        ipAddress,
        isValidationToken:true
    })
    const link=`${process.env.FRONTEND_URLS}/?token=${token}`;
    const mailOptions={
        from:`Yanis <${process.env.GMAIL_ID}>`,
        to:user?.email, 
        subject:"Email Confirmation",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
    }
    try{
        const response=await smtpTransport.sendMail(mailOptions);
        return 
    }
    catch(err){
        throw new Error(err.message)
    }
    
}
export default sendEmail