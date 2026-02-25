import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='fixed w-full z-50 bg-black/80 blackdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between item-center'>
            <div>
                <a href="#" className='text-3xl font-bold text-white'>
                    Snehal
                    <span className='text-purple-500'>Londhe</span>
                    <div className='w-4 h-4 bg-purple-600 rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href='#home' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                    <span>Home</span>
                    <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href='#about' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                    <span>About</span>
                    <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href='#Skills' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                    <span>Skills</span>
                    <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href='#project' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                    <span>Projects</span>
                    <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href='#contact' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                    <span>Contact</span>
                    <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>

            {/* mobile button */}
            <div className='md:hidden'>
                {
                    showMenu ?
                     <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>:
                     <FaBars onClick={()=>setShowMenu(!showMenu)}  className='text-2xl cursor-pointer'/>
                }
            </div>
        </div>
            
        {/* Mobile menu */}
        {
            showMenu && (
                <div className='md:hidden mt-4 bg-gray-800 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>

                    <a href='#home' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                        <span>Home</span>
                        <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>              

                    <a href='#about' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                        <span>About</span>
                        <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href='#Skills' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                        <span>Skills</span>
                        <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href='#project' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                        <span>Projects</span>
                        <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href='#contact' className='relative text-white/100 transition duration-300 hover:text-purple-500 group'>    
                        <span>Contact</span>
                        <span className="absolute left-0 bottom-5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                </div>
            )
        }

    </nav>
  )
}

export default Navbar