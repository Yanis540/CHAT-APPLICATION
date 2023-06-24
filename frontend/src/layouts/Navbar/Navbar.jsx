import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { handleLogout } from '../../features/authentification/authentification.js'
import { useStateValue } from '../../state/StateProvider.js'
import { Avatar } from '../layouts.js'

function Navbar() {
    const [{user},dispatch]=useStateValue()
    const navigate=useNavigate();

    const logout=e=>{
        handleLogout(dispatch,navigate);
    }
  return (
    <div className="navbar bg-base-100 h-[64px] ">
        <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none gap-2">
            {/* <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div> */}
            <div className="dropdown dropdown-end">
                <Avatar url={user?.photoURL} online /> 

                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    {
                        user?.isValid &&
                        (
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                        )
                    }

                    <li><button onClick={logout}>Logout</button></li>
                </ul>
            </div>
        </div>
</div>
  )
}

export default Navbar