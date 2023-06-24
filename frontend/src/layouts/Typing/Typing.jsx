import React from 'react'
import { Avatar, ToolTipDisplay , ToolTip } from '../layouts'

function Typing({user=null,online=true}) {
  return (
    <div className="flex flex-column items-end  gap-[5px] relative pb-[4px] ">
        <ToolTip>
            <Avatar 
                url={user?.photoURL} 
                online={online} small 
            />
            <ToolTipDisplay elements={[user?.name]} /> 
        </ToolTip>
        <div className='flex flex-row  items-center justify-start flex-1 '>
            <div className='p-2 bg-[#3E4042]  max-w-[75%]   flex flex-wrap rounded-r-lg rounded-tl-lg '>
                <div className={`relative flex flex-row items-center py-[5px] px-1 gap-[5px] `} >
                    <div className='w-[7px] h-[7px] bg-[#fff] rounded-[50%]  dot-typing-left '></div>
                    <div className='w-[7px] h-[7px] bg-[#fff] rounded-[50%]  dot-typing-center'></div>
                    <div className='w-[7px] h-[7px] bg-[#fff] rounded-[50%]  dot-typing-right'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Typing