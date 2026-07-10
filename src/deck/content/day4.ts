import type { ManifestSlide as Slide } from "../types";

export const day4: Slide[] = [

// ── DAY 4 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:4,
  dayLabel:"Day 4 of 5 · Riyadh, KSA · 15 July 2026",
  title:"Responsible\n{hl}AI-Augmented Design{/hl}",
  theme:"Design responsibly, or don't ship it.",
  sessions:[
    "S1 · Accessibility & Inclusive Design, Applied  9:00 - 10:30",
    "S2 · AI Ethics & Governance Frameworks  10:45 - 12:15",
    "S3 · Governance Scenario Workshop  1:00 - 2:15",
    "S4 · Prototyping with Responsible-Design Constraints  2:15 - 3:00",
  ] },

// ══ DAY 4 · S1 · Accessibility & Inclusive Design (10) ═══════════
{ type:"cover", day:4, session:1, time:"9:00 - 10:30",
  title:"Accessibility &\n{hl}Inclusive Design{/hl}",
  subtitle:"WCAG Applied · Contrast · Focus · Screen Reader Order" },

{ type:"statement", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  quote:"\"Accessibility is not a feature.\nIt is {hl}a quality bar.{/hl}\"",
  attribution:"If a user can't perceive, operate, understand, or rely on your interface, the design failed — regardless of how it looks." },

{ type:"theory", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  eyebrow:"What Designers Actually Check", title:"WCAG Core Principles · POUR",
  layout:"cards4",
  body:[
    { icon:"useful", t:"Perceivable", b:"Users can see or hear the content. Sufficient contrast, text alternatives for images, captions for video." },
    { icon:"usable", t:"Operable", tone:"navy", b:"Users can navigate and interact. Keyboard access, focus visible, no seizure triggers, enough time to act." },
    { icon:"research", t:"Understandable", b:"Users can comprehend the interface. Readable language, predictable behaviour, helpful error messages." },
    { icon:"check", t:"Robust", b:"Content works across assistive technologies and browsers. Semantic structure, valid markup, future-compatible." },
  ],
  footnote:"You don't need the full WCAG spec memorised. You need POUR as a lens on every component you ship." },

{ type:"framework", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  eyebrow:"Applied to Your Day 3 Components", title:"Contrast Tokens · Focus States · Screen Reader Order",
  kind:"stack",
  data:{ layers:[
    { t:"Contrast tokens", d:"Text on background meets WCAG AA minimum (4.5:1 body, 3:1 large text). Use your semantic colour tokens, not one-off hex values." },
    { t:"Focus states", d:"Every interactive element has a visible focus ring for keyboard users. Not optional, not removed for aesthetics." },
    { t:"Screen reader order", d:"Annotation layer showing reading order. DOM/logical order matches visual intent. Icons have labels." },
    { t:"Touch targets", d:"Minimum 44×44px for interactive elements. Spacing between targets prevents mis-taps." },
  ] },
  note:"Apply these directly to the component set you built on Day 3. Theory becomes practice on your own work." },

{ type:"example", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  eyebrow:"Before / After", title:"Card Component · Gaps Found and Fixed",
  mode:"split",
  panels:{
    negative:{ heading:"Before · accessibility gaps", items:[
      { l:"Contrast", t:"<b>Light grey text on cream background</b> — fails WCAG AA. Unreadable in bright light." },
      { l:"Focus", t:"<b>No focus ring on the CTA button.</b> Keyboard users can't see where they are." },
      { l:"Labels", t:"<b>Icon-only action with no aria-label.</b> Screen reader says \"button\" with no context." },
      { l:"Touch", t:"<b>Tag chip is 28px tall.</b> Too small for reliable touch on mobile." },
    ]},
    positive:{ heading:"After · annotated and fixed", items:[
      { l:"Contrast", t:"<b>text-primary token applied</b> — 4.8:1 ratio. Passes AA on surface background." },
      { l:"Focus", t:"<b>2px focus ring using accent token,</b> visible on keyboard tab. Meets focus-visible pattern." },
      { l:"Labels", t:"<b>aria-label=\"Save to favourites\"</b> on icon button. Screen reader announces intent." },
      { l:"Touch", t:"<b>Chip height increased to 44px</b> with padding. Meets minimum touch target." },
    ]},
  },
  takeaway:"These are designer-checkable fixes. No developer required to spot them — but a developer is required to ship them correctly." },

