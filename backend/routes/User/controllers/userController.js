import asyncHandler from 'express-async-handler'
import User from '../../../models/userModel.js';
import bcrypt from 'bcrypt'
let update_photo_controller=asyncHandler(async(req,res)=>{
    if(!req.body.photoURL) throw new Error('No Url has been selected');
    let newUser=await User.findByIdAndUpdate(req.user?.id,{
        photoURL:req.body.photoURL
    },{new:true}).select('-password')
    res.json(newUser)
})


let update_password_controller=asyncHandler(async(req,res)=>{
    if (!req.body.password || ! req.body.newPassword) throw new Error('Password / New Password Not selected ');
    let user=await User.findById(req.user?.id);
    if(! await bcrypt.compare(req.body.password,user.password)) throw new Error('Password Invalid');
    let salt=await bcrypt.genSalt(10);
    let hashedPassword=await bcrypt.hash(req.body.newPassword,salt);
    let updatedUser=await User.findByIdAndUpdate(req.user.id,{
        password:hashedPassword
    },{new:true}).select('-password');
    res.json(updatedUser)

})
let update_name_controller=asyncHandler(async(req,res)=>{
    if(!req.body.name) throw new Error('No Name');
    let user=await User.findByIdAndUpdate(req.user?.id,{
        name:req.body.name
    },{new:true}).select('-password');
    res.json(user)
})
const get_other_user_controller=asyncHandler(async(req,res)=>{
    const {email}=req.query
    if(!email) throw new Error('Please Add An Email');
    const user=await User.findOne({email:email}).select('name id email photoURL ')
    if(!user) throw new Error('Not Found');
    res.json(user)
})
export {
    update_photo_controller,
    update_password_controller,
    update_name_controller,
    get_other_user_controller
}