import { LearningModule } from '../../types/learn';

export const TREATMENT_CONTENT: LearningModule[] = [


      // TREATMENT
      
 


      {
        id: 'treatment-upper-respiratory-tract-infections',
        title: 'Upper Respiratory Tract Infections (URTIs): Treatment Guide',
        category: 'Treatment',
        subCategory: 'Infectious Disease',
        content: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
    body { font-family: Georgia, serif; }
    .sans { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
    .quote { border-left-width: 3px; border-left-style: solid; }
    </style>
    </head>
    <body class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 p-4 sm:p-8 max-w-3xl mx-auto">
    
    <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">TREATMENT &middot; INFECTIOUS DISEASE</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Upper Respiratory Tract Infections (URTIs)</h1>
        <p class="text-sm text-indigo-200">URTIs fill the outpatient clinics, pharmacies and patent medicine shops of Nigeria every day, and most of them are viral and need no antibiotic. This guide covers the common cold, viral and streptococcal pharyngitis and tonsillitis, diphtheria, deep neck infections, croup, epiglottitis and laryngitis, acute sinusitis, acute otitis media and influenza. For each it gives the decision on antibiotics, the drug, dose and duration, the symptomatic options, the fluids, where to treat (home, outpatient or admission), and common Nigerian brands.</p>
      </div>
    </div>
    
    <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300">
      <strong class="block font-semibold mb-2">How to read the doses</strong>
      <p class="text-sm">Doses assume normal kidney and liver function. Weigh every child and prescribe in mg/kg, then round to a volume that can be measured with a syringe or spoon. Never exceed the adult maximum. Pregnancy, HIV, sickle cell disease and severe acute malnutrition change the choices (section 14). Brand names are examples only, not endorsements; strengths and availability change, so check the label and the NAFDAC registration number. Always cross-check with the current FMOH Standard Treatment Guidelines and your hospital antibiogram.</p>
    </div>
    
    
    <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
      <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
        <li><a href="#urtis-at-a-glance-who-needs-an-antibiotic" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>URTIs at a Glance: Who Needs an Antibiotic?</span></a></li>
        <li><a href="#triage-first-treat-at-home-in-clinic-or-admit" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Triage First: Treat at Home, in Clinic, or Admit?</span></a></li>
        <li><a href="#symptomatic-treatment-that-applies-to-every-urti" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Symptomatic Treatment That Applies to Every URTI</span></a></li>
        <li><a href="#common-cold-acute-viral-rhinitis" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Common Cold (Acute Viral Rhinitis)</span></a></li>
        <li><a href="#acute-pharyngitis-and-tonsillitis-viral-and-streptococcal" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Acute Pharyngitis and Tonsillitis: Viral and Streptococcal</span></a></li>
        <li><a href="#diphtheria-the-sore-throat-that-cannot-be-missed" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Diphtheria: The Sore Throat That Cannot Be Missed</span></a></li>
        <li><a href="#peritonsillar-abscess-and-deep-neck-infections" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Peritonsillar Abscess and Deep Neck Infections</span></a></li>
        <li><a href="#croup-epiglottitis-and-laryngitis" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Croup, Epiglottitis and Laryngitis</span></a></li>
        <li><a href="#acute-rhinosinusitis-viral-and-bacterial" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Acute Rhinosinusitis (Viral and Bacterial)</span></a></li>
        <li><a href="#acute-otitis-media-a-common-complication-of-urti" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Acute Otitis Media (A Common Complication of URTI)</span></a></li>
        <li><a href="#influenza-and-influenza-like-illness" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Influenza and Influenza-Like Illness</span></a></li>
        <li><a href="#fluids-oral-and-intravenous-with-specific-volumes" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Fluids: Oral and Intravenous, With Specific Volumes</span></a></li>
        <li><a href="#nigerian-brands-and-prescribing-realities" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Nigerian Brands and Prescribing Realities</span></a></li>
        <li><a href="#special-groups-prevention-and-follow-up" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
          <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">14</span><span>Special Groups, Prevention and Follow-Up</span></a></li></ul>
    </nav>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="urtis-at-a-glance-who-needs-an-antibiotic" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      URTIs at a Glance: Who Needs an Antibiotic?
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Most URTIs are caused by viruses. Antibiotics do not shorten a viral illness, and unnecessary use drives resistance and side effects. The WHO AWaRe antibiotic book treats watchful waiting and symptomatic care as first-line for sore throat, sinusitis and mild otitis media, and keeps antibiotics for patients who are likely to benefit. When an antibiotic is needed, amoxicillin (an Access antibiotic) is the first choice for most URTIs.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Condition</th><th class="py-2 pr-3">Usual cause</th><th class="py-2 pr-3">Antibiotic?</th><th class="py-2 pr-3">First-line treatment</th><th class="py-2 pr-3">Where</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 align-top font-semibold">Common cold</td><td class="py-2 pr-3 align-top">Rhinovirus, coronavirus, RSV, others</td><td class="py-2 pr-3 align-top">No</td><td class="py-2 pr-3 align-top">Fluids, paracetamol, saline nose drops</td><td class="py-2 pr-3 align-top">Home</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Viral pharyngitis / tonsillitis</td><td class="py-2 pr-3 align-top">Adenovirus, EBV, enteroviruses, others</td><td class="py-2 pr-3 align-top">No</td><td class="py-2 pr-3 align-top">Analgesia, fluids, gargles</td><td class="py-2 pr-3 align-top">Home / OPD</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Group A strep (GAS) pharyngitis / tonsillitis</td><td class="py-2 pr-3 align-top">Streptococcus pyogenes</td><td class="py-2 pr-3 align-top">Yes, when confirmed or clinically likely</td><td class="py-2 pr-3 align-top">Penicillin V or amoxicillin for 10 days</td><td class="py-2 pr-3 align-top">OPD; admit if cannot swallow or abscess</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Diphtheria</td><td class="py-2 pr-3 align-top">Toxin-producing Corynebacterium diphtheriae</td><td class="py-2 pr-3 align-top">Yes, plus antitoxin</td><td class="py-2 pr-3 align-top">Azithromycin or erythromycin for 14 days plus DAT</td><td class="py-2 pr-3 align-top">Admit, isolate, notify</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Peritonsillar / deep neck abscess</td><td class="py-2 pr-3 align-top">GAS, anaerobes, mixed flora</td><td class="py-2 pr-3 align-top">Yes, plus drainage</td><td class="py-2 pr-3 align-top">IV antibiotics, ENT drainage</td><td class="py-2 pr-3 align-top">Admit</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Croup</td><td class="py-2 pr-3 align-top">Parainfluenza and other viruses</td><td class="py-2 pr-3 align-top">No</td><td class="py-2 pr-3 align-top">Dexamethasone 0.15 mg/kg once</td><td class="py-2 pr-3 align-top">Mild: home. Moderate or severe: admit</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Epiglottitis</td><td class="py-2 pr-3 align-top">H. influenzae type b, streptococci, others</td><td class="py-2 pr-3 align-top">Yes (IV)</td><td class="py-2 pr-3 align-top">Secure airway, then ceftriaxone</td><td class="py-2 pr-3 align-top">Emergency, ICU</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Acute viral rhinosinusitis</td><td class="py-2 pr-3 align-top">Cold viruses</td><td class="py-2 pr-3 align-top">No</td><td class="py-2 pr-3 align-top">Saline, analgesia, time</td><td class="py-2 pr-3 align-top">Home / OPD</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Acute bacterial rhinosinusitis</td><td class="py-2 pr-3 align-top">Pneumococcus, H. influenzae, M. catarrhalis</td><td class="py-2 pr-3 align-top">Selected patients</td><td class="py-2 pr-3 align-top">Amoxicillin with or without clavulanate</td><td class="py-2 pr-3 align-top">OPD; admit for complications</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Acute otitis media</td><td class="py-2 pr-3 align-top">Pneumococcus, H. influenzae, viruses</td><td class="py-2 pr-3 align-top">Selected patients</td><td class="py-2 pr-3 align-top">High-dose amoxicillin or observation</td><td class="py-2 pr-3 align-top">OPD; admit for mastoiditis</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Influenza</td><td class="py-2 pr-3 align-top">Influenza A and B</td><td class="py-2 pr-3 align-top">No (antiviral for severe or high-risk)</td><td class="py-2 pr-3 align-top">Supportive; oseltamivir when indicated</td><td class="py-2 pr-3 align-top">OPD; admit if severe</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="triage-first-treat-at-home-in-clinic-or-admit" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Triage First: Treat at Home, in Clinic, or Admit?
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step zero: fever in Nigeria is malaria until proven otherwise</strong>
      <p class="text-sm">A feverish patient with a runny nose or sore throat may also have malaria, and the two commonly coexist. Test every febrile patient (rapid diagnostic test or microscopy) before labelling the illness a URTI, especially children. Treat a positive test according to the national malaria guideline. A negative test does not exclude other serious causes of fever in children.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Quick bedside check in children (WHO IMCI)</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>General danger signs</strong>: unable to drink or breastfeed, vomits everything, convulsions, lethargic or unconscious. Any one means urgent referral or admission.</li>
        <li><strong>Fast breathing</strong>: 60 or more breaths/min under 2 months; 50 or more at 2 to 11 months; 40 or more at 12 to 59 months (count for a full minute in a calm child). Lower chest indrawing or fast breathing means this is not a simple URTI; assess for pneumonia.</li>
        <li><strong>Stridor</strong> in a calm child, or any stridor at rest, is an airway problem (section 8).</li>
        <li><strong>Fever under 3 months of age</strong> needs same-day hospital assessment; do not manage at home.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Outpatient or admission</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Manage as outpatient if all of these hold</th><th class="py-2 pr-3">Admit (or refer urgently) if any of these</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td class="py-2 pr-3 align-top">
                <ul class="list-disc pl-4 space-y-1">
                  <li>Drinking and swallowing saliva normally</li>
                  <li>No stridor, drooling, trismus or muffled "hot potato" voice</li>
                  <li>Normal breathing, no chest indrawing, SpO<sub>2</sub> normal</li>
                  <li>Alert, passing urine, not toxic</li>
                  <li>No membrane on the tonsils or palate</li>
                  <li>Able to take oral medicines and return for review</li>
                  <li>No high-risk condition (see right)</li>
                </ul>
              </td>
              <td class="py-2 pr-3 align-top">
                <ul class="list-disc pl-4 space-y-1">
                  <li>Stridor at rest, drooling, tripod posture, trismus, unilateral tonsillar swelling with uvular deviation</li>
                  <li>Grey-white adherent membrane, bull neck, blood-stained nasal discharge</li>
                  <li>Cannot drink or swallow, or moderate to severe dehydration</li>
                  <li>Hypoxaemia (SpO<sub>2</sub> below 90 to 92%), fast breathing, chest indrawing, grunting</li>
                  <li>Toxic appearance, shock, altered consciousness, neck stiffness, convulsions</li>
                  <li>Periorbital swelling, proptosis, eye movement pain or visual change (sinusitis complication)</li>
                  <li>Swelling or tenderness behind the ear (mastoiditis), facial weakness</li>
                  <li>Age under 3 months with fever</li>
                  <li>Sickle cell disease with fever of 38.5 &deg;C or more, severe acute malnutrition, HIV with severe illness, immunosuppression</li>
                  <li>No improvement after 48 to 72 hours of appropriate treatment, or living far from care with a worrying illness</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="symptomatic-treatment-that-applies-to-every-urti" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Symptomatic Treatment That Applies to Every URTI
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Fever and pain: paracetamol first, ibuprofen second</strong>
      <p class="text-sm">Treat fever to relieve discomfort, not to reach a number. Analgesia is the most useful drug in sore throat, otitis and sinusitis.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Drug</th><th class="py-2 pr-3">Adult dose</th><th class="py-2 pr-3">Child dose</th><th class="py-2 pr-3">Cautions</th><th class="py-2 pr-3">Brand examples</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Paracetamol (acetaminophen)</td>
              <td class="py-2 pr-3 align-top">500 mg to 1 g every 4 to 6 hours; maximum 4 g/24 h. Use 3 g/24 h or less if under 50 kg, malnourished, alcohol use or liver disease.</td>
              <td class="py-2 pr-3 align-top">15 mg/kg per dose every 4 to 6 hours; no more than 4 doses (60 mg/kg) in 24 hours.</td>
              <td class="py-2 pr-3 align-top">Many "cold and flu" products already contain paracetamol; add up everything the patient takes. Overdose damages the liver.</td>
              <td class="py-2 pr-3 align-top">Panadol, Calpol, Emzor paracetamol and other generics</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Ibuprofen</td>
              <td class="py-2 pr-3 align-top">400 mg every 8 hours with food; maximum 1.2 g/day without prescription supervision.</td>
              <td class="py-2 pr-3 align-top">5 to 10 mg/kg per dose every 6 to 8 hours; maximum 30 mg/kg/day. Only from 3 months of age (about 5 kg).</td>
              <td class="py-2 pr-3 align-top">Avoid if dehydrated, vomiting, kidney disease, peptic ulcer, NSAID-sensitive asthma, chickenpox, or in late pregnancy. Stop if the child is not drinking.</td>
              <td class="py-2 pr-3 align-top">Brufen, Nurofen and generics</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>If the patient is still distressed, ibuprofen can be given in between paracetamol doses (alternate every 3 to 4 hours), but keep a written record so doses are not repeated or doubled.</li>
        <li><strong>Do not give aspirin</strong> to anyone under 16 years (Reye syndrome).</li>
        <li>Use the child's weight, not the age band on the bottle. A common error is giving a fixed "5 mL" to every child.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Paracetamol volumes by weight (15 mg/kg, rounded)</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Weight</th><th class="py-2 pr-3">Dose</th><th class="py-2 pr-3">Syrup 120 mg/5 mL</th><th class="py-2 pr-3">Syrup 250 mg/5 mL</th><th class="py-2 pr-3">Ibuprofen 5 mg/kg (100 mg/5 mL)</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">6 kg</td><td class="py-2 pr-3">90 mg</td><td class="py-2 pr-3">3.75 mL</td><td class="py-2 pr-3">1.75 mL</td><td class="py-2 pr-3">1.5 mL (30 mg)</td></tr>
            <tr><td class="py-2 pr-3">10 kg</td><td class="py-2 pr-3">150 mg</td><td class="py-2 pr-3">6 mL</td><td class="py-2 pr-3">3 mL</td><td class="py-2 pr-3">2.5 mL (50 mg)</td></tr>
            <tr><td class="py-2 pr-3">15 kg</td><td class="py-2 pr-3">225 mg</td><td class="py-2 pr-3">9.5 mL</td><td class="py-2 pr-3">4.5 mL</td><td class="py-2 pr-3">3.75 mL (75 mg)</td></tr>
            <tr><td class="py-2 pr-3">20 kg</td><td class="py-2 pr-3">300 mg</td><td class="py-2 pr-3">12.5 mL</td><td class="py-2 pr-3">6 mL</td><td class="py-2 pr-3">5 mL (100 mg)</td></tr>
            <tr><td class="py-2 pr-3">30 kg</td><td class="py-2 pr-3">450 mg</td><td class="py-2 pr-3">19 mL</td><td class="py-2 pr-3">9 mL</td><td class="py-2 pr-3">7.5 mL (150 mg)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs sans">Ibuprofen can go up to 10 mg/kg (double the volume shown) if the 30 mg/kg/day ceiling is respected. Check the strength printed on the bottle: syrups of different strengths look the same.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Other symptomatic options</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Symptom</th><th class="py-2 pr-3">Option and dose</th><th class="py-2 pr-3">Cautions</th><th class="py-2 pr-3">Brand examples</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Blocked nose</td>
              <td class="py-2 pr-3 align-top"><strong>Saline drops or spray</strong>, 2 to 3 drops each nostril as often as needed; in babies use drops before feeds and clear gently with a bulb syringe. Home saline: a quarter teaspoon of salt in a cup (about 240 mL) of boiled, cooled water, made fresh daily.<br><br><strong>Topical decongestant</strong> (xylometazoline or oxymetazoline): adults 1 to 2 sprays each nostril up to 3 times daily; children from 6 years, use the paediatric strength exactly as labelled. Maximum 3 days in children and 5 days in adults.</td>
              <td class="py-2 pr-3 align-top">Not under 2 years. Longer use causes rebound congestion. Avoid in uncontrolled hypertension.</td>
              <td class="py-2 pr-3 align-top">Saline drops (generic); Otrivin</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Oral decongestant</td>
              <td class="py-2 pr-3 align-top">Pseudoephedrine 60 mg every 6 hours in adults (maximum 240 mg/day), short course only. Oral phenylephrine is no better than placebo and should not be relied upon.</td>
              <td class="py-2 pr-3 align-top">Avoid in hypertension, heart disease, BPH, glaucoma, thyrotoxicosis, first trimester. Not for children under 6.</td>
              <td class="py-2 pr-3 align-top">Triprolidine/pseudoephedrine products (Actifed type)</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Runny nose, sneezing (cold)</td>
              <td class="py-2 pr-3 align-top">Chlorphenamine 4 mg every 4 to 6 hours in adults (maximum 24 mg/day); 2 mg every 4 to 6 hours in children 6 to 11 years (maximum 12 mg/day). Modest benefit, mainly at night.</td>
              <td class="py-2 pr-3 align-top">Drowsiness, dry mouth, urine retention. Do not use in children under 6 years for colds, or in croup or an asthma attack.</td>
              <td class="py-2 pr-3 align-top">Piriton (tablets 4 mg; syrup 2 mg/5 mL)</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Cough</td>
              <td class="py-2 pr-3 align-top"><strong>Honey</strong> for children from 1 year: half a teaspoon (1 to 5 years), 1 teaspoon (6 to 11 years), 2 teaspoons (12 years and above), at bedtime. Never give honey under 12 months (infant botulism). Warm fluids help adults.<br><br><strong>Dextromethorphan</strong> in adults only if cough is distressing: 10 to 20 mg every 4 to 6 hours (maximum 120 mg/day). Benefit is small.</td>
              <td class="py-2 pr-3 align-top">Oral cough and cold products are not recommended under 6 years. Codeine cough syrups are prescription-only in Nigeria (FMOH ban of 2018) and should not be given to children.</td>
              <td class="py-2 pr-3 align-top">Dextromethorphan-containing syrups</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Sore throat</td>
              <td class="py-2 pr-3 align-top">Paracetamol or ibuprofen (above); warm salt-water gargle (a pinch of salt in a glass of warm water) for older children and adults; medicated lozenges for adults and children from 4 years who can dissolve them without chewing.</td>
              <td class="py-2 pr-3 align-top">Lozenges are a choking risk under 4 years. Lozenges do not treat the infection.</td>
              <td class="py-2 pr-3 align-top">Strepsils</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Allergic symptoms (not cold)</td>
              <td class="py-2 pr-3 align-top">Cetirizine 10 mg daily (adult), 5 mg daily (6 to 11 years), 2.5 mg daily (2 to 5 years). Loratadine 10 mg daily (12 years and above or over 30 kg), 5 mg daily (2 to 12 years, under 30 kg).</td>
              <td class="py-2 pr-3 align-top">See section 4 for telling allergy from infection.</td>
              <td class="py-2 pr-3 align-top">Zyrtec, Clarityn and generics</td>
            </tr>
          </tbody>
        </table>
      </div>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Things to avoid</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Antibiotics for a cold, viral sore throat or viral rhinosinusitis.</strong> Discoloured nasal discharge is normal in a cold and does not mean bacterial infection.</li>
        <li><strong>Steam inhalation from a pot or bowl in children.</strong> Scald injuries are common; use warm showers or humid bathrooms if at all.</li>
        <li><strong>Herbal mixtures ("agbo") of unknown content.</strong> Herbal remedies account for a substantial share of acute kidney injury in African series, and liver injury also occurs. Ask about them without judgement and record what was taken.</li>
        <li><strong>"Cocktail" injections</strong> (ceftriaxone, dexamethasone, "pain" injections) for a simple cold or sore throat. They add risk and cost without benefit.</li>
        <li><strong>Vitamin C and zinc</strong> have not been shown to be reliably effective for treating colds; they are not routine.</li>
        <li><strong>Routine systemic steroids</strong> for sore throat or sinusitis. Dexamethasone has defined roles in croup, epiglottitis and some deep neck infections only.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="common-cold-acute-viral-rhinitis" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Common Cold (Acute Viral Rhinitis)
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><strong>Features:</strong> nasal blockage, clear then thicker discharge, sneezing, sore throat, cough, low-grade fever (more in children). Adults recover in about 7 to 10 days; cough can last up to 2 to 3 weeks. Children average more colds per year than adults.</p>
      <p class="text-sm"><strong>Setting:</strong> home. Antibiotics: <strong>none</strong>.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment plan</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Fluids and rest.</strong> Offer fluids often. Continue breastfeeding; if the baby cannot latch because of a blocked nose, clear the nose with saline first, or give expressed milk by cup.</li>
        <li><strong>Antipyretic or analgesic</strong> when uncomfortable (section 3).</li>
        <li><strong>Saline drops or spray</strong> for congestion, with bulb suction before feeds in babies.</li>
        <li><strong>Honey</strong> for cough in children over 1 year. Warm drinks for adults.</li>
        <li><strong>Short-course topical decongestant</strong> for adults and older children if the blockage disturbs sleep (maximum 3 to 5 days).</li>
        <li>Do not give oral cough and cold products to children under 6 years.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cold, flu, malaria, or allergy?</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Feature</th><th class="py-2 pr-3">Common cold</th><th class="py-2 pr-3">Influenza</th><th class="py-2 pr-3">Allergic rhinitis</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 font-semibold">Onset</td><td class="py-2 pr-3">Gradual</td><td class="py-2 pr-3">Abrupt</td><td class="py-2 pr-3">Triggered by dust, harmattan, pollen, animals</td></tr>
            <tr><td class="py-2 pr-3 font-semibold">Fever</td><td class="py-2 pr-3">Mild or none</td><td class="py-2 pr-3">High, with body aches and exhaustion</td><td class="py-2 pr-3">Absent</td></tr>
            <tr><td class="py-2 pr-3 font-semibold">Nose</td><td class="py-2 pr-3">Blocked, discharge clear then thicker</td><td class="py-2 pr-3">Less prominent</td><td class="py-2 pr-3">Itchy, watery, paroxysms of sneezing, itchy eyes</td></tr>
            <tr><td class="py-2 pr-3 font-semibold">Duration</td><td class="py-2 pr-3">7 to 10 days</td><td class="py-2 pr-3">About 1 week, weakness longer</td><td class="py-2 pr-3">Weeks, recurrent or seasonal</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm"><strong>Allergic rhinitis</strong> responds to avoidance, saline rinses, an intranasal steroid (mometasone or fluticasone, for example) and a second-generation antihistamine (doses in section 3). Intranasal steroids work better than antihistamines for nasal blockage. Avoid prolonged decongestant sprays.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">When to review</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Symptoms persisting beyond 10 days without improvement, or worsening after initial improvement: consider bacterial sinusitis (section 9).</li>
        <li>Ear pain, ear pulling, discharge from the ear: consider otitis media (section 10).</li>
        <li>Fast breathing, chest indrawing, wheeze, stridor, refusal to feed, drowsiness: see section 2.</li>
        <li>Fever lasting more than 3 days or recurring: test for malaria and reassess.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="acute-pharyngitis-and-tonsillitis-viral-and-streptococcal" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Acute Pharyngitis and Tonsillitis: Viral and Streptococcal
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Sore throat is usually viral, even when the tonsils are red, swollen or have exudate. Group A streptococcus (GAS, Streptococcus pyogenes) causes roughly one in four to one in five cases in children and a smaller share in adults, and it is the only common cause that benefits from antibiotics. It matters in Nigeria because untreated GAS infection is the trigger of acute rheumatic fever and rheumatic heart disease. Group C and G streptococci can also cause pharyngitis but do not cause rheumatic fever.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 1: rule out dangerous causes first</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Diphtheria</strong>: grey membrane, bull neck, hoarseness, stridor, unvaccinated child, northern Nigeria or a known contact (section 6).</li>
        <li><strong>Peritonsillar or retropharyngeal abscess</strong>: one-sided pain, trismus, hot-potato voice, drooling, neck stiffness or torticollis (section 7).</li>
        <li><strong>Epiglottitis</strong>: severe sore throat with little to see, drooling, stridor, toxic look (section 8).</li>
        <li><strong>Infectious mononucleosis</strong>: exudative tonsillitis, posterior cervical nodes, fatigue, splenomegaly. If amoxicillin or ampicillin is given, a diffuse itchy rash often appears; do not mistake it for drug allergy.</li>
        <li><strong>Others</strong>: acute HIV infection, gonococcal pharyngitis (sexual history), oral thrush (consider HIV or steroids), herpangina and hand-foot-and-mouth disease (small vesicles or ulcers on the palate in young children), measles (Koplik spots, rash).</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 2: score the likelihood of GAS (modified Centor / McIsaac score)</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Criterion</th><th class="py-2 pr-3">Points</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Tonsillar swelling or exudate</td><td class="py-2 pr-3">+1</td></tr>
            <tr><td class="py-2 pr-3">Tender swollen anterior cervical lymph nodes</td><td class="py-2 pr-3">+1</td></tr>
            <tr><td class="py-2 pr-3">Temperature above 38 &deg;C (history or measured)</td><td class="py-2 pr-3">+1</td></tr>
            <tr><td class="py-2 pr-3">No cough</td><td class="py-2 pr-3">+1</td></tr>
            <tr><td class="py-2 pr-3">Age 3 to 14 years</td><td class="py-2 pr-3">+1</td></tr>
            <tr><td class="py-2 pr-3">Age 15 to 44 years</td><td class="py-2 pr-3">0</td></tr>
            <tr><td class="py-2 pr-3">Age 45 years and above</td><td class="py-2 pr-3">&minus;1</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Strongly viral features</strong> (cough, runny nose, hoarseness, mouth ulcers, conjunctivitis): do not test, do not treat with antibiotics.</li>
        <li><strong>Score 0 or 1</strong>: low probability. No test, no antibiotic.</li>
        <li><strong>Score 2 or more</strong>: test if a rapid antigen test or throat culture is available, and treat only if positive. The 2025 IDSA update uses scoring mainly to identify who does <em>not</em> need testing. Do not routinely test children under 3 years (GAS pharyngitis is uncommon, rheumatic fever is rare), unless there is a household GAS case or another risk factor.</li>
        <li><strong>No test available</strong> (common in Nigerian primary care): a pragmatic approach is to treat empirically when the score is 4 or more, and to treat a score of 3 when there is a rheumatic fever risk (past rheumatic fever or rheumatic heart disease, overcrowded household or school outbreak, scarlatiniform rash). For a score of 2 to 3 without risk factors, a delayed prescription (start only if no improvement or worse by 48 to 72 hours) is reasonable. There is no validated Nigerian decision rule, so this is clinical judgement, not a national standard.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step 3: treat</strong>
      <p class="text-sm"><strong>Viral pharyngitis or tonsillitis:</strong> analgesia (paracetamol, ibuprofen), fluids, soft diet, gargles or lozenges where age-appropriate. Most settle in 3 to 7 days. Review if not improving by 5 to 7 days or if red flags appear.</p>
      <p class="text-sm"><strong>GAS pharyngitis or tonsillitis (confirmed or clinically likely), outpatient:</strong></p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Drug</th><th class="py-2 pr-3">Adult / adolescent dose</th><th class="py-2 pr-3">Child dose</th><th class="py-2 pr-3">Duration</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 align-top font-semibold">Penicillin V (phenoxymethylpenicillin), oral</td><td class="py-2 pr-3 align-top">500 mg twice daily, or 250 mg four times daily</td><td class="py-2 pr-3 align-top">250 mg twice or three times daily</td><td class="py-2 pr-3 align-top">10 days</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Amoxicillin, oral (often what is stocked and cheapest)</td><td class="py-2 pr-3 align-top">1,000 mg once daily, or 500 mg twice daily</td><td class="py-2 pr-3 align-top">50 mg/kg once daily (maximum 1,000 mg), or 25 mg/kg twice daily (maximum 500 mg per dose)</td><td class="py-2 pr-3 align-top">10 days</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Benzathine penicillin G, IM (single dose)</td><td class="py-2 pr-3 align-top">1.2 million units (27 kg or more)</td><td class="py-2 pr-3 align-top">600,000 units if under 27 kg; 1.2 million units if 27 kg or more</td><td class="py-2 pr-3 align-top">One dose</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Use <strong>benzathine penicillin</strong> when adherence to 10 days of tablets is doubtful, the patient cannot swallow or keeps vomiting, or rheumatic fever risk is high. It is painful (give slowly, deep IM) and supply in Nigeria can be erratic; confirm local stock.</li>
        <li><strong>Penicillin allergy, non-severe</strong> (such as a delayed rash): cephalexin 20 mg/kg per dose twice daily (maximum 500 mg per dose) for 10 days, or cefadroxil 30 mg/kg once daily (maximum 1 g) for 10 days. Avoid cephalosporins after anaphylaxis, angioedema or other immediate reactions.</li>
        <li><strong>Severe or immediate penicillin allergy:</strong> clindamycin 7 mg/kg per dose three times daily (maximum 300 mg per dose; adults 300 mg three times daily) for 10 days; or azithromycin 12 mg/kg once daily (maximum 500 mg) for 5 days (adults: 500 mg on day 1 then 250 mg daily on days 2 to 5); or clarithromycin 7.5 mg/kg twice daily (maximum 250 mg per dose) for 10 days. Macrolide resistance of GAS is reported in 5 to 20% in some settings, clindamycin resistance is rare.</li>
        <li><strong>Complete the full 10 days</strong> of oral beta-lactam therapy to eradicate the organism and prevent rheumatic fever, even though symptoms settle in 2 to 3 days. Azithromycin is the exception (5 days).</li>
        <li><strong>Do not use</strong> tetracyclines, cotrimoxazole or fluoroquinolones (poor eradication or resistance). Ampicillin-cloxacillin and metronidazole are unnecessary for uncomplicated pharyngitis.</li>
        <li>Return to school or work after at least 12 hours of effective antibiotic and when fever has gone. Household contacts without symptoms are not routinely tested or treated.</li>
        <li><strong>Treatment failure</strong> at 48 to 72 hours: reassess for peritonsillar abscess, mononucleosis, diphtheria, wrong diagnosis, vomiting of doses, poor adherence.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Inpatient treatment of tonsillitis</strong>
      <p class="text-sm">Admit if the patient cannot swallow fluids or tablets, has trismus or drooling, is dehydrated or toxic, or has a suspected abscess. Give IV benzylpenicillin (children 50,000 units/kg every 6 hours, maximum 4 million units per dose; adults 1.2 to 2.4 g every 4 to 6 hours) or IV ampicillin or amoxicillin-clavulanate, plus IV fluids (section 12), and switch to oral to complete 10 days once drinking. For severe deep infection use the regimens in section 7.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Complications and long-term follow-up</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Acute rheumatic fever</strong> (migratory arthritis, carditis, chorea, rash, nodules) appears 2 to 4 weeks after untreated GAS and needs specialist care. Antibiotics for the throat infection reduce this risk. Secondary prevention in proven rheumatic fever or rheumatic heart disease: benzathine penicillin G every 3 to 4 weeks (1.2 million units if 27 kg or more; 600,000 units if under), or penicillin V 250 mg twice daily, for the duration set by the cardiologist.</li>
        <li><strong>Post-streptococcal glomerulonephritis</strong> (cola-coloured urine, oedema, hypertension) is not prevented by antibiotics; check blood pressure and urine in any child with these signs 1 to 3 weeks after a throat or skin infection.</li>
        <li><strong>Recurrent tonsillitis:</strong> refer to ENT if there are 7 or more well-documented episodes in 1 year, 5 or more per year for 2 years, or 3 or more per year for 3 years, or for recurrent peritonsillar abscess, or obstructive sleep apnoea.</li>
        <li><strong>Infectious mononucleosis:</strong> supportive care only (analgesia, fluids, rest), no amoxicillin or ampicillin, avoid contact sports for about 3 to 4 weeks (spleen risk); steroids only for airway obstruction under specialist advice.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="diphtheria-the-sore-throat-that-cannot-be-missed" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Diphtheria: The Sore Throat That Cannot Be Missed
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Diphtheria re-emerged in Nigeria in December 2022 (Kano and Lagos) and has spread widely. The NCDC has reported tens of thousands of confirmed cases and over two thousand deaths since 2022, with Kano, Borno, Bauchi, Yobe and Katsina the worst hit, and a very low proportion of confirmed cases fully vaccinated. Third-dose pentavalent coverage was only 57% in the 2021 national survey. Any child or adult with a membranous sore throat must be treated as diphtheria until proven otherwise, wherever in Nigeria they are seen.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Suspect when</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Sore throat with low-grade fever, malaise and an adherent grey-white membrane on tonsils, pharynx or palate that bleeds when scraped.</li>
        <li>Bull neck (swollen cervical nodes and soft tissue), blood-stained nasal discharge, hoarse voice, stridor, foul breath.</li>
        <li>Unvaccinated or incompletely vaccinated, contact with a case, or residence in or travel from an affected state. Vaccinated people can still get milder disease.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Immediate actions (all in the first hour)</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Isolate</strong> in a single room with droplet and contact precautions; staff wear a surgical mask or respirator, gloves and gown. Keep contact numbers.</li>
        <li><strong>Notify</strong> the Local Government Area or State Disease Surveillance Officer, or the NCDC toll-free line (6232), within 24 hours.</li>
        <li><strong>Take throat and nasopharyngeal swabs</strong> for culture and PCR, ideally before the first antibiotic dose, but <strong>do not wait for results</strong> to start treatment.</li>
        <li><strong>Admit</strong> to the diphtheria treatment centre or the nearest isolation ward. Do not manage as an outpatient.</li>
        <li>Keep an adrenaline injection, oxygen, suction and airway equipment at the bedside.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">1. Diphtheria antitoxin (DAT): single dose, same for adults and children (WHO 2024)</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Disease pattern</th><th class="py-2 pr-3">DAT dose</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Laryngeal or pharyngeal disease, less than 48 hours</td><td class="py-2 pr-3">20,000 IU</td></tr>
            <tr><td class="py-2 pr-3">Nasopharyngeal disease with extensive membrane, less than 48 hours</td><td class="py-2 pr-3">40,000 IU</td></tr>
            <tr><td class="py-2 pr-3">Severe disease (respiratory distress, shock), neck swelling (bull neck), or duration of 48 hours or more</td><td class="py-2 pr-3">80,000 IU</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Give by IV infusion in 0.9% sodium chloride (preferred) or IM. Do not delay for skin or sensitivity testing: WHO recommends against routine sensitivity testing. Prepare for allergic reactions; watch closely for at least the first hour with adrenaline (epinephrine) 1:1000, 0.01 mg/kg IM (adults 0.5 mg), and hydrocortisone and an antihistamine at hand.</li>
        <li>DAT supply has been limited in Nigeria; the NCDC has distributed stock to treatment centres. Give it as early as possible, because it neutralises only toxin that has not yet entered cells.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">2. Antibiotics: macrolides preferred (WHO 2024), 14 days</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Drug</th><th class="py-2 pr-3">Adult</th><th class="py-2 pr-3">Child</th><th class="py-2 pr-3">Note</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 align-top font-semibold">Azithromycin</td><td class="py-2 pr-3 align-top">500 mg once daily</td><td class="py-2 pr-3 align-top">10 to 12 mg/kg once daily (maximum 500 mg)</td><td class="py-2 pr-3 align-top">Oral; IV at the same dose if cannot swallow</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Erythromycin</td><td class="py-2 pr-3 align-top">500 mg four times daily</td><td class="py-2 pr-3 align-top">10 to 15 mg/kg four times daily (maximum 2 g/day)</td><td class="py-2 pr-3 align-top">Oral; IV when cannot swallow. Erythro tablets are widely available</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Penicillin (second option)</td><td class="py-2 pr-3 align-top">Penicillin V 500 mg four times daily; or benzathine penicillin 1.2 million units IM once</td><td class="py-2 pr-3 align-top">Penicillin V 10 to 15 mg/kg four times daily (maximum 2 g/day); benzathine penicillin 600,000 units IM (under 30 kg) or 1.2 million units (30 kg or more)</td><td class="py-2 pr-3 align-top">Only if macrolides are unavailable and penicillin susceptibility has been confirmed</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Use the oral route where the patient can swallow; switch from IV to oral as soon as possible and complete 14 days. Antibiotics are given together with DAT and must not be delayed.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">3. Supportive care and monitoring</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Airway:</strong> oxygen if SpO<sub>2</sub> is low; stridor or bull neck needs ICU or HDU and a clinician who can establish a surgical airway. Do not attempt to remove the membrane (it bleeds and can obstruct the airway).</li>
        <li><strong>Heart:</strong> myocarditis can appear in the first 1 to 2 weeks and sometimes later. Monitor pulse and rhythm, take an ECG at admission and repeat daily for the first 1 to 2 weeks (heart block, arrhythmia, ST-T changes), and keep the patient on strict bed rest until the ECG has settled.</li>
        <li><strong>Nerves:</strong> soft palate paralysis (nasal voice, nasal regurgitation) appears from week 2 to 3 and limb or respiratory muscle weakness later. If swallowing is unsafe, feed by nasogastric tube.</li>
        <li><strong>Kidney:</strong> monitor urine output and creatinine.</li>
        <li><strong>Fluids and nutrition:</strong> give maintenance fluid and calories but avoid fluid overload when myocarditis is suspected (section 12). Prefer oral or nasogastric feeding to prolonged IV fluids.</li>
        <li><strong>Discharge and clearance:</strong> follow NCDC and state treatment centre instructions on isolation and microbiological clearance.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">4. Contacts and prevention</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Close contacts (household, school, health workers exposed without protection) are listed, examined, swabbed, monitored for 7 days and given antibiotic prophylaxis according to the NCDC protocol, for example a single IM dose of benzathine penicillin or a macrolide course.</li>
        <li>Vaccinate every contact and the patient (infection does not give reliable immunity). Complete the pentavalent series at 6, 10 and 14 weeks for infants; older children and adults with an unknown or incomplete history should receive tetanus-diphtheria (Td) according to NCDC and NPHCDA guidance. Health workers should be vaccinated.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="peritonsillar-abscess-and-deep-neck-infections" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Peritonsillar Abscess and Deep Neck Infections
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><strong>Peritonsillar abscess (quinsy)</strong> is the commonest deep neck infection of adolescents and adults. Features: severe sore throat worse on one side, painful swallowing, drooling, trismus, muffled "hot potato" voice, swollen tonsil pushed to the midline with uvular deviation, fever, and ear pain on the same side. Consider glandular fever as an association.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment (admit, or short-stay observation with ENT)</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Drainage:</strong> needle aspiration (preferred first step) or incision and drainage by an ENT surgeon or an experienced clinician. Keep the needle depth below 1 cm because the carotid artery lies close. Send pus for culture. If no pus is obtained but suspicion remains high, treat as peritonsillar cellulitis with IV antibiotics. Medical treatment alone can work for small abscesses and cellulitis, with review at 24 hours.</li>
        <li><strong>IV antibiotics</strong> covering GAS, staphylococci and mouth anaerobes: in resource-rich settings ampicillin-sulbactam 3 g IV every 6 hours (children 50 mg/kg IV every 6 hours, maximum 3 g per dose). Options usually available in Nigeria: <strong>ceftriaxone 1 to 2 g IV daily (children 50 to 100 mg/kg/day) plus metronidazole 500 mg IV or orally every 8 hours (children 7.5 mg/kg every 8 hours)</strong>; or IV amoxicillin-clavulanate 1.2 g every 8 hours (children 25 mg/kg of the amoxicillin component every 8 hours); or clindamycin 600 mg IV every 8 hours (children 10 to 13 mg/kg every 8 hours, maximum 900 mg per dose) if penicillin-allergic.</li>
        <li><strong>Step down to oral</strong> once swallowing and improving: amoxicillin-clavulanate 875/125 mg twice daily (children about 45 mg/kg/day of amoxicillin in two doses), or clindamycin 300 mg four times daily (children about 10 mg/kg three times daily), to complete 10 to 14 days in total.</li>
        <li><strong>Analgesia and fluids:</strong> IV paracetamol 1 g every 6 hours (children 15 mg/kg), NSAID if kidneys are normal. A single dose of dexamethasone 10 mg (adults) may reduce pain and trismus, but evidence is modest. IV fluids if unable to drink: 0.9% sodium chloride 1 L over 2 to 4 hours if dehydrated, then maintenance (section 12).</li>
        <li><strong>Airway:</strong> keep the patient upright, have suction and an airway plan ready; if stridor develops, get anaesthetic and ENT help immediately.</li>
        <li><strong>Tonsillectomy</strong> is considered after recurrent abscess, failure to drain, or airway obstruction.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Retropharyngeal and parapharyngeal abscess, Ludwig angina, Lemierre syndrome</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Retropharyngeal abscess</strong> (usually under 5 years): fever, refusal to swallow, drooling, neck stiffness or torticollis, stridor, muffled cry. Needs a contrast CT of the neck and ENT. Admit, give ceftriaxone plus metronidazole or clindamycin as above, and drain surgically if there is an abscess. Tuberculosis is an important cause of retropharyngeal and cervical abscess in Nigeria; send pus for AFB and GeneXpert.</li>
        <li><strong>Ludwig angina</strong> (spreading infection of the floor of the mouth, usually from a lower molar): swollen, hard, tender floor of mouth and neck, raised tongue, trismus. Airway emergency: ICU, IV antibiotics, surgical decompression, and dental source control.</li>
        <li><strong>Lemierre syndrome</strong> (septic thrombophlebitis of the internal jugular vein after pharyngitis, with metastatic abscesses in the lungs): prolonged IV antibiotics with anaerobic cover, specialist care.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="croup-epiglottitis-and-laryngitis" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Croup, Epiglottitis and Laryngitis
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Viral croup (laryngotracheobronchitis)</strong>
      <p class="text-sm"><strong>Features:</strong> children from 6 months to 3 years (any age up to about 6), a day or two of cold symptoms, then a barking "seal" cough, hoarse voice and inspiratory stridor, worse at night. Stridor at rest, chest wall indrawing, restlessness, cyanosis or drowsiness mark moderate to severe disease. In an unimmunised child with a membrane or bull neck, think of diphtheria; with sudden onset, drooling and toxicity, think epiglottitis; with sudden choking, think foreign body.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Keep the child calm</strong> in the caregiver's lap. Do not use a tongue depressor or distress the child with unnecessary procedures.</li>
        <li><strong>Dexamethasone, single dose, for every child with croup, whatever the severity:</strong> 0.15 mg/kg orally (maximum 12 mg). Equivalent doses up to 0.6 mg/kg are used for severe croup or when vomiting is likely. Benefit begins in 2 to 3 hours and lasts 24 to 48 hours. The injectable form (4 mg/mL) can be given by mouth: for a 10 kg child 0.15 mg/kg is 1.5 mg, or 0.4 mL. Alternative: prednisolone 1 mg/kg orally (maximum 50 mg). If the child cannot take oral medicine: nebulised budesonide 2 mg, or dexamethasone 0.6 mg/kg IM.</li>
        <li><strong>Nebulised adrenaline for stridor at rest with distress:</strong> adrenaline 1:1000 (1 mg/mL) 0.5 mg/kg (0.5 mL/kg), maximum 5 mg (5 mL), undiluted or made up to 3 to 5 mL with 0.9% saline, driven by oxygen. It works within minutes but lasts only 1 to 2 hours, so the child must be observed. Repeat in 10 to 30 minutes if needed; if repeated doses are required, call senior help and consider ICU.</li>
        <li><strong>Oxygen</strong> if SpO<sub>2</sub> is below 92%. Do not give sedatives. Antibiotics, cough suppressants and mist tents are not indicated.</li>
        <li><strong>Fluids:</strong> encourage oral intake. If the child cannot drink safely, give IV maintenance fluid (section 12).</li>
        <li><strong>Mild croup (barking cough, no stridor at rest):</strong> dexamethasone, then home with clear return advice. <strong>Admit</strong> for stridor at rest persisting after treatment, any need for adrenaline (observe at least 2 to 3 hours after the last dose, and longer if symptoms return), SpO<sub>2</sub> below 92%, age under 6 months, poor feeding or dehydration, uncertain diagnosis, or living far from a hospital.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Epiglottitis (supraglottitis): airway emergency</strong>
      <p class="text-sm">Acute severe sore throat, difficulty swallowing, drooling, muffled "hot potato" voice, fever, soft inspiratory stridor, child sitting forward with the mouth open. Cough is typically absent. Childhood epiglottitis is rare where Hib vaccine coverage is high, but coverage in parts of Nigeria is still incomplete, so it must be remembered in unimmunised children. Adults now make up many cases.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Do not examine the throat, take blood or lay the child flat</strong> before the airway is secured. Keep the patient upright and calm, with a parent present; give humidified oxygen only if tolerated.</li>
        <li>Call the most senior anaesthetist and ENT surgeon. Intubate in theatre with a surgical airway backup. Adults who are stable may be observed in ICU with fibreoptic assessment.</li>
        <li>After the airway is safe: <strong>ceftriaxone IV</strong>, children 50 to 100 mg/kg/day (50 to 75 mg/kg/day for mild to moderate, 80 to 100 mg/kg/day for severe) in 1 to 2 doses, adults 1 to 2 g once daily. Clindamycin is an alternative in severe penicillin allergy. Total antibiotic course 7 to 10 days. Dexamethasone is often added (children 0.6 mg/kg, maximum 10 mg).</li>
        <li>IV fluids at maintenance rate (section 12) because swallowing is impossible. Admit all patients to ICU or HDU; extubate when swelling has settled.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Bacterial tracheitis</strong>
      <p class="text-sm">Consider in a toxic child with "croup" who is not responding to dexamethasone and adrenaline: high fever, thick purulent secretions, worsening stridor. Needs an experienced airway team, ICU, and IV ceftriaxone plus anti-staphylococcal cover (for example cloxacillin, clindamycin or vancomycin, depending on local resistance and availability).</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Acute laryngitis (adults and older children)</strong>
      <p class="text-sm">Hoarseness after a cold, mostly viral. Treat with voice rest, fluids, humid air, analgesia, and stopping smoking. Antibiotics are not indicated. <strong>Hoarseness that persists for more than 3 weeks</strong> needs laryngoscopy (smoking, reflux, tuberculous laryngitis, laryngeal papillomatosis, malignancy).</p>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="acute-rhinosinusitis-viral-and-bacterial" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Acute Rhinosinusitis (Viral and Bacterial)
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Acute rhinosinusitis lasts under 4 weeks. Over 90% of cases are viral and are the same illness as the common cold. Only a small fraction (roughly 0.5 to 2% of adult episodes) develop a bacterial infection. Facial pain or pressure, blocked nose and purulent discharge are all common in viral illness and do not by themselves mean bacterial sinusitis.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Suspect acute bacterial rhinosinusitis (ABRS) only when one of these patterns is present</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Persistent:</strong> nasal discharge (any colour) or daytime cough for 10 days or more without improvement.</li>
        <li><strong>Severe onset:</strong> fever of 39 &deg;C or more with purulent nasal discharge or facial pain for at least 3 to 4 consecutive days at the start of illness.</li>
        <li><strong>Double worsening:</strong> new fever, worse cough or nasal discharge after initial improvement of a cold.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Treatment of viral rhinosinusitis, and supportive care for all</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Analgesia, fluids, saline nasal irrigation (isotonic, boiled-and-cooled water only, never tap water), short-term topical decongestant (maximum 3 to 5 days), and time.</li>
        <li><strong>Intranasal steroid</strong> as an optional adjunct with modest benefit: mometasone 50 micrograms per spray, 2 sprays each nostril once daily (adults and children 12 years and over); 1 spray each nostril once daily for children 6 to 11 years. Brands include Nasonex and Flixonase; cost is a barrier for many patients.</li>
        <li>Antihistamines only if there is a clear allergic component. Mucolytics and oral decongestants have little evidence.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">ABRS in adults: outpatient</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Watchful waiting</strong> (no antibiotic for the first few days, with symptomatic treatment and a clear plan to start if no improvement within about 3 to 7 days, or sooner if worse) is appropriate for uncomplicated, non-severe illness with reliable follow-up. Antibiotics are reasonable immediately in severe illness.</li>
        <li><strong>First choice:</strong> amoxicillin-clavulanate 875/125 mg twice daily, or 500/125 mg three times daily, for <strong>5 to 7 days</strong> (the IDSA 2012 guideline prefers amoxicillin-clavulanate because beta-lactamase producing H. influenzae and M. catarrhalis are common). The 2025 AAO-HNSF update accepts <strong>amoxicillin with or without clavulanate</strong> as first-line for 5 to 7 days in most adults. Where cost or availability is a barrier, plain amoxicillin 500 mg three times daily (up to 1 g three times daily in more severe disease) is a reasonable choice if there has been no recent antibiotic exposure. Use the higher-dose extended-release amoxicillin-clavulanate (2,000/125 mg twice daily) only for patients with risk of resistance (recent antibiotic use, hospitalisation, high local resistance, immune compromise).</li>
        <li><strong>Penicillin allergy:</strong> doxycycline 100 mg twice daily (not in pregnancy), or cefuroxime 500 mg twice daily or cefpodoxime 200 mg twice daily (non-severe reactions only). Levofloxacin (500 to 750 mg once daily) is a last resort. Fluoroquinolones can mask tuberculosis and drive resistance, so avoid them for routine URTI.</li>
        <li><strong>Do not use</strong> cotrimoxazole, macrolides (azithromycin, erythromycin) or ampicillin-cloxacillin for ABRS because of poor activity or resistance.</li>
        <li>Review at 3 days if not improving: wrong diagnosis (allergic rhinitis, dental source, migraine), resistant organism, complication. Persistent symptoms beyond 12 weeks are chronic rhinosinusitis, which needs ENT assessment (nasal polyps, fungal sinusitis, tumour).</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">ABRS in children: outpatient</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Situation</th><th class="py-2 pr-3">Drug and dose</th><th class="py-2 pr-3">Duration</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 align-top">Persistent illness, mild, no antibiotic in last month, not in daycare</td><td class="py-2 pr-3 align-top">Option to observe for 3 more days; if treating, amoxicillin 45 mg/kg/day in 2 divided doses (maximum 1 g per dose)</td><td class="py-2 pr-3 align-top">10 days (IDSA allows 10 to 14)</td></tr>
            <tr><td class="py-2 pr-3 align-top">Severe or worsening illness, daycare or school contact, recent antibiotic, age under 2 years</td><td class="py-2 pr-3 align-top">High-dose amoxicillin 80 to 90 mg/kg/day in 2 divided doses (maximum 2 g per dose); or amoxicillin-clavulanate 80 to 90 mg/kg/day of the amoxicillin component with 6.4 mg/kg/day clavulanate in 2 doses (maximum 2 g amoxicillin per dose) if beta-lactamase producers are suspected, recent antibiotic exposure or treatment failure</td><td class="py-2 pr-3 align-top">10 days</td></tr>
            <tr><td class="py-2 pr-3 align-top">Non-severe penicillin allergy</td><td class="py-2 pr-3 align-top">Cefuroxime 30 mg/kg/day in 2 doses (maximum 500 mg per dose), or cefpodoxime 10 mg/kg/day in 2 doses (maximum 400 mg per dose), or cefdinir 14 mg/kg/day (maximum 600 mg/day) where available</td><td class="py-2 pr-3 align-top">10 days</td></tr>
            <tr><td class="py-2 pr-3 align-top">Vomiting, cannot take oral medicine</td><td class="py-2 pr-3 align-top">Ceftriaxone 50 mg/kg IM or IV once daily (maximum 1 to 2 g) for 1 to 3 days, then oral when tolerating</td><td class="py-2 pr-3 align-top">Review daily</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Amoxicillin-clavulanate products are not interchangeable.</strong> Standard suspensions use a 4:1 or 7:1 amoxicillin-to-clavulanate ratio. High-dose therapy with these products delivers too much clavulanate and causes diarrhoea. For high dose use a 14:1 product (Augmentin ES 600 mg/42.9 mg per 5 mL) or add plain amoxicillin to a standard-ratio dose, and always calculate on the amoxicillin component.</li>
        <li>Do not use cotrimoxazole or macrolides for ABRS in children.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Complications: admit urgently</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Orbital cellulitis or abscess:</strong> eyelid swelling and redness, proptosis, pain on eye movement, reduced vision, diplopia, usually from ethmoid sinusitis in children under 5 years. <strong>Intracranial spread:</strong> severe headache, photophobia, seizures, focal neurology, swollen forehead (Pott puffy tumour), cavernous sinus thrombosis.</li>
        <li>Urgent CT, ophthalmology and ENT (and neurosurgery if intracranial). IV <strong>ceftriaxone</strong> (children 80 to 100 mg/kg/day in 1 to 2 doses, maximum 4 g/day; adults 2 g every 12 to 24 hours) plus <strong>metronidazole</strong> (children 7.5 mg/kg every 8 hours; adults 500 mg every 8 hours) or clindamycin; add vancomycin if MRSA is a concern. Surgical drainage when indicated.</li>
        <li>IV fluids and analgesia as in section 12 and 3.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="acute-otitis-media-a-common-complication-of-urti" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Acute Otitis Media (A Common Complication of URTI)
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Acute otitis media (AOM) is the commonest bacterial complication of a viral URTI in children. Diagnose it by otoscopy (bulging, inflamed, immobile drum with a middle-ear effusion) and an acute history (ear pain, fever, irritability, ear pulling, poor sleep or feeding). Hearing is reduced during infection. Ear discharge through a perforated drum often relieves pain.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Pain control comes first</strong>
      <p class="text-sm">Paracetamol or ibuprofen at the doses in section 3, for as long as the ear hurts. Avoid ear drops containing anaesthetic or any drops if the drum may be perforated. Do not put herbal oils, "ear drops" of unknown origin or other substances in the ear.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Antibiotic or observe? (AAP approach)</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Treat immediately</strong> if: under 6 months; age 6 to 23 months with bilateral disease; severe signs (temperature 39 &deg;C or more, moderate to severe pain, pain for 48 hours or more); ear discharge (otorrhoea); or when follow-up cannot be guaranteed.</li>
        <li><strong>Observation for 48 to 72 hours</strong> with pain relief is acceptable for non-severe, unilateral AOM in children 6 to 23 months, and for non-severe AOM in children 24 months and older, provided that follow-up is certain. Start the antibiotic if there is no improvement or the child worsens.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Antibiotic doses (outpatient)</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Situation</th><th class="py-2 pr-3">Drug and dose</th><th class="py-2 pr-3">Duration</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 align-top">First line, children</td><td class="py-2 pr-3 align-top">High-dose amoxicillin 80 to 90 mg/kg/day in 2 divided doses (maximum 2 g per dose)</td><td class="py-2 pr-3 align-top">10 days if under 2 years or severe; 7 days if 2 to 5 years and not severe; 5 to 7 days if 6 years and above and not severe</td></tr>
            <tr><td class="py-2 pr-3 align-top">Amoxicillin in the past 30 days, purulent conjunctivitis (otitis-conjunctivitis syndrome), or failure after 48 to 72 hours</td><td class="py-2 pr-3 align-top">Amoxicillin-clavulanate 90 mg/kg/day of the amoxicillin component with 6.4 mg/kg/day clavulanate in 2 doses (use a 14:1 product)</td><td class="py-2 pr-3 align-top">Same as above</td></tr>
            <tr><td class="py-2 pr-3 align-top">Non-severe penicillin allergy</td><td class="py-2 pr-3 align-top">Cefuroxime 30 mg/kg/day in 2 doses (maximum 500 mg per dose), cefpodoxime 10 mg/kg/day in 2 doses (maximum 400 mg per dose), or cefdinir 14 mg/kg/day; or ceftriaxone 50 mg/kg IM or IV once daily for 1 to 3 days</td><td class="py-2 pr-3 align-top">Same as above</td></tr>
            <tr><td class="py-2 pr-3 align-top">Adults</td><td class="py-2 pr-3 align-top">Amoxicillin 500 mg three times daily (WHO AWaRe first choice for mild to moderate disease); amoxicillin-clavulanate 500/125 mg three times daily if severe or after failure</td><td class="py-2 pr-3 align-top">5 to 7 days</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Macrolides are not recommended for AOM unless there is severe allergy to both penicillins and cephalosporins, because of resistance and treatment failure. Cotrimoxazole is not recommended.</li>
        <li>If a child fails to improve on two courses, or has complications, refer to ENT.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Admit or refer urgently</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Mastoiditis:</strong> painful swelling behind the ear with the pinna pushed forward, tenderness over the mastoid. Give IV ceftriaxone (children 80 to 100 mg/kg/day in 1 to 2 doses; adults 2 g daily) and arrange urgent ENT review.</li>
        <li>Facial nerve palsy, vertigo, persistent high fever, neck stiffness or drowsiness (meningitis, brain abscess), or an ill infant under 3 months.</li>
        <li><strong>Chronic suppurative otitis media</strong> (ear discharge for more than 2 weeks through a perforation) is not an acute URTI; treat with aural toilet and topical quinolone drops, and refer for ENT review. Do not use topical aminoglycosides when the drum is perforated.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="influenza-and-influenza-like-illness" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Influenza and Influenza-Like Illness
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Influenza presents with abrupt fever, headache, muscle pain, exhaustion, dry cough and sore throat, and overlaps with malaria, COVID-19 and other viral illnesses. In Nigeria, influenza circulates through the year with seasonal increases, and confirmation is rarely available, so treatment is usually clinical.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Healthy adults and children with mild illness:</strong> supportive care only (fluids, paracetamol, rest). No antiviral and no antibiotic.</li>
        <li><strong>Oseltamivir</strong> is recommended for patients admitted with influenza, patients with severe or progressive illness, and outpatients at high risk of complications (pregnant women, children under 5 years especially under 2, adults 65 years and over, chronic heart, lung, kidney or liver disease, diabetes, sickle cell disease, HIV or other immunosuppression, malnutrition). Start as early as possible, ideally within 48 hours, but still give it to hospitalised or severely ill patients who present later. Availability and cost in Nigeria limit use.</li>
        <li><strong>Adult oseltamivir dose:</strong> 75 mg twice daily for 5 days (reduce in renal impairment: 30 mg twice daily for creatinine clearance 30 to 60 mL/min, 30 mg once daily for 10 to 30 mL/min).</li>
        <li><strong>Children (5 days):</strong> under 1 year, 3 mg/kg twice daily; 1 year and above by weight: 15 kg or less, 30 mg twice daily; over 15 to 23 kg, 45 mg twice daily; over 23 to 40 kg, 60 mg twice daily; over 40 kg, 75 mg twice daily.</li>
        <li>Give an antibiotic only for a proven or strongly suspected bacterial complication such as pneumonia, sinusitis or otitis media. Admit if breathless, SpO<sub>2</sub> low, confused, dehydrated, or unable to drink.</li>
        <li>Prevention: annual influenza vaccine for high-risk groups and health workers where available; hand hygiene and respiratory etiquette.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="fluids-oral-and-intravenous-with-specific-volumes" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Fluids: Oral and Intravenous, With Specific Volumes
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Most URTI patients need only oral fluids. Fever and fast breathing increase water losses, and painful swallowing (tonsillitis, abscess, epiglottitis, diphtheria) reduces intake. Always choose the oral route if the patient can swallow safely.</p>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Oral fluids</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Adults:</strong> at least 2 to 2.5 litres a day of water, diluted fruit drinks, light pap (ogi) or soup, more when febrile. Aim for pale-yellow urine passed at least 4 to 5 times a day.</li>
        <li><strong>Children:</strong> continue breastfeeding on demand; offer small, frequent drinks. If the child is refusing or vomiting, give 5 mL (one teaspoon) every 1 to 2 minutes by spoon or oral syringe, and increase as tolerated.</li>
        <li><strong>Mild dehydration</strong> (thirsty, slightly dry mouth, reduced urine): low-osmolarity ORS 50 mL/kg over 4 hours. <strong>Moderate dehydration</strong> (sunken eyes, dry mucosa, reduced skin turgor, lethargy or irritability): ORS 100 mL/kg over 4 hours, then reassess. Make ORS from a sachet with the exact volume of clean (boiled, cooled) water printed on the packet; do not add sugar or salt.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">When IV fluids are needed</strong>
      <p class="text-sm">Use IV fluids for shock or severe dehydration, inability to swallow or drink (epiglottitis, peritonsillar abscess, severe tonsillitis, diphtheria with palatal paralysis if NG feeding is not possible), persistent vomiting not corrected by ORS or ondansetron, or before airway surgery. Switch to oral as soon as the patient can drink.</p>
    
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Scenario</th><th class="py-2 pr-3">Fluid</th><th class="py-2 pr-3">Volume and rate</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Child in shock (weak pulse, capillary refill over 3 seconds, low BP)</td>
              <td class="py-2 pr-3 align-top">0.9% sodium chloride or Ringer's lactate (Hartmann solution)</td>
              <td class="py-2 pr-3 align-top">20 mL/kg as a bolus over 15 to 30 minutes; reassess and repeat once or twice if still shocked. Stop for crackles, hepatomegaly or respiratory deterioration.</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Child with severe acute malnutrition and shock</td>
              <td class="py-2 pr-3 align-top">Ringer's lactate with 5% dextrose (or half-strength Darrow's with 5% dextrose)</td>
              <td class="py-2 pr-3 align-top">15 mL/kg over 1 hour only, then reassess. Do not give routine rapid boluses to a malnourished child who is not in shock; they are at high risk of heart failure. Use specialist or WHO malnutrition protocols.</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Child, maintenance (28 days to 18 years)</td>
              <td class="py-2 pr-3 align-top">Isotonic fluid with dextrose: 5% dextrose in 0.9% sodium chloride, with potassium chloride 20 mmol/L added once urine output is established</td>
              <td class="py-2 pr-3 align-top">Holliday-Segar: 100 mL/kg/day for the first 10 kg, plus 50 mL/kg/day for the next 10 kg, plus 20 mL/kg/day for each kg above 20 kg. Equivalent hourly rate: 4 mL/kg/h for the first 10 kg, 2 mL/kg/h for the next 10 kg, 1 mL/kg/h thereafter; usually capped at 100 mL/h.</td>
            </tr>
            <tr>
              <td class="py-2 pr-3 align-top font-semibold">Adult, maintenance</td>
              <td class="py-2 pr-3 align-top">0.9% sodium chloride or Ringer's lactate, alternating with 5% dextrose or using 5% dextrose in 0.9% saline; add potassium chloride about 20 mmol per litre once urine is passing and potassium is not high</td>
              <td class="py-2 pr-3 align-top">25 to 30 mL/kg/day: about 1.75 to 2.1 L/day for a 70 kg adult, roughly 75 to 90 mL/h. If dehydrated first give 500 to 1,000 mL of 0.9% saline or Ringer's lactate over 1 to 2 hours, then reassess and replace the estimated deficit.</td>
            </tr>
          </tbody>
        </table>
      </div>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Examples of daily maintenance for children (Holliday-Segar)</strong>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Weight</th><th class="py-2 pr-3">24-hour volume</th><th class="py-2 pr-3">Hourly rate (approx.)</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">5 kg</td><td class="py-2 pr-3">500 mL</td><td class="py-2 pr-3">21 mL/h</td></tr>
            <tr><td class="py-2 pr-3">10 kg</td><td class="py-2 pr-3">1,000 mL</td><td class="py-2 pr-3">42 mL/h</td></tr>
            <tr><td class="py-2 pr-3">15 kg</td><td class="py-2 pr-3">1,250 mL</td><td class="py-2 pr-3">52 mL/h</td></tr>
            <tr><td class="py-2 pr-3">20 kg</td><td class="py-2 pr-3">1,500 mL</td><td class="py-2 pr-3">62 mL/h</td></tr>
            <tr><td class="py-2 pr-3">30 kg</td><td class="py-2 pr-3">1,700 mL</td><td class="py-2 pr-3">71 mL/h</td></tr>
          </tbody>
        </table>
      </div>
    
      <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
        <p class="text-sm"><strong>Check the bag.</strong> The AAP maintenance-fluid guideline (2018) recommends isotonic fluids in children to prevent hospital-acquired hyponatraemia. The "dextrose-saline" bags commonly stocked in Nigerian wards are often hypotonic (for example 4.3% dextrose in 0.18% saline, or 5% dextrose in 0.45% saline). If only hypotonic fluid is available, do not exceed the calculated maintenance volume, avoid giving it to a child with severe illness or vomiting for long periods, and check serum sodium if the infusion runs beyond about 24 hours.</p>
      </div>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Monitoring IV therapy</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Review at least every 4 to 6 hours: heart rate, capillary refill, respiratory rate, hydration, urine output (aim for at least 1 mL/kg/h in children, 0.5 mL/kg/h in adults), and weight if possible.</li>
        <li>Check serum sodium and potassium if IV fluids continue beyond 24 hours, in severe illness, or in children on hypotonic fluid. Watch for fluid overload.</li>
        <li>Reduce volumes in cardiac disease, diphtheria with myocarditis, and kidney impairment.</li>
        <li>This guide does not cover neonates (under 28 days), who need neonatal protocols.</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="nigerian-brands-and-prescribing-realities" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
      Nigerian Brands and Prescribing Realities
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">The table lists common brand names found in Nigerian pharmacies. Many cheaper generics exist for each. Always prescribe by generic name and strength and let the pharmacist substitute a NAFDAC-registered equivalent.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
            <th class="py-2 pr-3">Generic</th><th class="py-2 pr-3">Common forms</th><th class="py-2 pr-3">Brand examples</th><th class="py-2 pr-3">Comment</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 align-top font-semibold">Amoxicillin</td><td class="py-2 pr-3 align-top">Capsules 250 and 500 mg; suspension 125 and 250 mg/5 mL; dispersible tablets</td><td class="py-2 pr-3 align-top">Amoxil and many local generics</td><td class="py-2 pr-3 align-top">First-line for most bacterial URTIs; cheapest option</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Amoxicillin-clavulanate (co-amoxiclav)</td><td class="py-2 pr-3 align-top">625 mg tablet (500/125); 1 g tablet (875/125); suspensions 228.5 and 457 mg/5 mL (7:1); ES 642.9 mg/5 mL (600/42.9, 14:1)</td><td class="py-2 pr-3 align-top">Augmentin, Clavulist and generics</td><td class="py-2 pr-3 align-top">GSK left Nigeria in late 2023; Augmentin is now mostly imported and costly. Many labels allow 625 mg twice daily for mild infection; use three-times-daily dosing, or the 875/125 mg twice-daily tablet, for sinusitis and abscess</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Ampicillin-cloxacillin</td><td class="py-2 pr-3 align-top">Capsules, syrup, drops</td><td class="py-2 pr-3 align-top">Ampiclox</td><td class="py-2 pr-3 align-top">Widely used for sore throat but not needed: penicillin V or amoxicillin is better targeted and cheaper</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Erythromycin</td><td class="py-2 pr-3 align-top">250 mg tablets, suspension</td><td class="py-2 pr-3 align-top">Erythro</td><td class="py-2 pr-3 align-top">Diphtheria option; GI side effects</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Azithromycin</td><td class="py-2 pr-3 align-top">250 and 500 mg tablets; suspension 200 mg/5 mL</td><td class="py-2 pr-3 align-top">Zithromax and generics</td><td class="py-2 pr-3 align-top">Diphtheria; penicillin allergy; resistance rising, avoid for routine URTI</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Cefuroxime</td><td class="py-2 pr-3 align-top">250 and 500 mg tablets; suspension</td><td class="py-2 pr-3 align-top">Zinnat and generics</td><td class="py-2 pr-3 align-top">Non-severe penicillin allergy</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Metronidazole</td><td class="py-2 pr-3 align-top">200 and 400 mg tablets; IV infusion</td><td class="py-2 pr-3 align-top">Flagyl, Metrotab</td><td class="py-2 pr-3 align-top">Add-on for abscess and deep neck infections only; not for uncomplicated URTI</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Paracetamol</td><td class="py-2 pr-3 align-top">500 mg tablets; syrups 120 and 250 mg/5 mL; suppositories; IV</td><td class="py-2 pr-3 align-top">Panadol, Calpol, Emzor paracetamol</td><td class="py-2 pr-3 align-top">Check hidden paracetamol in cold and flu products</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Ibuprofen</td><td class="py-2 pr-3 align-top">200 and 400 mg tablets; syrup 100 mg/5 mL</td><td class="py-2 pr-3 align-top">Brufen, Nurofen</td><td class="py-2 pr-3 align-top">With food; avoid when dehydrated</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Chlorphenamine</td><td class="py-2 pr-3 align-top">4 mg tablets; syrup 2 mg/5 mL</td><td class="py-2 pr-3 align-top">Piriton</td><td class="py-2 pr-3 align-top">Sedating</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Cetirizine / loratadine</td><td class="py-2 pr-3 align-top">10 mg tablets; syrups 5 mg/5 mL</td><td class="py-2 pr-3 align-top">Zyrtec, Clarityn</td><td class="py-2 pr-3 align-top">Allergic rhinitis</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Xylometazoline nasal</td><td class="py-2 pr-3 align-top">Adult and paediatric drops and sprays</td><td class="py-2 pr-3 align-top">Otrivin</td><td class="py-2 pr-3 align-top">Maximum 3 to 5 days</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Triprolidine / pseudoephedrine</td><td class="py-2 pr-3 align-top">Tablets, syrup</td><td class="py-2 pr-3 align-top">Actifed type</td><td class="py-2 pr-3 align-top">Adults and older children only; cautions in section 3</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Lozenges</td><td class="py-2 pr-3 align-top">Throat lozenges</td><td class="py-2 pr-3 align-top">Strepsils</td><td class="py-2 pr-3 align-top">Symptom relief only</td></tr>
            <tr><td class="py-2 pr-3 align-top font-semibold">Oseltamivir</td><td class="py-2 pr-3 align-top">30, 45, 75 mg capsules; suspension 6 mg/mL</td><td class="py-2 pr-3 align-top">Tamiflu and generics</td><td class="py-2 pr-3 align-top">Scarce; for severe or high-risk influenza</td></tr>
          </tbody>
        </table>
      </div>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Prescribing realities in Nigeria</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Ask about prior treatment.</strong> Many patients have already taken an antibiotic bought over the counter, or herbal mixtures, before reaching the clinic. Recent amoxicillin changes the choice (add clavulanate or change class) and failure of an incomplete course is common.</li>
        <li><strong>Counterfeit and substandard medicines:</strong> advise buying from licensed pharmacies, checking the NAFDAC number and expiry date, and keeping the box.</li>
        <li><strong>Cost:</strong> prescribe the narrowest, cheapest effective drug (amoxicillin or penicillin V) and write exact doses and duration on the prescription. Pre-printed "complete the course" advice matters most for GAS pharyngitis (10 days).</li>
        <li><strong>Injections.</strong> Parents and patients often request an injection. Explain that tablets or syrup work as well for URTIs and avoid injection risks.</li>
        <li><strong>Codeine</strong> cough syrups are restricted (FMOH directive, 2018). Do not prescribe them for URTI.</li>
        <li><strong>Report</strong> suspected diphtheria to the LGA or state surveillance officer and the NCDC (6232).</li>
      </ul>
    </div>
    
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="special-groups-prevention-and-follow-up" style="scroll-margin-top:1.5rem;">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
      Special Groups, Prevention and Follow-Up
    </h2>
    <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Special groups</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Pregnancy:</strong> paracetamol, penicillin V, amoxicillin, amoxicillin-clavulanate, cephalexin and azithromycin are generally acceptable. Avoid doxycycline and other tetracyclines, fluoroquinolones, clarithromycin (especially early pregnancy), ibuprofen and other NSAIDs (particularly after 30 weeks), and pseudoephedrine in the first trimester. Influenza in pregnancy is high-risk; treat early with oseltamivir.</li>
        <li><strong>Sickle cell disease:</strong> fever of 38.5 &deg;C or more is an emergency (risk of sepsis and acute chest syndrome); evaluate the same day and do not treat as a simple URTI. Keep hydrated.</li>
        <li><strong>Severe acute malnutrition and HIV:</strong> lower threshold to admit; avoid fluid boluses unless in shock (section 12); oral thrush is a clue; test for TB if cough or neck nodes persist.</li>
        <li><strong>Kidney or liver disease, elderly:</strong> avoid NSAIDs; reduce paracetamol ceiling; adjust antibiotic and oseltamivir doses for renal function.</li>
        <li><strong>Penicillin allergy label:</strong> most reported penicillin allergies are not true. Take a history of the reaction; a remote mild rash does not exclude amoxicillin or cephalosporins. Anaphylaxis, angioedema or Stevens-Johnson syndrome are absolute contraindications.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Prevention</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><strong>Complete routine immunisation:</strong> pentavalent vaccine (diphtheria, tetanus, pertussis, hepatitis B, Hib) at 6, 10 and 14 weeks; pneumococcal conjugate vaccine; measles. Check the immunisation card at every visit and vaccinate missed children.</li>
        <li>Td boosters for adults, pregnant women and health workers per national guidance; annual influenza vaccine for high-risk groups where available.</li>
        <li>Hand-washing, covering coughs and sneezes, not sharing cups or utensils, keeping sick children home until fever has gone.</li>
        <li>Reduce indoor smoke (wood or charcoal cooking, tobacco) and overcrowding; exclusive breastfeeding for 6 months lowers the burden of respiratory and ear infections.</li>
      </ul>
    
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Advice to give every patient or caregiver</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Most colds and sore throats are viral and improve without antibiotics. Pain relief, fluids and rest are the treatment.</li>
        <li>If an antibiotic is prescribed, give every dose on time and finish the course. Do not share or save antibiotics.</li>
        <li>Return the same day for: breathing difficulty, noisy breathing, drooling or inability to swallow, inability to drink, drowsiness or confusion, convulsions, stiff neck, swelling around the eye or behind the ear, persistent high fever, or a child under 3 months with fever.</li>
        <li>Return in 48 to 72 hours if not improving or worse, and after 10 days if cold symptoms persist.</li>
      </ul>
    </div>
    
    <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300">
      <strong class="block font-semibold mb-2">Guideline Watch</strong>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><strong>Sore throat testing:</strong> the 2025 IDSA update (part 1) uses clinical scores (Centor or McIsaac) to decide who needs testing and says to avoid routine testing in children under 3 years. The IDSA treatment recommendations from 2012 (penicillin or amoxicillin for 10 days) have not yet been revised in part 2. WHO AWaRe lists watchful waiting as first-line for sore throat and treats only likely GAS. No validated Nigerian clinical decision rule exists, so the pragmatic approach for settings without tests is clinical judgement.</li>
        <li><strong>Diphtheria:</strong> WHO (2024) now recommends macrolides in preference to penicillin and suggests an escalating DAT dose by severity and duration, replacing older fixed-dose practice. Older protocols that begin with penicillin may still be encountered; follow the NCDC and WHO 2024 recommendations.</li>
        <li><strong>Sinusitis duration:</strong> adults 5 to 7 days (IDSA 2012 and AAO-HNSF 2025; some local protocols use 10 days); children 10 days (AAP) or 10 to 14 days (IDSA). AAO-HNSF 2025 now accepts amoxicillin with or without clavulanate as first line, whereas IDSA 2012 favoured amoxicillin-clavulanate.</li>
        <li><strong>Croup dexamethasone dose:</strong> 0.15 mg/kg is as effective as 0.6 mg/kg for most children; higher doses are still used in severe croup.</li>
        <li><strong>Maintenance fluids:</strong> AAP 2018 recommends isotonic maintenance fluid; hypotonic dextrose-saline mixtures remain widely stocked and used in Nigeria.</li>
        <li><strong>Augmentin dosing:</strong> labels for the 500/125 mg tablet differ (every 8 hours in UK and IDSA-style regimens; every 12 hours is allowed for mild infection on some labels). For sinusitis and deeper infection use the every-8-hour regimen or the 875/125 mg twice-daily tablet.</li>
        <li><strong>Nigerian national guidance:</strong> the FMOH Standard Treatment Guidelines (2008 edition, with a later 2022 version) are the national reference; this guide draws on WHO and international guideline bodies and has not replaced the STG. Check the current STG and your hospital antibiogram. Where they differ from this guide, document the reason.</li>
        <li><strong>Oral phenylephrine:</strong> expert panels have concluded it is no better than placebo for nasal congestion.</li>
      </ul>
    </div>
    
    <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <strong class="block font-semibold text-rose-900 dark:text-rose-200 mb-3">Findings That Must Not Be Missed</strong>
      <ul class="space-y-2 text-sm text-rose-900 dark:text-rose-200">
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Grey-white membrane, bull neck or stridor in an unvaccinated patient:</strong> diphtheria. Isolate, notify, give DAT and a macrolide without waiting for the laboratory.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Drooling, muffled voice, tripod posture, sudden stridor:</strong> epiglottitis or deep neck infection. Do not examine the throat or lay the patient flat; call senior airway help.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Stridor at rest, chest indrawing, cyanosis, SpO<sub>2</sub> below 90 to 92%, drowsiness:</strong> admit and give oxygen.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Trismus, uvular deviation, one-sided tonsillar swelling:</strong> peritonsillar abscess needing drainage.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Periorbital swelling, proptosis, severe headache, seizure, neck stiffness:</strong> orbital or intracranial complication of sinusitis or otitis media.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Fever in a child under 3 months, or in a child with sickle cell disease:</strong> same-day hospital assessment.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Fever with no clear source, or fever that persists:</strong> test for malaria and look for coinfection.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Joint pain, new murmur, chorea or cola-coloured urine 1 to 4 weeks after a sore throat:</strong> acute rheumatic fever or post-streptococcal glomerulonephritis.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Hoarseness lasting more than 3 weeks, or cervical swelling that does not settle:</strong> consider tuberculosis or malignancy.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Rash after amoxicillin in a teenager with exudative tonsillitis:</strong> likely mononucleosis, not true penicillin allergy.</span></li>
      </ul>
    </div>
    
    <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <strong class="block font-semibold text-indigo-950 dark:text-indigo-200 mb-3">Key Clinical Takeaways</strong>
      <ul class="space-y-2 text-sm text-indigo-950 dark:text-indigo-200">
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Most URTIs are viral. Antibiotics are for confirmed or likely GAS pharyngitis, diphtheria, deep neck abscess, epiglottitis, selected acute bacterial sinusitis and selected acute otitis media.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Treat fever and pain with paracetamol (15 mg/kg every 4 to 6 hours in children) and ibuprofen when appropriate. Weigh the child. Test for malaria in every febrile patient.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>GAS pharyngitis: penicillin V or amoxicillin for 10 days (amoxicillin 50 mg/kg once daily, maximum 1 g), or one IM dose of benzathine penicillin. Cephalosporin or clindamycin or azithromycin for allergy.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A membranous sore throat in Nigeria is diphtheria until proven otherwise: isolate, notify (NCDC 6232), give DAT (20,000 to 80,000 IU by severity) and azithromycin or erythromycin for 14 days.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Croup: one dose of dexamethasone 0.15 mg/kg for all severities, with nebulised adrenaline and observation for stridor at rest. Epiglottitis: airway first, then ceftriaxone.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Sinusitis is bacterial only if symptoms last 10 days or more without improvement, are severe from the start, or worsen after improving. Then amoxicillin with or without clavulanate (adults 5 to 7 days; children 10 days, 80 to 90 mg/kg/day for high dose).</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use oral fluids and ORS wherever possible. When IV fluids are needed, use isotonic fluids with dextrose, calculate maintenance by Holliday-Segar (children) or 25 to 30 mL/kg/day (adults), and avoid boluses in malnourished children who are not in shock.</span></li>
        <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Avoid codeine, aspirin in children, oral cough and cold products under 6 years, unnecessary injections and unlabelled herbal mixtures. Vaccinate: the pentavalent schedule prevents diphtheria and Hib disease.</span></li>
      </ul>
    </div>
    
    <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 mb-6">
      <summary class="flex items-center justify-between cursor-pointer p-4 sm:p-6 font-brand text-sm font-semibold text-stone-700 dark:text-stone-300">
        References
        <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </summary>
      <div class="px-4 sm:px-6 pb-4 sm:pb-6 space-y-1.5">
        <p class="text-[10px] leading-snug text-stone-500">1. Infectious Diseases Society of America (IDSA). Clinical practice guideline for group A streptococcal pharyngitis, 2012 update (treatment regimens).</p>
        <p class="text-[10px] leading-snug text-stone-500">2. IDSA. Group A streptococcal pharyngitis: risk assessment using clinical scoring systems in children and adults, clinical practice guideline update, October 2025 (part 1).</p>
        <p class="text-[10px] leading-snug text-stone-500">3. American Heart Association. Prevention of rheumatic fever and diagnosis and treatment of acute streptococcal pharyngitis, scientific statement, 2009.</p>
        <p class="text-[10px] leading-snug text-stone-500">4. US Centers for Disease Control and Prevention. Clinical guidance for group A streptococcal pharyngitis.</p>
        <p class="text-[10px] leading-snug text-stone-500">5. IDSA. Clinical practice guideline for acute bacterial rhinosinusitis in children and adults, 2012.</p>
        <p class="text-[10px] leading-snug text-stone-500">6. American Academy of Otolaryngology-Head and Neck Surgery Foundation (AAO-HNSF). Clinical practice guideline: adult sinusitis, 2025 update.</p>
        <p class="text-[10px] leading-snug text-stone-500">7. American Academy of Pediatrics (AAP). Clinical practice guideline for the diagnosis and management of acute bacterial sinusitis in children aged 1 to 18 years, 2013.</p>
        <p class="text-[10px] leading-snug text-stone-500">8. AAP. Clinical practice guideline: the diagnosis and management of acute otitis media, 2013.</p>
        <p class="text-[10px] leading-snug text-stone-500">9. World Health Organization (WHO). The WHO AWaRe (Access, Watch, Reserve) antibiotic book, 2022 (pharyngitis, acute sinusitis, acute otitis media).</p>
        <p class="text-[10px] leading-snug text-stone-500">10. WHO. Clinical management of diphtheria: guideline, 2 February 2024 (macrolide preference, DAT dosing, no routine sensitivity testing); WHO preparation and administration of diphtheria antitoxin, 2024.</p>
        <p class="text-[10px] leading-snug text-stone-500">11. Nigeria Centre for Disease Control and Prevention (NCDC). Diphtheria fact sheet, public health advisories and situation reports (2022 to 2026).</p>
        <p class="text-[10px] leading-snug text-stone-500">12. WHO Disease Outbreak News, diphtheria in Nigeria, 2023.</p>
        <p class="text-[10px] leading-snug text-stone-500">13. Children's Health Queensland. Croup: emergency management in children, clinical guideline; Royal Children's Hospital Melbourne, croup guideline.</p>
        <p class="text-[10px] leading-snug text-stone-500">14. AAP. Clinical practice guideline: maintenance intravenous fluids in children, 2018.</p>
        <p class="text-[10px] leading-snug text-stone-500">15. WHO. Integrated Management of Childhood Illness (IMCI) chart booklet; WHO Model Formulary for Children (paracetamol, ibuprofen dosing).</p>
        <p class="text-[10px] leading-snug text-stone-500">16. AAP. Coughs and colds: medicines or home remedies; caring for your child's cold or flu.</p>
        <p class="text-[10px] leading-snug text-stone-500">17. IDSA. Clinical practice guidelines on seasonal influenza (antiviral treatment and dosing).</p>
        <p class="text-[10px] leading-snug text-stone-500">18. Federal Ministry of Health, Nigeria. Directive on codeine-containing cough syrups, May 2018; Standard Treatment Guidelines for Nigeria.</p>
        <p class="text-[10px] leading-snug text-stone-500">19. Nigerian Journal of Paediatrics, July 2024 editorial on the need for a clinical decision rule for pharyngitis in Nigeria.</p>
      </div>
    </details>
    
    </body>
    </html>
        `
    },

    {
      id: 'treatment-lower-respiratory-tract-infections',
      title: 'Lower Respiratory Tract Infections (LRTIs): Treatment Guide',
      category: 'Treatment',
      subCategory: 'Infectious Disease',
      content: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
  body { font-family: Georgia, serif; }
  .sans { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
  .quote { border-left-width: 3px; border-left-style: solid; }
  </style>
  </head>
  <body class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 p-4 sm:p-8 max-w-3xl mx-auto">
  
  <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
    <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
    <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
    <div class="relative p-6 sm:p-8">
      <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">TREATMENT &middot; INFECTIOUS DISEASE</span>
      <h1 class="font-brand text-3xl font-bold mb-3 text-white">Lower Respiratory Tract Infections (LRTIs)</h1>
      <p class="text-sm text-indigo-200">Pneumonia is one of the leading causes of death in Nigerian children under five, and a common cause of admission in adults, where it is made worse by malnutrition, HIV, tuberculosis, sickle cell disease, indoor smoke and late presentation. This guide covers acute bronchitis, pneumonia in children and adults, bronchiolitis, wheeze, COPD exacerbation and pertussis. It gives the antibiotic decision, drug doses and formulations by age and weight band, oxygen and fluid management, where to treat (home, clinic or admission), and common Nigerian brands.</p>
    </div>
  </div>
  
  <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300">
    <strong class="block font-semibold mb-2">How to read the doses</strong>
    <p class="text-sm">Doses assume normal kidney and liver function. Weigh every child and calculate in mg/kg, then round to a measurable tablet fraction or syringe volume; do not exceed adult maximums. Age and weight bands are given beside every paediatric dose. Brand names are examples only, not endorsements; strengths and availability change, so read the label and check the NAFDAC number. Cross-check with the current FMOH Standard Treatment Guidelines, the national IMCI/ICCM job aids and your hospital antibiogram.</p>
  </div>
  
  
  <nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
    <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
      <li><a href="#lrtis-at-a-glance" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>LRTIs at a Glance</span></a></li>
      <li><a href="#assessment-and-triage-home-clinic-or-admission" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Assessment and Triage: Home, Clinic or Admission?</span></a></li>
      <li><a href="#acute-bronchitis-and-persistent-cough" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Acute Bronchitis and Persistent Cough</span></a></li>
      <li><a href="#childhood-pneumonia-outpatient-treatment-2-to-59-months-and-older-children" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Childhood Pneumonia: Outpatient Treatment (2 to 59 Months, and Older Children)</span></a></li>
      <li><a href="#severe-pneumonia-in-children-and-young-infants-inpatient-treatment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Severe Pneumonia in Children and Young Infants: Inpatient Treatment</span></a></li>
      <li><a href="#bronchiolitis" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Bronchiolitis</span></a></li>
      <li><a href="#community-acquired-pneumonia-in-adults-and-adolescents" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Community-Acquired Pneumonia in Adults and Adolescents</span></a></li>
      <li><a href="#copd-exacerbation-wheeze-and-bronchodilator-doses" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>COPD Exacerbation, Wheeze and Bronchodilator Doses</span></a></li>
      <li><a href="#pertussis-whooping-cough" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Pertussis (Whooping Cough)</span></a></li>
      <li><a href="#oxygen-and-fluids-specific-targets-and-volumes" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Oxygen and Fluids: Specific Targets and Volumes</span></a></li>
      <li><a href="#drug-dosage-and-formulation-reference-by-age-group" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Drug Dosage and Formulation Reference by Age Group</span></a></li>
      <li><a href="#nigerian-brands-and-prescribing-realities" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Nigerian Brands and Prescribing Realities</span></a></li>
      <li><a href="#prevention-follow-up-and-counselling" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
        <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Prevention, Follow-Up and Counselling</span></a></li></ul>
  </nav>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="lrtis-at-a-glance" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
    LRTIs at a Glance
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">The key decisions are: is this pneumonia, how sick is the patient, does the patient need oxygen, and could this be tuberculosis, malaria, sickle cell chest crisis or heart failure rather than a simple chest infection? Antibiotics are for pneumonia and a few other bacterial LRTIs. They are not for acute bronchitis or bronchiolitis.</p>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Condition</th><th class="py-2 pr-3">Usual cause</th><th class="py-2 pr-3">Antibiotic?</th><th class="py-2 pr-3">First-line treatment</th><th class="py-2 pr-3">Where</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3 align-top font-semibold">Acute bronchitis</td><td class="py-2 pr-3 align-top">Viruses</td><td class="py-2 pr-3 align-top">No</td><td class="py-2 pr-3 align-top">Fluids, paracetamol, honey, time</td><td class="py-2 pr-3 align-top">Home</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Pneumonia, child 2 to 59 months, no severity signs</td><td class="py-2 pr-3 align-top">Pneumococcus, H. influenzae, viruses</td><td class="py-2 pr-3 align-top">Yes</td><td class="py-2 pr-3 align-top">Oral amoxicillin (dispersible tablet)</td><td class="py-2 pr-3 align-top">Home with review in 48 to 72 h</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Severe pneumonia, child</td><td class="py-2 pr-3 align-top">Pneumococcus, H. influenzae, Staph. aureus, Klebsiella, others</td><td class="py-2 pr-3 align-top">Yes (injectable first)</td><td class="py-2 pr-3 align-top">Ceftriaxone, or ampicillin plus gentamicin; oxygen</td><td class="py-2 pr-3 align-top">Admit</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Pneumonia, infant under 2 months</td><td class="py-2 pr-3 align-top">Group B strep, Gram-negatives, pneumococcus</td><td class="py-2 pr-3 align-top">Yes (injectable)</td><td class="py-2 pr-3 align-top">Ampicillin plus gentamicin</td><td class="py-2 pr-3 align-top">Always admit</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Bronchiolitis</td><td class="py-2 pr-3 align-top">RSV and other viruses</td><td class="py-2 pr-3 align-top">No</td><td class="py-2 pr-3 align-top">Oxygen, nasal clearing, feeding or fluids</td><td class="py-2 pr-3 align-top">Mild: home. Hypoxaemia or poor feeding: admit</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Pneumonia, adult or older child, non-severe</td><td class="py-2 pr-3 align-top">Pneumococcus, atypicals (Mycoplasma, Chlamydophila)</td><td class="py-2 pr-3 align-top">Yes</td><td class="py-2 pr-3 align-top">Amoxicillin, or doxycycline</td><td class="py-2 pr-3 align-top">Home if CURB-65 0 to 1</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Pneumonia, adult, severe</td><td class="py-2 pr-3 align-top">Pneumococcus, atypicals, Staph. aureus, Gram-negatives</td><td class="py-2 pr-3 align-top">Yes (IV)</td><td class="py-2 pr-3 align-top">Ceftriaxone plus a macrolide</td><td class="py-2 pr-3 align-top">Admit; ICU if severe</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">COPD exacerbation</td><td class="py-2 pr-3 align-top">Viruses, bacteria, pollution</td><td class="py-2 pr-3 align-top">If sputum purulent and more breathlessness</td><td class="py-2 pr-3 align-top">Bronchodilators, prednisolone, 5 days of antibiotic</td><td class="py-2 pr-3 align-top">Mild: home. Otherwise admit</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Pertussis (whooping cough)</td><td class="py-2 pr-3 align-top">Bordetella pertussis</td><td class="py-2 pr-3 align-top">Yes, early</td><td class="py-2 pr-3 align-top">Azithromycin</td><td class="py-2 pr-3 align-top">Infants: admit</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="assessment-and-triage-home-clinic-or-admission" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
    Assessment and Triage: Home, Clinic or Admission?
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Step zero: test for malaria, and consider other mimics</strong>
    <p class="text-sm">Fever with fast breathing is also a feature of severe malaria (acidotic breathing), sepsis, sickle cell acute chest syndrome, heart failure and rheumatic heart disease, and tuberculosis. Test every febrile patient for malaria and treat according to the national guideline. Look for pallor, jaundice, hepatomegaly and heart murmur.</p>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Children (IMCI-style assessment)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Count the breathing rate for a full minute in a calm child. <strong>Fast breathing:</strong> 60 or more per minute under 1 month (and under 2 months); 50 or more at 1 to 11 months; 40 or more at 12 months to 5 years. In a malnourished child lower each threshold by 5 per minute.</li>
      <li><strong>Signs of severe pneumonia:</strong> lower chest wall indrawing that is clearly visible and persistent (mild indrawing is normal under 2 months), central cyanosis or SpO<sub>2</sub> below 90%, nasal flaring, grunting, stridor, altered consciousness, inability to drink or breastfeed, convulsions, severe malnutrition, age under 2 months.</li>
      <li><strong>Pulse oximetry</strong> should be used wherever available. Hypoxaemia (SpO<sub>2</sub> below 90%) means admission and oxygen even if the child looks well.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Adults and older children (CURB-65)</strong>
    <p class="text-sm">One point each for: <strong>C</strong>onfusion (new), <strong>U</strong>rea above 7 mmol/L, <strong>R</strong>espiratory rate 30 or more, <strong>B</strong>lood pressure (systolic below 90 or diastolic 60 or less), age 65 or more. Where urea cannot be measured use CRB-65.</p>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Score 0 to 1:</strong> low risk, home treatment is usually suitable.</li>
      <li><strong>Score 2:</strong> consider hospital assessment or short admission.</li>
      <li><strong>Score 3 or more:</strong> severe pneumonia: admit and consider ICU or HDU. The ATS/IDSA guideline (2019) advises that scores estimate mortality but should not by themselves decide where a patient is treated; use clinical judgement, oxygen saturation and social circumstances. Severe CAP is defined by one major criterion (ventilation, septic shock needing vasopressors) or three or more minor criteria (respiratory rate 30 or more, confusion, low temperature, hypotension needing fluids, multilobar infiltrates, PaO<sub>2</sub>/FiO<sub>2</sub> 250 or less, urea raised, low platelets or white cells).</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Outpatient or admission</strong>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Home or clinic treatment is suitable when</th><th class="py-2 pr-3">Admit when any of these</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr>
            <td class="py-2 pr-3 align-top">
              <ul class="list-disc pl-4 space-y-1">
                <li>Child 2 to 59 months with fast breathing only, or chest indrawing with no danger signs and good drinking</li>
                <li>Adult CURB-65 0 to 1, SpO<sub>2</sub> 94% or more on air, drinking and taking tablets</li>
                <li>Caregiver understands the danger signs and can return, and review in 48 to 72 hours is possible</li>
                <li>No high-risk condition</li>
              </ul>
            </td>
            <td class="py-2 pr-3 align-top">
              <ul class="list-disc pl-4 space-y-1">
                <li>Any child under 2 months with suspected pneumonia, or any general danger sign</li>
                <li>SpO<sub>2</sub> below 90% (children) or below 92% (adults), cyanosis, respiratory distress, grunting</li>
                <li>Cannot drink, vomits everything, dehydration, convulsions, drowsiness or confusion</li>
                <li>Severe malnutrition, sickle cell disease, HIV with severe illness, heart disease, immunosuppression</li>
                <li>Adult CURB-65 of 2 or more, hypotension, multilobar disease, large effusion or empyema</li>
                <li>Failure to improve after 48 to 72 hours of correct oral treatment, or deterioration at review</li>
                <li>Poor home support, distance from care, or doubtful adherence</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="acute-bronchitis-and-persistent-cough" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
    Acute Bronchitis and Persistent Cough
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm"><strong>Acute bronchitis</strong> is a self-limiting, usually viral cough with or without sputum for up to 2 to 3 weeks, with no signs of pneumonia (no fast breathing, no chest indrawing, normal oxygen saturation, no focal chest signs). The WHO AWaRe antibiotic book advises that antibiotic treatment is not recommended, because there is no significant clinical benefit and there is a risk of side effects.</p>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Treatment:</strong> fluids, paracetamol or ibuprofen for fever or chest pain (doses in the reference table, section 11), honey at bedtime for children over 1 year (half a teaspoon for 1 to 5 years, 1 teaspoon for 6 to 11 years, 2 teaspoons from 12 years), and rest. Stop smoking. Oral cough medicines are not recommended under 6 years, and codeine syrups are prescription-only in Nigeria (FMOH directive of 2018) and should not be given to children.</li>
      <li><strong>Wheeze:</strong> if there is wheeze and recurrent episodes, think of asthma (salbutamol, section 8). Do not label every wheezy infant as "chest infection".</li>
      <li><strong>Review</strong> if fever persists beyond 3 days, breathing becomes fast or difficult, or the cough lasts more than 3 weeks.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Cough for more than 2 weeks: think of TB, pertussis, HIV, asthma, foreign body</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Tuberculosis</strong> is common in Nigeria. Any patient with cough for 2 weeks or more, or with weight loss, night sweats, haemoptysis, contact with a TB case or HIV, needs sputum testing by GeneXpert (Xpert MTB/RIF) or smear microscopy and a chest X-ray where available, through the National TB programme. Do not give repeated courses of antibiotics or fluoroquinolones to a patient with chronic cough, because they delay the diagnosis. In children, who often cannot produce sputum, use the national paediatric TB algorithm (contact history, growth faltering, Xpert on gastric or stool samples where available).</li>
      <li><strong>Pertussis</strong> (section 9), <strong>asthma</strong>, <strong>foreign body</strong> (sudden onset choking in a toddler, unilateral wheeze) and <strong>HIV-related lung disease</strong> are the other common causes.</li>
    </ul>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="childhood-pneumonia-outpatient-treatment-2-to-59-months-and-older-children" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
    Childhood Pneumonia: Outpatient Treatment (2 to 59 Months, and Older Children)
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm"><strong>WHO 2024 recommendations (children 2 to 59 months):</strong> fast breathing without danger signs is treated with oral amoxicillin for 3 or 5 days; chest indrawing without danger signs is treated with oral amoxicillin for 5 days as an outpatient (not with injections in hospital); community health worker programmes can start oral amoxicillin at home and follow up. Oral amoxicillin in dispersible-tablet form is the preferred paediatric formulation.</p>
    <p class="text-sm"><strong>Dose:</strong> amoxicillin 30 mg/kg per dose three times daily (maximum 1 g per dose; 3 g/day), as in the MSF guidance below. Many national programmes and WHO job aids use twice-daily dispersible-tablet bands instead (the same daily dose divided into two). Use the schedule of your national ICCM or IMCI chart if one is in use at your facility, and do not mix schedules.</p>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Amoxicillin by age and weight band (three times daily, 5 days)</strong>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Age</th><th class="py-2 pr-3">Weight</th><th class="py-2 pr-3">Dose per time</th><th class="py-2 pr-3">Suspension 125 mg/5 mL</th><th class="py-2 pr-3">Suspension 250 mg/5 mL</th><th class="py-2 pr-3">Dispersible 250 mg</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3">Under 3 months (if treated as outpatient, rare)</td><td class="py-2 pr-3">Under 6 kg</td><td class="py-2 pr-3">125 mg</td><td class="py-2 pr-3">5 mL</td><td class="py-2 pr-3">2.5 mL</td><td class="py-2 pr-3">&frac12; tablet</td></tr>
          <tr><td class="py-2 pr-3">3 to under 24 months</td><td class="py-2 pr-3">6 to under 12 kg</td><td class="py-2 pr-3">250 mg</td><td class="py-2 pr-3">10 mL</td><td class="py-2 pr-3">5 mL</td><td class="py-2 pr-3">1 tablet</td></tr>
          <tr><td class="py-2 pr-3">2 to under 8 years</td><td class="py-2 pr-3">12 to under 25 kg</td><td class="py-2 pr-3">500 mg</td><td class="py-2 pr-3">20 mL</td><td class="py-2 pr-3">10 mL</td><td class="py-2 pr-3">2 tablets (or one 500 mg tablet)</td></tr>
          <tr><td class="py-2 pr-3">8 years and above, adults</td><td class="py-2 pr-3">25 kg or more</td><td class="py-2 pr-3">1 g</td><td class="py-2 pr-3">not practical</td><td class="py-2 pr-3">20 mL</td><td class="py-2 pr-3">4 tablets (or two 500 mg tablets)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs sans">Bands round the dose to practical tablet fractions and are as used in the MSF essential drugs guidance. Dispersible tablets dissolve in a small amount of clean water or breast milk in a spoon; give the whole volume. Reconstitute suspensions with clean (boiled, cooled) water to the mark and keep them according to the label.</p>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Supportive care at home</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Continue breastfeeding and give frequent feeds and fluids (small, frequent sips). Clear a blocked nose with saline drops.</li>
      <li>Paracetamol 15 mg/kg every 4 to 6 hours for fever or discomfort (maximum 4 doses/day); table in section 11.</li>
      <li>Do not give cough or cold syrups under 6 years. Keep the child upright and warm; avoid smoke exposure.</li>
      <li>Teach danger signs: fast or difficult breathing, chest indrawing, grunting, cannot drink, drowsy, convulsion, bluish lips. Return at once if any appear, and in all cases at 48 to 72 hours.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Follow-up at 48 to 72 hours</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Improving</strong> (less fever, slower breathing, feeding better): complete the course.</li>
      <li><strong>No improvement after 3 days of correct dosing:</strong> check adherence and dose, test again for malaria, then add azithromycin (see doses below) to cover atypical organisms, and consider TB, HIV, foreign body and empyema.</li>
      <li><strong>Worse:</strong> admit and treat as severe pneumonia (section 5).</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Children 5 to 12 years</strong>
    <p class="text-sm">Pneumococcus remains the leading bacterial cause; <em>Mycoplasma pneumoniae</em> and <em>Chlamydophila</em> become more frequent. Use amoxicillin as above (30 mg/kg per dose three times daily, maximum 1 g per dose) for 5 days. If there is no response in 48 to 72 hours, or the picture is atypical (gradual onset, headache, dry cough, wheeze), add azithromycin 10 mg/kg once on day 1 (maximum 500 mg), then 5 mg/kg once daily (maximum 250 mg) on days 2 to 5.</p>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="severe-pneumonia-in-children-and-young-infants-inpatient-treatment" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
    Severe Pneumonia in Children and Young Infants: Inpatient Treatment
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Immediate steps</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Clear the airway, give <strong>oxygen</strong> (section 10), keep the child semi-upright and warm, secure IV or IO access if in distress, and give the first antibiotic dose without delay.</li>
      <li>Check blood glucose (hypoglycaemia is common in sick infants), test for malaria, check haemoglobin, and consider HIV testing, sputum or Xpert for TB, and a chest X-ray where it will change management.</li>
      <li>Nurse in a high-visibility bed with continuous pulse oximetry if available.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Infants under 2 months: ampicillin plus gentamicin</strong>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Age and weight</th><th class="py-2 pr-3">Ampicillin IV (preferred) or IM</th><th class="py-2 pr-3">Gentamicin IV or IM, once daily</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3">0 to 7 days, under 2 kg</td><td class="py-2 pr-3">50 mg/kg every 12 hours</td><td class="py-2 pr-3">3 mg/kg</td></tr>
          <tr><td class="py-2 pr-3">0 to 7 days, 2 kg or more</td><td class="py-2 pr-3">50 mg/kg every 8 hours</td><td class="py-2 pr-3">5 mg/kg</td></tr>
          <tr><td class="py-2 pr-3">8 days to under 1 month</td><td class="py-2 pr-3">50 mg/kg every 8 hours</td><td class="py-2 pr-3">5 mg/kg</td></tr>
          <tr><td class="py-2 pr-3">1 month to under 2 months</td><td class="py-2 pr-3">50 mg/kg every 6 hours</td><td class="py-2 pr-3">6 mg/kg</td></tr>
        </tbody>
      </table>
    </div>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Ampicillin for 10 days and gentamicin for 5 days (MSF). If no improvement after 48 hours of correct therapy, add cloxacillin IV for 10 to 14 days (0 to 7 days: 50 mg/kg every 12 hours if under 2 kg, every 8 hours if 2 kg or more; over 7 days: 50 mg/kg every 8 hours if under 2 kg, every 6 hours if 2 kg or more). If ampicillin is unavailable, cefotaxime is used, and ceftriaxone 50 mg/kg once daily for 10 days is a last resort in this age group.</li>
      <li><strong>Avoid ceftriaxone in jaundiced neonates</strong> and never give it with calcium-containing IV fluids in neonates.</li>
      <li>Do not give antipyretics routinely to young infants; control the environment and keep the baby warm; check temperature. Keep feeding by breast or expressed milk, or by NG tube if too ill to suck.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Children 2 months to 5 years (and older children) with severe pneumonia</strong>
    <p class="text-sm"><strong>Option 1 (preferred): ceftriaxone 50 mg/kg once daily, IM or slow IV.</strong> <strong>Option 2: ampicillin 50 mg/kg every 6 hours plus gentamicin 6 mg/kg once daily.</strong> Give for at least 3 days parenterally. When the child is improving, taking oral feeds and afebrile, switch to oral amoxicillin 30 mg/kg three times daily (bands in section 4) to complete 10 days in total.</p>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Weight</th><th class="py-2 pr-3">Ceftriaxone 50 mg/kg once daily</th><th class="py-2 pr-3">Ampicillin 50 mg/kg every 6 hours</th><th class="py-2 pr-3">Gentamicin 6 mg/kg once daily (40 mg/mL ampoule)</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3">4 kg</td><td class="py-2 pr-3">200 mg</td><td class="py-2 pr-3">200 mg</td><td class="py-2 pr-3">24 mg (0.6 mL)</td></tr>
          <tr><td class="py-2 pr-3">6 kg</td><td class="py-2 pr-3">300 mg</td><td class="py-2 pr-3">300 mg</td><td class="py-2 pr-3">36 mg (0.9 mL)</td></tr>
          <tr><td class="py-2 pr-3">10 kg</td><td class="py-2 pr-3">500 mg</td><td class="py-2 pr-3">500 mg</td><td class="py-2 pr-3">60 mg (1.5 mL)</td></tr>
          <tr><td class="py-2 pr-3">15 kg</td><td class="py-2 pr-3">750 mg</td><td class="py-2 pr-3">750 mg</td><td class="py-2 pr-3">90 mg (2.25 mL)</td></tr>
          <tr><td class="py-2 pr-3">20 kg</td><td class="py-2 pr-3">1 g</td><td class="py-2 pr-3">1 g</td><td class="py-2 pr-3">120 mg (3 mL)</td></tr>
        </tbody>
      </table>
    </div>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Ceftriaxone IM:</strong> the manufacturer's IM solvent contains lidocaine. Ceftriaxone mixed with this solvent must never be given IV; use water for injection for IV doses. Give IV slowly over about 3 minutes (or as a short infusion).</li>
      <li><strong>Gentamicin:</strong> ensure the child is hydrated and passing urine. Avoid if kidney injury is suspected or in severe dehydration unless benefit clearly outweighs risk.</li>
      <li><strong>Ampicillin</strong> should be given in 4 divided doses a day, and at least 3 if 4 is not possible.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">If no improvement or deterioration after 48 hours</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Re-examine, check oxygen, glucose and hydration. Look for complications: <strong>empyema or pleural effusion</strong> (stony dull, reduced air entry; ultrasound or X-ray), <strong>pneumothorax</strong>, <strong>lung abscess</strong>, <strong>heart failure</strong> or severe anaemia.</li>
      <li><strong>Add cloxacillin IV 25 to 50 mg/kg every 6 hours</strong> to cover Staphylococcus aureus (common after measles, skin infection, influenza and in malnutrition). Once improving and afebrile for 3 days, switch to oral amoxicillin-clavulanate to complete 10 to 14 days, using a 7:1 or 8:1 (or higher ratio) product and calculating on the amoxicillin component (up to 50 mg/kg per dose twice daily in the MSF protocol; many references use 80 to 90 mg/kg/day in two doses). Expect diarrhoea at high doses.</li>
      <li>If there is still no improvement 48 hours after ceftriaxone plus cloxacillin, <strong>consider TB</strong> (send Xpert, chest X-ray). If TB is unlikely, add azithromycin (10 mg/kg once on day 1, maximum 500 mg, then 5 mg/kg once daily, maximum 250 mg, on days 2 to 5).</li>
      <li><strong>Moderate or large empyema</strong> may need drainage; give antibiotics active against pneumococcus and staphylococcus and involve a surgeon.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Special situations in Nigerian children</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Severe acute malnutrition:</strong> pneumonia can be subtle (lower the fast breathing threshold by 5 per minute); treat as severe pneumonia with injectable antibiotics and follow the national SAM protocol. Avoid rapid fluid boluses unless in shock (section 10).</li>
      <li><strong>HIV-exposed or infected infants (especially 2 to 6 months with severe hypoxaemic pneumonia):</strong> think of <strong>Pneumocystis jirovecii</strong> pneumonia: add high-dose cotrimoxazole (trimethoprim 8 mg/kg plus sulfamethoxazole 40 mg/kg per dose, IV or orally every 8 hours) for 3 weeks, in addition to the antibiotics above. Start antiretroviral therapy under HIV programme guidance.</li>
      <li><strong>Measles:</strong> give vitamin A on two consecutive days (50,000 IU under 6 months, 100,000 IU at 6 to 11 months, 200,000 IU from 12 months), and expect staphylococcal and viral pneumonia.</li>
      <li><strong>Sickle cell disease (acute chest syndrome):</strong> cough, fever, chest pain, new infiltrate. Admit; give ceftriaxone plus azithromycin as above, analgesia, oxygen, and avoid fluid overload (do not exceed maintenance without clear dehydration); involve the haematology team early for transfusion.</li>
      <li><strong>Aspiration or recurrent pneumonia:</strong> look for gastro-oesophageal reflux, neurological impairment, cleft palate, foreign body, immunodeficiency and TB.</li>
    </ul>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="bronchiolitis" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
    Bronchiolitis
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Bronchiolitis (usually RSV) affects infants and children under 2 years: a cold for 1 to 3 days, then cough, fast breathing, fine crackles and wheeze, with feeding difficulty. The diagnosis is clinical. The AAP guideline (2014) advises against routine blood tests, chest X-ray and bronchodilators, and recommends against albuterol (salbutamol), epinephrine, corticosteroids, antibiotics and chest physiotherapy. It supports oxygen for hypoxaemia, and nasogastric or IV fluids when a child cannot maintain oral hydration.</p>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Mild (feeding normally, no distress, SpO<sub>2</sub> above 90%):</strong> home care with nasal saline and suction before feeds, small frequent feeds or breastfeeding, paracetamol only if distressed by fever. Return advice: refusing feeds, fast or laboured breathing, pauses in breathing, drowsiness, bluish lips. Review at 24 to 48 hours.</li>
      <li><strong>Admit:</strong> SpO<sub>2</sub> below 90%, marked indrawing or grunting, apnoea, age under 3 months, prematurity, congenital heart disease or lung disease, poor feeding (taking less than half of usual), dehydration, or a worried caregiver far from care.</li>
      <li><strong>Oxygen</strong> by nasal prongs to keep SpO<sub>2</sub> at 90% or above (section 10). In a hospital with consistent monitoring, oxygen may be withheld above 90%.</li>
      <li><strong>Feeding and fluids:</strong> if tiring or unable to feed, give expressed breast milk or formula by NG tube; if NG feeding is not possible, give IV fluids at about two-thirds to 70% of maintenance (section 10). Nasal saline and gentle suction clear the nose.</li>
      <li><strong>Nebulised hypertonic saline (3%)</strong> can be considered only for infants admitted for more than a few days, with weak evidence; it is not recommended in the emergency department.</li>
      <li>Do not give antibiotics unless there is evidence of a secondary bacterial infection (high fever, focal consolidation, infant is very toxic). Do not give salbutamol or steroids routinely.</li>
      <li>A <strong>trial of salbutamol</strong> is reasonable for an older infant or toddler with a clear family or personal history of asthma and atopy, with a documented response (section 8).</li>
    </ul>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="community-acquired-pneumonia-in-adults-and-adolescents" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
    Community-Acquired Pneumonia in Adults and Adolescents
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Features: fever, cough with sputum, pleuritic chest pain, breathlessness, focal crackles or bronchial breathing, and raised respiratory rate. Pneumococcus is the commonest cause; atypical organisms (Mycoplasma, Chlamydophila, Legionella) are less common; Staphylococcus aureus and Klebsiella are more frequent after influenza, alcohol use and diabetes. Chest X-ray, SpO<sub>2</sub>, full blood count and urea help with severity. In Nigeria, always consider TB and HIV, particularly if the illness is subacute or slow to respond.</p>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Outpatient treatment (CURB-65 0 to 1, no comorbidity)</strong>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Option</th><th class="py-2 pr-3">Dose</th><th class="py-2 pr-3">Duration</th><th class="py-2 pr-3">Notes</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3 align-top font-semibold">Amoxicillin (first choice)</td><td class="py-2 pr-3 align-top">1 g three times daily (ATS/IDSA 2019 and MSF); UK guidance uses 500 mg three times daily for low-severity disease</td><td class="py-2 pr-3 align-top">5 days (at least)</td><td class="py-2 pr-3 align-top">Use 1 g three times daily where pneumococcal resistance is a concern or illness is more severe</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Doxycycline</td><td class="py-2 pr-3 align-top">200 mg first dose, then 100 mg once daily (UK) or 100 mg twice daily (ATS/IDSA)</td><td class="py-2 pr-3 align-top">5 days</td><td class="py-2 pr-3 align-top">Penicillin allergy or suspected atypical infection; not in pregnancy or children under 8; separate from calcium, iron, magnesium and antacids</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Macrolide (only if local pneumococcal macrolide resistance is low)</td><td class="py-2 pr-3 align-top">Azithromycin 500 mg on day 1, then 250 mg daily; or clarithromycin 500 mg twice daily; erythromycin 500 mg four times daily in pregnancy</td><td class="py-2 pr-3 align-top">5 days (azithromycin) or at least 5 days</td><td class="py-2 pr-3 align-top">Resistance to macrolides in pneumococcus is increasing</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">With comorbidity (diabetes, chronic heart, lung, liver or kidney disease, alcoholism, asplenia, malignancy)</td><td class="py-2 pr-3 align-top">Amoxicillin-clavulanate 500/125 mg every 8 hours, or 875/125 mg every 12 hours, plus doxycycline or a macrolide</td><td class="py-2 pr-3 align-top">At least 5 days</td><td class="py-2 pr-3 align-top">Fluoroquinolone monotherapy is an alternative but avoid in Nigeria for outpatients because of masked TB and resistance</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-sm">Review in 48 to 72 hours. Treat for at least 5 days and until afebrile and clinically stable for 48 hours. Most symptoms improve within a week, but cough and tiredness can last up to 3 to 6 weeks.</p>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Inpatient treatment, non-severe (CURB-65 2)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Ceftriaxone</strong> 1 to 2 g IV once daily (MSF: 1 g once daily), or ampicillin 1 g IV every 6 to 8 hours (some guidelines use ampicillin-sulbactam 1.5 to 3 g every 6 hours, or cefotaxime 1 to 2 g every 8 hours), <strong>plus</strong> azithromycin 500 mg once daily or clarithromycin 500 mg twice daily (or doxycycline 100 mg twice daily if macrolides are contraindicated).</li>
      <li>Give parenterally for at least 3 days; when afebrile, stable and eating, switch to oral amoxicillin 1 g three times daily (or amoxicillin-clavulanate if required) to complete 7 to 10 days. A short 5-day course is acceptable when the patient is clinically stable at day 5.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Severe pneumonia (CURB-65 of 3 or more, ICU or HDU)</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Ceftriaxone 2 g IV once daily</strong> (or cefotaxime 1 to 2 g every 8 hours) <strong>plus a macrolide</strong>: azithromycin 500 mg IV or orally once daily, or clarithromycin 500 mg twice daily. Alternatively co-amoxiclav 1.2 g IV every 8 hours plus clarithromycin.</li>
      <li><strong>If Staph. aureus is likely</strong> (post-influenza, skin infection, necrotising or cavitating pneumonia, empyema): add <strong>cloxacillin 2 g IV every 6 hours</strong> (MSF) or flucloxacillin; add vancomycin 15 mg/kg every 12 hours or linezolid 600 mg every 12 hours if MRSA is suspected and these are available.</li>
      <li><strong>If Pseudomonas or resistant Gram-negatives are likely</strong> (structural lung disease, recent IV antibiotics, hospital exposure): use an anti-pseudomonal beta-lactam such as piperacillin-tazobactam 4.5 g every 6 hours, ceftazidime 2 g every 8 hours or meropenem 1 g every 8 hours, guided by local antibiogram.</li>
      <li><strong>Aspiration pneumonia:</strong> amoxicillin-clavulanate 1.2 g IV every 8 hours, or ceftriaxone plus metronidazole 500 mg every 8 hours.</li>
      <li><strong>Failure to improve at 48 hours:</strong> check for empyema, abscess, resistant organisms, TB (Xpert), <em>Pneumocystis</em> in HIV, heart failure and pulmonary embolism. In HIV with CD4 below 200, think of PJP: high-dose cotrimoxazole (trimethoprim 15 to 20 mg/kg/day in 3 to 4 divided doses) for 21 days with prednisolone if hypoxic, under specialist guidance.</li>
      <li><strong>Corticosteroids</strong> are not routinely recommended for community-acquired pneumonia.</li>
    </ul>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="copd-exacerbation-wheeze-and-bronchodilator-doses" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
    COPD Exacerbation, Wheeze and Bronchodilator Doses
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Acute exacerbation of COPD (chronic bronchitis) in adults</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Bronchodilator:</strong> short-acting beta-agonist by metered-dose inhaler with a spacer, 1 to 2 puffs (100 micrograms per puff of salbutamol) hourly at first, then every 2 to 4 hours as needed; inhaler and nebuliser are equally effective. In hospital, salbutamol 2.5 to 5 mg nebulised, with ipratropium 500 micrograms nebulised, repeated every 4 to 6 hours. Drive nebulisers with air, not oxygen, if there is a risk of carbon dioxide retention.</li>
      <li><strong>Oral prednisolone 30 to 40 mg once daily for 5 days</strong> (about 40 mg a day for a maximum of 5 days). Longer courses increase infection risk and have no added benefit.</li>
      <li><strong>Antibiotic</strong> when there is increased breathlessness together with increased sputum volume and purulence (or when ventilation is required): amoxicillin-clavulanate 500/125 mg three times daily, doxycycline 200 mg on day 1 then 100 mg daily, or a macrolide, for 5 days, guided by local resistance. Fourteen days is used if bronchiectasis is present.</li>
      <li><strong>Oxygen:</strong> aim for SpO<sub>2</sub> 88 to 92% in patients at risk of hypercapnic failure; check arterial or venous blood gases if drowsy. Controlled oxygen (venturi mask 24 to 28% or nasal cannula 1 to 2 L/min).</li>
      <li><strong>Admit</strong> for failure to respond, new oxygen requirement, new confusion, respiratory failure, serious comorbidity (heart failure, arrhythmia, pulmonary embolism), need for frequent bronchodilators, or poor home support.</li>
      <li>Recovery takes about 11 to 13 days on average. Review at 48 hours, address smoking and indoor cooking smoke (biomass), review inhaler technique, and give a written action plan.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Wheeze and asthma in children (not bronchiolitis, not pneumonia)</strong>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Drug</th><th class="py-2 pr-3">Under 5 years</th><th class="py-2 pr-3">5 to 12 years</th><th class="py-2 pr-3">Adolescents and adults</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3 align-top font-semibold">Salbutamol MDI 100 micrograms/puff via spacer</td><td class="py-2 pr-3 align-top">2 to 4 puffs (infants may use a mask); repeat every 20 minutes for up to 3 doses in an attack, then every 4 hours</td><td class="py-2 pr-3 align-top">4 to 6 puffs each dose</td><td class="py-2 pr-3 align-top">4 to 8 puffs each dose</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Salbutamol nebulised</td><td class="py-2 pr-3 align-top">2.5 mg</td><td class="py-2 pr-3 align-top">2.5 to 5 mg</td><td class="py-2 pr-3 align-top">2.5 to 5 mg</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Prednisolone, oral (acute attack)</td><td class="py-2 pr-3 align-top">1 to 2 mg/kg once daily (maximum 20 mg) for 3 to 5 days</td><td class="py-2 pr-3 align-top">1 to 2 mg/kg once daily (maximum 40 mg) for 3 to 5 days</td><td class="py-2 pr-3 align-top">40 to 50 mg once daily for 5 days</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Ipratropium nebulised (severe attack, with salbutamol)</td><td class="py-2 pr-3 align-top">250 micrograms every 20 minutes for 3 doses</td><td class="py-2 pr-3 align-top">250 micrograms every 20 minutes for 3 doses</td><td class="py-2 pr-3 align-top">500 micrograms every 4 to 6 hours</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs sans">Asthma dosing in this table follows general GINA and WHO practice and is given as a quick reference; use the national asthma guideline for full management. Give oxygen first if SpO<sub>2</sub> is below 90%.</p>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="pertussis-whooping-cough" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
    Pertussis (Whooping Cough)
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Suspect pertussis in a child with paroxysmal cough for 2 weeks or more, whooping or post-tussive vomiting, apnoea or cyanosis in young infants, or in any contact of a confirmed case, especially an unvaccinated or incompletely vaccinated child. Infants under 6 months are at highest risk and should be admitted.</p>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Age</th><th class="py-2 pr-3">Azithromycin (preferred)</th><th class="py-2 pr-3">Erythromycin (alternative)</th><th class="py-2 pr-3">Clarithromycin</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3 align-top">Under 1 month</td><td class="py-2 pr-3 align-top">10 mg/kg once daily for 5 days</td><td class="py-2 pr-3 align-top">Not preferred (risk of pyloric stenosis); 40 to 50 mg/kg/day in 4 doses for 14 days only if azithromycin is unavailable</td><td class="py-2 pr-3 align-top">Not recommended</td></tr>
          <tr><td class="py-2 pr-3 align-top">1 to 5 months</td><td class="py-2 pr-3 align-top">10 mg/kg once daily for 5 days</td><td class="py-2 pr-3 align-top">40 to 50 mg/kg/day in 4 doses for 14 days</td><td class="py-2 pr-3 align-top">15 mg/kg/day in 2 doses for 7 days</td></tr>
          <tr><td class="py-2 pr-3 align-top">6 months and children</td><td class="py-2 pr-3 align-top">10 mg/kg (maximum 500 mg) on day 1, then 5 mg/kg once daily (maximum 250 mg) on days 2 to 5</td><td class="py-2 pr-3 align-top">40 to 50 mg/kg/day in 4 doses (maximum 2 g/day) for 14 days</td><td class="py-2 pr-3 align-top">15 mg/kg/day in 2 doses (maximum 1 g/day) for 7 days</td></tr>
          <tr><td class="py-2 pr-3 align-top">Adults</td><td class="py-2 pr-3 align-top">500 mg on day 1, then 250 mg once daily on days 2 to 5</td><td class="py-2 pr-3 align-top">2 g/day in 4 doses for 14 days</td><td class="py-2 pr-3 align-top">1 g/day in 2 doses for 7 days</td></tr>
        </tbody>
      </table>
    </div>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Cotrimoxazole</strong> (trimethoprim 8 mg/kg/day plus sulfamethoxazole 40 mg/kg/day in 2 doses for 14 days) is an alternative for infants 2 months and older if macrolides cannot be used. It is contraindicated under 2 months.</li>
      <li>Antibiotics shorten the infectious period if started within the first 3 weeks, and have limited effect on cough duration. The doses here come from the CDC guidance (2005); check the current CDC or WHO guidance if available.</li>
      <li><strong>Infants:</strong> admit for apnoea, cyanosis, feeding difficulty; give oxygen, small frequent feeds or NG feeds, gentle suction, and monitor in a place with continuous observation. Cough suppressants are not useful.</li>
      <li><strong>Contacts:</strong> household contacts, especially infants and pregnant women, receive the same antibiotic regimen as prophylaxis. Isolate the patient for 5 days of treatment. Vaccinate: pertussis is part of the pentavalent (DPT-HepB-Hib) vaccine given at 6, 10 and 14 weeks.</li>
    </ul>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="oxygen-and-fluids-specific-targets-and-volumes" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
    Oxygen and Fluids: Specific Targets and Volumes
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Oxygen</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Children:</strong> give oxygen for SpO<sub>2</sub> below 90% (or if no oximeter is available, for cyanosis, grunting, severe indrawing, head nodding or inability to feed) and titrate to keep SpO<sub>2</sub> at 90% or above. Without a pulse oximeter, start with at least 1 L/min. In neonates and young infants, WHO suggests targeting 92 to 95% once oxygen is started, with nasal prongs at about 0.5 L/min.</li>
      <li><strong>Delivery:</strong> oxygen concentrator or cylinder through nasal prongs (infants and small children) or a face mask; humidify if flow is high; keep the equipment clean and check the child at least every 3 hours. Try stopping oxygen when saturations stay at 90% or above, and monitor.</li>
      <li><strong>Adults:</strong> target SpO<sub>2</sub> 94 to 98% for most patients; 88 to 92% in COPD or when there is a risk of hypercapnia.</li>
    </ul>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Fluids in pneumonia: give enough, not too much</strong>
    <p class="text-sm">Severe pneumonia and bronchiolitis can cause water retention (inappropriate antidiuretic hormone secretion) and pulmonary oedema. Fever and fast breathing raise water losses. The practical rule is to feed orally where possible, and where IV fluids are required to use a restricted maintenance volume of an isotonic fluid and avoid boluses unless the patient is in shock.</p>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Scenario</th><th class="py-2 pr-3">Fluid and volume</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3 align-top font-semibold">Child with pneumonia, able to feed</td><td class="py-2 pr-3 align-top">Breast milk or feeds on demand and oral fluids by cup and spoon; ORS if dehydrated (50 mL/kg over 4 hours for mild, 100 mL/kg over 4 hours for moderate dehydration). Do not force-feed.</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Child with severe respiratory distress, cannot feed safely</td><td class="py-2 pr-3 align-top">Place an IV line and give about 70% of normal maintenance (about two-thirds), with the feeds resuming as soon as possible. Isotonic fluid with dextrose, for example 5% dextrose in 0.9% sodium chloride, with potassium chloride 20 mmol/L once urine output is established.</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Nasogastric feeding if IV is not possible</td><td class="py-2 pr-3 align-top">Under 12 months: 5 mL/kg/hour; over 12 months: 3 to 4 mL/kg/hour, alternating milk and water.</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Child in shock</td><td class="py-2 pr-3 align-top">Isotonic crystalloid bolus 10 to 20 mL/kg (0.9% sodium chloride or Ringer's lactate) over 15 to 30 minutes, in small aliquots with reassessment after each (check for crackles, liver size, work of breathing). In severe acute malnutrition use 15 mL/kg of Ringer's lactate with 5% dextrose over 1 hour only.</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Adult with pneumonia</td><td class="py-2 pr-3 align-top">Encourage 2 to 2.5 litres of oral fluid a day. If hypotensive or dehydrated: 500 mL to 1 litre of 0.9% sodium chloride or Ringer's lactate over 30 to 60 minutes, then reassess. Maintenance 25 to 30 mL/kg/day (about 75 to 90 mL/hour for a 70 kg adult). Avoid overload in heart failure; check sodium daily (hyponatraemia).</td></tr>
        </tbody>
      </table>
    </div>
  
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Examples: 70% of Holliday-Segar maintenance in children</strong>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Weight</th><th class="py-2 pr-3">Full maintenance (24 h)</th><th class="py-2 pr-3">70% (24 h)</th><th class="py-2 pr-3">70% rate</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3">5 kg</td><td class="py-2 pr-3">500 mL</td><td class="py-2 pr-3">350 mL</td><td class="py-2 pr-3">15 mL/h</td></tr>
          <tr><td class="py-2 pr-3">10 kg</td><td class="py-2 pr-3">1,000 mL</td><td class="py-2 pr-3">700 mL</td><td class="py-2 pr-3">29 mL/h</td></tr>
          <tr><td class="py-2 pr-3">15 kg</td><td class="py-2 pr-3">1,250 mL</td><td class="py-2 pr-3">875 mL</td><td class="py-2 pr-3">36 mL/h</td></tr>
          <tr><td class="py-2 pr-3">20 kg</td><td class="py-2 pr-3">1,500 mL</td><td class="py-2 pr-3">1,050 mL</td><td class="py-2 pr-3">44 mL/h</td></tr>
          <tr><td class="py-2 pr-3">30 kg</td><td class="py-2 pr-3">1,700 mL</td><td class="py-2 pr-3">1,190 mL</td><td class="py-2 pr-3">50 mL/h</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-300">
      <p class="text-sm"><strong>Check the bag.</strong> The AAP (2018) recommends isotonic maintenance fluids for children from 28 days to 18 years. The "dextrose-saline" bags commonly stocked on Nigerian wards are often hypotonic (for example 4.3% dextrose in 0.18% saline). In pneumonia, bronchiolitis and other respiratory illness with a risk of antidiuretic hormone excess, hypotonic fluid increases the risk of hyponatraemia and cerebral oedema. Prefer 5% dextrose in 0.9% sodium chloride; if only hypotonic fluid exists, restrict to the calculated volume and check serum sodium.</p>
    </div>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="drug-dosage-and-formulation-reference-by-age-group" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
    Drug Dosage and Formulation Reference by Age Group
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <p class="text-sm">Quick reference for the drugs used in this guide. Always calculate from the child's weight and check the concentration printed on the bottle or vial.</p>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Drug and formulations</th><th class="py-2 pr-3">Neonates and infants under 2 months</th><th class="py-2 pr-3">2 months to 5 years</th><th class="py-2 pr-3">5 to 12 years</th><th class="py-2 pr-3">Adolescents and adults</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Amoxicillin<br><span class="font-normal">Capsules 250 and 500 mg; dispersible tablet 250 mg; suspension 125 and 250 mg/5 mL</span></td>
            <td class="py-2 pr-3 align-top">Treated with injectables; oral step-down 125 mg three times daily if under 6 kg (MSF band) once improving</td>
            <td class="py-2 pr-3 align-top">30 mg/kg three times daily (bands in section 4); maximum 1 g per dose</td>
            <td class="py-2 pr-3 align-top">30 mg/kg three times daily; maximum 1 g per dose</td>
            <td class="py-2 pr-3 align-top">1 g three times daily (500 mg three times daily for mild disease in UK guidance)</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Amoxicillin-clavulanate<br><span class="font-normal">Tablets 625 mg (500/125) and 1 g (875/125); suspensions 156.25, 228.5, 312.5, 457 mg/5 mL; ES 642.9 mg/5 mL (600/42.9)</span></td>
            <td class="py-2 pr-3 align-top">Not first line; neonatal specialist use only</td>
            <td class="py-2 pr-3 align-top">45 to 50 mg/kg per dose twice daily (amoxicillin component, using a 7:1 or higher ratio; calculate on the amoxicillin); maximum 2 g amoxicillin per dose</td>
            <td class="py-2 pr-3 align-top">Same as left</td>
            <td class="py-2 pr-3 align-top">500/125 mg every 8 hours or 875/125 mg every 12 hours; IV 1.2 g every 8 hours</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Ceftriaxone<br><span class="font-normal">Vials 250 mg, 500 mg, 1 g, 2 g for IM or IV</span></td>
            <td class="py-2 pr-3 align-top">50 mg/kg once daily (only if ampicillin and cefotaxime are unavailable; avoid in jaundice)</td>
            <td class="py-2 pr-3 align-top">50 mg/kg once daily, IM or slow IV</td>
            <td class="py-2 pr-3 align-top">50 mg/kg once daily (maximum 2 g)</td>
            <td class="py-2 pr-3 align-top">1 to 2 g once daily</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Ampicillin<br><span class="font-normal">Vials 500 mg and 1 g</span></td>
            <td class="py-2 pr-3 align-top">50 mg/kg every 12, 8 or 6 hours by age and weight (table in section 5)</td>
            <td class="py-2 pr-3 align-top">50 mg/kg every 6 hours</td>
            <td class="py-2 pr-3 align-top">50 mg/kg every 6 hours (maximum 1 to 2 g per dose)</td>
            <td class="py-2 pr-3 align-top">1 g every 6 to 8 hours</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Gentamicin<br><span class="font-normal">40 mg/mL ampoule (2 mL = 80 mg)</span></td>
            <td class="py-2 pr-3 align-top">3 to 6 mg/kg once daily by age and weight (table in section 5)</td>
            <td class="py-2 pr-3 align-top">6 mg/kg once daily</td>
            <td class="py-2 pr-3 align-top">6 mg/kg once daily</td>
            <td class="py-2 pr-3 align-top">Not routine in CAP; if used, 5 to 7 mg/kg once daily with renal monitoring</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Cloxacillin<br><span class="font-normal">Vials 500 mg; capsules, syrup</span></td>
            <td class="py-2 pr-3 align-top">50 mg/kg every 12, 8 or 6 hours by age and weight</td>
            <td class="py-2 pr-3 align-top">25 to 50 mg/kg every 6 hours IV</td>
            <td class="py-2 pr-3 align-top">25 to 50 mg/kg every 6 hours IV</td>
            <td class="py-2 pr-3 align-top">2 g IV every 6 hours</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Azithromycin<br><span class="font-normal">Tablets 250 and 500 mg; suspension 200 mg/5 mL; IV 500 mg</span></td>
            <td class="py-2 pr-3 align-top">10 mg/kg once daily for 5 days (pertussis)</td>
            <td class="py-2 pr-3 align-top">10 mg/kg (maximum 500 mg) on day 1, then 5 mg/kg (maximum 250 mg) on days 2 to 5</td>
            <td class="py-2 pr-3 align-top">Same as left</td>
            <td class="py-2 pr-3 align-top">500 mg on day 1, then 250 mg daily on days 2 to 5; or 500 mg daily IV in severe CAP</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Doxycycline<br><span class="font-normal">100 mg capsules</span></td>
            <td class="py-2 pr-3 align-top">Do not use</td>
            <td class="py-2 pr-3 align-top">Do not use under 8 years</td>
            <td class="py-2 pr-3 align-top">From 8 years: 2.2 mg/kg twice daily (maximum 100 mg per dose)</td>
            <td class="py-2 pr-3 align-top">100 mg twice daily (or 200 mg then 100 mg daily); not in pregnancy</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Cotrimoxazole<br><span class="font-normal">Suspension 40/200 mg per 5 mL; tablets 80/400 and 160/800 mg</span></td>
            <td class="py-2 pr-3 align-top">Contraindicated under 2 months</td>
            <td class="py-2 pr-3 align-top">PJP: TMP 8 mg/kg plus SMX 40 mg/kg every 8 hours for 3 weeks</td>
            <td class="py-2 pr-3 align-top">Same as left</td>
            <td class="py-2 pr-3 align-top">PJP: TMP 15 to 20 mg/kg/day in 3 to 4 doses for 21 days; pertussis alternative 960 mg twice daily</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Paracetamol<br><span class="font-normal">Syrup 120 and 250 mg/5 mL; tablets 500 mg</span></td>
            <td class="py-2 pr-3 align-top">Not routine under 2 months; medical advice only</td>
            <td class="py-2 pr-3 align-top">15 mg/kg every 4 to 6 hours (maximum 4 doses/day); 10 kg = 150 mg = 6 mL of 120 mg/5 mL</td>
            <td class="py-2 pr-3 align-top">15 mg/kg every 4 to 6 hours; 20 kg = 300 mg</td>
            <td class="py-2 pr-3 align-top">1 g every 6 hours; maximum 4 g/day (3 g if frail or underweight)</td>
          </tr>
          <tr>
            <td class="py-2 pr-3 align-top font-semibold">Salbutamol<br><span class="font-normal">MDI 100 micrograms/puff with spacer; nebuliser 2.5 and 5 mg</span></td>
            <td class="py-2 pr-3 align-top">Not for bronchiolitis; trial only if atopic history</td>
            <td class="py-2 pr-3 align-top">2 to 4 puffs via spacer, or 2.5 mg nebulised</td>
            <td class="py-2 pr-3 align-top">4 to 6 puffs, or 2.5 to 5 mg nebulised</td>
            <td class="py-2 pr-3 align-top">4 to 8 puffs, or 2.5 to 5 mg nebulised</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="nigerian-brands-and-prescribing-realities" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
    Nigerian Brands and Prescribing Realities
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <div class="overflow-x-auto">
      <table class="w-full text-xs sans border-collapse">
        <thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
          <th class="py-2 pr-3">Generic</th><th class="py-2 pr-3">Brand examples (verify label)</th><th class="py-2 pr-3">Comment</th>
        </tr></thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr><td class="py-2 pr-3 align-top font-semibold">Amoxicillin</td><td class="py-2 pr-3 align-top">Amoxil and local generics; dispersible 250 mg tablets</td><td class="py-2 pr-3 align-top">Cheapest, first line for pneumonia</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Amoxicillin-clavulanate</td><td class="py-2 pr-3 align-top">Augmentin (625 mg, 1 g, ES suspension), Clavulist and generics</td><td class="py-2 pr-3 align-top">Augmentin is largely imported since GSK left Nigeria in late 2023 and is costly. Do not interchange suspensions of different ratios</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Ceftriaxone</td><td class="py-2 pr-3 align-top">Rocephin and many generics</td><td class="py-2 pr-3 align-top">Check IM versus IV diluent; use only with water for injection when giving IV</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Cefuroxime</td><td class="py-2 pr-3 align-top">Zinnat and generics</td><td class="py-2 pr-3 align-top">Oral second-line; not needed for most pneumonia</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Azithromycin</td><td class="py-2 pr-3 align-top">Zithromax and generics</td><td class="py-2 pr-3 align-top">Atypicals, pertussis, add-on in severe CAP</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Erythromycin</td><td class="py-2 pr-3 align-top">Erythro</td><td class="py-2 pr-3 align-top">Pregnancy-safe macrolide; nausea</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Ampicillin-cloxacillin</td><td class="py-2 pr-3 align-top">Ampiclox</td><td class="py-2 pr-3 align-top">Often used for chest infections; avoid as default, use specific agents</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Metronidazole</td><td class="py-2 pr-3 align-top">Flagyl, Metrotab</td><td class="py-2 pr-3 align-top">Aspiration and lung abscess add-on</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Salbutamol</td><td class="py-2 pr-3 align-top">Ventolin inhaler and nebules; generic inhalers and syrups</td><td class="py-2 pr-3 align-top">Use a spacer; oral syrup is much less effective than inhaled</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Paracetamol, ibuprofen</td><td class="py-2 pr-3 align-top">Panadol, Calpol, Emzor paracetamol; Brufen, Nurofen</td><td class="py-2 pr-3 align-top">Avoid duplicate paracetamol in "cold and flu" products</td></tr>
          <tr><td class="py-2 pr-3 align-top font-semibold">Cotrimoxazole</td><td class="py-2 pr-3 align-top">Septrin and generics</td><td class="py-2 pr-3 align-top">High-dose use for PJP in HIV</td></tr>
        </tbody>
      </table>
    </div>
    <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Prescribing realities</strong>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Delay in care:</strong> many children first see a patent medicine vendor or herbalist. Ask what has been taken and for how long. Prior antibiotic use, steroids or herbal mixtures (agbo) change the picture, and herbal products can cause liver and kidney injury.</li>
      <li><strong>Antibiotic selection:</strong> avoid starting with ceftriaxone for every cough, avoid fluoroquinolones for adult chest infections where TB is possible, and avoid repeated short courses.</li>
      <li><strong>Cost and supply:</strong> amoxicillin DT is cheap and effective; many facilities run out of injectables, so confirm stock and plan referral early rather than giving a partial course.</li>
      <li><strong>Oxygen access:</strong> many health centres lack oxygen or pulse oximeters. Refer children who cannot be oxygenated early, with a letter that states the oxygen saturation if measured, and give the first antibiotic dose before transfer.</li>
      <li><strong>Codeine</strong> cough syrups are restricted in Nigeria. Do not prescribe them for LRTIs.</li>
      <li><strong>Counterfeit drugs:</strong> advise purchase from licensed pharmacies and check the NAFDAC number.</li>
    </ul>
  </div>
  
  <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="prevention-follow-up-and-counselling" style="scroll-margin-top:1.5rem;">
    <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
    Prevention, Follow-Up and Counselling
  </h2>
  <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><strong>Vaccines:</strong> pentavalent (diphtheria, tetanus, pertussis, hepatitis B, Hib) at 6, 10 and 14 weeks; pneumococcal conjugate vaccine; measles vaccine. Check every child's card at each visit and catch up on missed doses. Adults at risk (age 65 and above, chronic lung, heart, kidney or liver disease, diabetes, sickle cell disease, HIV) should be offered pneumococcal and influenza vaccines where available.</li>
      <li><strong>Reduce risk:</strong> exclusive breastfeeding for 6 months, good nutrition and vitamin A, hand-washing, cleaner cooking fuels and ventilated kitchens, avoiding tobacco smoke, early treatment of malaria and HIV, and prompt care-seeking.</li>
      <li><strong>Advice to caregivers and patients:</strong> give every antibiotic dose on time and finish the course; keep drinking and feeding; return the same day for fast or difficult breathing, chest indrawing, grunting, bluish lips, drowsiness, convulsion, refusal to feed, or no improvement at 48 to 72 hours.</li>
      <li><strong>Follow-up:</strong> children with pneumonia: review at 48 to 72 hours, then when the course is finished; refer for chest X-ray and TB evaluation if symptoms persist for more than 2 to 4 weeks. Adults over 50 or smokers: consider a follow-up chest X-ray after 6 weeks to exclude an underlying tumour or TB.</li>
      <li><strong>Recurrent pneumonia</strong> (two or more episodes in a year, or the same lobe repeatedly): look for HIV, TB, sickle cell disease, aspiration, foreign body, bronchiectasis, heart disease and immune deficiency.</li>
    </ul>
  </div>
  
  <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300">
    <strong class="block font-semibold mb-2">Guideline Watch</strong>
    <ul class="list-disc pl-5 space-y-2 text-sm">
      <li><strong>Amoxicillin schedule:</strong> MSF and some programmes use 30 mg/kg three times daily for 5 days; WHO and many national ICCM/IMCI charts use twice-daily dispersible-tablet dosing. WHO (2024) supports 3 or 5 days for fast breathing and 5 days for chest indrawing without danger signs. Use the schedule on your national chart. The twice-daily band tables were not available to me for verification, so only the MSF three-times-daily bands are given in section 4.</li>
      <li><strong>Adult amoxicillin dose:</strong> 1 g three times daily (ATS/IDSA 2019, MSF) versus 500 mg three times daily (UK primary care). The higher dose is preferred when pneumococcal resistance or severity is a concern.</li>
      <li><strong>Doxycycline schedule:</strong> UK guidance uses 200 mg then 100 mg daily; ATS/IDSA uses 100 mg twice daily.</li>
      <li><strong>Duration:</strong> adult CAP at least 5 days if stable (ATS/IDSA 2019); MSF treats 5 days outpatient and 7 to 10 days when starting with injections; children 5 days for outpatient pneumonia.</li>
      <li><strong>Bronchiolitis:</strong> AAP 2014 recommends against bronchodilators; WHO and some national guides still allow a trial of salbutamol when there is wheeze with an atopic history.</li>
      <li><strong>Pertussis doses</strong> come from the CDC guidance dated 2005; current protocols may have been updated.</li>
      <li><strong>Co-amoxiclav in children:</strong> MSF uses up to 50 mg/kg per dose twice daily (7:1 or 8:1), whereas AAP-type regimens use 80 to 90 mg/kg/day in 2 doses with 14:1 products to limit diarrhoea.</li>
      <li><strong>Nigerian guidance:</strong> the FMOH Standard Treatment Guidelines and the national ICCM and IMCI chart booklets are the reference for the facility level; they were not retrievable here, so doses should be checked against them.</li>
      <li><strong>Maintenance fluids:</strong> AAP 2018 recommends isotonic fluids; hypotonic dextrose-saline bags are still commonly used in Nigeria.</li>
    </ul>
  </div>
  
  <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
    <strong class="block font-semibold text-rose-900 dark:text-rose-200 mb-3">Findings That Must Not Be Missed</strong>
    <ul class="space-y-2 text-sm text-rose-900 dark:text-rose-200">
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>SpO<sub>2</sub> below 90% (children) or below 92% (adults), cyanosis, grunting, drowsiness:</strong> admit and give oxygen immediately.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Any infant under 2 months with fast breathing, indrawing or fever:</strong> admit and give ampicillin plus gentamicin.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Fever with fast breathing in a child:</strong> test for malaria; severe malaria and sepsis can look like pneumonia.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Cough for 2 weeks or more, weight loss, night sweats, haemoptysis, TB contact or HIV:</strong> test for TB (Xpert) and do not simply repeat antibiotic courses.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>HIV-exposed infant with severe hypoxaemic pneumonia:</strong> think of Pneumocystis and add high-dose cotrimoxazole.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>No improvement after 48 hours, persistent fever, stony-dull chest:</strong> look for empyema, abscess, staphylococcal pneumonia and TB.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Sickle cell disease with chest pain, fever and cough:</strong> acute chest syndrome. Admit and involve the haematology team; avoid fluid overload.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Severe acute malnutrition with fast breathing:</strong> admit; avoid rapid fluid boluses unless in shock.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Apnoea, cyanosis or whooping in a young infant:</strong> pertussis; admit and give azithromycin.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e11d48"/><path d="M12 6v7M12 16.5v1" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></svg><span><strong>Adult with confusion, systolic BP below 90, respiratory rate 30 or more:</strong> severe sepsis; give IV antibiotics and fluids within the first hour and escalate care.</span></li>
    </ul>
  </div>
  
  <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
    <strong class="block font-semibold text-indigo-950 dark:text-indigo-200 mb-3">Key Clinical Takeaways</strong>
    <ul class="space-y-2 text-sm text-indigo-950 dark:text-indigo-200">
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Acute bronchitis and bronchiolitis are viral and need no antibiotic. Pneumonia is bacterial until proven otherwise, but always check for malaria, TB, HIV and sickle cell disease.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Children 2 to 59 months with fast breathing, or chest indrawing without danger signs, are treated at home with oral amoxicillin (30 mg/kg three times daily in the MSF protocol) with review at 48 to 72 hours.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Severe pneumonia in children: ceftriaxone 50 mg/kg once daily, or ampicillin 50 mg/kg every 6 hours plus gentamicin 6 mg/kg once daily, plus oxygen to keep SpO<sub>2</sub> at 90% or more. Infants under 2 months always get ampicillin plus gentamicin (doses by age and weight).</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>No improvement at 48 to 72 hours: recheck dose and adherence, add cloxacillin for staphylococcus, add azithromycin for atypicals, and look for empyema and TB.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Adults: amoxicillin 1 g three times daily or doxycycline for 5 days when CURB-65 is 0 to 1; ceftriaxone plus a macrolide for admitted patients; add cloxacillin if staphylococcus is likely.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Bronchiolitis: oxygen, nasal clearing, feeding or fluids; no routine bronchodilators, steroids or antibiotics. COPD exacerbation: bronchodilators, prednisolone 30 to 40 mg for 5 days, antibiotic only when sputum is purulent, SpO<sub>2</sub> target 88 to 92%.</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Fluids: use about 70% of maintenance in IV-dependent children with severe respiratory illness, use isotonic fluid, and avoid boluses unless there is shock (and then only 10 to 20 mL/kg in aliquots with reassessment, or 15 mL/kg over 1 hour in malnutrition).</span></li>
      <li class="flex gap-2"><svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4338ca"/><path d="M7 12.5l3.5 3.5L17 9" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Prevention is the best treatment: complete pentavalent and pneumococcal vaccination, vitamin A, breastfeeding, nutrition and clean air.</span></li>
    </ul>
  </div>
  
  <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 mb-6">
    <summary class="flex items-center justify-between cursor-pointer p-4 sm:p-6 font-brand text-sm font-semibold text-stone-700 dark:text-stone-300">
      References
      <svg class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <div class="px-4 sm:px-6 pb-4 sm:pb-6 space-y-1.5">
      <p class="text-[10px] leading-snug text-stone-500">1. World Health Organization (WHO). Guidelines for management of pneumonia and diarrhoea in children up to 10 years of age, 2024 (pneumonia treatment recommendations).</p>
      <p class="text-[10px] leading-snug text-stone-500">2. WHO. Revised WHO classification and treatment of childhood pneumonia at health facilities, 2014.</p>
      <p class="text-[10px] leading-snug text-stone-500">3. WHO. Pocket book of hospital care for children (pneumonia, oxygen therapy, neonatal care).</p>
      <p class="text-[10px] leading-snug text-stone-500">4. Medecins Sans Frontieres (MSF). Clinical guidelines: pneumonia in children under 5 years; pneumonia in children over 5 years and adults; amoxicillin (oral) dosing.</p>
      <p class="text-[10px] leading-snug text-stone-500">5. American Thoracic Society and Infectious Diseases Society of America (ATS/IDSA). Diagnosis and treatment of adults with community-acquired pneumonia, 2019 clinical practice guideline.</p>
      <p class="text-[10px] leading-snug text-stone-500">6. UK primary care and NHS antimicrobial guidance for community-acquired pneumonia (CRB-65 and amoxicillin or doxycycline regimens).</p>
      <p class="text-[10px] leading-snug text-stone-500">7. American Academy of Pediatrics (AAP). Clinical practice guideline: diagnosis, management and prevention of bronchiolitis, 2014.</p>
      <p class="text-[10px] leading-snug text-stone-500">8. Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global strategy for the diagnosis, management and prevention of COPD (exacerbation management).</p>
      <p class="text-[10px] leading-snug text-stone-500">9. US Centers for Disease Control and Prevention (CDC). Recommended antimicrobial agents for treatment and postexposure prophylaxis of pertussis, 2005 guidance.</p>
      <p class="text-[10px] leading-snug text-stone-500">10. WHO. The WHO AWaRe (Access, Watch, Reserve) antibiotic book, 2022 (bronchitis).</p>
      <p class="text-[10px] leading-snug text-stone-500">11. AAP. Clinical practice guideline: maintenance intravenous fluids in children, 2018.</p>
      <p class="text-[10px] leading-snug text-stone-500">12. Federal Ministry of Health, Nigeria. Directive on codeine-containing cough syrups, 2018; Standard Treatment Guidelines for Nigeria; national IMCI and ICCM guidance.</p>
      <p class="text-[10px] leading-snug text-stone-500">13. WHO. Guidelines on the management of tuberculosis in children and adults; Nigeria National Tuberculosis and Leprosy Control Programme guidance.</p>
      <p class="text-[10px] leading-snug text-stone-500">14. Global Initiative for Asthma (GINA). Global strategy for asthma management and prevention (acute exacerbation dosing).</p>
    </div>
  </details>
  
  </body>
  </html>
      `
  },


  {
    id: 'procedure-central-venous-catheter-insertion',
    title: 'Central Venous Catheter Insertion',
    category: 'Procedures',
    subCategory: 'Critical Care',
    content: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Central Venous Catheter Insertion</title>
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
    <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">PROCEDURES &middot; CRITICAL CARE</span>
    <h1 class="font-brand text-3xl font-bold mb-3 text-white">Central Venous Catheter Insertion</h1>
    <p class="text-sm text-indigo-200">A patient in septic shock needs a vasopressor and has no usable peripheral vein. A woman with eclampsia and a failing circulation, a child needing hypertonic fluids, an adult with acute kidney injury who needs dialysis tonight: all need a central line. Central venous catheterization is uncommon in many Nigerian hospitals, done at the bedside by a few trained doctors, and a poorly done line can cause pneumothorax, a haematoma that closes the airway, a lost guidewire, or a bloodstream infection that kills. This guide covers when to place a line and which site, preparation and the insertion bundle, ultrasound and landmark technique, Seldinger steps, confirming venous placement before you dilate, tip position, dressing, maintenance and removal, and complications.</p>
  </div>
</div>

<nav aria-label="Table of contents" class="mb-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
  <p class="font-brand text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">On this page</p>
  <ul class="space-y-0.5 sans" style="list-style:none;padding-left:0;margin:0;">
    <li><a href="#why-this-procedure-matters-in-nigerian-practice" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">1</span><span>Why This Procedure Matters in Nigerian Practice</span></a></li>
    <li><a href="#indications-and-choosing-the-site" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">2</span><span>Indications and Choosing the Site</span></a></li>
    <li><a href="#stop-signs-and-contraindications" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">3</span><span>Stop Signs and Contraindications</span></a></li>
    <li><a href="#before-you-start-the-insertion-bundle" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">4</span><span>Before You Start: The Insertion Bundle</span></a></li>
    <li><a href="#equipment" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">5</span><span>Equipment</span></a></li>
    <li><a href="#technique-ultrasound-guided-right-internal-jugular-seldinger" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">6</span><span>Technique: Ultrasound-Guided Right Internal Jugular (Seldinger)</span></a></li>
    <li><a href="#confirming-venous-placement-before-you-dilate" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">7</span><span>Confirming Venous Placement Before You Dilate</span></a></li>
    <li><a href="#tip-position-x-ray-and-dressing" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">8</span><span>Tip Position, X-ray and Dressing</span></a></li>
    <li><a href="#technique-landmark-ij-subclavian-and-femoral" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">9</span><span>Technique: Landmark IJ, Subclavian and Femoral</span></a></li>
    <li><a href="#haemodialysis-children-and-special-patients" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">10</span><span>Haemodialysis, Children and Special Patients</span></a></li>
    <li><a href="#care-of-the-line-and-removal" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">11</span><span>Care of the Line and Removal</span></a></li>
    <li><a href="#complications-and-when-to-escalate" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">12</span><span>Complications and When to Escalate</span></a></li>
    <li><a href="#training-safety-and-quality-in-our-units" class="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] shrink-0 sans">13</span><span>Training, Safety and Quality in Our Units</span></a></li>
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
  <li><strong>It is uncommon, so skills are thin.</strong> A Nigerian report on initial experience with central venous line insertion in a tertiary hospital states that insertion of a central venous catheter is an uncommon procedure in most Nigerian hospitals. In that series, 77 lines were placed (73 non-tunnelled, 4 tunnelled), mostly at the bedside under local anaesthesia. The success rate was 97 per cent, the overall complication rate 17 per cent and there was no mortality, which supports the view that it can be done safely by any adequately trained doctor. Catheter sizes were 5 Fr for children and 7 Fr for adults for intravenous therapy, and 12 to 14 Fr silicone or polyurethane catheters for haemodialysis.</li>
  <li><strong>Infection is a real risk.</strong> In a prospective study of 68 patients in a south-eastern Nigerian ICU, 9 per cent developed a central-line bloodstream infection and 48 per cent had catheter colonisation. Among patients whose line stayed longer than 5 days, 23 per cent had a bloodstream infection, and a duration over 5 days was a significant risk factor. The authors recommended a catheter care bundle: hand hygiene, chlorhexidine skin preparation, full barrier precautions and removal of unnecessary lines.</li>
  <li><strong>Dialysis catheters.</strong> Acute kidney injury from malaria, sepsis, obstetric haemorrhage and nephrotoxins makes temporary dialysis catheters one of the commonest uses of central access. In a Lagos dialysis unit, 69 ultrasound-guided non-tunnelled catheters had a mean patency of 36 days, thrombosis occluded 58 per cent and 19 per cent became infected.</li>
  <li><strong>Why you should care about the details.</strong> Maximal barrier precautions, chlorhexidine-alcohol skin preparation, ultrasound guidance and a checklist are the interventions with the best evidence, and they cost little. A line placed in a hurry on a ward, without a checklist, is where harm happens.</li>
  <li><strong>Know when not to.</strong> Many lines are placed for convenience. Ask each day whether the patient still needs it.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="indications-and-choosing-the-site" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
  Indications and Choosing the Site
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Reasons for a central line</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Vasopressors and inotropes, and irritant or caustic drugs (concentrated potassium, hypertonic saline, calcium, some chemotherapy, parenteral nutrition).</li>
  <li>No peripheral access, or a patient who needs many infusions at once.</li>
  <li>Central venous pressure monitoring, and access for large-volume resuscitation through large-bore catheters.</li>
  <li>Haemodialysis or plasmapheresis (a wide-bore catheter).</li>
  <li>Transvenous pacing, or a route for a long-term therapy that will use a tunnelled catheter.</li>
</ul>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Which site</strong>
<div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
<thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
<th class="py-2 pr-3 font-semibold">Site</th><th class="py-2 pr-3 font-semibold">Advantages</th><th class="py-2 pr-3 font-semibold">Drawbacks</th><th class="py-2 pr-3 font-semibold">Notes</th>
</tr></thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<tr class="align-top"><td class="py-2 pr-3">Right internal jugular (IJ)</td><td class="py-2 pr-3">Straight route to the superior vena cava, so malposition is less likely. A bleeding artery is compressible. Lower risk of pneumothorax than subclavian. Ultrasound makes it easy.</td><td class="py-2 pr-3">Higher infection risk than subclavian in some studies. Dressing is harder in a mobile neck. Unsuitable with a cervical collar.</td><td class="py-2 pr-3">First choice for most adults when you have ultrasound. IJ catheters have a lower infection rate than femoral.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Subclavian</td><td class="py-2 pr-3">Lower infection and thrombosis risk in the ICU, and a stable site for the dressing.</td><td class="py-2 pr-3">More pneumothorax and haemothorax. Not compressible, so avoid in coagulopathy. Contraindicated with a fractured clavicle or ribs, or an infected or thrombosed vein.</td><td class="py-2 pr-3">The IDSA/SHEA 2022 guidance prefers the subclavian site in ICU patients to reduce infection when operator skill allows. Do not use for haemodialysis (risk of stenosis).</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Femoral</td><td class="py-2 pr-3">Fast, away from the chest and airway, and good in cardiac arrest or severe shock.</td><td class="py-2 pr-3">The highest risk of infection and thrombosis. Avoid in planned adult insertions, especially in obese patients.</td><td class="py-2 pr-3">Use when you need quick access or the neck and chest are not available. Replace within 48 hours if you can. Not with a pelvic binder.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Left IJ and left subclavian</td><td class="py-2 pr-3">Usable if the right side is not.</td><td class="py-2 pr-3">Longer, more curved route. Higher risk of malposition and of injuring the thoracic duct.</td><td class="py-2 pr-3">Insert deeper than on the right.</td></tr>
</tbody></table></div>
</div>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
<p class="font-brand text-sm font-semibold">Guideline Watch: which site first?</p>
<p class="text-sm">The 2022 IDSA/SHEA guidance gives a strong recommendation for ultrasound guidance and states that, in ICU patients, the subclavian vein is preferred to reduce infectious complications. APSIC 2024 and many UK and Asian guidelines recommend ultrasound-guided IJ cannulation, and advise avoiding the femoral vein in planned adult insertions. For haemodialysis, they place the catheter in a jugular or femoral vein, not a subclavian vein, to avoid venous stenosis. In practice, the best site is the one that the operator can do safely with the equipment available: IJ with ultrasound for most, subclavian by an experienced operator, femoral in emergencies.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="stop-signs-and-contraindications" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
  Stop Signs and Contraindications
</h2>
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
<p class="font-brand text-sm font-semibold mb-3">Pause and Think If</p>
<ul class="space-y-2">
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Infection or burn at the site, or a thrombosed vein.</strong> Choose another site.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Coagulopathy or very low platelets:</strong> use a compressible site, the IJ with ultrasound, and avoid subclavian. Correct if time allows. Do not delay a life-saving line.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Cervical collar or neck injury:</strong> a soft contraindication to the IJ. <strong>Pelvic binder:</strong> a contraindication to the femoral vein. <strong>Fractured clavicle or ribs:</strong> avoid the subclavian vein.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Pneumothorax, severe lung disease or a ventilated patient on high pressures:</strong> think hard about a subclavian approach. A pneumothorax in these patients is poorly tolerated.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Superior vena cava obstruction</strong> or a mass in the neck. Choose a femoral route.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Patient on anticoagulants:</strong> use ultrasound, a compressible site and a small needle, and ask for help.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>A very agitated or uncooperative patient:</strong> sedate safely or have a second person hold the patient. A moving patient is how wires get lost.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Inexperienced operator working alone:</strong> ask for supervision. Do not try more than three times: after three attempts at a site, hand over to someone else.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>No sterile kit, no full barriers:</strong> do not start a non-emergency line.</span></li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="before-you-start-the-insertion-bundle" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
  Before You Start: The Insertion Bundle
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ol class="list-decimal pl-5 space-y-1.5 text-sm">
  <li><strong>Check the indication and the site</strong> with a senior. Decide which lumen number you need: use the catheter with the fewest lumens necessary, because infection risk rises with the number of access points.</li>
  <li><strong>Consent.</strong> Explain the procedure, the risks (pneumothorax, bleeding, infection) and why it is needed. In an emergency, treat and explain later.</li>
  <li><strong>Check clotting and platelets</strong> if there is a bleeding risk. In a resource-limited setting use a bedside clotting test. Ask about anticoagulants.</li>
  <li><strong>Perform hand hygiene.</strong> An alcohol rub or antiseptic soap and water before the procedure.</li>
  <li><strong>Use maximal sterile barrier precautions:</strong> cap, mask, sterile gown, sterile gloves and a full-body sterile drape over the patient. Barrier precautions are strongly linked to lower infection rates, though compliance in studies has been poor.</li>
  <li><strong>Prepare the skin</strong> with chlorhexidine at more than 0.5 per cent in alcohol, and let it dry completely. Chlorhexidine-alcohol beat povidone-iodine in trials. If chlorhexidine is not available, use povidone-iodine and allow it to dry.</li>
  <li><strong>Use an all-in-one kit or cart</strong> so that everything is at hand. A checklist read aloud by a nurse or a second doctor, who is empowered to stop the procedure if a step is missed, reduces infection.</li>
  <li><strong>Position</strong> the patient flat or head-down by 10 to 20 degrees (Trendelenburg) for neck and chest lines, to distend the vein and prevent air embolism. Turn the head 30 to 45 degrees away from the side of the insertion for an IJ line.</li>
  <li><strong>Monitoring:</strong> ECG, oxygen saturation, and blood pressure. Keep resuscitation equipment at hand.</li>
  <li><strong>Pre-scan with ultrasound</strong> if you have it. Check the vein is patent and compressible, and see where the artery lies. Mark the site.</li>
  <li><strong>Time-out.</strong> Confirm patient, site, laterality, consent, allergies, kit and who will watch the monitor.</li>
</ol>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="equipment" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
  Equipment
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
<thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
<th class="py-2 pr-3 font-semibold">Item</th><th class="py-2 pr-3 font-semibold">Specification</th><th class="py-2 pr-3 font-semibold">If it is not available</th>
</tr></thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<tr class="align-top"><td class="py-2 pr-3">Central line kit</td><td class="py-2 pr-3">Catheter (double or triple lumen for adults, 7 Fr is typical; 5 Fr in children), introducer needle, J-tipped guidewire, dilator, scalpel, syringes, suture, dressing.</td><td class="py-2 pr-3">Do not assemble a non-sterile improvised kit for a planned line.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Barrier equipment</td><td class="py-2 pr-3">Cap, mask, sterile gown and gloves, a full-body drape with a window.</td><td class="py-2 pr-3">Never skip the full drape.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Skin antiseptic</td><td class="py-2 pr-3">Chlorhexidine more than 0.5 per cent in alcohol.</td><td class="py-2 pr-3">Povidone-iodine, allowed to dry.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Ultrasound</td><td class="py-2 pr-3">High-frequency linear probe, sterile gel, sterile probe cover.</td><td class="py-2 pr-3">Landmark technique, performed by an experienced operator.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Local anaesthetic</td><td class="py-2 pr-3">1% lidocaine, 10 mL syringe, 25 G needle.</td><td class="py-2 pr-3">Check the concentration of the vial.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Flush</td><td class="py-2 pr-3">Normal saline in syringes for each lumen.</td><td class="py-2 pr-3">Do not use water.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Pressure check</td><td class="py-2 pr-3">A transducer, or a sterile extension line for manometry.</td><td class="py-2 pr-3">A blood gas of the aspirated blood, or ultrasound view of the wire in the vein.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Dressing and securing</td><td class="py-2 pr-3">Sutures or a sutureless securement device, and a chlorhexidine-containing transparent dressing (sterile gauze if the site is bleeding).</td><td class="py-2 pr-3">A sterile transparent dressing.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Monitoring and rescue</td><td class="py-2 pr-3">ECG monitor, pulse oximeter, suction, oxygen, a chest drain set.</td><td class="py-2 pr-3">Know where the nearest chest drain kit is before you start.</td></tr>
</tbody></table></div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="technique-ultrasound-guided-right-internal-jugular-seldinger" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
  Technique: Ultrasound-Guided Right Internal Jugular (Seldinger)
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ol class="list-decimal pl-5 space-y-1.5 text-sm">
  <li><strong>Prepare</strong> as in Section 4. Place the ultrasound machine on the side opposite the insertion site, so you can see the screen and the neck at once. Put the probe in a sterile cover with sterile gel.</li>
  <li><strong>Scan.</strong> Place the probe on the neck. The IJ vein lies lateral and superficial to the carotid artery. The vein is oval and compressible with light pressure, and the artery is round, thick-walled and pulsatile. Centre the vein on the screen.</li>
  <li><strong>Anaesthetise</strong> the skin and the tissue along the planned track with lidocaine.</li>
  <li><strong>Puncture under direct vision.</strong> Hold the probe in the non-dominant hand and the needle in the dominant hand. Advance the introducer needle with a syringe attached, aspirating gently, and watch the needle tip enter the vein on the screen. Use a short-axis (out-of-plane) or long-axis (in-plane) view as you were taught.</li>
  <li><strong>Confirm blood flow.</strong> Dark, non-pulsatile blood should flow easily. Remove the syringe and cap the hub with a thumb to avoid air embolism.</li>
  <li><strong>Pass the guidewire.</strong> Thread the J-tipped guidewire through the needle, with the curve toward the heart, to a depth of 15 to 20 cm (not more than 15 cm if you have ECG monitoring, to avoid arrhythmia). Never force it. If you meet resistance, remove the wire and confirm the needle is still in the vein. <strong>Never let go of the wire.</strong></li>
  <li><strong>Check the wire in the vein</strong> on ultrasound in two planes, before dilating.</li>
  <li><strong>Remove the needle</strong> over the wire, holding the wire at the skin entry site.</li>
  <li><strong>Confirm venous placement before you dilate</strong> (Section 7).</li>
  <li><strong>Nick the skin</strong> with a No. 11 blade along the edge of the wire, away from the wire itself, then pass the dilator over the wire about 2 to 3 cm, with a gentle twist. Do not push the dilator in to the hilt. Remove it.</li>
  <li><strong>Insert the catheter</strong> over the wire through the distal lumen until the wire emerges from the hub, grasp the wire there, and then advance the catheter to the planned depth. Right IJ is usually about 15 to 16 cm at the skin. Left IJ is about 19 to 20 cm.</li>
  <li><strong>Remove the guidewire</strong> completely, checking it is intact, and cover the hub as you do.</li>
  <li><strong>Aspirate and flush each lumen,</strong> and cap them. Check each lumen draws back blood easily.</li>
  <li><strong>Secure</strong> with sutures at the hub or a sutureless device, apply a chlorhexidine-containing transparent dressing, and mark the depth.</li>
  <li><strong>Order a chest X-ray</strong> as set out in Section 8.</li>
</ol>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="confirming-venous-placement-before-you-dilate" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
  Confirming Venous Placement Before You Dilate
</h2>
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
<p class="font-brand text-sm font-semibold mb-3">The Most Dangerous Mistake: Dilating an Artery</p>
<ul class="space-y-2">
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Look at the blood.</strong> Dark, non-pulsatile blood suggests a vein, but colour and pulsation are unreliable in hypotension or hypoxia.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Ultrasound:</strong> see the needle and then the wire inside the vein in both planes, away from the artery.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Pressure manometry:</strong> thread a short catheter over the wire, remove the wire, attach sterile extension tubing, let it fill about two thirds with blood, and hold it vertically. A venous column settles at about 3 to 10 cm of water and rises and falls with respiration. An arterial column rises high and pulsates.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Blood gas:</strong> send a sample if in doubt. Arterial blood has a high oxygen level.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>If you suspect arterial placement, do not dilate.</strong> Remove the needle and apply firm pressure for a long time. A dilated carotid or subclavian artery needs urgent surgical or vascular help.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Never force the wire,</strong> and stop if there is resistance to the dilator.</span></li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="tip-position-x-ray-and-dressing" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
  Tip Position, X-ray and Dressing
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li><strong>Ideal tip:</strong> in the lower third of the superior vena cava, at or just above the cavoatrial junction, seen on X-ray at about the level of T4 to T6, outside the heart. A tip inside the right atrium can cause arrhythmia, perforation and tamponade.</li>
  <li><strong>Usual lengths at the skin</strong> (adult): right IJ about 15 to 16 cm, left IJ about 19 to 20 cm, right subclavian about 18 cm, left subclavian about 21 cm. Adjust for the size of the patient.</li>
  <li><strong>Chest X-ray</strong> after every subclavian line and any difficult or multi-pass insertion, to confirm the tip position and exclude pneumothorax or haemothorax. Some units omit the X-ray after an uncomplicated ultrasound-guided IJ line when the tip depth is appropriate and the patient is well. Follow your hospital policy.</li>
  <li><strong>Do not use the line</strong> for vasopressors or irritant drugs until you are sure of the position, unless the patient is dying.</li>
  <li><strong>Dressing:</strong> a sterile transparent semipermeable dressing, or sterile gauze if the site is bleeding. Chlorhexidine-containing dressings are recommended for patients over 2 months old. Use a sutureless securement device if you have one.</li>
  <li><strong>Labelling:</strong> write the date of insertion, the site, the depth and your name on the dressing and in the notes.</li>
</ul>
</div>
<div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6 text-amber-900 dark:text-amber-300 space-y-2">
<p class="font-brand text-sm font-semibold">Guideline Watch: how deep, and is an X-ray always needed?</p>
<p class="text-sm">Insertion depths vary slightly between sources (for example 15 cm versus 16 cm for a right IJ). Use them as a guide, and confirm by X-ray or ultrasound. Opinions differ on whether every ultrasound-guided IJ line needs a chest X-ray; recent practice allows omitting it when there was no difficulty and there is no pneumothorax on bedside ultrasound. Where ultrasound is not available, always do the X-ray.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="technique-landmark-ij-subclavian-and-femoral" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
  Technique: Landmark IJ, Subclavian and Femoral
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Landmark IJ (when you have no ultrasound)</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Same preparation, position and barrier precautions. Turn the head 15 to 30 degrees away.</li>
  <li>Identify the triangle formed by the two heads of the sternocleidomastoid and the clavicle. Palpate the carotid pulse and keep it medial to your needle.</li>
  <li><strong>Central approach:</strong> at the apex of the triangle, 30 to 45 degrees to the skin, aiming at the ipsilateral nipple. <strong>Posterior approach:</strong> enter at the lateral (posterior) border of the sternocleidomastoid, halfway between the mastoid and the clavicle, at about 45 degrees, aiming for the suprasternal notch.</li>
  <li>Use a finder needle (22 G) first if you wish. Aspirate as you advance. When you see dark blood, proceed with the Seldinger steps in Section 6.</li>
  <li>Landmark insertion has more arterial punctures and failed attempts than ultrasound. Limit attempts to three.</li>
</ul>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Infraclavicular subclavian</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Head neutral, Trendelenburg, a roll between the shoulder blades is optional. Enter 1 to 2 cm below the midpoint of the clavicle, and aim the needle toward the suprasternal notch, passing just under the clavicle and keeping the needle as flat to the chest wall as you can (about 10 to 15 degrees).</li>
  <li>Keep the bevel facing down and the needle in the chest wall plane, to avoid the lung. Aspirate as you advance.</li>
  <li>After blood return, rotate the bevel toward the heart and feed the guidewire. Complete the Seldinger steps.</li>
  <li>Contraindications: a fractured clavicle or ribs, an infected or thrombosed vein, coagulopathy.</li>
  <li>The subclavian vein cannot be compressed. Only experienced operators should use it, with an X-ray afterward.</li>
</ul>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Femoral (emergency or when neck and chest are not available)</strong>
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Slightly abduct and externally rotate the leg. Feel the femoral artery pulse, and place the needle about 1 cm medial to the pulse and 2 to 3 cm below the inguinal ligament, at 30 to 45 degrees. Keep your needle below the ligament.</li>
  <li>During cardiac arrest, the pulse you feel may be venous. Use ultrasound if you can.</li>
  <li>Complete the Seldinger steps. The catheter is long enough to reach the inferior vena cava. Replace with an IJ or subclavian line within 48 hours if the patient is stable, because infection and thrombosis rates are higher.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="haemodialysis-children-and-special-patients" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
  Haemodialysis, Children and Special Patients
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<div class="overflow-x-auto"><table class="w-full text-xs sans border-collapse">
<thead><tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
<th class="py-2 pr-3 font-semibold">Situation</th><th class="py-2 pr-3 font-semibold">What to do</th>
</tr></thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<tr class="align-top"><td class="py-2 pr-3">Temporary haemodialysis catheter</td><td class="py-2 pr-3">Wide-bore (12 to 14 Fr) double-lumen catheter. Right IJ or femoral, not subclavian, because of venous stenosis. Use ultrasound. Thrombosis and infection are the limiting problems in Nigerian units. Use a catheter lock as your dialysis unit advises.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Tunnelled catheter (Hickman type)</td><td class="py-2 pr-3">Used for long-term access in chemotherapy, nutrition and dialysis. Same insertion technique, with tunnelling of a cuffed catheter. Usually done by a surgeon or radiologist.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Children</td><td class="py-2 pr-3">Use ultrasound. Choose the right size (5 Fr in children in the Nigerian series) and a shorter depth. Femoral lines are common in small children. Ask for senior help. See the guides on difficult IV access and umbilical catheters for other routes.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Hypovolaemia and shock</td><td class="py-2 pr-3">Collapsed neck veins are hard to find. Lie the patient flat or head-down, give fluid through a peripheral line while you prepare, and use ultrasound. Do not delay vasopressors: they can be given peripherally for a short time in some protocols while you place the line.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Coagulopathy and thrombocytopenia</td><td class="py-2 pr-3">Use a compressible site (IJ or femoral), ultrasound, a small needle, and no more than three attempts.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Sickle cell disease</td><td class="py-2 pr-3">Central lines increase thrombosis and infection. Use only when peripheral access has failed and the need is real. See the guide on difficult IV access.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Obesity</td><td class="py-2 pr-3">Ultrasound, a longer needle, and the IJ or subclavian rather than the femoral site.</td></tr>
<tr class="align-top"><td class="py-2 pr-3">Cardiac arrest</td><td class="py-2 pr-3">The femoral and IJ routes are common. A drug can be given through a peripheral or intraosseous line while the central line is set up.</td></tr>
</tbody></table></div>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="care-of-the-line-and-removal" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
  Care of the Line and Removal
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li><strong>Review every day:</strong> does the patient still need the line? Remove it as soon as it is not essential. Do not replace catheters routinely.</li>
  <li><strong>Hub care:</strong> scrub the hub with alcoholic chlorhexidine or 70 per cent alcohol before each access. Use sterile devices only. Keep caps on.</li>
  <li><strong>Dressing:</strong> change a transparent dressing every 7 days and a gauze dressing every 2 days, or if wet, loose or soiled. Inspect the site daily for redness, swelling, pus or tenderness.</li>
  <li><strong>Bathing:</strong> daily chlorhexidine bathing in ICU patients over 2 months old is part of the IDSA/SHEA 2022 essential practices.</li>
  <li><strong>Fever or sepsis in a patient with a line:</strong> take blood cultures from the line and from a peripheral vein, examine the site, and consider removal. Many Nigerian lines that stay beyond 5 days become colonised.</li>
  <li><strong>Removal:</strong> lay the patient flat or head-down, ask them to breathe out or hum as you pull the catheter, apply firm pressure for at least 5 minutes, and cover with an airtight dressing for 24 hours. Remove the sutures first. Check that the whole catheter is out.</li>
  <li><strong>Lost guidewire or catheter fragment:</strong> keep the patient still and get imaging and specialist help.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="complications-and-when-to-escalate" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
  Complications and When to Escalate
</h2>
<div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6 text-rose-900 dark:text-rose-200">
<p class="font-brand text-sm font-semibold mb-3">Complications and Warning Signs</p>
<ul class="space-y-2">
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Pneumothorax:</strong> sudden breathlessness, chest pain, fall in oxygen saturation, reduced breath sounds, especially after subclavian lines or in ventilated patients. Chest X-ray or ultrasound, and a chest drain. A tension pneumothorax needs decompression at once.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Haemothorax or haemorrhage:</strong> after subclavian or arterial injury. Resuscitate, and call for surgical help.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Arterial puncture:</strong> bright pulsatile blood. Remove the needle and press for 10 minutes or more. If the dilator or catheter entered the artery, leave it in place and call vascular or surgical help.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Neck haematoma</strong> with airway compression after IJ puncture of the carotid: a surgical emergency.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Air embolism:</strong> sudden breathlessness, hypotension, a mill-wheel murmur. Lay the patient on the left side, head down, give oxygen and call for help. Prevent by keeping the head down and covering the hub.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Lost guidewire:</strong> prevented by never letting go of the wire. Retrieval needs a radiologist or a surgeon.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Arrhythmia:</strong> from a wire or catheter in the right atrium. Withdraw by a few centimetres.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Cardiac perforation and tamponade:</strong> sudden shock after a catheter tip positioned in the heart. Stop infusing, withdraw and call for help.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Catheter-related bloodstream infection:</strong> fever, rigors, hypotension. Culture and treat, and remove the line if the site is infected or sepsis is severe.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Thrombosis and occlusion:</strong> arm or neck swelling, or a catheter that will not draw back. Common in dialysis catheters.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Malposition:</strong> a tip in the right atrium, an azygos vein, the opposite IJ or the wrong side. Check the X-ray and reposition.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e11d48"/><path d="M12 7v6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="#ffffff"/></svg><span><strong>Nerve injury</strong> and thoracic duct injury (left side): rare.</span></li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="training-safety-and-quality-in-our-units" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
  Training, Safety and Quality in Our Units
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<ul class="list-disc pl-5 space-y-1.5 text-sm">
  <li>Use ultrasound where you have it. Train every operator on a simulator or a phantom, and supervise the first 20 or so insertions.</li>
  <li>Keep an insertion checklist on the kit. Empower a nurse or a second doctor to stop the procedure if barriers or skin preparation are inadequate.</li>
  <li>Stock chlorhexidine-alcohol, all-in-one kits and chlorhexidine dressings if you can. They cost much less than a central-line infection.</li>
  <li>Keep a register of every line: indication, site, operator, date of insertion, date of removal, complications and infections.</li>
  <li>Review each line daily at the ward round. A line beyond 5 days needs a justification.</li>
  <li>Learn from the Nigerian reports. The case series of 77 lines found that a high success rate was possible with bedside local anaesthesia and training, and the ICU study identified what to fix to reduce infection.</li>
</ul>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="videos-and-learning-resources" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
  Videos and Learning Resources
</h2>
<div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Core technique videos</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.nejm.org/doi/full/10.1056/NEJMvcm055053" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NEJM Videos in Clinical Medicine: Central Venous Catheterization (internal jugular)</a> &ndash; anatomy, indications, site selection, Seldinger technique and complications. May need institutional access.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.nejm.org/doi/full/10.1056/NEJMvcm074357" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NEJM Videos in Clinical Medicine: Central Venous Catheterization, Subclavian Vein</a> &ndash; landmarks and procedure, with contraindications.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.hksccm.org/2010-apr-22-ultrasound-guided-internal-jugular-vein-cannulation/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">NEJM Videos in Clinical Medicine: Ultrasound-Guided Internal Jugular Vein Cannulation</a> &ndash; listing for the NEJM video on ultrasound-guided IJ cannulation.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.merckmanuals.com/professional/critical-care-medicine/approach-to-the-critically-ill-patient/vascular-access" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Merck Manual: Vascular access, with videos for IJ, subclavian and femoral</a> &ndash; percutaneous and ultrasound-guided cannulation videos for each site.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=Xa022O--YbU" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Ultrasound-guided IJ central line: needle and guidewire</a> &ndash; ultrasound-guided needle access and passage of the guidewire.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=4-uyTUzPSJ8" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Internal jugular central venous catheter placement, part 1</a> &ndash; video linked from the Family Practice Notebook page on ultrasound-guided IJ catheterization.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=UrHwKQY8qEQ" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Internal jugular central venous catheter placement, part 2</a> &ndash; the second part: dilator, catheter and securing.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=i6NjbpLUwak" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Central line insertion: Gloucestershire Hospitals NHS Foundation Trust</a> &ndash; a concise step-by-step guide to ultrasound-guided CVC insertion.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=BrZBdZqrpWc" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Central venous catheter insertion, IJ, ultrasound-guided and sterile</a> &ndash; full sterile technique with ultrasound.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=O75D99DxWmM" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Central venous catheter insertion (internal jugular vein), ultrasound-guided manual</a> &ndash; a step-by-step IJ demonstration.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.youtube.com/watch?v=vRIIaMZL9XI" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Ultrasound guidance for central venous access, part 1</a> &ndash; principles of ultrasound for IJ cannulation.</div>
</div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Written guides</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://mobile.fpnotebook.com/ER/Procedure/UltrsndGdIntrnlJglrVnCthtrztn.htm" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Family Practice Notebook: Ultrasound-guided internal jugular catheterization</a> &ndash; stepwise technique with video links.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.statpearls.com/kb/viewarticle/19125" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">StatPearls: Central line</a> &ndash; sites, equipment, Seldinger steps and complications.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://openanesthesia.org/keywords/central_venous_placement_technique" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">OpenAnesthesia: Central venous placement technique</a> &ndash; modified Seldinger technique and complication rates.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://txwes.pressbooks.pub/scope/chapter/chapter-3-ultrasound-guided-vascular-access/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">SCOPE textbook: Ultrasound-guided vascular access</a> &ndash; site notes, manometry, depth targets and a 3-attempt rule.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://kiwix.lema.org/wikem_en_all_maxi_2021-02/A/Central_line%3A_internal_jugular" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">WikEM: Central line, internal jugular (mirror)</a> &ndash; ultrasound and landmark technique with complications.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128249; <a href="https://www.jove.com/v/10237" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">JoVE: Central venous catheterization, internal jugular (video article)</a> &ndash; peer-reviewed video of IJ placement. May need a subscription.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4729426/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Peripheral-style IJ catheter using the Seldinger technique (emergency access)</a> &ndash; a case report on emergency IJ access with a standard IV catheter.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9526766/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Trial: ultrasound-guided IJ versus supraclavicular subclavian catheterization</a> &ndash; comparison of two ultrasound approaches in the ICU.</div>
</div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Infection prevention guidelines</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://guidelinecentral.com/guideline/2117032" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">IDSA/SHEA 2022 update: Strategies to prevent CLABSI in acute-care hospitals</a> &ndash; essential practices at insertion and maintenance.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://guidelinecentral.com/guideline/2117032/pocket-guide/2117035" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">IDSA/SHEA 2022 pocket guide</a> &ndash; practical recommendations: site, kit, barrier, antiseptic, dressing.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.myamericannurse.com/preventing-central-line-associated/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">CDC 2011 guideline summary: Preventing central line-associated bloodstream infections</a> &ndash; the main recommendations in a short list.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.cambridge.org/core/product/7A6645EEF64FAC3D50C60A3159575A4B/core-reader" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">APSIC 2024 revised CLABSI prevention guideline</a> &ndash; site selection, ultrasound and insertion bundle.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://www.mdedge.com/jcomjournal/article/166011/critical-care/prevention-central-line-associated-bloodstream-infections/page/0/1" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Prevention of CLABSI: review (J Clin Outcomes Manag)</a> &ndash; insertion bundle, checklists and kits.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://blogs.the-hospitalist.org/content/prevention-central-line-associated-bloodstream-infections" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Prevention of CLABSI (The Hospitalist)</a> &ndash; the bundle, with data on barrier compliance.</div>
</div>
<strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Nigerian context</strong>
<div class="space-y-2">
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6737802" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Initial experience with central venous line insertion in a Nigerian tertiary hospital</a> &ndash; bedside insertion, sizes, success rate and complications.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://doaj.org/article/80b0a57433654270ac2589673630d464" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Incidence of central venous catheter-associated infections in a Nigerian ICU</a> &ndash; infection incidence, colonisation and risk of lines beyond 5 days.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://doaj.org/article/7d3ef92549354f21bb2067d1a29255b4" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Temporary haemodialysis catheters in a Nigerian dialysis unit</a> &ndash; patency, thrombosis and infection with ultrasound-guided insertion.</div>
<div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sans">&#128214; <a href="https://core.ac.uk/download/478392564.pdf" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">Haemodialysis catheters in a Nigerian renal unit</a> &ndash; tunnelled and non-tunnelled catheters and complications, with landmark technique and ultrasound for difficulty.</div>
</div>
<p class="text-sm">Video quality varies. Start with the NEJM videos, the Gloucestershire video and the Merck page, and use the others to see different operators and equipment. None replaces supervised training.</p>
</div>
<h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3" id="key-clinical-takeaways" style="scroll-margin-top:1.5rem;">
  <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">15</span>
  Key Clinical Takeaways
</h2>
<div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6 text-indigo-950 dark:text-indigo-100">
<p class="font-brand text-sm font-semibold mb-3">Key Clinical Takeaways</p>
<ul class="space-y-2">
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask whether you need a central line, and for how long. Use the fewest lumens, and review daily.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Choose the site: right IJ with ultrasound for most adults, subclavian in experienced hands (lower infection in the ICU), femoral in emergencies only. Avoid the subclavian site for dialysis catheters and in coagulopathy.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Bundle: hand hygiene, full barrier precautions (cap, mask, sterile gown, gloves, full drape), chlorhexidine-alcohol skin preparation dried fully, an all-in-one kit, a checklist, and ultrasound.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Seldinger: needle, wire, nick, dilate, catheter. Never let go of the wire. Never force it.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Confirm the wire and the needle are in a vein before you dilate: ultrasound in two planes, manometry (venous column about 3 to 10 cm of water) or a blood gas.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>No more than three attempts at one site. Then hand over.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Right IJ about 15 to 16 cm at the skin, left IJ about 19 to 20 cm. Tip at the cavoatrial junction (T4 to T6 on X-ray). X-ray after every subclavian or difficult line.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Air embolism: head down, cover the hub, breathe out at removal. Lost wire: never let go.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Nigerian lines: success and complication rates are acceptable in trained hands, but infection climbs after 5 days and dialysis catheters clot and infect often.</span></li>
  <li class="flex gap-2 text-sm"><svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4338ca"/><path d="M8 12.5l3 3 5-6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Remove the line as soon as it is not needed. Daily review is the cheapest infection control you have.</span></li>
</ul>
</div>
<details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 mb-6">
  <summary class="flex items-center justify-between cursor-pointer p-4 sm:p-5 list-none">
    <span class="font-brand text-sm font-semibold text-stone-700 dark:text-stone-300">References</span>
    <svg class="w-4 h-4 text-stone-500 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
  </summary>
  <div class="px-4 sm:px-5 pb-4 sm:pb-5 space-y-1.5">
    <p class="text-[10px] leading-snug text-stone-500">1. Buetti N, Marschall J, Drees M, et al. Strategies to prevent central line-associated bloodstream infections in acute-care hospitals: 2022 update. Infect Control Hosp Epidemiol 2022;43:553-569 (IDSA/SHEA).</p>
    <p class="text-[10px] leading-snug text-stone-500">2. O&rsquo;Grady NP, Alexander M, Burns LA, et al. Guidelines for the prevention of intravascular catheter-related infections. Am J Infect Control 2011;39(4 Suppl 1):S1-34 (CDC/HICPAC).</p>
    <p class="text-[10px] leading-snug text-stone-500">3. Asia Pacific Society of Infection Control. Revised guidelines for prevention of central line associated bloodstream infections (CLABSI), 2024.</p>
    <p class="text-[10px] leading-snug text-stone-500">4. National Institute for Health and Care Excellence. Technology Appraisal 49: Guidance on the use of ultrasound locating devices for placing central venous catheters (2002).</p>
    <p class="text-[10px] leading-snug text-stone-500">5. New England Journal of Medicine, Videos in Clinical Medicine. Central venous catheterization. N Engl J Med 2007;356:e21; Central venous catheterization: subclavian vein. N Engl J Med 2007;357:e26; Ultrasound-guided internal jugular vein cannulation. N Engl J Med 2010;362:e57.</p>
    <p class="text-[10px] leading-snug text-stone-500">6. Initial experience with central venous line insertion in a tertiary health institution in Nigeria. Niger Med J 2019;60:138-143.</p>
    <p class="text-[10px] leading-snug text-stone-500">7. Evaluation of the incidence of central venous catheter-associated infections in patients admitted in the intensive care unit of a tertiary hospital in Nigeria. Int J Med Health Dev 2023;28:43-49.</p>
    <p class="text-[10px] leading-snug text-stone-500">8. A study of outcome and complications associated with temporary hemodialysis catheters in a Nigerian dialysis unit. Saudi J Kidney Dis Transpl 2016;27:569-575.</p>
    <p class="text-[10px] leading-snug text-stone-500">9. Haemodialysis catheter-related complications in a Nigerian renal centre (tunnelled and non-tunnelled internal jugular catheters).</p>
    <p class="text-[10px] leading-snug text-stone-500">10. Prevention of central line-associated bloodstream infections: a review. J Clin Outcomes Manag 2018;25(6).</p>
    <p class="text-[10px] leading-snug text-stone-500">11. StatPearls. Central line. SCOPE: Ultrasound-guided vascular access chapter. OpenAnesthesia. Central venous placement technique.</p>
    <p class="text-[10px] leading-snug text-stone-500">12. Randomised trial: ultrasound-guided internal jugular versus supraclavicular subclavian vein catheterization in critically ill patients. 2022.</p>
    <p class="text-[10px] leading-snug text-stone-500">13. Family Practice Notebook. Ultrasound-guided internal jugular vein catheterization; WikEM. Central line: internal jugular.</p>
    <p class="text-[10px] leading-snug text-stone-500">14. British Society for Haematology. Prevention and management of indwelling catheter-related thrombosis in sickle cell disease and thalassaemia: good practice paper, 2024.</p>
  </div>
</details>
</div>
</body>
</html>
    `
},


];
