import React from 'react'
import { Avatar, NumberOfAvatars, ToolTipDisplay, ToolTip } from '../../../../../../../../layouts/layouts'

function UsersSawMessage({users}) {
    const usersLength=users?.length

  return (
    <div className='flex flex-row items-center justify-end -space-x-[2px] pb-[4px]'>
        {
            users&&
            usersLength>0&& 
            users?.slice(0,8).map(user=>
                <ToolTip  key={user?._id}>
                    <Avatar  url={user?.photoURL} xsmall /> 
                    <ToolTipDisplay elements={[user?.name]} /> 
                </ToolTip>
            )
        }
        {
            users&&
            usersLength>0&&usersLength>8&&
            <NumberOfAvatars number={usersLength-8} /> 
        }
    </div>
  )
}

export default UsersSawMessage