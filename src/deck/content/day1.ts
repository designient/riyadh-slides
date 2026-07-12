import type { ManifestSlide as Slide } from "../types";

export const day1: Slide[] = [

// ── DAY 1 DIVIDER ──────────────────────────────────────────────
{ type: "dayDivider", dayNumber: 1,
  dayLabel: "Day 1 of 5 · Riyadh, KSA · 12 July 2026",
  title: "Foundations · Heuristics\n+ FigJam Discovery",
  theme: "Calibrate the cohort. Frame the problem. Then design.",
  sessions: [
    "Welcome · Orientation + Calibration  (opens the morning)",
    "S1 · What is UX Design?  9:00 - 10:30",
    "S2 · UX Principles + Heuristics  10:45 - 12:15",
    "S3 · Introduction to FigJam  1:00 - 2:15",
    "S4 · FigJam Workshop + Responsible Threads  2:15 - 3:00",
  ] },

// ══ DAY 1 · WELCOME & ORIENTATION (7) ═══════════════════════════
{ type: "cover", day: 1, session: 1, time: "9:00 - 3:00",
  title: "Welcome to the\n{hl}UX Masterclass{/hl}",
  subtitle: "Riyadh, July 2026 · Five days of practitioner-focused UX" },

{ type: "facilitator", day: 1, session: 1, sessionTitle: "Welcome & Orientation",
  eyebrow: "Your Facilitator",
  name: "Sameer Ul Haque",
  tagline: "UX Practitioner & Corporate Trainer · MIT AI/ML Alumnus",
  bio: [
    "I believe design and technology should make life feel easier, smarter, and more human. That belief has driven 14 years of product and UX work across 105+ projects for global brands including Lenovo and Decathlon.",
    "Today I lead Product and Growth at Gamana. Prompt engineering is a real superpower I use every day with Cursor, Bolt, and Perplexity to prototype faster and ship sharper.",
    "As an MIT AI/ML alumnus, I have coached 550+ designers, keynoted the National UX Summit, and am recognised as a Top 1% mentor on ADPList globally.",
  ],
  stats: [
    { value: "14+", label: "Years as practitioner" },
    { value: "105+", label: "Projects for global brands" },
    { value: "550+", label: "Designers trained globally" },
    { value: "Top 1%", label: "ADPList mentor" },
    { value: "4.8★", label: "Average trainer rating" },
  ],
  photo: "/facilitator/sameer.png" },

{ type: "reference", day: 1, session: 1, sessionTitle: "Welcome & Orientation",
  eyebrow: "Credentials & Impact",
  title: "Education, Certifications & Notable Placements",
  head: ["Credential", "Focus", "Alumni Placements"],
  rows: [
    ["MIT Professional Education", "AI & Machine Learning", "Accenture"],
    ["Stanford University", "Design Thinking: Insights to Viability", "Lenovo"],
    ["Adobe Certified Associate", "Creative Tools Certification", "Salesforce"],
    ["BrainStation", "Diploma in UX Design", "Adobe · TCS · Infosys · Global SaaS · Fintech"],
  ],
  note: "Alumni trained under Sameer Ul Haque have secured positions and projects at leading organisations across MENA, India, and global markets." },

{ type: "discussion", day: 1, session: 1, sessionTitle: "Welcome & Orientation",
  label: "Round the Room",
  question: "Your name, your role, and {hl}one thing you want to leave with{/hl} after this week",
  hint: "60 seconds each · facilitator notes themes on FigJam for the week" },

{ type: "preCourseAssessment", day: 1, session: 1, sessionTitle: "Welcome & Orientation",
  eyebrow: "Pre-Course Assessment",
  title: "Help Us Calibrate\nthe Week Ahead",
  intro: "Before we dive in, take a few minutes to complete a short multiple-choice assessment. Your responses help me understand where this cohort is strong and where we should go deeper.",
  bullets: [
    "15 multiple-choice questions — no right or wrong answers",
    "Takes approximately 5 minutes on your phone or laptop",
    "Covers UX fundamentals, research methods, and AI tool familiarity",
    "Results shape today's pace and which topics get more depth",
  ],
  duration: "~5 minutes",
  qrImage: "/pre-assessment-qr.JPG",
  footnote: "Complete now, before Session 2. Responses are recorded by our team and shared internally with SDAIA managers and Sameer Ul Haque to calibrate the programme." },

{ type: "theory", day: 1, session: 1, sessionTitle: "Welcome & Orientation",
  eyebrow: "Built for This Cohort",
  title: "How This Week Is Tailored for You",
  layout: "cards3",
  body: [
    { n: "01", t: "Practitioner pace",
      b: "Familiar tools and processes are compressed. More time goes to applied work, critique, and shipping — not re-learning basics you already know." },
    { n: "02", t: "Accessibility built in", tone: "navy",
      b: "Inclusive design is not a Day 5 afterthought. You will audit real components on Day 4 and carry accessibility into your capstone rubric." },
    { n: "03", t: "Responsible AI",
      b: "Data privacy, ethics, and governance when using AI design tools — woven through the week, with a dedicated block on Day 4." },
  ],
  footnote: "This curriculum was shaped by your team's feedback: less tool teaching, more depth on accessibility and responsible AI." },

{ type: "framework", day: 1, session: 1, sessionTitle: "Welcome & Orientation",
  eyebrow: "The Capability Shift",
  title: "UX Designer 2030",
  kind: "diagram",
  data: {
    diagram: "skillsWheel",
    hub: "UX Designer\n2030",
    intro: "Technical craft is the entry ticket. Translational skill is the advantage.",
    spokes: [
      { t: "Problem Framing", d: "Define the right citizen problem before AI answers." },
      { t: "AI & Data Fluency", d: "Use AI as leverage — not a black box you cannot explain." },
      { t: "Ethical Governance", d: "Privacy, bias, and human oversight in government systems." },
      { t: "Inclusive Judgment", d: "Accessibility as a design constraint, not a checklist." },
      { t: "Executive Storytelling", d: "Turn research into decisions stakeholders can act on." },
      { t: "Facilitation & Alignment", d: "Run workshops that move teams, not just fill boards." },
      { t: "Value Realization", d: "Ship outcomes — handoff, proof, and a career-ready case." },
    ],
  },
  note: "AI can generate screens. Your advantage is framing, judgment, and trust." },

{ type: "theory", day: 1, session: 1, sessionTitle: "Welcome & Orientation",
  eyebrow: "Cohort Challenge",
  title: "Choose One · We Build It Together All Week",
  layout: "cards5",
  body: [
    { n: "01", t: "AI-Assisted Citizen Service Portal",
      b: "Redesign a multi-step government permit flow where AI pre-fills forms from uploaded documents — humans approve every decision.",
      tag: "AI workflow · A11y · Privacy · Governance" },
    { n: "02", t: "Inclusive Public Benefits Onboarding", tone: "navy",
      b: "Design a wallet or benefits enrollment flow for citizens with mixed digital literacy — verify identity without excluding vulnerable users.",
      tag: "AI workflow · A11y · Privacy · Governance" },
    { n: "03", t: "Responsible AI Copilot for Civil Servants",
      b: "An internal drafting tool that helps staff respond to citizen inquiries — with strict guardrails on what data can enter an LLM.",
      tag: "AI workflow · A11y · Privacy · Governance" },
    { n: "04", t: "Accessible Open-Data Discovery Portal",
      b: "Help citizens find and request government datasets — with AI-generated descriptions that must be verified before publish.",
      tag: "AI workflow · A11y · Privacy · Governance" },
    { n: "05", t: "AI-Guided Public Health Access Navigator", tone: "navy",
      b: "A triage-style service that routes users to the right care entry point — explicitly not diagnosing, always escalating.",
      tag: "AI workflow · A11y · Privacy · Governance" },
  ],
  footnote: "Dot-vote in FigJam now · one topic wins · all discovery, research, Figma work, accessibility audit, and capstone use this shared brief" },

// ══ DAY 1 · SESSION 1 · What is UX Design? (13) ══════════════════
{ type: "cover", day: 1, session: 1, time: "9:00 - 10:30",
  title: "What is\n{hl}UX Design?{/hl}",
  subtitle: "Foundations · Roles · The Design Process" },

{ type: "statement", day:1, session:1, sessionTitle:"What is UX Design?",
  quote: "\"Design is not what it looks like.\n{hl}Design is how it works.{/hl}\"",
  attribution: "Steve Jobs · Every concept this session leads back to this." },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Defining the Discipline", title:"What UX Actually Is",
  layout:"bullets",
  body:[
    "<b>UX is the totality of a person's experience with a product or service</b>, before, during, and after use. Not just the moment of interaction.",
    "It spans <b>feelings, perceptions, and behavioural responses</b>. How someone feels using something is as important as what they do with it.",
    "UX covers <b>digital platforms, physical products, services, and spaces</b>. A hospital waiting room has UX. So does an ATM flow.",
    "The discipline is three things: <em>researching</em> what users need, <em>designing</em> for those needs, and <em>testing</em> whether you got it right.",
    "<b>UX is not a deliverable.</b> Wireframes are deliverables. UX is the outcome. The distinction matters constantly.",
  ] },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Foundation", title:"Three Things Every Good Experience Must Be",
  layout:"cards3",
  body:[
    { icon:"useful", n:"01", t:"Useful",
      b:"Does it solve a real problem the user actually has? Without usefulness, the visual polish and smooth animation are decoration on top of nothing." },
    { icon:"usable", n:"02", t:"Usable", tone:"navy",
      b:"Can someone reach their goal without frustration or confusion? Usability is measured through testing, not assumed through intuition." },
    { icon:"desirable", n:"03", t:"Desirable",
      b:"Do people actually want to use it? Aesthetics, trust, and tone separate a product people tolerate from one they recommend." },
  ],
  footnote:"Peter Morville's full honeycomb adds Findable, Accessible, Credible, Valuable. These three are the irreducible core." },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Most Common Confusion", title:"UX vs UI · Where One Ends and the Other Begins",
  kind:"compare",
  data:{
    bridge:"UI lives inside UX",
    left:{ tone:"navy", label:"UX", sub:"User Experience",
      def:"The logic, structure, and flow. Does the product make sense? Can a user achieve their goal without friction?",
      items:["User research and interview methodology","Information architecture and navigation","Wireframes and interaction logic","Usability testing and iteration","The experience before and after the screen"] },
    right:{ tone:"gold", label:"UI", sub:"User Interface",
      def:"The visual layer. Typography, colour, spacing, components, iconography, animation. Does it look and feel right?",
      items:["Colour systems and visual hierarchy","Typography and type scale","Component design and design systems","Animation and microinteraction design","Visual design for screens and touchpoints"] },
  },
  note:"You can have great UI and terrible UX. The interior can look beautiful while the floor plan makes no sense." },

