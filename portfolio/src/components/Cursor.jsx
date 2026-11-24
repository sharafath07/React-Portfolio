import { useEffect, useRef } from 'react'
import { Aperture, Crosshair, Feather, MousePointer2, Sparkles } from 'lucide-react'

// Change this value to compare the available cursor directions.
// Options: pointer, sparkles, crosshair, aperture, feather.
const cursorDesign = 'crosshair'

const cursorIcons = {
  pointer: MousePointer2,
  sparkles: Sparkles,
  crosshair: Crosshair,
  aperture: Aperture,
  feather: Feather,
}

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const pointer = matchMedia('(hover: hover) and (pointer: fine)')
    if (!pointer.matches) return

    let frameId = 0
    let x = -100
    let y = -100

    function render() {
      frameId = 0
      cursor.style.setProperty('--cursor-x', `${x}px`)
      cursor.style.setProperty('--cursor-y', `${y}px`)
    }

    function move(event) {
      x = event.clientX
      y = event.clientY
      if (!frameId) frameId = requestAnimationFrame(render)
      cursor.dataset.visible = 'true'
      cursor.dataset.hover = Boolean(event.target.closest('a, button, [role="button"]'))
    }

    function leave() {
      cursor.dataset.visible = 'false'
      cursor.dataset.hover = 'false'
    }

    document.body.dataset.customCursor = 'true'
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerleave', leave)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', leave)
      delete document.body.dataset.customCursor
    }
  }, [])

  const Icon = cursorIcons[cursorDesign]

  return (
    <span ref={cursorRef} data-design={cursorDesign} className="site-cursor" aria-hidden="true">
      <Icon className="site-cursor__icon" strokeWidth={1.6} />
    </span>
  )
}
