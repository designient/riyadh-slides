import type { ManifestSlide as Slide } from "../types";

export const day1: Slide[] = [

// ── DAY 1 DIVIDER ──────────────────────────────────────────────
{ type: "dayDivider", dayNumber: 1,
  dayLabel: "Day 1 of 5 · Riyadh, KSA · 12 July 2026",
  title: "UX Foundations\n+ Heuristics + FigJam",
  theme: "Understand before you design",
  sessions: [
    "S1 · What is UX Design?  9:00 - 10:30",
    "S2 · UX Principles + Heuristics  10:40 - 12:30",
    "S3 · Introduction to FigJam  1:30 - 3:30",
    "S4 · FigJam Workshop  3:40 - 5:00",
  ] },

// ══ DAY 1 · SESSION 1 · What is UX Design? (17) ══════════════════
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

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Landscape", title:"Roles in UX · The Full Spectrum",
  layout:"cards4",
  body:[
    { icon:"research", t:"UX Researcher", b:"Generates insight from real users through interviews, observation, and testing. Turns behaviour into direction." },
    { icon:"design", t:"UX Designer", b:"Translates research into wireframes, flows, and tested interactions. Connects insight to interface." },
    { icon:"ui", t:"UI Designer", b:"Creates the visual language: colour, type, spacing, components, iconography. Makes it look right." },
    { icon:"product", t:"Product Designer", b:"Owns the end-to-end experience from research through shipping. Closest to the business outcome." },
    { icon:"interaction", t:"Interaction Designer", b:"Specialises in behaviour, motion, and microinteractions. Designs the moments between states." },
    { icon:"ia", t:"Information Architect", b:"Structures and organises content for findability. The skeleton before the skin." },
    { icon:"writer", t:"UX Writer", b:"Crafts the language of the interface: buttons, errors, onboarding, empty states. Words are UI." },
    { icon:"strategy", t:"UX Strategist", b:"Aligns experience goals with business objectives. Builds the case for design investment." },
  ] },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Organisational Context", title:"Where UX Lives in an Organisation",
  layout:"cards3",
  body:[
    { n:"A", t:"Embedded in Product", b:"UX sits inside the product team, beside engineering and business. Most common. Fastest for execution, closest to the roadmap.", tag:"Most common · Best for speed" },
    { n:"B", t:"Standalone Design Function", tone:"navy", b:"A dedicated design team reporting to the CPO or COO. Broader remit across products. Better for design maturity at scale.", tag:"Scale org · Best for consistency" },
    { n:"C", t:"External / Consultancy", b:"UX as project-based expertise: research sprints, audits, redesigns. High specialisation, lower context continuity.", tag:"Agency model · Specialised problems" },
  ],
  footnote:"No matter where UX sits in the chart, the work is identical: understand users, design for them, test the result." },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Method", title:"The UX Design Process",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Empathise", d:"Research users. Observe, interview, immerse. Build understanding, not assumptions." },
    { n:"02", t:"Define", d:"Synthesise research. Frame the real problem, not the one you assumed going in." },
    { n:"03", t:"Ideate", gold:true, d:"Generate solutions. Breadth before depth. Quantity before quality." },
    { n:"04", t:"Prototype", d:"Build to think. Make ideas tangible enough to put in front of a user." },
    { n:"05", t:"Test", d:"Learn from users. What works, what breaks, what the next question is." },
  ]},
  note:"This process is circular, not linear. Testing feeds back into empathy and redefines the problem." },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Framework", title:"The Double Diamond · Diverge to Converge, Twice",
  kind:"diagram", data:{ diagram:"doubleDiamond",
    labels:[
      { t:"Discover", d:"Research widely. Gather without filtering. The goal is breadth of insight." },
      { t:"Define", d:"Narrow to the core. Find the real problem from what the research tells you." },
      { t:"Develop", d:"Generate options. Prototype multiple solutions. Explore before committing." },
      { t:"Deliver", d:"Test, refine, and ship the best solution. Then loop back with new learnings." },
    ] } },

