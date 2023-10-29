import { signOut } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import {LOGO} from '../utils/constant'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  const handleSingOut = ()=>{
      signOut(auth).then(()=>{
      })
      .catch((error)=>{
       navigate("/error")
      });
  }

  useEffect(()=>{
   const unsuscribe = onAuthStateChanged(auth,(user)=>{
        if(user) {
          const {uid,email,displayName,photoURL} = user
          dispatch(
            addUser({uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
         );
          navigate("/browse")
        } else {
          dispatch(removeUser())
          navigate("/")
        }
    })
    // when unmounting my component is inscribe 
    return ()=>  unsuscribe()
       
    
 },[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
    <img src={LOGO}
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