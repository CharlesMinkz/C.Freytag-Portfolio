// ============================================================================
// PROJECT DATA — this is the one file you need to edit to add or update a
// project. Both the homepage and the full projects page pull from this array.
// ============================================================================
//
// FIELDS PER PROJECT:
//   id          — unique slug, used internally to open the right modal (no spaces)
//   title       — shown as the card heading and modal title
//   date        — shown next to the title (e.g. "2025" or "2024 — Now")
//   tags        — array of skill/category tags; these power the filter chips
//                 on the projects page and the "View all" filters on the homepage
//   brief       — one-sentence summary shown on the card and under the modal title
//   liveUrl     — the "View live project" button link (Figma prototype, deployed
//                 site, etc). Use "#" as a placeholder if you don't have one yet.
//   gradient    — 'g1'–'g8', picks a fallback flat color for the card/carousel
//                 if you haven't supplied real images yet (see project-modal.css
//                 for the actual color values, search ".modal.g1" etc.)
//
// OPTIONAL — REAL IMAGES (once you have screenshots for a project):
//   tileImage      — path to a single image (e.g. "images/yourproject-tile.jpg")
//                    shown on the project CARD itself (homepage + projects grid),
//                    replacing the flat color block. Usually a title/splash
//                    screen or logo shot. If omitted, the card just shows the
//                    flat gradient color with the project title as text.
//   galleryImages  — array of { src, alt } shown as a swipeable CAROUSEL at the
//                    top of the project's modal (the "final project" preview).
//                    If omitted, falls back to the old 3-box gradient tiles
//                    using the plain `gallery` array of text labels below.
//   gallery        — array of 3 short text labels, only used as a FALLBACK when
//                    galleryImages isn't set. Keep it even if you add
//                    galleryImages, just in case you remove the images later.
//
// CASE STUDY — the three tabs inside the modal (Context / Process / Solution):
//   Each entry in `caseStudy` needs a `heading` (becomes the tab label) and
//   either:
//     a) `text` (+ optional `image` caption string, or `images: [{src,alt}]`
//        for real screenshots) — a simple single-section tab, OR
//     b) `stages: [...]` — breaks the tab into labeled sub-sections (this is
//        how "Process" is split into Empathize/Define/Ideate/Prototype/Test,
//        and how "Solution" is split into How It Works/The Economy/What You
//        Can Do). Each stage can have its own `text`, `images`, and optionally
//        a `list` (array of strings, rendered as bullet points — wrap a word
//        in <strong>...</strong> to bold it, e.g. for feature names).
//        If the parent section also has `text` alongside `stages`, that text
//        renders as an intro paragraph above the stages.
//
//   None of this is mandatory — a brand new project can start with just plain
//   `text` in all three tabs (Context/Process/Solution) and no images at all;
//   add `images`/`stages`/`list` later once you have real material for it.
//
// gradient: 'g1'–'g8' controls the placeholder color block; swap in real images when ready.

