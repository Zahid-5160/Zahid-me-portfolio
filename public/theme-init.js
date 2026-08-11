/* Applies the saved light/dark choice before the page paints, so the site
   never flashes the wrong colours on load.

   The site opens in its light neutral theme by default. Dark is only used
   if the visitor picks it with the toggle in the header.

   Kept in its own file (rather than inline) so the site can run under a
   strict Content-Security-Policy that forbids inline scripts. */
(function () {
  try {
    var saved = localStorage.getItem('zahid-theme')
    var theme = saved === 'dark' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
  } catch (error) {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})()
