import React from 'react'
import { useChatValue } from '../../../../../features/chat/chat';
import User from '../../../../../layouts/User/User'
import { useStateValue } from '../../../../../state/StateProvider'
import { isUserActive }  from '../../../../../utils/utils'

function ChatUsers() {
    const [{usersOnline}]=useStateValue();
    const [{chat}]=useChatValue();
    return (
        <div className="drawer drawer-end pointer-events-none  w-max absolute right-0 overflow-x-hidden scrollbar-hide top-[80px] max-h-[calc(100%-80px)]">
            <input id="users-list" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side bg-transparent overflow-x-hidden scrollbar-hide">
                <label htmlFor="users-list" className="drawer-overlay"></label>
                <div className='flex flex-col bg-base-100 justify-start gap-[5px] p-4 rounded' >
                    <h2 className='w-full text-center font-[700] text-[1.3rem] border-b border-gray-500 pb-2'>Users</h2>
                    {
                        chat?.users&& chat?.users?.length>0 &&
                        chat?.users?.map(user=>{
                            user={...user,online:isUserActive(user?._id,usersOnline)}
                            return <User key={user._id} user={user} />
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default ChatUsers