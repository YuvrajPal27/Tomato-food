import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("SignUp");

  return (
    <div id='login-popup' className='fixed top-0 left-0 z-50 w-full h-screen bg-black/80 grid place-items-center '>
        <form id="login-popup-container" className='w-full max-w-sm bg-white flex flex-col gap-5 p-6 rounded-xl text-sm shadow-xl'>
            <div className="login-popup-title" className='flex items-center justify-between'>
                <h2>{currState}</h2>
                <img className='w-4 cursor-pointer ' onClick={() => {setShowLogin(false)}} src={assets.cross_icon}></img>
            </div>
            <div className='login-popup-inputs' className=" flex flex-col gap-5">
                {currState === "SignUp" ? <input type='text' placeholder='Your Name' required></input> : <></>}
                
                <input type='email' placeholder='Your Email' required></input>
                <input type='password' placeholder='Your Password' required></input>
            </div>
            <button>{currState==="SignUp" ? "Create Account " : "Login"}</button>
            <div id="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to terms of use and privacy policy.</p>
            </div>
            {currState === "Login" ?  <p><span onClick={() => {setCurrState("SignUp")}}>Click Here </span> To Create A New Account</p> : <p onClick={() => {setCurrState("Login")}}>Already Have An Account? <span>Login</span></p>}
           
            
        </form>
    </div>
  )
}

export default LoginPopup