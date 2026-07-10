import type { ManifestSlide as Slide } from "../types";

export const day3: Slide[] = [

// ── DAY 3 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:3,
  dayLabel:"Day 3 of 5 · Riyadh, KSA · 14 July 2026",
  title:"Figma Foundations\n+ Design Craft",
  theme:"From blank canvas to a privacy-aware design system",
  sessions:[
    "S1 · Figma Setup + Data Privacy Foundations  9:00 - 10:30",
    "S2 · Auto Layout Fast Review  10:45 - 12:15",
    "S3 · Design Systems + Variables + AI Exploration  1:00 - 2:15",
    "S4 · Privacy-Safe AI Prompting Workshop  2:15 - 3:00",
  ] },

// ══ DAY 3 · S1 · Figma Setup + Data Privacy Foundations (9) ══════
{ type:"cover", day:3, session:1, time:"9:00 - 10:30",
  title:"Figma Setup +\n{hl}Data Privacy{/hl} Foundations",
  subtitle:"Quick Setup · What Data You're Allowed to Touch" },

{ type:"toolOpen", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  eyebrow:"Hands On · 10 Minutes", title:"Let's Open Figma",
  tool:"figma",
  instruction:"Create your masterclass design file",
  sub:"Name it: [Your Name] · UX Masterclass. Everything you build for the rest of the week, on your cohort's shared challenge, lives here.",
  need:["Your Figma account","The desktop app or browser","Your cohort's shared challenge brief"] },

{ type:"theory", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  eyebrow:"60-Second Recap", title:"Frames, Layers, Everything Nests",
  layout:"cards3",
  body:[
    { icon:"layout", t:"Everything is a frame", b:"Screens, cards, buttons — all frames, nested inside frames. You already know this. It's the whole model." },
    { icon:"system", t:"Everything is a layer", tone:"navy", b:"Every object stacks in the Layers panel. Naming and order are how a big file stays navigable." },
    { icon:"vector", t:"Pages organise", b:"Split research, wireframes, UI, and prototype across pages. Keep the file legible as it grows." },
  ] },

{ type:"statement", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  quote:"\"Before you design a citizen-facing screen,\nknow {hl}what data you're allowed to touch.{/hl}\"",
  attribution:"The rest of this session is the privacy foundation Day 3 S4 puts into practice." },

{ type:"theory", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  eyebrow:"Before Anything Enters a Prompt", title:"What Counts as Personal & Sensitive Data",
  layout:"bullets",
  body:[
    "<b>Personal data</b> identifies a specific individual: name, national ID, phone, email, address, photo. The baseline category to protect.",
    "<b>Sensitive personal data</b> carries higher risk if exposed: health records, financial data, biometrics, religious or political information.",
    "<b>Citizen and government data</b> often carries additional handling rules beyond general privacy law — classification, residency, and cross-border transfer restrictions can all apply.",
    "<b>Consent and purpose matter as much as the data itself.</b> Data collected for one purpose (research) being reused for another (marketing, AI training) is its own violation.",
    "None of this is optional context. It's the lens your cohort's shared challenge gets designed through, starting today.",
  ] },

{ type:"framework", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  eyebrow:"The Working Model", title:"Data Classification for Design Work",
  kind:"stack",
  data:{ layers:[
    { t:"Public", d:"Marketing copy, published service info, generic UI patterns. Safe to paste anywhere, including third-party AI tools." },
    { t:"Internal", d:"Unreleased flows, internal component specs, draft copy. Confidential to your org, not for third-party AI without approval." },
    { t:"Personal", d:"Names, contact details, IDs, real user quotes. Anonymise before it leaves your file, always." },
    { t:"Sensitive / Restricted", d:"Health, financial, biometric, or citizen-service data. Never pastes into a third-party AI tool. No exceptions." },
  ] },
  note:"Classify before you paste, not after. This is the checklist Day 3 S4 makes you apply to a real prompt." },

{ type:"example", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  eyebrow:"Same Research Question, Two Prompts", title:"Pasting Citizen Data Into AI Tools · Risky vs Safe",
  mode:"split",
  panels:{
    negative:{ heading:"Risky · real data pasted raw", items:[
      { l:"Prompt", t:"<b>\"Summarise this citizen's application: Sara Al-Fahad, ID 10829XXXX, income 8,200 SAR...\"</b>" },
      { l:"Problem", t:"<b>Real name, real national ID, real financial data</b> now sits on a third-party server outside your control." },
      { l:"Risk tier", t:"<b>Sensitive / Restricted.</b> This should never have left your organisation's boundary." },
    ]},
    positive:{ heading:"Safe · anonymised and synthetic", items:[
      { l:"Prompt", t:"<b>\"Summarise this applicant profile: mid-career professional, income band 3, standard application...\"</b>" },
      { l:"Fix", t:"<b>Name, ID, and exact figures replaced</b> with a band or category. The pattern survives, the identity doesn't." },
      { l:"Risk tier", t:"<b>Internal at most.</b> Safe to explore with an AI tool, still worth checking org policy first." },
    ]},
  },
  takeaway:"Same research question, same usefulness to your design work — one version could leak a citizen's identity, the other can't." },

{ type:"reference", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  eyebrow:"Leave-Behind · Keep This Open", title:"Data Handling Checklist for AI Design Tools",
  head:["Input Type","Safe to Paste?","Consideration"],
  rows:[
    ["Public UI patterns / inspiration","Usually yes","No proprietary data, generic references only"],
    ["Anonymised user quotes","Caution","Strip names, IDs, and org-specific context first"],
    ["Internal component specs / tokens","Usually no","Proprietary design system data — check org policy"],
    ["Unreleased product screens","No","Confidential until launch — never paste into third-party AI"],
    ["Citizen-facing gov interfaces / real applicant data","No","Sensitive/restricted data classes prohibit external AI processing"],
    ["Synthetic / placeholder content","Yes","Generated filler with no real user data"],
  ],
  note:"When unsure: use synthetic data, work offline, or use an org-approved enterprise AI tool with a data processing agreement. Day 3 S4 applies this checklist to a real prompt." },

{ type:"wrap", day:3, session:1, sessionTitle:"Figma Setup + Data Privacy Foundations",
  eyebrow:"Session 1 Complete", title:"Set Up, and Set the Boundary",
  cards:[
    { n:"01", t:"Your file is live", b:"Named, set up, ready for your cohort's shared challenge. The Figma model — frames, layers, pages — is a 60-second recap, not new territory." },
    { n:"02", t:"You know the four data tiers", b:"Public, internal, personal, sensitive/restricted. Classify before you paste into any AI tool, not after." },
    { n:"03", t:"You have the checklist", b:"Six input types, rated safe or not, with the reasoning. Day 3 S4 puts it to work on a real prompt." },
  ],
  next:"S2 · Auto Layout Fast Review (10:45) · A 15-minute refresh on the feature that makes designs behave like products." },

// ══ DAY 3 · S2 · Auto Layout Fast Review (5) ═════════════════════
{ type:"cover", day:3, session:2, time:"10:45 - 12:15",
  title:"Auto Layout\n{hl}Fast Review{/hl}",
  subtitle:"Fill · Hug · Fixed · Nested Auto Layout" },

{ type:"statement", day:3, session:2, sessionTitle:"Auto Layout Fast Review",
  quote:"\"Layout is not decoration.\nIt is {hl}the logic of how things relate.{/hl}\"",
  attribution:"You know auto layout — this session refreshes and applies it to your card." },

{ type:"reference", day:3, session:2, sessionTitle:"Auto Layout Fast Review",
  eyebrow:"15-Minute Review · Keep This Open", title:"Auto Layout · Fill, Hug, Fixed + Nested",
  head:["Behaviour","Use For","How"],
  rows:[
    ["Hug contents","Buttons, tags, chips","Frame shrinks to wrap content. Resizing → Hug."],
    ["Fixed size","Cards, avatars, set panels","Frame stays a set dimension. Resizing → Fixed."],
    ["Fill container","Inputs, flexible columns","Frame stretches to fill parent. Resizing → Fill."],
    ["Nested auto layout","Cards, lists, full screens","Vertical stack inside horizontal footer inside card frame."],
    ["Add auto layout","Any frame","Shift + A"],
    ["Adjust spacing","Gap between items","Drag handles or set in panel"],
    ["Boolean ops","Combine shapes","Union, subtract, intersect — footnote only, not a deep teach"],
  ],
  note:"Auto layout makes frames respond to content. Nest frames inside frames and whole screens become responsive. You already know this — this is the refresher." },

