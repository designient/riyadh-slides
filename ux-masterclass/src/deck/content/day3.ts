import type { ManifestSlide as Slide } from "../types";

export const day3: Slide[] = [

// ── DAY 3 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:3,
  dayLabel:"Day 3 of 5 · Riyadh, KSA · 14 July 2026",
  title:"Figma Foundations\n+ Design Craft",
  theme:"From blank canvas to design system",
  sessions:[
    "S1 · Introduction to Figma  9:00 - 10:30",
    "S2 · Vector Work + Graphics  10:40 - 12:30",
    "S3 · Layout Mastery  1:30 - 3:30",
    "S4 · Design Systems + Variables  3:40 - 5:00",
  ] },

// ══ DAY 3 · S1 · Introduction to Figma (8) ═══════════════════════
{ type:"cover", day:3, session:1, time:"9:00 - 10:30",
  title:"Introduction to\n{hl}Figma{/hl}",
  subtitle:"The Interface · Hierarchy · The Figma Mindset" },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Why One Tool", title:"The Case for Figma",
  layout:"bullets",
  body:[
    "<b>One tool from wireframe to handoff.</b> Design, prototype, document, and hand off all live in the same file. No exporting between apps.",
    "<b>Browser-based and real-time.</b> Like FigJam, everyone works on the same file at once. No versions emailed, no \"final\" naming wars.",
    "<b>It replaces Adobe XD entirely.</b> Everything XD did, Figma does, plus a living component system and a far larger community.",
    "<b>It's the industry standard.</b> The tool you learn here is the tool you'll actually use, and the one employers expect.",
  ] },

{ type:"toolOpen", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Hands On", title:"Let's Open Figma",
  tool:"figma",
  instruction:"Create your masterclass design file",
  sub:"Name it: [Your Name] · UX Masterclass. Everything you build for the rest of the week lives here.",
  need:["Your Figma account","The desktop app or browser","Your Day 2 persona and scenario"] },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Orientation", title:"The Figma Interface",
  layout:"cards3",
  body:[
    { icon:"layout", t:"Left · Layers + Assets", b:"Every object on the canvas, nested and named. Your components and styles live in the Assets tab here too." },
    { icon:"vector", t:"Centre · The Canvas", tone:"navy", b:"Infinite space where you design. Zoom, pan, and arrange frames freely. This is where the work happens." },
    { icon:"variables", t:"Right · Properties", b:"Everything about the selected object: size, position, fill, type, effects, and prototype connections." },
  ] },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"The Building Blocks", title:"Pages, Frames, Sections",
  layout:"cards3",
  body:[
    { n:"01", t:"Pages", b:"Top-level divisions of your file. Use them to separate research, wireframes, UI, and prototype. Keep work organised." },
    { n:"02", t:"Frames", tone:"navy", b:"Containers for your design. A frame is a screen, a card, a component. Frames can nest inside frames, infinitely." },
    { n:"03", t:"Sections", b:"Group related frames on the canvas with a labelled boundary. Great for organising flows and exploration." },
  ],
  footnote:"A frame is the single most important concept in Figma. Almost everything is a frame inside a frame." },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Setting Up Right", title:"Colour Space + Layout Grids",
  layout:"split",
  body:{
    left:[
      "<b>Figma works in sRGB.</b> What you design is what ships to screen. Set your colours once and trust them across the file.",
      "<b>Layout grids</b> bring structure: columns for desktop, a simpler grid for mobile. Design to the grid, not by eye.",
      "A common starting grid: <em>12 columns desktop, 4 mobile,</em> with consistent gutters and margins.",
    ],
    right:{ tone:"gold", t:"Why grids matter",
      b:"A grid is the invisible skeleton that makes a layout feel intentional. Align to it and even a first attempt looks considered. Ignore it and polished work still feels off." },
  } },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"The Mental Model", title:"The Figma Mindset",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Everything is a layer", b:"Every object stacks in the layers panel. Order, nesting, and naming are how you stay in control as files grow complex." },
    { tone:"gold", t:"Everything is a frame", b:"Screens, cards, buttons, icons, all frames. Once this clicks, auto layout, components, and responsive design all follow naturally." },
  ],
  footnote:"Hold these two ideas and the rest of Figma stops feeling like a tool and starts feeling like a system." },

