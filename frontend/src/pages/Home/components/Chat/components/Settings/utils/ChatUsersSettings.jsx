import { useState} from 'react'
import { toast } from 'react-toastify';

import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';

import Head from './UserTable/Head'
import Row from './UserTable/Row'

import { useStateValue } from '../../../../../../../state/StateProvider';
import { isUserActive }  from '../../../../../../../utils/utils';

import { 
  useChatValue,
  useHandleChatUsers 
} from '../../../../../../../features/chat/chat';
import useUpdateChatUsers from './hooks/useUpdateChatUsers';

function ChatUsersSettings({superAdmin}) {
  
  const [{user,usersOnline,socket}]=useStateValue()
  const [{chat:{id:chatID='',users=[],admins=[]}}]=useChatValue();

  const [addAdmin,setAddAdmin]=useState(null)
  const {error,data,execute:handleChatUsers}=useHandleChatUsers({addAdmin,token:user?.accessToken,chatID})

  const [selectedUsersId,setSelectedUsersId]=useState(new Set());
  
  let array=Array.from(selectedUsersId)
  let usersIds =!selectedUsersId?[]:Array.from(selectedUsersId).map(e=>e.userId)


  let handleSelectUsers=(e,userId)=>{
    if(e.target.checked) setSelectedUsersId(prev=>new Set(prev.add({checkBox:e.target,userId})));
    else setSelectedUsersId(prev=>new Set([...prev].filter(x=>x.userId!==userId)));
  }

  const handleAddAdmins=async(e)=>{
    if(!usersIds||!usersIds.length) return toast.error('No User Selected');
    setAddAdmin(true)
  }
  const handleRemoveUsersFromChat=async(e)=>{
    if(!usersIds||!usersIds.length) return toast.error('No User Selected');
    setAddAdmin(false)
  }
  const effectData={data,error,setAddAdmin,setSelectedUsersId,usersIds,socket,chatID,array,addAdmin,handleChatUsers}
  useUpdateChatUsers(effectData)

  return (
    <div className='border-r border-gray-800 overflow-y-scroll scrollbar-hide h'>
      <div className=' flex flex-row items-center capitalize font-bold text-[1rem] p-5 border-b  border-gray-800 h-[65px]'>
        <h2 className='flex-1'>users</h2>
        <div className='flex flex-row justify-end items-center gap-[20px]'>
          <SupervisorAccountRoundedIcon className='cursor-pointer text-green-600' fontSize='large' onClick={handleAddAdmins} /> 
          <DeleteOutlineRoundedIcon     className='cursor-pointer text-red-600' fontSize='large' onClick={handleRemoveUsersFromChat} /> 
        </div>
        
      </div>
      <div className="overflow-x-auto w-full rounded">
        <div className="flex flex-col w-full overflow-y-scroll scrollbar-hide  ">
          <Head /> 
          <div>
            {
              users&& users.length>0 && 
              users.map(user=>{
                user={...user,online:isUserActive(user?._id,usersOnline)}
                return <Row key={user._id} user={user} admins={admins} superAdmin={superAdmin} handleSelectUsers={handleSelectUsers} />
              } )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatUsersSettings