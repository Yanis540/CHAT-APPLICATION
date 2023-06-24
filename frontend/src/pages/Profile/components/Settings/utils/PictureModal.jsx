import {useState,useEffect} from 'react'
import { ACTIONS } from '../../../../../state/StateProvider'
import { Input } from '../../../../../layouts/layouts'
import {toast} from 'react-toastify'
import { useUpdatePhoto } from '../../../../../features/user/user'

const {
    SET_USER
}=ACTIONS
function PictureModal({user,dispatch}) {
    const [input,setInput]=useState('')
    const {data,error,execute:updatePhoto}=useUpdatePhoto({token:user?.accessToken})

    const onSubmit=async(e)=>{
        e.preventDefault();
        await updatePhoto({photoURL:input})
    }
    useEffect(()=>{
        if(error){
            toast.error(error.message)
            setInput('')

        }
        if(data){
            dispatch({type:SET_USER,
                user:{
                    ...user,
                    photoURL:input
                }
            })
            toast.success("Photo Updated  😁😁😁 ! ")
            setInput('');
        }
        return ()=>{}

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data,error,dispatch])
    return (
        <div className="modal">
            <div className="modal-box">
                <div className="modal-action mt-0 h-[40px] pb-[10px]">
                    <label htmlFor="picture-modal" className="cursor-pointer px-[2px]"><svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg></label>
                </div>
                <div className='flex flex-col justify-start'>
                    <h2 className='text-white font-[500] border-b border-gray-600 mb-5 py-5' >Update Your Profile Picture</h2>
                    <form  onSubmit={onSubmit} >
                        <Input input={input} setInput={setInput} placeHolder='URL' /> 
                        <button type='submit' className='hidden'></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PictureModal