import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fades content up as it scrolls into view — once, never on the way back out.
 * Falls back to a plain fade when the visitor prefers reduced motion.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 20,
  className,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -70px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