{ type:"wrap", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Session 1 Complete", title:"You Can Navigate Figma",
  cards:[
    { n:"01", t:"You know the interface", b:"Layers and assets left, canvas centre, properties right. You can find anything and change anything about a selected object." },
    { n:"02", t:"You understand the hierarchy", b:"Pages hold frames, frames nest, sections organise. The frame is the atom of everything you'll build." },
    { n:"03", t:"You have the mindset", b:"Everything is a layer, everything is a frame. That model makes the next three sessions click into place." },
  ],
  next:"S2 · Vector Work + Graphics (10:40) · We teach Figma to draw, from the pen tool to masking." },

// ══ DAY 3 · S2 · Vector Work + Graphics (13) ═════════════════════
{ type:"cover", day:3, session:2, time:"10:40 - 12:30",
  title:"Vector Work\n+ {hl}Graphics{/hl}",
  subtitle:"Pen Tool · Paths · Masking · Alignment" },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"The Basics", title:"What Vector Graphics Are",
  layout:"bullets",
  body:[
    "<b>Vectors are defined by maths, not pixels.</b> Points, lines, and curves that stay perfectly sharp at any size.",
    "This is why <em>icons and logos are vectors:</em> the same file works at 16px in a menu and 2 metres on a banner.",
    "Vectors are <b>editable forever.</b> You can reshape, recolour, and recombine them non-destructively, unlike a flattened image.",
    "Everything you draw in Figma with shapes and the pen tool is a vector. Mastering them is mastering how Figma makes form.",
  ] },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"The Toolset", title:"Figma's Drawing Tools",
  layout:"cards4",
  body:[
    { icon:"boolean", t:"Shape tools", b:"Rectangle, ellipse, line, polygon, star. The fast primitives most UI is built from." },
    { icon:"vector", t:"Pen tool", b:"Draw any custom shape point by point. Full control over every anchor and curve." },
    { icon:"vector", t:"Pencil", b:"Freehand drawing, smoothed into a vector path. For quick organic marks." },
    { icon:"design", t:"Eyedropper", b:"Sample any colour on the canvas instantly. Keeps your palette consistent." },
  ] },

{ type:"framework", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"A Key Distinction", title:"Open vs Closed Paths",
  kind:"compare",
  data:{
    bridge:"Fill needs a closed loop",
    left:{ tone:"navy", label:"Open", sub:"Start and end don't meet",
      def:"A path with two loose ends. Behaves like a line. Takes a stroke, but a fill behaves unpredictably.",
      items:["Lines and connectors","Underlines and dividers","Signatures and freehand marks","Anything stroke-only"] },
    right:{ tone:"gold", label:"Closed", sub:"Start and end join",
      def:"A continuous loop. Behaves like a shape. Takes both a stroke and a clean, predictable fill.",
      items:["Icons and glyphs","Buttons and containers","Filled illustrations","Any solid form"] },
  },
  note:"If a fill looks wrong, your path is probably open. Close it and the fill behaves." },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"The Hardest Tool to Master", title:"The Pen Tool",
  layout:"bullets",
  body:[
    "<b>Click for corners, click-and-drag for curves.</b> A simple click sets a sharp anchor. Dragging pulls out handles that bend the line.",
    "<b>Handles control the curve.</b> Their length and angle shape how the line enters and leaves each point. Long handles, gentle curves.",
    "<b>Fewer points, smoother shapes.</b> Beginners use too many anchors. Pros use the minimum needed. Each extra point is a kink waiting to happen.",
    "Close the path by clicking the first point again. <em>Practice is the only teacher here,</em> the pen tool rewards repetition.",
  ] },

