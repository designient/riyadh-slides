import type { ManifestSlide as Slide } from "../types";

export const day5: Slide[] = [

// ── DAY 5 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:5,
  dayLabel:"Day 5 of 5 · Riyadh, KSA · 16 July 2026",
  title:"Atomic Design, Handoff\n+ Portfolio",
  theme:"Systematise it, ship it, tell its story",
  sessions:[
    "S1 · Atomic Design + Components  9:00 - 10:30",
    "S2 · Dev Handoff + Sharing  10:45 - 12:15",
    "S3 · Portfolio + Capstone I  1:00 - 2:15",
    "S4 · Capstone II + Wrap  2:15 - 3:00",
  ] },

// ══ DAY 5 · S1 · Atomic Design + Components (9) ══════════════════
{ type:"cover", day:5, session:1, time:"9:00 - 10:30",
  title:"Atomic Design\n+ {hl}Components{/hl}",
  subtitle:"Atoms to Pages, in One Slide · Properties · Variants" },

{ type:"statement", day:5, session:1, sessionTitle:"Atomic Design + Components",
  quote:"\"We are not designing pages.\nWe are designing {hl}systems of components.{/hl}\"",
  attribution:"Brad Frost · Atomic Design" },

{ type:"framework", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Five Levels", title:"Atoms to Pages",
  kind:"stack",
  data:{ layers:[
    { t:"Atoms", d:"The smallest parts. A label, an input, a button, a colour, an icon. Can't break down further." },
    { t:"Molecules", d:"A few atoms bonded into a unit. A search field: label plus input plus button." },
    { t:"Organisms", d:"Molecules and atoms forming a distinct section. A header, a product card, a nav bar." },
    { t:"Templates", d:"Organisms arranged into a page-level structure, without real content yet." },
    { t:"Pages", d:"Templates filled with real content. The actual screen a user sees." },
  ] },
  note:"Brad Frost's model, borrowed from chemistry: complex interfaces are small, combinable parts. Each level is composed of the one beneath it — fix an atom and every molecule, organism, and page inherits the fix." },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Figma Tool", title:"Components + Instances",
  layout:"split",
  body:{
    left:[
      "<b>A component is a master element you define once.</b> Every copy you use is an instance that stays linked to it.",
      "<b>Change the master, every instance updates.</b> This is the single biggest consistency and speed win in Figma.",
      "Instances can <em>override</em> text, colour, and content locally while still inheriting structure from the master.",
    ],
    right:{ tone:"gold", t:"Atoms become components",
      b:"Atomic Design is the theory. Components are how Figma makes it real. Your atoms, molecules, and organisms all become components, and your whole product stays in sync from one source." },
  } },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Making Components Flexible", title:"Component Properties + Variants",
  layout:"bullets",
  body:[
    "<b>Variants group related versions of a component</b> into one, with properties to switch between them.",
    "A button's variants: <em>primary, secondary, ghost</em> times <em>default, hover, disabled.</em> One component, every combination.",
    "<b>Boolean, text, and instance-swap properties</b> turn a rigid component into a flexible one configured from the right-hand panel.",
    "This is how the six button states from Day 4 live together cleanly, as variants of a single component.",
  ] },

{ type:"example", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Variants in Practice", title:"One Button Component, Every State",
  mode:"annotated",
  panels:[
    { l:"Property · Type", t:"<b>Primary, Secondary, Ghost.</b> One dropdown switches the button's visual role." },
    { l:"Property · State", t:"<b>Default, Hover, Pressed, Disabled.</b> A second dropdown switches its state." },
    { l:"The matrix", t:"<b>Three types times four states is twelve buttons,</b> all inside one tidy component." },
    { l:"In use", t:"<b>Drop one instance, set two properties,</b> done. Never hunt for the right button again." },
  ],
  takeaway:"This is the difference between a pile of buttons and a button system. Variants make it manageable." },

