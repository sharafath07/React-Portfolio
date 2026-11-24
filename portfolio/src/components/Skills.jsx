import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import react from '../assets/skills/react.png'
import git from '../assets/skills/git.svg'
import github from '../assets/skills/github.png'
import tailwind from '../assets/skills/tailwind-css.png'
import bootstrap from '../assets/skills/bootstrap.svg'

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
        <section id="skills" aria-labelledby="skills-title" className="section-wrap">
            <h2 id="skills-title" className="section-title">Skills</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {skills.map(skill => (
                    <li key={skill.name} className="flex min-h-24 items-center gap-3 rounded-2xl border border-home-line bg-home-panel p-4 sm:gap-4 sm:p-6">
                        <img src={skill.image} alt="" loading="lazy" width="40" height="40"
                            className="size-8 shrink-0 object-contain sm:size-10" />
                        <span className="font-medium tracking-tight sm:text-lg">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills
