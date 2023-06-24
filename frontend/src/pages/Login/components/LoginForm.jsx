import React from 'react'
import { EmailInput,PasswordInput } from '../../../layouts/layouts'
import RedirectToRegister from './components/RedirectToRegister'

function LoginForm({onSubmit,dataForEmailInput,dataForPasswordInput,setInput}) {
  return (
    <div className='flex-1 w-full flex flex-col items-center justify-center '>
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2  ">
            <EmailInput setInput={setInput} dataForEmailInput={dataForEmailInput} />  
            <PasswordInput setInput={setInput} dataForPasswordInput={dataForPasswordInput} /> 
            
            <div className="flex items-center justify-between">
                <button type='submit' className="btn hover:btn-black  btn-outline btn-xs sm:btn-sm md:btn-md items-center flex-1" >
                    Sign In
                </button>
                {/* <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a> */}
            </div>
            <RedirectToRegister /> 
        </form>
    </div>
  )
}

export default LoginForm