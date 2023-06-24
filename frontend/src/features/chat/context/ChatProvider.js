import { useContext , createContext, useReducer } from "react";


export const CHAT_ACTIONS={
    SET_CHAT:'SET_CHAT',
    SET_LOADING:'SET_LOADING',
    SET_ERROR:'SET_ERROR'

}

export const ChatStateContext=createContext();

export const ChatProvider=({children,initialChatState,reducer})=>{
    return (
        <ChatStateContext.Provider value={useReducer(reducer,initialChatState)}>
            {children}
        </ChatStateContext.Provider>
    )
}


export const useChatValue=()=>useContext(ChatStateContext)