{ type: "reference", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"For Everyone in This Room", title:"Entry Points · UX Has a Door for Every Background",
  head:["Your Background","What You Already Bring","Your UX Entry Path"],
  rows:[
    ["Graphic / Visual Designer","Visual craft, typography, spatial thinking","Add: research methods, information architecture, testing"],
    ["Software Developer","Technical fluency, systems thinking, logic","Add: user empathy, usability testing, interaction logic"],
    ["Marketing / Brand Professional","Audience analysis, messaging, behavioural cues","Add: qualitative research, direct user observation"],
    ["Project / Product Manager","Stakeholder management, process, prioritisation","Add: design fundamentals, wireframing, prototyping"],
    ["Researcher / Analyst","Data fluency, rigour, translating findings","Add: qualitative methods, design translation"],
    ["No design background","Fresh perspective, unfiltered domain expertise","Portfolio-first: case studies from real problems"],
  ] },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"What You'll Build This Week", title:"The Case Study Thread · Day by Day",
  kind:"diagram", data:{ diagram:"weekArc",
    nodes:[
      { n:"1", day:"TODAY", t:"Discovery Canvas", d:"FigJam research board. HMW questions. First persona sketch." },
      { n:"2", day:"Day 2", t:"Research + JTBD", d:"JTBD-grounded persona. Experience map. AI-synthesised findings." },
      { n:"3", day:"Day 3", t:"Wireframes + System", d:"Figma wireframes. Variables. Component foundations." },
      { n:"4", day:"Day 4", t:"Prototype + Test", d:"Interactive Figma prototype. Usability test with a real person." },
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
    { tone:"navy", t:"By end of Day 4", b:"You have tested your ideas with a real person using a Figma prototype. You know what works, what to fix, and you have the notes." },
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
  next:"S2 · UX Principles + Heuristics (10:40) · The evaluative framework you'll apply to any product in under 30 minutes." },

// ══ DAY 1 · SESSION 2 · UX Principles + Heuristics (18) ══════════
{ type: "cover", day:1, session:2, time:"10:40 - 12:30",
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

{ type:"framework", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Loop", title:"The User-Centered Design Process",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Understand", d:"Research context, users, and their goals before proposing anything." },
    { n:"02", t:"Specify", d:"Define requirements from real user needs, framed as problems to solve." },
    { n:"03", t:"Design", gold:true, d:"Produce solutions, from sketches to prototypes, against those needs." },
    { n:"04", t:"Evaluate", d:"Test with real users. Measure against the requirements you set." },
  ]},
  note:"Evaluate always loops back to Understand. UCD never ends at launch, it restarts there." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Why It Matters Here", title:"Why UCD Matters for This Room",
  layout:"bullets",
  body:[
    "<b>For PMs and project leads:</b> UCD turns roadmap debates into testable questions. You stop arguing about opinions and start checking with users.",
    "<b>For developers and engineers:</b> it prevents building the wrong thing correctly. Catching a flawed flow on paper is far cheaper than in code.",
    "<b>For marketers and brand:</b> the same empathy that drives research drives messaging that actually resonates with a real audience.",
    "<b>For everyone:</b> UCD is the shared language that lets a mixed team make decisions together without defaulting to seniority.",
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
  eyebrow:"Heuristics In Action · 1 to 3", title:"Visibility, Real-World Match, User Control",
  mode:"annotated",
  panels:[
    { l:"H1 · Visibility of status", t:"<b>A file upload with a live progress bar and percentage</b> respects status. A spinner with no end and no feedback violates it." },
    { l:"H2 · Match the real world", t:"<b>A trash icon for delete and a cart for purchases</b> match real-world models. \"Commit transaction\" as a button label does not." },
    { l:"H3 · User control and freedom", t:"<b>Undo send in email, and a clear cancel on every modal,</b> give control. A flow with no back button traps the user." },
  ],
  takeaway:"These three account for the majority of everyday frustration. Most bad UX fails one of them first." },

{ type:"example", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Heuristics In Action · 4 to 7", title:"Consistency, Prevention, Recognition, Flexibility",
  mode:"annotated",
  panels:[
    { l:"H4 · Consistency", t:"<b>The primary button is the same colour and position on every screen.</b> When it moves and changes per page, users hesitate." },
    { l:"H5 · Error prevention", t:"<b>Disabling Submit until the form is valid</b> prevents the error. Greying out unavailable dates stops impossible bookings." },
    { l:"H6 · Recognition over recall", t:"<b>Showing recently used items and autocomplete</b> means users recognise, not memorise. Blank search boxes force recall." },
    { l:"H7 · Flexibility", t:"<b>Keyboard shortcuts for power users, simple defaults for novices.</b> Both paths exist without getting in each other's way." },
  ] },

