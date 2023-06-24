const isSeenByOthers=(array,userId,senderID)=>array?.some(id=>id!==userId&& id!==senderID)
export default isSeenByOthers