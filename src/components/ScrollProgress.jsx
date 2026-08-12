import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * The silver line across the very top that fills up as you scroll down the
 * page, so you can see how much is left.
 *
 * It is driven straight from the scroll position rather than from React
 * state, which means it stays perfectly smooth even on long pages.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const width = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: width }}
      aria-hidden
    />
  )
}
