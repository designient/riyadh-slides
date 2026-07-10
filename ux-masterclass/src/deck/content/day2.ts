import type { ManifestSlide as Slide } from "../types";

export const day2: Slide[] = [

// ── DAY 2 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:2,
  dayLabel:"Day 2 of 5 · Riyadh, KSA · 13 July 2026",
  title:"Research, JTBD\n+ AI Workflows",
  theme:"Turn understanding into direction",
  sessions:[
    "S1 · Gathering User Data  9:00 - 10:30",
    "S2 · Interviews, JTBD + Personas  10:45 - 12:15",
    "S3 · AI Research Workflows  1:00 - 2:15",
    "S4 · Scenarios, Storyboards + Ideation  2:15 - 3:00",
  ] },

// ══ DAY 2 · S1 · Gathering User Data (8) ═════════════════════════
{ type:"cover", day:2, session:1, time:"9:00 - 10:30",
  title:"Gathering\n{hl}User Data{/hl}",
  subtitle:"Research Methods · Experience Maps · Actionable Insight" },

{ type:"framework", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Choosing a Method", title:"The Research Methods Map",
  kind:"compare",
  data:{
    bridge:"What question are you answering?",
    left:{ tone:"navy", label:"Generative", sub:"Explore the problem",
      def:"Used early, before you have a solution. Discovers needs, behaviours, and unknowns you didn't know to ask about.",
      items:["User interviews","Contextual inquiry and observation","Diary studies","Open-ended surveys","Competitive teardown"] },
    right:{ tone:"gold", label:"Evaluative", sub:"Test the solution",
      def:"Used later, once you have something to react to. Measures whether a design works and where it breaks.",
      items:["Usability testing","Heuristic evaluation","A/B testing","Analytics review","Satisfaction surveys"] },
  },
  note:"Most teams over-invest in evaluative and skip generative, then build a polished version of the wrong thing." },

{ type:"framework", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"The Anatomy", title:"Experience Maps · Template + Purpose",
  kind:"stack",
  data:{ layers:[
    { t:"Phases", d:"The stages of the journey over time, left to right. e.g. Aware, Consider, Decide, Use, Return." },
    { t:"Actions", d:"What the user actually does in each phase. Concrete steps, not intentions." },
    { t:"Thoughts", d:"What they are thinking and asking themselves at each step." },
    { t:"Emotions", d:"The emotional curve, plotted high to low. Where does frustration spike?" },
    { t:"Opportunities", d:"The design openings each low point reveals. This is the output that matters." },
  ] },
  note:"An experience map visualises everything a user does, thinks, and feels over time. The emotional curve is the heart — every dip is a design opportunity." },

{ type:"example", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"A Real Map", title:"Experience Map · Booking a First Online Course",
  mode:"annotated",
  panels:[
    { l:"Phase · Aware", t:"<b>Action:</b> sees an ad, clicks through. <b>Feeling:</b> curious but sceptical. <b>Opportunity:</b> lead with proof, not promises." },
    { l:"Phase · Consider", t:"<b>Action:</b> compares three options in browser tabs. <b>Feeling:</b> overwhelmed. <b>Opportunity:</b> a clear comparison removes the tab-juggling." },
    { l:"Phase · Decide", t:"<b>Action:</b> reaches checkout, hesitates at price. <b>Feeling:</b> anxious about commitment. <b>Opportunity:</b> guarantee and instalments visible early." },
    { l:"Phase · Use", t:"<b>Action:</b> attends first session. <b>Feeling:</b> relieved, then engaged. <b>Opportunity:</b> a strong first session drives the referral." },
  ],
  takeaway:"The lowest emotional point, hesitation at price, is the single highest-value place to design well." },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"The Output", title:"From Data to Actionable Insight",
  layout:"bullets",
  body:[
    "<b>An observation is not an insight.</b> \"Users abandoned at checkout\" is data. \"Users abandon because shipping cost appears too late\" is insight.",
    "An insight names a <em>cause</em>, not just a symptom. It tells you what to change, not only what went wrong.",
    "Format that works: <b>We observed [behaviour], because [reason], which means [implication for design].</b>",
  ] },

