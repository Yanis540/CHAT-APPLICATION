import DownloadIcon from '@mui/icons-material/Download';
import RenderFileMessage from './RenderFileMessage/RenderFileMessage';
import { useFile } from '../../../../../../../../../../../hooks/hooks';

/* eslint-disable jsx-a11y/anchor-has-content */

function FileMessage(data) {
    const{
        message,
        isLoggedInUserTheSender,
        borderRadius,
        hoursOfDisplay, 
        dateDisplay,
    }=data; 
    const {src,url,downloadFile}=useFile({file:message?.file,fileName:message?.fileName}); 
    const onClick=()=> downloadFile(src);


  
    const fileData={
        src,
        url,
        message,
        handleDownload:onClick, 
        isLoggedInUserTheSender, 
        borderRadius, 
        hoursOfDisplay, 
        dateDisplay
    }
    return (
    <div className={`flex flex-wrap   ${isLoggedInUserTheSender?'flex-row justify-start':'flex-row-reverse justify-end'} max-w-[75%]    items-center   gap-[3px]`}>
        <DownloadIcon 
            className='cursor-pointer duration-150 transition opacity-0 hover:opacity-100' 
            onClick={onClick}
        /> 
        
        <RenderFileMessage {...fileData} /> 
      
    </div>  
    )
}

export default FileMessage