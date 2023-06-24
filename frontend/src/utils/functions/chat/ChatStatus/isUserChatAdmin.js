

const isUserFromAdmin=(userId,adminsIds)=>adminsIds?.some(id=>id===userId); 

export default isUserFromAdmin