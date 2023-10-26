import { signOut } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSingOut = ()=>{
      signOut(auth).then(()=>{
         navigate("/")
      })
      .catch((error)=>{
       navigate("/error")
      });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    alt="logo"
    className="w-44"
    />
     {user && ( 
     <div className="flex p-2">
      <img alt="singout" className='w-12  h-12'  src={user?.photoURL}/>
      <button onClick={handleSingOut} className='font-bold text-white'>(Sign Out)</button>
    </div>
)}

    </div>
  )
}

export default Header

// src="https://cdn.iconscout.com/icon/premium/png-512-thumb/logout-2179054-1825559.png?f=webp&w=256"