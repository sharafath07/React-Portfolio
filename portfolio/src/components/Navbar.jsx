import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import profile from '../assets/profile.svg'
import { motion } from 'motion/react'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const screenWidth = window.innerWidth;
    const navLinks = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='bg-gray-800 audiowide fixed rounded-full w-29/30 mt-4 left-1/2 -translate-x-1/2 pr-4 py-2 outline-3 outline-offset-2 outline-solid outline-[#cc2bfb]'>
            {
                screenWidth > 640 ? (
                    <div className="h-12 md:h-16 items-center flex justify-between">
                        <motion.a initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "backInOut", delay: 1 }} className='flex items-center justify-start cursor-pointer' href="#">
                            <img src={profile} alt="" className="w-15 md:w-19 relative -top-2 left-1" />
                            <h1 className='text-xl md:text-3xl text-[#cc2bfb] pl-2 font-medium' href="#">SHARAFATH</h1>
                        </motion.a>
                        <div className='hidden sm:block font-medium'>
                            {navLinks.map((link) => (
                                <motion.a
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 * navLinks.indexOf(link), ease: "backInOut" }}
                                    key={link}
                                    className='relative text-gray-400 text-base md:text-lg mx-2 cursor-pointer hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 active:text-[#cc2bfb]'
                                    href={`#${link.toLowerCase()}`}
                                >
                                    {link}
                                </motion.a>
                            ))}
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
                                <a className='text-gray-100 text-3xl text-wrap' href="#home">HOME</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-3xl text-wrap' href="#about">ABOUT</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-3xl text-wrap' href="#skills">SKILLS</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-3xl text-wrap' href="#projects">PROJECTS</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                                <a className='text-gray-100 text-3xl text-wrap' href="#contact">CONTACT</a>
                                <hr className="text-[#cc2bfb] w-full h-1 border-2" />
                            </div>
                        </div>
                    </div>
                )
            }
        </motion.nav >
    )
}

export default Navbar
