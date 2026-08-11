import { profile } from '../data/content.js'

/**
 * Works out where the email buttons should point.
 *
 * A plain `mailto:` link hands the visitor over to whatever mail program
 * their computer has set as default — on Windows that is usually Outlook.
 * Pointing at Gmail's compose page instead keeps everything in the browser.
 *
 * Switch between the two with `emailMode` in src/data/content.js.
 */

const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1'

export function emailHref() {
  const subject = encodeURIComponent(profile.emailSubject ?? '')

  if (profile.emailMode === 'gmail') {
    return `${GMAIL_COMPOSE}&to=${encodeURIComponent(profile.email)}&su=${subject}`
  }

  return `mailto:${profile.email}?subject=${subject}`
}

/* Gmail opens in a new tab; a mail program does not need one. */
export const emailLinkProps =
  profile.emailMode === 'gmail'
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
