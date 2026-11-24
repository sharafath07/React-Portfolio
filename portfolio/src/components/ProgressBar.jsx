import { motion, useScroll } from 'framer-motion'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div aria-hidden="true" style={{ scaleX: scrollYProgress }}
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-home-accent" />
  )
}