{ type:"theory", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  eyebrow:"Connecting Back to Day 1", title:"Inclusion Gaps You Flagged on Day 1",
  layout:"bullets",
  body:[
    "<b>Return to the accessibility and inclusion pain points you flagged in Day 1's discovery notes.</b> Are any of them addressed in your current design?",
    "Accessibility gaps discovered in research are <em>design requirements,</em> not nice-to-haves. They belong in the component spec.",
    "If a pain point was \"users with low vision can't read the confirmation screen,\" that's a contrast and typography fix on your card today.",
    "<b>Day 1 flagged it. Day 4 fixes it.</b> That's responsible design as a process, not a retrofit.",
  ] },

{ type:"toolOpen", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  eyebrow:"Hands On", title:"Open Your Day 3 Component",
  tool:"figma",
  instruction:"Open the card component you built on Day 3",
  sub:"We'll audit it against the accessibility checklist and fix what we find.",
  need:["Your Day 3 card component","The accessibility checklist (next slide)","Day 1 inclusion flags"] },

{ type:"exercise", day:4, session:1, tool:"figma",
  task:"Accessibility {hl}Audit + Fix{/hl}",
  sub:"Audit your Day 3 card against the checklist. Fix at least three issues: contrast, focus, labels, or touch targets.",
  minutes:25,
  deliverable:"One annotated, accessibility-improved card component with at least three documented fixes." },

{ type:"discussion", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  label:"The Inclusion Test",
  question:"Show your fixed component to a partner.\nCan they {hl}tab to every interactive element{/hl}\nand see where focus is?\nName one user of your cohort's shared challenge who'd have hit this issue.",
  hint:"2 minutes. Keyboard-only navigation. No mouse." },

{ type:"reference", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  eyebrow:"Leave-Behind · Keep This Open", title:"Accessibility Checklist for Designers",
  head:["Check","Pass Criteria","Common Failure"],
  rows:[
    ["Colour contrast","Body text ≥ 4.5:1, large text ≥ 3:1","Light grey on light background"],
    ["Focus visible","Keyboard focus ring on all interactives","Focus ring removed for aesthetics"],
    ["Icon labels","Every icon-only control has aria-label","Screen reader says \"button\" only"],
    ["Touch targets","Interactive elements ≥ 44×44px","Small chips, tight icon buttons"],
    ["Reading order","Logical order matches visual layout","CSS reorders content confusingly"],
    ["Error messages","Plain language, says what to do","\"Error 400\" or colour-only errors"],
    ["Motion","Respects prefers-reduced-motion","Auto-playing animations with no off switch"],
  ],
  note:"Run every component through this list before handoff. It's faster to fix here than in production." },

{ type:"wrap", day:4, session:1, sessionTitle:"Accessibility & Inclusive Design, Applied",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"POUR is your lens", b:"Perceivable, operable, understandable, robust. Four principles, designer-checkable, applied to your own components." },
    { n:"02", t:"Contrast, focus, labels, targets", b:"The four fixes that catch most failures. Token-based contrast, visible focus, labelled icons, sized touch targets." },
    { n:"03", t:"Day 1 gaps are Day 4 requirements", b:"Inclusion pain points from discovery become design specs. You flagged them Monday, you fixed them today." },
  ],
  next:"S2 · AI Ethics & Governance Frameworks (10:45) · Why governance isn't optional when AI is in the workflow." },

// ══ DAY 4 · S2 · AI Ethics & Governance Frameworks (10) ══════════
{ type:"cover", day:4, session:2, time:"10:45 - 12:15",
  title:"AI Ethics &\n{hl}Governance{/hl}",
  subtitle:"EU AI Act · NIST AI RMF · Applied to Design Tools" },