{ type:"toolOpen", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Hands On", title:"Back to Your FigJam Canvas",
  tool:"figjam",
  instruction:"Pull up your Day 1 persona sketch",
  sub:"We're extending it into a full experience map for your cohort's shared challenge, from your chosen persona's perspective.",
  need:["Your Day 1 FigJam file","Your ranked pain points","Your first persona sketch"] },

{ type:"exercise", day:2, session:1, tool:"figjam",
  task:"Map an {hl}Experience{/hl}",
  sub:"One persona, one shared challenge, one goal. Lay out the phases, then plot actions, thoughts, emotions, and pain points.",
  minutes:25,
  deliverable:"A 4 to 5 phase experience map with an emotional curve and at least 3 marked opportunities." },

{ type:"wrap", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"Match method to question", b:"Generative to explore, evaluative to validate. Qual for why, quant for what. Most teams skip the generative work and pay for it later." },
    { n:"02", t:"Experience maps expose the gaps", b:"Laying the whole journey flat reveals the friction no single screen shows. The emotional low points are your richest design opportunities." },
    { n:"03", t:"Insight names a cause", b:"Data describes what happened. Insight explains why and tells you what to do. Observed, because, which means." },
  ],
  next:"S2 · Interviews, JTBD + Personas (10:45) · How to actually talk to users, and turn what they say into a person you can design for." },

// ══ DAY 2 · S2 · Interviews, JTBD + Personas (9) ═════════════════
{ type:"cover", day:2, session:2, time:"10:45 - 12:15",
  title:"Interviews, JTBD\n+ {hl}Personas{/hl}",
  subtitle:"Talking to Users · Jobs to Be Done · Real Personas" },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Approach", title:"Interview Methodology",
  layout:"bullets",
  body:[
    "<b>Survey when you know the question. Interview when you're still finding it.</b> Surveys measure at scale but can't surprise you — this week, you interview.",
    "Use a <b>semi-structured</b> interview: a written guide of topics, but freedom to follow interesting threads as they appear.",
    "<b>Listen far more than you talk.</b> Aim for the user speaking 80% of the time. Silence is a tool, let it pull out more.",
    "Ask about <em>past behaviour, not future intentions.</em> \"Tell me about the last time you…\" beats \"Would you use…\" every time.",
    "<b>Record and take notes,</b> but stay present. You'll synthesise later, in the room you focus on the human.",
  ] },

{ type:"example", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Most Common Mistake", title:"Avoiding Leading Questions",
  mode:"split",
  panels:{
    negative:{ heading:"Leading · plants the answer", items:[
      { l:"Don't", t:"<b>\"Don't you find the checkout confusing?\"</b> You've told them what to think. They'll agree to be polite." },
      { l:"Don't", t:"<b>\"How much do you love the new design?\"</b> Assumes love. Leaves no room for an honest negative." },
      { l:"Don't", t:"<b>\"Would you use a feature that did X?\"</b> Everyone says yes to hypotheticals. It predicts nothing." },
    ]},
    positive:{ heading:"Neutral · invites the truth", items:[
      { l:"Do", t:"<b>\"Walk me through the last time you checked out here.\"</b> Neutral. The friction surfaces on its own." },
      { l:"Do", t:"<b>\"What was your reaction to the new design?\"</b> Open. Lets them lead with whatever they actually felt." },
      { l:"Do", t:"<b>\"Tell me about the last time you needed to do X.\"</b> Real behaviour, not predicted behaviour." },
    ]},
  },
  takeaway:"If your question contains the answer you're hoping for, rewrite it. Neutral questions get honest data." },

{ type:"statement", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  quote:"\"You are not asking people what they want.\nYou are understanding {hl}what they struggle with.{/hl}\"",
  attribution:"People can't design the solution. They can only show you the problem." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"A Sharper Lens", title:"Jobs to Be Done",
  layout:"split",
  body:{
    left:[
      "<b>People don't buy products, they hire them to do a job.</b> The classic line: nobody wants a drill, they want a hole in the wall.",
      "JTBD shifts focus from <em>who the user is</em> to <em>what they are trying to accomplish</em> and why.",
      "It explains why a demographic persona fails: two very different people can hire the same product for the same job.",
    ],
    right:{ tone:"gold", t:"Why this matters",
      b:"A persona built on age and job title produces demographic fiction. A persona built on the job to be done produces design direction. JTBD is the difference." },
  } },

