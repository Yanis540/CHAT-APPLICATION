const UsersWhoAreTyping=({users,usersTyping,id})=>users?.filter(userFromChat=>usersTyping?.includes(userFromChat._id) && userFromChat._id!==id);
export default UsersWhoAreTyping