{ type:"theory", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"Why Now", title:"AI Tools Are Already in Your Workflow",
  layout:"bullets",
  body:[
    "<b>AI-assisted design tools are not coming — they're here.</b> Claude for research, Perplexity for landscape scans, Figma AI for exploration.",
    "Every AI-generated screen, persona, or component recommendation carries <em>governance risk</em> if you ship it without review.",
    "<b>Governance isn't a compliance checkbox.</b> It's the process that ensures AI accelerates good design without introducing harm, bias, or data leakage.",
    "For government and citizen-facing work, this is <b>non-negotiable.</b> The question is not whether to govern — it's how thoroughly.",
  ] },

{ type:"framework", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"Risk Tiering Applied to Design", title:"EU AI Act · Risk Categories for Design-Tool Use",
  kind:"stack",
  data:{ layers:[
    { t:"Unacceptable risk", d:"Prohibited. Social scoring, manipulative dark patterns, biometric categorisation without consent. Never design these." },
    { t:"High risk", d:"Citizen-facing government services, benefits, licensing, healthcare interfaces. Strict documentation, human oversight, audit trail required." },
    { t:"Limited risk", d:"AI-generated content shown to users (chatbots, recommendations). Transparency obligations — users must know AI was involved." },
    { t:"Minimal risk", d:"Internal design exploration, anonymised research synthesis, generic UI generation. Standard data handling applies." },
  ] },
  note:"Most design-tool use falls in limited or minimal risk — but citizen-facing screens generated with AI are high risk. Know which tier you're in." },

{ type:"framework", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"The US Framework", title:"NIST AI Risk Management Framework",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Govern", d:"Establish policies, roles, and accountability for AI use in design. Who approves AI-generated outputs?" },
    { n:"02", t:"Map", d:"Identify context, stakeholders, and potential harms. What could go wrong if this AI output ships unchecked?" },
    { n:"03", t:"Measure", gold:true, d:"Assess and track risks. Bias in personas, hallucinated data, data leakage through prompts." },
    { n:"04", t:"Manage", d:"Prioritise and respond. Review, correct, document, or reject AI outputs before they enter deliverables." },
  ]},
  note:"Govern, Map, Measure, Manage. Applied practically: policy → risk scan → check → ship or fix." },

{ type:"example", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"Both Lenses on One Decision", title:"AI-Generated Citizen Portal Screen",
  mode:"annotated",
  panels:[
    { l:"The decision", t:"<b>Designer used Figma AI to generate a benefits application screen</b> for a government portal. Ready to hand off." },
    { l:"EU AI Act lens", t:"<b>High risk.</b> Citizen-facing government service. Requires human oversight, documentation, and bias audit before release." },
    { l:"NIST · Map", t:"<b>Harm:</b> incorrect field labels could cause citizens to submit wrong data. <b>Stakeholder:</b> vulnerable users with low digital literacy." },
    { l:"NIST · Manage", t:"<b>Action:</b> designer reviews every label, content designer verifies language, accessibility audit run, legal sign-off before dev." },
  ],
  takeaway:"Same screen, two frameworks, one conclusion: AI generated it, humans must govern it before it ships." },

{ type:"theory", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"Transparency Obligation", title:"When Users Must Know AI Was Involved",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Limited risk · disclose", b:"If AI generates content the user sees — recommendations, chatbot responses, personalised layouts — they must know AI was involved. Label it." },
    { tone:"gold", t:"High risk · govern first", b:"Citizen-facing AI-generated interfaces need human review, bias audit, and documentation before the user ever sees them. Disclosure alone is not enough." },
  ],
  footnote:"Transparency is the floor for limited risk. High risk requires governance before disclosure." },

{ type:"reference", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"Leave-Behind · Keep This Open", title:"AI Ethics & Governance Quick-Reference",
  head:["Question","Framework","Action"],
  rows:[
    ["What tier of risk is this use case?","EU AI Act","Classify: unacceptable / high / limited / minimal"],
    ["Who is accountable for this AI output?","NIST · Govern","Name the reviewer before generation, not after"],
    ["What harm could this cause if wrong?","NIST · Map","List stakeholders and failure modes"],
    ["Was the AI output verified against source?","NIST · Measure","Trace every claim to data or reject it"],
    ["Is this safe to ship?","NIST · Manage","Review, document, sign off — or reject"],
    ["Must the user know AI was used?","EU AI Act · Limited risk","Disclose AI involvement in user-facing content"],
    ["Is citizen data in the prompt?","Data privacy","Never paste PII or confidential data into third-party AI"],
  ],
  note:"This quick-reference matches your standalone AI Ethics & Governance deliverable. Keep it with your prompt pack." },

