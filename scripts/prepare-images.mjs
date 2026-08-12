/* ============================================================================
   IMAGE PIPELINE   —   run with:  npm run images
   ----------------------------------------------------------------------------
   Does two jobs:

   1. BACKGROUNDS
      Downloads the 4K architectural photographs (once, into assets/source/)
      and renders each one at five widths, up to 3840px — true 4K.
      A visitor's browser picks the ONE size that fits their screen, so a
      phone downloads roughly 40 KB where a 4K monitor gets the full image.

   2. YOUR PHOTO
      Put your portrait in:  public/images/profile/source/
      Any file name, .jpg or .png. This script cleans it up, sharpens it,
      renders it at high resolution and writes public/images/profile/zahid.jpg

      A note on honesty: enlarging a photo cannot invent detail that was never
      captured. What this does is resample with a high-quality filter, apply a
      measured sharpen, and encode without extra compression damage — so the
      photo looks as crisp as its original pixels allow.
   ========================================================================== */

import { mkdir, readdir, writeFile, access, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = path.join(root, 'assets', 'source')
const outDir = path.join(root, 'public', 'images')
const profileSourceDir = path.join(outDir, 'profile', 'source')
const profileOutDir = path.join(outDir, 'profile')

/* --- The background photographs ------------------------------------------
   Architectural photography from Unsplash, which allows free commercial use
   with no attribution required. Photographer credits are listed in the README.
   ------------------------------------------------------------------------ */
const BACKDROPS = [
  { name: 'hero-towers', id: 'photo-1486406146926-c627a92ad1ab' },
  { name: 'facade',      id: 'photo-1493397212122-2b85dda8106b' },
  { name: 'skyline',     id: 'photo-1582407947304-fd86f028f716' },
  { name: 'glass-tower', id: 'photo-1554469384-e58fac16e23a' },
]

const WIDTHS = [640, 1280, 1920, 2560, 3840]
const JPEG_FALLBACK_WIDTH = 1600

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true })
}

async function exists(file) {
  try {
    await access(file)
    return true
  } catch {
    return false
  }
}

/* --- Step 1: fetch the 4K masters ---------------------------------------- */

async function downloadMasters() {
  await ensureDir(sourceDir)

  for (const { name, id } of BACKDROPS) {
    const target = path.join(sourceDir, `${name}.jpg`)

    if (await exists(target)) {
      console.log(`  ✓ ${name}.jpg already downloaded`)
      continue
    }

    const url = `https://images.unsplash.com/${id}?w=3840&q=85&fm=jpg&fit=max`
    process.stdout.write(`  ↓ downloading ${name}.jpg ... `)

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`could not download ${name}: HTTP ${response.status}`)
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    await writeFile(target, buffer)
    console.log(`${(buffer.length / 1024 / 1024).toFixed(1)} MB`)
  }
}

/* --- Step 2: render the responsive sizes --------------------------------- */

async function renderBackdrops() {
  await ensureDir(outDir)

  for (const { name } of BACKDROPS) {
    const input = path.join(sourceDir, `${name}.jpg`)
    if (!(await exists(input))) {
      console.warn(`  ! missing master for ${name}, skipping`)
      continue
    }

    const meta = await sharp(input).metadata()

    for (const width of WIDTHS) {
      // Never upscale a background beyond the master's real resolution
      if (meta.width && width > meta.width) continue

      await sharp(input)
        .resize({ width, kernel: 'lanczos3', withoutEnlargement: true })
        .webp({ quality: width >= 2560 ? 72 : 78, effort: 5 })
        .toFile(path.join(outDir, `${name}-${width}.webp`))
    }

    // One JPEG for the small number of browsers without WebP support
    await sharp(input)
      .resize({ width: JPEG_FALLBACK_WIDTH, kernel: 'lanczos3', withoutEnlargement: true })
      .jpeg({ quality: 76, mozjpeg: true, progressive: true })
      .toFile(path.join(outDir, `${name}-fallback.jpg`))

    console.log(`  ✓ ${name} rendered`)
  }
}

/* --- Step 3: the portrait ------------------------------------------------- */

async function renderPortrait() {
  await ensureDir(profileSourceDir)

  if (!existsSync(profileSourceDir)) return

  const files = (await readdir(profileSourceDir)).filter((file) =>
    /\.(jpe?g|png|webp)$/i.test(file),
  )

  if (files.length === 0) {
    console.log('  · no portrait found in public/images/profile/source/ — skipping')
    console.log('    (drop your photo there and run this again)')
    return
  }

  const input = path.join(profileSourceDir, files[0])
  const meta = await sharp(input).metadata()
  console.log(`  · using ${files[0]} (${meta.width}×${meta.height})`)

  // The portrait is copied across EXACTLY as it is — same pixels, same
  // file, byte for byte. No resizing, no sharpening, no re-encoding.
  //
  // (Earlier this resized and sharpened the photo. That is switched off on
  // purpose: the original is wanted untouched. If you ever want the tidy-up
  // back, the sharp pipeline would go here instead of the copy below.)
  await copyFile(input, path.join(profileOutDir, 'portrait.jpg'))

  console.log('  ✓ copied unchanged to public/images/profile/portrait.jpg')
  console.log('    (no resizing, sharpening or re-encoding applied)')
}

/* --- Step 4: the social share card ---------------------------------------
   The picture that appears when the site is shared on LinkedIn, WhatsApp
   or Slack. 1200×630 is the size those platforms expect.
   ------------------------------------------------------------------------ */

async function renderShareCard() {
  const input = path.join(sourceDir, 'hero-towers.jpg')
  if (!(await exists(input))) {
    console.warn('  ! no master image, skipping share card')
    return
  }

  const fonts = 'Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif'

  const overlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="veil" x1="0" y1="0" x2="1" y2="0.35">
          <stop offset="0%"   stop-color="#0a1114" stop-opacity="0.94"/>
          <stop offset="58%"  stop-color="#0a1114" stop-opacity="0.78"/>
          <stop offset="100%" stop-color="#0a1114" stop-opacity="0.48"/>
        </linearGradient>
      </defs>

      <rect width="1200" height="630" fill="url(#veil)"/>

      <rect x="80" y="150" width="54" height="3" fill="#c9ccd2"/>

      <text x="80" y="238" font-family="${fonts}" font-size="66" font-weight="700"
            fill="#ffffff" letter-spacing="-1.5">Mohammed Zahid</text>

      <text x="80" y="300" font-family="${fonts}" font-size="31" font-weight="500"
            fill="#c2c5ca">Web Developer &#183; Data Analyst</text>

      <text x="80" y="382" font-family="${fonts}" font-size="25" font-weight="400"
            fill="#9fb0b6">I build fast, reliable websites — and turn raw</text>
      <text x="80" y="420" font-family="${fonts}" font-size="25" font-weight="400"
            fill="#9fb0b6">data into clear answers.</text>

      <text x="80" y="522" font-family="${fonts}" font-size="21" font-weight="600"
            fill="#adb1b8" letter-spacing="1.6">JAVASCRIPT &#183; REACT &#183; PYTHON &#183; SQL &#183; MONGODB</text>
    </svg>
  `)

  await sharp(input)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(path.join(root, 'public', 'og-image.jpg'))

  console.log('  ✓ og-image.jpg written (1200×630)')
}

/* --- Run ------------------------------------------------------------------ */

console.log('\nBackground photographs')
await downloadMasters()
await renderBackdrops()

console.log('\nShare card')
await renderShareCard()

console.log('\nPortrait')
await renderPortrait()

console.log('\nDone.\n')
