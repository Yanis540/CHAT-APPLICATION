import React from 'react'
import { useStateValue } from '../../../../state/StateProvider';
import AvatarPicture from './utils/AvatarPicture';
import PictureModal from './utils/PictureModal'

function Picture() {
  const [{user},dispatch]=useStateValue();

  return (
    <div className='h-full flex flex-col justify-center items-center gap-[20px]'>
      <AvatarPicture user={user} /> 
      <input type="checkbox" id="picture-modal" className="modal-toggle" />
      <PictureModal user={user} dispatch={dispatch} />
      <h2 className='text-white font-[600] capitalize '>Hi , {user?.name}</h2>
  </div>
  )
}

export default Picture