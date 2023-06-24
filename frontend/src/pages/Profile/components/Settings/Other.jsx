import React from 'react'
import UpdateName from './utils/UpdateName'
import UpdatePassword from './utils/UpdatePassword'

function Other() {

  return (
    <div className='grid  grid-cols-1 md:grid-cols-2 h-full overflow-y-scroll scrollbar-hide' >
      {/* change name */}
      <UpdateName  />
      {/* change password */}
      <UpdatePassword /> 
    </div>
  )
}

export default Other