{ type:"example", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Walkthrough", title:"Pen Tool · Tracing a Search Icon",
  mode:"annotated",
  panels:[
    { l:"Step 1 · The circle", t:"<b>Use the ellipse, not the pen, for the lens.</b> Knowing when not to use the pen is part of the skill." },
    { l:"Step 2 · The handle", t:"<b>Pen tool, two anchors, a stroke.</b> A short open path at 45 degrees from the circle's edge." },
    { l:"Step 3 · Round the cap", t:"<b>Set stroke cap to round.</b> Small detail, but it's the difference between amateur and clean." },
    { l:"Step 4 · Combine", t:"<b>Select both, group or flatten.</b> One icon, infinitely scalable, fully editable later." },
  ],
  takeaway:"Most icons are primitives plus one or two pen strokes. You rarely draw the whole thing freehand." },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Working with Images", title:"Masking in Figma",
  layout:"split",
  body:{
    left:[
      "A <b>mask</b> uses one shape to control what's visible of another. The shape becomes a window onto the image.",
      "Workflow: <em>place the shape on top of the image, select both, right-click, Use as Mask.</em> The image shows only through the shape.",
      "Masks are <b>non-destructive.</b> The full image is still there, you're just controlling what shows. Reposition it anytime.",
    ],
    right:{ tone:"navy", t:"Common uses",
      b:"Rounded-corner avatars, images cropped to a card shape, photos inside custom illustration shapes, hero images clipped to a frame. Masking is how images fit your layout, not the other way round." },
  } },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Staying Organised", title:"Organising Content",
  layout:"bullets",
  body:[
    "<b>Name your layers.</b> \"Rectangle 47\" tells you nothing. \"card / bg\" tells you everything. Future-you will be grateful.",
    "<b>Group related elements</b> and nest logically. A card frame contains its image, text, and button as children.",
    "<b>Use frames over groups</b> for anything structural. Frames support layout, constraints, and clipping. Groups are just loose bundles.",
    "A tidy layer panel is not vanity, it's <em>how a file stays workable</em> when it grows to hundreds of objects.",
  ] },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Precision", title:"Alignment + Smart Guides",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Alignment tools", b:"Align left, centre, right, top, middle, bottom, and distribute evenly. Select multiple objects and align in one click. Never nudge by eye." },
    { tone:"navy", t:"Smart guides", b:"Red lines that appear as you drag, showing spacing and alignment to nearby objects in real time. Figma is telling you when things line up. Trust it." },
  ],
  footnote:"Precise alignment is the cheapest way to make work look professional. The tools do it for you, use them." },

{ type:"toolOpen", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Hands On", title:"Open Your S2 Page",
  tool:"figma",
  instruction:"Create a new page named Vector Practice",
  sub:"We're about to draw live: custom shapes with the pen tool, then mask an image.",
  need:["Your masterclass Figma file","An image to mask (any photo)","The pen tool (P)"] },

{ type:"exercise", day:3, session:2, tool:"figma",
  task:"Vector + {hl}Masking{/hl}",
  sub:"Draw three custom shapes with the pen tool. Then mask an image inside one of them.",
  minutes:25,
  deliverable:"Three pen-tool shapes and one image masked into a shape, all cleanly named in your layers." },

{ type:"reference", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Cheatsheet · Keep This Open", title:"Pen Tool + Vector Shortcuts",
  head:["Action","Shortcut","Note"],
  rows:[
    ["Pen tool","P","Click for corners, drag for curves"],
    ["Pencil (freehand)","Shift + P","Smoothed organic paths"],
    ["Bend / edit point","Cmd / Ctrl + click anchor","Switch between corner and curve"],
    ["Add to selection","Shift + click","Build multi-object selections"],
    ["Use as mask","Cmd / Ctrl + Alt + M","Top shape masks what's below"],
    ["Flatten selection","Cmd / Ctrl + E","Merge vectors into one path"],
    ["Align centre (H / V)","Alt + H / Alt + V","After selecting two or more objects"],
    ["Eyedropper","I","Sample any colour on canvas"],
  ] },

