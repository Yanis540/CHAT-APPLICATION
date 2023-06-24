import React from 'react'
import { EmailInput, PasswordInput, TextInput } from '../../../layouts/layouts'

import GoToLoginPage from './components/GoToLoginPage'

function RegisterForm(data) {
  const {
    dataForNameInput,
    dataForPhotoURLInput,
    dataForPasswordInput,
    dataForEmailInput,
    onSubmit,
    dataForConfirmPasswordInput,
    setInput
  } = data
  return (
    <div className='flex-1 w-full flex flex-col items-center justify-center '>
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2  ">
        <TextInput setInput={setInput} dataForTextInput={dataForNameInput} text={'Name'} /> 
        <TextInput setInput={setInput} dataForTextInput={dataForPhotoURLInput} text={'Photo URL'} /> 
        <EmailInput setInput={setInput} dataForEmailInput={dataForEmailInput} />  
        <PasswordInput setInput={setInput} dataForPasswordInput={dataForPasswordInput} /> 
        <PasswordInput setInput={setInput} dataForPasswordInput={dataForConfirmPasswordInput} label={"Confirm Password"} text={'Please confirm the password.'} /> 

        <div className="flex items-center justify-between">
          <button type='submit' className="btn hover:btn-black  btn-outline btn-xs sm:btn-sm md:btn-md items-center flex-1" >
            Register
          </button>
        </div>
        <GoToLoginPage /> 
      </form>
    </div>

  )
}

export default RegisterForm