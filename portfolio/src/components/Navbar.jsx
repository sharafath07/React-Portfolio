import React from 'react'
import profile from '../assets/profile.svg'

function Navbar() {
    return (
        <div className='h-screen bg-black absolute top-0 left-0 w-screen flex justify-center   '>
            <div className='flex items-center justify-between space-x-4 w-8/9 h-25 p-3 bg-gray-900 text-white rounded-full m-5 border-2 border-blue-500'>
                <div className='p-1 flex items-center '>
                    <img className='mb-3 p-2 w-18 h-20' src={profile} alt="img" />
                    <a href="#home" className='text-4xl font-mono font-semibold hover:text-blue-500 transition duration-300'>Sharafath</a>
                </div>
                <div className="flex space-x-6 text-lg font-mono font-medium pr-10">
                    <a href="#home" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Home</a>
                    <a href="#about" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>About</a>
                    <a href="#projects" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Projects</a>
                    <a href="#contact" className='relative cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'>Contact</a>
                </div>
            </div>m

        </div>
    )
}

export default Navbar
