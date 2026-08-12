import { useState } from 'react'

import { photo, profile } from '../data/content.js'
import { asset } from '../lib/asset.js'

/**
 * The hero portrait.
 *
 * Two deliberate choices here, both about reliability rather than looks:
 *
 * 1. A plain <img>, not a <picture> with a WebP alternative. If the WebP
 *    failed for any reason there was no second chance — the browser would
 *    not fall back to the JPEG, and the visitor got the initials badge
 *    instead of a face. The few kilobytes saved were not worth that.
 *
 * 2. One automatic retry with a changed address. A browser that once got a
 *    "not found" for this file can remember that answer and keep showing
 *    the badge even after the file exists. Asking again with a slightly
 *    different address skips anything remembered.
 *
 * Only if both attempts fail does the initials badge appear.
 */
export default function Portrait() {
  const [retryToken, setRetryToken] = useState(null)
  const [failed, setFailed] = useState(false)

  const base = asset(photo.src)
  const src = retryToken ? `${base}?r=${retryToken}` : base

  const handleError = () => {
    if (retryToken === null) setRetryToken(Date.now())
    else setFailed(true)
  }

  return (
    <div className="portrait">
      <span className="portrait__ring" aria-hidden />

      <div className="portrait__media">
        {!failed ? (
          <img
            className="portrait__img"
            src={src}
            alt={photo.alt}
            width="610"
            height="1295"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={handleError}
          />
        ) : (
          <div className="portrait__fallback">
            <span className="portrait__initials" aria-hidden>{profile.initials}</span>
            <span className="portrait__hint">
              Add your photo to <br />
              public/images/profile/source/ <br />
              then run <strong>npm run images</strong>
            </span>
          </div>
        )}

        <span className="portrait__sheen" aria-hidden />
      </div>

      <span className="portrait__chip">
        <span className="hero__status-dot" aria-hidden />
        {profile.availability}
      </span>
    </div>
  )
}
