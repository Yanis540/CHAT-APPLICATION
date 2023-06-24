import React from 'react'
import { Typing } from '../layouts'

function UsersTyping({usersWhoAreTyping}) {
  return (
    <>
      {
        usersWhoAreTyping?.length>0 && 
        usersWhoAreTyping.map(user=>
          <Typing key={user?._id} user={user} /> 
        )
      }
    </>
  )
}

export default UsersTyping