import { useState } from 'react'

import { photo, profile } from '../data/content.js'
import { asset } from '../lib/asset.js'

/**
 * The hero portrait — a cut-out figure standing against the building
 * photograph behind it, rather than a photo in a frame.
 *
 * Two deliberate choices here, both about reliability rather than looks:
 *
 * 1. The PNG is the <img>, and WebP is offered above it as a <source>. A
 *    browser that cannot read WebP falls back to the PNG on its own, and
 *    the PNG carries the same transparency. (An earlier version used a
 *    bare <img> because a lone WebP had no fallback at all — inside a
 *    <picture> it does.)
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

  const bust = (path) => {
    const base = asset(path)
    return retryToken ? `${base}?r=${retryToken}` : base
  }

  const handleError = () => {
    if (retryToken === null) setRetryToken(Date.now())
    else setFailed(true)
  }

  return (
    <div className="portrait">
      {!failed ? (
        <picture className="portrait__media">
          <source
            type="image/webp"
            srcSet={photo.widths.map((w) => `${bust(photo.webp(w))} ${w}w`).join(', ')}
            sizes="(max-width: 980px) 300px, 380px"
          />
          <img
            className="portrait__img"
            src={bust(photo.src)}
            alt={photo.alt}
            width="610"
            height="1126"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={handleError}
          />
        </picture>
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

      <span className="portrait__chip">
        <span className="hero__status-dot" aria-hidden />
        {profile.availability}
      </span>
    </div>
  )
}
