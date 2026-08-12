import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts a number up from zero the first time it scrolls into view.
 * "7.6" counts up keeping one decimal place; "11" counts in whole numbers.
 *
 * Visitors who prefer reduced motion just see the final number.
 */
export default function CountUp({ value, duration = 1400 }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  const target = Number.parseFloat(value)
  const decimals = value.includes('.') ? value.split('.')[1].length : 0

  const [display, setDisplay] = useState(
    reduceMotion || Number.isNaN(target) ? value : (0).toFixed(decimals),
  )

  useEffect(() => {
    if (!inView || reduceMotion || Number.isNaN(target)) return

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // Ease out, so it sprints then settles rather than stopping dead
      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplay((target * eased).toFixed(decimals))

      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduceMotion, target, decimals, duration])

  return <span ref={ref}>{Number.isNaN(target) ? value : display}</span>
}
