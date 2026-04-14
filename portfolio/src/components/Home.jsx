import React from 'react'
import Image from '../assets/myPhoto.jpeg'


function Home() {
    return (
        <div id='home' className='h-screen flex items-center flex-col orbitron justify-center text-4xl font-bold text-gray-200'>
            <div className='flex items-center justify-center gap-10'>
                <img className="w-50 h-50 object-cover rounded-full outline outline-2 outline-offset-3 hover:outline-offset-0 outline-[#cc2bfb]" src={Image} alt="" />
                <div className='flex gap-2 flex-col items-center justify-center text-gray-500'>
                    <h1 className="text-3xl">Hello World!</h1>
                    <h1 className="text-3xl">I'm <span className="text-4xl font-bold underline underline-offset-2 text-[#cc2bfb]">Sharafath Ahammed V</span></h1>
                    <h2 className='text-2xl'>Frontend Developer</h2>
                </div>
            </div>

            <div className='flex gap-5 text-lg font-bold text-black border-none mt-10'>
                <a href='#projects'><button className='bg-white p-4 cursor-pointer rounded-xl outline outline-2 outline-offset-3 outline-[#cc2bfb] hover:bg-[#cc2bfb] active:outline-offset-0 transition duration-300'>View Projects</button></a>
                <a href='#contact'> <button className='bg-white p-4 cursor-pointer rounded-xl outline outline-2 outline-offset-3 outline-[#cc2bfb] hover:bg-[#cc2bfb] active:outline-offset-0 transition duration-300'>Contact Me</button></a>
            </div>
        </div>
    )
}

export default Home
