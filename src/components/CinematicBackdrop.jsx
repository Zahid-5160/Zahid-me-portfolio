import { useEffect, useRef } from 'react'

import Backdrop from './Backdrop.jsx'

/**
 * A full-bleed photograph that turns slowly through half a circle and back.
 *
 * The turning layer is a square as wide as the section's diagonal, so the
 * section's corners stay inside it at every angle and no edge of the
 * photograph ever comes into view — without zooming in any further than
 * that requires.
 *
 * @param name  image stem, as for <Backdrop>
 */
export default function CinematicBackdrop({ name, priority = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const size = () => {
      const { clientWidth: w, clientHeight: h } = el
      if (!w || !h) return
      el.style.setProperty('--cine-d', `${Math.ceil(Math.hypot(w, h)) + 2}px`)
    }
    size()
    const observer = new ResizeObserver(size)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="cine" aria-hidden="true">
      <div className="cine__turn">
        <Backdrop name={name} className="cine__img" alt="" priority={priority} />
      </div>
    </div>
  )
}