{ type:"toolOpen", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Hands On", title:"Componentise Your Card",
  tool:"figma",
  instruction:"Turn your Day 3 card into a component with variants",
  sub:"Make the master, add a variant or two, then place instances. This is your cohort's shared challenge getting its first real component.",
  need:["Your card from Day 3","Your variables","Shortcut: Cmd/Ctrl + Alt + K to create component"] },

{ type:"exercise", day:5, session:1, tool:"figma",
  task:"Build a {hl}Component System{/hl}",
  sub:"Make your card a component. Add a button component with two variants. Place instances and override content, for your cohort's shared challenge.",
  minutes:30,
  deliverable:"A card component and a two-variant button, used as instances in your design." },

{ type:"wrap", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"Build systems, not pages", b:"Atoms to pages. Every interface is small combinable parts. Fix one atom and the fix flows up through everything built on it." },
    { n:"02", t:"Components are atomic design, realised", b:"Master and instances, linked. Change the master, every instance updates. The biggest consistency and speed win in Figma." },
    { n:"03", t:"Properties and variants make it flexible", b:"One button component holds every type and state as variants, configured from the panel. A system, not a pile of duplicates." },
  ],
  next:"S2 · Dev Handoff + Sharing (10:45) · Turn your system into something a developer can build from." },

// ══ DAY 5 · S2 · Dev Handoff + Sharing (7) ═══════════════════════
{ type:"cover", day:5, session:2, time:"10:45 - 12:15",
  title:"Dev Handoff\n+ {hl}Sharing{/hl}",
  subtitle:"Handoff Is a Conversation, Not a File Thrown Over a Wall" },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"The Handoff Tool", title:"Figma Dev Mode",
  layout:"cards3",
  body:[
    { icon:"devmode", t:"Inspect", b:"Developers read exact sizes, spacing, colours, and typography as values, and as ready code snippets." },
    { icon:"variables", t:"Tokens as code", tone:"navy", b:"Your variables surface as named tokens, the same names the developer uses in code. Design and build speak one language." },
    { icon:"check", t:"Ready for dev", b:"Mark frames ready, track changes, and let developers see exactly what's current and what's still moving." },
  ],
  footnote:"Dev Mode is why the variables work on Day 3 pays off now. The token you named is the token they ship." },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Reading a Design", title:"Inspect + Measure",
  layout:"bullets",
  body:[
    "<b>Select any element and Dev Mode shows its full spec:</b> dimensions, padding, colour values, font, and border radius.",
    "<b>Hover between elements to measure spacing</b> in pixels. No guessing, no asking, the gaps are right there.",
    "<b>Code snippets generate</b> for CSS, iOS, and Android, a starting point the developer adapts, not blindly copies.",
    "The cleaner your auto layout and variables, the cleaner and more trustworthy these specs and snippets are.",
  ] },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Collaboration + Safety", title:"Version History + Sharing",
  layout:"bullets",
  body:[
    "<b>Figma autosaves a full version history.</b> Name key versions, and you can always roll back to any earlier state.",
    "<b>Share with precise permissions:</b> view or edit, per person or by link. Developers usually need view plus Dev Mode, not edit.",
    "<b>Comments live on the canvas,</b> pinned to exact elements. Feedback and questions stay attached to what they're about.",
    "This is the same collaborative spine as FigJam on Day 1. One platform, from first sticky to final handoff.",
  ] },

{ type:"exercise", day:5, session:2, tool:"figma",
  task:"Prepare a {hl}Handoff{/hl}",
  sub:"Open your cohort's shared-challenge design in Dev Mode. Mark a frame ready for dev. Set up an SVG export for one icon. Add a spec comment.",
  minutes:25,
  deliverable:"One frame marked dev-ready, one asset export configured, one clarifying comment pinned." },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Career ROI", title:"Presenting Responsible Design in Interviews",
  layout:"bullets",
  body:[
    "<b>\"I ran an accessibility audit\" is a stronger sentence than \"I designed the screens.\"</b> It signals judgement, not just output.",
    "Narrate the <em>decision, not just the deliverable:</em> \"I flagged that the AI-generated draft failed contrast on this screen, and here's the fix I shipped.\"",
    "For AI-assisted work, always name <b>what you verified, not just what the tool produced.</b> \"AI drafted three variants, I checked each against the token system and picked this one\" beats \"AI made this.\"",
    "Interviewers in 2026 actively probe for this. Being able to talk fluently about accessibility and responsible-AI decisions is a real differentiator, not a nice-to-have.",
  ] },

