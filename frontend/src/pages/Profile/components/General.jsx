import Other from "./Settings/Other"
import Picture from "./Settings/Picture"

function General({other}) {

  return (
    <>
      {
        !other?(
          <Picture  /> 
        ):(
          <Other  /> 
        )
      }
    </>
  )
}

export default General