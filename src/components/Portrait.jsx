import { useState } from 'react'

import { photo, profile } from '../data/content.js'
import { asset } from '../lib/asset.js'

/**
 * The hero portrait.
 *
 * If the photo file has not been added yet, this quietly shows a clean
 * initials badge instead of a broken image — the site never looks unfinished.
 */
export default function Portrait() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="portrait">
      <div className="portrait__media">
        {!imageFailed ? (
          <picture>
            <source type="image/webp" srcSet={asset('/images/profile/zahid.webp')} />
            <img
              className="portrait__img"
              src={asset(photo.src)}
              alt={photo.alt}
              width="1400"
              height="1750"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={() => setImageFailed(true)}
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
      </div>

      <span className="portrait__chip">
        <span className="hero__status-dot" aria-hidden />
        {profile.availability}
      </span>
    </div>
  )
}
