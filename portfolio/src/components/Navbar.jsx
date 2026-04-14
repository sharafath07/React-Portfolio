import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import profile from '../assets/profile.svg'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const screenWidth = window.innerWidth;

    return (
        <nav className='bg-gray-800 audiowide rounded-full w-19/20 mx-auto mt-4 pr-4 py-2 outline-3 outline-offset-2 outline-solid outline-[#cc2bfb]'>
            {
                screenWidth > 640 ? (
                    <div className="h-12 md:h-16 items-center flex justify-between">
                        <a className='flex items-center justify-start cursor-pointer' href="#">
                            <img src={profile} alt="" className="w-15 md:w-19 relative -top-2 left-1" />
                            <h1 className='text-xl md:text-3xl text-[#cc2bfb] pl-2 font-medium' href="#">SHARAFATH</h1>
                        </a>
                        <div className='hidden sm:block font-medium'>
                            <a className='relative text-gray-400 text-base md:text-lg mx-2 cursor-pointer hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 active:text-[#cc2bfb]' href="#home">HOME</a>
                            <a className='relative text-gray-400 text-base md:text-lg mx-2 cursor-pointer hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 active:text-[#cc2bfb]' href="#about">ABOUT</a>
                            <a className='relative text-gray-400 text-base md:text-lg mx-2 cursor-pointer hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 active:text-[#cc2bfb]' href="#projects">PROJECTS</a>
                            <a className='relative text-gray-400 text-base md:text-lg mx-2 cursor-pointer hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 active:text-[#cc2bfb]' href="#contact">CONTACT</a>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="h-12 items-center flex justify-between" >
                            <a className='flex items-center justify-start cursor-pointer' href="#">
                                <img src={profile} alt="" className="w-15 md:w-19 relative -top-2 left-1 " />
                                <h1 className='text-2xl md:text-3xl text-[#cc2bfb] pl-2 font-medium' href="#">SHARAFATH</h1>
                            </a>
                            <div className='px-4 text-3xl text-white block sm:hidden'>
                                <Menu onClick={() => setIsOpen(!isOpen)} />
                            </div>
                        </div>
                        <div>
                            <X onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? "block" : "hidden"} fixed top-10 right-10 z-99 font-bold text-white`} />
                            <div className={`${isOpen ? "block" : "hidden"} block sm:hidden bg-gray-800 border-2 border-[#cc2bfb] space-y-8 pb-3 absolute top-0 right-0 h-full w-2/3 flex flex-col items-start justify-center space-y-4 px-10`}>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-4xl text-wrap' href="#home">Home</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-4xl text-wrap' href="#about">About</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-4xl text-wrap' href="#projects">Projects</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-4xl text-wrap' href="#contact">Contact</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />

                            </div>
                        </div>
                    </div>

                )
            }
        </nav >
    )
}

export default Navbar
