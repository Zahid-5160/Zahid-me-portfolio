import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts a number up from zero the first time it scrolls into view.
 * "7.6" counts up keeping one decimal place; "11" counts in whole numbers.
 *
 * The two-second run and its gentle start-and-stop curve are taken from the
 * counters on silverheightholdings.com.
 *
 * Visitors who prefer reduced motion just see the final number.
 */
export default function CountUp({ value, duration = 2000 }) {
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
      // Eases in and out, so the number gathers pace and then settles
      const eased = 0.5 - Math.cos(progress * Math.PI) / 2

      setDisplay((target * eased).toFixed(decimals))

      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduceMotion, target, decimals, duration])

  return <span ref={ref}>{Number.isNaN(target) ? value : display}</span>
}
