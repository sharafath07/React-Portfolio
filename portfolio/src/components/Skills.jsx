import React, { useRef } from 'react'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import react from '../assets/skills/react.png'
import git from '../assets/skills/git.svg'
import github from '../assets/skills/github.png'
import tailwind from '../assets/skills/tailwind-css.png'
import bootstrap from '../assets/skills/bootstrap.svg'
import { motion } from 'framer-motion'

function Skills() {
    const skills = [
        { name: 'HTML', image: html },
        { name: 'CSS', image: css },
        { name: 'JavaScript', image: js },
        { name: 'React', image: react },
        { name: 'Tailwind CSS', image: tailwind },
        { name: 'Bootstrap', image: bootstrap },
        { name: 'Git', image: git },
        { name: 'GitHub', image: github }
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ amount: 0.7 }} id='skills' className='h-screen orbitron w-screen flex items-center justify-center relative overflow-hidden'>
            <div>
                <h1 className='text-3xl md:text-5xl text-center mb-10 font-bold text-[#cc2bfb] mb-6 underline underline-offset-8 decoration'>Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skills.map((skill, index) => (
                        <div key={index} className='flex flex-col items-center border border-[#cc2bfb] rounded-lg p-4 hover:bg-[#2a2a2a] transition duration-300'>
                            <img src={skill.image} alt={skill.name} className='w-16 h-16 mb-2 contain' />
                            <p className='text-lg font-semibold text-gray-500'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
