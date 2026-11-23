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


    {
      id: 'resources-ghmp-emergency-care-video-series',
      title: 'Emergency Care Video Series (GHMP)',
      category: 'External Resources',
      subCategory: 'Emergency Medicine',
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
      <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; EMERGENCY CARE</span>
      <h1 class="font-brand text-3xl font-bold mb-3 text-white">Emergency Care Video Series (Global Health Media Project)</h1>
      <p class="text-sm text-indigo-200">78 short English videos on assessing and treating injured and acutely ill patients, from scene safety and the CABCDE check to bleeding, shock, fractures, burns and snakebite. Road crashes, burns, snakebite, severe malaria anaemia and dehydration are everyday emergencies in Nigeria, and the first minutes often happen outside a hospital. The videos are grouped in the order you would act, with community first-aid versions at the end.</p>
    </div>
  </div>
  
  
  <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
    <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
      <li><a href="#about-this-series" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Series</span></a></li>
      <li><a href="#using-these-videos-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Using These Videos in Nigerian Practice</span></a></li>
      <li><a href="#scene-safety-and-assessment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Scene Safety and Assessment</span></a></li>
      <li><a href="#airway" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Airway</span></a></li>
      <li><a href="#breathing-and-oxygen" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Breathing and Oxygen</span></a></li>
      <li><a href="#controlling-bleeding" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Controlling Bleeding</span></a></li>
      <li><a href="#shock-fluids-and-dehydration" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Shock, Fluids and Dehydration</span></a></li>
      <li><a href="#severe-anaemia-and-malnutrition" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Severe Anaemia and Malnutrition</span></a></li>
      <li><a href="#trauma-spine-limbs-and-fractures" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Trauma: Spine, Limbs and Fractures</span></a></li>
      <li><a href="#wound-care-and-suturing" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Wound Care and Suturing</span></a></li>
      <li><a href="#burns" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Burns</span></a></li>
      <li><a href="#medical-and-environmental-emergencies" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Medical and Environmental Emergencies</span></a></li>
      <li><a href="#pregnancy-related-emergencies" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Pregnancy-Related Emergencies</span></a></li>
      <li><a href="#community-first-aid" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">14</span><span>Community First Aid</span></a></li>
      <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">15</span><span>Suggested Viewing Order</span></a></li></ul>
  </nav>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-series" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
    About This Series
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Global Health Media Project is a non-profit that makes short teaching films for front-line health workers. Its Emergency Care series was announced in March 2026 and is still growing. The first release had 10 videos, and the project said the series would pass 100. The list on this page has 78 English videos at the time of writing.</p>
    <p class="text-sm">The films follow WHO&rsquo;s Basic Emergency Care (BEC) and Community First Aid Response (CFAR) courses and were developed with WHO&rsquo;s emergency care team. Footage was filmed in Tanzania, Nepal, Kenya and Malawi. Most videos are for health workers, some are for community first responders, and a set of burn videos is for family members. French and Spanish versions were announced to follow the English ones.</p>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
      📖 <a href="https://globalhealthmedia.org/?p=107012" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Series announcement</a>
      &nbsp;&middot;&nbsp;
      � <a href="https://globalhealthmedia.org/video/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Video archive (filter by topic and language)</a>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="using-these-videos-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
    Using These Videos in Nigerian Practice
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <ul class="list-disc pl-5 space-y-2 text-sm">
      <li><strong>Where the first minutes happen.</strong> Many patients arrive after a long journey, a motorcycle or bus ride, or first contact with a patent medicine seller or traditional healer. The community first-aid videos are meant for the people who reach the patient first.</li>
      <li><strong>Equipment.</strong> Some items shown, such as a pulse oximeter, bag valve mask, oxygen concentrator, pelvic binder or plaster, may not be stocked in your unit. Learn the no-equipment skills first: scene safety, CABCDE, head-tilt chin-lift, jaw thrust, direct pressure, the recovery position and the log roll.</li>
      <li><strong>Local practices.</strong> Ask what was done before arrival. Cutting a bite, applying herbal poultices or tying a tight band can delay proper care. Ask without blame, then explain why.</li>
      <li><strong>Pairs.</strong> Several skills have two videos, one for health workers and one for the community. Watch the health-worker version for your own practice and use the community version when teaching volunteers.</li>
    </ul>
    <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
      <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
      <p class="text-sm">The videos follow WHO&rsquo;s BEC and CFAR courses. Fluid volumes in shock, oxygen targets, tourniquet use and snakebite first aid can differ between WHO, FMOH guidance and your hospital&rsquo;s protocol, and children with severe malnutrition need their own fluid rules. Where they differ, follow the local protocol and ask your senior. The videos teach technique and sequence. They do not replace the protocol of the unit you work in.</p>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="scene-safety-and-assessment" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
    Scene Safety and Assessment
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Start here. Make the scene safe, then work through the same ordered check on every patient before treating anything.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/scene-safety-in-the-community-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Scene Safety in the Community</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/scene-safety-in-a-hospital-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Scene Safety in a Hospital</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-initial-assessment-the-cabcde-approach-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Initial Assessment: The CABCDE Approach</a><span class="block mt-1 text-slate-500 dark:text-slate-400">A systematic approach for checking an injured or ill person when you first reach them.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-primary-survey-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Primary Survey</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-avpu-scale-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The AVPU Scale</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-glasgow-coma-scale-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Glasgow Coma Scale</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="airway" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
    Airway
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Open the airway, keep it open and clear it. Airway problems kill quickly, and the first manoeuvres need no equipment.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/using-the-head-tilt-chin-lift-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Using the Head-Tilt Chin-Lift</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-jaw-thrust-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Jaw Thrust</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/suctioning-the-airway-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suctioning the Airway</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/inserting-an-airway-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting an Airway</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/placing-someone-in-the-recovery-position-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Placing Someone in the Recovery Position</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="breathing-and-oxygen" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
    Breathing and Oxygen
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Recognise respiratory distress, measure oxygen saturation, give oxygen and support breathing. Includes chest injuries and the inhaler and nebuliser skills used for asthma and wheeze.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/recognize-respiratory-distress-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Recognize Respiratory Distress</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/using-a-pulse-oximeter-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Using a Pulse Oximeter</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/giving-oxygen-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving Oxygen</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/giving-oxygen-to-the-young-child-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving Oxygen to the Young Child</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/using-a-bag-valve-mask-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Using a Bag Valve Mask</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/emergency-needle-decompression-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Emergency Needle Decompression</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/management-of-the-sucking-chest-wound-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Management of the Sucking Chest Wound</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/how-to-give-a-nebulizer-treatment-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to Give a Nebulizer Treatment</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/how-to-make-a-spacer-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to Make a Spacer</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/teaching-a-child-to-use-an-inhaler-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Teaching a Child to Use an Inhaler</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="controlling-bleeding" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
    Controlling Bleeding
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Catastrophic bleeding is dealt with first in the CABCDE sequence. Work from direct pressure to packing, then tourniquet and pelvic binder when pressure is not enough.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/stop-bleeding-with-direct-pressure-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Stop Bleeding with Direct Pressure</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/deep-wound-packing-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Deep Wound Packing</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/placement-of-a-tourniquet-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Placement of a Tourniquet</a><span class="block mt-1 text-slate-500 dark:text-slate-400">How to place a tourniquet for bleeding that is uncontrollable and life threatening.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/pelvic-binder-placement-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Pelvic Binder Placement</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="shock-fluids-and-dehydration" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
    Shock, Fluids and Dehydration
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Recognise shock, get access and give fluids with care. Adults and children are handled differently, and so are children with severe malnutrition, so check your local protocol.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/recognize-shock-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Recognize Shock</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/how-to-insert-an-iv-cannula-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to Insert an IV Cannula</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/managing-fluids-for-the-adult-in-shock-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Managing Fluids for the Adult in Shock</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/managing-fluids-for-the-child-in-shock-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Managing Fluids for the Child in Shock</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/recognize-dehydration-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Recognize Dehydration</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/preparing-and-giving-oral-rehydration-solution-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preparing and Giving Oral Rehydration Solution</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="severe-anaemia-and-malnutrition" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
    Severe Anaemia and Malnutrition
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Two conditions that change how a sick child is managed. Severe anaemia in children is common where malaria and sickle cell disease are common.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/recognize-severe-anemia-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Recognize Severe Anemia</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/recognize-malnutrition-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Recognize Malnutrition</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/measuring-the-muac-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Measuring the MUAC</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="trauma-spine-limbs-and-fractures" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
    Trauma: Spine, Limbs and Fractures
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Protect the spine, assess the limb, splint, and move the patient safely. The plaster videos cover definitive immobilisation once the patient is stable.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-log-roll-technique-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Log Roll Technique</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/how-to-immobilize-the-neck-of-injured-people-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How To Immobilize the Neck of Injured People</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/moving-an-injured-person-on-a-backboard-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Moving an Injured Person on a Backboard</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/assessing-an-injured-limb-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Assessing an Injured Limb</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/splinting-a-fracture-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Splinting a Fracture</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/initial-care-of-an-open-fracture-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Initial Care of an Open Fracture</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/applying-a-plaster-splint-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Applying a Plaster Splint</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/applying-a-plaster-cast-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Applying a Plaster Cast</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/removing-a-plaster-cast-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Removing a Plaster Cast</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="wound-care-and-suturing" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
    Wound Care and Suturing
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">From first cleaning to closure. Pair the stitch videos with the Suturing Techniques guide in this library.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/basic-wound-care-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Basic Wound Care</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/cleaning-a-wound-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cleaning a Wound</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/debriding-a-wound-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Debriding a Wound</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/how-to-suture-a-wound-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to Suture a Wound</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-vertical-mattress-stitch-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Vertical Mattress Stitch</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-corner-stitch-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Corner Stitch</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="burns" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
    Burns
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Burns from cooking fires, kerosene and hot liquids are a common reason children reach emergency units. The project also has a longer burn-care set in its video archive.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-burns-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for Burns</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/dressing-a-new-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Dressing a New Burn</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="medical-and-environmental-emergencies" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
    Medical and Environmental Emergencies
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Hypoglycaemia, seizures, heat and cold, drowning, choking, snakebite and poisoning.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-low-blood-sugar-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for Low Blood Sugar</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-during-a-seizure-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid During a Seizure</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-a-heat-emergency-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for a Heat Emergency</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-a-cold-emergency-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for a Cold Emergency</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-drowning-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for Drowning</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-choking-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for Choking</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-a-snakebite-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for a Snakebite</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/poisoning-first-care-and-prevention-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Poisoning: First Care and Prevention</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="pregnancy-related-emergencies" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
    Pregnancy-Related Emergencies
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Positioning and uterine massage. For the full set of labour and birth videos, see the Childbirth Video Series guide in this library.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/left-side-position-for-pregnant-women-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Left Side Position for Pregnant Women</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/positioning-the-injured-pregnant-woman-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Positioning the Injured Pregnant Woman</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: Left Side Position for Pregnant Women.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/uterine-massage-for-postpartum-hemorrhage-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Uterine Massage for Postpartum Hemorrhage</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="community-first-aid" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
    Community First Aid
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Plainer-language videos for first responders, volunteers, drivers and families. Many repeat a skill from the health-worker sections above, and the companion video is named under each one. Good for road safety volunteers, church and mosque first-aid teams, school staff and park or union welfare groups.</p>
    <div class="space-y-2">
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/helping-the-injured-at-the-scene-of-a-crash-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Helping the Injured at the Scene of a Crash</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/how-to-stop-bleeding-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How To Stop Bleeding</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: Stop Bleeding with Direct Pressure.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/using-a-tourniquet-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Using a Tourniquet</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: Placement of a Tourniquet.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/first-aid-for-wounds-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for Wounds</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/home-care-of-wounds-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Home Care of Wounds</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-log-roll-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Log Roll</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: The Log Roll Technique.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/immobilizing-the-neck-of-injured-people-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Immobilizing the Neck of Injured People</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: How To Immobilize the Neck of Injured People.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/placing-a-pelvic-binder-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Placing a Pelvic Binder</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: Pelvic Binder Placement.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/splinting-a-broken-bone-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Splinting a Broken Bone</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: Splinting a Fracture.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/making-a-sling-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Making a Sling</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/making-a-stretcher-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Making a Stretcher</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/moving-injured-people-safely-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Moving Injured People Safely</a></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-recovery-position-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Recovery Position</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: Placing Someone in the Recovery Position.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/helping-someone-who-is-choking-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Helping Someone Who Is Choking</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: First Aid for Choking.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/saving-a-drowning-person-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Saving a Drowning Person</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Companion to: First Aid for Drowning.</span></div>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/how-to-save-a-life-hands-only-cpr-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to Save a Life: Hands-Only CPR</a></div>
    </div>
  </div>
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">15</span>
    Suggested Viewing Order
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <div>
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">New to the emergency unit</strong>
      <p class="text-sm">Scene Safety in a Hospital, The Initial Assessment: The CABCDE Approach, The Primary Survey, The AVPU Scale, Recognize Respiratory Distress, Recognize Shock, then Stop Bleeding with Direct Pressure.</p>
    </div>
    <div>
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Road traffic crash on call</strong>
      <p class="text-sm">The Primary Survey, Stop Bleeding with Direct Pressure, Placement of a Tourniquet, Pelvic Binder Placement, The Log Roll Technique, How To Immobilize the Neck of Injured People, Splinting a Fracture, Initial Care of an Open Fracture.</p>
    </div>
    <div>
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Sick child on the ward</strong>
      <p class="text-sm">Recognize Respiratory Distress, Giving Oxygen to the Young Child, Recognize Dehydration, Preparing and Giving Oral Rehydration Solution, Managing Fluids for the Child in Shock, Recognize Severe Anemia, Recognize Malnutrition and Measuring the MUAC.</p>
    </div>
    <div>
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Teaching community volunteers</strong>
      <p class="text-sm">Helping the Injured at the Scene of a Crash, How To Stop Bleeding, The Recovery Position, Helping Someone Who Is Choking, How to Save a Life: Hands-Only CPR, Making a Stretcher and Moving Injured People Safely.</p>
    </div>
  </div>
  <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
    <p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Make the scene safe, then use the same ordered assessment on every patient: the CABCDE approach, with catastrophic bleeding first.</span></li>
      <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>The first manoeuvres for airway, bleeding and spine need no equipment, so learn them before the equipment-based videos.</span></li>
      <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Fluids in shock differ for adults, children and children with severe malnutrition. Follow your unit&rsquo;s protocol.</span></li>
      <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Many skills have a health-worker video and a plainer community video. Use the second to teach volunteers and families.</span></li>
      <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>The series is still growing, so use the video archive for new titles.</span></li>
    </ul>
  </div>
  
  <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
    <summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
      <span>References</span>
      <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </summary>
    <div class="px-4 pb-4 space-y-2">
      <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Emergency Care Videos for health workers (series announcement, March 2026). https://globalhealthmedia.org/?p=107012</p>
      <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Video library. https://globalhealthmedia.org/video/</p>
      <p class="text-[10px] leading-snug text-stone-500">Source courses named by the series: WHO Basic Emergency Care (BEC) and WHO Community First Aid Response (CFAR).</p>
      <p class="text-[10px] leading-snug text-stone-500">Video titles and links were supplied from the Global Health Media Project site in November 2026. Two links, Placement of a Tourniquet and The Initial Assessment: The CABCDE Approach, were opened and confirmed. Audience labels for the community versions are inferred from title pairing and the series structure, so check the audience tag on each video page. The site may add, rename or move videos.</p>
    </div>
  </details>
  
  </div>
  </body>
  </html>
      `
  },

  {
    id: 'resources-ghmp-burn-care-video-series',
    title: 'Burn Care Video Series (GHMP)',
    category: 'External Resources',
    subCategory: 'Emergency Medicine',
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; BURNS</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Burn Care Video Series (Global Health Media Project)</h1>
    <p class="text-sm text-indigo-200">24 short English videos on preventing, assessing, treating and rehabilitating burns. Burns from cooking fires, kerosene, hot water and hot food are common in Nigerian homes, and children are hit hardest. Many patients reach a facility late and go home early, so these videos cover both the hospital steps and the teaching families need. They are arranged in the order of care, from prevention to scars.</p>
  </div>
</div>


<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
  <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
  <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
    <li><a href="#about-this-series" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Series</span></a></li>
    <li><a href="#using-these-videos-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Using These Videos in Nigerian Practice</span></a></li>
    <li><a href="#prevention-and-first-response" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Prevention and First Response</span></a></li>
    <li><a href="#assessing-the-burn" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Assessing the Burn</span></a></li>
    <li><a href="#early-hospital-care" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Early Hospital Care</span></a></li>
    <li><a href="#dressing-burns" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Dressing Burns</span></a></li>
    <li><a href="#caring-for-burns-by-body-site" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Caring for Burns by Body Site</span></a></li>
    <li><a href="#preventing-contractures-and-scars" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Preventing Contractures and Scars</span></a></li>
    <li><a href="#care-at-home-and-when-to-seek-help" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Care at Home and When to Seek Help</span></a></li>
    <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Suggested Viewing Order</span></a></li></ul>
</nav>

<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-series" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  About This Series
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">Global Health Media Project is a non-profit that makes short teaching films for front-line health workers. The burn videos are part of its Emergency Care work, which follows WHO standards and was developed with WHO&rsquo;s emergency care team. Most of the burn videos are for health workers, some are for families and communities, and several are for both. The list on this page has 24 English videos at the time of writing, and the project adds new titles regularly.</p>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
    � <a href="https://globalhealthmedia.org/video/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Video archive (filter by topic and language)</a>
    &nbsp;&middot;&nbsp;
    📖 <a href="https://globalhealthmedia.org/?p=107012" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Emergency Care series announcement</a>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="using-these-videos-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Using These Videos in Nigerian Practice
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li><strong>Before arrival.</strong> Ask what was put on the burn, without blame. Palm oil, toothpaste, egg, ash and herbal preparations are sometimes applied at home. Explain that clean dressings and proper cooling help, and that these applications can make wound care harder and raise the risk of infection.</li>
    <li><strong>Cost and distance.</strong> Many families cannot afford a long admission or travel back for every dressing change. The home-care and body-site videos are made so a trained carer can continue care safely, and the hospital-visit video helps families know when not to wait.</li>
    <li><strong>Children.</strong> Scalds and fire burns in young children are common, so the child-fluids and prevention videos deserve extra attention.</li>
    <li><strong>Supplies.</strong> Dressings, splints and fluids may be limited. Watch the splint-making video for ideas using locally available materials.</li>
  </ul>
  <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
    <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
    <p class="text-sm">Fluid volumes, the choice of dressing and the criteria for referral to a burns unit can differ between the videos, WHO guidance, FMOH guidance and your hospital&rsquo;s protocol. Where they differ, follow the local protocol and ask your senior. The videos teach technique and sequence. They do not replace the protocol of the unit you work in.</p>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="prevention-and-first-response" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Prevention and First Response
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">Most burns can be prevented, and what happens in the first minutes changes the outcome. These two are for families and communities.</p>
  <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/prevention-of-burns-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Prevention of Burns</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/what-to-do-if-you-catch-on-fire-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">What to Do if You Catch on Fire</a></div>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="assessing-the-burn" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Assessing the Burn
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">Work out how deep and how large the burn is. Both decide where the patient should be treated and how much fluid is needed.</p>
  <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/the-depth-of-a-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Depth of a Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/determining-the-size-of-a-burn-english-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Determining the Size of a Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="early-hospital-care" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Early Hospital Care
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">Fluids, release of a tight burned limb or chest, pain control and feeding in the first days. For the first-aid and resuscitation steps that come before this, see the Emergency Care Video Series guide in this library.</p>
  <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/giving-fluids-to-a-child-with-a-new-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving Fluids to a Child with a New Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/giving-fluids-for-a-new-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving Fluids for a New Burn</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/escharotomy-english-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Escharotomy</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/managing-pain-in-patients-with-burns-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Managing Pain In Patients with Burns</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/feeding-a-burn-patient-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Feeding a Burn Patient</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="dressing-burns" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Dressing Burns
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">General dressing technique, then the hand, which needs its own method.</p>
  <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/dressing-a-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Dressing a Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/dressing-the-hand-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Dressing the Hand Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="caring-for-burns-by-body-site" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Caring for Burns by Body Site
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">Position, dressing and movement differ by joint. Work from the neck down. These are written for both families and health workers, so they suit teaching a carer before discharge.</p>
  <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-a-burn-to-the-neck-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for a Burn to the Neck</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Communities and health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-a-burn-to-the-shoulder-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for a Burn to the Shoulder</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Communities and health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-a-burn-to-the-elbow-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for a Burn to the Elbow</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-a-burn-to-the-hand-and-wrist-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for a Burn to the Hand and Wrist</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-a-burn-to-the-hip-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for a Burn to the Hip</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-a-burn-to-the-knee-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for a Burn to the Knee</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-a-burn-to-the-ankle-and-foot-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for a Burn to the Ankle and Foot</a></div>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="preventing-contractures-and-scars" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Preventing Contractures and Scars
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">Burns over joints heal by shortening unless the limb is positioned, splinted and moved. Splints can be made from local materials. Start these early, not after the wound has healed.</p>
  <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/preventing-contractures-in-burn-patients-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preventing Contractures In Burn Patients</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/making-splints-to-prevent-contractures-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Making Splints to Prevent Contractures</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/improving-scars-from-burns-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Improving Scars from Burns</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Health workers.</span></div>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="care-at-home-and-when-to-seek-help" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
  Care at Home and When to Seek Help
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <p class="text-sm">For the family: when a burn needs a hospital, how to look after one at home, and how to care for someone who is severely burned.</p>
  <div class="space-y-2">
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/when-to-go-to-the-hospital-for-a-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">When to Go to the Hospital for a Burn</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/home-care-of-burns-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Home Care of Burns</a></div>
    <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">� <a href="https://globalhealthmedia.org/video/caring-for-your-severely-burned-family-member-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Caring for Your Severely Burned Family Member</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Audience on the site: Communities.</span></div>
  </div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
  Suggested Viewing Order
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">New to the burns ward</strong>
    <p class="text-sm">The Depth of a Burn, Determining the Size of a Burn, Giving Fluids to a Child with a New Burn, Dressing a Burn, Managing Pain In Patients with Burns, Feeding a Burn Patient.</p>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before discharging a patient</strong>
    <p class="text-sm">Caring for the burn by body site, Preventing Contractures In Burn Patients, Making Splints to Prevent Contractures, Home Care of Burns, When to Go to the Hospital for a Burn.</p>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Teaching families and communities</strong>
    <p class="text-sm">Prevention of Burns, What to Do if You Catch on Fire, When to Go to the Hospital for a Burn, Home Care of Burns, Caring for Your Severely Burned Family Member.</p>
  </div>
</div>
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
  <p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
  <ul class="space-y-2 text-sm">
    <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Assess depth and size first. They decide the fluid plan and where the patient is treated.</span></li>
    <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Fluids, pain control and feeding in the early days are part of burn care, not extras.</span></li>
    <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Position, splint and move burned joints early to prevent contractures. Do not wait for the wound to heal.</span></li>
    <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Teach the carer before discharge, including when to return. Use the body-site and home-care videos.</span></li>
    <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about home applications without blame, and prevention teaching is as valuable as treatment.</span></li>
  </ul>
</div>

<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
  <summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
    <span>References</span>
    <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </summary>
  <div class="px-4 pb-4 space-y-2">
    <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Video library. https://globalhealthmedia.org/video/</p>
    <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Emergency Care Videos for health workers (series announcement, March 2026). https://globalhealthmedia.org/?p=107012</p>
    <p class="text-[10px] leading-snug text-stone-500">Video titles and links were supplied from the Global Health Media Project site in November 2026. Audience labels shown come from the project&rsquo;s video archive listing and are given only for the 14 videos it listed. The other titles carry no label, so check the audience tag on each video page. The site may add, rename or move videos.</p>
  </div>
</details>

</div>
</body>
</html>
    `
},