{ type:"exercise", day:3, session:2, tool:"figma",
  task:"Auto Layout {hl}Card{/hl}",
  sub:"Build a card for your cohort's shared challenge: image, title, tag, and button, using nested auto layout so it adapts to its content.",
  minutes:15,
  deliverable:"One responsive card using nested auto layout. Add text and watch it grow correctly." },

{ type:"wrap", day:3, session:2, sessionTitle:"Auto Layout Fast Review",
  eyebrow:"Session 2 Complete", title:"Auto Layout Refreshed",
  cards:[
    { n:"01", t:"Fill, hug, fixed on every layer", b:"The three resize behaviours. Master the combination and layout becomes effortless." },
    { n:"02", t:"Nest for whole screens", b:"Auto layout inside auto layout, all the way down. Build a screen that way and responsiveness comes almost for free." },
    { n:"03", t:"You have a card to build on", b:"Your responsive card is the foundation for variables, components, and AI exploration this afternoon." },
  ],
  next:"S3 · Design Systems + Variables (1:00) · Turn these pieces into a reusable system, then explore variants with AI." },

// ══ DAY 3 · S3 · Design Systems + Variables + AI Exploration (12) ═
{ type:"cover", day:3, session:3, time:"1:00 - 2:15",
  title:"Design Systems\n+ {hl}Variables{/hl}",
  subtitle:"Tokens · Components · AI-Assisted Exploration" },

{ type:"statement", day:3, session:3, sessionTitle:"Design Systems + Variables",
  quote:"\"A design system is not a library.\nIt is {hl}a shared language.{/hl}\"",
  attribution:"Components are the vocabulary. Consistency is the grammar." },

{ type:"theory", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Concept", title:"What a Design System Is",
  layout:"bullets",
  body:[
    "<b>A design system is the single source of truth</b> for how a product looks and behaves: colours, type, spacing, components, and the rules for using them.",
    "It is built in layers: <b>tokens</b> (the raw decisions), <b>components</b> (reusable parts), <b>patterns</b> (combinations), and <b>templates</b> (full layouts).",
    "A real system is <b>living,</b> not a one-time style guide. Update it once and every product using it updates too.",
  ] },

{ type:"framework", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"Token Architecture", title:"Primitive to Semantic to Component to Template",
  kind:"stack",
  data:{ layers:[
    { t:"Primitive tokens", d:"Raw values. navy-900 = #0D1B2E, gold-500 = #B8953F. The full palette, named by what they are." },
    { t:"Semantic tokens", d:"Roles, not values. bg-surface points to navy-900, accent points to gold-500. Named by what they do." },
    { t:"Component tokens", d:"button-bg points to accent. Components reference semantics, never raw values. Maximum flexibility." },
    { t:"Patterns + templates", d:"Components combine into patterns (a form, a nav bar), patterns arrange into templates (a full screen)." },
  ] },
  note:"Theme an entire product by repointing semantic tokens. Change a token and the change flows all the way up to the template." },

{ type:"theory", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Modern Layer", title:"Figma Variables · Beyond Styles",
  layout:"bullets",
  body:[
    "<b>Variables store named values</b> for colour, number, string, and boolean, that you reference everywhere instead of hard-coding.",
    "Unlike styles, variables support <em>modes:</em> one variable can hold a light value and a dark value, so theming becomes a single switch.",
    "They map directly to <b>developer tokens.</b> The variable you name here is the token the engineer uses in code.",
  ] },

{ type:"example", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"Why It Pays Off", title:"One Variable, Three Places",
  mode:"annotated",
  panels:[
    { l:"The setup", t:"<b>accent-colour</b> is defined once and used by a button, a card border, and a link." },
    { l:"The change", t:"<b>Marketing wants a new brand colour.</b> You update one variable, not three components." },
    { l:"The result", t:"<b>Button, border, and link all update instantly</b> and stay perfectly in sync. Zero missed instances." },
    { l:"Without variables", t:"<b>You'd hunt every hard-coded colour by hand,</b> miss several, and ship an inconsistent product." },
  ],
  takeaway:"This is the entire argument for a token system: change once, update everywhere, never drift." },

