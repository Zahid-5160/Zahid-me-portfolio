import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

import { about, profile } from '../data/content.js'
import Backdrop from '../components/Backdrop.jsx'
import CountUp from '../components/CountUp.jsx'
import Magnetic from '../components/Magnetic.jsx'
import PageTransition from '../components/PageTransition.jsx'
import Portrait from '../components/Portrait.jsx'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'
import Tilt from '../components/Tilt.jsx'
import { asset } from '../lib/asset.js'
import { emailHref, emailLinkProps } from '../lib/email.js'
import { ArrowRight, Download, Github, Linkedin, MapPin } from '../components/Icons.jsx'

/* The 3D layer is decorative, so it is fetched separately and arrives a
   moment after the hero text and photograph. Nothing waits on it. */
const SceneBackground = lazy(() => import('../components/SceneBackground.jsx'))

export default function Home() {
  const reduceMotion = useReducedMotion()

  // The hero introduces itself one line at a time
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
  }

  const item = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <PageTransition
      title="Home"
      description={`${profile.name} — ${profile.role}. ${profile.tagline}`}
    >
      {/* ==================================================== HERO ======= */}
      <section className="hero">
        <Backdrop
          name="hero-towers"
          className="hero__photo"
          alt=""
          priority
        />
        <Suspense fallback={null}>
          <SceneBackground className="hero__canvas" />
        </Suspense>
        <div className="hero__veil" />

        <div className="container container--wide hero__grid">
          <motion.div
            className="hero__content"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={item} className="eyebrow eyebrow--on-photo">
              {profile.availability}
            </motion.span>

            <h1 className="hero__title">
              <SplitText text={profile.name} delay={0.18} />
            </h1>

            <motion.p variants={item} className="hero__role">
              <span>Web Developer</span>
              <span className="hero__role-dot" aria-hidden />
              <span>Data Analyst</span>
            </motion.p>

            <motion.p variants={item} className="hero__tagline">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="btn-row">
              <Magnetic>
                <Link className="btn btn--primary" to="/projects">
                  View my work
                  <ArrowRight className="btn__icon btn__icon--arrow" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a className="btn btn--on-photo" href={emailHref()} {...emailLinkProps}>
                  Contact me
                </a>
              </Magnetic>
              {profile.resume && (
                <Magnetic>
                  <a className="btn btn--on-photo" href={asset(profile.resume)} download>
                    <Download size={15} className="btn__icon" />
                    CV
                  </a>
                </Magnetic>
              )}
            </motion.div>

            <motion.div variants={item} className="hero__meta">
              <span className="hero__meta-item">
                <MapPin size={15} />
                {profile.location}
              </span>
              <a
                className="hero__meta-item"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                className="hero__meta-item"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__aside"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="portrait-tilt" max={7} glare={false}>
              <Portrait />
            </Tilt>
          </motion.div>
        </div>

        <div className="hero__cue" aria-hidden>
          <span>Scroll</span>
          <span className="hero__cue-line" />
        </div>
      </section>

      {/* =================================================== STATS ======= */}
      <section className="section section--tight">
        <div className="container container--wide">
          <Reveal className="stats">
            {about.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat__value">
                  <CountUp value={stat.value} />
                  {stat.suffix && <span className="stat__suffix">{stat.suffix}</span>}
                </span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* =================================================== ABOUT ======= */}
      <section className="section section--alt" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__side">
              <Reveal>
                <div className="heading-block" style={{ marginBottom: 0 }}>
                  <span className="eyebrow">About</span>
                  <h2 className="heading-block__title">{about.heading}</h2>
                  <p className="lead">{about.lead}</p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="facts">
                  <div className="fact">
                    <span className="fact__label">Based in</span>
                    <span className="fact__value">{profile.location}</span>
                  </div>
                  <div className="fact">
                    <span className="fact__label">Focus</span>
                    <span className="fact__value">Web development &amp; data analysis</span>
                  </div>
                  <div className="fact">
                    <span className="fact__label">Currently</span>
                    <span className="fact__value">{profile.availability}</span>
                  </div>
                  <div className="fact">
                    <span className="fact__label">Email</span>
                    <span className="fact__value">
                      <a href={emailHref()} {...emailLinkProps}>{profile.email}</a>
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="about__prose">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <div className="btn-row" style={{ marginTop: '0.5rem' }}>
                  <Link className="btn btn--ghost" to="/experience">
                    See my experience
                    <ArrowRight className="btn__icon btn__icon--arrow" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================== CTA ======== */}
      <section className="photo-band cta-band">
        <Backdrop name="glass-tower" className="photo-band__img" alt="" />
        <div className="photo-band__veil" />

        <div className="container photo-band__content">
          <Reveal className="cta-band__inner">
            <span className="eyebrow eyebrow--on-photo">Get in touch</span>
            <h2 className="cta-band__title">Looking for someone who can build it and measure it?</h2>
            <p className="cta-band__text">
              I am open to full-time roles in web development and data analysis.
              The fastest way to reach me is email — I reply to everything.
            </p>
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <a className="btn btn--primary" href={emailHref()} {...emailLinkProps}>
                Email me
                <ArrowRight className="btn__icon btn__icon--arrow" />
              </a>
              <a
                className="btn btn--on-photo"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
