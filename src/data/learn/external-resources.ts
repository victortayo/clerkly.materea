import { LearningModule } from '../../types/learn';

export const EXTERNAL_RESOURCES_CONTENT: LearningModule[] = [

    {
        id: 'resources-ghmp-childbirth-video-series',
        title: 'Childbirth Video Series (GHMP)',
        category: 'External Resources',
        subCategory: 'Obstetrics',
        content: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { font-family: Georgia, 'Times New Roman', serif; }
      .sans, .font-brand { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
      .quote { border-left-width: 3px; border-left-style: solid; }
    </style>
    </head>
    <body class="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300">
    <div class="max-w-3xl mx-auto p-4 sm:p-6">
    
    <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; OBSTETRICS</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Childbirth Video Series (Global Health Media Project)</h1>
        <p class="text-sm text-indigo-200">Forty-seven short English videos that show normal birth, midwifery skills and obstetric emergencies as they are done at the bedside. Many Nigerian births happen with one attendant and limited equipment, so the solo-attendant approach in these films is close to real practice. This page groups every video by stage of care, from preparing the birth room to bleeding, tears and postnatal danger signs.</p>
      </div>
    </div>
    
    
    <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
      <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
        <li><a href="#about-this-series" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Series</span></a></li>
        <li><a href="#using-these-videos-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Using These Videos in Nigerian Practice</span></a></li>
        <li><a href="#start-here-the-full-birth-sequence" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Start Here: The Full Birth Sequence</span></a></li>
        <li><a href="#foundations-respect-preparation-and-infection-prevention" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Foundations: Respect, Preparation and Infection Prevention</span></a></li>
        <li><a href="#care-during-labor" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Care During Labor</span></a></li>
        <li><a href="#the-birth-and-the-first-hour" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>The Birth and the First Hour</span></a></li>
        <li><a href="#complications-of-labor-and-birth" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Complications of Labor and Birth</span></a></li>
        <li><a href="#bleeding-after-birth" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Bleeding After Birth</span></a></li>
        <li><a href="#tears-and-repair" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Tears and Repair</span></a></li>
        <li><a href="#supporting-skills-iv-access-fluids-and-catheter" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Supporting Skills: IV Access, Fluids and Catheter</span></a></li>
        <li><a href="#after-birth-danger-signs-and-postnatal-care" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>After Birth: Danger Signs and Postnatal Care</span></a></li>
        <li><a href="#videos-to-show-women-and-families" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Videos to Show Women and Families</span></a></li>
        <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Suggested Viewing Order</span></a></li></ul>
    </nav>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-series" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      About This Series
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Global Health Media Project is a non-profit that makes short teaching films for front-line health workers. The Childbirth Series began in 2015 with 12 videos on normal labour, birth and the first hours after delivery. A second set of 35 films followed, covering skills and complications, and it includes five videos made for women themselves. That gives 47 videos in total.</p>
      <p class="text-sm">The films model a midwifery approach, with one birth attendant working alone and speaking respectfully to the woman. They were built from WHO and Jhpiego training materials, and the series is used inside WHO&rsquo;s Essential Childbirth Care course and the Helping Mothers Survive modules. Footage was filmed in Nepal, Haiti, Ghana, Indonesia and Rwanda.</p>
      <p class="text-sm">Why it is useful: live footage of uncommon emergencies such as shoulder dystocia, breech birth, uterine balloon tamponade and aortic compression is hard for students to see on the ward.</p>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
        📖 <a href="https://globalhealthmedia.org/our-projects/childbirth-series/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Series home page</a>
        &nbsp;&middot;&nbsp;
        🔗 <a href="https://globalhealthmedia.org/topic/childbirth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Childbirth topic page (filter by language: English)</a>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="using-these-videos-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Using These Videos in Nigerian Practice
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><strong>Setting.</strong> The films show a lone midwife in a small facility. That fits primary health centres and many secondary facilities. In a teaching hospital you will usually have more hands, a theatre and a blood bank, so use the videos for technique and sequence, then follow your unit&rsquo;s escalation pathway.</li>
        <li><strong>Equipment.</strong> Some items shown may not be stocked where you work, for example the uterine balloon tamponade or the anti-shock garment. Uterine compression and aortic compression need no equipment, which makes them worth learning first.</li>
        <li><strong>Data and offline use.</strong> Each video page offers downloads. The mobile versions are listed at 25 to 50 MB, and individual use is listed at no charge, although downloading goes through the site&rsquo;s registration and checkout. The Global Health Media &ldquo;Birth &amp; Beyond&rdquo; app is available for Android and iPhone. Read the site&rsquo;s terms for video download use before sharing files.</li>
        <li><strong>Language.</strong> Narration is in English here. The wider library lists other languages, including Hausa and Yoruba, but availability differs by video, so check each video&rsquo;s page.</li>
      </ul>
      <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
        <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
        <p class="text-sm">Drugs, doses and the choice of first-line action can differ between the video, current WHO recommendations, FMOH guidance and your hospital&rsquo;s protocol. Where they differ, follow the local protocol and ask your supervisor. The videos teach technique and sequence. They do not replace the protocol of the unit you work in.</p>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="start-here-the-full-birth-sequence" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Start Here: The Full Birth Sequence
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Watch this one first. It follows a single birth from labour through the first hour after delivery, and the rest of the series expands each step.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Birth: Labor, Delivery and Early Postpartum</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Current best practice for a solo birth attendant from labour to the immediate postpartum period.</span></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="foundations-respect-preparation-and-infection-prevention" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Foundations: Respect, Preparation and Infection Prevention
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Three videos that apply to every birth, normal or not.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/respectful-care-during-labor-and-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Respectful Care During Labor and Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/preparing-the-birth-room/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preparing the Birth Room</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/preventing-infection-at-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preventing Infection at Birth</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="care-during-labor" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Care During Labor
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Assessment on arrival, monitoring, the vaginal exam, fetal position and positions the woman can use for birth.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/initial-assessment-in-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Initial Assessment in Labor</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/taking-a-blood-pressure/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Taking a Blood Pressure</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/giving-good-care-during-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving Good Care During Labor</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-vaginal-exam-in-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Vaginal Exam in Labor</a><span class="block mt-1 text-slate-500 dark:text-slate-400">The steps of the exam, what to find out, and why the woman&rsquo;s consent matters.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/listening-to-the-babys-heart-during-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Listening to the Baby&rsquo;s Heart During Labor</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-position-of-the-baby/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Position of the Baby</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/positions-for-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Positions for Birth</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="the-birth-and-the-first-hour" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      The Birth and the First Hour
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Pushing, protecting the perineum, delivering the baby and the placenta, and the care that follows straight away.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/managing-the-second-stage-of-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Managing the Second Stage of Labor</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Supporting the woman&rsquo;s pushing and what to do when progress is slow.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/preventing-tears-during-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preventing Tears During Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/birthing-the-baby/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Birthing the Baby</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Helping the mother deliver safely while keeping tearing to a minimum.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/managing-the-third-stage-of-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Managing the Third Stage of Labor</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Using medicine to prevent postpartum haemorrhage and delivering the placenta.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/examining-the-placenta/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Examining the Placenta</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/immediate-care-after-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Immediate Care After Birth</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="complications-of-labor-and-birth" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Complications of Labor and Birth
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Slow labour, cord and shoulder problems, malpresentation, twins, severe pre-eclampsia and uterine infection. Late presentation and long referral times make these conditions common reasons for a poor outcome, so practise the steps before you need them.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/prolonged-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Prolonged Labor</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/using-oxytocin-to-treat-prolonged-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Using Oxytocin to Treat Prolonged Labor</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/emergency-episiotomy/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Emergency Episiotomy</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cord-around-the-neck/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cord Around the Neck</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/stuck-shoulders/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Stuck Shoulders</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-breech-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Breech Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/assisting-the-birth-of-twins/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Assisting the Birth of Twins</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/severe-pre-eclampsia/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Severe Pre-Eclampsia</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/uterine-infection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Uterine Infection</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="bleeding-after-birth" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Bleeding After Birth
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Postpartum haemorrhage is a leading cause of maternal death in Nigeria. These seven videos run from first assessment to the escalating measures used when bleeding does not stop. The two compression techniques need no equipment.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/bleeding-after-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Bleeding After Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/managing-severe-bleeding-after-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Managing Severe Bleeding After Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/uterine-compression/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Uterine Compression</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Squeezing the uterus between your hands to control bleeding.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/aortic-compression/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Aortic Compression</a><span class="block mt-1 text-slate-500 dark:text-slate-400">A lifesaving practice to stop postpartum haemorrhage.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/uterine-balloon-tamponade/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Uterine Balloon Tamponade</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/using-an-anti-shock-garment/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Using an Anti-Shock Garment</a><span class="block mt-1 text-slate-500 dark:text-slate-400">A stretchy wrap that stabilises a woman in shock by pressing on the lower body and abdomen.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/manual-removal-of-the-placenta/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Manual Removal of the Placenta</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="tears-and-repair" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Tears and Repair
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Assess the tear first, then choose the repair. Pair these with the Suturing Techniques and Episiotomy guides in this library.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/evaluating-tears-after-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Evaluating Tears After Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/basic-features-of-suturing/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Basic Features of Suturing</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/repairing-a-perineal-tear/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repairing a Perineal Tear</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/repairing-a-labial-tear/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repairing a Labial Tear</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cervical-tears/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cervical Tears</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="supporting-skills-iv-access-fluids-and-catheter" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Supporting Skills: IV Access, Fluids and Catheter
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Skills needed for the emergencies above. The library has a second video called Inserting an IV in the Newborn Care series, so the link below is the childbirth version.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-an-iv-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting an IV</a><span class="block mt-1 text-slate-500 dark:text-slate-400">An important skill in caring for women in childbirth.</span></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/giving-iv-fluids/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving IV Fluids</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-a-urinary-catheter/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting a Urinary Catheter</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="after-birth-danger-signs-and-postnatal-care" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      After Birth: Danger Signs and Postnatal Care
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Many women go home within hours of delivery, so danger-sign teaching before discharge matters.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/danger-signs-after-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Danger Signs After Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/postnatal-care-of-mother-and-baby/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Postnatal Care of Mother and Baby</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/helping-babies-breathe-at-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Related: Helping Babies Breathe at Birth</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Newborn resuscitation, from the same project.</span></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="videos-to-show-women-and-families" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Videos to Show Women and Families
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Plain-language films addressed to the woman. They suit antenatal clinic waiting areas, birth preparedness classes and phones shared with family. Watch them yourself first so your explanations match.</p>
      <div class="space-y-2">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/what-to-expect-in-labor/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">What to Expect in Labor</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/what-to-expect-in-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">What to Expect in Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/what-to-expect-after-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">What to Expect After Birth</a></div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/caring-for-yourself-and-your-baby-after-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for Yourself and Your Baby After Birth</a></div>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
      Suggested Viewing Order
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Starting a labour ward posting</strong>
        <p class="text-sm">The Birth, then Respectful Care During Labor and Birth, Initial Assessment in Labor, Giving Good Care During Labor, Birthing the Baby and Managing the Third Stage of Labor.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before taking night call</strong>
        <p class="text-sm">Bleeding After Birth, Managing Severe Bleeding After Birth, Uterine Compression, Aortic Compression, Stuck Shoulders, Severe Pre-Eclampsia and Cord Around the Neck.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before your first repair</strong>
        <p class="text-sm">Evaluating Tears After Birth, Basic Features of Suturing, Repairing a Perineal Tear and Repairing a Labial Tear.</p>
      </div>
    </div>
    
    <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
      <p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
      <ul class="space-y-2 text-sm">
        <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>The series has 47 English videos. Start with The Birth, then work through the stage-by-stage sections above.</span></li>
        <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>The films show a solo attendant in a small facility. Use them for technique, then follow your own unit&rsquo;s protocol and referral pathway.</span></li>
        <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Learn uterine and aortic compression early. They need no equipment and can buy time during postpartum haemorrhage.</span></li>
        <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Videos can be downloaded for offline use, which helps where data is costly or the network is unreliable.</span></li>
        <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Four videos are written for women. Use them in antenatal and postnatal teaching.</span></li>
      </ul>
    </div>
    
    <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
      <summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
        <span>References</span>
        <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </summary>
      <div class="px-4 pb-4 space-y-2">
        <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Childbirth Series. https://globalhealthmedia.org/our-projects/childbirth-series/</p>
        <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Video library, Childbirth topic. https://globalhealthmedia.org/topic/childbirth/</p>
        <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Terms for Video Download Use. https://globalhealthmedia.org/terms-for-video-download-use-2/</p>
        <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Birth &amp; Beyond mobile app (iPhone and Android), linked from globalhealthmedia.org.</p>
        <p class="text-[10px] leading-snug text-stone-500">Source materials named by the series: WHO, Pregnancy, Childbirth, Postpartum and Newborn Care (IMPAC) and Managing Complications in Pregnancy and Childbirth; Jhpiego, Helping Mothers Survive training modules; Hesperian Health Guides, A Book for Midwives.</p>
        <p class="text-[10px] leading-snug text-stone-500">Video titles and the count of 47 English videos were checked against the Global Health Media Project site in October 2026. The site may add, rename or move videos, so use the topic page if a link stops working.</p>
      </div>
    </details>
    
    </div>
    </body>
    </html>
        `
    },
];