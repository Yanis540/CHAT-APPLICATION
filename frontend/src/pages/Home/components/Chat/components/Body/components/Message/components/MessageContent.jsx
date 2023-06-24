import {  timeDelay } from '../../../../../../../../../utils/utils';
import { 
  IsNextMessageSentByTheSameUser, 
  IsPreviousMessageSentByTheSameUser, 
  messageBorderRadius 
} from '../../assets/assets';
import BasicMessage from './components/BasicMessage/BasicMessage';
import FileMessage from './components/FileMessage/FileMessage';

function MessageContent({isLoggedInUserTheSender,message,nextMessage,previousMessage}) {
  const isNextMessageSentByTheSameUser=IsNextMessageSentByTheSameUser(message,nextMessage);
  const isPreviousMessageSentByTheSameUser=IsPreviousMessageSentByTheSameUser(message,nextMessage);
  const borderRadius=messageBorderRadius(isLoggedInUserTheSender,isNextMessageSentByTheSameUser,isPreviousMessageSentByTheSameUser);
  const {hoursOfDisplay,dateDisplay}=timeDelay(message?.sentHour);
  const messageIsAfile=message.isFile; 

  return (
    <>
      {
        !messageIsAfile?(
          <BasicMessage 
            message={message} 
            isLoggedInUserTheSender={isLoggedInUserTheSender} 
            borderRadius={borderRadius}   
            dateDisplay={dateDisplay}
            hoursOfDisplay={hoursOfDisplay}
          />
        ):(

          <FileMessage 
            message={message} 
            isLoggedInUserTheSender={isLoggedInUserTheSender} 
            borderRadius={borderRadius}   
            dateDisplay={dateDisplay}
            hoursOfDisplay={hoursOfDisplay}
          /> 
        )
      }
    </>

  )
}

export default MessageContent