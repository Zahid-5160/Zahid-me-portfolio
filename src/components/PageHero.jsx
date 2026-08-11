import { motion, useReducedMotion } from 'framer-motion'

import Backdrop from './Backdrop.jsx'

/**
 * The compact photographic header used on the Skills, Experience and
 * Projects pages. Keeps the three inner pages visually consistent.
 */
export default function PageHero({ index, eyebrow, title, subtitle, image }) {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }

  const item = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <section className="page-hero">
      <Backdrop name={image} className="page-hero__img" alt="" priority />
      <div className="page-hero__veil" />

      <motion.div
        className="container container--wide page-hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={item} className="page-hero__index">
          {index}
        </motion.span>
        <motion.span variants={item} className="eyebrow eyebrow--on-photo">
          {eyebrow}
        </motion.span>
        <motion.h1 variants={item} className="page-hero__title">
          {title}
        </motion.h1>
        <motion.p variants={item} className="page-hero__sub">
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  )
}
