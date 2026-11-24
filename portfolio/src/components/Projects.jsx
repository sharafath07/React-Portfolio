import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'

import { Swiper, SwiperSlide } from "swiper/react";
import {
    A11y,
    Navigation,
    EffectCoverflow,
    Autoplay,
    Keyboard,
    Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/effect-coverflow";

import forever from '../assets/projects/forever.png'
import yemKey from '../assets/projects/yem-key.png'
import Web3d from '../assets/projects/3d.png'
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
    const reducedMotion = useReducedMotion()

    const projects = [
        {
            name: 'Forever',
            tools: ['React', 'CSS', 'Express', 'MongoDB'],
            image: forever,
            link: 'https://forever-plum-ten.vercel.app/',
            source: 'https://github.com/sharafath07/Forever-e-commerce'
        },
        {
            name: 'Yem Key',
            tools: ['React', 'CSS', 'Express', 'MongoDB'],
            image: yemKey,
            link: 'https://autodeluxreact.vercel.app/',
            source: 'https://github.com/sharafath07/car-website'
        },
        {
            name: '3D Web',
            tools: ['HTML', 'JavaScript', 'CSS', 'Three.js'],
            image: Web3d,
            link: 'https://sharafath07.github.io/3d-web/',
            source: 'https://github.com/sharafath07/3d-web'
        },
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
        }
        // {
        //     name: 'Bug Free',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: BugFree,
        //     link: 'https://sharafath07.github.io/BugFree/',
        //     source: 'https://github.com/sharafath07/BugFree'
        // },
        // {
        //     name: 'Tic Tac Toe',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: Tic,
        //     link: 'https://sharafath07.github.io/Tic-Tac-Toe/',
        //     source: 'https://github.com/sharafath07/Tic-Tac-Toe'
        // },
        // {
        //     name: 'Todo App',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: Todo,
        //     link: 'https://sharafath07.github.io/Todo-App/',
        //     source: 'https://github.com/sharafath07/Todo-App'
        // },
        // {
        //     name: 'Rock Paper Scissor',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: Rock,
        //     link: 'https://sharafath07.github.io/Rock-paper-scissor/',
        //     source: 'https://github.com/sharafath07/Rock-Paper-Scissor'
        // },
        // {
        //     name: 'Blackjack Game',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: Blackjack,
        //     link: 'https://sharafath07.github.io/blackjack/',
        //     source: 'https://github.com/sharafath07/blackjack'
        // },
        // {
        //     name: 'Calculator',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: Calculator,
        //     link: 'https://sharafath07.github.io/Calculator/',
        //     source: 'https://github.com/sharafath07/Calculator'
        // },
        // {
        //     name: 'Counter App',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: Counter,
        //     link: 'https://sharafath07.github.io/Counter-App/',
        //     source: 'https://github.com/sharafath07/Counter-App'
        // }
    ]

    const carouselButton = 'grid size-11 cursor-pointer place-items-center rounded-full border border-home-line bg-home-panel text-home-ink transition-colors enabled:hover:border-home-accent enabled:hover:text-home-accent disabled:cursor-default disabled:opacity-35'

    return (
        <section id="projects" aria-labelledby="projects-title" className="border-y border-home-line bg-home-surface">
            <div className="section-wrap">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
                    <div>
                        <h2 id="projects-title" className="section-title">Projects</h2>
                        <p className="mt-4 max-w-xl text-lg leading-relaxed text-home-muted">
                            Here are some of my recent projects. Feel free to explore and check out the code on GitHub!
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button id="projects-prev" type="button" aria-label="Previous project" className={carouselButton}>
                            <ChevronLeft size={20} />
                        </button>
                        <button id="projects-next" type="button" aria-label="Next project" className={carouselButton}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[A11y, Navigation, EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
                    effect="coverflow"
                    centeredSlides
                    centeredSlidesBounds
                    grabCursor
                    navigation={{ prevEl: '#projects-prev', nextEl: '#projects-next' }}
                    a11y={{ prevSlideMessage: 'Previous project', nextSlideMessage: 'Next project' }}
                    autoplay={reducedMotion ? false : { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    speed={reducedMotion ? 0 : 300}
                    keyboard={{ enabled: true }}
                    mousewheel={{ releaseOnEdges: true, sensitivity: 1 }}
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1, scale: .96, slideShadows: false }}
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        640: { slidesPerView: 1.4, spaceBetween: 20 },
                        768: { slidesPerView: 1.8, spaceBetween: 24 },
                        1024: { slidesPerView: 2.2, spaceBetween: 28 },
                    }}
                    className="w-full"
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.name}>
                            <article className="overflow-hidden rounded-2xl border border-home-line bg-home-panel">
                                <img src={project.image} alt={project.name} loading="lazy"
                                    className="aspect-[2/1] w-full border-b border-home-line object-cover object-top" />
                                <div className="p-5 sm:p-6">
                                    <h3 className="text-2xl font-medium tracking-tight">{project.name}</h3>
                                    <ul className="mt-3 flex flex-wrap gap-2">
                                        {project.tools.map(tool => (
                                            <li key={tool} className="rounded-full bg-home-accent/10 px-3 py-1 text-sm text-home-accent">{tool}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="primary-action">View Project</a>
                                        <a href={project.source} target="_blank" rel="noopener noreferrer"
                                            className="rounded-[10px] border border-home-line px-4 py-2.5 text-sm font-medium hover:border-home-accent hover:text-home-accent">
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Projects