const PROJECTS = [
  {
    id: "uni-agency",
    title: "The Uni Agency — Connecting Student Talent to Industry",
    date: "2026",
    tags: ["Product Design", "Project Management", "UX Research"],
    brief: "A university-run creative talent agency that packages, promotes, and connects student work to industry — turning coursework into a personal brand, portfolio, and real client experience.",
    gradient: "g8",
    tileImage: "images/uni-agency-final-talent-passport.jpg",
    gallery: ["Student profile & portfolio", "Agency job matching", "Public showcase gallery"],
    galleryImages: [
      { src: "images/uni-agency-final-talent-passport.jpg", alt: "Student Talent Passport with skills, languages, and skills to develop" },
      { src: "images/uni-agency-final-public-profile.jpg", alt: "Public student profile with experience and projects" },
      { src: "images/uni-agency-final-jobs-incoming.jpg", alt: "Agency dashboard showing an incoming job brief and AI-recommended student shortlist" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "Our brief for this university challenge was intentionally broad: how might we design connected digital-physical experiences that measurably improve holistic wellbeing on campus? As Project Lead, I ran our four-person team — Kiran, Lukas, Yangchen, and me — through a full Double Diamond process in a three-day studio sprint: campus fieldwork, affinity mapping, and ideation. The interviews I helped conduct surfaced friction everywhere, from IT support to food, study space, and scheduling. But one thread cut deeper than the rest and kept surfacing across nearly every student we spoke to: no one felt their university actually connected them to real industry exposure, and there was no clear path from coursework to employability. We chose to build our response around that gap rather than the dozen smaller ones."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "I conducted a portion of our campus interviews myself, alongside teammates deployed across campus to capture quotes and \"spatial friction\" through photography. We brought everything back to a shared wall — every quote and observation on its own sticky note — spanning categories from IT and academic experience to food, library space, and student wellbeing. It was a genuinely messy, camera-roll-and-marker process before it became a strategy."
          },
          {
            heading: "Define",
            text: "We ran affinity mapping to cluster the raw wall into thematic groups, then wrote Point of View statements to force ourselves from observation into a specific, defensible stance — centered on students lacking career guidance and industry exposure inside their own university. From that POV we framed three How Might We questions: how might we create a career support service within the university that represents students, how might we connect students to industry professionals and real-world experience, and how might we make professionals and companies aware of university students' and professors' work at all."
          },
          {
            heading: "Ideate",
            text: "We ran a divergent brainstorm — at least 15 ideas per team, several rounds of Crazy 8s — then scored them against a desirability/feasibility/viability scorecard and an impact-feasibility matrix, dot-voting our way to consensus on a single hybrid concept. That process pushed us away from a single feature, like just a job board, toward a fuller agency model: a university-run creative agency that could package and promote student work, actively broker connections to industry, and give the university itself a stronger public reputation in the process."
          },
          {
            heading: "Prototype",
            text: "As Lead Product Designer, I took the converged concept into wireframes for two distinct sides of the product: a student side, where students manage a skills-and-availability profile, toggle their freelance availability and weekly capacity, and maintain a portfolio of projects with a shareable public profile and QR entry point; and an agency side, where the Agency Lead manages incoming job requests, posts freelance opportunities, matches students to jobs through a guided multi-step flow, and curates a monthly newsletter and public showcase gallery from submitted student work. Rather than stop at static wireframes, I used Claude AI to actually build the concept into a clickable, working prototype for both sides — a first pass in a simple black-and-white system, then refined into the full green \"Uni Agency\" brand identity for the pitch. We also ran an IT feasibility check partway through — the verdict came back positive, confirming the concept could integrate with the university's existing student portal with a few tweaks, aside from grades and modules.",
            images: [
              { src: "images/uni-agency-v1-talent-passport.jpg", alt: "First-version prototype of the Talent Passport, built with Claude AI" },
              { src: "images/uni-agency-v1-jobs-incoming.jpg", alt: "First-version prototype of the agency's job matching dashboard" }
            ]
          },
          {
            heading: "Test",
            text: "We wrote and prioritized user stories for each of our three core personas — the Admin (Agency Lead), the Recruiter, and the Student — using MoSCoW to separate must-haves from nice-to-haves, then broke those down into concrete design and build tasks. That structure is what we pressure-tested the prototype against going into the pitch: could an admin realistically review and approve a submission, could a recruiter find and message a matching student, could a student actually get from \"I finished a project\" to \"a company saw it\"?",
            images: [
              { src: "images/uni-agency-final-job-modal.jpg", alt: "Job detail modal showing match percentage and application requirements" },
              { src: "images/uni-agency-final-project-detail.jpg", alt: "Public project detail page showing skills and how they were applied" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "The Uni Agency turns a university's design program into a working creative agency — a professional bridge between student work, faculty oversight, and real industry demand, with public visibility on both ends.",
        stages: [
          {
            heading: "How It Works",
            text: "Students maintain a living profile: skills, availability, a weekly capacity slider for freelance work, and a portfolio of projects, each with its own project page and a shareable public link or QR code. When a company or the agency itself has a role to fill, the Agency Lead posts it as either a freelance gig or an incoming job request, then works through a guided matching flow — filtering by skill, reviewing suggested students, and sending job offers directly from the dashboard. Every approved project can also be pulled into a monthly curated newsletter and the university's public showcase gallery, the university's actual public storefront for student work.",
            images: [
              { src: "images/uni-agency-final-public-profile.jpg", alt: "Public student profile with experience and projects" },
              { src: "images/uni-agency-final-jobs-incoming.jpg", alt: "Agency dashboard showing an incoming job brief and AI-recommended student shortlist" }
            ]
          },
          {
            heading: "Structure & Reach",
            text: "Behind the product sits a real operating structure: an Agency Lead (a department head or senior faculty member) oversees a rotating team of student employees and freelancers, with faculty providing oversight while students handle execution. The Agency Lead can also search the full student database directly by skill, availability, and language whenever a request doesn't come with its own AI-matched shortlist. Beyond the platform itself, the agency runs the promotional and advertising side of the idea — social content and success stories, a semester and yearly magazine, alumni and recruiter outreach, corporate partnerships, and campus exhibitions — plus a merch line of hoodies, totes, and pins printed with dynamic QR codes that route straight from a tote bag on the street to a student's live portfolio.",
            images: [
              { src: "images/uni-agency-final-public-gallery.jpg", alt: "Public University Gallery showcasing featured student projects" },
              { src: "images/uni-agency-v1-search-students.jpg", alt: "Agency-side student database search with skill, availability, and language filters" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "Inside the Uni Agency platform:",
            list: [
              "<strong>Build a living student profile</strong> with skills, availability, and a weekly freelance-capacity slider you control.",
              "<strong>Publish a portfolio</strong> of projects, each with its own page and a shareable link or QR code.",
              "<strong>Post and manage freelance gigs or incoming jobs</strong>, matching them to students through a guided, filterable flow.",
              "<strong>Curate a monthly newsletter and public showcase gallery</strong> from approved student projects.",
              "<strong>Get recommended directly to hiring partners</strong>, or apply to opportunities through your own university-generated portfolio.",
              "<strong>Carry a portfolio into the physical world</strong> through QR- and AR-enabled merch, exhibitions, and pop-up kiosks."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mpact-5",
    title: "MPact 5 — Berlin Impact Hub",
    date: "2026",
    tags: ["UX Design", "AI Integration", "Civic Tech"],
    brief: "An AI-assisted civic platform that turns city needs into personalized, reward-based micro-tasks for citizens.",
    liveUrl: "https://www.figma.com/proto/9ckgzFPgsTv02op5tFViHs/MPact-5?node-id=147-144&t=qBbbQ8YmUzcajRa9-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=147%3A144",
    gradient: "g1",
    tileImage: "images/mpact5-title.jpg",
    gallery: ["Brand identity", "Home dashboard", "Civic wallet & vouchers"],
    galleryImages: [
      { src: "images/mpact5-logo.png", alt: "MPact 5 logo — a Berlin Bear holding the app's globe mark" },
      { src: "images/mpact5-home-screen.jpg", alt: "Home dashboard with recommended missions" },
      { src: "images/mpact5-wallet-1.jpg", alt: "Civic wallet with redeemable vouchers" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "Berlin's civic-engagement apps are bureaucratic, unrewarding, and gated behind friction-heavy logins like BundID — so cities stay under-engaged even as governments actively look for ways to cut red tape. Meanwhile, residents want to help their neighborhood but can't find low-barrier ways in: most existing options ask for long-term volunteering commitments and offer nothing beyond moral reward. The clearest precedent was Berlin's own \"berlinPay\" pilot, which rewarded citizens with vouchers for civic action and worked well — but only ran for a month. The gap is real: people want flexible, five-minutes-here engagement with something tangible in return."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "My original research focused on people who wanted to engage in local activism but struggled to fit it into a busy schedule — the idea of five-minute, impact-sized tasks came directly from that constraint. Research confirmed Berliners do want to help, that the city is actively looking for ways to digitalize civic engagement, and that any solution needs to meet people exactly where they already are, rather than asking them to seek out a cause."
          },
          {
            heading: "Define",
            text: "The problem wasn't a lack of willingness on either side — it was the missing translation layer between messy, fragmented city data and a five-minute window in someone's day. I defined MPact 5 around a task-for-voucher model: businesses and city initiatives upload specific needs and fund their own reward, citizens complete matched micro-tasks, and the loop closes with a tangible \"thank you\" rather than another unpaid ask. Five task categories anchor the system — Data, Nature, Social, Maintenance, and DIY — each mapped to something a resident can realistically fit into five minutes."
          },
          {
            heading: "Ideate",
            text: "I explored the visual language before locking the flow — researching how AI-native apps typically look (glassmorphism, circular avatars, soft gradients) and testing that against Berlin's own institutional brand colors, so the app read as civic infrastructure rather than another generic app-store aesthetic. In parallel, I worked through backend mechanics with my professor: how a city-subsidized voucher system could stay believable rather than reading as exploiting local businesses — landing on a state-funded model where the Senate reimburses partner businesses directly, plus a secondary \"barter network\" where businesses trade unused voucher capacity for advertising credit inside the app.",
            images: [
              { src: "images/mpact5-moodboard.jpg", alt: "Visual identity moodboard exploring AI-app aesthetics" },
              { src: "images/mpact5-logo.png", alt: "Final MPact 5 logo and wordmark" }
            ]
          },
          {
            heading: "Prototype",
            text: "I mapped the full system in Figma before touching high-fidelity UI — onboarding, the AI chat flow, task detail, and the institutional side that feeds the platform with data — since MPact 5 had to work as a two-sided loop, not just a consumer app. That structure became the backbone for the actual screens: an onboarding splash, an AI-driven home dashboard that opens directly to recommended missions, and a civic wallet where earned points convert into vouchers.",
            images: [
              { src: "images/mpact5-user-flow-map.jpg", alt: "Full user flow map built in Figma" },
              { src: "images/mpact5-onboarding-splash.jpg", alt: "Onboarding splash screen" },
              { src: "images/mpact5-home-screen.jpg", alt: "Home dashboard with recommended missions" },
              { src: "images/mpact5-wallet-2.jpg", alt: "Voucher marketplace in the civic wallet" }
            ]
          },
          {
            heading: "Test",
            text: "Testing reshaped the product more than any other stage. Early feedback restructured the Initiative Directory's information hierarchy entirely — from Strategy → Projects → Goals to Strategy → Goals → Projects, so a user always understands why a task exists before diving into who's behind it. Later rounds shifted the reward framing: users responded more to an authentic \"thank you\" message than to the numeric point count alone. My professor's review pushed the target demographics further too — toward people who have both the motivation and the actual time, like retirees, students, and the underemployed — and grounded the backend in a real, defensible funding model rather than an assumed one.",
            images: [
              { src: "images/mpact5-after-feedback-1.jpg", alt: "Refined chat and voucher flow after tutor feedback" },
              { src: "images/mpact5-after-feedback-2.jpg", alt: "Refined initiative directory and backend logic after tutor feedback" },
              { src: "images/mpact5-task-history.jpg", alt: "Task history and transparency screen" },
              { src: "images/mpact5-initiative-detail.jpg", alt: "Initiative directory detail view" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "MPact 5 works as a closed loop between citizens, local businesses, and the city — turning five minutes of someone's day into a funded, trackable civic action. The final concept synchronizes grassroots citizen action with official programs like the Berlin Biodiversity Strategy 2030, while keeping the visual identity (Berlin Bear mascot, city brand colors, the line \"Your city. Your planet.\") distinctly local rather than generic app-store AI aesthetics. Built as the capstone project for my MA in Design, Technology & AI.",
        stages: [
          {
            heading: "How It Works",
            text: "A user onboards through an AI chat that gathers their skills, interests, and availability — then the app opens straight to a home dashboard built around real-time city data, surfacing recommended missions matched to that person's exact location, time window, and skill set. Picking a task opens a step-by-step detail card embedded directly in the chat, so the user can ask follow-up questions or report a blocker without leaving the flow. Once the task is done in the real world, the user uploads a photo as proof; an AI verification check confirms it, credits land instantly in their Civic Wallet, and they're routed back to the home screen to see their impact reflected immediately.",
            images: [
              { src: "images/mpact5-onboarding-splash.jpg", alt: "AI chat onboarding splash screen" },
              { src: "images/mpact5-home-screen.jpg", alt: "Home dashboard with recommended missions" },
              { src: "images/mpact5-chat.jpg", alt: "Task completed and verified inside the chat" }
            ]
          },
          {
            heading: "The Economy",
            text: "The reward system is modeled on Berlin's real \"berlinPay\" pilot, and it's built to be a state-funded mechanism, not a free giveaway: the Berlin Senate (SenMVKU) allocates a portion of an existing initiative's budget — like \"Saubere Stadt\" — to fund vouchers, and partner businesses are reimbursed by the city rather than donating stock for free. Independent local businesses, meanwhile, opt into a second track: a community-driven asset-sharing model where a café or bike shop that can't pay in cash instead provides a fixed number of vouchers per month as a marketing expense, earning \"Business Credits\" they can spend on in-app advertising or trade with other local businesses — effectively a small barter network for small businesses. A bike shop struggling with illegal dumping outside its storefront, for instance, can post that as a task; a neighbor clears it, and the shop rewards them directly with a voucher, closing the loop without any cash changing hands.",
            images: [
              { src: "images/mpact5-wallet-1.jpg", alt: "Civic wallet with a redeemable Free Swim Pass voucher" },
              { src: "images/mpact5-wallet-2.jpg", alt: "Voucher marketplace showing city- and business-funded rewards" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "Inside the app, a user can:",
            list: [
              "<strong>Chat with an AI guide</strong> that onboards them, tracks their real-time availability and location, and recommends matched tasks contextually — for example, prioritizing heatwave-related tasks during a summer spike.",
              "<strong>Browse and complete five-minute missions</strong> across five categories — Data, Nature, Social, Maintenance, and DIY — each with clear step-by-step instructions and instant photo verification.",
              "<strong>Track a personal dashboard</strong> showing a live feed of recent civic impact, the city's current focus banner, and custom trackers like \"Total Trees Watered\" or a district's strategic percentage toward a goal.",
              "<strong>Review a full task history</strong> — every completed task, its proof photo, and a direct link to the official initiative that requested it, for full transparency.",
              "<strong>Explore the Initiative Directory</strong>, organized by Strategy → Goals → Projects, and follow a specific project (like the \"Insect Highway\") to prioritize its tasks on their feed.",
              "<strong>Redeem a Civic Wallet</strong> of earned credits for real local rewards — swim passes, ride credits, course discounts — funded by the city and its partner businesses.",
              "<strong>Manage their profile</strong>, updating skills, certifications, and availability constraints at any time."
            ],
            images: [
              { src: "images/mpact5-task-history.jpg", alt: "Task history and transparency screen" },
              { src: "images/mpact5-initiative-detail.jpg", alt: "Initiative directory detail view" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "career-hub",
    title: "The Career Hub — An Interactive Workspace for Career Navigation",
    date: "2026",
    tags: ["Interaction Design", "Project Management", "Physical-Digital"],
    brief: "A physical touch-desk that turns career guidance into a live, navigable knowledge graph — bridging student portfolios, local market realities, and legal frameworks for international design students in Berlin.",
    gradient: "g3",
    tileImage: "images/career-hub-desk-hero.jpg",
    gallery: ["Knowledge graph interface", "Three-column workspace", "Mobile sync footer"],
    galleryImages: [
      { src: "images/career-hub-desk-hero.jpg", alt: "Two people navigating The Career Hub's touch-desk in a university lobby" },
      { src: "images/career-hub-knowledge-graph.jpg", alt: "Knowledge graph node map with an in-place reveal panel open beside it" },
      { src: "images/career-hub-interaction-annotations.jpg", alt: "Annotated interaction spec showing the in-place reveal and send-to-phone/app/dashboard actions" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "International design students in Berlin face a confusing transition from education into a fragmented, three-layered job market — a highly visible Formal layer (LinkedIn, Indeed, StepStone), a Semi-Formal layer of newsletters and community channels, and an Informal layer of referral-only roles that stays invisible to newcomers. On top of that fragmentation sits a real cultural gap: unclear portfolio expectations, unfamiliar interview etiquette, and unspoken networking norms that no one explains outright. The stakes are real — roughly 80% of international students choose Germany specifically for its career prospects, yet two-thirds leave within ten years, largely because of friction during this exact transition. As Team Lead, Project Manager, and Interaction Designer on an eight-person Design Thinking team, I helped turn that research into The Career Hub: a physical touch-desk that structures career guidance around a live, navigable knowledge graph instead of another static resource list."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "Research combined interviews with current and former Mediadesign Hochschule students, an expert interview on real Berlin hiring practices, and the team's own experience navigating the city as international students. We mapped the local job market into its three layers and identified recurring blockers: recruitment platforms available in German only, vague job descriptions with no clear language-level requirements, and a university career portal that doesn't yet list Design as a category. It became clear the core problem wasn't a lack of information — it was that no single system connected a student's portfolio, the local market, and the legal rules around who could even apply.",
            images: [
              { src: "images/career-hub-research-board.jpg", alt: "Research synthesis board mapping key findings on international students and the Berlin job market" }
            ]
          },
          {
            heading: "Define",
            text: "The team voted between three directions — onboarding and continued support, feedback during active job-hunting, and visa-restricted access to roles — and chose to focus on onboarding, reasoning that catching students the moment they arrive in Berlin would do more good than intervening only after they'd already started applying. That landed us on a working question: how might we help international design students bridge the gap between their background and Berlin's local hiring standards, and move from confusion to confident action.",
            images: [
              { src: "images/career-hub-hmw-evolution.jpg", alt: "How-might-we statement evolving from initial votes to a final problem statement" }
            ]
          },
          {
            heading: "Ideate",
            text: "Early concepts explored a matrix of standalone tools — a jargon-decoding \"Job Decoder,\" a portfolio-alignment checker, a rejection-reflection simulator — but testing them as isolated ideas made each feel too thin on its own, while stacking them together overloaded an already stressed user. I helped the team converge on a single unifying structure instead: a \"first 30 days\" journey that walks a student through the Formal, Semi-Formal, and Informal layers in sequence, with the strongest individual tool ideas embedded as milestones along that path. A later round of review pushed the concept further, from a validation tool toward real human connection — centering the system on a Mentor–Mentee session paired with a shared interaction board, since cold AI feedback alone couldn't address students' actual psychological barriers to applying.",
            images: [
              { src: "images/career-hub-30-day-kit.jpg", alt: "\"First 30 Days Survival Kit\" concept mapping the journey across market layers" },
              { src: "images/career-hub-ideation-board.jpg", alt: "Ideation board exploring a career-buddy concept and session-notes card" }
            ]
          },
          {
            heading: "Prototype",
            text: "As Interaction Designer, I owned the physical-to-digital framework for the desk itself: a top-to-bottom spatial hierarchy running from a timestamped conversation timeline at the top, to a central three-column knowledge-graph workspace, to a persistent footer of quick actions at the bottom. I built a categorical color-coding system to keep dense, interconnected information — market data, legal frameworks, portfolio strategy, workplace culture — legible at a glance, and pioneered the \"in-place reveal\" pattern, where deep-dive content expands directly within the workspace instead of interrupting the session with pop-ups. In parallel, the wider team built out a Personal Board, Mentor–Mentee dashboards, a companion mobile app, and a mirror-based practice-interview experience as connected modules around that same core.",
            images: [
              { src: "images/career-hub-node-categories.jpg", alt: "Information architecture mapping the desk's four color-coded knowledge categories" },
              { src: "images/career-hub-hardware-exploration.jpg", alt: "Physical form-factor exploration for the touch-desk hardware" }
            ]
          },
          {
            heading: "Test",
            text: "We ran live in-classroom testing on printed and tablet mockups of every module, recording sessions and folding feedback back into the design between rounds. The biggest shift came after tutor review: the board originally supported multiple overlapping sessions, which read as cluttered and impersonal, so I reworked it into one dedicated mentor/mentee session per board — a small change that made the physical space feel like a real one-on-one consultation rather than a shared kiosk. As Project Manager, I also weighed the trade-offs of parallel development: we deliberately prioritized consistent cross-device logic — a student picking up a session on their phone exactly where the desk left off — over a fully unified visual style across modules, treating flow continuity as the more urgent problem to solve first.",
            images: [
              { src: "images/career-hub-board-iterations.jpg", alt: "Three iterations of the interaction board's layout refined after testing" },
              { src: "images/career-hub-testing-session.jpg", alt: "Team testing a paper prototype of the knowledge graph in the classroom" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "The Career Hub reframes career guidance as something a student explores rather than reads — a physical touch-desk where a knowledge graph, a live conversation history, and instant mobile hand-off work together to make Berlin's fragmented job market feel navigable. Built as a Design Thinking capstone project with an eight-person team at Mediadesign Hochschule.",
        stages: [
          {
            heading: "How It Works",
            text: "A student sits down at the desk and navigates an interconnected knowledge graph — nodes representing local job-market layers, legal regulations, portfolio strategy, and workplace culture, all cross-linked rather than siloed into separate menus. Selecting a node reveals mentor recommendations and curated resources in-place, inside the same three-column workspace, so a deep-dive never breaks the session's context with a pop-up. A timestamped timeline running across the top anchors the whole consultation, marking exactly which nodes were visited and when. When the session wraps up, a persistent footer of quick actions pushes the full script, resources, and action plan straight to the student's personal dashboard on their phone, so the conversation keeps going long after they've left the desk.",
            images: [
              { src: "images/career-hub-desk-hero.jpg", alt: "The Career Hub touch-desk in use in a university lobby" },
              { src: "images/career-hub-knowledge-graph.jpg", alt: "Knowledge graph node map with an in-place reveal panel open beside it" }
            ]
          },
          {
            heading: "Beyond the Desk",
            text: "The desk is the entry point into a larger ecosystem, not the whole product. A Personal Board lets students revisit session notes, uploaded portfolios, and AI-assisted feedback independently after they leave; a dedicated Mentor–Mentee layer handles session booking, mentor dashboards, and progress tracking, opening the door to alumni and industry mentors alongside current students; and a companion mobile app carries session history, task tracking, and event notifications wherever the student goes next. A separate mirror-based practice-interview experience, reflecting the desk's own real-world orientation, lets students rehearse with an AI interviewer before ever sitting across from a real one.",
            images: [
              { src: "images/career-hub-interaction-annotations.jpg", alt: "Interaction spec showing the desk sending a session to phone, app, and dashboard" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "At The Career Hub, a student can:",
            list: [
              "<strong>Navigate a dynamic knowledge graph</strong> connecting local job-market layers, legal regulations, portfolio strategy, and workplace culture.",
              "<strong>Explore deep-dive mentor recommendations</strong> and curated resources in-place, without ever leaving the three-column workspace.",
              "<strong>Track their exact session history</strong> on a timestamped conversation timeline anchored at the top of the desk.",
              "<strong>Sync their full script, resources, and action plan</strong> straight to their personal dashboard with one tap from the desk's action footer.",
              "<strong>Book and manage Mentor–Mentee sessions</strong>, with alumni and industry professionals joining as mentors.",
              "<strong>Rehearse interviews with an AI interviewer</strong> on the companion mirror experience.",
              "<strong>Pick up exactly where they left off</strong> on the companion mobile app — session history, saved resources, and task tracking synced across devices."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sustainyou",
    title: "SustainYOU — Ecowise Living",
    date: "2026",
    tags: ["UX Design", "AI Integration", "Sustainability"],
    brief: "A personalized sustainability campaign that uses AI-driven guidance, gamification, and community to help people build and track eco-friendly habits.",
    liveUrl: "https://www.figma.com/proto/9CvuNjs4RSrrKMcX27AiHy/SustainYou?node-id=75-504&t=tRfxYgpIBSh88egb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A504&show-proto-sidebar=1",
    gradient: "g4",
    tileImage: "images/sustainyou-dashboard.jpg",
    gallery: ["Goal-setting quiz", "Challenge dashboard", "Community sharing"],
    galleryImages: [
      { src: "images/sustainyou-dashboard.jpg", alt: "SustainYOU home dashboard with goals impact, suggested tasks, and active projects" },
      { src: "images/sustainyou-project-hub.jpg", alt: "Project Hub browse grid of local sustainability initiatives" },
      { src: "images/sustainyou-social-feed.jpg", alt: "Community feed with posts from users sharing sustainability milestones" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "Most sustainability apps hand users a generic checklist and hope something sticks. SustainYOU started from a different premise: sustainable habits stick when they're personalized to someone's actual lifestyle, delivered with encouragement instead of guilt, and reinforced by a community rather than a leaderboard. Built solo for my AI-Design & Innovation course at Mediadesign Hochschule, the brief was as much about the making as the outcome — a two-week sprint to design a full sustainability platform while deliberately using AI tools at every stage, from research and copy to interface feedback and image generation, and reflecting honestly on where each tool helped and where it got in the way."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "The starting observation was simple: generic sustainability tips are easy to ignore, and guilt-driven messaging tends to push people away rather than pull them in. Since this was a solo, fast-turnaround project, the research phase doubled as tool research — I used Ecosia AI specifically because it returned real, sourced answers on sustainable living topics rather than generic web copy, which mattered since I needed material trustworthy enough to build actual guidance around."
          },
          {
            heading: "Define",
            text: "I anchored the project around five goals: personalize sustainability to someone's actual lifestyle, empower through engagement rather than guilt, build real community connections, educate and inspire rather than lecture, and make impact something a user could actually see and measure. That translated into an early structure — a short onboarding quiz to personalize goals, a dashboard to track chosen activities, and a friendly AI companion, who I named Roy, to keep the tone warm rather than clinical. Getting Roy's voice right took real iteration: refining his conversational style through dozens of rounds with Ecosia AI until his feedback stayed constructive without tipping into either harshness or empty positivity."
          },
          {
            heading: "Ideate",
            text: "I mapped the full user journey before touching high-fidelity screens: a user discovers the platform and takes the quiz, explores personalized suggestions across Activities and Groups, adds favorites to a dashboard, earns points and badges that unlock features like avatar customization, shares milestones on a community page, and checks a Local & National News & Goals section to stay tied to real sustainability efforts. The gamification layer took shape around a \"digital garden\" metaphor — growing something visible as a stand-in for otherwise invisible environmental impact — paired with unlockable \"powers\" instead of a flat point count, so progress felt like accumulation rather than competition.",
            images: [
              { src: "images/sustainyou-ai-concept.jpg", alt: "AI-generated concept render exploring the dashboard in a real-world setting" }
            ]
          },
          {
            heading: "Prototype",
            text: "Wireframing happened fast in week one in Figma, but the more interesting design decisions came from building the AI pipeline alongside the interface itself. I used Gemini 3 for UX and design feedback, and Nano Banana specifically to generate Roy's avatar — aiming for a consistent, friendly character across multiple poses (sitting, waving, even a handstand), which took real prompt refinement since Gemini only edits its last response and resets context easily. For photoreal imagery I split time between Stable Diffusion and NightCafe, and ended up moving away from NightCafe once I realized it published generated images publicly by default — not acceptable for a project depicting people and personal habits.",
            images: [
              { src: "images/sustainyou-dashboard-wireframe.jpg", alt: "Early wireframe of the dashboard before real content was added" },
              { src: "images/sustainyou-projecthub-wireframe.jpg", alt: "Early wireframe of the Project Hub before real projects and imagery were added" }
            ]
          },
          {
            heading: "Test",
            text: "Usability testing and refinement happened in week two, run alongside continued AI-assisted design critique. Gemini's UX feedback was genuinely useful early on, but got less reliable the longer a conversation ran — at one point complimenting a \"view all\" link that didn't actually exist in the prototype. That pushed me to treat AI feedback as a first pass rather than ground truth: fast for catching obvious gaps, but still dependent on my own judgment to separate real usability issues from hallucinated ones before trusting a change.",
            images: [
              { src: "images/sustainyou-onboarding.jpg", alt: "Onboarding screen introducing Roy and how SustainYOU works" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "SustainYOU turns sustainability into a personalized, ongoing practice instead of a guilt trip — a quiz-driven onboarding, a friendly AI companion, and a rewards system built around growth rather than competition. Built as a solo AI-Design & Innovation project testing how far AI tools could genuinely carry a two-week design sprint, end to end.",
        stages: [
          {
            heading: "How It Works",
            text: "A new user takes a short quiz that sets their initial sustainability goals, then lands on personalized suggestions across two sections: Activities, for individual habits and tips, and Groups, for local community involvement. Adding a suggestion to their dashboard lets them track it over time and reflect through simple cards. Progress earns points and badges, which unlock new features like project organization tools and avatar customization — including growing a personal digital garden that visualizes accumulated impact. Roy, the platform's AI guide, checks in throughout with encouragement and tailored suggestions, keeping the tone supportive rather than transactional.",
            images: [
              { src: "images/sustainyou-dashboard.jpg", alt: "SustainYOU home dashboard with goals impact, suggested tasks, and active projects" },
              { src: "images/sustainyou-project-detail.jpg", alt: "Community Compost project detail page with tasks and events" }
            ]
          },
          {
            heading: "Community & Staying Informed",
            text: "Beyond individual tracking, users can share reflections and milestones on a social page and join community events without a competitive leaderboard hanging over it — the goal was connection, not comparison. A dedicated Local & National News & Goals page ties personal action back to real sustainability initiatives, surfacing new tasks linked to official campaigns so a user's habits stay connected to something larger than their own dashboard. Seasonal content and periodic quizzes keep the experience from going stale once the initial goal-setting is done.",
            images: [
              { src: "images/sustainyou-social-feed.jpg", alt: "Community feed with posts from users sharing sustainability milestones" },
              { src: "images/sustainyou-article-detail.jpg", alt: "Article page with tips for a safer, more enjoyable bike commute" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "Inside SustainYOU, a user can:",
            list: [
              "<strong>Take a quick quiz</strong> to set personalized sustainability goals based on their lifestyle and preferences.",
              "<strong>Explore curated activities</strong>, local community groups, and sustainable food tips matched to those goals.",
              "<strong>Track chosen activities</strong> on a personal dashboard and reflect on progress over time.",
              "<strong>Join engaging challenges</strong>, earn badges, and unlock new \"powers\" — including a growing digital garden that visualizes their impact.",
              "<strong>Chat with Roy</strong>, an AI guide who keeps feedback warm, specific, and judgment-free.",
              "<strong>Share milestones and reflections</strong> on a community page, and join events without a competitive leaderboard.",
              "<strong>Stay connected to real sustainability efforts</strong> through a Local & National News & Goals page."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "novel-writing-software",
    title: "Novel Writing Software — An AI Exploration",
    date: "2026",
    tags: ["Product Design", "AI Integration", "Speculative Design"],
    brief: "A speculative novel-writing platform exploring how far Figma Make (AI) could take an app from idea to interactive prototype, built out of frustration with existing writing software.",
    liveUrl: "https://www.figma.com/make/WGzwGzLY2ko3TKlgJKrOXb/Book-Writing-Software?p=f&t=rguwGyZZmdREew7E-0&fullscreen=1",
    gradient: "g6",
    tileImage: "images/novel-writing-outline.jpg",
    gallery: ["Book project outline", "Manuscript editor", "World map & routes"],
    galleryImages: [
      { src: "images/novel-writing-outline.jpg", alt: "Book project overview with writing goals and story structure" },
      { src: "images/novel-writing-manuscript.jpg", alt: "Manuscript editor with a description and grammar side panel" },
      { src: "images/novel-writing-map.jpg", alt: "World map for placing locations and routing character journeys" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "Every piece of novel-writing software I've tried solves half the problem: outlining tools that don't talk to your manuscript, note templates that fall apart by chapter ten, or bloated all-in-one tools that bury the actual writing under project-management chrome. This project started as personal frustration and turned into an experiment: could Figma Make — Figma's AI app-generation tool — get me from a rough idea of \"what I wish existed\" to a working, clickable prototype without hand-building every screen? Note: this is a speculative, self-directed project exploring Figma Make (AI), not a client or coursework brief."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "I started by naming exactly what annoyed me about the writing and worldbuilding tools I'd already used for personal projects — scattered character notes, no visual sense of where a plot thread was heading, and manuscript views that assumed a finished outline rather than one still taking shape mid-draft. I also looked at which parts of those tools' information architecture actually held up, like character and location relationships, versus which parts mostly got in the way of writing."
          },
          {
            heading: "Define",
            text: "I settled on five core spaces a writer actually moves between while drafting: a setup quiz for genre and project basics, an outline for structure and goals, a manuscript view for the actual writing, a notes system for characters, locations, and lore, and a map for plotting where characters and events sit in the world. The goal wasn't a plotting tool with writing bolted on, or a text editor with plotting bolted on — it was to keep both first-class and cross-linked."
          },
          {
            heading: "Ideate",
            text: "Since the whole point was testing Figma Make, ideation happened conversationally rather than through static sketches — describing the feature I wanted (\"a setup wizard that feels optional, not mandatory\"; \"a map where I can drop story locations and route a character's journey through them\") and iterating on what it generated. That shaped decisions like making every step of the setup wizard skippable rather than a hard gate, and pairing the manuscript editor with a side panel that surfaces linked notes and grammar feedback in place, instead of sending a writer to a separate screen for either."
          },
          {
            heading: "Prototype",
            text: "The first working version was a lighter, single-page prototype — a project home with a synopsis field, a section list, and a word-count chart — built to test whether Figma Make could stand up a believable structure at all before I asked for anything more complex. Once that held up, I pushed it toward the fuller five-space product: a darker, distraction-focused interface with dedicated Quiz, Outline, Manuscript, Notes, and Map sections, refined through repeated rounds of describing what was wrong and regenerating.",
            images: [
              { src: "images/novel-writing-prototype-light.jpg", alt: "Early single-page prototype with a synopsis field and word-count chart" },
              { src: "images/novel-writing-quiz.jpg", alt: "Project setup wizard asking for genre, with every step skippable" }
            ]
          },
          {
            heading: "Test",
            text: "I stress-tested the concept against my own actual writing habits rather than running formal user testing — drafting real prologue text in the Manuscript view, adding real character and location notes, and checking whether Notes and the Map stayed useful once there was real content in them instead of placeholders. That's what pushed features like the description-and-grammar side panel and the linked-notes system in Manuscript, since writing without them made it obvious how much context gets lost jumping between a separate notes doc and the actual draft.",
            images: [
              { src: "images/novel-writing-manuscript.jpg", alt: "Manuscript editor with a description and grammar side panel" },
              { src: "images/novel-writing-notes.jpg", alt: "Character note for the protagonist, linked to the manuscript" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "The result is a five-space writing environment — Quiz, Outline, Manuscript, Notes, and Map — built almost entirely through conversational prompts in Figma Make. It's a speculative project, not a shipped product, but it answers the question I started with: an AI app-generation tool can get a solo designer from a frustration to a genuinely usable prototype in a short amount of time.",
        stages: [
          {
            heading: "How It Works",
            text: "A new project starts with an optional setup wizard covering genre, project info, characters, locations, world elements, worldbuilding, and goals — skippable at every step for a writer who'd rather just start typing. From there, the Outline tracks writing goals (total words, chapters completed, hours spent) alongside a chapter-by-chapter story structure. The Manuscript view is where the actual drafting happens, with a side panel surfacing the scene's description and grammar feedback without ever leaving the page.",
            images: [
              { src: "images/novel-writing-quiz.jpg", alt: "Project setup wizard asking for genre, with every step skippable" },
              { src: "images/novel-writing-manuscript.jpg", alt: "Manuscript editor with a description and grammar side panel" }
            ]
          },
          {
            heading: "Notes, Map & Continuity",
            text: "Characters, locations, and lore live in a searchable Notes library that stays linked to the manuscript, so a scene can pull in a character's backstory without digging through a separate document. The World Map turns that same information spatial: drop in cities, towns, water, mountains, forests, and roads, then plot a character's route across them, so the story's geography stays as tangible as its plot — the \"Connections\" and \"Character and Chapter Map\" links that were the actual point of the experiment, not an afterthought bolted onto a text editor.",
            images: [
              { src: "images/novel-writing-notes.jpg", alt: "Character note for the protagonist, linked to the manuscript" },
              { src: "images/novel-writing-map.jpg", alt: "World map for placing locations and routing character journeys" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "Inside the prototype, a writer can:",
            list: [
              "<strong>Set up a project</strong> through an optional quiz covering genre, characters, locations, and goals — or skip straight to a blank page.",
              "<strong>Track writing goals</strong> like total words, chapters completed, and hours spent against their own deadlines.",
              "<strong>Draft chapters</strong> in a focused Manuscript view, with linked notes and grammar feedback surfaced in a side panel.",
              "<strong>Store characters, locations, and lore</strong> in a searchable Notes library.",
              "<strong>Add Connections Links</strong> between characters and plot threads to visualize relationships and story dynamics.",
              "<strong>Plot a Character and Chapter Map</strong>, routing a character's journey across cities, terrain, and roads."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "pathcompanion",
    title: "PathCompanion — AR Navigation for Children",
    date: "2025",
    tags: ["AR/XR", "Interaction Design", "Product Design"],
    brief: "An AR navigation system on smart glasses that helps children travel independently, safely, and playfully.",
    liveUrl: "https://www.figma.com/design/FMuBWtiSImRKarqegP7Kgk/DESIGN-PRESENTATION---Carlotta-Freytag?node-id=0-1&t=8R2gDHH6YEoxCcdW-1",
    gradient: "g2",
    tileImage: "images/pathcompanion-ar-final.jpg",
    gallery: ["AR turn-by-turn view", "Gamified missions", "Parent companion app"],
    galleryImages: [
      { src: "images/pathcompanion-welcome.jpg", alt: "Welcome to PathCompanion — role selection screen" },
      { src: "images/pathcompanion-todays-mission.jpg", alt: "Today's Mission route overview" },
      { src: "images/pathcompanion-ar-final.jpg", alt: "AR overlay guiding the child to ascend the stairs" },
      { src: "images/pathcompanion-parent-route.jpg", alt: "Parent app live journey tracking" },
      { src: "images/pathcompanion-summary.jpg", alt: "Mission complete congratulations screen" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "The decision of when to let a child navigate independently is a hard one for any parent — today's phones offer live location tracking and instant calling, but that only reassures the parent, not the child. Current navigation tools are built for adults: text-heavy, abstract icons, and an assumption that the user can already read a map and multitask. Meanwhile, learning to navigate public spaces is a genuine life skill for children aged 6–10 — it builds independence, problem-solving, and the resilience to adapt when a bus is delayed or a route changes. Without the right support, though, those moments can just as easily be stressful or unsafe. There's a real gap between the reassurance parents want and the independence children need to actually build."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "The project started from a very different idea: using VR/AR to simulate the real-world experience of a disability for children, as an empathy tool. It was well-received for its originality but had no functional purpose — nobody's actual problem was being solved. I kept accessibility as a foundation but shifted from empathy to usability, researching how AR/VR is currently used in that space: assistive technology, safety guidance, and independence-building tools like NaviLens, which helps visually impaired people navigate public spaces via a color QR matrix."
          },
          {
            heading: "Define",
            text: "Using the SCAMPER method to interrogate NaviLens, I kept asking \"what if\" — what if this used AR instead of a flat phone screen? What if it wasn't just for the differently abled? What if it worked for children navigating to school, or tourists finding their way? The early concept ballooned into far too much: a tool for multiple audiences with dozens of features, disability data, caregiver messaging, external transit syncing. I had to condense it back down to one clear group and one clear job — a navigation tool for children aged 6–10, with separate interfaces for the child and their guardian.",
            images: [
              { src: "images/pathcompanion-mindmap.jpg", alt: "Whiteboard mindmap narrowing down features and user flow" }
            ]
          },
          {
            heading: "Ideate",
            text: "Children have short attention spans, so the interface needed to be gamified to stay engaging. I designed the journey as a chooseable theme (jungle, pirate, space) with achievements and light storytelling — the space theme became the one I built out, with the child \"flying a rocket\" to their destination, collecting stars, and earning planets along the way. I originally planned for the child to unlock chapters of a companion's story as they completed missions, but the technology's limitations meant this had to condense into a themed journey rather than a full narrative."
          },
          {
            heading: "Prototype",
            text: "This was my first project in Figma, so illustration-heavy assets like Pax, the dog companion, were built in Illustrator first and brought in as editable vectors. I mapped out the full user flow before touching visuals, then built both the child and parent apps in parallel, plus the AR overlay itself — constrained to a 600×600 pixel single-eye display, which meant only the most essential information (direction and the next recognizable landmark) could make it onto the screen at all.",
            images: [
              { src: "images/pathcompanion-welcome.jpg", alt: "Welcome to PathCompanion onboarding screen" }
            ]
          },
          {
            heading: "Test",
            text: "Testing reshaped both the route screens and the AR overlay. Early feedback called my first \"mission brief\" design too cluttered; simplifying it to focus on the journey and the stars to collect got a much better response — though one tester noted, \"the maps are a bit dull, I'd say add little space stuff and decorate it that way.\" Adding contrast and more space decoration to the map got a strong reaction back: \"this would be cool, super cool tbh, especially for kids… where was this when I was like 10.\" The AR overlay went through its own iteration too: an early idea to anchor a glowing star to a real-world location, so it would grow as the child approached it, had to be dropped entirely — the chosen glasses have no environmental tracking, so nothing can be anchored to real-world coordinates. That single hardware constraint shaped most of the later AR decisions.",
            images: [
              { src: "images/pathcompanion-ar-v1.jpg", alt: "Early AR overlay concept — star and rocket mascots over a live photo" },
              { src: "images/pathcompanion-ar-comparison.jpg", alt: "Real staircase next to the decluttered final AR overlay design" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "PathCompanion pairs AR smart glasses with a two-sided app — one for the child, one for their parent — turning an ordinary walk into a guided, gamified space mission while keeping a parent's oversight just one screen away.",
        stages: [
          {
            heading: "How It Works",
            text: "Setup starts with choosing a role — Flyer (child) or Mission Control (parent) — then pairing both apps via a QR code over Bluetooth, and connecting the AR glasses for the first time through a guided flow on the parent's app. From there, a route can be set by either the child or the parent, with accessibility preferences built in — avoiding stairs, using elevators, or including resting spots. Once a route is confirmed, Pax prompts the child to put on their glasses, and the journey is projected directly into the AR overlay: a rocket-shaped compass, a star counter, a progress bar, and the next landmark to recognize, guided the whole way by Pax's voice. On completion, the child gets a congratulations screen and their collected stars, which unlock achievements in a trophy room.",
            images: [
              { src: "images/pathcompanion-welcome.jpg", alt: "Role selection during onboarding" },
              { src: "images/pathcompanion-todays-mission.jpg", alt: "Today's Mission route overview before setting off" },
              { src: "images/pathcompanion-ar-final.jpg", alt: "AR overlay guiding the child in real time" },
              { src: "images/pathcompanion-summary.jpg", alt: "Congratulations screen on completing the journey" }
            ]
          },
          {
            heading: "The Technology",
            text: "I chose the Meta Ray-Ban smart glasses specifically for their familiar, lightweight design, simple Bluetooth pairing, and low cost relative to other AR hardware (around $799) — important for something aimed at children rather than professionals. Their 600×600 pixel single-eye display and turn-by-turn navigation via compass and IMU sensors were enough for the core guidance, but two limitations shaped almost every later design decision: no environmental tracking or spatial mapping (so nothing can be anchored to a real-world location or detect obstacles), and a low frame rate that ruled out any complex animation. An early idea to have a glowing star fixed to a real corner the child needed to turn toward had to be abandoned for exactly this reason — it simply wasn't something the hardware could do yet.",
            images: [
              { src: "images/pathcompanion-ar-final.jpg", alt: "Final AR overlay design, decluttered to fit the display's real constraints" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "Inside the two apps, a family can:",
            list: [
              "<strong>Pair parent and child apps</strong> securely via Bluetooth and a QR code during onboarding.",
              "<strong>Connect AR glasses</strong> through a guided first-time setup on the parent's app.",
              "<strong>Set a personalized route</strong> with accessibility preferences — avoid stairs, use elevators, or include resting spots.",
              "<strong>Follow hands-free AR guidance</strong> — a rocket-shaped compass, a star counter, a progress bar, and contextual cues like \"Platform 2\".",
              "<strong>Stay motivated through gamified missions</strong> — collecting stars, unlocking achievements, and progressing through ranks like Moon Cadet or Mars Pioneer.",
              "<strong>Give parents live oversight</strong> — real-time journey tracking, accessibility info, favorite destinations, and an automatic call-prompt alert if a child repeatedly deviates from the route.",
              "<strong>Celebrate every completed journey</strong> with a summary screen and a trophy room of unlocked achievements."
            ],
            images: [
              { src: "images/pathcompanion-parent-route.jpg", alt: "Parent app showing live journey tracking and safety controls" },
              { src: "images/pathcompanion-summary.jpg", alt: "Mission complete screen with collected stars and trophy" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "surprise-me",
    title: "Surprise Me — A Mystery-Pick Outings App",
    date: "2025",
    tags: ["UI Design", "Speculative Design", "AI Integration"],
    brief: "A solo UI-practice project bundling the \"surprise\" mechanic behind Too Good To Go, mystery flights, and blind book dates into one Uber-Eats-inspired app for spontaneous nights out.",
    liveUrl: "#",
    gradient: "g7",
    tileImage: "images/surprise-me-home.jpg",
    gallery: ["Home & Surprise me CTA", "Three-question quiz", "Match reveal"],
    galleryImages: [
      { src: "images/surprise-me-home.jpg", alt: "Home screen with the Surprise me! call to action and category shortcuts" },
      { src: "images/surprise-me-quiz.jpg", alt: "Quiz asking what vibe the user wants for tonight" },
      { src: "images/surprise-me-match-result.jpg", alt: "Match reveal screen recommending a specific spot" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "Every so often I give myself a rapid-prototyping brief: pick a topic, use AI to turn it into a rough prompt or user story, and see how far I can take it in a short burst — sometimes it's a full app, sometimes just a single interaction or a piece of UX research. This one started from noticing the same \"surprise\" mechanic showing up everywhere: Too Good To Go's mystery bags, mystery flight deals, blind book dates. Nobody had bundled that mechanic across categories into one place, so Surprise Me became an experiment in doing exactly that — and, just as importantly, a chance to practice UI execution specifically, styled after Uber Eats' confident, card-heavy visual language. Note: this is a solo practice project, and usability testing was intentionally skipped since the goal this round was UI polish, not validation."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "The \"research\" here was really pattern-spotting: identifying what makes a surprise-based product satisfying rather than anxiety-inducing — a bit of guided input so the outcome feels considered rather than random, a countdown-style reveal, and a low-stakes way to back out. I used AI to turn that observation into a rough user story: someone undecided on a Friday night who wants a decision made for them within a few taps rather than an evening of scrolling."
          },
          {
            heading: "Define",
            text: "I scoped the idea around four categories that could each host their own flavor of \"mystery\" — Social, Boxes, Adventure, and Events — plus a core quiz flow that narrows a vague mood into a specific recommendation in three questions or fewer. Everything else, like browsing, saving favorites, and a profile, was there to support that one core loop rather than compete with it."
          },
          {
            heading: "Ideate",
            text: "I sketched the flow AI-first: describing the screens I wanted — a homepage anchored by one dominant \"Surprise me!\" call to action, a lightweight three-question quiz, a reveal screen styled like a results page rather than a receipt — and iterating on what came back. Uber Eats was the explicit visual reference: bold black category headers, rounded white content sheets floating over a dark canvas, pill-shaped filter tags, since the point of this round was pushing my own UI execution, not just my UX thinking."
          },
          {
            heading: "Prototype",
            text: "I built the core loop end to end — Home, the three-question quiz, and a match reveal with a \"Let's Go!\" CTA — alongside supporting screens like a category list view, a map view, and a full profile section. I stopped once the flow held together end to end rather than pushing into a testing round, since the goal was UI practice within a short, self-contained sprint rather than a validated product.",
            images: [
              { src: "images/surprise-me-categories-list.jpg", alt: "Categories list view with filters for social, boxes, adventure, and events" },
              { src: "images/surprise-me-categories-map.jpg", alt: "Categories map view showing the same results spatially" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "Surprise Me takes the mystery-box format out of food delivery and applies it everywhere — a single app where \"I don't know what I want tonight\" becomes a specific recommendation in three taps. A solo UI-practice project, styled after Uber Eats.",
        stages: [
          {
            heading: "How It Works",
            text: "From the home screen, a user can browse Social, Boxes, Adventure, and Events recommendations directly, or tap the single dominant \"Surprise me!\" card to hand the decision over entirely. That routes into a three-question quiz — starting with tonight's ideal vibe, from low-key and intimate to high-energy and social to competitive and fun — before landing on a match reveal styled like a results screen: one recommendation, its category, price range, distance, and rating, with a \"Let's Go!\" button to commit or a back arrow to reroll.",
            images: [
              { src: "images/surprise-me-quiz.jpg", alt: "Quiz asking what vibe the user wants for tonight" },
              { src: "images/surprise-me-match-result.jpg", alt: "Match reveal screen recommending a specific spot" }
            ]
          },
          {
            heading: "Browse & Profile",
            text: "Beyond the surprise mechanic, the app supports normal browsing: a list view of nearby spots with quick filters, and a map view of the same results for anyone who'd rather see things spatially. A full profile section rounds it out — basic details, contact info, and a settings and preferences menu — the parts of the app that exist to support the core loop rather than the point of the exercise.",
            images: [
              { src: "images/surprise-me-profile-edit.jpg", alt: "Profile edit screen with basic and contact details" },
              { src: "images/surprise-me-profile-menu.jpg", alt: "Profile menu with settings, preferences, and account options" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "Inside Surprise Me, a user can:",
            list: [
              "<strong>Tap the Surprise me! card</strong> to hand tonight's decision over completely.",
              "<strong>Answer a three-question quiz</strong> — starting with vibe — to narrow down a match.",
              "<strong>Get a single match reveal</strong> with category, price, distance, and rating, plus the option to reroll.",
              "<strong>Browse Social, Boxes, Adventure, and Events</strong> recommendations directly, without the quiz.",
              "<strong>Switch between a list view and a map view</strong> of nearby spots.",
              "<strong>Save favorites and manage a profile</strong> with contact details and preferences."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ladelerntool",
    title: "LadeLernTOOL — E-Learning Course Design for EV Charging Infrastructure",
    date: "2024 — Now",
    tags: ["E-Learning Design", "Interaction Design", "Illustration Direction"],
    brief: "A repeatable e-learning production system for Germany's national EV charging-infrastructure platform — turning dense regulatory and technical topics into interactive, illustrated courses used by professionals nationwide.",
    liveUrl: "https://www.ladelerntool.de/",
    gradient: "g5",
    tileImage: "images/ladelerntool-mehrparteien-module-rechtliche-grundlagen.jpg",
    gallery: ["Interactive course modules", "Illustrated learning scenarios", "Certificates & progress tracking"],
    galleryImages: [
      { src: "images/ladelerntool-mehrparteien-module-rechtliche-grundlagen.jpg", alt: "Legal-basics module for the Charging at Multi-Party Buildings course" },
      { src: "images/ladelerntool-lkw-depot-module.jpg", alt: "Basics module for the Truck Charging Infrastructure at Depots course" },
      { src: "images/ladelerntool-bidirektional-exercise.jpg", alt: "Drag-and-drop matching exercise sorting examples into V2H, V2G, and V2L" }
    ],
    caseStudy: [
      {
        heading: "Context",
        text: "As part of my role in product development and e-learning at NOW GmbH, working under the Nationale Leitstelle Ladeinfrastruktur — Germany's national coordination body for EV charging infrastructure, under the Federal Ministry for Transport — I've helped design and ship four compact courses on LadeLernTOOL, the platform's free e-learning tool: charging at multi-party residential buildings, bidirectional charging (V2H/V2G/V2L), the GEIG and EPBD building regulations, and truck charging infrastructure at logistics depots. Each course tackles genuinely dense material — property law, grid technology, construction regulation — for an audience ranging from municipal decision-makers and building administrators to logistics companies and energy providers. What ties the four together isn't the subject matter, which changes completely each time, but the production system behind them: the same process, refined and repeated."
      },
      {
        heading: "Process",
        stages: [
          {
            heading: "Empathize",
            text: "Every course starts the same way: research grounded in NOW GmbH's own technical literature and direct conversations with the in-house subject-matter experts who actually work the policy or engineering side of each topic — grid engineers for bidirectional charging, legal specialists for GEIG and EPBD. Since none of these topics are ones I'd necessarily have expertise in going in, this phase is as much about building my own working understanding of the material as it is about identifying what a learner — a WEG administrator, a fleet operator, a municipal planner — actually needs to walk away knowing."
          },
          {
            heading: "Define",
            text: "From that research I draft a first structural outline: what the course covers, how it's split into modules, and where a learner's understanding needs to build in a specific order — someone can't meaningfully engage with GEIG exemptions, for instance, before understanding who the law applies to at all. That structure goes back to in-house experts for review, sometimes twice, specifically to catch anything a subject-matter expert would flag as incomplete or technically off before any design work begins."
          },
          {
            heading: "Ideate",
            text: "Once the structure holds, the instructional design work is mine: deciding where a hotspot reveals extra detail instead of cluttering the main flow, where a flip card tests recall before giving away the answer, where a slideshow paces out a multi-step process, and where a quiz needs to interrupt the reading rather than wait until the end. The bidirectional-charging course's drag-and-drop exercise — sorting real-world examples into V2H, V2G, and V2L — is a direct example: an interaction chosen specifically because reading a definition of each term doesn't test whether someone can actually apply it."
          },
          {
            heading: "Prototype",
            text: "With text and interaction structure done, our external illustration Dienstleister produces a first pass of visuals for each module. This is where my background in media design, illustration, and animation does the most work — I review that first pass before my supervisor ever sees it, and most of the critique on any given course comes from me: reworking a composition that doesn't read at a glance, flagging where an illustration technically contradicts the text beside it, or pushing for a visual metaphor that actually clarifies the concept instead of just decorating the page.",
            images: [
              { src: "images/ladelerntool-geig-epbd-module.jpg", alt: "Das GEIG und die EPBD module, illustrating the connection between EU and German building law" },
              { src: "images/ladelerntool-bidirektional-module-intro.jpg", alt: "Bidirektionales Laden module intro, illustrating V2H, V2G, and V2L use cases in one scene" }
            ]
          },
          {
            heading: "Test",
            text: "That critique cycle repeats for two more iterations before a course is considered visually done and goes to in-house experts for final sign-off — content and illustrations both. Once approved, I build the closing test and design the certificate, plus the launch video and LinkedIn promotional material announcing the course.",
            images: [
              { src: "images/ladelerntool-bidirektional-chapter-list.jpg", alt: "Chapter navigation for the Bidirektionales Laden course, tracking completed sections" }
            ]
          }
        ]
      },
      {
        heading: "Solution",
        text: "LadeLernTOOL now runs four free, certificate-bearing courses on the same production pipeline — each translating a genuinely different regulatory or technical topic into a structured, illustrated, interactive module for professionals who need to act on it, not just read about it.",
        stages: [
          {
            heading: "How It Works",
            text: "A learner registers, picks a course, and works through it module by module — reading paced against hotspots, flip cards, slideshows, and applied exercises rather than long unbroken text — before finishing with a short test and a downloadable certificate. Every course card shows its time estimate, module count, and completion status up front, and a direct contact link puts a real person one click away if a learner has a question the course doesn't answer.",
            images: [
              { src: "images/ladelerntool-lkw-depot-course-card.jpg", alt: "LKW-Ladeinfrastruktur am Depot course overview card with duration and module count" },
              { src: "images/ladelerntool-mehrparteien-course-card.jpg", alt: "Laden an Mehrparteienhäusern course overview card, showing 4 of 4 modules completed" }
            ]
          },
          {
            heading: "Beyond Launch",
            text: "Publishing isn't the finish line. I own the email inbox for each course, which means I'm also the one triaging incoming user feedback, deciding alongside in-house experts whether a reported issue needs an actual content change, and folding approved fixes back into the live course. I keep a running list of requests for new material too — regulations and technology both keep moving, so a course that was accurate at launch needs someone actively checking it still is. That ongoing-ownership piece is also what made the case for treating these four courses as one continuous practice rather than four separate one-off projects.",
            images: [
              { src: "images/ladelerntool-geig-epbd-course-card.jpg", alt: "LadeLernTOOL kompakt: Das GEIG & die EPBD course overview card" }
            ]
          },
          {
            heading: "What You Can Do",
            text: "On LadeLernTOOL, a learner can:",
            list: [
              "<strong>Complete free, certificate-bearing courses</strong> on charging at multi-party buildings, bidirectional charging, GEIG/EPBD building law, and truck depot infrastructure.",
              "<strong>Learn through interactive elements</strong> — hotspots, flip cards, slideshows, and applied exercises like the V2H/V2G/V2L matching task — instead of static text alone.",
              "<strong>Track progress module by module</strong> on a persistent completion dashboard and pick up exactly where they left off.",
              "<strong>Reach a real contact person</strong> for every course directly from its overview page.",
              "<strong>Rely on continuously maintained content</strong>, updated as regulations and technology evolve rather than published once and left static."
            ]
          }
        ]
      }
    ]
  }
];
