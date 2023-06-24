/* eslint-disable jsx-a11y/anchor-has-content */
import { ToolTip ,  ToolTipDisplay } from '../../../../../../../../../../../../../layouts/layouts';
function Image(data) {
 
    const {
        // eslint-disable-next-line no-unused-vars
        handleDownload,
        url,
        message,
        borderRadius, 
        dateDisplay , 
        hoursOfDisplay
    }=data ; 

    return (
        <div className=' '>
            <ToolTip>
                <img      
                    // src={'https://lh3.googleusercontent.com/a-/AOh14GiMIG9MnHmOWtoSDw9UKljFzVklztvVdqhAoOqd=s96-c'} 
                    src={url} 
                    alt={message?.fileName}
                    className={`cursor-pointer ${borderRadius}  max-h-[200px] object-contain flex flex-wrap flex-1`} 
                />
                <ToolTipDisplay elements={[dateDisplay,hoursOfDisplay]} /> 

            </ToolTip>


        </div>

    )
}

export default Image