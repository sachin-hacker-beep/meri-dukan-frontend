import React from 'react'
import {assets} from '../assets/assets.js'
import Title from './title.jsx'
function Hero() {
  return (
    <>
    <section className='container flex flex-col sm:flex-row md border border-gray-400 mx-auto'>
        <div className='w-full flex flex-col hero-container  justify-center items-center py-10  '>
            <div className='text-[#414141] space-y-1'>
                <div className='flex  justify-start items-center '>
                    <div className='w-8 md:w-12 me-2 bg-[#414141] h-[2px]'></div>
                    <p className='text-sm'>OUR BESTSELLER</p>
                </div>
                <div className='flex gap-2 items-center '>
                    <h1 className='prata-regular text-3xl'>Latest Arrivals</h1>
                </div>
                <div className='flex gap-1 items-center '>
                    <p className='text-sm'>SHOP NOW</p>
                    <div className='w-12 me-2 bg-[#414141] h-[2px]'></div>
                </div>
            </div>    
        </div>
        <div className="hero-image w-full flex justify-center items-center">
            <img src={assets.hero_img } className='w-[100%]' alt="" />
        </div>

    </section>
    </>
    )
}

export default Hero
