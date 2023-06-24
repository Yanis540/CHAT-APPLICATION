//! packages
import { useParams} from 'react-router-dom'
import { ToastContainer  } from 'react-toastify';

//! context 
import {  useStateValue } from './state/StateProvider';

//! hooks 
import { useWatchAuth } from './features/authentification/authentification.js';
import { useJoinChat, useSocket } from './features/chat/chat';


//! components 
import { Navbar } from './layouts/layouts';

//! Routes
import {AuthValidRoutes,InvalidAuthRoutes,NoAuthRoutes} from './Routes/Routes.jsx'


//! styles 
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [{user,socket},dispatch]=useStateValue()
  const {chatID}=useParams()

  //!   Hooks
  useWatchAuth(dispatch,user)
  useSocket(dispatch,user);
  useJoinChat(user?.id,user?.joinedChats,socket,chatID)



  return (
    <div className="App h-screen flex flex-col " data-theme='dark'>
      {user&& <Navbar/>} 
      {
        !user?(
          <NoAuthRoutes /> 
        ):(
          user?.isValid?(
            <AuthValidRoutes />
          ):(
            <InvalidAuthRoutes /> 
          )
        )
      }
      <ToastContainer /> 
    </div>
  );
}

export default App;
