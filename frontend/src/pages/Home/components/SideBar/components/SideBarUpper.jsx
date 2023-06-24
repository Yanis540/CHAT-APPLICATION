import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchBar from '../../../../../components/SearchBar';
import AddChat from './Modal/AddChat';
function SideBarUpper({user,socket}) {
  return (
    <div className='flex flex-col justify-start border-b border-gray-800 pb-3 pr-3'>
        <h2 className='dark:text-gray-100 capitalize  p-5 py-5 flex flex-row items-center justify-between'>
        Chats 
        <label htmlFor='add_chat_modal'  className='modal-button'>
            <AddCircleIcon className='cursor-pointer'/> 
        </label>
        </h2>
        <SearchBar /> 
        <input type="checkbox" id="add_chat_modal" className="modal-toggle" />
        <AddChat user={user}  socket={socket}/> 
    </div>
  )
}

export default SideBarUpper