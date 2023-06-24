import {  useEffect, useState } from 'react'
import { Input, User } from '../../../../../../../layouts/layouts';
import {toast} from 'react-toastify'
import { 
  useAddUserToChat
} from '../../../../../../../features/chat/chat';
import { useGetOtherUser } from '../../../../../../../features/user/user';
function AddUser({user,chatID,users=[]}) {

  const [email,setEmail]=useState('');
  const [searchedUser,setSearchedUser]=useState(null)
  const [check,setCheck]=useState(false)
  const {data:dataSearchUser,error:errorSearchUser,execute:searchUser}=useGetOtherUser({token:user?.accessToken,params:{email:email}})
  const {data:dataAddUser,error:errorAddUser,execute:addUserToChat}=useAddUserToChat({token:user?.accessToken,chatID})
  

  let HandleSubmit=async(e)=>{
    e.preventDefault();
    if(!email) return toast.error('Email Required')
    let userAlreadyThere=users?.filter(user=>user.email===email)[0];
    if(userAlreadyThere){ 
      toast.error('Already In The Chat')
      setEmail('')
      return setSearchedUser(null)
    }
    await searchUser()
    
  }
  let handleAddUser=async(e)=>{
    if(!searchedUser) return  toast.error('No User');
    if(!check) return toast.error('No User Selected');
    const data={userId:searchedUser?._id}
    await addUserToChat(data)
    
  }
  useEffect(()=>{
    if(errorAddUser){
      toast.error(errorAddUser.message)
      setSearchedUser(null) 
      setCheck(false)
    }
    if(dataAddUser){
      toast.success(dataAddUser?.message)
      setCheck(false)
      setSearchedUser(null) 
    }
    return ()=>{}

  },[dataAddUser,errorAddUser])
  useEffect(()=>{
    if(errorSearchUser){
      toast.error(errorSearchUser.message)
      setEmail('');
      setSearchedUser(null)
      
    }
    if(dataSearchUser){
      setSearchedUser(dataSearchUser)
      setEmail('');
    }
    return ()=>{}

  },[dataSearchUser,errorSearchUser])
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-action mt-0 h-[40px] pb-[10px]">
          <label htmlFor="add_users_modal" className="cursor-pointer px-[2px]"><svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg></label>
        </div>
        <form onSubmit={HandleSubmit} className='flex flex-col justify-center relative h-full w-full overflow-y-scroll scrollbar-hide'>
          <h2 className='capitalize text-gray-200 mb-5 py-2 border-b border-gray-600 text-center'>Add a User</h2>
          <Input input={email} setInput={setEmail} placeHolder='Email' email /> 
          {/* display a user  */}

        </form>
        {
          searchedUser&&
          <div className='flex flex-col justify-center gap-[50px]'>
            <User user={searchedUser} add setCheck={setCheck}/> 
            <button onClick={handleAddUser} className="btn btn-outline">Add</button>
          </div>
          }
      </div>
    </div>
  )
}

export default AddUser