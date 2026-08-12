import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Makes whatever it wraps lean towards the mouse pointer, then spring back
 * when the pointer leaves. Used on buttons so they feel "alive" under the
 * cursor rather than static.
 *
 * Does nothing on touch screens (there is no hovering finger) or for
 * visitors who have asked their device to reduce motion.
 */
export default function Magnetic({
  children,
  strength = 0.3,
  className,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // A spring rather than a direct value, so it glides instead of snapping
  const springX = useSpring(x, { stiffness: 250, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 250, damping: 20, mass: 0.4 })

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse' || !ref.current) return

    const box = ref.current.getBoundingClientRect()
    const centreX = box.left + box.width / 2
    const centreY = box.top + box.height / 2

    x.set((event.clientX - centreX) * strength)
    y.set((event.clientY - centreY) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  if (reduceMotion) {
    return <span className={className} {...rest}>{children}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: 'inline-flex' }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      {...rest}
    >
      {children}
    </motion.span>
  )
}