{ type:"example", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Heuristics In Action · 8 to 10", title:"Minimalism, Error Recovery, Help",
  mode:"annotated",
  panels:[
    { l:"H8 · Aesthetic, minimalist", t:"<b>A checkout that shows only what's needed at each step</b> respects attention. A screen crowded with promos buries the primary action." },
    { l:"H9 · Help users recover", t:"<b>\"That email is already registered. Sign in instead?\"</b> with a direct link recovers gracefully. \"Error 400\" abandons the user." },
    { l:"H10 · Help and documentation", t:"<b>Inline contextual help and searchable docs</b> serve the moment of need. A 60-page PDF manual does not." },
  ],
  takeaway:"You now have the full set. Next, how to apply them as a structured audit." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Method", title:"Running a Heuristic Audit",
  layout:"bullets",
  body:[
    "<b>Step 1 · Define the scope.</b> Pick one flow, for example sign-up or checkout, not the entire product at once.",
    "<b>Step 2 · Walk the flow as a user would,</b> screen by screen, noting every friction point against the 10 heuristics.",
    "<b>Step 3 · Log each issue:</b> which heuristic it violates, where it happens, and a short description of the problem.",
    "<b>Step 4 · Rate severity</b> from 0 to 4 so the team knows what to fix first.",
    "<b>Step 5 · Recommend a fix</b> for each issue. An audit without recommendations is a complaint, not a deliverable.",
  ] },

{ type:"framework", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Prioritising What You Find", title:"The Severity Rating Scale",
  kind:"flow",
  data:{ steps:[
    { n:"0", t:"Not a problem", d:"Cosmetic at most. Does not need fixing unless time allows." },
    { n:"1", t:"Cosmetic", d:"Minor. Low priority. Fix if convenient." },
    { n:"2", t:"Minor", d:"Causes some friction. Worth fixing soon." },
    { n:"3", t:"Major", gold:true, d:"Frequently blocks or frustrates users. High priority." },
    { n:"4", t:"Catastrophe", d:"Prevents task completion. Must fix before release." },
  ]},
  note:"Severity blends frequency, impact, and persistence. A rare but blocking bug can still be a 4." },

{ type:"discussion", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  label:"Quick Challenge",
  question:"Pick any app on your phone right now.\nName {hl}one heuristic it violates{/hl}\nand how you would fix it.",
  hint:"90 seconds. We'll take four examples from the room." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Wider Toolkit", title:"UX Techniques Overview",
  layout:"cards3",
  body:[
    { icon:"research", t:"Discovery", b:"Interviews, surveys, contextual inquiry, competitive analysis, heuristic evaluation." },
    { icon:"jtbd", t:"Definition", tone:"navy", b:"Personas, JTBD, journey maps, experience maps, problem statements, HMW questions." },
    { icon:"prototype", t:"Delivery", b:"Wireframes, prototypes, usability testing, A/B testing, design systems, handoff." },
  ],
  footnote:"You will practise techniques from all three columns across this week. Today's audit is your first." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Fitting Into Delivery", title:"Planning the Development Cycle",
  layout:"bullets",
  body:[
    "<b>UX is not a phase before development,</b> it runs in parallel with it. Research and design stay one step ahead of the build.",
    "In an <b>agile cycle</b>, design works a sprint ahead: validating next sprint's work while engineering builds the current one.",
    "<b>Definition of ready</b> for a dev ticket should include tested designs, not just a written requirement.",
    "Heuristic audits fit naturally at <em>two moments</em>: early on competitor products, and late on your own build before release.",
  ] },

