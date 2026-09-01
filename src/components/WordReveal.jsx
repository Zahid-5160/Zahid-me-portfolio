import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reveals a phrase one whole word at a time. Each word starts dimmed and
 * lifts to full brightness on a long, deliberate stagger.
 *
 * This is the headline treatment from silverheightholdings.com, where
 * "Innovate. Elevate. Develop." arrives a word at a time roughly two thirds
 * of a second apart. Short, punchy phrases suit it; long sentences want a
 * much smaller `stagger`, or they take all day to finish.
 *
 * Screen readers get the phrase in one piece via aria-label, and
 * reduced-motion visitors get plain text.
 *
 * @param trigger 'mount' to run on load (hero), 'view' to wait for scroll
 */
export default function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.7,
  duration = 0.8,
  dim = 0.24,
  trigger = 'mount',
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <span className={className}>{text}</span>
  }

  const words = text.split(' ')

  const hidden = { opacity: dim, y: '0.18em', filter: 'blur(0.5px)' }
  const shown = { opacity: 1, y: '0em', filter: 'blur(0px)' }

  /* Running on mount vs. on scroll are different props, so the phrase is
     built once and the trigger swapped in. */
  const motionProps =
    trigger === 'view'
      ? { initial: hidden, whileInView: shown, viewport: { once: true, margin: '0px 0px -60px 0px' } }
      : { initial: hidden, animate: shown }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          className="word-reveal__word"
          key={`${word}-${index}`}
          aria-hidden
          {...motionProps}
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
