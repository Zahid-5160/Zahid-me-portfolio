import { motion, useReducedMotion } from 'framer-motion'

/**
 * Slides content into place as it scrolls into view — once, never on the way
 * back out.
 *
 * The four directions mirror the entrance animations on
 * silverheightholdings.com: a block travels the full width or height of its
 * own box and settles over 1.25 seconds on the browser's default `ease`
 * curve. Headings drop in from above, side-by-side blocks arrive from the
 * left and the right, and closing bands rise from below.
 *
 * Visitors who prefer reduced motion get a plain fade instead.
 */

/* Where each direction starts from — one full box-length away, which is what
   makes the movement read as a slide rather than a nudge. */
const OFFSETS = {
  up: { x: '0%', y: '100%' },
  down: { x: '0%', y: '-100%' },
  left: { x: '-100%', y: '0%' },
  right: { x: '100%', y: '0%' },
}

/* Where every direction ends up. Written in the same units as the start
   positions so the animation never has to switch units halfway. */
const RESTING = { x: '0%', y: '0%' }

/* The `ease` curve the reference site's keyframes fall back to */
const EASE = [0.25, 0.1, 0.25, 1]

export default function Reveal({
  children,
  as = 'div',
  from = 'up',
  delay = 0,
  duration = 1.25,
  className,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as] ?? motion.div
  const offset = OFFSETS[from] ?? OFFSETS.up

  return (
    <Tag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, ...RESTING }}
      /* Starts the moment the block clears the bottom of the window, the
         way the reference site's scroll trigger does */
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: reduceMotion ? 0.4 : duration,
        delay,
        ease: EASE,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
