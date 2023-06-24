import { useContext , createContext, useReducer } from "react";


export const ACTIONS={
    SET_USER:'SET_USER',
    SET_CHATS_SIDE_BAR:'SET_CHATS_SIDE_BAR',
    SET_SOCKET:'SET_SOCKET',
    SET_CHATS:'SET_CHATS',
    SET_USERS_ONLINE:'SET_USERS_ONLINE',
    SET_USERS_TYPING:'SET_USERS_TYPING',
    SET_VALID_USER_STATUS:'SET_VALID_USER_STATUS'
}

export const StateContext=createContext();

export const StateProvider=({children,initialState,reducer})=>{
    return (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateValue=()=>useContext(StateContext)