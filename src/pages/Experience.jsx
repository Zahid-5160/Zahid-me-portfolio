import { Link } from 'react-router-dom'

import { achievements, education, experience } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import { ArrowRight, Trophy } from '../components/Icons.jsx'

export default function Experience() {
  return (
    <PageTransition
      title="Experience"
      description="Professional experience as a Web Developer at Arsuma Solutions, plus education and awards."
    >
      <PageHero
        index="02 / Experience"
        eyebrow="Where I have worked"
        title="Experience & education"
        subtitle="Eleven months building and maintaining live client websites, on top of a Computer Science degree."
        image="skyline"
      />

      {/* ================================================ WORK ========== */}
      <section className="section">
        <div className="container">
          <Reveal from="down">
            <div className="heading-block">
              <span className="eyebrow">Professional experience</span>
              <h2 className="heading-block__title">Work history</h2>
            </div>
          </Reveal>

          <div className="timeline">
            {experience.map((job, index) => (
              <Reveal
                key={`${job.company}-${job.role}`}
                from="right"
                delay={index * 0.08}
              >
                <article className="timeline__item">
                  <span className="timeline__dot" aria-hidden />

                  <div className="card">
                    <div className="exp-card__head">
                      <div>
                        <h3 className="exp-card__role">{job.role}</h3>
                        <p className="exp-card__company">
                          {job.company}
                          <span className="exp-card__sep" aria-hidden>|</span>
                          <span className="exp-card__where">
                            {job.type} — {job.location}
                          </span>
                        </p>
                      </div>
                      <span className="exp-card__dates">
                        {job.start} – {job.end}
                      </span>
                    </div>

                    <p className="card__body">{job.summary}</p>

                    <ul className="bullets">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>

                    <ul className="tag-list" style={{ marginTop: 'var(--sp-2)' }}>
                      {job.tags.map((tag) => (
                        <li className="tag tag--accent" key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================== EDUCATION ========== */}
      <section className="section section--alt">
        <div className="container">
          <Reveal from="down">
            <div className="heading-block">
              <span className="eyebrow">Education</span>
              <h2 className="heading-block__title">Academic background</h2>
            </div>
          </Reveal>

          <div className="edu-grid">
            {education.map((entry, index) => (
              <Reveal
                key={entry.qualification}
                from={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.08}
              >
                <Tilt as="article" className="card card--hover" style={{ height: '100%' }}>
                  <span className="edu-card__year">{entry.year}</span>
                  <h3 className="edu-card__qual">{entry.qualification}</h3>
                  <p className="edu-card__inst">{entry.institution}</p>
                  {entry.detail && (
                    <span className="tag tag--accent" style={{ alignSelf: 'flex-start' }}>
                      {entry.detail}
                    </span>
                  )}
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= ACHIEVEMENTS ========= */}
      <section className="section">
        <div className="container">
          <Reveal from="down">
            <div className="heading-block">
              <span className="eyebrow">Achievement</span>
              <h2 className="heading-block__title">Recognition</h2>
            </div>
          </Reveal>

          {achievements.map((achievement, index) => (
            <Reveal
              key={achievement.title}
              from={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.08}
            >
              <div className="award">
                <span className="award__icon" aria-hidden>
                  <Trophy />
                </span>
                <div className="award__body">
                  <h3 className="award__title">
                    {achievement.title}
                    <span className="award__year">{achievement.year}</span>
                  </h3>
                  <p className="card__body">{achievement.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal from="up" delay={0.12}>
            <div className="btn-row" style={{ marginTop: 'var(--sp-7)' }}>
              <Link className="btn btn--primary" to="/projects">
                Browse my projects
                <ArrowRight className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost" to="/skills">
                View my skills
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
