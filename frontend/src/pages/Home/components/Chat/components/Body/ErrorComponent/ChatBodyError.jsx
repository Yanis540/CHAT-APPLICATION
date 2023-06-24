import React from 'react'
import DoNotDisturbAltRoundedIcon from '@mui/icons-material/DoNotDisturbAltRounded';
import { ChatSkeltons } from '../../../../../../../layouts/layouts';

function ChatBodyError({error,loading,chat,chatFromState}) {
  const customClass='overflow-y-scroll flex flex-col w-full flex-1 scrollbar-hide gap-[5px]'

  return (
    <>
      {
        (loading||!chatFromState  )?(

          <div className={customClass}>
            {Array(20).fill().map((_,index)=>(<ChatSkeltons key={index} /> ))}
          </div>
        ):(
          !loading && error && error.cause  &&!chat&&(
            <div className='flex flex-col h-full items-center justify-center'>
              <DoNotDisturbAltRoundedIcon fontSize='large'  className='text-red-700'/> 
            </div>
          )
        )
      }
    </>
  )
}

export default ChatBodyError