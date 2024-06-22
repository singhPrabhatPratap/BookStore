import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast';
import Homep from './home/Homep'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Course from './components/Course'
import Courses from './Course/Courses'
import SignUp from './components/SignUp'
import { UserContext } from './context/ContextProvider';
import Login from './components/Login';
import Contactp from './ContactUs/Contactp';
export default function App() {
let [aut] = useContext(UserContext)


  return (
    <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
   <Route path='/' element={<Homep/>}/>
   <Route path='/course' element={ aut ? <Courses/> : <Navigate to='/Login'/>}/>
   <Route path='/Singup' element={<SignUp/>}/>
   <Route path='/Login' element={<Login/>}/>
   <Route path='/Contact' element={<Contactp/>}/>
   </Routes>
   <Toaster />
    </div>
  )
}