{ type: "example", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"In Practice", title:"The Same Checkout Flow · Two Very Different Experiences",
  mode:"split",
  panels:{
    negative:{ heading:"Bad UX · E-commerce checkout", items:[
      { l:"Step 1 of 8", t:"<b>Forced account creation</b> before you can see your cart total. You must register to proceed." },
      { l:"Step 7 of 8", t:"<b>Shipping cost revealed</b> for the first time, 40% above expectation. Trust collapses." },
      { l:"Error state", t:"<b>\"Something went wrong. Please try again.\"</b> No indication of what failed or what to do." },
    ]},
    positive:{ heading:"Good UX · Same product, better design", items:[
      { l:"Step 1 of 3", t:"<b>Guest checkout available</b> immediately. Progress visible. Total shown from the first screen." },
      { l:"Post-purchase", t:"<b>Account creation offered after purchase</b>, order pre-filled. Opt in, not opt out." },
      { l:"Error state", t:"<b>\"Your card was declined.\"</b> Specific reason, next action, alternative payment shown." },
    ]},
  },
  takeaway:"Same product. Same technology. Completely different experience, because someone asked what the user needs at each step." },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Framework", title:"The Double Diamond · Diverge to Converge, Twice",
  kind:"diagram", data:{ diagram:"doubleDiamond",
    labels:[
      { t:"Discover", d:"Research widely. Gather without filtering. The goal is breadth of insight." },
      { t:"Define", d:"Narrow to the core. Find the real problem from what the research tells you." },
      { t:"Develop", d:"Generate options. Prototype multiple solutions. Explore before committing." },
      { t:"Deliver", d:"Test, refine, and ship the best solution. Then loop back with new learnings." },
    ] } },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"What You'll Build This Week", title:"The Case Study Thread · Day by Day",
  kind:"diagram", data:{ diagram:"weekArc",
    nodes:[
      { n:"1", day:"TODAY", t:"Discovery Canvas", d:"FigJam research board. HMW questions. First persona sketch." },
      { n:"2", day:"Day 2", t:"Research + JTBD", d:"JTBD-grounded persona. Experience map. AI-synthesised findings." },
      { n:"3", day:"Day 3", t:"Wireframes + System", d:"Figma wireframes. Variables. Component foundations." },
      { n:"4", day:"Day 4", t:"Responsible Design", d:"Accessibility applied. AI governance. Prototype with constraints." },
      { n:"5", day:"Day 5", t:"Handoff + Portfolio", d:"Dev-ready file. Portfolio case study framing. Certificate." },
    ] },
  note:"Every exercise this week feeds one deliverable. You leave with a complete, portfolio-ready UX case study." },

