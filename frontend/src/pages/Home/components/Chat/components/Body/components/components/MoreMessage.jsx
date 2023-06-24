import {useState} from 'react'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { emitDeleteMessage } from '../../../../../../../../features/chat/chat';
import { ToolTip } from '../../../../../../../../layouts/layouts';
import DeleteMessage from './DeleteMessage';
function MoreMessage({socket,message,chatID}) {
  const [hide,setHide]=useState(true);
  const handleMoreDown=e=>setHide(!hide);
  const handleDeleteMessage=()=>emitDeleteMessage(socket,{messageId:message?.id,chatID})
  
  return (
    <div className={`${hide?'opacity-0 hover:opacity-100':''} cursor-pointer`} onClick={handleMoreDown}>
      <ToolTip>
        <MoreVertRoundedIcon  />
        <DeleteMessage hide={hide} handleClick={handleDeleteMessage} />
      </ToolTip>
    </div>
  )
}

export default MoreMessage