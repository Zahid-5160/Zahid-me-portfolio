import { Link } from 'react-router-dom'

import { navLinks, profile } from '../data/content.js'
import { Github, Linkedin, Mail, MapPin, Phone } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__grid">
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

          <div>
            <h2 className="footer__col-title">Pages</h2>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link className="footer__link" to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__col-title">Contact</h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href={`mailto:${profile.email}`}>
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
                <a
                  className="footer__link"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={15} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="footer__link muted">
                  <MapPin size={15} />
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>Built with React, Vite and Three.js.</span>
        </div>
      </div>
    </footer>
  )
}
