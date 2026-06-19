import type { ManifestSlide as Slide } from "../types";

export const day4: Slide[] = [

// ── DAY 4 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:4,
  dayLabel:"Day 4 of 5 · Riyadh, KSA · 15 July 2026",
  title:"Prototyping, Microinteractions\n+ Multidevice",
  theme:"Make it move, then make it testable",
  sessions:[
    "S1 · Prototyping + Paper  9:00 - 10:30",
    "S2 · Prototyping in Figma  10:40 - 12:30",
    "S3 · Microinteractions + Usability Testing  1:30 - 3:30",
    "S4 · Multidevice + Principles  3:40 - 5:00",
  ] },

// ══ DAY 4 · S1 · Prototyping + Paper (16) ════════════════════════
{ type:"cover", day:4, session:1, time:"9:00 - 10:30",
  title:"Prototyping\n+ {hl}Paper{/hl}",
  subtitle:"The Fidelity Spectrum · Paper Prototyping · Think-Aloud" },

{ type:"statement", day:4, session:1, sessionTitle:"Prototyping + Paper",
  quote:"\"If you are not embarrassed by your first prototype,\nyou {hl}built it too late.{/hl}\"",
  attribution:"The point of a prototype is to be wrong cheaply, early, and on purpose." },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"The Concept", title:"What Prototyping Is For",
  layout:"bullets",
  body:[
    "<b>A prototype is a question, not a deliverable.</b> You build it to learn something specific, then you throw most of it away.",
    "It makes an idea <em>tangible enough to react to.</em> People can't critique a description, but they can critique something they touch.",
    "The goal is <b>validated learning before expensive commitment.</b> Find the flaw on paper, not in production code.",
    "Match fidelity to the question. <b>Testing the flow?</b> Paper is enough. <b>Testing the feel?</b> You'll need higher fidelity.",
  ] },

{ type:"framework", day:4, session:1, sessionTitle:"Prototyping + Paper",
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

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Counterintuitive but True", title:"Why Start on Paper",
  layout:"cards3",
  body:[
    { icon:"clock", t:"It's faster", b:"You can draw ten screens in the time it takes to build one in Figma. Iterate at the speed of thought." },
    { icon:"empathy", t:"It invites honesty", tone:"navy", b:"People critique rough sketches freely. A polished screen makes them hold back, as if it's too finished to change." },
    { icon:"ideation", t:"It frees ideas", b:"No tool friction, no pixel-fiddling. Paper keeps you focused on the idea and the flow, not the software." },
  ],
  footnote:"The roughness is a feature. It signals \"this is changeable\", which is exactly what early testing needs." },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"How To", title:"Running a Paper Prototype",
  layout:"bullets",
  body:[
    "<b>Draw each screen on a separate card or sheet.</b> One screen per page so you can swap them as the user navigates.",
    "<b>You are the computer.</b> When the user taps a button, you place the next screen down. You manually respond to their actions.",
    "<b>Use sticky notes for dynamic bits:</b> dropdowns, error messages, expanded states. Add and remove them as the interaction demands.",
    "<b>Don't explain, observe.</b> Give the task, then stay quiet. Where they hesitate is your data.",
  ] },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"The Testing Method", title:"Think-Aloud Protocol",
  layout:"split",
  body:{
    left:[
      "<b>Ask the user to narrate their thoughts</b> as they use the prototype. \"Tell me what you're looking at and what you expect to happen.\"",
      "You hear <em>where their mental model breaks</em> from your design, in real time. The hesitations and surprises are the findings.",
      "Resist helping. Every time you explain, you contaminate the data. Silence is uncomfortable and essential.",
    ],
    right:{ tone:"gold", t:"What you listen for",
      b:"\"Where is the…?\" means findability failed. \"I thought this would…\" means an expectation was broken. \"Wait, what happened?\" means feedback was missing. Each phrase points to a specific fix." },
  } },

