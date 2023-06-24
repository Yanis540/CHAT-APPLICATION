import { useState} from 'react'

import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Head from './UserTable/Head';
import Row from './UserTable/Row';
import { toast } from 'react-toastify';

import { 

  useChatValue,
  useHandleChatRequests 
} from '../../../../../../../features/chat/chat';
import useUpdateChatRequests from './hooks/useUpdateChatRequests';
import { useStateValue } from '../../../../../../../state/StateProvider';
function Requests({requests}) {

  const [{user,socket}]=useStateValue();
  const [{chat:{id:chatID=''}}]=useChatValue()
  const [selectedUsersId,setSelectedUsersId]=useState(new Set())
  // const [canSend,setCanSend]=useState(false)
  const [add,setAdd]=useState(null)
  let array=Array.from(selectedUsersId)
  let usersIds =!selectedUsersId?[]:Array.from(selectedUsersId).map(e=>e.userId)

  const {error,data,execute:handleRequests}=useHandleChatRequests({add,token:user?.accessToken,chatID})
  
  //! Select users from the table 
  let handleSelectUsers=(e,userId)=>{
    if(e.target.checked) setSelectedUsersId(prev=>new Set(prev.add({checkBox:e.target,userId})));
    else setSelectedUsersId(prev=>new Set([...prev].filter(x=>x.userId!==userId)));
  }
  

  const handleAccept=async(e)=>{
    if(!usersIds||!usersIds.length) return toast.error('No User Selected');
    setAdd(true)
    // await handleRequests({usersIds})
  }
  const handleReject=async(e)=>{
    if(!usersIds||!usersIds.length) return toast.error('No User Selected');
    setAdd(false)
    // await handleRequests({usersIds})

  }


  useUpdateChatRequests({data,error,add,setAdd,socket,chatID,usersIds,setSelectedUsersId,array,handleRequests})

  return (
    <div className='border-r border-gray-800 overflow-y-scroll scrollbar-hide h'>
      <div className=' flex flex-row items-center capitalize font-bold text-[1rem] p-5 border-b  border-gray-800 h-[65px]'>
        <h2>requests</h2>
        <div className='flex-1 flex flex-row justify-end items-center gap-[20px]'>
          {
            requests && requests.length>0 &&(
              <>
                <AddRoundedIcon className='cursor-pointer text-green-600' fontSize='large' onClick={handleAccept} /> 
                <DeleteOutlineRoundedIcon     className='cursor-pointer text-red-600' fontSize='large' onClick={handleReject} /> 
              </>
            )
          }
        </div>
        
      </div>
      <div className="overflow-x-auto w-full rounded ">
        {
          requests&& requests.length>0 ?(
            <div className="table w-full overflow-y-scroll scrollbar-hide">
              <Head /> 
              <div>
                {
                  requests&& requests.length>0 && 
                  requests.map(user=><Row key={user._id} user={user}  handleSelectUsers={handleSelectUsers} /> )
                }
              </div>
          </div>
          ):(
            <div className='flex flex-col justify-center items-center flex-1'>

              <h2 className='text-center capitalize text-gray-700'>no requests</h2>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Requests