{ type:"wrap", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Vectors are maths, not pixels", b:"Sharp at any size, editable forever. Shapes and the pen tool are how Figma makes every icon, glyph, and custom form." },
    { n:"02", t:"The pen tool rewards restraint", b:"Click for corners, drag for curves, use the fewest points possible. Most icons are primitives plus one or two strokes, not freehand." },
    { n:"03", t:"Precision is free, so use it", b:"Name layers, group logically, align with tools and smart guides. A tidy, aligned file looks professional and stays workable." },
  ],
  next:"S3 · Layout Mastery (1:30) · Auto layout, the feature that turns static art into adaptive design." },

// ══ DAY 3 · S3 · Layout Mastery (14) ═════════════════════════════
{ type:"cover", day:3, session:3, time:"1:30 - 3:30",
  title:"Layout\n{hl}Mastery{/hl}",
  subtitle:"Auto Layout · Constraints · Boolean Operations" },

{ type:"statement", day:3, session:3, sessionTitle:"Layout Mastery",
  quote:"\"Layout is not decoration.\nIt is {hl}the logic of how things relate.{/hl}\"",
  attribution:"Master auto layout and your designs start to behave like real products." },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"The Most Important Feature", title:"Auto Layout · What and Why",
  layout:"bullets",
  body:[
    "<b>Auto layout makes frames respond to their content.</b> Add text and the button grows. Remove an item and the list closes the gap.",
    "It replaces manual nudging with <em>rules:</em> direction, spacing, padding, and alignment that the frame enforces automatically.",
    "It's how real components behave. A button with auto layout resizes around its label, just like it will in code.",
    "<b>If you learn one thing in Figma, learn this.</b> Everything from buttons to full responsive screens is built on it.",
  ] },

{ type:"framework", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"The Three Resize Behaviours", title:"Fill, Hug, Fixed",
  kind:"stack",
  data:{ layers:[
    { t:"Hug contents", d:"The frame shrinks to wrap its content exactly. Use for buttons, tags, chips. The frame is as big as what's inside." },
    { t:"Fixed size", d:"The frame stays a set dimension regardless of content. Use for fixed cards, avatars, set-width panels." },
    { t:"Fill container", d:"The frame stretches to fill its parent's available space. Use for full-width inputs, flexible columns." },
  ] },
  note:"Every layer in an auto layout frame is set to one of these three. Master the combination and layout becomes effortless." },