{ type:"example", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Reading the Signals", title:"What Users Say vs What It Means",
  mode:"annotated",
  panels:[
    { l:"\"Hmm, where do I…\"", t:"<b>Findability problem.</b> The thing they need exists but isn't visible or labelled in their language." },
    { l:"\"I guess I'll click this?\"", t:"<b>Low confidence.</b> They're guessing, not knowing. The affordance isn't clear enough." },
    { l:"\"Oh, that's not what I expected.\"", t:"<b>Broken mental model.</b> Your logic and theirs diverged. The interaction surprised them." },
    { l:"Silence, then a frown", t:"<b>Missing feedback.</b> Something happened, or didn't, and the interface didn't tell them. Watch the face." },
  ],
  takeaway:"You're not collecting opinions. You're collecting moments of friction. The words just point you to them." },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Avoiding Bad Data", title:"Facilitation Pitfalls",
  layout:"bullets",
  body:[
    "<b>Don't lead.</b> \"Would you tap the big green button now?\" hands them the answer. Just give the goal and watch.",
    "<b>Don't rescue.</b> When they struggle, wait. The struggle is the most valuable thing you'll see all day.",
    "<b>Don't defend.</b> If they criticise it, write it down, don't explain why you did it that way. You won't be there to explain in real life.",
    "<b>Don't test more than five users per round.</b> Five surfaces most major issues. Fix, then test five more.",
  ] },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Writing the Task", title:"Good Task Scenarios",
  layout:"cards2",
  body:[
    { tone:"navy", t:"A weak task", b:"\"Use the search bar to find a blue jacket under fifty riyals and add it to your cart.\" It lists the exact steps, so you only test whether they can follow instructions." },
    { tone:"gold", t:"A strong task", b:"\"You need a jacket for a trip next week and have a tight budget. Find something that works.\" Goal, not steps. Now you see how they actually think and navigate." },
  ],
  footnote:"Give people a goal and a context, never a sequence of clicks. Real users arrive with goals, not instructions." },

{ type:"discussion", day:4, session:1, sessionTitle:"Prototyping + Paper",
  label:"Spot the Lead",
  question:"\"Don't you think this button should be bigger?\"\nRewrite it as {hl}a neutral question{/hl}\nthat gets honest data.",
  hint:"60 seconds. The fix is the same principle as Day 2's interview questions." },

{ type:"toolOpen", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Hands On · Analog", title:"Pens and Paper Out",
  tool:"figjam",
  instruction:"Sketch your case study's core flow on paper",
  sub:"Four to six screens of your main user task. Rough boxes and labels only. We test them next.",
  need:["Paper and a pen","Your scenario and JTBD from Day 2","Sticky notes for dynamic states"] },

{ type:"exercise", day:4, session:1, tool:"figjam",
  task:"Paper {hl}Prototype{/hl}",
  sub:"Sketch your core flow on paper, four to six screens. Keep it rough. One screen per sheet.",
  minutes:20,
  deliverable:"A hand-drawn paper prototype of your main flow, ready to test with a partner." },

{ type:"exercise", day:4, session:1, tool:"figjam",
  task:"Think-Aloud {hl}Test{/hl}",
  sub:"Swap with a partner. Give them a goal-based task. Stay silent, observe, note every hesitation.",
  minutes:20,
  deliverable:"Notes on at least three friction points your partner hit, in their words." },

{ type:"reference", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Reference · Keep This Open", title:"Fidelity · When to Use What",
  head:["Fidelity","Tests","Cost / Speed"],
  rows:[
    ["Sketch","Raw concept, rough structure","Seconds · near free"],
    ["Paper prototype","Flow, logic, navigation","Minutes · very cheap"],
    ["Lo-fi digital","Structure without visual bias","Hours · cheap"],
    ["Hi-fi digital","Look, feel, detailed usability","Days · moderate"],
    ["Coded prototype","Real behaviour, performance","Days+ · expensive"],
  ],
  note:"Pick the lowest row that answers your current question. Climb only when you must." },

{ type:"wrap", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"A prototype is a question", b:"Built to learn one thing cheaply, then mostly discarded. Match fidelity to the question. Lowest fidelity that answers it wins." },
    { n:"02", t:"Paper tests flow honestly", b:"Faster to make, and its roughness invites the candour a polished screen kills. You are the computer, swapping screens as they tap." },
    { n:"03", t:"Think-aloud surfaces the truth", b:"Give a goal, not steps. Stay silent. The hesitations, surprises, and where-is-its are your findings. Don't lead, rescue, or defend." },
  ],
  next:"S2 · Prototyping in Figma (10:40) · We take that paper flow and make it really click." },

