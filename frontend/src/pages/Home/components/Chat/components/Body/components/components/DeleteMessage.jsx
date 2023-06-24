
function DeleteMessage({hide,handleClick}) {
  return (
    <div className={`absolute bottom-0 flex flex-col items-center ${hide &&'hidden' }  mb-6 `} >
      <span className=" flex flex-col gap-[4px] relative z-10 p-[6px] text-SM leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md ">
        <h2 className=' pr-4 py-2 hover:bg-gray-400 ease-in-out transition-[300ms] text-white rounded  w-full text-left' onClick={handleClick}>Delete </h2>
      </span>
      <div className="w-3 h-3 -mt-2 rotate-[45deg] bg-gray-700"></div>
      </div>
  )
}

export default DeleteMessage