
export type LearningModuleCategory = 'Symptom Clerking' | 'Physical Examination' | 'Laboratory Interpretation' | 'Clinical Scoring Systems' | 'Counselling';

export interface LearningModule {
  id: string;
  title: string;
  category: LearningModuleCategory;
  content: string; 
}

export const clerklyLearnLibrary: LearningModule[] = [
  {
    id: 'symptom-clerking-fever',
    title: 'Fever',
    category: 'Symptom Clerking',
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">SYMPTOMS</span>
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
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Head/neuro:</span> headache (severity/character), neck stiffness, photophobia, seizures, confusion, or a behaviour change noticed by relatives.</li>
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
  <ul class="list-disc pl-5 space-y-2 text-sm text-rose-900 dark:text-rose-300">
    <li><span class="font-medium">Severe malaria (WHO criteria)</span> - impaired consciousness/prostration, repeated convulsions, respiratory distress, circulatory collapse/shock, abnormal bleeding, jaundice, severe anaemia, hypoglycaemia, renal impairment. Any one mandates treatment as severe disease.</li>
    <li><span class="font-medium">Sepsis</span> - hypotension, altered mental status, tachypnoea (qSOFA). Prompts urgent source identification and early antibiotics.</li>
    <li><span class="font-medium">Meningitis</span> - neck stiffness, photophobia, non-blanching rash, seizures, reduced conscious level.</li>
    <li><span class="font-medium">Lassa fever</span> - unexplained bleeding, exudative sore throat, facial/neck swelling, pregnancy (higher mortality, especially third trimester), contact with a confirmed/suspected case.</li>
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
 
<!-- 6. Documentation Format -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
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
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
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
  <ul class="list-disc pl-5 space-y-1.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li>Test before you treat - confirm malaria parasitologically before starting antimalarials, per NMEP's T3 policy.</li>
    <li>A single Widal test should never be the sole basis for a typhoid diagnosis in an endemic population.</li>
    <li>Unexplained fever with bleeding, sore throat, or facial swelling in season should trigger isolation and Lassa workup, not just reassurance.</li>
    <li>Reassess febrile patients who currently look well - deterioration in severe malaria and sepsis can be rapid.</li>
    <li>Notify NCDC or the state epidemiologist promptly for any suspected notifiable disease.</li>
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

    `
  }
]
