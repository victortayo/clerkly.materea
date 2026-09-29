import { LearningModule } from '../../types/learn';

export const TREATMENT_CONTENT: LearningModule[] = [


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


];
