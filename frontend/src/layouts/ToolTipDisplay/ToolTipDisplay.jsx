import React from 'react'

function ToolTipDisplay({elements=[]}) {
  return (
    <div className={`absolute bottom-0  flex-col items-center  hidden group-hover:flex  mb-6 `} >
      <span className="relative z-10 p-2 flex flex-col items-center gap-[4px] text-xs leading-none text-center text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
        {
          elements && elements.length>0&& 
          elements.map((element,index)=>(
            <span key={index}> {element}</span>
          ))
        }
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
      
    </div>
  )
}

export default ToolTipDisplay