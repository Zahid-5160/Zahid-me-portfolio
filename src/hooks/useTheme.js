import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'zahid-theme'

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    // Private browsing modes can block localStorage.
    return null
  }
}

/**
 * Light / dark theme control.
 *
 * The site opens in its light neutral theme. Dark is an option the visitor
 * can choose with the toggle in the header, and that choice is remembered
 * on their own device.
 *
 * (This deliberately does not follow the visitor's system setting — the
 * light palette is the intended look of the site.)
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return readStored() ?? 'light'
  })

  // Reflect the theme on <html> so the CSS variables switch over
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0e0f11' : '#f2f2f3')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Ignore — the theme still applies for this visit.
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
