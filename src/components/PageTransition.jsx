import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { profile } from '../data/content.js'

/**
 * Wraps every page. Handles two things:
 *   1. the enter/exit animation as the visitor moves between pages
 *   2. the browser tab title and meta description for that page
 *
 * Visitors who have asked their device to reduce motion get a plain fade
 * with no movement.
 */
export default function PageTransition({ children, title, description }) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = title
      ? `${title} — ${profile.name}`
      : `${profile.name} — ${profile.role}`

    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
  }, [title, description])

  const variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -14 },
      }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: reduceMotion ? 0.18 : 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