{ type:"example", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Seeing It Work", title:"Auto Layout in Action",
  mode:"split",
  panels:{
    negative:{ heading:"Without auto layout", items:[
      { l:"Add text", t:"<b>The button stays the same size,</b> text overflows or clips. You manually resize every time." },
      { l:"Reorder a list", t:"<b>You drag each item and realign by hand,</b> leaving gaps and misalignment behind." },
      { l:"Translate copy", t:"<b>Longer words break the layout.</b> Every screen needs manual repair for each language." },
    ]},
    positive:{ heading:"With auto layout", items:[
      { l:"Add text", t:"<b>The button grows to fit,</b> padding intact, instantly. No manual resizing ever." },
      { l:"Reorder a list", t:"<b>Drag one item, the rest reflow</b> and respace automatically. Always aligned." },
      { l:"Translate copy", t:"<b>Frames expand to fit longer text</b> on their own. One design survives every language." },
    ]},
  },
  takeaway:"Auto layout is the difference between a picture of an app and something that behaves like one." },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Going Deeper", title:"Nested Auto Layout",
  layout:"split",
  body:{
    left:[
      "<b>Auto layout frames nest inside each other,</b> and that's how complex components are built.",
      "A card is a <em>vertical</em> auto layout (image, then body). The body is a vertical stack. The footer is a <em>horizontal</em> auto layout of tag and button.",
      "Each level handles its own spacing and resizing. Change the content anywhere and the whole structure adapts cleanly.",
    ],
    right:{ tone:"navy", t:"The pro move",
      b:"Think of a screen as auto layout frames inside auto layout frames, all the way down. Build it that way and the entire screen becomes responsive almost for free." },
  } },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Speed Tools", title:"Tidy Up + Smart Selection",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Tidy Up", b:"Select messy objects and Figma instantly arranges them into an even grid or row with consistent spacing. One shortcut, instant order." },
    { tone:"navy", t:"Smart Selection", b:"Select a row or grid and pink handles appear. Drag to respace evenly, or reorder items by dragging. Bulk-edit spacing without touching each gap." },
  ],
  footnote:"These two save hours over a project. Reach for them before you ever align by hand." },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Control at the Edges", title:"Rulers, Guides + Constraints",
  layout:"bullets",
  body:[
    "<b>Constraints define how a layer behaves when its frame resizes:</b> pin to left, right, centre, or scale with the frame.",
    "Set a button to pin <em>bottom-right</em> and it stays there whether the frame is phone-width or tablet-width.",
    "<b>Rulers and guides</b> (drag from the edges) give you manual reference lines for precise, repeatable placement.",
    "Constraints are the foundation of responsive design before auto layout, and they still matter for absolute-positioned elements.",
  ] },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Combining Shapes", title:"Boolean Operations",
  layout:"cards4",
  body:[
    { icon:"boolean", t:"Union", b:"Merge shapes into one combined form. The sum of both outlines." },
    { icon:"boolean", t:"Subtract", b:"Cut the top shape out of the one beneath. Punch holes and notches." },
    { icon:"boolean", t:"Intersect", b:"Keep only where the shapes overlap. The shared core." },
    { icon:"boolean", t:"Exclude", b:"Keep everything except the overlap. The opposite of intersect." },
  ],
  footnote:"Booleans are non-destructive in Figma. The source shapes stay editable inside the result." },

{ type:"example", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Booleans in Practice", title:"Building a Crescent from Two Circles",
  mode:"annotated",
  panels:[
    { l:"Step 1", t:"<b>Draw two overlapping circles,</b> one offset from the other." },
    { l:"Step 2", t:"<b>Select both, choose Subtract.</b> The top circle carves a curve out of the bottom one." },
    { l:"Step 3", t:"<b>A clean crescent remains,</b> made from primitives, no pen tool needed." },
    { l:"Step 4", t:"<b>Still fully editable.</b> Move a source circle and the crescent reshapes live." },
  ],
  takeaway:"Many icons that look hand-drawn are just primitives combined with booleans. Faster, cleaner, more precise." },

{ type:"toolOpen", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Hands On", title:"Open Your S3 Page",
  tool:"figma",
  instruction:"New page: Layout Practice",
  sub:"We're building a card component with nested auto layout, the real foundation for Day 5.",
  need:["Your masterclass Figma file","An image for the card","Shortcut: Shift + A for auto layout"] },

{ type:"exercise", day:3, session:3, tool:"figma",
  task:"Auto Layout {hl}Card{/hl}",
  sub:"Build a card: image, title, tag, and button, using nested auto layout so it adapts to its content.",
  minutes:30,
  deliverable:"One responsive card using nested auto layout. Add text and watch it grow correctly." },

