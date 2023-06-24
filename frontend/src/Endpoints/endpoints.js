export const getInitialChatMessagesEndPoint=(chatID)=>`/chat/initial/messages/${chatID}`
export const getChatRequestsEndPoint=(chatID)=>`/chat/get/requests/${chatID}`
export const siderBarChatsEndPoint='/chat/chats' 

export const sendMessageEndPoint=(chatID)=>`/chat/new/message/${chatID}`
export const addUserToChatEndPoint=(chatID)=>`/chat/add/user/${chatID}`
export const addUserToChatAdminEndPoint=(chatID)=>`/chat/add/admins/${chatID}`
export const removeUserFromChatEndPoint=(chatID)=>`/chat/remove/users/${chatID}`
export const rejectChatRequestsEndPoint=(chatID)=>`/chat/reject/users/${chatID}`
export const acceptChatRequestsEndPoint=(chatID)=>`/chat/accept/users/${chatID}`
export const getUsersChatsEndPoint='/chat/chats'
export const addChatEndPoint='/chat/add'

export const updateUserPhotoEndPoint='/user/update/photo'
export const updateUserNameEndPoint='/user/update/name'
export const updateUserPasswordEndPoint='/user/update/password'
export const getOtherUserEndPoint='/user/get/other'

export const refreshAccessTokenEndpoint='/auth/refresh/token'
export const registerUserEndPoint='/auth/register' 
export const loginEndPoint='/auth/login'
export const sendValidationEmailEndPoint='/auth/send/validation' 
export const validateUserEndPoint='/auth/validate/user' 
export const refreshAccessTokenEndPoint='/auth/refresh/token' 