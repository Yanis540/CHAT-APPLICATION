import React from 'react'
import { Avatar } from '../../../../../../../../layouts/layouts';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import { isUserChatAdmin } from '../../../../../../../../utils/utils';
function Row({user,handleSelectUsers,admins,superAdmin}) {

    let isAdmin=isUserChatAdmin(user?._id,admins);
    let isSuperAdmin=false;
    if(isAdmin) isSuperAdmin= (user._id === superAdmin)?true:false;
  return (
    <div className=' z-10 p-5 bg-[#2a303c] flex items-center border-b border-[#242933] relative'>

        <div className='flex-1'>
            <div className="flex items-center space-x-3">
                <Avatar url={user?.photoURL} online={user?.online}/> 
                <div>
                    <div className="font-bold">{user?.name}</div>
                </div>
            </div>
        </div>
        <div>
            <label className='flex flex-row items-center justify-end gap-[35px] mr-[5px] '>
                {
                    isSuperAdmin?(
                        <>
                            <SupervisorAccountRoundedIcon  className='cursor text-green-600'  /> 
                            <AdminPanelSettingsRoundedIcon className='cursor text-red-600'  /> 
                        </>
                    ):(
                        <>
                            {isAdmin&&<SupervisorAccountRoundedIcon  className='cursor text-green-600'  /> }
                            <input type="checkbox" className="checkbox" onChange={e=>handleSelectUsers(e,user._id)} />
                        </>
                    )
                }

            </label>
        </div>
  </div>
  )
}

export default Row