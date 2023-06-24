

import { CHAT_ACTIONS } from "./ChatProvider";

const {
    SET_CHAT,
    SET_LOADING,
    SET_ERROR
}=CHAT_ACTIONS
export const initialChatState={

    chat:null,
    loading:true,
    error:null

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)=>{
    switch(action.type){
        case SET_CHAT:
            return {
                loading:action.loading,
                chat:{...action.chat},
            }
        case SET_LOADING:
            return {
                ...state,
                loading:action.loading
            }
        case SET_ERROR:
            return{
                ...state,
                error:action.error
            }
        default : 
            return state;
    }
}

