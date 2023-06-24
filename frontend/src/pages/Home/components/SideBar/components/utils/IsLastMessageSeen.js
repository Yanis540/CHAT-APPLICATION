import { isSeenByUser } from "../../../../../../utils/utils"

const IsLastMessageSeen=(lastMessage,user)=>{
    return isSeenByUser(lastMessage?.seenBy,user?.id)
}
export default IsLastMessageSeen