import { Avatar } from "../layouts"

function User({user,add,setCheck}) {
  return (
    <div className={`p-5 flex flex-row  flex-wrap items-center ${add?'mt-5':'rounded'}  gap-[10px]  rounded-sm  hover:bg-gray-600 ease-in-out duration-150`}>
        {add&& <input type="checkbox" className="checkbox" onChange={e=>setCheck(e.target.checked)} /> }
        <Avatar url={user?.photoURL} online={user?.online} />
        <div className="flex flex-row justify-between items-center flex-1">
            <h2 className='dark:text-gray-100 capitalize text-[1.2rem] font-bold '>{user?.name}</h2>
        </div>
    </div>
  )
}

export default User