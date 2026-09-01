import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { navLinks, profile } from '../data/content.js'
import { emailHref, emailLinkProps } from '../lib/email.js'
import Magnetic from './Magnetic.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { ArrowRight, Close, Menu } from './Icons.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  /* The bar picks up a border and shadow once the page scrolls, then gets
     out of the way: scrolling down slides it up out of view, and the first
     flick back up brings it straight down again. It is the sliding sticky
     header from silverheightholdings.com.

     It only starts hiding below `revealAfter`, so the top of every page
     keeps a settled header rather than one that jumps on the first scroll. */
  useEffect(() => {
    const revealAfter = 240
    let lastY = window.scrollY
    let queued = false

    const update = () => {
      queued = false
      const y = window.scrollY

      setScrolled(y > 8)
      setHidden(y > revealAfter && y > lastY)

      // Ignore rubber-band scrolling past the top or bottom of the page
      lastY = Math.max(y, 0)
    }

    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Always close the mobile menu after navigating
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Let the Escape key close the mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header
      className={`nav${scrolled ? ' nav--scrolled' : ''}${
        hidden && !menuOpen ? ' nav--tucked' : ''
      }`}
    >
      <div className="container container--wide nav__inner">
        <Link to="/" className="brand" aria-label={`${profile.name} — home`}>
          <span className="brand__mark" aria-hidden>{profile.initials}</span>
          <span className="brand__text">
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.role}</span>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav__links">
            {navLinks.map((link, index) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav__link${isActive ? ' nav__link--active' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Corner brackets travel to whichever page is open,
                          in place of a filled pill. */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-bracket"
                          className="nav__bracket"
                          aria-hidden
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}
                      <span className="nav__num" aria-hidden>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {/* Two copies of the label: on hover the first slides
                          up out of view as the second rises to replace it. */}
                      <span className="nav__link-swap">
                        <span>{link.label}</span>
                        <span aria-hidden>{link.label}</span>
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <ThemeToggle />

          {/* The hide-on-mobile class sits on a plain wrapper, not on
              Magnetic — Magnetic sets its own inline display, which would
              override the rule that hides this on small screens. */}
          <div className="nav__desktop-cta">
            <Magnetic strength={0.25}>
              <a
                className="btn btn--nav btn--sm"
                href={emailHref()}
                {...emailLinkProps}
              >
                Get in touch
                <ArrowRight size={14} className="btn__icon btn__icon--arrow" />
              </a>
            </Magnetic>
          </div>

          <button
            type="button"
            className="icon-btn nav__menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container">
              <ul className="nav__mobile-list">
                {navLinks.map((link, index) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `nav__mobile-link${isActive ? ' nav__mobile-link--active' : ''}`
                      }
                    >
                      <span className="nav__num" aria-hidden>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="nav__mobile-cta">
                <a className="btn btn--nav" href={emailHref()} {...emailLinkProps}>
                  Get in touch
                  <ArrowRight size={14} className="btn__icon btn__icon--arrow" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