{ type:"framework", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Structure", title:"Writing a JTBD Statement",
  kind:"stack",
  data:{ layers:[
    { t:"When… (situation)", d:"The trigger and context. \"When I'm commuting and have 20 minutes free…\"" },
    { t:"I want to… (motivation)", d:"The actual job. \"…I want to learn something useful in short bursts…\"" },
    { t:"So I can… (outcome)", d:"The deeper goal. \"…so I can feel I'm progressing toward a career change.\"" },
  ] },
  note:"The outcome is the real prize. People hire your product for the \"so I can\", not the feature." },

{ type:"framework", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Template", title:"Persona Anatomy",
  kind:"stack",
  data:{ layers:[
    { t:"Name + one-line identity", d:"A memorable handle and a single sentence. Not a stock photo, a real archetype." },
    { t:"The job to be done", d:"Their primary JTBD statement. This leads, everything else supports it." },
    { t:"Context + triggers", d:"When and where the job arises. What sets it off." },
    { t:"Says / Thinks / Does / Feels", d:"An empathy-map lens on the same person: direct quotes, unspoken doubts, observed behaviour, emotional state. Gaps between Says and Does are gold." },
    { t:"Motivations + the real outcome", d:"What success feels like for them. The deeper goal." },
  ] },
  note:"If you removed the name and photo, the persona should still be unmistakably one specific person." },

{ type:"exercise", day:2, session:2, tool:"figjam",
  task:"Write Your {hl}JTBD Statement{/hl}",
  sub:"Using your experience map persona from the shared challenge, write their primary job: When… I want to… so I can…",
  minutes:15,
  deliverable:"One sharp JTBD statement plus three supporting context or pain-point notes." },

{ type:"wrap", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Interview for discovery", b:"Semi-structured, past behaviour over future intentions, neutral questions only. Listen 80% of the time. The follow-up holds the gold." },
    { n:"02", t:"Design for the job, not the demographic", b:"People hire products to do a job. When, I want to, so I can. The outcome is usually a feeling, and that's what you design for." },
    { n:"03", t:"A persona is grounded in real data", b:"Job first, context and behaviour over age and income, one page, real quotes. If there's no data behind it, it's fiction." },
  ],
  next:"S3 · AI Research Workflows (1:00) · Now we accelerate all of this with Claude and Perplexity." },

// ══ DAY 2 · S3 · AI Research Workflows (15) ══════════════════════
{ type:"cover", day:2, session:3, time:"1:00 - 2:15",
  title:"AI Research\n{hl}Workflows{/hl}",
  subtitle:"Claude for Synthesis · Perplexity for Competitive Research" },

{ type:"statement", day:2, session:3, sessionTitle:"AI Research Workflows",
  quote:"\"AI doesn't replace the researcher.\nIt removes {hl}the slowest parts of the process.{/hl}\"",
  attribution:"The judgement stays human. The grunt work doesn't have to." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Where It Helps", title:"AI Research Workflows · Accelerants, Not Replacements",
  layout:"bullets",
  body:[
    "<b>Claude + Perplexity are research accelerants,</b> not replacements for judgement. They cluster, scan, and draft — you verify, correct, and decide.",
    "<b>Synthesis,</b> not collection. AI is fastest at clustering, summarising, and finding patterns across messy notes you've already gathered.",
    "<b>Breadth,</b> not depth of judgement. It scans a wide competitive landscape in minutes, then you decide what matters.",
    "<b>First drafts,</b> not final calls. Personas, themes, and HMW questions come back as a strong starting point you refine, never ship raw.",
    "<em>What it must not do:</em> invent users, fabricate quotes, or replace real interviews. AI accelerates your thinking, it doesn't supply the truth.",
  ] },

