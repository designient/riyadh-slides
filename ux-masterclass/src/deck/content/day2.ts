import type { ManifestSlide as Slide } from "../types";

export const day2: Slide[] = [

// ── DAY 2 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:2,
  dayLabel:"Day 2 of 5 · Riyadh, KSA · 13 July 2026",
  title:"Research, JTBD\n+ AI Workflows",
  theme:"Turn understanding into direction",
  sessions:[
    "S1 · Gathering User Data  9:00 - 10:30",
    "S2 · Interviews, JTBD + Personas  10:40 - 12:30",
    "S3 · AI Research Workflows  1:30 - 3:30",
    "S4 · Scenarios, Storyboards + Ideation  3:40 - 5:00",
  ] },

// ══ DAY 2 · S1 · Gathering User Data (13) ════════════════════════
{ type:"cover", day:2, session:1, time:"9:00 - 10:30",
  title:"Gathering\n{hl}User Data{/hl}",
  subtitle:"Research Methods · Experience Maps · Actionable Insight" },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Why Research First", title:"Why Data Changes Decisions",
  layout:"bullets",
  body:[
    "<b>Without data, the loudest voice wins.</b> With data, the clearest evidence wins. Research moves decisions from politics to facts.",
    "Most product failures are not <em>build</em> failures, they are <em>understanding</em> failures. The thing got made well, but no one needed it.",
    "Research is cheapest at the start and most expensive to ignore. A bad assumption found on Day 1 costs a sticky note; found post-launch it costs a rebuild.",
    "<b>The goal is not certainty,</b> it is reducing risk enough to commit with confidence and a plan to learn more.",
  ] },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"The Categories", title:"Types of User Data",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Qualitative · the why", b:"Interviews, observation, open-ended feedback. Explains motivation and behaviour. Small samples, deep insight. Answers why something happens." },
    { tone:"gold", t:"Quantitative · the what", b:"Analytics, surveys at scale, A/B tests. Measures how much and how often. Large samples, shallow per data point. Answers what is happening." },
    { tone:"navy", t:"Primary · you gathered it", b:"Data you collected directly for this question: your interviews, your tests. Highest relevance, highest effort." },
    { tone:"gold", t:"Secondary · already exists", b:"Existing reports, analytics, market research, competitor data. Fast and cheap, but not built for your exact question." },
  ],
  footnote:"Strong research triangulates: qual explains what quant reveals. Use both, not one." },

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

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Method Selection", title:"When to Use Which Method",
  layout:"bullets",
  body:[
    "<b>Don't know the problem yet?</b> Generative. Interviews and observation. Start wide, listen more than you ask.",
    "<b>Have a concept to validate?</b> Evaluative. Put a prototype in front of users and watch where they struggle.",
    "<b>Need scale and significance?</b> Quantitative. Surveys and analytics, once you know which questions matter.",
    "<b>Tight on time and budget?</b> Five user interviews will surface most major issues. Perfection is not the bar, direction is.",
  ] },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"A Core Artefact", title:"Experience Maps · What They Are",
  layout:"split",
  body:{
    left:[
      "An <b>experience map</b> visualises everything a user does, thinks, and feels as they try to accomplish a goal over time.",
      "It exposes <em>the gaps</em>: the moments of friction, confusion, and drop-off that no single screen reveals on its own.",
      "Unlike a journey map tied to one product, an experience map can span the whole problem, including the parts you don't yet own.",
    ],
    right:{ tone:"gold", t:"Why it works",
      b:"Laying the whole experience flat, end to end, makes the worst moments impossible to ignore. Teams stop optimising screens and start fixing the journey." },
  } },

{ type:"framework", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"The Anatomy", title:"What an Experience Map Is Made Of",
  kind:"stack",
  data:{ layers:[
    { t:"Phases", d:"The stages of the journey over time, left to right. e.g. Aware, Consider, Decide, Use, Return." },
    { t:"Actions", d:"What the user actually does in each phase. Concrete steps, not intentions." },
    { t:"Thoughts", d:"What they are thinking and asking themselves at each step." },
    { t:"Emotions", d:"The emotional curve, plotted high to low. Where does frustration spike?" },
    { t:"Opportunities", d:"The design openings each low point reveals. This is the output that matters." },
  ] },
  note:"The emotional curve is the heart of the map. Every dip is a design opportunity." },

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
    "Good insights are <b>specific, surprising, and actionable.</b> If it's obvious or you can't act on it, keep digging.",
    "Format that works: <b>We observed [behaviour], because [reason], which means [implication for design].</b>",
  ] },

