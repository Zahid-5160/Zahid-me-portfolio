import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reveals a heading one letter at a time, each letter rising out of a
 * hidden strip as though it were being uncovered.
 *
 * Screen readers get the whole phrase in one piece (via aria-label) rather
 * than a stream of single letters, and reduced-motion visitors get plain
 * text with no animation at all.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.028,
  duration = 0.65,
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <span className={className}>{text}</span>
  }

  const words = text.split(' ')
  let charIndex = -1

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span className="split__word" key={`${word}-${wordIndex}`} aria-hidden>
          {Array.from(word).map((character, i) => {
            charIndex += 1
            return (
              <span className="split__mask" key={i}>
                <motion.span
                  className="split__char"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration,
                    delay: delay + charIndex * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {character}
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </span>
  )
}
