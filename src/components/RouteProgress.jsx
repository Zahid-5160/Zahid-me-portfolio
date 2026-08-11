import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * The thin line that sweeps across the top of the screen while a new page
 * loads. Small detail, but it makes navigation feel instant and deliberate.
 */
export default function RouteProgress() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(false)
  const firstRender = useRef(true)

  useEffect(() => {
    // No bar on the very first page load — the page is already there.
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setActive(true)
    const timer = setTimeout(() => setActive(false), 620)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={pathname}
          className="route-progress"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            scaleX: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.25 },
          }}
        />
      )}
    </AnimatePresence>
  )
}