{ type:"statement", day:2, session:1, sessionTitle:"Gathering User Data",
  quote:"\"The goal is not more data.\nIt is {hl}the right question answered with confidence.{/hl}\"",
  attribution:"Research is a means to a decision, never an end in itself." },

{ type:"toolOpen", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Hands On", title:"Back to Your FigJam Canvas",
  tool:"figjam",
  instruction:"Pull up your Day 1 persona sketch",
  sub:"We're extending it into a full experience map for your chosen persona and product.",
  need:["Your Day 1 FigJam file","Your ranked pain points","Your first persona sketch"] },

{ type:"exercise", day:2, session:1, tool:"figjam",
  task:"Map an {hl}Experience{/hl}",
  sub:"One persona, one product, one goal. Lay out the phases, then plot actions, thoughts, emotions, and pain points.",
  minutes:25,
  deliverable:"A 4 to 5 phase experience map with an emotional curve and at least 3 marked opportunities." },

{ type:"wrap", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"Match method to question", b:"Generative to explore, evaluative to validate. Qual for why, quant for what. Most teams skip the generative work and pay for it later." },
    { n:"02", t:"Experience maps expose the gaps", b:"Laying the whole journey flat reveals the friction no single screen shows. The emotional low points are your richest design opportunities." },
    { n:"03", t:"Insight names a cause", b:"Data describes what happened. Insight explains why and tells you what to do. Observed, because, which means." },
  ],
  next:"S2 · Interviews, JTBD + Personas (10:40) · How to actually talk to users, and turn what they say into a person you can design for." },

// ══ DAY 2 · S2 · Interviews, JTBD + Personas (15) ════════════════
{ type:"cover", day:2, session:2, time:"10:40 - 12:30",
  title:"Interviews, JTBD\n+ {hl}Personas{/hl}",
  subtitle:"Talking to Users · Jobs to Be Done · Real Personas" },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Right Instrument", title:"Why Interviews Over Surveys",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Surveys confirm", b:"Good for measuring things you already understand at scale. But you can only ask what you already thought to ask. They can't surprise you." },
    { tone:"gold", t:"Interviews discover", b:"A conversation can follow the unexpected. The best insight usually comes from a follow-up question you didn't plan, to an answer you didn't expect." },
  ],
  footnote:"Survey when you know the question. Interview when you're still finding it. This week, you interview." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Approach", title:"Interview Methodology",
  layout:"bullets",
  body:[
    "Use a <b>semi-structured</b> interview: a written guide of topics, but freedom to follow interesting threads as they appear.",
    "A <b>guide is not a script.</b> It keeps you on track and consistent across interviews, without making the conversation robotic.",
    "<b>Listen far more than you talk.</b> Aim for the user speaking 80% of the time. Silence is a tool, let it pull out more.",
    "Ask about <em>past behaviour, not future intentions.</em> \"Tell me about the last time you…\" beats \"Would you use…\" every time.",
    "<b>Record and take notes,</b> but stay present. You'll synthesise later, in the room you focus on the human.",
  ] },

