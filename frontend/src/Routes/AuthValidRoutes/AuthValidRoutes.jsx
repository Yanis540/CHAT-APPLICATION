import { useRoutes } from 'react-router-dom'
import Home from "../../pages/Home/Home"
import NotFound from "../../pages/NotFound/NotFound"
import Profile from "../../pages/Profile/Profile"
function AuthValidRoutes() {
    const AuthValidRoutes=useRoutes([
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/profile/",
            children:[
                {
                    index:true,
                    element:<Profile />
                },

                {
                    path:"other",
                    element:<Profile other />
                }
            ]
        },
        {
            path:"/chat/:chatID/",
            children:[
                {
                    index:true,
                    element:<Home chat />,
                },
                {
                    path:"settings",
                    element:<Home settings />,
                }
            ]

        },
        {
            path:"*",
            element:<NotFound />
        },
    ])
    return  AuthValidRoutes;  
}

export default AuthValidRoutes