{ type: "statement", day:1, session:1, sessionTitle:"What is UX Design?",
  quote: "\"{hl}Good design is invisible.{/hl}\nBad design is everywhere.\"",
  attribution: "Widely attributed · Your job this week is to learn to see what's invisible." },

{ type: "discussion", day:1, session:1, sessionTitle:"What is UX Design?",
  label:"Open Discussion",
  question:"Think of the last digital experience that {hl}frustrated{/hl} you.\nWhat broke down?\nWhat would good have looked like?",
  hint:"2 minutes with the person next to you. Then we hear three responses." },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Week Ahead", title:"What This Week Builds Toward",
  layout:"cards2",
  body:[
    { tone:"gold", t:"By end of Day 2", b:"Real user insight: a JTBD-grounded persona, an experience map, and AI-synthesised research to design from. Not assumptions. Data." },
    { tone:"gold", t:"By end of Day 3", b:"A Figma file with wireframes on a real design system: variables, auto layout, components. Design that scales, not one-off screens." },
    { tone:"navy", t:"By end of Day 4", b:"Accessibility and AI governance applied to your work. A prototype built with responsible-design constraints, not retrofitted." },
    { tone:"navy", t:"By end of Day 5", b:"A developer-ready handoff file. A portfolio case study narrative. A certificate. One week. One complete, ownable artefact." },
  ],
  footnote:"The throughline across all five days is one case study, built session by session, grounded in real research." },

