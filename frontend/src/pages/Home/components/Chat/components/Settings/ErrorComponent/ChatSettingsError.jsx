import React from 'react'
import { Spinner } from '../../../../../../../layouts/layouts';
import SendAndArchiveSharpIcon from '@mui/icons-material/SendAndArchiveSharp';
import {Link} from 'react-router-dom'
function ChatSettingsError({loading,error,chatID}) {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center relative'>
      {
        loading?(
        <Spinner /> 
        ):(

        <>
          <Link  to={`/chat/${chatID}`} className="btn btn-outline">
            <SendAndArchiveSharpIcon fontSize='large' />
          </Link>
        </>
        )
      }

    </div>
  )
}

export default ChatSettingsError