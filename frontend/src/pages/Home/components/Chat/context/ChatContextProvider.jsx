import React from 'react'
import { ChatProvider } from '../../../../../features/chat/context/ChatProvider';
import ChatReducer, { initialChatState } from '../../../../../features/chat/context/ChatReducer';

function ChatContextProvider({children}) {
    return (
        <ChatProvider initialChatState={initialChatState} reducer={ChatReducer} >
            {children}
        </ChatProvider>
    )
}

export default ChatContextProvider