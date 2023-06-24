import {useEffect} from 'react'
import { toast } from 'react-toastify'

function useError({error}) {
    useEffect(()=>{
     if(error)toast.error(error.message)  
    },[error])
}

export default useError