// ══ DAY 4 · S2 · Prototyping in Figma (8) ════════════════════════
{ type:"cover", day:4, session:2, time:"10:40 - 12:30",
  title:"Prototyping\nin {hl}Figma{/hl}",
  subtitle:"Connections · Smart Animate · Overlays + Components" },

{ type:"theory", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Orientation", title:"Figma Prototype Mode",
  layout:"bullets",
  body:[
    "<b>Switch from Design to Prototype</b> in the right panel. The same frames you designed become connectable, clickable screens.",
    "You draw <em>connections</em> between frames: from a button to the screen it opens. Each connection is an interaction.",
    "Hit <b>Present</b> to play it in the browser, share a link, and watch someone use it. No code, no export.",
    "This is what you'll test on a real person this afternoon, and hand to a developer on Day 5.",
  ] },

{ type:"framework", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"The Grammar of Interaction", title:"Trigger, Action, Destination",
  kind:"stack",
  data:{ layers:[
    { t:"Trigger", d:"What the user does. On tap, on hover, on drag, after delay, while pressing." },
    { t:"Action", d:"What the prototype does. Navigate to, open overlay, swap, scroll to, go back." },
    { t:"Animation", d:"How it happens. Instant, dissolve, move in, push, or Smart Animate." },
  ] },
  note:"Every interaction in Figma is this triple. Learn it once and you can build any flow." },

{ type:"theory", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"The Magic Feature", title:"Smart Animate",
  layout:"split",
  body:{
    left:[
      "<b>Smart Animate tweens between two frames</b> by matching layers with the same name and animating the differences.",
      "Move, resize, or recolour a layer between frames, and Smart Animate <em>fills in the motion automatically.</em>",
      "This is how you build <b>carousels, expanding cards, toggles, and page transitions</b> that feel real, without a single line of code.",
    ],
    right:{ tone:"gold", t:"The one rule",
      b:"Matching layer names is everything. Smart Animate finds \"card / image\" in both frames and animates between them. Rename one and the magic breaks. Name consistently and it just works." },
  } },

{ type:"example", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Building Real Patterns", title:"Three Patterns with Smart Animate",
  mode:"annotated",
  panels:[
    { l:"Carousel", t:"<b>Two frames, the image row shifted left.</b> Same layer names, drag trigger, Smart Animate. It slides like a real carousel." },
    { l:"Expanding card", t:"<b>A small card and a large card, same layers.</b> On tap, Smart Animate grows it open smoothly." },
    { l:"Hamburger menu", t:"<b>Menu off-screen, then on-screen.</b> Tap the icon, the panel slides in via an overlay with Smart Animate." },
  ],
  takeaway:"Most app interactions are two states and a tween. Once you see that, you can prototype almost anything." },

{ type:"theory", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Two Power Features", title:"Overlays + Interactive Components",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Overlays", b:"Open a frame on top of the current screen: modals, menus, tooltips, bottom sheets. The base screen stays put underneath. Essential for dialogs and nav." },
    { tone:"gold", t:"Interactive components", b:"Bake the interaction into the component itself. A toggle that flips on tap, a button that changes on hover. Build it once, and every instance just works everywhere." },
  ],
  footnote:"Interactive components are the pro move: the interaction lives in the component, not in dozens of manual connections." },

{ type:"exercise", day:4, session:2, tool:"figma",
  task:"Build a {hl}Clickable Prototype{/hl}",
  sub:"Take your paper flow into Figma. Connect your screens. Add one Smart Animate transition.",
  minutes:35,
  deliverable:"A clickable Figma prototype of your core flow, with at least one Smart Animate interaction." },

{ type:"wrap", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Every interaction is a triple", b:"Trigger, action, animation. Draw a connection from a button to a frame, hit present, and your design plays in the browser. No code." },
    { n:"02", t:"Smart Animate needs matching names", b:"It tweens between frames by matching layer names. Carousels, expanding cards, menus, all just two states and a tween. Name consistently." },
    { n:"03", t:"Bake interaction into components", b:"Overlays for modals and menus. Interactive components for toggles and hovers. Build the behaviour once, every instance inherits it." },
  ],
  next:"S3 · Microinteractions + Usability Testing (1:30) · The small details, and proof your design works." },

