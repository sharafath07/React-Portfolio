import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import netflix from '../assets/projects/netflix.png'
import bmi from '../assets/projects/bmi.png'
import password from '../assets/projects/password-generator.png'
import velora from '../assets/projects/velora.png'
import Tic from '../assets/projects/Tic-Tac-Toe.png'
import Todo from '../assets/projects/Todo.png'
import Rock from '../assets/projects/Rock-Paper-Scissor.png'
import MedCare from '../assets/projects/Medcare.png'
import TripolizCz from '../assets/projects/TripolizCz.png'
import BugFree from '../assets/projects/BugFree.png'
import Counter from '../assets/projects/Counter.png'
import Blackjack from '../assets/projects/Blackjack.png'
import Calculator from '../assets/projects/Calculator.png'

function Projects() {
    const containerRef = useRef(null)

    const projects = [
        {
            name: 'Netflix Clone',
            tools: ['React', 'CSS'],
            image: netflix,
            link: 'https://netflix-two-orcin-69.vercel.app/',
            source: 'https://github.com/sharafath07/Netflix'
        },
        {
            name: 'BMI Calculator',
            tools: ['React', 'CSS'],
            image: bmi,
            link: 'https://bmi-react-xi.vercel.app/',
            source: 'https://github.com/sharafath07/BMI-React'
        },
        {
            name: 'Velora - E-commerce',
            tools: ['React', 'CSS'],
            image: velora,
            link: 'https://velora-lime-one.vercel.app/',
            source: 'https://github.com/sharafath07/Velora'
        },
        {
            name: 'MedCare - Healthcare',
            tools: ['React', 'CSS'],
            image: MedCare,
            link: 'https://sharafath07.github.io/MyCare-Hospital-web/',
            source: 'https://github.com/sharafath07/MyCare-Hospital-web'
        },
        {
            name: 'TripolizCz - Travel Agency',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: TripolizCz,
            link: 'https://sharafath07.github.io/tripolizCz/',
            source: 'https://github.com/sharafath07/tripolizCz'
        },
        {
            name: 'Password Generator',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: password,
            link: 'https://sharafath07.github.io/password-generator/',
            source: 'https://github.com/sharafath07/password-generator'
        },
        {
            name: 'Bug Free',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: BugFree,
            link: 'https://sharafath07.github.io/BugFree/',
            source: 'https://github.com/sharafath07/BugFree'
        },
        {
            name: 'Tic Tac Toe',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: Tic,
            link: 'https://sharafath07.github.io/Tic-Tac-Toe/',
            source: 'https://github.com/sharafath07/Tic-Tac-Toe'
        },
        {
            name: 'Todo App',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: Todo,
            link: 'https://sharafath07.github.io/Todo-App/',
            source: 'https://github.com/sharafath07/Todo-App'
        },
        {
            name: 'Rock Paper Scissor',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: Rock,
            link: 'https://sharafath07.github.io/Rock-paper-scissor/',
            source: 'https://github.com/sharafath07/Rock-Paper-Scissor'
        },
        {
            name: 'Blackjack Game',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: Blackjack,
            link: 'https://sharafath07.github.io/blackjack/',
            source: 'https://github.com/sharafath07/blackjack'
        },
        {
            name: 'Calculator',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: Calculator,
            link: 'https://sharafath07.github.io/Calculator/',
            source: 'https://github.com/sharafath07/Calculator'
        },
        {
            name: 'Counter App',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: Counter,
            link: 'https://sharafath07.github.io/Counter-App/',
            source: 'https://github.com/sharafath07/Counter-App'
        }

    ]

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ amount: 0.7 }} ref={containerRef} id='projects' className='w-screen flex orbitron tracking-wide flex-col items-center justify-center relative overflow-hidden text-center text-gray-400 w-2/3'>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold text-[#cc2bfb] mb-4 underline underline-offset-4 decoration-[#cc2bfb]'>Projects</h1>
                <p className='text-gray-400 text-md mb-8'>Here are some of my recent projects. Feel free to explore and check out the code on GitHub!</p>
            </div>
            <div className="w-full flex items-start mt-10 no-scrollbar mask-x-from-70% mask-x-to-90% justify-start gap-6 overflow-x-auto snap-x snap-mandatory before:ml-[50%] after:mr-[50%] scroll-smooth px-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="snap-center min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 
                 border border-gray-700 rounded-2xl 
                 bg-white/5 backdrop-blur-lg 
                 hover:shadow-[0_0_25px_#cc2bfb]/30 hover:border-[#cc2bfb] 
                 transition duration-300 pb-4"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full aspect-2/1 object-cover rounded-t-2xl "
                        />
                        <h2 className="text-xl md:text-2xl font-semibold text-[#cc2bfb] mt-4">
                            {project.name}
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                            {project.tools.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="bg-[#cc2bfb]/20 text-[#cc2bfb] px-3 py-1 rounded-full text-xs md:text-sm">
                                    {tool}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-4 mt-5">
                            <motion.a
                                whileHover={{
                                    scale: 1.08, backgroundColor: "transparent",
                                    color: "#cc2bfb",
                                    border: "solid 1px",
                                    borderColor: "#cc2bfb",
                                    boxShadow: "0 0 20px rgba(204, 43, 251, 0.4)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-[#cc2bfb] text-xs md:text-sm rounded-lg  
                                shadow-md border-none"
                            >
                                View Project
                            </motion.a>

                            <motion.a
                                whileHover={{
                                    scale: 1.08,
                                    backgroundColor: "#cc2bfb",
                                    color: "white",
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                                href={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-[#cc2bfb] text-[#cc2bfb] rounded-lg text-xs md:text-sm"
                            >
                                Source Code
                            </motion.a>

                        </div>

                    </div>
                ))}

            </div>
        </motion.div>
    )
}


export default Projects
