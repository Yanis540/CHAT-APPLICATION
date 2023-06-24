import {useEffect} from 'react'
import { ACTIONS } from '../../../../../state/StateProvider'
import { sortChatsByDate } from '../../../../../utils/utils'
const {
    SET_CHATS_SIDE_BAR
  }=ACTIONS
function useSortSideBarChats({error,data,dispatch}) {
    useEffect(()=>{
        if(data?.chats){
            // sorting array to put the latest message on the top 
            sortChatsByDate(data?.chats)
            dispatch({
                type:SET_CHATS_SIDE_BAR,
                chatsSideBar:data?.chats
            })
        }
    },[data?.chats,dispatch])
}

export default useSortSideBarChats