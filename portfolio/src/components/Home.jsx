import { useEffect, useRef, useState } from 'react'
import armor from '../assets/home/iron-man.webp'
import portrait from '../assets/home/portrait.png'
import { attachPortraitBrush } from './portraitBrush'

const figureLayer = 'absolute inset-0 size-full object-cover object-bottom'

function Marquee({ children, className }) {
  return (
    <div className={`flex w-max whitespace-nowrap text-[clamp(54px,9.6vw,168px)] leading-none tracking-[-0.035em] uppercase motion-reduce:animate-none ${className}`}>
      {Array.from({ length: 4 }, (_, index) => <span key={index} className="pr-[.3em]">{children}</span>)}
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const [showPortrait, setShowPortrait] = useState(false)

  useEffect(() => {
    if (!showPortrait) return attachPortraitBrush(heroRef.current)
  }, [showPortrait])

  return (
    <section id="home" ref={heroRef} aria-labelledby="home-title"
      className="relative isolate h-svh touch-pan-y overflow-hidden bg-home font-home leading-[normal] text-home-ink antialiased
        brush-pointer:data-brush-enabled:cursor-none">
      <h1 id="home-title" className="sr-only">Sharafath Ahammed V</h1>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-[58%] select-none
        flex-col gap-[clamp(4px,1.2vw,18px)] home-compact:-translate-y-[62%]">
        <Marquee className="animate-home-marquee text-[#514069]">I Am Iron Man</Marquee>
        <Marquee className="animate-home-name font-medium">Sharafath Ahammed V</Marquee>
      </div>
      <div data-portrait={showPortrait} className="home-figure group/figure pointer-events-none absolute -bottom-[1cm] left-1/2 z-1
        aspect-774/840 h-[min(94svh,133vw)] origin-bottom -translate-x-1/2 scale-97 [--armor-drop:10px]
        home-compact:h-auto home-compact:w-[min(150vw,75svh)]">
        <img className={`home-armor ${figureLayer} translate-y-(--armor-drop) group-data-brushing/figure:invisible group-data-[portrait=true]/figure:invisible`}
          src={armor} width="774" height="840" fetchPriority="high"
          alt="Iron Man in red and gold armor with illuminated eyes and arc reactor" aria-hidden={showPortrait} />
        <img className={`home-portrait ${figureLayer} invisible scale-96  group-data-[portrait=true]/figure:visible`}
          src={portrait} width="1203" height="1307"
          alt="Sharafath Ahammed V in a charcoal T-shirt" aria-hidden={!showPortrait} />
        <canvas className={`${figureLayer} invisible group-data-brushing/figure:visible`} aria-hidden="true" />
      </div>
      <button type="button" aria-label="Show full portrait"
        className="absolute bottom-home-gutter left-home-gutter z-2 flex cursor-pointer items-center gap-2 text-[13px] text-home-muted
          home-compact:bottom-[max(18px,env(safe-area-inset-bottom))] home-compact:left-1/2 home-compact:-translate-x-1/2
          home-compact:rounded-full home-compact:bg-home-panel home-compact:px-3 home-compact:py-2
          home-compact:whitespace-nowrap home-compact:text-home-ink"
        aria-pressed={showPortrait} onClick={() => setShowPortrait(!showPortrait)}>
        <span aria-hidden="true" className="size-2 rounded-full bg-home-accent" />
        {showPortrait ? 'Show armor' : <>
          <span className="touch-input:hidden">Move your cursor to reveal the portrait</span>
          <span className="hidden touch-input:inline">Drag to reveal the portrait</span>
        </>}
      </button>
      <div></div>

    </section>
  )
}