{ type: "reference", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Reference · Keep This Open", title:"UX Roles + Tools · Your Field Map",
  head:["Role","Primary Responsibility","Core Tools in This Training"],
  rows:[
    ["UX Researcher","User interviews, observation, synthesis into insight","FigJam, Claude AI, Perplexity Pro"],
    ["UX / Product Designer","Wireframes, user flows, interaction logic","Figma, FigJam, Claude AI"],
    ["UI Designer","Visual language, component libraries, tokens","Figma (Variables, Dev Mode)"],
    ["Interaction Designer","Behaviour design, motion, microinteractions","Figma (Prototype, Smart Animate)"],
    ["Information Architect","Content structure, taxonomy, navigation","FigJam (card sorting, affinity maps)"],
    ["UX Writer","Interface language, errors, onboarding, microcopy","Figma (annotation layers)"],
    ["UX Strategist","Business alignment, experience vision","FigJam, Perplexity Pro"],
  ],
  note:"Every tool in the third column is used in this training. Figma and FigJam open this afternoon." },

{ type: "wrap", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"UX is the whole experience", b:"Research, logic, emotion, and visual design are all part of it. The screen is just where it surfaces. It starts before the first tap." },
    { n:"02", t:"The process is circular", b:"There is no finish line, only the next research question informed by what you just learned. Testing begins the next round." },
    { n:"03", t:"Every role in this room does UX work", b:"The title is secondary. Anyone whose decisions affect a user's experience is doing UX. This week makes that work intentional." },
  ],
  next:"S2 · UX Principles + Heuristics (10:45) · The evaluative framework you'll apply to any product in under 30 minutes." },