{
  id: 'resources-ghmp-family-planning-video-series',
  title: 'Family Planning Video Series (GHMP)',
  category: 'External Resources',
  subCategory: 'Gynecology',
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; FAMILY PLANNING</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">Family Planning Video Series (Global Health Media Project)</h1>
  <p class="text-sm text-indigo-200">60 short English videos on contraceptive counselling, clinic set-up and every major method, with matching versions for health workers and for women and their partners. Unmet need for family planning, postpartum pregnancies and unsafe abortion remain real problems in Nigeria, and many women decide with partners, in-laws and patent medicine sellers in the picture. The videos are grouped by method, with counselling, clinic preparation and the pelvic examination first.</p>
</div>
</div>


<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
<p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
<ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
  <li><a href="#about-this-series" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Series</span></a></li>
  <li><a href="#using-these-videos-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Using These Videos in Nigerian Practice</span></a></li>
  <li><a href="#start-here-choosing-a-method-and-counselling" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Start Here: Choosing a Method and Counselling</span></a></li>
  <li><a href="#preparing-the-clinic-and-preventing-infection" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Preparing the Clinic and Preventing Infection</span></a></li>
  <li><a href="#the-pelvic-examination" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>The Pelvic Examination</span></a></li>
  <li><a href="#contraceptive-pills" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Contraceptive Pills</span></a></li>
  <li><a href="#contraceptive-injections" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Contraceptive Injections</span></a></li>
  <li><a href="#contraceptive-implants" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Contraceptive Implants</span></a></li>
  <li><a href="#intrauterine-devices-copper-iud" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Intrauterine Devices (Copper IUD)</span></a></li>
  <li><a href="#barrier-and-fertility-awareness-methods" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Barrier and Fertility Awareness Methods</span></a></li>
  <li><a href="#permanent-methods" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Permanent Methods</span></a></li>
  <li><a href="#emergency-contraception-and-bleeding-changes" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Emergency Contraception and Bleeding Changes</span></a></li>
  <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Suggested Viewing Order</span></a></li></ul>
</nav>

<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-series" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
About This Series
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Global Health Media Project is a non-profit that makes short teaching films for front-line health workers. The family planning series began in October 2021 with films on the copper IUD and the implant, including brief teaching shorts that repeat the steps of each procedure. Videos on injectables and pills followed, and in February 2022 a set on six non-hormonal methods: male and female condoms, the Caya diaphragm, the breastfeeding method, and the calendar and secretion methods. Each method has one video for health workers and a companion for women and their partners.</p>
<p class="text-sm">WHO, UNFPA, Ipas, the International Confederation of Midwives and Laerdal Global Health contributed content expertise. Footage was filmed in Bangladesh, Ethiopia and Uganda, with some filmed in the USA. The health-worker videos are part of the Training Resource Package for Family Planning, a WHO, USAID and UNFPA-led consortium resource, and are also in the Practice Family Planning app. The women and partners videos are in the Learn Family Planning app.</p>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
  📖 <a href="https://globalhealthmedia.org/family-planning-videos-now-available/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Series announcement (2021)</a>
  &nbsp;&middot;&nbsp;
  📖 <a href="https://globalhealthmedia.org/family-planning-videos-used-as-global-training-resource/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Training resource package</a>
  &nbsp;&middot;&nbsp;
  🔗 <a href="https://globalhealthmedia.org/video/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Video archive</a>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="using-these-videos-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Using These Videos in Nigerian Practice
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li><strong>Counsel first.</strong> Many women stop a method because of side effects they were not warned about, especially bleeding changes. Watch the counselling and bleeding-change videos before the procedure videos.</li>
  <li><strong>Myths and rumours.</strong> Expect fears that injections or implants cause lasting infertility, that an IUD can travel in the body, or that methods are unsafe for women who have not yet had a child. Ask what the client has heard, answer plainly and without scolding.</li>
  <li><strong>The client decides.</strong> Partner and family opinion matters, but the choice and consent belong to the client. Some women want a method their partner will not notice, so discuss what suits their situation. Adolescents need privacy and a non-judgemental approach.</li>
  <li><strong>Postpartum timing.</strong> Many women are seen only around delivery and the six-week visit. Raise contraception during antenatal care and before discharge, and see the Childbirth Video Series guide for the birth-side videos.</li>
  <li><strong>Supplies and scope of practice.</strong> Products stocked, free supplies and who may insert implants or IUDs vary by facility and cadre. Watch the skills videos for technique, then follow your own programme&rsquo;s rules.</li>
</ul>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
  <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
  <p class="text-sm">Medical eligibility, the timing of starting a method, missed-pill rules and which methods a given cadre may provide can differ between the videos, current WHO guidance, FMOH national family planning guidance and your programme&rsquo;s protocol. The videos were published in 2021 and 2022. Where they differ from current guidance, follow the local protocol and ask your supervisor. The videos teach technique and sequence. They do not replace the protocol of the unit you work in.</p>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="start-here-choosing-a-method-and-counselling" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Start Here: Choosing a Method and Counselling
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Begin with how pregnancy happens and the comparison of methods, then the counselling visit. The adolescent visit covers the extra care young clients need.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/how-pregnancy-happens-teaching-short-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How Pregnancy Happens, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/comparing-contraceptive-methods-w-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Comparing Contraceptive Methods</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/comparing-contraceptive-methods-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Comparing Contraceptive Methods</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-contraceptive-counseling-visit-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Contraceptive Counseling Visit</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-contraceptive-counseling-visit-for-adolescents-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Contraceptive Counseling Visit for Adolescents</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="preparing-the-clinic-and-preventing-infection" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Preparing the Clinic and Preventing Infection
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Room set-up, infection prevention, instrument processing and procedure trays. These come before any IUD or implant procedure.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/organizing-the-clinic-room-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Organizing the Clinic Room</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/preventing-infection-in-the-clinic-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preventing Infection in the Clinic</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/wrapping-instruments-for-sterilization-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wrapping Instruments for Sterilization</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/setting-up-for-an-iud-insertion-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Setting Up for an IUD Insertion</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/setting-up-for-implant-procedures-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Setting Up for Implant Procedures</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="the-pelvic-examination" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
The Pelvic Examination
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">What the woman can expect, then the speculum and bimanual examinations for the provider. Pair with the Gynaecology history and examination guides in this library.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/what-to-expect-when-you-have-a-pelvic-exam-w-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">What to Expect When You Have a Pelvic Exam</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-speculum-exam-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Speculum Exam</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-bimanual-exam-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Bimanual Exam</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="contraceptive-pills" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Contraceptive Pills
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Combined pills, taking them continuously, the mini-pill and what to do after a missed pill.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-contraceptive-pill/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Contraceptive Pill</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/how-to-take-the-contraceptive-pill/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to Take the Contraceptive Pill</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/taking-the-contraceptive-pill-continuously-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Taking the Contraceptive Pill Continuously</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-mini-pill/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Mini-pill</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/what-to-do-when-you-miss-a-pill/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">What To Do When You Miss a Pill, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="contraceptive-injections" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Contraceptive Injections
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Standard intramuscular injections and the subcutaneous (Depo SubQ) injection, including self-injection teaching.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-contraceptive-injection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Contraceptive Injection</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-contraceptive-injection-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Contraceptive Injection</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-depo-subq-injection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Depo SubQ Injection</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-subq-contraceptive-injection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The SubQ Contraceptive Injection</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/how-to-use-depo-subq-teaching-short/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to use Depo SubQ, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="contraceptive-implants" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Contraceptive Implants
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Counselling video first, then insertion of one-rod and two-rod implants, routine removal, and the two-part series for implants that cannot be felt under the skin. Teaching shorts repeat the steps of the skills videos.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-implant/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Implant</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-implant-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Implant</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-a-one-rod-implant/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting a One Rod Implant</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-a-one-rod-implant-teaching-short/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting a One Rod Implant, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-a-two-rod-implant/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting a Two Rod Implant</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-a-two-rod-implant-teaching-short/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting a Two Rod Implant, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/removing-contraceptive-implants/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Removing Contraceptive Implants</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/removing-a-one-rod-implant-longitudinal-approach-teaching-short/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Removing a One Rod Implant, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/locating-the-non-palpable-contraceptive-implant-part1-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Locating the Non-Palpable Contraceptive Implant, Part 1</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/removing-the-non-palpable-contraceptive-implant-part2-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Removing the Non-Palpable Contraceptive Implant, Part 2</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="intrauterine-devices-copper-iud" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Intrauterine Devices (Copper IUD)
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Counselling video first, then interval insertion, postpartum insertion and loading the device. Teaching shorts repeat the steps of the skills videos.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-iud/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The IUD</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-iud-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The IUD</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-an-iud/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting an IUD</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-an-iud-teaching-short/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting an IUD, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/loading-a-copper-iud-teaching-short/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Loading a Copper IUD, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-an-iud-postpartum/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting an IUD Postpartum</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-an-id-postpartum-teaching-short/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting an IUD Postpartum, Teaching Short</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Teaching short: a brief recap of the procedure steps.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="barrier-and-fertility-awareness-methods" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Barrier and Fertility Awareness Methods
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Condoms, the female condom, the Caya diaphragm, calendar-based, secretion and breastfeeding methods. The project makes one video for health workers and a companion for women and their partners for each of these.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/condoms/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Condoms</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/condoms-4/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Condoms</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-female-condom/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Female Condom</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-female-condom-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Female Condom</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-caya-diaphragm/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Caya Diaphragm</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-caya-diaphragm-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Caya Diaphragm</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-calendar-method/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Calendar-based Methods</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-calendar-method-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Calendar-based Methods</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-secretion-method/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Secretion Method</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-secretion-method-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Secretion Method</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-breastfeeding-method/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Breastfeeding Method</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-breastfeeding-method-2/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Breastfeeding Method</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="permanent-methods" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
Permanent Methods
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Tubal ligation and vasectomy, each with a provider video and a video for the client.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-tubal-ligation-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Tubal Ligation</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-tubal-ligation-w-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Tubal Ligation</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-vasectomy-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Vasectomy</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-vasectomy-w-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Vasectomy</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="emergency-contraception-and-bleeding-changes" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
Emergency Contraception and Bleeding Changes
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Emergency contraceptive pills, and bleeding changes, a leading reason women stop a method. Counselling before the method is started reduces discontinuation.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-emergency-contraceptive-pill-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Emergency Contraceptive Pill</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/emergency-contraceptive-pills-w-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Emergency Contraceptive Pills</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/bleeding-changes-on-contraceptives-hw-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Bleeding Changes on Contraceptives</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/bleeding-changes-on-contraceptives-w-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Bleeding Changes on Contraceptives</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
Suggested Viewing Order
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">New to family planning clinic</strong>
  <p class="text-sm">Comparing Contraceptive Methods (health worker version), The Contraceptive Counseling Visit, Preventing Infection in the Clinic, Organizing the Clinic Room, then the method videos for the methods your clinic offers.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Learning to insert an implant or IUD</strong>
  <p class="text-sm">Setting Up for Implant Procedures or Setting Up for an IUD Insertion, The Speculum Exam and The Bimanual Exam (for the IUD), the insertion video, its teaching short, then the removal video.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Counselling adolescents</strong>
  <p class="text-sm">The Contraceptive Counseling Visit for Adolescents, How Pregnancy Happens, Emergency Contraceptive Pills, then the method videos.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Showing clients in the waiting area</strong>
  <p class="text-sm">How Pregnancy Happens, the women and partners version of Comparing Contraceptive Methods, What to Expect When You Have a Pelvic Exam, and the women and partners videos for each method.</p>
</div>
</div>
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
<p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Start with counselling and method comparison. The choice and consent belong to the client.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Prepare the room, the instruments and infection prevention before any IUD or implant procedure.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Warn about bleeding changes before a method is started. They are a common reason for stopping.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Most methods have a health-worker video and a women and partners video. Use the second in waiting areas and counselling.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check the videos against current WHO and FMOH guidance, and follow your programme&rsquo;s protocol where they differ.</span></li>
</ul>
</div>

<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
<summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
  <span>References</span>
  <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</summary>
<div class="px-4 pb-4 space-y-2">
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Family Planning Videos Now Available (October 2021). https://globalhealthmedia.org/family-planning-videos-now-available/</p>
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Family Planning Videos used as global training resource. https://globalhealthmedia.org/family-planning-videos-used-as-global-training-resource/</p>
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. New videos on non-hormonal contraceptives (February 2022), as reported at https://www.hifa.org/node/96850118</p>
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Video library. https://globalhealthmedia.org/video/</p>
  <p class="text-[10px] leading-snug text-stone-500">Video titles and links were supplied from the Global Health Media Project site in November 2026 and were not opened one by one. Audience labels come from the link names (hw for health workers, w for women and partners) and from the project&rsquo;s announcements. Where two videos share a title without a marker, the audience of each is not stated. The site may add, rename or move videos.</p>
</div>
</details>

</div>
</body>
</html>
  `
},

{
  id: 'resources-ghmp-newborn-care-video-series',
  title: 'Newborn Care Video Series (GHMP)',
  category: 'External Resources',
  subCategory: 'Pediatrics',
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; NEWBORN CARE</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">Newborn Care Video Series (Global Health Media Project)</h1>
  <p class="text-sm text-indigo-200">42 short English videos on examining, resuscitating, protecting and treating the newborn. Nigeria has one of the highest numbers of newborn deaths in the world, and most occur in the first days of life, often after a home or small-facility birth and a delayed referral. The videos are arranged in the order of care, from the first examination and resuscitation to routine care, common problems, serious infection, medicines and procedures.</p>
</div>
</div>


<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
<p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
<ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
  <li><a href="#about-this-series" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Series</span></a></li>
  <li><a href="#using-these-videos-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Using These Videos in Nigerian Practice</span></a></li>
  <li><a href="#start-here-basic-skills-examination-and-danger-signs" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Start Here: Basic Skills, Examination and Danger Signs</span></a></li>
  <li><a href="#newborn-resuscitation-helping-babies-breathe" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Newborn Resuscitation (Helping Babies Breathe)</span></a></li>
  <li><a href="#cleaning-resuscitation-equipment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Cleaning Resuscitation Equipment</span></a></li>
  <li><a href="#routine-newborn-care-warmth-cord-and-home-visits" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Routine Newborn Care: Warmth, Cord and Home Visits</span></a></li>
  <li><a href="#common-newborn-problems" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Common Newborn Problems</span></a></li>
  <li><a href="#serious-illness-and-referral" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Serious Illness and Referral</span></a></li>
  <li><a href="#preparing-and-giving-medicines" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Preparing and Giving Medicines</span></a></li>
  <li><a href="#procedures-iv-access-gastric-tube-and-blood-sampling" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Procedures: IV Access, Gastric Tube and Blood Sampling</span></a></li>
  <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Suggested Viewing Order</span></a></li></ul>
</nav>

<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-series" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
About This Series
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Global Health Media Project is a non-profit that makes short teaching films for front-line health workers. Its Newborn Care Series has 42 videos for health workers, including students and trainees. The topics are newborn care skills, newborn problems, special care including referral and home visits, live newborn resuscitation, and managing seriously ill young infants when hospital referral is not possible.</p>
<p class="text-sm">The content draws on Save the Children&rsquo;s <em>Care of the Newborn Reference Manual</em>, WHO&rsquo;s <em>Managing Newborn Problems</em>, the WHO Integrated Management of Childhood Illness chart booklet and the AAP <em>Helping Babies Breathe</em> Provider Guide. The videos were selected for the WHO Essential Newborn Care course and AAP&rsquo;s Helping Babies Survive modules. Clinical filming took place in the Dominican Republic, Nigeria, India, Nepal, Haiti and Ghana. Narration is in English, French and Spanish, and the videos are also in the Birth &amp; Beyond app for iPhone and Android.</p>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
  📖 <a href="https://globalhealthmedia.org/our-projects/new-born-care-series/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Series home page</a>
  &nbsp;&middot;&nbsp;
  🔗 <a href="https://globalhealthmedia.org/video/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Video archive</a>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="using-these-videos-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Using These Videos in Nigerian Practice
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li><strong>Where babies are born.</strong> Many are born at home, in a primary health centre or a private clinic, and are seen first by a health worker with little equipment. Learn the no-equipment steps first: drying and warming, stimulating, and opening the airway.</li>
  <li><strong>Cord and home practices.</strong> Ask what is put on the cord and how the baby is bathed and wrapped. Some families apply herbal preparations, powders or other substances. Ask without blame, then explain clean, dry care or the chlorhexidine method your programme uses.</li>
  <li><strong>Jaundice.</strong> Severe early jaundice is common. G6PD deficiency, ABO incompatibility, sepsis and herbal or camphor exposure are causes to keep in mind, so a baby who turns yellow in the first day needs urgent assessment.</li>
  <li><strong>Referral.</strong> Many babies reach hospital late or cold. Learn the referral video together with the warmth video, so the baby is warm, fed or on a plan, and accompanied during transfer.</li>
  <li><strong>Equipment and drugs.</strong> Oxygen, pulse oximeters, IV supplies and some antibiotics may not be available. Watch the videos for technique and sequence, then follow what your facility can actually do.</li>
</ul>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
  <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
  <p class="text-sm">Antibiotic regimens and doses, the use of chlorhexidine on the cord, jaundice treatment thresholds and the criteria for referral can differ between the videos, current WHO guidance, FMOH guidance and your hospital&rsquo;s protocol. Newborn dosing depends on weight and gestational age. Where sources differ, follow the local protocol and confirm every dose with a senior or pharmacist. The videos teach technique and sequence. They do not replace the protocol of the unit you work in.</p>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="start-here-basic-skills-examination-and-danger-signs" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Start Here: Basic Skills, Examination and Danger Signs
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Begin with basic skills and the newborn examination, then learn the danger signs. The second danger-sign video is written for mothers and caregivers, so use it for discharge teaching.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/basic-skills/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Basic Skills</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/newborn-physical-exam/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Newborn Physical Exam</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/danger-signs-in-newborns-for-health-workers/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Danger Signs in Newborns</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/warning-signs-in-newborns-for-mothers-and-caregivers/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Warning Signs in Newborns</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="newborn-resuscitation-helping-babies-breathe" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Newborn Resuscitation (Helping Babies Breathe)
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Live footage of resuscitation at birth, how to practise on a training doll, and the teaching points for instructors. For the rest of the delivery, see the Childbirth Video Series guide in this library.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/helping-babies-breathe-at-birth/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Helping Babies Breathe at Birth</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/helping-babies-breathe-with-a-training-doll/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Helping Babies Breathe with a Training Doll</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/teaching-points-for-newborn-resuscitation/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Teaching Points for Newborn Resuscitation</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="cleaning-resuscitation-equipment" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Cleaning Resuscitation Equipment
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Bag, mask and suction devices must be cleaned between babies. Start with the general video, then the method that matches what your facility has: chemical solution, boiling, steam or autoclave.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cleaning-resuscitation-equipment/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cleaning Resuscitation Equipment</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cleaning-resuscitation-equipment-with-a-chemical-solution/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cleaning Resuscitation Equipment with a Chemical Solution</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cleaning-resuscitation-equipment-with-boiling/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cleaning Resuscitation Equipment with Boiling</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cleaning-resuscitation-equipment-with-steam/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cleaning Resuscitation Equipment with Steam</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cleaning-resuscitation-equipment-with-an-autoclave/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cleaning Resuscitation Equipment with an Autoclave</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="routine-newborn-care-warmth-cord-and-home-visits" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Routine Newborn Care: Warmth, Cord and Home Visits
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Keeping the baby warm, caring for the cord and the home visit. Many births happen at home or in small facilities, and the first days are when most newborn deaths occur, so these visits matter.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/keeping-the-baby-warm/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Keeping the Baby Warm</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/care-of-the-cord/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Care of the Cord</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/chlorhexidine-for-newborn-cord-care/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Chlorhexidine for Newborn Cord Care</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/home-visit-for-the-newborn/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Home Visit for the Newborn</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-home-visit/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Home Visit for Mother and Newborn</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="common-newborn-problems" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Common Newborn Problems
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Temperature problems, breathing, jaundice and infections of the eye, mouth, skin and cord.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-cold-baby/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Cold Baby</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/the-hot-baby/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Hot Baby</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/breathing-problems/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Breathing Problems</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/jaundice/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Jaundice</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/eye-infections/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Eye Infections</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/thrush/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Thrush</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/skin-infection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Skin Infection</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/umbilical-infections/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Umbilical Infections</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="serious-illness-and-referral" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Serious Illness and Referral
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Recognise critical illness and sepsis, deal with fast breathing as the only sign, manage severe infection when referral is not possible, and refer a sick baby safely.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/critical-illnesses-in-newborns/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Critical Illnesses in Newborns</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/sepsis/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Sepsis</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/fast-breathing-as-the-single-sign-of-illness/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Fast Breathing as Single Sign of Illness</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/managing-severe-infection-in-newborns/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Managing Severe Infection in Newborns</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/referring-a-sick-baby/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Referring a Sick Baby</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="preparing-and-giving-medicines" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Preparing and Giving Medicines
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Preparing oral and injectable medicines, the antibiotics used for newborn infection, and injection technique. Always check the dose against your local protocol and the baby&rsquo;s weight.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/newborn-care-preparing-oral-medecines/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preparing Oral Medicines</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/preparing-and-giving-oral-amoxicillin/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preparing and Giving Oral Amoxicillin</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/newborn-care-preparing-injectable-medecines/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preparing Injectable Medicines</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/preparing-ampicillin-and-gentamicin-for-injection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Preparing Ampicillin and Gentamicin</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/giving-an-intramuscular-injection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving an Intramuscular Injection</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/giving-an-intradermal-injection/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Giving an Intradermal Injection</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="procedures-iv-access-gastric-tube-and-blood-sampling" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Procedures: IV Access, Gastric Tube and Blood Sampling
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Skills for the sick newborn. Practise on a model first, and use the least invasive route that works.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/setting-up-an-iv-line/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Setting Up an IV Line</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-an-iv/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting an IV</a><span class="block mt-1 text-slate-500 dark:text-slate-400"></span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/inserting-a-gastric-tube/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Inserting a Gastric Tube</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/feeding-with-a-gastric-tube/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Feeding with a Gastric Tube</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/taking-a-heel-blood-sample/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Taking a Heel Blood Sample</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/taking-a-venous-blood-sample/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Taking a Venous Blood Sample</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
Suggested Viewing Order
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before your first delivery or newborn posting</strong>
  <p class="text-sm">Basic Skills, Newborn Physical Exam, Keeping the Baby Warm, Helping Babies Breathe at Birth, Care of the Cord, Danger Signs in Newborns.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before taking night call</strong>
  <p class="text-sm">Helping Babies Breathe with a Training Doll, Breathing Problems, Critical Illnesses in Newborns, Sepsis, Managing Severe Infection in Newborns, Referring a Sick Baby, Setting Up an IV Line.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before a home or community visit</strong>
  <p class="text-sm">Home Visit for the Newborn, Home Visit for Mother and Newborn, Care of the Cord, Chlorhexidine for Newborn Cord Care, Warning Signs in Newborns, Jaundice.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Teaching mothers before discharge</strong>
  <p class="text-sm">Warning Signs in Newborns (for mothers and caregivers), Keeping the Baby Warm, Care of the Cord, Thrush and Eye Infections.</p>
</div>
</div>
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
<p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Examine every newborn systematically and teach the mother the danger signs before she leaves.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Warmth, drying and the airway come first. Practise resuscitation on a doll before you need it.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Clean resuscitation equipment between babies, using the method your facility has.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Recognise sepsis and critical illness early, and refer with the baby warm and accompanied.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check every newborn dose against weight and local protocol. Do not rely on the video for doses.</span></li>
</ul>
</div>

<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
<summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
  <span>References</span>
  <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</summary>
<div class="px-4 pb-4 space-y-2">
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Newborn Care Series. https://globalhealthmedia.org/our-projects/new-born-care-series/</p>
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Video library. https://globalhealthmedia.org/video/</p>
  <p class="text-[10px] leading-snug text-stone-500">Source materials named by the series: Save the Children, Care of the Newborn Reference Manual; WHO, Managing Newborn Problems; WHO, Integrated Management of Childhood Illness chart booklet; American Academy of Pediatrics, Helping Babies Breathe Provider Guide.</p>
  <p class="text-[10px] leading-snug text-stone-500">Video titles and links were supplied from the Global Health Media Project site in November 2026 and were not opened one by one. The two audience labels shown come from the link names. The site may add, rename or move videos.</p>
</div>
</details>

</div>
</body>
</html>
  `
},


