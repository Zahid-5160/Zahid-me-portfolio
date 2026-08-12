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
  src: '/images/profile/portrait.jpg',
  alt: 'Portrait of Mohammed Zahid',
}

/* ---------------------------------------------------------------------------
   3. ABOUT / BIO  —  the "About me" section on the home page
   ------------------------------------------------------------------------ */
export const about = {
  heading: 'About me',
  lead: 'Full-stack web developer and data analyst with 11 months of professional experience.',
  paragraphs: [
    'I work across both sides of a product. On the front end I build interfaces with JavaScript (ES6+), React and clean, hand-written CSS. On the back end I work with Python, Flask and Django, and connect everything together with REST APIs.',
    'The other half of my work is data. I use Python with Pandas and NumPy to clean messy datasets, then Matplotlib and Seaborn to turn them into charts people can actually act on. I design database schemas in SQLite and MongoDB, write optimised queries, and build ETL pipelines.',
    'In my last role I shipped and maintained production WordPress sites, wrote custom JavaScript and CSS on top of them, integrated third-party APIs for live data, and applied SEO fixes that improved how those sites ranked in search.',
  ],
  // Small facts shown as a strip under the hero
  stats: [
    { value: '11', suffix: ' mo', label: 'Professional experience' },
    { value: '4', suffix: '+', label: 'Shipped projects' },
    { value: '7.6', suffix: '', label: 'CGPA — B.E. CSE' },
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
    company: 'Arsuma Solutions',
    role: 'Web Developer',
    type: 'Remote',
    location: 'Noida, India',
    start: 'Jan 2025',
    end: 'Nov 2025',
    summary: 'Built and maintained live client websites end to end, from custom front-end code to API integrations and search performance.',
    bullets: [
      'Developed and maintained production-grade WordPress sites using custom JavaScript (ES6+) and hand-written CSS, going well beyond what the page builder offered.',
      'Integrated third-party plugins and REST APIs so pages could render live, dynamic data without a full page reload.',
      'Debugged and resolved front-end and back-end issues, which improved overall site stability and user engagement.',
      'Applied SEO best practices — structured data and performance tweaks — to increase search visibility.',
    ],
    tags: ['JavaScript', 'CSS', 'WordPress', 'REST APIs', 'SEO'],
  },
]

export const education = [
  {
    qualification: 'B.E. in Computer Science',
    institution: 'City Engineering College, Karnataka',
    detail: '7.6 CGPA',
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
    id: 'churn',
    title: 'Telecom Customer Churn Prediction',
    category: 'Data',
    blurb: 'Found out which telecom customers were about to leave, and why.',
    bullets: [
      'Ran a full exploratory data analysis on telecom churn data to identify customer retention patterns and the factors driving churn.',
      'Cleaned the dataset, handled missing values and produced statistical summaries using Pandas and NumPy.',
      'Built visualisations with Matplotlib and Seaborn covering customer demographics, subscription behaviour and service usage trends.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    repo: null,
    demo: null,
  },
  {
    id: 'chat-ai',
    title: 'Conversational AI Web App',
    category: 'Web',
    blurb: 'A ChatGPT-style chat app with real-time replies and saved conversation history.',
    bullets: [
      'Built a full-stack AI chat application that calls LLM APIs through a Flask back end, with multi-turn context management and prompt engineering for coherent replies.',
      'Designed a responsive async front end using fetch and async/await so messages stream in without freezing the page.',
      'Logged every conversation to MongoDB, enabling session retrieval and usage analytics through aggregation pipelines.',
    ],
    tech: ['JavaScript', 'Flask', 'Python', 'LLM API', 'MongoDB'],
    repo: null,
    demo: null,
  },
  {
    id: 'silver-heights',
    title: 'Silver Heights — Real Estate Website',
    category: 'Web',
    blurb: 'A responsive property listing site built for a real estate business.',
    bullets: [
      'Developed a fully responsive real estate website with dynamic property listing pages, filters and clear navigation to make properties easier to find.',
      'Implemented contact forms and lead capture so enquiries reach the sales team directly.',
      'Optimised loading performance and mobile responsiveness for a smooth experience across devices.',
    ],
    tech: ['WordPress', 'Elementor', 'Custom CSS', 'Custom JS'],
    repo: null,
    demo: 'https://silverheightholdings.com/',
  },
  {
    id: 'hospital-dbms',
    title: 'Hospital Management System',
    category: 'Database',
    blurb: 'A normalised database design that enforces correctness at the data layer.',
    bullets: [
      'Designed a fully normalised relational schema with stored procedures for billing and triggers that detect appointment conflicts, enforcing data integrity in the database itself.',
      'Wrote SQL reports using window functions (RANK, ROW_NUMBER, LAG) and CTEs for doctor workload, bed occupancy and revenue-by-department analytics.',
    ],
    tech: ['SQLite', 'Django', 'ER Modelling', 'Stored Procedures'],
    repo: null,
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
   the site is live (for example 'https://zahid-5160.github.io/zahid-2002-portfolio').
   ------------------------------------------------------------------------ */
export const siteUrl = 'https://zahid-5160.github.io/zahid-2002-portfolio'
