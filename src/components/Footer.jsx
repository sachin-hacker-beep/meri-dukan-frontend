import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <footer className='bg-[#f8eeee] w-full mt-8 shadow-2xl'>
        <section className='w-full sm:grid flex flex-col sm:grid-cols-[2fr_1fr_1fr] p-3 px-5 sm:py-18 '>
            <div className="foot-item  p-2 flex flex-col gap-y-2 ">
                <img src={assets.logo} className='w-28 ' alt="" />
                <p className='text-black w-3/4 text-xs mt-2 '>Meri Dukan is your one-stop online shop for a wide range of products, from fashion to electronics. Enjoy seamless shopping with great deals and fast delivery.</p>
            </div>
            <div className="foot-item flex justify-start gap-16 sm:gap-16 mt-4 sm:mt-0">
                <div className="foot-item-detail  p-1  flex flex-col gap-y-2">
                <h1 className='text-xl font-medium text-gray-700' >COMPANY</h1>
                <ul className='flex flex-col gap-1'>
                    <li className='text-xs'>HOME</li>
                    <li className='text-xs'>CONTACT US</li>
                    <li className='text-xs'>ABOUT US</li>
                    <li className='text-xs'>DELIVERY</li>
                    <li className='text-xs'>PRIVACY POLICY</li>
                </ul>
            </div>
            <div className="foot-item  p-1  flex flex-col gap-y-2   ">
                <h1 className='text-xl font-medium text-gray-700'>GET IN TOUCH</h1>
                <ul className='flex flex-col gap-1'>
                    <li className='text-xs'>+91 9605745683</li>
                    <li className='text-xs'>help@gmail.com</li>
                    <li className='text-xs'>Shastri Nagar, Jaipur</li>
                </ul>
            </div>    
            </div>
            
        </section>
        <h1 className='text-center text-sm md:text-lg text-gray-900 mt-3'>© 2025 Meri Dukan. All rights reserved.</h1>           
    </footer>
  )
}

export default Footer
