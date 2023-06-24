import React from 'react'
import { Avatar } from '../../../../../layouts/layouts'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

function AvatarPicture({user}) {
  return (
    <div className='flex flex-col relative'>
      <Avatar url={user?.photoURL} large /> 
      <label htmlFor='picture-modal'className="modal-button" >
        <ModeEditOutlineRoundedIcon  fontSize='large' className='text-white cursor-pointer absolute bottom-[-10px] w-10 h-10 right-[-10px] bg-black p-[7px] rounded-[50%]  flex flex-col items-center justify-center'/> 
      </label>
    </div>
  )
}

export default AvatarPicture