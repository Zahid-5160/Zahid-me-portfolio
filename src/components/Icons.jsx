/* ============================================================================
   Hand-written SVG icons.
   Written inline rather than pulled from an icon library so the site ships
   only the handful of icons it actually uses.
   ========================================================================== */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function ArrowRight({ size = 16, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ExternalLink({ size = 15, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export function Github({ size = 16, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...rest}
    >
      <path d="M12 1.7a10.3 10.3 0 0 0-3.26 20.07c.52.1.71-.22.71-.5v-1.75c-2.87.62-3.48-1.38-3.48-1.38-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.08 1.59 1.07 1.59 1.07.92 1.59 2.42 1.13 3.01.86.09-.67.36-1.13.66-1.39-2.29-.26-4.7-1.15-4.7-5.11 0-1.13.4-2.05 1.06-2.77-.11-.26-.46-1.31.1-2.73 0 0 .87-.28 2.85 1.06a9.8 9.8 0 0 1 5.19 0c1.97-1.34 2.84-1.06 2.84-1.06.57 1.42.21 2.47.11 2.73.66.72 1.06 1.64 1.06 2.77 0 3.97-2.42 4.85-4.72 5.1.37.32.7.95.7 1.92v2.85c0 .28.19.61.72.5A10.3 10.3 0 0 0 12 1.7Z" />
    </svg>
  )
}

export function Linkedin({ size = 16, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...rest}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.65h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.65c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21h-3.9V9Z" />
    </svg>
  )
}

export function Mail({ size = 16, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 8.4 6a1 1 0 0 0 1.2 0l8.4-6" />
    </svg>
  )
}

export function Phone({ size = 16, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  )
}

export function Download({ size = 16, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M12 3v12M7.5 10.5 12 15l4.5-4.5" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}

export function MapPin({ size = 16, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function Menu({ size = 18, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  )
}

export function Close({ size = 18, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function Sun({ size = 17, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  )
}

export function Moon({ size = 17, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />
    </svg>
  )
}

export function Trophy({ size = 20, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5.5H5.5A2.5 2.5 0 0 0 5.7 10 4 4 0 0 0 8.6 12M16 5.5h2.5a2.5 2.5 0 0 1-.2 4.5A4 4 0 0 1 15.4 12" />
      <path d="M12 13v4M9 20h6M10 17h4l.5 3h-5l.5-3Z" />
    </svg>
  )
}

export function Star({ size = 13, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...rest}
    >
      <path d="m12 3.6 2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 17l-5.25 2.75 1-5.85L3.5 9.75l5.9-.85L12 3.6Z" />
    </svg>
  )
}

export function Info({ size = 18, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  )
}

export function Clock({ size = 14, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  )
}
