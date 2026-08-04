export type LearningModuleCategory = 'Symptom Clerking' | 'Physical Examination' | 'Laboratory Interpretation' | 'Clinical Scoring Systems' | 'Counselling' | 'Treatment' | 'Procedures' | 'History Taking';

export type SymptomSubCategory = 
  | 'General Constitutional Symptoms' | 'Pain' | 'Respiratory' | 'Cardiovascular' 
  | 'Gastrointestinal' | 'Urinary' | 'Male Genitourinary' | 'Gynaecological' 
  | 'Obstetric' | 'Neurological' | 'Musculoskeletal' | 'Dermatological' 
  | 'Eye' | 'Ear' | 'Nose' | 'Throat' | 'Psychiatric' | 'Paediatric' 
  | 'Surgical' | 'Endocrine' | 'Hematological' | 'Infectious Disease' | 'Emergency';

export interface LearningModule {
  id: string;
  title: string;
  category: LearningModuleCategory;
  subCategory?: string;
  content: string; 
}

export const clerklyLearnLibrary: LearningModule[] = [
// HISTORY TAKING
{
  id: 'history-taking-internal-medicine',
  title: 'History Taking in Internal Medicine',
  category: 'History Taking',
  subCategory: 'General Approach',
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>History Taking in Internal Medicine</title>
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">History Taking</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">History Taking in Internal Medicine</h1>
  <p class="text-sm text-indigo-200">The answer to a patient's problem lies in the history in roughly 90% of cases, with examination and investigation accounting for the rest. This guide walks through the full structure - biodata to review of systems - with the framework, the reasoning behind each section, and a worked example bringing it all together into a presentable case summary.</p>
</div>
</div>

<!-- 1. Introduction -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
Introduction and General Principles
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li>History-taking is the crucial first step in reaching a diagnosis - the history alone points to the answer in the large majority of cases, with physical examination and investigations filling in the remainder.</li>
  <li>In an emergency, resuscitation always precedes history-taking. Stabilise first, and take a focused history in parallel with or immediately after initial resuscitation, not before it.</li>
  <li>A structured sequence prevents important sections being skipped under time pressure, particularly on a busy ward round or in a crowded emergency unit.</li>
</ul>
</div>

<!-- 2. Biodata -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Biodata
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Name, age, sex, occupation, religion, address, tribe, and the informant - specifically noted where the patient is unconscious or otherwise unable to give a reliable history themselves.</p>
<p class="text-sm">Occupation and address are not throwaway details - they carry diagnostic weight. A patient's occupation can point toward specific exposure risks, and address can flag proximity to an outbreak area or a community with a known endemic pattern (goitre-prone areas, recent cholera clusters, and so on).</p>
</div>

<!-- 3. Presenting Complaint -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Presenting Complaint
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li>This is the main reason the patient came to hospital, and should be recorded in the patient's own words wherever possible, rather than translated into medical terminology at this stage.</li>
  <li>Complaints should be arranged in chronological order, from the first symptom to the most recent.</li>
  <li>There should not be more than five presenting complaints. If the disease has already been diagnosed, this may be stated directly as part of the complaint.</li>
</ul>
<p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic">Example: "A known hypertensive patient presented on account of breathlessness of 5 days duration and cough of 3 days duration."</p>
</div>

<!-- 4. HPC -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
History of Presenting Complaint (The 5 Cs)
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ol class="list-decimal pl-5 space-y-2 text-sm">
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Characterise</span> each symptom - onset, site, character, severity, radiation, timing, and aggravating/relieving factors, as relevant to the symptom in question.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Course</span> - the progression of the symptom, i.e. whether it has worsened, improved, or stayed the same since onset.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Cause</span> - ask questions related to the differentials, specifically to help identify the most likely diagnosis rather than asking generic questions unrelated to what you actually suspect.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Complications</span> - questions related to the complications of the most likely diagnosis, and how the symptom has affected the patient's quality of life.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Care given so far</span> - including care given at home, at a referral centre, and since admission.</li>
</ol>
</div>

<!-- 5. PMH -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Past Medical History
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1 text-sm">
  <li>History of similar illness in the past.</li>
  <li>History of chronic diseases - e.g. diabetes mellitus, sickle cell disease, hypertension, asthma, seizure disorder.</li>
  <li>History of previous hospital admission, blood transfusion, or surgery.</li>
  <li>Gynaecological history where relevant, including last menstrual period.</li>
</ul>
</div>

<!-- 6. Family History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Family History
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1 text-sm">
  <li>Position of the patient in the family.</li>
  <li>Type of family - monogamous or polygamous, which is directly relevant when tracing hereditary and genetic risk within a Nigerian household structure.</li>
  <li>History of similar illness in the family - e.g. diabetes mellitus, sickle cell disease, hypertension, asthma, seizure disorder.</li>
  <li>History of chronic disease in the family, and history of atopy.</li>
</ul>
</div>

<!-- 7. Social History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Social History
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<p class="text-sm">Marital status, number of children, educational level, and occupation.</p>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cigarette Smoking</strong>
  <p class="text-sm">Report the type of cigarette, and quantify exposure in pack-years:</p>
  <p class="text-sm bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 mt-2 sans">Pack-years = (sticks smoked per day &divide; 20) &times; number of years smoked</p>
  <p class="text-sm mt-2 italic">Example: a patient who smoked 5 cigarettes/day for 4 years has a pack-year history of (5/20) &times; 4 = 1 pack-year.</p>
</div>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Alcohol Consumption</strong>
  <p class="text-sm">Ask when the patient started drinking, the type of alcohol, and estimate the amount in grams or units. Report the amount taken per sitting, number of times per week, and number of years the patient has been drinking. If the patient has stopped, ask when and why.</p>
  <div class="overflow-x-auto mt-3">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Drink</th>
          <th class="py-2 pr-3 font-medium">Alcohol % by volume</th>
          <th class="py-2 pr-3 font-medium">Measure (mL)</th>
          <th class="py-2 font-medium">Alcohol units</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Beer</td><td class="py-2 pr-3">4-5%</td><td class="py-2 pr-3">330</td><td class="py-2">1</td></tr>
        <tr><td class="py-2 pr-3">Stout</td><td class="py-2 pr-3">6%</td><td class="py-2 pr-3">330</td><td class="py-2">1.8</td></tr>
        <tr><td class="py-2 pr-3">Wine</td><td class="py-2 pr-3">9-14%</td><td class="py-2 pr-3">125 / 750</td><td class="py-2">1.5 / 6.8-10.5</td></tr>
        <tr><td class="py-2 pr-3">Gin/rum</td><td class="py-2 pr-3">37.5%</td><td class="py-2 pr-3">25 / 750</td><td class="py-2">1 / 26.3</td></tr>
        <tr><td class="py-2 pr-3">Fresh palm wine</td><td class="py-2 pr-3">&le; 4%</td><td class="py-2 pr-3">1 calabash (400-500 mL)</td><td class="py-2">1</td></tr>
        <tr><td class="py-2 pr-3">Spirit</td><td class="py-2 pr-3">-</td><td class="py-2 pr-3">-</td><td class="py-2">1</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">1 unit = 8-10 g of alcohol = approximately &frac12; pint. Reference: Oxford Clinical Handbook of Psychiatry, 3rd edition.</p>
  <p class="text-sm mt-3">No amount of alcohol consumption is entirely safe. As a general guide: men should not drink more than 3 units/week, and women not more than 2 units/week. Consumption of 90 g/day for at least 5 years is a recognised risk factor for alcoholic liver disease.</p>
</div>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Social History</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Substance abuse.</li>
    <li>Sexual history - number of sexual partners.</li>
  </ul>
</div>
</div>

<!-- 8. Drug History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Drug History
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Chronic drug use and drug allergies. Ask specifically and non-judgmentally about herbal or traditional remedy use, since patients frequently do not volunteer this unless asked directly and repeatedly.</p>
</div>

<!-- 9. Review of Systems -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Review of Systems
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Relevant questions are asked about each system, except the one(s) already covered under the presenting complaint and history of presenting complaint.</p>
<ul class="list-disc pl-5 space-y-1 text-sm">
  <li><span class="font-medium text-slate-800 dark:text-slate-200">CNS:</span> headache, seizure, confusion, loss of consciousness, blurring of vision, neck pain.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> cough, breathlessness, chest pain, sneezing, running nose, cyanosis.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiovascular:</span> palpitations, breathlessness, easy fatigability, dizziness, paroxysmal nocturnal dyspnoea, orthopnoea.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> diarrhoea, constipation, nausea, vomiting, abdominal pain, jaundice.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Urogenital:</span> frequency, urgency, dysuria, hesitancy, haematuria, reduced urine output.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal:</span> muscle pain, difficulty walking, abnormal body movement, joint deformity.</li>
</ul>
</div>

<!-- 10. Summary -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Putting It Together: The Summary
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">The summary condenses everything above into a single presentable case, and should include:</p>
<ul class="list-disc pl-5 space-y-1 text-sm">
  <li>Biodata (initials of name, age, sex).</li>
  <li>Presenting complaints, with important exclusions ("xch" - negative findings worth stating).</li>
  <li>Days on admission.</li>
  <li>Important positives and negatives.</li>
  <li>Care given so far.</li>
  <li>Any improvement since admission.</li>
</ul>
<p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-3">Example: "I have presented Mr S.A, a 40-year-old known hypertensive who presented on account of insidious onset breathlessness of 5 days duration and cough productive of whitish frothy sputum of 3 days duration. There is a positive history of nausea, anorexia, and ankle swelling. There is no history of haemoptysis. He has had a chest radiograph and some blood tests done, and he is on IV medication. His condition has improved as symptoms have subsided."</p>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
<h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
<ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Resuscitation always precedes history-taking in an emergency - stabilise the patient first.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Record the presenting complaint in the patient's own words, and keep it to five complaints or fewer, arranged chronologically.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use the 5 Cs to structure the history of presenting complaint, and direct the "cause" questions specifically at your working differentials rather than asking generically.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Quantify smoking in pack-years and alcohol in units rather than leaving either as a vague description - both change management directly.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about herbal and traditional remedy use directly and non-judgmentally - patients rarely volunteer it unprompted.</span></li>
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
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Oxford Clinical Handbook of Psychiatry, 3rd edition - alcohol unit reference table.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Macleod's Clinical Examination - history-taking framework and structure.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>UK Chief Medical Officers' Low Risk Drinking Guidelines - weekly unit thresholds.</li>
  </ul>
</div>
</details>

</body>
</html>
  `
},

// SYMPTOM CLERKING

  
  {
    id: 'symptom-clerking-fever',
    title: 'Fever',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Fever</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Fever</h1>
    <p class="text-sm text-indigo-200">Fever is one of the commonest presenting complaints on the wards and in outpatient clinics across Nigerian hospitals, and it sits behind an unusually wide differential - from a self-limiting viral illness to conditions capable of killing within hours, such as severe malaria, bacterial sepsis, or Lassa fever. This guide focuses on the two things that do the most diagnostic work - a well-directed history and a thorough examination - before closing with the investigations and differentials they point you towards.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Fever Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When exactly did the fever start, and how many days has it lasted?</li>
      <li>Has it been continuous, or does it come and go? Does it break with sweating, and does it respond to paracetamol or other antipyretics?</li>
      <li>Has the patient already taken any antimalarial or antibiotic for this illness, and did it help even partially? (Partial treatment blurs the picture and can mask a serious cause.)</li>
      <li>Is there an associated pattern - chills and rigors, night sweats, or a sense of the fever being worse at a particular time of day?</li>
    </ul>
    <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Note: the classical teaching of a step-ladder rise in typhoid or strict 48-hourly periodicity in <em>Plasmodium vivax</em> infection is unreliable in practice locally, given how often patients have already self-medicated. Treat the pattern as a clue, not a diagnosis.</p>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General:</span> chills/rigors, night sweats, weight loss, loss of appetite, generalized body weakness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Head/neuro:</span> headache (severity/character), neck stiffness, photophobia, seizures, confusion, or behaviour change noticed by relatives.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> cough (how many days/weeks - beyond two weeks raises TB), sputum, chest pain, difficulty breathing, sore throat.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> abdominal pain (site), vomiting, diarrhoea or constipation, jaundice.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> dysuria, frequency, loin pain, discharge; in women of reproductive age - LMP and pregnancy possibility.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal/skin:</span> joint pains, myalgia, rash (timing relative to fever), unusual bleeding from gums, nose, or injection sites.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Haematological:</span> easy bruising, prolonged bleeding from small cuts, blood in urine or stool.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Exposure History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria:</span> Sleeps under a treated bednet? Recent mosquito bites or travel to a high-transmission area? Number of malaria episodes this year?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid:</span> Water source - pipe-borne, borehole, sachet, or well? Street food? Similar illness among contacts?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lassa fever:</span> Rodents seen at home or in food stores? Bush meat consumption? Contact with anyone with unexplained fever, bleeding, or a recent unexplained death? Residence/travel to an endemic state, and is it within the November-May peak?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Meningitis:</span> Crowded household/hostel? Similar illness nearby with neck stiffness or rash? Meningococcal vaccination? Dry season (Dec-June)?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis:</span> Cough beyond two weeks? Known TB contact? HIV status?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sepsis:</span> Recent surgery, delivery, catheter, IV line, or wound? Recent hospitalization?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational/zoonotic:</span> Abattoir, farm, or livestock work? (leptospirosis, brucellosis, anthrax)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General:</span> Recent travel (local/international)? Immunization history? HIV risk factors/status?</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or toxic/acutely unwell? This impression should shape urgency more than any single number.</li>
      <li>Full set of vitals - temperature, heart rate, respiratory rate, blood pressure, SpO2. A normal temperature at examination does <span class="font-medium text-slate-800 dark:text-slate-200">not</span> exclude a febrile illness.</li>
      <li>Hydration status - dry mucous membranes, reduced skin turgor, sunken eyes.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Physical Signs to Actively Look For</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pallor</span> - conjunctivae and palms; malaria-associated haemolysis or chronic disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Jaundice</span> - sclerae; seen in malaria and hepatic causes.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rash</span> - distinguish petechial/purpuric, non-blanching (meningococcaemia, viral haemorrhagic fever) from maculopapular (viral exanthem, drug reaction).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphadenopathy</span> - cervical, axillary, inguinal nodes.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Bleeding</span> - gums, nose, venepuncture sites, particularly if Lassa fever is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Facial or neck swelling</span> - an often-overlooked Lassa fever pointer.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Systemic Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest:</span> crepitations or consolidation; respiratory distress.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdomen:</span> hepatomegaly and splenomegaly (malaria, typhoid), localized tenderness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Joints/skin:</span> signs of inflammatory or infective arthritis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological screen</span> (mandatory if drowsy, confused, or headache): GCS, neck stiffness, Kernig's and Brudzinski's signs - do not skip because the patient "seems fine."</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe malaria (WHO criteria)</span> - impaired consciousness/prostration, repeated convulsions, respiratory distress, circulatory collapse/shock, abnormal bleeding, jaundice, severe anaemia, hypoglycaemia, renal impairment. Any one mandates treatment as severe disease.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sepsis</span> - hypotension, altered mental status, tachypnoea (qSOFA). Prompts urgent source identification and early antibiotics.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Meningitis</span> - neck stiffness, photophobia, non-blanching rash, seizures, reduced conscious level.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Lassa fever</span> - unexplained bleeding, exudative sore throat, facial/neck swelling, pregnancy (higher mortality, especially third trimester), contact with a confirmed/suspected case.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - every febrile patient, before any antimalarial (NMEP's Test, Treat, Track policy).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC with differential and urinalysis</span> - baseline for essentially every febrile presentation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood culture</span> (before antibiotics) - preferred over Widal for suspected typhoid; a single Widal result should never confirm typhoid alone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFT, RFT, electrolytes</span> - where systemic illness or organ involvement is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest radiograph</span> - respiratory symptoms or chronic cough.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lumbar puncture</span> - where meningitis is suspected, once raised ICP is reasonably excluded.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy test</span> - in any woman of reproductive age, before certain medications.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lassa fever RT-PCR</span> at a reference laboratory (e.g. ISTH Irrua, LUTH) - where red flags are present; report to NCDC without waiting for results.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria</span> - the default and commonest cause; always confirm, never assume.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid fever</span> - abdominal pain, relative bradycardia, poor sanitation history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">UTI/pyelonephritis</span> - dysuria, frequency, loin pain/tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacterial sepsis</span> - clear source (wound, line, recent surgery) with systemic derangement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Meningitis</span> - headache, neck stiffness, photophobia, altered consciousness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lassa fever</span> - unexplained fever with bleeding, sore throat, facial swelling, or a relevant exposure/contact history, particularly in season.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - chronic fever beyond two weeks, night sweats, weight loss, cough.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV-related opportunistic infection</span> - in a patient with risk factors or known positive status.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Viral URTI/COVID-19</span> - self-limiting, predominant respiratory symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Leptospirosis/brucellosis/anthrax</span> - relevant occupational or animal exposure.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief of Fever Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Paracetamol</span> - 1g orally or IV every 6 hours in adults (weight-based dosing in children); the mainstay antipyretic while the underlying cause is being identified and treated.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">NSAIDs</span> (e.g. ibuprofen) - a reasonable alternative/adjunct, but use cautiously or avoid where dengue or another haemorrhagic fever is possible, given the bleeding risk, and avoid in pregnancy, peptic ulcer disease, or renal impairment.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Tepid sponging and adequate exposure</span> - useful adjuncts, particularly in children, alongside antipyretics rather than in place of them.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hydration</span> - encourage oral fluids, or give IV fluids if the patient is unable to tolerate oral intake or is dehydrated.</li>
      <li>Symptomatic treatment should never substitute for identifying and treating the underlying cause - avoid reflexively giving empirical antimalarials or antibiotics purely to "cover" the fever without a working diagnosis.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Uncomplicated malaria</span> - artemisinin-based combination therapy (e.g. artemether-lumefantrine) per NMEP/WHO guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Severe malaria</span> - IV/IM artesunate first-line, followed by a full oral ACT course once the patient can tolerate oral medication.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid fever</span> - antibiotics guided by local sensitivity patterns, commonly ceftriaxone or azithromycin; fluoroquinolone resistance is increasingly common and should inform empirical choice.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">UTI/pyelonephritis</span> - nitrofurantoin for uncomplicated cystitis; ceftriaxone or a fluoroquinolone for pyelonephritis, adjusted once culture results are available.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacterial sepsis</span> - early broad-spectrum IV antibiotics per local protocol, fluid resuscitation, and source control; do not delay antibiotics for cultures.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Meningitis</span> - empirical IV ceftriaxone started immediately on suspicion, adjusted once CSF results return; dexamethasone may be added in select bacterial cases.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lassa fever</span> - IV ribavirin, started as early as possible; supportive care, isolation, and barrier nursing throughout.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - standard six-month RHZE regimen under DOTS, per the National Tuberculosis and Leprosy Control Programme.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV-related opportunistic infection</span> - treat the specific infection, and initiate or continue antiretroviral therapy per protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Viral URTI/COVID-19</span> - supportive care: antipyretics, adequate fluids, and rest.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Leptospirosis/brucellosis</span> - doxycycline or an appropriate alternative antibiotic per local guidance.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Fever, duration in days.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, pattern, associated symptoms by system, directed epidemiological history, treatment already received, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Chronic illnesses, prior hospitalizations, previous similar episodes.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Medications already taken, regular medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Living conditions, water/sanitation access, occupation, similar illness in contacts.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, general and systemic findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, empirical treatment (where justified), monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 7. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Labelling every fever as "malaria" and treating empirically without parasitological confirmation.</li>
    <li>Relying on a single Widal test result to confirm typhoid fever.</li>
    <li>Failing to consider Lassa fever during peak season, particularly with bleeding, sore throat, or facial swelling.</li>
    <li>Reassuring oneself because a patient "looks well" early - severe malaria and sepsis can deteriorate rapidly.</li>
    <li>Neglecting to isolate and notify authorities when a notifiable disease is suspected.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Test before you treat - confirm malaria parasitologically before starting antimalarials, per NMEP's T3 policy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A single Widal test should never be the sole basis for a typhoid diagnosis in an endemic population.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Unexplained fever with bleeding, sore throat, or facial swelling in season should trigger isolation and Lassa workup, not just reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Reassess febrile patients who currently look well - deterioration in severe malaria and sepsis can be rapid.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Notify NCDC or the state epidemiologist promptly for any suspected notifiable disease.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health, National Malaria Elimination Programme - National Guidelines for Diagnosis and Treatment of Malaria in Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Treatment of Malaria (severe malaria criteria).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Nigeria Centre for Disease Control - National Guidelines for Lassa Fever Case Management.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Surviving Sepsis Campaign / qSOFA criteria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Nigeria Centre for Disease Control - Meningitis Surveillance and Response Guidelines.</li>
    </ul>
  </div>
</details>
 
</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-painful-swallowing',
    title: 'Painful Swallowing',
    category: 'Symptom Clerking',
    subCategory: 'Pain',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Painful Swallowing</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Painful Swallowing</h1>
    <p class="text-sm text-indigo-200">Painful swallowing (odynophagia) is usually a simple pharyngitis, but in an HIV-positive or immunosuppressed patient it should immediately raise oesophageal candidiasis, and a small number of presentations - epiglottitis, peritonsillar abscess, caustic ingestion - are genuine emergencies where the wrong examination technique can make things worse. This guide focuses on the history and examination that separate these possibilities safely, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and how long has it lasted?</li>
      <li>Where is the pain felt - in the mouth/throat, or further down behind the breastbone (suggesting an oesophageal source)?</li>
      <li>Is it specifically painful to swallow, or is it also difficult to get food down (odynophagia and dysphagia can coexist, but are not the same thing, and it helps to clarify which is present)?</li>
      <li>Is it worse with solids, liquids, or both? Difficulty even with liquids or saliva is more concerning and suggests a more severe or higher process.</li>
      <li>Did it follow taking a tablet without enough water, or lying down soon afterwards? This is a very common and often overlooked cause (pill-induced oesophagitis).</li>
      <li>Has anything been swallowed accidentally, or intentionally, that shouldn't have been - a foreign object, or a caustic substance such as a strong cleaning agent? This needs to be asked directly and without judgement, since patients (or families, in the case of children) may not volunteer it.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General/infective:</span> fever, sore throat, and any oral ulcers or visible lesions.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Airway (ask explicitly - these are red flags):</span> drooling (an inability to swallow one's own saliva), a muffled or "hot potato" voice, noisy or difficult breathing, or difficulty opening the mouth fully (trismus).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Reflux-related:</span> heartburn, regurgitation, or a relationship to meals or lying flat.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin/mucosal:</span> a rash accompanying the sore throat (relevant to measles, hand-foot-and-mouth disease, or a severe drug reaction).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> weight loss - relevant if a chronic or malignant process is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neck:</span> swelling or stiffness, particularly in a child, which can point towards a deeper neck space infection.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status/risk factors:</span> essential - odynophagia with oral thrush in an HIV-positive or otherwise immunosuppressed patient strongly suggests oesophageal candidiasis, a common and treatable cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> doxycycline, NSAIDs, potassium supplements, or bisphosphonates - and specifically how they were taken (with enough water, and remaining upright afterwards).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Immunization history (in children):</span> up to date with diphtheria and measles vaccination? Incompletely immunized children with a sore throat and a grey membrane need diphtheria actively considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Contact with similar illness:</span> relevant to viral pharyngitis or hand-foot-and-mouth disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Reflux history:</span> known or previously diagnosed GERD.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Any suicidal ideation or intent, where caustic ingestion appears deliberate:</span> ask directly and sensitively, following the same safety-focused approach used for any disclosure of self-harm risk.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Radiation/chemotherapy history:</span> relevant if radiation-related oesophagitis is being considered.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Airway Safety (Assess This Before Anything Else)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or unwell and anxious-looking? Note their position - sitting forward, drooling, and leaning on their arms (the "tripod" position) is a classic and worrying sign.</li>
      <li>Is there drooling, stridor, or obvious difficulty breathing? <span class="font-medium text-slate-800 dark:text-slate-200">If epiglottitis is genuinely suspected, do not force an examination of the throat with a tongue depressor</span> - this can precipitate complete airway obstruction. Keep the patient calm, avoid distressing them further, and get urgent anaesthetic/ENT support to secure the airway in a controlled setting instead.</li>
      <li>Vital signs, including oxygen saturation and temperature.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Oral and Pharyngeal Examination (Once Airway Safety Is Confirmed)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral cavity</span> - white plaques that can be scraped off (supports oral candidiasis), vesicles or ulcers, or a thick grey membrane that bleeds when disturbed (a classic sign of diphtheria).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Tonsils/pharynx</span> - erythema, exudate, and specifically any asymmetric tonsillar swelling with uvula deviation to one side - this supports a peritonsillar abscess.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Trismus</span> - difficulty opening the mouth fully also supports a peritonsillar abscess.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Voice quality</span> - a muffled, "hot potato" voice is another supportive sign.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neck</span> - lymphadenopathy, swelling, or stiffness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin</span> - a rash, if present, may support measles or hand-foot-and-mouth disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hydration status</span> - relevant where oral intake has been significantly limited by the pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General signs of HIV</span> - wasting or other opportunistic findings.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Drooling, stridor, or a tripod position</span> - suspected epiglottitis; a true airway emergency needing calm handling and urgent anaesthetic/ENT support rather than a forced oral exam.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Trismus with uvula deviation and a muffled voice</span> - peritonsillar abscess, needing urgent ENT referral for drainage.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected caustic ingestion</span> - do not induce vomiting; arrange urgent assessment (including endoscopy where appropriate) and supportive care.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A thick grey pharyngeal membrane with systemic illness</span> - raises diphtheria; notify public health promptly given its transmissibility and the risk of myocarditis and neuropathy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Inability to swallow saliva, or significant dehydration from pain-limited intake</span> - needs IV fluids and prompt further assessment.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent, given the strong link with oesophageal candidiasis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Throat swab/culture</span> - where bacterial pharyngitis or diphtheria is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - as a general baseline, particularly where a bacterial process is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Upper GI endoscopy</span> - where oesophageal candidiasis, herpetic oesophagitis, or another oesophageal cause is suspected and not settling with an initial trial of treatment, or where the diagnosis remains unclear.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lateral neck imaging or CT neck</span> - where a deep neck space infection or retropharyngeal abscess is suspected; this should never delay airway management if the patient is unstable.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Endoscopy (not barium studies)</span> - where a foreign body is suspected, given the risk of aspiration or worsening obstruction with a barium swallow.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Viral pharyngitis</span> - the commonest cause overall; self-limiting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacterial pharyngitis/tonsillitis</span> - exudate, fever, tender cervical nodes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Oesophageal candidiasis</span> - odynophagia with oral thrush, particularly in an HIV-positive or immunosuppressed patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Herpetic oesophagitis/stomatitis</span> - painful vesicles or ulcers.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pill-induced oesophagitis</span> - retrosternal pain following a tablet taken with too little water or while lying down.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">GERD/reflux oesophagitis</span> - burning pain related to meals or lying flat.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peritonsillar abscess</span> - trismus, uvula deviation, muffled voice.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Epiglottitis</span> - drooling, stridor, tripod positioning; a true airway emergency.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diphtheria</span> - a thick grey pharyngeal membrane, particularly in an incompletely immunized patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Measles-related oral lesions/hand-foot-and-mouth disease</span> - accompanied by a compatible rash.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Caustic ingestion</span> - accidental or deliberate.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Foreign body</span> - especially in children.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute HIV seroconversion illness</span> - painful pharyngitis/oral ulcers as part of a broader acute retroviral syndrome.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy</span> - usually more dysphagia-predominant, but can coexist with odynophagia.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Simple analgesia</span> - paracetamol or an NSAID where not contraindicated.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Soft or liquid diet</span> - to maintain intake while the underlying cause is treated.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Adequate hydration</span> - IV fluids where oral intake is significantly limited.</li>
      <li>Symptomatic relief should never delay recognizing and acting on any of the airway or ingestion emergencies above.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Oesophageal candidiasis</span> - oral fluconazole, alongside initiation or optimization of antiretroviral therapy where HIV-positive.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacterial pharyngitis/tonsillitis</span> - penicillin or amoxicillin per standard protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peritonsillar abscess</span> - urgent ENT referral for drainage, alongside IV antibiotics.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pill-induced oesophagitis</span> - stop or modify the causative medication (take with plenty of water, remain upright for at least 30 minutes afterwards).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">GERD</span> - proton pump inhibitor and lifestyle measures.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diphtheria</span> - diphtheria antitoxin and antibiotics, with urgent notification to public health authorities.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Caustic ingestion</span> - supportive care and urgent specialist assessment; never induce vomiting or attempt neutralization.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Foreign body</span> - urgent endoscopic removal.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Measles/hand-foot-and-mouth disease</span> - supportive care; measles also requires public health notification and vitamin A per protocol in children.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Painful swallowing, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, location (oral/pharyngeal/oesophageal), solids versus liquids, associated airway red flags, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical History</dt>
      <dd class="mt-0.5">HIV status, immunization history, known GERD.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Recent tablets and how taken, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Contact with similar illness, household context relevant to ingestion in children.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Airway assessment first, then oral/pharyngeal findings, neck findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment/referral given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not considering HIV/oesophageal candidiasis in a patient with odynophagia and oral thrush.</li>
    <li>Forcing a throat examination with a tongue depressor when epiglottitis is suspected.</li>
    <li>Missing peritonsillar abscess by not checking for trismus and uvula deviation.</li>
    <li>Not asking about pill-taking technique as a common, fixable cause.</li>
    <li>Missing diphtheria in an unvaccinated or under-vaccinated child with a pharyngeal membrane.</li>
    <li>Inducing vomiting in suspected caustic ingestion, which is contraindicated.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Odynophagia with oral thrush in an HIV-positive patient strongly suggests oesophageal candidiasis - a common and treatable cause.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never force a throat examination if epiglottitis is suspected (stridor, drooling, tripod positioning) - get urgent anaesthetic/ENT support instead.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Peritonsillar abscess needs urgent drainage - always check for trismus and uvula deviation.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never induce vomiting in suspected caustic ingestion.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask specifically about pill-taking technique - a common and easily fixable cause of painful swallowing.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for Managing Advanced HIV Disease and Opportunistic Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Infectious Diseases Society of America - Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Diphtheria Vaccine Position Paper and Outbreak Guidance.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>


</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-tingling',
    title: 'Tingling',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Paresthesia (Tingling Sensation)</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Paresthesia (Tingling Sensation)</h1>
    <p class="text-sm text-indigo-200">Paresthesia most often reflects diabetic peripheral neuropathy, but any patchy area of altered sensation should also raise leprosy - a diagnosis where early recognition is what prevents permanent nerve damage and disability. Sudden, one-sided tingling accompanied by other neurological symptoms needs to be treated as a possible stroke. This guide focuses on the history and examination that map out the pattern and clarify the likely cause, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Sensation Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and was the onset sudden (over seconds to minutes) or gradual (over weeks to months)? Sudden, one-sided onset is a very different problem from a slow, symmetrical development.</li>
      <li>Where is it - both feet and hands in a "glove and stocking" pattern (suggests a metabolic/toxic cause), a single patch of skin (raises leprosy or a localized nerve problem), a band around the trunk following a strip of skin (raises shingles or a nerve root problem), or one whole side of the body (raises a central/stroke-related cause)?</li>
      <li>Is it constant, or does it come and go?</li>
      <li>Is there any associated pain - burning, shooting, or electric-shock-like? This points towards nerve-related (neuropathic) pain specifically.</li>
      <li>Has any weakness developed alongside it, or is it purely a sensory change?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin changes in the affected area (ask explicitly):</span> any patch that looks different in colour, feels dry, or has lost hair - relevant to leprosy, which often affects the skin and nerve together.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological (ask explicitly - these are red flags):</span> facial drooping, slurred speech, visual disturbance, or weakness developing alongside the tingling - all raise a central cause such as stroke.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rash:</span> a vesicular rash following the same distribution as the tingling, which can precede or accompany shingles (herpes zoster).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety-related:</span> tingling around the mouth and in the hands/feet during episodes of rapid breathing or panic.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Metabolic:</span> excessive thirst and urination (diabetes), muscle cramps or spasms (hypocalcaemia).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neck symptoms:</span> neck pain radiating down an arm, which raises cervical nerve root compression.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes:</span> known diagnosis, and how well it is controlled - diabetic peripheral neuropathy is the commonest cause of this symptom overall.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB/leprosy contact:</span> known contact with someone with leprosy, or a family history - important given how often leprosy is diagnosed late.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status and ART history:</span> both HIV itself and certain older antiretroviral drugs are associated with peripheral neuropathy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> a recognized and common cause of peripheral neuropathy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Dietary intake:</span> particularly where access to food is limited, since deficiency of vitamin B12 or thiamine can cause a similar picture.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational exposure:</span> work involving lead (battery recycling, artisanal mining, some painting work) or other heavy metals/solvents.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Known kidney disease:</span> raises uraemic neuropathy in advanced disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Repetitive hand use or occupation:</span> relevant to entrapment neuropathies such as carpal tunnel syndrome.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Previous chickenpox:</span> relevant background for later shingles.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> isoniazid and certain chemotherapy agents are recognized causes of peripheral neuropathy.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Detailed Sensory Mapping</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Test light touch, pinprick, temperature, vibration, and proprioception, and carefully map out the distribution - symmetrical glove-and-stocking, a single patch, a dermatomal band, or one side of the body.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Any hypopigmented or discoloured skin patch should have its sensation tested directly and compared with normal surrounding skin</span> - reduced or absent sensation within such a patch is a key sign of leprosy and should never be assumed to be "just a skin thing."</li>
      <li>Palpate peripheral nerves (e.g. the ulnar nerve at the elbow, the common peroneal nerve at the knee) for thickening, which supports leprosy.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Motor and Reflex Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Formal power testing in all four limbs, even if the history sounds purely sensory.</li>
      <li>Reflexes - reduced or absent in a peripheral neuropathy; normal or exaggerated in a central process.</li>
      <li>Cranial nerve examination and a check for facial asymmetry - essential wherever a stroke is a possibility.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetic foot examination</span> - looking for ulceration, deformity, and loss of protective sensation using a monofilament where available.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin</span> - a vesicular rash in a dermatomal distribution supports shingles.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Signs of vitamin deficiency</span> - glossitis or pallor, relevant to B12 deficiency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chvostek's and Trousseau's signs</span> - where hypocalcaemia is suspected.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neck examination</span> - where cervical radiculopathy is suspected.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden, one-sided paresthesia with other neurological symptoms</span> (facial droop, weakness, slurred speech, visual change) - a stroke until proven otherwise; needs urgent imaging without delay.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A patch of skin with reduced or absent sensation</span> - leprosy until excluded; early treatment is what prevents permanent nerve damage and disability, so this should be acted on promptly, not observed.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Paresthesia progressing to ascending weakness</span> - raises early Guillain-Barre syndrome, with a real risk of respiratory muscle involvement.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Bilateral leg symptoms with new bladder or bowel dysfunction</span> - raises spinal cord compression/cauda equina syndrome, a surgical emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe hypocalcaemia with tetany</span> - carries a risk of laryngospasm and seizures and needs prompt correction.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Complete loss of protective foot sensation in a diabetic patient</span> - carries a significant risk of unnoticed injury and ulceration, and needs proactive foot care education.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose/HbA1c</span> - given how commonly diabetes underlies this symptom.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Slit-skin smear and careful sensory/nerve examination</span> - where leprosy is suspected; clinical sensory testing remains central to diagnosis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC, vitamin B12/folate levels</span> - where nutritional deficiency is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal function</span> - where uraemic neuropathy is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid function tests</span> - where suggestive symptoms are present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Calcium and electrolytes</span> - where tetany or another electrolyte-related cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood lead level</span> - where a compatible occupational exposure history is present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urgent CT/MRI brain</span> - wherever a central/stroke-related cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">MRI spine</span> - where cervical radiculopathy or cord compression is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nerve conduction studies</span> - where a specific entrapment neuropathy needs confirmation, where available.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetic peripheral neuropathy</span> - the commonest cause, typically a symmetrical glove-and-stocking pattern.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Leprosy</span> - a patch of altered sensation, sometimes with visible skin changes; always actively consider this.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol-related neuropathy</span> - in a patient with significant alcohol intake.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vitamin B12 or thiamine deficiency</span> - particularly with limited dietary intake.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV/ART-related neuropathy</span> - in a known HIV-positive patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Entrapment neuropathy</span> (e.g. carpal tunnel syndrome) - a single nerve distribution, often related to repetitive activity.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cervical radiculopathy</span> - a dermatomal pattern with neck pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stroke/TIA</span> - sudden, one-sided paresthesia with other neurological symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Guillain-Barre syndrome (early)</span> - ascending paresthesia, often preceding weakness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Herpes zoster (pre-rash)</span> - dermatomal tingling/pain preceding the characteristic vesicular rash.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypocalcaemia/tetany</span> - perioral and hand/foot tingling, sometimes with muscle spasm.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety/hyperventilation syndrome</span> - perioral and peripheral tingling during episodes of rapid breathing.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lead poisoning</span> - with a compatible occupational exposure history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic kidney disease-related (uraemic) neuropathy</span> - in advanced disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypothyroidism-related neuropathy</span> - alongside other hypothyroid features.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief of Neuropathic Discomfort</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neuropathic pain agents</span> (e.g. amitriptyline or gabapentin, where available and appropriate) - for burning or shooting discomfort, once a specific cause is being addressed.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Foot care education</span> - for anyone with reduced sensation in the feet, particularly diabetics, to reduce the risk of unnoticed injury.</li>
      <li>Symptomatic relief should never delay identifying and treating the underlying cause, particularly leprosy or a central process.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetic peripheral neuropathy</span> - optimize glycaemic control, alongside neuropathic pain management and regular foot care.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Leprosy</span> - urgent referral into the national leprosy programme for confirmation and multidrug therapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vitamin B12/thiamine deficiency</span> - appropriate vitamin replacement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol-related neuropathy</span> - abstinence counselling alongside thiamine and B-vitamin supplementation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stroke/TIA</span> - urgent stroke pathway per standard protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Guillain-Barre syndrome</span> - urgent neurology referral with close monitoring of respiratory function; IV immunoglobulin or plasmapheresis where available.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Entrapment neuropathy</span> - splinting/activity modification initially, with surgical release considered for persistent or severe cases.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypocalcaemia</span> - calcium replacement, guided by severity and underlying cause.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Herpes zoster</span> - antiviral therapy (e.g. acyclovir) started as early as possible, alongside analgesia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lead poisoning</span> - removal from the source of exposure, with specialist input on chelation therapy where indicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety/hyperventilation</span> - reassurance, breathing techniques, and referral for further support where needed.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Paresthesia/tingling, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, distribution, associated pain/weakness, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical History</dt>
      <dd class="mt-0.5">Diabetes, HIV status, previous leprosy or TB contact, kidney disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Substance History</dt>
      <dd class="mt-0.5">Alcohol use, isoniazid or chemotherapy history, current medications.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Occupational exposures, dietary intake, family history of neurological disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Detailed sensory mapping, motor/reflex testing, skin/nerve examination, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment/referral given, and follow-up plan.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not testing sensation in a patch of altered skin, missing an opportunity to diagnose leprosy early.</li>
    <li>Not checking blood glucose in every case, given how commonly diabetes underlies this symptom.</li>
    <li>Missing a stroke by not recognizing sudden, one-sided paresthesia with other neurological symptoms as urgent.</li>
    <li>Not asking about occupational lead or heavy metal exposure where relevant.</li>
    <li>Not considering nutritional deficiency in patients with limited dietary access.</li>
    <li>Missing the ascending pattern that can precede weakness in early Guillain-Barre syndrome.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Any patchy area of sensory loss or tingling needs leprosy actively considered - test sensation directly and don't assume it's "just a skin thing."</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Sudden, one-sided paresthesia with other neurological symptoms is a stroke until proven otherwise.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Diabetes is the commonest cause of peripheral neuropathy - check glucose in every case.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider nutritional deficiency (B12/thiamine) where dietary intake is limited.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about occupational exposure to lead and other heavy metals where relevant.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Diagnosis, Treatment and Prevention of Leprosy.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Diabetes Association - Standards of Care (Neuropathy section).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Stroke Organization - Global Stroke Services Guidelines and Action Plan.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Neurology - Guideline on the Management of Guillain-Barre Syndrome.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>



</body>
</html>
    `
  },
  
  {
    id: 'symptom-clerking-dizziness',
    title: 'Dizziness',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Dizziness</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Dizziness</h1>
    <p class="text-sm text-indigo-200">"Dizziness" means different things to different patients - a spinning sensation, a feeling of about to faint, unsteadiness on the feet, or a vague fogginess - and each of these needs a different workup entirely. Locally, anaemia is an extremely common and often overlooked cause of the faint, lightheaded type, while true vertigo with other neurological symptoms must be treated as a possible stroke. This guide focuses on the history and examination that sort out which type of dizziness is actually present, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">The Essential First Question: What Does "Dizzy" Actually Mean?</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does it feel like the room is spinning, or like you are spinning (true vertigo)?</li>
      <li>Does it feel like you are about to faint or black out, especially on standing up (presyncope/lightheadedness)?</li>
      <li>Do you feel unsteady or off-balance when walking, without the room spinning (disequilibrium)?</li>
      <li>Or is it more of a vague, foggy, hard-to-describe sensation that doesn't fit any of the above?</li>
      <li>Getting this clear early saves a great deal of time, since each pattern points towards a largely different set of causes.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Follow-Up Questions Depending on the Pattern</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">If vertigo:</span> Is it triggered by a change in head position (raises BPPV)? How long do episodes last - seconds, minutes, or hours? Any hearing loss or ringing in the ears (raises Meniere's disease or another inner ear cause)? Any ear pain or discharge?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">If presyncope/lightheadedness:</span> Does it happen specifically on standing up? Any palpitations before or during the episode? Any chest pain? Is it worse when fasting, or related to diabetes medication timing? Any recent vomiting, diarrhoea, or reduced fluid intake?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">If disequilibrium:</span> Has it come on gradually? Any known diabetes, visual problems, or joint/mobility issues? Any recent falls?</li>
      <li>In every case: has this happened before, and what makes it better or worse?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological (ask explicitly - these are red flags):</span> double vision, slurred speech, difficulty swallowing, weakness or numbness anywhere, or difficulty coordinating movements. Any of these alongside vertigo raises a central (brainstem/cerebellar) cause rather than an inner ear problem.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Anaemia-related:</span> breathlessness on exertion, palpitations, and noticeable pallor or fatigue.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac:</span> palpitations, chest pain, or a sensation of the heart racing or skipping beats.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Headache:</span> particularly with a migrainous quality, which can accompany vestibular migraine.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> vomiting or diarrhoea contributing to dehydration.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Reproductive (in women):</span> menstrual history (heavy periods contributing to anaemia), and pregnancy status/trimester.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> antihypertensives, diuretics, and sedatives are common causes of orthostatic dizziness; ask specifically about any recent dose changes.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Known anaemia, sickle cell disease, or recent malaria:</span> anaemia is an extremely common local cause of lightheaded dizziness and should always be actively considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes and its treatment:</span> hypoglycaemia can present as dizziness, and long-standing diabetes can cause autonomic neuropathy leading to orthostatic hypotension.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypertension and cardiac history:</span> relevant to both stroke risk and arrhythmia.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy:</span> in later pregnancy, lying flat can cause supine hypotension from the gravid uterus compressing major vessels; anaemia is also common in pregnancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Ear infections:</span> recent or recurrent ear infections/discharge.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use and hydration:</span> relevant to dehydration-related presyncope.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent head injury:</span> relevant to certain vestibular or central causes.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Vital Signs (Essential in Every Case)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lying and standing blood pressure and heart rate</span> - a significant drop on standing supports orthostatic hypotension; do this in every patient presenting with dizziness.</li>
      <li>Pulse rate and rhythm - checking specifically for an irregular rhythm suggesting an arrhythmia.</li>
      <li>Temperature, and oxygen saturation where relevant.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General and Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pallor</span> - check conjunctivae and palms; anaemia is common enough locally that this should never be skipped.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Ear examination (otoscopy)</span> - looking for infection, discharge, or a perforated eardrum.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Nystagmus</span> - note its direction and whether it changes with gaze.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cranial nerve examination</span> - looking specifically for facial asymmetry, abnormal eye movements, or slurred speech.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cerebellar signs</span> - coordination, gait, and any tremor or dysmetria.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Focal limb weakness or sensory loss</span> - alongside vertigo, this strongly raises a central cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Dix-Hallpike manoeuvre</span> - where BPPV is suspected based on positional triggers, to reproduce the vertigo and characteristic nystagmus.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac auscultation</span> - murmurs or an irregular rhythm.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Capillary blood glucose</span> - in any diabetic patient presenting with dizziness.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Vertigo with double vision, slurred speech, weakness, numbness, or ataxia</span> - a stroke (posterior circulation) until proven otherwise, especially with vascular risk factors; needs urgent imaging.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Presyncope/syncope with palpitations, chest pain, or an abnormal ECG</span> - raises a cardiac arrhythmia and needs prompt cardiac assessment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe anaemia with haemodynamic compromise</span> - tachycardia, hypotension, or breathlessness at rest - needs urgent transfusion assessment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Confirmed or suspected hypoglycaemia</span> in a diabetic patient - needs immediate glucose correction.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Significant orthostatic hypotension with recurrent falls</span> - carries real injury risk and needs medication review and further assessment.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - given how common anaemia is as a cause locally, this should be routine.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose</span> - in every diabetic patient with dizziness, and as a general screen otherwise.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lying/standing blood pressure</span> - as above, essential in every case.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">ECG</span> - where a cardiac cause is plausible, particularly with palpitations or chest pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - where fever accompanies the dizziness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Electrolytes and thyroid function tests</span> - as part of a general metabolic screen.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urgent CT/MRI brain</span> - wherever a central cause of vertigo is suspected; this should not be delayed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Dix-Hallpike test</span> - a clinical test, not a laboratory investigation, but central to confirming BPPV without further imaging when the pattern is typical.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy test</span> - where relevant, in a woman of reproductive age.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vertigo (peripheral):</span> BPPV, vestibular neuritis/labyrinthitis, Meniere's disease, or otitis media-related.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vertigo (central):</span> posterior circulation stroke/TIA, vestibular migraine, or a cerebellar lesion.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anaemia</span> - a very common local cause of lightheaded dizziness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Orthostatic hypotension</span> - from medications, dehydration, or autonomic dysfunction (including diabetic autonomic neuropathy).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac arrhythmia</span> - presenting with presyncope or syncope.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypoglycaemia</span> - in a diabetic patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vasovagal episode</span> - a common, benign cause of presyncope.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Adrenal insufficiency</span> - postural dizziness alongside fatigue and hyperpigmentation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetic peripheral neuropathy</span> - disequilibrium rather than true vertigo.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety/hyperventilation syndrome</span> - a nonspecific, often lightheaded sensation, usually a diagnosis of exclusion.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Supine hypotension of pregnancy</span> - in later pregnancy, related to position.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication side effects</span> - antihypertensives, diuretics, sedatives.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic/General Support</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Fall precautions</span> - advise the patient to rise slowly, sit if feeling faint, and use support where needed while the cause is being identified.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Adequate hydration</span> - a reasonable general measure.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Immediate glucose</span> - for confirmed or strongly suspected hypoglycaemia; this should never be delayed.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">BPPV</span> - a canalith repositioning manoeuvre (e.g. the Epley manoeuvre), which is often curative.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vestibular neuritis/labyrinthitis</span> - short-term vestibular suppressants for severe symptoms, with vestibular rehabilitation exercises to support longer-term recovery.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Meniere's disease</span> - salt restriction and diuretics as first-line measures, with ENT input for refractory cases.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stroke</span> - urgent stroke pathway per the general weakness/stroke guidance.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anaemia</span> - iron/folate replacement, treatment of the underlying cause, and transfusion where severe or symptomatic.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Orthostatic hypotension</span> - review and adjust contributing medications, ensure adequate hydration, and consider compression stockings.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac arrhythmia</span> - cardiology referral for further characterization and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypoglycaemia</span> - immediate glucose, with review of the diabetes medication regimen afterwards.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Adrenal insufficiency</span> - glucocorticoid replacement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety/hyperventilation</span> - reassurance, breathing techniques, and referral for further support where needed.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Dizziness, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Clarify vertigo versus presyncope versus disequilibrium versus nonspecific, onset, triggers, duration of episodes, associated symptoms, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Diabetes, hypertension, known anaemia/sickle cell disease, cardiac history, stroke risk factors.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Antihypertensives, diuretics, sedatives, diabetes medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Menstrual history, alcohol use, relevant occupational factors.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Lying/standing vitals, pallor, ear/neurological/cerebellar findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not clarifying what type of "dizziness" the patient means before proceeding.</li>
    <li>Not checking lying and standing blood pressure as a routine part of the assessment.</li>
    <li>Missing a central cause by not performing a full neurological exam when vertigo is accompanied by other neurological symptoms.</li>
    <li>Not checking an FBC despite how common anaemia is as a cause locally.</li>
    <li>Missing an arrhythmia by not obtaining an ECG when presyncope is accompanied by palpitations.</li>
    <li>Not checking blood glucose in a diabetic patient with dizziness.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always clarify what type of dizziness is present first - vertigo, presyncope, disequilibrium, or nonspecific - each needs a different workup.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check lying and standing blood pressure in every case of dizziness.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Anaemia is an extremely common local cause of presyncope-type dizziness - check an FBC.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Vertigo with other neurological symptoms is a stroke until excluded, especially with vascular risk factors.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check blood glucose in a diabetic patient presenting with dizziness.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Neurology - Guideline on the Evaluation of Vertigo/Dizziness.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Stroke Organization - Global Stroke Services Guidelines and Action Plan.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines on Haemoglobin Cutoffs to Define Anaemia and Its Severity.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Otolaryngology - Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>



</body>
</html>
    `
  },


  {
    id: 'symptom-clerking-headache',
    title: 'Headache',
    category: 'Symptom Clerking',
    subCategory: 'Neurological',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Headache</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Headache</h1>
    <p class="text-sm text-indigo-200">Headache is an almost universal complaint, and most some of the most dangerous conditions in medicine: cerebral malaria, meningitis, hypertensive emergency, pre-eclampsia/eclampsia, and subarachnoid haemorrhage. This guide focuses on the history and examination that separate the benign from the dangerous, before closing with the investigations and differentials they point you towards.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Headache Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>How did it start - gradual, or did it reach maximum intensity within seconds to minutes ("thunderclap")? A thunderclap onset is a medical emergency until proven otherwise.</li>
      <li>How long has it lasted, and is this a first-ever headache or a recurrent pattern?</li>
      <li>Where is it located - unilateral, bilateral, band-like, occipital, or focused around one eye?</li>
      <li>What is the character - throbbing/pulsatile, tight/band-like ("pressure"), or sharp and stabbing?</li>
      <li>How severe is it, on a scale of 1 to 10, and is it the worst headache of the patient's life?</li>
      <li>What makes it better or worse - is it worse on waking, with straining/coughing/bending forward, or with lying flat? (Worse in the morning or with straining suggests raised intracranial pressure.)</li>
      <li>Has the patient already taken any analgesic, and how often are analgesics being used generally? (Frequent use raises the possibility of medication-overuse headache.)</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General/infective:</span> fever, chills, night sweats, weight loss.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological:</span> neck stiffness, photophobia or phonophobia, visual disturbance (blurring, double vision, visual field loss), weakness or numbness of a limb, difficulty speaking, seizures, confusion or altered behaviour.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> nausea and vomiting (and whether vomiting is projectile).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">ENT/sinus:</span> facial pain or pressure, nasal discharge or blockage, ear pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Visual/aura:</span> flashing lights, zigzag lines, or other aura symptoms preceding the headache (suggestive of migraine).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal:</span> neck or shoulder muscle tension, jaw claudication or scalp tenderness (temporal arteritis, though uncommon in younger African patients).</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Exposure/Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood pressure:</span> Any known history of hypertension? Is it well controlled, and is the patient compliant with antihypertensives? (Poorly controlled hypertension is a very common cause of headache seen locally, and a hypertensive emergency must always be excluded.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy:</span> Is the patient pregnant, and if so, how many weeks? Any swelling of the face/hands/feet, visual disturbance, or epigastric pain? (New headache in pregnancy, particularly after 20 weeks, must raise pre-eclampsia/eclampsia until excluded.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria:</span> Recent fever, chills, or confirmed malaria treatment? Bednet use and mosquito exposure? (Cerebral malaria can present with headache, fever, and altered consciousness, and is a leading cause of severe febrile illness with neurological features locally.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Meningitis:</span> Contact with a similar illness? Crowded living conditions? Timing within the dry season (roughly December-June)? Meningococcal vaccination status?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> Known genotype? Any history of vaso-occlusive crises or stroke? (Headache can herald a stroke in a patient with sickle cell disease and warrants a lower threshold for imaging.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status:</span> Known status or risk factors? (In an HIV-positive patient, a new headache raises concern for opportunistic CNS infections such as cryptococcal meningitis or toxoplasmosis, which need specific investigation.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Trauma:</span> Any recent head injury, however minor it seemed at the time?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pattern/family history:</span> Has the patient had similar headaches before? Any family history of migraine? Any recent change in a longstanding headache pattern?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lifestyle:</span> Sleep pattern, stress levels, alcohol use, caffeine intake or withdrawal, and screen time/eye strain.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, distressed, or acutely unwell?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood pressure is essential in every headache clerking</span> - a markedly elevated reading (particularly with symptoms) raises hypertensive emergency, and in a pregnant patient raises pre-eclampsia.</li>
      <li>Temperature, heart rate, respiratory rate, and oxygen saturation - fever alongside headache should always prompt a search for an infective cause.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Physical Signs to Actively Look For</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pallor</span> - severe anaemia can itself cause headache, and is relevant in sickle cell disease and malaria.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Facial/peripheral oedema</span> - in a pregnant patient, raises pre-eclampsia alongside the blood pressure reading.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neck stiffness and meningism</span> - actively elicit Kernig's and Brudzinski's signs in any patient with headache and fever.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rash</span> - a non-blanching, petechial rash alongside headache and fever is a meningococcaemia emergency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Scalp/temporal tenderness</span> - consider temporal arteritis in an older patient, though this is less common in the typical African patient population.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Neurological and Ophthalmic Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Fundoscopy</span> - actively look for papilloedema, which suggests raised intracranial pressure. This is frequently omitted but is one of the most important findings to document.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Level of consciousness</span> - Glasgow Coma Scale; any drowsiness or confusion changes the urgency of the case considerably.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pupils</span> - size, symmetry, and reactivity to light.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Focal neurological signs</span> - limb weakness, sensory loss, facial asymmetry, or speech disturbance; any of these points to a structural or vascular cause and warrants urgent imaging.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gait and cerebellar signs</span> - where relevant to the clinical picture.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Thunderclap onset</span> - maximum intensity within seconds to minutes; treat as subarachnoid haemorrhage until excluded by urgent CT (and lumbar puncture if the CT is normal but suspicion remains).</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Fever with neck stiffness</span> - meningitis until proven otherwise; do not delay antibiotics awaiting investigations if bacterial meningitis is strongly suspected.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Papilloedema or focal neurological deficit</span> - raises a space-occupying lesion or raised intracranial pressure; lumbar puncture should not be performed until this is reasonably excluded.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Markedly elevated blood pressure with symptoms</span> - hypertensive emergency; in pregnancy, consider pre-eclampsia/eclampsia and manage urgently.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">New headache in pregnancy</span>, particularly with visual disturbance, epigastric pain, or oedema - pre-eclampsia/eclampsia.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">New headache in a known HIV-positive patient</span> - opportunistic CNS infection (cryptococcal meningitis, toxoplasmosis) must be actively excluded.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">New headache in a patient with sickle cell disease</span> - consider stroke, with a low threshold for urgent imaging.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Altered consciousness, seizures, or a non-blanching rash</span> accompanying the headache.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood pressure measurement</span> - repeated and documented; essential in every headache workup.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - where fever accompanies the headache, before any antimalarial is started.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - looking for severe anaemia, or supporting a sickle cell crisis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Random blood glucose</span> - hypoglycaemia can itself present with headache and altered mentation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinalysis</span> - proteinuria in a pregnant patient supports pre-eclampsia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">CT head</span> - indicated for thunderclap onset, focal neurological signs, papilloedema, altered consciousness, or new headache after significant trauma.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lumbar puncture</span> - where meningitis or subarachnoid haemorrhage (with a normal CT) is suspected, only once raised intracranial pressure has been reasonably excluded.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening and cryptococcal antigen test</span> - in a patient with a new headache and unknown or positive HIV status.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Haemoglobin genotype</span> - where sickle cell disease is suspected but not previously confirmed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood culture</span> - where a bacterial infective cause is suspected, before antibiotics.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tension-type headache</span> - the commonest primary headache; bilateral, band-like, non-disabling.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Migraine</span> - unilateral, throbbing, with photophobia/phonophobia and nausea, sometimes with aura.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria/cerebral malaria</span> - headache with fever, and in severe cases, altered consciousness or seizures.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypertensive emergency</span> - markedly elevated blood pressure with headache and end-organ symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pre-eclampsia/eclampsia</span> - new headache in pregnancy with hypertension, proteinuria, and/or oedema.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Meningitis (bacterial or cryptococcal)</span> - fever, neck stiffness, photophobia; cryptococcal meningitis particularly in HIV-positive patients.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Subarachnoid haemorrhage</span> - thunderclap onset, often described as the worst headache of the patient's life.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Space-occupying lesion</span> - progressive headache, worse in the morning or with straining, papilloedema, focal deficits.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell-related stroke</span> - new headache with focal neurological signs in a known sickle cell patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sinusitis</span> - facial pain/pressure, worse on bending forward, with nasal symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-overuse headache</span> - chronic daily headache in a patient using analgesics frequently.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Refractive error/eye strain</span> - especially with prolonged screen use or uncorrected vision problems.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief of Headache Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Paracetamol</span> - first-line simple analgesia while the underlying cause is being worked up, safe across most patient groups including pregnancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">NSAIDs</span> (e.g. ibuprofen) - effective adjunct/alternative, but avoid in pregnancy (particularly the third trimester), peptic ulcer disease, renal impairment, or where bleeding risk is a concern.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Antiemetics</span> (e.g. metoclopramide) - useful where nausea and vomiting accompany the headache, and can improve absorption of oral analgesics.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rest in a quiet, dark room</span> - a simple but effective adjunct, particularly in migraine.</li>
      <li>Avoid opioids as first-line analgesia for headache, and avoid frequent or prolonged analgesic use, which risks medication-overuse headache.</li>
      <li>Symptomatic relief should never delay definitive treatment or replace investigation where a danger sign is present - treat the cause, not just the pain, once identified.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tension-type headache</span> - simple analgesics (paracetamol, NSAIDs), reassurance, and attention to sleep, stress, and posture.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Migraine</span> - NSAIDs or paracetamol for mild-moderate attacks; triptans for moderate-severe attacks where available; an antiemetic for associated nausea; counsel against frequent analgesic use to avoid medication-overuse headache.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria/cerebral malaria</span> - as per the fever guide: ACT for uncomplicated disease, IV artesunate for severe/cerebral malaria.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypertensive emergency</span> - controlled, gradual blood pressure reduction with IV agents (e.g. labetalol, nicardipine) in a monitored setting; avoid an overly rapid drop in pressure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pre-eclampsia/eclampsia</span> - magnesium sulphate for seizure prophylaxis/treatment, antihypertensives (labetalol, nifedipine, or methyldopa), with delivery as the definitive management once maternal/fetal status allows.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacterial meningitis</span> - empirical IV ceftriaxone started immediately on suspicion, adjusted per CSF results.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cryptococcal meningitis</span> - induction with amphotericin B and flucytosine where available, followed by fluconazole consolidation and maintenance therapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Subarachnoid haemorrhage</span> - urgent neurosurgical referral, blood pressure control, and nimodipine to reduce the risk of vasospasm.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Space-occupying lesion</span> - neurosurgical referral; dexamethasone may be used for oedema while definitive management is arranged.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell-related stroke</span> - exchange transfusion, adequate hydration, and urgent neurology/haematology referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sinusitis</span> - analgesics and decongestants; antibiotics only where bacterial features (e.g. purulent discharge, prolonged symptoms) are present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-overuse headache</span> - withdrawal of the overused analgesic, with bridging therapy and follow-up.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Headache, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, site, character, severity, aggravating/relieving factors, associated symptoms, directed risk history, treatment already received, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Hypertension, sickle cell disease, HIV status, previous similar headaches, prior hospitalizations.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Analgesic use and frequency, antihypertensives and compliance, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Family history of migraine, occupation, stress levels, alcohol/caffeine use.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs (blood pressure explicitly), fundoscopy, neurological findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 7. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Attributing every headache to "malaria" without checking blood pressure or considering other causes.</li>
    <li>Omitting fundoscopy, particularly in a patient with a progressive or atypical headache.</li>
    <li>Not asking about pregnancy status in a woman presenting with headache.</li>
    <li>Delaying antibiotics for suspected bacterial meningitis while awaiting investigation results.</li>
    <li>Performing a lumbar puncture before reasonably excluding raised intracranial pressure.</li>
    <li>Missing an opportunistic CNS infection in a patient with unknown or unaddressed HIV status.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check blood pressure in every patient with headache - hypertensive emergency and pre-eclampsia are both common and dangerous causes locally.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A thunderclap headache is a subarachnoid haemorrhage until proven otherwise - arrange urgent CT.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Fever with neck stiffness means meningitis until proven otherwise - do not delay antibiotics.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always perform fundoscopy - papilloedema changes the whole management plan.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about pregnancy, HIV status, and sickle cell genotype in every headache history - each reframes the differential.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>International Headache Society - International Classification of Headache Disorders (ICHD-3).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria (Hypertension chapter).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Treatment of Malaria (cerebral malaria criteria).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Recommendations on Prevention and Treatment of Pre-eclampsia and Eclampsia.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Nigeria Centre for Disease Control - Meningitis Surveillance and Response Guidelines.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Diagnosis, Prevention and Management of Cryptococcal Disease in HIV-Infected Adults, Adolescents and Children.</li>
    </ul>
  </div>
</details>
 

</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-cough',
    title: 'Cough',
    category: 'Symptom Clerking',
    subCategory: 'Respiratory',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Cough</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Cough</h1>
    <p class="text-sm text-indigo-200">Cough is a common complaint that ranges from a self-limiting viral illness to the presenting feature of tuberculosis, chronic heart failure, or a life-threatening airway emergency. Nigeria carries one of the highest tuberculosis burdens globally, so cough clerking here carries an added responsibility - to actively screen for TB rather than assume the obvious. This guide focuses on the history and examination that separate benign causes from the ones that matter, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Cough Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>How long has the cough lasted? (Acute is under 3 weeks, subacute 3-8 weeks, chronic beyond 8 weeks - and any cough beyond 2 weeks should already prompt TB screening locally.)</li>
      <li>Is it dry, or productive? If productive, what does the sputum look like - clear, yellow/green, rust-coloured, or blood-streaked?</li>
      <li>Is there any blood in the sputum (haemoptysis), even a small streak? This should never be dismissed.</li>
      <li>Is it worse at a particular time - nocturnal (suggests asthma, heart failure, or reflux), on waking (suggests chronic bronchitis), or with exertion?</li>
      <li>Is it triggered by anything specific - cold air, dust, exercise, lying flat, or eating?</li>
      <li>Has it been treated already, and did any treatment help?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, night sweats, weight loss, loss of appetite - all classic TB constitutional symptoms and should be asked about directly, not left to volunteering.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> breathlessness (and whether it is worsening), wheeze, chest pain (and whether pleuritic), hoarseness of voice.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac:</span> orthopnoea (breathlessness lying flat), paroxysmal nocturnal dyspnoea, leg swelling, palpitations - all point towards a cardiac cause of the cough.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">ENT/upper airway:</span> nasal discharge or blockage, post-nasal drip sensation, sore throat.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> heartburn, regurgitation, or a sour taste - reflux-related cough.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">In children specifically:</span> any episode of sudden choking or coughing while eating or playing (raises foreign body aspiration), difficulty feeding, lethargy, or fast/laboured breathing.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Exposure/Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis:</span> Known contact with someone with TB or a chronic cough? Previous TB treatment (raising the possibility of relapse or drug-resistant disease)? Any BCG vaccination as a child?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status:</span> Known status or risk factors? (HIV substantially widens the differential - TB, PCP, and other opportunistic pulmonary infections all become more likely.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Indoor air pollution:</span> Does the patient cook with firewood, charcoal, or kerosene in an enclosed space? (Chronic biomass fuel exposure is a major, often under-recognized, cause of COPD locally, particularly in women who have never smoked.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational exposure:</span> Work in mining, quarrying, welding, or grain milling? (Raises occupational lung disease.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Smoking history:</span> Current or previous tobacco use, and pack-years if applicable.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac history:</span> Any known heart murmur, rheumatic fever as a child, or diagnosed valve disease? (Rheumatic heart disease remains a significant cause of chronic cough and heart failure in younger patients locally.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Drug history:</span> Is the patient on an ACE inhibitor? (A dry, persistent cough is a recognized class effect.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Asthma/atopy:</span> Personal or family history of asthma, eczema, or allergic rhinitis?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Immunization (children):</span> Up to date with pertussis and measles vaccination? An incompletely immunized child with a prolonged paroxysmal cough raises pertussis.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or in respiratory distress? Look for accessory muscle use, nasal flaring, or an inability to complete full sentences.</li>
      <li>Respiratory rate and oxygen saturation - essential in every cough clerking; a normal saturation at rest does not exclude significant disease.</li>
      <li>Temperature, heart rate, and blood pressure.</li>
      <li>In a child: count the respiratory rate over a full minute, and look specifically for subcostal recession, grunting, or an inability to feed - these are markers of severe illness.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Physical Signs to Actively Look For</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Wasting/cachexia</span> - alongside the constitutional history, raises TB or malignancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Clubbing</span> - suggests bronchiectasis, chronic suppurative lung disease, or malignancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cyanosis</span> - central cyanosis indicates significant hypoxia.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphadenopathy</span> - particularly cervical, raises TB.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Raised jugular venous pressure and peripheral oedema</span> - point towards heart failure as the underlying cause of the cough.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">BCG scar</span> - worth noting in children being assessed for TB exposure.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Chest and Cardiac Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Inspection:</span> chest wall shape/symmetry, use of accessory muscles, respiratory pattern.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Palpation/percussion:</span> tracheal position, chest expansion, and percussion note (dull over consolidation or effusion, hyperresonant over a pneumothorax).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Auscultation:</span> crepitations (consolidation, heart failure), wheeze (asthma, COPD), reduced or bronchial breath sounds, and any stridor (upper airway obstruction - an emergency).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac auscultation:</span> murmurs (raising rheumatic valve disease), gallop rhythm, or other signs of heart failure.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Haemoptysis</span> - even a small streak of blood is never normal and must be investigated, particularly for TB or malignancy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Stridor</span> - suggests upper airway obstruction (foreign body, epiglottitis, severe croup); a paediatric or airway emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe respiratory distress or hypoxia</span> - accessory muscle use, inability to complete sentences, or oxygen saturation below the normal range.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden onset with a choking history in a child</span> - suspected foreign body aspiration requires urgent referral for removal.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">High fever with focal chest signs</span> - suggests pneumonia with a risk of progressing to sepsis; do not delay antibiotics awaiting imaging if the patient looks unwell.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of decompensated heart failure</span> - marked orthopnoea, raised JVP, and peripheral oedema alongside the cough.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Danger signs in a child</span> (per IMCI) - inability to drink or breastfeed, persistent vomiting, convulsions, lethargy or unconsciousness, or severe chest indrawing.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB microscopy and/or GeneXpert MTB/RIF</span> - for any cough lasting 2 weeks or more; GeneXpert also gives rapid rifampicin-resistance information.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest radiograph</span> - for most cough presentations beyond a simple, brief viral illness, and essential where TB, pneumonia, or a cardiac cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pulse oximetry</span> - in every patient with respiratory symptoms, regardless of apparent severity.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - looking for leukocytosis (bacterial infection) or anaemia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent, given how significantly it changes the differential.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum culture</span> - where bacterial pneumonia is suspected and not responding to first-line treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">ECG and echocardiography</span> - where a cardiac cause (e.g. rheumatic valve disease, heart failure) is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peak flow/spirometry</span> - where asthma or COPD is suspected and facilities allow.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Viral upper respiratory tract infection/acute bronchitis</span> - the commonest cause of acute cough; self-limiting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pneumonia</span> - fever, focal chest signs, productive cough; can progress rapidly, particularly in children and the elderly.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - chronic cough beyond 2 weeks, constitutional symptoms, TB contact; always actively screen for this locally.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Asthma</span> - episodic wheeze, nocturnal cough, personal/family history of atopy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">COPD (including biomass-related)</span> - chronic productive cough, exertional breathlessness, significant smoking or biomass fuel exposure history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure (including rheumatic heart disease)</span> - orthopnoea, PND, leg swelling, murmur; consider particularly in younger patients with a rheumatic fever history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bronchiectasis</span> - chronic productive cough with large volumes of sputum, clubbing, recurrent infections.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">GERD-related cough</span> - worse lying down or after meals, with reflux symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Post-nasal drip/allergic rhinitis</span> - associated nasal symptoms, throat clearing.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">ACE-inhibitor cough</span> - dry, persistent, temporally related to starting the drug.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pertussis</span> - paroxysmal cough with a whoop, particularly in an incompletely immunized child.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Foreign body aspiration</span> - sudden onset, often with a choking history, particularly in young children.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV-related pulmonary infection</span> (e.g. PCP) - in a patient with known or unaddressed HIV status.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lung malignancy</span> - consider in older patients, particularly with a significant smoking history, unexplained weight loss, or haemoptysis.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief of Cough Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Honey</span> - a reasonable, evidence-supported option for children over 1 year with a simple viral cough; never give honey to infants under 12 months due to the risk of infant botulism.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Adequate hydration</span> - helps loosen secretions and soothe irritation.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Steam inhalation/warm fluids</span> - simple, low-risk adjuncts for symptomatic comfort.</li>
      <li>Cough suppressants and over-the-counter cough syrups have limited evidence of benefit and are best avoided in young children; they should never be used to mask a cough that needs proper evaluation.</li>
      <li>Antibiotics should not be given for a simple viral cough - reserve them for a confirmed or strongly suspected bacterial cause.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - standard six-month RHZE regimen under DOTS, per the National Tuberculosis and Leprosy Control Programme; adjusted for retreatment or drug-resistant disease where relevant.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Community-acquired pneumonia</span> - amoxicillin or amoxicillin-clavulanate first-line for most adults; a macrolide added or substituted where atypical organisms are suspected; oxygen if hypoxic; escalate to IV antibiotics and admission if severity criteria are met.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Asthma</span> - inhaled short-acting bronchodilators for symptom relief, with inhaled corticosteroids for ongoing control; oral steroids and nebulised bronchodilators for exacerbations.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">COPD (including biomass-related)</span> - bronchodilators, smoking/biomass fuel avoidance and ventilation improvements, and pulmonary rehabilitation where available.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure/rheumatic heart disease</span> - diuretics for congestion, standard heart failure therapy, and cardiology/cardiothoracic referral for significant valve disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">GERD-related cough</span> - proton pump inhibitor trial, alongside lifestyle measures (avoiding late meals, elevating the head of the bed).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">ACE-inhibitor cough</span> - switch to an angiotensin receptor blocker.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pertussis</span> - a macrolide antibiotic (e.g. azithromycin) plus supportive care; earlier treatment reduces transmission more than it shortens the cough itself.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Foreign body aspiration</span> - urgent bronchoscopic removal; this is not managed with medication.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">PCP/HIV-related pulmonary infection</span> - high-dose co-trimoxazole as first-line treatment, alongside initiation or continuation of antiretroviral therapy.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Cough, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, character, sputum/haemoptysis, timing/triggers, associated symptoms, directed risk history, treatment already received, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">TB, asthma, HIV status, rheumatic fever/heart disease, previous hospitalizations.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Current medications (particularly ACE inhibitors), previous TB treatment, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">TB contact, smoking history, biomass fuel exposure, occupation, immunization status (children).</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs (respiratory rate and SpO2 explicitly), general and chest/cardiac findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not sending sputum for AFB/GeneXpert in a patient with cough lasting 2 weeks or more.</li>
    <li>Dismissing a small streak of blood-stained sputum as insignificant.</li>
    <li>Failing to ask about biomass fuel/indoor smoke exposure in a patient with chronic cough, particularly women.</li>
    <li>Missing rheumatic heart disease as a cause of chronic cough in a younger patient.</li>
    <li>Prescribing antibiotics or cough syrup for a simple viral cough, especially in young children.</li>
    <li>Not considering HIV status when assessing a patient with chronic or recurrent respiratory symptoms.</li>
    <li>Missing a foreign body aspiration in a child because the choking episode was not specifically asked about.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Any cough lasting 2 weeks or more should trigger active TB screening, regardless of how obvious another cause seems.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Haemoptysis is never normal, even as a small streak - it always warrants investigation.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask specifically about biomass fuel and indoor smoke exposure - a major, often-missed cause of chronic cough and COPD locally.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider a cardiac cause, including rheumatic valve disease, in a younger patient with chronic cough and orthopnoea.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>HIV status materially changes the differential for chronic or recurrent respiratory symptoms - always ask.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Consolidated Guidelines on Tuberculosis.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Global Initiative for Asthma (GINA) - Global Strategy for Asthma Management and Prevention.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Global Initiative for Chronic Obstructive Lung Disease (GOLD) - Global Strategy for COPD.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Integrated Management of Childhood Illness (IMCI) Guidelines.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>
 

</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-vomiting',
    title: 'Vomiting',
    category: 'Symptom Clerking',
    subCategory: 'Gastrointestinal',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Headache</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Vomiting</h1>
    <p class="text-sm text-indigo-200">Vomiting is common and often self-limiting, but it is also the presenting feature of surgical emergencies, diabetic ketoacidosis, raised intracranial pressure, and severe dehydrating illness that remains a major cause of childhood mortality locally. This guide focuses on the history and examination that separate benign vomiting from the causes that need urgent action, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Vomiting Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and how many episodes has the patient had?</li>
      <li>What does the vomitus look like - undigested food, bile-stained (green/yellow), blood-stained or coffee-ground (hematemesis), or foul-smelling/feculent?</li>
      <li>Is it projectile? (Suggests pyloric stenosis in infants, or raised intracranial pressure at any age.)</li>
      <li>Is there any relationship to meals - immediately after eating, or delayed by hours?</li>
      <li>Has the patient been able to keep any fluids down at all?</li>
      <li>Has anything been tried already, and did it help?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General/infective:</span> fever, chills, night sweats.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal:</span> pain (and its location - epigastric, right upper quadrant, right lower quadrant, or diffuse), distension, diarrhoea or constipation, last bowel motion and whether flatus is still passing.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological:</span> headache, visual disturbance, neck stiffness, confusion, or seizures - any of these alongside vomiting raises a central cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> last menstrual period and possibility of pregnancy in any woman of reproductive age; urinary frequency, dysuria, or loin pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Metabolic:</span> excessive thirst, polyuria, or rapid/laboured breathing (raises diabetic ketoacidosis).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac:</span> chest pain or breathlessness - vomiting can be an atypical presentation of myocardial infarction, particularly worth considering in an older or diabetic patient.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">In children specifically:</span> ability to breastfeed/drink, urine output (number of wet nappies), activity level, and whether they appear unusually sleepy or irritable.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Exposure/Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria:</span> Recent fever, chills, or confirmed malaria exposure? Vomiting with fever should always prompt malaria testing.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Food/water source:</span> Recent street food, untreated water, or similar illness in others who ate the same food? (Raises infective gastroenteritis, and in outbreak settings, cholera.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy:</span> Is the patient pregnant, and if so, how many weeks? Severe, persistent vomiting in early pregnancy raises hyperemesis gravidarum.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes:</span> Known diabetic? Any missed insulin doses or recent illness? (Vomiting can be the presenting feature of diabetic ketoacidosis.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> Known genotype? Vomiting can accompany a vaso-occlusive crisis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Previous abdominal surgery:</span> Any prior operations? (Raises adhesions as a cause of bowel obstruction.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> NSAIDs, alcohol use, chemotherapy, or other new medications that could cause gastritis or drug-induced vomiting.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Head injury:</span> Any recent trauma, however minor it seemed at the time?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal history:</span> Known kidney disease? (Raises uraemia as a cause.)</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression, Vital Signs, and Hydration Status</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, lethargic, or acutely unwell? In a child, lethargy or unusual sleepiness is a significant finding.</li>
      <li>Heart rate and blood pressure, including a check for a postural drop - both point towards volume depletion.</li>
      <li>Respiratory rate and pattern - deep, sighing (Kussmaul) breathing suggests a metabolic acidosis such as DKA.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Assess hydration status carefully</span> - skin turgor, sunken eyes, dryness of mucous membranes, capillary refill time, and in infants, the fontanelle. This is one of the most important parts of the examination and directly informs the urgency of rehydration.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Inspection:</span> distension, visible peristalsis, or surgical scars.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Palpation:</span> tenderness (and its location), guarding, rigidity, or a palpable mass.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Auscultation:</span> bowel sounds - absent in ileus or peritonitis, high-pitched/tinkling in bowel obstruction.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Signs of peritonism</span> - rebound tenderness or rigidity - is a surgical emergency until proven otherwise.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Findings</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Jaundice or hepatomegaly</span> - raises a hepatobiliary cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological examination and fundoscopy</span> - where a central cause (raised intracranial pressure, meningitis) is suspected.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Level of consciousness</span> - any drowsiness or confusion changes the urgency of the case considerably and may reflect DKA, uraemia, or a CNS cause.</li>
      <li>In a pregnant patient - blood pressure, oedema, and epigastric tenderness (pre-eclampsia can co-exist with severe vomiting).</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Bilious or feculent vomiting</span> - suggests bowel obstruction; a surgical emergency requiring urgent referral.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Haematemesis</span> - blood or coffee-ground vomitus indicates an upper GI bleed and needs urgent assessment and resuscitation.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of peritonism</span> - rigidity, guarding, rebound tenderness - a surgical abdomen until proven otherwise.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe or shock-level dehydration</span> - marked tachycardia, hypotension, prolonged capillary refill, or reduced consciousness; in children, WHO danger signs include lethargy/unconsciousness, inability to drink or breastfeed, and very slow skin pinch.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Kussmaul breathing, altered consciousness, or a known diabetic with vomiting</span> - check blood glucose and urine/blood ketones to exclude diabetic ketoacidosis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Vomiting with severe headache, neck stiffness, or a focal neurological deficit</span> - raises a central cause such as raised intracranial pressure or meningitis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe vomiting in pregnancy with ketosis or weight loss</span> - hyperemesis gravidarum needing IV fluids and admission.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - where fever accompanies vomiting, before any antimalarial is started.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Random blood glucose and urine/blood ketones</span> - in every patient with unexplained or significant vomiting, particularly if diabetic or unwell-looking, to exclude DKA.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Electrolytes (U&E)</span> - vomiting commonly causes hypokalaemia and a metabolic alkalosis; essential before and during rehydration.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urine pregnancy test</span> - in any woman of reproductive age presenting with vomiting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - looking for leukocytosis (infective/surgical cause) or anaemia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Erect chest/abdominal radiograph</span> - where bowel obstruction or perforation is suspected (looking for air-fluid levels or free air under the diaphragm).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal ultrasound</span> - for suspected gallstones, appendicitis, or to confirm/date a pregnancy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Amylase/lipase</span> - where pancreatitis is suspected (typically epigastric pain radiating to the back).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stool microscopy/culture</span> - where diarrhoea accompanies the vomiting and an infective cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs</span> - where jaundice or a hepatobiliary cause is suspected.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastroenteritis</span> - the commonest cause, particularly in children; often with diarrhoea and a dietary/water source clue.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria/typhoid fever</span> - vomiting with fever and other systemic features.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peptic ulcer disease/gastritis</span> - epigastric pain related to meals, NSAID/alcohol use.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Appendicitis</span> - periumbilical pain migrating to the right iliac fossa, with anorexia and low-grade fever.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bowel obstruction</span> - bilious/feculent vomiting, distension, absolute constipation, previous abdominal surgery.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetic ketoacidosis</span> - vomiting, polyuria, polydipsia, Kussmaul breathing, altered mentation in a diabetic patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperemesis gravidarum/pregnancy</span> - persistent vomiting in early pregnancy, sometimes with ketosis and weight loss.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Raised intracranial pressure/migraine</span> - vomiting with headache, worse in the morning or with straining, or classic migrainous features.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal colic/pyelonephritis</span> - loin pain radiating to the groin, dysuria, or fever with flank tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cholecystitis/biliary colic</span> - right upper quadrant pain, often after fatty meals.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell vaso-occlusive crisis</span> - vomiting alongside severe bone/joint pain in a known sickle cell patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - NSAIDs, chemotherapy, or other new drugs.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Uraemia</span> - in a patient with known or undiagnosed chronic kidney disease.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief of Vomiting Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral rehydration salts (ORS)</span> - the cornerstone of managing vomiting with associated fluid loss, particularly in children; started as soon as the patient can tolerate small, frequent sips.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">IV fluids</span> - where the patient cannot tolerate oral intake, or is significantly dehydrated; correct electrolyte derangements (particularly potassium) alongside rehydration.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Antiemetics</span> (e.g. metoclopramide, ondansetron) - useful for symptomatic relief, but use metoclopramide cautiously in children (extrapyramidal side effects) and check safety profiles in pregnancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Zinc supplementation</span> - recommended alongside ORS in children with vomiting/diarrhoea, per WHO/UNICEF guidance, to reduce duration and severity.</li>
      <li>Do not give antiemetics that mask a surgical abdomen without first assessing for peritonism, obstruction, or other danger signs.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastroenteritis</span> - ORS and zinc as above; antibiotics reserved for confirmed or strongly suspected bacterial dysentery, not routine viral gastroenteritis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria/typhoid</span> - as per the fever guide: ACT/IV artesunate for malaria, appropriate antibiotics for typhoid.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peptic ulcer disease/gastritis</span> - proton pump inhibitor, H. pylori eradication if confirmed, and avoidance of NSAIDs/alcohol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Appendicitis/bowel obstruction</span> - surgical referral; nil by mouth, IV fluids, and nasogastric decompression where obstruction is present, pending definitive surgical management.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetic ketoacidosis</span> - IV fluid resuscitation, insulin infusion, potassium replacement guided by levels, and treatment of the precipitating cause.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperemesis gravidarum</span> - IV fluids, pregnancy-safe antiemetics, and thiamine supplementation if vomiting has been prolonged.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal colic</span> - analgesia, IV fluids, and urology referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell crisis</span> - analgesia, hydration, and haematology input as per local sickle cell protocol.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Vomiting, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, content/character of vomitus, frequency, associated symptoms, directed risk history, treatment already received, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Diabetes, sickle cell disease, previous abdominal surgery, renal disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">NSAIDs, insulin/oral hypoglycaemics, other recent medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Food/water source, similar illness in contacts, alcohol use.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, hydration status explicitly, abdominal findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Giving antiemetics without first assessing for a surgical abdomen or other danger signs.</li>
    <li>Underestimating the severity of dehydration in a vomiting child.</li>
    <li>Not checking blood glucose and ketones in unexplained vomiting, missing diabetic ketoacidosis.</li>
    <li>Not performing a pregnancy test in a woman of reproductive age with vomiting.</li>
    <li>Failing to correct electrolyte disturbances, particularly hypokalaemia, during rehydration.</li>
    <li>Reassuring oneself in a case of bowel obstruction because the patient "looks well" early on.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Assess hydration status carefully in every vomiting patient, especially children - this directly drives management urgency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check a pregnancy test in a woman of reproductive age presenting with vomiting.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Bilious or feculent vomiting is a surgical emergency until proven otherwise.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check blood glucose and ketones in any unexplained vomiting to rule out diabetic ketoacidosis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>ORS plus zinc supplementation is central to managing vomiting/diarrhoea in children, per WHO/UNICEF guidance.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization/UNICEF - Joint Statement on Clinical Management of Acute Diarrhoea (ORS and zinc).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Integrated Management of Childhood Illness (IMCI) Guidelines.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>International Society for Pediatric and Adolescent Diabetes (ISPAD) - Clinical Practice Consensus Guidelines on DKA.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health, National Malaria Elimination Programme - National Guidelines for Diagnosis and Treatment of Malaria in Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Green-top Guideline on Nausea and Vomiting in Pregnancy and Hyperemesis Gravidarum.</li>
    </ul>
  </div>
</details>

</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-abdominal-pain',
    title: 'Abdominal Pain',
    category: 'Symptom Clerking',
    subCategory: 'Gastrointestinal',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Headache</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Abdominal Pain</h1>
    <p class="text-sm text-indigo-200">Abdominal pain covers an enormous range, from simple gastritis to surgical emergencies that can kill within hours - ruptured ectopic pregnancy, typhoid ileal perforation, and strangulated bowel among them. Typhoid perforation in particular remains one of the most important causes of the acute surgical abdomen seen locally. This guide focuses on the history and examination that separate benign pain from a surgical emergency, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and was the onset sudden or gradual?</li>
      <li>Where is it located, and has it moved or spread since it started? (Periumbilical pain migrating to the right iliac fossa is classic for appendicitis.)</li>
      <li>What is the character - colicky (comes in waves), constant/sharp, or a dull ache?</li>
      <li>How severe is it, on a scale of 1 to 10?</li>
      <li>What makes it better or worse - movement, eating, lying still, or pressing on the abdomen?</li>
      <li>Has the patient had similar pain before, and if so, was a cause ever found?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General/infective:</span> fever, chills, night sweats, weight loss.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> nausea/vomiting, change in bowel habit, blood or mucus in stool, abdominal distension, last flatus/bowel motion.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> dysuria, frequency, loin pain, or blood in urine.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gynaecological (in women):</span> last menstrual period, any missed period, abnormal vaginal bleeding or discharge, or shoulder-tip pain (can accompany intra-abdominal bleeding).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatobiliary:</span> jaundice, pale stool, dark urine, pain related to fatty meals.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genital (in men):</span> testicular pain or swelling - sudden, severe scrotal pain accompanying lower abdominal pain raises testicular torsion.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Exposure/Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid/recent febrile illness:</span> Any preceding fever, poor sanitation exposure, or partially treated typhoid? (Ileal perforation from typhoid remains a major cause of the acute surgical abdomen locally, typically in the second to third week of untreated illness.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy/ectopic risk:</span> Sexually active? Last menstrual period? Any previous ectopic pregnancy, pelvic infection, tubal surgery, or intrauterine device in place? (Any woman of reproductive age with abdominal pain needs pregnancy excluded, and ectopic pregnancy actively considered.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> Known genotype? Previous vaso-occlusive crises? (Abdominal pain can be a sickle cell crisis, but new/different pain should not be assumed to be "just a crisis" without excluding other causes.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Previous surgery/hernia:</span> Any prior abdominal operations (adhesions) or known hernia (risk of strangulation)?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sexual history (PID):</span> Multiple partners, discharge, or previous sexually transmitted infection?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol/medication use:</span> Alcohol intake (pancreatitis), NSAID or steroid use (peptic ulcer/perforation risk).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatitis risk factors:</span> Blood transfusion history, unsafe injections, or known hepatitis B/C status.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB contact:</span> Chronic abdominal pain with distension and weight loss raises tuberculous peritonitis, particularly with a TB contact history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Trauma:</span> Any recent injury to the abdomen?</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or in obvious distress, lying still (peritonism) or writhing (colic)?</li>
      <li>Heart rate and blood pressure, including a check for a postural drop - tachycardia and hypotension raise concern for intra-abdominal bleeding, perforation, or severe sepsis.</li>
      <li>Temperature - fever alongside abdominal pain should always prompt a search for an infective or perforative cause.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Inspection:</span> distension, visible peristalsis, surgical scars, or hernial swellings.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Palpation:</span> tenderness by quadrant, guarding, rigidity, or a palpable mass. Specifically elicit rebound tenderness where peritonism is suspected.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Specific signs:</span> Murphy's sign (cholecystitis), McBurney's point tenderness and Rovsing's sign (appendicitis), and a succussion splash (gastric outlet obstruction).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Auscultation:</span> bowel sounds - absent in peritonitis/ileus, high-pitched/tinkling in obstruction.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hernial orifices</span> - always examine, particularly if obstruction is suspected; an irreducible or tender hernia is a surgical emergency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rigid, board-like abdomen with generalized guarding</span> - suggests perforation with peritonitis and needs urgent surgical assessment.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Jaundice</span> - check sclerae; raises a hepatobiliary cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pallor</span> - relevant to sickle cell disease, and to significant intra-abdominal bleeding.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic/vaginal examination</span> - where a gynaecological cause is suspected, ideally with a chaperone and appropriate consent.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular examination</span> - in any male with lower abdominal or groin pain, to exclude torsion.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Digital rectal examination</span> - where indicated by the clinical picture (e.g. suspected appendicitis, GI bleeding, or bowel obstruction).</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Peritonism</span> - rigidity, guarding, rebound tenderness, or a silent abdomen - a surgical emergency until proven otherwise.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected ectopic pregnancy</span> - abdominal pain with a missed period, positive pregnancy test, vaginal bleeding, or syncope; needs urgent gynaecological assessment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected typhoid ileal perforation</span> - fever, abdominal pain and distension in a patient with a preceding febrile illness, particularly in week 2-3 of illness.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of shock</span> - hypotension, tachycardia, or a prolonged capillary refill time - raises intra-abdominal bleeding, perforation, or severe sepsis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Irreducible or tender hernia</span> - suggests strangulation and needs urgent surgical referral.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden, severe testicular pain</span> - testicular torsion is a time-critical surgical emergency (viability falls sharply after 6 hours).</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Absolute constipation with distension and vomiting</span> - raises complete bowel obstruction.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urine or serum pregnancy test</span> - essential in every woman of reproductive age with abdominal pain, regardless of how unlikely pregnancy seems.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - leukocytosis supports an infective/inflammatory cause; also assess for anaemia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - where fever accompanies the pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood culture</span> - before antibiotics, where typhoid or another bacterial cause is suspected; a single Widal test should never confirm typhoid alone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinalysis</span> - for UTI, or blood suggesting renal colic.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Erect chest radiograph and abdominal X-ray</span> - looking for free air under the diaphragm (perforation) or air-fluid levels (obstruction).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal/pelvic ultrasound</span> - for gallstones, appendicitis, free fluid, or to confirm and locate a pregnancy (essential if ectopic is suspected).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Amylase/lipase</span> - where pancreatitis is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs</span> - where a hepatobiliary cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Group and crossmatch</span> - where surgery or significant bleeding is anticipated.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Appendicitis</span> - periumbilical pain migrating to the right iliac fossa, anorexia, low-grade fever.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid ileal perforation</span> - preceding febrile illness with subsequent peritonitis, typically in the second to third week.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ectopic pregnancy</span> - missed period, positive pregnancy test, unilateral pain, vaginal bleeding, possible syncope.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - lower abdominal pain, discharge, cervical motion tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peptic ulcer disease/perforation</span> - epigastric pain related to meals; sudden severe pain with a rigid abdomen if perforated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cholecystitis/biliary colic</span> - right upper quadrant pain, often after fatty meals, positive Murphy's sign.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bowel obstruction (adhesions, hernia, volvulus)</span> - colicky pain, distension, absolute constipation, vomiting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal colic/pyelonephritis</span> - loin-to-groin pain, dysuria, haematuria, or fever with flank tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell vaso-occlusive crisis</span> - in a known sickle cell patient, though new or atypical pain still needs other causes excluded.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute pancreatitis</span> - epigastric pain radiating to the back, often with a history of alcohol use or gallstones.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculous peritonitis</span> - chronic pain, distension (ascites), weight loss, and a TB contact history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastroenteritis</span> - diffuse crampy pain with diarrhoea and vomiting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular torsion</span> - sudden severe scrotal pain with associated lower abdominal pain in a male patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Viral hepatitis</span> - right upper quadrant discomfort with jaundice, dark urine, pale stool.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief of Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Analgesia</span> - give in a stepwise fashion (paracetamol, then stronger agents as needed); adequate analgesia does not mask a surgical abdomen and should not be withheld while a diagnosis is being reached, though findings should still be documented before and after.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Antispasmodics</span> (e.g. hyoscine) - can help with colicky pain once a serious cause has been reasonably excluded.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">IV fluids</span> - where the patient is vomiting, septic, or unable to tolerate oral intake.</li>
      <li>Keep the patient nil by mouth if a surgical cause is suspected or being actively worked up.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Appendicitis</span> - surgical referral for appendicectomy; antibiotics as an adjunct or, in select uncomplicated cases, as sole treatment per current surgical protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid perforation</span> - urgent surgical repair alongside IV antibiotics covering typhoid.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ectopic pregnancy</span> - urgent gynaecological/surgical management; may be medical (methotrexate) in carefully selected, haemodynamically stable cases, or surgical where ruptured or unstable.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - antibiotic combination per local/WHO STI treatment guidelines, covering gonococcal and chlamydial infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peptic ulcer disease</span> - proton pump inhibitor, H. pylori eradication if confirmed; perforation requires urgent surgical repair.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cholecystitis</span> - IV antibiotics, analgesia, and surgical referral for cholecystectomy (timing per local protocol).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bowel obstruction</span> - nil by mouth, nasogastric decompression, IV fluids, and surgical referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal colic</span> - analgesia, IV fluids, and urology referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell crisis</span> - analgesia, hydration, and haematology input as per local sickle cell protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute pancreatitis</span> - supportive care: IV fluids, analgesia, initial nil by mouth, and monitoring for complications.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular torsion</span> - immediate surgical exploration and detorsion; this is not managed with medication.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Abdominal pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, site, migration, character, severity, aggravating/relieving factors, associated symptoms, directed risk history, treatment already received, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Sickle cell disease, previous abdominal surgery, known hernia, previous ectopic pregnancy.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">NSAID use, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Alcohol use, sexual history where relevant, TB contact.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, abdominal findings by quadrant, specific signs elicited, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not performing a pregnancy test in a woman of reproductive age with abdominal pain.</li>
    <li>Withholding analgesia unnecessarily while awaiting a surgical opinion.</li>
    <li>Attributing all pain in a known sickle cell patient to a crisis without excluding other causes.</li>
    <li>Missing typhoid perforation in a patient with a preceding febrile illness who develops new abdominal signs.</li>
    <li>Delaying surgical referral for a rigid, peritonitic abdomen while pursuing further investigations.</li>
    <li>Forgetting to examine hernial orifices and the testes where relevant.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check a pregnancy test in a woman of reproductive age with abdominal pain, and actively consider ectopic pregnancy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A rigid, peritonitic abdomen is a surgical emergency until proven otherwise.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider typhoid perforation in anyone with a preceding febrile illness who develops new abdominal signs - it remains a leading local cause of the surgical abdomen.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Adequate analgesia does not mask a surgical abdomen - do not withhold it while working towards a diagnosis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>New or different pain in a sickle cell patient still needs other causes actively excluded, not just attributed to a crisis.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Green-top Guideline on Ectopic Pregnancy and Miscarriage.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Management of Sexually Transmitted Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health, National Malaria Elimination Programme - National Guidelines for Diagnosis and Treatment of Malaria in Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines on the Management of Acute Abdomen and Surgical Emergencies in Low-Resource Settings.</li>
    </ul>
  </div>
</details>

 

</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-lower-back-pain',
    title: 'Lower Back Pain',
    category: 'Symptom Clerking',
    subCategory: 'Pain',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Headache</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Lower Back Pain</h1>
    <p class="text-sm text-indigo-200">Most lower back pain is mechanical and self-limiting, but the differential also includes causes that change management entirely - spinal tuberculosis (Pott's disease), cauda equina syndrome, vertebral metastasis, and sickle cell-related bone disease. Pott's disease in particular remains an important cause of chronic back pain locally and is easy to miss if red flags aren't actively screened for. This guide focuses on the history and examination that separate simple mechanical pain from the causes that need urgent action, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and was there a specific triggering event - lifting, bending, a fall, or an injury?</li>
      <li>How long has it lasted? (Acute is generally under 6 weeks; chronic back pain beyond this, or pain that is worse at night or unremitting, needs a wider differential than simple strain.)</li>
      <li>Where exactly is the pain, and does it radiate - down one leg (sciatica), or is it central/diffuse?</li>
      <li>What is the character - a dull ache, sharp, or shooting?</li>
      <li>What makes it better or worse - movement, rest, a particular position, or coughing/straining?</li>
      <li>Is it worse at night, or does it wake the patient from sleep? Is there significant morning stiffness that improves with movement? (Night pain and morning stiffness are both important flags, pointing towards infective/malignant or inflammatory causes respectively.)</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, night sweats, weight loss - all raise infective or malignant causes and should be asked about directly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological (ask explicitly, do not wait for volunteering):</span> leg weakness or numbness, difficulty walking, numbness around the perianal area or inner thighs ("saddle" distribution), and any new bladder or bowel difficulty (incontinence, retention, or loss of sensation when passing urine/stool).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> dysuria, frequency, loin pain, or blood in urine; in men, urinary hesitancy, poor stream, or nocturia (prostatic symptoms).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gynaecological (in women):</span> abnormal vaginal discharge or bleeding, last menstrual period, and possibility of pregnancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal:</span> joint pain elsewhere, or morning stiffness lasting more than 30 minutes (raises an inflammatory cause such as ankylosing spondylitis).</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB/HIV status:</span> Known TB contact, HIV status, or constitutional symptoms alongside chronic back pain? (Spinal TB/Pott's disease is an important local cause of chronic back pain and progressive deformity, and is frequently diagnosed late.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> Known genotype? Back pain can reflect a vaso-occlusive crisis or avascular necrosis of the vertebrae.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy:</span> Any personal history of breast, prostate, or other cancer? (Raises vertebral metastasis in new, unremitting back pain, particularly in an older patient.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational/mechanical:</span> Manual labour, heavy lifting, or prolonged sitting/driving?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Steroid use/osteoporosis risk:</span> Long-term steroid use, early menopause, or known osteoporosis? (Raises vertebral compression fracture, especially with minimal or no trauma.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Trauma:</span> Any fall or injury, however minor it seemed at the time?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sexual history (in women):</span> Risk factors for pelvic inflammatory disease where lower back pain accompanies pelvic symptoms.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history:</span> Inflammatory arthritis or ankylosing spondylitis in the family?</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Inspection and Spine Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or unwell/wasted? Note their gait and how they move on and off the examination couch.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Spinal deformity</span> - a localized angular kyphosis ("gibbus") is a classic sign of spinal TB and should specifically be looked for, particularly with a compatible history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Palpation</span> - point tenderness over a vertebral level, and paraspinal muscle spasm.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Range of motion</span> - flexion, extension, and lateral movement; note pain-limited versus stiffness-limited movement.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Straight leg raise test</span> - reproduction of radiating leg pain supports nerve root irritation (sciatica).</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Neurological Examination (Mandatory in Every Back Pain Assessment)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lower limb power, sensation, and reflexes</span> - document explicitly, even when the history seems purely mechanical.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Perianal sensation and anal tone</span> - essential wherever cauda equina syndrome is being considered; this is frequently omitted but is critical.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gait</span> - any evidence of foot drop or an unsteady gait.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal examination</span> - renal angle tenderness (pyelonephritis/renal colic), or a palpable mass.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic examination (women)</span> - where a gynaecological cause is suspected, with appropriate consent and chaperone.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Digital rectal examination (men)</span> - to assess the prostate where prostatic disease is suspected.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphadenopathy</span> - relevant where TB or malignancy is suspected.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Cauda equina syndrome</span> - saddle anaesthesia, bilateral leg weakness, and new bladder or bowel dysfunction; a surgical emergency requiring immediate neurosurgical/orthopaedic referral.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Progressive neurological deficit or a sensory level</span> - raises spinal cord compression, which may be due to TB, malignancy, or abscess.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected spinal TB (Pott's disease)</span> - chronic back pain with fever, weight loss, night sweats, or a visible gibbus deformity; needs early diagnosis, since delay increases the risk of permanent neurological damage.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected malignancy</span> - new, unremitting back pain (particularly worse at night) in a patient over 50, with unexplained weight loss, or a known history of cancer.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected fracture</span> - significant trauma, or minimal/no trauma in a patient with osteoporosis risk factors.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Fever with severe, localized spinal tenderness</span> - raises a spinal/epidural abscess, a surgical and medical emergency.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Simple mechanical back pain without red flags</span> - generally does not need imaging initially; manage symptomatically and reassess if it fails to improve.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC and ESR/CRP</span> - raised inflammatory markers support an infective, inflammatory, or malignant cause and should prompt further workup.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Spine radiograph</span> - a reasonable first step where a red flag is present, though it may miss early spinal TB or cord compression.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">MRI spine</span> - the investigation of choice where cauda equina, cord compression, spinal TB, or malignancy is suspected, and should not be delayed where available and affordable.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB/GeneXpert and chest radiograph</span> - where spinal TB is suspected, to look for concurrent pulmonary disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - given how significantly it changes the differential and urgency of infective causes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinalysis</span> - where a renal cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">PSA</span> - in an older man with suspected prostatic disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood culture</span> - where a spinal infection/abscess is suspected, before antibiotics.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Mechanical/musculoskeletal back pain</span> - the commonest cause, related to lifting, posture, or exertion, without red flags.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sciatica/disc prolapse</span> - pain radiating down one leg, positive straight leg raise.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Spinal tuberculosis (Pott's disease)</span> - chronic pain, constitutional symptoms, and a gibbus deformity in advanced cases.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pyelonephritis/renal colic</span> - loin pain, fever, dysuria, or haematuria.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - lower back/pelvic pain with discharge in a sexually active woman.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Prostatic disease</span> - urinary symptoms in an older man; consider prostatitis, benign hyperplasia, or malignancy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vertebral compression fracture</span> - sudden pain with minimal trauma in an osteoporosis-risk patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell-related bone disease</span> - vaso-occlusive crisis or avascular necrosis in a known sickle cell patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vertebral metastasis</span> - new, unremitting pain, particularly with a known primary malignancy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ankylosing spondylitis/inflammatory back pain</span> - younger patient, morning stiffness lasting over 30 minutes, improving with movement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cauda equina syndrome</span> - a surgical emergency, not a differential to sit alongside the others once suspected.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief of Back Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Paracetamol and/or NSAIDs</span> - first-line analgesia for simple mechanical back pain, once red flags have been reasonably excluded.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Encourage early mobilization</span> - prolonged bed rest is not recommended for simple mechanical back pain and can worsen outcomes; encourage the patient to stay as active as pain allows.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Muscle relaxants</span> - can be considered short-term for significant muscle spasm.</li>
      <li>Symptomatic relief should never substitute for red flag screening, especially given how commonly serious causes are initially mistaken for simple strain.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Mechanical back pain</span> - analgesia, early mobilization, and physiotherapy where available.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Spinal tuberculosis</span> - standard anti-TB therapy, typically for an extended duration compared to pulmonary TB, with bracing and surgical decompression where there is neurological compromise or significant instability.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sciatica/disc prolapse</span> - analgesia and physiotherapy initially; surgical referral where there is a progressive neurological deficit or the pain fails to settle.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pyelonephritis</span> - antibiotics as per the fever/UTI guide.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - antibiotic combination per local/WHO STI treatment guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Prostatic disease</span> - alpha-blockers for benign hyperplasia, antibiotics for bacterial prostatitis, and urology referral where malignancy is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vertebral compression fracture</span> - analgesia, bracing, orthopaedic referral, and osteoporosis workup/treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell-related bone disease</span> - analgesia and hydration for a vaso-occlusive crisis; orthopaedic referral for confirmed avascular necrosis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Vertebral metastasis</span> - oncology and orthopaedic/spinal input for pain control, radiotherapy, and stabilization as indicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cauda equina syndrome</span> - immediate neurosurgical/orthopaedic referral for urgent decompression; this is not managed with medication alone.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Lower back pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, site, radiation, character, aggravating/relieving factors, night pain/morning stiffness, associated symptoms (neurological, urinary, constitutional), directed risk history, treatment already received, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">TB, HIV status, sickle cell disease, known malignancy, osteoporosis.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Long-term steroid use, current analgesics, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Occupation/manual labour, family history of inflammatory arthritis.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Spine inspection/palpation, range of motion, full lower limb neurological exam including perianal sensation where relevant, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not examining perianal sensation and anal tone when cauda equina syndrome is a possibility.</li>
    <li>Attributing chronic back pain to mechanical strain without screening for constitutional symptoms or a gibbus deformity that would suggest spinal TB.</li>
    <li>Skipping the neurological examination because the history "sounds mechanical."</li>
    <li>Missing malignancy in an older patient with new, unremitting back pain, particularly worse at night.</li>
    <li>Not considering renal, gynaecological, or prostatic causes when the pain has a non-mechanical quality.</li>
    <li>Prescribing prolonged bed rest for simple mechanical back pain instead of encouraging early mobilization.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Any saddle anaesthesia or new bladder/bowel dysfunction with back pain is a surgical emergency (cauda equina) until proven otherwise.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider spinal TB in chronic back pain with constitutional symptoms or a gibbus deformity - it is an important and often late-diagnosed cause locally.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Perform a focused neurological exam, including perianal sensation where relevant, in every back pain assessment - not only when it "seems needed."</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Red flags - age, night pain, weight loss, trauma, fever - should always change the pace and depth of the workup.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Most back pain is mechanical and self-limiting - reserve imaging and extensive workup for red flags rather than every presentation.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Diagnosis and Management of Musculoskeletal (Spinal) Tuberculosis.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Low Back Pain and Sciatica in Over 16s: Assessment and Management.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Management of Sexually Transmitted Infections.</li>
    </ul>
  </div>
</details>

</body>
</html>
    `
  },


  {
    id: 'symptom-clerking-insomnia',
    title: 'Insomnia',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Insomnia</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Insomnia</h1>
    <p class="text-sm text-indigo-200">Insomnia is rarely just about sleep - it is often the surface presentation of depression, anxiety, an underlying medical condition, substance use, or simply an environment that makes rest difficult (heat, mosquitoes, noise, overcrowding). Mental health stigma locally means mood and safety may not be volunteered unless asked directly and sensitively. This guide focuses on the history and examination that uncover the real driver behind poor sleep, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Insomnia Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Is the difficulty falling asleep, staying asleep (frequent waking), or waking too early and being unable to get back to sleep? (Early morning waking is a particularly important pattern to note - it is classically associated with depression.)</li>
      <li>How long has this been going on - is it a recent change (under 3 months) or a longstanding pattern?</li>
      <li>How many nights a week is sleep affected, and roughly how many hours of sleep is the patient actually getting?</li>
      <li>How is this affecting daytime functioning - fatigue, poor concentration, irritability, or reduced work performance? (This matters particularly for anyone whose work requires sustained alertness, such as commercial drivers.)</li>
      <li>What does the pre-sleep routine and sleeping environment look like - screen use before bed, room temperature, noise, and who else is in the sleeping space?</li>
      <li>Has anything been tried already (over-the-counter remedies, herbal preparations, or specific routines), and did it help?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Mood/mental health (ask directly and without judgement - this is often not volunteered):</span> persistent low mood, loss of interest or pleasure in things usually enjoyed, feelings of hopelessness, excessive worry or racing thoughts, or - where mood symptoms are present - whether the patient has ever had thoughts of harming themselves or not wanting to be alive. This is a standard, necessary safety question whenever depression is suspected, not an accusatory one.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Elevated mood/mania screen:</span> any periods of needing very little sleep while still feeling full of energy, unusually elevated mood, or racing thoughts - important not to miss, since treating this as simple insomnia can be harmful.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sleep-related breathing:</span> loud snoring, witnessed pauses in breathing, gasping/choking during sleep, or morning headaches - raises obstructive sleep apnoea.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological:</span> an uncomfortable urge to move the legs, particularly in the evening, relieved by movement - raises restless legs syndrome.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Endocrine:</span> heat intolerance, weight loss, palpitations, or tremor - raises hyperthyroidism.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinary:</span> frequent night-time urination disrupting sleep - relevant to diabetes, benign prostatic disease, or heart failure.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiorespiratory:</span> breathlessness on lying flat, or waking gasping for breath - raises heart failure or poorly controlled asthma.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pain:</span> any chronic pain condition that specifically disrupts sleep.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Lifestyle and Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Caffeine/stimulant intake:</span> tea, coffee, cola/energy drinks, or kola nut - how much, and how late in the day?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> alcohol can help someone fall asleep initially but fragments sleep later in the night.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Other substance use:</span> use of tramadol or other opioids outside of prescription, or other stimulants - misuse of these is a recognized local concern and can significantly disrupt sleep architecture.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> steroids, some antihypertensives, decongestants, or antidepressants that can affect sleep.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupation:</span> shift work, night security duty, or other work patterns that disrupt a regular sleep-wake schedule.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sleeping environment:</span> heat, mosquitoes, generator or traffic noise, overcrowded or shared sleeping spaces - these are common, fixable contributors that are easy to overlook.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Religious/night-time practices:</span> regular attendance at night vigils or similar activities that shift sleep timing - worth understanding as a lifestyle factor, without judgement, since it may simply need scheduling around rather than "treating."</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Psychosocial stressors:</span> financial pressure, relationship difficulties, bereavement, or exposure to insecurity/trauma - ask gently and let the patient lead on how much they want to share.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Reproductive/postpartum status:</span> pregnancy, recent delivery, or menopausal symptoms.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Comorbidities:</span> known hypertension, diabetes, asthma, heart failure, or chronic pain conditions.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family/personal psychiatric history:</span> previous depression, anxiety, or other mental health diagnoses.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>General appearance - visibly fatigued, psychomotor slowing (may suggest depression), or agitation.</li>
      <li>Weight/BMI and neck circumference - relevant to obstructive sleep apnoea risk.</li>
      <li>Blood pressure and heart rate - poorly controlled hypertension and tachycardia can both disrupt sleep and be worsened by it.</li>
      <li>Signs of hyperthyroidism - tremor, tachycardia, warm moist skin, or a goitre.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Basic Mental State Assessment</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Appearance and behaviour, mood and affect, and thought content - conducted sensitively and without making the patient feel judged or labelled.</li>
      <li>Where low mood or hopelessness has been disclosed, gently and directly ask about safety (thoughts of self-harm or suicide) - this is a necessary clinical step, not an intrusion.</li>
      <li>Cognitive screen where relevant, particularly in an older patient with new sleep disturbance.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Targeted Examination Where Indicated</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Cardiorespiratory examination - where heart failure or asthma is suspected as a cause of nocturnal symptoms.</li>
      <li>Basic neurological examination - where restless legs syndrome or another neurological cause is suspected.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Active suicidal ideation or a plan</span> - in a patient with depression-linked insomnia, this needs an immediate, direct safety assessment and urgent referral; do not let discomfort with the topic lead to avoiding the question.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Features suggesting mania/hypomania</span> - markedly decreased need for sleep without fatigue, elevated or irritable mood, and grandiosity; needs psychiatric assessment rather than being treated as simple insomnia.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Significant obstructive sleep apnoea features</span> - loud snoring, witnessed apnoeas, and marked daytime sleepiness, particularly alongside hypertension or obesity - carries real cardiovascular risk if untreated.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of substance withdrawal</span> (e.g. alcohol or opioid) - severe insomnia with autonomic instability (tremor, sweating, tachycardia) can indicate a withdrawal state needing urgent medical management.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">New severe insomnia in the postpartum period with confusion, agitation, or unusual thoughts</span> - raises postpartum psychosis, a psychiatric emergency.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid function tests</span> - to screen for hyperthyroidism where suggestive symptoms are present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC and ferritin</span> - iron deficiency is associated with restless legs syndrome, and anaemia can contribute to fatigue.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose</span> - where nocturia or other diabetes symptoms are present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">A standardized depression/anxiety screening tool</span> (e.g. PHQ-9, GAD-7) where available, to help quantify severity and guide referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Polysomnography (sleep study)</span> - the definitive test for suspected obstructive sleep apnoea, where access allows; where unavailable, clinical assessment and risk-factor modification still guide management.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal/cardiac assessment</span> - where nocturia or nocturnal breathlessness suggests an underlying renal or cardiac cause.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Primary/psychophysiological insomnia</span> - a learned pattern of poor sleep, often perpetuated by anxiety about sleep itself.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression-related insomnia</span> - classically early morning waking, alongside low mood and loss of interest.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety-related insomnia</span> - difficulty falling asleep with racing thoughts or worry.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bipolar disorder (manic/hypomanic episode)</span> - markedly reduced need for sleep without fatigue.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Obstructive sleep apnoea</span> - loud snoring, witnessed apnoeas, daytime sleepiness, often with obesity.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Restless legs syndrome</span> - an uncomfortable urge to move the legs, worse in the evening.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperthyroidism</span> - weight loss, heat intolerance, tremor, palpitations.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Substance-related</span> - caffeine/stimulant excess, alcohol use, or tramadol/opioid misuse.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - steroids, certain antihypertensives, decongestants.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Environmental</span> - heat, mosquitoes, noise, overcrowded sleeping space.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic pain-related insomnia</span> - pain that specifically disrupts sleep.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nocturia-related</span> - benign prostatic disease, diabetes, or heart failure causing frequent waking.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Menopause-related insomnia</span> - often with night sweats/hot flashes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Shift work sleep disorder</span> - misalignment between work schedule and the body's natural sleep-wake cycle.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Trauma-related insomnia</span> - including nightmares and hyperarousal following a significant traumatic experience.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic/Non-Pharmacological Measures</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sleep hygiene education</span> - a consistent sleep-wake schedule, reducing caffeine/cola nut particularly in the afternoon and evening, limiting screen use before bed, and avoiding excessive daytime napping.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Addressing the sleeping environment</span> - practical steps such as bednets and fans for heat/mosquitoes, and where possible, reducing noise exposure.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cognitive behavioural therapy for insomnia (CBT-I)</span> - the recommended first-line treatment for chronic insomnia where trained providers or structured programmes are available, and more effective long-term than medication alone.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Relaxation techniques</span> - can help reduce pre-sleep anxiety and physiological arousal.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression-related insomnia</span> - treat the underlying depression (psychotherapy and/or antidepressants as indicated), with safety planning where suicidal ideation is present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety-related insomnia</span> - CBT and/or anxiolytic treatment as clinically indicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bipolar disorder</span> - psychiatric referral for mood stabilization; this should not be managed with sedatives alone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Obstructive sleep apnoea</span> - weight loss where relevant, CPAP where available and tolerated, and ENT referral for anatomical contributors.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Restless legs syndrome</span> - iron supplementation if ferritin is low, with dopaminergic agents considered for persistent symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperthyroidism</span> - treatment of the underlying thyroid disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Substance-related</span> - counselling on reducing caffeine/alcohol; referral for a substance use disorder where tramadol or other misuse is identified, rather than simply prescribing a sedative on top.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Short-term pharmacological options</span> - short-course hypnotics can be considered for acute, severe insomnia, but should be used at the lowest effective dose for the shortest possible time given the risk of dependence; they are not a substitute for addressing the underlying cause.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Difficulty sleeping, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Pattern (initial/middle/late insomnia), duration, daytime impact, sleep environment/routine, associated mood/physical symptoms, directed lifestyle history, treatment already tried, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Psychiatric History</dt>
      <dd class="mt-0.5">Previous depression/anxiety, thyroid disease, comorbid medical conditions.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Substance History</dt>
      <dd class="mt-0.5">Caffeine/cola nut intake, alcohol use, tramadol/other substance use, current medications.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Occupation/shift pattern, sleeping environment, psychosocial stressors, family history of mental health conditions.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination/Mental State Findings</dt>
      <dd class="mt-0.5">General and relevant systemic findings, basic mental state assessment, explicitly documenting danger signs including safety screening where indicated.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment/referral given, and follow-up plan.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Prescribing a sleeping tablet without first asking about mood, safety, or substance use.</li>
    <li>Avoiding the question about suicidal thoughts out of discomfort, once low mood has been disclosed.</li>
    <li>Missing features of mania/hypomania and treating reduced sleep need as ordinary insomnia.</li>
    <li>Attributing insomnia purely to "stress" without screening for thyroid disease or sleep apnoea.</li>
    <li>Prescribing benzodiazepines or other hypnotics long-term without a plan to address the underlying cause.</li>
    <li>Overlooking simple, fixable environmental factors - heat, mosquitoes, noise - in favour of jumping straight to medication.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always screen mood and, where indicated, safety - insomnia is very often a symptom of depression or anxiety rather than an isolated sleep problem.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Early morning waking is a classic red flag for depression and should prompt a mood screen.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask specifically about caffeine/cola nut intake and tramadol or other substance use - both are common, under-reported contributors locally.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Simple environmental factors - heat, mosquitoes, noise - are often fixable and frequently overlooked in favour of medication.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Avoid long-term hypnotic prescribing without a clear plan to address the underlying cause.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Sleep Medicine - Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>International Classification of Sleep Disorders (ICSD-3).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - National Policy for Mental Health Services Delivery, Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Insomnia: Clinical Knowledge Summary.</li>
    </ul>
  </div>
</details>

</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-vaginal-discharge',
    title: 'Vaginal Discharge',
    category: 'Symptom Clerking',
    subCategory: 'Gynecological',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Vaginal Discharge</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Vaginal Discharge</h1>
    <p class="text-sm text-indigo-200">Vaginal discharge ranges from a normal physiological finding to the presenting feature of an infection, pelvic inflammatory disease, or occasionally malignancy. Getting the history right depends on taking a sensitive, non-judgemental sexual history - something that is easy to rush or avoid, but is essential for an accurate diagnosis and for treating partners where needed. This guide focuses on the history and examination that clarify the underlying cause, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Discharge Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and how long has it lasted?</li>
      <li>What colour is it - white, yellow, green, grey, or blood-stained?</li>
      <li>What is the consistency - thin and watery, thick and curdy ("cottage cheese"-like), or frothy?</li>
      <li>Is there any odour, and how would the patient describe it (e.g. fishy)?</li>
      <li>How much is there, and has the amount changed recently?</li>
      <li>Does it relate to the menstrual cycle, or to intercourse?</li>
      <li>Has anything been tried already (over-the-counter treatments, herbal preparations, or douching), and did it help?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Local:</span> itching, soreness, burning, or visible lesions/sores/warts.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinary:</span> dysuria or urinary frequency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic:</span> lower abdominal or pelvic pain, and pain during intercourse (dyspareunia).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Bleeding:</span> intermenstrual bleeding, bleeding after intercourse (postcoital bleeding), or, in an older patient, any bleeding after menopause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Systemic:</span> fever, chills, or general malaise - raises a more significant pelvic infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Menstrual/reproductive:</span> last menstrual period, regularity of cycles, and possibility of pregnancy.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sexual history:</span> ask privately, without a partner present, and without judgement - number of partners, any new partner recently, condom use, and whether a partner has any similar symptoms. This information is clinically necessary, not optional, and patients are more forthcoming when the questions are asked matter-of-factly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Previous STIs:</span> any prior sexually transmitted infection, and how it was treated.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Contraception:</span> current method, particularly an intrauterine device (raises the possibility of a foreign-body-related infection if inserted recently or if strings cannot be felt).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent antibiotic use:</span> a common precipitant of candidiasis by disrupting normal vaginal flora.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes:</span> known or undiagnosed diabetes increases susceptibility to recurrent candidiasis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status:</span> known status or risk factors, since immunosuppression predisposes to recurrent or atypical infections.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hygiene practices:</span> vaginal douching or use of scented soaps/products, both of which can disrupt normal flora and cause irritation.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Obstetric history:</span> recent delivery, miscarriage, or termination, which raises retained products of conception or postpartum/post-abortal infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Menopausal status:</span> postmenopausal discharge or bleeding needs malignancy actively excluded, not just treated as infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Safety:</span> where the history or presentation raises any concern, gently and privately ask about safety at home and in relationships - some patients disclose intimate partner or sexual violence only when given a private, unhurried opportunity to do so.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General and Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>General appearance and vital signs, particularly temperature - fever alongside discharge raises a more significant pelvic infection.</li>
      <li>Abdominal palpation for lower abdominal or suprapubic tenderness.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Genital and Pelvic Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Always explain the examination clearly, obtain consent, and ensure a chaperone is present.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">External inspection</span> - erythema, excoriation from scratching, ulcers or sores (herpes, syphilis), or warty lesions (HPV).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Speculum examination</span> - directly note the colour, consistency, and odour of the discharge, and inspect the cervix for inflammation (cervicitis), an irregular or friable lesion, or contact bleeding.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Bimanual examination</span> - cervical motion tenderness, uterine tenderness, or an adnexal mass/tenderness, all of which raise pelvic inflammatory disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Check for a retained foreign body</span> - a forgotten tampon or other object, particularly where the discharge is foul-smelling and disproportionate to other findings.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Fever with severe pelvic pain and cervical motion tenderness</span> - raises pelvic inflammatory disease or a tubo-ovarian abscess, needing prompt antibiotic treatment and close monitoring.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Positive pregnancy test with pain and discharge/bleeding</span> - ectopic pregnancy must be actively excluded before assuming an infective cause.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Fever, foul discharge, and uterine tenderness in a pregnant patient</span> - raises chorioamnionitis, an obstetric emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Postmenopausal bleeding or discharge, or an irregular/friable cervical lesion</span> - malignancy must be actively excluded, not assumed to be a simple infection.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Disclosure of sexual violence or intimate partner violence</span> - respond with a calm, supportive, and non-judgemental approach, and follow local safeguarding/referral pathways.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Heavy vaginal bleeding with haemodynamic instability</span> - needs urgent resuscitation and gynaecological assessment.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">High vaginal swab</span> - for microscopy and culture, including a wet mount and whiff test where available, to help distinguish candidiasis, bacterial vaginosis, and trichomoniasis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Endocervical swab</span> - for gonorrhoea and chlamydia testing (NAAT where available); where laboratory testing is not accessible, the WHO syndromic management approach guides empirical treatment based on the clinical picture.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urine or serum pregnancy test</span> - in any woman of reproductive age, before treatment is finalized.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV and syphilis screening</span> - as part of a comprehensive STI workup, with appropriate pre-test discussion and consent.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose</span> - where recurrent or difficult-to-treat candidiasis raises the possibility of underlying diabetes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic ultrasound</span> - where a tubo-ovarian abscess, retained products of conception, or another pelvic mass is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cervical screening (Pap smear/HPV testing)</span> - where an irregular cervical lesion is seen, or as part of routine screening where due.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Physiological discharge</span> - clear/white, odourless, varying with the menstrual cycle; a diagnosis of exclusion.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Candidiasis</span> - thick, white, curdy discharge with itching and soreness, often without odour.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacterial vaginosis</span> - thin, grey discharge with a fishy odour, often worse after intercourse.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Trichomoniasis</span> - frothy, yellow-green discharge, sometimes with itching and a "strawberry" cervix on examination.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gonococcal/chlamydial cervicitis</span> - mucopurulent discharge, may be asymptomatic, with cervical inflammation or contact bleeding.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - discharge with pelvic pain, fever, and cervical motion tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Atrophic vaginitis</span> - in a postmenopausal woman, with dryness, soreness, and sometimes light bleeding.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Retained foreign body</span> - foul-smelling discharge disproportionate to other findings, particularly in a child or following forgotten tampon use.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cervical ectropion</span> - a benign cause of mucoid discharge and occasional contact bleeding.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cervical or endometrial malignancy</span> - foul, blood-stained discharge, particularly with an irregular cervical lesion or postmenopausal bleeding.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Retained products of conception/postpartum infection</span> - foul discharge with fever following delivery, miscarriage, or termination.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Allergic/contact vaginitis</span> - related to soaps, douching products, or other irritants.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief and General Measures</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Advise against vaginal douching and scented products</span> - these disrupt normal vaginal flora and often worsen rather than improve symptoms.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Loose, breathable (cotton) underwear</span> - can help with comfort and reduce recurrence of candidiasis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Simple analgesia</span> - for any associated discomfort.</li>
      <li>Symptomatic measures should not delay swabs or treatment once a likely cause has been identified.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Candidiasis</span> - a topical or oral antifungal (e.g. clotrimazole pessary/cream, or oral fluconazole); recurrent cases warrant checking blood glucose.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacterial vaginosis</span> - oral or topical metronidazole; partner treatment is not routinely required.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Trichomoniasis</span> - oral metronidazole for the patient and their partner(s), since this is sexually transmitted and reinfection is otherwise likely.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gonococcal/chlamydial infection</span> - dual antibiotic therapy per WHO/local STI treatment guidelines, with partner notification and treatment essential to prevent reinfection and further transmission.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - a combination antibiotic regimen per WHO/local guidelines, covering gonococcal, chlamydial, and anaerobic organisms; admission and IV therapy where the patient is systemically unwell.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Atrophic vaginitis</span> - topical vaginal oestrogen where appropriate and not contraindicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Retained foreign body</span> - removal, with antibiotics if there is associated infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Suspected malignancy</span> - referral to gynaecology/gynae-oncology for biopsy and staging; this is not managed empirically with antibiotics or antifungals.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Retained products of conception/postpartum infection</span> - antibiotics and evacuation of retained products where indicated, per obstetric protocol.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Vaginal discharge, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, colour, consistency, odour, amount, relation to cycle/intercourse, associated symptoms, directed risk history, treatment already tried, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Gynaecological History</dt>
      <dd class="mt-0.5">Previous STIs, diabetes, HIV status, obstetric history.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Recent antibiotics, contraceptive method, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Sexual and Social History</dt>
      <dd class="mt-0.5">Taken privately and sensitively - partners, condom use, partner symptoms, hygiene practices, safety at home.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, abdominal findings, external/speculum/bimanual findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given (including partner treatment where relevant), and follow-up plan.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Skipping or rushing the sexual history out of discomfort, leading to a missed or incomplete diagnosis.</li>
    <li>Treating a patient for an STI without also addressing and treating their partner, leading to reinfection.</li>
    <li>Assuming foul discharge is always infective and missing an underlying malignancy.</li>
    <li>Not excluding pregnancy before finalizing treatment in a woman of reproductive age.</li>
    <li>Treating postmenopausal bleeding or discharge as routine infection without further gynaecological assessment.</li>
    <li>Missing an opportunity to ask about safety when the history or presentation raises any concern.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Take the sexual history privately, sensitively, and matter-of-factly - it is clinically necessary, not optional.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Partner treatment is essential for cure and to prevent reinfection wherever an STI is diagnosed.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Postmenopausal bleeding or discharge needs malignancy actively excluded, not just empirical treatment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Where lab testing isn't accessible, use WHO syndromic management to guide empirical STI treatment rather than withholding treatment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always create a private opportunity to ask about safety where the presentation or history raises any concern.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Management of Sexually Transmitted Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Syndromic Case Management of Sexually Transmitted Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Green-top Guideline on Pelvic Inflammatory Disease.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Responding to Intimate Partner Violence and Sexual Violence Against Women: Clinical and Policy Guidelines.</li>
    </ul>
  </div>
</details>

 

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-recurrent-fever',
    title: 'Recurrent Fever',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Reccurrent Fever</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Recurrent Fever</h1>
    <p class="text-sm text-indigo-200">Recurrent fever is different from a single febrile illness - it demands finding out why the fever keeps coming back rather than simply re-treating the same presumed cause each time. In a high-malaria-transmission setting it is tempting to label every episode as malaria, but repeated "malaria" that never quite resolves may be reinfection, resistant disease, or something else entirely - TB relapse, brucellosis, sickle cell-related infection, or an autoimmune or malignant process. This guide focuses on the history and examination that uncover the real pattern, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pattern Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>How many episodes has the patient had, and over what total period of time?</li>
      <li>Is there a regular interval between episodes, or is the pattern irregular?</li>
      <li>How long does each episode of fever typically last, and is the patient completely well between episodes, or is there ongoing low-grade illness?</li>
      <li>When was the very first episode, and has the pattern changed since then?</li>
      <li>What treatment was given for each previous episode, and was it completed as prescribed? Did the fever fully resolve each time, or only partially improve before returning?</li>
      <li>Was the diagnosis confirmed with a test each time (e.g. a positive malaria test), or was treatment given on clinical suspicion alone?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> weight loss, night sweats, and loss of appetite between or during episodes - raises TB, HIV, malignancy, or chronic infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal:</span> joint pains or swelling, bone pain, or a rash accompanying the fever - raises an autoimmune cause (e.g. adult-onset Still's disease, lupus) or osteomyelitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphatic:</span> noticeable lumps or swelling in the neck, armpit, or groin.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> abdominal pain, particularly right upper quadrant pain (raises recurrent biliary infection), or jaundice.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> dysuria, frequency, or loin pain recurring with each episode - raises recurrent UTI/pyelonephritis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Dental/ENT:</span> toothache, dental abscess, or recurrent sinus symptoms.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac:</span> new breathlessness or palpitations - relevant if endocarditis is being considered.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Exposure/Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria:</span> Bednet use? Was each previous episode confirmed with an RDT or microscopy, or treated presumptively? Recurrent, confirmed malaria may reflect ongoing reinfection in a high-transmission area, or, less commonly, resistant disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis:</span> Previous TB treatment, and was it completed in full? Incomplete treatment raises relapse or drug-resistant disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status:</span> Known status or risk factors? Recurrent fever with a widening range of infections raises underlying immunosuppression.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> Known genotype? Patients with sickle cell disease have functional asplenia and are at higher risk of serious infection with encapsulated organisms, and recurrent fever may reflect either infection or vaso-occlusive crises.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Brucellosis:</span> Occupational exposure to livestock (herding, abattoir work) or consumption of unpasteurized milk/dairy? Raises undulant (recurring, wave-like) fever.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Relapsing fever:</span> Exposure to ticks or lice, or travel to an area where tick-borne relapsing fever is recognized?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recurrent UTI:</span> Any known urinary tract abnormality, or recurrent infections in the past?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Autoimmune/family history:</span> Personal or family history of autoimmune disease?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy risk:</span> Any risk factors or personal/family history relevant to lymphoma or other malignancy?</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>General appearance - wasting or chronic illness raises TB, HIV, or malignancy.</li>
      <li>Full set of vital signs, taken during the current episode if the patient presents while febrile.</li>
      <li>Pallor - relevant to malaria, chronic disease, and sickle cell disease.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Targeted Examination for Underlying Cause</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphadenopathy</span> - palpate cervical, axillary, and inguinal nodes; raises TB, HIV, or lymphoma.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatosplenomegaly</span> - common in malaria, but also relevant to brucellosis and lymphoma.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Joint examination</span> - swelling, warmth, or tenderness; raises an autoimmune or infective arthritis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin</span> - any rash accompanying the fever, particularly one that comes and goes with the fever itself (seen in some autoimmune conditions).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Dental and oral examination</span> - looking for a dental abscess or other oral source.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac auscultation</span> - a new or changing murmur alongside recurrent fever raises infective endocarditis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Bone tenderness</span> - relevant to osteomyelitis or sickle cell-related bone disease.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Fever in a known sickle cell patient</span> - because of functional asplenia, these patients are at real risk of overwhelming infection with encapsulated organisms and need a lower threshold for urgent antibiotics rather than routine reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A new or changing cardiac murmur with recurrent fever</span> - raises infective endocarditis, which needs blood cultures before antibiotics and prompt cardiology input.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Unexplained weight loss with lymphadenopathy or hepatosplenomegaly</span> - raises lymphoma or another malignancy and needs prompt further workup rather than repeated empirical treatment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected TB relapse after incomplete previous treatment</span> - raises the possibility of drug-resistant disease and needs appropriate testing before restarting standard therapy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe malaria features on any recurrence</span> - impaired consciousness, prostration, jaundice, or bleeding - should be managed as severe disease regardless of how many previous episodes seemed mild.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy at each episode</span> - never assume; confirm parasitologically every time, since the pattern of confirmed versus presumed episodes materially changes the workup.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC, ESR/CRP</span> - baseline for every episode, and helpful in distinguishing infective from inflammatory/malignant causes over time.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood culture</span> - before antibiotics, particularly where endocarditis, brucellosis, or another bacteraemia is suspected; multiple sets improve yield if endocarditis is a real concern.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB/GeneXpert and chest radiograph</span> - where TB relapse or extrapulmonary TB is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Haemoglobin genotype</span> - where sickle cell disease is suspected but not previously confirmed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Brucella serology</span> - where there is a compatible occupational or dietary exposure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood film for spirochetes</span> - where relapsing fever is suspected based on exposure history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Autoimmune workup (e.g. ANA)</span> - where joint symptoms, rash, or an unrevealing infective workup points towards an autoimmune cause.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal ultrasound</span> - where recurrent biliary infection is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Echocardiography</span> - where infective endocarditis is suspected.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Recurrent malaria</span> - either genuine reinfection in a high-transmission setting, or, less commonly, resistant/recrudescent disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid relapse</span> - recurrence after incomplete or inadequate initial treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis (relapse or extrapulmonary)</span> - particularly after incomplete previous treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Brucellosis</span> - undulant, wave-like fever with a relevant occupational or dietary exposure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Relapsing fever (borrelia)</span> - recurring febrile episodes with a compatible tick/louse exposure history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Recurrent UTI/pyelonephritis</span> - dysuria, frequency, or loin pain recurring with each episode.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease-related</span> - recurrent vaso-occlusive crises, or recurrent infection due to functional asplenia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV-related recurrent opportunistic infections</span> - in a patient with known or unaddressed HIV status.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Autoimmune disease</span> (e.g. adult-onset Still's disease, systemic lupus erythematosus) - recurring fever with joint pain, rash, or an unrevealing infective workup.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphoma</span> - recurring fever, sometimes with a cyclical pattern, alongside lymphadenopathy and weight loss.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Recurrent biliary infection (cholangitis/cholecystitis)</span> - right upper quadrant pain recurring with fever.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Infective endocarditis</span> - recurring fever with a new or changing murmur.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic dental/sinus infection</span> - a source that is easy to overlook if not specifically examined for.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Drug fever</span> - recurring fever temporally related to a specific medication.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief During Episodes</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Antipyretics (paracetamol)</span> - for comfort during febrile episodes, while the underlying cause is being identified.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Adequate hydration</span> - during each episode.</li>
      <li>Resist the urge to simply repeat the same empirical treatment for each new episode without first confirming the diagnosis - this is the single most important principle in managing recurrent fever.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Recurrent malaria (confirmed reinfection)</span> - standard ACT for each confirmed episode, alongside reinforcing bednet use and vector control measures.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid relapse</span> - a full, appropriate antibiotic course guided by sensitivity where possible.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">TB relapse</span> - retreatment regimen per national guidelines, with drug-susceptibility testing to exclude resistant disease before restarting standard therapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Brucellosis</span> - a prolonged combination antibiotic course (e.g. doxycycline with rifampicin or an aminoglycoside) per current guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Relapsing fever</span> - a course of doxycycline or an alternative antibiotic per local guidance.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Recurrent UTI/pyelonephritis</span> - antibiotics guided by culture, with further urological workup for recurrent cases.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell-related infection</span> - a low threshold for antibiotics covering encapsulated organisms, per local sickle cell protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV-related recurrent infection</span> - treat the specific infection, and initiate or optimize antiretroviral therapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Autoimmune disease</span> - rheumatology referral for immunosuppressive treatment as indicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphoma/malignancy</span> - haematology/oncology referral for staging and treatment; this is not managed with antibiotics.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Infective endocarditis</span> - prolonged IV antibiotics guided by blood culture results, with cardiology/cardiothoracic input.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Recurrent fever, number of episodes, total duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Pattern of episodes, duration of each, symptom-free intervals, associated symptoms, treatment given and adequacy for each prior episode, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Sickle cell disease, HIV status, previous TB treatment and completion, known cardiac disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">All previous treatments for prior episodes, current medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Occupational/dietary exposure (brucellosis), tick/louse exposure, family history of autoimmune disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, lymphadenopathy, hepatosplenomegaly, joint/skin findings, cardiac auscultation, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and follow-up plan.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Re-treating every episode as "malaria" without confirming it parasitologically each time.</li>
    <li>Not asking whether previous treatment courses were actually completed.</li>
    <li>Missing TB relapse or drug-resistant disease in a patient with an incomplete treatment history.</li>
    <li>Underestimating infection risk in a sickle cell patient due to functional asplenia.</li>
    <li>Not considering autoimmune or malignant causes when a thorough infective workup keeps coming back unrevealing.</li>
    <li>Overlooking a dental or sinus source as the cause of recurring fever.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Confirm malaria parasitologically at every episode - don't assume it's "the same thing again" without testing.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check whether previous treatment courses were actually completed - incomplete treatment reframes the whole differential, particularly for TB.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Sickle cell patients have functional asplenia and need a low threshold for antibiotics with any fever, not routine reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>When infective causes have been thoroughly excluded, actively consider autoimmune disease and malignancy rather than repeating the same workup.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>The goal with recurrent fever is to find out why it keeps returning, not to keep re-treating the same presumed cause.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health, National Malaria Elimination Programme - National Guidelines for Diagnosis and Treatment of Malaria in Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment (Retreatment Regimens).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Brucellosis in Humans and Animals: Guidance for Diagnosis, Surveillance and Control.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Society of Hematology - Guidelines on the Management of Sickle Cell Disease.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>
 
 

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-chills',
    title: 'Chills',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Chills</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Chills</h1>
    <p class="text-sm text-indigo-200">Chills and rigors are often dismissed as the opening act of an obvious malaria episode, but true shaking rigors are one of the strongest clinical markers of bacteraemia and deserve to be taken seriously in their own right. In specific contexts - a patient on chemotherapy, mid-transfusion, or with a recent IV line - chills can be the first sign of a genuine emergency. This guide focuses on the history and examination that separate a routine malaria paroxysm from the presentations that need urgent action, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Chills Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and how long did the episode last?</li>
      <li>How severe was it - mild shivering, or a true rigor with uncontrollable shaking? (A frank rigor is a more significant finding than a mild shiver and deserves to be taken seriously.)</li>
      <li>Was a temperature actually measured during or shortly after the episode, and if so, what was it?</li>
      <li>Is this the first episode, or has this happened before?</li>
      <li>Did the chills occur in relation to anything specific - during or shortly after a blood transfusion, an IV line being accessed, a dialysis session, or another procedure? (Timing here is one of the most important pieces of information in the whole history.)</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General:</span> sweating after the chill resolves, headache, myalgia, or generalized weakness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> cough, breathlessness, or chest pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> dysuria, frequency, or loin pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> abdominal pain (particularly right upper quadrant pain with jaundice, which alongside fever and rigors forms Charcot's triad for cholangitis).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin/line site:</span> any redness, swelling, or discharge at an IV line, catheter, or wound site.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Transfusion-related:</span> itching, rash, back or flank pain, or dark urine occurring during or shortly after a transfusion.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological:</span> confusion or altered behaviour - raises severe sepsis or severe malaria.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria:</span> bednet use, recent mosquito exposure, or previous episodes.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chemotherapy/immunosuppression:</span> is the patient currently receiving chemotherapy, or otherwise significantly immunosuppressed? Chills and fever in this context must be treated as febrile neutropenia until proven otherwise - this is a genuine emergency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent transfusion:</span> has the patient received blood or blood products recently, and did the chills start during or shortly after the transfusion?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">IV lines/catheters/dialysis access:</span> any indwelling line, and how long has it been in place?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent surgery or invasive procedure:</span> raises post-procedural bacteraemia.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> known genotype, given the increased risk of serious bacterial infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">New medications:</span> anything started recently that could cause a drug fever/reaction.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> a recent reduction or stop in regular heavy drinking can cause tremor and chills as part of a withdrawal syndrome.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or unwell/toxic? Chills with an unwell appearance should raise concern for significant bacteraemia.</li>
      <li>Temperature, heart rate, blood pressure, respiratory rate, and oxygen saturation - a full set of vitals is essential, since a rigor is often followed by a rapid rise in temperature and can precede haemodynamic instability.</li>
      <li>Look specifically for hypotension or tachycardia disproportionate to the temperature - both raise sepsis.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Looking for a Source</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">IV lines/catheters/wound sites</span> - inspect specifically for redness, swelling, tenderness, or discharge.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest</span> - crepitations, reduced air entry, or signs of consolidation.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdomen</span> - right upper quadrant tenderness with jaundice (cholangitis), or renal angle tenderness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin</span> - any rash, cellulitis, or signs of a transfusion reaction (urticaria, flushing).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological status</span> - any confusion or reduced consciousness changes the urgency of the case considerably.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Fever and chills in a patient on chemotherapy or otherwise significantly immunosuppressed</span> - treat as febrile neutropenia and give empirical broad-spectrum antibiotics immediately; this cannot wait for a neutrophil count to return.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Rigors during or shortly after a blood transfusion</span> - stop the transfusion immediately, keep the line open with saline, and notify the blood bank; do not simply give an antipyretic and continue.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Rigors with hypotension or altered consciousness</span> - a strong marker of bacteraemia progressing to septic shock; needs urgent resuscitation and early antibiotics.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Charcot's triad</span> (fever/rigors, jaundice, right upper quadrant pain) - raises ascending cholangitis, which needs urgent antibiotics and biliary drainage.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Features of severe malaria on any confirmed episode</span> - impaired consciousness, prostration, jaundice, or bleeding - regardless of how mild previous episodes seemed.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood cultures (ideally two sets, from different sites)</span> - before antibiotics wherever possible, given how strongly true rigors correlate with bacteraemia; do not, however, delay antibiotics in an unstable patient purely to obtain cultures.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - as a routine part of the workup in this setting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC with differential</span> - essential in every case, and specifically the neutrophil count in any patient on chemotherapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinalysis and urine culture</span> - where a urinary source is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest radiograph</span> - where a respiratory source is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lactate</span> - where septic shock is suspected, to guide resuscitation and severity assessment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Catheter/line-tip culture</span> - where a line infection is suspected and the line is being removed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Transfusion reaction workup</span> - repeat crossmatch, direct antiglobulin test, and urine for haemoglobinuria where a transfusion reaction is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs and abdominal ultrasound</span> - where cholangitis is suspected.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria paroxysm</span> - the commonest cause of chills locally, but should still be confirmed rather than assumed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacteraemia/sepsis (any source)</span> - urinary, respiratory, intra-abdominal, or skin/soft tissue.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid fever</span> - chills alongside the other systemic features of typhoid.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Febrile neutropenia</span> - in a patient on chemotherapy or otherwise immunosuppressed; a medical emergency.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute transfusion reaction</span> - occurring during or shortly after a blood transfusion.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Catheter/line-related bloodstream infection</span> - in a patient with an indwelling line.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ascending cholangitis</span> - fever/rigors with jaundice and right upper quadrant pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pyelonephritis</span> - fever/rigors with urinary symptoms and loin tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Post-procedural bacteraemia</span> - following a recent surgery or invasive procedure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Drug fever/reaction</span> - temporally related to a new medication.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol withdrawal</span> - tremor and chills in a patient reducing or stopping regular heavy alcohol use.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief During an Episode</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Warm blankets and reassurance</span> - for comfort during a rigor.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Antipyretics (paracetamol)</span> - once a fever has developed, alongside identifying and treating the underlying cause.</li>
      <li>Symptomatic comfort measures should never delay recognition of a genuine emergency (febrile neutropenia, transfusion reaction, or septic shock).</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria</span> - ACT for uncomplicated disease, IV artesunate for severe/complicated disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Bacteraemia/sepsis</span> - early broad-spectrum IV antibiotics per local protocol, with fluid resuscitation and source control.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Febrile neutropenia</span> - immediate empirical broad-spectrum IV antibiotics as per local/international neutropenic sepsis protocol; this should not be delayed for any reason.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute transfusion reaction</span> - stop the transfusion, maintain IV access with saline, supportive management of any haemodynamic instability, and notify the blood bank for further workup.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Catheter-related bloodstream infection</span> - removal or exchange of the line where feasible, alongside appropriate antibiotics.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ascending cholangitis</span> - IV antibiotics and urgent biliary drainage.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pyelonephritis</span> - antibiotics as per the fever/UTI guide.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Drug fever</span> - stopping the causative medication where identified.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol withdrawal</span> - benzodiazepine-based withdrawal management per local protocol, with monitoring for progression to more severe withdrawal.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Chills/rigors, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, severity, temporal relation to any procedure/transfusion/line access, associated symptoms, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Current chemotherapy/immunosuppression, sickle cell disease, recent surgery or procedures.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Recent new medications, current chemotherapy regimen if applicable, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Alcohol use, relevant occupational exposure.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, source examination (lines/wounds/chest/abdomen/skin), explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Assuming every episode of chills is malaria without confirming and without considering the broader differential.</li>
    <li>Not recognizing febrile neutropenia in a chemotherapy patient and treating it as a minor illness.</li>
    <li>Continuing a blood transfusion after rigors develop instead of stopping it immediately.</li>
    <li>Starting antibiotics without first attempting to obtain blood cultures, where feasible and without unduly delaying treatment.</li>
    <li>Missing a line/catheter-related source because the site was not specifically examined.</li>
    <li>Missing Charcot's triad by not asking about jaundice or examining for it.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A true rigor is a strong marker of bacteraemia - take it seriously and send blood cultures before antibiotics wherever possible.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Chills and fever in a chemotherapy patient is febrile neutropenia until proven otherwise - give antibiotics immediately.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Rigors during a transfusion mean stop the transfusion immediately, not "wait and see."</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always examine any IV line, catheter, or wound site directly - a visible source changes management immediately.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Don't let "it's probably malaria" stop you from asking about recent transfusions, lines, procedures, or immunosuppression.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Infectious Diseases Society of America - Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Surviving Sepsis Campaign Guidelines.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Clinical Guidelines for the Management of Transfusion Reactions.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health, National Malaria Elimination Programme - National Guidelines for Diagnosis and Treatment of Malaria in Nigeria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>


 

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-night-sweats',
    title: 'Night Sweats',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Night Sweats</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Night Sweats</h1>
    <p class="text-sm text-indigo-200">Night sweats are frequently benign - menopause is the commonest cause in women of the right age - but true drenching night sweats, particularly alongside fever and weight loss, form the classic "B symptoms" that should prompt active screening for tuberculosis, HIV, and lymphoma rather than reassurance. This guide focuses on the history and examination that separate a benign cause from one that needs urgent workup, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Night Sweats Themselves</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>How long has this been happening, and how often does it occur?</li>
      <li>How severe is it - mild dampness, or truly drenching sweats that soak the sheets or clothing and require a change? (This distinction matters - "drenching" sweats carry more diagnostic weight than a mild sweat.)</li>
      <li>What time of night does it tend to happen - early in the night, or closer to early morning?</li>
      <li>Does it resolve with a fan or cooler room, or does it happen regardless of the environment?</li>
      <li>In a woman of the relevant age - are there also hot flashes during the day, and what is the current menstrual/menopausal status?</li>
      <li>Has anything been tried already, and did it help?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional (ask explicitly):</span> fever, unintentional weight loss, and loss of appetite - alongside night sweats, these form the classic "B symptoms" that should not be dismissed.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> a cough lasting more than 2 weeks, haemoptysis, or breathlessness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphatic:</span> noticeable lumps or swelling in the neck, armpit, or groin.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Endocrine:</span> heat intolerance, palpitations, tremor, or weight loss with a good appetite - raises hyperthyroidism.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Metabolic (in a known diabetic):</span> tremor, hunger, or confusion preceding the sweating episode - raises nocturnal hypoglycaemia.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac:</span> new breathlessness, palpitations, or fatigue - relevant if endocarditis is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Psychological:</span> anxiety or panic symptoms occurring around the same time.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB contact:</span> known contact with someone with TB or a chronic cough?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status:</span> known status or risk factors? Night sweats are a common and important presenting feature of HIV itself, as well as its opportunistic infections.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes and its treatment:</span> is the patient on insulin or a sulfonylurea, and what is the timing of the evening dose relative to the last meal? (These medications carry a real risk of nocturnal hypoglycaemia, which can present as night sweats.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Menopausal status:</span> last menstrual period, and any other menopausal symptoms.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy risk:</span> personal or family history relevant to lymphoma or other malignancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac risk (endocarditis):</span> known valve disease, recent dental work or other invasive procedures, or intravenous drug use.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational exposure:</span> livestock or unpasteurized dairy exposure (brucellosis).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> any new medication started recently, particularly antidepressants, which are a recognized cause of night sweats.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> can contribute to night sweats, particularly with heavier or irregular drinking patterns.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>General appearance - wasting or cachexia raises TB, HIV, or malignancy.</li>
      <li>Vital signs, including temperature - document any fever objectively rather than relying on a subjective description alone.</li>
      <li>Weight - compare to any previous recorded weight where available, to objectively assess for weight loss.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Targeted Examination for Underlying Cause</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphadenopathy</span> - palpate cervical, axillary, and inguinal nodes; raises TB, HIV, or lymphoma.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest examination</span> - crepitations or signs of consolidation, relevant to TB or another chronic chest infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral examination</span> - oral thrush or other lesions can be a clue to underlying HIV.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatosplenomegaly</span> - relevant to lymphoma, TB, or chronic infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid examination</span> - goitre, tremor, or tachycardia suggest hyperthyroidism.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac auscultation</span> - a new or changing murmur raises infective endocarditis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Capillary blood glucose</span> - check where nocturnal hypoglycaemia is suspected, ideally with a glucose diary or check at the time symptoms occur if possible.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Drenching night sweats with fever and unintentional weight loss</span> - the classic "B symptoms" - need active screening for TB, HIV, and lymphoma rather than reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Recurrent nocturnal hypoglycaemia in a diabetic patient</span> - particularly on insulin or a sulfonylurea; needs urgent medication review to prevent a more severe hypoglycaemic event.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A new or changing cardiac murmur with night sweats</span> - raises infective endocarditis and needs blood cultures and prompt cardiology input.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Rapidly enlarging or matted lymphadenopathy</span> - raises lymphoma and needs prompt further workup rather than a course of antibiotics "to see if it settles."</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A cough lasting more than 2 weeks alongside night sweats</span> - active TB screening is required, not deferral.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB/GeneXpert and chest radiograph</span> - wherever TB is a realistic possibility, particularly with a cough lasting 2 weeks or more.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent, given how significantly it changes the differential.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC and ESR/CRP</span> - baseline, and helpful in distinguishing infective/inflammatory from other causes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid function tests</span> - to screen for hyperthyroidism where suggestive symptoms are present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose (including a glucose diary where relevant)</span> - in any diabetic patient on insulin or a sulfonylurea presenting with night sweats.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LDH and further imaging (CT chest/abdomen)</span> - where lymphoma or another malignancy is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood cultures and echocardiography</span> - where infective endocarditis is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Brucella serology</span> - where there is a compatible occupational or dietary exposure.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Menopause</span> - the commonest cause in women of the relevant age, often with daytime hot flashes as well.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - drenching night sweats with cough, weight loss, and fever.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV/AIDS</span> - either from HIV itself or an associated opportunistic infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphoma</span> - drenching night sweats with lymphadenopathy and weight loss.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nocturnal hypoglycaemia</span> - in a diabetic patient, particularly on insulin or a sulfonylurea.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperthyroidism</span> - heat intolerance, tremor, palpitations, weight loss with preserved or increased appetite.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Infective endocarditis</span> - night sweats with a new or changing murmur.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Brucellosis</span> - undulant fever and night sweats with a relevant occupational/dietary exposure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - particularly antidepressants.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety/panic-related sweating</span> - a diagnosis of exclusion once other causes have been reasonably ruled out.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic infection (other)</span> - any other ongoing infective process.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Idiopathic night sweats</span> - a diagnosis of exclusion once the above have been reasonably screened for.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic/General Measures</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cooling measures</span> - a fan, lighter bedding, and breathable sleepwear can help regardless of cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Avoiding known triggers</span> - alcohol, spicy food, or caffeine close to bedtime, where these seem to worsen symptoms.</li>
      <li>These measures provide comfort but should not substitute for identifying and treating the underlying cause, particularly where B symptoms are present.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Menopause</span> - lifestyle measures first-line, with hormone replacement therapy considered where appropriate and not contraindicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - standard six-month RHZE regimen under DOTS, per the National Tuberculosis and Leprosy Control Programme.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV/AIDS</span> - initiation or optimization of antiretroviral therapy, alongside treatment of any specific opportunistic infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphoma</span> - haematology/oncology referral for staging and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nocturnal hypoglycaemia</span> - review and adjust the diabetes medication regimen, and consider a bedtime snack where appropriate.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperthyroidism</span> - treatment of the underlying thyroid disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Infective endocarditis</span> - prolonged IV antibiotics guided by blood culture results, with cardiology/cardiothoracic input.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Brucellosis</span> - a prolonged combination antibiotic course per current guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - review and adjust the causative medication where clinically appropriate.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Night sweats, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, frequency, severity (drenching or mild), timing, associated B symptoms, directed risk history, treatment already tried, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Diabetes and its treatment, HIV status, previous TB treatment, known valve disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Insulin/sulfonylurea use and timing, other current medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Occupational/dietary exposure, alcohol use, family history of malignancy.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, weight, lymphadenopathy, chest/cardiac findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and follow-up plan.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Attributing all night sweats in a woman of the relevant age to menopause without checking for other red flags.</li>
    <li>Not actively screening for TB and HIV in a patient with drenching night sweats.</li>
    <li>Missing nocturnal hypoglycaemia in a diabetic patient on insulin or a sulfonylurea.</li>
    <li>Treating enlarging lymphadenopathy with a course of antibiotics without further workup if it fails to resolve.</li>
    <li>Not weighing the patient or comparing to a previous recorded weight to objectively assess weight loss.</li>
    <li>Overlooking endocarditis risk factors in a patient with night sweats and a murmur.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Drenching night sweats with fever and weight loss are B symptoms - actively screen for TB, HIV, and lymphoma.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Don't assume menopause in a woman of the right age without checking for red flags first.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about insulin/sulfonylurea timing in every diabetic patient with night sweats - nocturnal hypoglycaemia is a common and fixable cause.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A new murmur with night sweats should raise infective endocarditis, not just a general infection.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Objectively document weight and fever where possible - a subjective description alone is easy to under- or overestimate.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Consolidated Guidelines on HIV Testing Services.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Menopause: Diagnosis and Management.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Diabetes Association - Standards of Care (Hypoglycaemia section).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>
 

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-weight-loss',
    title: 'Weight Loss',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Weight Loss</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Weight Loss</h1>
    <p class="text-sm text-indigo-200">Unintentional weight loss always deserves a proper explanation - it is a genuine red flag symptom, sitting behind causes ranging from tuberculosis and HIV to malignancy, uncontrolled diabetes, and depression. In this setting, food insecurity is also a real and common cause that needs to be asked about sensitively rather than assumed or overlooked. This guide focuses on the history and examination that clarify why the weight is actually coming off, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Weight Loss Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>How much weight has been lost, and over what period of time? Try to get an actual figure or a comparison to well-fitting clothes, rather than a vague impression.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Is this weight loss intentional (deliberate dieting or increased exercise) or unintentional?</span> This is the single most important distinguishing question, since unintentional weight loss carries far more diagnostic weight.</li>
      <li>How is the appetite - increased, decreased, or unchanged? (Weight loss with a preserved or increased appetite points towards a different set of causes than weight loss with reduced appetite.)</li>
      <li>Has the pattern of eating changed at all, and is the patient able to access and afford enough food regularly?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, night sweats - alongside weight loss, these form the classic "B symptoms" and should be asked about directly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> a cough lasting more than 2 weeks, haemoptysis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> difficulty or pain swallowing (and whether it is progressive), abdominal pain, change in bowel habit, diarrhoea, or blood in the stool.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Endocrine:</span> heat intolerance, tremor, palpitations (hyperthyroidism); excessive thirst and urination (diabetes).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiorespiratory:</span> breathlessness, orthopnoea, or leg swelling - relevant to heart failure-related weight loss.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Mood (ask directly and without judgement):</span> persistent low mood, loss of interest or pleasure in things usually enjoyed, and - where these are present - whether the patient has had any thoughts of harming themselves or not wanting to be alive. This is a standard safety question once depression is suspected, not an accusatory one.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphatic:</span> noticeable lumps or swelling anywhere.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB contact and HIV status:</span> known contact with someone with TB, or known HIV status/risk factors.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Food security:</span> ask gently and without judgement whether the patient is able to get enough food to eat regularly - this is a genuine and common cause of unintentional weight loss locally, and patients may not volunteer it unless asked directly and non-judgementally.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes:</span> any known diagnosis, and if so, how well controlled is it currently?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy risk:</span> personal or family history of cancer, and age (weight loss in an older patient carries a higher baseline concern for malignancy).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic diarrhoea/malabsorption:</span> any longstanding change in stool pattern, and exposure to poor sanitation or walking barefoot (raises soil-transmitted helminth infection).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> relevant to both nutritional intake and chronic liver disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> any new medication, particularly stimulants, thyroid medication, or chemotherapy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac/renal history:</span> known heart failure or chronic kidney disease, both of which can cause significant weight loss when advanced.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Psychosocial stressors:</span> ask gently about mood, stress, and life circumstances, letting the patient lead on how much they want to share.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Calculate and record BMI, and compare to any previous recorded weight where available - this objectively confirms and quantifies the weight loss.</li>
      <li>General appearance - temporal wasting, muscle wasting, or visible cachexia.</li>
      <li>Vital signs, including temperature.</li>
      <li>Pallor and hydration status.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Targeted Examination for Underlying Cause</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphadenopathy</span> - palpate cervical, axillary, and inguinal nodes.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid examination</span> - goitre, tremor, tachycardia.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal examination</span> - any palpable mass, hepatosplenomegaly, or ascites.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral examination</span> - oral thrush, dental problems, or lesions that could impair intake.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest examination</span> - relevant to TB or another chronic chest condition.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac examination</span> - signs of heart failure (raised JVP, gallop rhythm, peripheral oedema).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Basic mental state assessment</span> - mood and affect, conducted sensitively, particularly where reduced appetite and low mood coexist.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Unintentional weight loss with fever and night sweats</span> - the classic "B symptoms" - need active screening for TB, HIV, and lymphoma rather than reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">New or progressive difficulty swallowing with weight loss</span> - raises oesophageal or gastric malignancy and needs prompt endoscopy referral.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A palpable abdominal mass or change in bowel habit with rectal bleeding</span> - raises colorectal or another gastrointestinal malignancy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Significant unintentional weight loss in a patient over 50 with no clear cause identified</span> - needs prompt further workup for malignancy, not watchful waiting.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Active suicidal ideation</span> - in a patient with depression-related weight loss, this needs an immediate, direct safety assessment and urgent referral.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe malnutrition/cachexia with signs of physiological compromise</span> - needs prompt nutritional and medical support alongside identifying the underlying cause.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB/GeneXpert and chest radiograph</span> - wherever TB is a realistic possibility.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC, ESR/CRP</span> - baseline, and helpful in distinguishing infective/inflammatory from other causes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose/HbA1c</span> - to screen for uncontrolled or new diabetes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid function tests</span> - where hyperthyroidism is suggested by the history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs and renal function</span> - as part of a general metabolic screen.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stool microscopy</span> - where chronic diarrhoea or a parasitic cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Upper GI endoscopy</span> - where dysphagia or another alarm gastrointestinal symptom is present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal ultrasound or CT</span> - where a mass or organomegaly is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">A standardized depression screening tool</span> (e.g. PHQ-9) - where mood symptoms are present, to help quantify severity and guide referral.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - weight loss with cough, fever, and night sweats.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV/AIDS</span> - either from HIV itself or an associated opportunistic infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy</span> - gastrointestinal, lung, or other; particularly with alarm symptoms or in an older patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Uncontrolled/new diabetes mellitus</span> - weight loss with polyuria, polydipsia, and often a preserved or increased appetite.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperthyroidism</span> - weight loss with a preserved or increased appetite, heat intolerance, tremor, palpitations.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - weight loss with reduced appetite, low mood, and loss of interest.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Food insecurity/inadequate intake</span> - weight loss explained by genuinely limited access to food; needs a sensitive, non-judgemental approach and appropriate support/referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic diarrhoeal illness/malabsorption</span> - including parasitic causes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure (cardiac cachexia)</span> - in advanced, poorly controlled disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic kidney disease</span> - in advanced disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic liver disease</span> - particularly with a relevant alcohol or hepatitis history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - stimulants, chemotherapy, or thyroid medication.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Disordered eating</span> - a less common but important consideration, particularly in a younger patient; requires a sensitive approach and referral to appropriate specialist support rather than a purely medical workup alone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Intentional weight loss</span> - deliberate dieting or increased exercise; not itself pathological, but still worth confirming this is genuinely the explanation.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic/General Support</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Nutritional assessment and support</span> - where malnutrition is present, involve a dietitian/nutrition service where available.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Where food insecurity is identified</span> - connect the patient with available social support services or community resources, rather than treating it purely as a medical problem to medicate.</li>
      <li>General supportive measures should never delay identifying and treating the specific underlying cause, particularly where red flags are present.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - standard six-month RHZE regimen under DOTS, per the National Tuberculosis and Leprosy Control Programme.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV/AIDS</span> - initiation or optimization of antiretroviral therapy, alongside nutritional support and treatment of any opportunistic infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy</span> - referral to the relevant oncology service for staging and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes</span> - optimization of glycaemic control per standard protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hyperthyroidism</span> - treatment of the underlying thyroid disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - psychotherapy and/or antidepressants as clinically indicated, with safety planning where suicidal ideation is present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic diarrhoea/parasitic infection</span> - deworming where appropriate, and treatment of any underlying malabsorptive condition.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure/chronic kidney disease</span> - optimization of standard disease-specific therapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Disordered eating</span> - referral to appropriate specialist mental health/eating disorder support; this should not be managed with generic dietary advice alone.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Weight loss, amount and duration if known.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Intentional versus unintentional, appetite, associated B symptoms and alarm features, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Psychiatric History</dt>
      <dd class="mt-0.5">Diabetes, HIV status, previous TB treatment, previous depression/anxiety.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Current medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Food security, alcohol use, family history of malignancy/diabetes/thyroid disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">BMI/weight compared to baseline, general appearance, lymphadenopathy, abdominal/chest/cardiac findings, basic mental state assessment, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment/referral given, and follow-up plan.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not clearly establishing whether the weight loss is intentional or unintentional before proceeding.</li>
    <li>Avoiding the question about food security out of discomfort, missing a common and correctable cause.</li>
    <li>Not actively screening for TB and HIV in a patient with unexplained weight loss.</li>
    <li>Dismissing weight loss in an older patient without adequate workup for malignancy.</li>
    <li>Not screening mood where appetite and interest are both reduced.</li>
    <li>Missing new dysphagia as a red flag requiring prompt endoscopy referral.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always establish intentional versus unintentional weight loss first - this single question reframes the whole differential.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Unintentional weight loss with fever or night sweats needs active TB/HIV/lymphoma screening, not reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask sensitively about food security - it is a genuine and common cause locally, and rarely volunteered unasked.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>New dysphagia or unexplained weight loss in an older patient needs prompt further workup, not watchful waiting.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Screen mood directly where reduced appetite and low interest coexist - depression is a common and treatable cause.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Consolidated Guidelines on HIV Testing Services.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Suspected Cancer: Recognition and Referral.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>


</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-Weight Gain',
    title: 'Weight Gain',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Weight Gain</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Weight Gain</h1>
    <p class="text-sm text-indigo-200">Weight gain is usually related to diet and activity, but the clerking task is to first work out whether the gain is genuinely fat, or fluid from an underlying heart, kidney, or liver problem, and then to screen for the specific medical causes that are easy to miss - hypothyroidism, PCOS, and exogenous steroid use, including hidden steroids in unregulated skin-lightening or herbal products, which is a real and under-recognized cause locally. This guide focuses on the history and examination that clarify the underlying driver, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Weight Gain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>How much weight has been gained, and over what period of time? (Where possible, compare to an actual recorded weight rather than an estimate.)</li>
      <li>Has the gain been generalized, or more concentrated around the face, neck, and trunk (raising a hormonal cause), or in the legs and abdomen specifically (raising fluid retention)?</li>
      <li>Has there been any noticeable swelling of the legs, ankles, or abdomen, separate from general weight gain? (This distinction between fat and fluid is one of the most important things to clarify early.)</li>
      <li>Have diet or activity levels genuinely changed recently, and if so, how?</li>
      <li>Has anything been tried already, and did it help?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Endocrine (thyroid):</span> fatigue, cold intolerance, constipation, dry skin, or hair thinning.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Reproductive (in women):</span> irregular or absent periods, excess facial/body hair, or acne (raises PCOS); a missed period alongside nausea or breast tenderness should always raise pregnancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cushingoid features:</span> easy bruising, thinning skin, purple stretch marks, rounding of the face, a fat pad at the back of the neck, or proximal muscle weakness (difficulty rising from a chair or climbing stairs).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiorespiratory/renal (fluid retention):</span> breathlessness, breathlessness lying flat, or waking breathless at night; reduced urine output or frothy urine.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sleep:</span> loud snoring, witnessed pauses in breathing, or daytime sleepiness - relevant to obstructive sleep apnoea, which has a bidirectional relationship with weight.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Mood:</span> low mood or a marked change in appetite/eating pattern linked to how the patient has been feeling emotionally.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Steroid use, in any form:</span> oral, inhaled, injectable, or topical steroids prescribed by a doctor - but just as importantly, ask directly and without judgement about the use of skin-lightening creams, "miracle" herbal preparations, or other unregulated products, since these not infrequently contain hidden steroids and can cause a genuine Cushingoid picture without the patient realizing why.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Other medications:</span> antipsychotics, certain antidepressants, insulin or sulfonylureas, and hormonal contraceptives can all contribute to weight gain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Menstrual/reproductive history:</span> cycle regularity, and possibility of pregnancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Known heart, kidney, or liver disease:</span> any existing diagnosis that could explain fluid-related weight gain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history:</span> thyroid disease, diabetes, or PCOS in close relatives.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> relevant to liver disease as a cause of fluid-related weight gain (ascites).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sleep pattern:</span> ask the patient, or a partner if present, about snoring or breathing pauses during sleep.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Weigh the patient and calculate BMI, comparing to any previous recorded weight where available.</li>
      <li>Note the pattern of weight distribution - generalized, central/truncal, or with a fat pad at the back of the neck.</li>
      <li>Blood pressure - relevant to Cushing's syndrome, PCOS-related metabolic changes, and fluid overload states.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Targeted Examination for Underlying Cause</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid signs</span> - dry skin, bradycardia, a goitre, or delayed reflexes.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cushingoid signs</span> - moon-shaped facies, a fat pad at the back of the neck, purple striae, thin skin with easy bruising, and proximal muscle weakness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">PCOS-related signs</span> - acne, excess facial/body hair, or acanthosis nigricans (darkened, velvety skin, typically at the neck or axillae).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Fluid overload signs</span> - pitting oedema of the legs, raised jugular venous pressure, ascites, or hepatomegaly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy-related signs</span> - where relevant to the history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neck circumference</span> - relevant to obstructive sleep apnoea risk.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Rapid weight gain with breathlessness and leg swelling</span> - raises decompensated heart failure, nephrotic syndrome, or liver disease and needs prompt assessment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Clear Cushingoid features with hypertension and/or hyperglycaemia</span> - needs a search for the source (including unregulated steroid-containing products) and appropriate endocrine workup; if the cause is an exogenous steroid, it must be tapered rather than stopped abruptly, given the risk of adrenal crisis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected pregnancy with associated complications</span> - such as significant hypertension or swelling, which would need urgent obstetric assessment rather than being treated as simple weight gain.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe, untreated obstructive sleep apnoea</span> - marked daytime sleepiness alongside weight gain and hypertension carries real cardiovascular risk.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid function tests</span> - to screen for hypothyroidism.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose/HbA1c and lipid profile</span> - relevant to PCOS, Cushing's syndrome, and general metabolic assessment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urine or serum pregnancy test</span> - in any woman of reproductive age.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs, renal function, albumin, and urinalysis</span> - where fluid-related weight gain is suspected, to screen for liver, kidney, and nephrotic causes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cortisol/overnight dexamethasone suppression test</span> - where Cushing's syndrome is genuinely suspected on clinical grounds.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic ultrasound and androgen levels</span> - where PCOS is suspected, alongside the clinical picture.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Echocardiography</span> - where heart failure is suspected as the cause of fluid retention.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Polysomnography (sleep study)</span> - where access allows and obstructive sleep apnoea is suspected.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Dietary/activity-related weight gain</span> - the commonest cause; explored factually and without judgement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypothyroidism</span> - weight gain with fatigue, cold intolerance, and constipation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Polycystic ovary syndrome</span> - weight gain with irregular periods, acne, or excess hair growth.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cushing's syndrome (exogenous or endogenous)</span> - central weight gain with Cushingoid features; always ask about hidden steroid sources, including unregulated skin/herbal products.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - antipsychotics, certain antidepressants, insulin/sulfonylureas, or hormonal contraceptives.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy</span> - always consider in a woman of reproductive age.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Fluid retention (heart failure, nephrotic syndrome, liver disease)</span> - weight gain that is disproportionately fluid, with oedema, breathlessness, or ascites.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Menopause-related weight gain</span> - often with a shift towards central fat distribution.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - weight gain linked to increased appetite/comfort eating and reduced activity in the context of low mood.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Obstructive sleep apnoea</span> - both a contributor to, and consequence of, weight gain.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Supportive Measures</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Approach the conversation without judgement</span> - weight gain is often multifactorial, and a supportive, non-stigmatizing approach makes patients more likely to engage in follow-up.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Refer to a dietitian where available</span> - individualized dietary guidance is more appropriate and effective than generic advice, and avoids inadvertently promoting restrictive or extreme approaches.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Encourage regular physical activity</span> - tailored to the patient's ability and preferences, alongside addressing any underlying medical cause.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypothyroidism</span> - levothyroxine replacement, titrated to thyroid function tests.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">PCOS</span> - lifestyle measures alongside metformin and/or hormonal management as guided by gynaecology/endocrinology, tailored to whether fertility is a current priority.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cushing's syndrome</span> - identify and address the source; where due to an unregulated steroid-containing product, stop it under medical supervision with an appropriate taper rather than abruptly, given adrenal suppression risk; where endogenous, refer to endocrinology.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - review with the prescriber and consider an alternative agent where clinically appropriate, rather than stopping unilaterally.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Fluid retention (heart failure, nephrotic syndrome, liver disease)</span> - diuretics alongside treatment of the underlying condition.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - psychotherapy and/or antidepressants as clinically indicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Obstructive sleep apnoea</span> - CPAP where available and tolerated, alongside weight management as part of a broader plan.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Weight gain, amount and duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Amount gained, distribution (generalized/central/fluid), dietary/activity changes, associated symptoms, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Reproductive History</dt>
      <dd class="mt-0.5">Known thyroid disease, PCOS, heart/kidney/liver disease, menstrual history.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Substance History</dt>
      <dd class="mt-0.5">All steroid use including topical/herbal/unregulated products, other relevant medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Family history of thyroid disease/diabetes/PCOS, alcohol use, sleep pattern.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Weight/BMI, distribution pattern, thyroid/Cushingoid/PCOS/fluid overload signs, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment/referral given, and follow-up plan.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not asking directly about unregulated skin-lightening or herbal products that may contain hidden steroids.</li>
    <li>Not distinguishing fluid-related from fat-related weight gain, leading to a missed cardiac, renal, or liver cause.</li>
    <li>Not checking a pregnancy test in a woman of reproductive age.</li>
    <li>Stopping a steroid abruptly once identified as the cause, rather than tapering appropriately.</li>
    <li>Approaching the conversation judgementally, which discourages patients from further engagement.</li>
    <li>Not screening thyroid function as a simple, common, and treatable cause.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Clarify fat versus fluid early - it points towards two entirely different sets of causes.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask directly and without judgement about steroid use of any kind, including unregulated skin/herbal products.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check a pregnancy test in a woman of reproductive age with new weight gain.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>If an exogenous steroid is found to be the cause, taper rather than stop abruptly, given the risk of adrenal crisis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Approach the whole conversation without judgement - it materially affects whether the patient engages with follow-up care.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Endocrine Society - Clinical Practice Guideline on the Diagnosis of Cushing's Syndrome.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>International Evidence-Based Guideline for the Assessment and Management of Polycystic Ovary Syndrome.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Thyroid Association - Guidelines for the Diagnosis and Management of Hypothyroidism.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Sleep Medicine - Clinical Guideline for the Diagnosis of Obstructive Sleep Apnoea.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>

 

</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-loss-of-appetite',
    title: 'Loss of Appetite',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Loss of Appetite</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Loss of Appetite</h1>
    <p class="text-sm text-indigo-200">Loss of appetite is easy to file under "not eating well" without asking why, but the differential runs from a self-limiting infection to depression, chronic organ disease, malignancy, and adrenal insufficiency - a genuinely dangerous cause that presents non-specifically and is easy to miss. This guide focuses on the history and examination that clarify what is actually behind the reduced appetite, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Appetite Loss Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did this start, and how long has it lasted?</li>
      <li>Is there genuinely no desire to eat, or does the patient want to eat but feel full very quickly (early satiety), or avoid eating because of pain, nausea, or difficulty swallowing? (This distinction changes the differential considerably - early satiety and pain-related avoidance point towards different causes than true loss of interest in food.)</li>
      <li>Has actual food intake reduced, and has this led to any weight loss?</li>
      <li>Is the reduced appetite constant, or does it fluctuate?</li>
      <li>Has anything been tried already, and did it help?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, night sweats, and weight loss - alongside appetite loss, these raise TB, HIV, or malignancy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> nausea, vomiting, abdominal pain, jaundice, difficulty or pain swallowing, or a change in bowel habit.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Endocrine (ask specifically):</span> persistent fatigue, dizziness on standing, salt craving, or darkening of the skin (particularly the gums, palmar creases, or scars) - raises adrenal insufficiency, which is easy to miss because it presents so non-specifically.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal:</span> itching, a metallic taste, or reduced urine output - raises uraemia in advanced kidney disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Mood (ask directly and without judgement):</span> persistent low mood, loss of interest or pleasure in things usually enjoyed, and - where these are present - whether the patient has had any thoughts of harming themselves or not wanting to be alive. This is a standard safety question once depression is suspected, not an accusatory one.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral:</span> mouth pain, ulcers, or dental problems that make eating uncomfortable.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiorespiratory:</span> breathlessness or leg swelling - relevant to heart failure-related anorexia.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB contact and HIV status:</span> known contact with someone with TB, or known HIV status/risk factors.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy risk:</span> personal or family history of cancer, and age (new appetite loss in an older patient carries more weight).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic organ disease:</span> known chronic kidney disease, liver disease, or heart failure.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> chemotherapy, opioids, metformin, or recently started antibiotics - all recognized causes of reduced appetite.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> relevant to nutritional intake, gastritis, and chronic liver disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Adrenal disease:</span> any known history of steroid use that was recently stopped (raises adrenal suppression), or other autoimmune conditions.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Psychosocial factors:</span> recent bereavement, major stress, or other significant life changes - ask gently and let the patient lead on how much they want to share.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Food security:</span> ask sensitively whether reduced intake reflects a genuine lack of appetite, or difficulty accessing enough food - these need different responses.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy:</span> last menstrual period and possibility of pregnancy in a woman of reproductive age.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Examination and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>General appearance - wasting or cachexia, and a comparison to any previous recorded weight.</li>
      <li>Blood pressure lying and standing - a significant postural drop supports adrenal insufficiency.</li>
      <li>Skin - hyperpigmentation of the gums, palmar creases, or scars is a specific and important sign of adrenal insufficiency; also look for jaundice.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Targeted Examination for Underlying Cause</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphadenopathy</span> - relevant to TB, HIV, or lymphoma.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal examination</span> - any palpable mass, hepatosplenomegaly, or epigastric tenderness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral examination</span> - ulcers, thrush, or dental problems affecting the ability to eat comfortably.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac examination</span> - signs of heart failure (raised JVP, gallop rhythm, peripheral oedema).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Signs of chronic liver or kidney disease</span> - as relevant to the history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Basic mental state assessment</span> - mood and affect, conducted sensitively.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected adrenal insufficiency</span> (fatigue, postural dizziness, hyperpigmentation, weight loss) - this is a genuinely dangerous, easily missed diagnosis; if the patient is acutely unwell with vomiting, hypotension, and collapse, treat as an Addisonian crisis and give hydrocortisone without waiting for confirmatory results.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Loss of appetite with fever, night sweats, and weight loss</span> - the classic "B symptoms" - need active screening for TB, HIV, and lymphoma.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Active suicidal ideation</span> - in a patient with depression-related loss of appetite, needs an immediate, direct safety assessment and urgent referral.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Early satiety with weight loss and vomiting</span> - raises gastric outlet obstruction or a gastric malignancy and needs prompt endoscopy referral, not reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe malnutrition/cachexia with signs of physiological compromise</span> - needs prompt nutritional and medical support alongside identifying the underlying cause.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC, ESR/CRP</span> - baseline, and helpful in distinguishing infective/inflammatory from other causes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB/GeneXpert and chest radiograph</span> - wherever TB is a realistic possibility.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">U&E</span> - hyponatraemia and hyperkalaemia support adrenal insufficiency; also assesses renal function for uraemia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">9am serum cortisol, or a short synacthen (ACTH stimulation) test</span> - where adrenal insufficiency is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs</span> - where chronic liver disease is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose</span> - as part of a general metabolic screen.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urine or serum pregnancy test</span> - in a woman of reproductive age.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">A standardized depression screening tool</span> (e.g. PHQ-9) - where mood symptoms are present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Upper GI endoscopy and/or abdominal imaging</span> - where early satiety, alarm gastrointestinal symptoms, or a mass are present.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute infection</span> - malaria, typhoid, or any self-limiting febrile illness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - loss of appetite with cough, fever, and night sweats.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV/AIDS</span> - from HIV itself or an associated opportunistic infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy</span> - particularly gastrointestinal; consider more strongly with alarm symptoms or in an older patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - reduced appetite with low mood and loss of interest.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Adrenal insufficiency</span> - fatigue, postural dizziness, hyperpigmentation, and weight loss.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic kidney disease/uraemia</span> - itching, metallic taste, fatigue.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic liver disease</span> - jaundice, ascites, a relevant alcohol or hepatitis history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure</span> - anorexia related to gut congestion in advanced disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - chemotherapy, opioids, metformin, certain antibiotics.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal causes</span> - gastritis, peptic ulcer disease, or gastroparesis (particularly in a diabetic patient).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral/dental problems</span> - making eating physically uncomfortable.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use disorder</span> - reduced intake related to heavy or dependent drinking.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Grief/psychosocial stress</span> - a temporary but genuine cause following a significant loss or life change.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Early pregnancy</span> - nausea-related reduced appetite.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Food insecurity</span> - reduced intake due to limited access rather than true loss of appetite; needs a different response.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic/General Support</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Small, frequent meals</span> - often better tolerated than large meals when appetite is reduced.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Treating associated nausea</span> - an antiemetic can meaningfully improve intake where nausea is contributing.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Nutritional support/supplementation</span> - where malnutrition is present, involve a dietitian/nutrition service where available.</li>
      <li>General supportive measures should never delay identifying and treating the specific underlying cause, particularly where red flags are present.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tuberculosis</span> - standard six-month RHZE regimen under DOTS, per the National Tuberculosis and Leprosy Control Programme.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV/AIDS</span> - initiation or optimization of antiretroviral therapy, alongside nutritional support.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy</span> - referral to the relevant oncology service for staging and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - psychotherapy and/or antidepressants as clinically indicated, with safety planning where suicidal ideation is present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Adrenal insufficiency</span> - glucocorticoid replacement (hydrocortisone), with urgent IV hydrocortisone and fluid resuscitation if an Addisonian crisis is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic kidney disease/uraemia</span> - standard nephrology management of the underlying disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic liver disease</span> - management per the underlying cause, with nutritional input.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure</span> - optimization of standard heart failure therapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced</span> - review and adjust the causative medication where clinically appropriate.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal causes</span> - proton pump inhibitor for gastritis/PUD, prokinetics for gastroparesis where appropriate.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Food insecurity</span> - connect the patient with available social support services rather than treating it as a purely medical problem.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Loss of appetite, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">True anorexia versus early satiety versus pain/nausea-related avoidance, associated B symptoms and alarm features, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Psychiatric History</dt>
      <dd class="mt-0.5">HIV status, previous TB treatment, chronic kidney/liver/heart disease, previous depression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Recent steroid use/cessation, chemotherapy, opioids, metformin, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Food security, alcohol use, recent bereavement/psychosocial stress, family history of malignancy.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs including postural blood pressure, skin pigmentation, lymphadenopathy, abdominal/oral/cardiac findings, basic mental state assessment, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment/referral given, and follow-up plan.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not distinguishing true loss of appetite from early satiety or pain/nausea-related avoidance - these need different workups.</li>
    <li>Missing adrenal insufficiency because its presentation is vague and non-specific.</li>
    <li>Not actively screening for TB and HIV in a patient with unexplained loss of appetite.</li>
    <li>Not screening mood where reduced appetite and low interest coexist.</li>
    <li>Dismissing new appetite loss in an older patient without adequate workup for malignancy.</li>
    <li>Not checking postural blood pressure or electrolytes when adrenal insufficiency is a real possibility.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Distinguish true anorexia from early satiety and pain/nausea-related avoidance - each points to a different differential.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider adrenal insufficiency in unexplained appetite loss with fatigue, postural dizziness, and hyperpigmentation - it is rare but dangerous and easy to miss.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Actively screen for TB, HIV, and depression as a default in unexplained loss of appetite.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>New, unexplained appetite loss in an older patient needs a malignancy screen, not reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check postural blood pressure and U&E wherever adrenal insufficiency is a realistic possibility.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Endocrine Society - Clinical Practice Guideline on the Diagnosis and Treatment of Primary Adrenal Insufficiency.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Consolidated Guidelines on HIV Testing Services.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>


</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-general-body-weakness',
    title: 'General Body Weakness',
    category: 'Symptom Clerking',
    subCategory: 'General Constitutional Symptoms',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with General Body Weakness</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with General Body Weakness</h1>
    <p class="text-sm text-indigo-200">"Body weakness" is one of the commonest and vaguest complaints seen in Nigerian clinics, and the first job of the clerking is to work out what the patient actually means - generalized fatigue and low energy (usually anaemia, infection, or a metabolic/endocrine cause), or true motor weakness of the limbs (which can mean a stroke, Guillain-Barre syndrome, or another neurological emergency). Getting this distinction right early changes everything that follows. This guide focuses on the history and examination that separate the two, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">The Essential First Question: What Does "Weakness" Actually Mean?</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Is this a general lack of energy, tiredness, or feeling unwell overall - or is it an actual reduction in the strength of specific limbs or muscles? Ask the patient to describe exactly what they can no longer do (e.g. carry a bucket of water, climb stairs, lift an arm above the head) - this clarifies far more than the word "weakness" alone.</li>
      <li>If it is true motor weakness: which parts of the body are affected - one side, both legs, all four limbs, proximal (shoulders/hips) or distal (hands/feet)?</li>
      <li>When did it start - suddenly (over seconds to minutes) or gradually (over days to weeks)? Sudden onset of true weakness is a very different problem from a gradual decline in energy.</li>
      <li>Is it constant, or does it fluctuate - for example, worse later in the day or after repeated activity, and better with rest?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Anaemia-related:</span> breathlessness on exertion, palpitations, and noticeable pallor.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, night sweats, weight loss.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Metabolic/endocrine:</span> excessive thirst and urination (diabetes), cold intolerance and constipation (hypothyroidism), or heat intolerance and tremor (hyperthyroidism).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Neurological (ask explicitly):</span> sudden facial drooping, slurred speech, difficulty finding words, or a sudden one-sided limb weakness (raises stroke and needs immediate action); numbness or tingling; double vision, drooping eyelids, or difficulty swallowing/chewing that worsens through the day (raises myasthenia gravis); weakness that started in the legs and is climbing upwards, especially following a recent diarrhoeal or respiratory illness (raises Guillain-Barre syndrome).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Spinal:</span> back pain, saddle numbness, or new bladder/bowel difficulty alongside leg weakness (raises spinal cord compression).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Mood (ask directly and without judgement):</span> persistent low mood, loss of interest, poor sleep, or - where these are present - thoughts of self-harm. This is a standard safety question once depression is suspected, not an accusatory one.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal:</span> muscle cramps or aches, which can accompany electrolyte disturbance.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Menstrual history (in women):</span> heavy or prolonged periods are a very common cause of significant iron-deficiency anaemia locally.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> known genotype, and any features of a vaso-occlusive crisis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria exposure and TB/HIV risk:</span> bednet use, TB contact, HIV status/risk factors.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Diabetes:</span> known diagnosis and current medications - both uncontrolled hyperglycaemia and hypoglycaemia from treatment can present as weakness.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> diuretics (raise hypokalaemia), and statins (raise medication-induced myopathy).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent diarrhoeal or respiratory illness:</span> important to ask about specifically, since Guillain-Barre syndrome often follows an infection by one to three weeks.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Stroke risk factors:</span> known hypertension, diabetes, atrial fibrillation, or smoking.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Dietary history:</span> adequacy of intake, particularly of iron-rich foods.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Renal/cardiac/hepatic/thyroid history:</span> any known chronic disease affecting these systems.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>General appearance, vital signs, and temperature.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pallor</span> - check conjunctivae and palms; given how common anaemia is as a cause locally, this should never be skipped.</li>
      <li>Hydration status, and signs of thyroid disease (goitre, tremor, dry skin).</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Formal Neurological Examination (Do This Even If the History "Sounds Like" Fatigue)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Power testing</span> - formally grade power in all four limbs; do not rely on a general impression.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cranial nerves</span> - facial asymmetry, ptosis, or eye movement abnormalities.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Reflexes and sensation</span> - reduced or absent reflexes with ascending weakness supports Guillain-Barre syndrome.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gait</span> - where safely assessable.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Fatigability</span> - ask the patient to sustain upward gaze or repeatedly raise an arm; worsening weakness with repetition supports myasthenia gravis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Perianal sensation and anal tone</span> - where cord compression is suspected alongside leg weakness and back pain.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Cardiac examination - signs of heart failure or an arrhythmia.</li>
      <li>Abdominal examination - hepatosplenomegaly relevant to haemolysis or chronic disease.</li>
      <li>Basic mental state assessment - mood and affect, conducted sensitively.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden-onset one-sided weakness, facial droop, or speech disturbance</span> - a stroke until proven otherwise; act fast, since the window for time-critical treatment is short.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Rapidly progressive, ascending weakness</span> (Guillain-Barre syndrome) - carries a real risk of respiratory muscle involvement and needs monitoring of breathing and urgent neurology input, not reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Bladder or bowel dysfunction with leg weakness and back pain</span> - raises spinal cord compression/cauda equina syndrome, a surgical emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe or symptomatic hypoglycaemia</span> in a diabetic patient - needs immediate glucose correction.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe anaemia with haemodynamic compromise</span> - tachycardia, hypotension, or breathlessness at rest - needs urgent transfusion assessment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Bulbar symptoms</span> (difficulty swallowing or talking) alongside generalized weakness - raises aspiration risk and, in myasthenia, may signal an evolving crisis.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC and blood film</span> - given how commonly anaemia underlies this complaint locally, this should be a routine part of the workup.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - where fever accompanies the weakness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose</span> - in every diabetic patient with weakness, and as a general screen otherwise.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Electrolytes (U&E)</span> - particularly potassium, given its link to both weakness and diuretic use.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid function tests</span> - where suggestive symptoms are present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening and TB workup</span> - where suggested by the history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urgent CT/MRI brain</span> - wherever a stroke is suspected; this should not be delayed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Creatine kinase (CK)</span> - where medication-induced myopathy is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nerve conduction studies/EMG, lumbar puncture (looking for albuminocytological dissociation)</span> - where Guillain-Barre syndrome is suspected, alongside monitoring of respiratory function.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acetylcholine receptor antibodies</span> - where myasthenia gravis is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Spinal MRI</span> - where cord compression is suspected.</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anaemia</span> - the single commonest cause of "body weakness" locally, from malaria, hookworm, sickle cell disease, nutritional deficiency, or menorrhagia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute infection</span> - malaria, typhoid, or another febrile illness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chronic infection</span> - TB or HIV.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Electrolyte disturbance</span> - particularly hypokalaemia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypoglycaemia</span> - in a diabetic patient on insulin or a sulfonylurea.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid disease</span> - hypo- or hyperthyroidism.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Uncontrolled diabetes</span> - fatigue with polyuria and polydipsia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure or chronic kidney disease</span> - fatigue in advanced disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - fatigue with low mood and poor sleep.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stroke</span> - true focal motor weakness, sudden onset.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Guillain-Barre syndrome</span> - ascending symmetrical weakness, often post-infectious.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Myasthenia gravis</span> - fatigable weakness, ptosis, diplopia, worse through the day.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Spinal cord compression</span> - leg weakness with back pain and bladder/bowel involvement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced myopathy</span> - particularly statins.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Adrenal insufficiency</span> - fatigue, postural dizziness, hyperpigmentation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Dehydration/heat exhaustion</span> - relevant in a hot climate, particularly with poor fluid intake.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic/General Support</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rest and adequate hydration</span> - reasonable general measures while the underlying cause is identified.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Immediate glucose</span> - for confirmed or strongly suspected hypoglycaemia; this should never be delayed for confirmatory testing.</li>
      <li>General supportive measures should never delay identifying and treating the specific underlying cause, particularly where red flags are present.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anaemia</span> - iron/folate replacement for nutritional deficiency, deworming where relevant, treatment of the underlying cause (e.g. malaria, menorrhagia), and transfusion where severe or symptomatic.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria/typhoid</span> - as per the fever guide.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">TB/HIV</span> - standard treatment per national guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypokalaemia</span> - potassium replacement, with review of any contributing diuretic.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hypoglycaemia</span> - immediate glucose, with review of the diabetes medication regimen afterwards.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Thyroid disease</span> - treatment of the underlying thyroid condition.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Depression</span> - psychotherapy and/or antidepressants as clinically indicated, with safety planning where suicidal ideation is present.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stroke</span> - urgent stroke pathway (thrombolysis where eligible and available), stroke unit care, and secondary prevention.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Guillain-Barre syndrome</span> - IV immunoglobulin or plasmapheresis where available, with close monitoring of respiratory function.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Myasthenia gravis</span> - pyridostigmine and immunosuppressive therapy as indicated; urgent escalation if features of a myasthenic crisis develop.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Spinal cord compression</span> - urgent surgical decompression; not managed with medication alone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Medication-induced myopathy</span> - review and adjust the causative medication.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Adrenal insufficiency</span> - glucocorticoid replacement, with urgent IV hydrocortisone if crisis is suspected.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Generalized body weakness, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Clarify fatigue/malaise versus true motor weakness, onset, distribution, fluctuation, associated symptoms, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Diabetes, sickle cell disease, HIV status, known thyroid/cardiac/renal disease, stroke risk factors.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Diuretics, statins, insulin/sulfonylureas, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Dietary intake, menstrual history, recent preceding infection.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, pallor, formal power/reflex/sensory testing, cranial nerve exam, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not clarifying whether the patient means generalized fatigue or true motor weakness before proceeding.</li>
    <li>Skipping a formal neurological examination because the history "sounds like" simple tiredness.</li>
    <li>Not checking an FBC despite anaemia being the commonest cause of this complaint locally.</li>
    <li>Missing the ascending pattern of Guillain-Barre syndrome and its risk of respiratory failure.</li>
    <li>Missing myasthenia gravis because fatigability was not specifically tested for.</li>
    <li>Not checking blood glucose in a diabetic patient presenting with weakness.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always clarify what "weakness" means first - fatigue/malaise and true motor weakness need completely different workups.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Anaemia is the single commonest cause of "body weakness" locally - check an FBC routinely.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Sudden focal weakness or facial droop is a stroke until proven otherwise - act fast.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ascending weakness needs urgent recognition because of the real risk of respiratory failure.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check blood glucose in a diabetic patient presenting with weakness.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines on Haemoglobin Cutoffs to Define Anaemia and Its Severity.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Stroke Organization - Global Stroke Services Guidelines and Action Plan.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Neurology - Guideline on the Management of Guillain-Barre Syndrome.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Myasthenia Gravis Foundation of America - International Consensus Guidance for Management of Myasthenia Gravis.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>

 

</body>
</html>
    `
  },
  {
    id: 'symptom-clerking-left-upper-quadrant-pain',
    title: 'Left Upper Quadrant Pain',
    category: 'Symptom Clerking',
    subCategory: 'Abdominal',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Left Upper Quadrant Pain</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Left Upper Quadrant Pain</h1>
    <p class="text-sm text-indigo-200">Left upper quadrant pain points first towards the spleen, and locally that means thinking about malaria-associated splenomegaly, sickle cell-related splenic sequestration, and the real risk of splenic rupture - sometimes from trauma that seemed too minor to mention. This guide focuses on the history and examination that clarify whether the spleen (or another structure) is behind the pain, and how urgently that needs acting on, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and was the onset sudden or gradual? (Sudden-onset severe pain raises rupture or infarction; a gradual, dragging ache is more typical of a slowly enlarging spleen.)</li>
      <li>What is the character - a constant dragging/fullness sensation, or sharp and severe?</li>
      <li>Does it radiate to the tip of the left shoulder? (This - Kehr's sign - suggests irritation of the diaphragm from splenic pathology, including bleeding, and should never be dismissed as unrelated shoulder pain.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Has there been any recent trauma to the abdomen or left side of the chest, even if it seemed minor at the time</span> - a fall, a blow during play or contact sport, or a road traffic incident? Splenic rupture can present with a delay of hours to days after the original injury, so this must be asked about directly rather than assumed to be irrelevant just because it happened a few days ago.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General/circulatory:</span> dizziness, fainting, or feeling generally unwell - any of these alongside sudden LUQ pain raises internal bleeding.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, night sweats, and weight loss - relevant to malaria, TB, or lymphoma.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Anaemia-related:</span> breathlessness, palpitations, and fatigue.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> early satiety or a feeling of fullness (raises significant splenomegaly), nausea, or a change in bowel habit.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Haematological:</span> easy bruising or bleeding, which can reflect hypersplenism (an enlarged spleen trapping platelets).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal (in known sickle cell patients):</span> bone or joint pain elsewhere, which may accompany a broader crisis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> cough or pleuritic pain - relevant if a left lower lobe pneumonia is being considered.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> known genotype - this is essential. In a child, a rapidly enlarging spleen with pallor and lethargy is a splenic sequestration crisis until proven otherwise, a paediatric emergency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria:</span> recent or repeated episodes, and any known longstanding splenic enlargement (raises hyperreactive malarial splenomegaly, sometimes called tropical splenomegaly syndrome, which develops after chronic or repeated malaria exposure).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB contact and HIV status:</span> relevant to splenic TB, which is under-recognized.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Trauma history:</span> as above - ask specifically and do not let the patient minimize it.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history:</span> haemolytic disease or a known blood disorder.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use and NSAID use:</span> relevant to pancreatitis and gastritis/PUD respectively, both of which can present in this region.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Contact sports or heavy physical activity:</span> where malaria-associated or other splenomegaly is already known, this raises the risk of spontaneous rupture and is worth discussing directly.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, pale, or in shock? Any suggestion of haemodynamic instability after abdominal trauma should be treated as active bleeding until proven otherwise.</li>
      <li>Heart rate and blood pressure, including a check for a postural drop.</li>
      <li>Temperature - fever alongside splenic enlargement raises malaria, an abscess, or TB.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Palpate the spleen carefully</span>, starting from the right iliac fossa and moving diagonally towards the left costal margin; note the size in centimetres below the costal margin.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Kehr's sign</span> - pain referred to the tip of the left shoulder on palpation of the LUQ - supports splenic irritation, including from bleeding.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Signs of peritonism or distension</span> - raises free intraperitoneal blood following rupture.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatomegaly and lymphadenopathy</span> - relevant if malaria, lymphoma, or a myeloproliferative disorder is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Jaundice and pallor</span> - relevant to haemolysis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Bruising or petechiae</span> - support hypersplenism-related thrombocytopenia.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected splenic rupture</span> - LUQ pain (with or without Kehr's sign) following trauma, with tachycardia, hypotension, or distension - a surgical emergency needing urgent resuscitation and surgical/interventional radiology input.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Acute splenic sequestration crisis in a child with sickle cell disease</span> - rapidly enlarging spleen, worsening pallor, and falling haemoglobin, with risk of hypovolaemic shock; a paediatric emergency needing urgent transfusion.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Massive splenomegaly with a history of recent trauma or heavy physical activity</span> - a genuinely enlarged spleen is at higher risk of spontaneous or minor-trauma-related rupture, and this should be discussed with the patient directly.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Splenomegaly with unexplained fever, night sweats, and weight loss</span> - needs active screening for TB and lymphoma rather than reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe symptomatic anaemia from acute sequestration or haemolysis</span> - needs prompt transfusion assessment.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - looking for anaemia and thrombocytopenia (hypersplenism), and to establish a baseline for comparison if a sequestration crisis is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - as a routine part of the workup locally.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Haemoglobin genotype</span> - if sickle cell disease is suspected but not previously confirmed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal ultrasound</span> - assesses spleen size, and can detect free intraperitoneal fluid suggesting bleeding; a good first-line and widely accessible investigation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">CT abdomen</span> - where trauma and rupture are strongly suspected and the patient is stable enough to be scanned.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Group and crossmatch</span> - where bleeding or rupture is a possibility.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs</span> - as part of a general workup, particularly if a hepatosplenic process is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peripheral blood film and LDH</span> - where haemolysis, leukaemia, or lymphoma is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB/GeneXpert and chest radiograph</span> - where splenic TB is suspected.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria-associated splenomegaly</span> - acute enlargement during an episode, or chronic enlargement from hyperreactive malarial splenomegaly with repeated exposure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic sequestration crisis</span> - in a child with sickle cell disease; a paediatric emergency.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic rupture</span> - traumatic, or spontaneous in the context of a significantly enlarged spleen.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic infarct</span> - sudden pain, sometimes in a patient with a haemoglobinopathy or hypercoagulable state.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic abscess</span> - fever with tender splenomegaly.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic tuberculosis</span> - part of disseminated TB, often under-recognized.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphoma</span> - splenomegaly with lymphadenopathy, fever, and weight loss.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Myeloproliferative disorder</span> - massive splenomegaly, sometimes with abnormal blood counts.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastritis/peptic ulcer disease</span> - can present with left-sided upper abdominal discomfort.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute pancreatitis (tail involvement)</span> - epigastric pain radiating to the left side and back.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Left renal colic/pyelonephritis</span> - loin pain that can be mistaken for a splenic source.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Left lower lobe pneumonia</span> - referred pain with respiratory symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Constipation/splenic flexure syndrome</span> - trapped gas causing discomfort in this region.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Analgesia</span> - appropriate for comfort while the underlying cause is being identified.</li>
      <li>Symptomatic relief should never delay urgent resuscitation or transfusion where rupture or sequestration is suspected.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria-associated splenomegaly</span> - ACT/IV artesunate per severity; hyperreactive malarial splenomegaly may benefit from prolonged antimalarial prophylaxis per specialist guidance.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic sequestration crisis</span> - urgent blood transfusion, close monitoring, and haematology input; splenectomy may be considered after recurrent episodes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic rupture</span> - haemodynamic stabilization with urgent surgical (splenectomy) or interventional radiology (embolization) management, depending on stability and local expertise; conservative management may be possible in select stable, minor cases under close monitoring.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic abscess</span> - IV antibiotics with drainage or splenectomy as indicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splenic TB</span> - standard anti-TB therapy per national guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lymphoma/myeloproliferative disorder</span> - haematology/oncology referral for staging and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastritis/PUD</span> - proton pump inhibitor, with H. pylori eradication if confirmed.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pancreatitis</span> - supportive care as per the epigastric pain guide.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Left renal colic/pyelonephritis</span> - analgesia/antibiotics as appropriate.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Left upper quadrant pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, character, radiation (including shoulder tip), trauma history, associated symptoms, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Sickle cell disease, known splenomegaly, HIV/TB status.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">NSAID use, alcohol use, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Family history of haemolytic disease, contact sports/physical activity.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, spleen size and tenderness, Kehr's sign, pallor/jaundice, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not asking about trauma (even minor) given the risk of delayed splenic rupture.</li>
    <li>Not recognizing splenic sequestration crisis in a sickle cell child as an emergency needing urgent transfusion.</li>
    <li>Underestimating spleen size on palpation, or not palpating carefully at all.</li>
    <li>Missing the significance of Kehr's sign (left shoulder tip pain).</li>
    <li>Not considering TB or lymphoma in unexplained splenomegaly with constitutional symptoms.</li>
    <li>Not counselling a patient with known massive splenomegaly about the risk of rupture from contact sports or heavy activity.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always ask about trauma, even seemingly minor, given the real risk of delayed splenic rupture.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Splenic sequestration crisis in a sickle cell child is a paediatric emergency - recognize it fast and transfuse urgently.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Malaria is the commonest cause of splenomegaly locally, but a genuinely massive spleen carries a real rupture risk worth discussing openly.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Kehr's sign (left shoulder tip pain) points to splenic irritation, including bleeding - take it seriously.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Splenomegaly with B symptoms needs active TB/lymphoma screening, not reassurance.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Society of Hematology - Guidelines on the Management of Sickle Cell Disease.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Treatment of Malaria.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Association for the Surgery of Trauma - Organ Injury Scaling for the Spleen.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>
 

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-right-iliac-fossa-pain',
    title: 'Right Iliac Fossa Pain',
    category: 'Symptom Clerking',
    subCategory: 'Abdominal',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Right Iliac Fossa Pain</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Right Iliac Fossa Pain</h1>
    <p class="text-sm text-indigo-200">Appendicitis is the classic teaching answer for right iliac fossa pain, but locally the differential must also seriously include ileocecal tuberculosis, which can mimic appendicitis closely, especially in a more chronic or atypical presentation - and in any woman of reproductive age, ectopic pregnancy must be actively excluded rather than assumed away. This guide focuses on the history and examination that separate these possibilities, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and has it moved or changed location since then? (Pain that started around the umbilicus and has migrated to the right iliac fossa is the classic pattern for appendicitis, though far from universal.)</li>
      <li>How long has it lasted - hours (acute, raising appendicitis or a gynaecological emergency) or weeks to months (raising a more chronic process such as ileocecal TB or Crohn's disease)?</li>
      <li>What is the character, and how severe is it?</li>
      <li>What makes it worse - movement, coughing, or walking (suggests peritoneal irritation)?</li>
      <li>Has this happened before? Recurrent, self-resolving episodes point away from a first presentation of appendicitis and towards a chronic or recurrent process.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> loss of appetite, nausea, vomiting, and any change in bowel habit (diarrhoea or constipation).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional (ask explicitly for chronic presentations):</span> fever, night sweats, and weight loss - these raise TB, Crohn's disease, or malignancy over straightforward appendicitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> dysuria, frequency, or loin pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gynaecological (in women):</span> last menstrual period, any missed period, abnormal vaginal bleeding or discharge, and shoulder-tip pain (can accompany intra-abdominal bleeding).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genital (in men):</span> sudden testicular pain or swelling - important to ask directly, since testicular torsion can present with associated lower abdominal pain.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy/ectopic risk:</span> sexually active? Last menstrual period? Any previous ectopic pregnancy, pelvic infection, tubal surgery, or an intrauterine device in place? This must be asked in every woman of reproductive age with RIF pain, regardless of how classic the presentation looks for appendicitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB contact and HIV status:</span> essential given how closely ileocecal TB can mimic appendicitis, particularly with a more chronic course, constitutional symptoms, or a palpable mass.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sexual history (PID):</span> multiple partners, discharge, or previous sexually transmitted infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent viral illness (in children):</span> raises mesenteric adenitis as a self-limiting cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history of inflammatory bowel disease:</span> relevant if Crohn's disease is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Known hernia:</span> raises the possibility of a strangulated inguinal hernia presenting with RIF pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent febrile illness:</span> relevant if typhoid with ileal involvement is being considered.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or in obvious distress?</li>
      <li>Heart rate and blood pressure, including a check for a postural drop - tachycardia and hypotension raise intra-abdominal bleeding (ruptured ectopic) or perforation with sepsis.</li>
      <li>Temperature - a low-grade fever supports appendicitis; a more prolonged or higher fever pattern with constitutional symptoms raises TB or another chronic infective process.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">McBurney's point tenderness</span> - classically supports appendicitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rovsing's sign, psoas sign, and obturator sign</span> - further supportive findings for an inflamed appendix.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rebound tenderness and guarding</span> - raise peritonism, whether from appendicitis, perforation, or another cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">A palpable mass in the right iliac fossa</span> - can reflect an appendiceal mass/abscess, but should also raise ileocecal TB or a caecal malignancy, particularly with a more chronic history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hernial orifices</span> - always examine, particularly if a hernia is in the differential.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Signs of wasting</span> - support a chronic process such as TB, Crohn's disease, or malignancy over acute appendicitis.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic/vaginal examination</span> - where a gynaecological cause is suspected, with appropriate consent and a chaperone.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular examination</span> - in any male with lower abdominal or groin pain, to exclude torsion.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Digital rectal examination</span> - where clinically indicated.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected ectopic pregnancy</span> - RIF pain with a missed period, positive pregnancy test, vaginal bleeding, or syncope; needs urgent gynaecological assessment and must be excluded before assuming appendicitis.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden, severe testicular pain</span> - testicular torsion is a time-critical surgical emergency; viability falls sharply after about 6 hours.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of a perforated appendix/generalized peritonitis</span> - a rigid abdomen, high fever, and tachycardia; needs urgent surgical referral.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden severe pain with a palpable adnexal mass in a woman</span> - raises ovarian torsion, a time-critical surgical emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A chronic RIF mass with constitutional symptoms</span> - needs active workup for ileocecal TB, Crohn's disease, or malignancy, including biopsy where feasible, rather than proceeding straight to major bowel resection based on appearance alone.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urine or serum pregnancy test</span> - essential in every woman of reproductive age with RIF pain, regardless of how classic the presentation looks for appendicitis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - leukocytosis supports an acute infective/inflammatory cause.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - where fever accompanies the pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinalysis</span> - for UTI, or blood suggesting a ureteric source.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal/pelvic ultrasound</span> - for appendicitis, ovarian pathology, or to confirm and locate a pregnancy (essential if ectopic is suspected).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sputum AFB/GeneXpert and chest radiograph</span> - where TB is suspected, given how commonly ileocecal disease coexists with pulmonary involvement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">CT abdomen/pelvis</span> - where the diagnosis remains unclear on clinical grounds and ultrasound.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Colonoscopy with biopsy</span> - where ileocecal TB, Crohn's disease, or malignancy is suspected on chronic presentation; histology is important since these can look strikingly similar without it.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood culture</span> - before antibiotics, where typhoid or another bacterial cause is suspected.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute appendicitis</span> - the classic diagnosis; periumbilical pain migrating to the RIF, anorexia, low-grade fever.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ileocecal tuberculosis</span> - a more chronic course, constitutional symptoms, and sometimes a palpable mass; closely mimics appendicitis and needs active consideration locally.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ectopic pregnancy</span> - missed period, positive pregnancy test, unilateral pain, vaginal bleeding, possible syncope.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ovarian cyst rupture or torsion</span> - sudden onset pain, sometimes with a palpable adnexal mass.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease/tubo-ovarian abscess</span> - lower abdominal pain, discharge, cervical motion tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Mesenteric adenitis</span> - particularly in children, often following a recent viral illness; self-limiting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Meckel's diverticulitis</span> - can mimic appendicitis closely, particularly in children.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Crohn's disease (terminal ileitis)</span> - chronic or recurrent RIF pain, sometimes with diarrhoea and weight loss.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid fever with ileal involvement</span> - preceding febrile illness, with risk of perforation in more advanced disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Right ureteric colic</span> - loin-to-groin pain, haematuria.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular torsion</span> - sudden severe scrotal pain with associated lower abdominal pain in a male patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Strangulated inguinal hernia</span> - a tender, irreducible groin swelling.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Caecal malignancy</span> - consider in an older patient with a more chronic history, particularly with anaemia or altered bowel habit.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Analgesia</span> - given in a stepwise fashion; adequate analgesia does not mask a surgical abdomen and should not be withheld while a diagnosis is being reached.</li>
      <li>Keep the patient nil by mouth if a surgical cause is suspected or being actively worked up.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Appendicitis</span> - surgical referral for appendicectomy; antibiotics as an adjunct or, in select uncomplicated cases, as sole treatment per current surgical protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ileocecal TB</span> - standard anti-TB therapy per national guidelines; ideally confirmed histologically or by other appropriate testing before committing to major bowel resection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ectopic pregnancy</span> - urgent gynaecological/surgical management; may be medical (methotrexate) in carefully selected, stable cases, or surgical where ruptured or unstable.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ovarian torsion</span> - urgent surgical detorsion, ideally within hours to preserve ovarian viability.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - antibiotic combination per local/WHO STI treatment guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Mesenteric adenitis</span> - supportive care; this is typically self-limiting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Crohn's disease</span> - gastroenterology referral for disease-specific therapy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Typhoid</span> - antibiotics as per the fever guide; urgent surgical repair if perforated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular torsion</span> - immediate surgical exploration and detorsion.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Strangulated hernia</span> - urgent surgical repair.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Right iliac fossa pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, migration pattern, character, duration (acute versus chronic), associated symptoms, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">HIV/TB status, previous ectopic pregnancy, known hernia, family history of IBD.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Known allergies, current medications.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Sexual history where relevant, TB contact.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, specific abdominal signs (McBurney's, Rovsing's), any palpable mass, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not performing a pregnancy test in a woman of reproductive age with RIF pain.</li>
    <li>Assuming appendicitis in every case without considering ileocecal TB, particularly with a more chronic history.</li>
    <li>Proceeding straight to major bowel resection for a RIF mass without attempting histological confirmation where feasible.</li>
    <li>Missing testicular torsion by not examining the testes in a male with RIF pain.</li>
    <li>Withholding analgesia unnecessarily while awaiting a surgical opinion.</li>
    <li>Forgetting to examine the hernial orifices where relevant.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check a pregnancy test in a woman of reproductive age with RIF pain, and actively consider ectopic pregnancy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider ileocecal TB in a chronic or atypical presentation mimicking appendicitis - it is a genuine, common local mimic.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Sudden testicular pain with RIF pain means torsion until excluded - it is time-critical.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Classic migratory pain supports appendicitis, but atypical presentations are common - don't rely on this pattern alone.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Seek histological confirmation where feasible for a chronic RIF mass before committing to major surgery.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Diagnosis and Management of Abdominal Tuberculosis.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme (Nigeria) - National Guidelines for TB Diagnosis and Treatment.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Green-top Guideline on Ectopic Pregnancy and Miscarriage.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Management of Sexually Transmitted Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>
 

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-left-iliac-fossa-pain',
    title: 'Left Iliac Fossa Pain',
    category: 'Symptom Clerking',
    subCategory: 'Abdominal',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Left Iliac Fossa Pain</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Left Iliac Fossa Pain</h1>
    <p class="text-sm text-indigo-200">In an older patient with marked abdominal distension and absolute constipation, sigmoid volvulus deserves to be near the top of the list here - it is a genuinely common cause of bowel obstruction locally and is treatable if recognized in time, but can perforate if missed. Ectopic pregnancy must still be actively excluded in any woman of reproductive age. This guide focuses on the history and examination that separate these possibilities, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and was the onset sudden or gradual?</li>
      <li>What is the character - colicky (comes in waves, suggests obstruction), or a constant ache (more typical of an inflammatory process such as diverticulitis)?</li>
      <li>Is there marked abdominal swelling or distension alongside the pain?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Has the patient completely stopped passing both stool and flatus?</span> Absolute constipation alongside distension is an important combination that should raise bowel obstruction, including sigmoid volvulus, rather than simple constipation.</li>
      <li>Has anything like this happened before and settled on its own? Recurrent episodes of severe bloating that resolve spontaneously can be an early warning sign preceding a full volvulus.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> nausea, vomiting, diarrhoea, blood or mucus in the stool, and any change in bowel habit over recent weeks or months.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, unintentional weight loss - relevant to diverticulitis, malignancy, or inflammatory bowel disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genitourinary:</span> dysuria, frequency, or loin pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gynaecological (in women):</span> last menstrual period, any missed period, abnormal vaginal bleeding or discharge, or shoulder-tip pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Genital (in men):</span> sudden testicular pain or swelling.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Age and bowel habit:</span> older patients with a history of chronic constipation or regular laxative use, and those with a high-fibre diet leading to a long, redundant sigmoid colon, are at greater risk of sigmoid volvulus - a genuinely common cause of bowel obstruction in this setting.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pregnancy/ectopic risk:</span> sexually active? Last menstrual period? Any previous ectopic pregnancy, pelvic infection, or tubal surgery? This must be asked in every woman of reproductive age with LIF pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sexual history (PID):</span> multiple partners, discharge, or previous sexually transmitted infection.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB contact and HIV status:</span> relevant if a psoas abscess or another TB-related process is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history:</span> colorectal cancer or inflammatory bowel disease in first-degree relatives.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Known hernia:</span> raises the possibility of a strangulated inguinal hernia presenting with LIF pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Vascular risk factors:</span> relevant in an older patient where ischaemic colitis is a possibility.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or in obvious distress? Marked, sometimes asymmetric abdominal distension is a notable feature of sigmoid volvulus.</li>
      <li>Heart rate and blood pressure, including a check for a postural drop - tachycardia and hypotension raise concern for bowel ischaemia/perforation or intra-abdominal bleeding.</li>
      <li>Temperature - fever raises an inflammatory or infective cause, or complications of obstruction such as ischaemia or perforation.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Inspection:</span> degree and symmetry of distension.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Palpation:</span> tenderness by location, guarding, or rigidity (raises peritonism from ischaemia or perforation).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Percussion:</span> a tympanic, resonant abdomen supports significant gas distension, as seen in volvulus/obstruction.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Auscultation:</span> high-pitched, tinkling bowel sounds support obstruction; absent bowel sounds raise ileus or peritonism.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Digital rectal examination</span> - an empty rectum can support high obstruction/volvulus; blood on the glove raises malignancy or inflammatory bowel disease. This is an important step that is easy to skip.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hernial orifices</span> - always examine, particularly if obstruction is suspected.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic/vaginal examination</span> - where a gynaecological cause is suspected, with appropriate consent and a chaperone.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular examination</span> - in any male with lower abdominal or groin pain.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected sigmoid volvulus</span> - marked distension, absolute constipation, and a tympanic abdomen, particularly in an older patient; needs urgent imaging and decompression, since a delay risks strangulation and perforation.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Peritonism with distension and fever</span> - raises bowel ischaemia or perforation, a surgical emergency needing urgent assessment rather than further trials of conservative management.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected ectopic pregnancy</span> - LIF pain with a missed period, positive pregnancy test, vaginal bleeding, or syncope; needs urgent gynaecological assessment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden severe pain with a palpable adnexal mass in a woman</span> - raises ovarian torsion, a time-critical surgical emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden, severe testicular pain</span> - testicular torsion is time-critical.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Erect chest and abdominal radiograph</span> - a key first investigation where obstruction is suspected; sigmoid volvulus classically shows a grossly dilated loop of sigmoid colon, sometimes described as a "coffee bean" sign.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urine or serum pregnancy test</span> - essential in every woman of reproductive age with LIF pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - leukocytosis supports an infective/inflammatory or ischaemic process.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal/pelvic ultrasound</span> - for gynaecological causes, or to confirm and locate a pregnancy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">CT abdomen/pelvis</span> - where the diagnosis remains unclear, or complications of volvulus/diverticulitis (ischaemia, perforation, abscess) are suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Urinalysis</span> - for UTI, or blood suggesting a ureteric source.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Colonoscopy</span> - where malignancy or inflammatory bowel disease is suspected, once any acute obstruction/inflammation has been appropriately managed first.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sigmoid volvulus</span> - marked distension, absolute constipation, and colicky pain, particularly in an older patient; an important and common local cause of bowel obstruction.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Simple constipation/faecal impaction</span> - a much more common and benign cause, but should be distinguished from volvulus by the degree of distension and whether flatus is still passing.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diverticulitis</span> - constant LIF pain, fever, and altered bowel habit.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ectopic pregnancy</span> - missed period, positive pregnancy test, unilateral pain, vaginal bleeding.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease/tubo-ovarian abscess</span> - lower abdominal pain, discharge, cervical motion tenderness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ovarian cyst rupture or torsion</span> - sudden onset pain, sometimes with a palpable adnexal mass.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Left ureteric colic</span> - loin-to-groin pain, haematuria.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Left-sided colonic malignancy</span> - altered bowel habit, weight loss, anaemia, particularly in an older patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ulcerative colitis</span> - bloody diarrhoea with lower abdominal pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Strangulated inguinal hernia</span> - a tender, irreducible groin swelling.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular torsion</span> - sudden severe scrotal pain with associated lower abdominal pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Psoas abscess</span> - including a TB-related cause, with pain worse on hip extension.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ischaemic colitis</span> - in an older patient with vascular risk factors.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Analgesia</span> - appropriate for comfort while the underlying cause is being identified; adequate analgesia does not mask a surgical abdomen.</li>
      <li>Keep the patient nil by mouth if obstruction is suspected or being actively worked up.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sigmoid volvulus</span> - urgent sigmoidoscopic detorsion/decompression where the bowel appears viable and there is no peritonism, followed by definitive surgical resection given the high rate of recurrence after decompression alone; emergency surgery where there is evidence of ischaemia or perforation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Simple constipation</span> - laxatives and, where needed, manual disimpaction, alongside dietary and fluid advice.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Diverticulitis</span> - antibiotics and bowel rest for uncomplicated disease; surgical referral for an abscess or perforation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ectopic pregnancy</span> - urgent gynaecological/surgical management as clinically appropriate.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic inflammatory disease</span> - antibiotic combination per local/WHO STI treatment guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ovarian torsion</span> - urgent surgical detorsion.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Colonic malignancy</span> - referral to the relevant oncology/surgical service for staging and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ulcerative colitis</span> - 5-ASA compounds and/or corticosteroids for a flare, with gastroenterology referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Testicular torsion</span> - immediate surgical exploration and detorsion.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Left iliac fossa pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, character, distension, obstipation status, associated symptoms, directed risk history, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Chronic constipation, previous volvulus episodes, known hernia, previous ectopic pregnancy.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Laxative use, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Dietary pattern, sexual history where relevant, family history of colorectal cancer/IBD.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, degree of distension, percussion note, bowel sounds, digital rectal exam findings, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not considering sigmoid volvulus in an older patient with marked distension and absolute constipation.</li>
    <li>Missing the classic radiographic appearance of volvulus on a plain abdominal film.</li>
    <li>Not performing a pregnancy test in a woman of reproductive age with LIF pain.</li>
    <li>Skipping the digital rectal examination.</li>
    <li>Delaying surgical referral for peritonism or suspected bowel ischaemia.</li>
    <li>Attempting decompression alone for volvulus without arranging definitive surgery, given the high recurrence rate.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider sigmoid volvulus in older patients with marked distension and absolute constipation - a treatable but genuinely common local emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Learn to recognize the classic dilated-loop appearance of volvulus on plain abdominal radiograph.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always check a pregnancy test in a woman of reproductive age with LIF pain.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Peritonism with distension needs urgent surgical assessment for possible ischaemia or perforation.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Digital rectal examination is an important, easy-to-skip part of assessing this presentation.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Society of Emergency Surgery - Guidelines for the Management of Sigmoid Volvulus.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Green-top Guideline on Ectopic Pregnancy and Miscarriage.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Management of Sexually Transmitted Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-right-upper-quadrant-pain',
    title: 'Right Upper Quadrant Pain',
    category: 'Symptom Clerking',
    subCategory: 'Abdominal',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Right Upper Quadrant Pain</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Right Upper Quadrant Pain</h1>
    <p class="text-sm text-indigo-200">Right upper quadrant pain sits at the crossroads of the biliary tree, the liver, and occasionally the chest, pelvis, and kidney. Locally, this differential leans more heavily on viral hepatitis and amoebic liver abscess than it might elsewhere, and on hepatocellular carcinoma given the hepatitis B burden. This guide focuses on the history and examination that clarify which of these is actually driving the pain, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and how long has it lasted?</li>
      <li>What is the character - colicky (comes and goes in waves), or a constant, severe ache?</li>
      <li>Does it relate to fatty meals?</li>
      <li>Does it radiate anywhere - particularly to the right shoulder or scapula (classic for a biliary cause)?</li>
      <li>Is it associated with deep breathing (raises a pleuritic/subphrenic component)?</li>
      <li>Has this happened before, and if so, was a cause ever found?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, rigors, night sweats, and weight loss.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatobiliary:</span> jaundice, pale stool, dark urine, and generalized itching.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> nausea, vomiting, abdominal distension, or a history of diarrhoea (including bloody diarrhoea), which is relevant to amoebic disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> cough or pleuritic chest pain - relevant if a lower lobe pneumonia or subphrenic process is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gynaecological (in sexually active women):</span> pelvic pain, abnormal discharge, or pain during intercourse - relevant to Fitz-Hugh-Curtis syndrome (perihepatitis associated with pelvic inflammatory disease).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac:</span> breathlessness, orthopnoea, or leg swelling - relevant to congestive hepatomegaly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal (in known sickle cell patients):</span> bone/joint pain elsewhere, which may accompany a hepatic crisis.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatitis B/C risk factors:</span> blood transfusion history, unsafe injections, or known status - hepatitis B is a significant local cause of chronic liver disease and hepatocellular carcinoma.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent diarrhoeal illness:</span> particularly bloody diarrhoea, which raises the possibility of amoebic disease progressing to a liver abscess.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> known genotype, given the risk of hepatic crisis or sequestration.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Known gallstones:</span> any prior diagnosis or family history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> relevant to liver disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Herbal remedies ("agbo") or other unregulated preparations:</span> ask specifically, given their recognized potential for hepatotoxicity.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sexual history (in women):</span> relevant if Fitz-Hugh-Curtis syndrome is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Known heart failure/rheumatic heart disease:</span> raises congestive hepatomegaly as a cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria exposure:</span> relevant to malaria-associated hepatomegaly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history:</span> liver disease or hepatocellular carcinoma.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, or septic/unwell?</li>
      <li>Temperature, heart rate, and blood pressure - fever with tachycardia and hypotension raises cholangitis or a liver abscess progressing to sepsis.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Murphy's sign</span> - supports acute cholecystitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatomegaly</span> - assess whether smooth and tender (supports hepatitis, congestion, or abscess) or hard/nodular (raises malignancy or cirrhosis).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Point tenderness directly over the liver</span> - supports a liver abscess, particularly in a patient with a compatible history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">A palpable, non-tender gallbladder with jaundice (Courvoisier's sign)</span> - suggests malignant biliary obstruction rather than gallstones, since a stone-diseased gallbladder is usually too scarred to distend.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Ascites, splenomegaly, spider naevi, or palmar erythema</span> - signs of chronic liver disease.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Jaundice</span> - check sclerae directly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest examination</span> - where a lower lobe pneumonia or subphrenic process is suspected.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac examination</span> - raised JVP and peripheral oedema support congestive hepatomegaly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pelvic examination (in women, where indicated)</span> - cervical motion tenderness or discharge supports pelvic inflammatory disease/Fitz-Hugh-Curtis syndrome.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Level of consciousness</span> - any confusion alongside jaundice raises hepatic encephalopathy, a marker of severe liver dysfunction.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Charcot's triad</span> (fever/rigors, jaundice, RUQ pain) - ascending cholangitis; needs urgent IV antibiotics and biliary decompression, not delay.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Reynolds' pentad</span> (Charcot's triad plus hypotension and altered mental status) - suppurative cholangitis, a severe, life-threatening emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Courvoisier's sign</span> (painless jaundice with a palpable gallbladder) - suggests malignant biliary obstruction and needs urgent imaging, not reassurance.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Suspected liver abscess</span> - fever with tender hepatomegaly, particularly in the context of preceding diarrhoeal illness; needs prompt imaging and drainage where indicated.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of decompensated liver disease</span> (encephalopathy, ascites, coagulopathy) - a marker of severe liver dysfunction needing urgent specialist input.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Acute hepatic crisis or sequestration in a known sickle cell patient</span> - can progress rapidly and needs prompt haematology involvement.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal ultrasound</span> - the first-line investigation for RUQ pain; identifies gallstones, biliary dilation, liver abscess, and hepatomegaly, and is widely accessible.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - leukocytosis supports an infective/inflammatory cause; also assesses for anaemia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs</span> - pattern of derangement helps distinguish an obstructive (biliary) from a hepatocellular (hepatitis) process.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood cultures</span> - before antibiotics, where cholangitis or another bacteraemic source is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatitis B and C serology</span> - given the local burden and relevance to chronic liver disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stool microscopy and/or amoebic serology</span> - where amoebic liver abscess is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Malaria RDT/microscopy</span> - where fever accompanies hepatomegaly.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Alpha-fetoprotein (AFP)</span> - where hepatocellular carcinoma is suspected, alongside further imaging.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">CT/MRI</span> - for further characterization of a mass or to plan drainage/intervention.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest radiograph</span> - where a right lower lobe pneumonia is suspected.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Biliary colic</span> - colicky pain related to fatty meals, resolving between episodes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute cholecystitis</span> - constant pain, fever, positive Murphy's sign.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ascending cholangitis</span> - Charcot's triad, needing urgent treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Viral hepatitis</span> - RUQ discomfort with jaundice, dark urine, pale stool.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Amoebic liver abscess</span> - fever with tender hepatomegaly, often with a preceding diarrhoeal illness.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pyogenic liver abscess</span> - similarly presenting, from a bacterial source.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Congestive hepatomegaly</span> - tender, smooth hepatomegaly with signs of heart failure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell hepatic crisis/sequestration</span> - in a known sickle cell patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatocellular carcinoma</span> - hard, nodular hepatomegaly, weight loss, often in a patient with known chronic hepatitis B.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Fitz-Hugh-Curtis syndrome (perihepatitis)</span> - RUQ pain in a sexually active woman with pelvic symptoms, associated with pelvic inflammatory disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Right lower lobe pneumonia</span> - referred pain with respiratory symptoms.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peptic ulcer disease</span> - particularly a duodenal ulcer, which can present with right-sided upper abdominal pain.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Right renal colic/pyelonephritis</span> - loin pain that can be mistaken for a hepatobiliary source.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Analgesia</span> - appropriate for comfort while the underlying cause is being identified.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Antiemetics</span> - where nausea/vomiting is prominent.</li>
      <li>Symptomatic relief should never delay imaging or antibiotics where cholangitis, an abscess, or sepsis is suspected.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Biliary colic</span> - analgesia, with elective cholecystectomy referral.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute cholecystitis</span> - IV antibiotics, analgesia, and surgical referral for cholecystectomy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ascending cholangitis</span> - urgent IV antibiotics and biliary decompression (e.g. ERCP) without delay.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Viral hepatitis</span> - supportive care for acute disease; antiviral therapy for chronic hepatitis B/C where indicated.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Amoebic liver abscess</span> - metronidazole (or tinidazole), followed by a luminal agent to clear intestinal colonization; aspiration where the abscess is large or at risk of rupture.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pyogenic liver abscess</span> - IV antibiotics with drainage, guided by culture where possible.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Congestive hepatomegaly</span> - treatment of the underlying heart failure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell hepatic crisis</span> - supportive care, hydration, and haematology input; exchange transfusion in severe cases.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatocellular carcinoma</span> - referral to the relevant oncology/surgical service for staging and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Fitz-Hugh-Curtis syndrome</span> - antibiotic combination per WHO/local STI treatment guidelines, covering gonococcal and chlamydial infection.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Right upper quadrant pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, character, relation to meals, radiation, associated symptoms, directed risk history, treatment already tried, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Sickle cell disease, known gallstones, hepatitis B/C status, heart failure.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Herbal remedies, alcohol use, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Sexual history where relevant, family history of liver disease/HCC.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, abdominal findings (Murphy's sign, hepatomegaly character), jaundice, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not obtaining an ultrasound as the first-line investigation.</li>
    <li>Missing cholangitis by not recognizing Charcot's triad promptly.</li>
    <li>Not considering amoebic liver abscess, particularly with a preceding diarrhoeal illness.</li>
    <li>Not checking hepatitis B/C status in unexplained liver pathology.</li>
    <li>Missing Fitz-Hugh-Curtis syndrome by not taking a sexual history in a woman with RUQ pain.</li>
    <li>Not considering hepatocellular carcinoma in a patient with known hepatitis B and a new liver mass.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ultrasound is the first-line investigation for RUQ pain - use it early rather than reaching for other imaging first.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Charcot's triad means cholangitis until proven otherwise - urgent antibiotics and biliary drainage.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider amoebic liver abscess given local prevalence, especially with a preceding diarrhoeal illness.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Screen hepatitis B/C status in unexplained liver pathology, given the local burden and its link to hepatocellular carcinoma.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Courvoisier's sign (painless jaundice, palpable gallbladder) points towards malignant obstruction, not gallstones.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Amoebiasis: Diagnosis and Management Guidance.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Tokyo Guidelines - Diagnostic Criteria and Severity Grading of Acute Cholangitis/Cholecystitis.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Royal College of Obstetricians and Gynaecologists - Green-top Guideline on Pelvic Inflammatory Disease.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>
 
 

</body>
</html>
    `
  },


  {
    id: 'symptom-clerking-epigastric-pain',
    title: 'Epigastric Pain',
    category: 'Symptom Clerking',
    subCategory: 'Abdominal',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Epigastric Pain</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Epigastric Pain</h1>
    <p class="text-sm text-indigo-200">Most epigastric pain is gastritis or peptic ulcer disease, often related to NSAID use or unregulated herbal remedies, but epigastric pain is also a well-recognized way for a myocardial infarction to present - especially in diabetic patients, where the more typical chest pain may be blunted or absent. This guide focuses on the history and examination that separate a benign gastric cause from the ones that need urgent action, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>

<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Pain Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and how long has it lasted?</li>
      <li>What is the character - burning, gnawing, a dull ache, or a crushing/pressure sensation?</li>
      <li>Does it relate to meals - worse shortly after eating (suggests a gastric ulcer), or worse when fasting and relieved by food (suggests a duodenal ulcer)?</li>
      <li>Is it worse lying flat or bending forward, and better sitting upright (raises reflux)?</li>
      <li>Does it radiate anywhere - straight through to the back (raises pancreatitis or a posterior ulcer), or to the jaw, neck, or left arm (raises a cardiac cause)?</li>
      <li>What makes it better - antacids, food, or a particular position?</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> nausea, vomiting (and whether it is blood-stained or coffee-ground), heartburn, regurgitation, bloating, or early satiety.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alarm features (ask explicitly):</span> unintentional weight loss, difficulty or pain swallowing, or black, tarry stools (melena) - all raise a more serious underlying cause and change the urgency of the workup.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac (ask explicitly in every case):</span> breathlessness, sweating, palpitations, or a sense of impending doom accompanying the pain - epigastric pain can be the presenting feature of a myocardial infarction, particularly in diabetic patients.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatobiliary:</span> jaundice, pale stool, dark urine, or pain specifically related to fatty meals.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> fever, night sweats - relevant if an infective or malignant cause is being considered.</li>
    </ul>
  </div>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">NSAID/aspirin use:</span> current or recent use, including over-the-counter analgesics the patient may not think to mention.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Herbal remedies ("agbo") or other unregulated preparations:</span> ask specifically and non-judgementally - these are a common and often overlooked local cause of gastritis, peptic ulceration, and even hepatotoxicity.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac risk factors:</span> known hypertension, diabetes, smoking, family history of heart disease, or previous cardiac events - essential in every patient with epigastric pain, not just those with typical chest pain.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Alcohol use:</span> relevant to both gastritis and pancreatitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Previous PUD/H. pylori history:</span> any prior diagnosis or treatment.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Previous GI bleeding:</span> any prior episode of haematemesis or melena.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gallstone risk factors:</span> known gallstones, or risk factors for them.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatitis risk factors:</span> blood transfusion history, unsafe injections, or known hepatitis B/C status.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Malignancy risk:</span> age, and personal or family history of gastric or other GI cancer.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Recent febrile illness:</span> relevant if a perforative complication of typhoid is being considered.</li>
    </ul>
  </div>
</div>

<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">First Impression and Vital Signs</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Does the patient look well, distressed, or acutely unwell?</li>
      <li>Heart rate and blood pressure, including a check for a postural drop - tachycardia and hypotension raise concern for bleeding, perforation, or a cardiac event.</li>
      <li>Temperature - fever alongside epigastric pain raises an infective or inflammatory cause.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Abdominal Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Palpation:</span> epigastric tenderness, and specifically check for guarding or rigidity, which raises perforation.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Murphy's sign</span> - supports cholecystitis if the pain is more right-sided/subcostal.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Bowel sounds</span> - absent bowel sounds with a rigid abdomen supports perforation with peritonitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Jaundice or hepatomegaly</span> - raises a hepatobiliary cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Digital rectal examination</span> - where GI bleeding is suspected, to check for melena.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cardiac Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Auscultate for murmurs or a gallop rhythm, and look for signs of heart failure - relevant given how easily a cardiac cause can be overlooked when the pain is epigastric rather than classically retrosternal.</li>
    </ul>
  </div>
</div>

<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Epigastric pain in a patient with cardiac risk factors</span> - particularly diabetics, in whom a myocardial infarction can present atypically without classic chest pain; get an ECG rather than assuming a gastric cause.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A rigid, board-like abdomen with guarding</span> - raises a perforated peptic ulcer, a surgical emergency.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Haematemesis or melena</span> - a bleeding peptic ulcer needs urgent resuscitation and endoscopy.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe epigastric pain radiating to the back with vomiting</span> - raises acute pancreatitis, particularly with a gallstone or alcohol history.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">New dyspepsia with alarm features</span> - unintentional weight loss, dysphagia, persistent vomiting, or anaemia - needs prompt endoscopy referral rather than an empirical PPI trial alone, particularly in an older patient.</span></li>
  </ul>
</div>

<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">ECG</span> - obtain in essentially every patient with epigastric pain where a cardiac cause is even plausible, particularly diabetics and those with vascular risk factors.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Troponin</span> - where available, to support or exclude myocardial injury.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - looking for anaemia from occult or overt GI bleeding.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Amylase/lipase</span> - where pancreatitis is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">H. pylori testing</span> (stool antigen, urea breath test, or biopsy at endoscopy) - where peptic ulcer disease is confirmed or strongly suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Upper GI endoscopy</span> - for any alarm feature, or where symptoms persist despite an initial PPI trial.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Abdominal ultrasound</span> - where gallstones are suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">LFTs</span> - where a hepatobiliary cause is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Erect chest/abdominal radiograph</span> - where perforation is suspected (looking for free air under the diaphragm).</li>
  </ul>
</div>

<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastritis/peptic ulcer disease</span> - the commonest cause, often related to NSAID/herbal remedy use or H. pylori infection.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastro-oesophageal reflux disease (GERD)</span> - burning pain worse lying flat, with heartburn/regurgitation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute coronary syndrome</span> - epigastric pain, particularly in diabetics or those with vascular risk factors; must always be actively considered, not assumed away.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute pancreatitis</span> - severe pain radiating to the back, often with a gallstone or alcohol history.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Biliary colic/cholecystitis</span> - pain related to fatty meals, positive Murphy's sign.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Perforated peptic ulcer</span> - sudden, severe pain with a rigid abdomen.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastric malignancy</span> - persistent dyspepsia with alarm features, particularly in an older patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Functional dyspepsia</span> - a diagnosis of exclusion once organic causes have been reasonably ruled out.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatitis</span> - right upper quadrant/epigastric discomfort with jaundice, dark urine, pale stool.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Herbal/unregulated remedy-induced gastropathy</span> - a distinct and locally relevant contributor, sometimes alongside hepatotoxicity.</li>
  </ul>
</div>

<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Symptomatic Relief</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Antacids</span> - for quick symptomatic relief while further assessment proceeds.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Stopping the causative agent</span> - discontinuing NSAIDs or the offending herbal remedy is often the single most important step.</li>
      <li>Symptomatic relief should never substitute for an ECG or further workup where a cardiac cause, perforation, or bleeding is a realistic possibility.</li>
    </ul>
  </div>
</div>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastritis/peptic ulcer disease</span> - a proton pump inhibitor course, H. pylori eradication therapy if confirmed positive, and stopping NSAIDs/herbal irritants.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">GERD</span> - proton pump inhibitor and lifestyle measures (weight loss where relevant, avoiding late meals, elevating the head of the bed).</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute coronary syndrome</span> - manage as per the chest pain guide: aspirin, oxygen if hypoxic, and urgent referral for further cardiac care.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute pancreatitis</span> - supportive care with IV fluids, analgesia, initial nil by mouth, and monitoring for complications.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Cholecystitis</span> - IV antibiotics, analgesia, and surgical referral for cholecystectomy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Perforated peptic ulcer</span> - urgent surgical repair.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastric malignancy</span> - referral to the relevant oncology/surgical service for staging and treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatitis</span> - supportive care, with antiviral treatment where indicated for chronic hepatitis B/C.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>

<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Epigastric pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, character, relation to meals/position, radiation, aggravating/relieving factors, associated and alarm symptoms, directed risk history, treatment already tried, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Hypertension, diabetes, known PUD, previous GI bleeding, cardiac history.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">NSAID use, herbal remedies, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Alcohol use, family history of GI malignancy or cardiac disease.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs, abdominal findings, cardiac examination, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment given, and monitoring parameters.</dd>
    </div>
  </dl>
</div>

<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not obtaining an ECG in a patient with epigastric pain and cardiac risk factors, particularly diabetics.</li>
    <li>Not asking specifically about herbal remedy ("agbo") use as a cause of gastritis or hepatotoxicity.</li>
    <li>Missing alarm features and treating persistent dyspepsia with an indefinite PPI trial instead of referring for endoscopy.</li>
    <li>Not stopping the NSAID or herbal irritant actually driving ongoing gastritis.</li>
    <li>Missing perforation by not specifically examining for peritonism.</li>
    <li>Assuming epigastric pain is always gastric and overlooking a cardiac cause.</li>
  </ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always consider a cardiac cause and get an ECG for epigastric pain, especially in patients with vascular risk factors - it can be an MI equivalent.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask specifically about NSAID and herbal remedy ("agbo") use - a common and often overlooked local cause of gastritis and peptic ulcer disease.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>New dyspepsia with alarm features needs endoscopy referral, not an indefinite PPI trial.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A rigid abdomen with epigastric pain is a perforation until excluded.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Stopping the causative NSAID or herbal irritant is often the single most important treatment step.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Dyspepsia and Gastro-oesophageal Reflux Disease in Adults.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>European Society of Cardiology - Guidelines for the Management of Acute Coronary Syndromes.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American College of Gastroenterology - Guideline on the Treatment of Helicobacter pylori Infection.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>

 

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-scaling-peeling-of-the-skin',
    title: 'Scaling/Peeling of the Skin',
    category: 'Symptom Clerking',
    subCategory: 'Dermatological',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Scaling or Peeling of the Skin</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Scaling or Peeling of the Skin</h1>
    <p class="text-sm text-indigo-200">Scaling skin is usually something simple - a fungal infection, eczema, or dry skin - but the differential includes leprosy, which is easy to miss unless a hypopigmented patch is specifically tested for sensory loss, and Stevens-Johnson syndrome/toxic epidermal necrolysis, a dermatological emergency that can follow a new medication. Steroid-containing skin-lightening products also frequently distort the picture locally by masking or altering an underlying fungal infection. This guide focuses on the history and examination that clarify what is really going on, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Scaling Itself</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did it start, and how long has it lasted?</li>
      <li>Where is it - one or two localized patches, or widespread over much of the body? (This distinction matters a great deal, since localized and generalized scaling point towards very different causes.)</li>
      <li>What does the scale look like - fine and powdery, thick and silvery, greasy, or ring-shaped with a clearer centre?</li>
      <li>Is it itchy, and if so, is it worse at night? (Nocturnal itching is classic for scabies.)</li>
      <li>Has it spread outward or changed shape over time?</li>
      <li>Has this happened before, and is there anyone else at home with something similar? (Relevant to contagious causes such as fungal infection or scabies.)</li>
      <li>What has been tried already, and did it help or seem to change the appearance?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sensation in the patch (ask explicitly for any hypopigmented area):</span> is the area numb, or does it feel different to touch compared with the surrounding skin? This single question is central to screening for leprosy and is very easy to skip if not asked directly.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Mucosal symptoms (ask explicitly where scaling is widespread):</span> soreness or ulceration of the mouth, lips, eyes, or genitals, and any fever - together with widespread skin peeling and a recent new medication, this raises a dermatological emergency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Systemic symptoms:</span> fever, chills, or feeling generally unwell - relevant to erythroderma and severe drug reactions.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Joint symptoms:</span> joint pain or stiffness, particularly with thick, well-demarcated scaly plaques (raises psoriasis/psoriatic arthritis).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hair and nails:</span> patchy hair loss with scaling of the scalp (tinea capitis), or nail thickening/discolouration (fungal nail involvement or psoriasis).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Constitutional:</span> weight loss or other symptoms that might point towards underlying HIV, given how broadly it can affect the skin.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Steroid-containing skin-lightening creams or other unregulated products:</span> ask specifically and non-judgementally - long-term use can alter the appearance of an underlying fungal infection (tinea incognito), making it look atypical and harder to recognize.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">New medications in the preceding weeks:</span> ask about every new drug, including antibiotics, anticonvulsants, and any others - this is essential wherever widespread peeling is present, given the risk of a severe drug reaction.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV status/risk factors:</span> relevant given how many skin conditions present differently, more severely, or more persistently in the context of HIV.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB/leprosy contact:</span> known contact with someone with leprosy, or a family history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sexual history:</span> relevant if secondary syphilis is being considered, which can present with scaling on the palms and soles.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Bathing practices and soap use:</span> harsh soaps or frequent hot bathing can worsen dry, scaling skin.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational/chemical exposure:</span> relevant to irritant or allergic contact dermatitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Nutritional intake:</span> particularly in a child or an adult with limited food access, since certain nutritional deficiencies have distinctive skin findings.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history:</span> psoriasis, eczema, or other atopic conditions.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Skin Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Distribution - localized versus widespread/generalized - and whether it is symmetrical.</li>
      <li>Character of the scale, border, and any central clearing (a ring-shaped lesion with an active, scaly border and clearer centre supports tinea).</li>
      <li>Colour changes - hypopigmentation, hyperpigmentation, or erythema.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Sensory Testing in Any Hypopigmented Patch (Do Not Skip This)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Test light touch and pinprick sensation directly within the patch and compare with normal surrounding skin. Reduced or absent sensation within a hypopigmented, scaly patch is a key clinical sign of leprosy and should prompt urgent referral for confirmation and treatment - early treatment prevents the nerve damage and disability leprosy is best known for.</li>
      <li>Palpate for thickened peripheral nerves where leprosy is suspected.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other Targeted Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Mucosal surfaces</span> (mouth, eyes, genitals) - examine directly wherever widespread skin peeling is present, given the importance of not missing Stevens-Johnson syndrome/TEN.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Scalp and hair</span> - patchy hair loss with scaling supports tinea capitis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Nails</span> - thickening, discolouration, or pitting.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Joints</span> - where psoriatic arthritis is suspected.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Signs of skin thinning or telangiectasia</span> - support long-term topical steroid use.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General signs of HIV</span> - oral thrush, wasting, or lymphadenopathy.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Vital signs</span> - essential wherever scaling is widespread, since erythroderma can cause temperature dysregulation and haemodynamic instability.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Danger Signs - What Must Not Be Missed
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Widespread skin peeling with mucosal involvement following a new medication</span> - Stevens-Johnson syndrome/toxic epidermal necrolysis until proven otherwise; stop the suspected drug immediately and arrange urgent hospital admission.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A hypopigmented, scaly patch with reduced or absent sensation</span> - leprosy until excluded; early diagnosis and treatment are what prevent permanent nerve damage and disability, so this cannot wait.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Erythroderma (widespread redness and scaling affecting most of the body surface)</span> - carries a real risk of fluid and heat loss, infection, and cardiovascular strain; needs hospital admission and monitoring rather than outpatient management.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of secondary bacterial infection over scaling/broken skin</span> - spreading redness, warmth, or systemic symptoms, needing prompt antibiotic treatment.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin scraping for KOH microscopy</span> - where a fungal cause is suspected; simple and widely useful for confirming tinea.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Slit-skin smear and/or skin biopsy</span> - where leprosy is suspected, alongside careful clinical sensory testing, which remains central to diagnosis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV screening</span> - with appropriate pre-test discussion and consent, given how broadly it can affect the skin.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Syphilis serology (RPR/VDRL with confirmatory testing)</span> - where secondary syphilis is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC and electrolytes</span> - where erythroderma is present, to assess for fluid and metabolic derangement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin biopsy</span> - where the diagnosis is unclear, or a severe drug reaction/erythroderma needs further characterization.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nutritional assessment</span> - where a dietary deficiency is suspected as a contributing cause.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tinea (corporis, cruris, pedis, or capitis)</span> - a ring-shaped, scaly, often itchy patch with an active border; common in this climate.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tinea incognito</span> - a fungal infection whose appearance has been altered by prior topical steroid use, making it look atypical.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pityriasis versicolor</span> - fine scaling with patchy hypo- or hyperpigmentation, typically on the trunk.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Eczema/atopic dermatitis</span> - itchy, scaly patches, often with a personal or family history of atopy.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Psoriasis</span> - well-demarcated, thick, silvery scaly plaques, sometimes with nail or joint involvement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Seborrhoeic dermatitis</span> - greasy scaling in the scalp, eyebrows, and nasolabial folds; often more severe in HIV.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Contact dermatitis (irritant or allergic)</span> - related to a specific product or exposure.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Xerosis (dry skin)</span> - diffuse fine scaling, often worsened by harsh soaps or frequent hot bathing.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Scabies (particularly crusted/Norwegian scabies)</span> - intense itching, worse at night, sometimes with thick scaling in immunosuppressed patients.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Leprosy</span> - a hypopigmented, scaly patch with reduced sensation; a diagnosis that must always be actively considered.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Secondary syphilis</span> - a scaly rash, classically including the palms and soles, in a sexually active patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">HIV-associated skin changes</span> - acquired ichthyosis, severe/atypical seborrhoeic dermatitis, or generalized xerosis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Drug reaction/Stevens-Johnson syndrome/TEN</span> - widespread peeling with mucosal involvement following a new medication.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nutritional deficiency dermatoses</span> - distinctive skin changes in the context of significant malnutrition.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Skin Care Measures</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Regular emollient use</span> - helps most scaling conditions regardless of cause, by restoring the skin barrier.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gentle, non-drying soaps</span> - and avoiding excessively hot or prolonged bathing.</li>
      <li>General measures should never delay specific treatment once a cause is identified, particularly for leprosy or a severe drug reaction.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tinea</span> - a topical antifungal for localized disease; oral antifungal therapy for extensive disease, tinea capitis, or nail involvement.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tinea incognito</span> - stop the causative topical steroid and treat with an appropriate antifungal.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pityriasis versicolor</span> - topical antifungal (e.g. selenium sulfide or an azole); pigment changes can take months to fully resolve after treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Eczema</span> - emollients as the foundation of treatment, with topical corticosteroids for flares and identification/avoidance of triggers.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Psoriasis</span> - topical corticosteroids and/or vitamin D analogues for localized disease; referral for more extensive or refractory disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Seborrhoeic dermatitis</span> - topical antifungal combined with a mild topical steroid.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Contact dermatitis</span> - identification and avoidance of the causative product/exposure, with a topical steroid for the flare.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Scabies</span> - topical permethrin or oral ivermectin, with treatment of household contacts and washing of bedding/clothing.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Leprosy</span> - urgent referral into the national leprosy programme for confirmation and multidrug therapy; this is not managed with general dermatological treatment alone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Secondary syphilis</span> - penicillin per WHO/local STI treatment guidelines.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Stevens-Johnson syndrome/TEN</span> - immediate cessation of the causative drug, urgent hospital admission (ideally with burns-unit-level supportive care where available), and specialist input.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Erythroderma</span> - hospital admission, careful fluid and temperature management, and treatment of the underlying cause.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Scaling/peeling of the skin, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, distribution, scale character, itch pattern, sensory changes, associated and alarm symptoms, directed risk history, treatment already tried, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical History</dt>
      <dd class="mt-0.5">HIV status, atopy, psoriasis, previous leprosy or TB contact.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Product History</dt>
      <dd class="mt-0.5">New medications, steroid-containing skin products, current treatments tried.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Family history of atopy/psoriasis, contacts with similar symptoms, occupational exposures, sexual history where relevant.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Distribution and character of scaling, sensory testing of any hypopigmented patch, mucosal examination where relevant, explicitly documenting danger signs.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Investigations requested, treatment/referral given, and follow-up plan.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not testing sensation in a hypopigmented scaly patch, missing an opportunity to diagnose leprosy early.</li>
    <li>Not asking about recent new medications when widespread skin peeling is present, missing a severe drug reaction.</li>
    <li>Continuing a steroid cream that is altering the appearance of an underlying fungal infection (tinea incognito).</li>
    <li>Not considering HIV in atypical, severe, or treatment-resistant skin conditions.</li>
    <li>Missing secondary syphilis in a sexually active patient with a scaly rash on the palms and soles.</li>
    <li>Underestimating fluid and temperature regulation risks in a patient with erythroderma.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always test sensation in any hypopigmented scaly patch - early leprosy diagnosis is what prevents permanent nerve damage.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Widespread skin peeling with mucosal involvement after a new drug is a dermatological emergency - stop the drug and refer urgently.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about steroid cream use - it can mask or distort an underlying fungal infection.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider HIV in atypical, severe, or treatment-resistant skin conditions.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Secondary syphilis can present as scaling on the palms and soles - consider it in sexually active patients.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Diagnosis, Treatment and Prevention of Leprosy.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Management of Sexually Transmitted Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis: Recognition and Initial Management.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Dermatology - Guidelines on the Diagnosis and Management of Tinea Infections.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>

</body>
</html>
    `
  },

  {
    id: 'symptom-clerking-comedones',
    title: 'Comedones (Blackheads and Whiteheads)',
    category: 'Symptom Clerking',
    subCategory: 'Dermatological',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Approach to Clerking a Patient with Comedones (Blackheads and Whiteheads)</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Symptoms</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Comedones (Blackheads and Whiteheads)</h1>
    <p class="text-sm text-indigo-200">Comedones are the non-inflammatory building blocks of acne vulgaris, and while they are rarely medically dangerous, they carry real psychosocial weight - particularly given the risk of post-inflammatory hyperpigmentation in darker skin, which patients often find more distressing than the comedones themselves. Locally, pomades, hair oils, and skin-lightening products are common, correctable contributors that are easy to miss unless asked about directly. This guide focuses on the history and examination that identify what is driving the comedones, before closing with investigations, differentials, and treatment.</p>
  </div>
</div>
 
<!-- 1. History -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
  History - Questions to Ask
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterizing the Comedones Themselves</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>When did they start, and how long have they been present?</li>
      <li>Where are they located - forehead, nose, chin (the classic distribution), cheeks, chest, or back? A distribution that is unusual for typical acne (e.g. concentrated along the hairline or jawline) is worth noting specifically.</li>
      <li>Are they mostly open (blackheads) or closed (whiteheads), or is there a mix?</li>
      <li>Are there also inflamed lesions - papules, pustules, or deeper nodules/cysts - alongside the comedones? This distinguishes comedonal acne from more inflammatory acne, which needs a different treatment approach.</li>
      <li>Does anything seem to make them worse - certain skincare or haircare products, sweating, humidity, or the time of the menstrual cycle in women?</li>
      <li>What has been tried already, and did it help?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms and Concerns</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Post-inflammatory hyperpigmentation</span> - ask directly whether dark marks are left behind after lesions resolve, and how much this bothers the patient; for many patients this is the more distressing part of the whole picture, not the comedones themselves.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Scarring</span> - any pitted or textured scarring developing over time.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Itching or tenderness</span> - more typical of inflamed lesions than pure comedones.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">In women:</span> menstrual regularity, excess facial/body hair, or hair thinning - raises an underlying hormonal contributor such as PCOS.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Psychological impact:</span> ask gently how this is affecting confidence and daily life - skin appearance carries significant social weight, and this is a legitimate part of the clerking, not an afterthought.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pomades, hair oils, and hair grease:</span> ask specifically whether these are applied near the hairline or forehead - a genuine and common local cause of comedones along the forehead and temples ("pomade acne").</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin-lightening creams or other unregulated skin products:</span> ask directly and without judgement - some of these contain steroids or other ingredients that can worsen comedones, cause a distinct steroid-induced acne, or thin the skin over time.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cosmetics and moisturizers:</span> heavy, oil-based products can be comedogenic ("acne cosmetica").</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational exposure:</span> exposure to oils, greases, or certain industrial chemicals can cause an acne-like eruption (chloracne), typically with a more monomorphic comedonal pattern.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Medications:</span> some hormonal contraceptives, corticosteroids, isoniazid, and certain anticonvulsants can trigger or worsen acne.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Family history:</span> a family history of acne is common and relevant.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Picking or manipulation of lesions:</span> worth asking about gently, since this significantly increases the risk of scarring and hyperpigmentation.</li>
    </ul>
  </div>
</div>
 
<!-- 2. Examination -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Examination - What to Look Out For
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Lesion Assessment</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Distribution and density of open and closed comedones - forehead, nose, chin, cheeks, chest, back.</li>
      <li>Presence and number of inflammatory lesions (papules, pustules, nodules, or cysts), which determines overall severity and guides treatment intensity.</li>
      <li>Extent of post-inflammatory hyperpigmentation - document this specifically, since it is often the primary driver of the patient's concern.</li>
      <li>Any scarring, and its type where visible (e.g. icepick, boxcar, or rolling scars).</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Signs Suggesting a Specific Contributing Cause</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Comedones concentrated along the hairline/forehead</span> - supports pomade-related acne.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin thinning, telangiectasia, or stretch marks at the site of product use</span> - supports topical steroid-related skin damage from bleaching creams.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Hirsutism or acanthosis nigricans</span> - raises PCOS as a hormonal contributor, particularly with a compatible menstrual history.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">A uniform, monomorphic pattern of comedones in an unusual distribution</span> - raises an occupational/chemical cause (chloracne) rather than typical acne vulgaris.</li>
    </ul>
  </div>
</div>
 
<!-- 3. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Red Flags - When to Refer or Act Promptly
</h2>
 
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
  <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Severe nodulocystic acne with a real risk of scarring</span> - needs prompt dermatology referral rather than a wait-and-see approach, since scarring is much easier to prevent than to treat once established.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of PCOS</span> (irregular periods, hirsutism, acanthosis nigricans) - warrants a broader hormonal workup rather than treating the acne in isolation.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Evidence of skin damage from long-term steroid-containing skin-lightening products</span> - needs a supervised, gradual withdrawal plan rather than abrupt cessation, which can trigger a significant rebound flare.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Acute, severe acne with systemic symptoms</span> (fever, joint pain) - raises acne fulminans, a rare but serious variant needing urgent dermatology input.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Significant psychological distress or impact on daily functioning</span> - deserves direct acknowledgement and, where needed, appropriate support rather than being treated as a purely cosmetic concern.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">None routinely required</span> - comedonal acne is usually a clinical diagnosis based on history and examination alone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Androgen profile and pelvic ultrasound</span> - where PCOS is suspected based on menstrual irregularity, hirsutism, or acanthosis nigricans.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin biopsy</span> - rarely needed, but can help where the diagnosis is unclear or an alternative cause (e.g. a different follicular disorder) is being considered.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acne vulgaris (comedonal type)</span> - the default diagnosis, classically on the forehead, nose, and chin.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pomade acne</span> - comedones concentrated along the hairline and forehead, related to hair oils/pomades.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Steroid-induced acne</span> - related to long-term use of steroid-containing skin-lightening products.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acne cosmetica</span> - related to comedogenic cosmetics or moisturizers.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chloracne</span> - occupational exposure to oils or certain chemicals, often with a more uniform pattern.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Drug-induced acne</span> - related to hormonal contraceptives, corticosteroids, isoniazid, or certain anticonvulsants.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">PCOS-related acne</span> - alongside menstrual irregularity and hirsutism.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Milia</span> - small, firm, superficial white cysts that can be mistaken for closed comedones but do not respond the same way to acne treatment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sebaceous hyperplasia</span> - benign, yellowish papules that can be confused with comedones, more common with increasing age.</li>
  </ul>
</div>
 
<!-- 6. Treatment -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Common Treatment Options
</h2>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Skin Care Measures</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Switch to non-comedogenic skincare and haircare products</span> - and specifically stop or reduce pomades/oils applied near the hairline, which is often the single most impactful change.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gentle cleansing</span> - twice daily with a mild cleanser; avoid harsh scrubbing, which worsens irritation and post-inflammatory pigmentation.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Avoid picking or squeezing lesions</span> - this significantly increases the risk of scarring and hyperpigmentation.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Daily sunscreen use</span> - important to reduce the risk and severity of post-inflammatory hyperpigmentation as lesions heal.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause/Severity</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Comedonal acne (first-line)</span> - a topical retinoid (e.g. adapalene or tretinoin), applied consistently; this is the treatment of choice for comedones specifically and also helps prevent new lesions from forming.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Mild inflammatory acne</span> - benzoyl peroxide, alone or combined with a topical retinoid.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Moderate-to-severe inflammatory acne</span> - addition of a topical or oral antibiotic per standard acne treatment ladders, alongside the above.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pomade/product-related acne</span> - removal of the causative product is often sufficient alone, alongside standard topical therapy if lesions persist.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Steroid-related skin damage</span> - a gradual, supervised taper of the steroid-containing product, not abrupt cessation.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">PCOS-related acne</span> - hormonal management (e.g. combined oral contraceptives where appropriate) alongside standard topical therapy, and referral for broader PCOS management.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Post-inflammatory hyperpigmentation</span> - sun protection is essential; topical agents (e.g. azelaic acid) can help, and this should be addressed as a treatment goal in its own right, not an afterthought.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Severe nodulocystic acne or scarring risk</span> - dermatology referral for consideration of more intensive therapy.</li>
  </ul>
  <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">This is a general overview only - always confirm current dosing, resistance patterns, and contraindications against local/national treatment guidelines before prescribing.</p>
</div>
 
<!-- 7. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Putting It Together - Documentation Format
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <dl class="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
    <div class="py-2 first:pt-0 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Presenting Complaint</dt>
      <dd class="mt-0.5">Comedones/blackheads and whiteheads, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, distribution, lesion type mix, associated hyperpigmentation/scarring, directed product/risk history, treatment already tried, psychosocial impact, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Menstrual history and hyperandrogenism features where relevant.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical History</dt>
      <dd class="mt-0.5">PCOS or other endocrine conditions, previous dermatological diagnoses.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Product History</dt>
      <dd class="mt-0.5">Pomades/oils, skin-lightening products, cosmetics, current medications.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Family history of acne, occupational exposures.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Distribution and severity of lesions, hyperpigmentation, scarring, signs suggesting a specific contributing cause, explicitly documenting red flags.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Impression/Differential Diagnosis</dt>
      <dd class="mt-0.5">Ranked list of likely diagnoses/contributors with supporting reasoning.</dd>
    </div>
    <div class="py-2 last:pb-0">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Plan</dt>
      <dd class="mt-0.5">Treatment/referral given, product changes advised, and follow-up plan.</dd>
    </div>
  </dl>
</div>
 
<!-- 8. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Common Pitfalls
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Not asking specifically about pomades, hair oils, and skin-lightening product use.</li>
    <li>Treating the acne while ignoring post-inflammatory hyperpigmentation, which is often the patient's primary concern.</li>
    <li>Missing PCOS in a woman with acne alongside menstrual irregularity or hirsutism.</li>
    <li>Advising abrupt cessation of a long-term steroid-containing product instead of a supervised taper.</li>
    <li>Not counselling on sun protection to reduce the risk of hyperpigmentation.</li>
    <li>Dismissing the psychological impact of acne as purely cosmetic.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask specifically about pomades, hair oils, and skin-lightening products - common, correctable local contributors.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A topical retinoid is first-line treatment for comedonal acne specifically.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Post-inflammatory hyperpigmentation is often more distressing to the patient than the acne itself - address it proactively.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Screen for PCOS features in women with acne plus menstrual irregularity or hirsutism.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never advise abrupt cessation of long-term topical steroid use - always a supervised taper.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>American Academy of Dermatology - Guidelines of Care for the Management of Acne Vulgaris.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Global Alliance to Improve Outcomes in Acne - Skin of Colour Considerations in Acne Management.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Institute for Health and Care Excellence (NICE) - Acne Vulgaris: Clinical Knowledge Summary.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>Federal Ministry of Health - Standard Treatment Guidelines, Nigeria.</li>
    </ul>
  </div>
</details>
 

</body>
</html>
    `
  },

// PHYSICAL EXAMINATION

{
  id: 'examination-general-physical',
  title: 'General Physical Examination',
  category: 'Physical Examination',
  subCategory: 'General',
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>General Physical Examination</title>
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Clinical Skills</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">General Physical Examination</h1>
  <p class="text-sm text-indigo-200">The general physical examination is the first structured look at the patient as a whole, before a stethoscope ever touches the chest. Done well, it can point you toward a diagnosis before you examine a single system. This guide walks through the standard sequence, with the reasoning behind each sign and the local patterns - sickle cell disease, malaria, TB, HIV - that shift how you interpret what you find.</p>
</div>
</div>

<!-- 1. Principles -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
Principles and Approach
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Seek consent and introduce yourself, even on a busy ward round - patients remember being examined without being told what for.</li>
    <li>Ensure adequate exposure, balanced against dignity - expose one region at a time and use a cover cloth, particularly with older patients and in mixed-sex bays.</li>
    <li>Position yourself on the patient's right side, the conventional side for both general and systemic examination.</li>
    <li>Sequence matters: general appearance (posture, gait, distress) first, then a detailed general examination, then systemic examination. Do not skip straight to the system you suspect is affected.</li>
    <li>Examine in natural daylight wherever possible - fluorescent ward lighting commonly masks mild jaundice and pallor, and this is one of the most practice-changing habits a student can build.</li>
  </ul>
</div>
</div>

<!-- 2. General Inspection -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
General Inspection
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">From the End of the Bed</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Consciousness and alertness</span> - awake, drowsy, responsive to voice or pain only.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">General demeanour</span> - well, anxious, depressed, acutely ill or toxic-looking, or chronically ill.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nutritional status</span> - obese, average, or wasted, evidenced by prominent zygomatic or clavicular bones and loss of buttock/thigh bulk.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Attachments</span> - IV cannula and fluids, urinary catheter, nasogastric tube, oxygen delivery device, drains, or wound dressings.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Posture and gait</span>, where the patient is able to stand or walk.</li>
  </ul>
  <p class="mt-3 text-sm">A toxic-looking or acutely distressed appearance on first inspection should raise suspicion for sepsis or severe malaria, and should shorten - not lengthen - the time before vital signs are checked.</p>
</div>
</div>

<!-- 3. Hands -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
The Hands
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Inspection</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Palmar pallor</span> - compare the patient's palmar creases to your own at the same angle and lighting; creases as pale as the surrounding skin suggest significant anaemia, roughly below Hb 7-8 g/dL. This remains one of the most reliable bedside signs of anaemia regardless of skin tone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Palmar erythema</span> - mottled redness of the thenar and hypothenar eminences; seen in chronic liver disease, pregnancy, thyrotoxicosis, and rheumatoid arthritis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Dupuytren's contracture</span> - thickened palmar fascia, usually the ring or little finger; associated with chronic liver disease, diabetes, manual labour, and alcohol use.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Splinter haemorrhages</span> - linear reddish-brown streaks under the nail; classically infective endocarditis, but also seen after trauma or manual work, so ask about occupation before assuming pathology.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Koilonychia</span> - spoon-shaped nails, seen in chronic iron deficiency anaemia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Nail temperature and moisture</span> - cool and clammy suggests poor perfusion; warm suggests fever or thyrotoxicosis.</li>
  </ul>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Digital Clubbing</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Fluctuancy test</span> - stabilise the finger and press the nail bed; increased sponginess is the earliest sign.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Schamroth's window</span> - bring the dorsal surfaces of the patient's two fingers together at the DIP joint; loss of the normal diamond-shaped gap confirms clubbing.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Lateral profile</span> - obliteration of the normal angle between nail and nail fold (Lovibond angle).</li>
  </ul>
  <p class="mt-3 text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Grading:</span> 1 - increased fluctuancy only; 2 - loss of the nail-nail fold angle; 3 - increased nail convexity, longitudinal and transverse; 4 - drumstick appearance; 5 - hypertrophic osteoarthropathy, with shiny thickened skin and periosteal new bone.</p>
  <p class="mt-2 text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Causes to know:</span> suppurative lung disease, complicated pulmonary TB, and non-small cell bronchogenic carcinoma; cyanotic congenital heart disease and infective endocarditis; inflammatory bowel disease, malabsorption, and liver cirrhosis. Given the local burden of pulmonary TB and its suppurative complications, clubbing in a chronically unwell patient should prompt an early TB work-up alongside the standard differential, not just malignancy or cardiac causes.</p>
</div>
</div>

<!-- 4. Vitals & Hydration -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Temperature and Hydration Status
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Temperature</strong>
  <p class="text-sm">Measure in the axilla, or orally/rectally where appropriate. If no thermometer is available, feel with the back of your hand and document clearly as an estimate rather than a measured value.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Hydration Status</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Tongue and mucosa</span> - ask the patient to put out their tongue; note dryness and reduced saliva pooling.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin turgor</span> - pinch a fold of abdominal skin and release; slow return suggests dehydration. Turgor is naturally reduced in the elderly, so interpret with caution in older patients.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Capillary refill</span> - press the nail bed until it blanches and time the return of colour; normal is 2-3 seconds, and this stays reliable regardless of skin tone.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sunken eyes, cool peripheries, and reduced urine output</span> support a more severe picture.</li>
  </ul>
  <p class="mt-3 text-sm">These same bedside signs - skin pinch, sunken eyes, thirst, and mental state - underpin WHO/FMOH dehydration grading (none, some, severe), which is used routinely in managing acute watery diarrhoea and cholera, and determines whether a patient needs oral rehydration therapy or urgent IV fluids.</p>
</div>
</div>

<!-- 5. Head, Face, Eyes -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Head, Face and Eyes
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Hair, Scalp and Skull</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Hair texture</span> - fine, sparse, or easily pluckable hair can indicate protein-energy malnutrition or hypothyroidism.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Alopecia</span> - patterned or diffuse hair loss; consider telogen effluvium, autoimmune disease, or nutritional causes.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Skull shape</span> - frontal or parietal bossing with a broad, tower-like skull in a young patient with chronic anaemia and jaundice is a classic finding of chronic haemolysis, most importantly sickle cell disease, which affects an estimated 2-3% of births as SS or SC disease locally. Combined with pallor and scleral icterus, this should immediately bring sickle cell disease into the differential. Other causes include rickets and, less commonly, Paget's disease of bone.</li>
  </ul>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Eyes</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Conjunctival pallor</span> - gently evert the lower eyelid in good light; the normal conjunctiva is deep pink-red, and loss of this colour is one of the most reliable signs of anaemia across all skin tones.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Scleral icterus</span> - examine in natural light where possible; ask the patient to look down while you retract the upper lid to bring more sclera into view.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Signs of inflammation</span> - conjunctival injection or discharge.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Sunken eyes</span> - dehydration.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Exophthalmos, lid lag, or lid retraction</span> - thyroid eye disease or thyrotoxicosis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Ptosis</span> - consider myasthenia gravis, third nerve palsy, or Horner's syndrome.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Periorbital oedema</span> - consider nephrotic syndrome, severe allergic reaction, or angioedema.</li>
  </ul>
  <p class="mt-3 text-sm">Combined conjunctival pallor and scleral icterus in the same patient should trigger a haemolytic screen - reticulocyte count, LDH, unconjugated bilirubin, and blood film - rather than being read as two unrelated findings.</p>
</div>
</div>

<!-- 6. Mouth, Cyanosis, Neck -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Mouth, Cyanosis and Neck
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cyanosis</strong>
  <p class="text-sm">Examine the tongue and buccal mucosa, not just the lips, for a bluish discolouration.</p>
  <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Central cyanosis</span> - bluish tongue and mucosa, reflecting arterial desaturation; seen in advanced respiratory or cyanotic cardiac disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Peripheral cyanosis</span> - bluish nail beds with a warm, pink tongue; reflects reduced peripheral perfusion.</li>
  </ul>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Oral Cavity</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Check teeth and gums for oral hygiene, caries, and gum disease - an overlooked but real source of sepsis and endocarditis risk.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Angular stomatitis and glossitis</span> - suggest iron, B12, or folate deficiency.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Oral thrush</span> - white plaques on the buccal mucosa or tongue; consider immunosuppression, including undiagnosed HIV, diabetes, recent antibiotics, or inhaled steroid use.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Mucosal pigmentation</span> - some buccal pigmentation is a normal racial variant locally; distinguish this from Addison's disease, which tends to be patchy and also involves pressure areas, scars, and palmar creases.</li>
  </ul>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Neck</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Inspect and palpate the thyroid for enlargement, nodularity, or a bruit; ask the patient to swallow (thyroid moves up) and protrude the tongue (a thyroglossal cyst moves up).</li>
    <li>Check the jugular venous pressure at 45 degrees, and palpate the trachea for central position.</li>
  </ul>
  <p class="mt-3 text-sm">Endemic goitre remains relevant in some inland or riverine communities with iodine-deficient soil, despite national salt iodisation - a visible or palpable goitre in a patient from such an area warrants a specific enquiry into dietary iodine and thyroid function.</p>
</div>
</div>

<!-- 7. Lymph Nodes -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Lymphatic System
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Nodal Groups to Examine</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Head and neck:</span> submental, submandibular, pre-auricular, post-auricular, anterior and posterior cervical, supraclavicular.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Axillary:</span> anterior, posterior, lateral, medial, and apical.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Other:</span> supratrochlear, inguinal, and popliteal.</li>
  </ul>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Characterising Each Node</strong>
  <p class="text-sm">Size, position, and shape; consistency (soft, firm, hard, or rubbery); mobility; tenderness (tender with overlying warmth suggests infection; painless, hard, or matted raises concern for malignancy or TB lymphadenitis); and whether isolated or matted together.</p>
  <p class="mt-3 text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Significant lymphadenopathy:</span> a node greater than 1-1.5 cm, except inguinal nodes at 2 cm or more, and epitrochlear nodes of any size. <span class="font-medium text-slate-800 dark:text-slate-200">Generalised lymphadenopathy:</span> involvement of two or more non-contiguous sites. <span class="font-medium text-slate-800 dark:text-slate-200">Persistent:</span> lasting more than three months.</p>
  <p class="mt-2 text-sm">Generalised lymphadenopathy in a Nigerian adult should specifically raise tuberculous lymphadenitis (often matted, cervical, sometimes with an overlying sinus or scarring), HIV-related persistent generalised lymphadenopathy (an HIV test should be offered as part of routine work-up, with pre-test counselling), and reactive lymphadenopathy from recurrent malaria or other endemic infections - alongside lymphoma.</p>
</div>
</div>

<!-- 8. Legs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Lower Limbs and Oedema
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Examine the toes and toenails for clubbing and splinter haemorrhages, as with the fingers.</li>
    <li>Examine the ankles for oedema - press firmly over the medial tibial surface for 5-10 seconds and look for pitting.</li>
    <li>If ankle oedema is present, trace it upward - calf, thigh, sacrum - to determine its highest point of extension. Unilateral leg oedema points to a local venous or lymphatic cause; bilateral, sacral-extending oedema points to a systemic cause.</li>
  </ul>
  <p class="mt-3 text-sm">Bilateral leg oedema in a Nigerian adult has a broad differential that should specifically include nephrotic syndrome (including HIV-associated nephropathy and, historically, quartan malarial nephropathy), decompensated heart failure - often from hypertensive heart disease or rheumatic valve disease in younger patients - chronic liver disease, and severe protein-energy malnutrition, alongside chronic venous insufficiency and drug-induced oedema such as from calcium channel blockers.</p>
</div>
</div>

<!-- 9. Danger Signs -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Findings That Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
<ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A toxic-looking or acutely distressed general appearance</span> - shortens the time to vital signs and should raise suspicion for sepsis or severe malaria.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Frontal bossing with pallor and jaundice</span> in a young patient - sickle cell disease until confirmed otherwise by genotype.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Supraclavicular or firm, matted, painless lymphadenopathy</span> - raises malignancy or TB lymphadenitis and warrants prompt biopsy or further work-up.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Generalised lymphadenopathy of unclear cause</span> - offer HIV testing with pre-test counselling as part of routine work-up.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Bilateral, sacral-extending oedema</span> - suggests a systemic cause (renal, cardiac, hepatic, or nutritional) rather than local venous disease, and needs urgent further assessment.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Signs of severe dehydration</span> - sunken eyes, very slow skin pinch return, and altered mental state - needs urgent IV rehydration, not oral therapy alone.</span></li>
</ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
<h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
<ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Read pallor, jaundice, and cyanosis from the conjunctiva, tongue, nail beds, and buccal mucosa, not from skin colour - skin colour alone is unreliable in moderately to darkly pigmented patients.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Frontal bossing plus pallor plus jaundice is sickle cell disease until proven otherwise.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Clubbing in a chronically unwell patient should bring pulmonary TB into the differential early, not just malignancy or cardiac disease.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Generalised lymphadenopathy locally is TB, HIV, and malaria until proven otherwise, alongside the standard haematological differential.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never rush past general inspection - a large amount of the diagnostic picture is available before you ever touch the patient.</span></li>
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
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Integrated Management of Diarrhoea and Dehydration Assessment Guidelines.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Sickle Cell Foundation Nigeria - Clinical Guidelines for the Management of Sickle Cell Disease.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National TB and Leprosy Control Programme, Nigeria - Diagnosis and Treatment Guidelines.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Agency for the Control of AIDS / Federal Ministry of Health - National HIV Testing Services Guidelines.</li>
  </ul>
</div>
</details>

</body>
</html>
  `
},


// LABORATORY INTERPRETATIONS
{
  id: 'lab-full-blood-count',
  title: 'Full Blood Count',
  category: 'Laboratory Interpretation',
  subCategory: 'Hematology',
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Interpreting the Full Blood Count (FBC)</title>
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Laboratory Interpretation</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting the Full Blood Count</h1>
  <p class="text-sm text-indigo-200">The FBC is frequently the only investigation available at the point of decision - CRP and procalcitonin are rarely accessible outside tertiary centres, and a blood culture, where the lab runs one at all, takes days to return. Every parameter has to be read for its underlying mechanism, not just flagged as high or low against a printed reference range.</p>
</div>
</div>

<!-- 1. Approach -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
Approaching the FBC in This Setting
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Reading order matters more than reading each line in isolation:</p>
<ol class="list-decimal pl-5 space-y-1 text-sm">
  <li><span class="font-medium text-slate-800 dark:text-slate-200">PCV/Hb</span> - presence and severity of anaemia.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">MCV</span>, with RDW where available - narrows the anaemia differential.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">WBC and differential</span> - a pattern suggesting bacterial, malarial, viral, or parasitic process.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Platelets</span> - evidence toward malaria, dengue, typhoid, or bleeding risk.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Peripheral film</span>, wherever available - the single most informative addition to a basic FBC in this setting, and underused relative to its diagnostic yield.</li>
</ol>
</div>

<!-- 2. Hb / PCV -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Haemoglobin (Hb) and Packed Cell Volume (PCV)
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<p class="text-sm">Hb and PCV move together (PCV is roughly 3 x Hb, give or take 3). PCV by microhaematocrit centrifugation is usually the first value available outside teaching hospitals - faster, cheaper, and requiring only a capillary sample. The degree of anaemia matters more than which side of a threshold it falls on - an Hb of 4 g/dL and an Hb of 10 g/dL are managed on entirely different timelines.</p>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">WHO Reference Thresholds</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Population</th>
          <th class="py-2 pr-3 font-medium">Anaemia threshold</th>
          <th class="py-2 font-medium">Severe anaemia</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Adult men</td><td class="py-2 pr-3">&lt; 13 g/dL</td><td class="py-2">&lt; 8 g/dL</td></tr>
        <tr><td class="py-2 pr-3">Non-pregnant women</td><td class="py-2 pr-3">&lt; 12 g/dL</td><td class="py-2">&lt; 8 g/dL</td></tr>
        <tr><td class="py-2 pr-3">Pregnant women</td><td class="py-2 pr-3">&lt; 11 g/dL</td><td class="py-2">&lt; 7 g/dL</td></tr>
        <tr><td class="py-2 pr-3">Children 6-59 months</td><td class="py-2 pr-3">&lt; 11 g/dL</td><td class="py-2">&lt; 7 g/dL</td></tr>
        <tr><td class="py-2 pr-3">Children 5-11 years</td><td class="py-2 pr-3">&lt; 11.5 g/dL</td><td class="py-2">&lt; 8 g/dL</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Classification by MCV</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Pattern</th>
          <th class="py-2 pr-3 font-medium">Range (fL)</th>
          <th class="py-2 font-medium">Principal causes here</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Microcytic</td><td class="py-2 pr-3">&lt; 80</td><td class="py-2">Iron deficiency (hookworm, menorrhagia, peptic ulcer disease), thalassaemia trait</td></tr>
        <tr><td class="py-2 pr-3">Normocytic</td><td class="py-2 pr-3">80-100</td><td class="py-2">Malaria-associated anaemia, anaemia of chronic disease, acute haemorrhage, early haemolysis</td></tr>
        <tr><td class="py-2 pr-3">Macrocytic</td><td class="py-2 pr-3">&gt; 100</td><td class="py-2">Folate/B12 deficiency, reticulocytosis from active haemolysis (check genotype)</td></tr>
      </tbody>
    </table>
  </div>
  <ul class="list-disc pl-5 space-y-2 text-sm mt-3">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Microcytic:</span> iron deficiency and thalassaemia trait can look identical on Hb/MCV alone. A raised RDW favours iron deficiency (a heterogeneous cell population); a normal RDW with an MCV disproportionately low for the degree of anaemia favours thalassaemia trait. A low ferritin confirms iron deficiency where available, but ferritin is an acute-phase reactant and can be falsely normal or elevated with concurrent infection - common in febrile patients being worked up for anaemia at the same time.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Normocytic:</span> malaria destroys both parasitised and non-parasitised red cells (bystander haemolysis via splenic clearance and complement-mediated destruction), and also suppresses erythropoiesis through cytokine-mediated dyserythropoiesis - the anaemia can worsen for several days into treatment even as parasitaemia clears. Anaemia of chronic disease, driven by hepcidin-mediated iron sequestration, is common in TB, HIV, and chronic osteomyelitis.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Macrocytic:</span> reticulocytosis from ongoing haemolysis should prompt a genotype check if not already known, alongside LDH and unconjugated bilirubin where available. Nutritional macrocytic anaemia from folate deficiency is more common than B12 deficiency in most local dietary patterns.</li>
  </ul>
</div>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Peripheral Film Correlation</strong>
  <p class="text-sm">The film adds information the automated count cannot: sickle cells and target cells (haemoglobinopathy), hypochromic microcytes with anisopoikilocytosis (iron deficiency), and malaria parasites with species identification and parasite density. Requesting a film alongside the FBC, rather than only after an abnormal count, changes management more often than the Hb value alone.</p>
</div>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Transfusion Decision-Making</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Hb</th>
          <th class="py-2 pr-3 font-medium">Clinical state</th>
          <th class="py-2 font-medium">Approach</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">&lt; 4 g/dL</td><td class="py-2 pr-3">Any</td><td class="py-2">Transfuse; packed cells, slow rate, diuretic cover if any sign of cardiac strain</td></tr>
        <tr><td class="py-2 pr-3">4-6 g/dL</td><td class="py-2 pr-3">Symptomatic (tachycardia, tachypnoea, heart failure signs)</td><td class="py-2">Transfuse packed cells cautiously; consider furosemide cover</td></tr>
        <tr><td class="py-2 pr-3">4-6 g/dL</td><td class="py-2 pr-3">Asymptomatic, haemodynamically stable</td><td class="py-2">Individualise; correct the underlying cause first if feasible</td></tr>
        <tr><td class="py-2 pr-3">&gt; 7 g/dL</td><td class="py-2 pr-3">Stable</td><td class="py-2">Transfusion rarely indicated; treat the cause</td></tr>
      </tbody>
    </table>
  </div>
  <p class="mt-3 text-sm">Anaemic heart failure changes the transfusion approach substantially - packed red cells rather than whole blood, a slower infusion rate, and diuretic cover, to avoid precipitating acute pulmonary oedema in a heart already volume-loaded from chronic compensation.</p>
</div>
</div>

<!-- 3. WBC -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
White Blood Cell Count and Differential
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<p class="text-sm">The total count alone carries limited weight - the differential is where the diagnostic value lies.</p>
<div class="overflow-x-auto">
  <table class="w-full text-xs sans border-collapse">
    <thead>
      <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
        <th class="py-2 pr-3 font-medium">Pattern</th>
        <th class="py-2 pr-3 font-medium">Reference (adult)</th>
        <th class="py-2 font-medium">Principal causes here</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
      <tr><td class="py-2 pr-3">Neutrophilia</td><td class="py-2 pr-3">Neutrophils &gt; 7.5 x 10⁹/L</td><td class="py-2">Bacterial infection, stress response, corticosteroids, acute malaria (neutrophil-predominant leucocytosis mimicking bacterial sepsis)</td></tr>
      <tr><td class="py-2 pr-3">Lymphocytosis</td><td class="py-2 pr-3">Lymphocytes &gt; 4.0 x 10⁹/L (higher in children)</td><td class="py-2">Viral infections, pertussis in infants, atypical lymphocytosis in typhoid or viral hepatitis</td></tr>
      <tr><td class="py-2 pr-3">Eosinophilia</td><td class="py-2 pr-3">Eosinophils &gt; 0.5 x 10⁹/L</td><td class="py-2">Hookworm, ascariasis, schistosomiasis, filariasis, strongyloidiasis; allergic causes rank lower here than in non-endemic settings</td></tr>
      <tr><td class="py-2 pr-3">Leucopenia</td><td class="py-2 pr-3">Total WBC &lt; 4.0 x 10⁹/L</td><td class="py-2">Typhoid fever (classically leucopenic, not leucocytotic), viral infections, overwhelming sepsis (a late, ominous finding)</td></tr>
    </tbody>
  </table>
</div>
<ul class="list-disc pl-5 space-y-2 text-sm mt-3">
  <li>Malaria-associated neutrophilia arises through cytokine-mediated demargination and bone marrow release during the febrile paroxysm, and is indistinguishable on the differential alone from bacterial sepsis - a major driver of unnecessary co-prescription of antibiotics alongside antimalarials.</li>
  <li>Typhoid's classical leucopenia reflects endotoxin-mediated bone marrow suppression and splenic sequestration; a normal or raised WBC does not exclude typhoid, particularly with intestinal perforation or secondary bacterial infection, where a reactive leucocytosis can supervene.</li>
  <li>Marked eosinophilia, roughly above 1.5 x 10⁹/L, in a patient with nonspecific gastrointestinal or dermatological symptoms warrants stool microscopy for ova and parasites; empirical deworming is reasonable even without a confirmed organism, given the sensitivity limits of single-sample stool microscopy for helminth ova.</li>
</ul>
</div>

<!-- 4. Platelets -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Platelet Count
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto">
  <table class="w-full text-xs sans border-collapse">
    <thead>
      <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
        <th class="py-2 pr-3 font-medium">Category</th>
        <th class="py-2 pr-3 font-medium">Range</th>
        <th class="py-2 font-medium">Notes</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
      <tr><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">150-450 x 10⁹/L</td><td class="py-2">-</td></tr>
      <tr><td class="py-2 pr-3">Mild thrombocytopenia</td><td class="py-2 pr-3">100-150 x 10⁹/L</td><td class="py-2">Common, usually asymptomatic</td></tr>
      <tr><td class="py-2 pr-3">Moderate thrombocytopenia</td><td class="py-2 pr-3">50-100 x 10⁹/L</td><td class="py-2">Monitor; bleeding risk low without other coagulopathy</td></tr>
      <tr><td class="py-2 pr-3">Severe thrombocytopenia</td><td class="py-2 pr-3">&lt; 50 x 10⁹/L</td><td class="py-2">Bleeding risk rises, especially with trauma or invasive procedures</td></tr>
      <tr><td class="py-2 pr-3">Critical</td><td class="py-2 pr-3">&lt; 20 x 10⁹/L</td><td class="py-2">Spontaneous bleeding risk; consider transfusion if bleeding or pre-procedure</td></tr>
    </tbody>
  </table>
</div>
<ul class="list-disc pl-5 space-y-2 text-sm mt-3">
  <li>Thrombocytopenia in acute malaria is near-universal and multifactorial - splenic sequestration and destruction, bone marrow suppression, and immune-mediated destruction via antiplatelet antibodies triggered by the infection. It is usually not, on its own, an indication for platelet transfusion; the priority is antimalarial treatment, with the count typically recovering over 7-10 days.</li>
  <li>Dengue-associated thrombocytopenia, increasingly reported locally, tends to be more marked and is accompanied by capillary leak in severe disease - a rising haematocrit alongside falling platelets is a warning sign for progression to dengue haemorrhagic fever/dengue shock syndrome, distinct from the malaria pattern.</li>
  <li>Reactive thrombocytosis (&gt; 450 x 10⁹/L) occurs with iron deficiency, chronic inflammatory states, and hyposplenism - relevant in sickle cell disease patients who have autosplenectomised and lost the spleen's normal platelet-clearance function.</li>
</ul>
</div>

<!-- 5. Reading Order -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Putting It Together
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">A febrile patient with normocytic anaemia, neutrophilia, and thrombocytopenia fits acute malaria well - but the same trio with a rising haematocrit and a more marked platelet fall should raise dengue instead. A patient with microcytic anaemia and eosinophilia points toward hookworm-driven iron deficiency rather than a purely nutritional cause. A patient with macrocytic anaemia, jaundice, and a skull that shows frontal bossing on general examination should have a genotype checked before any other work-up proceeds. Reading the FBC as a pattern, alongside the clinical picture, consistently outperforms reading any single parameter against its printed reference range.</p>
</div>

<!-- 6. Critical values -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Findings That Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
<ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Hb below 4 g/dL, or any Hb with signs of cardiac strain</span> - transfuse with packed cells, slow rate, and diuretic cover.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Platelets below 20 x 10⁹/L</span> - spontaneous bleeding risk; consider transfusion if bleeding or before a procedure.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Rising haematocrit alongside falling platelets</span> in a febrile patient - a dengue warning sign, distinct from the malaria pattern, and a signal to escalate monitoring.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Chronic normocytic-to-macrocytic anaemia with jaundice, painful crises, or a spleen that has become impalpable over time</span> - check genotype; adult HbSS with autosplenectomy is easily missed.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A normal PCV immediately after acute haemorrhage</span> - PCV can remain deceptively normal for several hours before compensatory haemodilution occurs, and does not exclude significant blood loss.</span></li>
</ul>
</div>

<!-- 7. Pitfalls -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Common Pitfalls
</h2>

<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1 text-sm">
  <li>Interpreting the Hb number without requesting a film - a PCV of 28% could represent simple iron deficiency or an active haemolytic crisis, and the film (with reticulocyte count, where available) differentiates them.</li>
  <li>Treating a raised WBC as automatic confirmation of bacterial infection and adding antibiotics by default - malaria alone frequently produces a neutrophil-predominant leucocytosis.</li>
  <li>Assuming a normal or low WBC excludes serious infection - typhoid classically presents with a normal-to-low count.</li>
  <li>Dismissing eosinophilia as incidental rather than investigating it, in a population with substantial helminth burden.</li>
  <li>Pursuing platelet transfusion for isolated thrombocytopenia in confirmed malaria without active bleeding - rarely indicated, and platelet products are limited in most local blood banks regardless.</li>
  <li>Not considering dengue in a thrombocytopenic febrile patient once malaria and typhoid have been excluded, particularly during rainy season peaks in urban centres.</li>
  <li>Reading a single platelet value in isolation rather than trending it over 24-48 hours - the trajectory carries more information than one number.</li>
  <li>Attributing all anaemia in a febrile patient to malaria without film confirmation, particularly where hookworm prevalence means coexisting iron deficiency is common.</li>
</ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
<h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
<ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Request a peripheral film alongside the FBC by default in this setting, not only after an abnormal count - it is the single highest-yield addition available.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Malaria alone can mimic bacterial sepsis on the WBC differential - do not let a raised neutrophil count justify antibiotics by default.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Typhoid classically produces leucopenia - a normal or low WBC does not argue against the diagnosis.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Track platelets and haematocrit together over time in a febrile patient, not as single values - the trajectory distinguishes malaria from dengue.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check genotype in any adult with unexplained chronic anaemia and jaundice - autosplenectomised HbSS is easily missed on general examination alone.</span></li>
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
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Haemoglobin Concentrations for the Diagnosis of Anaemia and Assessment of Severity.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Treatment of Malaria.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Sickle Cell Foundation Nigeria - Clinical Guidelines for the Management of Sickle Cell Disease.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Nigeria Centre for Disease Control - Dengue Fever Situation Reports and Case Management Guidance.</li>
  </ul>
</div>
</details>

</body>
</html>
  `
},


// CLINICAL SCORING SYSTEMS
{
  id: 'scoring-glasgow-coma-scale',
  title: 'Glasgow Coma Scale',
  category: 'Clinical Scoring Systems',
  subCategory: 'Emergency',
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>The Glasgow Coma Scale (GCS)</title>
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Clinical Scoring Systems</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">The Glasgow Coma Scale (GCS)</h1>
  <p class="text-sm text-indigo-200">GCS is often the only objective marker of neurological status available at first contact, particularly outside centres with CT access. In many Nigerian emergency departments, the decision to refer, transfer, or manage conservatively rests heavily on a correctly scored and correctly trended GCS, since imaging may be delayed by hours or unavailable altogether.</p>
</div>
</div>

<!-- 1. Scoring Components -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
Scoring Components
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto">
  <table class="w-full text-xs sans border-collapse">
    <thead>
      <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
        <th class="py-2 pr-3 font-medium">Component</th>
        <th class="py-2 pr-3 font-medium">Response</th>
        <th class="py-2 font-medium">Score</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
      <tr><td class="py-2 pr-3 font-medium">Eye opening (E)</td><td class="py-2 pr-3">Spontaneous</td><td class="py-2">4</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">To voice</td><td class="py-2">3</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">To pain</td><td class="py-2">2</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">None</td><td class="py-2">1</td></tr>
      <tr><td class="py-2 pr-3 font-medium">Verbal response (V)</td><td class="py-2 pr-3">Oriented</td><td class="py-2">5</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Confused</td><td class="py-2">4</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Inappropriate words</td><td class="py-2">3</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Incomprehensible sounds</td><td class="py-2">2</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">None</td><td class="py-2">1</td></tr>
      <tr><td class="py-2 pr-3 font-medium">Motor response (M)</td><td class="py-2 pr-3">Obeys commands</td><td class="py-2">6</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Localises to pain</td><td class="py-2">5</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Withdraws from pain (normal flexion)</td><td class="py-2">4</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Abnormal flexion (decorticate)</td><td class="py-2">3</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Extension (decerebrate)</td><td class="py-2">2</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">None</td><td class="py-2">1</td></tr>
    </tbody>
  </table>
</div>
<p class="text-sm">Total score range: 3-15 (there is no 0, since the minimum on each component is 1). Report as total and as the E/V/M breakdown - for example, "GCS 10 = E3V3M4" - since the breakdown carries more information than the sum alone, and different combinations reaching the same total reflect different injury patterns.</p>
</div>

<!-- 2. Severity Classification -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Severity Classification
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto">
  <table class="w-full text-xs sans border-collapse">
    <thead>
      <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
        <th class="py-2 pr-3 font-medium">GCS</th>
        <th class="py-2 font-medium">Classification</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
      <tr><td class="py-2 pr-3">13-15</td><td class="py-2">Mild</td></tr>
      <tr><td class="py-2 pr-3">9-12</td><td class="py-2">Moderate</td></tr>
      <tr><td class="py-2 pr-3">&le; 8</td><td class="py-2">Severe - airway protection indicated</td></tr>
    </tbody>
  </table>
</div>
<p class="text-sm">A GCS of 8 or below is the conventional threshold for definitive airway management (intubation) - "GCS 8, intubate" - because a patient at this level typically cannot protect their airway against aspiration. This applies regardless of whether the low score comes from trauma, cerebral malaria, meningitis, or metabolic derangement, though it is a guideline rather than a mandate: a patient with an isolated severe verbal deficit (e.g. E4V1M6 = 11) may still need intubation for airway concerns despite a higher total, while a transiently post-ictal patient at GCS 7 may recover within minutes without intervention.</p>
</div>

<!-- 3. What Each Component Measures -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Scoring in Practice: What Each Component Measures
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-2 text-sm">
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Eye opening</span> reflects arousal, mediated by the reticular activating system, not cognition. A patient can score E4 and still have severely impaired cognition - eye opening alone should never be used as a proxy for overall consciousness.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Verbal response</span> is the component most affected by non-neurological factors: language barrier, hearing impairment, endotracheal intubation, and pre-existing dysphasia all reduce the verbal score without reflecting a change in neurological status. This is a frequent source of scoring error in Nigerian practice, particularly where the examining team and patient do not share a first language and confusion is misread as disorientation.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Motor response</span> carries the most prognostic weight of the three and should be scored using the best response obtained from any limb, not the worst and not an average. If one limb localises to pain and another only withdraws, the patient is scored M5, not M4.</li>
</ul>
</div>

<!-- 4. Common Scoring Errors -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Common Scoring Errors
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto">
  <table class="w-full text-xs sans border-collapse">
    <thead>
      <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
        <th class="py-2 pr-3 font-medium">Error</th>
        <th class="py-2 font-medium">Consequence</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
      <tr><td class="py-2 pr-3">Scoring verbal response as low in a patient simply unable to communicate in the examiner's language</td><td class="py-2">Falsely lowers total GCS; may trigger unnecessary escalation or intubation</td></tr>
      <tr><td class="py-2 pr-3">Using the worst limb response rather than the best for the motor score</td><td class="py-2">Falsely lowers total GCS</td></tr>
      <tr><td class="py-2 pr-3">Recording "GCS 3T" for an intubated patient without documenting that verbal is untestable</td><td class="py-2">The total becomes uninterpretable to a second reviewer; document as E and M scores with verbal marked untestable ("VT" or "NT"), rather than assigning an arbitrary verbal number or folding it silently into a single total</td></tr>
      <tr><td class="py-2 pr-3">Treating a single GCS value as sufficient, without a repeat assessment</td><td class="py-2">Deteriorating trends are missed; a GCS of 12 that was 15 two hours ago is a different clinical problem from a stable GCS of 12</td></tr>
      <tr><td class="py-2 pr-3">Assessing GCS immediately post-ictal, without allowing the post-ictal state to resolve</td><td class="py-2">Falsely suggests a lower baseline than the patient's true interictal status</td></tr>
      <tr><td class="py-2 pr-3">Not accounting for sedation, alcohol intoxication, or hypoglycaemia before attributing a low GCS to primary neurological pathology</td><td class="py-2">Delays correction of a reversible cause - hypoglycaemia should be excluded at the bedside with a glucometer in any patient with reduced GCS, before extensive neurological work-up</td></tr>
    </tbody>
  </table>
</div>
</div>

<!-- 5. Paediatric GCS -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Paediatric GCS (Under Approximately 2 Years)
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Standard adult verbal and motor criteria assume a level of language and cooperation that pre-verbal or minimally verbal children do not have. Eye opening scoring is unchanged from the adult scale; verbal and motor responses are age-adapted.</p>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Verbal Response (Infant)</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Response</th>
          <th class="py-2 font-medium">Score</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Coos, babbles appropriately</td><td class="py-2">5</td></tr>
        <tr><td class="py-2 pr-3">Irritable cry</td><td class="py-2">4</td></tr>
        <tr><td class="py-2 pr-3">Cries to pain</td><td class="py-2">3</td></tr>
        <tr><td class="py-2 pr-3">Moans to pain</td><td class="py-2">2</td></tr>
        <tr><td class="py-2 pr-3">None</td><td class="py-2">1</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Motor Response (Infant)</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Response</th>
          <th class="py-2 font-medium">Score</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Moves spontaneously and purposefully</td><td class="py-2">6</td></tr>
        <tr><td class="py-2 pr-3">Withdraws to touch</td><td class="py-2">5</td></tr>
        <tr><td class="py-2 pr-3">Withdraws to pain</td><td class="py-2">4</td></tr>
        <tr><td class="py-2 pr-3">Abnormal flexion to pain (decorticate)</td><td class="py-2">3</td></tr>
        <tr><td class="py-2 pr-3">Abnormal extension to pain (decerebrate)</td><td class="py-2">2</td></tr>
        <tr><td class="py-2 pr-3">None</td><td class="py-2">1</td></tr>
      </tbody>
    </table>
  </div>
</div>
<p class="text-sm">Using adult verbal criteria in an infant systematically underscores neurological status and can trigger inappropriate escalation. Where the child is intubated, preverbal, or otherwise unable to be scored on verbal or motor grounds, the motor response carries the most weight and should be evaluated carefully.</p>
</div>

<!-- 6. Blantyre Coma Scale -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
The Blantyre Coma Scale
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">The Blantyre Coma Scale is a distinct tool, not simply a shortcut version of the paediatric GCS - it was developed specifically to assess consciousness in preverbal children with cerebral malaria and is the standard scale used in malaria-endemic paediatric settings. It scores three components from 0-2 each (eye movement scored 0-1), for a total range of 0-5, with lower scores indicating worse consciousness. All scores below 5 are considered abnormal.</p>
<div class="overflow-x-auto">
  <table class="w-full text-xs sans border-collapse">
    <thead>
      <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
        <th class="py-2 pr-3 font-medium">Component</th>
        <th class="py-2 pr-3 font-medium">Response</th>
        <th class="py-2 font-medium">Score</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
      <tr><td class="py-2 pr-3 font-medium">Eye movement</td><td class="py-2 pr-3">Watches or follows (e.g. mother's face)</td><td class="py-2">1</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Fails to watch or follow</td><td class="py-2">0</td></tr>
      <tr><td class="py-2 pr-3 font-medium">Best verbal response</td><td class="py-2 pr-3">Cries appropriately with pain, or speaks (if verbal)</td><td class="py-2">2</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Moan or abnormal cry with pain</td><td class="py-2">1</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">No vocal response to pain</td><td class="py-2">0</td></tr>
      <tr><td class="py-2 pr-3 font-medium">Best motor response</td><td class="py-2 pr-3">Localises the painful stimulus</td><td class="py-2">2</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Withdraws the limb from the painful stimulus</td><td class="py-2">1</td></tr>
      <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">No response, or an inappropriate response</td><td class="py-2">0</td></tr>
    </tbody>
  </table>
</div>
<p class="text-sm">A Blantyre Coma Score of 2 or below is the threshold most commonly used to define coma for the clinical case definition of cerebral malaria in children, alongside falciparum parasitaemia and no other identifiable cause of coma.</p>
</div>

<!-- 7. Nigerian Context -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Context-Specific Considerations for Nigerian Practice
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Cerebral Malaria</strong>
  <p class="text-sm">GCS is central to the working definition of cerebral malaria: unarousable coma - most commonly cited as a GCS below 11 in adults (some series use a stricter threshold of 9 or below), or a Blantyre Coma Score of 2 or below in children - in a patient with falciparum parasitaemia and no other identifiable cause of coma. Serial GCS trending matters more than a single value here: a static or improving GCS on antimalarial treatment is reassuring, while a falling GCS despite treatment should prompt evaluation for raised intracranial pressure, hypoglycaemia (common in cerebral malaria, and partly quinine-induced where quinine is used), or secondary bacterial meningitis.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Meningitis</strong>
  <p class="text-sm">GCS trajectory, alongside neck stiffness and Kernig's/Brudzinski's signs, often has to substitute for neuroimaging and CSF analysis where lumbar puncture is delayed - coagulopathy screening unavailable, raised ICP not excluded - or the laboratory cannot process CSF promptly.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Head Injury Without CT Access</strong>
  <p class="text-sm">In facilities without CT, the GCS trend over the first 4-6 hours of observation, together with pupillary findings and lateralising motor signs, drives the decision to transfer to a centre with imaging rather than observe further. A deteriorating GCS - a drop of 2 or more points - is an indication for urgent transfer regardless of the absolute value.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 sans">Sickle Cell Disease with Acute Neurological Symptoms</strong>
  <p class="text-sm">A falling GCS in a known SCD patient should raise concern for stroke - ischaemic, from vaso-occlusion, or haemorrhagic - and prompt urgent referral for imaging where available, rather than being attributed to a pain crisis alone.</p>
</div>
</div>

<!-- 8. Reading Order -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Reading Order in Practice
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ol class="list-decimal pl-5 space-y-1 text-sm">
  <li>Establish reliable baseline conditions before scoring - correct hypoglycaemia, allow the post-ictal state to pass, account for sedation or intoxication where relevant.</li>
  <li>Score each component independently using the best response obtained.</li>
  <li>Report as the E/V/M breakdown, not only the total.</li>
  <li>Repeat serially - the trend is frequently more clinically useful than any single value.</li>
  <li>Interpret in context: cerebral malaria, meningitis, head injury, and metabolic coma all produce GCS changes through different mechanisms, and the accompanying signs (pupils, lateralising weakness, neck stiffness, fever pattern) narrow the differential.</li>
</ol>
</div>

<!-- 9. Findings not to be missed -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Findings That Must Not Be Missed
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
<ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">GCS of 8 or below</span> - manage the airway regardless of the presumed underlying cause.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A drop of 2 or more points on trend</span> - treat as significant deterioration and act, even if the absolute value still looks reassuring.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Any reduced GCS before extensive work-up</span> - check bedside glucose first; hypoglycaemia is a rapidly reversible cause that is easy to miss under time pressure.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A falling GCS in a known sickle cell disease patient</span> - treat as possible stroke and refer urgently for imaging, rather than attributing it to a pain crisis alone.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A falling GCS despite antimalarial treatment in suspected cerebral malaria</span> - evaluate for raised intracranial pressure, hypoglycaemia, or secondary bacterial meningitis rather than assuming slow treatment response.</span></li>
</ul>
</div>

<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
<h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
<ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always score and report the E/V/M breakdown, not just the total - the same number can hide very different injury patterns.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use the best response, not the worst or an average, for the motor score - and never assign an intubated patient's verbal component a number.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use the Blantyre Coma Scale, not the adult verbal criteria, in preverbal children - it is a distinct tool built for this purpose, not a simplified GCS.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Exclude hypoglycaemia at the bedside before attributing a low GCS to primary neurological disease.</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Trend GCS serially - a single value tells you far less than the trajectory, especially in cerebral malaria and evolving head injury.</span></li>
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
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Teasdale G, Jennett B - Assessment of Coma and Impaired Consciousness: A Practical Scale. Lancet, 1974.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Molyneux ME, Taylor TE - Blantyre Coma Scale for Young Children with Cerebral Malaria.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Treatment of Malaria (severe/cerebral malaria criteria).</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Kirkham FJ, Newton CR, Whitehouse W - Paediatric Coma Scales. Developmental Medicine and Child Neurology, 2008.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Nigeria Centre for Disease Control - Meningitis Surveillance and Response Guidelines.</li>
  </ul>
</div>
</details>

</body>
</html>
  `
},



// TREATMENT

{
  id: 'treatment-malaria',
  title: 'Malaria',
  category: 'Treatment',
  subCategory: 'Infectious Disease',
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Malaria: A Treatment Guideline for Nigerian Clinical Practice</title>
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
  <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Treatment</span>
  <h1 class="font-brand text-3xl font-bold mb-3 text-white">Malaria</h1>
  <p class="text-sm text-indigo-200">Malaria remains the most common cause of febrile illness presenting to Nigerian health facilities. Five <em>Plasmodium</em> species infect humans - <em>P. falciparum</em>, <em>P. malariae</em>, <em>P. vivax</em>, <em>P. ovale</em>, and <em>P. knowlesi</em> - but <em>P. falciparum</em> accounts for roughly 98% of Nigerian cases and is responsible for essentially all severe disease. Transmission is via the bite of an infected female <em>Anopheles</em> mosquito, with peak biting at dusk, dawn, and through the night; blood transfusion and mother-to-child transmission are recognised but uncommon routes.</p>
</div>
</div>

<!-- 1. Overview -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
Overview
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Nigeria carries one of the highest global burdens of malaria, which shapes several practice points that differ from lower-transmission settings elsewhere: near-universal population exposure produces a spectrum from silent parasitaemia to fulminant severe disease, over-reliance on clinical diagnosis remains a persistent problem, and chemoprevention strategies aimed at low-transmission contexts (e.g. transmission-blocking primaquine) are less central here than in many WHO-referenced examples.</p>
</div>

<!-- 2. Classification -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
Classification
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto">
  <table class="w-full text-xs sans border-collapse">
    <thead>
      <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
        <th class="py-2 pr-3 font-medium">Category</th>
        <th class="py-2 font-medium">Definition</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
      <tr><td class="py-2 pr-3 font-medium">Asymptomatic parasitaemia</td><td class="py-2">Parasites present on blood film with no symptoms; occurs in older children and adults with acquired partial immunity in high-endemicity areas</td></tr>
      <tr><td class="py-2 pr-3 font-medium">Acute uncomplicated malaria</td><td class="py-2">Symptomatic infection without any severity feature listed in Section 5</td></tr>
      <tr><td class="py-2 pr-3 font-medium">Severe (complicated) malaria</td><td class="py-2">A medical emergency - presence of any clinical or laboratory severity feature (Section 5)</td></tr>
    </tbody>
  </table>
</div>
</div>

<!-- 3. Clinical Presentation -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
Clinical Presentation
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Uncomplicated malaria</span> presents with nonspecific systemic symptoms: fever, chills, headache, malaise, body/joint aches, weakness, anorexia, nausea and vomiting, a bitter taste in the mouth, excessive sweating, and pallor. Hepatosplenomegaly and mild jaundice can occur even in uncomplicated disease.</p>
<p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Differential diagnoses to actively consider</span>, given overlapping presentations: typhoid fever, meningitis, encephalitis, septicaemia, and other causes of fever. Malaria should never be a diagnosis of exclusion arrived at by default - parasitological confirmation (Section 4) is what separates malaria from these mimics, not the clinical picture alone.</p>
</div>

<!-- 4. Diagnosis -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
Diagnosis
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1 text-sm">
  <li>Clinical diagnosis alone is presumptive and is explicitly associated with over-diagnosis; it should not be relied upon to initiate treatment.</li>
  <li><span class="font-medium text-slate-800 dark:text-slate-200">Parasitological confirmation is required in all suspected cases</span> before treatment - by microscopy or rapid diagnostic test (RDT).</li>
  <li>Light microscopy remains the gold standard, allowing species identification and parasite density quantification. RDTs are the practical first-line test at primary health care level.</li>
  <li>Microscopic confirmation should <span class="font-medium text-slate-800 dark:text-slate-200">not</span> delay treatment where there is clinical suspicion of severe malaria - treat first, confirm in parallel.</li>
</ul>
<p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Supporting investigations</span> (guided by clinical severity and differential): full blood count with differential, packed cell volume/haemoglobin, blood glucose, urinalysis, electrolytes/urea/creatinine, stool microscopy where relevant, chest radiograph, and CSF analysis where meningitis cannot be excluded clinically.</p>
</div>

<!-- 5. Severe Malaria Recognition -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
Recognising Severe Malaria
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<p class="text-sm">Severe malaria is a medical emergency. Any one of the following - clinical or laboratory - defines it.</p>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Clinical Features</strong>
  <p class="text-sm">Prostration; impaired consciousness or unrousable coma; failure to feed (children); respiratory distress; multiple convulsions (more than 2 episodes in 24 hours); circulatory collapse (algid malaria); pulmonary oedema (radiological); abnormal bleeding/DIC; jaundice.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Laboratory Features</strong>
  <p class="text-sm">Severe anaemia; hypoglycaemia (blood glucose &lt; 2.2 mmol/L); metabolic acidosis (arterial pH &lt; 7.3, serum HCO&#8323; &lt; 15 mmol/L); haemoglobinuria (black-water fever); renal impairment (creatinine &gt; 265 &micro;mol/L); hyperlactataemia (&gt; 5 mmol/L); hyperparasitaemia (&gt; 5% or &gt; 250,000/&micro;L).</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Poor Prognostic Indicators</strong>
  <p class="text-sm">Marked agitation, hyperventilation, hypothermia (&lt; 36.5&deg;C), deep coma, repeated convulsions, active bleeding, anuria, haemodynamic shock; hyperparasitaemia &gt; 100,000/&micro;L (~2% infected cells), &gt; 20% of parasites at late (schizont) stage on film, elevated total bilirubin (&gt; 50 &micro;mol/L), leukocytosis (&gt; 12,000/&micro;L), thrombocytopenia (&lt; 50,000/&micro;L), prolonged prothrombin time, and low fibrinogen.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cerebral Malaria</strong>
  <p class="text-sm">A specific severe presentation: coma persisting more than 30 minutes after a seizure, occurring mainly in children and non-immune adults, with diffuse symmetric encephalopathy. Focal neurological signs are unusual and should prompt consideration of an alternative or additional diagnosis.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Complications</strong>
  <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Early:</span> pneumonia, septicaemia; in pregnancy - preterm labour, abortion, low birth weight, intrauterine death, congenital malaria. <span class="font-medium text-slate-800 dark:text-slate-200">Late:</span> hyperreactive malarial splenomegaly, quartan malaria nephropathy, and a possible association with Burkitt's lymphoma.</p>
</div>
</div>

<!-- 6. Treatment of Uncomplicated Malaria -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
Treatment of Uncomplicated Malaria
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">General Principles</strong>
  <p class="text-sm">Treatment goals: eradicate parasitaemia, prevent progression to severe disease, prevent gametocyte transmission, and address any immediate threat to life. Artemisinin-based Combination Therapy (ACT) is first-line, globally and in Nigeria. <span class="font-medium text-slate-800 dark:text-slate-200">Artemether-Lumefantrine (AL) is the preferred agent.</span> Alternatives include Artesunate-Amodiaquine (AA), Dihydroartemisinin-Piperaquine, and Artesunate-Pyronaridine.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Dosing - Artemether-Lumefantrine (AL)</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Weight</th>
          <th class="py-2 pr-3 font-medium">20/120 mg tablet</th>
          <th class="py-2 pr-3 font-medium">40/240 mg tablet</th>
          <th class="py-2 font-medium">80/480 mg tablet</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">5-&lt;15 kg</td><td class="py-2 pr-3">1 tab twice daily &times; 3 days</td><td class="py-2 pr-3">-</td><td class="py-2">-</td></tr>
        <tr><td class="py-2 pr-3">15-&lt;25 kg</td><td class="py-2 pr-3">2 tabs twice daily &times; 3 days</td><td class="py-2 pr-3">1 tab twice daily &times; 3 days</td><td class="py-2">-</td></tr>
        <tr><td class="py-2 pr-3">25-&lt;35 kg</td><td class="py-2 pr-3">3 tabs twice daily &times; 3 days</td><td class="py-2 pr-3">-</td><td class="py-2">-</td></tr>
        <tr><td class="py-2 pr-3">&gt;35 kg</td><td class="py-2 pr-3">4 tabs twice daily &times; 3 days</td><td class="py-2 pr-3">2 tabs twice daily &times; 3 days</td><td class="py-2">1 tab twice daily &times; 3 days</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm mt-2">Give with a fatty meal or milk where possible - this improves lumefantrine absorption.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Dosing - Artesunate-Amodiaquine (AA)</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Weight/Age</th>
          <th class="py-2 pr-3 font-medium">Tablet strength</th>
          <th class="py-2 font-medium">Regimen</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">4.5-&lt;9 kg (2-11 months)</td><td class="py-2 pr-3">25/67.5 mg</td><td class="py-2">1 tablet once daily &times; 3 days</td></tr>
        <tr><td class="py-2 pr-3">9-&lt;18 kg (1-5 years)</td><td class="py-2 pr-3">50/135 mg</td><td class="py-2">1 tablet once daily &times; 3 days</td></tr>
        <tr><td class="py-2 pr-3">18-&lt;36 kg (6-13 years)</td><td class="py-2 pr-3">100/270 mg</td><td class="py-2">1 tablet once daily &times; 3 days</td></tr>
        <tr><td class="py-2 pr-3">&ge;36 kg (&ge;14 years)</td><td class="py-2 pr-3">100/270 mg</td><td class="py-2">2 tablets once daily &times; 3 days</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm mt-2">Infants &lt; 5 kg should still be treated with an ACT, but under direct provider supervision.</p>
</div>
</div>

<!-- Guideline Watch: First trimester -->
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6">
<h3 class="font-brand flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
  <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#d97706"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg>
  Guideline Watch - First-Trimester Pregnancy Treatment
</h3>
<p class="text-sm text-amber-900 dark:text-amber-300 mb-2">This is the single point in this guideline where Nigerian source documents and current global evidence do not all agree, and it matters clinically.</p>
<ul class="list-disc pl-5 space-y-1 text-sm text-amber-900 dark:text-amber-300">
  <li><span class="font-medium">FMOH STG (2022):</span> ACTs recommended across all trimesters of pregnancy, without a separate first-trimester regimen.</li>
  <li><span class="font-medium">NHIA STGRP (2025):</span> specifies oral quinine sulphate 10 mg/kg 8-hourly plus clindamycin 10 mg/kg 12-hourly for first-trimester uncomplicated malaria, with same-day referral if the patient cannot tolerate oral treatment or symptoms persist.</li>
  <li><span class="font-medium">Current WHO guidance (updated 2022):</span> recommends artemether-lumefantrine specifically for first-trimester uncomplicated malaria, based on safety data showing fewer adverse pregnancy outcomes than quinine. This replaced the older quinine-plus-clindamycin standard that the NHIA document still reflects.</li>
</ul>
<p class="text-sm text-amber-900 dark:text-amber-300 mt-2"><span class="font-medium">Practical takeaway:</span> where AL is available, current evidence supports using it in the first trimester rather than defaulting to quinine plus clindamycin. The quinine-based regimen is a reasonable fallback where AL is genuinely unavailable, not a preferred first choice. Following the newer-dated Nigerian document (NHIA 2025) on this specific point would mean practising a step behind current global evidence.</p>
</div>

<!-- 7. Treatment of Severe Malaria -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
Treatment of Severe Malaria
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Pre-Referral Treatment</strong>
  <p class="text-sm">Where definitive parenteral care is not immediately available, give one of the following as soon as severe malaria is suspected, without waiting for confirmation or transfer, in order of preference:</p>
  <div class="overflow-x-auto mt-2">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Route</th>
          <th class="py-2 font-medium">Dose</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Rectal artesunate</td><td class="py-2">10 mg/kg body weight, single dose</td></tr>
        <tr><td class="py-2 pr-3">IM artesunate</td><td class="py-2">3 mg/kg (children &lt; 6 years or &lt; 20 kg); 2.4 mg/kg (older children/adults)</td></tr>
        <tr><td class="py-2 pr-3">IM artemether</td><td class="py-2">3.2 mg/kg</td></tr>
        <tr><td class="py-2 pr-3">IM quinine</td><td class="py-2">10 mg/kg</td></tr>
      </tbody>
    </table>
  </div>
</div>
</div>

<!-- Guideline Watch: PHC severe malaria -->
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6">
<h3 class="font-brand flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
  <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#d97706"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg>
  Guideline Watch - Severe Malaria at First Point of Contact
</h3>
<p class="text-sm text-amber-900 dark:text-amber-300">The NHIA STGRP (PHC-level protocol) directs providers to give oral Artesunate-Amodiaquine 200/540 mg daily for 3 days (or Artesunate-Mefloquine 200/440 mg daily for 3 days if the patient is on efavirenz) as a stabilisation measure in severe malaria, with same-day referral if the patient is pregnant, cannot tolerate oral treatment, or is not improving. This is not a substitute for parenteral treatment - it reflects the reality that many PHC facilities do not stock IV artesunate. Where parenteral treatment is available at any level, it should be used in preference to this oral pre-referral approach.</p>
</div>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Definitive Treatment - Parenteral Artesunate (Drug of Choice)</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Group</th>
          <th class="py-2 font-medium">Regimen</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Adults and children &gt; 20 kg</td><td class="py-2">Artesunate 2.4 mg/kg IV or IM at 0, 12, and 24 hours, then once daily. No upper limit to total dose.</td></tr>
        <tr><td class="py-2 pr-3">Children &le; 20 kg</td><td class="py-2">Artesunate 3 mg/kg IV or IM at 0, 12, and 24 hours, then once daily</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm mt-2">If parenteral artesunate is unavailable, alternatives are artemether 3.2 mg/kg IM on admission then 1.6 mg/kg/day, or quinine 20 mg salt/kg IV infusion or divided IM on admission then 10 mg/kg every 8 hours (infusion rate must not exceed 5 mg/kg/hour).</p>
  <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Minimum duration:</span> give parenteral antimalarials for at least 24 hours once started, regardless of how soon the patient can tolerate oral intake.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Follow-On (Oral) Treatment</strong>
  <p class="text-sm">Once the patient has completed a minimum of 24 hours of parenteral treatment and can tolerate oral intake, complete a full 3-day course of ACT (AL, AA, DHA-piperaquine, or pyronaridine-artesunate) - irrespective of how many days of parenteral artesunate preceded it.</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Supportive Management in Severe Malaria</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Complication</th>
          <th class="py-2 font-medium">Management</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Fever</td><td class="py-2">Paracetamol (oral/rectal); tepid sponging and fanning if temperature &gt; 38.5&deg;C</td></tr>
        <tr><td class="py-2 pr-3">Pulmonary oedema</td><td class="py-2">Nurse upright (cardiac position), give oxygen, furosemide 2-4 mg/kg IV; exclude anaemia as a contributing cause before diuresis</td></tr>
        <tr><td class="py-2 pr-3">Renal failure</td><td class="py-2">Fluid challenge if dehydrated (0.9% saline 20 mL/kg) with furosemide 1-2 mg/kg; catheterise to monitor output; refer for renal replacement therapy if anuric beyond 24 hours</td></tr>
        <tr><td class="py-2 pr-3">Profuse bleeding</td><td class="py-2">Transfuse screened fresh whole blood; give pre-referral treatment and refer urgently</td></tr>
        <tr><td class="py-2 pr-3">Suspected meningitis, unexcluded</td><td class="py-2">Give appropriate antibiotics empirically if lumbar puncture cannot be performed immediately</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Not recommended:</span> high-dose corticosteroids and other anti-inflammatory agents, agents used for cerebral oedema (e.g. urea), adrenaline, and heparin.</p>
  <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Caution:</span> avoid mefloquine in patients with a history of cerebral malaria, given increased risk of seizure, encephalopathy, and psychosis.</p>
</div>
</div>

<!-- 8. Prevention -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
Prevention
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Personal Protection</strong>
  <p class="text-sm">Avoid exposure at peak biting times (dusk, dawn, throughout the night). Insect repellents, appropriate clothing, and insecticide-treated bed nets (ITNs).</p>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Chemoprophylaxis - Indicated For</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Non-immune travellers to endemic areas.</li>
    <li>Children born to non-immune mothers in endemic areas.</li>
    <li>Pregnant women (see IPTp-SP below).</li>
    <li>Patients with sickle cell disease, who should receive regular chemoprophylaxis.</li>
  </ul>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Chemoprophylaxis Regimens (Non-Immune Travellers)</strong>
  <div class="overflow-x-auto">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Agent</th>
          <th class="py-2 font-medium">Regimen</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">Mefloquine</td><td class="py-2">5 mg base/kg weekly (adult dose 250 mg base weekly); start 2-3 weeks before arrival, continue weekly throughout stay, and for 2-3 weeks after departure. Contraindicated in children &lt; 8 years and in pregnancy.</td></tr>
        <tr><td class="py-2 pr-3">Atovaquone-Proguanil</td><td class="py-2">Fixed-dose combination, daily; start 1-2 days before arrival, continue throughout stay, and for 7 days after departure</td></tr>
      </tbody>
    </table>
  </div>
  <div class="overflow-x-auto mt-3">
    <table class="w-full text-xs sans border-collapse">
      <thead>
        <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3 font-medium">Weight</th>
          <th class="py-2 pr-3 font-medium">Total daily dose</th>
          <th class="py-2 font-medium">Regimen</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
        <tr><td class="py-2 pr-3">11-20 kg</td><td class="py-2 pr-3">62.5/25 mg</td><td class="py-2">1 paediatric tablet daily</td></tr>
        <tr><td class="py-2 pr-3">21-30 kg</td><td class="py-2 pr-3">125/50 mg</td><td class="py-2">2 paediatric tablets daily</td></tr>
        <tr><td class="py-2 pr-3">31-40 kg</td><td class="py-2 pr-3">187.5/75 mg</td><td class="py-2">3 paediatric tablets daily</td></tr>
        <tr><td class="py-2 pr-3">&gt;40 kg</td><td class="py-2 pr-3">250/100 mg</td><td class="py-2">1 adult tablet daily</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div>
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">IPTp-SP (Intermittent Preventive Treatment in Pregnancy)</strong>
  <p class="text-sm">Sulfadoxine-pyrimethamine 3 tablets (500/25 mg), given at each scheduled antenatal visit, at least 1 month apart, starting in the second trimester.</p>
</div>
</div>

<!-- Guideline Watch: IPTp-SP -->
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6">
<h3 class="font-brand flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
  <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#d97706"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg>
  Guideline Watch - IPTp-SP Duration
</h3>
<p class="text-sm text-amber-900 dark:text-amber-300">The NHIA STGRP states dosing should stop at 36 weeks. Current WHO policy is to continue SP dosing at every antenatal visit through to delivery, with no stated cutoff week - stopping earlier would leave the remainder of pregnancy unprotected relative to global guidance.</p>
</div>

<!-- 9. Referral Criteria -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Referral Criteria (Red Flags)
</h2>

<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
<p class="text-sm text-rose-900 dark:text-rose-300 mb-3">Refer urgently from a primary center to a higher level center for any of the following:</p>
<ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>No improvement, or worsening, on first-line oral treatment</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Fits/seizures, drowsiness, altered consciousness, or meningism</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Respiratory distress or oxygen saturation concerns</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>BP &lt; 90/60 or other signs of circulatory compromise</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Severe abdominal pain or jaundice</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Easy bleeding or bruising</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Inability to sit up or walk unaided</span></li>
  <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Pregnancy with severe malaria, or any patient unable to tolerate oral medication when oral treatment was planned</span></li>
</ul>
</div>

<!-- 10. Patient Education -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Patient Health Education Points
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1 text-sm">
  <li>Advise on avoiding mosquito bites: sleep under an ITN, eliminate standing water collections nearby, cover up after dusk.</li>
  <li>Explicitly advise against self-medication, which contributes to resistance.</li>
  <li>Reinforce compliance with the full treatment course, even once symptoms improve.</li>
  <li>Reinforce compliance with referral advice when given.</li>
</ul>
</div>

<!-- Key Clinical Takeaways / Algorithm -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
<h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Summary Treatment Algorithm</h3>
<ol class="list-decimal pl-5 space-y-2 text-sm text-indigo-900 dark:text-indigo-300">
  <li>Suspect malaria on clinical grounds &rarr; confirm parasitologically (RDT or microscopy) before treating, unless severe malaria is suspected, in which case treat first and confirm in parallel.</li>
  <li>Classify: asymptomatic parasitaemia / uncomplicated / severe.</li>
  <li><span class="font-medium">Uncomplicated, not pregnant, or 2nd/3rd trimester:</span> AL first-line, AA or other ACT as alternative, full 3-day course.</li>
  <li><span class="font-medium">Uncomplicated, 1st trimester:</span> AL where available (current best evidence); quinine + clindamycin as fallback where AL is unavailable.</li>
  <li><span class="font-medium">Severe malaria, any trimester or age:</span> parenteral artesunate as soon as possible (any level of care); pre-referral rectal/IM artesunate, artemether, or quinine if transfer is needed; minimum 24 hours parenteral before switching to a full oral ACT course.</li>
  <li>Manage complications supportively; refer per red flags in Section 9.</li>
  <li>Reinforce prevention: ITNs, chemoprophylaxis where indicated, IPTp-SP through pregnancy (to delivery).</li>
</ol>
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
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines, 2022 edition.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Health Insurance Authority - Standard Treatment Guidelines and Referral Protocol for Primary Health Care Providers, 2025 edition.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Treatment of Malaria (current edition, including 2022 update on first-trimester treatment).</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Malaria Elimination Programme, Nigeria - Case Management Guidelines.</li>
  </ul>
</div>
</details>

</body>
</html>
  `
},

// COUNSELLING
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
  <p class="text-sm text-indigo-200">Hypertension counselling succeeds or fails less on what is explained and more on whether specific, commonly held misconceptions are directly corrected. This guide gives a structured session with the actual language to use, adapted for a Nigerian clinical setting - from diet and salt substitution to herbal remedy disclosure and medication adherence barriers.</p>
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

<!-- 5. BP targets -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
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
<p class="text-sm">Encourage home monitoring where feasible (see Section 10).</p>
</div>

<!-- 6. Lifestyle -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
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

<!-- 7. Medication counselling -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
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

<!-- 8. Adherence -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
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

<!-- 9. Herbal -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
Herbal Medication and Hypertension
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm">Ask specifically and non-judgmentally at every visit, not only at diagnosis.</p>
<p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Do you take any herbal medicines, supplements, or traditional remedies? Some herbal preparations may contain substances that can raise blood pressure or interfere with your prescribed medications."</p>
<p class="text-sm">Patients frequently do not volunteer herbal use unless asked in a way that does not feel like an accusation - repeated, routine, non-judgmental asking yields more accurate disclosure than a single question at the first visit.</p>
</div>

<!-- 10. Home BP monitoring -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
Home Blood Pressure Monitoring
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Before checking:</span> rest for 5 minutes; avoid caffeine or exercise in the 30 minutes prior; sit with back supported, feet flat on the floor, arm supported at heart level; use an appropriately sized cuff.</p>
<p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Record:</span> date, time, reading, pulse rate, and any symptoms - bring the record to clinic visits.</p>
<p class="text-sm">A poorly taken home reading (wrong posture, immediately after activity, wrong cuff size) can undermine confidence in either direction - falsely reassuring or falsely alarming - so technique should be checked, not assumed, at least once in person.</p>
</div>

<!-- 11. Warning symptoms -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
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

<!-- 12. Follow-up -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
Follow-Up Plan
</h2>

<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<p class="quote border-indigo-300 dark:border-indigo-600 pl-4 italic text-sm">"Regular clinic visits allow us to check whether the treatment is working and whether your organs are being protected."</p>
<p class="text-sm">Set an explicit expectation for what follow-up involves - this converts an ambiguous "come back sometime" into a stated plan the patient can recognise deviations from: blood pressure review, weight monitoring, kidney function tests (urea, electrolytes, creatinine), urinalysis, blood glucose, lipid profile, and ECG where indicated. Initial follow-up is typically every 1-4 weeks until target BP is reached, then every 3-6 months once stable.</p>
<p class="text-sm">Also establish, explicitly, what to do about a missed dose - take it as soon as remembered unless close to the next scheduled dose, and do not double up - since this specific scenario is rarely addressed proactively and is a common point of confusion between visits.</p>
</div>

<!-- 13. Closing -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
<span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
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
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - HEARTS Technical Package for Cardiovascular Disease Management in Primary Health Care.</li>
    <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>International Society of Hypertension - Global Hypertension Practice Guidelines.</li>
  </ul>
</div>
</details>

</body>
</html>
  `
},

// PROCEDURES
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
    <p>📹 <span class="font-medium">Simple Interrupted Suture - OSCE Guide (Geeky Medics):</span> step-by-step written guide with images and embedded video demonstration.<br>
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
    <p>📹 <span class="font-medium">Suturing Guides collection (Geeky Medics):</span> covers vertical mattress, horizontal mattress, and subcuticular suturing with a written guide and video for each.<br>
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