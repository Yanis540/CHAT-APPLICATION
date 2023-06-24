import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddUser from './Modal/AddUser';
import { Link , useParams } from 'react-router-dom'
import { useStateValue } from '../../../../../../state/StateProvider';
import { isChatActive }  from '../../../../../../utils/utils';
import { Avatar } from '../../../../../../layouts/layouts';
import { isUserChatAdmin } from '../../../../../../utils/utils';
import { useChatValue } from '../../../../../../features/chat/chat';

function ChatHeader() {
  //! context getting
  const [{user,usersOnline}]=useStateValue()
  const [{chat}]=useChatValue()
  const {groupChat,photoURL,chatName,users,admins=[]}=chat;

  const canShowSettings=isUserChatAdmin(user?.id,admins)
  const usersIds=users?.map(user=>user._id)
  
  const online=isChatActive(usersIds,usersOnline)
  const {chatID}=useParams()

  return (
    <div className='chatHeader border-b border-gray-800 flex flex-col w-full h-[80px]'>
      <>
        <div className='flex flex-row items-center justify-start p-5'>
          <div className="flex flex-row items-center justify-between gap-[10px]">
            <Avatar url={photoURL} online={online} />
            <h2 className="capitalize text-gray-200  font-bold text-[1.25rem]">{chatName}</h2>
          </div>
          <div className="flex flex-row items-center justify-end flex-1 gap-[10px]">
            {/* Add People */} 
            {
              groupChat&& 
              <label htmlFor='add_users_modal' className='modal-button'>
                <AddCircleRoundedIcon className='cursor-pointer' /> 
            </label>
            }


            {/* Settings */}
            {   
              groupChat&& canShowSettings && 
              <Link to={`/chat/${chatID}/settings`}> 
                <SettingsIcon className='cursor-pointer'/> 
              </Link> 
            }

            {/*  Show Users*/}
            <label htmlFor="users-list" className="modal-button">
              <InfoIcon  className='cursor-pointer' /> 
            </label>
          </div>
        </div>
        <input type="checkbox" id="add_users_modal" className="modal-toggle" />
        {/* displaying the users */}
        
        <AddUser user={user} chatID={chatID} users={users}/>

      </>

    </div>
  )
}

export default ChatHeader