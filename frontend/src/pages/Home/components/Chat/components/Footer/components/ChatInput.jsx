import { useState } from 'react'
import { EmojiPicker, FileSelector } from '../../../../../../../layouts/layouts';
import { useStateValue } from '../../../../../../../state/StateProvider';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { 
  emitMessage, 
  useChatValue, 
  useTyping 
} from '../../../../../../../features/chat/chat';
import ChatForm from './components/ChatForm';
import { useParams } from 'react-router-dom';
function ChatInput() {
  const [{user,usersTyping,socket}]=useStateValue();
  const [{loading}]=useChatValue()

  const {chatID}=useParams();
  // eslint-disable-next-line no-unused-vars
  const [selectedFile,setSelectedFile]=useState(null)
  const [input,setInput]=useState('')
  const [picker,setPicker]=useState(false);

  
  const togglePicker=e=>setPicker(!picker);
  const onEmojiClick = (event, emojiObject) => {
    setInput((oldInput)=>oldInput+emojiObject?.emoji)
  };
  
  const onSubmit=async(e)=>{
    // send with socket.io 
    e.preventDefault();
    if(!loading){
      //! if you didn't select a file and if you didn't select you can't send 
      if(!selectedFile&& !(input && input.trim())) return ;
      emitMessage(socket,{file:selectedFile,message:input, chatID})
      if(selectedFile) setSelectedFile(null)
      else setInput('')
      return 
    }
  }

  const onChange=e=>{setSelectedFile(e.target.files[0])}
  useTyping({input,socket,chatID,user,usersTyping})

  return (
    <>
      <EmojiEmotionsIcon  className={`outlined cursor-pointer text-gray-200 drop-shadow-sm `}fontSize='medium' onClick={togglePicker}/>
      { picker && <EmojiPicker onEmojiClick={onEmojiClick}  />  }
      <FileSelector onChange={onChange}  />

      <ChatForm 
        loading={loading}
        onSubmit={onSubmit}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        setInput={setInput}
        input={input}
      />
    </>
  )
}

export default ChatInput