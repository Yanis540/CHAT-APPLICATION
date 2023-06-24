import { useEffect } from 'react';
import {useState} from 'react'
import {toast} from 'react-toastify'
import { emitCreatedNewChat, useAddChat } from '../../../../../../features/chat/chat';
import { useGetOtherUser } from '../../../../../../features/user/user';
import { Input, User } from '../../../../../../layouts/layouts';


function AddChat({user,socket}) {
  const [nameOfChat,setNameOfChat]=useState('')
  const [chatPhoto,setChatPhoto]=useState('')
  const [groupChat,setGroupChat]=useState(false);
  const [userChosen,setUserChosen]=useState(null)
  const [email,setEmail]=useState('')



  const toggleGroupChat=e=>setGroupChat(!groupChat)

  const {data:dataCreatedChat,error:errorCreateChat,execute:addChat}=useAddChat({token:user?.accessToken})
  const {data:dataGetUser,error:errorGetUser,execute:getOtherUser}=useGetOtherUser({token:user?.accessToken,params:{email:email}})
  const error=errorGetUser||errorCreateChat

  const searchUser=async(e)=>{
    e.preventDefault();
    await getOtherUser()
  }
  const HandleSubmit=async(e)=>{
    e.preventDefault()
    if(!groupChat && !userChosen) return toast.error('No User Selected For a Non Group ')
    if(groupChat && !nameOfChat.trim() ) return toast.error('Name Of Chat Required')
    const chatData= {userChosenId:userChosen?._id,name:nameOfChat,groupChat}
    await addChat(chatData)
    
  }
  useEffect(()=>{
    if(error){
      setUserChosen(null)
      toast.error(error.message)
      setEmail('')
    }
  },[error])
  useEffect(()=>{
    if(dataGetUser){
      setEmail('')
      if(dataGetUser._id===user?.id){ 
        toast.error('User Must Be different than the creator')
        setUserChosen(null)
      }else{
        setUserChosen(dataGetUser)
      }
    }
    return  ()=>{}
  },[dataGetUser,user?.id])
  useEffect(()=>{
    if(dataCreatedChat){
      setChatPhoto('')
      setGroupChat(false)
      setUserChosen(null)
      emitCreatedNewChat(socket,{chatID:dataCreatedChat?.chat._id})
      return ()=>{}
    }
  },[dataCreatedChat,socket])
  return (
    <div className="modal">
      <div className="modal-box">
          <div className="modal-action mt-0 h-[40px] pb-[10px]">
              <label htmlFor="add_chat_modal" className="cursor-pointer px-[2px]"><svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg></label>
          </div>
          <div  className='flex flex-col justify-center relative h-full w-full overflow-y-scroll scrollbar-hide'>
            <h2 className='capitalize text-gray-200 mb-5 py-2 border-b border-gray-600 text-center'>Add a Chat</h2>
            <div className="flex flex-row items-center justify-center gap-[1px] ">
                <h2 className={`${!groupChat?'bg-gray-900':''} p-2 px-4 rounded-t cursor-pointer duration-150`} onClick={toggleGroupChat}>Duo</h2>
                <h2 className={`${ groupChat?'bg-gray-900':''} p-2 px-4 rounded-t cursor-pointer duration-150`} onClick={toggleGroupChat}>Group</h2>
            </div>
            <div className='bg-gray-900 rounded p-5 duration-100'>
              {
                groupChat?(
                  <form onSubmit={HandleSubmit} className='flex flex-col gap-[20px]'>
                    <h3 className='capitalize'>add a group chat </h3>
                    <Input input={nameOfChat} setInput={setNameOfChat} placeHolder='Name Of The Chat'  /> 
                    <Input input={chatPhoto} setInput={setChatPhoto} placeHolder='Photo URL'  /> 
                  </form>
                ):(
                  <form onSubmit={searchUser} className='flex flex-col gap-[20px]'>
                    <h2 className='capitalize text-center border-b border-gray-700'>Choose A user </h2>
                    <Input email input={email} setInput={setEmail} placeHolder='Email' /> 
                    {
                      userChosen&&(
                        <>
                          <User user={userChosen} /> 
                          <button type='button' className='btn btn-outline' onClick={HandleSubmit}>Create</button>
                        </>
                      )
                    }
                  </form>
                )
              }
            </div>


          </div>
         
      </div>
  </div>
  )
}

export default AddChat