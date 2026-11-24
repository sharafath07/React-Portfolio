import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ProgressBar from './ProgressBar'

const sections = ['About', 'Skills', 'Projects']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const header = useRef(null)
  const toggle = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    function dismissOutside(event) {
      if (!header.current.contains(event.target)) setMenuOpen(false)
    }
    function dismissOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggle.current.focus()
      }
    }
    const desktop = matchMedia('(min-width: 721px)')
    const close = () => setMenuOpen(false)
    document.addEventListener('pointerdown', dismissOutside)
    document.addEventListener('keydown', dismissOnEscape)
    window.addEventListener('hashchange', close)
    desktop.addEventListener('change', close)
    return () => {
      document.removeEventListener('pointerdown', dismissOutside)
      document.removeEventListener('keydown', dismissOnEscape)
      window.removeEventListener('hashchange', close)
      desktop.removeEventListener('change', close)
    }
  }, [menuOpen])

  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-2 bg-home-base/90 p-home-gutter leading-[normal] backdrop-blur-md"
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
      }}>
      <a href="#home" onClick={() => setMenuOpen(false)}
        className="flex items-center gap-2.5 text-[17px] font-medium tracking-[-.01em] home-compact:text-[15px]">
        <span aria-hidden="true" className="grid size-[34px] shrink-0 place-items-center rounded-[9px] bg-home-accent text-home-accent-ink home-compact:size-[30px] home-compact:rounded-lg">
          <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M2 5h20L12 21z M7 8h10l-5 8z" />
          </svg>
        </span>
        Sharafath Ahammed V
      </a>
      <nav aria-label="Portfolio" className="flex items-center gap-[clamp(14px,2vw,28px)] text-[16px] home-compact:gap-2 home-compact:text-[15px]">
        <button ref={toggle} type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen} aria-controls="section-links" onClick={() => setMenuOpen(!menuOpen)}
          className="hidden size-10 cursor-pointer place-items-center rounded-[10px] text-home-muted hover:bg-home-panel hover:text-home-ink home-compact:grid">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div id="section-links" className={`flex items-center gap-[clamp(14px,2vw,28px)] text-home-muted
          home-compact:absolute home-compact:top-full home-compact:right-home-gutter home-compact:min-w-44 home-compact:flex-col
          home-compact:items-stretch home-compact:gap-0 home-compact:rounded-2xl home-compact:border home-compact:border-home-line
          home-compact:bg-home-surface home-compact:p-2 home-compact:shadow-xl ${menuOpen ? '' : 'home-compact:hidden'}`}>
          {sections.map(label => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="hover:text-home-ink home-compact:rounded-lg home-compact:px-4 home-compact:py-3 home-compact:hover:bg-home-panel">{label}</a>
          ))}
        </div>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="primary-action gap-1.5 whitespace-nowrap text-[15px] home-compact:px-3.5 home-compact:py-[9px] home-compact:text-[14px]">
          Say hi! <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <ProgressBar />
    </header>
  )
}
