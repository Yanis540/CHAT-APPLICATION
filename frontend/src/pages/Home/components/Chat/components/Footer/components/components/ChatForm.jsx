import { FileSelected, Input } from '../../../../../../../../layouts/layouts'
import SendIcon from '@mui/icons-material/Send';
import { ChatInputClass } from './classes/ChatInputClass';

function ChatForm(data) {
  const {loading,onSubmit,selectedFile,setSelectedFile,input,setInput}=data

  return (
    <form onSubmit={onSubmit} className='flex-1 relative'>
      {
        selectedFile && 
        <FileSelected file={selectedFile} setFile={setSelectedFile} />
      }
      <Input input={input} setInput={setInput} placeHolder='Enter Your Message' customClass={ChatInputClass} >
        </Input> 
      {
        !loading&&(input|| selectedFile)&& 
        <SendIcon onClick={e=>onSubmit(e)} className='cursor-pointer absolute text-gray-500 rounded  top-[25%] right-0' />  
      }
    </form>
  )
}

export default ChatForm