const brushLifetime = 1100
const idleDelay = 2500

// Draw in viewport pixels so the brush stays aligned with the scaled figure.
export function attachPortraitBrush(hero) {
  const figure = hero.querySelector('.home-figure')
  const armor = figure.querySelector('.home-armor')
  const portrait = figure.querySelector('.home-portrait')
  const canvas = figure.querySelector('canvas')
  const cursor = document.querySelector('.site-cursor')
  const context = canvas.getContext('2d')
  if (!context) return

  const touch = matchMedia('(hover: none), (pointer: coarse)')
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
  let stamps = []
  let lastPoint = null
  let lastMove = performance.now()
  let lastDemoPoint = null
  let inView = false
  let frameId = 0
  let width, height, pixelRatio, armorOffset

  function reset() {
    cancelAnimationFrame(frameId)
    frameId = 0
    stamps = []
    lastPoint = null
    lastDemoPoint = null
    figure.removeAttribute('data-brushing')
    cursor.removeAttribute('data-active')
  }

  function schedule() {
    if (inView && !document.hidden && !frameId) frameId = requestAnimationFrame(frame)
  }

  function resize() {
    const rect = figure.getBoundingClientRect()
    width = rect.width
    height = rect.height
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * pixelRatio)
    canvas.height = Math.round(height * pixelRatio)
    armorOffset = parseFloat(getComputedStyle(figure).getPropertyValue('--armor-drop')) * width / figure.offsetWidth
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    reset()
    schedule()
  }

  function stamp(x, y, time) {
    const size = Math.max(width, 260) * (touch.matches ? .15 : .12)
    const lobes = []
    const count = 3 + Math.floor(Math.random() * 3)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI
      const distance = Math.random() * size * .45
      lobes.push({
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        radius: size * (.45 + Math.random() * .55),
      })
    }
    stamps.push({ x, y, time, lobes })
  }

  function endStroke() {
    lastPoint = null
    cursor.removeAttribute('data-active')
  }

  function brush(event) {
    if (event.target.closest('a, button')) {
      endStroke()
      return
    }
    cursor.style.setProperty('--cursor-x', `${event.clientX}px`)
    cursor.style.setProperty('--cursor-y', `${event.clientY}px`)
    cursor.setAttribute('data-active', '')
    lastMove = performance.now()
    lastDemoPoint = null
    const rect = figure.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    if (x < 0 || y < 0 || x > width || y > height) {
      lastPoint = null
      return
    }
    if (lastPoint) {
      const dx = x - lastPoint.x
      const dy = y - lastPoint.y
      const steps = Math.min(40, Math.ceil(Math.hypot(dx, dy) / (Math.max(width, 260) * .04)))
      for (let i = 1; i < steps; i++) {
        stamp(lastPoint.x + dx * i / steps, lastPoint.y + dy * i / steps, lastMove)
      }
    }
    stamp(x, y, lastMove)
    lastPoint = { x, y }
    schedule()
  }

  function drawImage(image, size, offset) {
    const cover = Math.max(width / image.naturalWidth, height / image.naturalHeight)
    const imageWidth = image.naturalWidth * cover * size
    const coverHeight = image.naturalHeight * cover
    const imageHeight = coverHeight * size
    const top = height - coverHeight + (coverHeight - imageHeight) / 2 + offset
    context.drawImage(image, (width - imageWidth) / 2, top, imageWidth, imageHeight)
  }

  function paint(now) {
    const mask = new Path2D()
    for (const mark of stamps) {
      const scale = Math.min(1, (1 - (now - mark.time) / brushLifetime) / .75)
      for (const lobe of mark.lobes) {
        const x = mark.x + lobe.dx * scale
        const y = mark.y + lobe.dy * scale
        const radius = lobe.radius * scale ** .8
        mask.moveTo(x + radius, y)
        mask.arc(x, y, radius, 0, 2 * Math.PI)
      }
    }
    context.clearRect(0, 0, width, height)
    drawImage(armor, 1, armorOffset)
    // Clear the armor inside the brush as the two silhouettes have different edges.
    context.save()
    context.clip(mask)
    context.clearRect(0, 0, width, height)
    drawImage(portrait, 1, -height * -0.02)
    context.restore()
    figure.setAttribute('data-brushing', '')
  }

  function frame(now) {
    frameId = 0
    const demo = touch.matches && !reducedMotion.matches
    if (demo && now - lastMove > idleDelay) {
      const t = (now - lastMove - idleDelay) / 1000
      const x = width * (.5 + Math.sin(t * 1.3) * .28)
      const y = height * (.32 + Math.sin(t * .9 + 1) * .22)
      if (!lastDemoPoint || Math.hypot(x - lastDemoPoint.x, y - lastDemoPoint.y) > width * .02) {
        stamp(x, y, now)
        lastDemoPoint = { x, y }
      }
    }
    stamps = stamps.filter(mark => now - mark.time < brushLifetime)
    if (stamps.length && armor.naturalWidth && portrait.naturalWidth) paint(now)
    else figure.removeAttribute('data-brushing')
    if (stamps.length || demo) schedule()
  }

  function syncPlayback() {
    reset()
    lastMove = performance.now()
    schedule()
  }

  resize()
  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting
    syncPlayback()
  })
  observer.observe(hero)
  hero.setAttribute('data-brush-enabled', '')
  const listeners = new AbortController()
  const { signal } = listeners
  hero.addEventListener('pointermove', brush, { signal })
  hero.addEventListener('pointerdown', brush, { signal })
  hero.addEventListener('pointercancel', endStroke, { signal })
  hero.addEventListener('pointerleave', endStroke, { signal })
  hero.addEventListener('pointerup', event => {
    if (event.pointerType !== 'mouse') endStroke()
  }, { signal })
  window.addEventListener('resize', resize, { signal })
  document.addEventListener('visibilitychange', syncPlayback, { signal })
  touch.addEventListener('change', syncPlayback, { signal })
  reducedMotion.addEventListener('change', syncPlayback, { signal })
  return () => {
    listeners.abort()
    observer.disconnect()
    reset()
    hero.removeAttribute('data-brush-enabled')
  }
}
