import React from 'react'
import { useStateValue } from '../../../../state/StateProvider'
import SendAndArchiveSharpIcon from '@mui/icons-material/SendAndArchiveSharp';
import SearchBar from '../../../../components/SearchBar';
import BodyContent from './components/BodyContent';
function Body() {
  const [{user}]=useStateValue()
  return (
    <>
      <div className='flex-[0.8] p-5 flex flex-col h-full justify-center items-center gap-[10px]'>
        <h2 className='capitalize text-[2rem]'>Welcome , {user?.name}</h2>
        <label htmlFor="my-modal" className="btn btn-outline modal-button">
        <SendAndArchiveSharpIcon fontSize='large' />
        </label>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      {/* here we are going to put the users */}
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action mt-0 h-[40px] pb-[10px]">
            <label htmlFor="my-modal" className="cursor-pointer px-[2px]"><svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg></label>
          </div>
          <div className='flex flex-col justify-start'>
            <SearchBar /> 
            <BodyContent /> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Body