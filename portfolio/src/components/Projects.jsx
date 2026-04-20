import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import netflix from '../assets/projects/netflix.png'
import bmi from '../assets/projects/bmi.png'

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
        }
    ]

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} ref={containerRef} id='projects' className='w-screen flex orbitron tracking-wide flex-col items-center justify-center relative overflow-hidden text-center text-gray-400 w-2/3'>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold text-[#cc2bfb] mb-4 underline underline-offset-4 decoration-[#cc2bfb]'>Projects</h1>
                <p className='text-gray-400 text-md mb-8'>Here are some of my recent projects. Feel free to explore and check out the code on GitHub!</p>
            </div>
            <div className="w-full flex items-start mt-10 no-scrollbar justify-start gap-6 overflow-x-auto snap-x snap-mandatory before:ml-[50%] after:mr-[50%] scroll-smooth px-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="snap-center min-w-[85%] md:min-w-[60%] lg:min-w-[40%] 
                 border border-gray-700 rounded-2xl 
                 bg-white/5 backdrop-blur-lg 
                 hover:shadow-[0_0_25px_#cc2bfb]/30 hover:border-[#cc2bfb] 
                 transition duration-300 pb-4"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full aspect-2/1 md:h-56 object-cover rounded-t-2xl "
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
                                transition={{ duration: 0.8, type: "spring" }}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-[#cc2bfb] rounded-lg  
                                shadow-md border-none"
                            >
                                View Project
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-[#cc2bfb] text-[#cc2bfb] rounded-lg 
                     hover:bg-[#cc2bfb] hover:text-white transition"
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
