import { Link } from 'react-router-dom'

import PageTransition from '../components/PageTransition.jsx'
import { ArrowRight } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <PageTransition
      title="Page not found"
      description="That page does not exist."
    >
      <section className="section" style={{ paddingBlock: 'clamp(5rem, 14vw, 9rem)' }}>
        <div className="container">
          <div className="heading-block heading-block--center">
            <span className="eyebrow">Error 404</span>
            <h1 className="heading-block__title">This page does not exist</h1>
            <p className="heading-block__sub">
              The link may be out of date, or the address may have a typo in it.
            </p>
            <div className="btn-row" style={{ marginTop: 'var(--sp-3)' }}>
              <Link className="btn btn--primary" to="/">
                Back to home
                <ArrowRight className="btn__icon btn__icon--arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