// ══ DAY 1 · SESSION 2 · UX Principles + Heuristics (9) ═══════════
{ type: "cover", day:1, session:2, time:"10:45 - 12:15",
  title:"UX Principles\n+ {hl}Heuristics{/hl}",
  subtitle:"User-Centered Design · Nielsen's 10 · Running an Audit" },

{ type:"statement", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  quote:"\"Good design is invisible.\n{hl}The rules that make it invisible are not.{/hl}\"",
  attribution:"This session makes the rules explicit and usable." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Core Philosophy", title:"What is User-Centered Design?",
  layout:"bullets",
  body:[
    "<b>UCD puts the user at the centre of every decision</b>, from first research question to final pixel. The user is consulted, not assumed.",
    "It is <b>iterative</b>. You design, test with real people, learn, and refine, in repeated loops rather than one straight line.",
    "Decisions are grounded in <em>evidence</em>, not the loudest opinion in the room or the preference of whoever has the most seniority.",
    "The opposite is <b>designer-centred or stakeholder-centred design</b>, building for your own taste or the boss's, then hoping users adapt.",
    "UCD is a posture before it is a process: <b>assume you are not the user</b>, and go find out who is.",
  ] },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Fastest Evaluation Method", title:"Introduction to Heuristic Evaluation",
  layout:"split",
  body:{
    left:[
      "A <b>heuristic evaluation</b> is an expert review of an interface against a set of established usability principles.",
      "It needs <b>no users and no budget</b>. One trained evaluator can audit a product in under an hour.",
      "It catches the <em>obvious, systemic problems</em> before you spend money testing with real people.",
    ],
    right:{ tone:"gold", t:"Why start here?",
      b:"Heuristics are the single highest-leverage skill a non-designer can learn. By the end of this session, anyone in this room can look at any product and name specifically what is wrong with it and why." },
  } },

{ type:"reference", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Canon", title:"Nielsen's 10 Usability Heuristics",
  head:["#","Heuristic","What It Means"],
  rows:[
    ["1","Visibility of system status","Always keep users informed about what is happening, through timely feedback."],
    ["2","Match system and real world","Speak the user's language, with familiar concepts, not internal jargon."],
    ["3","User control and freedom","Provide a clear exit, undo, and redo. Let users escape mistakes easily."],
    ["4","Consistency and standards","Follow platform and product conventions. Don't make users relearn."],
    ["5","Error prevention","Design so the error can't happen, better than a good error message."],
    ["6","Recognition over recall","Make options visible. Don't force users to remember information."],
    ["7","Flexibility and efficiency","Let novices and experts both work their own way. Add accelerators."],
    ["8","Aesthetic and minimalist design","Every extra element competes with the relevant ones. Cut noise."],
    ["9","Help users with errors","Plain-language errors that say what went wrong and how to fix it."],
    ["10","Help and documentation","When help is needed, make it findable and task-focused."],
  ] },

{ type:"example", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Heuristics In Action", title:"Three Heuristics · One Checkout Flow",
  mode:"annotated",
  panels:[
    { l:"H1 · Visibility of status", t:"<b>A file upload with a live progress bar</b> respects status. A spinner with no end violates it." },
    { l:"H5 · Error prevention", t:"<b>Disabling Submit until the form is valid</b> prevents the error. Greying out unavailable dates stops impossible bookings." },
    { l:"H9 · Help users recover", t:"<b>\"That email is already registered. Sign in instead?\"</b> with a direct link recovers gracefully. \"Error 400\" abandons the user." },
  ],
  takeaway:"Most everyday frustration traces to a small set of heuristics. Name the principle, name the fix." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Method", title:"Running a Heuristic Audit",
  layout:"bullets",
  body:[
    "<b>Step 1 · Define the scope.</b> Pick one flow, for example sign-up or checkout, not the entire product at once.",
    "<b>Step 2 · Walk the flow as a user would,</b> screen by screen, noting every friction point against the 10 heuristics.",
    "<b>Step 3 · Log each issue:</b> which heuristic it violates, where it happens, and a short description of the problem.",
    "<b>Step 4 · Rate severity</b> from 0 (cosmetic, fix if convenient) to 4 (catastrophe, blocks the task, must fix before release) so the team knows what to fix first.",
    "<b>Step 5 · Recommend a fix</b> for each issue. An audit without recommendations is a complaint, not a deliverable.",
  ] },

