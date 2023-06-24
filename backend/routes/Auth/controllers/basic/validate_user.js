
import asyncHandler from 'express-async-handler'
import User from '../../../../models/userModel.js';
const validate_user=asyncHandler(async(req,res)=>{
    const user=req.user ; 
    if(user.isValid) throw new Error('User Is Already Valid !');
    //! code to send email 
    const updatedUser=await User.findByIdAndUpdate(user?.id,{
        isValid:true
    },{new:true})
    res.json({isValid:true,message:'User Is Valid'})
})

export default validate_user