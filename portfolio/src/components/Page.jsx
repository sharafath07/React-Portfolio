import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import ProgressBar from './ProgressBar'


function Page() {
    return (
        <div>
            <Navbar />
            <ProgressBar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Page
