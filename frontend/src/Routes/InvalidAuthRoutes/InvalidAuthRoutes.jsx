import { useRoutes } from 'react-router-dom'
import Invalid from "../../pages/Invalid/Invalid"
import NotFound from "../../pages/NotFound/NotFound"
function InvalidAuthRoutes() {
    const InvalidAuthRoutes=useRoutes([
        {
            index:true,
            element:<Invalid />
        },
        {
            path:"*",
            element:<NotFound />
        },
    ])
    return InvalidAuthRoutes

}

export default InvalidAuthRoutes