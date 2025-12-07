import React from 'react'
import {useState} from 'react'
import {assets} from '../assets/assets.js'
import {NavLink, useNavigate} from 'react-router-dom';
import Searchbar from './searchbar.jsx';
import { useProduct } from '../context/shopContext.jsx';
const Navbar = () => {
    const navigate = useNavigate();
    const {setShow} = useProduct();
    const [showMenu, setShowMenu] = useState(false);
    const handleSearchicon= () => {
        navigate('/collections')
        setShow(true)
    }
    return (
        <>
    <nav className='sticky top-0 z-50 bg-[#fac5c5] md:bg-white shadow-md'>
        <section className='nav1 h-full px-3 py-4 md:py-2 logo-div relative  flex justify-between items-center  font-medium'>
            <div className=" nav1-logo flex justify-start items-center ps-5">
                <img className='w-36' src={assets.logo} alt="Logo" />
            </div>
            <ul className={`nav-links h-svh absolute ${ showMenu ? "flex" : "hidden"} shadow-inner flex-col right-0 w-[60%] right-0 bg-[#fac5c5] md:bg-white rounded p-10 top-16 md:flex gap-5 md:h-0 md:w-auto md:flex-row md:top-0 md:right-0 md:items-center md:relative text-[16px] text-white md:text-sm md:text-gray-700 md:shadow-none`}>
                <NavLink onClick={() => setShowMenu(false)} className='flex flex-col gap-1 items-left md:items-center  ' to='/'>
                    <p className='text-white md:text-black text-[16px] align-left'>Home</p>
                    <hr className="nav-under w-full md:w-3/4 h-[2px] md:bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} className='flex flex-col gap-1 items-left md:items-center  ' to='/collections'>
                    <p className='text-white md:text-black text-[16px] align-left'>Collections</p>
                    <hr className="nav-under w-full md:w-3/4 h-[2px] md:bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} className='flex flex-col gap-1 items-left md:items-center ' to='/aboutUs'>
                    <p className='text-white md:text-black text-[16px] align-left'>About Us</p>
                    <hr className="nav-under w-full md:w-3/4 h-[2px] md:bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink className='flex flex-col gap-1 items-left md:items-center ' to='/contact'>
                    <p className='text-white md:text-black text-[16px] align-left'>ContactUs</p>
                    <hr className="nav-under  w-full md:w-3/4 h-[2px] md:bg-gray-700 hidden"></hr>
                </NavLink>

            </ul>   
            <div className="icon group flex justify-end  items-center">
                <img src={assets.search_icon} onClick={handleSearchicon} className={`fa-solid fa-magnifying-glass text-2xl text-black me-5`}></img>
                {showMenu ?<img src={assets.cross_icon} onClick={()=>setShowMenu(false)} className={`fa-solid fa-xmark md:hidden text-2xl text-black me-5`}></img> :<img src={assets.menu_icon} onClick={()=>setShowMenu(true)} alt="close menu" className="w-6 h-6 md:hidden me-5 cursor-pointer" />   }
            </div>             
        </section>
    </nav>
    </>
    
  )
}

export default Navbar