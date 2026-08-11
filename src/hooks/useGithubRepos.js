import { useEffect, useState } from 'react'

/**
 * Reads live details (main language, stars, last updated) straight from
 * GitHub for any project that has a `repo` link.
 *
 * This is a nicety, not a dependency. If GitHub is slow, rate-limits the
 * request, or the repository is private, the extra details simply do not
 * appear — the project card still shows everything else.
 */

function parseRepoUrl(url) {
  try {
    const parsed = new URL(url)
    if (!parsed.hostname.endsWith('github.com')) return null

    const [owner, name] = parsed.pathname.split('/').filter(Boolean)
    if (!owner || !name) return null

    return { owner, name: name.replace(/\.git$/, '') }
  } catch {
    return null
  }
}

export function useGithubRepos(projects) {
  const [meta, setMeta] = useState({})

  // A stable key so we only refetch when the actual repo links change
  const repoKey = projects.map((project) => project.repo ?? '').join('|')

  useEffect(() => {
    const controller = new AbortController()

    const targets = projects
      .map((project) => ({ id: project.id, parsed: parseRepoUrl(project.repo ?? '') }))
      .filter((entry) => entry.parsed !== null)

    if (targets.length === 0) return

    let cancelled = false

    Promise.all(
      targets.map(async ({ id, parsed }) => {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${parsed.owner}/${parsed.name}`,
            {
              signal: controller.signal,
              headers: { Accept: 'application/vnd.github+json' },
            },
          )
          if (!response.ok) return null

          const data = await response.json()
          return {
            id,
            language: data.language ?? null,
            stars: data.stargazers_count ?? 0,
            updated: data.pushed_at ?? null,
          }
        } catch {
          return null
        }
      }),
    ).then((results) => {
      if (cancelled) return

      const next = {}
      for (const result of results) {
        if (result) next[result.id] = result
      }
      setMeta(next)
    })

    return () => {
      cancelled = true
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repoKey])

  return meta
}

export function formatUpdated(iso) {
  if (!iso) return null

  const then = new Date(iso)
  if (Number.isNaN(then.getTime())) return null

  const days = Math.floor((Date.now() - then.getTime()) / 86_400_000)

  if (days <= 0) return 'updated today'
  if (days === 1) return 'updated yesterday'
  if (days < 30) return `updated ${days} days ago`

  const months = Math.floor(days / 30)
  if (months < 12) return `updated ${months} month${months > 1 ? 's' : ''} ago`

  const years = Math.floor(months / 12)
  return `updated ${years} year${years > 1 ? 's' : ''} ago`
}
