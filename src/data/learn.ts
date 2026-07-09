
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

    `
  },
  {
    id: 'symptom-clerking-headache',
    title: 'Headache',
    category: 'Symptom Clerking',
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
    <p class="text-sm text-indigo-200">Headache is an almost universal complaint, and most cases seen in Nigerian outpatient and emergency settings are benign - tension-type headache or migraine. But headache is also the presenting complaint for some of the most dangerous conditions in medicine: cerebral malaria, meningitis, hypertensive emergency, pre-eclampsia/eclampsia, and subarachnoid haemorrhage. This guide focuses on the history and examination that separate the benign from the dangerous, before closing with the investigations and differentials they point you towards.</p>
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
    id: 'symptom-clerking-',
    title: 'Headache',
    category: 'Symptom Clerking',
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
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Approach to Clerking a Patient with Chest Pain</h1>
    <p class="text-sm text-indigo-200">Chest pain always needs to be taken seriously, even in younger patients, since the range of causes spans from musculoskeletal strain to acute coronary syndrome, tuberculous pericarditis, and acute chest syndrome in sickle cell disease - the last of which is a leading cause of mortality in that population and is easy to miss if not actively considered. This guide focuses on the history and examination that separate benign chest pain from the causes that need urgent action, before closing with investigations, differentials, and treatment.</p>
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
      <li>When did it start, and how long has it lasted - seconds, minutes, or hours?</li>
      <li>Where exactly is it, and does it radiate anywhere - the arm, jaw, back, or between the shoulder blades?</li>
      <li>What is the character - crushing/tight ("like a weight on the chest"), sharp and stabbing, tearing, or a dull ache?</li>
      <li>How severe is it, on a scale of 1 to 10?</li>
      <li>What brings it on or worsens it - exertion, deep breathing, lying flat, movement, or pressing on the chest wall?</li>
      <li>What relieves it - rest, sitting forward, or antacids?</li>
      <li>Has the patient had similar pain before, and if so, was a cause ever found?</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Associated Symptoms - A System-by-System Sweep</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiac/vascular:</span> breathlessness, palpitations, sweating, nausea, light-headedness, or syncope.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Respiratory:</span> cough, haemoptysis, or pain worse on deep breathing (pleuritic pain).</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">General/infective:</span> fever, night sweats, weight loss.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gastrointestinal:</span> heartburn, regurgitation, or a relationship to meals or lying flat.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal:</span> reproducible pain on pressing the chest wall, or a recent injury/unusual physical exertion.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Vascular:</span> leg swelling or calf pain (raises DVT/PE), especially after a period of immobility.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Psychological:</span> associated anxiety, a sense of impending doom, or hyperventilation - though this should only be considered after more serious causes have been excluded.</li>
    </ul>
  </div>
</div>
 
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Directed Risk History - What to Specifically Ask, and Why</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Cardiovascular risk factors:</span> known hypertension, diabetes, smoking, family history of heart disease or sudden cardiac death, and how well-controlled any known conditions are.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Sickle cell disease:</span> Known genotype? Any previous episodes of acute chest syndrome? (Chest pain with fever and hypoxia in a known sickle cell patient must actively raise acute chest syndrome, not be assumed to be a routine crisis.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Rheumatic/valvular heart disease:</span> Known murmur or history of rheumatic fever as a child?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">TB/HIV status:</span> Known HIV status or TB contact? (Tuberculous pericarditis is an important and often under-recognized cause of chest pain and pericardial effusion locally, particularly in HIV-positive patients.)</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">DVT/PE risk:</span> Recent surgery, prolonged immobility, long travel, pregnancy, or hormonal contraceptive use?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Trauma:</span> Any recent chest injury?</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Substance use:</span> Any stimulant use (e.g. cocaine), which can precipitate coronary spasm even in younger patients.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin changes:</span> Any rash or blistering along a dermatome preceding the pain? (Raises herpes zoster.)</li>
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
      <li>Does the patient look well, distressed, diaphoretic, or acutely unwell?</li>
      <li>Heart rate, blood pressure (ideally in both arms if aortic dissection is a concern - a significant difference between arms is a red flag), respiratory rate, and oxygen saturation.</li>
      <li>Temperature - fever alongside chest pain raises an infective or inflammatory cause (pneumonia, pericarditis, acute chest syndrome).</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cardiac Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Murmurs</span> - raise valvular disease, including rheumatic heart disease.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Pericardial friction rub</span> - suggests pericarditis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Muffled heart sounds with raised jugular venous pressure and hypotension (Beck's triad)</span> - raises cardiac tamponade, a medical emergency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Gallop rhythm, raised JVP, and peripheral oedema</span> - point towards heart failure.</li>
    </ul>
  </div>
  <div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Respiratory and Other Examination</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Reduced or absent breath sounds with hyperresonance</span> - raises pneumothorax; tracheal deviation and haemodynamic instability suggest tension pneumothorax, a time-critical emergency.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Crepitations or bronchial breathing</span> - raises pneumonia or heart failure.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest wall palpation</span> - reproducible tenderness on palpation supports (but does not confirm) a musculoskeletal cause.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Leg examination</span> - unilateral swelling, warmth, or tenderness raises DVT, relevant if PE is being considered.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Skin</span> - a vesicular rash in a dermatomal distribution supports herpes zoster.</li>
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
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Crushing central chest pain with radiation, sweating, or haemodynamic instability</span> - treat as acute coronary syndrome until excluded by ECG and further assessment.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Acute chest syndrome in a known sickle cell patient</span> - fever, chest pain, and hypoxia; a leading cause of mortality in sickle cell disease and easy to under-triage as "just a crisis."</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Tension pneumothorax</span> - severe respiratory distress, tracheal deviation, hypotension; needs immediate decompression, not investigation first.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Cardiac tamponade</span> - hypotension, raised JVP, and muffled heart sounds (Beck's triad); a medical emergency, and should raise suspicion of an underlying pericardial effusion (including TB-related).</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Tearing chest/back pain with unequal blood pressure between arms</span> - raises aortic dissection; rare, but catastrophic if missed.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Sudden severe pleuritic pain with breathlessness and hypoxia</span> - raises pulmonary embolism, particularly with a relevant risk factor.</span></li>
  </ul>
</div>
 
<!-- 4. Investigations -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Important Investigations
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">ECG</span> - obtain promptly in essentially every patient with chest pain that could plausibly be cardiac; repeat if the first is normal but suspicion remains high.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Troponin</span> - where available, to support or exclude myocardial injury.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pulse oximetry</span> - in every patient with chest pain, regardless of apparent severity.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Chest radiograph</span> - for most chest pain presentations; can reveal pneumonia, pneumothorax, cardiomegaly, or a widened mediastinum.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">FBC</span> - relevant to infection and, in a known sickle cell patient, to supporting or refuting an evolving crisis/acute chest syndrome.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Echocardiography</span> - where pericardial effusion, valvular disease, or heart failure is suspected.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Blood glucose and lipid profile</span> - part of overall cardiovascular risk assessment.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">D-dimer/further imaging</span> - where PE is suspected and resources allow; clinical probability scoring should guide use where D-dimer or CT pulmonary angiography is not readily available.</li>
  </ul>
</div>
 
<!-- 5. Differentials -->
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Differential Diagnoses to Consider
</h2>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute coronary syndrome/angina</span> - crushing central pain, radiation, sweating, breathlessness; consider even in younger patients with risk factors.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute chest syndrome (sickle cell disease)</span> - fever, chest pain, hypoxia, new infiltrate on chest radiograph in a known sickle cell patient.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pericarditis (including tuberculous)</span> - sharp pain, worse lying flat and better sitting forward, friction rub; consider TB actively where HIV-positive or in an endemic setting.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure/rheumatic or hypertensive heart disease</span> - breathlessness, orthopnoea, leg swelling, murmur.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pneumonia</span> - fever, productive cough, pleuritic pain, focal chest signs.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pneumothorax</span> - sudden pleuritic pain and breathlessness, reduced breath sounds on the affected side.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pulmonary embolism</span> - sudden pleuritic pain, breathlessness, hypoxia, with a relevant risk factor.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Musculoskeletal/costochondritis</span> - reproducible tenderness on palpation, related to recent exertion or injury.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">GERD</span> - burning retrosternal pain related to meals or lying flat.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Herpes zoster</span> - dermatomal pain, sometimes preceding a visible rash.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Anxiety/panic disorder</span> - a diagnosis of exclusion once serious causes have been reasonably ruled out.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Aortic dissection</span> - rare, but consider with tearing pain radiating to the back and unequal blood pressures.</li>
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
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Analgesia</span> - paracetamol or, where a musculoskeletal cause is confirmed, an NSAID; avoid NSAIDs where acute coronary syndrome or pericarditis-related complications are still being worked up unless specifically indicated for the underlying diagnosis.</li>
      <li><span class="font-medium text-slate-800 dark:text-slate-200">Oxygen</span> - only if the patient is hypoxic; oxygen is not routinely required for chest pain with normal saturations.</li>
      <li>Symptomatic relief should never delay ECG, oxygen assessment, or urgent referral where a danger sign is present.</li>
    </ul>
  </div>
</div>
 
<div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
  <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment by Underlying Cause</strong>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute coronary syndrome</span> - aspirin, oxygen if hypoxic, nitrates if no contraindication (e.g. not hypotensive), and urgent referral for reperfusion therapy where feasible.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Acute chest syndrome</span> - oxygen, analgesia, incentive spirometry, antibiotics (covering typical and atypical organisms), and blood transfusion or exchange transfusion per severity and local protocol.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pericarditis</span> - NSAIDs and colchicine for idiopathic/viral pericarditis; where tuberculous pericarditis is confirmed or strongly suspected, standard anti-TB therapy is required, with corticosteroids considered in select cases.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Heart failure</span> - diuretics for congestion, alongside standard heart failure therapy and cardiology input for underlying valve disease.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pneumonia</span> - antibiotics as per the cough guide, oxygen if hypoxic.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pneumothorax</span> - observation for a small, asymptomatic pneumothorax; needle decompression or chest tube insertion for larger or symptomatic ones, and immediate decompression for tension pneumothorax.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Pulmonary embolism</span> - anticoagulation per local protocol, with thrombolysis considered in massive PE with haemodynamic instability.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">GERD</span> - proton pump inhibitor and lifestyle measures.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Herpes zoster</span> - antiviral therapy (e.g. acyclovir) if started early, alongside analgesia.</li>
    <li><span class="font-medium text-slate-800 dark:text-slate-200">Aortic dissection</span> - immediate blood pressure control and urgent cardiothoracic surgical referral.</li>
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
      <dd class="mt-0.5">Chest pain, duration.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">History of Presenting Complaint</dt>
      <dd class="mt-0.5">Onset, site, radiation, character, severity, aggravating/relieving factors, associated symptoms, directed risk history, treatment already received, progression.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Review of Systems</dt>
      <dd class="mt-0.5">Brief systematic sweep of symptoms not already captured.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Past Medical/Surgical History</dt>
      <dd class="mt-0.5">Hypertension, diabetes, sickle cell disease, known heart disease, HIV/TB status.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Drug and Allergy History</dt>
      <dd class="mt-0.5">Current medications, known allergies.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Family and Social History</dt>
      <dd class="mt-0.5">Family history of heart disease/sudden death, smoking, occupation, recent immobility/travel.</dd>
    </div>
    <div class="py-2">
      <dt class="font-semibold text-slate-800 dark:text-slate-200">Examination Findings</dt>
      <dd class="mt-0.5">Vital signs (SpO2 and blood pressure in both arms where relevant), cardiac and respiratory findings, explicitly documenting danger signs.</dd>
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
    <li>Not obtaining an ECG promptly in a patient with chest pain that could plausibly be cardiac.</li>
    <li>Attributing chest pain in a known sickle cell patient to a routine crisis without actively excluding acute chest syndrome.</li>
    <li>Dismissing chest pain in a younger patient purely on the basis of age, without checking risk factors.</li>
    <li>Not considering tuberculous pericarditis in an HIV-positive patient with chest pain and a pericardial effusion.</li>
    <li>Giving NSAIDs where acute coronary syndrome has not yet been reasonably excluded.</li>
    <li>Missing a tension pneumothorax by pursuing imaging before clinical decompression when the presentation is classic.</li>
  </ul>
</div>
 
<!-- Key Clinical Takeaways -->
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
  <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
  <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Obtain an ECG promptly for any chest pain with plausible cardiac features - do not delay it while taking a longer history.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Chest pain with fever and hypoxia in a sickle cell patient is acute chest syndrome until excluded - it is a leading cause of mortality in this group.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Consider tuberculous pericarditis in HIV-positive patients or endemic settings with chest pain and a pericardial effusion.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Do not dismiss chest pain in younger patients purely on the basis of age - check for risk factors first.</span></li>
    <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A tension pneumothorax needs immediate clinical decompression, not imaging first.</span></li>
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
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>European Society of Cardiology - Guidelines for the Management of Acute Coronary Syndromes.</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>National Heart, Lung, and Blood Institute - Evidence-Based Management of Sickle Cell Disease (Acute Chest Syndrome).</li>
      <li class="pl-4 -indent-4"><span aria-hidden="true">•&nbsp;&nbsp;</span>World Health Organization - Guidelines on the Diagnosis and Management of Tuberculous Pericarditis.</li>
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
    id: 'symptom-clerking-lower-back-pain',
    title: 'Lower Back Pain',
    category: 'Symptom Clerking',
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
]
