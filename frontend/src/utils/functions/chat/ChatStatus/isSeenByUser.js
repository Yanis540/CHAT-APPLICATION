const isSeenByUser=(seenBy,id)=>seenBy?.some(seen_id=>seen_id===id);
export default isSeenByUser 