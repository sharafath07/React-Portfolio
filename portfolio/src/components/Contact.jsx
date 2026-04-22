import React from 'react'
import { Mail } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from 'motion/react';

function Contact() {
    const contact = [
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/sharafath_v'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/sharafathv/'
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            link: 'https://www.github.com/sharafath07'
        },
        {
            name: 'Email',
            icon: <FiMail />,
            link: 'mailto:sharafathahammed112@gmail.com'
        }
    ]

    const formLabel = "text-xl cursor-pointer underline underline-offset-4 decoration-[#cc2bfb] text-gray-400 text-sm md:text-base"
    const formInput = "w-full px-4 py-2 border-b-2 border-l-2 text-gray-400 bg-gray-800"

    return (
        <div id='contact' className='h-[90vh] md:h-[110vh] w-screen flex flex-col space-y-20 orbitron tracking-wide items-center justify-between relative overflow-hidden text-center text-gray-400 w-2/3'>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ amount: 0.7 }} className='border-2 scale-95 outline-2 outline-[#cc2bfb] outline-offset-4 p-10 rounded-4xl border-gray'>
                <h1 className='text-3xl md:text-5xl font-bold text-[#cc2bfb] mb-4 underline underline-offset-4 decoration-[#cc2bfb]'>Contact <span>Me</span></h1>
                <p className='text-gray-400 text-md mb-8'>Feel free to reach out to me through any of the platforms below!</p>
                <form className='flex flex-col items-center gap-4 justify-center'>
                    <label htmlFor="name" className={formLabel}>
                        Name
                    </label>
                    <input type="text" id="name" className={formInput + " caret-[#cc2bfb]"} />
                    <label htmlFor="email" className={formLabel}>
                        Email
                    </label>
                    <input type="email" id="email" className={formInput + " caret-[#cc2bfb]"} />
                    <label htmlFor="message" className={formLabel}>
                        Message
                    </label>
                    <textarea id="message" rows="4" className={formInput + " caret-[#cc2bfb]"}></textarea>
                    <motion.button whileHover={{ outline: '2px solid #cc2bfb', outlineOffset: '2px' }} whileTap={{ scale: 0.9, outline: "none" }} transition={{ duration: 0.8, type: 'spring' }} type="submit" className='bg-[#cc2bfb] text-white px-4 py-2 rounded mt-4'>Send Message</motion.button>
                </form>
            </motion.div>
            <div className='relative bottom-4 bg-gray-800 text-center p-4 h-14 mb-2 w-2/3 flex items-center justify-around gap-4 border-none rounded-full text-[#cc2bfb] text-2xl font-bold outline outline-2 outline-[#cc2bfb] outline-offset-4'>
                {contact.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:bg-[#cc2bfb] hover:text-white transition-colors duration-80 p-2 rounded-full border-2'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </div>
    )
}

export default Contact
