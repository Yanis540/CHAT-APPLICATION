import SendAndArchiveSharpIcon from '@mui/icons-material/SendAndArchiveSharp';
import {Link} from 'react-router-dom'
import { useStateValue } from '../../../../../state/StateProvider';
import { Avatar } from '../../../../../layouts/layouts';
import { isChatActive } from '../../../../../utils/utils';

function BodyChatElement({chat}) {
    const {photoURL,id,chatName,usersIds}=chat;
    const [{usersOnline}]=useStateValue()
    const online=isChatActive(usersIds,usersOnline)

    return (
        <div className={`p-5 flex flex-row items-center  gap-[10px]  rounded-sm border-b border-b-gray-600 hover:bg-gray-600 ease-in-out duration-150`}>
            <Avatar url={photoURL} online={online}/>
            <div className="flex flex-row justify-between items-center flex-1">
                <h2 className='dark:text-gray-100 capitalize text-[1.2rem] font-bold '>{chatName}</h2>
                <Link to={`/chat/${id}`}><SendAndArchiveSharpIcon fontSize='large' /></Link>
            </div>
        </div>
    )
}

export default BodyChatElement