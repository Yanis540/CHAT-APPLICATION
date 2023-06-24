import User from "../../../../../../models/userModel.js"

const getUsers=async(usersIds)=>{
    let users=[]
    for(let user of usersIds){
        users.push(await User.findById(user).select('name id photoURL'))
    }
    return users
}

export default getUsers
