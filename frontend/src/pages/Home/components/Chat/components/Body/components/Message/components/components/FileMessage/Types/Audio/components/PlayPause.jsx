import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
function PlayPause({playing,toggle}) {
  return (
    <>
        {
            playing?(
                <PauseOutlinedIcon  
                    onClick={()=>toggle()} 
                    className='cursor-pointer' 
                /> 
            ):(
                <PlayCircleFilledWhiteOutlinedIcon 
                    onClick={()=>toggle()} 
                    className='cursor-pointer' 
                /> 
            )
        }
    </>
  )
}

export default PlayPause