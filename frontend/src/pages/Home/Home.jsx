import Body from './components/Body/Body'
import SideBar from './components/SideBar/SideBar'
import Chat from './components/Chat/Chat'
import ChatContextProvider from './components/Chat/context/ChatContextProvider'
function Home({chat=false,settings=false}) {
  return (
    <div className='home flex flex-col flex-1 max-h-[calc(100%-64px)]'>
      <div className='flex flex-row  flex-1 w-full dark:bg-gray-900  dark:text-gray-100   mx-auto h-4/5 rounded shadow-lg hover:shadow-2xl ease-in-out duration-150  '>
        {/* siderbar */}
        <SideBar /> 
        {/* If You're on the Home Page we will render the Body , othewise the Chat Component */}
        {
          !chat && !settings?(

            <Body /> 
          ):(
            <ChatContextProvider>
              <Chat settings={settings} />
            </ChatContextProvider>
          )
        }
      </div>
    </div>
  )
}

export default Home