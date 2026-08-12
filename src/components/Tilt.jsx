import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from 'framer-motion'

/**
 * Tips a card slightly in 3D as the pointer moves across it, and moves a
 * soft highlight to follow the cursor. The effect is small on purpose —
 * enough to feel responsive, not enough to distract while reading.
 *
 * Skipped on touch screens and when reduced motion is requested.
 */
export default function Tilt({
  children,
  className,
  as = 'div',
  max = 5,
  glare = true,
  ...rest
}) {
  const Tag = motion[as] ?? motion.div
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const spring = { stiffness: 200, damping: 22, mass: 0.5 }
  const smoothRotateX = useSpring(rotateX, spring)
  const smoothRotateY = useSpring(rotateY, spring)

  // Built from motion values, so the highlight follows the pointer without
  // React re-rendering on every mouse move.
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 55%)`

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse' || !ref.current) return

    const box = ref.current.getBoundingClientRect()
    const px = (event.clientX - box.left) / box.width   // 0 → 1
    const py = (event.clientY - box.top) / box.height   // 0 → 1

    rotateY.set((px - 0.5) * 2 * max)
    rotateX.set((0.5 - py) * 2 * max)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  const handleEnter = (event) => {
    if (event.pointerType === 'mouse') setActive(true)
  }

  const handleLeave = () => {
    setActive(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  if (reduceMotion) {
    const Plain = as
    return <Plain className={className} {...rest}>{children}</Plain>
  }

  return (
    <Tag
      ref={ref}
      className={className}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 900,
      }}
      {...rest}
    >
      {children}

      {glare && (
        <motion.span
          className="tilt__glare"
          aria-hidden
          style={{ background: glareBackground, opacity: active ? 1 : 0 }}
        />
      )}
    </Tag>
  )
}
