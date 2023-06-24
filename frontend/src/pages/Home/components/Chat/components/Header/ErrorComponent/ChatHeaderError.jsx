import { Avatar } from '@mui/material'
import React from 'react'
import ChatSkeltons from '../../../../../../../layouts/Skeltons/ChatSkeltons'

function ChatHeaderError({loading,chat,error,chatFromState}) {
  return (
    <>
      {
        (loading||!chatFromState)?(
        <>
          <ChatSkeltons chatHeader/>

        </>
        ):(
          !loading && error && error.cause  &&!chat &&(
            <div className='flex flex-row items-center justify-start p-5'>
              <div className="flex flex-row items-center justify-between gap-[10px]">
                <Avatar url={''}  />
                {/* <h2 className="capitalize text-gray-200  font-bold text-[1.25rem]"></h2> */}
              </div>
            </div>
          ) 
        )
      }
    </>

  )
}

export default ChatHeaderError