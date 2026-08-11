import { asset } from '../lib/asset.js'

const WIDTHS = [640, 1280, 1920, 2560, 3840]

/**
 * A full-bleed background photograph.
 *
 * The browser is offered the image at five widths (up to 3840px — 4K) and
 * downloads only the one that suits the visitor's screen. A phone pulls a
 * small file; a 4K monitor gets the full-resolution version.
 *
 * @param name     file stem, e.g. 'hero-towers'
 * @param priority true for the image at the top of the page, so it loads first
 */
export default function Backdrop({ name, className, alt = '', priority = false }) {
  const webpSrcSet = WIDTHS
    .map((w) => `${asset(`/images/${name}-${w}.webp`)} ${w}w`)
    .join(', ')

  return (
    <picture className="backdrop">
      <source type="image/webp" srcSet={webpSrcSet} sizes="100vw" />
      <img
        className={className}
        src={asset(`/images/${name}-fallback.jpg`)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  )
}