{ type:"exercise", day:1, session:2, tool:"figjam",
  task:"Run a {hl}Heuristic Audit{/hl}",
  sub:"Pick one app you use daily. Score it against 3 heuristics of your choice.",
  minutes:20,
  deliverable:"For each: the heuristic, the issue, a severity 0 to 4, and your recommended fix, on FigJam stickies." },

{ type:"wrap", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"UCD is a posture, then a process", b:"Assume you are not the user, then go find out who is. Evidence over opinion, in iterative loops, never one straight line." },
    { n:"02", t:"Heuristics are your fastest tool", b:"Ten principles let anyone audit any product in under an hour, with no users and no budget. The highest-leverage skill here." },
    { n:"03", t:"An audit ends in recommendations", b:"Logging problems is half the job. Severity ratings and proposed fixes turn a complaint into a deliverable a team can act on." },
  ],
  next:"S3 · Introduction to FigJam (1:00) · Set up the canvas your whole week's research will live on." },

// ══ DAY 1 · SESSION 3 · Introduction to FigJam (5) ═══════════════
{ type:"cover", day:1, session:3, time:"1:00 - 2:15",
  title:"Introduction to\n{hl}FigJam{/hl}",
  subtitle:"Workshop Canvas · POV Framing · Setup" },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Orientation", title:"What FigJam Is, and Isn't",
  layout:"cards2",
  body:[
    { tone:"gold", t:"FigJam is for thinking", b:"An infinite collaborative whiteboard for research, brainstorming, affinity mapping, journey mapping, and workshops. Lo-fi by design. It's where ideas are messy and fast." },
    { tone:"navy", t:"Figma is for making", b:"The precise design tool for wireframes, UI, components, and prototypes. High-fidelity and structured. You move from FigJam to Figma as ideas firm up." },
  ],
  footnote:"Same company, same account, two tools. This afternoon is FigJam. Day 3 we move into Figma." },

{ type:"toolOpen", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Hands On", title:"Let's Open FigJam",
  tool:"figjam",
  instruction:"Create your first FigJam file",
  sub:"Name it: [Your Name] · Day 1 Workshop. This is the canvas your research lives on.",
  need:["A Figma account (free)","The shared workshop link","Your audit notes from S2"] },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Framing the Problem", title:"Working with POV Statements",
  layout:"bullets",
  body:[
    "A <b>Point of View statement</b> reframes raw research into a clear, actionable problem definition the whole team shares.",
    "The structure: <em>[User] needs [need] because [insight].</em> Specific user, real need, surprising insight.",
    "Example: <b>A first-time visitor needs to trust the platform quickly, because they've been burned by lookalike scams before.</b>",
    "A sharp POV becomes the bridge from research into ideation. It is what you'll build your How Might We questions on in S4 and Day 2.",
  ] },

{ type:"wrap", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Session 3 Complete", title:"Canvas Set Up · Into the Workshop",
  cards:[
    { n:"01", t:"You have a working canvas", b:"Your FigJam file is created, named, and shared. Ready for affinity mapping and persona work." },
    { n:"02", t:"FigJam is for thinking fast", b:"Lo-fi, collaborative, real-time. The place ideas are generated and structured before they are designed in Figma." },
    { n:"03", t:"A POV frames the problem", b:"User, need, insight. The statement that turns research into a problem worth solving and feeds the next exercise." },
  ],
  next:"S4 · FigJam Workshop (2:15) · Slides stop. You work. Affinity mapping, card sorting, and your first persona." },

