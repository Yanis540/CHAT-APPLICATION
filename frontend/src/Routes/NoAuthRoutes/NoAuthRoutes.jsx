import { useRoutes } from 'react-router-dom'
import Login from "../../pages/Login/Login"
import NotFound from "../../pages/NotFound/NotFound"
import Register from "../../pages/Register/Register"

function NoAuthRoutes() {
    const NoAuthRoutes=useRoutes([
        {
            index:true,
            element:<Login />
        },
        {
            path:"/register",
            element:<Register />
        },
        {
            path:"*",
            element:<NotFound login />
        }
    ])
    return NoAuthRoutes
}

export default NoAuthRoutes