{ type:"framework", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Workflow", title:"The AI Synthesis Loop",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Raw Notes", d:"Your real interview notes, stickies, or transcripts. The input must be genuine." },
    { n:"02", t:"Claude", d:"Prompt it to cluster, theme, and summarise against your research question." },
    { n:"03", t:"Themes", gold:true, d:"Named, grouped insights returned in seconds, not hours." },
    { n:"04", t:"Human Review", d:"You check every theme against the source. Correct, cut, reframe." },
    { n:"05", t:"Draft", d:"A verified synthesis you can design from with confidence." },
  ]},
  note:"Step 4 is non-negotiable. Unreviewed AI output is a hypothesis, not a finding." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Second Workhorse", title:"Perplexity for Competitive + Trend Research",
  layout:"bullets",
  body:[
    "<b>Perplexity searches and cites.</b> Unlike a chatbot, it pulls current sources and links them, so you can verify every claim.",
    "Use it to <em>map the competitive landscape:</em> who else solves this job, how, and where users complain about them.",
    "Always <b>annotate findings against your JTBD.</b> A competitor feature only matters if it touches the job your user is hiring for.",
  ] },

{ type:"example", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Live Prompt · Synthesis", title:"Notes → Themed Clusters",
  mode:"split",
  panels:{
    negative:{ heading:"The prompt", items:[
      { l:"Role", t:"<b>You are a UX researcher synthesising interview notes.</b>" },
      { l:"Context", t:"<b>Product:</b> online course platform. <b>Users:</b> career switchers. <b>Question:</b> why do they abandon before purchase?" },
      { l:"Data", t:"<b>[Paste your real FigJam stickies and interview notes here]</b>" },
      { l:"Format", t:"<b>Return 3–5 named themes,</b> each with a one-line insight and supporting quotes from the source." },
    ]},
    positive:{ heading:"What you review", items:[
      { l:"Theme 1", t:"<b>Trust before price</b> — users need proof of outcomes before they'll compare cost." },
      { l:"Theme 2", t:"<b>Comparison fatigue</b> — tab-juggling across providers causes abandonment, not price alone." },
      { l:"Check", t:"<b>Does every theme trace to a real quote?</b> Cut anything that doesn't." },
    ]},
  },
  takeaway:"Role + Context + Data + Format. Feed real data, review every theme against the source before it enters a deliverable." },

{ type:"toolOpen", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Hands On", title:"Let's Open Claude",
  tool:"claude",
  instruction:"Paste your FigJam research notes into Claude",
  sub:"Use your cohort's shared challenge notes. We'll cluster them into named themes live, then review every one against your source.",
  need:["Your affinity notes from Day 1","Your experience map insights","The Role + Context + Data + Format pattern"] },

{ type:"exercise", day:2, session:3, tool:"claude",
  task:"Claude {hl}Synthesis{/hl}",
  sub:"Paste your cohort's shared challenge notes. Prompt with Role, Context, Data, Format. Get back clustered themes.",
  minutes:15,
  deliverable:"3 clustered, named themes, each reviewed and corrected against your real notes." },

{ type:"example", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Live Prompt · Competitive Scan", title:"Trend + Landscape Research",
  mode:"split",
  panels:{
    negative:{ heading:"Perplexity query", items:[
      { l:"Query", t:"<b>\"[your category] user complaints and unmet needs 2025\"</b>" },
      { l:"Follow-up", t:"<b>\"How do top competitors in [category] handle onboarding trust signals?\"</b>" },
      { l:"Rule", t:"<b>Open every citation.</b> If you can't verify it, you can't design on it." },
    ]},
    positive:{ heading:"Annotate against JTBD", items:[
      { l:"Finding 1", t:"<b>Relevant:</b> users want instalment options visible early — touches price anxiety JTBD." },
      { l:"Finding 2", t:"<b>Noise:</b> competitor uses dark patterns — interesting but not your user's job." },
      { l:"Output", t:"<b>3 sourced findings,</b> each marked relevant or not against your persona's job." },
    ]},
  },
  takeaway:"Perplexity cites, so you can verify. Annotate every finding against the job your user is hiring for." },

