import React from 'react'
import { useProduct } from '../context/shopContext'
import { assets } from '../assets/assets';

function Searchbar() {
    const {show, setShow, search, setSearch} = useProduct();
    
  return (
    <div className='mt-5'>
      <div className={`search-box flex  justify-center items-center bg-white container rounded mx-auto`}>
        <div className="search-bar flex justify-center  items-center relative w-[75%] md:w-[80%] flex-row">
            <input type='text' onChange={(e)=>setSearch(e.target.value)} className=" w-[100%]  rounded-full border-2 px-3 py-3 focus:outline-none" placeholder='Search Product' />
            <img src={assets.search_icon} className=' mr-5 text-white w-5  absolute right-6' />
            <img onClick={()=>setShow(false)} src={assets.cross_icon} alt="Close" className='ps-2 w-7 ' />
        </div>
      </div>
    </div>
  )
}

export default Searchbar
