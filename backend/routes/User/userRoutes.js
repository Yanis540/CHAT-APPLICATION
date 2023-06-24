import express from 'express'
import { authUser } from '../../middlwares/authMiddlware.js';
import { 
    update_name_controller, 
    update_password_controller,
    update_photo_controller ,
    get_other_user_controller
} from './controllers/userController.js';
const router=express.Router()

// update the photo url  
router.put('/update/photo',authUser,update_photo_controller)
router.put('/update/password',authUser,update_password_controller)
router.put('/update/name',authUser,update_name_controller)

router.get('/get/other',authUser,get_other_user_controller);
export default router ; 