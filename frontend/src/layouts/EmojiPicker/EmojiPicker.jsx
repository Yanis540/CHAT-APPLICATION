import React from 'react'
import Picker from 'emoji-picker-react'
function EmojiPicker({onEmojiClick}) {
  return (
    <div className='emoji-picker'>
        <Picker onEmojiClick={onEmojiClick}/>
    </div>
  )
}

export default EmojiPicker