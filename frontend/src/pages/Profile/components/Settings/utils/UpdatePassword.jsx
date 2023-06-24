import {useState ,useEffect} from 'react'
import {toast} from 'react-toastify'
import { Input } from '../../../../../layouts/layouts';
import { useStateValue } from '../../../../../state/StateProvider';
import { useUpdatePassword } from '../../../../../features/user/user';

function UpdatePassword() {
    const [{user}]=useStateValue();

    const [password,setPassword]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const {data,error,execute:updatePassword}=useUpdatePassword({token:user?.accessToken})

    const onSubmit=async(e)=>{
        e.preventDefault();
        if(!password || !newPassword || !confirmPassword) return toast.error('Fields Must Not Be Empty');
        if(newPassword!==confirmPassword) return toast.error("Password Not Matching 🙉🙉");
        await updatePassword({password,newPassword})

    }
    useEffect(()=>{
        if(error){
            toast.error(error.message)
            return ()=>{}
        }
        if(data){
            toast.success('Passowrd Updated 😁😁😁 !');
            setPassword('')
            setNewPassword('')
            setConfirmPassword('')
            return ()=>{}
            
        }
    },[data,error])
    const textClass=' mb-5'
  return (
    <form onSubmit={onSubmit} className='p-5 flex flex-col justify-start items-center  overflow-y-scroll scrollbar-hide' >
        <h2 className={textClass}>Current Password </h2>
        <Input input={password} setInput={setPassword} password /> 
        <h2 className={textClass +' mt-5'}>New Password </h2>
        <Input input={newPassword} setInput={setNewPassword} password /> 
        <h2 className={textClass +' mt-5'}>Confirm Password </h2>
        <Input input={confirmPassword} setInput={setConfirmPassword} password /> 
        <button type='submit' className="btn btn-outline mt-5 ">Submit</button>
    </form>
  )
}

export default UpdatePassword