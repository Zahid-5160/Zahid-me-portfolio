import { Link } from 'react-router-dom'

import { skillGroups, strengths } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import { ArrowRight } from '../components/Icons.jsx'

export default function Skills() {
  return (
    <PageTransition
      title="Skills"
      description="Web development, data analysis and database skills — JavaScript, React, Python, Pandas, SQL and MongoDB."
    >
      <PageHero
        index="01 / Skills"
        eyebrow="What I work with"
        title="Skills & capabilities"
        subtitle="The tools I reach for, and what I actually use them to do."
        image="facade"
      />

      {/* ============================================== CORE STRENGTHS === */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="heading-block">
              <span className="eyebrow">Core strengths</span>
              <h2 className="heading-block__title">Three things I do well</h2>
              <p className="heading-block__sub">
                Most of my work falls into one of these three areas — and the
                useful part is that they overlap.
              </p>
            </div>
          </Reveal>

          <div className="strength-grid">
            {strengths.map((strength, index) => (
              <Reveal key={strength.title} delay={index * 0.08}>
                <Tilt as="article" className="card card--hover" style={{ height: '100%' }}>
                  <span className="card__index" aria-hidden>{index + 1}</span>
                  <h3 className="card__title">{strength.title}</h3>
                  <p className="card__body">{strength.body}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== SKILL GROUPS ===== */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="heading-block">
              <span className="eyebrow">Technical skills</span>
              <h2 className="heading-block__title">The full toolkit</h2>
              <p className="heading-block__sub">
                Grouped by what they are for, rather than one long list.
              </p>
            </div>
          </Reveal>

          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 0.06}>
                <Tilt as="article" className="card card--hover" style={{ height: '100%' }}>
                  <div className="skill-card__head">
                    <h3 className="card__title">{group.title}</h3>
                    <span className="skill-card__count">
                      {String(group.items.length).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="skill-card__summary">{group.summary}</p>

                  <div className="skill-card__rule" aria-hidden />

                  <ul className="tag-list">
                    {group.items.map((item) => (
                      <li className="tag" key={item}>{item}</li>
                    ))}
                  </ul>
                </Tilt>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="btn-row" style={{ marginTop: 'var(--sp-7)' }}>
              <Link className="btn btn--primary" to="/projects">
                See these skills in projects
                <ArrowRight className="btn__icon btn__icon--arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
