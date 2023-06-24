import React from 'react'
import General from './components/General'

import SideBar from './components/SideBar'

function Profile({other}) {
  return (
    <div className='profile flex flex-col flex-1 max-h-[calc(100%-64px)]'>
        <div className="flex flex-row  flex-1 w-full dark:bg-gray-900  dark:text-gray-100   mx-auto h-4/5 rounded shadow-lg hover:shadow-2xl ease-in-out duration-150">
            {/* SideBar  */}
            <SideBar other={other}  /> 
            {/* conditionnal rendring depending */}
            <div className='flex-[0.8] h-full overflow-y-scromm scrollbar-hide'>
              <General  other={other} /> 
            </div>
        </div>
    </div>
  )
}

export default Profile