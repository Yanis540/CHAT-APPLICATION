import { isSeenByOthers } from "../../../../../../../../../utils/utils";

const CanShowSeen=({message,groupChat,isLoggedInUserTheSender,nextMessage,user,users})=>{
    if(nextMessage) return {canShowSeen:false}
    const seenBy=message?.seenBy;
    const seenByOthers=isSeenByOthers(seenBy,user?.id,message?.user?._id)
    const seenByFiltered=seenBy?.filter(id=>id!==user?.id && id!==message?.user?._id);

    const NotGroupChatCondition=!groupChat && isLoggedInUserTheSender&&!nextMessage&&seenByOthers;
    const GroupChatCondition=groupChat && !nextMessage && seenByOthers;

    const canShowSeen= GroupChatCondition || NotGroupChatCondition;

    
    const usersWhoSawMessage=users?.filter(userFromChat=>seenByFiltered?.includes(userFromChat?._id))
    let usersNamesWhoSawMessage=usersWhoSawMessage?.slice(0,2).map(user=>user.name)?.join(',');
    if(usersNamesWhoSawMessage && usersWhoSawMessage?.length>2) usersNamesWhoSawMessage+=` And ${usersWhoSawMessage?.length-2} Others `;
    return {
        canShowSeen,
        GroupChatCondition,
        NotGroupChatCondition,
        usersWhoSawMessage,
        usersNamesWhoSawMessage
    }
}
export default CanShowSeen