{ type:"wrap", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Handoff is a conversation", b:"Not a file thrown over a wall. It answers the developer's questions before they ask: specs, states, behaviour, and edge cases." },
    { n:"02", t:"Dev Mode pays off your system", b:"Inspect gives exact specs and code. Your variables arrive as the same named tokens the developer ships. Design and build speak one language." },
    { n:"03", t:"You can narrate the judgement, not just the output", b:"Naming what you verified in AI-assisted work and why you flagged an accessibility gap is what separates a strong interview answer from a weak one." },
  ],
  next:"S3 · Portfolio + Capstone I (1:00) · Now we turn this week's work into a story that gets you hired." },

// ══ DAY 5 · S3 · Portfolio + Capstone I (12) ═════════════════════
{ type:"cover", day:5, session:3, time:"1:00 - 2:15",
  title:"Portfolio\n+ {hl}Capstone I{/hl}",
  subtitle:"The Case Study Narrative · Building Your Story" },

{ type:"statement", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  quote:"\"Nobody hires the prettiest screens.\nThey hire {hl}the clearest thinking.{/hl}\"",
  attribution:"A portfolio sells your process, not your pixels." },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"The Truth About Portfolios", title:"What a Portfolio Is Really For",
  layout:"bullets",
  body:[
    "<b>A portfolio proves how you think,</b> not how you decorate. Reviewers scan for reasoning, decisions, and judgement.",
    "The strongest portfolios are <em>case studies,</em> not galleries. A wall of pretty screens tells no one why anything was done.",
    "Hiring managers spend <b>seconds per project.</b> Your narrative has to make the value obvious fast, then reward a deeper read.",
    "One well-told case study beats ten thin ones. <b>Depth over volume,</b> always.",
  ] },

{ type:"framework", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"The Structure That Works", title:"The Case Study Arc",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Problem", d:"What was wrong, for whom, and why it mattered. Set the stakes." },
    { n:"02", t:"Research", d:"What you did to understand it. Methods, and what you found." },
    { n:"03", t:"Insight", gold:true, d:"The key realisation that changed your direction. The turning point." },
    { n:"04", t:"Decisions", d:"What you designed and, crucially, why. The trade-offs you made." },
    { n:"05", t:"Outcome", d:"What happened. Results, learnings, what you'd do next." },
  ]},
  note:"The insight step is what separates a memorable case study from a project log. Lead with the thinking." },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"The Most Skipped Step", title:"Show the Why, Not Just the What",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Weak · a screen tour", b:"\"Here's the home screen. Here's the profile. Here's the settings.\" It describes what you made. It says nothing about your judgement, so it proves nothing." },
    { tone:"gold", t:"Strong · a decision story", b:"\"Users abandoned at checkout, so I moved the cost up front and cut the steps from eight to three. Drop-off fell.\" It shows a problem, a decision, a result." },
  ],
  footnote:"For every screen you show, answer one question: why is it like this and not otherwise?" },

{ type:"example", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Weak vs Strong · Responsible Design", title:"The Same Project, Told Two Ways",
  mode:"split",
  panels:{
    negative:{ heading:"Weak · accessibility as afterthought", items:[
      { l:"Narrative", t:"\"I designed the citizen portal, ran usability tests, and shipped a clean, modern interface.\"" },
      { l:"What's missing", t:"<b>No mention of who was excluded,</b> what was checked, or what AI-assisted decisions were verified." },
      { l:"Reviewer read", t:"<b>Competent execution, no visible judgement.</b> Indistinguishable from a hundred other portfolios." },
    ]},
    positive:{ heading:"Strong · accessibility foregrounded", items:[
      { l:"Narrative", t:"\"I audited the flow against WCAG, found three contrast failures the AI-generated draft introduced, and fixed them before this became the final design.\"" },
      { l:"What's shown", t:"<b>The specific gap, the specific fix, and the AI-governance check</b> that caught it before it shipped." },
      { l:"Reviewer read", t:"<b>This person catches what others miss.</b> Immediately memorable, immediately hireable." },
    ]},
  },
  takeaway:"Same project, same screens. The difference is entirely in whether accessibility and governance work gets narrated or buried." },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"You Already Have One", title:"Your Week Is a Case Study",
  layout:"split",
  body:{
    left:[
      "<b>You've built a full case study this week,</b> following the exact arc that gets people hired.",
      "Problem and research: <em>Day 1 and 2.</em> Insight: your JTBD and synthesis. Decisions: your wireframes, governed prototype, and accessibility fixes.",
      "Outcome: your governance checklist and what you'd test next. <b>It's all there, in your Figma and FigJam files.</b>",
    ],
    right:{ tone:"gold", t:"The capstone",
      b:"For the rest of today, you assemble this week's work into one portfolio case study. Problem, research, insight, decisions, outcome. By 3pm you walk out with a real, presentable project." },
  } },

{ type:"framework", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"How You'll Be Scored", title:"Capstone Scoring Rubric",
  kind:"stack",
  data:{ layers:[
    { t:"Design quality", d:"Visual hierarchy, consistency, component craft. Does the output look intentional and on-system?" },
    { t:"Process rigor", d:"Research traceable to decisions. Case study arc complete. AI outputs reviewed, not shipped raw." },
    { t:"Accessibility", d:"Contrast, focus, labels, touch targets applied. Day 1 inclusion gaps addressed. Checklist evidence." },
    { t:"AI-governance awareness", d:"Risk classified, checklist completed, data handling considered. Governance documented, not assumed." },
  ] },
  note:"All four dimensions count. A beautiful screen with no governance documentation scores lower than an honest process story." },

{ type:"toolOpen", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Hands On", title:"Open a Fresh Figma Page",
  tool:"figma",
  instruction:"Create a page named Case Study",
  sub:"We'll lay out your week as a five-section narrative: problem, research, insight, decisions, outcome.",
  need:["All your files from Days 1 to 4","Your research, persona, and governance checklist","The case study arc"] },

{ type:"exercise", day:5, session:3, tool:"figma",
  task:"Capstone I · {hl}Structure Your Story{/hl}",
  sub:"Lay out the five sections. Drop in your strongest artefact for each. Write a one-line caption per section.",
  minutes:35,
  deliverable:"A five-section case study skeleton with your best artefact and a caption in each." },

{ type:"reference", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Quick Reference · Keep This Open", title:"Portfolio + Presentation Coaching",
  head:["Do","Don't"],
  rows:[
    ["Lead with the insight or outcome","Start with a long preamble"],
    ["Show the messy middle — sketches, rejected ideas","Show only final polished screens"],
    ["Be honest about constraints and failures","Present only successes"],
    ["Quantify where you can, qualify where you can't","Make unverifiable claims"],
    ["60-second walkthrough: problem → insight → decision → outcome","Screen-by-screen tour with no story"],
    ["Include accessibility and governance in your narrative","Treat responsible design as an afterthought"],
  ],
  note:"If cohort size is above ~12–15, confirm timing with your facilitator before the S4 presentations." },

{ type:"wrap", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"A portfolio sells thinking", b:"Case studies, not galleries. Reviewers scan for reasoning and judgement in seconds. One deep story beats ten thin ones." },
    { n:"02", t:"The arc is problem to outcome", b:"Problem, research, insight, decisions, outcome. Lead with the insight. For every screen, answer why it is the way it is." },
    { n:"03", t:"Four dimensions, one story", b:"Design quality, process rigor, accessibility, and AI-governance awareness. Your case study must show all four." },
  ],
  next:"S4 · Capstone II + Wrap (2:15) · Finish the story, present it, and close the masterclass." },

