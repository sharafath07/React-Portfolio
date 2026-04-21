import React from 'react'
import { motion, useScroll } from 'motion/react'

function ProgressBar() {
    return (
        <div className='fixed top-1/2 -translate-y-1/2 w-2 h-1/2 right-2 rounded-full bg-gray-900 z-99'>
            <Progress />
        </div>
    )
}

function Progress() {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div style={{
            scaleY: scrollYProgress,
            position: "fixed",
            top: "0",
            right: "0",
            width: "100%",
            height: "50vh",
            transform: "translateY(-50%)",
            borderRadius: "10px",
            backgroundColor: "#cc2bfb",
            originY: "0",
        }} />
    )
}

export default ProgressBar
