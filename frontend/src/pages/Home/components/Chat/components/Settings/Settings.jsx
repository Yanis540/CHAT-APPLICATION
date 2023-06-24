import React from 'react'
import {Link} from 'react-router-dom' 
import Requests from './utils/Requests'
import ChatUsersSettings from './utils/ChatUsersSettings'

// MUI COMPONENTS 
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { useChatValue } from '../../../../../../features/chat/chat';
import { LinkClass } from './Styles/styles';
function Settings({superAdmin,requests}) {
  const [{chat:{id:chatID=''}}]=useChatValue()

  // users={users} admins={admins} user={user} socket={socket} superAdmin={superAdmin}
  return (
    <div className={`flex-1  flex flex-col  flex-basis   h-full relative`}>
      <>
        <div className='border-b border-gray-800 py-5 px-2 h-[62px] '>
          <Link  to={`/chat/${chatID}`} className={LinkClass}>
            <KeyboardArrowLeftRoundedIcon fontSize='small' className='cursor-pointer' />
          </Link>
        </div>
      </>
      <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 flex-1 w-[100%] h-[calc(100%-62px)] '>
        {/* Display Users */}
        <ChatUsersSettings superAdmin={superAdmin} /> 
        {/* display the requests  */}
        <Requests requests={requests} /> 
        </div>
      </div>
  )
}

export default Settings