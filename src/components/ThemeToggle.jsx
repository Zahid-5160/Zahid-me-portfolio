import { AnimatePresence, motion } from 'framer-motion'

import { useTheme } from '../hooks/useTheme.js'
import { Moon, Sun } from './Icons.jsx'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span style={{ display: 'grid', placeItems: 'center', width: 17, height: 17 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'grid', placeItems: 'center', gridArea: '1 / 1' }}
          >
            {isDark ? <Moon /> : <Sun />}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  )
}