{ type:"toolOpen", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"Hands On", title:"Open Your Variables Panel",
  tool:"figma",
  instruction:"Create your first colour variables",
  sub:"We'll define five core variables and apply them to the card you built in S2 for your cohort's shared challenge.",
  need:["Your card from S2","The local variables panel","The brand palette: navy, gold, cream"] },

{ type:"exercise", day:3, session:3, tool:"figma",
  task:"Variables + {hl}Styles{/hl}",
  sub:"Create five variables: background, surface, primary, text, border. Apply all five to your card.",
  minutes:15,
  deliverable:"Five named colour variables applied to your card. Change one and watch the card update." },

{ type:"theory", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"Acceleration, Not Replacement", title:"AI-Accelerated Design Exploration",
  layout:"bullets",
  body:[
    "<b>Figma's AI features and generative tools speed up variant and layout exploration,</b> not design judgement.",
    "Use AI to <em>generate options faster:</em> multiple button variants, layout alternatives, placeholder content — then you choose and refine.",
    "The designer still owns <b>hierarchy, accessibility, and brand fit.</b> AI proposes, you decide what ships.",
    "Now that your card has real variables, exploring variants with AI keeps every option automatically on-token." ] },

{ type:"example", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"Before / After", title:"Manual Build vs AI-Assisted Exploration",
  mode:"split",
  panels:{
    negative:{ heading:"Manual · 45 minutes", items:[
      { l:"Card variants", t:"<b>Build three card layouts by hand,</b> adjusting spacing and hierarchy for each." },
      { l:"Button states", t:"<b>Create each variant separately,</b> ensuring token consistency across all." },
      { l:"Outcome", t:"<b>Two strong options,</b> but exploration was narrow because time ran out." },
    ]},
    positive:{ heading:"AI-assisted · 15 minutes", items:[
      { l:"Card variants", t:"<b>Prompt Figma AI for layout alternatives</b> on your tokenised card. Review, pick two, refine." },
      { l:"Button states", t:"<b>Generate variant suggestions,</b> then bind to your existing variables." },
      { l:"Outcome", t:"<b>Five options explored,</b> two refined to production quality. Judgement applied at the end." },
    ]},
  },
  takeaway:"AI widens exploration. Your variables and components keep the output on-system. You still choose what ships." },

{ type:"exercise", day:3, session:3, tool:"figma",
  task:"AI {hl}Exploration{/hl}",
  sub:"Use AI-assisted exploration on the card/component you built for your cohort's shared challenge. Generate variants, pick one, refine with your tokens.",
  minutes:15,
  deliverable:"At least two explored variants of your card, one selected and refined with your variable system." },

{ type:"wrap", day:3, session:3, sessionTitle:"Design Systems + Variables",
  eyebrow:"Session 3 Complete", title:"Design System + Exploration Done",
  cards:[
    { n:"01", t:"You think in systems", b:"Primitive to semantic to component to template. Variables for everything that should theme and scale." },
    { n:"02", t:"Your card is a governed component", b:"Variables applied, variants explored with AI, judgement applied at every step. This is what Day 4 audits and Day 5 hands off." },
    { n:"03", t:"AI widened the search, not the decision", b:"Five variants explored in the time it used to take to build two by hand. You still picked what ships." },
  ],
  next:"S4 · Privacy-Safe AI Prompting Workshop (2:15) · Apply this morning's data classification to a real prompt." },

// ══ DAY 3 · S4 · Privacy-Safe AI Prompting Workshop (8) ══════════
{ type:"cover", day:3, session:4, time:"2:15 - 3:00",
  title:"Privacy-Safe AI\n{hl}Prompting Workshop{/hl}",
  subtitle:"Apply the Checklist · Rewrite a Risky Prompt" },

{ type:"statement", day:3, session:4, sessionTitle:"Privacy-Safe AI Prompting Workshop",
  quote:"\"You classified the data this morning.\nNow prove you can {hl}act on it.{/hl}\"",
  attribution:"Every prompt you write from here on gets checked against this morning's framework." },