{ type:"framework", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Shape of a Conversation", title:"Interview Script Structure",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Opening", d:"Set context, get consent to record, put them at ease. No real questions yet." },
    { n:"02", t:"Warm-Up", d:"Easy background questions. Build rapport and get them talking comfortably." },
    { n:"03", t:"Core", gold:true, d:"The real topics. Past behaviour, specific stories, the heart of the research." },
    { n:"04", t:"Deep Probe", d:"Follow the surprises. Ask why repeatedly. Chase the unexpected answer." },
    { n:"05", t:"Close", d:"Anything we missed? Thank them. Leave the door open for follow-up." },
  ]},
  note:"Spend the most time in Core and Deep Probe. The opening and warm-up earn the right to ask them." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"Getting Beneath the Surface", title:"The Five Probing Techniques",
  layout:"cards3",
  body:[
    { n:"01", t:"The Five Whys", b:"Ask why, then why again, up to five times. The first answer is rarely the real reason." },
    { n:"02", t:"Silence", tone:"navy", b:"Pause after they finish. People fill silence with the more honest answer they were holding back." },
    { n:"03", t:"Echo", b:"Repeat their last few words as a question. \"It was frustrating?\" invites them to expand." },
    { n:"04", t:"Tell me about the last time", tone:"navy", b:"Anchor to a real, specific event. Memory of a real moment beats generalised opinion." },
    { n:"05", t:"Show me", b:"Ask them to demonstrate, not describe. What people do and what they say they do often differ." },
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

{ type:"example", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"Across Industries", title:"JTBD in Practice · Three Examples",
  mode:"annotated",
  panels:[
    { l:"Online learning", t:"<b>When</b> I'm stuck in a job with no growth, <b>I want to</b> build a portfolio-ready skill in weeks, <b>so I can</b> credibly switch careers." },
    { l:"Travel booking", t:"<b>When</b> I'm planning a rare big trip, <b>I want to</b> feel I've found the best option, <b>so I can</b> stop second-guessing and enjoy it." },
    { l:"Food delivery", t:"<b>When</b> I'm exhausted after work, <b>I want to</b> get a reliable meal with zero decisions, <b>so I can</b> rest without effort or risk." },
  ],
  takeaway:"Notice the job is emotional as often as functional. The \"so I can\" is usually a feeling." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"From Job to Person", title:"Building JTBD-Grounded Personas",
  layout:"bullets",
  body:[
    "<b>Start from the job, not the demographics.</b> Lead the persona with what they're trying to accomplish and why.",
    "Include <em>context and constraints:</em> when the job arises, what gets in the way, what they've tried before.",
    "Add <b>behaviours and motivations</b> over age and income. \"Researches obsessively before committing\" is more useful than \"34, urban\".",
    "Keep it to <b>one page and grounded in real interview quotes.</b> A persona with no real data behind it is just a stock photo with a name.",
  ] },

{ type:"framework", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Template", title:"Persona Anatomy",
  kind:"stack",
  data:{ layers:[
    { t:"Name + one-line identity", d:"A memorable handle and a single sentence. Not a stock photo, a real archetype." },
    { t:"The job to be done", d:"Their primary JTBD statement. This leads, everything else supports it." },
    { t:"Context + triggers", d:"When and where the job arises. What sets it off." },
    { t:"Pain points + frustrations", d:"What currently gets in the way, in their words." },
    { t:"Motivations + the real outcome", d:"What success feels like for them. The deeper goal." },
  ] },
  note:"If you removed the name and photo, the persona should still be unmistakably one specific person." },

{ type:"exercise", day:2, session:2, tool:"figjam",
  task:"Write Your {hl}JTBD Statement{/hl}",
  sub:"Using your experience map persona, write their primary job: When… I want to… so I can…",
  minutes:15,
  deliverable:"One sharp JTBD statement plus three supporting context or pain-point notes." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"One More Lens", title:"Empathy Mapping",
  layout:"cards4",
  body:[
    { icon:"interview", t:"Says", b:"Direct quotes from research. What the user actually told you, in their own words." },
    { icon:"ai", t:"Thinks", b:"What occupies them but they may not say aloud. Doubts, priorities, hopes." },
    { icon:"prototype", t:"Does", b:"Observed actions and behaviours. What they do, not what they claim to do." },
    { icon:"empathy", t:"Feels", b:"The emotional state. Anxious, confident, overwhelmed, relieved. The driver beneath the rest." },
  ],
  footnote:"Gaps between Says and Does are gold. They reveal where stated and real behaviour diverge." },

{ type:"wrap", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Interview for discovery", b:"Semi-structured, past behaviour over future intentions, neutral questions only. Listen 80% of the time. The follow-up holds the gold." },
    { n:"02", t:"Design for the job, not the demographic", b:"People hire products to do a job. When, I want to, so I can. The outcome is usually a feeling, and that's what you design for." },
    { n:"03", t:"A persona is grounded in real data", b:"Job first, context and behaviour over age and income, one page, real quotes. If there's no data behind it, it's fiction." },
  ],
  next:"S3 · AI Research Workflows (1:30) · Now we accelerate all of this with Claude and Perplexity." },

// ══ DAY 2 · S3 · AI Research Workflows (13) ══════════════════════
{ type:"cover", day:2, session:3, time:"1:30 - 3:30",
  title:"AI Research\n{hl}Workflows{/hl}",
  subtitle:"Claude for Synthesis · Perplexity for Competitive Research" },

