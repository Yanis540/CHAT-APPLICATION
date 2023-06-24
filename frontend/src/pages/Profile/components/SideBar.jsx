import React from 'react'
import {Link} from 'react-router-dom'
function SideBar({other}) {
  const basicClass='text-white p-5 border-b border-gray-700 hover:bg-gray-700 ease-in-out duration-200 capitalize'
  const special='bg-gray-800'
    
  return (
    <div className=' flex-[0.2] flex flex-col justify-center h-full overflow-y-scroll scrollbar-hide border-r border-gray-800'>
      <Link to='/profile'><h2 className={basicClass+' border-t '+(!other && special)}>General</h2></Link>
      <Link to='/profile/other'><h2 className={basicClass +' '+(other && special)}>other</h2></Link>
    </div>
  )
}

export default SideBar