import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { profile } from '../data/content.js'

/**
 * Wraps every page. Handles three things:
 *
 *   1. the animation as the visitor moves between pages — the outgoing page
 *      sinks and fades, a dark panel sweeps up over it, and the new page
 *      rises into place behind it
 *   2. a soft blur on the way in, so the page appears to come into focus
 *   3. the browser tab title and the page description for search engines
 *
 * Visitors who have asked their device to reduce motion get a plain fade
 * with no movement and no wipe.
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

  const content = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 26, filter: 'blur(6px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -18, filter: 'blur(4px)' },
      }

  return (
    <>
      {/* The wipe: grows up from the bottom, then lifts away off the top */}
      {!reduceMotion && (
        <motion.div
          className="page-wipe"
          initial={{ scaleY: 1 }}
          animate={{
            scaleY: 0,
            transformOrigin: '50% 0%',
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            scaleY: 1,
            transformOrigin: '50% 100%',
            transition: { duration: 0.42, ease: [0.76, 0, 0.24, 1] },
          }}
        />
      )}

      <motion.div
        variants={content}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: reduceMotion ? 0.18 : 0.5,
          ease: [0.22, 1, 0.36, 1],
          delay: reduceMotion ? 0 : 0.12,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
