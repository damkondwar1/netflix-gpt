import React from 'react'
import Header from './Header'
import {useState,useRef} from "react"
import { checkValidData } from '../utils/Validate'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BG_URL, USER_AVATR} from "../utils/constant"

const Login = () => {
  const[isSignInForm,setIsSignInForm]= useState(true)
  const[errormessage,seterrormessage] = useState(null)
  const email = useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()
  const password = useRef(null)


  const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)
  }
  
 const handlebuttonClick =()=> {
    //validate the form data 
      const message = checkValidData(email.current.value, password.current.value)
      seterrormessage(message)

     // then i proceed signin/signup
     if(message) return ;

   if(!isSignInForm){
     //sign up login
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
     const user = userCredential.user;
     updateProfile(user, {
        displayName: name.current.value, 
         photoURL:{USER_AVATR},
     }).then(()=>{
             const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      
     }).catch((error)=>{
      seterrormessage(error.message)
     });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      seterrormessage(errorCode+"-"+errorMessage)
  });
      
   } else {
     //sign in logic
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
   
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage)
  });
   }

 }

  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src={BG_URL}
      alt="login"/>
    </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" onSubmit={(e)=> e.preventDefault()}>

        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
           <input  ref={name} type="text" placeholder="FullName" className="p-4 my-4 w-full bg-gray-500"/>
        )}
         
        <input ref={email} type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-500"/>

        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-500 "/>

            <p className="text-red-500 font-bold text-lg">{errormessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full" onClick={handlebuttonClick}>{ isSignInForm ? "Sign In" : "Sign Up" }</button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To netflix Sign Up Now" : "Alreday Registered Sign In Now.."}</p>
      </form>
    </div>

  )
}

export default Login