{ type:"reference", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Cheatsheet · Keep This Open", title:"Auto Layout · Fill, Hug, Fixed + Shortcuts",
  head:["Behaviour / Action","Use For","How"],
  rows:[
    ["Hug contents","Buttons, tags, chips","Resizing dropdown to Hug"],
    ["Fixed size","Cards, avatars, set panels","Resizing dropdown to Fixed"],
    ["Fill container","Inputs, flexible columns","Resizing dropdown to Fill"],
    ["Add auto layout","Any frame","Shift + A"],
    ["Adjust spacing","Gap between items","Drag handles or set in panel"],
    ["Set padding","Inside the frame","Padding fields in panel"],
    ["Tidy Up","Messy objects to grid","Select, then Tidy Up button"],
    ["Boolean menu","Combine shapes","Toolbar, with shapes selected"],
  ] },

{ type:"wrap", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"Auto layout is the core skill", b:"Frames that respond to content via rules, not nudging. Fill, hug, fixed on every layer. It's how designs start to behave like real products." },
    { n:"02", t:"Nest it for whole screens", b:"Auto layout inside auto layout, all the way down. Build a screen that way and responsiveness comes almost for free." },
    { n:"03", t:"Let the tools do precision", b:"Tidy up, smart selection, constraints, and booleans. Combine primitives instead of drawing freehand. Faster, cleaner, more editable." },
  ],
  next:"S4 · Design Systems + Variables (3:40) · Turn these pieces into a reusable system with tokens." },

// ══ DAY 3 · S4 · Design Systems + Variables (13) ═════════════════
{ type:"cover", day:3, session:4, time:"3:40 - 5:00",
  title:"Design Systems\n+ {hl}Variables{/hl}",
  subtitle:"Styles · Tokens · Libraries · One Source of Truth" },

{ type:"statement", day:3, session:4, sessionTitle:"Design Systems + Variables",
  quote:"\"A design system is not a library.\nIt is {hl}a shared language.{/hl}\"",
  attribution:"Components are the vocabulary. Consistency is the grammar." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Concept", title:"What a Design System Is",
  layout:"bullets",
  body:[
    "<b>A design system is the single source of truth</b> for how a product looks and behaves: colours, type, spacing, components, and the rules for using them.",
    "It lets a team <em>design faster and stay consistent</em> without re-deciding the same things on every screen.",
    "It is built in layers: <b>tokens</b> (the raw decisions), <b>components</b> (reusable parts), <b>patterns</b> (combinations), and <b>templates</b> (full layouts).",
    "A real system is <b>living,</b> not a one-time style guide. Update it once and every product using it updates too.",
  ] },

{ type:"framework", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Hierarchy", title:"From Token to Template",
  kind:"stack",
  data:{ layers:[
    { t:"Tokens", d:"The atomic decisions. A colour value, a spacing unit, a font size. The raw material." },
    { t:"Components", d:"Reusable parts built from tokens. A button, an input, a card." },
    { t:"Patterns", d:"Components combined into a recurring solution. A form, a nav bar, a list row." },
    { t:"Templates", d:"Patterns arranged into a full layout. A complete screen, ready for content." },
  ] },
  note:"Each layer is built from the one below it. Change a token and the change flows all the way up." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Original Tool", title:"Styles in Figma",
  layout:"cards3",
  body:[
    { icon:"ui", t:"Colour styles", b:"Save a colour once, name it, reuse it everywhere. Change the style and every use updates." },
    { icon:"design", t:"Text styles", tone:"navy", b:"Save font, size, weight, and spacing as a named style. Apply consistent type in one click." },
    { icon:"system", t:"Effect styles", b:"Save shadows and blurs as reusable styles. Consistent elevation across the whole file." },
  ],
  footnote:"Styles were Figma's first system tool. Variables now go further, but styles still matter for type and effects." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Modern Layer", title:"Figma Variables · Beyond Styles",
  layout:"bullets",
  body:[
    "<b>Variables store named values</b> for colour, number, string, and boolean, that you reference everywhere instead of hard-coding.",
    "Unlike styles, variables support <em>modes:</em> one variable can hold a light value and a dark value, so theming becomes a single switch.",
    "They map directly to <b>developer tokens.</b> The variable you name here is the token the engineer uses in code. The handoff gets cleaner.",
    "Variables can reference other variables, which is how you build <b>primitive to semantic</b> token systems that scale.",
  ] },

