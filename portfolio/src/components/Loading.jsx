import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logo from "/brand.svg"

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 4700
    const startedAt = performance.now()
    let frameId

    const updateProgress = (time) => {
      const elapsed = time - startedAt
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(nextProgress)

      if (elapsed < duration) {
        frameId = requestAnimationFrame(updateProgress)
      }
    }

    frameId = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.025, filter: 'blur(10px)' }}
      transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.7 }, filter: { duration: 0.7 } }}
      role="status"
      aria-label={`Loading portfolio, ${progress}%`}
      className="fixed inset-0 z-50 isolate overflow-hidden bg-home-base text-home-ink"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(178,138,255,.13),transparent_27%),radial-gradient(circle_at_50%_100%,rgba(56,44,70,.45),transparent_50%)]"
      />

      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-1/2 left-0 h-px w-full origin-left bg-home-line/50"
      />

      <header className="absolute top-0 right-0 left-0 flex items-center justify-between px-home-gutter py-[clamp(18px,3vw,36px)]">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex items-center gap-3"
        >
          <span className="size-2 rounded-full bg-home-accent shadow-[0_0_18px_rgba(178,138,255,.75)]" />
          <span className="text-[10px] font-medium tracking-[0.28em] text-home-muted uppercase sm:text-xs">
            Portfolio
          </span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-[10px] tracking-[0.28em] text-home-muted uppercase sm:text-xs"
        >
          MMXXVI
        </motion.span>
      </header>

      <main className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.82, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-[clamp(24px,4vh,42px)] flex size-[clamp(112px,19vh,168px)] items-center justify-center"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-home-line"
          >
            <span className="absolute top-[11%] left-[14%] size-1.5 rounded-full bg-home-accent" />
          </motion.div>
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[12%] rounded-full border border-dashed border-home-accent/35"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-medium text-[clamp(38px,7vh,62px)] leading-none tracking-[-0.08em] text-home-ink"
          >
            <img src={logo} alt="SV" className="h-[clamp(38px,7vh,62px)] w-auto" />
          </motion.span>
        </motion.div>

        <div className="overflow-hidden px-5 text-center">
          <motion.p
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(19px,3.2vw,34px)] font-medium tracking-[0.16em] uppercase"
          >
            Sharafath Ahammed V
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-3 text-[10px] tracking-[0.42em] text-home-muted uppercase sm:text-xs"
        >
          Creative Developer
        </motion.p>
      </main>

      <footer className="absolute right-0 bottom-0 left-0 px-home-gutter pb-[clamp(18px,3vw,36px)]">
        <div className="mb-3 flex items-end justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-[10px] tracking-[0.24em] text-home-muted uppercase"
          >
            Initializing experience
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-w-10 text-right font-medium tabular-nums text-[11px] text-home-accent"
          >
            {String(progress).padStart(3, '0')}%
          </motion.span>
        </div>
        <div className="h-px overflow-hidden bg-home-line">
          <motion.div
            className="h-full origin-left bg-home-accent shadow-[0_0_12px_rgba(178,138,255,.75)]"
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.12, ease: 'linear' }}
          />
        </div>
      </footer>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0.025, 0.06, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,.025)_50%)] bg-[length:100%_4px]"
      />
    </motion.div>
  )
}

export default Loader
