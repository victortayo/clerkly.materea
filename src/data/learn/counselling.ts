import { LearningModule } from '../../types/learn';

export const COUNSELLING_CONTENT: LearningModule[] = [


      // COUNSELLING
      {
        id: 'counselling-peptic-ulcer-disease',
        title: 'Peptic Ulcer Disease',
        category: 'Counselling',
        subCategory: 'Gastrointestinal',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Counselling Guide for a Patient with Peptic Ulcer Disease</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      .quote { border-left: 3px solid; }
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Counselling</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Counselling a Patient with Peptic Ulcer Disease</h1>
        <p class="text-sm text-indigo-200">Peptic ulcer counselling has to correct two things almost every patient believes: that spicy food or stress caused it, and that pain resolving means treatment is finished. Neither is true, and both drive the two most common reasons for recurrence - unrecognised NSAID use and early discontinuation. This guide gives a structured session adapted for a Nigerian setting, including where local H. pylori resistance patterns actually change the treatment regimen.</p>
      </div>
      </div>
      
      <!-- 1. Rapport -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Introduction and Establishing Rapport
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Good morning/afternoon. My name is Dr. ____. I'd like to talk with you about the stomach/abdominal symptoms you've been having, what's likely causing them, and how we can treat and prevent them from coming back."</p>
      <p class="text-sm">Ensure privacy. Many patients have already self-medicated extensively before presenting - ask early and non-judgmentally what they have already tried, since this shapes both the explanation and the treatment plan.</p>
      </div>
      
      <!-- 2. Explaining -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Explaining Peptic Ulcer Disease
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">What Is a Peptic Ulcer?</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"The lining of your stomach and the first part of your small intestine is normally protected from the acid your stomach produces. A peptic ulcer is a break in that protective lining, caused either by too much acid, a weakened protective lining, or both. It can happen in the stomach or in the duodenum, just after the stomach."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Explaining the Diagnosis</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Based on your symptoms [and test results, if done], this is consistent with a peptic ulcer. The good news is this is very treatable, and in most cases we can identify and remove the underlying cause so it doesn't come back."</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Correcting Common Misconceptions</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">What the patient says</th>
              <th class="py-2 pr-3 font-medium">What it reflects</th>
              <th class="py-2 font-medium">How to respond</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">"It's from eating spicy/pepper food"</td><td class="py-2 pr-3">Overattribution of symptom triggers to diet as the root cause</td><td class="py-2">Acknowledge that spicy food can worsen symptoms in someone who already has an ulcer, but explain that it does not itself cause the ulcer - the two main causes are a specific stomach infection (H. pylori) and certain pain medications.</td></tr>
            <tr><td class="py-2 pr-3">"It's from too much stress/worry alone"</td><td class="py-2 pr-3">Partial truth taken as the whole explanation</td><td class="py-2">Explain that stress can worsen symptoms and slow healing, but is very rarely the sole cause - ask specifically about pain medication use and prior treatment for stomach infection before accepting stress as the explanation.</td></tr>
            <tr><td class="py-2 pr-3">"I take paracetamol/aspirin/diclofenac for body pain, it has nothing to do with my stomach"</td><td class="py-2 pr-3">Common and consequential - NSAID use is a leading cause and often not volunteered unless asked directly</td><td class="py-2">Ask specifically about all pain medications, including those bought over the counter, and explain the mechanism directly: certain pain medications reduce the stomach's natural protection against its own acid.</td></tr>
            <tr><td class="py-2 pr-3">"Ulcer is just 'hot stomach' from eating irregularly, not a real sickness"</td><td class="py-2 pr-3">Cultural framing that can delay presentation or reduce perceived seriousness</td><td class="py-2">Validate the lived experience (irregular eating and delayed meals can worsen symptoms) while clearly stating this is a recognised medical condition with an identifiable cause and effective treatment.</td></tr>
            <tr><td class="py-2 pr-3">"Once the pain stops, I don't need to finish the medication"</td><td class="py-2 pr-3">The same adherence pattern seen in most chronic/subacute conditions</td><td class="py-2">Explain directly that pain relief occurs before the ulcer or infection is fully treated, and stopping early is the most common reason ulcers recur or fail to heal.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 3. Causes -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Causes and Risk Factors
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Major Causes</strong>
        <p class="text-sm"><em>Helicobacter pylori</em> infection - the leading cause of peptic ulcer disease worldwide and in Nigeria. NSAIDs (ibuprofen, diclofenac, aspirin, and other pain medications) - a major and frequently underreported cause, particularly with regular self-medication for chronic body pains, arthritis, or headache.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Contributing/Risk Factors</strong>
        <p class="text-sm">Smoking (impairs healing and increases recurrence); alcohol use; irregular meal patterns and prolonged fasting; severe physiological stress (major illness, burns, trauma - a different mechanism from everyday psychological stress); family history.</p>
      </div>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Two things cause almost all peptic ulcers: a specific stomach infection called H. pylori, and certain pain medications taken regularly. Everything else - stress, diet, smoking - can make symptoms worse or slow healing, but rarely causes an ulcer on its own."</p>
      </div>
      
      <!-- 4. Symptoms -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Symptoms and When They Point to a Complication
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Typical symptoms:</span> burning or gnawing epigastric pain, often related to meals (classically worse with food in gastric ulcers, and relieved by food but recurring 2-3 hours later in duodenal ulcers - though this distinction is not always reliable in practice), bloating, early satiety, nausea.</p>
      </div>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <p class="text-sm text-rose-900 dark:text-rose-300 mb-3">Alarm features requiring urgent evaluation - explain these clearly to every patient.</p>
      <p class="quote border-rose-300 dark:border-rose-600 pl-4 italic text-sm text-rose-900 dark:text-rose-300 mb-3">"There are certain warning signs that need urgent attention rather than waiting for routine treatment to work. Please come back immediately, or go to the nearest emergency unit, if you notice any of the following."</p>
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Vomiting blood, or vomit that looks like coffee grounds</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Black, tarry stool, or visible blood in stool</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Difficulty or pain swallowing</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Unintentional weight loss</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Persistent vomiting</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Severe, sudden abdominal pain (possible perforation)</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Symptoms in a patient over 55-60 years presenting for the first time, or with a family history of stomach cancer</span></li>
      </ul>
      </div>
      
      <!-- 5. Investigations -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Investigations
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Where possible, we try to identify the specific cause before starting treatment, so we can treat it directly rather than just controlling symptoms."</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">H. pylori testing:</span> stool antigen test, urea breath test (where available), or biopsy-based testing (rapid urease test, histology) at endoscopy.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Endoscopy:</span> recommended for alarm features, patients over the typical age cutoff for this population, or symptoms not responding to initial treatment - directly visualises the ulcer and allows biopsy to exclude malignancy, particularly for gastric ulcers.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Full blood count:</span> to check for anaemia from occult chronic blood loss.</li>
      </ul>
      </div>
      
      <!-- 6. Medication -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Medication Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Treatment usually has two parts: medication to reduce stomach acid and allow the ulcer to heal, and - if the H. pylori infection is present - a course of antibiotics to clear it completely. Both parts matter; treating only the acid without clearing the infection means the ulcer is likely to come back."</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Acid Suppression</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Drug class</th>
                <th class="py-2 pr-3 font-medium">Examples</th>
                <th class="py-2 font-medium">Counselling point</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Proton pump inhibitors (PPIs)</td><td class="py-2 pr-3">Omeprazole 20-40 mg, esomeprazole 20-40 mg, lansoprazole 30 mg, pantoprazole 40 mg - typically once daily</td><td class="py-2">First-line acid suppression; take 30-60 minutes before the first meal of the day for best effect - this timing is frequently done incorrectly and reduces effectiveness</td></tr>
              <tr><td class="py-2 pr-3">H2-receptor antagonists</td><td class="py-2 pr-3">Ranitidine (where still available/used), famotidine</td><td class="py-2">Alternative or adjunct; generally less potent acid suppression than PPIs</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">H. pylori Eradication</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"If the infection is confirmed or strongly suspected, you'll be given a combination of antibiotics plus an acid-reducing medication, for 14 days. It is essential to complete the full course, exactly as prescribed, even if you start feeling better after a few days."</p>
        <p class="text-sm mt-2">A 14-day course is the current standard, rather than the shorter 7-10 day courses used historically, because it achieves meaningfully higher eradication rates. Standard clarithromycin-based triple therapy (PPI plus amoxicillin plus clarithromycin) is increasingly unreliable across Africa: pooled data show clarithromycin resistance around 29% and amoxicillin resistance over 70% in some regional meta-analyses, both well above the threshold where triple therapy is expected to work reliably - though local studies vary considerably (a Kano-based study, for example, found the opposite pattern locally, with high amoxicillin resistance but full clarithromycin sensitivity). Current African-specific consensus guidance (the 2024 Lagos Consensus Statement) favours quadruple therapy - a PPI with three antimicrobial agents (commonly amoxicillin, clarithromycin, and metronidazole, or a bismuth-containing regimen where available) - as the more reliable first-line choice in this setting, rather than defaulting to standard triple therapy. Confirm the specific regimen against current local antibiogram data or national guidance where available, since resistance patterns vary meaningfully even within Nigeria.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Counselling points specific to eradication therapy:</span></p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li>Explain the multi-drug regimen clearly in writing where possible - this is a more complex regimen than most patients are used to, and confusion between tablets is common.</li>
          <li>Warn about a possible metallic taste and alcohol interaction (marked nausea/flushing) with metronidazole.</li>
          <li>Emphasise that stopping early is the single most common reason for treatment failure and ulcer recurrence, even more so than with single-drug chronic treatment.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">NSAID Counselling - A Frequently Missed Point</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"If you've been taking pain medications like diclofenac, ibuprofen, or regular aspirin for body pains, arthritis, or headaches, we need to talk about alternatives, because these medications are one of the two main causes of ulcers."</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li>Ask specifically about chronic NSAID use for arthritis, back pain, or other chronic pain, since patients frequently do not connect this to their stomach symptoms.</li>
          <li>Where an NSAID cannot be stopped (e.g. needed for another condition), discuss co-prescription of a PPI for gastroprotection and, where feasible, referral for alternative pain management.</li>
          <li>Paracetamol is a reasonable substitute for many indications and does not carry the same ulcer risk - this substitution is often not offered proactively enough.</li>
        </ul>
      </div>
      </div>
      
      <!-- 7. Lifestyle -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Lifestyle and Dietary Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Diet does not cause ulcers on its own, but a few changes can reduce symptoms and support healing."</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Reduce or avoid alcohol during active treatment.</li>
        <li>Reduce or stop smoking - this measurably slows healing and increases recurrence risk.</li>
        <li>Avoid known personal symptom triggers (spicy food, coffee, carbonated drinks) if they worsen symptoms, without implying these foods caused the ulcer.</li>
        <li>Eat regular meals rather than prolonged fasting or skipping meals, where lifestyle permits.</li>
        <li>Avoid lying down immediately after eating if reflux-type symptoms coexist.</li>
      </ul>
      </div>
      
      <!-- 8. Adherence -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Medication Adherence Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"What challenges do you think you might face in taking this medication as prescribed?"</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Barrier</th>
              <th class="py-2 font-medium">Approach</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Stopping once pain resolves</td><td class="py-2">Explain directly that symptom relief happens before healing/eradication is complete - this is the single most common reason for treatment failure in this condition.</td></tr>
            <tr><td class="py-2 pr-3">Cost of multi-drug eradication regimen</td><td class="py-2">Discuss generic options and complete-course affordability before starting, since a partially completed antibiotic course is often worse than not starting one at all (resistance, treatment failure).</td></tr>
            <tr><td class="py-2 pr-3">Confusing multiple tablets in a combination regimen</td><td class="py-2">Provide a written or simple visual schedule; consider combination packs where available.</td></tr>
            <tr><td class="py-2 pr-3">Continuing NSAID self-medication without disclosing it</td><td class="py-2">Ask specifically and repeatedly, since this is the most commonly unrecognised reason for poor response to treatment or recurrence.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 9. Herbal -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Herbal and Traditional Remedies
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Ask specifically and non-judgmentally.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Do you take any herbal preparations, bitters, or traditional remedies for your stomach? Some herbal preparations can irritate the stomach lining further or interact with your prescribed treatment. It's helpful for me to know everything you're taking so we can treat this safely and effectively."</p>
      <p class="text-sm">Avoid judgement - many patients have tried herbal remedies extensively before presenting, often for months, and disclosure is more useful than discouragement at this stage.</p>
      </div>
      
      <!-- 10. Follow-up -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Follow-Up Plan
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"We'll review your symptoms after you complete treatment to make sure things have settled, and in some cases confirm that the infection has cleared."</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Symptom review at the end of the treatment course.</li>
        <li>Where H. pylori eradication was given, confirmatory testing (stool antigen or breath test) at least 4 weeks after completing treatment and off PPI therapy for at least 2 weeks beforehand, to avoid a false negative result - if using the stool antigen test specifically, some laboratories prefer waiting 6-8 weeks to also avoid a false positive from residual antigen.</li>
        <li>Gastric ulcers in particular may warrant repeat endoscopy to confirm healing and definitively exclude malignancy, given that gastric ulcers (unlike duodenal ulcers) carry a small but real malignant potential.</li>
        <li>Explicit plan for what to do if alarm symptoms develop at any point during treatment (Section 4).</li>
      </ul>
      </div>
      
      <!-- 11. Closing -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Closing the Counselling Session
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Can you tell me in your own words what you understand is causing your ulcer, and what your treatment plan involves?"</p>
      <p class="text-sm">Correct any gaps revealed by the teach-back, particularly around the NSAID connection and the importance of completing the full course.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Peptic ulcers are very treatable, and in most cases we can find and remove the actual cause rather than just controlling the symptoms. Taking your medication exactly as prescribed, completing the full course, and letting me know about any pain medications you're using are the most important things you can do."</p>
      </div>
      
      <!-- Key Take-Home Points -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Take-Home Points for the Patient</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>An ulcer is usually caused by a specific stomach infection or by certain pain medications - not primarily by spicy food or stress.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Complete the full course of treatment, even after the pain stops.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Tell your doctor about any pain medications you take regularly, including ones bought without a prescription.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Disclose any herbal or traditional remedies you are using.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Return immediately for vomiting blood, black stool, difficulty swallowing, or unexplained weight loss.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>African Helicobacter and Microbiota Study Group - First Lagos Consensus Statement on H. pylori Diagnosis and Treatment in Africa, 2024.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Gastroenterology Organisation - Global Guideline: Helicobacter pylori Management in Africa.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American College of Gastroenterology - ACG Clinical Guideline: Treatment of Helicobacter pylori Infection.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'counselling-diabetes-mellitus',
        title: 'Diabetes Mellitus',
        category: 'Counselling',
        subCategory: 'Cardiometabolic',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Counselling Guide for a Patient with Diabetes Mellitus</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      .quote { border-left: 3px solid; }
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Counselling</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Counselling a Patient with Diabetes Mellitus</h1>
        <p class="text-sm text-indigo-200">Diabetes counselling has to work against two powerful fears at once - that the diagnosis itself is a death sentence, and that insulin means things have gotten worse. Both need direct, repeated correction. This guide gives a structured session with the actual language to use, adapted for a Nigerian clinical setting - from diagnostic classification and treatment initiation through to foot care, hypoglycaemia teaching, and insulin storage without reliable refrigeration.</p>
      </div>
      </div>
      
      <!-- 1. Rapport -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Introduction and Establishing Rapport
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Good morning/afternoon. My name is Dr. ____. I'd like to talk with you about your blood sugar results, what diabetes means for your health, and how we can work together to keep it well controlled."</p>
      <p class="text-sm">Ensure privacy, and involve a family member with the patient's consent - diet preparation and medication reminders in Nigerian households are frequently managed by a spouse or another family member, so involving them directly improves the odds the plan is actually followed at home.</p>
      </div>
      
      <!-- 2. Explaining diabetes -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Explaining Diabetes
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">What Is Diabetes?</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Diabetes means the sugar (glucose) in your blood is higher than it should be, either because your body isn't making enough insulin, or because the insulin it makes isn't working as well as it should. Insulin is the hormone that moves sugar from your blood into your body's cells to be used for energy."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Explaining the Diagnosis</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Your blood sugar results confirm a diagnosis of diabetes. This is a lifelong condition, but it is very manageable - many people with diabetes live long, full, and healthy lives, especially when it's caught and controlled early, as we're doing now."</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Correcting Common Misconceptions</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">What the patient says</th>
              <th class="py-2 pr-3 font-medium">What it reflects</th>
              <th class="py-2 font-medium">How to respond</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">"Diabetes is a death sentence"</td><td class="py-2 pr-3">Fear driven by seeing poorly controlled cases with advanced complications</td><td class="py-2">Acknowledge the fear directly, and explain that most of the serious outcomes people have seen come from uncontrolled diabetes over many years, not from diabetes itself - good control changes the outlook substantially.</td></tr>
            <tr><td class="py-2 pr-3">"I don't eat sugar, so I don't understand how my sugar is still high"</td><td class="py-2 pr-3">Conflating "sugar" as a food category with blood glucose as a physiological measure</td><td class="py-2">Explain that carbohydrates in general - rice, garri, pounded yam, bread, and other starches - are broken down into glucose in the body, not just foods that taste sweet.</td></tr>
            <tr><td class="py-2 pr-3">"Once I start insulin, my diabetes has become very severe / I am about to die"</td><td class="py-2 pr-3">Widespread and consequential fear that delays appropriate insulin initiation</td><td class="py-2">Explain directly that insulin is a treatment matched to what the body needs at a given time, not a marker of severity or a last resort - some people need it from diagnosis, others later, and it reflects physiology, not prognosis.</td></tr>
            <tr><td class="py-2 pr-3">"Herbal medications/bitter leaf can cure diabetes completely"</td><td class="py-2 pr-3">Common belief, often reinforced by anecdotal reports of normalised readings</td><td class="py-2">Address directly and without ridicule: some herbal preparations may lower blood sugar somewhat but do not cure the underlying condition, and unsupervised use alongside prescribed medication risks dangerous hypoglycaemia - ask about use specifically and regularly.</td></tr>
            <tr><td class="py-2 pr-3">"I feel fine, so my sugar must be controlled"</td><td class="py-2 pr-3">The same asymptomatic-disease misunderstanding seen in hypertension</td><td class="py-2">Explain that diabetes often causes no symptoms even when blood sugar is significantly elevated, and that feeling well is not a reliable indicator of control - only testing tells us that.</td></tr>
            <tr><td class="py-2 pr-3">"If I take my tablets/insulin, I can eat whatever I want"</td><td class="py-2 pr-3">Misunderstanding medication as a full substitute for dietary management</td><td class="py-2">Reframe: medication and diet work together, not as alternatives to each other; medication does not fully offset a heavy carbohydrate load.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 3. Causes -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Causes and Risk Factors
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Type 2 Diabetes (the majority of adult cases)</strong>
        <p class="text-sm">Overweight/obesity, particularly central/abdominal adiposity; physical inactivity; family history; increasing age; previous gestational diabetes.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Type 1 Diabetes</strong>
        <p class="text-sm">Autoimmune destruction of insulin-producing cells; not related to weight, diet, or lifestyle - this distinction is worth making explicitly, since patients and families sometimes wrongly blame lifestyle in a newly diagnosed child or young adult with type 1 disease.</p>
      </div>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Type 2 diabetes develops from a combination of genetics and lifestyle factors over time. Type 1 diabetes, which is more common in children and young people, happens because the body's immune system affects the cells that make insulin - it is not caused by diet or being overweight."</p>
      </div>
      
      <!-- 4. Complications -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Complications of Poorly Controlled Diabetes
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"The reason we take blood sugar control seriously is that consistently high sugar levels gradually damage blood vessels and nerves throughout the body. The encouraging part is that good control substantially reduces all of these risks."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">System</th>
              <th class="py-2 font-medium">Complications</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Eyes</td><td class="py-2">Diabetic retinopathy, progressive vision loss, blindness</td></tr>
            <tr><td class="py-2 pr-3">Kidneys</td><td class="py-2">Diabetic nephropathy, progressing to kidney failure</td></tr>
            <tr><td class="py-2 pr-3">Nerves</td><td class="py-2">Peripheral neuropathy (numbness, tingling, pain - especially in the feet), autonomic neuropathy</td></tr>
            <tr><td class="py-2 pr-3">Feet</td><td class="py-2">Reduced sensation and poor healing leading to ulcers, infection, and risk of amputation if unrecognised</td></tr>
            <tr><td class="py-2 pr-3">Heart and blood vessels</td><td class="py-2">Heart attack, stroke, peripheral vascular disease</td></tr>
            <tr><td class="py-2 pr-3">Immune function</td><td class="py-2">Increased susceptibility to infections, slower wound healing</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Frame complication risk alongside its modifiability, as with hypertension counselling - listing complications without pairing them with the fact that control meaningfully reduces risk tends to produce fatalism rather than motivation.</p>
      </div>
      
      <!-- 5. Diagnostic criteria -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Diagnostic Criteria and Classification
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Worth walking the patient through where their result sits, since "diabetes" is often presented as a single cutoff rather than a spectrum - and prediabetes in particular is frequently either not explained at all or explained in a way that doesn't convey its significance.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 pr-3 font-medium">Fasting plasma glucose</th>
              <th class="py-2 pr-3 font-medium">2-hour OGTT</th>
              <th class="py-2 pr-3 font-medium">HbA1c</th>
              <th class="py-2 font-medium">Random glucose</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">&lt; 5.6 mmol/L</td><td class="py-2 pr-3">&lt; 7.8 mmol/L</td><td class="py-2 pr-3">&lt; 5.7%</td><td class="py-2">-</td></tr>
            <tr><td class="py-2 pr-3">Prediabetes (impaired fasting glucose / impaired glucose tolerance)</td><td class="py-2 pr-3">5.6-6.9 mmol/L</td><td class="py-2 pr-3">7.8-11.0 mmol/L</td><td class="py-2 pr-3">5.7-6.4%</td><td class="py-2">-</td></tr>
            <tr><td class="py-2 pr-3">Diabetes</td><td class="py-2 pr-3">&ge; 7.0 mmol/L</td><td class="py-2 pr-3">&ge; 11.1 mmol/L</td><td class="py-2 pr-3">&ge; 6.5%</td><td class="py-2">&ge; 11.1 mmol/L with classic symptoms (polyuria, polydipsia, unexplained weight loss)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm mt-2">Diabetes is generally confirmed by two abnormal results (either the same test repeated, or two different tests) unless the patient has unequivocal hyperglycaemia with classic symptoms, in which case a single result is sufficient to diagnose. These thresholds match current ADA Standards of Care.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Explaining Prediabetes Specifically</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Your result falls into a range called prediabetes. This means your blood sugar is higher than normal but not yet in the diabetes range. It's actually a valuable warning - at this stage, changes to diet and activity can often bring your blood sugar back to normal and prevent or significantly delay full diabetes from developing. This is a stage where lifestyle change has the most power to change your outcome."</p>
        <p class="text-sm mt-2">This framing matters because prediabetes is easy for a patient to dismiss as "not really having anything," when in practice it is the single best window for intervention.</p>
      </div>
      </div>
      
      <!-- 6. Treatment initiation -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      When Treatment Is Started, and With What
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"The starting point for treatment depends on how high your blood sugar is at diagnosis, and whether you're having any symptoms from it - not everyone starts in the same place."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Situation</th>
              <th class="py-2 font-medium">Typical initial approach</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Prediabetes</td><td class="py-2">Lifestyle modification alone (diet, weight loss, activity) - medication is not usually started at this stage, though metformin may be considered in select higher-risk patients (e.g. obesity, prior gestational diabetes)</td></tr>
            <tr><td class="py-2 pr-3">Newly diagnosed type 2, mild-to-moderate elevation, asymptomatic</td><td class="py-2">Lifestyle modification plus metformin, typically started together at diagnosis rather than trialling lifestyle alone first - this reflects current practice more than older teaching that reserved medication for lifestyle failure</td></tr>
            <tr><td class="py-2 pr-3">Newly diagnosed type 2, marked hyperglycaemia or symptomatic</td><td class="py-2">Metformin plus a second agent, or insulin, started from diagnosis to bring glucose down more quickly</td></tr>
            <tr><td class="py-2 pr-3">Symptomatic hyperglycaemia with ketosis, marked weight loss, or diagnostic uncertainty about type</td><td class="py-2">Insulin started immediately, regardless of apparent type, until the clinical picture is clearer</td></tr>
            <tr><td class="py-2 pr-3">Type 1 diabetes</td><td class="py-2">Insulin from diagnosis - always; this is not a stepwise decision</td></tr>
            <tr><td class="py-2 pr-3">Inadequate control on metformin alone after an adequate trial</td><td class="py-2">Add a second oral agent (sulfonylurea, DPP-4 inhibitor, or SGLT2 inhibitor depending on availability, cost, and patient factors) or consider insulin, rather than persisting on monotherapy indefinitely once targets are not being met</td></tr>
            <tr><td class="py-2 pr-3">Pregnancy with diabetes (pre-existing or gestational)</td><td class="py-2">Insulin is generally the preferred agent where medication is needed, given the safety profile in pregnancy - a distinct pathway from standard type 2 stepwise care</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">A point worth making explicitly to patients:</span> starting on two medications at diagnosis, or starting on insulin early, does not mean the diabetes is more "severe" in a way that predicts a worse future - it reflects where the blood sugar is right now and the most effective way to bring it under control quickly. This connects directly back to the insulin-fear misconception addressed in Section 2.</p>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Our general goals are a fasting blood sugar between roughly 4.4-7.2 mmol/L, and an HbA1c - a test that reflects your average blood sugar over about 3 months - below 7%. These targets may be adjusted for you individually, especially if you're older, pregnant, or have other health conditions."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Measure</th>
              <th class="py-2 font-medium">General target (individualise per patient)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Fasting / pre-meal glucose</td><td class="py-2">4.4-7.2 mmol/L</td></tr>
            <tr><td class="py-2 pr-3">Post-meal glucose (1-2 hr)</td><td class="py-2">&lt; 10 mmol/L</td></tr>
            <tr><td class="py-2 pr-3">HbA1c, most adults</td><td class="py-2">&lt; 7%</td></tr>
            <tr><td class="py-2 pr-3">HbA1c, elderly/frail or high hypoglycaemia risk</td><td class="py-2">Individualised, often relaxed to 7.5-8% to reduce hypoglycaemia risk</td></tr>
            <tr><td class="py-2 pr-3">Pregnancy (fasting)</td><td class="py-2">&lt; 5.3 mmol/L</td></tr>
            <tr><td class="py-2 pr-3">Pregnancy (1-hour post-meal)</td><td class="py-2">&lt; 7.8 mmol/L</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Home glucose monitoring</span>, where the patient can afford strips: explain correct technique (clean hands, adequate drop size, correct strip storage - strips exposed to humidity give inaccurate readings, a common issue with poor storage conditions) and an appropriate testing schedule agreed with the clinic, rather than either no monitoring or excessive testing driven by anxiety.</p>
      </div>
      
      <!-- 7. Lifestyle -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Lifestyle Modification Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">A. Dietary Counselling</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"You do not need to give up your traditional foods completely. The goal is portion control, choosing better carbohydrate options where possible, and balancing meals with protein and vegetables."</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li>Favour smaller portions of rice, garri, pounded yam, and similar staples rather than complete elimination; where possible, choose less-refined options (brown rice over white, wholegrain where available).</li>
          <li>Increase vegetables (ugu, ewedu, okra, spinach, garden egg leaves) and use them to bulk meals and slow glucose absorption.</li>
          <li>Include lean protein (fish, beans, skinless chicken, eggs) at meals to reduce the glycaemic impact of accompanying carbohydrates.</li>
          <li>Reduce sugary drinks, heavily sweetened zobo or kunu, and pastries.</li>
          <li>Space meals regularly rather than skipping meals and then eating a large portion later, which produces larger glucose swings.</li>
          <li>Beans and other legumes are a favourable option given their fibre and protein content relative to glycaemic load.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">B. Physical Activity</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Aim for at least 30 minutes of moderate activity most days of the week - brisk walking, cycling, or similar. Activity helps your body use insulin more effectively."</p>
        <p class="text-sm mt-2">Start gradually in a previously inactive patient. For patients on insulin or sulfonylureas, counsel on hypoglycaemia risk with exercise (Section 9) and appropriate precautions - checking glucose before prolonged activity, carrying a fast-acting carbohydrate source.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">C. Weight Management</strong>
        <p class="text-sm">A 5-10% reduction in body weight, where the patient is overweight, produces a meaningful improvement in glycaemic control, particularly early in type 2 diabetes.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">D. Smoking and Alcohol</strong>
        <p class="text-sm">Smoking compounds cardiovascular risk substantially in a patient who already carries elevated vascular risk from diabetes - cessation counselling deserves particular emphasis here. Alcohol should be limited; it can cause unpredictable blood sugar swings and, in patients on insulin or sulfonylureas, can mask or worsen hypoglycaemia.</p>
      </div>
      </div>
      
      <!-- 8. Medication counselling -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Medication Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Diabetes treatment is usually long-term, and doses or medications may be adjusted over time - this is a normal part of managing the condition well, not a sign that anything has gone wrong."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Drug class</th>
              <th class="py-2 pr-3 font-medium">Examples</th>
              <th class="py-2 pr-3 font-medium">Common concern</th>
              <th class="py-2 font-medium">Counselling point</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Biguanides</td><td class="py-2 pr-3">Metformin</td><td class="py-2 pr-3">GI upset, fear of "kidney damage"</td><td class="py-2">Explain GI effects are common initially and often improve; take with food. Metformin is generally protective rather than harmful to the kidney at appropriate doses - correct this belief directly. In practice: it should not be started if eGFR is below 45 mL/min, the dose is reviewed and typically halved if eGFR falls to 30-44 while already on treatment, and it is stopped below eGFR 30.</td></tr>
            <tr><td class="py-2 pr-3">Sulfonylureas</td><td class="py-2 pr-3">Glibenclamide, gliclazide</td><td class="py-2 pr-3">Hypoglycaemia, weight gain</td><td class="py-2">Explain hypoglycaemia risk explicitly and how to recognise/treat it (Section 9); counsel on not skipping meals after taking this class.</td></tr>
            <tr><td class="py-2 pr-3">DPP-4 inhibitors</td><td class="py-2 pr-3">Sitagliptin</td><td class="py-2 pr-3">Fewer patient-reported concerns; cost is often the main barrier</td><td class="py-2">Discuss cost/access directly given lower affordability relative to metformin/sulfonylureas.</td></tr>
            <tr><td class="py-2 pr-3">Insulin</td><td class="py-2 pr-3">Regular, NPH, premixed, analogues</td><td class="py-2 pr-3">Fear of "severity," fear of injections, fear of dependency</td><td class="py-2">See dedicated section below.</td></tr>
            <tr><td class="py-2 pr-3">SGLT2 inhibitors</td><td class="py-2 pr-3">Empagliflozin, dapagliflozin</td><td class="py-2 pr-3">Genital fungal infections, increased urination</td><td class="py-2">Explain the mechanism (glucose excreted via urine) and genital hygiene counselling to reduce infection risk; caution regarding volume depletion in older or dehydrated patients.</td></tr>
          </tbody>
        </table>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Insulin-Specific Counselling</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Insulin is not a punishment or a sign that things have gotten worse - it's simply what your body needs at this point to keep your sugar controlled. Many people start insulin from diagnosis, and others start later; it depends on your individual physiology, not how 'severe' your diabetes is."</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li>Teach injection technique directly - site rotation (abdomen, thigh, upper arm) to prevent lipohypertrophy from repeated same-site injection.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Storage without reliable refrigeration:</span> in-use insulin (once opened) tolerates room temperature reasonably well - kept below roughly 25-30&deg;C and out of direct sunlight, it generally retains potency for several weeks. Where refrigeration is unreliable, an evaporative clay-pot cooler (a small unglazed pot inside a larger one, with wet sand packed between them, covered with a damp cloth) has been directly studied and can bring insulin close to room temperature even in hot climates - this is a genuinely validated practical option, not just an informal workaround, and worth discussing explicitly for patients facing frequent power outages. Insulin should never be frozen or left in direct sun/a hot car.</li>
          <li>Address needle disposal and reuse concerns pragmatically, given cost constraints - provide guidance on safe reuse limits and disposal rather than an unrealistic "never reuse" instruction that patients may not be able to follow anyway.</li>
          <li>Explicitly teach hypoglycaemia recognition and treatment before the patient leaves with a new insulin prescription (Section 9).</li>
        </ul>
      </div>
      </div>
      
      <!-- 9. Hypoglycaemia -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Hypoglycaemia: Recognition and Response
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">This deserves explicit, structured teaching for any patient on insulin or a sulfonylurea, ideally with a family member present.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Low blood sugar can happen if you take your medication but eat less than usual, delay a meal, or exercise more than planned. It's important you and someone close to you know how to recognise and treat this quickly."</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Symptoms to teach:</span> shakiness, sweating, palpitations, hunger, confusion, irritability, and - if untreated - loss of consciousness or seizures.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Immediate treatment (conscious patient):</span> a fast-acting carbohydrate source (glucose tablets, sugary drink, a few teaspoons of sugar or honey), followed by a longer-acting carbohydrate/meal once symptoms improve.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">If unconscious or unable to swallow safely:</span> this is an emergency - the patient should not be given anything by mouth; a family member should seek urgent medical help immediately.</p>
      <p class="text-sm">Advise the patient to always carry a fast-acting sugar source, and encourage a medical alert item (bracelet, card, or phone note) stating they have diabetes.</p>
      </div>
      
      <!-- 10. Adherence -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Medication Adherence Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"What difficulties do you think you might have in taking your medication regularly?"</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Barrier</th>
              <th class="py-2 font-medium">Approach</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Cost of medication and monitoring strips</td><td class="py-2">Discuss generic options, NHIA/HMO coverage where available, and realistic testing frequency given cost constraints, rather than an ideal frequency the patient cannot sustain.</td></tr>
            <tr><td class="py-2 pr-3">Fear of insulin</td><td class="py-2">Address directly per Section 8; correct the severity-equals-insulin misconception before it drives non-adherence or delay.</td></tr>
            <tr><td class="py-2 pr-3">Forgetfulness</td><td class="py-2">Fixed timing linked to meals, phone reminders.</td></tr>
            <tr><td class="py-2 pr-3">Religious fasting</td><td class="py-2">Discuss timing/dose adjustment in advance of extended fasting, and explicitly discuss when fasting should be interrupted for safety (e.g. hypoglycaemia symptoms, illness) rather than leaving the patient to navigate this alone.</td></tr>
            <tr><td class="py-2 pr-3">Herbal remedy substitution</td><td class="py-2">Ask specifically and non-judgmentally at every visit, as with hypertension counselling.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 11. Foot care -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Foot Care
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Diabetes can reduce feeling in your feet over time, which means an injury can go unnoticed and become a serious problem before you feel any pain."</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Daily foot inspection (or by a family member if the patient cannot see the sole of the foot easily) for cuts, blisters, or areas of redness.</li>
        <li>Avoid walking barefoot, a common practice worth addressing explicitly given local footwear habits.</li>
        <li>Proper-fitting footwear, and prompt attention to any wound rather than waiting for it to resolve on its own.</li>
        <li>Explain why a seemingly minor foot wound needs prompt review in a person with diabetes, when it might not in someone without the condition.</li>
      </ul>
      </div>
      
      <!-- 12. Warning symptoms -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Warning Symptoms Requiring Urgent Review
      </h2>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Symptoms of severe hypoglycaemia not responding to initial treatment, or loss of consciousness</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Very high blood sugar with vomiting, abdominal pain, rapid breathing, or drowsiness (possible diabetic ketoacidosis, particularly relevant in type 1 diabetes, or hyperosmolar state in type 2)</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>A foot wound with spreading redness, discharge, or fever</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Sudden vision changes</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Chest pain, weakness on one side, or difficulty speaking</span></li>
      </ul>
      </div>
      
      <!-- 13. Follow-up -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
      Follow-Up Plan
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Regular visits let us check how well your treatment is working and catch any early changes before they become bigger problems."</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Blood sugar review and HbA1c at intervals agreed with the clinic.</li>
        <li>Annual (or as indicated) eye examination for retinopathy screening.</li>
        <li>Regular kidney function and urine albumin screening.</li>
        <li>Foot examination at each visit, or a schedule agreed for this specifically.</li>
        <li>Blood pressure and lipid review, given the combined cardiovascular risk.</li>
      </ul>
      </div>
      
      <!-- 14. Closing -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
      Closing the Counselling Session
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Can you tell me in your own words what you understand about your diabetes and the plan we've discussed today?"</p>
      <p class="text-sm">Correct any misunderstandings the teach-back reveals, particularly around insulin fears or the "no symptoms means controlled" belief.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Diabetes is very manageable with the right combination of medication, diet, activity, and regular follow-up. You're not alone in this - we'll work through it together at each visit."</p>
      </div>
      
      <!-- Key Take-Home Points -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Take-Home Points for the Patient</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Diabetes is manageable, not a death sentence - control is what determines the outcome.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>"Sugar" in the blood comes from all carbohydrates, not just sweet-tasting foods.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Starting insulin reflects what your body needs, not how severe your condition is.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Know the signs of low blood sugar and how to treat it if you're on insulin or certain tablets.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check your feet regularly, avoid walking barefoot, and seek urgent care for a worsening wound.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Diabetes Association - Standards of Care in Diabetes, 2025.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>FDA/EMA revised metformin renal dosing guidance (eGFR-based thresholds, 2016 update).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Ogle GD, et al. - Insulin Storage in Hot Climates Without Refrigeration: Temperature Reduction Efficacy of Clay Pots and Other Techniques. Diabetic Medicine, 2016.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Cochrane Review - Temperature and Storage Conditions for Human Insulin.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'counselling-chronic-low-back-pain',
        title: 'Chronic Low Back Pain',
        category: 'Counselling',
        subCategory: 'Musculoskeletal',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Counselling Guide for a Patient with Chronic Low Back Pain</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      .quote { border-left: 3px solid; }
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Counselling</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Counselling a Patient with Chronic Low Back Pain</h1>
        <p class="text-sm text-indigo-200">Chronic low back pain counselling succeeds mainly on two points: convincing the patient a scan usually isn't needed, and convincing them that rest is the wrong instinct. Everything else - occupational modification, medication, exercise - lands better once those two beliefs are addressed directly. This guide gives a structured session adapted for a Nigerian clinical setting, from market-trading and okada-riding occupational advice to spinal TB as a genuine red-flag consideration.</p>
      </div>
      </div>
      
      <!-- 1. Rapport -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Introduction and Establishing Rapport
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Good morning/afternoon. My name is Dr. ____. I'd like to talk with you about your back pain - what's likely causing it, what the results of any tests mean, and how we can manage it and help you get back to your normal activities."</p>
      <p class="text-sm">Chronic low back pain (pain persisting beyond 12 weeks) carries a significant psychological and functional burden that is easy to underestimate in a brief consultation - acknowledge this explicitly rather than moving straight to the physical explanation.</p>
      </div>
      
      <!-- 2. Explaining -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Explaining Chronic Low Back Pain
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">What Is Happening?</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Most chronic back pain comes from the muscles, ligaments, joints, and discs of the spine working together, sometimes with one part more strained or irritated than others. In the large majority of cases, there is no single, serious structural problem to 'find' - the pain is real and the mechanism is understood, even when a scan doesn't show one clear cause."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">A Key Reassurance Many Patients Need Explicitly</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Chronic back pain is very rarely a sign of something dangerous. Most people with chronic low back pain do not have a serious underlying disease, and the pain, while genuinely unpleasant, is not a sign your spine is being damaged with continued normal movement."</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Correcting Common Misconceptions</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">What the patient says</th>
              <th class="py-2 pr-3 font-medium">What it reflects</th>
              <th class="py-2 font-medium">How to respond</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">"I need a scan to know what's wrong"</td><td class="py-2 pr-3">Belief that imaging is necessary to validate or diagnose the pain</td><td class="py-2">Explain that imaging is not routinely needed for most chronic low back pain, and is reserved for specific warning signs (Section 4) - imaging findings in people without back pain are common (disc bulges, degenerative changes) and often don't correlate well with symptoms, so a scan can sometimes create worry without changing management.</td></tr>
            <tr><td class="py-2 pr-3">"My disc has slipped and needs to go back into place"</td><td class="py-2 pr-3">Common lay framing of disc-related pain</td><td class="py-2">Clarify the actual mechanism (a disc bulge or herniation, not a bone or disc "slipping" out of position), and that most disc-related back pain improves with time and appropriate activity, without needing the disc to be manually "put back."</td></tr>
            <tr><td class="py-2 pr-3">"I should rest completely and avoid all movement until the pain is gone"</td><td class="py-2 pr-3">The most common and most counterproductive misconception in chronic back pain management</td><td class="py-2">Explain directly that prolonged bed rest worsens outcomes and prolongs recovery - staying as active as possible within reasonable limits leads to better long-term results than rest.</td></tr>
            <tr><td class="py-2 pr-3">"This is from carrying heavy loads at work, so I just have to live with it"</td><td class="py-2 pr-3">Partially accurate but incomplete - mechanical load matters, but the framing as unfixable is not</td><td class="py-2">Acknowledge the occupational contribution honestly, while discussing specific modifications (Section 7) rather than presenting the pain as an unavoidable cost of the patient's livelihood.</td></tr>
            <tr><td class="py-2 pr-3">"It's a spiritual attack / someone is responsible for this pain"</td><td class="py-2 pr-3">A belief some patients hold, particularly with pain that has been persistent and poorly explained by prior care</td><td class="py-2">Address without ridicule or direct confrontation; acknowledge the patient's experience of a persistent, frustrating symptom, and continue to offer the medical explanation and plan alongside, rather than as a replacement for, whatever the patient believes.</td></tr>
            <tr><td class="py-2 pr-3">"Painkillers are the whole treatment"</td><td class="py-2 pr-3">Overreliance on medication over activity/movement-based management</td><td class="py-2">Reframe medication as one supporting tool among several (activity, posture/ergonomic modification, targeted exercise), not the primary treatment on its own.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 3. Classification -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Classification
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 font-medium">Definition</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Acute low back pain</td><td class="py-2">&lt; 6 weeks duration</td></tr>
            <tr><td class="py-2 pr-3">Subacute low back pain</td><td class="py-2">6-12 weeks duration</td></tr>
            <tr><td class="py-2 pr-3">Chronic low back pain</td><td class="py-2">&gt; 12 weeks duration</td></tr>
          </tbody>
        </table>
      </div>
      <div class="overflow-x-auto mt-3">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Type</th>
              <th class="py-2 font-medium">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Non-specific (mechanical) back pain</td><td class="py-2">No specific identifiable structural cause on assessment - the large majority of chronic low back pain falls here</td></tr>
            <tr><td class="py-2 pr-3">Radicular pain (sciatica)</td><td class="py-2">Pain radiating down the leg, typically following a nerve root distribution, from nerve root irritation or compression - usually disc-related</td></tr>
            <tr><td class="py-2 pr-3">Pain with a specific identifiable cause</td><td class="py-2">Vertebral fracture, infection (discitis/vertebral osteomyelitis - including tuberculous spine, which remains clinically relevant in Nigeria), malignancy, inflammatory spondyloarthropathy, or significant spinal stenosis</td></tr>
          </tbody>
        </table>
      </div>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-3">"The type of back pain you have changes both how urgently we investigate and how we treat it - most chronic back pain falls into a category that responds well to activity-based management rather than needing extensive testing."</p>
      </div>
      
      <!-- 4. Red flags -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Red Flags Requiring Urgent Evaluation
      </h2>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <p class="text-sm text-rose-900 dark:text-rose-300 mb-3">Explain these clearly, since most patients won't otherwise know which of their symptoms matter most.</p>
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>New or worsening leg weakness</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Numbness in the saddle area (inner thighs, genitals, around the anus)</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>New difficulty controlling bladder or bowel function</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Unexplained weight loss</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Fever, or a history suggestive of infection</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Pain worse at night or unrelenting regardless of position, particularly with a history of cancer</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Significant trauma preceding the pain, particularly in an older patient or anyone with reduced bone density</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Age under 20 or over 50 with new-onset back pain, especially with other concerning features</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>History of TB, HIV, or unexplained immunosuppression, given the relevance of spinal TB in this population</span></li>
      </ul>
      <p class="text-sm text-rose-900 dark:text-rose-300 mt-3 quote border-rose-300 dark:border-rose-600 pl-4 italic">"Bladder or bowel control changes together with numbness in that saddle area is a medical emergency - if that happens, please come to hospital immediately, day or night, rather than waiting."</p>
      </div>
      
      <!-- 5. Causes -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Causes and Contributing Factors
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Common contributing factors in this population:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Manual labour and repetitive heavy lifting (market trading, construction, farming).</li>
        <li>Prolonged awkward postures - including extended motorcycle (okada) riding, common among both riders and frequent passengers.</li>
        <li>Prolonged sitting with poor ergonomic support (office work, long-distance driving/transport work).</li>
        <li>Poor lifting technique (bending from the waist with a straight-legged stance, rather than lifting with the legs).</li>
        <li>Obesity and physical deconditioning.</li>
        <li>Psychological stress and, in some patients, coexisting low mood - both recognised to worsen the experience and persistence of chronic pain.</li>
      </ul>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-3">"A combination of factors usually contributes to chronic back pain rather than one single cause - this is actually helpful, because it means there are several different angles we can work on together."</p>
      </div>
      
      <!-- 6. Investigations -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Investigations - What's Actually Needed
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"For most chronic back pain, especially without any of the warning signs we discussed, imaging is not the first step, and often isn't needed at all."</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Imaging (X-ray, CT, or MRI) is reserved for red flag features, suspected specific pathology, or persistent pain not responding to an adequate trial of conservative management.</li>
        <li>Where imaging is obtained, results should be interpreted alongside the clinical picture - degenerative changes and disc bulges are extremely common in people without any back pain at all, and an incidental finding does not automatically explain the patient's symptoms.</li>
        <li>Where infection (particularly TB spine) or malignancy is suspected based on red flags, appropriate targeted investigation should proceed without delay.</li>
      </ul>
      </div>
      
      <!-- 7. Activity/Ergonomics -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Activity, Ergonomics, and Occupational Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Staying as active as you reasonably can, rather than resting completely, is one of the most effective things you can do for chronic back pain."</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Activity Advice</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Continue normal daily activities as much as pain allows, rather than stopping altogether.</li>
          <li>Gradual return to or continuation of exercise - walking, swimming, and general conditioning are all reasonable starting points.</li>
          <li>Avoid prolonged bed rest, which is specifically associated with worse outcomes and slower recovery.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Occupational and Practical Modifications</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Occupation/activity</th>
                <th class="py-2 font-medium">Practical advice</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Market trading/carrying loads</td><td class="py-2">Distribute weight evenly where possible, avoid twisting while lifting, bend at the knees rather than the waist when lifting from the ground</td></tr>
              <tr><td class="py-2 pr-3">Motorcycle (okada) riding - rider or frequent passenger</td><td class="py-2">Take regular breaks on longer journeys where feasible; posture and seat support matter, though options are often limited</td></tr>
              <tr><td class="py-2 pr-3">Prolonged sitting (office, driving/transport work)</td><td class="py-2">Regular position changes and brief standing breaks; a rolled cloth or small cushion behind the lower back is a practical, low-cost lumbar support</td></tr>
              <tr><td class="py-2 pr-3">Farming/manual labour</td><td class="py-2">Alternate tasks/postures where possible rather than sustained single-position work; proper lifting technique for repetitive loads</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-2">"When lifting something heavy, bend at your knees and hips, keep the object close to your body, and lift using your legs rather than bending forward from your waist. This one change reduces strain on your back significantly."</p>
      </div>
      
      <!-- 8. Medication -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Medication Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Medication can help manage pain while we work on activity and other measures, but it works best as one part of the overall plan rather than the main treatment on its own."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Drug class</th>
              <th class="py-2 pr-3 font-medium">Examples</th>
              <th class="py-2 font-medium">Counselling point</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Paracetamol</td><td class="py-2 pr-3">Paracetamol</td><td class="py-2">Reasonable first-line option, generally well tolerated</td></tr>
            <tr><td class="py-2 pr-3">NSAIDs</td><td class="py-2 pr-3">Ibuprofen, diclofenac, naproxen</td><td class="py-2">Effective for pain, but caution with prolonged use - gastrointestinal irritation and renal effects with extended or high-dose use; avoid in patients with a history of peptic ulcer disease without gastroprotection</td></tr>
            <tr><td class="py-2 pr-3">Muscle relaxants</td><td class="py-2 pr-3">Methocarbamol, and similar</td><td class="py-2">Short-term use for the muscle spasm component; sedation is a common side effect worth mentioning, particularly if the patient drives or rides a motorcycle</td></tr>
            <tr><td class="py-2 pr-3">Neuropathic agents</td><td class="py-2 pr-3">Amitriptyline (low dose), gabapentin</td><td class="py-2">Considered specifically for radicular/neuropathic-type pain rather than routine mechanical back pain</td></tr>
            <tr><td class="py-2 pr-3">Opioids</td><td class="py-2 pr-3">Tramadol, and stronger agents</td><td class="py-2">Generally reserved for short-term use in severe pain; not recommended as routine or long-term management of chronic non-specific low back pain, given dependency risk and limited evidence of long-term benefit - opioid-containing combination analgesics are sometimes self-purchased and used long-term without this being disclosed</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Ask specifically about self-medication and combination analgesic use, including opioid-containing preparations purchased without prescription, which patients frequently do not think to mention as "medication" in the same way they would a prescribed drug.</p>
      </div>
      
      <!-- 9. Physio -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Physiotherapy, Exercise, and Non-Drug Management
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Targeted exercises and physical therapy have some of the strongest evidence for improving chronic back pain long-term - often more than medication alone."</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Refer for physiotherapy where accessible; where formal physiotherapy access is limited, general guidance on core-strengthening and flexibility exercises, and encouragement of general physical activity, still provides meaningful benefit.</li>
        <li>Heat application (a warm compress or hot water bottle) is a reasonable, low-cost, and widely already-practised measure for symptomatic relief.</li>
        <li>Discuss any herbal liniments or topical preparations the patient is already using - most carry low risk when used topically, but ask specifically about any ingested herbal preparations taken for the same complaint.</li>
        <li>Where available and appropriate, structured exercise programmes (e.g. McKenzie-method or general strengthening approaches) offer more targeted benefit than generic "stay active" advice alone.</li>
      </ul>
      </div>
      
      <!-- 10. Psychological -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Psychological and Functional Dimension
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Chronic pain and mood are closely connected - persistent pain can affect sleep, mood, and daily function, and stress or low mood can, in turn, make pain feel more intense. Addressing both sides genuinely helps."</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Screen for the functional and emotional impact of the pain (sleep disruption, withdrawal from work or social activity, mood change) rather than focusing on the physical complaint alone.</li>
        <li>Avoid catastrophising language when explaining findings ("your spine is degenerating," "wear and tear") - this framing is associated with worse patient-reported outcomes and increased fear-avoidance behaviour; prefer neutral, non-alarming language even when describing genuine age-related changes.</li>
        <li>Where sleep disruption or mood symptoms are significant and persistent, address them directly as part of the overall management plan.</li>
      </ul>
      </div>
      
      <!-- 11. Adherence -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Plan Adherence Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"What barriers do you think you might face in following through with the exercises and activity changes we've discussed?"</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Barrier</th>
              <th class="py-2 font-medium">Approach</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Cannot stop physically demanding work</td><td class="py-2">Focus on modification rather than cessation (Section 7); set realistic, incremental goals rather than an all-or-nothing activity target</td></tr>
            <tr><td class="py-2 pr-3">Fear that movement will worsen the pain or "damage" the spine</td><td class="py-2">Directly address this fear-avoidance belief - reinforce that most movement within reasonable limits is safe and beneficial, not harmful, even when it produces some discomfort</td></tr>
            <tr><td class="py-2 pr-3">Cost of physiotherapy or ongoing medication</td><td class="py-2">Discuss realistic, sustainable options; emphasise that activity-based self-management costs nothing and is often the most effective single intervention</td></tr>
            <tr><td class="py-2 pr-3">Expectation of a quick fix or single definitive treatment</td><td class="py-2">Set expectations early that chronic back pain management is typically gradual and multi-component, not resolved by a single medication or one physiotherapy session</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 12. Closing -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Closing the Counselling Session
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Can you tell me in your own words what you understand about what's causing your back pain, and what our plan is going forward?"</p>
      <p class="text-sm">Correct any gaps revealed by the teach-back - particularly the "need for a scan" and "must rest completely" misconceptions, since these are the two most likely to persist even after a good explanation.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Chronic back pain is common, and while it can be frustrating, the large majority of people improve significantly with the right combination of staying active, appropriate exercise, and, where needed, medication for symptom control. We'll work through this together and adjust the plan as needed."</p>
      </div>
      
      <!-- Key Take-Home Points -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Take-Home Points for the Patient</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Most chronic back pain does not come from a dangerous or serious underlying condition.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Staying active is more helpful than resting completely.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A scan is not usually necessary unless there are specific warning signs.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Practise proper lifting technique - bend at the knees, not the waist.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Seek urgent care immediately for saddle numbness with bladder or bowel changes, new leg weakness, or unexplained weight loss.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>NICE Guideline NG59 - Low Back Pain and Sciatica in Over 16s: Assessment and Management.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American College of Radiology - ACR Appropriateness Criteria: Low Back Pain.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Back and Radicular Pain Pathway - Cauda Equina Red Flag Criteria.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - National Tuberculosis and Leprosy Control Programme Guidelines (spinal TB relevance).</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'counselling-hypertension',
        title: 'Hypertension',
        category: 'Counselling',
        subCategory: 'Cardiometabolic',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Counselling Guide for a Patient with Hypertension</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      .quote { border-left: 3px solid; }
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Counselling</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Counselling a Patient with Hypertension</h1>
        <p class="text-sm text-indigo-200">Hypertension counselling succeeds or fails less on what is explained and more on whether specific, commonly held misconceptions are directly corrected. This guide gives a structured session with the actual language to use, adapted for a Nigerian clinical setting - from diagnostic classification and treatment initiation through to salt substitution, herbal remedy disclosure, and medication adherence barriers.</p>
      </div>
      </div>
      
      <!-- 1. Rapport -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Introduction and Establishing Rapport
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Good morning/afternoon. My name is Dr. ____. I would like to talk with you about your blood pressure, what it means, how we can control it, and what you can do to prevent complications."</p>
      <p class="text-sm">Ensure privacy. Where the patient consents, involve a family member present at the visit - medication adherence in Nigerian households is frequently supported or undermined by a spouse, parent, or elder who was not in the room for the original explanation, so bringing them into the conversation directly is often more effective than counselling the patient alone and expecting them to relay it accurately at home.</p>
      </div>
      
      <!-- 2. Explaining hypertension -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Explaining Hypertension
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">What Is Blood Pressure?</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Blood pressure is the force of blood pushing against the walls of your blood vessels as your heart pumps blood around your body. Everyone has blood pressure, but when it stays higher than normal over time, we call it hypertension or high blood pressure."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Explaining the Diagnosis</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Your blood pressure has been consistently higher than the normal range. This means your heart and blood vessels are working harder than they should."</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Correcting Common Misconceptions</strong>
      <p class="text-sm">Patients frequently present with one or more of these beliefs. Each needs a specific, direct response rather than a general reassurance - a vague dismissal is less convincing than acknowledging the specific concern and addressing it.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">What the patient says</th>
              <th class="py-2 pr-3 font-medium">What it reflects</th>
              <th class="py-2 font-medium">How to respond</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">"I don't feel sick, so I don't have hypertension"</td><td class="py-2 pr-3">Misunderstanding of asymptomatic disease</td><td class="py-2">"High blood pressure is often called a silent disease because many people feel completely normal even when it is damaging the body. The absence of symptoms does not mean it is controlled."</td></tr>
            <tr><td class="py-2 pr-3">"My blood pressure only rises when I am angry or worried"</td><td class="py-2 pr-3">Conflating situational spikes with sustained diagnosis</td><td class="py-2">Acknowledge that stress raises blood pressure acutely, but distinguish this from a sustained diagnosis that persists independent of any single stressor.</td></tr>
            <tr><td class="py-2 pr-3">"I will stop the drugs when I feel better"</td><td class="py-2 pr-3">The most common driver of self-discontinuation</td><td class="py-2">"The tablets are why you feel well. Feeling well is not a sign that the tablets are no longer needed - it is a sign they are working."</td></tr>
            <tr><td class="py-2 pr-3">"Once my reading is normal on the machine, I can stop"</td><td class="py-2 pr-3">Confusing a controlled reading with a resolved condition</td><td class="py-2">Use a concrete comparison: seeing clearly while wearing glasses is not evidence the eyes no longer need correction - the reading is normal because of the treatment.</td></tr>
            <tr><td class="py-2 pr-3">"Once you start these drugs, you become dependent on them"</td><td class="py-2 pr-3">Conflating physiological dependency with chronic disease management</td><td class="py-2">Distinguish the two directly: there is no dependency in the addictive sense; the ongoing need reflects the chronic nature of the condition, not a property of the drug.</td></tr>
            <tr><td class="py-2 pr-3">"High blood pressure is 'too much blood' or 'bad blood'"</td><td class="py-2 pr-3">Traditional causation belief</td><td class="py-2">Address without ridicule. This belief often coexists with, rather than replaces, acceptance of conventional treatment - direct dismissal can damage rapport more than it corrects the belief.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 3. Causes -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Causes and Risk Factors
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Non-Modifiable</strong>
        <p class="text-sm">Increasing age; family history of hypertension; genetic tendency.</p>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-2">"Some people inherit a higher tendency to develop hypertension from their parents, but lifestyle changes and medications can still control it."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Modifiable</strong>
        <p class="text-sm">Excess salt intake, overweight or obesity, physical inactivity, excess alcohol intake, smoking, chronic stress, poor diet, and poor medication adherence.</p>
      </div>
      </div>
      
      <!-- 4. Complications -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Complications of Poorly Controlled Hypertension
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Explain the reason for treatment without inducing fatalism. Pairing risk with the fact that it is modifiable sustains motivation better than listing complications alone, which can produce a "this will happen regardless" response that undermines adherence.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"The reason we take hypertension seriously is because uncontrolled high blood pressure can gradually damage important organs. The good news is that controlling your blood pressure greatly reduces these risks."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Organ system</th>
              <th class="py-2 font-medium">Complications</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Brain</td><td class="py-2">Stroke, paralysis, memory problems</td></tr>
            <tr><td class="py-2 pr-3">Heart</td><td class="py-2">Heart enlargement, heart failure, heart attack</td></tr>
            <tr><td class="py-2 pr-3">Kidneys</td><td class="py-2">Kidney failure, dialysis dependence</td></tr>
            <tr><td class="py-2 pr-3">Eyes</td><td class="py-2">Retinal damage, vision loss</td></tr>
            <tr><td class="py-2 pr-3">Blood vessels</td><td class="py-2">Peripheral circulatory problems</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 5. Diagnostic Criteria -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Diagnostic Criteria and Classification
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Worth explaining explicitly where a patient's reading sits, since "hypertension" is often communicated as a single line crossed rather than a graded category - and the category matters for how urgently treatment starts.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 pr-3 font-medium">Systolic (mmHg)</th>
              <th class="py-2 font-medium">Diastolic (mmHg)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">&lt; 120</td><td class="py-2">and &lt; 80</td></tr>
            <tr><td class="py-2 pr-3">Elevated</td><td class="py-2 pr-3">120-129</td><td class="py-2">and &lt; 80</td></tr>
            <tr><td class="py-2 pr-3">Stage 1 hypertension</td><td class="py-2 pr-3">130-139</td><td class="py-2">or 80-89</td></tr>
            <tr><td class="py-2 pr-3">Stage 2 hypertension</td><td class="py-2 pr-3">&ge; 140</td><td class="py-2">or &ge; 90</td></tr>
            <tr><td class="py-2 pr-3">Hypertensive urgency</td><td class="py-2 pr-3">&ge; 180</td><td class="py-2">and/or &ge; 120, without acute organ damage</td></tr>
            <tr><td class="py-2 pr-3">Hypertensive emergency</td><td class="py-2 pr-3">&ge; 180</td><td class="py-2">and/or &ge; 120, with acute organ damage (chest pain, breathlessness, neurological deficit, visual changes)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">A note on terminology across guidelines:</span> the classification above (Normal/Elevated/Stage 1/Stage 2) follows the ACC/AHA 2017 thresholds, which lowered the diagnostic bar from the older convention. The Nigerian national guideline (FMOH, 2023-2028) uses the more traditional cutoff of <span class="font-medium text-slate-800 dark:text-slate-200">&ge;140/90 mmHg to diagnose hypertension</span>, but converges with the newer framework on treatment targets - it recommends a lower target of 130/80 mmHg specifically for patients with diabetes, chronic kidney disease, or established cardiovascular disease, which is functionally the ACC/AHA Stage 1 threshold applied as a treatment goal rather than a diagnostic one. Both frameworks agree on what constitutes Stage 2/definite hypertension (&ge;140/90) and on what constitutes a hypertensive emergency - the disagreement is only in how much diagnostic weight to give the 130-139/80-89 range. Be consistent with whichever framework your institution or the current national guideline uses, but be aware the two exist so a patient's chart isn't read as internally inconsistent.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Confirming the diagnosis:</span> a single elevated reading in clinic is not sufficient for diagnosis, given white-coat effect and situational variation - confirmation on at least two separate occasions (or via home/ambulatory monitoring where available) is the standard before formally diagnosing hypertension and starting long-term treatment, outside of an urgency/emergency presentation.</p>
      </div>
      
      <!-- 6. Treatment initiation -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      When Treatment Is Started, and With What
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Whether we start with lifestyle changes alone or add medication straight away depends on how high your blood pressure is, and whether you have other risk factors like diabetes, kidney disease, or a history of heart problems."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Situation</th>
              <th class="py-2 font-medium">Typical initial approach</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Elevated / Stage 1, low overall cardiovascular risk</td><td class="py-2">Lifestyle modification alone for a trial period (often 3-6 months), with re-assessment before adding medication</td></tr>
            <tr><td class="py-2 pr-3">Elevated / Stage 1, with additional risk factors (diabetes, established cardiovascular disease, chronic kidney disease, or high calculated cardiovascular risk)</td><td class="py-2">Medication started alongside lifestyle changes from the outset, rather than waiting through a lifestyle-only trial</td></tr>
            <tr><td class="py-2 pr-3">Stage 2 (&ge;140/90)</td><td class="py-2">Medication started at diagnosis, alongside lifestyle changes - a lifestyle-only trial is not appropriate at this stage</td></tr>
            <tr><td class="py-2 pr-3">Hypertensive urgency (&ge;180/120, no organ damage)</td><td class="py-2">Oral medication with close outpatient follow-up within 24-48 hours; not generally treated as an inpatient emergency, but not left untreated either</td></tr>
            <tr><td class="py-2 pr-3">Hypertensive emergency (&ge;180/120, with organ damage)</td><td class="py-2">Immediate hospital admission for controlled, monitored blood pressure reduction - a distinct emergency pathway, not a step up from routine outpatient management</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">First-line agent selection:</span> the Nigerian national guideline specifically recommends calcium channel blockers as first-line monotherapy, used together with a diuretic or an ACE inhibitor/ARB in combination therapy where a single agent is not enough. This is grounded in decades of local evidence (originating with the Salako and Falase studies) showing Nigerian patients respond consistently well to thiazide diuretics and calcium channel blockers as monotherapy, while beta-blockers require high doses - with more side effects - to be similarly effective when used alone. ACE inhibitors/ARBs remain first-line where there is a compelling indication regardless of this general pattern - notably diabetes with proteinuria, or chronic kidney disease with albuminuria. Many patients require combination therapy (two or more classes) to reach target, rather than escalating a single agent indefinitely - this is worth pre-empting in counselling so combination treatment isn't misread as the first drug "failing."</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-2">"It's common to need more than one medication working together to control blood pressure well. Needing a second medication doesn't mean the first one failed - it means your blood pressure needs more than one type of support to reach a healthy range, which is very normal."</p>
      </div>
      
      <!-- 7. BP targets -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Blood Pressure Targets
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Our goal is usually to keep your blood pressure below 140/90 mmHg. For some patients, especially those with diabetes, kidney disease, or existing cardiovascular disease, we aim for a lower target of below 130/80 mmHg."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Patient group</th>
              <th class="py-2 font-medium">Target (Nigerian national guideline, 2023-2028)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">General adult population, no comorbidity</td><td class="py-2">&lt; 140/90 mmHg</td></tr>
            <tr><td class="py-2 pr-3">Known cardiovascular disease, diabetes, or high overall CV risk</td><td class="py-2">&lt; 130/80 mmHg</td></tr>
            <tr><td class="py-2 pr-3">Chronic kidney disease</td><td class="py-2">&lt; 130/80 mmHg; loop diuretic preferred over thiazide if GFR &lt; 30 mL/min</td></tr>
            <tr><td class="py-2 pr-3">Elderly</td><td class="py-2">Individualise; measure standing BP at every visit given the high risk of postural hypotension, which can itself be worsened by treatment</td></tr>
            <tr><td class="py-2 pr-3">Sickle cell disease</td><td class="py-2">Baseline BP runs lower than the general population in SCD, so a reading above 130/80 mmHg is treated as relative hypertension and therapy is initiated at this lower threshold; CCB or ACEI/ARB preferred</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Encourage home monitoring where feasible (see Section 12).</p>
      </div>
      
      <!-- 8. Lifestyle -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Lifestyle Modification Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">A. Salt Reduction</strong>
        <p class="text-sm">Particularly important in Nigeria, where salt intake is driven heavily by Maggi/seasoning cubes, salted fish, stockfish, smoked foods, and processed snacks.</p>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-2">"Salt causes the body to retain water, which increases the pressure inside your blood vessels."</p>
        <p class="text-sm mt-2">Frame this as substitution, not elimination - build flavour with onion, garlic, ginger, pepper, and local herbs instead of multiple seasoning cubes. This lands better than a blanket "avoid salt" instruction, since it doesn't ask the patient to give up flavour, only to source it differently.</p>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-2">"Try to keep your total salt intake, including salt already in your food, to less than one level teaspoon per day."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">B. Diet (DASH Principles, Adapted Locally)</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Increase</th>
                <th class="py-2 font-medium">Reduce</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Fruits: orange, pawpaw, banana*, watermelon, pineapple, apple</td><td class="py-2">Fried foods, excess palm oil, fatty meat, frequent ponmo</td></tr>
              <tr><td class="py-2 pr-3">Vegetables: ugu, ewedu, okra, spinach, garden egg leaves</td><td class="py-2">Soft drinks, sweetened juices, excess pastries</td></tr>
              <tr><td class="py-2 pr-3">Whole grains: brown rice, ofada rice, oats, whole wheat</td><td class="py-2">Instant noodle seasoning sachets</td></tr>
              <tr><td class="py-2 pr-3">Lean protein: fish, beans, skinless chicken, eggs in moderation</td><td class="py-2">Salted fish, very salty soups</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">*As standard practice around potassium-sparing agents, be cautious about recommending high-potassium fruit like banana without qualification in patients on an ACE inhibitor, ARB, or potassium-sparing diuretic, or with reduced renal function - check potassium periodically in these patients and individualise rather than applying the general fruit recommendation uniformly.</p>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-2">"You do not need to stop eating your traditional foods completely. The goal is to reduce unhealthy portions and prepare them in healthier ways."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">C. Weight Management</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Excess body weight makes the heart work harder and increases blood pressure."</p>
        <p class="text-sm mt-2">Aim for gradual weight loss, not crash dieting - a 5-10% reduction in body weight can produce a meaningful improvement in blood pressure control.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">D. Physical Activity</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Aim for at least 30 minutes of moderate exercise on most days of the week."</p>
        <p class="text-sm mt-2">Brisk walking, cycling, swimming, dancing, and household activity all count. For a previously inactive patient, start with 10-15 minutes daily in week one and progress gradually rather than prescribing the full target immediately - an unrealistic starting point is a common reason patients abandon exercise advice within the first week. Avoid unassessed vigorous exercise in patients with chest pain, significant breathlessness, or known heart disease.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">E. Alcohol</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Excess alcohol can raise blood pressure and reduce the effectiveness of your medications."</p>
        <p class="text-sm mt-2">Advise reduction or avoidance, and specifically caution against binge patterns rather than only average weekly intake, since binge consumption has a disproportionate acute pressor effect.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">F. Smoking</strong>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Smoking damages blood vessels and increases the risk of stroke and heart attack."</p>
        <p class="text-sm mt-2">Encourage complete cessation, explicitly including cigarettes, shisha, and other tobacco products - shisha in particular is sometimes not recognised by patients as equivalent to cigarette smoking.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">G. Stress and Sleep</strong>
        <p class="text-sm">Discuss adequate sleep, relaxation practices, prayer or meditation where personally relevant, and social support.</p>
        <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm mt-2">"Stress alone is unlikely to be the only cause of your blood pressure, but chronic stress can make it harder to control."</p>
      </div>
      </div>
      
      <!-- 9. Medication counselling -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Medication Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"These medications help reduce the pressure in your blood vessels and protect your heart, brain, and kidneys. Hypertension treatment is usually long-term. Do not stop your medication because you feel well."</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Drug class</th>
              <th class="py-2 pr-3 font-medium">Examples</th>
              <th class="py-2 pr-3 font-medium">Effects patients raise</th>
              <th class="py-2 font-medium">Counselling point</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Calcium channel blockers</td><td class="py-2 pr-3">Amlodipine, nifedipine</td><td class="py-2 pr-3">Ankle swelling, headache, flushing</td><td class="py-2">Explain swelling as a recognised class effect, not fluid overload or heart failure - this prevents inappropriate diuretic self-medication. Report rather than stop.</td></tr>
            <tr><td class="py-2 pr-3">ACE inhibitors</td><td class="py-2 pr-3">Lisinopril, enalapril, captopril</td><td class="py-2 pr-3">Persistent dry cough, dizziness</td><td class="py-2">Explain the cough as a known, non-dangerous class effect; switching to an ARB usually resolves it. <span class="font-medium text-slate-800 dark:text-slate-200">Contraindicated in pregnancy</span> - confirm pregnancy status and contraception plans in women of childbearing age before initiating, and discuss switching in advance of any planned pregnancy.</td></tr>
            <tr><td class="py-2 pr-3">ARBs</td><td class="py-2 pr-3">Losartan, valsartan</td><td class="py-2 pr-3">Dizziness</td><td class="py-2">Generally better tolerated than ACE inhibitors regarding cough; the same pregnancy contraindication applies.</td></tr>
            <tr><td class="py-2 pr-3">Thiazide/thiazide-like diuretics</td><td class="py-2 pr-3">Hydrochlorothiazide, chlorthalidone</td><td class="py-2 pr-3">Increased urination, electrolyte changes</td><td class="py-2">Frame increased urination as the intended mechanism, not kidney strain. Advise morning dosing to reduce night-time disruption.</td></tr>
            <tr><td class="py-2 pr-3">Beta-blockers</td><td class="py-2 pr-3">Bisoprolol, atenolol</td><td class="py-2 pr-3">Fatigue, slow heartbeat, reduced exercise tolerance</td><td class="py-2">Address directly - fatigue is a common covert reason for discontinuation, particularly in patients with physically demanding work, and patients may not volunteer it unless asked specifically.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 10. Adherence -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Medication Adherence Counselling
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"What challenges do you face in taking your medications regularly?"</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Barrier</th>
              <th class="py-2 font-medium">Approach</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Cost</td><td class="py-2">Discuss generic alternatives, NHIA/HMO coverage where available, and pharmacy price variation. Cost is frequently the unspoken barrier behind apparent non-adherence - ask directly rather than assuming a knowledge gap when the real barrier is financial.</td></tr>
            <tr><td class="py-2 pr-3">Forgetfulness</td><td class="py-2">Fixed daily timing, phone reminders, linking dosing to an existing daily routine (e.g. with brushing teeth).</td></tr>
            <tr><td class="py-2 pr-3">Side effects</td><td class="py-2">Encourage reporting rather than silent discontinuation - normalise this explicitly, since many patients stop without mentioning it at the next visit unless asked directly.</td></tr>
            <tr><td class="py-2 pr-3">Religious fasting</td><td class="py-2">Extended fasting (common in some Christian and Islamic observances) requires specific advance counselling on dose timing, and on the risks of skipping doses altogether rather than adjusting timing appropriately.</td></tr>
            <tr><td class="py-2 pr-3">Belief that treatment competes with faith-based practice</td><td class="py-2">Frame medical treatment as complementary to, not competing with, spiritual practice, and keep reinforcing adherence within that framing rather than confronting the belief directly.</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 11. Herbal -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Herbal Medication and Hypertension
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Ask specifically and non-judgmentally at every visit, not only at diagnosis.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Do you take any herbal medicines, supplements, or traditional remedies? Some herbal preparations may contain substances that can raise blood pressure or interfere with your prescribed medications."</p>
      <p class="text-sm">Patients frequently do not volunteer herbal use unless asked in a way that does not feel like an accusation - repeated, routine, non-judgmental asking yields more accurate disclosure than a single question at the first visit.</p>
      </div>
      
      <!-- 12. Home BP monitoring -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Home Blood Pressure Monitoring
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Before checking:</span> rest for 5 minutes; avoid caffeine or exercise in the 30 minutes prior; sit with back supported, feet flat on the floor, arm supported at heart level; use an appropriately sized cuff.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Record:</span> date, time, reading, pulse rate, and any symptoms - bring the record to clinic visits.</p>
      <p class="text-sm">A poorly taken home reading (wrong posture, immediately after activity, wrong cuff size) can undermine confidence in either direction - falsely reassuring or falsely alarming - so technique should be checked, not assumed, at least once in person.</p>
      </div>
      
      <!-- 13. Warning symptoms -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
      Warning Symptoms Requiring Urgent Hospital Review
      </h2>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Severe headache</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Weakness or paralysis of one side of the body</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Difficulty speaking</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Chest pain or severe shortness of breath</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Confusion or loss of consciousness</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Sudden vision changes</span></li>
      </ul>
      <p class="text-sm text-rose-900 dark:text-rose-300 mt-3 quote border-rose-300 dark:border-rose-600 pl-4 italic">"These may be signs of complications requiring urgent attention."</p>
      </div>
      
      <!-- 14. Follow-up -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
      Follow-Up Plan
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Regular clinic visits allow us to check whether the treatment is working and whether your organs are being protected."</p>
      <p class="text-sm">Set an explicit expectation for what follow-up involves - this converts an ambiguous "come back sometime" into a stated plan the patient can recognise deviations from: blood pressure review, weight monitoring, kidney function tests (urea, electrolytes, creatinine), urinalysis, blood glucose, lipid profile, and ECG where indicated. Initial follow-up is typically every 1-4 weeks until target BP is reached, then every 3-6 months once stable.</p>
      <p class="text-sm">Also establish, explicitly, what to do about a missed dose - take it as soon as remembered unless close to the next scheduled dose, and do not double up - since this specific scenario is rarely addressed proactively and is a common point of confusion between visits.</p>
      </div>
      
      <!-- 15. Closing -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">15</span>
      Closing the Counselling Session
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Can you tell me in your own words what you understand about your blood pressure and what changes you plan to make?"</p>
      <p class="text-sm">This teach-back question surfaces misunderstandings that a simple "do you understand?" will not. Correct any gaps directly rather than moving on if the response reveals a misconception from Section 2.</p>
      <p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Controlling hypertension is a partnership between you and your healthcare team. Taking your medication regularly, eating healthier, exercising, and attending follow-up visits will greatly reduce your risk of complications."</p>
      </div>
      
      <!-- Key Take-Home Points -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Take-Home Points for the Patient</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Hypertension can exist without symptoms - feeling well is not evidence it is resolved.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Do not stop medication because you feel better.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Reduce salt intake; substitute flavour with natural spices rather than eliminating taste.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Disclose any herbal or traditional remedy use, and check blood pressure regularly with correct technique.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Seek urgent care immediately for warning symptoms.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Guidelines for Prevention and Management of Hypertension in Nigeria, 2023-2028.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Nigerian Hypertension Society Guidelines, 2020.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>ACC/AHA 2017 Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>International Society of Hypertension in Blacks (ISHIB) - Consensus Statement on Management of High Blood Pressure in Blacks.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Salako LA, Falase AO - foundational Nigerian studies on antihypertensive drug response by class.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - HEARTS Technical Package for Cardiovascular Disease Management in Primary Health Care.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'counselling-breast-cancer',
        title: 'Breast Cancer',
        category: 'Counselling',
        subCategory: 'Oncology',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Counselling Guide for a Patient with Breast Cancer</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      .quote { border-left: 3px solid; }
      </style>
      </head>
      <body class="bg-white text-slate-800 max-w-3xl mx-auto px-6 py-12 leading-relaxed">
      
      
      <!-- Hero -->
      <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Counselling</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Counselling a Patient with Breast Cancer</h1>
        <p class="text-sm text-indigo-200">Breast cancer counselling begins before any explanation of pathology or treatment - with how the diagnosis itself is delivered. How the news lands shapes whether a patient stays engaged with treatment or disengages, sometimes permanently, toward denial or unproven alternatives. This guide covers disclosure, the specific misconceptions worth addressing directly, staging, treatment, and the psychosocial and cost realities that drive treatment abandonment in Nigerian practice.</p>
      </div>
      </div>
      
      <!-- 1. Breaking the diagnosis -->
      
      <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
      <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
        <li>
          <a href="#breaking-the-diagnosis" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span>
            <span>Breaking the Diagnosis</span>
          </a>
        </li>
        <li>
          <a href="#explaining-the-diagnosis-in-plain-terms" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span>
            <span>Explaining the Diagnosis in Plain Terms</span>
          </a>
        </li>
        <li>
          <a href="#causes-and-risk-factors" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span>
            <span>Causes and Risk Factors</span>
          </a>
        </li>
        <li>
          <a href="#staging-and-what-it-means-for-the-patient" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span>
            <span>Staging and What It Means for the Patient</span>
          </a>
        </li>
        <li>
          <a href="#investigations-the-patient-will-encounter" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span>
            <span>Investigations the Patient Will Encounter</span>
          </a>
        </li>
        <li>
          <a href="#treatment-overview" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span>
            <span>Treatment Overview</span>
          </a>
        </li>
        <li>
          <a href="#counselling-on-specific-treatment-effects" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span>
            <span>Counselling on Specific Treatment Effects</span>
          </a>
        </li>
        <li>
          <a href="#cost-access-and-treatment-abandonment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span>
            <span>Cost, Access, and Treatment Abandonment</span>
          </a>
        </li>
        <li>
          <a href="#psychosocial-and-family-considerations" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span>
            <span>Psychosocial and Family Considerations</span>
          </a>
        </li>
        <li>
          <a href="#follow-up-and-surveillance" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span>
            <span>Follow-Up and Surveillance</span>
          </a>
        </li>
        <li>
          <a href="#closing-and-confirming-understanding" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
            <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span>
            <span>Closing and Confirming Understanding</span>
          </a>
        </li>
      </ul>
      </nav>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="breaking-the-diagnosis" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Breaking the Diagnosis
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">A structured approach matters here more than in almost any other condition in this series. Find a private space, sit rather than stand, and ask what the patient already understands and expects before disclosing the result - this establishes their starting point and avoids either over-explaining what they already grasp or under-explaining what they don't. Give the diagnosis clearly and without excessive euphemism once you've gauged their readiness, then pause. Silence immediately after delivering the diagnosis is appropriate and necessary; resist the urge to fill it with information the patient is not yet ready to absorb. Where the patient wishes it, and family involvement in health decisions is often substantial here, invite a trusted family member into the conversation, though the disclosure itself should still be made directly and honestly to the patient rather than routed around her.</p>
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"I have your biopsy results, and I want to talk you through them directly. Before I do, can you tell me what you were expecting, or what you already understand about why we did this test?"</p>
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"The biopsy confirms that this is breast cancer. I know this is difficult to hear. I want you to know that we have a clear plan for how we approach this, and I'm going to walk through it with you at whatever pace you need."</p>
      <p class="text-sm">Avoid the instinct to immediately reassure with statistics or move straight into treatment planning before the patient has had a moment to absorb the word itself. The rest of this guide's content is delivered over this and subsequent visits, not all at once in the moment of diagnosis.</p>
      </div>
      
      <!-- 2. Explaining diagnosis / misconceptions -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="explaining-the-diagnosis-in-plain-terms" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Explaining the Diagnosis in Plain Terms
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"Breast cancer means some cells in your breast tissue have started growing in an abnormal, uncontrolled way. The good news is that breast cancer, especially when caught at an earlier stage, is very treatable, and many women go on to live long, full lives after treatment."</p>
      
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200">Correcting common misconceptions - each needs a direct, specific response rather than a general reassurance:</p>
      
      <p class="text-sm">A patient who says cancer is automatically a death sentence needs to hear plainly that outcomes depend heavily on the stage at diagnosis and on completing treatment, and that many women treated for breast cancer survive long-term - the fatalism many patients carry into this diagnosis often comes from having only seen advanced, late-presenting cases in their own community, which are not representative of all breast cancer.</p>
      
      <p class="text-sm">A patient who attributes the cancer to a spiritual attack, a curse, or punishment for wrongdoing should be met without ridicule or direct confrontation of the belief. Acknowledge that this is a frightening and disorienting diagnosis, and that the medical explanation and any spiritual framework the patient holds do not have to compete - continue to offer the medical plan clearly and consistently alongside whatever the patient believes, rather than insisting she abandon one for the other.</p>
      
      <p class="text-sm">A patient who believes the cancer was caused by an injury to the breast, breastfeeding, or breast size needs correction with the actual risk factors below, since these specific folk beliefs are common and can otherwise distract from real modifiable and non-modifiable risk discussion, and in some cases delay presentation because the woman waits for a suspected precipitating injury to heal instead of seeking care.</p>
      
      <p class="text-sm">A patient who believes surgery will cause the cancer to spread - a belief sometimes reinforced by the observation that patients who have surgery are sometimes those already found to have advanced disease - needs the actual relationship explained directly: surgery does not cause spread; it is recommended because of the disease already present, and delaying surgery out of this fear generally worsens rather than improves the outcome.</p>
      
      <p class="text-sm">A patient who believes herbal or traditional remedies can cure the cancer, or who wishes to try these before or instead of conventional treatment, deserves a careful, non-judgemental conversation rather than outright dismissal - acknowledge why she might be drawn to this option (cost, mistrust of the health system, prior experience, family pressure), explain clearly that no herbal preparation has been shown to cure breast cancer, and that delaying effective treatment while trying an unproven alternative allows the disease to advance. Ask her to keep you informed of anything she is taking or considering, framing this as collaboration rather than confrontation, since an adversarial response often just drives the herbal use underground rather than stopping it.</p>
      
      <p class="text-sm">A patient who believes a mastectomy will make her less of a woman, less desirable to her husband, or unable to remain married deserves this fear taken seriously rather than brushed aside - this is a real and, in some communities, a well-founded social concern, not an irrational one, and is addressed further in Section 7 rather than dismissed here.</p>
      </div>
      
      <!-- 3. Causes -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="causes-and-risk-factors" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Causes and Risk Factors
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Non-modifiable factors include increasing age, a family history of breast or ovarian cancer, inherited genetic mutations (BRCA1/BRCA2, though genetic testing access remains limited in most Nigerian settings), early menarche, late menopause, and a personal history of prior breast disease. Modifiable and lifestyle-associated factors include nulliparity or late first pregnancy, prolonged use of combined hormonal contraception or hormone replacement therapy, obesity - particularly after menopause - alcohol use, and physical inactivity. Breastfeeding is protective rather than causative, worth stating explicitly given how often breastfeeding is wrongly blamed by patients as a cause.</p>
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"In most cases, there is no single identifiable cause, and no single decision the patient made that led to this. A combination of genetic and lifestyle factors, most of them outside anyone's direct control, is the more accurate way to understand it."</p>
      </div>
      
      <!-- 4. Staging -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="staging-and-what-it-means-for-the-patient" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Staging and What It Means for the Patient
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Staging determines both prognosis and treatment approach, and explaining it in accessible terms helps the patient understand why her specific treatment plan looks the way it does.</p>
      <p class="text-sm">Stage 0 refers to non-invasive disease confined within the ducts, not yet capable of spreading. Stages I and II describe invasive cancer confined to the breast and, at most, nearby lymph nodes, generally treated with curative intent through a combination of surgery, and often radiotherapy and systemic therapy. Stage III describes locally advanced disease, with more extensive lymph node involvement or larger tumour size, still generally treated with curative intent but usually requiring a more intensive combination of treatments, often starting with chemotherapy before surgery. Stage IV describes metastatic disease, spread beyond the breast and regional nodes to distant sites such as bone, liver, lungs, or brain - treatment here shifts in emphasis toward controlling the disease, extending life, and maintaining quality of life, rather than cure, though meaningful periods of good quality of life are achievable and should be communicated honestly alongside this shift in goal.</p>
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"The stage tells us how far the cancer has progressed at the time we found it, and it's the main thing that guides which combination of treatments will help you most. I'll explain exactly what stage yours is and what that means specifically for your plan."</p>
      
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Worth knowing for how you explain this:</span> the current AJCC staging framework (in use since 2018 and still the standard) doesn't assign a stage from tumour size and lymph node status alone. Hormone receptor (ER/PR) status, HER2 status, and tumour grade are formally folded into the final stage number itself, not just used afterward to pick a drug. In practice, this means two women with an identical tumour size and node involvement can be given different overall stage numbers depending on their receptor status and grade - a receptor-favourable tumour can be assigned a lower stage than the anatomical extent alone would suggest, and vice versa. This is worth mentioning briefly if a patient (or a relative who has looked something up) compares her stage number to someone else's based on tumour size or node count alone and finds them confusing or inconsistent - the difference is not an error.</p>
      </div>
      
      <p class="text-sm mt-2">A point worth making explicitly, given how often patients present late: even at a more advanced stage, there is almost always a meaningful treatment plan to offer, and this should be communicated clearly rather than allowing the patient to conclude that a late-stage diagnosis means nothing further can be done.</p>
      </div>
      
      <!-- 5. Investigations -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="investigations-the-patient-will-encounter" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Investigations the Patient Will Encounter
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Diagnosis is confirmed through tissue biopsy - core needle biopsy is preferred over fine-needle aspiration where available, since it provides more tissue for full pathological assessment, including hormone receptor status (oestrogen and progesterone receptors) and HER2 status, both of which directly determine which systemic treatments will be effective for her specific tumour. Staging investigations, once the diagnosis is confirmed, typically include imaging of the chest, abdomen, and skeletal system to check for distant spread, and further breast and axillary imaging to define local extent.</p>
      <p class="text-sm">Explain the purpose of receptor testing specifically, since it directly affects which drugs are used and patients often don't understand why treatment differs so much between individuals with the same diagnosis:</p>
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"We test the cancer cells themselves to see what's helping them grow. If they're sensitive to hormones, we can use hormone-blocking treatment. If they have a particular marker called HER2, there are specific targeted treatments for that. This is why your treatment plan may look different from another woman's, even with the same diagnosis."</p>
      </div>
      
      <!-- 6. Treatment overview -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="treatment-overview" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Treatment Overview
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Surgery, chemotherapy, radiotherapy, hormonal therapy, and targeted therapy are used in different combinations depending on stage and receptor status, and most patients will encounter more than one of these across their treatment course.</p>
      <p class="text-sm">Surgical options range from breast-conserving surgery (removing the tumour with a margin of surrounding tissue, generally followed by radiotherapy to the remaining breast) to mastectomy (removal of the entire breast), with the choice depending on tumour size relative to breast size, location, multifocality, and patient preference where both options are oncologically appropriate. Where mastectomy is needed or chosen, breast reconstruction - either immediate or delayed - should be discussed as an available option where feasible, even though access to reconstructive surgery remains limited in much of the country; raising it as a possibility, even if ultimately not pursued for practical reasons, matters to how a woman experiences this decision.</p>
      <p class="text-sm">Chemotherapy may be given before surgery (neoadjuvant, to shrink the tumour and allow more options, or in locally advanced disease to make surgery possible at all) or after surgery (adjuvant, to reduce the risk of recurrence). Radiotherapy is commonly used after breast-conserving surgery, and sometimes after mastectomy depending on staging, to reduce local recurrence risk. Hormonal therapy (tamoxifen, or aromatase inhibitors in postmenopausal women) is used for hormone-receptor-positive disease, typically continued for five to ten years, with the longer duration generally reserved for higher-risk disease - the long duration of this specific treatment deserves early, explicit counselling, since adherence tends to fall over such an extended course once the patient feels well and treatment fatigue sets in. Targeted therapy against HER2 is used where the tumour is HER2-positive, where access allows, given that cost and availability remain genuine barriers in the Nigerian context and should be discussed honestly as part of treatment planning rather than assumed.</p>
      </div>
      
      <!-- 7. Treatment effects -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="counselling-on-specific-treatment-effects" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Counselling on Specific Treatment Effects
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Surgery and Body Image</strong>
        <p class="text-sm">A mastectomy represents a loss that deserves acknowledgement as genuine grief, not simply a medical procedure with a good outcome. Address the marriage and desirability fears raised earlier directly and honestly - some women do face difficulty from partners or in-laws after mastectomy, and pretending this concern is baseless does the patient a disservice; instead, discuss practical options (external breast prostheses, reconstruction where accessible, clothing adaptation) and, where appropriate and the patient consents, involve her partner in counselling directly, since a partner's understanding and support materially affects how she copes with this change.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Chemotherapy Side Effects</strong>
        <p class="text-sm">Explain hair loss as an expected, temporary effect that reverses after treatment ends, and discuss head covering options (scarves, wigs where affordable) proactively rather than waiting for distress to prompt the conversation. Explain nausea, fatigue, and increased infection risk from lowered blood counts, with clear instruction on when to seek urgent care.</p>
      </div>
      </div>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-3">
      <p class="text-sm text-rose-900 dark:text-rose-300"><span class="font-medium">Fever during a period of expected neutropenia (from chemotherapy) is a medical emergency</span> requiring immediate presentation, not a symptom to wait out. Make sure the patient knows this explicitly before her first cycle, along with what number to call and where to present.</p>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Address fertility concerns explicitly and early, before treatment starts, in any woman of reproductive age, since chemotherapy can affect fertility and this conversation is easy to skip under time pressure but matters enormously to many patients.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Radiotherapy</strong>
        <p class="text-sm">Explain the treatment course length (typically delivered daily over several weeks), skin changes in the treated area, and fatigue, and manage expectations about the travel and time commitment this requires - radiotherapy access is concentrated in relatively few centres nationally, and the practical burden of daily travel or relocation for weeks of treatment is a genuine barrier worth planning for explicitly rather than only after treatment has begun.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Hormonal Therapy</strong>
        <p class="text-sm">Explain hot flashes, mood changes, and joint aches as recognised effects, and specifically reinforce the importance of the multi-year duration of this treatment - stopping early once she feels well significantly increases recurrence risk, using the same "you feel well because treatment is working, not because it's no longer needed" framing used elsewhere in this series for chronic disease.</p>
      </div>
      </div>
      
      <!-- 8. Cost -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="cost-access-and-treatment-abandonment" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Cost, Access, and Treatment Abandonment
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Treatment abandonment partway through - often after surgery but before completing chemotherapy or radiotherapy, or after starting hormonal therapy but stopping within months - is a recognised and significant problem in Nigerian oncology practice, driven by cost, distance to treatment centres, loss of income during treatment, and, in some cases, a return to herbal alternatives once initial treatment produces visible improvement. Address this directly and early rather than waiting for it to happen: discuss the full anticipated course and its cost at the outset as far as possible, discuss health insurance or subsidised treatment programmes where available, and explicitly ask at each visit whether cost or access is becoming a barrier, since patients often do not volunteer this until they have already missed appointments.</p>
      </div>
      
      <!-- 9. Psychosocial -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="psychosocial-and-family-considerations" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Psychosocial and Family Considerations
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Depression and anxiety are common and under-recognised across the course of breast cancer treatment, and deserve active screening rather than being assumed to be an inevitable, untreatable part of the diagnosis. Support groups, where available, and connection with other women who have been through treatment can meaningfully help, particularly given the isolation and stigma some women experience. Where children are involved, offer guidance on age-appropriate disclosure rather than leaving the mother to navigate this alone. Involve family members in education about the disease specifically to counter misinformation circulating within the family or community, since a well-meaning relative repeating a herbal-cure claim or a fatalistic belief can undo careful counselling delivered in the clinic.</p>
      </div>
      
      <!-- 10. Follow-up -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="follow-up-and-surveillance" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Follow-Up and Surveillance
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"Completing treatment doesn't mean your care ends - we'll continue seeing you regularly afterward to monitor for recurrence and manage any ongoing effects of treatment."</p>
      <p class="text-sm">Explain the follow-up schedule clearly, including clinical examination at regular intervals and any imaging surveillance planned, and explain what new symptoms should prompt her to seek review between scheduled visits - a new lump, bone pain, persistent cough, or unexplained weight loss - without over-medicalising every minor symptom into a source of ongoing anxiety.</p>
      </div>
      
      <!-- 11. Closing -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="closing-and-confirming-understanding" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Closing and Confirming Understanding
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"Can you tell me, in your own words, what you understand about your diagnosis and the plan we've discussed?"</p>
      <p class="text-sm">Correct any gaps the teach-back reveals, and confirm specifically that she understands the treatment sequence, its expected duration, and who to contact between visits.</p>
      <p class="text-sm quote border-indigo-300 dark:border-indigo-600 pl-4 italic">"This is a lot to take in, and you don't have to hold all of it after one conversation. We'll go through this together, one step at a time, and you can ask me anything again at any point."</p>
      </div>
      
      <!-- Key Take-Home Points -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Take-Home Points for the Patient</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Breast cancer is treatable, and outcome depends heavily on completing the full recommended treatment course, not stopping once symptoms or the visible tumour improve.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>No herbal or traditional remedy has been shown to cure it, and delaying effective treatment to try one allows the disease to advance.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Surgery does not cause the cancer to spread, and hair loss from chemotherapy is temporary.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Hormonal therapy needs to continue for years, even once she feels completely well.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Cost or distance concerns should be raised early rather than leading to silently missed appointments.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Joint Committee on Cancer - AJCC Cancer Staging Manual, 8th Edition, Breast Cancer (effective 2018, current standard).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Comprehensive Cancer Network - NCCN Clinical Practice Guidelines in Oncology: Breast Cancer.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Society of Clinical Oncology - Adjuvant Endocrine Therapy Duration Guideline Update.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Breast Cancer: Prevention and Control.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },



];
