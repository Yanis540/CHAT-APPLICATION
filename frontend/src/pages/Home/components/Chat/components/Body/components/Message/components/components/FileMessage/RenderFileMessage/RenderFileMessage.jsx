/* eslint-disable no-unused-vars */
import React from 'react'
import { FileTypes } from '../../../../../../../../../../../../utils/functions/content/fileTypes'
import Audio from '../Types/Audio/Audio';
import Image from '../Types/Image/Image'
import Text from '../Types/Text/Text';
const {
    IMAGE,
    AUDIO,
    VIDEO,
    EXEC,
    TEXT,
    EMOJIES,
}=FileTypes
function RenderFileMessage(fileData) {
    const {message}=fileData;
    return (
        <>
        {
            message.fileExtension===IMAGE &&
                <Image {...fileData}/> 
        }
        {
            message.fileExtension===AUDIO &&
                <Audio {...fileData}/> 
        }
        {
            message.fileExtension===TEXT &&
                <Text {...fileData} /> 
        }
        </>
  )
}

export default RenderFileMessage