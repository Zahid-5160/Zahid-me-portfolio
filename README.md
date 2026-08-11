# Mohammed Zahid — Portfolio Website

Hello, I am **Mohammed Zahid**, a Web Developer and Data Analyst from Karnataka, India.

I build websites from front to back, and I also work with data. On the web side I use
JavaScript, React, HTML and CSS for the part people see, and Python with Flask or Django
for the part they do not. On the data side I use Python with Pandas and NumPy to clean
messy data, and Matplotlib and Seaborn to turn it into charts that answer a question.

I spent 11 months at Arsuma Solutions building and looking after real client websites.
I hold a B.E. in Computer Science (7.6 CGPA, 2025).

This repository holds my personal portfolio website.

- **Email:** [mdzahidzahu@gmail.com](mailto:mdzahidzahu@gmail.com)
- **GitHub:** [github.com/Zahid-5160](https://github.com/Zahid-5160)
- **LinkedIn:** [linkedin.com/in/zahid-mohd](https://www.linkedin.com/in/zahid-mohd/)

---

## What this website is

A small, fast website with four pages:

| Page | What is on it |
|---|---|
| **Home** | Introduction, a short bio, and how to contact me |
| **Skills** | The tools I use, grouped by what they are for |
| **Experience** | My work history, education and awards |
| **Projects** | The things I have built |

It is a **single-page application**, which means when you click a menu item the new page
fades in straight away instead of reloading the whole browser window. There is also a
moving 3D layer behind the picture on the home page.

### Built with

- **React** + **Vite** — the framework and the build tool
- **React Router** — moves between the four pages
- **Framer Motion** — the fade and slide animations
- **Three.js** — the moving 3D dots behind the home page picture
- Plain, hand-written **CSS** — no CSS framework

---

## Running it on your computer

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install     # download the pieces the site needs (only needed once)
npm run dev     # start the site
```

Then open the address it prints, usually <http://localhost:5173>.

Other commands:

```bash
npm run build     # make the finished files, ready to publish (goes into dist/)
npm run preview   # look at those finished files before publishing
npm run images    # prepare the photographs (see below)
```

---

## Changing the words on the site

**Everything you can read on the website lives in one file:**

```
src/data/content.js
```

Open it, change the text between the quote marks, and save. The site updates itself.
You do not need to know React to do this.

Three rules so nothing breaks:

1. Keep the quote marks around the text.
2. Keep the comma at the end of each line.
3. If your text has an apostrophe, use double quotes around it: `"I'm"`.

---

## Adding your photo

1. Put your photo in this folder (create the `source` folder if it is not there):

   ```
   public/images/profile/source/
   ```

2. Run:

   ```bash
   npm run images
   ```

Until you do this, the site shows a clean **MZ** badge instead. Nothing looks broken.

Full instructions are in `public/images/profile/README.txt`.

> Worth knowing: making a photo bigger cannot add detail the camera never captured.
> The script resamples cleanly and sharpens carefully, so the photo looks as crisp as
> its original pixels allow. Start with the largest original you have — not a
> screenshot or a WhatsApp copy.

---

## Your CV

This is already set up. `public/resume_zahid.pdf` is on the site, and the **CV**
button on the home page downloads it.

To swap in a newer copy, replace that file keeping the same name. To use a
different name, put the PDF in `public/` and update this line in
`src/data/content.js`:

```js
resume: 'resume_zahid.pdf',
```

Set it to `null` to hide the button.

---

## Adding projects from GitHub

**You do not upload your code to this website.** Your code stays on GitHub. This site
just links to it.

Open `src/data/content.js`, find the `projects` list, and paste your links:

```js
{
  id: 'churn',
  title: 'Telecom Customer Churn Prediction',
  category: 'Data',
  blurb: 'Found out which telecom customers were about to leave, and why.',
  bullets: [ 'What you did...', 'What you found...' ],
  tech: ['Python', 'Pandas'],

  repo: 'https://github.com/Zahid-5160/your-repo-name',   // ← paste the GitHub link
  demo: 'https://your-live-site.com',                     // ← paste the live link
},
```

- **`repo`** — the GitHub address of the project. A **View code** button appears.
  The site then also reads that repository live and shows its main language, star
  count and when you last worked on it. If the repository is private or GitHub is
  slow, those extra details are simply left out and nothing looks broken.
- **`demo`** — the address of the live website, if it is online. A **Visit site**
  button appears.
- Use `null` for either one if it does not apply.

To add a **brand new project**, copy one whole block from `{` to `},` and change the
details. Give it an `id` no other project uses.

**If your project is not on GitHub yet:**

```bash
cd your-project-folder
git init
git add .
git commit -m "First commit"
```

Then make an empty repository on [github.com/new](https://github.com/new) and run the
two commands GitHub shows you. Copy the finished address into `repo`.

---

## Putting the site online

The site publishes itself from GitHub. There is no second service to sign up for.

**The live address is:**

```
https://zahid-5160.github.io/zahid-2002-portfolio/
```

### How it works

`.github/workflows/deploy.yml` tells GitHub to build the site and publish it every
time you push. So the whole routine is:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Wait about two minutes, then refresh the live address. That is it.

### One-time setup

This only has to be done once, in the browser:

1. Open the repository on GitHub
2. **Settings → Pages**
3. Under **Source**, choose **GitHub Actions**

You can watch the build happen on the **Actions** tab. A green tick means it is live.

### If you rename the repository

The address changes to match, and the build adjusts to it automatically — nothing to
edit. But do update these so Google and LinkedIn point at the right place: `siteUrl`
in `src/data/content.js`, and the addresses in `index.html`, `public/robots.txt` and
`public/sitemap.xml`.

Renaming the repository to **`Zahid-5160.github.io`** would serve the site from
`https://zahid-5160.github.io/` with no `/portfolio` on the end — a tidier link for a
CV or LinkedIn profile.

### Other hosts

`vercel.json` and `netlify.toml` are included, so the site also works on
[Vercel](https://vercel.com) or [Netlify](https://netlify.com) if you ever want to
move. Sign in with GitHub, pick the repository, and the settings fill themselves in.

---

## About the address, HTTPS and privacy

**A note on naming.** `zahid_portfolio` cannot be used as a web address, because
underscores (`_`) are not allowed in website names. Use a hyphen instead:

- ✅ `zahid-portfolio`
- ✅ `zahidportfolio`
- ❌ `zahid_portfolio`

**HTTPS.** GitHub Pages turns on HTTPS automatically and renews the certificate for
you. There is nothing to set up and nothing to pay.

**Your IP address.** A website like this one never reveals your personal IP address.
The files are copied onto the host's servers around the world, and visitors only ever
connect to those. Your home internet connection is not involved at all once the site
is published.

**Your visitors' privacy.** The fonts are bundled inside the site instead of being
loaded from Google's servers, so no outside company gets to see who visits your page.
The site also sets strict security headers (see `vercel.json`) and has no trackers,
no analytics and no cookies.

**If you later buy your own domain** (like `zahidmohd.com`), turn on *WHOIS privacy*
at the registrar so your name, address and phone number stay off the public record.
Most registrars include it free.

---

## Folder guide

```
├── index.html              the page shell, and the Google/LinkedIn preview settings
├── vercel.json             Vercel settings, including the security headers
├── netlify.toml            the same, for Netlify
├── scripts/
│   └── prepare-images.mjs  prepares the photographs
├── public/                 files copied to the site exactly as they are
│   ├── images/             the background photographs, ready in five sizes
│   └── og-image.jpg        the picture shown when the link is shared
└── src/
    ├── data/content.js     ← ALL THE WORDS ON THE SITE ARE HERE
    ├── pages/              the four pages
    ├── components/         reusable parts (menu, footer, cards, 3D layer)
    └── styles/             the colours, sizes and layout
```

---

## Notes on how it was built

- **Photographs load at the right size.** Each background is prepared at five widths up
  to 3840px (4K). A phone downloads about 40 KB; a 4K monitor gets the full picture.
- **The 3D layer is polite.** It stops when the tab is hidden or scrolled past, keeps
  off the main thread's way, and does not run at all for visitors whose device asks for
  reduced motion. It is also downloaded separately, so it never delays the text.
- **It works without a mouse.** Every link and button can be reached with the Tab key
  and shows a clear outline, and there is a "Skip to content" link.
- **Light and dark.** The site opens in its light theme. The sun/moon button switches to
  dark, and it remembers the choice on that person's own device.

---

## Picture credits

Architectural photographs from [Unsplash](https://unsplash.com), used under the
Unsplash License (free to use, no attribution required — credited here anyway):

- Towers on the home page — [Sean Pollock](https://unsplash.com/photos/PhYq704ffdA)
- Curved facade on the Skills page — [Joel Filipe](https://unsplash.com/photos/RFDP7_80v5A)
- Skyline on the Experience page — [Nastuh Abootalebi](https://unsplash.com/photos/yWwob8kwOCk)
- Glass building on the Projects page — [Sean Pollock](https://unsplash.com/photos/9pClIRXX-vE)

---

© Mohammed Zahid
