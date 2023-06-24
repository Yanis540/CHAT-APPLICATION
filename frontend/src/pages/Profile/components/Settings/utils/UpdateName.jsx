import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import { ACTIONS, useStateValue } from '../../../../../state/StateProvider'
import { Input } from '../../../../../layouts/layouts'
import { useUpdateName } from '../../../../../features/user/user'

const {
    SET_USER
}=ACTIONS
function UpdateName() {
    const [{user},dispatch]=useStateValue();
    const {data,error,execute:updateName}=useUpdateName({token:user?.accessToken})
    const [input,setInput]=useState('')
    // const [canUpdate,setCanUpdate]=useState(false)
    const onSubmit=async(e)=>{
        e.preventDefault();
        if(!input) return toast.error('Name Can Not Be Empty');
        await updateName({name:input})
    }
    useEffect(()=>{
        if(error){
            toast.error(error.message)
        }
        if(data){
            dispatch({
                type:SET_USER,
                user:{
                    ...user,
                    name:data?.name
                }
            })
            toast.success('Name Updated 😁😁😁 !');
            setInput('')
            
        }
        return ()=>{}

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data,error,dispatch])
  return (
    <form onSubmit={onSubmit} className='p-5 flex flex-col justify-start items-center border-b md:border-r border-gray-800 overflow-y-scroll scrollbar-hide '>
        <h2 className='mb-5 capitalize'>Enter Your new Name  </h2>
        <Input input={input} setInput={setInput} placeHolder={'Enter Name'} /> 
    </form>
  )
}

export default UpdateName