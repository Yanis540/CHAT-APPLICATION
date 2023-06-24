import UsersSawMessage from './UsersSawMessage';
import { timeFormat }  from '../../../../../../../../utils/utils'

function SeenAt(data) {
    // eslint-disable-next-line no-unused-vars
    const {message,NotGroupChat,usersNamesWhoSawMessage,usersWhoSawMessage}=data;

    const timeThatHaveBeenPassedSinceLastSeen=timeFormat(message?.lastHourSeen);
    return (
        <div className='text-[12px] absolute right-0 bottom-[-50%] w-[100%] text-gray-400  text-right pt-5  '>
            {NotGroupChat?`Seen ${timeThatHaveBeenPassedSinceLastSeen} Ago`:!usersWhoSawMessage?.length?'':<UsersSawMessage users={usersWhoSawMessage} /> } 
        </div>
    )
}

export default SeenAt