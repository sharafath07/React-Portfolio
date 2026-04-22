import React from 'react'
import Image from '../assets/myPhoto.jpeg'
import { easeIn, motion } from 'motion/react'


function Home() {
    const button = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.9 }
    }
    return (
        <motion.div id='home' className='h-screen flex items-center flex-col orbitron justify-center text-4xl font-bold text-gray-200'>
            <div className='flex items-center justify-center gap-5 ml-10 md:ml-0'>
                <motion.img initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -500 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="w-30 h-30 md:w-50 md:h-50 object-cover rounded-full outline outline-2 outline-offset-3 hover:outline-offset-0 outline-[#cc2bfb]" src={Image} alt="" />
                <motion.div initial={{ opacity: 0, x: 500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 0.8, ease: "easeInOut" }} className='flex gap-2 flex-col items-start sm:items-center justify-center text-gray-500'>
                    <h1 className="text-xl md:text-3xl">Hello World!</h1>
                    <h1 className="text-xl md:text-3xl">I'm <span className="text-2xl md:text-4xl font-bold underline underline-offset-2 text-[#cc2bfb]">Sharafath Ahammed V</span></h1>
                    <h2 className='text-lg md:text-2xl'>Frontend Developer</h2>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 500 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 500 }} transition={{ duration: 0.8, ease: 'easeIn' }} viewport={{ once: true }} className='flex gap-5 text-lg font-bold text-black border-none mt-10'>
                <a href='#projects'><motion.button variants={button} transition={{ type: 'spring', stiffness: 300 }} whileHover="whileHover" whileTap="whileTap" className='bg-white p-2 md:p-4 cursor-pointer rounded-xl outline outline-2 outline-offset-3 outline-[#cc2bfb] hover:bg-[#cc2bfb] active:outline-offset-0 transition duration-80'>View Projects</motion.button></a>
                <a href='#contact'> <motion.button variants={button} transition={{ type: 'spring', stiffness: 300 }} whileHover="whileHover" whileTap="whileTap" className='bg-white p-2 md:p-4 cursor-pointer rounded-xl outline outline-2 outline-offset-3 outline-[#cc2bfb] hover:bg-[#cc2bfb] active:outline-offset-0 transition duration-80'>Contact Me</motion.button></a>
            </motion.div>
        </motion.div>
    )
}

export default Home
