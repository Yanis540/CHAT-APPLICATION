import { useStateValue } from '../../../../state/StateProvider';
import ChatElement from './components/ChatElement';
import SideBarUpper from './components/SideBarUpper'

import { ChatSkeltons } from '../../../../layouts/layouts';
import useSortSideBarChats from './hooks/useSortSideBarChats';
import { useSideBar } from '../../../../features/chat/chat';
import { useError } from '../../../../hooks/hooks';
        


function SideBar() {
  const [{user,socket,chatsSideBar},dispatch]=useStateValue()
  const {data,error,loading}=useSideBar({token:user?.accessToken,userId:user?.id,socket});
  useSortSideBarChats({error,data,dispatch})
  useError({error});
  return (
    <div className=' flex flex-col justify-start flex-[0.2] border-r border-gray-800 '>
      <SideBarUpper user={user}  socket={socket} /> 
      <div className='overflow-y-scroll flex-1 h-[100%] scrollbar-hide'>
        {loading && !chatsSideBar && !chatsSideBar?.length && Array(50).fill(50).map((_,index)=>(<ChatSkeltons key={index} /> )) }
        {
          chatsSideBar&&
          chatsSideBar.length>0 &&
          chatsSideBar.map(chat=>(
            <ChatElement key={chat.id} chat={chat} /> 
          ))
        }
        {
          !loading&&chatsSideBar&& chatsSideBar.length===0&&(
            <p className='p-5 capitalize'> you don't have friends 😔</p>
          )
        }
      </div>
    </div>
  )
}

export default SideBar