{
  id: 'resources-suturing-video-collection',
  title: 'Suturing Video Collection',
  category: 'External Resources',
  subCategory: 'Surgery',
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; SURGERY</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">Suturing Video Collection</h1>
  <p class="text-sm text-indigo-200">A curated list of 71 suturing resources, arranged by technique: preparation, knot tying, every common stitch, alternatives to sutures, special sites, obstetric repair and operating-room closure. Every Nigerian house officer sutures wounds, from road-crash and machete injuries to perineal tears, often with limited supplies and no senior nearby. Use this list to compare how different teachers perform the same stitch, then practise on a model.</p>
</div>
</div>


<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
<p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
<ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
  <li><a href="#about-this-collection" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Collection</span></a></li>
  <li><a href="#before-you-close-a-wound-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Before You Close a Wound: Nigerian Practice</span></a></li>
  <li><a href="#before-you-suture-equipment-anaesthesia-and-irrigation" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Before You Suture: Equipment, Anaesthesia and Irrigation</span></a></li>
  <li><a href="#instrument-handling-and-knot-tying" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Instrument Handling and Knot Tying</span></a></li>
  <li><a href="#full-suturing-courses" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Full Suturing Courses</span></a></li>
  <li><a href="#simple-interrupted-sutures" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Simple Interrupted Sutures</span></a></li>
  <li><a href="#mattress-sutures-and-the-corner-stitch" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Mattress Sutures and the Corner Stitch</span></a></li>
  <li><a href="#buried-deep-dermal-and-subcuticular-sutures" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Buried (Deep Dermal) and Subcuticular Sutures</span></a></li>
  <li><a href="#running-sutures" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Running Sutures</span></a></li>
  <li><a href="#advanced-wound-closure" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Advanced Wound Closure</span></a></li>
  <li><a href="#alternatives-to-sutures-glue-strips-and-staples" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Alternatives to Sutures: Glue, Strips and Staples</span></a></li>
  <li><a href="#face-eyelid-and-scalp" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Face, Eyelid and Scalp</span></a></li>
  <li><a href="#hand-fingers-and-tendon" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Hand, Fingers and Tendon</span></a></li>
  <li><a href="#obstetric-repair-and-caesarean-closure" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">14</span><span>Obstetric Repair and Caesarean Closure</span></a></li>
  <li><a href="#operating-room-closure-and-anastomosis-advanced" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">15</span><span>Operating-Room Closure and Anastomosis (Advanced)</span></a></li>
  <li><a href="#practice-and-simulation" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">16</span><span>Practice and Simulation</span></a></li>
  <li><a href="#suture-removal-and-aftercare" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">17</span><span>Suture Removal and Aftercare</span></a></li>
  <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">18</span><span>Suggested Viewing Order</span></a></li></ul>
</nav>

<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-collection" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
About This Collection
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">The collection is led by a few series: the ALiEM wound closure series (12 short chapters), the Closing The Gap site at LacerationRepair.com, Geeky Medics, the University of Iowa EyeRounds eyelid repairs, the Toronto Video Atlas of Surgery and the Journal of Medical Insight. Items marked 📖 are written guides rather than video.</p>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
  🔗 <a href="https://lacerationrepair.com/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">LacerationRepair.com (free video site)</a>
  &nbsp;&middot;&nbsp;
  🔗 <a href="https://geekymedics.com/category/surgery/suturing/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Geeky Medics suturing collection</a>
  &nbsp;&middot;&nbsp;
  🔗 <a href="https://www.aliem.com/videos/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">ALiEM video index</a>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="before-you-close-a-wound-nigerian-practice" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Before You Close a Wound: Nigerian Practice
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li><strong>Decide whether to close.</strong> Wounds that arrive late or are dirty, such as machete, farm-tool, road-crash, animal-bite and puncture wounds, may need thorough cleaning and debridement and sometimes delayed closure, not immediate suturing. A tight closure over contamination can cause an abscess.</li>
  <li><strong>Tetanus and rabies.</strong> Check tetanus immunisation status for every wound, and think about rabies after dog bites.</li>
  <li><strong>Look before you close.</strong> Check for tendon, nerve, vessel, joint and foreign-body injury, and X-ray when glass or bone injury is possible.</li>
  <li><strong>Supplies.</strong> Suture material, local anaesthetic and instruments may be short. Practise with what your unit stocks, and use adhesive strips or tissue glue only for clean, low-tension wounds when they are available.</li>
  <li><strong>Aftercare and return.</strong> Tell the patient when to return for removal and what infection looks like. Costs and distance make some patients miss follow-up, so match the suture type to what they can actually do.</li>
</ul>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
  <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
  <p class="text-sm">Most of these videos come from the United States, Canada and the United Kingdom. Rules on antibiotics, tetanus prophylaxis, how long a wound can wait before closure, suture choice and removal times can differ from WHO guidance, FMOH guidance and your hospital&rsquo;s protocol. Where they differ, follow the local protocol and ask your senior.</p>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="before-you-suture-equipment-anaesthesia-and-irrigation" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Before You Suture: Equipment, Anaesthesia and Irrigation
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Set up, numb the wound, irrigate and start the repair. Skipping these steps is a common reason for poor results, so watch them before the stitch videos.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=pF45sshWpvQ" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 1: Equipment</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 1:54.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=J34BItDBSRQ" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 2: Anesthesia</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 3:09.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=kb6wk9vVMcQ" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 3: Irrigation</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 1:11.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=ZQyPswXlDlA" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 4: Starting the Procedure</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 2:30.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.msdmanuals.com/professional/multimedia/video/how-to-anesthetize-wounds-using-local-infiltration" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How To Anesthetize Wounds Using Local Infiltration</a><span class="block mt-1 text-slate-500 dark:text-slate-400">MSD Manual Professional Edition.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="instrument-handling-and-knot-tying" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Instrument Handling and Knot Tying
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Learn the instrument tie first, because it is the knot used for most skin closure. Then the one-handed and two-handed ties. Practise each with both hands, and on twine or silk before real suture.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=eh74OqUwMz4" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Surgical Knot Tying: Instrument Tie, Righty</a><span class="block mt-1 text-slate-500 dark:text-slate-400">3:44.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=kKPdeZLgzCg" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Surgical Knot Tying: Instrument Tie, Lefty</a><span class="block mt-1 text-slate-500 dark:text-slate-400">3:51.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=uFJbTbjeU4Y" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Surgical Knot Tying: One-handed, Righty</a><span class="block mt-1 text-slate-500 dark:text-slate-400">5:08.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=Edt0EUJMZFE" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Surgical Knot Tying: One-handed, Lefty</a><span class="block mt-1 text-slate-500 dark:text-slate-400">4:54.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=o8OqxTGaS7o" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Surgical Knot Tying: Two-handed, Righty</a><span class="block mt-1 text-slate-500 dark:text-slate-400">7:25.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=Yqectc2GFUU" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Surgical Knot Tying: Two-handed, Lefty</a><span class="block mt-1 text-slate-500 dark:text-slate-400">5:10.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=Av2gp-3mKwE" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Instrument tie: Surgeon&rsquo;s knot</a><span class="block mt-1 text-slate-500 dark:text-slate-400">6:35.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=Q0iTD9cnwQE" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Surgical Knot Tying (longer lesson)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">15:35.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=HD6mll1wN0I" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Basic Knotting and Suturing Using a Needle Holder</a><span class="block mt-1 text-slate-500 dark:text-slate-400">5:14.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://jomi.com/article/478" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suture Selection and Knot Tying Demonstration</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Journal of Medical Insight, filmed at a hospital learning lab. Covers suture selection, two-handed and one-handed ties. Sign-up page shown, so access may need an account.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://eyerounds.org/video/suturing_tying_techniques/index.htm" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Slip Knot, 3-1-1 and other tying videos (7 videos)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">University of Iowa EyeRounds. Slip knots and 3-1-1 ties, right and left handed, in silk and twine.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="full-suturing-courses" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Full Suturing Courses
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Longer videos that cover several techniques in one sitting. Good for a first overview before the single-technique videos.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://jomi.com/article/479" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suturing Techniques</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Journal of Medical Insight, filmed at a hospital learning lab. Covers instrument handling, simple interrupted, running, vertical and horizontal mattress, U-stitch, deep dermal, running subcuticular and the Aberdeen knot. Sign-up page shown, so access may need an account.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=TFwFMav_cpE" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suture Skills Course: Learn Best Suture Techniques</a><span class="block mt-1 text-slate-500 dark:text-slate-400">19:45.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.nejm.org/doi/full/10.1056/NEJMvcm064238" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Basic Laceration Repair (NEJM Videos in Clinical Medicine)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Simple interrupted sutures, with indications, contraindications, equipment, preparation, aftercare and complications. May need a journal login.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="simple-interrupted-sutures" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Simple Interrupted Sutures
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">The basic stitch. Compare several demonstrations, because each emphasises different details such as bite size, eversion and spacing.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=Vw6UH0RUX2o" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 5: Simple Interrupted</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 3:45.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/basic-suturing-techniques/simple-interrupted-sutures/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Simple Interrupted Sutures (Closing The Gap)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">LacerationRepair.com, a free video teaching site.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=z8oWv-nVO6g" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Simple Interrupted Suture (Geeky Medics)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">OSCE-style guide.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.merckmanuals.com/en-ca/professional/injuries-poisoning/how-to-care-for-wounds-and-lacerations/how-to-repair-a-laceration-with-simple-interrupted-sutures" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How To Repair a Laceration With Simple Interrupted Sutures</a><span class="block mt-1 text-slate-500 dark:text-slate-400">MSD Manual Professional Edition. Page with a video and written steps.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="mattress-sutures-and-the-corner-stitch" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Mattress Sutures and the Corner Stitch
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Vertical and horizontal mattress stitches for wounds under tension or with edges that will not stay everted, and the corner (half-buried horizontal mattress) stitch for flap tips.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=GHxSKryRTeY" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 7: Vertical Mattress</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 1:10.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/basic-suturing-techniques/vertical-mattress-sutures/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Vertical Mattress Sutures (Closing The Gap)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=-Sa7VMcMCJA" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Vertical Mattress Suture (Geeky Medics)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=2URmHydtCSs" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 6: Horizontal Mattress</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 3:11.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/basic-suturing-techniques/horizontal-mattress-sutures/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Horizontal Mattress Sutures (Closing The Gap)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=6qF4mxB7KzM" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Horizontal Mattress Suture (Geeky Medics)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=kvjigkm7Mzc" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 8: Corner Suture</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 1:30.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/basic-suturing-techniques/the-corner-stitch/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Half-buried Horizontal Mattress Suture (Corner Stitch) (Closing The Gap)</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="buried-deep-dermal-and-subcuticular-sutures" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Buried (Deep Dermal) and Subcuticular Sutures
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Deep stitches that reduce tension on the skin, and subcuticular closure for a fine scar.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=Zc3T2pZJ440" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 9: Buried Suture</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 1:51.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/basic-suturing-techniques/simple-interrupted-dermal-sutures/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Deep Dermal Sutures (Closing The Gap)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://geekymedics.com/deep-dermal-suture-osce-guide/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Deep Dermal Suture OSCE Guide (Geeky Medics)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://geekymedics.com/subcuticular-suture-osce-guide/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Subcuticular Suture OSCE Guide (Geeky Medics)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/advanced-wound-closure-techniques/running-subcuticular-suturing/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Running Subcuticular Sutures (Closing The Gap)</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="running-sutures" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Running Sutures
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Continuous stitching for long wounds. Faster than interrupted sutures, but one break loosens the whole line.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/advanced-wound-closure-techniques/running-percutaneous-sutures/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Running Percutaneous Sutures (Closing The Gap)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.laparoscopyhospital.com/videos/public/videos/519/continuous-suturing-demonstration-by-dr-r-k-mishra-fnCrQMFXNv" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Continuous Suturing Demonstration</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="advanced-wound-closure" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Advanced Wound Closure
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Techniques for gaping or tight wounds and for tidying a closure.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/advanced-wound-closure-techniques/undermining/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Undermining (Closing The Gap)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/advanced-wound-closure-techniques/dog-ear-correction/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Dog Ear Correction (Closing The Gap)</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="alternatives-to-sutures-glue-strips-and-staples" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
Alternatives to Sutures: Glue, Strips and Staples
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Tissue adhesive, adhesive strips and staples. Useful when suture material is short, the wound is clean and low-tension, or the patient is a child or cannot return for suture removal.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=neb4OIqZeRo" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 10: Dermabond</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. Tissue adhesive. 1:56.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=uA6gMr1ScBo" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 11: Steristrips</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 0:39.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=_rOQg2wGlA4" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Closure Chapter 12: Staples</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ALiEM laceration repair series. 0:47.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/alternative-wound-closure/tissue-adhesive-glue/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Tissue Adhesive Glue (LacerationRepair.com)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/alternative-wound-closure/tissue-adhesive-tape/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Tissue Adhesive Tape (LacerationRepair.com)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/alternative-wound-closure/staples/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Staples (LacerationRepair.com)</a></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="face-eyelid-and-scalp" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
Face, Eyelid and Scalp
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Cosmetically and functionally sensitive sites. Eyelid lacerations near the lid margin or tear duct need specialist repair, so use the EyeRounds videos to recognise what is involved and refer when appropriate.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://lacerationrepair.com/advanced-wound-closure-techniques/lacerations-around-the-eye/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Lacerations Around the Eye (Closing The Gap)</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://eyerounds.org/video/plastics/1/repair-full-thickness-UpperLid-laceration.htm" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repair of full-thickness upper eyelid laceration</a><span class="block mt-1 text-slate-500 dark:text-slate-400">University of Iowa EyeRounds. 2:58. Tarsal sutures through lid margin and skin closure.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://eyerounds.org/video/plastics/1/repair-full-thickness-LL-laceration.htm" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repair of full-thickness lower eyelid laceration</a><span class="block mt-1 text-slate-500 dark:text-slate-400">University of Iowa EyeRounds.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://eyerounds.org/video/plastics/1/repair-LL-canalicular-laceration-1.htm" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repair of lower lid canalicular laceration 1</a><span class="block mt-1 text-slate-500 dark:text-slate-400">University of Iowa EyeRounds.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://eyerounds.org/video/plastics/1/repair-LL-canalicular-laceration-2.htm" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repair of lower lid canalicular laceration 2</a><span class="block mt-1 text-slate-500 dark:text-slate-400">University of Iowa EyeRounds.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://eyerounds.org/video/plastics/2/Upper-canalicular-laceration-repair.htm" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Upper canalicular laceration repair</a><span class="block mt-1 text-slate-500 dark:text-slate-400">University of Iowa EyeRounds.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://sinaiem.org/foam/hair-apposition" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">A HAT (Hair Apposition Technique) Trick</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Written guide to closing scalp lacerations by twisting hair, with no suture needed.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="hand-fingers-and-tendon" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
Hand, Fingers and Tendon
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Hand wounds hide tendon, nerve and joint injury. Examine function before you close anything.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://jomi.com/article/329" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Flexor Tendon Repair for a Zone 2 FDP Tendon Laceration</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Journal of Medical Insight. For senior trainees. Sign-up page shown, so access may need an account.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://broadcastmed.com/surgery/5253/videos/evaluation-and-initial-treatment-of-acute-hand-injuries" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Evaluation and Initial Treatment of Acute Hand Injuries</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Appeared in search results. Access not checked.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.broadcastmed.com/surgery/4919/videos/repair-of-flexor-tendon-and-nerve" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repair of Flexor Tendon and Nerve</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Appeared in search results. Access not checked.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://litfl.com/procedure-nail-bed-repair/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Procedure: Nail bed repair</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Written guide from Life in the Fast Lane.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="obstetric-repair-and-caesarean-closure" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
Obstetric Repair and Caesarean Closure
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Perineal and episiotomy repair, and uterine and abdominal closure at caesarean section. For tear assessment, emergency episiotomy and the Basic Features of Suturing video, see the Childbirth Video Series guide in this library.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/videos/repairing-a-perineal-tear/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Repairing a Perineal Tear</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Steps for repairing a second-degree tear.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=cp5sNRWUaVg" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Episiotomy repair</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.msdmanuals.com/professional/multimedia/video/how-to-repair-an-episiotomy" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How To Repair an Episiotomy</a><span class="block mt-1 text-slate-500 dark:text-slate-400">MSD Manual Professional Edition.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://pie.med.utoronto.ca/TVASurg/project/primary-vertex-caesarian-section/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Primary vertex caesarean section</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Toronto Video Atlas of Surgery. Presented as a patient case. Exteriorised two-layer uterine closure starts at 09:08, and abdominal closure at 13:25.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="operating-room-closure-and-anastomosis-advanced" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">15</span>
Operating-Room Closure and Anastomosis (Advanced)
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Operative suturing for senior trainees: vessel and bowel anastomoses and abdominal wall closure. These come from the Toronto Video Atlas of Surgery, an open-access atlas of animation-enhanced surgical videos.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://pie.med.utoronto.ca/TVASurg/project/technique-parachuteanastomosis/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Parachute arterial anastomosis</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://pie.med.utoronto.ca/TVASurg/project/side-to-side-arterioplasty/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Vascular technique: Side-to-side arterioplasty</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://pie.med.utoronto.ca/TVASurg/project/lpvanastomosis/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Left portal vein anastomosis</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://pie.med.utoronto.ca/TVASurg/project/pedhaanastomosis/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Microvascular hepatic artery reconstruction</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://pie.med.utoronto.ca/TVASurg/project/rouxeny-hj/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Roux-en-Y hepaticojejunostomy</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://pie.med.utoronto.ca/TVASurg/project/pjdunktech/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Pancreaticojejunostomy &ldquo;Dunk&rdquo; technique</a></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.atlasofpelvicsurgery.com/9AbdominalWall/6MassiveClosureoftheAbdominalWallWithaOne-KnotSuture/cha9sec6.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Massive Closure of the Abdominal Wall with a One-Knot Suture</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Atlas of Pelvic Surgery. Written atlas page.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="practice-and-simulation" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">16</span>
Practice and Simulation
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Suture practice kits and model-based tutorials. Practise here before you suture a patient.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://behindtheknife.org/video-playlists/behind-the-knife-suture-practice-kit-knot-tying-simulator-how-to-videos" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suture Practice Kit and Knot Tying Simulator How-To Videos</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Behind the Knife playlist. Instrument and one-hand ties.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://limbsandthings.com/au/suture-tutor/0606-09-local-anaesthesia" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suture Tutor: Local Anaesthesia</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Limbs &amp; Things training-model tutorial. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://limbsandthings.com/uk/suture-tutor/0904-suturing-techniques-continuous-sutures" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suture Tutor: Suturing Techniques, Continuous Sutures</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Limbs &amp; Things training-model tutorial. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suture-removal-and-aftercare" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">17</span>
Suture Removal and Aftercare
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">No suture-removal video was confirmed for this collection. Removal time depends on the site, and the usual ranges for non-absorbable skin sutures are below. Remove earlier on the face to limit marks, and later over joints and under tension.</p>
<div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
  <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400"><th class="py-2 pr-3">Site</th><th class="py-2 pr-3">Usual removal time</th></tr></thead>
  <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
    <tr><td class="py-2 pr-3">Face</td><td class="py-2 pr-3">3 to 5 days</td></tr>
    <tr><td class="py-2 pr-3">Scalp and arms</td><td class="py-2 pr-3">7 to 10 days</td></tr>
    <tr><td class="py-2 pr-3">Trunk</td><td class="py-2 pr-3">10 to 14 days</td></tr>
    <tr><td class="py-2 pr-3">Legs and joints</td><td class="py-2 pr-3">Up to 21 days</td></tr>
  </tbody>
</table></div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://opentextbc.ca/clinicalskills/chapter/4-4-suture-care-and-removal/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Suture care and removal (open clinical skills chapter)</a></div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">18</span>
Suggested Viewing Order
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Week 1: first sutures</strong>
  <p class="text-sm">ALiEM chapters 1 to 4 (equipment, anaesthesia, irrigation, starting), instrument tie (right and left), simple interrupted sutures (ALiEM, Geeky Medics and Closing The Gap), then practise on a model.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Week 2: common repairs</strong>
  <p class="text-sm">Vertical and horizontal mattress, the corner stitch, buried sutures, then glue, strips and staples.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Before an obstetrics posting</strong>
  <p class="text-sm">Repairing a Perineal Tear, episiotomy repair, and the caesarean closure video. See also the Childbirth Video Series guide.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Surgical rotation</strong>
  <p class="text-sm">Running and subcuticular sutures, the full courses, and the operating-room closure and anastomosis videos.</p>
</div>
</div>
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
<p class="font-brand font-semibold mb-3">Do Not Suture Until You Have Checked</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Tendon, nerve, vessel, joint or bone involvement, which needs examination of function and often X-ray.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Heavy contamination, bites, puncture wounds or a long delay since injury, which may call for debridement and delayed closure.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Tetanus status, and rabies risk after a dog or other animal bite.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Eyelid margin, tear duct, lip border or facial nerve injury, which need senior or specialist repair.</span></li>
</ul>
</div>

<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
<p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Anaesthesia, irrigation and good exposure matter as much as the stitch itself.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Learn the instrument tie with both hands, then the simple interrupted stitch, before moving to other techniques.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Watch the same technique from more than one teacher, then practise on a model before a patient.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Choose the closure to fit the wound: sutures, mattress stitches, glue, strips or staples, or no closure yet.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>These videos are mostly from high-income settings. Follow your own unit&rsquo;s protocols for antibiotics, tetanus and timing.</span></li>
</ul>
</div>

<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
<summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
  <span>References</span>
  <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</summary>
<div class="px-4 pb-4 space-y-2">
  <p class="text-[10px] leading-snug text-stone-500">Academic Life in Emergency Medicine (ALiEM). Wound closure video series. https://www.aliem.com/videos/</p>
  <p class="text-[10px] leading-snug text-stone-500">LacerationRepair.com (Closing The Gap). https://lacerationrepair.com/</p>
  <p class="text-[10px] leading-snug text-stone-500">Geeky Medics. Suturing guides. https://geekymedics.com/category/surgery/suturing/</p>
  <p class="text-[10px] leading-snug text-stone-500">Journal of Medical Insight. Suture Selection and Knot Tying Demonstration; Suturing Techniques. https://jomi.com/</p>
  <p class="text-[10px] leading-snug text-stone-500">University of Iowa Department of Ophthalmology and Visual Sciences, EyeRounds. Oculoplastics videos. https://eyerounds.org/video/plastics/plastics.htm</p>
  <p class="text-[10px] leading-snug text-stone-500">Toronto Video Atlas of Surgery. https://pie.med.utoronto.ca/TVASurg/</p>
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Repairing a Perineal Tear. https://globalhealthmedia.org/videos/repairing-a-perineal-tear/</p>
  <p class="text-[10px] leading-snug text-stone-500">MSD Manual Professional Edition. Wound care procedures and videos. https://www.msdmanuals.com/professional</p>
  <p class="text-[10px] leading-snug text-stone-500">New England Journal of Medicine. Videos in Clinical Medicine: Basic Laceration Repair.</p>
  <p class="text-[10px] leading-snug text-stone-500">Links were collected in November 2026 from search results and the source pages. The individual videos were not played, so the type of footage (real patient, cadaver or model) is not confirmed unless a card says so. Access to some items (JoMI, BroadcastMed, NEJM) may need an account. Sites may move or remove videos.</p>
</div>
</details>

</div>
</body>
</html>
  `
},

{
  id: 'resources-wound-dressing-video-collection',
  title: 'Wound Dressing Video Collection',
  category: 'External Resources',
  subCategory: 'Surgery',
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; SURGERY</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">Wound Dressing Video Collection</h1>
  <p class="text-sm text-indigo-200">A curated list of 38 resources on cleaning, dressing and bandaging wounds, arranged from the basic dressing change through packing, bandages and slings, compression, home care for patients, burns and negative pressure therapy. In Nigerian practice most wounds are dressed, not sutured, and many patients, from road-crash injuries to diabetic foot, sickle cell leg ulcers and burns, depend on dressings for weeks. Use this list to learn technique, then adapt it to the supplies you actually have.</p>
</div>
</div>


<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
<p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
<ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
  <li><a href="#about-this-collection" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Collection</span></a></li>
  <li><a href="#dressing-wounds-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Dressing Wounds in Nigerian Practice</span></a></li>
  <li><a href="#start-here-principles-and-the-basic-dressing-change" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Start Here: Principles and the Basic Dressing Change</span></a></li>
  <li><a href="#aseptic-technique-and-sterile-gloves" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Aseptic Technique and Sterile Gloves</span></a></li>
  <li><a href="#cleaning-irrigating-and-debriding" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Cleaning, Irrigating and Debriding</span></a></li>
  <li><a href="#packing-deep-wounds" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Packing Deep Wounds</span></a></li>
  <li><a href="#choosing-a-dressing" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Choosing a Dressing</span></a></li>
  <li><a href="#bandaging-and-slings" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Bandaging and Slings</span></a></li>
  <li><a href="#compression-therapy-for-leg-ulcers" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Compression Therapy for Leg Ulcers</span></a></li>
  <li><a href="#home-wound-care-for-patients-and-caregivers" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Home Wound Care for Patients and Caregivers</span></a></li>
  <li><a href="#burn-dressings" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Burn Dressings</span></a></li>
  <li><a href="#negative-pressure-wound-therapy" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Negative Pressure Wound Therapy</span></a></li>
  <li><a href="#skills-collections-for-nursing-students" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Skills Collections for Nursing Students</span></a></li>
  <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">14</span><span>Suggested Viewing Order</span></a></li></ul>
</nav>

<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-collection" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
About This Collection
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">These are a collection of resources about wound dressing. Dressing-change video that is free and shows real patients is limited, which is why this list also includes teaching series, college skills collections and humanitarian videos.</p>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">
  🔗 <a href="https://www.facs.org/Education/Patient-Education/Skills-Programs/wound-care" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">American College of Surgeons wound care skills program</a>
  &nbsp;&middot;&nbsp;
  📖 <a href="https://ewma.org/resource-limited-settings/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">EWMA: wound healing in resource-limited settings</a>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="dressing-wounds-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Dressing Wounds in Nigerian Practice
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li><strong>Ask what was applied.</strong> Patients often arrive after using home or herbal preparations on the wound. Ask without blame, wash it off with clean water, and explain why clean dressings work better.</li>
  <li><strong>Clean water and a moist, protected wound.</strong> Irrigation, removal of dead tissue and a dressing that keeps the wound bed moist and protected matter more than brand. Do not pack a wound tightly or leave a dressing on for days when it is soaked or smells.</li>
  <li><strong>Improvise safely.</strong> The low-resource manual in section 3 shows a layered dressing made from gauze, a greasy layer, plastic film, tape and bandage. Use what your unit stocks, and keep the wound clean and covered.</li>
  <li><strong>Tetanus and infection.</strong> Check tetanus status for every open wound, and teach patients the signs of infection: spreading redness, heat, swelling, pus, smell, fever and worsening pain.</li>
  <li><strong>Chronic wounds need a cause.</strong> For a leg or foot ulcer, look for diabetes, venous disease, sickle cell disease, poor arterial supply and neuropathy. The dressing alone will not heal it.</li>
  <li><strong>Cost and return visits.</strong> Many patients cannot afford frequent dressing changes or travel. Teach a carer, show the home-care videos, and agree when to return.</li>
</ul>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
  <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
  <p class="text-sm">Most of these videos come from high-income countries and often show products that are not stocked in Nigeria, such as foam, hydrocolloid, silver and vacuum dressings. Advice on antiseptics, antibiotics, tetanus prophylaxis, dressing change frequency and when to refer can differ from WHO guidance, FMOH guidance and your hospital&rsquo;s protocol. Where they differ, follow the local protocol and ask your senior.</p>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="start-here-principles-and-the-basic-dressing-change" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Start Here: Principles and the Basic Dressing Change
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Begin with a clear walk-through of a routine dressing change, then the principles behind it. The two written guides were produced for low-resource settings and are the closest match to many Nigerian clinics.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/basic-wound-care-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Basic Wound Care</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://youtu.be/yfcti9Rjtfg" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Care (instructor demonstration)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Open RN Project, CC-BY. The page calls it an instructor demonstration. It does not say whether it shows a person or a manikin.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://oxfordmedicaleducation.com/videos/basic-wound-care-clinical-skills/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Basic Wound Care &ndash; Clinical Skills</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Oxford Medical Education. Plays through an embedded YouTube video. Footage type not stated.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://opentextbc.ca/clinicalskills/chapter/4-2-simple-dressing-change/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Simple Dressing Change (clinical skills chapter with Video 4.1)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Open clinical skills textbook, with a checklist and one video. The page does not name the video&rsquo;s maker.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.ilds.org/what-we-do/our-foundation/csh-journal/how-to-make-a-basic-dressing/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to make a basic dressing in a low-resource setting: instruction manual</a><span class="block mt-1 text-slate-500 dark:text-slate-400">International League of Dermatological Societies, 2024. Hand hygiene, removing the old dressing, cleaning, and a layered dressing of greased gauze, secondary gauze, plastic film, tape and bandage. Written, no video.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.ilds.org/what-we-do/our-foundation/csh-journal/the-six-basic-principles-of-wound-management-for-low-resource-settings/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The six basic principles of wound management for low-resource settings</a><span class="block mt-1 text-slate-500 dark:text-slate-400">International League of Dermatological Societies, 2024. Written, no video.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="aseptic-technique-and-sterile-gloves" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Aseptic Technique and Sterile Gloves
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Hand hygiene, clean versus sterile technique, and putting on sterile gloves without contaminating them.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://youtu.be/lumZOF-METc" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Sterile gloving nursing technique</a><span class="block mt-1 text-slate-500 dark:text-slate-400">RegisteredNurseRN on YouTube, cited by an open nursing skills textbook.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="cleaning-irrigating-and-debriding" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Cleaning, Irrigating and Debriding
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Prepare the wound bed before any dressing goes on. Clean water irrigation and removal of dead tissue matter more than the dressing you choose.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/cleaning-a-wound-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Cleaning a Wound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/debriding-a-wound-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Debriding a Wound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="packing-deep-wounds" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Packing Deep Wounds
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Deep, open and abscess cavity wounds are packed to heal from the base up. See also the packing video in the American College of Surgeons program below.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/deep-wound-packing-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Deep Wound Packing</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="choosing-a-dressing" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Choosing a Dressing
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">There is no video in this collection on dressing selection, so the entry below is a written guide. Choose by wound depth, amount of drainage, infection and what your unit stocks.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.pharmaceutical-journal.com/cpd-and-learning/learning-article/how-to-select-a-wound-dressing/11039846.article" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to select a wound dressing</a><span class="block mt-1 text-slate-500 dark:text-slate-400">The Pharmaceutical Journal. Written learning article. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="bandaging-and-slings" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Bandaging and Slings
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Securing a dressing with a roller bandage, bandaging the hand, elbow and knee, and supporting an arm in a triangular sling.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.sja.org.uk/first-aid-advice/hand-bandage/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to bandage a hand</a><span class="block mt-1 text-slate-500 dark:text-slate-400">St John Ambulance. Page with one embedded video and six numbered steps.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.sja.org.uk/first-aid-advice/elbow-and-knee-bandage/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to put on elbow and knee bandages</a><span class="block mt-1 text-slate-500 dark:text-slate-400">St John Ambulance. Written steps and images. No video found on the page.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.sja.org.uk/first-aid-advice/bandage-dressing/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to put on a bandage</a><span class="block mt-1 text-slate-500 dark:text-slate-400">St John Ambulance. Written steps. No video found on the page.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.sja.org.uk/first-aid-advice/wound-dressing/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to apply a dressing</a><span class="block mt-1 text-slate-500 dark:text-slate-400">St John Ambulance. Linked from the bandage page. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://promoting-healthy-skin.qut.edu.au/m3_management.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Bandage application (module 3)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Queensland University of Technology. One short video on applying a simple bandage, under compression bandages. The page does not say whether it shows a patient.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.youtube.com/watch?v=i-PLKmnVOSo" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Triangular Sling</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Luxembourg fire and rescue service. Immobilising an upper limb with a triangular bandage.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.msdmanuals.com/professional/multimedia/video/how-to-apply-a-shoulder-sling-and-swathe-and-shoulder-immobilizer" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">How to Apply a Shoulder Sling and Swathe and Shoulder Immobilizer</a><span class="block mt-1 text-slate-500 dark:text-slate-400">MSD Manual Professional Edition. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/making-a-sling-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Making a Sling</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.osmosis.org/learn/Integumentary:_Applying_dressings_and_bandages_(for_nursing_assistant_training)" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Applying Dressings and Bandages (nursing assistant training)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Osmosis. Appeared in search results. Page not opened and likely needs a subscription.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="compression-therapy-for-leg-ulcers" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Compression Therapy for Leg Ulcers
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Compression is the mainstay for venous leg ulcers, and venous disease and sickle cell disease are both common causes of leg ulcers in Nigeria. Check the arterial supply before applying compression.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.clwk.ca/unna-boot-compression-therapy/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Unna boot compression wrap (8 minutes)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Linked from a Canadian wound-care resource page. The page says the video may take 1 to 2 minutes to download. Producer and footage type not stated.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="http://www.youtube.com/watch?v=FsEA7ECLtnY" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Compression bandaging application (Actico)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Listed by a leg-care charity. The page does not state the maker. The link label names the product Actico, so this may be a manufacturer video.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="home-wound-care-for-patients-and-caregivers" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Home Wound Care for Patients and Caregivers
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Plain-language videos for patients, families and community workers. Useful to show before discharge.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.facs.org/Education/Patient-Education/Skills-Programs/wound-care" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Care Skills Program (6 videos)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">American College of Surgeons with partner societies. Six video demonstrations: Caring for Lacerations and Abrasions, Wound Cleaning, Packing a Wound, Dressings and Bandaging, Caring for Your Surgical Drain, and Negative Pressure Wound Therapy. The page gives one embed link for all six, so find each video on the page. Booklets on surgical wounds, pressure ulcers, diabetic foot ulcers and venous leg ulcers are included.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.sikana.tv/en/health/first-aid/first-aid-minor-wound" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid: Minor Wound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Sikana. Wash hands, rinse with clean water and soap, cover with sterile gauze, check tetanus status, and watch for infection.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.sikana.tv/en/health/first-aid/first-aid-serious-wound" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid: Serious Wound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Sikana. Appeared as a related video. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.sikana.tv/en/health/first-aid/first-aid-bleeding" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid: Bleeding</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Sikana. Appeared as a related video. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/home-care-of-wounds-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Home Care of Wounds</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/first-aid-for-wounds-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid for Wounds</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="burn-dressings" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
Burn Dressings
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Burn dressings follow different rules from other wounds, and most patients need fluids, pain control and referral decisions first. The Burn Care Video Series guide in this library covers the full set.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/dressing-a-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Dressing a Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/dressing-the-hand-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Dressing the Hand Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/dressing-a-new-burn-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Dressing a New Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://globalhealthmedia.org/video/home-care-of-burns-english/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Home Care of Burns</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Global Health Media Project. Link taken from your earlier list. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.sikana.tv/en/health/first-aid/first-aid-minor-burn" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid: Minor Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Sikana. Appeared as a related video. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.sikana.tv/en/health/first-aid/first-aid-serious-burn" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">First Aid: Serious Burn</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Sikana. Appeared as a related video. Not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://ewma.org/wp-content/uploads/2024/06/Thermal-burns-in-less-resourced-settings-EN.pdf" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Thermal burns in less resourced settings</a><span class="block mt-1 text-slate-500 dark:text-slate-400">European Wound Management Association. Written PDF. Appeared in search results. Not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="negative-pressure-wound-therapy" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
Negative Pressure Wound Therapy
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Vacuum dressings are rare outside large centres, so this is for awareness. It is also demonstrated in the American College of Surgeons program above.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://www.hmpgloballearningnetwork.com/site/wounds/how-demonstration/negative-pressure-wound-therapy-npwt-devices" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Negative Pressure Wound Therapy (NPWT) Devices</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Wounds journal how-to demonstration, 2025. Applies three NPWT products. The transcript mentions a patient, but the page does not say whether this is a volunteer or a model.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="skills-collections-for-nursing-students" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
Skills Collections for Nursing Students
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Institutional skills libraries covering assessment, irrigation, dressing changes, pressure ulcers and drains. Some may need a college login.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://library.mohawkcollege.ca/research-guides/practical-nursing/wound-care" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound Care and Management Online Videos</a><span class="block mt-1 text-slate-500 dark:text-slate-400">College library guide. Lists Assessing Wounds, Irrigating Wounds, Changing a Dressing, Caring for Pressure Ulcers, Using Wound Drainage Systems and Mosby&rsquo;s wound care segments. The page gives no links, so access may need institutional login.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">🔗 <a href="https://mediasite.rcc.edu/nursingskills/intermediate/skill/R005.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Wound care skills (assessing wounds, irrigating, changing a dressing, drainage systems)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Community college nursing skills site. Each skill has a procedure video, guidelines and a checklist. Pick the skill from the Select a Skill menu.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
Suggested Viewing Order
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First week on the ward</strong>
  <p class="text-sm">Basic Wound Care, Wound Care (instructor demonstration), the sterile gloving video, Cleaning a Wound, then the ILDS basic dressing manual.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Surgical or emergency posting</strong>
  <p class="text-sm">Debriding a Wound, Deep Wound Packing, the bandaging and sling videos, and the American College of Surgeons program.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Leg ulcers and chronic wounds</strong>
  <p class="text-sm">The six principles of wound management, the compression and Unna boot videos, and the ACS booklets on diabetic foot, pressure ulcers and venous ulcers.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Teaching patients and carers</strong>
  <p class="text-sm">Home Care of Wounds, First Aid for Wounds, First Aid: Minor Wound, Home Care of Burns and the ACS program.</p>
</div>
</div>
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
<p class="font-brand font-semibold mb-3">Findings That Must Not Be Missed</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Spreading cellulitis, fever, severe pain out of proportion to the wound, blistering, dusky skin or gas, which can mean necrotising infection and need urgent surgery.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>A cold, pulseless or very painful limb before any compression bandage, because compression is unsafe with poor arterial supply.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Exposed tendon, bone, joint or retained foreign body, which needs examination, imaging or referral.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>A diabetic foot ulcer with deep infection, bone involvement or gangrene.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Wounds from bites, rusty or soiled objects, with unknown tetanus status, or after snakebite with swelling and bleeding.</span></li>
</ul>
</div>

<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
<p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Clean, remove dead tissue and protect the wound. The cleaning matters more than the dressing brand.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use hand hygiene and clean or sterile technique to suit the wound, and check tetanus status.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Pack deep wounds loosely and heal them from the base up.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Find and treat the cause of a chronic ulcer, and check the arterial supply before compression.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Teach the carer, and give clear signs for when to return. Many patients cannot attend often.</span></li>
</ul>
</div>

<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
<summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
  <span>References</span>
  <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</summary>
<div class="px-4 pb-4 space-y-2">
  <p class="text-[10px] leading-snug text-stone-500">International League of Dermatological Societies. Community Skin Health: How to make a basic dressing in a low-resource setting; The six basic principles of wound management for low-resource settings (2024). https://www.ilds.org/</p>
  <p class="text-[10px] leading-snug text-stone-500">American College of Surgeons. Wound Care Skills Program. https://www.facs.org/Education/Patient-Education/Skills-Programs/wound-care</p>
  <p class="text-[10px] leading-snug text-stone-500">Open RN Project. Wound care (CC-BY).</p>
  <p class="text-[10px] leading-snug text-stone-500">St John Ambulance. First aid advice: bandaging. https://www.sja.org.uk/first-aid-advice/</p>
  <p class="text-[10px] leading-snug text-stone-500">Sikana Education. First aid videos. https://www.sikana.tv/en/health/first-aid/</p>
  <p class="text-[10px] leading-snug text-stone-500">Global Health Media Project. Video library. https://globalhealthmedia.org/video/</p>
  <p class="text-[10px] leading-snug text-stone-500">European Wound Management Association. Wound healing in resource-limited settings. https://ewma.org/resource-limited-settings/</p>
  <p class="text-[10px] leading-snug text-stone-500">Links were collected in November 2026 from search results and the source pages. The individual videos were not played, so the type of footage is not confirmed unless a card says so. Some items (college libraries, Osmosis, journal sites) may need a login. Sites may move or remove videos.</p>
</div>
</details>

</div>
</body>
</html>
  `
},

