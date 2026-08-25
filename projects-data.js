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
    id: "mpact-5",
    title: "MPact 5 — Berlin Impact Hub",
    date: "2025",
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
    id: "career-hub",
    title: "The Career Hub — Interactive Career Navigation Workspace",
    date: "2025",
    tags: ["Interaction Design", "Project Management", "Physical-Digital"],
    brief: "A physical touch-desk that bridges student portfolios, market realities, and legal frameworks through a live knowledge graph.",
    liveUrl: "#",
    gradient: "g3",
    gallery: ["Knowledge graph interface", "Three-column workspace", "Mobile sync footer"],
    caseStudy: [
      {
        heading: "Context",
        text: "University career guidance is often generic and disconnected from the realities of local job markets, legal frameworks, and a student's actual portfolio. Students need localized, actionable guidance, not one-size-fits-all advice."
      },
      {
        heading: "My role & process",
        text: "As Team Lead, Project Manager, and Interaction Designer, I steered the project's strategic vision, coordinated cross-functional workflows, and designed the physical-to-digital framework — structuring the hardware's spatial hierarchy (timeline anchor, central workspace, action footer), building the categorical color-coding system, and pioneering an in-place text-reveal interaction that avoids disruptive pop-ups.",
        image: "Interactive touch-desk hardware"
      },
      {
        heading: "The outcome",
        text: "The Career Hub integrates AI and expert mentorship into a single interactive touch-desk, syncing career paths, legal guidance, and portfolio strategy directly to a student's personal dashboard. Built as a university project."
      }
    ]
  },
  {
    id: "sustainyou",
    title: "SustainYOU — Ecowise Living",
    date: "2024",
    tags: ["UX Design", "AI Integration", "Sustainability"],
    brief: "An AI-assisted sustainability campaign that helps people set, track, and achieve personalized environmental goals.",
    liveUrl: "#",
    gradient: "g4",
    gallery: ["Goal-setting quiz", "Challenge dashboard", "Community sharing"],
    caseStudy: [
      {
        heading: "Context",
        text: "Sustainable living advice is often generic and unmotivating, and most people don't know where to start or how to stay engaged over time."
      },
      {
        heading: "My role & process",
        text: "Designed in Figma, SustainYOU uses a quick quiz to tailor sustainability goals to a user's lifestyle, then surfaces curated resources, local community groups, and food tips matched to those goals. AI keeps the guidance and challenges personalized as the user's habits evolve.",
        image: "Personalized goal dashboard"
      },
      {
        heading: "The outcome",
        text: "Users progress through fun challenges, earn badges, and unlock new \"powers,\" while sharing milestones within a supportive community — turning individual sustainability action into something social and sustained. Built as a university project."
      }
    ]
  },
  {
    id: "ladelerntool",
    title: "LadeLernTool — E-Learning for EV Infrastructure",
    date: "2024 — Now",
    tags: ["E-Learning", "Product Design", "HCI"],
    brief: "An interactive learning platform teaching users how to understand and use electric vehicle charging infrastructure.",
    liveUrl: "#",
    gradient: "g5",
    gallery: ["Interactive course modules", "Progress dashboard", "Charging infrastructure explainer"],
    caseStudy: [
      {
        heading: "Context",
        text: "Electric vehicle charging infrastructure is a complex, fast-evolving topic, and most educational content aimed at the public is either too technical or too shallow to build real understanding."
      },
      {
        heading: "My role & process",
        text: "Working within NOW GmbH's product development team, I helped design and build interactive courses that make charging infrastructure accessible and engaging, applying human-computer interaction principles to balance usability with real educational depth.",
        image: "Course interaction design"
      },
      {
        heading: "The outcome",
        text: "The platform helps users understand and confidently use charging infrastructure, supporting Germany's sustainable energy transition — ongoing work as part of my current role."
      }
    ]
  },
  {
    id: "the-cut-club",
    title: "The CUT CLUB",
    date: "2024",
    tags: ["UX Design", "AI Integration", "Service Design"],
    brief: "A booking and client-management platform for hairstylists, grounded in in-depth user interviews.",
    liveUrl: "#",
    gradient: "g6",
    gallery: ["Stylist portal", "Client booking flow", "Smart scheduling"],
    caseStudy: [
      {
        heading: "Context",
        text: "Independent hairstylists juggle scheduling, client history, and inventory across disconnected tools, while clients want a simple way to book and personalize their visits."
      },
      {
        heading: "My role & process",
        text: "Built on in-depth user interviews with stylists and clients, The CUT CLUB provides dual interfaces — one for stylists, one for clients — with AI-powered booking that optimizes scheduling for both sides, plus inventory tracking and detailed client history.",
        image: "Dual-interface booking flow"
      },
      {
        heading: "The outcome",
        text: "The result is a single platform that personalizes the client experience while giving stylists smoother day-to-day operations. Built as a university project."
      }
    ]
  },
  {
    id: "kikos-journey",
    title: "Kiko's Journey — Engaging Learning Through Play",
    date: "2023",
    tags: ["Game Design", "Illustration", "Interaction Design"],
    brief: "A hand-drawn game teaching self-reflection through playful, research-driven level design.",
    liveUrl: "#",
    gradient: "g7",
    gallery: ["Hand-drawn character art", "Reflective level design", "Custom soundtrack"],
    caseStudy: [
      {
        heading: "Context",
        text: "Self-reflection is a vital but hard-to-teach skill, and most educational games treat it abstractly rather than making it something players actually practice."
      },
      {
        heading: "My role & process",
        text: "Built in GameMaker (GML) with HTML integration, Kiko's Journey combines hand-drawn Procreate visuals, a custom soundtrack, and research-driven level design to create a playful space where players observe and reflect on their own emotions and actions.",
        image: "Hand-drawn level art"
      },
      {
        heading: "The outcome",
        text: "Iterative user testing shaped the gameplay throughout development, resulting in a game that makes introspection feel like part of the experience rather than a lesson bolted on top. Built as a bachelor's project."
      }
    ]
  },
  {
    id: "eco-design",
    title: "Eco-Design — Making Sustainability Legible",
    date: "2022",
    tags: ["Sustainability", "Visual Design", "HCI"],
    brief: "A smartphone interface that turns everyday app usage into visible, understandable CO₂ impact.",
    liveUrl: "#",
    gradient: "g8",
    gallery: ["App icon system", "CO₂ data visualization", "User testing"],
    caseStudy: [
      {
        heading: "Context",
        text: "The CO₂ impact of everyday digital habits — email, Instagram, YouTube — is invisible to most users, making it hard to connect individual actions to their environmental cost."
      },
      {
        heading: "My role & process",
        text: "After researching the emissions behind common digital actions, I designed a smartphone interface using custom app icons (Adobe Illustrator) and laid out the full concept in Adobe InDesign, translating abstract emissions data into an intuitive, everyday interaction.",
        image: "Custom icon system"
      },
      {
        heading: "The outcome",
        text: "User testing confirmed the approach worked: people found the CO₂ data more understandable and actionable once it was tied to icons and apps they already used every day. Built as a university project."
      }
    ]
  }
];