{ type:"theory", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"SDAIA Context", title:"Why Government Design Teams Lead Here",
  layout:"bullets",
  body:[
    "<b>Citizen-facing government interfaces carry higher stakes</b> than consumer apps. Errors affect access to services, not just conversion rates.",
    "<b>SDAIA's mandate includes responsible AI adoption.</b> Design teams are on the front line — every AI-assisted screen is a governance decision.",
    "<b>Documentation is not bureaucracy.</b> It's the audit trail that proves a human reviewed, classified risk, and approved before citizens see it.",
    "The frameworks today are not abstract compliance — they're the checklist between AI output and public release.",
  ] },

{ type:"discussion", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  label:"Classify Your Work",
  question:"The component you built this week for your cohort's shared challenge —\nif AI assisted any part of it,\nwhat {hl}risk tier{/hl} does it fall in?",
  hint:"2 minutes. EU AI Act tier + one NIST action you'd take before shipping." },

{ type:"wrap", day:4, session:2, sessionTitle:"AI Ethics & Governance Frameworks",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Governance is already required", b:"AI tools are in the workflow. The question is not whether to govern but how thoroughly, before outputs ship." },
    { n:"02", t:"Two frameworks, one process", b:"EU AI Act tiers the risk. NIST Govern-Map-Measure-Manage runs the review. Apply both to every AI-assisted deliverable." },
    { n:"03", t:"High risk needs human sign-off", b:"Citizen-facing, government, vulnerable users — AI generates, humans verify, document, and approve before release." },
  ],
  next:"S3 · Governance Scenario Workshop (1:00) · Apply the checklist to realistic AI-generated artifacts." },

// ══ DAY 4 · S3 · Governance Scenario Workshop (8) ════════════════
{ type:"cover", day:4, session:3, time:"1:00 - 2:15",
  title:"Governance\n{hl}Scenario Workshop{/hl}",
  subtitle:"Real Artifacts · Live Checklist · Your Component" },

{ type:"statement", day:4, session:3, sessionTitle:"Governance Scenario Workshop",
  quote:"\"You used an AI tool to generate this\ncitizen-facing screen.\n{hl}What's your governance checklist{/hl}\nbefore shipping it?\"",
  attribution:"This is the question every AI-augmented designer must be able to answer." },

{ type:"framework", day:4, session:3, sessionTitle:"Governance Scenario Workshop",
  eyebrow:"The Checklist", title:"Pre-Ship Governance Checklist",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Classify risk", d:"EU AI Act tier. Citizen-facing? Government? Internal only?" },
    { n:"02", t:"Verify content", d:"Every label, instruction, and data field checked by a human. No hallucinated requirements." },
    { n:"03", t:"Check accessibility", gold:true, d:"Run the Day 4 S1 checklist. AI doesn't guarantee WCAG compliance." },
    { n:"04", t:"Audit data handling", d:"Was any confidential or PII data in the prompts? Data privacy checklist from Day 3." },
    { n:"05", t:"Document + sign off", d:"Who reviewed, what they found, what they changed. Audit trail for high-risk work." },
  ]},
  note:"Walk through this live on the scenario screens next. Then apply it to your own component." },

{ type:"example", day:4, session:3, sessionTitle:"Governance Scenario Workshop",
  eyebrow:"Scenario 1", title:"AI-Generated Service Application Form",
  mode:"annotated",
  panels:[
    { l:"What AI produced", t:"<b>A 6-field government service application</b> with labels, help text, and validation messages. Generated from a text prompt." },
    { l:"Risk tier", t:"<b>High risk.</b> Citizen-facing government service. Full governance required." },
    { l:"Issues found", t:"<b>Field 3 label is wrong</b> (hallucinated requirement). <b>Help text uses jargon.</b> <b>No error recovery messages.</b>" },
    { l:"Checklist result", t:"<b>Do not ship.</b> Content designer rewrites labels. Accessibility audit on error states. Legal reviews data fields." },
  ],
  takeaway:"AI generated a plausible form. Governance caught three failures that would have reached citizens." },

