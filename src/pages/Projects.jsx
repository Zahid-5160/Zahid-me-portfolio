import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import { profile, projects } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import { formatUpdated, useGithubRepos } from '../hooks/useGithubRepos.js'
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Github,
  Star,
} from '../components/Icons.jsx'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const repoMeta = useGithubRepos(projects)

  // Build the filter row from whatever categories exist in the data
  const filters = useMemo(() => {
    const counts = new Map()
    for (const project of projects) {
      counts.set(project.category, (counts.get(project.category) ?? 0) + 1)
    }
    return [
      { label: 'All', count: projects.length },
      ...[...counts.entries()].map(([label, count]) => ({ label, count })),
    ]
  }, [])

  const visible = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  return (
    <PageTransition
      title="Projects"
      description="Selected projects in web development, data analysis and database design."
    >
      <PageHero
        index="03 / Projects"
        eyebrow="Selected work"
        title="Projects"
        subtitle="Six projects that show both sides of what I do — building the product, and understanding the data behind it."
        image="glass-tower"
      />

      <section className="section">
        <div className="container">
          {/* ------------------------------------------------ filters --- */}
          <Reveal>
            <div className="filters" role="group" aria-label="Filter projects by category">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.label
                return (
                  <button
                    key={filter.label}
                    type="button"
                    className={`filter${isActive ? ' filter--active' : ''}`}
                    onClick={() => setActiveFilter(filter.label)}
                    aria-pressed={isActive}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-bg"
                        className="filter__bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {filter.label}
                    <span className="filter__count">{filter.count}</span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* ------------------------------------------------- grid -----
              The `key` on the grid makes React rebuild the list whenever the
              filter changes, which replays the reveal animation on the cards
              that are now showing. */}
          <div className="project-grid" key={activeFilter}>
              {visible.map((project, index) => {
                const meta = repoMeta[project.id]
                const updated = formatUpdated(meta?.updated)

                return (
                  <Reveal key={project.id} delay={index * 0.06}>
                    <Tilt as="article" className="card card--hover project-card">
                    <div className="project-card__head">
                      <div>
                        <h2 className="project-card__title">{project.title}</h2>
                        <p className="project-card__blurb">{project.blurb}</p>
                      </div>
                      <span className="tag tag--metal project-card__cat">
                        {project.category}
                      </span>
                    </div>

                    <ul className="bullets">
                      {project.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>

                    <ul className="tag-list">
                      {project.tech.map((tech) => (
                        <li className="tag" key={tech}>{tech}</li>
                      ))}
                    </ul>

                    {/* Live details from GitHub, shown only when available */}
                    {meta && (
                      <div className="repo-meta">
                        {meta.language && (
                          <span className="repo-meta__item">
                            <span className="repo-meta__dot" aria-hidden />
                            {meta.language}
                          </span>
                        )}
                        {meta.stars > 0 && (
                          <span className="repo-meta__item">
                            <Star />
                            {meta.stars}
                          </span>
                        )}
                        {updated && (
                          <span className="repo-meta__item">
                            <Clock />
                            {updated}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="project-card__footer">
                      {project.repo && (
                        <a
                          className="btn btn--ghost btn--sm"
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={14} />
                          View code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          className="btn btn--primary btn--sm"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} />
                          Visit site
                        </a>
                      )}
                      {!project.repo && !project.demo && (
                        <span className="muted project-card__note">
                          Available on request
                        </span>
                      )}
                    </div>
                    </Tilt>
                  </Reveal>
                )
              })}
          </div>

          {visible.length === 0 && (
            <p className="empty-state">No projects in this category yet.</p>
          )}

          {/* ------------------------------------------------ callout --- */}
          <Reveal delay={0.1}>
            <div className="callout callout--spaced">
              <span className="callout__icon" aria-hidden>
                <Github size={20} />
              </span>
              <div>
                <p className="callout__title">More on GitHub</p>
                <p className="callout__body">
                  The code for my public projects lives on GitHub, along with
                  smaller experiments that did not make this page.{' '}
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    Browse the repositories
                    <ArrowRight size={13} className="callout__arrow" />
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
