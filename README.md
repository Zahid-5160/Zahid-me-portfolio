# Mohammed Zahid — My Portfolio Website

Hello, I am **Mohammed Zahid**, a Web Developer and Data Analyst from Karnataka, India.

I build websites from front to back, and I also work with data. On the web side I use
JavaScript, React, HTML and CSS for the part people see, and Python with Flask or Django
for the part they do not. On the data side I use Python with Pandas and NumPy to clean
messy data, and Matplotlib and Seaborn to turn it into charts that answer a question.

I spent 11 months at Arsuma Solutions building and looking after real client websites.
I hold a B.E. in Computer Science (7.6 CGPA, 2025).

- **Email:** [mdzahidzahu@gmail.com](mailto:mdzahidzahu@gmail.com)
- **GitHub:** [github.com/Zahid-5160](https://github.com/Zahid-5160)
- **LinkedIn:** [linkedin.com/in/zahid-mohd](https://www.linkedin.com/in/zahid-mohd/)

> **This README is written for anyone**, technical or not. It explains what the site is,
> what each tool does, the ideas behind the code, and what every single file is for.

---

## 1. What this website is

Four pages, in a black and silver theme:

| Page | What is on it |
|---|---|
| **Home** | Introduction, short bio, key numbers, contact |
| **Skills** | The tools I use, grouped by what they are for |
| **Experience** | Work history, education and awards |
| **Projects** | The things I have built |

**Live address:** https://zahid-2002-portfolio.vercel.app/

### Running it on your own computer

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install     # download the pieces the site needs (once)
npm run dev     # start the site, then open the address it prints
```

| Command | What it does |
|---|---|
| `npm run dev` | Runs the site while you work on it. Changes appear instantly. |
| `npm run build` | Packs everything into a finished `dist/` folder, ready to publish. |
| `npm run preview` | Shows you that finished folder before publishing. |
| `npm run images` | Prepares the photographs (see section 6). |

---

## 2. The technologies, in plain words

| Tool | What it actually does here |
|---|---|
| **React** | Lets the page be built out of small reusable pieces ("components") instead of one giant file. Change the piece once and it updates everywhere it is used. |
| **Vite** | The workshop. While I work it shows changes instantly; when I am done it squashes everything into small, fast files. |
| **React Router** | Gives each page its own web address (`/skills`, `/projects`) even though the browser never actually reloads. That is why moving between pages feels instant. |
| **Framer Motion** | The animation engine. Handles the sliding, fading and springy movements. |
| **Three.js** | Draws the slowly drifting field of dots behind the home page. It is real 3D, rendered by the graphics card. |
| **Plain CSS** | All the styling is hand-written. No Bootstrap or Tailwind — that keeps the site small and the look entirely my own. |
| **Sharp** | Runs only on my machine, never on the website. It resizes and sharpens the photographs. |
| **Vercel** | The host. Every time I upload a change to GitHub, Vercel rebuilds the site and puts the new version live. |

---

## 3. The ideas behind the code

Short explanations of the concepts a developer would look for.

**Components.** The site is assembled from small building blocks — a button, a card, the
menu. Each is written once and reused. The four pages are mostly arrangements of blocks.

**Single-page application.** Normally clicking a link makes the browser throw the whole
page away and fetch a new one. Here the site swaps out just the middle part. Nothing
flashes, and the animation between pages is possible because the old page is still there
while the new one arrives.

**State.** Things the site has to remember while you are on it — which menu tab is open,
which project filter you picked, whether you chose dark mode. When a remembered thing
changes, the affected part of the screen redraws itself.

**Props.** How one block passes information to another. The Projects page hands each
card its title and description; the card does not know or care where they came from.

**Design tokens.** Every colour, text size and spacing value is written down once in a
single file (`tokens.css`) and referred to by name everywhere else. Changing the accent
colour is a one-line edit, not a hunt through thousands of lines.

**Responsive images.** Each background photo exists in five sizes up to 4K. The browser
is shown the list and picks the one that fits the screen. A phone downloads about 40 KB
where a 4K monitor gets the full picture.

**Code splitting.** The 3D library is large. Rather than making everyone wait for it, the
text and photo appear first and the 3D layer arrives a moment later. The Skills,
Experience and Projects pages are also only downloaded when someone actually opens them.

**Graceful fallbacks.** Every part that could fail has a plan B. No photo yet? Show a
neat initials badge. GitHub not responding? Hide the extra repo details. No 3D support?
Show the photograph on its own. The visitor never sees something broken.

**Accessibility.** The whole site can be used with the Tab key, every focused item shows
a clear outline, there is a "Skip to content" link, and images carry text descriptions
for screen readers. If someone's device asks for reduced motion, every decorative
animation switches off.

**Smooth animation.** Animations only ever change two things: position and transparency.
Those two are handled by the graphics card rather than the main processor, which is why
the movement stays smooth instead of stuttering.

---

## 4. What every file does

### Root folder

| File | What it is for |
|---|---|
| `index.html` | The empty shell the browser loads first. Holds the page title and the preview details used when the link is shared. |
| `package.json` | The project's ID card: its name, the `npm run` commands, and the list of outside code it needs. |
| `package-lock.json` | Records the exact versions installed, so the site builds identically on any machine. Never edited by hand. |
| `vite.config.js` | Build settings. Splits the big 3D library into its own file and sets the address prefix the site is served from. |
| `vercel.json` | **The host's settings.** Security rules, caching, and the routing that lets `/skills` work as a real address. |
| `netlify.toml` | The same again, for Netlify, in case the site ever moves there. Harmless to keep. |
| `.gitignore` | The list of things Git should ignore — installed packages, build output, the 7 MB master photos. |
| `README.md` | This file. |

### `.github/workflows/`

| File | What it is for |
|---|---|
| `deploy.yml` | An optional GitHub Actions workflow that publishes to GitHub Pages. The live site runs on Vercel instead, so this is a spare route — delete it if you never want a second copy. |

### `scripts/`

| File | What it is for |
|---|---|
| `prepare-images.mjs` | Run by `npm run images`. Downloads the 4K building photos, makes five sizes of each, builds the social share card, and prepares your portrait. |

### `public/` — files copied to the website exactly as they are

| File | What it is for |
|---|---|
| `favicon.svg` | The small round icon in the browser tab. |
| `theme-init.js` | Runs before the page is drawn to apply light or dark mode, so there is no flash of the wrong colours. |
| `robots.txt` | Tells search engines they may list the site, and where the sitemap is. |
| `sitemap.xml` | The list of the four pages, for search engines. |
| `site.webmanifest` | Details used if someone saves the site to a phone home screen. |
| `_redirects` | Netlify's version of "send every address to index.html". |
| `og-image.jpg` | The picture that appears when the link is shared on LinkedIn or WhatsApp. |
| `resume_zahid.pdf` | Your CV. The **CV** button downloads this. |
| `images/*.webp`, `images/*-fallback.jpg` | The four building photographs, each in five sizes. |
| `images/profile/portrait.jpg` | Your prepared portrait, used in the hero. |
| `images/profile/source/` | Your original photo. The script reads from here; this file never goes on the website. |
| `images/profile/README.txt` | Instructions for replacing your photo. |

### `src/` — the application itself

| File | What it is for |
|---|---|
| `main.jsx` | The starting point. Attaches the site to the page and switches on page-to-page navigation. |
| `App.jsx` | The map of the site: which address shows which page, plus the two progress bars. |

### `src/data/`

| File | What it is for |
|---|---|
| `content.js` | **Every word on the website.** Your name, bio, skills, jobs, projects, contact details. This is the only file you need to edit to update the site. |

### `src/lib/` — small helpers

| File | What it is for |
|---|---|
| `asset.js` | Builds correct web addresses for files in `public/`, so images still work when the site is served from a sub-folder. |
| `email.js` | Decides whether the email buttons open Gmail in a tab or the visitor's own mail program. |

### `src/hooks/` — reusable behaviour

| File | What it is for |
|---|---|
| `useTheme.js` | Handles light and dark mode, and remembers the visitor's choice on their own device. |
| `useGithubRepos.js` | Fetches a project's language, star count and last-updated date live from GitHub. If GitHub is slow, the details are quietly skipped. |

### `src/components/` — the reusable building blocks

**Structure**

| File | What it is for |
|---|---|
| `Layout.jsx` | The frame every page sits inside: header on top, content in the middle, footer at the bottom. |
| `Navbar.jsx` | The black bar across the top — logo, menu, theme button, "Get in touch". |
| `Footer.jsx` | The bottom section with links and contact details. |
| `PageHero.jsx` | The photo banner at the top of Skills, Experience and Projects. |

**Content pieces**

| File | What it is for |
|---|---|
| `Backdrop.jsx` | A full-width background photo that automatically picks the right size for the screen. |
| `Portrait.jsx` | Your photo. Retries once by itself if it fails to load, and shows an initials badge only if that also fails. |
| `Icons.jsx` | Every small line icon on the site, drawn in code rather than downloaded. |
| `ThemeToggle.jsx` | The round sun/moon button that switches light and dark. |
| `SceneBackground.jsx` | The moving 3D dots behind the home page. Stops itself when the tab is hidden or scrolled past. |

**Movement**

| File | What it is for |
|---|---|
| `PageTransition.jsx` | The animation when you move between pages, plus setting the browser tab title. |
| `RouteProgress.jsx` | The thin line that sweeps across the top when a new page opens. |
| `ScrollProgress.jsx` | The silver line that fills up as you scroll down. |
| `ScrollToTop.jsx` | Makes a new page start at the top instead of half-scrolled. |
| `Reveal.jsx` | Fades things gently upward as they scroll into view. |
| `SplitText.jsx` | Reveals a heading one letter at a time. |
| `CountUp.jsx` | Counts the numbers on the home page up from zero. |
| `Magnetic.jsx` | Makes a button lean towards the mouse pointer, then spring back. |
| `Tilt.jsx` | Tips a card slightly in 3D and moves a highlight under the cursor. |

### `src/pages/` — the four pages

| File | What it is for |
|---|---|
| `Home.jsx` | Hero, key numbers, about section, closing contact band. |
| `Skills.jsx` | Three strengths, then the full toolkit grouped into cards. |
| `Experience.jsx` | Work timeline, education, and the award. |
| `Projects.jsx` | Filterable project cards with live GitHub details. |
| `NotFound.jsx` | The friendly page shown if someone types a wrong address. |

### `src/styles/` — the look

| File | What it is for |
|---|---|
| `index.css` | Loads the fonts and the five stylesheets below, in order. |
| `tokens.css` | **Every colour, text size and spacing value, defined once.** Change the look from here. |
| `base.css` | Resets browser defaults and sets the basic typography. |
| `components.css` | Styling for the menu, buttons, cards, tags and footer. |
| `pages.css` | Layouts specific to individual pages. |
| `motion.css` | **Every animation on the site**, including the switch that turns them all off for reduced motion. |

---

## 5. Changing the words

Everything you can read on the site lives in **`src/data/content.js`**. Change the text
between the quote marks, save, and the site updates itself. No React knowledge needed.

Three rules so nothing breaks:

1. Keep the quote marks around the text.
2. Keep the comma at the end of each line.
3. If your text has an apostrophe, use double quotes around it: `"I'm"`.

---

## 6. Changing your photo

1. Put your photo in `public/images/profile/source/`
2. Run `npm run images`

That creates `public/images/profile/portrait.jpg`, which the site picks up automatically.

> If there is more than one file in that folder, the script uses the first one
> alphabetically. Keep just the photo you want.

**Worth knowing:** enlarging a photo cannot add detail the camera never captured. The
script resizes with a high-quality filter, sharpens carefully, and never stretches a
photo beyond its real pixels. Start with your largest original — not a screenshot or a
WhatsApp copy.

---

## 7. Changing your CV

Already set up. `public/resume_zahid.pdf` is on the site and the **CV** button downloads
it. To use a newer copy, replace that file keeping the same name. To use a different
name, put the PDF in `public/` and update this line in `content.js`:

```js
resume: 'resume_zahid.pdf',
```

Set it to `null` to hide the button.

---

## 8. Adding projects from GitHub

**Your code stays on GitHub. This site only links to it** — you never upload code here.

In `content.js`, find the `projects` list and fill in the two link fields:

```js
{
  id: 'churn',
  title: 'Telecom Customer Churn Prediction',
  category: 'Data',
  blurb: 'Found out which telecom customers were about to leave, and why.',
  bullets: [ 'What you did...', 'What you found...' ],
  tech: ['Python', 'Pandas'],

  repo: 'https://github.com/Zahid-5160/your-repo-name',   // ← the GitHub link
  demo: 'https://your-live-site.com',                     // ← the live link
},
```

- **`repo`** — adds a **View code** button, and the card then shows that repository's
  language, stars and last-updated date, read live from GitHub.
- **`demo`** — adds a **Visit site** button.
- Use `null` for either if it does not apply.

To add a new project, copy one whole block from `{` to `},` and give it an `id` no other
project uses.

---

## 9. Publishing

The site publishes itself. Push to GitHub and Vercel does the rest.

```bash
git add .
git commit -m "describe what you changed"
git push
```

Wait about a minute, then refresh the live address.

**One-time setup**, in the browser: sign in to [vercel.com](https://vercel.com) with your
GitHub account, choose **Add New → Project**, and pick the `Zahid-me-portfolio`
repository. Vercel detects Vite on its own — the framework preset is **Vite**, the build
command `npm run build`, and the output folder `dist`. Every push to `master` from then
on redeploys automatically, and you can watch progress on the project's **Deployments**
tab.

If the live address ever changes — a new project name, or your own domain — update it in
`content.js`, `index.html`, `public/robots.txt` and `public/sitemap.xml` so Google and
LinkedIn point to the right place.

---

## 10. Address, HTTPS and privacy

**Naming.** Underscores are not allowed in a web address, so a repository called
`zahid_portfolio` could not become one. Use hyphens — as `Zahid-me-portfolio` does.

**HTTPS.** Vercel turns on the padlock automatically and renews it for you. Nothing to
set up, nothing to pay.

**Your IP address.** A site like this never reveals it. The files sit on Vercel's servers
around the world and visitors only ever connect to those. Your home connection is not
involved once the site is published.

**Your visitors' privacy.** The fonts are bundled inside the site rather than loaded from
Google's servers, so no outside company sees who visits. There are no trackers, no
analytics and no cookies.

**A custom domain later.** If you buy something like `zahidmohd.com`, turn on *WHOIS
privacy* at the registrar so your name, address and phone number stay off the public
record. Most registrars include it free.

---

## 11. Picture credits

Architectural photographs from [Unsplash](https://unsplash.com), free to use, no
attribution required — credited anyway:

- Towers (Home) — [Sean Pollock](https://unsplash.com/photos/PhYq704ffdA)
- Curved facade (Skills) — [Joel Filipe](https://unsplash.com/photos/RFDP7_80v5A)
- Skyline (Experience) — [Nastuh Abootalebi](https://unsplash.com/photos/yWwob8kwOCk)
- Glass building (Projects) — [Sean Pollock](https://unsplash.com/photos/9pClIRXX-vE)

---

© Mohammed Zahid