// ══ DAY 1 · SESSION 4 · FigJam Workshop (8) ══════════════════════
{ type:"cover", day:1, session:4, time:"2:15 - 3:00",
  title:"FigJam\n{hl}Workshop{/hl}",
  subtitle:"Affinity Mapping · Card Sorting · First Persona" },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 1 · {hl}Affinity Mapping{/hl}",
  sub:"Write every pain point you can think of for your cohort's shared challenge on stickies. Then cluster them into themes.",
  minutes:20,
  deliverable:"3 to 5 labelled clusters of related pain points on your FigJam canvas." },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 2 · {hl}Card Sorting{/hl}",
  sub:"Sort your clusters by frequency and severity. Which problems matter most, to the most people affected by your shared challenge?",
  minutes:15,
  deliverable:"Your clusters ranked on a 2x2: frequency against severity." },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 3 · {hl}First Persona Sketch{/hl}",
  sub:"Who, in your cohort's shared challenge, has the top-ranked problem? Sketch a rough persona: who they are, their context, their goal.",
  minutes:15,
  deliverable:"A one-card persona sketch. We turn it into a JTBD-grounded persona on Day 2." },

{ type:"theory", day:1, session:4, sessionTitle:"FigJam Workshop",
  eyebrow:"Not a Day 4 Surprise", title:"The Four Threads You Start Today",
  layout:"cards4",
  body:[
    { icon:"ai", t:"AI workflows", b:"Every research and design step this week gets AI-accelerated. You review every output, starting Day 2." },
    { icon:"shield", t:"Accessibility", tone:"navy", b:"Not a Day 4 add-on. The inclusion gaps you flag today are Day 4's design requirements." },
    { icon:"warn", t:"Data privacy", b:"What you're allowed to paste into an AI tool starts mattering the moment you open Figma on Day 3." },
    { icon:"list", t:"AI ethics & governance", b:"Every AI-assisted decision this week gets classified, verified, and documented. Day 4 formalises what starts now." },
  ],
  footnote:"These four threads run through every day this week. Day 4 is the deep dive, not the introduction." },

{ type:"example", day:1, session:4, sessionTitle:"FigJam Workshop",
  eyebrow:"Spot the Risk", title:"An AI-Generated Screen for Your Shared Challenge",
  mode:"annotated",
  panels:[
    { l:"What you're shown", t:"<b>A citizen-service screen, generated by an AI tool</b> from a one-line prompt about your cohort's shared challenge." },
    { l:"Accessibility risk", t:"<b>Low-contrast text, no visible focus states.</b> Looks finished, fails a keyboard-only or low-vision user immediately." },
    { l:"AI / data risk", t:"<b>The prompt that generated this may have included real applicant data.</b> Plausible fields does not mean verified or safe fields." },
    { l:"The habit", t:"<b>Nothing here is unusual.</b> This is what an unreviewed AI output looks like. Spotting it is the skill this week builds." },
  ],
  takeaway:"You'll see this exact pattern again on Day 3 (privacy) and Day 4 (accessibility, governance) — this is the first rep, not the last." },

{ type:"discussion", day:1, session:4, sessionTitle:"FigJam Workshop",
  label:"Responsible Design Checkpoint",
  question:"Look back at today's discovery notes on your shared challenge.\nFlag {hl}one accessibility or inclusion gap{/hl}\nand {hl}one AI or data risk{/hl}\nyou can already see coming.",
  hint:"2 minutes. Write both down. We return to every one of them on Day 3 and Day 4." },

{ type:"wrap", day:1, session:4, sessionTitle:"FigJam Workshop",
  eyebrow:"Day 1 Complete", title:"What You Now Know",
  cards:[
    { n:"01", t:"You can define UX", b:"What it is, the process, and the principles. You can audit any product against ten heuristics with severity and fixes." },
    { n:"02", t:"Your research canvas is live", b:"Pain points mapped, ranked, and a first persona sketched for your cohort's shared challenge. Your FigJam file is the spine of the week's case study." },
    { n:"03", t:"Four threads are named, not flagged and forgotten", b:"AI workflows, accessibility, privacy, governance. You've already spotted one risk of each kind — Day 3 and Day 4 are where you fix them." },
  ],
  next:"Day 2 · Research, JTBD + AI Workflows · We turn this rough start into real, AI-accelerated user insight." },

];
