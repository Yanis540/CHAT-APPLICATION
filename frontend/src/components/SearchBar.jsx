import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
    const  [input,setInput]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
        setInput('')
    }
  return (
    <form onSubmit={onSubmit} className="form-control px-5 flex flex-row items-center justify-center  ">
        <SearchIcon /> 
        <input value={input} onChange={e=>setInput(e.target.value)}  type="text" placeholder="Search" className="input  input-bordered outline-0 flex-1" />
        <button type="submit" className='hidden'></button>
    </form>
  )
}

export default SearchBar