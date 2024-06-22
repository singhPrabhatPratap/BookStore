import React, { useState,createContext } from 'react'
import { get } from 'react-hook-form'
export  const UserContext = createContext()

export  function ContextProvider({ children }) {
    let getfromlocal = localStorage.getItem("user")
    let [aut, setAut] = useState(
        getfromlocal ? JSON.parse(getfromlocal) : undefined
    );
  return (
   <UserContext.Provider value={[aut,setAut]}>
    {children}
   </UserContext.Provider>
  )
}