// ══ DAY 4 · S3 · Microinteractions + Usability Testing (14) ══════
{ type:"cover", day:4, session:3, time:"1:30 - 3:30",
  title:"Microinteractions\n+ {hl}Usability Testing{/hl}",
  subtitle:"The Details That Delight · Testing With Real People" },

{ type:"statement", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  quote:"\"Details are not the details.\n{hl}They make the design.{/hl}\"",
  attribution:"Charles Eames · Microinteractions are where products earn trust or lose it." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Concept", title:"What Microinteractions Are",
  layout:"bullets",
  body:[
    "<b>A microinteraction is a single, contained moment</b> built around one task: a toggle flipping, a like animating, a field validating.",
    "They are the <em>texture of a product.</em> Individually tiny, collectively the difference between a product that feels alive and one that feels dead.",
    "Done well, they're <b>invisible and reassuring.</b> Done badly or missing, they leave users uncertain whether anything happened.",
    "They communicate <b>system status</b> at the smallest scale, which loops straight back to Nielsen's first heuristic.",
  ] },

{ type:"framework", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Model", title:"Saffer's Four Parts of a Microinteraction",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Trigger", d:"What starts it. A user action like a tap, or a system event like a new message." },
    { n:"02", t:"Rules", gold:true, d:"What happens and in what order. The logic of the interaction." },
    { n:"03", t:"Feedback", d:"What the user sees, hears, or feels. The visible response that confirms the action." },
    { n:"04", t:"Loops + Modes", d:"What happens over time and on repeat. The long-term behaviour and edge states." },
  ]},
  note:"Dan Saffer's model. Most microinteractions fail at Feedback, the user does the trigger but sees nothing back." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Where They Live", title:"Microinteractions Everywhere",
  layout:"cards4",
  body:[
    { icon:"states", t:"Toggles + switches", b:"The satisfying flip that confirms on or off. State change made visible and tactile." },
    { icon:"empathy", t:"Pull to refresh", b:"The stretch, the spinner, the snap back. Status and control in one gesture." },
    { icon:"check", t:"Form validation", b:"The green tick or inline error as you type. Catches mistakes in the moment." },
    { icon:"loop", t:"Loading states", b:"Skeletons and progress over blank screens. Tells the user the system is alive and working." },
  ],
  footnote:"Notice them today in every app you use. Once you see microinteractions, you can't unsee them." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Designing the Unseen States", title:"Component States",
  layout:"bullets",
  body:[
    "<b>Every interactive element has multiple states,</b> and beginners design only the first one. The default is just the beginning.",
    "A button alone needs: <em>default, hover, pressed, focused, disabled, and loading.</em> Six states, not one.",
    "Inputs need <b>empty, focused, filled, error, and success.</b> The error state is where most designs go silent and fail users.",
    "Design the <b>empty, loading, and error states</b> for every screen too. They're not edge cases, they're most of real usage.",
  ] },

{ type:"example", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Forgotten States", title:"A Button Has Six States, Not One",
  mode:"annotated",
  panels:[
    { l:"Default + Hover", t:"<b>Resting, then a subtle shift on hover.</b> The hover says \"this is clickable\" before the click." },
    { l:"Pressed + Focused", t:"<b>A pressed depression, a focus ring for keyboards.</b> Focus is an accessibility must, not optional." },
    { l:"Disabled", t:"<b>Greyed and non-interactive, with a reason if possible.</b> Don't leave users tapping a dead button." },
    { l:"Loading", t:"<b>A spinner or label change after the tap.</b> Without it, users tap again and double-submit." },
  ],
  takeaway:"The states you forget are exactly the ones that frustrate users. Design all six, every time." },

