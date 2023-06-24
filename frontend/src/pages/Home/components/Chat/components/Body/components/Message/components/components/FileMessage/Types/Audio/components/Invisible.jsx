

function Invisible({duration,progress,dimensions}) {

    const {width}=dimensions;
    const maxDurationInSec=100
    const durationPercetange=(duration/maxDurationInSec)<=1?duration/maxDurationInSec:1;
    // eslint-disable-next-line no-unused-vars
    const widthAudio=width*(durationPercetange)??100;
    const className=`invisible px-[12] w-[200px] h-[100%] max-w-[75%] text-xs`
    return (
        <div  className={className}>
            &nbsp;
        </div>
    )
}

export default Invisible