import React from 'react'

function ChatFooterError({error,loading,chat,chatFromState}) {
  return (
    <>
        {
            (loading ||chatFromState)?(
                <></>
            ):(
                !loading && error &&(
                    <div className="flex-1 cursor-not-allowed">
                        <h2 className='capitalize text-[16px] text-gray-800 text-center'>you can't respond to this chat </h2>
                    </div>
                )
            )
        }
    </>
  )
}

export default ChatFooterError