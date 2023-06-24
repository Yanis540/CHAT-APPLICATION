import express from 'express'
import { authUser , authAdminChat , authUserInChat} from '../../middlwares/authMiddlware.js';
import {
    add_chat_controller,
    get_chats_of_user_controller,
    get_initial_messages_controller,
    get_older_messages_controller,
    add_users_to_chat_controller,
    add_message_controller,
    add_user_to_chat_controller

} from './controllers/basicController.js';
import { 
    get_requests_chat_controller,
    accept_users_controller,
    reject_users_controller,
    add_admin_controller,
    remove_user_controller 

} from './controllers/adminController.js';
const router=express.Router();

// add a chat 
router.post('/add',authUser,add_chat_controller)

// get chats of the user 
router.get('/chats',authUser,get_chats_of_user_controller)
// get messages of a chat 
router.get('/initial/messages/:chatID',authUser,authUserInChat,get_initial_messages_controller)
router.put('/older/messages/:chatID',authUser,authUserInChat,get_older_messages_controller)


// add  users 
router.put('/add/users/:chatID',authUser,authUserInChat,add_users_to_chat_controller)

// Add user 
router.put('/add/user/:chatID',authUser,authUserInChat,add_user_to_chat_controller)

// add a message 
router.post('/new/message/:chatID',authUser,authUserInChat,add_message_controller)

/*  
! ########### ADMIN PART ############# 
*/

// get all requests 
router.get('/get/requests/:chatID',authUser,authUserInChat,authAdminChat,get_requests_chat_controller)

// accept users (that are in the request )
router.put('/accept/users/:chatID',authUser,authUserInChat,authAdminChat,accept_users_controller);

// decline requests 
router.put('/reject/users/:chatID',authUser,authUserInChat,authAdminChat,reject_users_controller);

// add admin 
router.put('/add/admins/:chatID',authUser,authUserInChat,authAdminChat,add_admin_controller)
router.put('/remove/users/:chatID',authUser,authUserInChat,authAdminChat,remove_user_controller)

/*
!   REMARQUE:
!       -this rest api is just for expirimental all of this should be placed with sockets for real time communication 
!       check this for passing token in headers:   https://thewebdev.info/2022/03/16/how-to-set-request-header-when-making-connection-with-socket-io-client/#:~:text=socket.io%20client%3F-,To%20set%20request%20header%20when%20making%20connection%20with%20socket.io,.."%2C%20%7D%2C%20%7D)%3B
!       the middlware you just want to change req.user to socket.user=user 
    TODO: 
        ADD ADMINS : Done
        ACCEPT REQUSTS: DONE
        REMOVE PEOPLE FROM A CHAT: Done
        ! GET OUT OF A CHAT 
        !! add the case when the userId is invalid 
        

*/
export default router;