{ type:"statement", day:2, session:3, sessionTitle:"AI Research Workflows",
  quote:"\"AI doesn't replace the researcher.\nIt removes {hl}the slowest parts of the process.{/hl}\"",
  attribution:"The judgement stays human. The grunt work doesn't have to." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Where It Helps", title:"Where AI Earns Its Place in UX Research",
  layout:"bullets",
  body:[
    "<b>Synthesis,</b> not collection. AI is fastest at clustering, summarising, and finding patterns across messy notes you've already gathered.",
    "<b>Breadth,</b> not depth of judgement. It scans a wide competitive landscape in minutes, then you decide what matters.",
    "<b>First drafts,</b> not final calls. Personas, themes, and HMW questions come back as a strong starting point you refine, never ship raw.",
    "<em>What it must not do:</em> invent users, fabricate quotes, or replace real interviews. AI accelerates your thinking, it doesn't supply the truth.",
  ] },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The First Workhorse", title:"Claude for Synthesis",
  layout:"cards3",
  body:[
    { icon:"synthesis", t:"Clustering", b:"Paste raw interview or sticky notes. Get back grouped themes far faster than manual affinity mapping." },
    { icon:"ai", t:"Theme naming", tone:"navy", b:"Turn a cluster of observations into a sharp, named insight with a supporting rationale." },
    { icon:"interview", t:"Persona drafting", b:"From real notes, draft a JTBD-grounded persona you then verify and correct against the source." },
  ],
  footnote:"Always feed it your real data. Claude organises what you gathered, it does not replace gathering it." },

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
  eyebrow:"The Skill That Matters", title:"Prompt Craft for Research",
  layout:"split",
  body:{
    left:[
      "<b>Role:</b> tell it who to be. \"You are a UX researcher synthesising interview notes.\"",
      "<b>Context:</b> the product, the users, the research question you're answering.",
      "<b>Data:</b> paste the real notes. The output is only as good as the input.",
      "<b>Format:</b> specify exactly what you want back. \"Return 3 to 5 named themes, each with a one-line insight and supporting quotes.\"",
    ],
    right:{ tone:"gold", t:"The pattern",
      b:"Role + Context + Data + Format. Get any one wrong and the output drifts. Get all four right and AI synthesis is genuinely faster than doing it by hand, with no loss of rigour." },
  } },

{ type:"toolOpen", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Hands On", title:"Let's Open Claude",
  tool:"claude",
  instruction:"Paste your FigJam research notes into Claude",
  sub:"We'll cluster them into named themes live, then review every one against your source.",
  need:["Your affinity notes from Day 1","Your experience map insights","The Role + Context + Data + Format pattern"] },

{ type:"exercise", day:2, session:3, tool:"claude",
  task:"Claude {hl}Synthesis{/hl}",
  sub:"Paste your affinity notes. Prompt with Role, Context, Data, Format. Get back clustered themes.",
  minutes:15,
  deliverable:"3 clustered, named themes, each reviewed and corrected against your real notes." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Second Workhorse", title:"Perplexity for Competitive + Trend Research",
  layout:"bullets",
  body:[
    "<b>Perplexity searches and cites.</b> Unlike a chatbot, it pulls current sources and links them, so you can verify every claim.",
    "Use it to <em>map the competitive landscape:</em> who else solves this job, how, and where users complain about them.",
    "Use it for <b>trend and market context:</b> what's shifting in your category, what users are asking for that no one delivers.",
    "Always <b>annotate findings against your JTBD.</b> A competitor feature only matters if it touches the job your user is hiring for.",
  ] },

{ type:"framework", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Workflow", title:"Competitive Research with Perplexity",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Query", d:"Ask a specific question: \"common complaints about [category] apps 2025\"." },
    { n:"02", t:"Sourced Output", gold:true, d:"Cited findings you can click through and verify. No black box." },
    { n:"03", t:"Annotate", d:"Mark each finding against your persona's JTBD. Relevant or noise?" },
    { n:"04", t:"Insight", d:"A short list of competitive gaps your design can exploit." },
  ]},
  note:"The citation is the point. If you can't verify it, you can't design on it." },

{ type:"toolOpen", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Hands On", title:"Let's Open Perplexity",
  tool:"perplexity",
  instruction:"Search your product category's user pain points",
  sub:"Try: \"[your category] user complaints and unmet needs 2025\". Then open the sources.",
  need:["Your persona's JTBD statement","Your product category","A note for findings"] },

{ type:"exercise", day:2, session:3, tool:"perplexity",
  task:"Competitive {hl}Scan{/hl}",
  sub:"Run two queries about your category. Capture three findings and annotate each against your persona.",
  minutes:20,
  deliverable:"3 sourced competitive findings, each marked relevant or not against your JTBD." },

