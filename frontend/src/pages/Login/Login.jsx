import { useState} from 'react'
import './Login.css'
import { useStateValue} from '../../state/StateProvider.js'
import {  useLogin } from '../../features/authentification/authentification.js';
import LoginForm from './components/LoginForm';
import LoginEffects from './effects/LoginEffects';
import { toast } from 'react-toastify';

function Login() {
    // eslint-disable-next-line no-empty-pattern
    const [{},dispatch]=useStateValue();
    const [form,setForm]=useState({
      email:'',
      password:''
    })
    const {email,password}=form;
    const {data,error,execute:login}=useLogin()
    const onSubmit=async(e)=>{
      e.preventDefault();
      if(!email || !password) return toast.error('Email/Password Required')
      await login({email,password})
    }
    LoginEffects({error,data,dispatch,setForm})

    const dataForEmailInput={name:'email',input:email,setInput:setForm,placeHolder:'Email',isForm:true,}
    const dataForPasswordInput={name:'password',input:password,setInput:setForm,isForm:true}
    const dataForRegisterForm={dataForPasswordInput,dataForEmailInput,onSubmit} 
  return (
    <div className='h-screen flex flex-col items-center justify-center w-4/5 mx-auto gap-y-2'>
        <h2 className='btn btn-ghost normal-case text-xl mb-5 mt-3 '>Chat</h2>
        <LoginForm {...dataForRegisterForm} setInput={setForm} /> 
    </div>
  )
}

export default Login