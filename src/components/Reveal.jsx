import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fades a block into place as it scrolls into view — once, never on the way
 * back out.
 *
 * Every content block on silverheightholdings.com arrives the same way: a
 * short rise from below over roughly seven tenths of a second. The
 * consistency is the point — the page reads as one system rather than a
 * collection of separate effects — so `up` is the default and the other
 * directions are there for the rare block that genuinely needs one.
 *
 * Visitors who prefer reduced motion get a plain fade.
 */

/* A rise of about a line and a half. Short enough that a block never looks
   detached from where it belongs. */
const TRAVEL = 42

const OFFSETS = {
  up: { x: 0, y: TRAVEL },
  down: { x: 0, y: -TRAVEL },
  left: { x: -TRAVEL, y: 0 },
  right: { x: TRAVEL, y: 0 },
}

const RESTING = { x: 0, y: 0 }

const EASE = [0.22, 1, 0.36, 1]

export default function Reveal({
  children,
  as = 'div',
  from = 'up',
  delay = 0,
  duration = 0.7,
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
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
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