{ type:"toolOpen", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Hands On", title:"Let's Open Perplexity",
  tool:"perplexity",
  instruction:"Search the pain points for your cohort's shared challenge",
  sub:"Try: \"[your shared challenge domain] user complaints and unmet needs 2025\". Then open the sources.",
  need:["Your persona's JTBD statement","Your shared challenge domain","A note for findings"] },

{ type:"exercise", day:2, session:3, tool:"perplexity",
  task:"Competitive {hl}Scan{/hl}",
  sub:"Run two queries about your cohort's shared challenge domain. Capture three findings and annotate each against your persona.",
  minutes:20,
  deliverable:"3 sourced competitive findings, each marked relevant or not against your JTBD." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Before It Enters a Deliverable", title:"Bias & Reliability Check on AI Outputs",
  layout:"bullets",
  body:[
    "<b>Garbage in, garbage out.</b> Biased or incomplete research input produces biased AI-generated personas and themes.",
    "Watch for <em>hallucinated patterns:</em> themes that sound plausible but don't trace to any real quote in your source data.",
    "Watch for <em>unverified sources:</em> Perplexity citations you didn't click through, or claims with no link at all.",
    "<b>The review step is not optional.</b> Every AI output gets checked against the source before it becomes a persona, journey map, or design decision.",
  ] },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Check Most Teams Skip", title:"Inclusive AI Research · Whose Voice Is Missing?",
  layout:"bullets",
  body:[
    "<b>AI synthesis tools cluster what's in the data</b> — if your interview notes skew toward majority-language, able-bodied, or high-digital-literacy users, the themes will too.",
    "Prompt Claude explicitly to <em>flag gaps:</em> \"Which user groups are under-represented in this data — by language, ability, age, or access to technology?\"",
    "For a citizen-facing challenge, this matters most for exactly the people least likely to be in your interview sample: low-literacy users, elderly citizens, users with disabilities, non-native speakers.",
    "<b>An AI-synthesised persona that quietly excludes these groups</b> isn't a minor gap — it's the accessibility and inclusion problem showing up in research, before it ever reaches Figma.",
  ] },

{ type:"reference", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Leave-Behind · Keep This Open", title:"The 5-Prompt Research Pack",
  head:["Prompt","Tool","Use-Case","Description"],
  rows:[
    ["Synthesis","Claude","Notes → themed clusters","Cluster and name themes from raw interview or sticky notes"],
    ["Competitive Research","Perplexity","Landscape scan","Map competitors, complaints, and trends with cited sources"],
    ["Persona","Claude","Draft from real notes","JTBD-grounded persona draft you verify against source data"],
    ["Journey Map","Claude","Structure from research","Phase/actions/emotions scaffold from your experience map notes"],
    ["Heuristic Audit","Claude","Expert review assist","Walk a flow against Nielsen's 10 and log issues with severity"],
  ],
  note:"Every prompt uses Role + Context + Data + Format. Real data in, human review out." },

{ type:"wrap", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"AI accelerates, never replaces", b:"It clusters notes and scans markets in minutes. It does not gather truth or make the call. Human review of every output is mandatory." },
    { n:"02", t:"Claude needs Role, Context, Data, Format", b:"Feed it real data, tell it who to be and what to return. That pattern is the difference between useful synthesis and confident nonsense." },
    { n:"03", t:"Check bias before you ship", b:"Hallucinated patterns and unverified sources are the two failure modes. Trace every theme to a quote, every claim to a citation." },
  ],
  next:"S4 · Scenarios, Storyboards + Ideation (2:15) · Turn this research foundation into stories and ideas." },

// ══ DAY 2 · S4 · Scenarios, Storyboards + Ideation (9) ══════════
{ type:"cover", day:2, session:4, time:"2:15 - 3:00",
  title:"Scenarios, Storyboards\n+ {hl}Ideation{/hl}",
  subtitle:"From Insight to Story to Idea" },