{ type:"reference", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Cheatsheet · Keep This Open", title:"Nielsen's 10 · One-Line Reference",
  head:["#","Heuristic","Ask Yourself"],
  rows:[
    ["1","Visibility of status","Does the user always know what's happening?"],
    ["2","Match real world","Does the language match the user's, not ours?"],
    ["3","Control and freedom","Is there always a clear way out and an undo?"],
    ["4","Consistency","Does the same thing look and behave the same everywhere?"],
    ["5","Error prevention","Have we designed the error out of existence?"],
    ["6","Recognition over recall","Are options visible instead of memorised?"],
    ["7","Flexibility","Can both novices and experts work efficiently?"],
    ["8","Minimalist design","Is every element earning its place?"],
    ["9","Error recovery","Do errors say what happened and how to fix it?"],
    ["10","Help and docs","Is help findable exactly when needed?"],
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
  next:"S3 · Introduction to FigJam (1:30) · The tool opens. We set up the canvas your whole week's research will live on." },

// ══ DAY 1 · SESSION 3 · Introduction to FigJam (8) ═══════════════
{ type:"cover", day:1, session:3, time:"1:30 - 3:30",
  title:"Introduction to\n{hl}FigJam{/hl}",
  subtitle:"The Collaboration Canvas · Tools · Setup" },

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
  eyebrow:"The Toolset", title:"FigJam Tool Tour",
  layout:"cards3",
  body:[
    { icon:"list", t:"Stickies + Text", b:"The atomic unit. One idea per sticky. Colour-code by theme. Text for headers and framing." },
    { icon:"boolean", t:"Shapes + Connectors", tone:"navy", b:"Boxes, frames, and lines that snap and follow. Build flows, maps, and structures that stay connected as you move them." },
    { icon:"clock", t:"Timer + Cursor Chat", b:"Built-in timer to box exercises. Cursor chat and stamps for fast, low-friction group feedback." },
  ] },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Working Together", title:"Collaboration Features",
  layout:"bullets",
  body:[
    "<b>Live multiplayer cursors:</b> everyone works on the same canvas at once. You see who is doing what in real time.",
    "<b>Sharing and permissions:</b> one link, set to edit or view. No exports, no version emailing, no \"final_v3_final\".",
    "<b>Voting:</b> drop dot-votes to prioritise ideas as a group in seconds, instead of debating endlessly.",
    "<b>Stamps and emotes:</b> lightweight reactions that keep a workshop moving without everyone talking over each other.",
  ] },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Before Figma", title:"Wireframing in FigJam",
  layout:"split",
  body:{
    left:[
      "FigJam is perfect for <b>lo-fi wireframes:</b> rough boxes and labels to agree on structure before precision matters.",
      "The goal is <em>speed and agreement,</em> not polish. If it looks too finished, people critique pixels instead of ideas.",
      "Once the structure is agreed here, you rebuild it properly in Figma on Day 3.",
    ],
    right:{ tone:"navy", t:"Lo-fi on purpose",
      b:"A wireframe that looks unfinished invites honest feedback about the flow. A wireframe that looks done invites silence or nitpicking. Stay rough until the structure is right." },
  } },

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
    { n:"01", t:"You have a working canvas", b:"Your FigJam file is created, named, and shared. Stickies, shapes, connectors, timer, and voting are all at hand." },
    { n:"02", t:"FigJam is for thinking fast", b:"Lo-fi, collaborative, real-time. The place ideas are generated and structured before they are designed in Figma." },
    { n:"03", t:"A POV frames the problem", b:"User, need, insight. The statement that turns research into a problem worth solving and feeds the next exercise." },
  ],
  next:"S4 · FigJam Workshop (3:40) · Slides stop. You work. Affinity mapping, card sorting, and your first persona." },

// ══ DAY 1 · SESSION 4 · FigJam Workshop (5) ══════════════════════
{ type:"cover", day:1, session:4, time:"3:40 - 5:00",
  title:"FigJam\n{hl}Workshop{/hl}",
  subtitle:"Affinity Mapping · Card Sorting · First Persona" },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 1 · {hl}Affinity Mapping{/hl}",
  sub:"Write every user pain point you can think of on stickies. Then cluster them into themes.",
  minutes:20,
  deliverable:"3 to 5 labelled clusters of related pain points on your FigJam canvas." },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 2 · {hl}Card Sorting{/hl}",
  sub:"Sort your clusters by frequency and severity. Which problems matter most, to the most people?",
  minutes:15,
  deliverable:"Your clusters ranked on a 2x2: frequency against severity." },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 3 · {hl}First Persona Sketch{/hl}",
  sub:"Who has the top-ranked problem? Sketch a rough persona: who they are, their context, their goal.",
  minutes:15,
  deliverable:"A one-card persona sketch. We turn it into a JTBD-grounded persona on Day 2." },

{ type:"wrap", day:1, session:4, sessionTitle:"FigJam Workshop",
  eyebrow:"Day 1 Complete", title:"What You Now Know",
  cards:[
    { n:"01", t:"You can define UX", b:"What it is, the roles, the process, and the principles. You can audit any product against ten heuristics with severity and fixes." },
    { n:"02", t:"You can use FigJam", b:"Canvas set up, stickies and connectors in hand, collaboration features known. Your research lives here for the rest of the week." },
    { n:"03", t:"Your case study has begun", b:"Pain points mapped, ranked, and a first persona sketched. This is the seed of everything you build over the next four days." },
  ],
  next:"Day 2 · Research, JTBD + AI Workflows · We turn this rough start into real, AI-accelerated user insight." },

];
