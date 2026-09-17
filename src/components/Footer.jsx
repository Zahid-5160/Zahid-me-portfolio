import { Link } from 'react-router-dom'

import { navLinks, profile, skillGroups } from '../data/content.js'
import { emailHref, emailLinkProps } from '../lib/email.js'
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from './Icons.jsx'

/**
 * The site footer — a navy panel that echoes the navigation bar.
 *
 * A top row carries the brand and the social links, four columns below it
 * cover availability, pages, areas of expertise and contact details, and a
 * legal line closes it off with a way back to the top of the page.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  const external = { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__top">
          <div className="footer__brand-col">
            <Link to="/" className="brand">
              <span className="brand__mark" aria-hidden>{profile.initials}</span>
              <span className="brand__text">
                <span className="brand__name">{profile.name}</span>
                <span className="brand__role">{profile.role}</span>
              </span>
            </Link>
            <p className="footer__tagline">{profile.tagline}</p>
          </div>

          <ul className="footer__social" aria-label="Find me online">
            <li>
              <a className="footer__social-btn" href={profile.linkedin} aria-label="LinkedIn" {...external}>
                <Linkedin size={17} />
              </a>
            </li>
            <li>
              <a className="footer__social-btn" href={profile.github} aria-label="GitHub" {...external}>
                <Github size={17} />
              </a>
            </li>
            <li>
              <a className="footer__social-btn" href={emailHref()} aria-label="Email" {...emailLinkProps}>
                <Mail size={17} />
              </a>
            </li>
            <li>
              <a className="footer__social-btn" href={`tel:${profile.phoneHref}`} aria-label="Phone">
                <Phone size={17} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__grid">
          <div>
            <h2 className="footer__col-title">Availability</h2>
            <p className="footer__status">
              <span className="hero__status-dot" aria-hidden />
              {profile.availability}
            </p>
            <a className="btn btn--nav btn--sm footer__cta" href={emailHref()} {...emailLinkProps}>
              Get in touch
              <ArrowRight size={14} className="btn__icon btn__icon--arrow" />
            </a>
          </div>

          <div>
            <h2 className="footer__col-title">Navigation</h2>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link className="footer__link" to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__col-title">Expertise</h2>
            <ul className="footer__list">
              {skillGroups.slice(0, 3).map((group) => (
                <li key={group.title}>
                  <Link className="footer__link" to="/skills">{group.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__col-title">Contact</h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href={emailHref()} {...emailLinkProps}>
                  <Mail size={15} />
                  {profile.email}
                </a>
              </li>
              <li>
                <a className="footer__link" href={`tel:${profile.phoneHref}`}>
                  <Phone size={15} />
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="footer__link footer__link--plain">
                  <MapPin size={15} />
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <button type="button" className="footer__to-top" onClick={toTop}>
            Back to top
            <ArrowRight size={13} className="footer__to-top-icon" />
          </button>
        </div>
      </div>
    </footer>
  )
}
