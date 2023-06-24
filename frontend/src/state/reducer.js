import { ACTIONS } from "./StateProvider";

const {
    SET_USER,
    SET_CHATS_SIDE_BAR,
    SET_SOCKET,
    SET_CHATS,
    SET_USERS_ONLINE,
    SET_USERS_TYPING,
    SET_VALID_USER_STATUS
}=ACTIONS
export const initialState={
    user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):undefined, 
    chatsSideBar:localStorage.getItem('chatsSideBar')?JSON.parse(localStorage.getItem('chatsSideBar')):null,
    chats:localStorage.getItem('chats')?JSON.parse(localStorage.getItem('chats')):[],
    usersOnline:localStorage.getItem('usersOnline')?JSON.parse(localStorage.getItem('usersOnline')):[],
    socket:null,
    usersTyping:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)=>{
    switch(action.type){
        case SET_USER: 
            if(action.user)localStorage.setItem('user',JSON.stringify(action.user))
            else{ 
                localStorage.clear()
                state.chats=[]; 
                state.chatsSideBar=null;
            }
            return{
                ...state,
                user:action.user
            }

        case SET_CHATS_SIDE_BAR:
            localStorage.setItem('chatsSideBar',JSON.stringify(action.chatsSideBar))
            return{
                ...state,
                chatsSideBar:action.chatsSideBar
            }
        case SET_SOCKET: 
            return {
                ...state,
                socket:action.socket
            }
        case SET_CHATS: {
            // not working :( 
            let exist=state.chats.map(chat=>chat.id).indexOf(action.chat?.id)
            let newChat=[];
            if( isNaN(exist) ||exist=== -1 ) {
                if(state.chats?.length>0) newChat=[...state.chats,action.chat]
                else newChat=[action.chat]
            }
            else {
                state.chats[exist]=action.chat
                newChat=[...state.chats]
            }
            localStorage.setItem('chats',JSON.stringify(newChat));
            return {
                ...state , 
                chats:newChat
            }
        }
        case SET_USERS_ONLINE:{
            let usersOnline;
            if(action.payload.isOnline){
                usersOnline=Array.from(new Set([...state?.usersOnline,action.payload.userId]))
            }
            else{
                usersOnline=state?.usersOnline?.filter(id=>id!==action.payload.userId)
            }
            localStorage.setItem('usersOnline',JSON.stringify(usersOnline))
            return {
                ...state,
                usersOnline
            }
        }
        case SET_USERS_TYPING:{
            let usersTyping;
            if(action.payload.isTyping){
                usersTyping=Array.from(new Set([...state?.usersTyping,action.payload.userId]))
            }
            else{
                usersTyping=state?.usersTyping?.filter(id=>id!==action.payload.userId)
            }
            return {
                ...state,
                usersTyping
            }
        }
        case SET_VALID_USER_STATUS:{
            if(!state.user) return state;
            localStorage.setItem('user',JSON.stringify({...state.user,isValid:true}))
            return {
                ...state,
                user:{
                    ...state.user,
                    isValid:true
                }
            }
        }
        default : 
            return state;
    }
}

