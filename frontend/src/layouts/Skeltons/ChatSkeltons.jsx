import React from 'react'
import Skeleton from '@mui/material/Skeleton';

function ChatSkeltons({chatHeader}) {
  return (
    <div className={`bg-gray-800 text-bg-gray-300 ${!chatHeader?'p-5':'p-2'}`}>
        {!chatHeader&&<Skeleton />}
        <div className='flex flex-row items-center bg-gray-800 gap-[5px]'>
          <Skeleton variant="circular" width={40} height={40} /> 
            <div className='flex-1'>
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </div>
        </div>

    </div>
  )
}

export default ChatSkeltons