{ type:"statement", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  quote:"\"You cannot test whether it works\nby {hl}asking the person who built it.{/hl}\"",
  attribution:"This is why we put it in front of someone who has never seen it." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Proof", title:"Usability Testing · The Essentials",
  layout:"bullets",
  body:[
    "<b>Usability testing watches real people attempt real tasks</b> on your design. It's the single most honest signal you can get.",
    "<b>Five users</b> per round surface roughly 85% of usability problems. You don't need a big sample, you need the right method.",
    "<b>Test tasks, not opinions.</b> \"Can you book a room for next weekend?\" beats \"Do you like this screen?\" every time.",
    "<b>Measure</b> task success, time, errors, and where they hesitate. Pair the numbers with the think-aloud narration.",
  ] },

{ type:"framework", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"How to Run One", title:"The Usability Test Session",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Set up", d:"Pick three tasks. Recruit five users like your persona. Prepare the prototype." },
    { n:"02", t:"Brief", d:"Explain think-aloud. Stress you're testing the design, not them. Put them at ease." },
    { n:"03", t:"Observe", gold:true, d:"Give each task as a goal. Stay silent. Note hesitations, errors, and quotes." },
    { n:"04", t:"Debrief", d:"A few open questions at the end. What stood out, what confused them." },
    { n:"05", t:"Synthesise", d:"Cluster findings across users. Rate severity. Prioritise fixes." },
  ]},
  note:"The hardest skill is silence during Observe. Every word you offer is data you destroy." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Writing the Script", title:"Test Tasks + Scenarios",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Frame as a scenario", b:"\"You're planning a weekend trip and want somewhere central under a budget. Find and book it.\" Context plus goal, the way real life arrives." },
    { tone:"gold", t:"Never narrate the steps", b:"Don't say \"tap search, then filter by price\". That tests instruction-following, not your design. The struggle to find the path is the finding." },
  ],
  footnote:"Same principle as Day 2 interviews and S1 paper testing: goals, never steps. It runs through everything." },

{ type:"toolOpen", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Hands On", title:"Prototype Ready to Test",
  tool:"figma",
  instruction:"Open your S2 prototype in Present mode",
  sub:"Write three goal-based tasks. You'll test them on a partner who hasn't seen your design.",
  need:["Your clickable prototype","Three task scenarios","A notes page for findings"] },

{ type:"exercise", day:4, session:3, tool:"figma",
  task:"Run a {hl}Usability Test{/hl}",
  sub:"Test your prototype on a partner. Three goal-based tasks. Think-aloud. Observe in silence, note everything.",
  minutes:30,
  deliverable:"Findings from one test: task success, friction points, and at least three prioritised fixes." },

{ type:"wrap", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"Microinteractions are the texture", b:"Trigger, rules, feedback, loops. Tiny moments that make a product feel alive. Most fail at feedback, the user acts and sees nothing." },
    { n:"02", t:"Design every state", b:"A button has six, an input has five. The empty, loading, and error states are most of real usage, not edge cases. Design them all." },
    { n:"03", t:"Five users, real tasks, total silence", b:"Usability testing is the most honest signal there is. Goals not steps, observe don't help, then cluster findings and prioritise fixes." },
  ],
  next:"S4 · Multidevice + Principles (3:40) · Make it work on every screen, and lock in the visual rules." },

// ══ DAY 4 · S4 · Multidevice + Principles (16) ═══════════════════
{ type:"cover", day:4, session:4, time:"3:40 - 5:00",
  title:"Multidevice\n+ {hl}Principles{/hl}",
  subtitle:"Responsive Design · Thumb Zones · The Visual Rules" },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Reality", title:"Designing for Many Screens",
  layout:"bullets",
  body:[
    "<b>Your design will be used on screens you never tested,</b> from a small phone to a wide monitor. It must hold up across all of them.",
    "<b>Responsive</b> means one layout that fluidly adapts. <b>Adaptive</b> means distinct layouts for set breakpoints. Most products blend both.",
    "Content priority changes by device. <em>What's essential on mobile</em> may be one of several things shown at once on desktop.",
    "This is exactly why you built with auto layout and constraints on Day 3, so the design can flex instead of break.",
  ] },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Discipline", title:"Mobile-First Thinking",
  layout:"split",
  body:{
    left:[
      "<b>Design the smallest screen first,</b> then expand. It forces ruthless prioritisation of what truly matters.",
      "Starting on desktop and shrinking down <em>always ends in a cramped, compromised mobile experience.</em> The constraints come too late.",
      "Mobile-first means the hardest decisions, what to cut, get made first, when they're cheapest.",
    ],
    right:{ tone:"gold", t:"Why it works",
      b:"A small screen has no room for the non-essential. Decide what survives on mobile and you've found your true priorities. Everything you add on larger screens is then a considered enhancement, not clutter you forgot to remove." },
  } },

