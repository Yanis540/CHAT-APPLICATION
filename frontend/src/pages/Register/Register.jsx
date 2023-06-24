import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useRegister } from '../../features/authentification/authentification';
import { useStateValue } from '../../state/StateProvider';
import RegisterForm from './components/RegisterForm';

function Register() {
    // eslint-disable-next-line no-empty-pattern, no-unused-vars
    const [{},dispatch]=useStateValue();
    const [form,setForm]=useState({
        name:'',
        photoURL:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const {name,photoURL,email,password,confirmPassword}=form;
    const {data,error,execute:register}=useRegister()
   
    const onSubmit=async(e)=>{
        e.preventDefault()
        const array=[name,email,password,confirmPassword]
        for(let element of array) if(!element|| ! element.trim()) return toast.error('Fields Required');
        if(password!==confirmPassword) return toast.error("Password don't match");
        await register({
            name,
            photoURL,
            email,
            password,
            confirmPassword,
        })
    }
    useEffect(()=>{
        if(error) toast.error(error.message);

    },[error])
    useEffect(()=>{
        if(data&& data.message) {
    
            toast.success(data.message)
            setForm({name:'',photoURL:'',email:'',password:'',confirmPassword:''})
    
        }
        return ()=>{
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    const dataForNameInput={name:'name',input:name,placeHolder:'Name',isForm:true}
    const dataForPhotoURLInput={name:'photoURL',input:photoURL,placeHolder:'Photo URL',isForm:true,}
    const dataForEmailInput={name:'email',input:email,placeHolder:'Email',isForm:true,}
    const dataForPasswordInput={name:'password',input:password,isForm:true}
    const dataForConfirmPasswordInput={name:'confirmPassword',input:confirmPassword,isForm:true}
    const dataForRegisterForm={dataForNameInput,dataForPhotoURLInput,dataForPasswordInput,dataForEmailInput,onSubmit,dataForConfirmPasswordInput} 
  return (
    <div className='h-screen flex flex-col items-center justify-center w-4/5 mx-auto gap-y-2'>
        <h2 className='btn btn-ghost normal-case text-xl mb-5 mt-3 '>Chat</h2>
        <RegisterForm {...dataForRegisterForm} setInput={setForm} />
    </div>
  )
}

export default Register