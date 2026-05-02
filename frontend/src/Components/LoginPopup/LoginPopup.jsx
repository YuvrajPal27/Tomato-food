import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("SignUp");

  return (
    <div id='login-popup' className='fixed top-0 left-0 z-50 w-full h-screen bg-black/80 grid place-items-center '>
        <form id="login-popup-container" className='w-full max-w-sm bg-white flex flex-col gap-5 p-6 rounded-xl text-sm shadow-xl'>
            <div className="login-popup-title" className='flex items-center justify-between'>
                <h2 className='font-bold text-2xl'>{currState}</h2>
                <img className='w-4 cursor-pointer ' onClick={() => {setShowLogin(false)}} src={assets.cross_icon}></img>
            </div>
            <div className='login-popup-inputs' className=" flex flex-col gap-5">
                {currState === "SignUp" ? <input className='outline-none border border-gray-500 p-2 rounded-md ' type='text' placeholder='Your Name' required></input> : <></>}
                
                <input className='outline-none border border-gray-500 p-2 rounded-md ' type='email' placeholder='Your Email' required></input>
                <input className='outline-none border border-gray-500 p-2 rounded-md ' type='password' placeholder='Your Password' required></input>
            </div>
            <button className='border-none p-2 rounded-md bg-red-400 text-white font-base cursor-pointer'>{currState==="SignUp" ? "Create Account " : "Login"}</button>
            <div id="login-popup-condition" className='flex justify-center items-center gap-2 -m-3'>
                <input type="checkbox" required className='mt-1'/>
                <p>By continuing, I agree to terms of use and privacy policy.</p>
            </div>
            <div className='flex items-center justify-center'>
                      {currState === "Login" ?  <p><span className='text-red-400 font-semibold cursor-pointer' onClick={() => {setCurrState("SignUp")}}>Click Here </span> To Create A New Account</p> : <p onClick={() => {setCurrState("Login")}}>Already Have An Account? <span className='text-red-400 font-semibold cursor-pointer'>Login</span></p>}
         
            </div>
        
            
        </form>
    </div>
  )
}

export default LoginPopup