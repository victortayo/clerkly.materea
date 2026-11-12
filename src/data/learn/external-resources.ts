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

];