{
  id: 'resources-ultrasonography-course-collection',
  title: 'Ultrasonography Course Collection',
  category: 'External Resources',
  subCategory: 'Radiology',
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">RESOURCES &middot; RADIOLOGY</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">Ultrasonography Course Collection</h1>
  <p class="text-sm text-indigo-200">A curated list of 35 resources for learning ultrasound, arranged from physics and probe handling through eFAST, cardiac, lung and obstetric scanning, procedures and low-resource references. In Nigerian practice a bedside scan is often the only imaging a patient can afford or reach in time, so being able to scan well matters. Use this list to learn technique, then practise under supervision on real patients.</p>
</div>
</div>


<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
<p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
<ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
  <li><a href="#about-this-collection" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>About This Collection</span></a></li>
  <li><a href="#ultrasound-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Ultrasound in Nigerian Practice</span></a></li>
  <li><a href="#start-here-physics-probes-and-knobology" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Start Here: Physics, Probes and Knobology</span></a></li>
  <li><a href="#structured-courses-and-video-libraries" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Structured Courses and Video Libraries</span></a></li>
  <li><a href="#trauma-and-the-efast-exam" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Trauma and the eFAST Exam</span></a></li>
  <li><a href="#cardiac-ultrasound-and-the-ivc" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Cardiac Ultrasound and the IVC</span></a></li>
  <li><a href="#lung-ultrasound" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Lung Ultrasound</span></a></li>
  <li><a href="#obstetric-and-gynaecological-ultrasound" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Obstetric and Gynaecological Ultrasound</span></a></li>
  <li><a href="#ultrasound-guided-procedures" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Ultrasound-Guided Procedures</span></a></li>
  <li><a href="#low-resource-settings" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Low-Resource Settings</span></a></li>
  <li><a href="#paid-courses-to-know-about" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Paid Courses to Know About</span></a></li>
  <li><a href="#suggested-viewing-order" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Suggested Viewing Order</span></a></li></ul>
</nav>

<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="about-this-collection" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
About This Collection
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">The links come from searches and from the source pages opened while this list was compiled, in November 2026. Each link was returned by a search or listed on an opened page. The individual videos were not played, so the type of footage (real patient, volunteer or manikin) is not confirmed unless a card says so. Items marked 📖 are written guides rather than video.</p>
<p class="text-sm">Truly free, complete ultrasound courses are rare. Many of the best are paid, so a short section near the end lists them for comparison. Cards say when a page needs a login or a subscription, or when I could not tell. A few pages would not open, and those are marked.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="ultrasound-in-nigerian-practice" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Ultrasound in Nigerian Practice
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li><strong>Scan to answer a question.</strong> Point-of-care ultrasound answers a focused question at the bedside, such as free fluid, pericardial effusion, pneumothorax, or fetal heart activity. It does not replace a formal scan by a trained sonographer or radiologist.</li>
  <li><strong>Know your scope.</strong> Local rules on who may perform and report scans differ between professions and facilities. Ask your department what you are permitted to do, and record what you scan.</li>
  <li><strong>Supervised practice matters.</strong> Videos teach the views, but skill comes from scanning many patients with feedback. Log your scans and ask a senior to review images.</li>
  <li><strong>Machines vary.</strong> Many units have a single older machine, or a handheld probe. Learn the controls on the machine you actually have.</li>
  <li><strong>Common uses here.</strong> Trauma and road-crash injuries, pregnancy complications such as bleeding and malpresentation, dyspnoea from heart failure, effusions and pneumonia, and abdominal pain.</li>
  <li><strong>Cost and referral.</strong> Because formal imaging is costly, a good bedside scan can speed referral decisions. Tell the patient clearly what you did and did not exclude.</li>
</ul>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
  <strong class="block font-semibold pb-2 mb-2 border-b border-amber-200 dark:border-amber-700">Guideline Watch</strong>
  <p class="text-sm">Most of these courses come from the United States, Europe and Australia and assume a machine, a trained teacher and referral CT. Scope of practice, indications, timing of antenatal scans and what to do with an abnormal finding can differ from WHO guidance, FMOH guidance and your hospital&rsquo;s protocol. Where they differ, follow the local protocol and ask your senior.</p>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="start-here-physics-probes-and-knobology" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Start Here: Physics, Probes and Knobology
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Learn what the machine is doing before you scan. Choose the right probe, hold it correctly, and use depth, gain and focus. Most poor images come from skipping this.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://geekymedics.com/a-beginners-guide-to-ultrasound/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">A beginner&rsquo;s guide to ultrasound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Geeky Medics. Indications, probe choice, probe movements, B-mode, M-mode and Doppler, depth, gain and focus, and a quick-start checklist. Images and text only, with no embedded video.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://images.radiopaedia.org/courses/imaging-physics-lectures" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Introduction to ultrasound physics (25-minute lecture)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Radiopaedia imaging physics lecture collection, presented by Amy Barnes. The page says free access is available to people in low- and middle-income regions, subject to eligibility. Otherwise it needs a paid pass.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.med.upenn.edu/POCUS/knobology/physics.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Knobology, Physics and Probes</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Penn point-of-care ultrasound education. Five embedded videos. The page notes one of them (POCUS Pearls) is free on the university network only, so it may not open for you.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://litfl.com/pocus-made-easy/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">POCUS Made Easy (11 short videos)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Life in the Fast Lane, by Dr Fahad Yousif. The page describes 11 teaching videos of 2 to 8 minutes plus pages on eFAST and basic principles. The video list did not load when I opened it. Pricing is not stated.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.acep.org/sonoguide/basic/ultrasound-physics-and-technical-facts-for-the-beginner" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Ultrasound physics and technical facts for the beginner</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ACEP Sonoguide. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://litfl.com/point-of-care-ultrasound-essentials/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">LITFL Point-of-Care Ultrasound Essentials</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Life in the Fast Lane. Appeared in search results. Page not opened. The page would not open when I tried it.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="structured-courses-and-video-libraries" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Structured Courses and Video Libraries
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Broader collections you can work through in order. Most were built for emergency and critical care teams.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.vumc.org/emergencymedicine/node/13" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Critical Care Ultrasound (CCUS) curriculum</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Vanderbilt emergency medicine. Lists video modules with run times: physics and knobology (3 videos, 32 min), cardiac, lung, FAST, aorta, bowel, IVC, DVT, and ultrasound-guided IV and central lines. The page gives no per-video links and does not state pricing.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://emergencymedicinecases.com/videos/pocus-cases/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">POCUS Cases (10 videos)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Emergency Medicine Cases, led by Dr Robert Simard. Case-based videos on pulmonary embolism, pneumothorax, ocular ultrasound, distal radius fracture, small bowel obstruction, pericardial effusion, IVC, LV dysfunction, free fluid and aortic aneurysm. Access terms are not stated.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://coreultrasound.com/category/5-minute-sono/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">5 Minute Sono</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Core Ultrasound. Short topic posts, such as IVC (2024) and pyloric stenosis, so it also helps with the IVC. Pricing not stated. Some Core Ultrasound courses are paid.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://societyofpointofcareultrasound.wildapricot.org/FOAMED" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">FOAMed ultrasound resource directory</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Society of Point of Care Ultrasound. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://litfl.com/ultrasound-library/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">LITFL Ultrasound Library</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Life in the Fast Lane. Index of basics, lung, cardiac, renal, ocular and airway modules, procedures and the Top 100 cases. Links to some Medmastery material that may be paid. One peripheral IV course is labelled free.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="trauma-and-the-efast-exam" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Trauma and the eFAST Exam
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Free fluid in the abdomen, chest and pericardium, and pneumothorax. This is the scan that changes decisions in a hypotensive trauma patient.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.acep.org/sonoguide/FAST.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Extended FAST (eFAST) in Sonoguide</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ACEP Sonoguide, by Andrea Rowland-Fisher and Robert Reardon. Text, 15 figures, and 27 video clips of normal anatomy, free fluid, pleural effusion and lung sliding. Access terms not stated.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://jetem.org/efastems/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">eFAST curriculum for prehospital clinicians</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Journal of Education and Teaching in Emergency Medicine, open access under CC BY 4.0. Penn State and WellSpan authors. About 2.5 hours of lectures and a hands-on workshop plan. Video archives are downloadable. Built for EMS staff but useful for any teacher.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.jove.com/v/65066" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">FAST Exam: Image Acquisition</a><span class="block mt-1 text-slate-500 dark:text-slate-400">JoVE. Appeared in search results. Page not opened. JoVE usually needs an institutional subscription.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://coreultrasound.com/?p=9038" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Abdominal FAST in 5 Minute Sono (2024)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Core Ultrasound. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="cardiac-ultrasound-and-the-ivc" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Cardiac Ultrasound and the IVC
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Focused cardiac views to look for pericardial effusion, gross LV function and RV size, and the IVC for volume status.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://medicine.yale.edu/media-player/focus" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Focused Cardiac Ultrasound (Yale)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Yale School of Medicine. At least 16 minutes. Probe placement and the five standard views (parasternal long and short axis, apical four-chamber, subxiphoid, IVC). Normal and abnormal clips are from patients of various ages, including children and a newborn. The page does not name the presenter.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://jomi.com/article/322" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Introduction to Bedside Cardiac Ultrasound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Journal of Medical Insight. Appeared in search results. Page not opened. JoMI is usually subscription-based.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://litfl.com/echo-pericardial-effusion/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Echo: pericardial effusion</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Life in the Fast Lane. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="lung-ultrasound" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Lung Ultrasound
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Pleural sliding, B-lines, consolidation and effusion. Useful in dyspnoea, pneumonia, heart failure and trauma, and it needs no radiation.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://stanfordmedicine25.stanford.edu/the25/lung-ultrasound.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Comprehensive Guide to Lung Ultrasound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Stanford Medicine 25. A video presented by Dr John Kugler plus the POCUS playlist. The page is public, with no login or fee mentioned. Footage type not stated.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://medicine.yale.edu/media-player/lus-part-1-pocus/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Lung Ultrasound (LUS) Part 1</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Yale. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://medicine.yale.edu/media-player/lus-part-2-pocus" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Lung Ultrasound (LUS) Part 2</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Yale. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="obstetric-and-gynaecological-ultrasound" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Obstetric and Gynaecological Ultrasound
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">For midwives, doctors and sonographers. Start with the film and lectures, then use the outreach curriculum to see what a basic competency list looks like.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.isuog.org/resource/the-basic-steps-of-an-obstetric-ultrasound-film.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The Basic Steps of an Obstetric Ultrasound</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ISUOG with Medical Aid Films, 2019. A film on doing an efficient second- and third-trimester scan. Embedded as a Vimeo video. Length, languages and cost are not stated.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.isuog.org/education/basic-training1/basic-training-online-resources/basic-training-online-module-new.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">ISUOG Basic Training Online (30 lectures)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ISUOG. Physics and safety, transducers, Doppler, early pregnancy at 4 to 14 weeks, biometry, placenta and fluid, fetal anatomy, growth and gynaecological ultrasound. Licensed CC BY-NC-ND 4.0. The page has a login link and does not state a price or whether login is needed.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.isuog.org/education/basic-training.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">ISUOG basic training films</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ISUOG. Names a first film, The Principles of Ultrasound, made with Medical Aid Films. No video link or pricing on the page.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.isuog.org/education/outreach/outreach-resources/isuog-outreach-training.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">ISUOG Outreach training programme</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ISUOG. A three-phase course for basic obstetric and gynaecological ultrasound where sonographers are scarce. It links a curriculum outline and a scanning skills checklist. The page says it is not a comprehensive course and does not state cost.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://medicalaidfilms.org/watch/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Medical Aid Films: watch library</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Medical Aid Films says its 300-plus films are free to view and download in 25 languages. I did not confirm which ones cover ultrasound.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://clarius.com/fr/?p=14909" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Clarius Ultrasound Education for Obstetrics</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Clarius, a scanner manufacturer. Appeared in search results. Page not opened. The link opens the French site version.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="ultrasound-guided-procedures" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Ultrasound-Guided Procedures
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Needle guidance for lines, blocks and drainage. Learn the diagnostic views first.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.acep.org/sonoguide/abscess.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Abscess in Sonoguide</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ACEP Sonoguide. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.acep.org/sonoguide/nerve_block.html" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Nerve block in Sonoguide</a><span class="block mt-1 text-slate-500 dark:text-slate-400">ACEP Sonoguide. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="low-resource-settings" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Low-Resource Settings
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Written references that assume you may have one machine and little back-up.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.who.int/publications/i/item/9789241547451" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">WHO Manual of Diagnostic Ultrasound, 2nd edition, Volume 1</a><span class="block mt-1 text-slate-500 dark:text-slate-400">World Health Organization. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://www.who.int/publications/i/item/9789241548540" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">WHO Manual of Diagnostic Ultrasound, 2nd edition, Volume 2</a><span class="block mt-1 text-slate-500 dark:text-slate-400">World Health Organization. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="paid-courses-to-know-about" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
Paid Courses to Know About
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Listed so you can compare. A Life in the Fast Lane review (page opened) rated these providers and gave the prices, which change often.</p>
<div class="space-y-2">
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📖 <a href="https://litfl.com/best-online-ultrasound-course-providers/" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">The 18 Best Online Ultrasound Course Providers</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Life in the Fast Lane. Compares Medmastery, 123sonography, Gulf Coast Ultrasound Institute, Core Ultrasound, SonoSim, IAME, Aeyr, RSNA, ASUM and Sonoskills. It also lists a few free items.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.medmastery.com/course/point-care-ultrasound-essentials" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Point-of-Care Ultrasound Essentials (Medmastery)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Medmastery. Paid, with some free first chapters per the review. Appeared in search results. Page not opened.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://www.medcram.com/courses/clinical-bedside-ultrasound" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Ultrasound Made Easy (MedCram)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">MedCram. Appeared in search results. Page not opened. Likely paid.</span></div>
  <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">📹 <a href="https://courses.coreultrasound.com/courses/fundamentals-primary-care" target="_blank" rel="noopener" class="text-indigo-600 dark:text-indigo-400 underline">Fundamentals of Primary Care Ultrasound (Core Ultrasound)</a><span class="block mt-1 text-slate-500 dark:text-slate-400">Core Ultrasound. Paid per the review. Appeared in search results. Page not opened.</span></div>
</div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="suggested-viewing-order" style="scroll-margin-top:1.5rem;">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
Suggested Viewing Order
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Week 1: the machine</strong>
  <p class="text-sm">The Geeky Medics beginner&rsquo;s guide, the physics lecture, and the Knobology, Physics and Probes videos. Practise holding the probe and adjusting depth and gain on a colleague.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Weeks 2 to 4: emergency views</strong>
  <p class="text-sm">The eFAST guide and curriculum, then POCUS Cases and the lung ultrasound videos. Scan under supervision and log each scan.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cardiac and IVC</strong>
  <p class="text-sm">Yale Focused Cardiac Ultrasound, then the IVC and pericardial effusion material.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Obstetrics</strong>
  <p class="text-sm">The Basic Steps film, then the ISUOG lectures, with the outreach checklist as your target list of skills.</p>
</div>
</div>
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
<p class="font-brand font-semibold mb-3">Findings That Must Not Be Missed</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Free fluid in a hypotensive trauma patient, which usually means urgent surgical review and not further scanning.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Pericardial effusion with a collapsed right heart or a plethoric IVC in a shocked patient, which suggests tamponade.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Absent lung sliding in a patient with breathlessness or chest trauma, which suggests pneumothorax.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>No intrauterine pregnancy with free fluid or pain in an early pregnancy, which raises concern for an ectopic pregnancy.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span>Bleeding in late pregnancy: a low-lying or covering placenta is a reason to avoid a digital vaginal examination and to refer.</span></li>
</ul>
</div>

<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-200">
<p class="font-brand font-semibold mb-3">Key Clinical Takeaways</p>
<ul class="space-y-2 text-sm">
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask one clear question before you scan, and answer only that question.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Get the image right first: the right probe, depth, gain and a stable view.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A negative or limited scan does not rule out disease. Repeat it, or use other tests, if the patient does not fit.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Treat the patient, not the picture. Combine findings with history and examination.</span></li>
  <li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Skill comes from supervised scanning and review, not from videos alone.</span></li>
</ul>
</div>

<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
<summary class="flex items-center justify-between cursor-pointer p-4 font-brand font-semibold text-slate-800 dark:text-slate-200 list-none">
  <span>References</span>
  <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</summary>
<div class="px-4 pb-4 space-y-2">
  <p class="text-[10px] leading-snug text-stone-500">International Society of Ultrasound in Obstetrics and Gynecology. Basic Training, Outreach programme and educational films. https://www.isuog.org/</p>
  <p class="text-[10px] leading-snug text-stone-500">American College of Emergency Physicians. Sonoguide. https://www.acep.org/sonoguide</p>
  <p class="text-[10px] leading-snug text-stone-500">World Health Organization. Manual of diagnostic ultrasound, 2nd edition. https://www.who.int/publications/</p>
  <p class="text-[10px] leading-snug text-stone-500">Journal of Education and Teaching in Emergency Medicine. eFAST curriculum for prehospital clinicians. https://jetem.org/efastems/</p>
  <p class="text-[10px] leading-snug text-stone-500">Radiopaedia. Imaging physics lectures. https://images.radiopaedia.org/courses/imaging-physics-lectures</p>
  <p class="text-[10px] leading-snug text-stone-500">Life in the Fast Lane. Ultrasound library and review of online ultrasound course providers. https://litfl.com/</p>
  <p class="text-[10px] leading-snug text-stone-500">Links were collected in November 2026 from search results and the source pages. The individual videos were not played, so the type of footage is not confirmed unless a card says so. Some items (journals, university sites, paid providers) may need a login or payment. Sites may move or remove videos.</p>
</div>
</details>

</div>
</body>
</html>
  `
},

];