import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Layout from './components/Layout.jsx'
import RouteProgress from './components/RouteProgress.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'

/* The three secondary pages are downloaded only when the visitor opens them.
   This keeps the first load small and fast. */
const Skills = lazy(() => import('./pages/Skills.jsx'))
const Experience = lazy(() => import('./pages/Experience.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  const location = useLocation()

  return (
    <>
      <RouteProgress />
      <ScrollToTop />

      <Layout>
        {/* `mode="wait"` lets the old page finish leaving before the new one
            arrives, so the two never overlap on screen. */}
        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={<div style={{ minHeight: '60svh' }} />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Layout>
    </>
  )
}
