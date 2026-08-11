import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sends the visitor back to the top of the page whenever the route changes,
 * so a new page never opens half-scrolled.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
