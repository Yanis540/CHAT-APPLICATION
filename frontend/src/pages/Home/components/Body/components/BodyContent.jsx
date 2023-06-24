import React from 'react'
import BodyChatElement from './BodyChatElement'
import {Link} from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useStateValue } from '../../../../../state/StateProvider';

function BodyContent() {
    const [{chatsSideBar}]=useStateValue()
  return (
    <div className='mt-5 flex flex-col justify-start gap-[5px]'>
        {
            chatsSideBar&& 
            chatsSideBar.length>0 &&
            chatsSideBar.map(chat=>(
                <BodyChatElement key={chat.id} chat={chat} /> 
            ))
        }
        {
            chatsSideBar&& chatsSideBar.length===0&&(
                <div className='flex flex-col justify-center items-center'>
                    <p className='p-5 capitalize'> you don't have friends 😔</p>
                    <Link to='/profile'><button><AddCircleIcon /> </button></Link>
                </div>
            )
        }
    </div>
  )
}

export default BodyContent