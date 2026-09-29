import { LearningModule } from '../../types/learn';

export const PROCEDURES_CONTENT: LearningModule[] = [

    {
        id: 'procedure-suturing-techniques',
        title: 'Suturing Techniques for Beginners',
        category: 'Procedures',
        subCategory: 'General',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Suturing Techniques for Beginners</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      </style>
      </head>
      <body class="bg-white text-slate-800 max-w-3xl mx-auto px-6 py-12 leading-relaxed">
      
      
      <!-- Hero -->
      <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Procedures</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Suturing Techniques for Beginners</h1>
        <p class="text-sm text-indigo-200">A single technique cannot handle every wound. Choosing correctly between the interrupted, mattress, continuous, and subcuticular approaches - and pairing that choice with the right suture material - is as much a part of the skill as the hand movements themselves. This guide covers suture material selection, the major technique types, and where each is genuinely the right tool, with reference videos for each.</p>
      </div>
      </div>
      
      <!-- 1. Suture materials -->
      
      <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
      <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
        <li>
          <a href="#suture-materials---what-youre-actually-choosing-between" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span>
            <span>Suture Materials - What You're Actually Choosing Between</span>
          </a>
        </li>
        <li>
          <a href="#simple-interrupted-suture" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span>
            <span>Simple Interrupted Suture</span>
          </a>
        </li>
        <li>
          <a href="#vertical-mattress-suture" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span>
            <span>Vertical Mattress Suture</span>
          </a>
        </li>
        <li>
          <a href="#horizontal-mattress-suture" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span>
            <span>Horizontal Mattress Suture</span>
          </a>
        </li>
        <li>
          <a href="#simple-continuous-running-suture" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span>
            <span>Simple Continuous (Running) Suture</span>
          </a>
        </li>
        <li>
          <a href="#subcuticular-continuous-intradermal-suture" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span>
            <span>Subcuticular (Continuous Intradermal) Suture</span>
          </a>
        </li>
        <li>
          <a href="#deep-dermal-buried-suture" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span>
            <span>Deep Dermal (Buried) Suture</span>
          </a>
        </li>
        <li>
          <a href="#figure-of-eight-suture" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span>
            <span>Figure-of-Eight Suture</span>
          </a>
        </li>
        <li>
          <a href="#choosing-a-technique---summary-decision-table" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span>
            <span>Choosing a Technique - Summary Decision Table</span>
          </a>
        </li>
        <li>
          <a href="#general-reference-videos-covering-multiple-techniques" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span>
            <span>General Reference Videos Covering Multiple Techniques</span>
          </a>
        </li>
      </ul>
      </nav>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suture-materials---what-youre-actually-choosing-between" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Suture Materials - What You're Actually Choosing Between
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Every suture is classified along three independent axes: absorbable vs non-absorbable, natural vs synthetic, and monofilament vs multifilament (braided). Understanding these axes, rather than memorising brand names, lets you reason about any suture you're handed.</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Absorbable vs Non-Absorbable</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Property</th>
                <th class="py-2 pr-3 font-medium">Absorbable</th>
                <th class="py-2 font-medium">Non-absorbable</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Fate in tissue</td><td class="py-2 pr-3">Broken down by hydrolysis or enzymatic action over weeks to months</td><td class="py-2">Remains in tissue indefinitely, or removed manually</td></tr>
              <tr><td class="py-2 pr-3">Typical use</td><td class="py-2 pr-3">Deep/buried layers (dermis, muscle, fascia), mucosa, paediatric skin closure where removal would be distressing</td><td class="py-2">Skin closure requiring later removal, high-tension areas, situations needing prolonged tensile strength</td></tr>
              <tr><td class="py-2 pr-3">Common examples</td><td class="py-2 pr-3">Polyglactin 910 (Vicryl), poliglecaprone 25 (Monocryl), polydioxanone (PDS), catgut</td><td class="py-2">Nylon (Ethilon), polypropylene (Prolene), silk, polyester</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Monofilament vs Multifilament (Braided)</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Property</th>
                <th class="py-2 pr-3 font-medium">Monofilament</th>
                <th class="py-2 font-medium">Multifilament (braided)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Handling</td><td class="py-2 pr-3">Stiffer, more "memory" (tends to spring back), but passes through tissue smoothly with less drag</td><td class="py-2">Softer, more pliable, easier to knot securely, but higher surface area</td></tr>
              <tr><td class="py-2 pr-3">Infection risk</td><td class="py-2 pr-3">Lower - smooth surface resists bacterial colonisation and doesn't wick fluid along its length</td><td class="py-2">Higher - braided structure can harbour bacteria and wick fluid (capillary action) into the wound, a real concern in contaminated wounds</td></tr>
              <tr><td class="py-2 pr-3">Examples</td><td class="py-2 pr-3">Nylon, polypropylene, PDS, Monocryl</td><td class="py-2">Silk, Vicryl, polyester</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Practical rule:</span> avoid multifilament sutures in contaminated or heavily colonised wounds given the infection risk above; monofilament is the safer default in that scenario even where a multifilament option is otherwise convenient.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Natural vs Synthetic</strong>
        <p class="text-sm">Natural materials (silk, catgut, cotton) provoke a greater tissue inflammatory reaction than their synthetic equivalents and are gradually being phased out in most settings in favour of synthetic alternatives with more predictable absorption profiles and lower reactivity - silk remains in some use for its handling characteristics and low cost, but is not the first choice by tissue-reactivity standards alone.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Suture Size (USP Scale)</strong>
        <p class="text-sm">Sizing runs in the opposite direction to what the numbers suggest - a higher number of zeroes means a finer (thinner) suture.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Size</th>
                <th class="py-2 font-medium">Typical use</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">2-0 to 3-0</td><td class="py-2">High-tension areas: abdomen, fascia, some orthopaedic closures</td></tr>
              <tr><td class="py-2 pr-3">3-0 to 4-0</td><td class="py-2">Trunk, extremities, scalp</td></tr>
              <tr><td class="py-2 pr-3">4-0 to 5-0</td><td class="py-2">Most general skin closure</td></tr>
              <tr><td class="py-2 pr-3">5-0 to 6-0</td><td class="py-2">Face and other cosmetically sensitive areas, needing the finest suture that still holds</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Suture Removal Timing by Body Site (Non-Absorbable Skin Sutures)</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Site</th>
                <th class="py-2 font-medium">Typical removal timing</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Face</td><td class="py-2">3-5 days</td></tr>
              <tr><td class="py-2 pr-3">Scalp, arms</td><td class="py-2">7-10 days</td></tr>
              <tr><td class="py-2 pr-3">Trunk, back</td><td class="py-2">10-14 days</td></tr>
              <tr><td class="py-2 pr-3">Legs, and over joints/high-tension areas</td><td class="py-2">10-14 days, occasionally up to 21 days given the strain of movement and lower-extremity blood flow</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">A deep dermal (buried) layer that adequately relieves tension on the skin surface (Section 7) reduces how long skin sutures need to stay in even at a high-tension site - timing is ultimately a judgement on the individual wound, not a fixed number, and the closing clinician's follow-up plan governs.</p>
      </div>
      </div>
      
      <!-- 2. Simple interrupted -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="simple-interrupted-suture" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Simple Interrupted Suture
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">What it is:</span> each stitch is placed and tied individually, as a separate, self-contained knot.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Where it's appropriate:</span> the default, workhorse technique for the majority of straightforward lacerations and surgical incisions. Its main advantage is that each suture is independent - if one fails or the wound shows early signs of infection at one point, that single suture can be removed without compromising the rest of the closure. This makes it a safe first technique to learn and a safe default when in doubt about which technique to use.</p>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">Technique summary:</p>
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Enter the skin perpendicular to the surface, with the needle bite width roughly equal to the wound depth, to promote edge eversion rather than inversion.</li>
        <li>Pass through both wound edges symmetrically.</li>
        <li>Tie a surgeon's knot (two throws in one direction, then alternating single throws, typically 3-4 throws total).</li>
        <li>Space sutures evenly along the wound, with inter-suture spacing roughly equal to the bite width.</li>
      </ol>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Reference video - Simple Interrupted Suture (Geeky Medics OSCE guide):</span><br>
        <a href="https://www.youtube.com/watch?v=z8oWv-nVO6g" class="text-indigo-600 dark:text-indigo-400 underline">youtube.com/watch?v=z8oWv-nVO6g</a></p>
      </div>
      </div>
      
      <!-- 3. Vertical mattress -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="vertical-mattress-suture" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Vertical Mattress Suture
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">What it is:</span> a technique combining a deep, wide bite with a second, more superficial, narrower bite on the return pass, in the same vertical line - effectively closing the deep and superficial layers in one suture.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Where it's appropriate:</span> wounds under tension, or where additional eversion of the wound edges is specifically needed (mattress sutures excel at eversion, correcting a tendency for edges to invert). Useful where a single-layer closure needs to do the work of both a deep and superficial suture, e.g. where formal layered closure with buried sutures isn't practical.</p>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Trade-off to know:</span> produces more visible cross-hatched scarring than a simple interrupted suture if left in too long, so timely removal matters more here than with simple interrupted sutures.</p>
      </div>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Reference video - Vertical Mattress Suture (Geeky Medics OSCE guide):</span><br>
        <a href="https://www.youtube.com/watch?v=-Sa7VMcMCJA" class="text-indigo-600 dark:text-indigo-400 underline">youtube.com/watch?v=-Sa7VMcMCJA</a></p>
      </div>
      </div>
      
      <!-- 4. Horizontal mattress -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="horizontal-mattress-suture" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Horizontal Mattress Suture
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">What it is:</span> two bites placed side-by-side, parallel to the wound edge, rather than stacked vertically - distributing tension across a wider area of tissue on either side of the wound.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Where it's appropriate:</span> wounds under significant tension along a linear axis, and particularly useful in friable or fragile tissue (elderly, thin skin) where a simple interrupted suture risks cutting through the tissue before it heals. Also useful for securing corners of a flap or a stellate (star-shaped) laceration.</p>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Trade-off to know:</span> mismatched bite depth or width on the two sides can misalign the wound edges, and because it spreads more suture material across the wound, it carries a slightly higher infection risk if the sutures aren't removed promptly.</p>
      </div>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Reference video - Horizontal Mattress Suture (Geeky Medics OSCE guide):</span><br>
        <a href="https://www.youtube.com/watch?v=6qF4mxB7KzM" class="text-indigo-600 dark:text-indigo-400 underline">youtube.com/watch?v=6qF4mxB7KzM</a></p>
      </div>
      </div>
      
      <!-- 5. Simple continuous -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="simple-continuous-running-suture" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Simple Continuous (Running) Suture
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">What it is:</span> a single length of suture run along the wound in a continuous spiral, tied off only at the beginning and end, rather than knotted at every stitch.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Where it's appropriate:</span> long, straightforward, low-tension wounds where speed matters - this technique closes a wound considerably faster than placing individual interrupted sutures, and distributes tension evenly along its length. Common in theatre for longer incisions.</p>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Trade-off to know:</span> if the suture breaks or one point of the wound becomes infected, the entire line can loosen or need to be taken down, unlike the independent-suture safety of the interrupted technique - this is the central trade-off between speed and fault-tolerance that should guide the choice between continuous and interrupted technique.</p>
      </div>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Reference:</span> search "simple continuous suture technique" alongside the Geeky Medics suturing guide collection (Section 10) for a demonstrated comparison against interrupted technique.</p>
      </div>
      </div>
      
      <!-- 6. Subcuticular -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="subcuticular-continuous-intradermal-suture" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Subcuticular (Continuous Intradermal) Suture
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">What it is:</span> a continuous suture placed entirely within the dermis, just beneath the epidermis, with no suture material crossing the skin surface - the stitch is buried and invisible externally, usually with only the two ends exiting the skin (or fully buried with absorbable material and no visible ends at all).</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Where it's appropriate:</span> cosmetically sensitive areas where minimising visible suture marks and cross-hatch scarring matters - facial and other exposed-area closures where appearance is a priority, and any closure where a patient particularly wants to minimise scarring. Typically follows a deep dermal layer as the final, superficial-approximating step in a layered closure, rather than standing alone on a deep wound.</p>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Trade-off to know:</span> technically more demanding than interrupted or mattress techniques, and provides less mechanical strength across the wound than a well-placed interrupted or mattress suture - appropriate for a well-approximated, low-tension wound rather than one needing significant tension-bearing support from the skin sutures themselves (tension should already be relieved by a deep dermal layer beneath it).</p>
      </div>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Reference video - Subcuticular Suture (Geeky Medics OSCE guide):</span><br>
        <a href="https://geekymedics.com/subcuticular-suture-osce-guide/" class="text-indigo-600 dark:text-indigo-400 underline">geekymedics.com/subcuticular-suture-osce-guide</a></p>
      </div>
      </div>
      
      <!-- 7. Deep dermal -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="deep-dermal-buried-suture" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Deep Dermal (Buried) Suture
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">What it is:</span> an interrupted suture placed within the dermis or subcutaneous tissue, tied with the knot buried beneath the surface, using absorbable material - never intended to be seen or removed.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Where it's appropriate:</span> deeper wounds requiring layered closure - this is the layer that actually relieves tension on the skin surface and closes dead space, allowing the more cosmetically-focused subcuticular or simple interrupted skin layer above it to do less mechanical work. Any wound deep enough to have a distinguishable dermal or subcutaneous layer benefits from this step rather than relying on skin sutures alone to bear the full tension of the wound.</p>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Reference video - Deep Dermal Suture (Geeky Medics OSCE guide):</span><br>
        <a href="https://geekymedics.com/deep-dermal-suture-osce-guide/" class="text-indigo-600 dark:text-indigo-400 underline">geekymedics.com/deep-dermal-suture-osce-guide</a></p>
      </div>
      </div>
      
      <!-- 8. Figure of eight -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="figure-of-eight-suture" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Figure-of-Eight Suture
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">What it is:</span> a suture crossing itself in a figure-eight pattern across the wound, providing a stronger single-point closure than a simple interrupted stitch.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Where it's appropriate:</span> actively bleeding points needing a haemostatic stitch, and situations needing extra strength at a single point - for example, securing a chest tube or drain site, or a bleeding vessel that needs to be controlled with a suture rather than cautery.</p>
      </div>
      
      <!-- 9. Decision table -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="choosing-a-technique---summary-decision-table" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Choosing a Technique - Summary Decision Table
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Clinical situation</th>
              <th class="py-2 font-medium">Preferred technique</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Straightforward, low-tension laceration</td><td class="py-2">Simple interrupted</td></tr>
            <tr><td class="py-2 pr-3">Wound under tension, needing extra eversion</td><td class="py-2">Vertical mattress</td></tr>
            <tr><td class="py-2 pr-3">Fragile/thin skin, or a wound needing tension distributed over a wider area</td><td class="py-2">Horizontal mattress</td></tr>
            <tr><td class="py-2 pr-3">Long, low-tension incision, speed a priority</td><td class="py-2">Simple continuous</td></tr>
            <tr><td class="py-2 pr-3">Cosmetically sensitive area (face), after deep layer already placed</td><td class="py-2">Subcuticular</td></tr>
            <tr><td class="py-2 pr-3">Any wound with a distinct deep dermal/subcutaneous layer</td><td class="py-2">Deep dermal (buried), before the skin layer</td></tr>
            <tr><td class="py-2 pr-3">Actively bleeding point needing a haemostatic stitch</td><td class="py-2">Figure-of-eight</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm mt-2">Most real wounds needing more than a trivial closure are not treated with a single technique in isolation - a typical layered closure combines a deep dermal (buried) layer to relieve tension, followed by either a subcuticular closure (cosmetic priority) or simple interrupted/mattress sutures (straightforward or higher-tension wounds) at the skin surface.</p>
      </div>
      
      <!-- 10. General videos -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="general-reference-videos-covering-multiple-techniques" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      General Reference Videos Covering Multiple Techniques
      </h2>
      
      <div class="space-y-3 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Geeky Medics Suturing Guides collection</span> (interrupted, continuous, mattress, subcuticular, and deep dermal technique, each with step-by-step images alongside video):<br>
        <a href="https://geekymedics.com/category/surgery/suturing/" class="text-indigo-600 dark:text-indigo-400 underline">geekymedics.com/category/surgery/suturing</a></p>
      </div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">NEJM Videos in Clinical Medicine - Basic Laceration Repair</span> (assessment through closure, general technique overview):<br>
        <a href="https://www.nejm.org/doi/full/10.1056/NEJMvcm064238" class="text-indigo-600 dark:text-indigo-400 underline">nejm.org/doi/full/10.1056/NEJMvcm064238</a></p>
      </div>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Reach for simple interrupted as the safe default when in doubt - its independence between stitches is what makes it forgiving to learn on.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Avoid multifilament (braided) suture in a contaminated wound - the braided structure itself raises infection risk regardless of technique.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A deep dermal layer is what actually relieves tension in a layered closure - the skin layer on top of it should be doing cosmetic work, not load-bearing work.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Remove mattress sutures on time - they cross-hatch scar more readily than simple interrupted sutures if left in past the appropriate window.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Removal timing is a judgement on the individual wound's tension and blood supply, not a fixed number to apply uniformly - use the site-based ranges as a starting point, not a rule.</span></li>
      </ul>
      </div>
      
      <!-- References -->
      <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
      <summary class="flex items-center justify-between cursor-pointer px-4 py-2 select-none">
        <h3 class="font-brand text-sm font-semibold text-stone-600 dark:text-stone-300">References</h3>
        <svg class="w-4 h-4 text-stone-400 dark:text-stone-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-stone-200 dark:border-stone-700">
        <ul class="space-y-1 text-[10px] leading-snug text-stone-500 dark:text-stone-400">
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Geeky Medics - Suturing Guides Collection.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>New England Journal of Medicine - Videos in Clinical Medicine: Basic Laceration Repair.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Trott AT - Wounds and Lacerations: Emergency Care and Closure.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'procedure-normal-vaginal-delivery',
        title: 'Conducting a Normal Vaginal Delivery',
        category: 'Procedures',
        subCategory: 'Obstetrics',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Conducting a Normal Vaginal Delivery</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      </style>
      </head>
      <body class="bg-white text-slate-800 max-w-3xl mx-auto px-6 py-12 leading-relaxed">
      
      
      <!-- Hero -->
      <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Procedures</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Conducting a Normal Vaginal Delivery</h1>
        <p class="text-sm text-indigo-200">Normal vaginal delivery is the single procedure every doctor and midwife in Nigeria performs most often, and yet it remains one of the areas where small technical lapses translate directly into the leading causes of maternal death in this country - postpartum haemorrhage above all. This guide walks through the second, third, and fourth stages of labour as they are actually conducted at the bedside, with the specific steps that prevent perineal trauma and postpartum haemorrhage, and video references at each stage.</p>
      </div>
      </div>
      
      <!-- 1. Confirming second stage -->
      
      <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
      <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
        <li>
          <a href="#confirming-the-second-stage-and-preparing" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span>
            <span>Confirming the Second Stage and Preparing</span>
          </a>
        </li>
        <li>
          <a href="#protecting-the-perineum-during-delivery-of-the-head" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span>
            <span>Protecting the Perineum During Delivery of the Head</span>
          </a>
        </li>
        <li>
          <a href="#episiotomy---a-restrictive-not-routine-decision" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span>
            <span>Episiotomy - A Restrictive, Not Routine, Decision</span>
          </a>
        </li>
        <li>
          <a href="#immediate-care-of-the-baby" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span>
            <span>Immediate Care of the Baby</span>
          </a>
        </li>
        <li>
          <a href="#active-management-of-the-third-stage" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span>
            <span>Active Management of the Third Stage</span>
          </a>
        </li>
        <li>
          <a href="#the-fourth-stage---the-first-two-hours-after-delivery" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span>
            <span>The Fourth Stage - The First Two Hours After Delivery</span>
          </a>
        </li>
        <li>
          <a href="#recognising-when-this-is-no-longer-a-normal-delivery" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span>
            <span>Recognising When This Is No Longer a Normal Delivery</span>
          </a>
        </li>
        <li>
          <a href="#general-reference-videos-and-resources-covering-this-guide" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span>
            <span>General Reference Videos and Resources Covering This Guide</span>
          </a>
        </li>
      </ul>
      </nav>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="confirming-the-second-stage-and-preparing" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Confirming the Second Stage and Preparing
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">The second stage begins with full cervical dilatation and ends with delivery of the baby. Before the mother begins active pushing, confirm full dilatation on vaginal examination, assess the fetal head station and position, and confirm reassuring fetal heart rate. Have delivery equipment ready and checked: a clean delivery set, cord clamps or ties, suction and basic neonatal resuscitation equipment within reach, oxytocin drawn up and ready, and a clock or watch visible for timing.</p>
      <p class="text-sm">Position the mother in whichever position she finds most comfortable and effective for pushing - semi-recumbent, lateral, or supported squatting are all reasonable, and forcing a single standard position purely for the convenience of the attendant is not good practice. Encourage pushing with contractions once the urge to push is present and the head is visibly descending, rather than starting directed pushing the moment full dilatation is confirmed if the head has not yet descended - allowing passive descent first, where the clinical picture permits, reduces maternal exhaustion and the duration of active pushing.</p>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Overview of the second stage and delivery mechanism (University of Toronto):</span><br>
        <a href="https://pie.med.utoronto.ca/TVASurg/project/vaginal-birth/" class="text-indigo-600 dark:text-indigo-400 underline">pie.med.utoronto.ca/TVASurg/project/vaginal-birth</a></p>
      </div>
      </div>
      
      <!-- 2. Protecting perineum -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="protecting-the-perineum-during-delivery-of-the-head" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Protecting the Perineum During Delivery of the Head
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">This is the single most technique-dependent part of the whole delivery, and the part most responsible for whether the mother ends up with an intact perineum, a minor tear, or a significant laceration.</p>
      <p class="text-sm">As the head crowns, control the speed of delivery rather than allowing it to deliver suddenly. Two internationally described techniques achieve this, both built around the same underlying principle of steady counter-pressure: in the Finnish approach, one hand supports the perineum with a folded cloth while the other hand applies gentle, controlled pressure to the fetal head to guide gradual extension; in the Viennese approach, both hands work across the perineum without a specific counter-pressure hand on the head, relying on broad perineal support alone. In practice, most experienced attendants adapt elements of both: firm midline support across the entire perineum with the dominant hand, and a guiding rather than restraining touch on the advancing head, asking the mother to pant or push gently rather than bear down forcefully at the exact moment the head is crowning.</p>
      <p class="text-sm">Warm compresses applied to the perineum in the period just before crowning, and gentle perineal massage during the late first stage or early second stage, have both been shown to reduce the rate of significant perineal trauma, and are simple, low-cost measures worth incorporating routinely rather than reserving for a "difficult" delivery.</p>
      <p class="text-sm">Once the head is delivered, check for a nuchal cord by sweeping a finger around the neck. A loose nuchal cord can usually be slipped over the head; a tight cord that cannot be reduced this way may need to be clamped and cut before the shoulders deliver, though this should not be done reflexively - a nuchal cord is common and usually well tolerated, and unnecessary early clamping removes placental blood volume the baby would otherwise receive.</p>
      <p class="text-sm">Deliver the shoulders with gentle downward traction for the anterior shoulder, followed by upward traction for the posterior shoulder, applying only as much force as is needed to follow the natural mechanism of delivery - excessive traction, particularly lateral traction on the head and neck, risks brachial plexus injury and should never be used to force a shoulder that is not advancing (Section 7).</p>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Perineal protection technique demonstration (Finnish and Viennese methods):</span><br>
        <a href="https://pie.med.utoronto.ca/TVASurg/project/vaginal-birth/" class="text-indigo-600 dark:text-indigo-400 underline">pie.med.utoronto.ca/TVASurg/project/vaginal-birth</a></p>
      </div>
      </div>
      
      <!-- 3. Episiotomy -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="episiotomy---a-restrictive-not-routine-decision" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Episiotomy - A Restrictive, Not Routine, Decision
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Episiotomy is not performed routinely in a normal delivery. It is reserved for specific situations: an anticipated severe tear threatening the anal sphincter based on how the perineum is stretching, instrumental delivery, shoulder dystocia requiring more room, or a need to expedite delivery for fetal distress. A full discussion of technique, classification of perineal trauma, repair, and post-repair counselling is covered in the companion episiotomy and episiorrhaphy guide in this series - the point worth restating here is that routine episiotomy for every primigravida, or for a simply slow second stage without one of the specific indications above, is not supported by current evidence and should not be the default.</p>
      </div>
      
      <!-- 4. Immediate care of baby -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="immediate-care-of-the-baby" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Immediate Care of the Baby
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">As soon as the baby is delivered, place them directly on the mother's abdomen or chest in skin-to-skin contact and dry them promptly, replacing the wet cloth with a dry one to prevent heat loss - this alone is one of the most effective and lowest-cost interventions for preventing neonatal hypothermia. Assess breathing, tone, and colour in the first seconds; a vigorous, crying baby needs no further intervention beyond drying, warmth, and this initial assessment. A baby who is not breathing adequately needs immediate stimulation and, if there is no response, standard neonatal resuscitation - covered in detail in a separate guide in this series and worth having the steps rehearsed before every delivery rather than reviewed for the first time during one.</p>
      <p class="text-sm">Delay cord clamping for at least one to three minutes in a vigorous baby who does not require resuscitation, rather than clamping immediately. This is now the standard recommendation from WHO, FIGO, and other major bodies - WHO's floor is "not earlier than 1 minute," with the physiological rationale being that cord traction for placental delivery normally takes around 3 minutes in any case, and this window aligns naturally with allowing full placental transfusion. This is a meaningful and now well-established change from older practice that clamped immediately as a matter of routine. Clamp the cord at two points and cut between them once the decision to clamp has been made.</p>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans space-y-2">
        <p>🔗 <span class="font-medium">Helping Babies Breathe at Birth (Global Health Media Project - live footage, basic steps of newborn resuscitation aligned with WHO/AAP Helping Babies Breathe guidelines):</span><br>
        <a href="https://globalhealthmedia.org/video/helping-babies-breathe-at-birth/" class="text-indigo-600 dark:text-indigo-400 underline">globalhealthmedia.org/video/helping-babies-breathe-at-birth</a></p>
        <p>🔗 <span class="font-medium">Helping Babies Breathe with a Training Doll (Global Health Media Project, step-by-step skills demonstration):</span><br>
        <a href="https://www.youtube.com/watch?v=r7SXyNQ1OBM" class="text-indigo-600 dark:text-indigo-400 underline">youtube.com/watch?v=r7SXyNQ1OBM</a></p>
      </div>
      </div>
      
      <!-- 5. Third stage -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="active-management-of-the-third-stage" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Active Management of the Third Stage
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">The third stage runs from delivery of the baby to delivery of the placenta, and this is where most preventable maternal deaths in this specific window occur, through postpartum haemorrhage from uterine atony. Active management of the third stage is the single intervention shown most clearly to reduce this risk, and should be offered as routine practice to every woman delivering vaginally, not reserved for those already showing signs of heavy bleeding.</p>
      <p class="text-sm">Active management has three components, given in sequence.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">First</span>, give a uterotonic - oxytocin 10 IU intramuscularly is the standard choice recommended by WHO, FIGO, and the International Confederation of Midwives, given within a minute of the baby's delivery, after checking there is no undiagnosed second twin. Oxytocin should be given intramuscularly rather than as an intravenous bolus, since a rapid IV bolus carries a risk of significant hypotension and arrhythmia; if IV administration is needed (as is more common at caesarean section) it should be given as a slow infusion rather than a push.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Second</span>, once a contraction is felt and there are signs of placental separation - a gush of blood, lengthening of the cord, or the uterus rising and becoming globular on abdominal palpation - apply controlled cord traction: one hand guards the uterus by applying counter-pressure just above the pubic symphysis in the opposite direction to the traction, while the other hand applies steady, gentle traction on the cord, only during a contraction, stopping immediately if there is resistance rather than pulling harder.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Third</span>, once the placenta is delivered, massage the uterine fundus until it is firm, and repeat this massage every fifteen minutes for the first two hours after delivery - this is the window in which delayed postpartum haemorrhage from uterine atony most often develops, and this is worth teaching the mother or a relative to do as well, not only the attending clinician.</p>
      <p class="text-sm">Inspect the placenta and membranes for completeness once delivered. Retained products increase the risk of both immediate haemorrhage and delayed infection, and a placenta that appears incomplete warrants uterine exploration rather than being assumed to have separated fully.</p>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans space-y-2">
        <p>🔗 <span class="font-medium">Active management of the third stage, full technique:</span><br>
        <a href="https://zerotofinals.com/obgyn/labouranddelivery/thirdstage/" class="text-indigo-600 dark:text-indigo-400 underline">zerotofinals.com/obgyn/labouranddelivery/thirdstage</a></p>
        <p>🔗 <span class="font-medium">WHO/training module on active management of the third stage, written walkthrough with figures for each step:</span><br>
        <a href="https://www.open.edu/openlearncreate/mod/oucontent/view.php?id=274&printable=1" class="text-indigo-600 dark:text-indigo-400 underline">open.edu/openlearncreate (module 274)</a></p>
      </div>
      </div>
      
      <!-- 6. Fourth stage -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="the-fourth-stage---the-first-two-hours-after-delivery" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      The Fourth Stage - The First Two Hours After Delivery
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">The fourth stage, the first one to two hours after delivery of the placenta, is a period of genuine ongoing risk that is easy to under-monitor once the visible drama of delivery is over and attention shifts to the baby. Check the mother's pulse, blood pressure, uterine tone, and vaginal blood loss every fifteen minutes for the first hour, then every thirty minutes for the second hour. A uterus that is not staying firm and contracted after massage, or bleeding that continues despite an apparently well-contracted uterus, should prompt immediate assessment for the specific cause of postpartum haemorrhage - atony, retained tissue, trauma, or a clotting problem - rather than repeated reassurance and rechecking without escalation.</p>
      <p class="text-sm">Inspect the perineum, vagina, and cervix for any tears requiring repair once the immediate excitement of the delivery has settled, since a bleeding laceration can be mistaken for atonic bleeding if it is not specifically looked for. Encourage early breastfeeding within the first hour where the baby is stable - this supports maternal-infant bonding and also assists uterine contraction through the physiological oxytocin release that suckling stimulates.</p>
      </div>
      
      <!-- 7. Recognising abnormal -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="recognising-when-this-is-no-longer-a-normal-delivery" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Recognising When This Is No Longer a Normal Delivery
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">A delivery being conducted as "normal" can change status at any point, and recognising the shift promptly matters more than any single technique described above.</p>
      </div>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-3">
      <ul class="space-y-3 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Shoulder dystocia</span> - the anterior shoulder failing to deliver with gentle traction after the head is delivered - requires an immediate, structured response (McRoberts positioning, suprapubic pressure, and further manoeuvres as needed) rather than increasing traction force on the head, which risks brachial plexus injury.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>A second stage that is prolonged well beyond expected limits for the mother's parity, a non-reassuring fetal heart rate pattern, or a delivery requiring more assistance than gentle guidance of the natural mechanism should prompt escalation to instrumental delivery or caesarean section as appropriate, rather than persisting with a vaginal delivery attempt indefinitely.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Postpartum haemorrhage, once recognised, is a structured emergency with its own management sequence (uterotonics, bimanual compression, examination for the cause, and escalation) - covered as its own topic in this series given how much detail the emergency management genuinely requires.</span></li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans space-y-2">
        <p>🔗 <span class="font-medium">Shoulder Dystocia - McRoberts Manoeuvre Animation (Cal Shipley, M.D.):</span><br>
        <a href="https://www.youtube.com/watch?v=LvzyPlo8XEM" class="text-indigo-600 dark:text-indigo-400 underline">youtube.com/watch?v=LvzyPlo8XEM</a></p>
        <p>📖 <span class="font-medium">Shoulder Dystocia - written overview with figures, risk factors, and manoeuvre sequence (TeachMeObGyn):</span><br>
        <a href="https://teachmeobgyn.com/labour/emergencies/shoulder-dystocia/" class="text-indigo-600 dark:text-indigo-400 underline">teachmeobgyn.com/labour/emergencies/shoulder-dystocia</a></p>
        <p>📖 <span class="font-medium">Shoulder Dystocia, Green-top Guideline No. 42 (Royal College of Obstetricians and Gynaecologists) - full guideline:</span><br>
        <a href="https://www.rcog.org.uk/media/ewgpnmio/gtg_42.pdf" class="text-indigo-600 dark:text-indigo-400 underline">rcog.org.uk/media/ewgpnmio/gtg_42.pdf</a></p>
      </div>
      </div>
      
      <!-- 8. General multimedia resources -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="general-reference-videos-and-resources-covering-this-guide" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      General Reference Videos and Resources Covering This Guide
      </h2>
      
      <div class="space-y-3 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Second stage, delivery mechanism, and perineal protection technique (University of Toronto):</span><br>
        <a href="https://pie.med.utoronto.ca/TVASurg/project/vaginal-birth/" class="text-indigo-600 dark:text-indigo-400 underline">pie.med.utoronto.ca/TVASurg/project/vaginal-birth</a></p>
      </div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Active management of the third stage of labour (Zero to Finals):</span><br>
        <a href="https://zerotofinals.com/obgyn/labouranddelivery/thirdstage/" class="text-indigo-600 dark:text-indigo-400 underline">zerotofinals.com/obgyn/labouranddelivery/thirdstage</a></p>
      </div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>📖 <span class="font-medium">Active management of the third stage, step-by-step written module with figures (OpenLearn):</span><br>
        <a href="https://www.open.edu/openlearncreate/mod/oucontent/view.php?id=274&printable=1" class="text-indigo-600 dark:text-indigo-400 underline">open.edu/openlearncreate (module 274)</a></p>
      </div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Helping Babies Breathe at Birth - live-footage newborn resuscitation (Global Health Media Project):</span><br>
        <a href="https://globalhealthmedia.org/video/helping-babies-breathe-at-birth/" class="text-indigo-600 dark:text-indigo-400 underline">globalhealthmedia.org/video/helping-babies-breathe-at-birth</a></p>
      </div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>🔗 <span class="font-medium">Shoulder Dystocia - McRoberts Manoeuvre Animation (Cal Shipley, M.D.):</span><br>
        <a href="https://www.youtube.com/watch?v=LvzyPlo8XEM" class="text-indigo-600 dark:text-indigo-400 underline">youtube.com/watch?v=LvzyPlo8XEM</a></p>
      </div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        <p>📖 <span class="font-medium">Shoulder Dystocia, Green-top Guideline No. 42 (RCOG) - full guideline for reference:</span><br>
        <a href="https://www.rcog.org.uk/media/ewgpnmio/gtg_42.pdf" class="text-indigo-600 dark:text-indigo-400 underline">rcog.org.uk/media/ewgpnmio/gtg_42.pdf</a></p>
      </div>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Active management of the third stage - oxytocin, controlled cord traction, fundal massage - is the single most effective intervention against the leading cause of maternal death in this setting, and belongs in every vaginal delivery, not just ones already bleeding.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Give oxytocin IM, not as an IV bolus - the bolus route carries a real risk of hypotension and arrhythmia.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Delay cord clamping by at least 1-3 minutes in a vigorous baby - this is now standard practice, not an optional preference.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never use increasing traction force on the head to manage a shoulder that isn't advancing - that's exactly the reflex that causes brachial plexus injury.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Don't let fourth-stage monitoring lapse once attention shifts to the baby - this is exactly the window delayed postpartum haemorrhage from atony tends to appear.</span></li>
      </ul>
      </div>
      
      <!-- References -->
      <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
      <summary class="flex items-center justify-between cursor-pointer px-4 py-2 select-none">
        <h3 class="font-brand text-sm font-semibold text-stone-600 dark:text-stone-300">References</h3>
        <svg class="w-4 h-4 text-stone-400 dark:text-stone-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-stone-200 dark:border-stone-700">
        <ul class="space-y-1 text-[10px] leading-snug text-stone-500 dark:text-stone-400">
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Guideline: Delayed Umbilical Cord Clamping for Improved Maternal and Infant Health and Nutrition Outcomes, 2014.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>FIGO - Good Practice Recommendations on Delayed Umbilical Cord Clamping, 2021.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization / International Confederation of Midwives / FIGO - Joint Statement on Active Management of the Third Stage of Labour.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Shoulder Dystocia, Green-top Guideline No. 42.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Academy of Pediatrics / Global Health Media Project - Helping Babies Breathe Programme.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'procedure-episiotomy-episiorrhaphy',
        title: 'Episiotomy and Episiorrhaphy',
        category: 'Procedures',
        subCategory: 'Obstetrics',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Episiotomy and Episiorrhaphy (Repair)</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      </style>
      </head>
      <body class="bg-white text-slate-800 max-w-3xl mx-auto px-6 py-12 leading-relaxed">
      
      
      <!-- Hero -->
      <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      
      <!-- Top-right glow -->
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      
      <!-- Bottom-left glow -->
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      
      <!-- Content -->
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Procedures</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Episiotomy and Episiorrhaphy (Repair)</h1>
        <p class="text-sm text-indigo-200">Episiotomy is far less routinely performed today than in past decades, following evidence that restrictive use produces better outcomes than routine use - less severe trauma overall, less pain, and faster healing. It remains an important skill for specific indications, and the repair is one every doctor conducting deliveries needs to perform confidently and correctly, since a poorly repaired episiotomy or perineal tear carries meaningful long-term consequences.</p>
      </div>
      </div>
      
      <!-- 1. Indications -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Indications
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Episiotomy is not routine.</span> Current evidence and guidance support a restrictive approach - performed only when a specific indication is present, not as a default step in normal delivery.</p>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200">Recognised indications:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Impending severe perineal tear where the direction of tearing threatens the anal sphincter (a judgement call based on how the perineum is stretching and the trajectory of an impending tear).</li>
        <li>Instrumental delivery (vacuum or forceps), where additional room is needed.</li>
        <li>Shoulder dystocia, to gain additional space for delivery manoeuvres.</li>
        <li>Fetal distress where expediting delivery is required and the perineum is the limiting factor.</li>
        <li>Some cases of breech delivery.</li>
      </ul>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Not an indication on its own:</span> a large baby, primigravida status, or a slow second stage alone - none of these justify routine episiotomy without one of the specific indications above.</p>
      </div>
      
      <!-- 2. Types -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Types of Episiotomy
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Type</th>
              <th class="py-2 pr-3 font-medium">Description</th>
              <th class="py-2 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Mediolateral</td><td class="py-2 pr-3">Incision angled away from the midline (typically 45-60&deg; from vertical) toward the ischial tuberosity</td><td class="py-2">Preferred in most current practice - lower risk of extension into the anal sphincter compared with midline, though slightly more painful during healing and a technically less intuitive repair</td></tr>
            <tr><td class="py-2 pr-3">Midline</td><td class="py-2 pr-3">Incision directly along the midline toward the anus</td><td class="py-2">Easier to repair and less painful, but carries a higher risk of extension into the anal sphincter/rectum if the tear progresses beyond the incision - largely fallen out of favour for this reason</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 3. Classification -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Classification of Perineal Trauma
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Applies to both episiotomy extension and spontaneous tears. Correct classification determines the repair approach and the seniority of person who should perform it.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Degree</th>
              <th class="py-2 font-medium">Extent</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">First degree</td><td class="py-2">Injury to perineal skin and vaginal mucosa only, muscle not involved</td></tr>
            <tr><td class="py-2 pr-3">Second degree</td><td class="py-2">Injury to perineal muscles, but not the anal sphincter</td></tr>
            <tr><td class="py-2 pr-3">Third degree</td><td class="py-2">Injury involving the anal sphincter complex - subdivided into 3a (&lt;50% external sphincter thickness torn), 3b (&gt;50% external sphincter thickness torn), 3c (internal sphincter also torn)</td></tr>
            <tr><td class="py-2 pr-3">Fourth degree</td><td class="py-2">Injury involving the anal sphincter complex and the rectal mucosa</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <p class="text-sm text-rose-900 dark:text-rose-300"><span class="font-medium">Third- and fourth-degree tears (obstetric anal sphincter injuries, OASIS) require repair by an appropriately experienced clinician</span> - typically a senior obstetrician - in an operating theatre setting with adequate anaesthesia and lighting, not at the bedside. Recognising when a tear exceeds a straightforward second-degree repair, and escalating rather than proceeding, is one of the most important judgement calls in this whole topic.</p>
      </div>
      
      <!-- 4. Pre-procedure counselling -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Pre-Procedure Counselling (Before Episiotomy, if Indicated)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Where time and circumstances allow (i.e. not an immediate emergency such as shoulder dystocia), briefly explain to the patient before proceeding.</p>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic">"I need to make a small cut to create more space to help deliver your baby safely. I'll give you an injection to numb the area first, and once your baby is delivered, I'll close it with stitches that will dissolve on their own."</p>
      <p class="text-sm">Even in urgent scenarios where full explanation isn't possible beforehand, explain what was done and why immediately afterward, as part of routine debrief following delivery - this matters for the woman's understanding of her own body and recovery, and reduces later distress or confusion about why an incision was made.</p>
      </div>
      
      <!-- 5. Equipment -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Equipment
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Local anaesthetic (1% lidocaine) with syringe and needle.</li>
        <li>Episiotomy scissors (blunt-tipped).</li>
        <li>Needle holder, toothed forceps, suture scissors.</li>
        <li>Absorbable suture material - polyglactin (Vicryl) is standard; rapid-absorbing versions are associated with less need for later suture removal and comparable outcomes.</li>
        <li>Adequate lighting and positioning - this is frequently underrated and is one of the most common reasons for a technically poor repair.</li>
        <li>Sterile gauze, antiseptic solution.</li>
        <li>A means of adequate analgesia - regional anaesthesia (epidural/spinal) if already in place is often sufficient; otherwise local infiltration, ensuring adequate coverage before proceeding.</li>
      </ul>
      </div>
      
      <!-- 6. Performing the episiotomy -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Performing the Episiotomy
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-2 text-sm">
        <li>Time the incision to when the presenting part is visibly distending the perineum (typically a 3-4 cm diameter of fetal head visible), not earlier - an episiotomy performed too early increases blood loss without benefit.</li>
        <li>Infiltrate local anaesthetic along the planned incision line if regional anaesthesia is not already established, and allow adequate time for effect.</li>
        <li>Insert two fingers between the fetal presenting part and the perineum to protect the fetus, and make a single, deliberate cut with scissors along the chosen line (mediolateral preferred) during a contraction, when the tissue is maximally stretched and thinned - this produces a cleaner cut requiring less force.</li>
        <li>Proceed with delivery per standard technique.</li>
      </ol>
      </div>
      
      <!-- 7. Episiorrhaphy -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Episiorrhaphy (Repair) - Technique
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Repair should proceed as soon as possible after delivery of the placenta, once haemostasis of the uterus is confirmed and the patient is stable, using a systematic layered approach.</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 1: Assessment Before Repair</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Ensure adequate lighting and positioning.</li>
          <li>Identify the full extent of the injury before starting - follow the tear or incision to its apex; missing the true apex is a common cause of an incompletely repaired, bleeding wound.</li>
          <li>Classify the degree of injury (Section 3) and escalate if third- or fourth-degree.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 2: Analgesia</strong>
        <p class="text-sm">Confirm adequate anaesthesia before proceeding - top up local infiltration if the area is not fully numb, rather than proceeding through a painful repair.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 3: Layered Closure</strong>
        <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Layer 1 - Vaginal mucosa:</span> close with a continuous (running) suture starting just above the apex of the vaginal tear, to secure any bleeding point at the highest extent of the injury, and continue down to the level of the hymenal remnants.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Layer 2 - Perineal muscle:</span> close the deeper perineal muscle layer with interrupted or continuous sutures, approximating the muscle bulk to restore perineal body integrity - this layer matters significantly for long-term perineal support and should not be rushed or under-approximated.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Layer 3 - Perineal skin:</span> close with a continuous subcuticular suture where possible, which is associated with less pain than interrupted skin sutures in trial evidence; interrupted sutures remain acceptable where subcuticular technique is unfamiliar or the wound edges do not lend themselves to it.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 4: Final Checks</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Perform a rectal examination after completing the repair to confirm no suture material has inadvertently passed through the rectal mucosa, and to confirm sphincter integrity - this is a standard, necessary step, not an optional add-on.</li>
          <li>Confirm haemostasis along the full repair.</li>
          <li>Count and confirm all swabs/gauze before finishing.</li>
        </ul>
      </div>
      
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans space-y-2">
        <p>🔗 <span class="font-medium">Episiotomy and repair (layered technique demonstration):</span><br>
        <a href="https://www.youtube.com/watch?v=cp5sNRWUaVg" class="text-indigo-600 dark:text-indigo-400 underline">youtube.com/watch?v=cp5sNRWUaVg</a></p>
        <p>🔗 <span class="font-medium">Perineal laceration and episiotomy repair overview (MSD Manual Professional):</span><br>
        <a href="https://www.msdmanuals.com/professional/multimedia/video/how-to-repair-an-episiotomy" class="text-indigo-600 dark:text-indigo-400 underline">msdmanuals.com/professional - How to Repair an Episiotomy</a></p>
      </div>
      </div>
      
      <!-- 8. Complications -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Complications
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Complication</th>
              <th class="py-2 pr-3 font-medium">Recognition</th>
              <th class="py-2 font-medium">Management</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Haematoma</td><td class="py-2 pr-3">Increasing perineal/vaginal pain out of proportion to the repair, a tense swelling</td><td class="py-2">Evacuate and re-explore for a bleeding point if significant; small, stable haematomas may be managed conservatively with close monitoring</td></tr>
            <tr><td class="py-2 pr-3">Infection/wound breakdown</td><td class="py-2 pr-3">Increasing pain, discharge, fever, typically several days post-repair</td><td class="py-2">Wound swab where available, antibiotics, and consider partial resuturing only once infection is controlled - resuturing an actively infected wound is generally avoided</td></tr>
            <tr><td class="py-2 pr-3">Incomplete healing/dehiscence</td><td class="py-2 pr-3">Separation of the repair, often from infection, haematoma, or excessive early strain on the wound</td><td class="py-2">Assess extent; may require formal re-repair once any infection is controlled</td></tr>
            <tr><td class="py-2 pr-3">Missed rectal buttonhole/sphincter injury</td><td class="py-2 pr-3">Faecal incontinence, flatal incontinence, or rectovaginal fistula presenting later</td><td class="py-2">Underlines the importance of the post-repair rectal exam in Section 7; if identified late, requires specialist referral</td></tr>
            <tr><td class="py-2 pr-3">Long-term dyspareunia</td><td class="py-2 pr-3">Pain with intercourse, often related to over-tightening of the repair or scarring</td><td class="py-2">Counsel proactively before this becomes a source of distress (Section 9); pelvic floor physiotherapy and, in persistent cases, specialist referral</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 9. Post-procedure counselling -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Post-Procedure Patient Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">This is frequently under-delivered relative to its importance - a woman is often given minimal explanation of what to expect from a perineal repair during a period already dominated by newborn care.</p>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic">"You had a [cut/tear] during delivery, which I've repaired with dissolvable stitches. These will dissolve on their own over the next few weeks and don't need to be removed. Some discomfort and swelling in the area is normal for the next 1-2 weeks."</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Antibiotic Prophylaxis</strong>
        <p class="text-sm">Not routinely recommended for first- or second-degree tears, or for episiotomy alone. For third- and fourth-degree repairs (OASIS) specifically, RCOG guidance recommends broad-spectrum antibiotic prophylaxis at the time of repair, since this measurably reduces the risk of perineal wound infection and dehiscence - this is one of the clearer, evidence-backed differences in management between a straightforward second-degree repair and an OASIS repair, and worth applying explicitly rather than defaulting to the same antibiotic approach for every degree of tear.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Pain Management</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Regular paracetamol, with an NSAID added where not contraindicated, generally manages perineal pain adequately.</li>
          <li>Ice packs in the first 24-48 hours can reduce swelling and discomfort.</li>
          <li>Sitting on a soft cushion, and briefly avoiding prolonged sitting where possible, can improve comfort in the first days.</li>
        </ul>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Wound Hygiene</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Keep the area clean; warm water rinses after using the toilet, rather than wiping directly, reduce irritation.</li>
          <li>Change sanitary pads frequently.</li>
          <li>Loose, breathable underwear.</li>
        </ul>
      </div>
      </div>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <p class="text-sm text-rose-900 dark:text-rose-300 mb-3 italic">"Mild pain, some swelling, and light spotting are expected as the area heals. Please come back or seek help urgently if you notice any of the following."</p>
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Fever</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Increasing (rather than improving) pain after the first few days</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Foul-smelling or worsening vaginal discharge</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>The wound opening up or separating</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Difficulty controlling urine or stool, or a feeling of tissue bulging from the vagina</span></li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Bowel Management</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Encourage adequate fluid intake and dietary fibre to avoid constipation and straining, which places direct strain on a fresh repair.</li>
          <li>A stool softener/laxative is reasonable to offer proactively in the first week after any repair, and is specifically recommended following a third- or fourth-degree repair - RCOG guidance suggests a regular laxative (e.g. lactulose, roughly 10 mL twice daily) for around 10 days post-repair specifically for OASIS, to reduce the risk of wound dehiscence from straining.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Return to Activity and Intercourse</strong>
        <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic">"Most women feel comfortable resuming sexual intercourse around 4-6 weeks after delivery, once bleeding has stopped and the area feels comfortable - but there's no fixed timeline, and it's entirely reasonable to wait longer. If you experience persistent pain with intercourse beyond this period, please come back and discuss it rather than assuming it's something you have to live with."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Pelvic Floor Exercises</strong>
        <p class="text-sm">Introduce pelvic floor (Kegel) exercises once comfortable, generally from the first days postpartum - these support healing and long-term pelvic floor function, and are worth teaching explicitly rather than assuming the patient already knows the technique.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Follow-Up</strong>
        <p class="text-sm">A routine postnatal check (commonly around 6 weeks) should include specific assessment of perineal healing, not just a general wellbeing check. Following a third- or fourth-degree repair specifically, RCOG guidance recommends a dedicated follow-up appointment, usually at 6-12 weeks postpartum, ideally with a clinician who has a specific interest in perineal trauma - assessing continence and wound healing explicitly, given the higher stakes of these repairs, rather than folding this into a standard postnatal visit.</p>
      </div>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Episiotomy is restrictive, not routine - a specific indication should always be identifiable and documented.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Third- and fourth-degree tears need theatre-level repair by an experienced clinician - recognising when to escalate is the single most important judgement call in this topic.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Antibiotics and a scheduled laxative course are specifically indicated after OASIS repair, not after routine episiotomy or lower-degree tears.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never skip the post-repair rectal exam - it's the step that catches a missed buttonhole or sphincter injury before it becomes a delayed, harder-to-treat problem.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Give the woman explicit post-repair counselling, including warning signs and realistic timelines - this is routinely under-delivered relative to its importance.</span></li>
      </ul>
      </div>
      
      <!-- References -->
      <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
      <summary class="flex items-center justify-between cursor-pointer px-4 py-2 select-none">
        <h3 class="font-brand text-sm font-semibold text-stone-600 dark:text-stone-300">References</h3>
        <svg class="w-4 h-4 text-stone-400 dark:text-stone-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-stone-200 dark:border-stone-700">
        <ul class="space-y-1 text-[10px] leading-snug text-stone-500 dark:text-stone-400">
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Third- and Fourth-Degree Perineal Tears, Management (Green-top Guideline No. 29).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Intrapartum Care Guideline (perineal trauma and repair).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Recommendations on Episiotomy Policies.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>MSD Manual Professional - How to Repair an Episiotomy.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'procedure-wound-suturing',
        title: 'Wound Suturing',
        category: 'Procedures',
        subCategory: 'General',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Wound Suturing / Laceration Repair</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      </style>
      </head>
      <body class="bg-white text-slate-800 max-w-3xl mx-auto px-6 py-12 leading-relaxed">
      
      
      <!-- Hero -->
      <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      
      <!-- Top-right glow -->
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      
      <!-- Bottom-left glow -->
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      
      <!-- Content -->
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Procedures</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Wound Suturing / Laceration Repair</h1>
        <p class="text-sm text-indigo-200">Laceration repair is one of the most frequently performed procedures at house officer and general practice level in Nigeria, and one of the most commonly under-taught - learned largely by observation rather than structured instruction. This guide covers indications, equipment (with commonly available local substitutions), technique, complications, and post-procedure care, with linked reference videos for the core techniques.</p>
      </div>
      </div>
      
      <!-- 1. Indications -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Indications
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Clean, uncomplicated lacerations presenting within the acceptable closure window - generally up to 6-8 hours for most body sites, extending to 12-24 hours for well-vascularised areas such as the face and scalp, where infection risk is lower.</li>
        <li>Wounds with well-defined, viable edges that can be approximated without excessive tension.</li>
        <li>Wounds where cosmetic outcome and functional restoration (e.g. over joints, on the face) justify primary closure over healing by secondary intention.</li>
      </ul>
      </div>
      
      <!-- 2. Contraindications -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Contraindications and Situations Requiring Caution
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Situation</th>
              <th class="py-2 font-medium">Consideration</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Heavily contaminated or bite wounds (human or animal)</td><td class="py-2">Often left open or closed only after thorough irrigation and debridement, with delayed primary closure considered at 3-5 days; human bites carry particularly high infection risk</td></tr>
            <tr><td class="py-2 pr-3">Wounds presenting late (beyond 12-24 hours, longer for highly vascular areas)</td><td class="py-2">Higher infection risk with primary closure; consider delayed primary closure</td></tr>
            <tr><td class="py-2 pr-3">Devitalised or heavily crushed tissue edges</td><td class="py-2">Requires debridement before closure is considered; suturing over non-viable tissue predisposes to wound breakdown</td></tr>
            <tr><td class="py-2 pr-3">Suspected retained foreign body</td><td class="py-2">Explore and remove before closure; do not close over a suspected retained foreign body without adequate exploration</td></tr>
            <tr><td class="py-2 pr-3">Deep wounds with suspected tendon, nerve, vascular, or joint capsule involvement</td><td class="py-2">Requires exploration and often specialist surgical referral rather than simple closure in the general ward/A&E setting</td></tr>
            <tr><td class="py-2 pr-3">Signs of established wound infection at presentation</td><td class="py-2">Do not close primarily; manage as an infected wound with appropriate drainage/antibiotics, with delayed closure considered later</td></tr>
            <tr><td class="py-2 pr-3">Puncture wounds</td><td class="py-2">Generally not sutured, given difficulty ensuring adequate irrigation of the wound tract and higher retained-contamination risk</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 3. Equipment -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Equipment
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Standard Suturing Set</strong>
        <p class="text-sm">Needle holder; toothed (Adson) forceps; suture scissors; sterile drape; skin antiseptic (chlorhexidine or povidone-iodine); local anaesthetic (1% or 2% lidocaine, with or without adrenaline depending on site); syringe and needle for infiltration; suture material; sterile gauze; sterile gloves.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Suture Material Selection</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Location</th>
                <th class="py-2 pr-3 font-medium">Suggested suture</th>
                <th class="py-2 font-medium">Typical removal timing</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Face/lip</td><td class="py-2 pr-3">6-0 non-absorbable (e.g. nylon)</td><td class="py-2">3-5 days</td></tr>
              <tr><td class="py-2 pr-3">Scalp</td><td class="py-2 pr-3">3-0 to 4-0 non-absorbable, or staples where available</td><td class="py-2">7-10 days</td></tr>
              <tr><td class="py-2 pr-3">Trunk (chest/abdomen/back)</td><td class="py-2 pr-3">3-0 to 4-0 non-absorbable</td><td class="py-2">10-14 days</td></tr>
              <tr><td class="py-2 pr-3">Extremities</td><td class="py-2 pr-3">4-0 to 5-0 non-absorbable</td><td class="py-2">10-14 days</td></tr>
              <tr><td class="py-2 pr-3">Over joints/high-tension areas</td><td class="py-2 pr-3">3-0 to 4-0, consider additional deep dermal sutures to offload tension</td><td class="py-2">10-14 days</td></tr>
              <tr><td class="py-2 pr-3">Deep/dermal layer (any site)</td><td class="py-2 pr-3">Absorbable (e.g. polyglactin/Vicryl, or catgut where that is what's available)</td><td class="py-2">Absorbs; not removed</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Common Local Substitutions and Workarounds</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Where a formal suturing set is unavailable, a minimum functional set (needle holder, forceps, scissors, suture) should still be assembled and sterilised individually rather than proceeding without one.</li>
          <li>Chlorhexidine or povidone-iodine are both widely available and acceptable; use whichever is stocked.</li>
          <li>Where nylon in the specific required gauge is unavailable, silk is an acceptable substitute for skin closure in most non-cosmetically sensitive areas, though it carries a higher tissue reactivity profile.</li>
          <li>Where sterile drapes are limited, a clean (not necessarily sterile) surrounding field with a sterile area immediately around the wound is a reasonable compromise, prioritising sterility at the wound edge itself.</li>
          <li>Adrenaline-containing local anaesthetic should be avoided or used cautiously in areas with end-arterial supply (fingers, toes, nose, ears, penis), regardless of setting - this is a universal contraindication, not one specific to resource constraints.</li>
        </ul>
      </div>
      </div>
      
      <!-- 4. Pre-procedure -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Pre-Procedure Assessment
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">History:</span> mechanism of injury, time since injury, contamination (soil, saliva, rust), tetanus immunisation status, comorbidities affecting healing (diabetes, sickle cell disease, malnutrition), allergy to local anaesthetics or antiseptics.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Examination:</span> assess wound depth, extent, and involvement of underlying structures; check distal neurovascular status and tendon function before infiltrating anaesthetic, since anaesthesia will mask sensory testing afterward.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Tetanus prophylaxis:</span> assess and administer per the protocol in Section 6 below.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Consent:</span> explain the procedure, expected outcome, and the alternative of non-operative management where relevant.</li>
      </ol>
      </div>
      
      <!-- 5. Technique -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Technique
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 1: Wound Preparation</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Clean the surrounding skin with antiseptic in a widening circular motion from the wound outward.</li>
          <li>Irrigate the wound itself thoroughly with normal saline or clean water under pressure - a syringe without a needle, or a syringe with an 18-20G cannula attached, generates adequate irrigation pressure. Irrigation volume and pressure matter more for infection prevention than the antiseptic used on intact skin.</li>
          <li>Debride any obviously devitalised tissue.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 2: Local Anaesthesia</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Infiltrate 1% or 2% lidocaine directly into the wound edges using a small-gauge needle, injecting slowly to reduce the pain of infiltration.</li>
          <li>Wait 2-3 minutes for full effect before testing with a needle or forceps pinch at the wound edge.</li>
          <li>Maximum safe dose: 4.5 mg/kg (up to 300 mg total) for plain lidocaine, or 7 mg/kg (up to 500 mg total) with adrenaline - calculate the ceiling in mg before starting in larger wounds or paediatric patients, where the total volume needed can approach the limit.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 3: Simple Interrupted Suturing (Default Technique)</strong>
        <ol class="list-decimal pl-5 space-y-1 text-sm">
          <li>Grasp the needle holder with the thumb and ring finger through the handles, index finger along the shaft for control.</li>
          <li>Enter the skin perpendicular to the surface, approximately equidistant from the wound edge as the wound is deep (bite width roughly equal to bite depth), to evert the wound edges rather than invert them.</li>
          <li>Pass the needle through both wound edges, exiting perpendicular to the skin on the opposite side.</li>
          <li>Tie a surgeon's knot: two throws in one direction, followed by single throws in the alternating direction, generally 3-4 throws total for adequate security.</li>
          <li>Cut the suture ends, leaving 5-7 mm tails.</li>
          <li>Space subsequent sutures evenly along the wound, with inter-suture spacing approximately equal to the bite width, leaving no gaps along the wound edge.</li>
        </ol>
        <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
          <p>🔗 <span class="font-medium">Simple Interrupted Suture - OSCE Guide (Geeky Medics):</span> step-by-step written guide with images and embedded video demonstration.<br>
          <a href="https://geekymedics.com/simple-interrupted-suture-osce-guide/" class="text-indigo-600 dark:text-indigo-400 underline">geekymedics.com/simple-interrupted-suture-osce-guide</a></p>
        </div>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 4: Alternative/Adjunct Techniques for Specific Situations</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Technique</th>
                <th class="py-2 font-medium">When to use</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Vertical mattress suture</td><td class="py-2">Wounds under tension, or where additional eversion is needed; provides both deep and superficial approximation in one pass</td></tr>
              <tr><td class="py-2 pr-3">Horizontal mattress suture</td><td class="py-2">Wounds under tension along a linear axis; useful in friable or fragile skin (e.g. elderly patients) where interrupted sutures may tear through</td></tr>
              <tr><td class="py-2 pr-3">Subcuticular (running intradermal) suture</td><td class="py-2">Cosmetically sensitive areas where suture marks should be minimised; requires more technical practice</td></tr>
              <tr><td class="py-2 pr-3">Deep dermal (buried) suture</td><td class="py-2">Deeper wounds requiring layered closure to reduce tension on the skin surface and obliterate dead space</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
          <p>🔗 <span class="font-medium">Suturing Guides collection (Geeky Medics):</span> covers vertical mattress, horizontal mattress, and subcuticular suturing with a written guide and video for each.<br>
          <a href="https://geekymedics.com/category/surgery/suturing/" class="text-indigo-600 dark:text-indigo-400 underline">geekymedics.com/category/surgery/suturing</a></p>
        </div>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 5: Dressing</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Apply a simple non-adherent dressing.</li>
          <li>Advise the patient to keep the wound dry for the first 24-48 hours, after which gentle washing is generally acceptable depending on wound location and closure type.</li>
        </ul>
      </div>
      </div>
      
      <!-- 6. Tetanus -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Tetanus Prophylaxis Protocol
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">First classify the wound, then apply the standard wound-tetanus decision rule (the same logic underlying WHO and national EPI-aligned practice):</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Wound type</th>
              <th class="py-2 pr-3 font-medium">Immunisation history</th>
              <th class="py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Clean, minor wound</td><td class="py-2 pr-3">Primary series complete, last dose &lt; 10 years ago</td><td class="py-2">No vaccine needed today</td></tr>
            <tr><td class="py-2 pr-3">Clean, minor wound</td><td class="py-2 pr-3">Primary series complete, last dose &ge; 10 years ago, or unknown/incomplete history</td><td class="py-2">Give a booster dose (Td or Tdap) today</td></tr>
            <tr><td class="py-2 pr-3">Contaminated/tetanus-prone wound (soil, faeces, saliva contamination; puncture; devitalised tissue; burns; crush injury; bite)</td><td class="py-2 pr-3">Primary series complete, last dose &lt; 5 years ago</td><td class="py-2">No vaccine needed today</td></tr>
            <tr><td class="py-2 pr-3">Contaminated/tetanus-prone wound</td><td class="py-2 pr-3">Primary series complete, last dose &ge; 5 years ago</td><td class="py-2">Give a booster dose today; TIG not required</td></tr>
            <tr><td class="py-2 pr-3">Contaminated/tetanus-prone wound</td><td class="py-2 pr-3">Fewer than 3 documented prior doses, or unknown history</td><td class="py-2">Give both vaccine and tetanus immunoglobulin (TIG) today, in separate syringes at separate sites; continue the primary series thereafter</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">TIG is never required for a clean, minor wound regardless of immunisation status. Where TIG is indicated, immediate active vaccination alone will not protect against the current injury, since active immunity takes time to develop - this is the reason TIG is given for tetanus-prone wounds in inadequately immunised patients rather than vaccine alone.</p>
      </div>
      
      <!-- 7. Complications -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Complications and Management
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Complication</th>
              <th class="py-2 pr-3 font-medium">Recognition</th>
              <th class="py-2 font-medium">Management</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Wound infection</td><td class="py-2 pr-3">Increasing pain, erythema, warmth, purulent discharge, typically after day 2-3</td><td class="py-2">Remove one or more sutures to allow drainage if a collection is present, wound swab if available, appropriate antibiotics, review in 24-48 hours</td></tr>
            <tr><td class="py-2 pr-3">Wound dehiscence</td><td class="py-2 pr-3">Separation of wound edges, often from excessive tension, premature suture removal, or infection</td><td class="py-2">Assess cause; may require re-closure if clean and early, or healing by secondary intention if infected or delayed presentation</td></tr>
            <tr><td class="py-2 pr-3">Suture reaction/inflammation</td><td class="py-2 pr-3">Localised redness/irritation around individual suture points without systemic signs</td><td class="py-2">Usually self-limiting; consider early removal if using a non-absorbable material with high reactivity (e.g. silk)</td></tr>
            <tr><td class="py-2 pr-3">Hypertrophic scarring/keloid</td><td class="py-2 pr-3">Raised, thickened scar formation, particularly common and more pronounced in patients with a personal or family history of keloid formation</td><td class="py-2">Prevention (minimising tension, appropriate technique, timely removal) is more effective than treatment; counsel at-risk patients before the procedure - higher keloid tendency is well recognised in the West African population</td></tr>
            <tr><td class="py-2 pr-3">Nerve or vessel injury from infiltration or suturing</td><td class="py-2 pr-3">Numbness, weakness, or bleeding beyond expected</td><td class="py-2">Withdraw and reposition the needle if resistance or paraesthesia occurs during infiltration; direct pressure for bleeding</td></tr>
            <tr><td class="py-2 pr-3">Missed underlying injury (tendon, foreign body)</td><td class="py-2 pr-3">Persistent dysfunction, pain, or discharge after apparently uncomplicated closure</td><td class="py-2">Re-explore if suspected; missed tendon injuries often present later as functional deficit rather than at the original visit</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Keloid risk counselling deserves particular emphasis in this population - discussing the possibility before the procedure, and setting expectations about scar appearance, avoids a difficult conversation later when a hypertrophic scar has already formed.</p>
      </div>
      
      <!-- 8. Post-procedure -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Post-Procedure Care and Follow-Up
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Provide clear wound care instructions: keep dry initially, watch for infection signs, return early if pain worsens rather than improves after the first 48 hours.</li>
        <li>Give an explicit suture removal date based on location (see Section 3 table) rather than a vague "come back in some days" - patients often do not return for removal unless given a specific date.</li>
        <li>Confirm tetanus status has been addressed before the patient leaves, not assumed.</li>
        <li>For wounds over joints or high-tension areas, consider splinting or activity restriction to reduce dehiscence risk during healing.</li>
      </ul>
      </div>
      
      <!-- 9. Findings not to miss -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Findings That Must Not Be Missed
      </h2>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Reduced distal sensation, weakness, or absent tendon function</span> before anaesthetic infiltration - test and document this first, since infiltration will mask it afterward.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A suspected retained foreign body</span> - explore and remove before any closure; do not suture over an unexplored wound.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of established infection at presentation</span> - do not close primarily; manage as an infected wound instead.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Approaching the lidocaine dose ceiling</span> in a large wound or paediatric patient - calculate the maximum allowable dose in mg before starting, not after.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">An unimmunised or inadequately immunised patient with a tetanus-prone wound</span> - this needs both vaccine and TIG, not vaccine alone.</span></li>
      </ul>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check distal neurovascular status and tendon function before infiltrating anaesthetic, not after.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Irrigation volume and pressure matter more for infection prevention than which antiseptic is used on intact skin.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Give an explicit suture removal date at the time of closure, rather than a vague follow-up instruction.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Counsel patients on keloid risk before the procedure, not after a hypertrophic scar has already formed.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Confirm tetanus status is addressed before the patient leaves - do not assume it has been handled elsewhere.</span></li>
      </ul>
      </div>
      
      <!-- References -->
      <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
      <summary class="flex items-center justify-between cursor-pointer px-4 py-2 select-none">
        <h3 class="font-brand text-sm font-semibold text-stone-600 dark:text-stone-300">References</h3>
        <svg class="w-4 h-4 text-stone-400 dark:text-stone-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-stone-200 dark:border-stone-700">
        <ul class="space-y-1 text-[10px] leading-snug text-stone-500 dark:text-stone-400">
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Geeky Medics - Simple Interrupted Suture and Suturing Guides collection (OSCE guides with video demonstrations).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Recommendations on Tetanus Toxoid-Containing Vaccine Wound Management.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Centers for Disease Control and Prevention - Clinical Guidance for Wound Management to Prevent Tetanus.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Lidocaine Hydrochloride (Local) Monograph - dosing and toxicity reference.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Programme on Immunization / NPHCDA, Nigeria - Routine Immunization Schedule.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },

];
