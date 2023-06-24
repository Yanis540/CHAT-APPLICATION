const messageBorderRadius=(isLoggedInUserTheSender,isNextMessageSentByTheSameUser,isPreviousMessageSentByTheSameUser)=> 
        // message of user is between two that he sent 
        isNextMessageSentByTheSameUser && isPreviousMessageSentByTheSameUser?(
            `rounded-lg`
        ):(
            //user sent one message that sets between two messages of other users 
            !isNextMessageSentByTheSameUser && !isPreviousMessageSentByTheSameUser?(
                `${isLoggedInUserTheSender?'rounded-l-lg rounded-tr-lg':'rounded-r-lg rounded-tl-lg'}`
            ):(
                // next message is sent by the user but not the previous 
                isNextMessageSentByTheSameUser?(
                    ` ${isLoggedInUserTheSender?'rounded-l-lg rounded-tr-lg':'rounded-r-lg rounded-tl-lg'}`
                ):(
                    // previous message sent by the user but not the next 
                    `${isLoggedInUserTheSender?'rounded-l-lg rounded-tr-lg':'rounded-r-lg rounded-tl-lg'}`
                )
            )
        )
    ;
export default messageBorderRadius