{ type:"framework", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Breakpoints", title:"Common Device Tiers",
  kind:"stack",
  data:{ layers:[
    { t:"Mobile · 360 to 430px", d:"Single column, thumb-driven, one primary action per screen. Design here first." },
    { t:"Tablet · 768 to 1024px", d:"Two columns emerge, more content visible, touch still primary." },
    { t:"Desktop · 1280px+", d:"Multi-column, hover states return, dense information, pointer-driven." },
  ] },
  note:"These are starting points, not laws. Set breakpoints where your content needs them, not by device fashion." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Physical Ergonomics", title:"Thumb Zones",
  layout:"split",
  body:{
    left:[
      "<b>Most phone use is one-handed and thumb-driven.</b> The screen has a natural reach map: easy, stretch, and hard zones.",
      "The <em>bottom-centre is easiest</em>, the top corners are hardest. This is why mobile nav bars sit at the bottom now.",
      "Put <b>primary actions in the easy zone,</b> destructive or rare actions out of casual reach. Ergonomics is UX.",
    ],
    right:{ tone:"navy", t:"The map",
      b:"Easy: bottom and centre, where the thumb rests. Stretch: the mid and upper screen. Hard: the far top corners. Design your most-used controls into the easy zone, and never put a destructive action where a thumb naturally lands." },
  } },

{ type:"statement", day:4, session:4, sessionTitle:"Multidevice + Principles",
  quote:"\"A layout has rules\nwhether you choose them or not.\n{hl}Choose them.{/hl}\"",
  attribution:"The principles aren't decoration. They're the difference between considered and accidental." },

{ type:"framework", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Foundation of Visual Design", title:"The Core Design Principles",
  kind:"diagram", data:{ diagram:"weekArc",
    nodes:[
      { n:"1", day:"Contrast", t:"Contrast", d:"Difference creates hierarchy. Size, weight, colour guide the eye to what matters." },
      { n:"2", day:"Alignment", t:"Alignment", d:"Shared edges create order. Nothing placed arbitrarily. Everything relates." },
      { n:"3", day:"Proximity", t:"Proximity", d:"Related things sit close. Space groups and separates meaning." },
      { n:"4", day:"Repetition", t:"Repetition", d:"Repeated styles build consistency and rhythm across a design." },
      { n:"5", day:"Balance", t:"Balance", d:"Visual weight distributed so the layout feels stable, not lopsided." },
    ] },
  note:"CARP, plus balance. These are the grammar of every layout you'll ever judge or build." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 1", title:"Contrast + Visual Hierarchy",
  layout:"bullets",
  body:[
    "<b>Contrast is how you tell the eye what matters most.</b> Without it, everything competes and nothing leads.",
    "Create it with <em>size, weight, colour, and space.</em> The biggest, boldest, or most isolated element wins attention first.",
    "<b>Establish a clear hierarchy:</b> primary action, secondary, tertiary. Every screen should answer \"where do I look first?\" instantly.",
    "Contrast also serves <b>accessibility:</b> sufficient colour contrast is what makes text legible for everyone, in every light.",
  ] },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 2", title:"Alignment + Proximity",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Alignment", b:"Every element shares an edge or centre with another. A strong grid and consistent alignment make even simple layouts feel deliberate and trustworthy. Misalignment reads as carelessness." },
    { tone:"gold", t:"Proximity", b:"Things that belong together sit together. Generous space between groups, tight space within them. Proximity tells the user what relates to what, before they read a single word." },
  ],
  footnote:"Most amateur layouts are fixed by tightening proximity and enforcing alignment. Two principles, huge payoff." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 3", title:"Colour + Typography",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Colour", b:"A restrained palette with clear roles: one accent for actions, neutrals for surfaces, semantic colours for success and error. Colour carries meaning, so use it consistently, never decoratively." },
    { tone:"navy", t:"Typography", b:"A limited type scale, strong size and weight contrast between levels, generous line height for body. Type is most of the interface, get it right and the design is most of the way there." },
  ],
  footnote:"Colour and type do the heaviest lifting in UI. Discipline here beats decoration everywhere." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 4", title:"Consistency + Visibility",
  layout:"bullets",
  body:[
    "<b>Consistency</b> means the same thing looks and behaves the same way everywhere. It's what lets users transfer what they learned on one screen to the next.",
    "It operates on two levels: <em>internal</em> (consistent within your product) and <em>external</em> (consistent with platform conventions users already know).",
    "<b>Visibility</b> means the important things are seen, not hidden behind menus and gestures. If users can't find it, it doesn't exist.",
    "Both trace straight back to Nielsen. The heuristics from Day 1 and these principles are the same wisdom, at different scales.",
  ] },

