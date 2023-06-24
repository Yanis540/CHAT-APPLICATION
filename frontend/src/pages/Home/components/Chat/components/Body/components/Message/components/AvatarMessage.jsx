import React from 'react'
import { Avatar, ToolTip, ToolTipDisplay } from '../../../../../../../../../layouts/layouts'
import { useStateValue } from '../../../../../../../../../state/StateProvider'
import { isUserActive } from '../../../../../../../../../utils/utils'
import { IsNextMessageSentByTheSameUser } from '../../assets/assets'

function AvatarMessage({message,nextMessage}) {
    const [{usersOnline}]=useStateValue()

    const online=isUserActive(message?.user?._id,usersOnline)
    const isNextMessageSentByTheSameUser=IsNextMessageSentByTheSameUser(message,nextMessage)

  return (
    <ToolTip>
        <ToolTipDisplay elements={[message?.user?.name]}  /> 
        <Avatar 
          url={message.user?.photoURL}
          online={online}
          small 
          hide={isNextMessageSentByTheSameUser} 
        />
    </ToolTip>
  )
}

export default AvatarMessage