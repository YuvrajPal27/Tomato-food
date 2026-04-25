import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div id="footer" className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-25'>
        <div id="footer-content" className='w-full grid gap-20 grid-cols-3'>
            <div id="footer-content-left" className='flex flex-col items-start gap-5'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta, unde officiis esse molestiae nobis libero obcaecati fugiat adipisci natus minus vel perspiciatis veniam excepturi suscipit cum pariatur dolores totam?</p>
                <div id="footer-social-icons" className='flex w-10 mr-4'>
                    <img src={assets.facebook_icon} className='w-10 mr-4' />
                    <img src={assets.twitter_icon} className='w-10 mr-4' />
                    <img src={assets.linkedin_icon} className='w-10 mr-4' />
                </div>
            </div>
            <div id="footer-content-center" className='flex flex-col items-start gap-5'>
                <h2 className='text-white text-2xl font-bold'>COMPANY</h2>
                <ul className='[&>li]:mb-2 [&>li]:list-none [&>li]:cursor-pointer '>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div id="footer-content-right" className='flex flex-col items-start gap-5'>
                <h2 className='text-white text-2xl font-bold'>GET IN TOUCH</h2>
                <ul className='[&>li]:mb-2 [&>li]:list-none [&>li]:cursor-pointer '>
                    <li>+91 9876543210</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-0.5 my-5 mx-0 bg-gray-400 border-none' />
        <p id="footer-copyright">Copyright 2026 @ Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer