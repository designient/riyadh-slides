import type { ManifestSlide as Slide } from "../types";

export const day5: Slide[] = [

// ── DAY 5 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:5,
  dayLabel:"Day 5 of 5 · Riyadh, KSA · 16 July 2026",
  title:"Atomic Design, Handoff\n+ Portfolio",
  theme:"Systematise it, ship it, tell its story",
  sessions:[
    "S1 · Atomic Design + Components  9:00 - 10:30",
    "S2 · Dev Handoff + Sharing  10:40 - 12:30",
    "S3 · Portfolio + Capstone I  1:30 - 3:30",
    "S4 · Capstone II + Wrap  3:40 - 5:00",
  ] },

// ══ DAY 5 · S1 · Atomic Design + Components (13) ═════════════════
{ type:"cover", day:5, session:1, time:"9:00 - 10:30",
  title:"Atomic Design\n+ {hl}Components{/hl}",
  subtitle:"Atoms to Pages · Properties · Variants" },

{ type:"statement", day:5, session:1, sessionTitle:"Atomic Design + Components",
  quote:"\"We are not designing pages.\nWe are designing {hl}systems of components.{/hl}\"",
  attribution:"Brad Frost · Atomic Design" },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Mental Model", title:"What Atomic Design Is",
  layout:"bullets",
  body:[
    "<b>Atomic Design, by Brad Frost, borrows from chemistry:</b> complex interfaces are built from small, combinable parts.",
    "Five levels, smallest to largest: <em>atoms, molecules, organisms, templates, pages.</em> Each is made from the level below.",
    "It gives a team a <b>shared vocabulary</b> and a logical way to build and name a design system that scales.",
    "It's the conceptual backbone behind Figma's components, and behind how this very slide system was built.",
  ] },

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
  note:"Each level is composed of the one beneath it. Fix an atom and every molecule, organism, and page inherits the fix." },

{ type:"example", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Made Concrete", title:"Atomic Design · A Worked Example",
  mode:"annotated",
  panels:[
    { l:"Atom", t:"<b>A single input field and a button,</b> each on its own, styled from your tokens." },
    { l:"Molecule", t:"<b>Combine them into a search bar:</b> input plus button, working as one unit." },
    { l:"Organism", t:"<b>The search bar joins a logo and nav links</b> to form a complete header." },
    { l:"Template to Page", t:"<b>The header tops a page template,</b> then real content fills it into a finished screen." },
  ],
  takeaway:"You already did this on Day 3. The card was a molecule, built from atoms, ready to become an organism." },

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
  eyebrow:"Making Components Flexible", title:"Component Properties",
  layout:"cards4",
  body:[
    { icon:"boolean", t:"Boolean", b:"Toggle a part on or off. Show or hide an icon, a badge, a label, from one switch." },
    { icon:"variables", t:"Text", b:"Expose editable text as a property. Change the label without entering the instance." },
    { icon:"states", t:"Instance swap", b:"Swap a nested component. Change which icon a button uses, from a dropdown." },
    { icon:"system", t:"Variant", b:"Switch between predefined versions, size, state, style, in one property." },
  ],
  footnote:"Properties turn a rigid component into a flexible one configured entirely from the right-hand panel." },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Power Feature", title:"Variants",
  layout:"bullets",
  body:[
    "<b>Variants group related versions of a component</b> into one, with properties to switch between them.",
    "A button's variants: <em>primary, secondary, ghost</em> times <em>default, hover, disabled.</em> One component, every combination.",
    "Instead of twelve separate button components cluttering your assets, you have <b>one, configured by properties.</b>",
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

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Editing the Master", title:"Edit Object Mode",
  layout:"split",
  body:{
    left:[
      "<b>To change a component everywhere, edit the master,</b> not an instance. Double-click into the main component to edit it.",
      "Edits to the master <em>propagate to every instance</em> across every file using the library, instantly.",
      "Edit an instance instead and you create a local override, which only affects that one copy. Know which you're doing.",
    ],
    right:{ tone:"navy", t:"The discipline",
      b:"Master edits flow everywhere. Instance edits stay local. The most common Figma mistake is editing an instance when you meant the master, then wondering why the rest didn't update. Always know which you're in." },
  } },

{ type:"toolOpen", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Hands On", title:"Componentise Your Card",
  tool:"figma",
  instruction:"Turn your Day 3 card into a component with variants",
  sub:"Make the master, add a variant or two, then place instances. This is your case study's first real component.",
  need:["Your card from Day 3","Your variables","Shortcut: Cmd/Ctrl + Alt + K to create component"] },

{ type:"exercise", day:5, session:1, tool:"figma",
  task:"Build a {hl}Component System{/hl}",
  sub:"Make your card a component. Add a button component with two variants. Place instances and override content.",
  minutes:30,
  deliverable:"A card component and a two-variant button, used as instances in your design." },

{ type:"wrap", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"Build systems, not pages", b:"Atoms to pages. Every interface is small combinable parts. Fix one atom and the fix flows up through everything built on it." },
    { n:"02", t:"Components are atomic design, realised", b:"Master and instances, linked. Change the master, every instance updates. The biggest consistency and speed win in Figma." },
    { n:"03", t:"Properties and variants make it flexible", b:"One button component holds every type and state as variants, configured from the panel. A system, not a pile of duplicates." },
  ],
  next:"S2 · Dev Handoff + Sharing (10:40) · Turn your system into something a developer can build from." },

// ══ DAY 5 · S2 · Dev Handoff + Sharing (8) ═══════════════════════
{ type:"cover", day:5, session:2, time:"10:40 - 12:30",
  title:"Dev Handoff\n+ {hl}Sharing{/hl}",
  subtitle:"Dev Mode · Inspect · Export · Version History" },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"The Critical Bridge", title:"What Handoff Really Is",
  layout:"bullets",
  body:[
    "<b>Handoff is where design becomes product.</b> A beautiful file that a developer can't build from has failed at the last step.",
    "It's <em>not throwing a file over the wall.</em> It's a conversation: specs, intent, edge cases, and the states you designed.",
    "Good handoff answers the developer's questions <b>before they ask them:</b> spacing, colour, behaviour, and what happens when things go wrong.",
    "Everything you built, variables, components, states, was quietly preparing for this moment. A systematised file hands off cleanly.",
  ] },

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
  eyebrow:"Getting Assets Out", title:"Exporting + Asset Settings",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Export settings", b:"Set any layer to export as PNG, JPG, SVG, or PDF, at multiple resolutions at once. Icons and illustrations go out as SVG, sharp at any size." },
    { tone:"navy", t:"Naming and slices", b:"Name exports clearly and use slices for precise regions. Tidy, well-named assets save the developer hours and prevent the wrong file shipping." },
  ],
  footnote:"Export discipline mirrors layer discipline. A messy file exports messy assets." },

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
  sub:"Open your design in Dev Mode. Mark a frame ready for dev. Set up an SVG export for one icon. Add a spec comment.",
  minutes:25,
  deliverable:"One frame marked dev-ready, one asset export configured, one clarifying comment pinned." },

{ type:"wrap", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Handoff is a conversation", b:"Not a file thrown over a wall. It answers the developer's questions before they ask: specs, states, behaviour, and edge cases." },
    { n:"02", t:"Dev Mode pays off your system", b:"Inspect gives exact specs and code. Your variables arrive as the same named tokens the developer ships. Design and build speak one language." },
    { n:"03", t:"Version history and comments protect the work", b:"Roll back anytime, share with the right permissions, and keep feedback pinned to the exact element. One platform from first sticky to handoff." },
  ],
  next:"S3 · Portfolio + Capstone I (1:30) · Now we turn this week's work into a story that gets you hired." },

// ══ DAY 5 · S3 · Portfolio + Capstone I (13) ═════════════════════
{ type:"cover", day:5, session:3, time:"1:30 - 3:30",
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

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Telling It Well", title:"Portfolio Storytelling Principles",
  layout:"bullets",
  body:[
    "<b>Lead with the outcome or the insight,</b> not a long preamble. Hook the reader in the first screenful.",
    "<b>Be honest about constraints and failures.</b> \"This didn't work, so I changed it\" reads as maturity, not weakness.",
    "<b>Show the messy middle:</b> sketches, rejected ideas, test findings. Process artefacts prove the thinking is real.",
    "<b>Quantify where you can,</b> qualify where you can't. \"Cut drop-off\" is good. \"Cut drop-off by a third\" is better.",
  ] },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"You Already Have One", title:"Your Week Is a Case Study",
  layout:"split",
  body:{
    left:[
      "<b>You've unknowingly built a full case study this week,</b> following the exact arc that gets people hired.",
      "Problem and research: <em>Day 1 and 2.</em> Insight: your JTBD and synthesis. Decisions: your wireframes, prototype, and tests.",
      "Outcome: your usability findings and what you'd do next. <b>It's all there, in your Figma and FigJam files.</b>",
    ],
    right:{ tone:"gold", t:"The capstone",
      b:"For the rest of today, you assemble this week's work into one portfolio case study. Problem, research, insight, decisions, outcome. By 5pm tomorrow you walk out with a real, presentable project, not just notes." },
  } },

{ type:"toolOpen", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Hands On", title:"Open a Fresh Figma Page",
  tool:"figma",
  instruction:"Create a page named Case Study",
  sub:"We'll lay out your week as a five-section narrative: problem, research, insight, decisions, outcome.",
  need:["All your files from Days 1 to 4","Your research, persona, and test findings","The case study arc"] },

{ type:"exercise", day:5, session:3, tool:"figma",
  task:"Capstone I · {hl}Structure Your Story{/hl}",
  sub:"Lay out the five sections. Drop in your strongest artefact for each. Write a one-line caption per section.",
  minutes:35,
  deliverable:"A five-section case study skeleton with your best artefact and a caption in each." },

{ type:"discussion", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  label:"The Insight Test",
  question:"In one sentence:\nwhat was the {hl}key insight{/hl}\nthat shaped your design this week?",
  hint:"If you can't say it in a sentence, the case study isn't focused yet. 2 minutes." },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Common Mistakes", title:"What Sinks a Portfolio",
  layout:"cards3",
  body:[
    { icon:"warn", t:"All output, no thinking", b:"Screens with no story. The reviewer can't tell whether you decided anything or just decorated." },
    { icon:"warn", t:"Too long, no hierarchy", tone:"navy", b:"A wall of text and images with no lead, no structure. The reader bounces before the good part." },
    { icon:"warn", t:"No outcome or reflection", b:"It ends at the final screen. No results, no learnings, no sense that you'd grow from it." },
  ],
  footnote:"Avoid these three and you're ahead of most portfolios reviewers see all day." },

{ type:"reference", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Reference · Keep This Open", title:"The Case Study Checklist",
  head:["Section","Must Answer","Common Failure"],
  rows:[
    ["Problem","What was wrong, for whom, why it mattered","Starting with the solution, no stakes set"],
    ["Research","What you did and what you found","Listing methods with no findings"],
    ["Insight","The realisation that changed direction","No turning point, just a project log"],
    ["Decisions","What you designed and why","Showing screens without the reasoning"],
    ["Outcome","Results, learnings, what's next","Ending at the final screen, no reflection"],
    ["Story","Leads with insight, honest about constraints","A wall of text with no hierarchy or hook"],
  ],
  note:"If a section can't answer its question, that's the part of your case study to rework first." },

{ type:"wrap", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"A portfolio sells thinking", b:"Case studies, not galleries. Reviewers scan for reasoning and judgement in seconds. One deep story beats ten thin ones." },
    { n:"02", t:"The arc is problem to outcome", b:"Problem, research, insight, decisions, outcome. Lead with the insight. For every screen, answer why it is the way it is." },
    { n:"03", t:"You already have the case study", b:"This whole week followed the arc. Your files hold the problem, research, insight, decisions, and outcome. Now you assemble it." },
  ],
  next:"S4 · Capstone II + Wrap (3:40) · Finish the story, present it, and close the masterclass." },

// ══ DAY 5 · S4 · Capstone II + Wrap (5) ══════════════════════════
{ type:"cover", day:5, session:4, time:"3:40 - 5:00",
  title:"Capstone II\n+ {hl}Wrap{/hl}",
  subtitle:"Finish · Present · Where You Go Next" },

{ type:"exercise", day:5, session:4, tool:"figma",
  task:"Capstone II · {hl}Finish + Polish{/hl}",
  sub:"Complete your case study. Tighten captions, apply the design principles, make the narrative flow start to finish.",
  minutes:35,
  deliverable:"A complete, presentable case study: problem to outcome, with your artefacts and your reasoning." },

{ type:"exercise", day:5, session:4, tool:"figjam",
  task:"Present in {hl}90 Seconds{/hl}",
  sub:"Pair up. Walk your partner through your case study in 90 seconds: problem, insight, decision, outcome.",
  minutes:20,
  deliverable:"A 90-second spoken walkthrough of your case study. Practice the story you'll tell in interviews." },

{ type:"theory", day:5, session:4, sessionTitle:"Capstone II + Wrap",
  eyebrow:"Where You Go Next", title:"Your Path From Here",
  layout:"cards3",
  body:[
    { icon:"portfolio", t:"Build the portfolio", b:"Turn this capstone into a published case study. Add one or two more real projects using the same arc." },
    { icon:"figma", t:"Keep the tools sharp", b:"Use Figma weekly. Rebuild interfaces you admire. Fluency comes from reps, not from courses alone." },
    { icon:"research", t:"Stay close to users", b:"Every project, talk to real people. The research habit is what separates designers from decorators long term." },
  ],
  footnote:"You have the method, the tools, and the AI workflows. From here it's practice, projects, and people." },

{ type:"wrap", day:5, session:4, sessionTitle:"Capstone II + Wrap",
  eyebrow:"Masterclass Complete", title:"Five Days. One Complete Designer.",
  cards:[
    { n:"01", t:"You can run the full process", b:"Research, JTBD, synthesis with AI, wireframes, prototypes, usability testing, handoff. The entire arc, end to end, with judgement at every step." },
    { n:"02", t:"You think and build in systems", b:"Heuristics and principles as your lens. Tokens, components, variants, and atomic design as your craft. Figma fluency throughout." },
    { n:"03", t:"You have a story to tell", b:"A complete, portfolio-ready case study and the narrative to present it. You leave with proof, not just knowledge." },
  ],
  next:"Thank you. Your certificate is at designient.com/verify. Now go build, talk to users, and tell the story." },

];
