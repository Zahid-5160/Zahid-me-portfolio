/**
 * Builds the correct address for a file in the `public/` folder.
 *
 * Most hosts (Vercel, Netlify) serve the site from the top level, where
 * '/images/x.webp' is already right. GitHub Pages project sites serve from
 * a sub-folder instead, so the same file lives at
 * '/zahid-portfolio/images/x.webp'.
 *
 * Vite rewrites paths written in HTML and CSS automatically, but not paths
 * written as text inside JavaScript — which is what these are. So they go
 * through here.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function asset(path) {
  return BASE + (path.startsWith('/') ? path : `/${path}`)
}