{ type:"reference", day:3, session:4, sessionTitle:"Privacy-Safe AI Prompting Workshop",
  eyebrow:"From This Morning · Keep This Open", title:"Data Handling Checklist for AI Design Tools",
  head:["Input Type","Safe to Paste?","Consideration"],
  rows:[
    ["Public UI patterns / inspiration","Usually yes","No proprietary data, generic references only"],
    ["Anonymised user quotes","Caution","Strip names, IDs, and org-specific context first"],
    ["Internal component specs / tokens","Usually no","Proprietary design system data — check org policy"],
    ["Citizen-facing gov interfaces / real applicant data","No","Sensitive/restricted data classes prohibit external AI processing"],
    ["Synthetic / placeholder content","Yes","Generated filler with no real user data"],
  ],
  note:"Same checklist as S1. This session is where you apply it under time pressure, on a real prompt about your cohort's shared challenge." },

{ type:"example", day:3, session:4, sessionTitle:"Privacy-Safe AI Prompting Workshop",
  eyebrow:"Worked Rewrite", title:"Risky Prompt → Privacy-Safe Rewrite",
  mode:"split",
  panels:{
    negative:{ heading:"Before · fails the checklist", items:[
      { l:"Prompt", t:"<b>\"Draft a rejection message for applicant Mohammed bin Salem, national ID 10456XXXX, application #88213.\"</b>" },
      { l:"Fails on", t:"<b>Real name, real national ID, real application number</b> — all personal, none of it needed to draft the message." },
    ]},
    positive:{ heading:"After · passes the checklist", items:[
      { l:"Prompt", t:"<b>\"Draft a rejection message for a benefits application, tone empathetic, next-steps included.\"</b>" },
      { l:"Passes on", t:"<b>Zero identifying data.</b> The message template is reusable for every applicant — merge real names in your own system, never in the prompt." },
    ]},
  },
  takeaway:"The safe version is usually more useful, not less. A reusable template beats a one-off answer tied to one citizen's data." },

{ type:"toolOpen", day:3, session:4, sessionTitle:"Privacy-Safe AI Prompting Workshop",
  eyebrow:"Hands On", title:"Open Claude or Your Preferred AI Tool",
  tool:"claude",
  instruction:"Draft one risky prompt for your cohort's shared challenge",
  sub:"Write the prompt the way you'd actually write it under time pressure — then we rewrite it together against the checklist.",
  need:["Your cohort's shared challenge brief","The data handling checklist","A risky first-draft prompt"] },

{ type:"exercise", day:3, session:4, tool:"claude",
  task:"Privacy-Safe {hl}Prompt Rewrite{/hl}",
  sub:"Take your risky draft prompt for the shared challenge. Classify what's exposed, then rewrite it to pass every row of the checklist.",
  minutes:20,
  deliverable:"One before/after prompt pair, with the specific data class removed or anonymised in the rewrite." },

{ type:"discussion", day:3, session:4, sessionTitle:"Privacy-Safe AI Prompting Workshop",
  label:"Responsible Design Checkpoint — Day 3",
  question:"Before you run anything through an AI design tool\ntomorrow or after this training:\n{hl}what's your checklist?{/hl}",
  hint:"Name one input you'd paste freely and one you wouldn't. 2 minutes." },

{ type:"wrap", day:3, session:4, sessionTitle:"Privacy-Safe AI Prompting Workshop",
  eyebrow:"Day 3 Complete", title:"Build Foundation Done",
  cards:[
    { n:"01", t:"You build in systems", b:"Auto layout refreshed, variables applied, AI-explored variants on-token. Token to component architecture in place." },
    { n:"02", t:"You classify before you paste", b:"Public, internal, personal, sensitive/restricted. Four tiers, applied to a real prompt, not just theory." },
    { n:"03", t:"You can rewrite a risky prompt", b:"You've done it once, live, on your cohort's shared challenge. That's the habit that has to survive past this week." },
  ],
  next:"Day 4 · Responsible AI-Augmented Design · Accessibility, governance, and prototyping with constraints." },

];
