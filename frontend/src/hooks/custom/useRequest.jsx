import {useState,useEffect} from 'react'
import {makeRequest} from '../hooks.js';

/**
 * 
 * @param {(url,token,options)}  ({url,token,options}) 
 * @param url : end point  of the server 
 *  @param options : {data,params,method}
 * 
 */
function useRequest({url,token,options}) {
    const [data,setData]=useState(null)
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const fetch=async({url,token,options})=>{
      // params are passed because the get request in axios do not allow to pass body (we will find them in the query object in the backend) 
      setLoading(true)
      const response=await makeRequest({url,token,options})
      if(response.data.error|| response.error){ 
        const message=response?.data?.error?response.data.error.message:response.error.message
        const cause=response?.data?.error?response.data.error.cause:response.error.cause;
        setLoading(false)
        return setError({
            message:message,
            cause:cause
        })
    }
      setLoading(false)
      setData(response.data)
    }
    
    useEffect(()=>{
      setError('')
      setData(null)
      if(url){
        fetch({url,token,options})
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])
    return {error,data,loading,fetch}
}

export default useRequest