import React from 'react'
import profile from '../assets/profile.svg'

function Navbar() {

    return (
        <div className='h-screen audiowide bg-black absolute top-0 left-0 right-0 w-screen flex  justify-center'>
            <div className='flex items-center justify-between space-x-4 w-11/12 h-18 md:h-25 p-3 bg-gray-900 text-white rounded-full m-5 border-2 border-blue-500'>
                <div className='p-1 flex items-center '>
                    <img className='mb-3 p-2 w-13 md:w-18' src={profile} alt="img" />
                    <a href="#" className='text-xl md:text-4xl font-medium hover:text-blue-500 transition duration-300'>Sharafath</a>
                </div>
                {
                    window.innerWidth > 640 ? (
                        <div className="flex space-x-3 md:space-x-6 text-sm md:text-lg font-medium pr-5 md:pr-10">
                            <a href="#" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Home</a>
                            <a href="#about" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>About</a>
                            <a href="#projects" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Projects</a>
                            <a href="#contact" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Contact</a>
                        </div>
                    ) : (
                        <div className='flex flex-col fixed top-0 right-0 bottom-0 w-1/3 justify-center items-center space-y-10 bg-gray-900 text-white text-lg font-medium z-10'>
                            <a href="#" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Home</a>
                            <a href="#about" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>About</a>
                            <a href="#projects" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Projects</a>
                            <a href="#contact" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Contact</a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