{ type:"framework", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Token Architecture", title:"Primitive to Semantic to Component",
  kind:"stack",
  data:{ layers:[
    { t:"Primitive tokens", d:"Raw values. navy-900 = #0D1B2E, gold-500 = #B8953F. The full palette, named by what they are." },
    { t:"Semantic tokens", d:"Roles, not values. bg-surface points to navy-900, accent points to gold-500. Named by what they do." },
    { t:"Component tokens", d:"button-bg points to accent. Components reference semantics, never raw values. Maximum flexibility." },
  ] },
  note:"Theme an entire product by repointing semantic tokens. Components never change, they just follow." },

{ type:"example", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Why It Pays Off", title:"One Variable, Three Places",
  mode:"annotated",
  panels:[
    { l:"The setup", t:"<b>accent-colour</b> is defined once and used by a button, a card border, and a link." },
    { l:"The change", t:"<b>Marketing wants a new brand colour.</b> You update one variable, not three components." },
    { l:"The result", t:"<b>Button, border, and link all update instantly</b> and stay perfectly in sync. Zero missed instances." },
    { l:"Without variables", t:"<b>You'd hunt every hard-coded colour by hand,</b> miss several, and ship an inconsistent product." },
  ],
  takeaway:"This is the entire argument for a token system: change once, update everywhere, never drift." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Sharing the System", title:"Team Libraries",
  layout:"split",
  body:{
    left:[
      "<b>Publish your styles, variables, and components as a library</b> and the whole team can pull from one source.",
      "When you update a component in the library, <em>every file using it gets the update,</em> with a prompt to accept changes.",
      "This is how design systems scale across products and teams without copy-paste drift.",
    ],
    right:{ tone:"navy", t:"The payoff",
      b:"One published library means a ten-person team designs as if it were one mind. Update the button once, and every screen in every file moves together. That is the whole promise of a system, realised." },
  } },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Two More Essentials", title:"Effects + Repeat Grids via Instances",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Effect styles", b:"Shadows, blurs, and layer effects saved as reusable styles. Consistent elevation and depth across every card and modal in the file." },
    { tone:"navy", t:"Repeat grids via instances", b:"Figma has no literal repeat grid like Adobe XD. You achieve the same result with components and auto layout: place instances and they repeat cleanly, each editable." },
  ],
  footnote:"This is the Figma answer to XD's repeat grid: component instances inside an auto layout frame." },

{ type:"toolOpen", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Hands On", title:"Open Your Variables Panel",
  tool:"figma",
  instruction:"Create your first colour variables",
  sub:"We'll define five core variables and apply them to the card you built in S3.",
  need:["Your card from S3","The local variables panel","The brand palette: navy, gold, cream"] },

{ type:"exercise", day:3, session:4, tool:"figma",
  task:"Variables + {hl}Styles{/hl}",
  sub:"Create five variables: background, surface, primary, text, border. Apply all five to your card.",
  minutes:20,
  deliverable:"Five named colour variables applied to your card. Change one and watch the card update." },

{ type:"wrap", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Day 3 Complete", title:"Design System Foundation Done",
  cards:[
    { n:"01", t:"You can build in Figma", b:"Interface, vectors, the pen tool, masking, auto layout, and booleans. From a blank canvas to a responsive card component." },
    { n:"02", t:"You think in systems", b:"Token, component, pattern, template. Styles for type and effects, variables for everything that should theme and scale." },
    { n:"03", t:"Change once, update everywhere", b:"Variables and published libraries mean one decision flows across every screen. That is what separates design that scales from one-off art." },
  ],
  next:"Day 4 · Prototyping + Microinteractions + Multidevice · We make all of this interactive and testable." },

];
