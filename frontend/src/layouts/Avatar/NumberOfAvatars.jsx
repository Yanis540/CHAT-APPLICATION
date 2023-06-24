import React from 'react'

function NumberOfAvatars({number=0}) {
    if(!number) return <></>
    return (
        <div  tabIndex='0' className="avatar placeholder relative ">
            <div className="w-4 h-4 flex flex-col justify-center items-center bg-neutral-focus text-neutral-content rounded-full  ">
                <span>+{number}</span>
            </div>
        </div>
    )
}

export default NumberOfAvatars