import React from 'react'
import  {default as MaterialUiAvatar}   from '@mui/material/Avatar' ;
function Avatar(data) {
    const {
        online=false , 
        url='',
        xsmall=false,
        small=false,
        medium=true,
        large=false,
        hide=false
    }=data;
    const avatarClass=`avatar relative  ${xsmall && 'border border-zinc-900 '} ${!xsmall && hide?'opacity-0':' '} ${medium && 'cursor-pointer' } ${!xsmall&&(online?'online':'offline')}`
    const imageSize=`${xsmall?'w-4 h-4':small?'w-7 h-7':large?'w-20 h-20':medium&&' w-10 h-10'} rounded-full  `
  return (
    <div className={`relative flex flex-col items-center group`}>
        {url?(
            <div tabIndex="0" className={avatarClass}>
                <div className={imageSize}>
                    <img src={url} alt =''referrerPolicy="no-referrer" className='object-contain'/>
                </div>
            </div>
        ):(
            <label tabIndex="0" className={avatarClass}> 
                <div className={`${imageSize} flex flex-col justify-center items-center`}>
                    <MaterialUiAvatar fontSize='small'  className=' w-2 h-2 object-contain' /> 
                </div>
            </label> 
        )
        }

    </div>
  )
}

export default Avatar