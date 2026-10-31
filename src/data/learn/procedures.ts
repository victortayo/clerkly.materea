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
              <tr><td class="py-2 pr-3">Typical use</td><td class="py-2 pr-3">Deep/buried layers (dermis, muscle, fascia), mucosa, Pediatric skin closure where removal would be distressing</td><td class="py-2">Skin closure requiring later removal, high-tension areas, situations needing prolonged tensile strength</td></tr>
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
          <li>Maximum safe dose: 4.5 mg/kg (up to 300 mg total) for plain lidocaine, or 7 mg/kg (up to 500 mg total) with adrenaline - calculate the ceiling in mg before starting in larger wounds or Pediatric patients, where the total volume needed can approach the limit.</li>
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
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Approaching the lidocaine dose ceiling</span> in a large wound or Pediatric patient - calculate the maximum allowable dose in mg before starting, not after.</span></li>
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

      {
        id: 'procedure-incision-drainage-abscess',
        title: 'Incision and Drainage of Abscess',
        category: 'Procedures',
        subCategory: 'General',
        content: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Incision and Drainage of Abscess</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; }
      .sans { font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
      .font-brand { font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
      .quote { border-left-width: 3px; border-left-style: solid; }
      details > summary::-webkit-details-marker { display: none; }
    </style>
    </head>
    <body class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
    <div class="max-w-3xl mx-auto p-4 sm:p-6">
    <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">PROCEDURES &middot; GENERAL</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Incision and Drainage of Abscess</h1>
        <p class="text-sm text-indigo-200">Boils, post-injection buttock abscesses, infected cysts and scabies-related abscesses in children are among the commonest reasons for a minor operation in Nigerian clinics and district hospitals. This guide covers when to drain, safe local anaesthesia, the technique stage by stage, loop drainage, when antibiotics add value, and when a case is too deep or too dangerous for the clinic room.</p>
      </div>
    </div>
    
    <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
      <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
        <li><a href="#what-an-abscess-is-and-why-it-is-common-here" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>What an Abscess Is and Why It Is Common Here</span></a></li>
        <li><a href="#deciding-whether-to-drain" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Deciding Whether to Drain</span></a></li>
        <li><a href="#before-you-start-assessment-consent-and-safety" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Before You Start: Assessment, Consent and Safety</span></a></li>
        <li><a href="#equipment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Equipment</span></a></li>
        <li><a href="#anaesthesia-and-analgesia" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Anaesthesia and Analgesia</span></a></li>
        <li><a href="#step-by-step-technique" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Step-by-Step Technique</span></a></li>
        <li><a href="#loop-drainage-a-smaller-incision-alternative" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Loop Drainage: A Smaller-Incision Alternative</span></a></li>
        <li><a href="#special-sites-and-situations" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Special Sites and Situations</span></a></li>
        <li><a href="#antibiotics-cultures-and-local-resistance" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Antibiotics, Cultures and Local Resistance</span></a></li>
        <li><a href="#complications-and-when-to-escalate" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Complications and When to Escalate</span></a></li>
        <li><a href="#aftercare-and-patient-counselling" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Aftercare and Patient Counselling</span></a></li>
        <li><a href="#videos-and-learning-resources" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Videos and Learning Resources</span></a></li>
        <li><a href="#key-clinical-takeaways" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Key Clinical Takeaways</span></a></li></ul>
    </nav>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="what-an-abscess-is-and-why-it-is-common-here" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      What an Abscess Is and Why It Is Common Here
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">A skin abscess is a pocket of pus in the dermis or subcutaneous tissue, walled off by inflamed tissue. Antibiotics penetrate the pus poorly, so the collection has to be opened. The Infectious Diseases Society of America (IDSA) recommends incision and drainage (I&amp;D) as the primary treatment for abscesses, carbuncles, large furuncles and inflamed epidermoid cysts (strong recommendation, high-quality evidence).</p>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Terms you will meet</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li><strong>Furuncle (boil):</strong> infection of a single hair follicle. Small ones often discharge on their own.</li>
      <li><strong>Carbuncle:</strong> several adjacent follicles infected together, usually with more than one drainage point.</li>
      <li><strong>Abscess:</strong> a deeper, larger collection with a fluctuant centre.</li>
      <li><strong>Inflamed epidermoid (sebaceous) cyst:</strong> a cyst with a sac that has become infected or has leaked into the surrounding tissue.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Common presentations in Nigerian practice</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Boils on the neck, axilla, buttocks and groin, often recurrent within a household.</li>
      <li>Buttock or thigh abscess after an intramuscular injection, especially where injections were given outside a clinic or with unsafe equipment.</li>
      <li>Scabies or eczema lesions in children that have become infected and then collected pus.</li>
      <li>Abscess after shaving, barbing, cuts, scarification or local incisions made by a non-clinician.</li>
      <li>Recurrent or large abscesses in people with diabetes, HIV infection or malnutrition.</li>
      <li>Breast abscess in breastfeeding women, perianal abscess, and pilonidal abscess in young men (these need special handling; see Section 8).</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">The organism and local resistance</strong>
    <p class="text-sm"><em>Staphylococcus aureus</em> causes most skin abscesses. Nigerian laboratory studies show the picture varies by centre and over time. One south-west study of <em>S. aureus</em> from skin and soft tissue infections found nearly all isolates were methicillin-susceptible but resistant to penicillin, and most carried the Panton-Valentine leukocidin (PVL) gene, a toxin linked to recurrent boils and spread within families. A later south-south study found methicillin resistance (MRSA) in roughly six of every ten <em>S. aureus</em> isolates from soft tissue infections. Use your own laboratory&rsquo;s antibiogram when one exists.</p>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Late presentation</strong>
    <p class="text-sm">Many patients arrive after days of antibiotics from a patent medicine store, herbal (<em>agbo</em>) preparations or poultices, or an attempt to squeeze or cut the lump at home. The abscess is then often larger, deeper and more painful, and the swelling may feel firm rather than soft. Ask about all of this without judgement; it changes what you find and what you must do.</p>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="deciding-whether-to-drain" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Deciding Whether to Drain
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Drain when</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>The swelling is tender, warm and <strong>fluctuant</strong> (two fingers on either side of the swelling see-saw against each other), or is pointing.</li>
      <li>Ultrasound shows a collection, or a needle aspirate returns pus.</li>
      <li>The lesion is a large furuncle, a carbuncle or an inflamed cyst with a collection.</li>
      <li>The patient has been on antibiotics for 48 hours or more and the lump has not settled. Pus does not respond to antibiotics alone.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Do not incise</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li><strong>Cellulitis without a collection.</strong> Incision does nothing and creates a wound. Treat as non-purulent soft tissue infection and re-examine in 24 to 48 hours.</li>
      <li><strong>A pulsatile mass.</strong> It may be a vascular lesion. Get ultrasound with Doppler first.</li>
      <li><strong>A painless, non-inflamed (&ldquo;cold&rdquo;) swelling</strong>, especially in the neck, groin, chest wall or over the spine. Think tuberculosis. These are usually aspirated or referred, because incision tends to leave a chronic discharging sinus.</li>
      <li><strong>Deep or dangerous sites</strong> (see Section 8).</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">When the diagnosis is uncertain</strong>
    <p class="text-sm">Bedside ultrasound with a linear probe separates abscess from cellulitis. Cellulitis shows a cobblestone pattern of fluid between fat lobules without a defined collection. An abscess is a defined collection that may show posterior acoustic enhancement and a &ldquo;squish&rdquo; sign when pressed. Colour Doppler helps tell an abscess from a lymph node or a vessel. Where there is no ultrasound, a diagnostic needle aspiration (large-bore needle on a syringe) at the point of maximum tenderness confirms pus before you commit to a blade.</p>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="before-you-start-assessment-consent-and-safety" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Before You Start: Assessment, Consent and Safety
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">History</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Duration, fever, rigors, spreading redness, and what has already been tried (antibiotics, herbs, squeezing, cutting).</li>
      <li>Previous abscesses, and other family members with boils.</li>
      <li>Diabetes, HIV status, sickle cell disease, steroid or other immunosuppressant use, malnutrition.</li>
      <li>A recent injection at the site, an ingrown hair, a foreign body, a puncture wound, or a known pilonidal sinus.</li>
      <li>Drug allergies, especially penicillin. Tetanus immunisation status.</li>
      <li>Prosthetic heart valve or previous endocarditis (discuss antibiotic cover with a physician).</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Examination</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Temperature, pulse, respiratory rate and blood pressure. Fever above 38&deg;C or below 36&deg;C, pulse above 90 or respiratory rate above 24 per minute are the IDSA markers of a systemic inflammatory response.</li>
      <li>Measure the abscess in centimetres and mark the edge of the redness with a pen, so progress can be judged at review.</li>
      <li>Look for lymphangitic streaking, enlarged regional nodes, and nearby structures at risk (vessels, nerves, tendons, joints, the orbit, the rectum).</li>
      <li>Press gently over adjacent bone. Tenderness over bone in a child or in a patient with sickle cell disease raises the possibility of osteomyelitis rather than a simple soft tissue abscess.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Tests that change management</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li><strong>Random blood glucose</strong> in every adult with a large, recurrent or multiple abscesses, and in anyone with risk factors. Note that HbA1c can be misleading in sickle cell trait; use plasma glucose.</li>
      <li><strong>HIV test with counselling and consent</strong> in recurrent or severe abscesses, following national testing guidance.</li>
      <li><strong>Full blood count</strong> if the patient looks unwell.</li>
      <li><strong>Pus for Gram stain and culture</strong> when antibiotics are being given, the abscess is recurrent, the patient is immunocompromised, or the patient has not responded (see Section 9). Collect it before irrigating.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Consent: what to tell the patient</strong>
    <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">&ldquo;I will numb the skin with an injection. That stings for a short while. Then I will make a cut over the lump to let the pus out, and clean the inside. The wound stays open on purpose, so it heals from the bottom up. You will need dressings and a return visit, and there will be a scar. Sometimes the lump comes back.&rdquo;</p>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Safety for you and your team</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Wear gloves, a mask and eye protection. Pus can spurt out under pressure when the abscess is opened or irrigated.</li>
      <li>Hepatitis B and HIV are present in our patients. Handle blades and needles yourself, never pass an open blade by hand, and dispose of sharps at the point of use. Know your own hepatitis B vaccination status.</li>
      <li>Lay the patient flat. Fainting during local anaesthetic injection and incision is common.</li>
      <li>Check and give tetanus toxoid according to the national schedule if immunisation is uncertain, or if the wound is dirty or injection-related.</li>
    </ul>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="equipment" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Equipment
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
    <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
    <th class="py-2 pr-3 font-semibold">Item</th><th class="py-2 pr-3 font-semibold">Specification</th><th class="py-2 pr-3 font-semibold">If it is not available</th>
    </tr></thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
    <tr class="align-top"><td class="py-2 pr-3">Sterile gloves, mask, eye protection</td><td class="py-2 pr-3">Use sterile technique whenever possible.</td><td class="py-2 pr-3">Never skip eye protection.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Antiseptic</td><td class="py-2 pr-3">Povidone-iodine or chlorhexidine for the skin.</td><td class="py-2 pr-3">Either is acceptable. Let it dry.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Local anaesthetic</td><td class="py-2 pr-3">Lidocaine 1% (10 mg per mL), 5 to 10 mL syringe, 23 to 25 G needle.</td><td class="py-2 pr-3">Check the concentration on the vial. Lidocaine 2% is 20 mg per mL and halves the safe volume.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Scalpel</td><td class="py-2 pr-3">No. 11 (pointed) or No. 15 blade.</td><td class="py-2 pr-3">Do not incise with scissors.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Artery forceps (haemostat)</td><td class="py-2 pr-3">To break up loculations inside the cavity.</td><td class="py-2 pr-3">Sinus forceps or a similar blunt instrument.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Irrigation</td><td class="py-2 pr-3">Normal saline, 20 mL or larger syringe, with an 18 G cannula or catheter tip.</td><td class="py-2 pr-3">Sterile water. Wear the eye shield.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Specimen</td><td class="py-2 pr-3">Sterile container, or aspirate pus into a syringe.</td><td class="py-2 pr-3">A swab is acceptable but inferior to an aspirate.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Wick or packing (if used)</td><td class="py-2 pr-3">Plain or iodoform ribbon gauze, 1 to 2 cm wide.</td><td class="py-2 pr-3">Strip of sterile gauze.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Loop drain (if used)</td><td class="py-2 pr-3">Vessel loop or small Penrose drain.</td><td class="py-2 pr-3">Cuff of a sterile glove, or a thin strip cut from a sterile tourniquet.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Dressing</td><td class="py-2 pr-3">Absorbent pad and tape. Not airtight.</td><td class="py-2 pr-3">Several layers of clean gauze held with tape or a bandage.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Resuscitation readiness</td><td class="py-2 pr-3">Oxygen, suction, IV access kit; lipid emulsion if the unit stocks it.</td><td class="py-2 pr-3">Know the nearest source of help before you start.</td></tr>
    </tbody></table></div>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="anaesthesia-and-analgesia" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Anaesthesia and Analgesia
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Know your maximum dose before you draw up</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Lidocaine <strong>without</strong> adrenaline: 4.5 mg per kg, not more than 300 mg in total.</li>
      <li>Lidocaine <strong>with</strong> adrenaline: 7 mg per kg, not more than 500 mg in total.</li>
      <li>1% lidocaine is 10 mg per mL; 2% is 20 mg per mL.</li>
      <li>Worked examples with 1% plain lidocaine: a 70 kg adult can have up to 300 mg (30 mL); a 20 kg child can have up to 90 mg (9 mL). A simple abscess normally needs 3 to 10 mL.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Technique</strong>
    <ol class="list-decimal pl-5 space-y-1.5 text-sm">
      <li>Weigh the patient (children especially) and calculate the maximum before starting.</li>
      <li>Raise a skin wheal along the planned incision line, then infiltrate the subcutaneous tissue along that line and in a ring around the abscess (a field block). Draw back before each injection to avoid an intravascular dose. Inject slowly.</li>
      <li><strong>Do not inject into the abscess cavity.</strong> It increases pain from tissue distension and can spread bacteria into healthy tissue.</li>
      <li>Wait two to five minutes. Infected, acidic tissue blunts the effect of lidocaine, so top up around the edges if the patient still feels sharp pain.</li>
      <li>Avoid adrenaline-containing solutions on fingers, toes, penis, nose and ear, as is traditional practice at end-arterial sites.</li>
      <li>Give oral paracetamol with or without an NSAID 30 to 60 minutes beforehand when time allows.</li>
    </ol>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">When local anaesthesia is not enough</strong>
    <p class="text-sm">Large or very painful abscesses, abscesses in children who cannot cooperate, and abscesses where infiltration does not work are best done in theatre or with procedural sedation. Use sedation such as ketamine only where a trained person can monitor the airway and breathing throughout. Never drain a large abscess in a frightened child with restraint and inadequate anaesthesia.</p>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Local anaesthetic toxicity</strong>
    <p class="text-sm">Early warning signs are numbness around the mouth, tingling of the tongue, dizziness and ringing in the ears. Stop injecting, call for help, give oxygen, and support airway and breathing. Treat seizures with a benzodiazepine. Give intravenous lipid emulsion according to local protocol where it is available.</p>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="step-by-step-technique" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Step-by-Step Technique
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Stage 1: Position, mark and prepare</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Lay the patient flat with the site accessible and well lit. Use ultrasound to find the largest part of the cavity when the abscess is not clearly fluctuant.</li>
      <li>Mark the point of maximum fluctuance and the planned incision. Plan a straight line that follows the natural skin creases (relaxed skin tension lines) wherever the site allows.</li>
      <li>Many patients are prone to keloid and hypertrophic scars. Avoid the chest, shoulders, upper back, jawline and earlobes if another approach is possible, and warn the patient about scarring before you start.</li>
      <li>Clean the skin widely with antiseptic and allow it to dry. Drape the area. Put on gloves, mask and eye protection.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Stage 2: Anaesthetise</strong>
    <p class="text-sm">Follow Section 5. Test with the back of the scalpel or the tip of forceps before cutting.</p>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Stage 3: Incise</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Make one linear incision over the centre of the abscess, long enough to span the cavity but no longer. Hold the blade vertically and cut quickly through the roof into the pocket. Do not cut deeper than the floor of the cavity.</li>
      <li>Let pus escape. If pus is being sent for culture, collect it now with a syringe or sterile container before you irrigate.</li>
      <li>A single generous incision drains better than a small stab. A small incision closes early and leaves the abscess behind.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Stage 4: Break up loculations</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Insert an artery forceps and open the jaws in every direction to break septa and empty hidden pockets. Feel for the walls of the cavity as you go.</li>
      <li>Avoid probing with a finger, scalpel or scissors. A blunt instrument reduces the risk of needle-stick and cut injuries to you and of vessel injury to the patient.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Stage 5: Irrigate</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Wash the cavity with normal saline until the return is clear. The evidence for irrigation is limited, but it removes debris and loose pus and is standard practice.</li>
      <li>Wear eye protection, and expect splash.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Stage 6: Decide on a wick, packing or nothing</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li><strong>Abscess smaller than 5 cm:</strong> routine packing is not supported by the evidence. Randomised trials found no better healing or recurrence, and packing hurts more.</li>
      <li><strong>Abscess 5 cm or larger, and pilonidal abscesses:</strong> fill the cavity loosely with ribbon gauze (iodoform gauze if available) and leave a short tail outside to act as a wick and to make removal easy. Packing that is too tight causes pressure necrosis and pain.</li>
      <li>Alternatively, use loop drainage (Section 7).</li>
      <li>Do not close the wound with sutures.</li>
    </ul>
    <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
    <p class="font-brand text-sm font-semibold">Guideline Watch: packing</p>
    <p class="text-sm">Older surgical teaching, including many district-level habits, packs every cavity. Randomised trials in simple abscesses under 5 cm and a later meta-analysis found packing did not reduce recurrence or repeat procedures and caused more pain. Large cavities, pilonidal abscesses and cavities that bleed are the situations in which packing is still used.</p>
    </div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Stage 7: Dress</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Cover with a thick absorbent dressing and secure it. Do not seal with an airtight film, because the abscess continues to drain for 24 to 48 hours.</li>
      <li>Give clear dressing instructions, a review date, and written return advice (Section 11).</li>
    </ul>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="loop-drainage-a-smaller-incision-alternative" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Loop Drainage: A Smaller-Incision Alternative
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">In loop drainage, two small incisions are made across the cavity and a loop is threaded through both and left in place. The tract stays open, pus keeps draining, and no repeated packing is needed. It is used mainly for larger abscesses and where a long scar would be unwelcome. Evidence comes from retrospective studies and small trials in children and adults, so it is a reasonable option, not a replacement for standard I&amp;D.</p>
    <ol class="list-decimal pl-5 space-y-1.5 text-sm">
      <li>Anaesthetise as in Section 5.</li>
      <li>Make a small incision of about 4 to 5 mm at one edge of the abscess, at the point of maximum fluctuance.</li>
      <li>Insert a small haemostat and break up all loculations. Find the opposite edge of the cavity.</li>
      <li>Make a second 4 to 5 mm incision over the tip of the instrument, ideally within about 4 cm of the first.</li>
      <li>Irrigate through both openings.</li>
      <li>Pull a vessel loop, Penrose drain, glove strip or trimmed sterile tourniquet strip through both incisions and tie the ends loosely, with no tension on the skin.</li>
      <li>The patient washes and moves the loop gently. Remove it once drainage has stopped and the redness has settled, usually in about 7 to 10 days.</li>
    </ol>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="special-sites-and-situations" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Special Sites and Situations
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
    <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
    <th class="py-2 pr-3 font-semibold">Site or situation</th><th class="py-2 pr-3 font-semibold">Why it differs</th><th class="py-2 pr-3 font-semibold">What to do</th>
    </tr></thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
    <tr class="align-top"><td class="py-2 pr-3">Face (especially nose and upper lip), scalp, neck</td><td class="py-2 pr-3">Close to the orbit, airway and deep neck spaces; cosmetic concern. IDSA counts the face as a difficult-to-drain area.</td><td class="py-2 pr-3">Do not squeeze. Refer when the abscess is near the eye, nose or upper lip, or may be deep. Give antibiotics.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Hand and fingers</td><td class="py-2 pr-3">Tendon sheaths, deep spaces and nerves lie close to the skin. IDSA counts the hand as difficult to drain.</td><td class="py-2 pr-3">Refer tenderness along the flexor tendon, a swollen finger held bent, or a deep palmar swelling. Small paronychia and pulp collections may be drained by an experienced clinician.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Axilla and groin</td><td class="py-2 pr-3">Large vessels, nodes and hernias lie close by.</td><td class="py-2 pr-3">Confirm with ultrasound. Exclude hernia and suppurating lymph node. Drain in theatre if deep.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Buttock and thigh after injection</td><td class="py-2 pr-3">Cavities are often deep and large. Sciatic nerve injury is a risk with buttock injections.</td><td class="py-2 pr-3">Ultrasound first. Drain deep or large collections in theatre. Send pus for culture, and consider TB if the wound is chronic or does not heal.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Deep muscle abscess (pyomyositis)</td><td class="py-2 pr-3">Occurs in tropical settings, in children and young adults and in HIV. Fever, a woody swelling and pain, with little skin change at first.</td><td class="py-2 pr-3">Image with ultrasound or CT. Drain surgically and give anti-staphylococcal antibiotics. Admit.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Breast (lactating)</td><td class="py-2 pr-3">Needle aspiration is an alternative to I&amp;D and may keep breastfeeding going, but the Cochrane review found the evidence insufficient to call either better.</td><td class="py-2 pr-3">Aspirate small abscesses (under 5 cm) where ultrasound is available. Use I&amp;D for large, multiloculated abscesses or where the skin is compromised. A non-lactating breast abscess needs follow-up to look for diabetes, TB or malignancy.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Perianal and ischiorectal</td><td class="py-2 pr-3">Risk of fistula-in-ano and deep extension.</td><td class="py-2 pr-3">Do not manage as a simple skin abscess. Refer to a surgeon for drainage, usually under anaesthesia.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Pilonidal</td><td class="py-2 pr-3">Sacrococcygeal sinus with hair; recurrence is common.</td><td class="py-2 pr-3">Drain, pack loosely, and refer for definitive treatment.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Bartholin abscess</td><td class="py-2 pr-3">Gland abscess at the vaginal introitus.</td><td class="py-2 pr-3">Refer to gynaecology for drainage with catheter placement or marsupialisation.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Neonates and young infants</td><td class="py-2 pr-3">Immature immunity; risk of rapid spread.</td><td class="py-2 pr-3">Refer.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Diabetes, HIV, sickle cell disease, malnutrition</td><td class="py-2 pr-3">Poor healing, faster spread. In sickle cell disease, swelling near bone may be osteomyelitis.</td><td class="py-2 pr-3">Low threshold for antibiotics, culture and admission. Image the bone when suspected.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Cold abscess</td><td class="py-2 pr-3">Usually TB.</td><td class="py-2 pr-3">Aspirate and refer. Do not incise.</td></tr>
    </tbody></table></div>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="antibiotics-cultures-and-local-resistance" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Antibiotics, Cultures and Local Resistance
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">IDSA position</strong>
    <p class="text-sm">For a simple, drained abscess in a healthy person, IDSA says drainage is the treatment and antibiotics are not routinely needed. Add an antibiotic active against <em>S. aureus</em> when there is:</p>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>A systemic inflammatory response: temperature above 38&deg;C or below 36&deg;C, pulse above 90, respiratory rate above 24.</li>
      <li>Severe or extensive disease, multiple sites, or rapidly spreading cellulitis around the abscess.</li>
      <li>Immunosuppression or significant comorbidity (diabetes, HIV, sickle cell disease, malnutrition).</li>
      <li>The extremes of age.</li>
      <li>A site that is difficult to drain completely (face, hand, genitalia) or an associated septic thrombophlebitis.</li>
      <li>No improvement after drainage alone.</li>
    </ul>
    </div>
    <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
    <p class="font-brand text-sm font-semibold">Guideline Watch: antibiotics after drainage of a simple abscess</p>
    <p class="text-sm">IDSA 2014 reserves antibiotics for the groups above. Later large placebo-controlled trials in adults and children with a single abscess of 5 cm or less found higher cure rates when clindamycin or trimethoprim-sulfamethoxazole (TMP-SMX) was added after drainage: about 82 to 83 per cent cured at 7 to 10 days, against about 69 per cent with placebo, with more side effects on antibiotics, particularly diarrhoea with clindamycin. Guideline bodies have not uniformly changed their advice. In practice, weigh cost, adverse effects, resistance and what the patient can actually obtain, and be generous with antibiotics in any patient from the groups listed above.</p>
    </div>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Choosing the drug in Nigeria</strong>
    <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
    <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
    <th class="py-2 pr-3 font-semibold">Situation</th><th class="py-2 pr-3 font-semibold">Oral options for adults</th><th class="py-2 pr-3 font-semibold">Cautions</th>
    </tr></thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
    <tr class="align-top"><td class="py-2 pr-3">Likely MSSA, no MRSA risk</td><td class="py-2 pr-3">Flucloxacillin or cloxacillin 500 mg four times daily, or cephalexin 500 mg four times daily.</td><td class="py-2 pr-3">Flucloxacillin on an empty stomach. Avoid in penicillin allergy. Amoxicillin alone is not reliable because <em>S. aureus</em> isolates are almost universally penicillin-resistant in local series.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">MRSA suspected or common locally; penicillin allergy</td><td class="py-2 pr-3">Doxycycline 100 mg twice daily, or clindamycin 300 to 450 mg three to four times daily, or TMP-SMX 1 to 2 double-strength tablets twice daily.</td><td class="py-2 pr-3">Doxycycline: not in pregnancy or young children. Clindamycin: diarrhoea and <em>C. difficile</em>; use when the isolate is susceptible. TMP-SMX: one south-west series found about 84 per cent resistance in skin and soft tissue isolates.</td></tr>
    <tr class="align-top"><td class="py-2 pr-3">Systemic illness, rapid spread, or failure of oral therapy</td><td class="py-2 pr-3">Admit. Give intravenous anti-staphylococcal treatment per local protocol, with MRSA cover where MRSA is likely and the drug is available. Take blood cultures.</td><td class="py-2 pr-3">Treat as severe infection.</td></tr>
    </tbody></table></div>
    <p class="text-sm">Duration is 5 to 10 days (IDSA), reassessed at 48 hours. Dose children by weight from the national formulary, not by estimation. Doses above are standard adult doses for normal renal function.</p>
    </div>
    <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
    <p class="font-brand text-sm font-semibold">Guideline Watch: TMP-SMX and G6PD deficiency</p>
    <p class="text-sm">G6PD deficiency is common in West Africa. Many older drug lists and product labels advise avoiding sulfamethoxazole in G6PD deficiency. The 2022 Clinical Pharmacogenetics Implementation Consortium guideline found little evidence that TMP-SMX causes haemolysis in these patients. Follow your national formulary, and where G6PD status is unknown or there has been previous haemolysis, choose another agent that fits the situation.</p>
    </div>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">When to send pus for culture</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>IDSA does not require culture for a simple abscess in a healthy person. Send pus when antibiotics are being given, in recurrent abscesses, in immunocompromised patients, in severe or systemic infection, and when there is no response to treatment.</li>
      <li>Collect before irrigation, and ideally before the first antibiotic dose.</li>
      <li>Where a laboratory exists, every culture also builds the local antibiogram that guides the next patient&rsquo;s antibiotic choice.</li>
    </ul>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="complications-and-when-to-escalate" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Complications and When to Escalate
    </h2>
    <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
    <p class="font-brand text-sm font-semibold mb-3">Complications and Warning Signs</p>
    <ul class="space-y-2">
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Sepsis:</strong> fever with rigors, fast pulse, low blood pressure, confusion. Admit, take blood cultures, give intravenous antibiotics and fluids.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Necrotising infection:</strong> pain out of proportion to the signs, dusky or blistered skin, crepitus, rapid spread, toxic appearance. This is a surgical emergency needing urgent debridement. Risk is highest in diabetes and in perineal infection.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Bleeding:</strong> apply direct pressure. If it does not stop, pack, do not clamp blindly, and call for senior surgical help.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Nerve, tendon or vessel injury</strong> in the hand, neck, axilla, groin and thigh: stop and refer.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Local anaesthetic toxicity:</strong> recognise early (Section 5).</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>No improvement at 48 hours:</strong> think of a loculation you missed, deeper extension, a foreign body, osteomyelitis, resistant organisms or a wrong diagnosis (cold abscess, tumour). Re-examine, re-explore or image, and take cultures.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Recurrence:</strong> look for diabetes, HIV, a pilonidal sinus, hidradenitis, a fistula and household transmission (Section 11).</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Bacteraemia after drainage</strong> can occur briefly. In patients with a prosthetic heart valve or previous endocarditis, discuss antibiotic cover with a physician.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Scarring:</strong> keloid or hypertrophic scars are common. Tell the patient beforehand, and refer early if a scar becomes raised or itchy.</span></li>
    </ul>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="aftercare-and-patient-counselling" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Aftercare and Patient Counselling
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Wound care</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Review at 24 to 48 hours to inspect the cavity, and remove or change any wick. Loops come out at about 7 to 10 days.</li>
      <li>Change the dressing daily or whenever it is soaked. Wash hands before and after. After the first 48 hours, gently clean the wound with clean running water and mild soap.</li>
      <li>Agree a dressing plan the patient can afford and obtain, and tell them where to go if you cannot see them.</li>
      <li>Healing is from the base upwards. A large cavity takes weeks, not days.</li>
      <li>Paracetamol, with or without ibuprofen if there is no contraindication, for pain.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Teaching and ask about home practices</strong>
    <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">&ldquo;Have you put anything on it, such as herbs, palm oil, ointment, or has someone cut or pressed it? I am only asking so I know what the wound has been through.&rdquo;</p>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Do not squeeze lumps, particularly on the face. Do not apply herbal poultices, hot compresses that burn, or cream over an open wound.</li>
      <li>Do not share towels, razors, clippers, sponges or clothing. Wash clothes and bedding in hot water and dry them in the sun.</li>
      <li>Cover any draining wound.</li>
      <li>Wash hands with soap and water before touching the wound and after.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Return urgently if</strong>
    <ul class="list-disc pl-5 space-y-1.5 text-sm">
      <li>Fever, rigors, or feeling very unwell.</li>
      <li>Redness spreading, red streaks up the limb, or more swelling.</li>
      <li>Pain getting worse instead of better, or pus building up again.</li>
      <li>The wound is bleeding that does not stop with pressure.</li>
    </ul>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Recurrent abscesses</strong>
    <p class="text-sm">Check glucose, offer an HIV test with counselling, treat scabies and eczema, and screen the household. IDSA suggests a decolonisation regimen (intranasal mupirocin and chlorhexidine washes with attention to personal items) for patients who keep getting abscesses despite good hygiene; it is a weak recommendation with low-quality evidence.</p>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="videos-and-learning-resources" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Videos and Learning Resources
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Core technique videos</strong>
    <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://doi.org/10.1056/NEJMvcm071319" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NEJM Videos in Clinical Medicine: Abscess Incision and Drainage</a> &ndash; the standard teaching video (about 10 minutes) with indications, contraindications and technique. May need institutional access.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=7tt-KZTUH4A" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">CoreEM: Incision and Drainage of Cutaneous Abscesses</a> &ndash; a short, clear demonstration.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://jomi.com/article/268.11/drainage-of-cystic-mass-on-first-left-toe" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Journal of Medical Insight: Drainage of Cystic Mass on First Left Toe</a> &ndash; a peer-reviewed surgical video with local block, incision and drainage as separate steps. May need a subscription.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=5lqtonfXDPw" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">How to do Incision and Drainage of an Abscess</a> &ndash; step-by-step demonstration for clinicians in primary and urgent care.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=B80QcWMxXas" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Abscess Incision and Drainage: Technique</a> &ndash; finding the best drainage site and making a controlled incision.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=X5CdooZHux8" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Abscess Incision and Drainage: Step-by-Step Surgical Guide</a> &ndash; full stepwise demonstration.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=eLWXULnzQeE" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Incision and Drainage of Abscess (wound care surgeon demonstration)</a> &ndash; an older demonstration by a surgical wound care physician.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/shorts/rU_OllKeI2s" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Incision and drainage of a large abscess in the emergency department</a> &ndash; short clip of a large abscess being opened.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=u1Iysff7StM" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Pilonidal Abscess Emergency Incision and Drainage</a> &ndash; drainage of a large pilonidal abscess, with a discussion of pilonidal disease.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=WsvcjYu9hYo" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Puncture Wound Abscess Drainage Tutorial</a> &ndash; abscess after a puncture wound.</div>
    </div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Loop drainage</strong>
    <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=hkEidzzs0JY" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Loop drainage demonstration (linked from Sinai Emergency Medicine)</a> &ndash; how the two-incision loop technique is done.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pemcincinnati.com/blog/loop-abscess" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">PEM Cincinnati: Incision and loop drainage, what is the evidence?</a> &ndash; the technique and the evidence summarised.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.medmastery.com/guide/emergency-procedures-clinical-guide/how-loop-drain-large-skin-abscess" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Medmastery: How to loop drain a large skin abscess</a> &ndash; equipment list and steps.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.aliem.com/trick-of-trade-incision-and-loop-2/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">ALiEM: Incision and loop drainage using a sterile tourniquet</a> &ndash; a useful improvisation when no vessel loop is available.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pedemmorsels.com/incision-loop-drainage-abscess/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">PedEM Morsels: Incision and loop drainage of abscess</a> &ndash; step-by-step technique, home care and removal.</div>
    </div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Ultrasound for abscess</strong>
    <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://medicine.yale.edu/media-player/pocus-sst" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Yale: Point-of-care ultrasound for skin and soft tissue</a> &ndash; abscess versus cellulitis, cobblestoning, scanning technique.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.acep.org/sonoguide/procedures/abscess-evaluation" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">ACEP SonoGuide: Abscess Evaluation</a> &ndash; indications, scanning and image examples.</div>
    </div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Written guides, guidelines and simulation</strong>
    <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://coreem.net/procedures/i-and-d/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">CoreEM: Incision and Drainage (procedure page)</a> &ndash; written steps that accompany the CoreEM video.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.who.int/publications/i/item/9241545755" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">WHO: Surgical Care at the District Hospital</a> &ndash; see section 5.5, Cellulitis and abscess, written for district-level practice.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://academic.oup.com/cid/article-lookup/59/2/e10" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">IDSA 2014 guideline for skin and soft tissue infections</a> &ndash; the reference guideline for purulent infections.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://fpnotebook.com/Derm/Procedure/IncsnAndDrng.htm" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Family Practice Notebook: Incision and drainage</a> &ndash; summary of technique, packing and loop drainage.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.chop.edu/node/140836" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Children&rsquo;s Hospital of Philadelphia clinical pathway: Incision and drainage procedure</a> &ndash; supplies, ultrasound, culture, probing, packing criteria.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2453116/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Building a low-cost abscess model for teaching I&amp;D</a> &ndash; how to make a simulated abscess so trainees can practise before they operate on a patient.</div>
    </div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Related collections to be drained by a specialist</strong>
    <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://geekymedics.com/mastitis-and-breast-abscess/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics: Mastitis and breast abscess</a> &ndash; aspiration versus open drainage in the breast.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://geekymedics.com/anal-fistula/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics: Anal fistula and perianal abscess</a> &ndash; perianal abscess and fistula.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://geekymedics.com/bartholins-cyst/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics: Bartholin&rsquo;s cyst and abscess</a> &ndash; recognition and referral.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://geekymedics.com/peritonsillar-abscess-quinsy/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics: Peritonsillar abscess (quinsy)</a> &ndash; ENT-managed.</div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.cochrane.org/evidence/CD010490_treatments-breast-abscesses-breastfeeding-women" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Cochrane review: Treatments for breast abscesses in breastfeeding women</a> &ndash; needle aspiration versus incision and drainage.</div>
    </div>
    <p class="text-sm">Video quality varies. Start with the NEJM and CoreEM demonstrations, then use the others to see different sites and techniques.</p>
    </div>
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="key-clinical-takeaways" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
      Key Clinical Takeaways
    </h2>
    <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-100">
    <p class="font-brand text-sm font-semibold mb-3">Key Clinical Takeaways</p>
    <ul class="space-y-2">
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Drainage cures a collection of pus; antibiotics alone do not. Do not incise cellulitis without a collection.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Confirm pus with fluctuance, ultrasound or needle aspiration. Do not incise a pulsatile or painless cold swelling.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Calculate the lidocaine ceiling before you inject: 4.5 mg/kg plain (maximum 300 mg), 7 mg/kg with adrenaline (maximum 500 mg). Never inject into the cavity.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>One generous linear incision, loculations broken with an artery forceps, saline irrigation, and the wound left open.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Pack only large (5 cm or more) and pilonidal cavities, loosely, with a tail. Routine packing of small abscesses causes pain without benefit.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Loop drainage is a good alternative for larger abscesses and sites where scarring matters.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Add antibiotics for systemic signs, extensive cellulitis, immunosuppression, extremes of age, difficult sites and treatment failure. Pick the drug by local resistance, not habit.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Face, hand, perianal, breast, deep buttock and thigh collections, neonates and necrotising infection need escalation.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check glucose in every adult with a large or recurrent abscess, and offer HIV testing with counselling.</span></li>
      <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Counsel about the open wound, scarring and keloid risk, home practices, household hygiene and return warning signs.</span></li>
    </ul>
    </div>
    <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 mb-6">
      <summary class="flex items-center justify-between cursor-pointer p-4 sm:p-5 list-none">
        <span class="font-brand text-sm font-semibold text-stone-700 dark:text-stone-300">References</span>
        <svg class="w-4 h-4 text-stone-500 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </summary>
      <div class="px-4 sm:px-5 pb-4 sm:pb-5 space-y-1.5">
        <p class="text-[10px] leading-snug text-stone-500">1. Infectious Diseases Society of America. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update. Clin Infect Dis 2014;59(2):e10-e52.</p>
        <p class="text-[10px] leading-snug text-stone-500">2. Infectious Diseases Society of America. Clinical practice guidelines for the treatment of methicillin-resistant Staphylococcus aureus infections in adults and children. Clin Infect Dis 2011;52(3):e18-e55.</p>
        <p class="text-[10px] leading-snug text-stone-500">3. World Health Organization. Surgical care at the district hospital. Geneva: WHO; 2003 (section 5.5, Cellulitis and abscess).</p>
        <p class="text-[10px] leading-snug text-stone-500">4. New England Journal of Medicine, Videos in Clinical Medicine. Abscess incision and drainage. N Engl J Med 2007;357(19):e20.</p>
        <p class="text-[10px] leading-snug text-stone-500">5. Randomised placebo-controlled trials of clindamycin and trimethoprim-sulfamethoxazole after drainage of simple skin abscesses. N Engl J Med 2016 and 2017.</p>
        <p class="text-[10px] leading-snug text-stone-500">6. Randomised trials of packing versus no packing after drainage of simple cutaneous abscesses. Acad Emerg Med 2009;16(5):470-473 and Pediatr Emerg Care 2012;28(6):514-517.</p>
        <p class="text-[10px] leading-snug text-stone-500">7. Systematic review and meta-analysis of randomised trials of incision and drainage of cutaneous abscess with or without cavity packing. Langenbecks Arch Surg 2021;406(4):981-991.</p>
        <p class="text-[10px] leading-snug text-stone-500">8. Clinical Pharmacogenetics Implementation Consortium. Guideline for rasburicase and other drugs in G6PD deficiency, 2022 update.</p>
        <p class="text-[10px] leading-snug text-stone-500">9. Cochrane Database of Systematic Reviews. Treatments for breast abscesses in breastfeeding women. 2015;(8):CD010490.</p>
        <p class="text-[10px] leading-snug text-stone-500">10. Cross-sectional studies of Staphylococcus aureus from skin and soft tissue infections and wounds in south-west Nigeria (F1000Research 2018) and soft tissue infections in south-south Nigeria (Ther Adv Infect Dis 2025).</p>
        <p class="text-[10px] leading-snug text-stone-500">11. American College of Emergency Physicians. Abscess evaluation, ultrasound guide.</p>
        <p class="text-[10px] leading-snug text-stone-500">12. US Food and Drug Administration labelling for lidocaine hydrochloride injection (maximum dose guidance).</p>
      </div>
    </details>
    </div>
    </body>
    </html>
        `
    },

    {
      id: 'procedure-lumbar-puncture',
      title: 'Lumbar Puncture',
      category: 'Procedures',
      subCategory: 'Neurology',
      content: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lumbar Puncture</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; }
    .sans { font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
    .font-brand { font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
    .quote { border-left-width: 3px; border-left-style: solid; }
    details > summary::-webkit-details-marker { display: none; }
  </style>
  </head>
  <body class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
  <div class="max-w-3xl mx-auto p-4 sm:p-6">
  <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
    <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
    <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
    <div class="relative p-6 sm:p-8">
      <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">PROCEDURES &middot; NEUROLOGY</span>
      <h1 class="font-brand text-3xl font-bold mb-3 text-white">Lumbar Puncture</h1>
      <p class="text-sm text-indigo-200">Northern Nigeria sits inside the African meningitis belt, advanced HIV disease brings cryptococcal and tuberculous meningitis, and most clinicians here have no CT scanner within reach. This guide covers who should and should not have a lumbar puncture when CT is unavailable, the technique stage by stage, the pitfalls that cause failed and traumatic taps, opening pressure with improvised equipment, CSF handling and interpretation, and the antibiotic rule that overrides everything: treatment never waits for the needle.</p>
    </div>
  </div>
  
  <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
    <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
      <li><a href="#why-this-procedure-matters-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>Why This Procedure Matters in Nigerian Practice</span></a></li>
      <li><a href="#indications-and-the-test-menu" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Indications and the Test Menu</span></a></li>
      <li><a href="#can-i-do-this-lp-contraindication-checks-without-ct" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Can I Do This LP? Contraindication Checks Without CT</span></a></li>
      <li><a href="#other-contraindications-and-bleeding-risk" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Other Contraindications and Bleeding Risk</span></a></li>
      <li><a href="#preparation-and-equipment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Preparation and Equipment</span></a></li>
      <li><a href="#positioning-landmarks-and-anaesthesia" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Positioning, Landmarks and Anaesthesia</span></a></li>
      <li><a href="#step-by-step-technique" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Step-by-Step Technique</span></a></li>
      <li><a href="#technique-pitfalls-and-how-to-fix-them" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Technique Pitfalls and How to Fix Them</span></a></li>
      <li><a href="#opening-pressure-and-therapeutic-lp" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Opening Pressure and Therapeutic LP</span></a></li>
      <li><a href="#csf-handling-and-interpretation" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>CSF Handling and Interpretation</span></a></li>
      <li><a href="#treatment-does-not-wait-for-the-lp" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Treatment Does Not Wait for the LP</span></a></li>
      <li><a href="#complications-aftercare-and-consent" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Complications, Aftercare and Consent</span></a></li>
      <li><a href="#special-situations" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Special Situations</span></a></li>
      <li><a href="#videos-and-learning-resources" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">14</span><span>Videos and Learning Resources</span></a></li>
      <li><a href="#key-clinical-takeaways" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">15</span><span>Key Clinical Takeaways</span></a></li></ul>
  </nav>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="why-this-procedure-matters-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
    Why This Procedure Matters in Nigerian Practice
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li><strong>The meningitis belt.</strong> Almost the whole northern half of Nigeria lies in the African meningitis belt, and cerebrospinal meningitis (CSM) outbreaks recur in the dry, dusty months, roughly December to April. The NCDC reports that <em>Neisseria meningitidis</em> serogroup C now drives most outbreaks and that available vaccines do not fully match it. NCDC also warns that fever and headache in the dry season should not automatically be labelled malaria.</li>
    <li><strong>Throughout the year.</strong> Pneumococcal meningitis (more likely in sickle cell disease and HIV), <em>H. influenzae</em> type b in incompletely vaccinated children, tuberculous meningitis and cryptococcal meningitis in advanced HIV disease, and neonatal sepsis all arrive in our wards. Cerebral malaria can mimic or accompany meningitis.</li>
    <li><strong>The diagnostic gap.</strong> NCDC outbreak reports have repeatedly named the absence of trained staff for CSF collection as a reason laboratory confirmation fails. A 2025 Sokoto outbreak report recorded low CSF sample collection and recommended LP training for clinicians. Every correct tap adds the organism, the serogroup and the resistance data that guide the whole response.</li>
    <li><strong>Partially treated disease.</strong> Many patients have already taken antibiotics from a patent medicine store. This lowers the yield of Gram stain and culture but does not make the CSF useless. Cell count, protein, glucose, CrAg and PCR still help. WHO advises LP as soon as possible after admission even when antibiotics were given earlier.</li>
  </ul>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="indications-and-the-test-menu" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
    Indications and the Test Menu
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">When to consider an LP</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>Fever with headache, neck stiffness, photophobia, vomiting, confusion or reduced consciousness (suspected meningitis or encephalitis).</li>
    <li>Febrile infants and children who are drowsy, irritable, refusing feeds, or have a bulging fontanelle or a prolonged or focal seizure.</li>
    <li>Coma with fever where malaria alone does not explain the picture, or malaria is confirmed but the child is not improving.</li>
    <li>Headache in a person with advanced HIV disease (cryptococcal meningitis), or subacute headache with fever, weight loss and cranial nerve signs (tuberculous meningitis).</li>
    <li>Therapeutic drainage in cryptococcal meningitis with raised pressure (Section 9).</li>
    <li>A brief febrile seizure in a child who has recovered, is alert and looks well does not by itself need an LP. Check Hib and pneumococcal vaccination status and examine carefully for meningism.</li>
  </ul>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">What to ask the laboratory for</strong>
  <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
  <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
  <th class="py-2 pr-3 font-semibold">Test</th><th class="py-2 pr-3 font-semibold">Why it matters</th><th class="py-2 pr-3 font-semibold">Notes</th>
  </tr></thead>
  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
  <tr class="align-top"><td class="py-2 pr-3">Opening pressure</td><td class="py-2 pr-3">Raised in many bacterial and most severe cryptococcal cases.</td><td class="py-2 pr-3">See Section 9.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Cell count and differential</td><td class="py-2 pr-3">Neutrophils suggest bacterial; lymphocytes suggest viral, TB or fungal.</td><td class="py-2 pr-3">Strong WHO recommendation. Process promptly.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Protein and glucose, with a paired blood glucose</td><td class="py-2 pr-3">CSF glucose should be about 60% of blood glucose.</td><td class="py-2 pr-3">Strong WHO recommendation. Send the blood glucose from the same time.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Gram stain</td><td class="py-2 pr-3">Quick pointer to the organism.</td><td class="py-2 pr-3">Strong WHO recommendation. Yield falls after antibiotics.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Culture and susceptibility</td><td class="py-2 pr-3">Gold standard for bacterial identification and resistance.</td><td class="py-2 pr-3">Not replaced by PCR. Add blood cultures where available.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">PCR for bacterial pathogens</td><td class="py-2 pr-3">Useful when antibiotics were given first.</td><td class="py-2 pr-3">In outbreaks NCDC routes CSF to the state public health laboratory and onward to its national reference laboratory.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Cryptococcal antigen (CrAg) lateral flow</td><td class="py-2 pr-3">Fast and sensitive in HIV-associated cryptococcal meningitis.</td><td class="py-2 pr-3">Test CSF; serum CrAg is useful when LP cannot be done.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Xpert MTB/RIF Ultra</td><td class="py-2 pr-3">WHO 2025 recommends a low-complexity automated NAAT such as Xpert Ultra on CSF as the first test for TB meningitis.</td><td class="py-2 pr-3">Needs adequate volume. A negative result does not exclude TB meningitis.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">CSF lactate (if available)</td><td class="py-2 pr-3">WHO conditional recommendation, before antibiotics.</td><td class="py-2 pr-3">Helps separate bacterial from viral.</td></tr>
  </tbody></table></div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="can-i-do-this-lp-contraindication-checks-without-ct" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
    Can I Do This LP? Contraindication Checks Without CT
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">WHO&rsquo;s 2025 meningitis guideline gives a clear framework for children over 1 month, adolescents and adults. Cranial imaging should not be done routinely. LP should be done as soon as possible, preferably before antibiotics, unless a contraindication or reason for deferral is present. Where CT is not readily accessible, <strong>defer the LP if any of the following is present, until it has resolved</strong>:</p>
  <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
  <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
  <th class="py-2 pr-3 font-semibold">Criterion</th><th class="py-2 pr-3 font-semibold">Bedside check</th><th class="py-2 pr-3 font-semibold">Practical notes</th>
  </tr></thead>
  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
  <tr class="align-top"><td class="py-2 pr-3">Glasgow Coma Score below 10</td><td class="py-2 pr-3">Score eye, verbal and motor responses yourself, and record them. Use the paediatric GCS or Blantyre scale for children according to your unit&rsquo;s practice.</td><td class="py-2 pr-3">If you need painful stimulation to assess consciousness, treat the patient as below the threshold. Re-score before every decision.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Focal neurological signs</td><td class="py-2 pr-3">Look for weakness or drift of an arm or leg, unequal tone or reflexes, speech disturbance, gaze preference, visual field loss.</td><td class="py-2 pr-3">These suggest a mass lesion such as abscess or empyema, which meningitis can accompany.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Cranial nerve deficits</td><td class="py-2 pr-3">Pupil size and reaction, eye movements (lateral gaze failure from a sixth nerve palsy), ptosis, facial asymmetry.</td><td class="py-2 pr-3">Neck stiffness is not a cranial nerve sign. Unequal or fixed pupils are an urgent warning.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Papilloedema</td><td class="py-2 pr-3">Fundoscopy in a darkened room, with dilation if no contraindication.</td><td class="py-2 pr-3">Absence does not exclude raised pressure, especially early. If you cannot examine the fundus, record that it was not seen; do not record it as normal.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">New-onset seizures (adults)</td><td class="py-2 pr-3">Ask about any seizure during this illness.</td><td class="py-2 pr-3">In children, a new isolated seizure with no other at-risk feature does not by itself require imaging or deferral.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Severe immunocompromise</td><td class="py-2 pr-3">Organ transplant, heavy immunosuppressive treatment.</td><td class="py-2 pr-3"><strong>Exception:</strong> a person with HIV and suspected first-episode cryptococcal meningitis should have a prompt LP with opening pressure and rapid CrAg.</td></tr>
  </tbody></table></div>
  </div>
  <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
  <p class="font-brand text-sm font-semibold mb-3">Stop Signs Before the Needle</p>
  <ul class="space-y-2">
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Signs of impending herniation:</strong> low pulse with high blood pressure and irregular breathing, abnormal posturing, a rapidly falling GCS, unequal or poorly reactive pupils. Do not do an LP. Give antibiotics and call for senior or neurosurgical help.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Shock or severe sepsis, respiratory failure, or a spreading purpuric rash:</strong> resuscitate and treat as meningococcal septicaemia. The LP can wait.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Skin or soft tissue infection at the puncture site.</strong></span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Uncorrected coagulopathy</strong> (Section 4).</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Suspected spinal cord compression or major spinal deformity,</strong> and patient refusal after explanation.</span></li>
  </ul>
  </div>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">If you defer the LP</strong>
  <ol class="list-decimal pl-5 space-y-1.5 text-sm">
    <li>Draw blood cultures if available, plus malaria test, blood glucose and full blood count. These take minutes and must not delay treatment.</li>
    <li>Start intravenous ceftriaxone (or cefotaxime) at once. If there is no IV access, give intramuscular ceftriaxone and keep trying for a line. Aim to treat within an hour of suspecting bacterial meningitis.</li>
    <li>Give dexamethasone with the first antibiotic dose where WHO advises it (Section 11).</li>
    <li>Recheck GCS, pupils and vital signs often. If the deferral criteria resolve, do the LP. If CT or neurosurgical care exists elsewhere, arrange transfer without stopping treatment.</li>
    <li>A late LP still helps: cell count, glucose, protein, CrAg and Xpert Ultra remain informative after antibiotics, even if culture is less likely to grow.</li>
  </ol>
  </div>
  <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
  <p class="font-brand text-sm font-semibold">Guideline Watch: which pre-LP criteria?</p>
  <p class="text-sm">Older guidance, including the IDSA 2004 approach built on a 2001 trial, listed more triggers than WHO: age 60 or over, a history of CNS disease, seizure within a week, and inability to follow commands or answer questions. WHO 2025 uses six criteria, written for settings that cannot scan. If your hospital protocol differs, follow the stricter one and remember two limits that apply to all of them. A normal CT does not exclude raised intracranial pressure or herniation, and delay while arranging a scan costs lives in bacterial meningitis.</p>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="other-contraindications-and-bleeding-risk" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
    Other Contraindications and Bleeding Risk
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li><strong>Platelets and clotting.</strong> The 2026 Association of British Neurologists guidance suggests platelets above 40 &times; 10<sup>9</sup>/L and an INR below 1.5 (below 2.0 in an urgent case) as the usual thresholds for LP. It advises against routine blood tests in people with no bleeding risk.</li>
    <li><strong>When there is no laboratory in time.</strong> Do not hold an urgent LP for a result you cannot get. Look instead for clues: petechiae or purpura, bruising, bleeding gums or nose, known liver disease or heavy alcohol use, warfarin or other anticoagulants, severe malnutrition with oedema. If any are present, weigh the risk, give antibiotics and defer the LP until clotting is known.</li>
    <li><strong>Aspirin or other antiplatelet drugs</strong> alone should not delay an urgent LP.</li>
    <li><strong>Warfarin:</strong> check the INR. Heparins and direct oral anticoagulants need timing that follows your hospital protocol.</li>
    <li><strong>Infection at the site, back deformity</strong> that makes the interspace inaccessible, and <strong>patient refusal</strong> are further reasons not to proceed. WHO&rsquo;s cryptococcal guideline lists major spinal deformity and refusal as the contraindications that remain even when pressure is raised.</li>
  </ul>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="preparation-and-equipment" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
    Preparation and Equipment
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before you start</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>Confirm the indication and run through the Section 3 checklist. Write down the GCS, pupils and any focal signs.</li>
    <li>Check a bedside blood glucose and draw blood cultures. Take blood for glucose in a fluoride tube if your laboratory needs one, to pair with the CSF.</li>
    <li>Have the first dose of antibiotic (and dexamethasone, if indicated) drawn up and cannulated <strong>before</strong> the LP, so that it goes in the minute the needle is out. If the procedure is not underway within minutes, give the antibiotic first.</li>
    <li>Explain, obtain consent from the patient or relative, and use the script in Section 12.</li>
    <li>You need a competent assistant to hold the patient in position and watch breathing, and a second person if the patient is a child or restless.</li>
  </ul>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Equipment</strong>
  <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
  <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
  <th class="py-2 pr-3 font-semibold">Item</th><th class="py-2 pr-3 font-semibold">Specification</th><th class="py-2 pr-3 font-semibold">If it is not available</th>
  </tr></thead>
  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
  <tr class="align-top"><td class="py-2 pr-3">Spinal needle (adult)</td><td class="py-2 pr-3">22 G, about 9 cm. An atraumatic (pencil-point) needle is preferred.</td><td class="py-2 pr-3">A cutting needle (Quincke) works. Use the finest gauge available and align the bevel with the dural fibres.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Spinal needle (child)</td><td class="py-2 pr-3">Length by height: 2 cm if under 50 cm (preterm); 3 cm for 50 to 80 cm (under 2 years); 4 cm for 80 to 120 cm (2 to 5 years); 5 cm for 120 to 150 cm (5 to 12 years); 6 cm for 150 to 180 cm (over 12 years).</td><td class="py-2 pr-3">Choose the shortest needle that reaches. Do not use an adult needle in an infant.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Antiseptic and drapes</td><td class="py-2 pr-3">Chlorhexidine or povidone-iodine, sterile drape or towels.</td><td class="py-2 pr-3">Let the antiseptic dry fully.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Local anaesthetic</td><td class="py-2 pr-3">1% lidocaine, 5 mL syringe, 25 to 30 G needle.</td><td class="py-2 pr-3">Check the concentration. Maximum 4.5 mg per kg of plain lidocaine.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Manometer</td><td class="py-2 pr-3">Spinal manometer with three-way tap.</td><td class="py-2 pr-3">Sterile IV extension set or giving-set tubing held vertically against a ruler (Section 9).</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Collection tubes</td><td class="py-2 pr-3">3 or 4 sterile, leak-proof, screw-cap tubes, numbered in order.</td><td class="py-2 pr-3">Sterile universal bottles.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Rapid tests</td><td class="py-2 pr-3">Glucometer, malaria RDT, CrAg lateral flow if available.</td><td class="py-2 pr-3">Laboratory-based equivalents.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Safety</td><td class="py-2 pr-3">Sterile gloves, mask, eye protection, sharps box.</td><td class="py-2 pr-3">Never skip sterile gloves or a mask.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Resuscitation</td><td class="py-2 pr-3">Oxygen, suction, bag-valve-mask, IV access, hypertonic saline or mannitol if stocked.</td><td class="py-2 pr-3">Know where help is before you begin.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Ultrasound (optional)</td><td class="py-2 pr-3">Low-frequency curvilinear probe, or linear probe in thin patients and children.</td><td class="py-2 pr-3">Landmark technique (Section 6).</td></tr>
  </tbody></table></div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="positioning-landmarks-and-anaesthesia" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
    Positioning, Landmarks and Anaesthesia
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Position</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li><strong>Lateral decubitus</strong> with the back at the edge of the bed, perpendicular to it, and the hips and shoulders stacked vertically. Flex the spine fully by curling the knees to the chest and the chin down. Place the back at the edge of the bed and the operator&rsquo;s dominant hand at the caudal end. This is the position for measuring opening pressure.</li>
    <li><strong>Sitting</strong>, leaning forward over a pillow or table, widens the spaces between the spinous processes and is easier in obese adults. In term infants, sitting with hips flexed is the best tolerated position.</li>
    <li><strong>Infants:</strong> do not flex the neck. It can obstruct the airway. Keep the infant warm and monitored with a pulse oximeter.</li>
  </ul>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Landmarks</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>Draw an imaginary line between the top of the iliac crests (Tuffier&rsquo;s line). It crosses the spine at about the L3&ndash;L4 interspace or the L4 spinous process. Aim for L3&ndash;L4 or L4&ndash;L5.</li>
    <li>The spinal cord ends around L1&ndash;L2 in adults and about L3 at birth. Never go above L3&ndash;L4 in an adult, and use the lowest accessible interspace in a young infant.</li>
    <li>Palpation alone is unreliable. In one review of studies, landmark-only LP failed or was traumatic in roughly 28% of cases. Obese patients benefit most from ultrasound: it more than doubles success compared with palpation alone. A bedside ultrasound marks the midline and the interspace; mark with the patient already in the final position and do not let them move afterwards.</li>
  </ul>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Local anaesthesia</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>Infiltrate skin and the tissue along the needle track with 1% lidocaine using a 25 to 30 G needle. Wait one to two minutes.</li>
    <li>Infants: oral sucrose helps. Older children: nitrous oxide may be available, but it can alter pressure readings if you are measuring opening pressure.</li>
    <li>Do not sedate a patient with reduced consciousness or raised pressure to make the procedure easier. A calm, well-held patient and a good explanation work better than sedation.</li>
  </ul>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="step-by-step-technique" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
    Step-by-Step Technique
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ol class="list-decimal pl-5 space-y-1.5 text-sm">
    <li><strong>Re-check and position.</strong> Final look at pupils, GCS and the checklist. Position the patient and mark the interspace.</li>
    <li><strong>Scrub, glove and drape.</strong> Mask, sterile gloves. Clean a wide area of skin with antiseptic, allow it to dry, and drape.</li>
    <li><strong>Anaesthetise</strong> as in Section 6.</li>
    <li><strong>Insert the needle</strong> with the stylet in, in the midline, perpendicular to the skin in both planes, with a slight tilt toward the umbilicus. If the needle has a cutting bevel, point the bevel to the side when the patient is sitting, or toward the ceiling when the patient is lying, so it separates the dural fibres instead of cutting them. Atraumatic needles are used through an introducer and need no bevel alignment.</li>
    <li><strong>Advance slowly.</strong> Expect the skin, then the ligaments, then a firmer resistance, then a give or &ldquo;pop&rdquo; through the dura. In children and slim adults the space is shallow, so advance in small steps and remove the stylet to check for flow when you are near the expected depth.</li>
    <li><strong>Remove the stylet.</strong> CSF should drip or flow. If it does not, replace the stylet and advance 1 to 2 mm, or rotate the needle in quarter turns with the stylet out.</li>
    <li><strong>Measure the opening pressure</strong> if indicated (Section 9), with the patient lying on their side, relaxed and breathing normally.</li>
    <li><strong>Collect CSF</strong> by letting it drip into the numbered tubes. Do not pull on a syringe unless you must, as aspiration raises the risk of headache. Typical order: tube 1 for chemistry (protein and glucose), tube 2 for microbiology (Gram stain, culture, PCR, Xpert Ultra, CrAg), tube 3 for cell count, tube 4 spare. Collect a larger volume (about 6 mL or more in an adult) when TB meningitis is suspected and Xpert Ultra will be used.</li>
    <li><strong>Replace the stylet before you withdraw the needle.</strong> This reduces the risk of post-LP headache. Withdraw needle and stylet together.</li>
    <li><strong>Apply pressure and a dressing.</strong> Send all samples to the laboratory at once. Give the antibiotic immediately if it has not already been given.</li>
  </ol>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="technique-pitfalls-and-how-to-fix-them" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
    Technique Pitfalls and How to Fix Them
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
  <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
  <th class="py-2 pr-3 font-semibold">Problem</th><th class="py-2 pr-3 font-semibold">Likely cause</th><th class="py-2 pr-3 font-semibold">What to do</th>
  </tr></thead>
  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
  <tr class="align-top"><td class="py-2 pr-3">Needle hits bone at shallow depth</td><td class="py-2 pr-3">Off the midline, or the angle is too steep or too far cephalad (the spinous process or lamina).</td><td class="py-2 pr-3">Withdraw to the subcutaneous tissue, re-find the midline and the angle, and redirect. Do not push.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Needle hits bone deeper</td><td class="py-2 pr-3">Contact with the lamina or vertebral body, often because the needle is too lateral.</td><td class="py-2 pr-3">Withdraw and redirect, a little more cephalad.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">No CSF at the expected depth</td><td class="py-2 pr-3">Needle tip not yet through the dura, tip against a nerve root, stylet not fully out, or poor flexion.</td><td class="py-2 pr-3">Replace the stylet and advance 1 to 2 mm, or rotate the needle. If that fails, reposition the patient and try again.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Shooting pain or tingling down a leg</td><td class="py-2 pr-3">Needle touching a nerve root.</td><td class="py-2 pr-3">Stop and withdraw slightly. Redirect to the opposite side. Never inject or push through.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Slow flow</td><td class="py-2 pr-3">Needle partly against a nerve root, low CSF pressure, or poor positioning.</td><td class="py-2 pr-3">Rotate the needle, relax and straighten the legs, check position. Slow aspiration of a small volume is an option but raises headache risk.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Blood-stained CSF</td><td class="py-2 pr-3">Traumatic tap, or true subarachnoid haemorrhage.</td><td class="py-2 pr-3">Compare tubes: a traumatic tap clears from tube 1 to the last tube. Count red cells in the first and last tubes. Correct the white cell count and interpret with the differential.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Repeated failure</td><td class="py-2 pr-3">Poor landmarks, obesity, degenerative spine, restless child.</td><td class="py-2 pr-3">Change to sitting, try a different interspace, use ultrasound, or hand over to a more experienced operator. Each extra attempt increases trauma, and antibiotics must not wait.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Post-LP headache later</td><td class="py-2 pr-3">Large or cutting needle, or multiple punctures.</td><td class="py-2 pr-3">Use the thinnest or an atraumatic needle (Section 12).</td></tr>
  </tbody></table></div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="opening-pressure-and-therapeutic-lp" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
    Opening Pressure and Therapeutic LP
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Measuring it</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>Normal opening pressure in adults and children over 8 years is roughly 6 to 25 cmH<sub>2</sub>O (60 to 250 mmH<sub>2</sub>O). In HIV-associated cryptococcal meningitis, WHO defines raised pressure as 25 cmH<sub>2</sub>O or above.</li>
    <li>Measure with the patient on their side, legs extended and relaxed, neck neutral, breathing normally. Let the column rise, then settle and swing with breathing. Read the top of the stable column in cmH<sub>2</sub>O (1 cmH<sub>2</sub>O is about 10 mmH<sub>2</sub>O). A crying child or a straining adult gives a falsely high reading.</li>
    <li><strong>Improvised manometer:</strong> attach a sterile IV extension set or giving set, hold it vertical, and read the height of the column above the needle on a ruler. Agreement between improvised measurements and standard spinal manometers has varied between studies, and a 2026 review calls for wider access to proper spinal manometers. An approximate reading is still better than none in cryptococcal meningitis.</li>
  </ul>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cryptococcal meningitis in advanced HIV</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>WHO&rsquo;s 2022 cryptococcal guideline holds that raised intracranial pressure does not contraindicate LP when cryptococcal meningitis is suspected. Measure pressure, send CSF CrAg, and use serum CrAg when LP cannot be done.</li>
    <li>If the pressure is 25 cmH<sub>2</sub>O or above, or there are symptoms of raised pressure (headache, vomiting, visual loss, drowsiness), drain CSF with the same needle. A common target is to halve the opening pressure or bring it below 20 cmH<sub>2</sub>O. Southern African guidance, where no manometer is available, advises removing about 20 to 30 mL of CSF in a patient with signs of raised pressure. Repeat if symptoms or pressure return. Follow your national or hospital protocol for the exact limits.</li>
    <li>Antifungal regimens are in the HIV and cryptococcal guides; this section covers the needle only.</li>
  </ul>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="csf-handling-and-interpretation" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
    CSF Handling and Interpretation
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Handling</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>Deliver the samples to the laboratory immediately. Cell counts fall if the sample stands, because cells lyse or stick to the tube.</li>
    <li>Label each tube in order, with the patient&rsquo;s name, time and site. Send the paired blood glucose.</li>
    <li>For TB meningitis, a larger volume improves yield on Xpert Ultra: detection was higher with 6 mL or more in one study of HIV-positive adults. A negative Xpert does not exclude TB meningitis, and strongly suspected cases are treated without waiting.</li>
    <li>In an outbreak, follow NCDC&rsquo;s CSF collection and sample transport annexes and send CSF to the state public health laboratory.</li>
  </ul>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Interpretation (use together with the clinical picture)</strong>
  <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
  <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
  <th class="py-2 pr-3 font-semibold">Condition</th><th class="py-2 pr-3 font-semibold">Typical CSF findings</th><th class="py-2 pr-3 font-semibold">Key tests and notes</th>
  </tr></thead>
  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
  <tr class="align-top"><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">Clear. 0 to 5 cells per &micro;L in adults (higher in infants). Protein 20 to 45 mg/dL (0.2 to 0.45 g/L). Glucose about 45 to 80 mg/dL (2.5 to 4.4 mmol/L), around 60% of blood glucose.</td><td class="py-2 pr-3">Use age-appropriate ranges in infants and young children.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Bacterial</td><td class="py-2 pr-3">Often cloudy. Neutrophils, often thousands. Protein usually above 100 mg/dL (above 1 g/L). Glucose low, below 40 mg/dL (2.2 mmol/L), or CSF-to-blood ratio below about 0.4.</td><td class="py-2 pr-3">Gram-positive diplococci: pneumococcus. Gram-negative diplococci: meningococcus. Gram-negative coccobacilli: <em>H. influenzae</em>. Gram-positive bacilli: <em>Listeria</em>. Glucose is normal in about half of cases, so do not rely on it alone.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Viral</td><td class="py-2 pr-3">Usually 100 to 1000 cells per &micro;L, lymphocytes (neutrophils early). Protein mildly raised. Glucose normal.</td><td class="py-2 pr-3">PCR where available. Can mimic partly treated bacterial disease early on.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Tuberculous</td><td class="py-2 pr-3">Clear to cloudy. Lymphocytes or a mixed picture. Protein 100 to 200 mg/dL or higher. Glucose low, below about 40 to 50 mg/dL.</td><td class="py-2 pr-3">Xpert Ultra on a large volume. AFB smear is insensitive. Treat on suspicion.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Cryptococcal</td><td class="py-2 pr-3">Few or no cells (may be normal in advanced HIV). Protein normal to mildly raised. Glucose normal or low.</td><td class="py-2 pr-3">CrAg on CSF and serum. Opening pressure is often high.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Partly treated bacterial</td><td class="py-2 pr-3">May look lymphocytic, glucose and protein still abnormal.</td><td class="py-2 pr-3">Gram stain and culture yield fall. PCR, cell count, protein and glucose still help.</td></tr>
  </tbody></table></div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Traumatic tap</strong>
  <p class="text-sm">Blood in the CSF raises the white cell count. A common correction is to subtract about 1 white cell for every 700 to 1000 red cells, though different laboratories use different factors. Interpret the count with the differential and the clinical picture, and compare red cell counts between the first and last tubes.</p>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="treatment-does-not-wait-for-the-lp" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
    Treatment Does Not Wait for the LP
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>WHO&rsquo;s principle is to collect blood cultures and do the LP before antibiotics where this is possible without delay. <strong>Any delay in diagnostic tests must not delay treatment.</strong> The first hour after suspecting bacterial meningitis is the target window.</li>
    <li>Empiric first-line treatment is intravenous ceftriaxone or cefotaxime. During meningococcal or pneumococcal epidemics ceftriaxone is preferred, intramuscularly if IV access is not immediately possible. Chloramphenicol with ampicillin or benzylpenicillin is an option only when neither cephalosporin is available. Add ampicillin or amoxicillin for risk of <em>Listeria</em> (age over 60, pregnancy, advanced HIV, diabetes, immunosuppression). During meningococcal epidemics, WHO recommends 5 days of ceftriaxone.</li>
    <li>Where an LP can be done, give corticosteroids (dexamethasone is the usual choice) with the first dose of antibiotic in suspected bacterial meningitis, and stop them if the CSF does not look bacterial. WHO recommends against routine steroids during meningococcal epidemics, and they should not be given in cerebral malaria. Where an LP cannot be done, steroids may be considered when bacterial meningitis is strongly suspected.</li>
    <li>Test for malaria in every febrile child with altered consciousness. Treat malaria and meningitis at the same time when both are possible, and do the LP once it is safe.</li>
    <li>Before referral, give a first parenteral dose of antibiotic if bacterial meningitis is strongly suspected and the transfer will be delayed.</li>
  </ul>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="complications-aftercare-and-consent" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
    Complications, Aftercare and Consent
  </h2>
  <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
  <p class="font-brand text-sm font-semibold mb-3">Complications to Recognise Early</p>
  <ul class="space-y-2">
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Cerebral herniation:</strong> worsening headache, vomiting, falling GCS, unequal or sluggish pupils, slow pulse and high blood pressure. Call for help, lay the patient with the head raised about 30 degrees, secure the airway and give oxygen. WHO lists hypertonic saline or mannitol as a temporary measure for impending herniation. Arrange urgent senior and neurosurgical help.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Spinal or epidural haematoma:</strong> rare. New severe back pain, leg weakness, numbness or urinary retention after an LP is an emergency. Refer at once.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Meningitis after LP:</strong> rare, and prevented by sterile technique.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Persistent post-LP headache</strong> that is severe or lasts more than a few days: refer for review, including consideration of an epidural blood patch.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Diplopia</strong> days later, from a sixth cranial nerve palsy after low pressure: usually settles, but tell the patient to report it.</span></li>
  </ul>
  </div>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">After the procedure</strong>
  <ul class="list-disc pl-5 space-y-1.5 text-sm">
    <li>Monitor pulse, blood pressure, GCS and pupils at regular intervals for several hours, more often if the patient was borderline.</li>
    <li>Routine bed rest does not prevent headache. Let the patient lie flat if they are more comfortable, drink fluids, and get up when ready.</li>
    <li>Common minor effects: local back pain and a mild headache. Treat with paracetamol.</li>
    <li>Atraumatic needles lower the risk. In a pooled analysis of randomised trials, post-LP headache occurred in roughly 4% with atraumatic needles against about 11% with conventional needles. Needle gauge, position and bed rest made no clear difference.</li>
    <li>Document the indication, the checks done, GCS, position, level, needle type and gauge, number of attempts, opening pressure, appearance, volumes, samples sent, complications and the time antibiotics were given.</li>
  </ul>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Consent: what to say</strong>
  <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">&ldquo;Your relative may have an infection around the brain. The only way to find out which germ is causing it, and to choose the right treatment, is to test the fluid around the spinal cord. I will numb the skin and put a thin needle in the lower back, below the end of the spinal cord. It takes a few minutes. Treatment will not wait for this test. A headache afterwards is common and usually settles.&rdquo;</p>
  <p class="text-sm">Relatives sometimes fear that an LP can paralyse or kill. Listen to the fear, answer it plainly, and do not argue. For a patient who cannot consent, follow your hospital policy on surrogate consent.</p>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="special-situations" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
    Special Situations
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
  <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
  <th class="py-2 pr-3 font-semibold">Situation</th><th class="py-2 pr-3 font-semibold">What changes</th>
  </tr></thead>
  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
  <tr class="align-top"><td class="py-2 pr-3">Children over 1 month</td><td class="py-2 pr-3">Same WHO criteria. Needle length by height. Sitting position for term infants. No neck flexion in infants. Aim L3&ndash;L4 or L4&ndash;L5. Normal cell count and protein run higher in infants.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Neonates under 1 month</td><td class="py-2 pr-3">Outside the WHO guideline scope. Use your neonatal protocol and the most experienced operator. In preterm babies use L4&ndash;L5, in term babies L3&ndash;L4.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Advanced HIV disease</td><td class="py-2 pr-3">Headache needs CrAg and a prompt LP with opening pressure. Do not defer for raised pressure alone. Add TB testing on CSF.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Sickle cell disease</td><td class="py-2 pr-3">Higher risk of pneumococcal meningitis. Treat early. Same LP criteria apply.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Pregnancy</td><td class="py-2 pr-3">Not a contraindication. Use the lateral position. Add amoxicillin or ampicillin to empiric treatment for <em>Listeria</em>.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Obesity, degenerative spine</td><td class="py-2 pr-3">Sitting position, longer needle, ultrasound mapping, or help from an anaesthetist.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">Bloody tap with suspected subarachnoid haemorrhage</td><td class="py-2 pr-3">Compare tubes and involve a senior. This is a different pathway from meningitis.</td></tr>
  <tr class="align-top"><td class="py-2 pr-3">CSM outbreak</td><td class="py-2 pr-3">Collect CSF from as many suspected cases as practical and send it to the state public health laboratory, but never delay antibiotics. Do not give routine steroids once meningococcus is the identified cause.</td></tr>
  </tbody></table></div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="videos-and-learning-resources" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
    Videos and Learning Resources
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Core technique videos</strong>
  <div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://pubmed.ncbi.nlm.nih.gov/17005943/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NEJM Videos in Clinical Medicine: Lumbar Puncture</a> &ndash; the standard teaching video. The video itself may need institutional access.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.mededportal.org/doi/10.15766/mep_2374-8265.326" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">MedEdPORTAL: Lumbar Puncture Step by Step</a> &ndash; a peer-reviewed video tutorial with a checklist.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=-X6vWG51aXE" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Lumbar Puncture Made Easy for OSCE</a> &ndash; a short stepwise demonstration.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=WpXGUn7eGZE" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Lumbar Puncture Tutorial</a> &ndash; tutorial-style demonstration.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=FHm_j22oBNo" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Spinal Tap (Lumbar Puncture)</a> &ndash; another view of the full procedure.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=P7XsOgjSr6g" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Lumbar Puncture Demonstration</a> &ndash; demonstration of the steps and equipment.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=7tcrSd5lLoc" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">How to do a lumbar puncture</a> &ndash; general technique.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=-NWJ_iQgxTc" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">How to perform a lumbar puncture in the emergency department</a> &ndash; emergency setting, with indications and contraindications.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://geekymedics.com/lumbar-puncture-osce-guide/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics: Lumbar Puncture (LP) OSCE guide</a> &ndash; checklist-style walk-through of the procedure.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://app.geekymedics.com/osce-stations/lumbar-puncture-explanation/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics: Lumbar puncture explanation station</a> &ndash; practise the consent conversation. May need a subscription.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://oxfordmedicaleducation.com/clinical-skills/procedures/lumbar-puncture/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Oxford Medical Education: Lumbar puncture</a> &ndash; stepwise guide with the key steps.</div>
  </div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Children and infants</strong>
  <div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://dontforgetthebubbles.com/?p=31106" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Don&rsquo;t Forget the Bubbles: How to perform a lumbar puncture</a> &ndash; positioning and technique in infants and children, with video.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.rch.org.au/clinicalguide/guideline_index/lumbar_puncture_guideline/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Royal Children&rsquo;s Hospital Melbourne: Lumbar puncture guideline</a> &ndash; indications, positioning, needles, and post-procedure care.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.rch.org.au/clinicalguide/forms/Lumbar_Puncture_Needles" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Royal Children&rsquo;s Hospital Melbourne: Lumbar puncture needle length by height and age</a> &ndash; the needle-length table.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.umassmed.edu/pediatrics/residency/woo-site/resources/additional-members-are-page/wooprocedurevideos/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">UMass paediatrics residency: procedure video library</a> &ndash; look for the lumbar puncture entry.</div>
  </div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Ultrasound-assisted LP</strong>
  <div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.medmastery.com/magazine/identifying-lumbar-spine-ultrasound" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Medmastery: Identifying the lumbar spine on ultrasound</a> &ndash; a 2-minute video on spine anatomy on ultrasound.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://acep.org/sonoguide/procedures/lumbar-puncture" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">ACEP SonoGuide: Lumbar puncture</a> &ndash; scanning technique and evidence.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.emdocs.net/ultrasound-lumbar-puncture-maximize-first-pass-success-patients-large-body-habitus/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">emDocs: Ultrasound for lumbar puncture in patients with large body habitus</a> &ndash; probe choice and first-pass success in obese patients.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://jomi.com/article/588" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">JoMI: Neuraxial ultrasound before lumbar procedures</a> &ndash; a peer-reviewed video of preprocedural spine ultrasound. May need a subscription.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://cdn.mdedge.com/files/s3fs-public/issues/articles/jhm014100591.pdf" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Society of Hospital Medicine position statement: ultrasound-guided adult lumbar puncture</a> &ndash; consensus recommendations on mapping and marking.</div>
  </div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Guidelines and resource-limited practice</strong>
  <div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.ncbi.nlm.nih.gov/books/NBK614846/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">WHO guidelines on meningitis diagnosis, treatment and care (2025)</a> &ndash; the source for the Section 3 criteria and the treatment sequence.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://ncbi.nlm.nih.gov/books/n/who357088/ch2" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">WHO guidelines on cryptococcal disease in people living with HIV (2022)</a> &ndash; LP, opening pressure and CrAg in cryptococcal meningitis.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.neurocriticalcare.org/Portals/0/ENLS%205.0/Resource%20Limited/Resource%20Limited%20Meningitis%20and%20Encephalitis.pdf" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Neurocritical Care Society ENLS: Resource-limited meningitis and encephalitis</a> &ndash; a protocol for settings where CT may not be available.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://ncdc.gov.ng/themes/common/docs/protocols/51_1510449270.pdf" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NCDC: Preparedness and Response to Cerebrospinal Meningitis Outbreaks</a> &ndash; includes annexes on how to collect CSF and how to package and transport samples.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.ncdc.gov.ng/news/535/3rd-march-2026-%7C-public-health-advisory-on-cerebrospinal-meningitis-%28csm%29" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NCDC public health advisory on cerebrospinal meningitis (March 2026)</a> &ndash; the current national advisory.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://cdn.ymaws.com/www.theabn.org/resource/collection/555C7771-1AAB-41AE-AE28-211E01D3F838/26-10-ABN-LP-guidance-CORRECTION-OCT26.pdf" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Association of British Neurologists: lumbar puncture guidance (2026)</a> &ndash; platelet and INR thresholds, anticoagulants, needle choice.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://thennt.com/nnt/atraumatic-versus-conventional-needles-lumbar-puncture/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">The NNT: Atraumatic versus conventional LP needles</a> &ndash; headache numbers in plain language.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://emottawablog.com/2018/11/atraumatic-versus-conventional-lumbar-puncture-needles-a-systematic-review-and-meta-analysis/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">EMOttawa: Atraumatic versus conventional LP needles</a> &ndash; summary of the meta-analysis.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC13566448/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Under pressure: access to spinal manometers in cryptococcal meningitis</a> &ndash; why measurement matters and what to do without a manometer.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7756785/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Intracranial pressure management in HIV-associated cryptococcal meningitis, resource-constrained setting</a> &ndash; practical management where manometers are limited.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6830139" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Xpert MTB/RIF Ultra: optimal procedures for CSF</a> &ndash; how to collect and process CSF for TB meningitis testing.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.merckmanuals.com/professional/multimedia/table/cerebrospinal-fluid-findings-in-meningitis" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Merck Manual: CSF findings in meningitis</a> &ndash; comparison table.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://fpnotebook.com/Neuro/Lab/CrbrspnlFldExmntn.htm" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Family Practice Notebook: CSF examination</a> &ndash; reference values and patterns.</div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://geekymedics.com/meningitis/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics: Meningitis</a> &ndash; clinical overview. May need a subscription.</div>
  </div>
  <p class="text-sm">Video quality varies. Start with the NEJM and MedEdPORTAL videos, then use the others to see different operators, settings and needles.</p>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="key-clinical-takeaways" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">15</span>
    Key Clinical Takeaways
  </h2>
  <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-100">
  <p class="font-brand text-sm font-semibold mb-3">Key Clinical Takeaways</p>
  <ul class="space-y-2">
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Without CT, defer the LP if the GCS is below 10, or there are focal signs, cranial nerve deficits, papilloedema, new-onset seizures in an adult, or severe immunosuppression. The exception is HIV with suspected first-episode cryptococcal meningitis, who should have a prompt LP with opening pressure and CrAg.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never delay antibiotics for an LP or for CT. Draw blood cultures, give ceftriaxone, and add dexamethasone where WHO advises it, then do the LP when it is safe.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Shock, spreading purpura, infection at the site, and uncorrected coagulopathy also mean no LP for now. Aim for platelets above 40 and INR below 1.5 where you can test.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Position decides success: spine fully flexed, back square to the bed, interspace L3&ndash;L4 or L4&ndash;L5. Use ultrasound in obese or difficult backs.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use an atraumatic needle if you have one. Bevel parallel to the dural fibres for a cutting needle. Replace the stylet before withdrawing.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Measure opening pressure in the lateral position. In cryptococcal meningitis, 25 cmH<sub>2</sub>O or above means drain CSF, and an improvised manometer beats no reading.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Number your tubes, send a paired blood glucose, collect 6 mL or more when TB is suspected, and get the samples to the laboratory at once.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Interpret CSF as a pattern, not a single number. Partly treated disease still shows in cells, protein, glucose, CrAg and PCR.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Expect herniation, spinal haematoma and severe headache to be rare, but know the signs and act at once.</span></li>
    <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Explain the procedure clearly and answer family fears. A well-counselled relative makes the next LP easier.</span></li>
  </ul>
  </div>
  <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 mb-6">
    <summary class="flex items-center justify-between cursor-pointer p-4 sm:p-5 list-none">
      <span class="font-brand text-sm font-semibold text-stone-700 dark:text-stone-300">References</span>
      <svg class="w-4 h-4 text-stone-500 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <div class="px-4 sm:px-5 pb-4 sm:pb-5 space-y-1.5">
      <p class="text-[10px] leading-snug text-stone-500">1. World Health Organization. WHO guidelines on meningitis diagnosis, treatment and care. Geneva: WHO; 2025.</p>
      <p class="text-[10px] leading-snug text-stone-500">2. World Health Organization. Guidelines for diagnosing, preventing and managing cryptococcal disease among adults, adolescents and children living with HIV. Geneva: WHO; 2022.</p>
      <p class="text-[10px] leading-snug text-stone-500">3. World Health Organization. WHO consolidated guidelines on tuberculosis, Module 3: Diagnosis. Geneva: WHO; 2025 (low-complexity automated NAATs on CSF for TB meningitis).</p>
      <p class="text-[10px] leading-snug text-stone-500">4. Association of British Neurologists. Guidance on lumbar puncture, 2026 update (platelet and INR thresholds, anticoagulants, needle choice).</p>
      <p class="text-[10px] leading-snug text-stone-500">5. Nigeria Centre for Disease Control and Prevention. Preparedness and response to cerebrospinal meningitis outbreaks, 2017; and public health advisory on cerebrospinal meningitis, 3 March 2026.</p>
      <p class="text-[10px] leading-snug text-stone-500">6. Conference abstract: lessons from the 2025 cerebrospinal meningitis outbreak in Sokoto State, Nigeria. Population Medicine 2026;8(Suppl 1):A3127.</p>
      <p class="text-[10px] leading-snug text-stone-500">7. Systematic review and meta-analysis of randomised trials comparing atraumatic and conventional lumbar puncture needles. Lancet Neurology 2018; and BMJ Rapid Recommendations on lumbar puncture needles.</p>
      <p class="text-[10px] leading-snug text-stone-500">8. Society of Hospital Medicine POCUS Task Force. Position statement on ultrasound guidance for adult lumbar puncture. J Hosp Med 2019;14:591-601.</p>
      <p class="text-[10px] leading-snug text-stone-500">9. Royal Children&rsquo;s Hospital Melbourne. Clinical practice guideline: Lumbar puncture, and lumbar puncture needle length table.</p>
      <p class="text-[10px] leading-snug text-stone-500">10. New England Journal of Medicine, Videos in Clinical Medicine. Lumbar puncture. N Engl J Med 2006;355:e12.</p>
      <p class="text-[10px] leading-snug text-stone-500">11. Expert review: Xpert MTB/RIF Ultra, optimal procedures for detecting Mycobacterium tuberculosis in cerebrospinal fluid.</p>
      <p class="text-[10px] leading-snug text-stone-500">12. Reviews of intracranial pressure management and spinal manometry in HIV-associated cryptococcal meningitis in resource-limited settings (South Afr J HIV Med 2020; AIDS 2026).</p>
      <p class="text-[10px] leading-snug text-stone-500">13. Neurocritical Care Society Emergency Neurological Life Support, resource-limited protocols: meningitis and encephalitis.</p>
      <p class="text-[10px] leading-snug text-stone-500">14. Merck Manual Professional Edition. Cerebrospinal fluid findings in meningitis.</p>
    </div>
  </details>
  </div>
  </body>
  </html>
      `
  },

  {
    id: 'procedure-difficult-iv-access',
    title: 'IV Cannulation in Difficult Access',
    category: 'Procedures',
    subCategory: 'General',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>IV Cannulation in Difficult Access</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; }
  .sans { font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
  .font-brand { font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
  .quote { border-left-width: 3px; border-left-style: solid; }
  details > summary::-webkit-details-marker { display: none; }
</style>
</head>
<body class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
<div class="max-w-3xl mx-auto p-4 sm:p-6">
<div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
  <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
  <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
  <div class="relative p-6 sm:p-8">
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">PROCEDURES &middot; VASCULAR ACCESS</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">IV Cannulation in Difficult Access</h1>
    <p class="text-sm text-indigo-200">A child with gastroenteritis whose veins have collapsed, or an adult with sickle cell disease whose arms have been stuck dozens of times, can turn a ten-minute task into an hour of failed attempts while treatment waits. This guide covers whether you need a vein at all, how to predict difficulty, how to make the standard technique work, ultrasound and transillumination, and the escalation ladder: intraosseous access, external jugular, scalp vein and saphenous cutdown.</p>
  </div>
</div>

<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
  <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
  <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
    <li><a href="#why-difficult-access-is-an-everyday-problem-here" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>Why Difficult Access Is an Everyday Problem Here</span></a></li>
    <li><a href="#do-you-need-a-vein-right-now" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Do You Need a Vein Right Now?</span></a></li>
    <li><a href="#predict-difficulty-before-the-first-stick" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Predict Difficulty Before the First Stick</span></a></li>
    <li><a href="#equipment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Equipment</span></a></li>
    <li><a href="#prepare-the-patient-warmth-position-pain-and-a-calm-room" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Prepare the Patient: Warmth, Position, Pain and a Calm Room</span></a></li>
    <li><a href="#standard-technique-done-well" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Standard Technique, Done Well</span></a></li>
    <li><a href="#ultrasound-guided-peripheral-iv" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Ultrasound-Guided Peripheral IV</span></a></li>
    <li><a href="#the-escalation-ladder-when-a-peripheral-line-fails" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>The Escalation Ladder When a Peripheral Line Fails</span></a></li>
    <li><a href="#sickle-cell-patients-with-poor-veins" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Sickle Cell Patients with Poor Veins</span></a></li>
    <li><a href="#securing-using-and-looking-after-the-line" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Securing, Using and Looking After the Line</span></a></li>
    <li><a href="#videos-and-learning-resources" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Videos and Learning Resources</span></a></li>
    <li><a href="#key-clinical-takeaways" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Key Clinical Takeaways</span></a></li></ul>
</nav>

<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="why-difficult-access-is-an-everyday-problem-here" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  Why Difficult Access Is an Everyday Problem Here
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li><strong>Dehydrated and shocked children.</strong> Gastroenteritis, malaria, sepsis and severe anaemia bring children with flat, cold, collapsed veins. WHO-based protocols for severe dehydration depend on IV fluid, and the first minutes decide how well the child recovers. In a systematic review of paediatric studies, about half of peripheral cannulations were judged challenging, and many needed up to four attempts.</li>
  <li><strong>Sickle cell disease.</strong> Frequent admissions, repeated cannulation and past infusions scar and thrombose the veins. Repeated venepuncture changes vein structure over time, so the veins that worked last year may not be there now. These patients need analgesia within the hour, and the pain makes the next cannulation harder.</li>
  <li><strong>Our setting.</strong> Many wards have no ultrasound, no vein finder and few paediatric cannulas. The usual operator is a house officer or nurse working alone. The skill is to know early when to stop trying the same thing and move to the next step.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="do-you-need-a-vein-right-now" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Do You Need a Vein Right Now?
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Ask this before you reach for a tourniquet. The answer shapes how hard you push for a peripheral IV and how quickly you move to the intraosseous route.</p>
<div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
<thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
<th class="py-2 pr-3 font-semibold">Situation</th><th class="py-2 pr-3 font-semibold">What to do first</th><th class="py-2 pr-3 font-semibold">Access plan</th>
</tr></thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<tr class="align-top"><td class="py-2 pr-3">Child in shock, severe dehydration with danger signs, or coma</td><td class="py-2 pr-3">Treatment cannot wait. Prepare the IO kit while you attempt a peripheral line.</td><td class="py-2 pr-3">If a peripheral IV is not in within about 90 seconds, go to the intraosseous route or the external jugular vein. Scalp vein is a temporary option in infants, but IO is preferred.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Child with some dehydration who is drinking</td><td class="py-2 pr-3">Give ORS by mouth in small frequent amounts. No IV is needed.</td><td class="py-2 pr-3">Do not cannulate a child who can be rehydrated orally.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Severe dehydration without shock when IV access fails</td><td class="py-2 pr-3">WHO Plan C lets you give ORS by nasogastric tube while you try for access or arrange transfer.</td><td class="py-2 pr-3">Nasogastric rehydration does not give fluid fast enough for shock. Shock needs an IV or IO line.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Vaso-occlusive crisis in sickle cell disease</td><td class="py-2 pr-3">Pain relief within one hour of arrival. Do not wait for a cannula. If IV access will delay the first dose or is not possible, give the first opioid dose subcutaneously (avoid intramuscular injection). Where stocked, intranasal fentanyl is a bridge, especially in children.</td><td class="py-2 pr-3">Fluids by mouth when possible. IV fluid only at about maintenance rate, since overload risks acute chest syndrome.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Suspected bacterial meningitis and no vein yet</td><td class="py-2 pr-3">WHO advises intramuscular ceftriaxone if IV access is not immediately possible.</td><td class="py-2 pr-3">Keep trying for a line in parallel.</td></tr>
</tbody></table></div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="predict-difficulty-before-the-first-stick" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Predict Difficulty Before the First Stick
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>An Australian national vascular access position statement defines difficult intravenous access (DIVA) by reduced numbers of visible or palpable veins, poor vein quality, a history of difficult access, previous use of advanced strategies, or the patient telling you their veins are hard.</li>
  <li>If you can neither see nor feel a vein, or the patient says they are a hard stick, plan the advanced approach from the start: warmth, good positioning, a skilled operator, and ultrasound if you have it.</li>
  <li>The &ldquo;80 per cent rule&rdquo;: if you are not about 80 per cent confident of getting the line on the first attempt, ask the most experienced person available to go first. A failed first attempt makes the second harder.</li>
  <li>Limit attempts. The 2021 Infusion Nurses Society standards say to escalate to a more skilled clinician or an alternative route after two unsuccessful attempts. The Australian paediatric guidance suggests no more than two attempts per clinician before early referral, and considers a longer line after two failed attempts by competent inserters with imaging.</li>
  <li>In a child who is dying, the clock is different: about 90 seconds before moving to IO (Section 8).</li>
</ul>
</div>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
<p class="font-brand text-sm font-semibold">Guideline Watch: two different clocks</p>
<p class="text-sm">Standards written for stable patients limit you to two attempts per clinician. Guidelines for resuscitation, including the WHO-based MSF protocols used in epidemics, move to intraosseous access after about 90 seconds in a seriously ill child. Use the first clock for the sick-but-stable child or adult in pain. Use the second clock for shock, coma and cardiac arrest.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="equipment" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Equipment
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
<thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
<th class="py-2 pr-3 font-semibold">Item</th><th class="py-2 pr-3 font-semibold">Specification</th><th class="py-2 pr-3 font-semibold">If it is not available</th>
</tr></thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<tr class="align-top"><td class="py-2 pr-3">Cannulas</td><td class="py-2 pr-3">Choose the smallest gauge that fits the job. As a rule, the catheter should fill less than one third of the vein, with at least two thirds of its length inside the vein. Typical starting points: 24 to 26 G in neonates, 22 G in infants, 20 to 22 G in older children.</td><td class="py-2 pr-3">Use a smaller gauge rather than abandoning a good vein.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Tourniquet</td><td class="py-2 pr-3">Snug, not painful. A pulse should still be felt below it.</td><td class="py-2 pr-3">A strip of gauze or a glove tied loosely.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Warming</td><td class="py-2 pr-3">Warm pack or glove filled with warm (not hot) water for 3 to 5 minutes before the attempt.</td><td class="py-2 pr-3">Warm cloth. Let the limb hang down.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Light source</td><td class="py-2 pr-3">Bright LED torch or phone torch for transillumination in a dim room.</td><td class="py-2 pr-3">Penlight. A purpose-made vein finder is helpful but not necessary.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Ultrasound</td><td class="py-2 pr-3">High-frequency linear probe, sterile gel, sterile probe cover.</td><td class="py-2 pr-3">A sterile glove over the probe. Landmark technique if there is no machine.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Antiseptic and flushes</td><td class="py-2 pr-3">Chlorhexidine or povidone-iodine, 5 to 10 mL flush syringes with saline.</td><td class="py-2 pr-3">Sterile water for flushing only if saline is not available.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Securing</td><td class="py-2 pr-3">Transparent dressing, tape, splint or padded board to immobilise the limb.</td><td class="py-2 pr-3">Gauze, tape and a padded cardboard or tongue-depressor splint.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Intraosseous kit</td><td class="py-2 pr-3">Manual IO needle (16 or 18 G) or an EZ-IO drill. MSF lists a paediatric needle for 3 to under 40 kg and an adult needle for 40 kg and above.</td><td class="py-2 pr-3">A manual bone marrow needle if no IO needle. Keep the kit at the bedside in every emergency area.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Cutdown set</td><td class="py-2 pr-3">Scalpel, curved haemostat, small clamps, sutures, a cannula.</td><td class="py-2 pr-3">Used only when everything else has failed.</td></tr>
</tbody></table></div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="prepare-the-patient-warmth-position-pain-and-a-calm-room" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Prepare the Patient: Warmth, Position, Pain and a Calm Room
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General preparation</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Warm the limb. Warmth dilates veins and costs nothing. A cold, shocked child will not respond as well, but warming still helps.</li>
  <li>Hydration helps in an adult with a stable circulation. For a shocked child you need the line to give the fluid, so do not wait.</li>
  <li>Immobilise the limb. In infants, the extremity must be still. A wiggling limb defeats the best operator. Ask an assistant to hold the limb in a position that stretches the skin and holds the vein, and use your free hand to anchor the vein.</li>
  <li>In babies and small children, the foot is often easier than the hand because the hand moves more.</li>
  <li>Choose the best site before touching the skin: look and feel, then use transillumination or ultrasound if available.</li>
  <li>Explain to the parent or patient what you are doing and how many tries you will make before changing plan.</li>
</ul>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Pain and anxiety</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Give oral sucrose or allow breastfeeding for infants. For older children, distraction, a calm assistant and a parent present reduce distress.</li>
  <li><strong>EMLA cream:</strong> avoid in infants under 3 months. A meta-analysis found little or no pain relief in this age group compared with sucrose or breastfeeding. Use it with caution in G6PD deficiency, which is common in Nigeria, because prilocaine can cause methaemoglobinaemia. Do not use it in infants under 12 months who take drugs that cause methaemoglobinaemia, such as sulphonamides and dapsone. It needs about an hour to work, so it is no help in an emergency.</li>
  <li>In sickle cell crisis, treat the pain first (Section 2). Keep the patient warm and avoid cold packs on the limb. A hot-water bottle wrapped in cloth on a painful area comforts, but keep it off the limb you plan to cannulate.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="standard-technique-done-well" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Standard Technique, Done Well
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ol class="list-decimal pl-5 space-y-1.5 text-sm">
  <li><strong>Choose the vein.</strong> Straight, springy, and away from joints. Usual order: dorsal hand, forearm, then foot and ankle (including the great saphenous vein at the medial malleolus). Antecubital veins work but a flexed elbow kinks the line. In infants under about 10 months, scalp veins are a temporary alternative.</li>
  <li><strong>Apply the tourniquet</strong> just above the site. Release it as soon as the cannula is in the vein.</li>
  <li><strong>Clean the skin</strong> with antiseptic, let it dry, and use a no-touch technique. Do not re-palpate the vein after cleaning without sterile gloves.</li>
  <li><strong>Anchor the skin</strong> below the site with your free hand, pulling it taut so the vein cannot roll.</li>
  <li><strong>Enter at a shallow angle</strong> (roughly 10 to 30 degrees) with the bevel up, through the skin and then into the vein. A flash of blood in the hub tells you the needle tip is in.</li>
  <li><strong>Advance a few millimetres more</strong> so the catheter tip is also in the vein, then slide the catheter off the needle.</li>
  <li><strong>Release the tourniquet,</strong> withdraw the needle, and flush with saline. Check there is no swelling or resistance.</li>
  <li><strong>Secure and splint.</strong> Cover the insertion site with a clean dressing that lets you see the skin. Splint the limb so the child cannot bend it. Write the date and time on the dressing.</li>
</ol>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Extra steps for flat, dehydrated veins</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Hang the limb below heart level and warm it for a few minutes. Apply the tourniquet slightly tighter than usual, but never so tight that arterial flow stops.</li>
  <li><strong>Transillumination:</strong> dim the room, hold a bright LED torch flat against the skin on the opposite side of the limb or beside the vein, and look for the veins as dark lines. This works well in the dorsum of the hand, foot and scalp of infants. Small randomised studies and case reports support transillumination in infants and children.</li>
  <li><strong>Tourniquet-infusion technique</strong> (adults): place a small distal cannula, apply a tourniquet above it, and run fluid in under pressure so that larger veins distend and a larger cannula can be placed.</li>
  <li>If you have attempted twice and are not certain of a third, stop, and call for help or move to the next step.</li>
</ul>
</div>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
<p class="font-brand text-sm font-semibold">Guideline Watch: vein-finding devices</p>
<p class="text-sm">Ultrasound clearly raises first-attempt success in children, especially when difficult access has been predicted, but it does not always raise overall success. Near-infrared vein finders showed no clear benefit overall in meta-analyses, with possible benefit in the hardest cases, and a 2024 trial of one device in adults with sickle cell disease found no reduction in the number of attempts. Do not buy a device in the hope that it solves the problem. Training and technique come first.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="ultrasound-guided-peripheral-iv" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Ultrasound-Guided Peripheral IV
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">In a systematic review of paediatric trials, ultrasound guidance improved first-attempt success (risk ratio 1.60), and in the subgroup with difficult access the benefit was larger. Overall success did not change. A scan before the first stick, by an operator who has trained, saves time in the patient you already know is difficult.</p>
<ol class="list-decimal pl-5 space-y-1.5 text-sm">
  <li><strong>Set up.</strong> Place the screen directly in your line of sight with the cannula. Use a high-frequency linear probe with a small footprint, in a sterile cover, with sterile gel. Set a depth of about 1.5 to 3 cm.</li>
  <li><strong>Scan before you prepare.</strong> Scan both arms (and the legs in young children) to find the best site. Veins compress easily with probe pressure, arteries do not and pulsate. Pick a straight segment, not too deep, away from the artery and nerve.</li>
  <li><strong>Mark the vein</strong> if you will use a static technique, or keep the probe on the vein and guide the needle in real time.</li>
  <li><strong>Choose a catheter long enough</strong> for the depth of the vein. Short catheters pull out of deep veins.</li>
  <li><strong>Aim and enter.</strong> Hold the probe still, keep the vein in the centre of the screen, and bring the needle in at a shallow angle near the probe. Follow the needle tip on the screen. Do not rely on the flash alone.</li>
  <li><strong>Advance the catheter</strong> only when you see the tip inside the lumen, then flush, confirm flow, and secure the line well. Lines placed this way fall out more easily if poorly secured.</li>
</ol>
<p class="text-sm">Training matters more than the machine. Practise on models and on easy veins before the difficult patient.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="the-escalation-ladder-when-a-peripheral-line-fails" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  The Escalation Ladder When a Peripheral Line Fails
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
<thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
<th class="py-2 pr-3 font-semibold">Step</th><th class="py-2 pr-3 font-semibold">When to use it</th><th class="py-2 pr-3 font-semibold">Key points and cautions</th>
</tr></thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<tr class="align-top"><td class="py-2 pr-3">Intraosseous (IO)</td><td class="py-2 pr-3">Seriously ill child or adult when a peripheral line cannot be placed within about 90 seconds. First choice in children.</td><td class="py-2 pr-3">Proximal tibia or distal tibia in children. Needs pressure for good flow. Remove within 24 hours. See below.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">External jugular vein (EJ)</td><td class="py-2 pr-3">Child in whom IO is not available or has failed, or where a larger bore line is needed fast.</td><td class="py-2 pr-3">Head down 30 degrees, head turned away. Right side preferred. Risk of air embolism if the head is raised. Unreliable to secure in a moving child.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Scalp vein</td><td class="py-2 pr-3">Infants under about 10 months, temporarily, when peripheral veins fail.</td><td class="py-2 pr-3">Not recommended for resuscitation by major associations. IO is preferred in an emergency.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Saphenous cutdown</td><td class="py-2 pr-3">Last resort when percutaneous, EJ and IO routes have failed or are not possible.</td><td class="py-2 pr-3">Needs surgical skill. Transverse incision just in front of the medial malleolus. Remove the catheter within 12 to 24 hours.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Central venous catheter or PICC</td><td class="py-2 pr-3">Not for the first hour of emergency resuscitation. Usually needs a specialist or imaging.</td><td class="py-2 pr-3">Higher risk of infection and thrombosis, especially in sickle cell disease (Section 9).</td></tr>
</tbody></table></div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Intraosseous access in practice</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li><strong>Indication:</strong> a seriously ill patient in whom a peripheral line cannot be placed within about 90 seconds.</li>
  <li><strong>Contraindications:</strong> a fractured or infected limb, an IO needle in the same site in the past 24 hours, recent surgery near the site. Use caution in children with oedematous malnutrition because of infection risk.</li>
  <li><strong>Site:</strong> proximal tibia, on the flat anteromedial surface a short distance below the tibial tuberosity (about 1 cm in infants, 2 to 3 cm in older children), not on the ridge and away from the growth plate. Distal tibia, about 2 to 3 cm above the medial malleolus, is the second site.</li>
  <li><strong>Technique:</strong> stabilise the leg with a rolled towel under the knee and the leg slightly rotated out. Clean the site with povidone-iodine. Insert the needle at 90 degrees to the bone with a firm twisting motion (manual) or with the drill. Stop when you feel a &ldquo;give&rdquo; as the needle enters the marrow. Remove the stylet.</li>
  <li><strong>Confirm:</strong> you may see marrow or a flash of blood in the needle, but not always. Flush with 5 to 10 mL of Ringer lactate rapidly. If it flows freely and there is no swelling around the site, the needle is in the marrow. No flush means no flow.</li>
  <li><strong>Run the infusion</strong> through the IO needle under pressure (syringe push or pressure bag). Secure the needle firmly.</li>
  <li><strong>Limit attempts</strong> to one per bone. If it fails, remove the needle and try the other leg.</li>
  <li><strong>Monitor:</strong> limb colour, swelling, pain, the infusion site, and the time since placement. Swelling in the limb means fluid is leaking outside the bone, so stop and check for compartment syndrome.</li>
  <li><strong>Remove</strong> as soon as a reliable peripheral line is in place, and no later than 24 hours. Apply pressure, and dress the site.</li>
</ul>
</div>
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
<p class="font-brand text-sm font-semibold mb-3">Warning Signs During Escalation</p>
<ul class="space-y-2">
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>No IV in a child in shock after about 90 seconds.</strong> Stop trying and place an IO line.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Swelling around an IO or IV site, a tense limb, or a cold, pale or painful limb:</strong> stop the infusion at once. Suspect extravasation and compartment syndrome and get senior help.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Head raised during EJ or neck line placement:</strong> risk of air embolism. Keep the head down and cover the hub with a finger whenever the cannula is open.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Redness or discharge at an IO or cutdown site:</strong> remove the device and review for infection.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Repeated failures in a deteriorating patient:</strong> call the most experienced colleague. Do not carry on alone.</span></li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="sickle-cell-patients-with-poor-veins" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
  Sickle Cell Patients with Poor Veins
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li><strong>Pain first.</strong> ASH 2020 recommends assessment and analgesia within one hour of arrival, with reassessment every 30 to 60 minutes. If cannulation will delay the first dose, give it by another route (Section 2). Pain control makes the patient calmer and the veins easier.</li>
  <li><strong>Keep warm, avoid cold.</strong> Offer a warm blanket and heat for comfort, and avoid cold on the limb being cannulated.</li>
  <li><strong>Use your best operator and ultrasound early.</strong> The British Society for Haematology recommends persevering with peripheral access in sickle cell disease, including ultrasound-guided cannulation, before turning to central lines.</li>
  <li><strong>Use the shortest, smallest line that does the job,</strong> and protect the veins you have. Avoid leaving cannulas in for days. Remove them when the treatment is done. Longer catheters designed for deeper veins may last longer in patients with scarred veins.</li>
  <li><strong>Fluids:</strong> prefer oral hydration. If IV fluids are needed, keep to about maintenance rate (some protocols cap total fluid at about 1.5 times maintenance). Excess fluid raises the risk of acute chest syndrome.</li>
  <li><strong>Asepsis matters.</strong> People with sickle cell disease have impaired splenic function and are at higher risk of serious infection, so use strict no-touch technique and check the site daily.</li>
  <li><strong>Central lines are a last resort.</strong> Sickle cell disease is a hypercoagulable state. In published series, between 3 and 41 per cent of central venous catheters in sickle cell disease were complicated by thrombosis. Infection is the other main problem. Avoid central lines unless the patient needs long-term access, such as regular transfusion, and then use a specialist team.</li>
  <li><strong>If IO is truly needed</strong> in a sickle cell emergency, choose a limb with no bone pain, swelling or suspected osteomyelitis, since a fractured or infected limb is a contraindication. Reserve IO for life-threatening situations and remove it within 24 hours.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="securing-using-and-looking-after-the-line" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
  Securing, Using and Looking After the Line
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Secure every line properly. A hard-won line that falls out in the night costs you the hour you saved. Splint the limb in children.</li>
  <li>Check the insertion site at least hourly in the first hours and then regularly. Look for swelling, redness, pain, and blood tracking back.</li>
  <li>If the infusion will not run, do not flush hard. Check for kinking, a closed clamp, or extravasation. A swollen site means stop, remove and re-site.</li>
  <li>Do not use a line that is leaking. Fluid that goes into tissue instead of vein can cause tissue loss, especially with irritant drugs.</li>
  <li>Remove the line when it is no longer needed. In MSF cholera protocols, the catheter can be removed once the patient has no profuse diarrhoea or vomiting, can match losses with ORS and shows no signs of dehydration after 4 to 6 hours of oral treatment. They add one caution: think about how hard it would be to get a new line in young children, the elderly and the obese if the patient deteriorates.</li>
  <li>Record the number of attempts, sites used, catheter size, and any complication. Flag the patient as difficult access in the folder so the next team can plan from the start.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="videos-and-learning-resources" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
  Videos and Learning Resources
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Core procedure videos</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://pubmed.ncbi.nlm.nih.gov/21345096/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NEJM Videos in Clinical Medicine: Intraosseous Catheter Placement in Children</a> &ndash; the standard teaching video. Full video may need institutional access.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://visualize.jove.com/22716992" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NEJM Videos in Clinical Medicine: Ultrasound-Guided Peripheral IV Placement</a> &ndash; listing for the NEJM video on ultrasound-guided peripheral IV placement.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.saem.org/cdem/education/online-education/m3-curriculum/group-emergency-department-procedures/vascular-access" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">SAEM: Vascular access, emergency department procedures curriculum</a> &ndash; links to the NEJM peripheral IV and ultrasound-guided IV videos, with flow-rate tables.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://nysora.com/mastering-difficult-iv-access-a-practical-manual-videos/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NYSORA: Mastering Difficult IV Access, video collection</a> &ndash; pediatric IV, difficult veins in the foot, ultrasound-guided saphenous cannulation, and more.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://nysora.com/iv-access/iv-access-in-pediatric-patients/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NYSORA: IV access in pediatric patients</a> &ndash; hand, foot and scalp techniques for children, with embedded videos.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://youtu.be/p9XKRftTeTM" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NYSORA video: IV in the foot of a child</a> &ndash; foot-vein technique for children.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://youtu.be/8W7DA2KHwPM" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NYSORA video: transillumination of the dorsum of the hand</a> &ndash; finding veins in the hand of a child with transillumination.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=HXnekKicGmc" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">IV Access in Babies: 4 Top Tips</a> &ndash; practical advice for chubby, sick or small babies.</div>
</div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Ultrasound-guided IV</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://coreultrasound.com/ultrasound-guided-peripheral-iv-access/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">5 Minute Sono: Ultrasound-Guided Peripheral IV Access</a> &ndash; three short videos: equipment and vein selection, technique, and securing the line.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=p-4QpxLanG0" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Ultrasound Guided Peripheral IVs in Pediatric Patients, Part 1: Why Use It?</a> &ndash; first of a four-part series.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=OUpXQg4r1s4" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Ultrasound Guided Peripheral IV Placement, step by step</a> &ndash; a simple step-by-step demonstration.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=g81sjVANuiA" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NYSORA: Difficult IV, tips for ultrasound-guided IV access</a> &ndash; technique from an expert operator.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=LTL_SaqXpZs" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NYSORA: Guide to ultrasound-guided IV access</a> &ndash; a stepwise tutorial.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=IbSnhsTxKDA" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">CoreEM: Ultrasound Guided Peripheral IV Placement</a> &ndash; short demonstration.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.nuemblog.com/blog/sonopro-tips-and-tricks-for-peripheral-iv-access" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Northwestern Emergency Medicine: SonoPro tips and tricks for peripheral IV access</a> &ndash; practical tips for beginners.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.aliem.com/pem-pearls-ultrasound-guided-peripheral-iv-access/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">ALiEM: PEM Pearls, ultrasound-guided peripheral IV access</a> &ndash; basic and advanced tips for children.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.aliem.com/aliemu-pediatric-ultrasound-peripheral-iv/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">ALiEMU: Pediatric emergency ultrasound-guided peripheral IV access course</a> &ndash; a course on vascular anatomy, technique and troubleshooting. Includes a sickle cell case.</div>
</div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Intraosseous access</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=Rer4pH3HgOc" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">IO access in a child (Cape Town Emergency Medicine)</a> &ndash; an African teaching video on IO access in a child.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=KHXSfh2ZRDM" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">EMRAP: Intraosseous access</a> &ndash; a 3-minute demonstration of site selection and technique.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=E8HNOHig-To" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Intraosseous cannulation demonstration (cadaver-based course)</a> &ndash; a demonstration on a cadaver.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/shorts/RSI2lDHCZ8U" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Live demo: EZ-IO intraosseous access</a> &ndash; short clip of the drill device.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://wikem.org/wiki/Intraosseous_access" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">WikEM: Intraosseous access</a> &ndash; site selection, needle length and procedure summary.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://medicalguidelines.msf.org/en/viewport/CHOL/english/appendix-6-intraosseous-io-needle-insertion-in-children-25297231.html" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">MSF Medical Guidelines: Intraosseous needle insertion in children</a> &ndash; written for resource-limited settings, with manual and EZ-IO methods.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pch.health.wa.gov.au/For-health-professionals/Emergency-Department-Guidelines/Intraosseous-access" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Perth Children&rsquo;s Hospital: Intraosseous access guideline</a> &ndash; indications, sites, complications and monitoring.</div>
</div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">External jugular, scalp vein and cutdown</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=aGIwUGEgSZA" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">External Jugular Vein Cannulation</a> &ndash; demonstration of the technique.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=OIKzfZXs110" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">External jugular cannulation in a neonate and an infant</a> &ndash; paediatric demonstration.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=NTqk4LaS7Ys" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">How to Cannulate the External Jugular Vein: step-by-step guide</a> &ndash; stepwise guide for first responders.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=1G-Cqf7gYJE" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">EJV cannulation in 5 minutes</a> &ndash; when and how, with sterile technique.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.rchsd.org/documents/2014/02/external-jugular-vein" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Standardised procedure: external jugular vein cannulation in children</a> &ndash; positioning, equipment and steps.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.vumc.org/global-surgical-atlas/sites/default/files/public_files/PDF/Cutdown%20for%20Venous%20Access.pdf" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Open Manual of Surgery in Resource-Limited Settings: Cutdown for venous access</a> &ndash; step-by-step venous cutdown written for resource-limited settings.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.rch.org.au/trauma-service/manual/circulation-procedures/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Royal Children&rsquo;s Hospital Melbourne: circulation procedures (IO and cutdown)</a> &ndash; IO and saphenous cutdown in injured children.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://statpearls.com/point-of-care/20185" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">StatPearls: Saphenous vein cutdown</a> &ndash; anatomy, technique and complications.</div>
</div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Guidelines and evidence</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://medicalguidelines.msf.org/en/viewport/CHOL/english/5-3-severe-dehydration-32409706.html" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">MSF: Severe dehydration (cholera guideline)</a> &ndash; IV rehydration protocol and the 90-second rule for EJ or IO access.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.health.gov.za/wp-content/uploads/2023/04/POCKET-BOOK-OF-HOSPITAL-CARE-FOR-CHILDREN-2016.pdf" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">South African adaptation of the WHO Pocket Book of Hospital Care for Children</a> &ndash; emergency triage and the access steps for sick children.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://cnsa.org.au/implement/vascular-access-devices/section-2-vessel-health-and-preservation/patients-with-difficult-intravenous-access.html" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Australian national position statement: difficult intravenous access</a> &ndash; risk factors, attempts, and escalation.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9321813" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Systematic review: ultrasound-guided versus landmark PIV in children</a> &ndash; meta-analysis of paediatric trials.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://cdn.mdedge.com/files/s3fs-public/jhm01612742.PDF" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Techniques and technologies to improve paediatric PIV outcomes</a> &ndash; Journal of Hospital Medicine review covering ultrasound and near-infrared.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://ivteam.com/?p=264105" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Vein finder trial in adults with sickle cell disease</a> &ndash; summary of a randomised trial of a vein visualisation device in vaso-occlusive crisis.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://doaj.org/article/ba7f40950b1f45c892ad7ad1ae33495c" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Randomised study: LED transillumination vein finder in children</a> &ndash; transillumination for paediatric cannulation.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.nepjol.info/index.php/JSAN/article/view/13556" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Case report: transillumination with a torch in an infant</a> &ndash; palm transillumination with an ordinary torch.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://b-s-h.org.uk/guidelines/guidelines/prevention-and-management-of-indwelling-catheter-related-thrombosis-in-sickle-cell-disease-and-thalassaemia" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">British Society for Haematology: catheter-related thrombosis in sickle cell disease</a> &ndash; central line risks and advice to persevere with peripheral access.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pemcincinnati.com/blog/managing-pain-in-sickle-cell-vaso-occlusive-crises" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">PEM Cincinnati: managing pain in sickle cell vaso-occlusive crises</a> &ndash; analgesia timing and intranasal bridging while waiting for IV access.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pubmed.ncbi.nlm.nih.gov/30587535/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">EMLA in infants under 3 months: meta-analysis</a> &ndash; efficacy and safety of EMLA for venipuncture in young infants.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.msdmanuals.com/en-sg/professional/critical-care-medicine/approach-to-the-critically-ill-patient/vascular-access" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Merck Manual: Vascular access</a> &ndash; peripheral, ultrasound-guided, cutdown and central access overview.</div>
</div>
<p class="text-sm">Video quality varies. Start with the NEJM, MSF, NYSORA and 5 Minute Sono resources, then use the others to see different operators and patients.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="key-clinical-takeaways" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
  Key Clinical Takeaways
</h2>
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-100">
<p class="font-brand text-sm font-semibold mb-3">Key Clinical Takeaways</p>
<ul class="space-y-2">
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask first whether you need a vein: ORS for the child who can drink, a non-IV route for the first analgesic dose in sickle cell crisis, intramuscular ceftriaxone if suspected meningitis cannot get a line.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Predict difficulty. If you cannot see or feel a vein, or the patient says they are a hard stick, send your best operator first and use warmth and ultrasound from the start.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Stable patient: two attempts per clinician, then escalate. Child in shock or coma: about 90 seconds, then IO.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Warm the limb, immobilise it, anchor the skin, shallow angle, secure the line well, and use transillumination in infants.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ultrasound raises first-attempt success in children, especially in predicted difficult access. Near-infrared devices have not shown clear overall benefit.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>IO is the first-line rescue in a seriously ill child: proximal or distal tibia, one attempt per bone, flush to confirm, run under pressure, remove within 24 hours.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>EJ vein: head down, head turned, watch for air. Scalp veins are a temporary option in young infants. Cutdown is a last resort.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Sickle cell disease: analgesia within an hour whatever the access, oral fluids first, maintenance-rate IV only, avoid cold, avoid central lines unless truly necessary.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check the site often, stop at the first sign of swelling, and remove the line when it is no longer needed.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Record your attempts and flag difficult access for the next team.</span></li>
</ul>
</div>
<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 mb-6">
  <summary class="flex items-center justify-between cursor-pointer p-4 sm:p-5 list-none">
    <span class="font-brand text-sm font-semibold text-stone-700 dark:text-stone-300">References</span>
    <svg class="w-4 h-4 text-stone-500 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
  </summary>
  <div class="px-4 sm:px-5 pb-4 sm:pb-5 space-y-1.5">
    <p class="text-[10px] leading-snug text-stone-500">1. Infusion Nurses Society. Infusion therapy standards of practice, 2021 (Standard 34: short peripheral catheters, escalate after two unsuccessful attempts; Standard 22: vascular visualisation).</p>
    <p class="text-[10px] leading-snug text-stone-500">2. Cancer Nurses Society of Australia and partners. Patients with difficult intravenous access (DIVA): national position statement, version 1, January 2024.</p>
    <p class="text-[10px] leading-snug text-stone-500">3. Medecins Sans Frontieres. Management of a cholera epidemic: Section 5.3 Severe dehydration; Appendix 6: Intraosseous needle insertion in children. MSF Medical Guidelines.</p>
    <p class="text-[10px] leading-snug text-stone-500">4. World Health Organization. Pocket book of hospital care for children (South African adaptation, 2016): emergency triage and severe dehydration.</p>
    <p class="text-[10px] leading-snug text-stone-500">5. New England Journal of Medicine, Videos in Clinical Medicine. Intraosseous catheter placement in children. N Engl J Med 2011;364:e14. Ultrasound-guided peripheral i.v. placement. N Engl J Med 2012.</p>
    <p class="text-[10px] leading-snug text-stone-500">6. Perth Children&rsquo;s Hospital. Emergency department guideline: Intraosseous access.</p>
    <p class="text-[10px] leading-snug text-stone-500">7. Systematic review and meta-analysis of randomised trials of ultrasound-guided versus landmark peripheral intravenous catheter insertion in paediatric patients, 2022.</p>
    <p class="text-[10px] leading-snug text-stone-500">8. Systematic review and meta-analysis: techniques and technologies to improve peripheral intravenous catheter outcomes in paediatric patients. J Hosp Med 2021;16:742-750.</p>
    <p class="text-[10px] leading-snug text-stone-500">9. Systematic review and meta-analysis: utility of near-infrared light devices for paediatric peripheral intravenous cannulation. Eur J Pediatr 2016;175:1975-1988.</p>
    <p class="text-[10px] leading-snug text-stone-500">10. Randomised clinical trial of a vein visualisation device for peripheral line placement in adults with sickle cell disease. Int J Nurs Stud 2024;163:104988.</p>
    <p class="text-[10px] leading-snug text-stone-500">11. British Society for Haematology. Prevention and management of indwelling catheter-related thrombosis in sickle cell disease and thalassaemia: good practice paper, 2024.</p>
    <p class="text-[10px] leading-snug text-stone-500">12. American Society of Hematology 2020 guidelines for sickle cell disease: management of acute and chronic pain. National Heart, Lung, and Blood Institute. Evidence-based management of sickle cell disease: expert panel report, 2014.</p>
    <p class="text-[10px] leading-snug text-stone-500">13. Meta-analysis of EMLA cream for venepuncture pain in infants under 3 months. Pediatrics 2019;143(1). Manufacturer data sheets for lidocaine-prilocaine cream (G6PD deficiency, methaemoglobinaemia).</p>
    <p class="text-[10px] leading-snug text-stone-500">14. Open Manual of Surgery in Resource-Limited Settings: Cutdown for venous access. Royal Children&rsquo;s Hospital Melbourne trauma service manual: circulation procedures. StatPearls: Saphenous vein cutdown.</p>
    <p class="text-[10px] leading-snug text-stone-500">15. World Health Organization. WHO guidelines on meningitis diagnosis, treatment and care. Geneva: WHO; 2025 (intramuscular ceftriaxone where intravenous access is not immediately possible).</p>
  </div>
</details>
</div>
</body>
</html>
    `
},

];