{ type:"example", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principles in Judgement", title:"Reading One Screen Through the Principles",
  mode:"annotated",
  panels:[
    { l:"Contrast", t:"<b>Is there one clear focal point?</b> If three things shout equally, hierarchy has failed and the eye has nowhere to land." },
    { l:"Alignment", t:"<b>Do elements share clean edges?</b> Drop a vertical guide. Anything that doesn't touch it reads as a mistake." },
    { l:"Proximity", t:"<b>Does spacing group what belongs together?</b> Equal spacing everywhere means nothing is grouped, so everything feels loose." },
    { l:"Consistency", t:"<b>Do repeated elements match?</b> Two buttons that should be identical but aren't quietly erode trust in the whole product." },
  ],
  takeaway:"This is now your evaluation lens. You can critique any screen, including your own, against these in seconds." },

{ type:"discussion", day:4, session:4, sessionTitle:"Multidevice + Principles",
  label:"Apply the Lens",
  question:"Look at your own prototype.\nWhich principle is it {hl}weakest{/hl} on?\nWhat's the one fix?",
  hint:"2 minutes. Be honest. The point is to catch it before Day 5 handoff." },

{ type:"exercise", day:4, session:4, tool:"figma",
  task:"Make It {hl}Responsive{/hl}",
  sub:"Take your main screen and create a mobile version using auto layout and constraints. Mind the thumb zone.",
  minutes:25,
  deliverable:"Your core screen at mobile and desktop widths, adapting cleanly, primary action in the easy zone." },

{ type:"reference", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Reference · Keep This Open", title:"The Design Principles Checklist",
  head:["Principle","The Question","Quick Fix If It Fails"],
  rows:[
    ["Contrast","Where does the eye go first?","Increase size or weight of the priority element"],
    ["Alignment","Does everything share an edge?","Apply a grid, align to it strictly"],
    ["Proximity","Is related content grouped?","Tighten space within, widen space between"],
    ["Repetition","Are styles consistent?","Apply shared styles and components"],
    ["Balance","Does it feel stable?","Redistribute visual weight across the layout"],
    ["Colour","Does colour carry meaning?","Restrain the palette, assign clear roles"],
    ["Typography","Is the hierarchy clear?","Increase contrast between type levels"],
    ["Visibility","Can users find what matters?","Surface key actions, hide less"],
  ],
  note:"Run any screen through this list. It's the fastest design critique you own." },

{ type:"wrap", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Day 4 Complete", title:"It Works, It Moves, It's Tested",
  cards:[
    { n:"01", t:"You can prototype and test", b:"Paper to Figma, Smart Animate, real interactions. Then proven on real people with goal-based tasks and silent observation." },
    { n:"02", t:"You sweat the details", b:"Microinteractions and every component state. The feedback, the loading, the error, the empty, the parts beginners forget and users feel." },
    { n:"03", t:"You design for every screen, by principle", b:"Mobile-first, thumb zones, responsive auto layout. Judged against contrast, alignment, proximity, consistency, the grammar of good design." },
  ],
  next:"Day 5 · Atomic Design + Handoff + Portfolio · Systematise it, hand it off, and tell its story." },

];