// ══ DAY 5 · S4 · Capstone II + Wrap (6) ══════════════════════════
{ type:"cover", day:5, session:4, time:"2:15 - 3:00",
  title:"Capstone II\n+ {hl}Wrap{/hl}",
  subtitle:"Finish · Present · Where You Go Next" },

{ type:"exercise", day:5, session:4, tool:"figma",
  task:"Capstone II · {hl}Finish + Polish{/hl}",
  sub:"Complete your case study on your cohort's shared challenge. Tighten captions, apply the design principles, make the narrative flow start to finish — and make sure accessibility and AI-governance decisions are visible, not buried.",
  minutes:25,
  deliverable:"A complete, presentable case study: problem to outcome, with your artefacts and your reasoning." },

{ type:"exercise", day:5, session:4, tool:"figjam",
  task:"Present in {hl}60 Seconds{/hl}",
  sub:"Pair up. Walk your partner through your case study in 60 seconds: problem, insight, decision, outcome. If cohort is above ~12–15, confirm timing with your facilitator.",
  minutes:15,
  deliverable:"A 60-second spoken walkthrough of your case study. Practice the story you'll tell in interviews." },

{ type:"reference", day:5, session:4, sessionTitle:"Capstone II + Wrap",
  eyebrow:"Your End-of-Week Package", title:"Take-Home Deliverables",
  head:["Deliverable","What It Contains"],
  rows:[
    ["Full case study","Problem → research → insight → decisions → outcome narrative"],
    ["Production Figma file","Tokenised components, governed prototype, dev-ready frames"],
    ["AI research prompt pack","5 prompts: synthesis, competitive, persona, journey map, heuristic audit"],
    ["Interview kit","Semi-structured guide, probing techniques, neutral question examples"],
    ["JTBD + persona worksheets","JTBD statement template, persona anatomy, empathy map"],
    ["Usability test script","Standalone PDF — goal-based tasks, think-aloud protocol, synthesis"],
    ["AI Ethics & Governance quick-reference","EU AI Act tiers + NIST Govern-Map-Measure-Manage checklist"],
    ["Accessibility checklist","Designer-checkable WCAG applied reference from Day 4"],
  ],
  note:"Everything you need to keep practising, keep governing, and keep building after this week." },

{ type:"theory", day:5, session:4, sessionTitle:"Capstone II + Wrap",
  eyebrow:"Where You Go Next", title:"Your Path From Here",
  layout:"cards3",
  body:[
    { icon:"portfolio", t:"Build the portfolio", b:"Turn this capstone into a published case study. Add one or two more real projects using the same arc." },
    { icon:"figma", t:"Keep the tools sharp", b:"Use Figma weekly. Rebuild interfaces you admire. Fluency comes from reps, not from courses alone." },
    { icon:"research", t:"Stay close to users", b:"Every project, talk to real people. The research habit is what separates designers from decorators long term." },
  ],
  footnote:"You have the method, the tools, the AI workflows, and the governance framework. From here it's practice, projects, and people." },

{ type:"wrap", day:5, session:4, sessionTitle:"Capstone II + Wrap",
  eyebrow:"Masterclass Complete", title:"Five Days. One Complete Designer.",
  cards:[
    { n:"01", t:"You can run the full process", b:"Research, JTBD, synthesis with AI, design systems, governed prototyping, accessibility, and handoff. The entire arc, end to end, with judgement at every step." },
    { n:"02", t:"You design responsibly", b:"Accessibility applied, AI governance documented, data privacy considered. Not retrofitted — built into the process from Day 1." },
    { n:"03", t:"You leave with proof", b:"A complete case study, a full deliverable package, and a 60-second story to tell. Knowledge turned into artefacts." },
  ],
  next:"Thank you. Your certificate is at designient.com/verify. Now go build, talk to users, and tell the story." },

];