{ type:"wrap", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"AI accelerates, never replaces", b:"It clusters notes and scans markets in minutes. It does not gather truth or make the call. Human review of every output is mandatory." },
    { n:"02", t:"Claude needs Role, Context, Data, Format", b:"Feed it real data, tell it who to be and what to return. That pattern is the difference between useful synthesis and confident nonsense." },
    { n:"03", t:"Perplexity cites, so you can verify", b:"Use it to map competitors and trends, then annotate every finding against the job your user is hiring for. Unverifiable means unusable." },
  ],
  next:"S4 · Scenarios, Storyboards + Ideation (3:40) · Turn this research foundation into stories and ideas." },

// ══ DAY 2 · S4 · Scenarios, Storyboards + Ideation (12) ══════════
{ type:"cover", day:2, session:4, time:"3:40 - 5:00",
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
  eyebrow:"A Real Scenario", title:"Scenario · Booking Under Pressure",
  mode:"annotated",
  panels:[
    { l:"Persona", t:"<b>Layla,</b> a first-time learner researching a career switch, sceptical after a bad past purchase online." },
    { l:"Context", t:"<b>Evening, on her phone,</b> half-watching TV, comparing three course providers across browser tabs." },
    { l:"Goal", t:"<b>Decide today</b> whether this course is worth the money, without feeling she's being sold to." },
    { l:"Constraints", t:"<b>Divided attention, low trust, price anxiety.</b> She'll abandon the moment something feels slippery or unclear." },
  ],
  takeaway:"Every design decision for Layla now has a test: does it help a distracted, sceptical person decide with confidence?" },

{ type:"theory", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Seeing the Story", title:"Storyboards in UX",
  layout:"bullets",
  body:[
    "A <b>storyboard</b> turns a scenario into a sequence of frames, like a comic strip of the user's experience.",
    "Usually <b>6 to 8 frames:</b> the trigger, the steps, the key moments of friction or delight, and the outcome.",
    "<b>Lo-fi is the point.</b> Stick figures and boxes. The value is the sequence and the emotion, not the artwork.",
    "Storyboards make <em>gaps and assumptions visible.</em> When you draw the steps, the missing one becomes obvious.",
  ] },

{ type:"framework", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"The Template", title:"What Each Storyboard Frame Holds",
  kind:"stack",
  data:{ layers:[
    { t:"The sketch", d:"A rough visual of what's happening on screen or in the world at this moment." },
    { t:"The action", d:"One line: what the user is doing in this frame." },
    { t:"The emotion", d:"How they feel here. The emotional beat carries the story." },
  ] },
  note:"Keep one moment per frame. If a frame needs two sentences to explain, split it." },

{ type:"theory", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Generating Options", title:"Ideation Techniques",
  layout:"cards3",
  body:[
    { icon:"ideation", t:"Crazy 8s", b:"Fold a sheet into 8. Eight ideas in eight minutes, one per minute. Forces quantity past your first obvious answer." },
    { icon:"boolean", t:"SCAMPER", tone:"navy", b:"Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse. A prompt list to break fixation." },
    { icon:"question", t:"How Might We", b:"Reframe each problem as an open question that invites many solutions. The bridge from insight to ideas." },
  ],
  footnote:"Separate generation from judgement. Generate wide first. Evaluate later, never in the same breath." },

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
  sub:"Write one full scenario for your persona, then three How Might We statements from their biggest pain point.",
  minutes:20,
  deliverable:"One scenario (persona, context, goal, constraints) and three well-framed HMW questions." },

{ type:"statement", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  quote:"\"Ideation is not about the right idea.\nIt is about {hl}removing the fear of the wrong one.{/hl}\"",
  attribution:"Quantity first. The best idea usually arrives after the obvious ones are out of the way." },

{ type:"wrap", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Day 2 Complete", title:"Research Foundation Complete",
  cards:[
    { n:"01", t:"You can run real research", b:"Interviews, experience maps, and insight that names causes. You know which method answers which question, and how to talk to a user." },
    { n:"02", t:"You design for the job, accelerated by AI", b:"A JTBD-grounded persona, synthesised with Claude and contextualised with Perplexity, every output reviewed by you." },
    { n:"03", t:"You can turn insight into ideas", b:"Scenarios anchor design to a real moment. HMW questions open the solution space. You generate wide before you judge." },
  ],
  next:"Day 3 · Figma Foundations + Design Craft · The research is done. Now Figma opens and you start to build." },

];