{ type:"example", day:4, session:3, sessionTitle:"Governance Scenario Workshop",
  eyebrow:"Scenario 2", title:"AI-Drafted Persona for Internal Workshop",
  mode:"annotated",
  panels:[
    { l:"What AI produced", t:"<b>A JTBD persona drafted from interview notes</b> using Claude. For an internal design workshop, not user-facing." },
    { l:"Risk tier", t:"<b>Minimal risk.</b> Internal use, anonymised data, no citizen-facing output." },
    { l:"Issues found", t:"<b>One quote is fabricated</b> — not in the source notes. <b>JTBD outcome is AI-inferred,</b> not from research." },
    { l:"Checklist result", t:"<b>Fix and use.</b> Remove fabricated quote. Verify JTBD against real data. Document AI assistance." },
  ],
  takeaway:"Even minimal-risk outputs need verification. The failure mode is the same — unreviewed AI output presented as research." },

{ type:"discussion", day:4, session:3, sessionTitle:"Governance Scenario Workshop",
  label:"Walk the Checklist Live",
  question:"Look at Scenario 1.\nWhich checklist step {hl}catchs the most issues{/hl}?\nWhich step would you add?\nNow map it: which step would catch the most in your cohort's own shared challenge?",
  hint:"3 minutes in pairs. Be specific about both the government scenario and your own challenge." },

{ type:"exercise", day:4, session:3, tool:"figma",
  task:"Governance {hl}Checklist{/hl}",
  sub:"Apply the pre-ship governance checklist to your own component from your cohort's shared challenge. Document every step: classify, verify, accessibility, data, sign-off.",
  minutes:30,
  deliverable:"A completed governance checklist for your component, with at least one finding and one fix documented." },

{ type:"wrap", day:4, session:3, sessionTitle:"Governance Scenario Workshop",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"The checklist is repeatable", b:"Classify risk, verify content, check accessibility, audit data, document sign-off. Five steps, every AI-assisted deliverable." },
    { n:"02", t:"Scenarios reveal real failures", b:"Hallucinated labels, fabricated quotes, missing error states. AI produces plausible output — governance catches what's wrong." },
    { n:"03", t:"You've run it on your own work", b:"Your Day 3 component has been classified, verified, and documented. That's responsible design in practice." },
  ],
  next:"S4 · Prototyping with Responsible-Design Constraints (2:15) · Build a prototype with accessibility and governance already applied." },

// ══ DAY 4 · S4 · Prototyping with Constraints (10) ═══════════════
{ type:"cover", day:4, session:4, time:"2:15 - 3:00",
  title:"Prototyping with\n{hl}Constraints{/hl}",
  subtitle:"Fidelity Spectrum · Figma Prototype · Responsible by Design" },

{ type:"statement", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  quote:"\"A prototype with accessibility and governance\n{hl}baked in{/hl} is cheaper than retrofitting one\nthat wasn't.\"",
  attribution:"Build the constraints in now. Day 5 handoff depends on it." },

{ type:"framework", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  eyebrow:"Choosing How Real", title:"The Fidelity Spectrum",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Sketch", d:"Pen on paper. Seconds to make. Tests the roughest concept and structure." },
    { n:"02", t:"Paper Proto", d:"Hand-drawn screens you can shuffle. Tests flow and logic with real people." },
    { n:"03", t:"Lo-fi Digital", gold:true, d:"Greyscale wireframes, clickable. Tests structure and navigation without visual bias." },
    { n:"04", t:"Hi-fi Digital", d:"Real visuals and interaction. Tests look, feel, and detailed usability." },
    { n:"05", t:"Coded Proto", d:"Live in the browser. Tests performance and true behaviour. Most costly." },
  ]},
  note:"Higher fidelity is not better. It's more expensive. Use the lowest fidelity that answers your question." },

{ type:"theory", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  eyebrow:"Condensed from Prototyping Essentials", title:"Figma Prototype Mode · Fast",
  layout:"bullets",
  body:[
    "<b>Switch from Design to Prototype</b> in the right panel. The same frames you designed become connectable, clickable screens.",
    "Every interaction is a <em>trigger, action, animation</em> triple. On tap → navigate to → dissolve or Smart Animate.",
    "<b>Smart Animate tweens between matching layer names.</b> Two frames, same layer names, different positions — Figma fills in the motion.",
    "Hit <b>Present</b> to test in the browser. Your accessibility fixes and governance decisions are already in the prototype — not retrofitted.",
  ] },

