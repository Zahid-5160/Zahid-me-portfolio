/* ============================================================================
   ALL THE WORDS ON YOUR WEBSITE LIVE IN THIS ONE FILE.
   ----------------------------------------------------------------------------
   You do NOT need to understand React to update your site. Just change the
   text between the quote marks '...' below, save the file, and the website
   updates itself.

   Rules to keep it working:
     1. Keep the quote marks around text.
     2. Keep the commas at the end of each line.
     3. If your text contains an apostrophe (like "I'm"), write it as "I\'m"
        or use double quotes: "I'm".
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. WHO YOU ARE  —  shown in the header, hero and footer
   ------------------------------------------------------------------------ */
export const profile = {
  name: 'Mohammed Zahid',
  initials: 'MZ',
  role: 'Web Developer & Data Analyst',
  // Short line under your name in the hero
  tagline: 'I build fast, reliable websites — and turn raw data into clear answers.',
  location: 'Karnataka, India',
  availability: 'Open to full-time roles',

  email: 'mdzahidzahu@gmail.com',
  phone: '+91 93534 42297',
  // Used for the phone link. Digits and a leading + only.
  phoneHref: '+919353442297',

  github: 'https://github.com/Zahid-5160',
  linkedin: 'https://www.linkedin.com/in/zahid-mohd/',

  // WHAT THE EMAIL BUTTONS DO
  //
  //   'gmail'  → opens Gmail's compose window in a new browser tab,
  //              already addressed to you. (current setting)
  //
  //   'mailto' → opens whatever mail program the visitor has installed.
  //              On most Windows PCs that is Outlook.
  //
  // Note: with 'gmail', a visitor who is not signed in to a Google account
  // is asked to sign in first. Your email address is always shown as plain
  // text in the footer, so anyone can copy it instead.
  emailMode: 'gmail',

  // The subject line filled in for them
  emailSubject: 'Hello Zahid — from your portfolio',

  // YOUR CV / RESUME  (currently switched off)
  //
  // To turn on the "CV" download button:
  //   1. Copy your PDF into the `public/` folder
  //   2. Change the line below to match the file name, for example:
  //        resume: '/Mohammed-Zahid-CV.pdf',
  //
  // It is set to null for now so the button stays hidden rather than
  // linking to a file that does not exist yet.
  resume: "resume_zahid.pdf",
}

/* ---------------------------------------------------------------------------
   2. YOUR PHOTO
   ------------------------------------------------------------------------
   Save your photo as:  public/images/profile/zahid.jpg
   (Instructions are in public/images/profile/README.txt)

   If the file is missing, the site shows a clean initials badge instead —
   nothing breaks.
   ------------------------------------------------------------------------ */
export const photo = {
  /* The cut-out portrait, so the figure stands against the hero photograph
     rather than sitting in a framed window. The PNG is the fallback; the
     WebP versions carry the same transparency at a fraction of the size. */
  src: '/images/profile/portrait-cutout.png',
  widths: [380, 610, 900, 1220],
  webp: (w) => `/images/profile/portrait-cutout-${w}.webp`,
  alt: 'Mohammed Zahid',
}

/* ---------------------------------------------------------------------------
   3. ABOUT / BIO  —  the "About me" section on the home page
   ------------------------------------------------------------------------ */
export const about = {
  heading: 'About me',
  lead: 'Full-stack web developer and data analyst with over two years of professional experience.',
  paragraphs: [
    'I work across both sides of a product. On the front end I build interfaces with JavaScript (ES6+), React and clean, hand-written CSS. On the back end I work with Python, Flask and Django, and connect everything together with REST APIs.',
    'The other half of my work is data. I use Python with Pandas and NumPy to clean messy datasets, then Matplotlib and Seaborn to turn them into charts people can actually act on. I design database schemas in SQLite and MongoDB, write optimised queries, and build ETL pipelines.',
    'In my last role I shipped and maintained production WordPress sites, wrote custom JavaScript and CSS on top of them, integrated third-party APIs for live data, and applied SEO fixes that improved how those sites ranked in search.',
  ],
  // Small facts shown as a strip under the hero
  stats: [
    { value: '2', suffix: '+ yr', label: 'Professional experience' },
    { value: '6', suffix: '+', label: 'Shipped projects' },
    { value: '7.7', suffix: '', label: 'CGPA — B.E. CSE' },
    { value: '1', suffix: 'st', label: 'Battle of Science' },
  ],
}

