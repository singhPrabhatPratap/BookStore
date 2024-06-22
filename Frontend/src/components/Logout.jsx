import React, { useContext } from 'react'
import { UserContext } from '../context/ContextProvider'
import toast from 'react-hot-toast';

export default function Logout() {
    let [aut,setAut]=useContext(UserContext)
   function handleOut(){
    setAut({
        ...aut,
        user:null
    })

    localStorage.removeItem("user")
    toast.success('Successfully LoggedOut');
    window.location.reload()
    
   }
  return (
    <div>
        <button onClick={handleOut} className='bg-red-500 py-3 px-2 rounded-md'>Logout</button>
    </div>
  )
}