{ type:"theory", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Narrative as a Tool", title:"What Scenarios Are",
  layout:"split",
  body:{
    left:[
      "A <b>scenario</b> is a short, realistic story of a specific persona using a product to accomplish their goal in a real context.",
      "It is <em>not a user story</em> (the dev format). A scenario is richer, narrative, and human, centred on motivation and context.",
      "Scenarios keep the team anchored to a real situation while ideating, so solutions fit the moment, not an abstract ideal.",
    ],
    right:{ tone:"navy", t:"Why narrative works",
      b:"Teams design better for a story than for a spec. \"Sara, on a slow train, trying to finish a booking before her stop\" generates sharper ideas than \"the user completes checkout\"." },
  } },

{ type:"framework", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"The Structure", title:"Anatomy of a Scenario",
  kind:"stack",
  data:{ layers:[
    { t:"Persona", d:"Who. Grounded in your JTBD persona, not a generic user." },
    { t:"Context", d:"Where, when, and on what device. The real-world situation and its constraints." },
    { t:"Goal", d:"What they're trying to accomplish, tied to their job to be done." },
    { t:"Constraints", d:"What's working against them: time, attention, environment, prior frustration." },
  ] },
  note:"The constraints are what make a scenario useful. Frictionless fiction generates lazy design." },

{ type:"example", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Built From Your Shared Challenge", title:"Scenario · A Citizen Under Time Pressure",
  mode:"annotated",
  panels:[
    { l:"Persona", t:"<b>Fahad,</b> completing a service request tied to your cohort's shared challenge, uncertain if he's filling it in correctly." },
    { l:"Context", t:"<b>On his phone, on a lunch break,</b> with a deadline this week and no one nearby to ask for help." },
    { l:"Goal", t:"<b>Submit correctly, once,</b> without a mistake that costs him the outcome or forces a resubmission." },
    { l:"Constraints", t:"<b>Time pressure, fear of an unrecoverable error, no live support.</b> He'll abandon or guess the moment something is unclear." },
  ],
  takeaway:"Swap Fahad for your cohort's actual persona and challenge — every design decision now has a test: does it help someone under pressure act correctly, once?" },

{ type:"framework", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"The Bridge to Ideas", title:"How Might We · Framing",
  kind:"stack",
  data:{ layers:[
    { t:"Too narrow", d:"\"How might we add a progress bar?\" Bakes in the solution. Kills other ideas." },
    { t:"Too broad", d:"\"How might we fix onboarding?\" No focus. Generates vague answers." },
    { t:"Just right", d:"\"How might we help a sceptical first-timer feel confident before paying?\" Focused on the problem, open on the solution." },
  ] },
  note:"Aim between optimism and constraint. Open enough for many ideas, focused enough that they're relevant." },

{ type:"discussion", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  label:"Generate, Don't Filter",
  question:"From your JTBD, write {hl}three How Might We questions.{/hl}\nDon't judge them yet.\nWide before deep.",
  hint:"3 minutes solo. Then we pick the sharpest one to build on." },

{ type:"exercise", day:2, session:4, tool:"figjam",
  task:"Scenarios + {hl}HMW{/hl}",
  sub:"Write one full scenario for your cohort's shared challenge, then three How Might We statements from its biggest pain point.",
  minutes:20,
  deliverable:"One scenario (persona, context, goal, constraints) and three well-framed HMW questions." },

{ type:"discussion", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  label:"Responsible Design Checkpoint — Day 2",
  question:"Biased or incomplete research input\nproduces biased AI-generated personas.\n{hl}Where in today's AI-assisted research{/hl}\ncould that have happened?",
  hint:"2 minutes. Name one gap in your input data or one theme you haven't verified yet." },

{ type:"wrap", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Day 2 Complete", title:"Research Foundation Complete",
  cards:[
    { n:"01", t:"You can run real research", b:"Interviews, experience maps, and insight that names causes. You know which method answers which question, and how to talk to a user." },
    { n:"02", t:"You design for the job, accelerated by AI", b:"A JTBD-grounded persona, synthesised with Claude and contextualised with Perplexity, every output reviewed by you." },
    { n:"03", t:"You can turn insight into ideas", b:"Scenarios anchor design to a real moment. HMW questions open the solution space. You generate wide before you judge." },
  ],
  next:"Day 3 · Figma Foundations + Design Craft · The research is done. Now Figma opens and you start to build." },

];
