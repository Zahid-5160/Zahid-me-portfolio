import { motion, useReducedMotion } from 'framer-motion'

import { profile } from '../data/content.js'

/**
 * The stinger that introduces each major section: a monogram animates in at
 * centre, the heading follows, a hairline draws itself across, and the
 * wordmark settles underneath.
 *
 * silverheightholdings.com plays this same beat — mark, then heading, then
 * wordmark — before every block on the page, swapping the mark to suit the
 * section. It is the piece that ties the page together, so the `mark` prop
 * takes a glyph or an icon per section.
 */
export default function SectionBumper({
  eyebrow,
  title,
  sub,
  mark = profile.initials,
  wordmark = profile.name,
  align = 'center',
}) {
  const reduceMotion = useReducedMotion()

  const rise = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }

  const ease = [0.22, 1, 0.36, 1]

  return (
    <motion.div
      className={`bumper${align === 'start' ? ' bumper--start' : ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ staggerChildren: 0.18 }}
    >
      {/* 1 — the mark */}
      <motion.span
        className="bumper__mark"
        aria-hidden
        variants={
          reduceMotion
            ? rise
            : {
                hidden: { opacity: 0, scale: 0.62 },
                show: { opacity: 1, scale: 1 },
              }
        }
        transition={{ duration: 0.7, ease }}
      >
        {mark}
      </motion.span>

      {/* 2 — the heading */}
      {eyebrow && (
        <motion.span className="eyebrow bumper__eyebrow" variants={rise} transition={{ duration: 0.7, ease }}>
          {eyebrow}
        </motion.span>
      )}

      <motion.h2 className="bumper__title" variants={rise} transition={{ duration: 0.7, ease }}>
        {title}
      </motion.h2>

      {sub && (
        <motion.p className="bumper__sub" variants={rise} transition={{ duration: 0.7, ease }}>
          {sub}
        </motion.p>
      )}

      {/* 3 — the hairline draws across, then the wordmark */}
      <motion.span
        className="bumper__rule"
        aria-hidden
        variants={
          reduceMotion
            ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
            : { hidden: { scaleX: 0 }, show: { scaleX: 1 } }
        }
        transition={{ duration: 0.9, ease }}
      />

      <motion.span className="bumper__wordmark" aria-hidden variants={rise} transition={{ duration: 0.7, ease }}>
        {wordmark}
      </motion.span>
    </motion.div>
  )
}
