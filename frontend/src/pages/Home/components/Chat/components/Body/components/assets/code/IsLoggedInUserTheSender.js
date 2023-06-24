const IsLoggedInUserTheSender=(message,user)=>message?.user._id===user?.id;
export default IsLoggedInUserTheSender