/* ---------------------------------------------------------------------------
   4. SKILLS PAGE
   ------------------------------------------------------------------------ */
export const skillGroups = [
  {
    id: 'web',
    title: 'Web Development',
    summary: 'Building responsive, production-ready interfaces and the APIs behind them.',
    items: [
      'JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3',
      'Flask', 'Django', 'REST APIs', 'SEO',
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    summary: 'Cleaning, exploring and visualising data to find patterns worth acting on.',
    items: [
      'Python', 'Pandas', 'NumPy', 'Matplotlib',
      'Seaborn', 'Exploratory Data Analysis (EDA)',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    summary: 'Designing schemas that stay fast and correct as the data grows.',
    items: [
      'SQLite', 'MongoDB', 'Schema Design', 'Query Optimisation',
      'Aggregation Pipelines', 'Indexing',
    ],
  },
  {
    id: 'dbms',
    title: 'DBMS Concepts',
    summary: 'The theory I apply when modelling and moving data between systems.',
    items: [
      'Normalisation (1NF–3NF)', 'ACID Transactions', 'ETL Pipelines',
      'ER Modelling', 'Data Wrangling',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    summary: 'What I use day to day to build, debug and ship.',
    items: [
      'GitHub', 'VS Code', 'MongoDB Compass', 'PyCharm',
      'WordPress', 'Elementor',
    ],
  },
]

// Three short "what I'm good at" cards at the top of the Skills page
export const strengths = [
  {
    title: 'Front-end engineering',
    body: 'Responsive layouts, async data loading with fetch and async/await, and interfaces that stay smooth on slow phones as well as desktops.',
  },
  {
    title: 'Data analysis',
    body: 'Full EDA workflow — cleaning, handling missing values, statistical summaries, and visualisations that make the finding obvious.',
  },
  {
    title: 'Database design',
    body: 'Normalised relational schemas, stored procedures and triggers, plus window functions and CTEs for reporting.',
  },
]

/* ---------------------------------------------------------------------------
   5. EXPERIENCE PAGE
   ------------------------------------------------------------------------ */
export const experience = [
  {
    company: 'The Visa Guy',
    role: 'Software Engineer',
    type: 'Hybrid',
    location: 'Bengaluru, Karnataka, India',
    start: 'May 2026',
    end: 'Present',
    summary: 'Building Python automation that takes repetitive manual work off the team and makes the results more accurate.',
    bullets: [
      'Develop Python-based automation tools that replace repetitive manual tasks, improving accuracy and cutting the time each process takes.',
      'Work across API development and integration to connect internal systems and move data between them without manual handling.',
      'Ship changes through to production as part of the product development team.',
    ],
    tags: ['Python', 'API Development', 'Automation', 'Data Analytics'],
  },
  {
    company: 'Pexaworks Technologies',
    role: 'Web Development Intern',
    type: 'Remote',
    location: 'Dubai, United Arab Emirates',
    start: 'Dec 2025',
    end: 'Dec 2025',
    summary: 'A short remote front-end internship with a Dubai-based technology company.',
    bullets: [
      'Worked on front-end web development tasks as part of the remote engineering team.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    company: 'Arsuma Solutions',
    role: 'Web Development Intern',
    type: 'Remote',
    location: 'Bengaluru, Karnataka, India',
    start: 'Jan 2025',
    end: 'Nov 2025',
    summary: 'Built and maintained live client websites end to end, from custom front-end code to API integrations and search performance.',
    bullets: [
      'Developed and maintained production-grade WordPress sites using custom JavaScript (ES6+) and hand-written CSS, going well beyond what the page builder offered.',
      'Integrated third-party plugins and REST APIs so pages could render live, dynamic data without a full page reload.',
      'Debugged and resolved front-end and back-end issues, which improved overall site stability and user engagement.',
      'Applied SEO best practices — structured data and performance tweaks — to increase search visibility.',
    ],
    tags: ['JavaScript', 'CSS', 'HTML', 'WordPress', 'REST APIs', 'SEO'],
  },
  {
    company: 'DNS IT Solutions',
    role: 'Technical Support Specialist',
    type: 'On-site',
    location: 'Bengaluru, Karnataka, India',
    start: 'Sep 2020',
    end: 'Aug 2021',
    summary: 'A year on-site as a hardware and software technician, alongside WordPress development work.',
    bullets: [
      'Diagnosed and repaired computer hardware and resolved software faults for clients on site.',
      'Handled routine software maintenance, keeping client machines serviceable and up to date.',
      'Built and maintained WordPress sites alongside the support work.',
    ],
    tags: ['Software Maintenance', 'Hardware Troubleshooting', 'WordPress'],
  },
]

export const education = [
  {
    qualification: 'B.E. in Computer Science',
    institution: 'City Engineering College, Karnataka',
    detail: '7.7 CGPA',
    year: '2025',
  },
  {
    qualification: 'Higher Secondary (XII), KSEEB',
    institution: 'Falcon PU College',
    detail: '',
    year: '2020',
  },
]

export const achievements = [
  {
    title: '1st Place — Battle of Science',
    year: '2022',
    detail: 'Won first place in my first year of B.E. for building a fully functional college event website with React.js and Tailwind CSS. Awarded a cash prize by the faculty panel.',
  },
]

/* ---------------------------------------------------------------------------
   6. PROJECTS PAGE
   ------------------------------------------------------------------------
   HOW TO ADD A GITHUB PROJECT  (this answers "do I paste the link?"):

     `repo`  → paste the full GitHub URL of the project.
               Example: 'https://github.com/Zahid-5160/churn-analysis'
               The site then automatically fetches that repo's language,
               star count and last-updated date and shows them on the card.
               Leave it as null if the project has no public repo.

     `demo`  → paste the live website URL if the project is online.
               Leave it as null if there is nothing to visit.

   You do NOT upload your code here. Your code stays on GitHub — this site
   just links to it. See the README for the full walkthrough.
   ------------------------------------------------------------------------ */
export const projects = [
  {
    id: 'restro5',
    title: 'Restro5 — Five-Slot Kitchen Queue',
    category: 'Full-stack',
    blurb: 'A restaurant platform where the kitchen can only ever hold five orders at once — enforced atomically, not by convention.',
    bullets: [
      'Split the system across a NestJS gateway handling auth, roles, menu, inventory and Socket.IO event fan-out, and a FastAPI engine that owns the five-slot state machine, with Prisma and PostgreSQL behind both.',
      'Enforced the five-order limit as an atomic slot ledger in Redis written in Lua, so two waiters claiming the last slot at the same instant can never both succeed.',
      'Ran background work through Celery over Redis and pushed live order state to every connected dashboard over WebSockets.',
      'Packaged the whole stack with Docker behind an nginx proxy serving the dashboard and a same-origin API.',
    ],
    tech: ['NestJS', 'FastAPI', 'Redis + Lua', 'PostgreSQL', 'Prisma', 'Celery', 'Docker'],
    repo: 'https://github.com/Zahid-5160/Restro-Queue5-MgMn',
    demo: null,
  },
  {
    id: 'retain',
    title: 'Retain — Employee Churn Prediction',
    category: 'Data',
    blurb: 'Works out who is about to resign, what is driving it, and what would keep them.',
    bullets: [
      'Trained a scikit-learn classifier on the people who had already left, then turned each score into a plain-English answer — not just a probability, but the factors behind it.',
      'Cleaned the data, engineered the features and produced the statistical summaries in pandas, keeping the exploratory analysis alongside the application.',
      'Served the model through a FastAPI back end with a vanilla JavaScript dashboard on top and SQLite behind it.',
      'Documented the fairness constraints the tool deliberately works within, and its honest limitations, rather than overselling the accuracy.',
    ],
    tech: ['Python', 'scikit-learn', 'pandas', 'FastAPI', 'SQLite', 'JavaScript'],
    repo: 'https://github.com/Zahid-5160/Retain-Empolyee-Churn-Prediction',
    demo: null,
  },
  {
    id: 'silver-height-marketing',
    title: 'Silver Height — Marketing Site',
    category: 'Web',
    blurb: 'A corporate marketing site built in WordPress, then exported to static so it loads fast and stays up.',
    bullets: [
      'Built a fully responsive corporate site in WordPress and Elementor, extended with hand-written CSS and ES6+ JavaScript well beyond what the page builder offered.',
      'Optimised images, assets and layout, then exported the site to static files — no database and no plugin stack to fail in production.',
      'Structured the markup for SEO and verified the result across browsers and screen sizes.',
    ],
    tech: ['WordPress', 'Elementor', 'JavaScript (ES6+)', 'HTML5', 'Custom CSS'],
    repo: 'https://github.com/Zahid-5160/Real-estate-website-wordpress',
    demo: 'https://silverheightmarketing.com/',
  },
  {
    id: 'cadabella',
    title: 'Cadabella — Jewellery Storefront',
    category: 'Web',
    blurb: 'A luxury jewellery showcase, laid out so the product photography carries the page.',
    bullets: [
      'Designed an elegant product showcase in WordPress and Elementor, with custom CSS for the type and spacing the builder could not express.',
      'Built the homepage, product section and shop pages to hold up from phone to desktop.',
      'Compressed the imagery and exported a static build, keeping a photography-heavy site quick to load.',
    ],
    tech: ['WordPress', 'Elementor', 'JavaScript (ES6+)', 'HTML5', 'Custom CSS'],
    repo: 'https://github.com/Zahid-5160/-Jewelry-Website',
    demo: null,
  },
  {
    id: 'da-gama',
    title: 'Da Gama Voyager — Travel Assistant',
    category: 'Web',
    blurb: 'A travel agency site with an assistant that answers the questions the FAQ page never covers.',
    bullets: [
      'Built the site in Flask with Jinja2 templates — packages, gallery, and a booking form validated server-side before it reports success.',
      'Wrote the assistant as a set of regular-expression keyword rules rather than a language model, covering packages, flights, hotels, visas, payments and cancellations.',
      'Put the assistant on its own page and as a floating widget on every other, with quick-reply chips so it can be tried without typing.',
    ],
    tech: ['Python', 'Flask', 'Jinja2', 'Bootstrap 5', 'JavaScript'],
    repo: 'https://github.com/Zahid-5160/Travel-assistance-chatbot',
    demo: null,
  },
  {
    id: 'ifza-care',
    title: 'IFZA Care — Hospital Management',
    category: 'Database',
    blurb: 'Doctors, patients, appointments and enquiries, kept straight in one Django application.',
    bullets: [
      'Modelled doctors, patients, appointments and visitor messages as related Django models over SQLite, so the data stays consistent as records are added.',
      'Built the four data screens and the appointment booking flow, leaning on Django for validation, CSRF protection and authentication.',
      'Wrote the documentation for a reader with no programming background — every folder, every concept and a glossary — which forced the structure to stay explainable.',
    ],
    tech: ['Django', 'Python', 'SQLite', 'HTML', 'CSS'],
    repo: 'https://github.com/Zahid-5160/Hospital-Management-System-DB',
    demo: null,
  },
]

/* ---------------------------------------------------------------------------
   7. NAVIGATION  —  the links in the top menu
   ------------------------------------------------------------------------ */
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
]

/* ---------------------------------------------------------------------------
   8. SITE ADDRESS  —  update after you deploy
   ------------------------------------------------------------------------
   Used for SEO tags and the sitemap. Change this to your real address once
   the site is live (for example 'https://zahid-2002-portfolio.vercel.app').
   ------------------------------------------------------------------------ */
export const siteUrl = 'https://zahid-2002-portfolio.vercel.app'