{ type:"example", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  eyebrow:"One Transition, Shown Fast", title:"Connecting Screens with Smart Animate",
  mode:"annotated",
  panels:[
    { l:"Frame 1", t:"<b>Card list view.</b> User taps a card. Layer named \"card / container\"." },
    { l:"Connection", t:"<b>On tap → navigate to Frame 2 → Smart Animate.</b> Trigger, action, animation." },
    { l:"Frame 2", t:"<b>Card detail view.</b> Same layer name \"card / container\" — expanded. Smart Animate tweens the growth." },
    { l:"Constraint", t:"<b>Focus ring visible on the back button.</b> Accessibility fix from S1 is already in the prototype." },
  ],
  takeaway:"One connection, one transition, accessibility already applied. That's a responsible prototype." },

{ type:"toolOpen", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  eyebrow:"Hands On", title:"Open Your Governed Component",
  tool:"figma",
  instruction:"Build a 3-screen clickable prototype of your core flow",
  sub:"Accessibility fixes and governance decisions are already in. Connect screens, add one Smart Animate transition.",
  need:["Your audited Day 3/4 component","At least 3 frames","Completed governance checklist"] },

{ type:"exercise", day:4, session:4, tool:"figma",
  task:"Responsible {hl}Prototype{/hl}",
  sub:"Build a clickable prototype of your cohort's shared challenge with accessibility and governance constraints already applied. At least 3 screens, one Smart Animate transition.",
  minutes:25,
  deliverable:"A clickable Figma prototype with accessibility fixes in place and governance checklist completed." },

{ type:"reference", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  eyebrow:"Reference Only · Not Taught Live", title:"Microinteractions + Multidevice · Leave-Behind",
  head:["Topic","Key Point","When to Go Deeper"],
  rows:[
    ["Microinteractions","Trigger → rules → feedback → loops. Most fail at feedback.","Component state design in your design system"],
    ["Component states","Button: default, hover, pressed, focused, disabled, loading.","Variant architecture on Day 5"],
    ["Mobile-first","Design smallest screen first, expand up.","Responsive auto layout from Day 3"],
    ["Thumb zones","Primary actions in bottom-centre easy zone.","Mobile prototype testing"],
    ["Usability testing","5 users, goal-based tasks, silent observation.","Use the standalone Usability Test Script PDF"],
    ["Smart Animate","Matching layer names between frames.","Figma prototype documentation"],
  ],
  note:"These topics are deprioritised for time but not lost. The standalone usability test script covers testing in full." },

{ type:"theory", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  eyebrow:"Looking Ahead", title:"What's Ready for Day 5",
  layout:"bullets",
  body:[
    "<b>You have a governed, accessible, clickable prototype</b> built from a tokenised component system.",
    "<b>Day 5:</b> atomic design refinement, dev handoff in Dev Mode, and your portfolio case study.",
    "<b>Your capstone will be scored</b> on design quality, process rigor, accessibility, and AI-governance awareness.",
    "The usability test script PDF is your leave-behind for testing this prototype after the training.",
  ] },

{ type:"wrap", day:4, session:4, sessionTitle:"Prototyping with Responsible-Design Constraints",
  eyebrow:"Day 4 Complete", title:"Design Responsibly, or Don't Ship It",
  cards:[
    { n:"01", t:"Accessibility is applied, not retrofitted", b:"Contrast, focus, labels, and targets fixed on your component. Day 1 inclusion gaps addressed. Checklist in hand." },
    { n:"02", t:"Governance is a process, not a policy", b:"EU AI Act tiers the risk. NIST runs the review. You ran the checklist on your own work and documented the result." },
    { n:"03", t:"Your prototype carries the constraints", b:"Accessible, governed, clickable. Ready for handoff, portfolio, and the capstone presentation tomorrow." },
  ],
  next:"Day 5 · Atomic Design + Handoff + Portfolio · Systematise it, ship it, and tell its story." },

];
