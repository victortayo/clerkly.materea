import { LearningModule } from '../../types/learn';

export const HISTORY_TAKING_CONTENT: LearningModule[] = [



    {
        id: 'history-taking-pediatrics',
        title: 'History Taking in Pediatrics',
        category: 'History Taking',
        subCategory: 'General Approach',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>History Taking in Pediatrics</title>
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
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">History Taking in Pediatrics</h1>
        <p class="text-sm text-indigo-200">A paediatric history depends on someone other than the patient for most of childhood, and carries several sections an adult history doesn't need at all - the pregnancy and delivery that produced this child, how they've been fed, whether they're developing on schedule, and what's actually been injected into them so far. This guide walks through the full structure, biodata to summary, with the reasoning behind each section.</p>
      </div>
      </div>
      
      <!-- 1. Introduction -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Introduction
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">A complete paediatric encounter runs through history taking, physical examination, investigation, treatment, and follow-up. In an emergency, resuscitation of the patient always comes before other aspects of management - stabilise first, and take a focused history in parallel with or immediately after.</p>
      </div>
      
      <!-- 2. Biodata -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Biodata
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Remember the acronym <span class="font-medium text-slate-800 dark:text-slate-200">NASRATI</span>:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">N</span> - Name</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">A</span> - Age</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">S</span> - Sex</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">R</span> - Religion (of the parents)</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">A</span> - Address (of the parent, or who the patient resides with)</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">T</span> - Tribe (of parents)</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">I</span> - Informant: is the information reliable? Give reasons.</li>
      </ul>
      <p class="text-sm">A child aged 6-7 years or older can also serve as an informant alongside the caregiver - do not assume the child contributes nothing simply because a parent is present.</p>
      </div>
      
      <!-- 3. Presenting Complaint -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Presenting Complaint
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Arrange complaints in chronological order, from the first symptom to the most recent.</li>
        <li>If the child is already on admission, state how long ago and on what account - e.g. "patient was admitted eight days ago on account of five days' history of fever." Symptoms that develop while the child was already on admission should also be included.</li>
        <li>If the disease has already been diagnosed, this may be stated directly - e.g. "a known sickle cell disease patient admitted on account of...".</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Episodes vs duration:</span> some symptoms (convulsion, vomiting, passage of loose stool) are reported in terms of episodes rather than days - e.g. "five episodes of convulsion" - except when the symptom is chronic, in which case duration is used - e.g. "3 months' history of recurrent convulsion."</li>
        <li>The presenting complaint should not exceed 5 items. Where there are more than 5, less pressing complaints can be deferred to the history of presenting complaint instead.</li>
      </ul>
      </div>
      
      <!-- 4. HPC -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      History of Presenting Complaint (The 5 Cs)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Characterise</span> each symptom.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Course</span> - the progression of the symptom.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Cause</span> - ask questions to rule out differentials and identify likely cause(s).</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Complications</span> of the suspected disease process(es) obtained above.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Care</span> received so far - at home, at a referral centre, and since admission.</li>
      </ol>
      </div>
      
      <!-- 5. PMH -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Past Medical History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>History of similar illness in the past - where and how was it treated?</li>
        <li>Relevant chronic illnesses - sickle cell disease, bronchial asthma, seizure disorder (particularly if the child has presented with convulsion).</li>
        <li>History of previous hospital admission, blood transfusion, or surgery.</li>
        <li>For chronic diseases, ask about the care currently being given.</li>
      </ul>
      </div>
      
      <!-- 6. Perinatal history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Pre-Natal, Natal, and Post-Natal History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Antenatal</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Booking of pregnancy - when and where?</li>
          <li>Tetanus toxoid - how many doses received, when and where?</li>
          <li>Illnesses, especially fever and rash, in the first trimester.</li>
          <li>Drugs used during pregnancy.</li>
          <li>Radiation exposure, especially relevant in cases of congenital anomalies.</li>
          <li>Was the mother a known sickle cell disease, diabetic, or hypertensive patient prior to or during pregnancy?</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Natal</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Gestational age at delivery, duration of labour, mode and place of delivery.</li>
          <li>Crying after birth - spontaneous or induced? What measures were taken before the child achieved a vigorous cry?</li>
          <li>Birth weight.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Post-Natal</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Number of days spent in hospital after delivery. After a normal SVD, this is usually within 48 hours for a first delivery and 24 hours for a multiparous mother; following a caesarean section, usually around 7 days. If longer than this, look for reasons.</li>
        </ul>
      </div>
      </div>
      
      <!-- 7. Dietary history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Dietary History / Nutritional History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Exclusively breastfed?</span> Exclusive breastfeeding means feeding the baby only breast milk and prescribed drugs. State the duration of exclusive breastfeeding, and if the child was not exclusively breastfed, note and document why - e.g. paucity of information, or a previous bad experience.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Supplementary feeding?</span> Feeding the baby with feeds other than breast milk within the first 6 months of life.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Complementary feeding?</span> Additional feeds introduced when breast milk alone becomes insufficient, usually after 6 months.</li>
        <li>Describe how the child has been fed since birth, inquiring about the <span class="font-medium text-slate-800 dark:text-slate-200">Frequency, Adequacy, Density, and Utilisation (FADU)</span> of whatever feeds the child has been receiving. This should be detailed especially in a malnourished child.</li>
        <li>A <span class="font-medium text-slate-800 dark:text-slate-200">24-hour dietary recall</span> is necessary in some cases, such as malnutrition. This refers to what the child eats in a typical 24-hour period, not the 24 hours immediately prior to presentation.</li>
      </ul>
      </div>
      
      <!-- 8. Immunization -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Immunization History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>State which immunisation was received, and when.</li>
        <li>Document any side effects after each immunisation.</li>
        <li>If completed, state the evidence - e.g. immunisation certificate, or a BCG scar on the left upper arm.</li>
        <li>If the patient failed to complete the schedule, state the reason(s) - e.g. side effects, lack of information.</li>
      </ul>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Nigerian Routine Immunization Schedule (NPHCDA)</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Minimum target age</th>
                <th class="py-2 pr-3 font-medium">Vaccine</th>
                <th class="py-2 pr-3 font-medium">Dosage</th>
                <th class="py-2 pr-3 font-medium">Route</th>
                <th class="py-2 font-medium">Site</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">At birth</td><td class="py-2 pr-3">BCG*</td><td class="py-2 pr-3">0.05 mL</td><td class="py-2 pr-3">Intradermal</td><td class="py-2">Left upper arm</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">OPV0**</td><td class="py-2 pr-3">2 drops</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Hepatitis B0 (birth dose)***</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of right thigh</td></tr>
              <tr><td class="py-2 pr-3">6 weeks</td><td class="py-2 pr-3">Pentavalent (DPT, Hep B, Hib) 1</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of left thigh</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Pneumococcal Conjugate Vaccine 1</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of right thigh</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">OPV1</td><td class="py-2 pr-3">2 drops</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">IPV1</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of right thigh (2.5 cm apart from PCV)</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Rotavirus vaccine 1</td><td class="py-2 pr-3">5 drops</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3">10 weeks</td><td class="py-2 pr-3">Pentavalent 2</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of left thigh</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">PCV 2</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of right thigh</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">OPV2</td><td class="py-2 pr-3">2 drops</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Rotavirus vaccine 2</td><td class="py-2 pr-3">5 drops</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3">14 weeks</td><td class="py-2 pr-3">Pentavalent 3</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of left thigh</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">PCV 3</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of right thigh</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">OPV3</td><td class="py-2 pr-3">2 drops</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Rotavirus vaccine 3</td><td class="py-2 pr-3">5 drops</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">IPV2</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of right thigh (2.5 cm apart from PCV)</td></tr>
              <tr><td class="py-2 pr-3">6 months</td><td class="py-2 pr-3">Vitamin A, 1st dose</td><td class="py-2 pr-3">100,000 IU</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3">9 months</td><td class="py-2 pr-3">Measles, 1st dose (MCV1)</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Subcutaneous</td><td class="py-2">Left upper arm</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Yellow Fever</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Subcutaneous</td><td class="py-2">Right upper arm</td></tr>
              <tr><td class="py-2 pr-3">12 months</td><td class="py-2 pr-3">Meningitis vaccine</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Anterolateral aspect of left thigh</td></tr>
              <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3">Vitamin A, 2nd dose</td><td class="py-2 pr-3">200,000 IU</td><td class="py-2 pr-3">Oral</td><td class="py-2">Mouth</td></tr>
              <tr><td class="py-2 pr-3">15 months</td><td class="py-2 pr-3">Measles, 2nd dose (MCV2)</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Subcutaneous</td><td class="py-2">Left upper arm</td></tr>
              <tr><td class="py-2 pr-3">9 years</td><td class="py-2 pr-3">HPV****</td><td class="py-2 pr-3">0.5 mL</td><td class="py-2 pr-3">Intramuscular</td><td class="py-2">Deltoid muscle (left upper arm)</td></tr>
            </tbody>
          </table>
        </div>
        <ul class="text-xs text-slate-500 dark:text-slate-400 mt-2 space-y-0.5">
          <li>* BCG should be given at birth and can be given up until 11 months.</li>
          <li>** OPV0 must be given before the age of two weeks.</li>
          <li>*** Hepatitis B0 should be given at birth, or within 24 hours.</li>
        </ul>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Abbreviations:</span> Pentavalent comprises hepatitis B, diphtheria, pertussis, tetanus toxoid, and <em>Haemophilus influenzae</em> type b antigens. PCV = pneumococcal conjugate vaccine. OPV = oral polio vaccine. IPV = inactivated polio vaccine.</p>
      </div>
      </div>
      
      <!-- Guideline Watch: immunization schedule -->
      <div class="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-6">
      <h3 class="font-brand flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
        <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#d97706"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg>
        Guideline Watch - Immunization Schedule
      </h3>
      <ul class="list-disc pl-5 space-y-1 text-sm text-amber-900 dark:text-amber-300">
        <li><span class="font-medium">HPV:</span> the NPHCDA chart lists HPV at 9 years but marks it "to be introduced soon," meaning rollout status can vary by state and by the date of the version you're working from - confirm local availability rather than assuming every 9-year-old presenting to you has had access to it yet.</li>
        <li><span class="font-medium">Malaria vaccine:</span> not listed on this NPHCDA chart. Where the malaria vaccine (R21/Matrix-M) has been introduced, it is typically given alongside this schedule at 5, 6, and 7 months with a booster around 15-18 months - check local rollout status, since national introduction has been phased by state rather than simultaneous nationwide.</li>
        <li><span class="font-medium">Chickenpox and MMR:</span> not part of this free, government-funded schedule. They are available privately, and MMR/varicella more often appear in catch-up schedules for older children than as a routine infant dose. Do not present them to a family as part of the standard schedule they are entitled to for free.</li>
      </ul>
      </div>
      
      <!-- 9. Developmental History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Developmental History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Know the important components of the developmental milestones across the four domains: gross motor, fine motor, verbal/language, and social.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Age</th>
              <th class="py-2 pr-3 font-medium">Gross motor</th>
              <th class="py-2 pr-3 font-medium">Fine motor</th>
              <th class="py-2 pr-3 font-medium">Verbal</th>
              <th class="py-2 font-medium">Social</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Birth</td><td class="py-2 pr-3">Sustained flexion</td><td class="py-2 pr-3">Perceives light</td><td class="py-2 pr-3">Good cry</td><td class="py-2">Non-social smile</td></tr>
            <tr><td class="py-2 pr-3">4 weeks</td><td class="py-2 pr-3">Head lag</td><td class="py-2 pr-3">-</td><td class="py-2 pr-3">Throaty noise</td><td class="py-2">Social smile</td></tr>
            <tr><td class="py-2 pr-3">2 months</td><td class="py-2 pr-3">-</td><td class="py-2 pr-3">-</td><td class="py-2 pr-3">Mixed vowel sounds</td><td class="py-2">Prefers known face</td></tr>
            <tr><td class="py-2 pr-3">3 months</td><td class="py-2 pr-3">Good neck control</td><td class="py-2 pr-3">Starts reaching out for objects</td><td class="py-2 pr-3">Pronounces vowels with obvious pleasure/contact</td><td class="py-2">Regular pattern of eating and sleeping</td></tr>
            <tr><td class="py-2 pr-3">4 months</td><td class="py-2 pr-3">Moves head side to side</td><td class="py-2 pr-3">Puts objects in mouth</td><td class="py-2 pr-3">Same as above</td><td class="py-2">Laughs out loud</td></tr>
            <tr><td class="py-2 pr-3">5 months</td><td class="py-2 pr-3">Sits with support; turns supine to prone</td><td class="py-2 pr-3">Transfers object hand to hand</td><td class="py-2 pr-3">-</td><td class="py-2">-</td></tr>
            <tr><td class="py-2 pr-3">6 months</td><td class="py-2 pr-3">Sits without support</td><td class="py-2 pr-3">Imitates you</td><td class="py-2 pr-3">Babbles; polysyllabic vowel sounds</td><td class="py-2">Prefers mother</td></tr>
            <tr><td class="py-2 pr-3">7 months</td><td class="py-2 pr-3">Crawls</td><td class="py-2 pr-3">Raking movements</td><td class="py-2 pr-3">Makes repetitive vowel sounds</td><td class="py-2">Responds to voice tone inflections</td></tr>
            <tr><td class="py-2 pr-3">9 months</td><td class="py-2 pr-3">Stands with support</td><td class="py-2 pr-3">Pincer grasp</td><td class="py-2 pr-3">Repetitive consonant sounds (mama, baba)</td><td class="py-2">Responds to name</td></tr>
            <tr><td class="py-2 pr-3">12 months</td><td class="py-2 pr-3">Stands without support; starts walking</td><td class="py-2 pr-3">Plays with a toy; offers an object with a grasp</td><td class="py-2 pr-3">Some words besides mama/baba</td><td class="py-2">Makes postural adjustment to dressing</td></tr>
            <tr><td class="py-2 pr-3">18 months</td><td class="py-2 pr-3">Runs stiffly; walks backward</td><td class="py-2 pr-3">Builds a tower of 3 blocks; linear stroke</td><td class="py-2 pr-3">Vocabulary of 10-15 words; 2-word sentences</td><td class="py-2">Pretend play with a doll</td></tr>
            <tr><td class="py-2 pr-3">2 years</td><td class="py-2 pr-3">Runs briskly</td><td class="py-2 pr-3">Builds a tower of 6 blocks; circular stroke</td><td class="py-2 pr-3">3-word sentences</td><td class="py-2">Solitary play, later joins play</td></tr>
            <tr><td class="py-2 pr-3">3 years</td><td class="py-2 pr-3">Rides a tricycle; stands on one foot</td><td class="py-2 pr-3">Alternates steps on stairs; draws a cross; tower of 9 cubes</td><td class="py-2 pr-3">Vocabulary improves</td><td class="py-2">Interacts well with the environment</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 10. Family and social history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Family and Social History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>State the position of the patient in the family. Draw a family tree with age and sex of each child, and whether alive or dead.</li>
        <li>History of similar illness in siblings; genotype of siblings, if relevant (e.g. in sickle cell disease).</li>
        <li>Parents' age, educational status, and occupation (be specific).</li>
        <li>Income of parents - especially relevant in malnourished patients and cases of chronic disease.</li>
        <li>Haemoglobin genotype of parents, if relevant.</li>
        <li>Type of apartment - child's room, number of windows, cross ventilation? How many people sleep in the room (overcrowding)?</li>
        <li>Source of drinking water, sewage, and refuse disposal method.</li>
        <li>History of ill health in parents, and sexual lifestyle where relevant, especially regarding HIV and other STIs.</li>
        <li>Patient's performance in school - especially relevant in chronic illnesses such as sickle cell disease or seizure disorder.</li>
      </ul>
      </div>
      
      <!-- 11. Review of systems -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Review of Systems
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Ask relevant questions in each system and document symptoms for every system, except the one(s) already covered under the presenting complaint and history of presenting complaint.</p>
      </div>
      
      <!-- 12. Drug and allergy history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Drug and Allergy History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Chronic drug use.</li>
        <li>Drug reactions.</li>
        <li>Any known allergens - e.g. dust.</li>
      </ul>
      </div>
      
      <!-- 13. Summary -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
      Summary
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Should include:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Brief bio data - age, sex.</li>
        <li>The presenting complaints.</li>
        <li>Important positives and negatives.</li>
        <li>Important interventions done since admission.</li>
        <li>Any improvement since admission.</li>
      </ul>
      <p class="text-sm">Should not be more than 4 sentences.</p>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-3">Example: "Patient is (name), a (age), who presented on account of 4 days' history of low, intermittent fever with chills and rigors; 3 days' history of insidious, progressively worsening cough and fast, noisy breathing; 2 days' history of recurrent leg pain; and 1 day's history of generalised tonic-clonic seizure. Since admission, he has been on oxygen, IV medications, and has received 1 pint of blood. He is improving - state evidence, e.g. as he is no longer requiring O&#8322;, SPO&#8322; was 80% on admission and is now 98% in room air, or fever has subsided (state temperature before and now), or convulsion has stopped, last episode was..."</p>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Report episodic symptoms (convulsion, vomiting, loose stool) as episode counts, not durations - unless the symptom itself is chronic.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>The perinatal history is not optional background - antenatal illness, birth asphyxia, and neonatal course routinely explain a presenting problem years later.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Detail FADU (frequency, adequacy, density, utilisation) of feeds specifically in a malnourished child - a generic "he eats well" is not an adequate dietary history in this context.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Verify immunisation status with evidence (card, certificate, BCG scar) rather than accepting a verbal "yes, all of them."</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Keep the summary to 4 sentences or fewer - the discipline of compressing a case this tightly is itself a diagnostic-reasoning exercise, not just a formatting rule.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Primary Health Care Development Agency (NPHCDA) - Routine Immunization Schedule chart (dose, route, and site detail).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Paediatric Association of Nigeria - PAN Recommended Immunisation Schedule (updated June 2025).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Recommended Childhood Immunization Schedule; Vitamin A Supplementation Guidance.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Nelson Textbook of Pediatrics - developmental milestones reference.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
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
      
      {
        id: 'history-taking-surgery',
        title: 'History Taking in Surgery',
        category: 'History Taking',
        subCategory: 'General Approach',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>History Taking in Surgery</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">History Taking</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">History Taking in Surgery</h1>
        <p class="text-sm text-indigo-200">History gives the diagnosis in more than 70% of surgical cases, before any examination or investigation is done. This guide walks through the full structure - biodata to summary - with the reasoning and worked examples behind each section.</p>
      </div>
      </div>
      
      <!-- 1. Introduction -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Introduction
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">History is the most important part of making a diagnosis. In an emergency situation, resuscitation always precedes history-taking. History alone gives the diagnosis in more than 70% of cases.</p>
      </div>
      
      <!-- 2. Biodata -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Biodata
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Name, age, sex, occupation, religion, tribe.</li>
        <li>Right- or left-handed - relevant in patients with neurological pathology.</li>
        <li>Informant - especially when clerking an unconscious patient or a paediatric patient.</li>
        <li>State whether the history is reliable or not.</li>
      </ul>
      </div>
      
      <!-- 3. Presenting Complaints -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Presenting Complaints (PC)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Should be arranged in chronological order and preferably in the patient's own words.</li>
        <li>For patients already on admission, state the number of days on admission and date the presenting complaint to the first day they were admitted.</li>
        <li>Usually there should be 3-5 presenting complaints; if there are more, they are likely to be related (2-3 major complaints).</li>
      </ul>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-2">Example: "He/she was admitted 2 days ago on account of 5 days' history of fever and 1 day's history of abdominal pain prior to presentation."</p>
      </div>
      
      <!-- 4. HPC -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      History of Presenting Complaints (The 5 Cs)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">I. Characterise Each Symptom</strong>
        <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic">Example: "A sudden abdominal pain, colicky in nature, initially peri-umbilical but later radiates to the right lower abdominal region, where it becomes persistent; there was associated nausea and vomiting." Ask for any aggravating or relieving factors.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">II. Course: Progression of the Symptoms</strong>
        <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic">Example: "A colicky, well-localised abdominal pain may become dull and generalised, and there may be associated abdominal distension."</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">III. Cause</strong>
        <p class="text-sm">Ask questions relating to the aetiology.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">IV. Complications</strong>
        <p class="text-sm">These are the complications of the suspected disease process. How does the symptom affect the patient's quality of life?</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">V. Care Received So Far</strong>
        <p class="text-sm">Includes care given at home, at a referral centre, and since admission.</p>
      </div>
      </div>
      
      <div class="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
      <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Note:</span> details of pregnancy history are important in children - is it related to the cause/aetiology of the presenting complaint?</p>
      </div>
      
      <!-- 5. PMH -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Past Medical History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>History of similar illness in the past.</li>
        <li>Relevant chronic medical illness, e.g. diabetes, hypertension, sickle cell disease, seizure disorder, etc.</li>
        <li>History of previous hospital admission, previous surgery, and previous blood transfusion.</li>
        <li>Ask for reaction to previous blood transfusion.</li>
      </ul>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">N.B.</span> For previous surgery, ask for when it took place, the clinical presentation at that time, and whether there was any complication following the surgery.</p>
      </div>
      </div>
      
      <!-- 6. Family History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Family History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>State the position of the patient in the family.</li>
        <li>The type of family (monogamous, polygamous).</li>
        <li>History of similar illness in the family.</li>
        <li>History of consanguinity - important in congenital anomaly.</li>
      </ul>
      </div>
      
      <!-- 7. Social History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Social History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Marital status.</li>
        <li>Number of children.</li>
        <li>Occupation.</li>
        <li>Cigarette smoking (quantify).</li>
        <li>Alcohol consumption (quantify).</li>
        <li>Illicit drug use or other forms of substance abuse.</li>
      </ul>
      </div>
      
      <!-- 8. Drug History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Drug History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Routine or chronic drug use.</li>
        <li>Any drug reaction.</li>
      </ul>
      </div>
      
      <!-- 9. Review of System -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Review of System
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Relevant questions should be asked in all systems except the affected one(s), which has already been covered under the presenting complaint and history of presenting complaint.</p>
      </div>
      
      <!-- 10. Summary -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Summary
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">This includes:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Biodata (age, sex).</li>
        <li>Days on admission.</li>
        <li>Presenting complaints.</li>
        <li>Important positives and negatives.</li>
        <li>What has been done?</li>
        <li>Any improvement since admission?</li>
      </ul>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Resuscitation always precedes history-taking in an emergency.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Keep to 3-5 presenting complaints, and expect more than that number to actually be related, not separate problems.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Characterise the migration and evolution of a symptom explicitly (e.g. peri-umbilical pain localising to the right iliac fossa) - this pattern is often more diagnostic than any single descriptor.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>For any previous surgery, always ask what it was for, what the presentation was at the time, and whether there was a complication - not just that surgery happened.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>In a paediatric surgical patient, the pregnancy history is not routine background - ask specifically whether it relates to the cause of the presenting complaint.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Bailey and Love's Short Practice of Surgery - history-taking and clerking framework.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'history-taking-psychiatry',
        title: 'History Taking in Psychiatry',
        category: 'History Taking',
        subCategory: 'General Approach',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>History Taking in Psychiatry</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">History Taking</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">History Taking in Psychiatry</h1>
        <p class="text-sm text-indigo-200">A psychiatric history is more elaborate than the general medical history it builds on - it carries dedicated sections for premorbid personality, forensic history, and substance use that a medical clerking doesn't need, and it closes with a structured Mental State Examination rather than a physical one. This guide walks through the full structure, biodata to MSE, with the mnemonics that make it reproducible under pressure.</p>
      </div>
      </div>
      
      <!-- 1. Biodata -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Bio-Data, Informant, and Referral
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Bio-Data (Acronym NASOMARTIS)</strong>
        <p class="text-sm">Name, Age, Sex, Occupation, Marital status, Address, Religion, Tribe.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Informant</strong>
        <p class="text-sm">State whether the information is reliable, and why.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Source of Referral</strong>
        <p class="text-sm">This may be from relatives (parents, aunts, uncle, etc.), the general outpatient department, accident and emergency, school, the police station, a traditional healer, and so on.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Reason for Referral, or Why Consultation Now</strong>
        <p class="text-sm">For example: need to be assessed, treated, and certified fit for educational or occupational purposes; pressure from family; pending conviction; or, for substance abuse specifically, "had enough" or increasing difficulty injecting.</p>
      </div>
      </div>
      
      <!-- 2. Presenting Complaints -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Presenting Complaints
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Should be in the patient's own words and arranged chronologically.</p>
      </div>
      
      <!-- 3. HPC -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      History of Presenting Complaints (The 5 Cs)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Complaints</span> - should be well described.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Course</span> - progression of the complaints.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Severity.</span></li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Associated symptoms</span> and associated life events occurring at or about the same time.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Precipitating, aggravating, and relieving factors.</span></li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Causes - Ruling Out the Major Symptom Categories</strong>
      <div>
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Rule out symptoms of psychosis:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>History of belief that thought is being put into (insertion) or removed (withdrawal) from his/her mind, or is known to others without telling them (broadcast), or doing actions suggestive of such.</li>
          <li>History of hearing their own thoughts spoken out aloud, either at the same time as thinking (Gedankenlautwerden) or immediately after thinking (écho de la pensée) - note that both are forms of thought echo.</li>
          <li>History of seeing, hearing, smelling, or tasting things not experienced by others, in clear consciousness, or hearing voices emanating from parts of his/her own body.</li>
          <li>History of belief that people want to harm him/her (persecutory delusions), or that people or the media (TV, radio, newspaper, Qur'an, Bible) make undue or special reference to him/her (delusions of reference), or that an external force is controlling his/her actions (delusions of control).</li>
        </ul>
      </div>
      <div>
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Rule out affective disorders:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><span class="font-medium">Manic pole:</span> history of undue elevated mood, increased energy, increased interest in pleasurable activities, and decreased need for sleep.</li>
          <li><span class="font-medium">Depressive pole:</span> undue low mood, reduced energy, loss of interest in previously pleasurable activities (anhedonia), and suicidal ideation.</li>
        </ul>
      </div>
      <div>
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Rule out organic symptoms:</p>
        <p class="text-sm">History of fever, head injury, convulsion, loss of consciousness, and so on.</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Complications</strong>
      <p class="text-sm">This is asked in terms of personal, occupational, and broader social context.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Personal:</span> has it affected the patient's personal hygiene?</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Occupational:</span> is the patient still able to attend work, or attend to school work if a student? What is the relationship with colleagues - cordial or strained?</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Broader social context:</span> relationship with neighbours; does the patient still go to social gatherings?</li>
      </ul>
      </div>
      
      <!-- 4. Care So Far -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Care So Far
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Should include all forms of treatment the patient has received (both orthodox and unorthodox/traditional healers), duration of treatment and what was given or done, dose, number of times given per day, whether the patient was compliant, any adverse reactions, and any improvement noticed. Also include current medications, if any, and the dose given.</p>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">N.B.</span> If the patient does not know the name of a drug, ask for its colour and description - patients frequently recognise their medication this way even when they can't name it. Examples: Haloperidol (5mg pink, flat, round); Amitriptyline 25mg and Diazepam 5mg (both yellow); Chlorpromazine/Largactil (100mg, white, oblong); Benzhexol/Artane (white, small); Trifluoperazine/TFP/Stelazine (5mg, blue).</p>
      </div>
      </div>
      
      <!-- 5. Past Psychiatric History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Past Psychiatric History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Previous history of similar illness, total number of episodes and psychiatric admissions, symptoms of each episode, duration of each episode, place of treatment and types of treatment given, response to treatment, compliance with medications and clinic visits, and whether the patient returned to their premorbid state after every episode of illness.</p>
      </div>
      
      <!-- 6. PMH -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Past Medical History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Is the patient being managed for any chronic medical condition - if yes, state it. Any surgery in the past?</p>
      </div>
      
      <!-- 7. Family History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Family History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Position of the patient in the family.</li>
        <li>Nature of the family (monogamy or polygamy, how many wives); what number wife is the patient's mother.</li>
        <li>Detailed history on every member of the family, including name, age, sex, level of education and occupation, address, whether dead or alive, history of psychiatric illness, and relationship with the patient (cordial or strained). If there is a positive history of psychiatric illness in any member, state the type of illness, symptoms, treatment given and where, and the present state of that person.</li>
      </ul>
      </div>
      
      <!-- 8. Personal History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Personal History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Pregnancy, Birth, and Childhood</strong>
        <p class="text-sm">Pregnancy history, labour and delivery; neonatal period and childhood history; history of developmental milestones - if not certain, ask whether comparable to siblings. If all is normal, report as "not adversely eventful." If anything is abnormal, explain.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Educational History</strong>
        <p class="text-sm">For all levels, stating the dates, schools attended, and performance (position in class; O'Level examinations - state the number of times written and the grades; current CGPA; for graduates, graduating class - 1st, 2nd, or 3rd class). If there is any gap year, ask why. Any history of misconduct in school? What is the relationship with colleagues and teachers?</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Occupational History</strong>
        <p class="text-sm">Current job, duration, functionality at work, any misconduct, relationship with colleagues and management, current monthly allowance/salary (also ask for students). Chronological list of previous jobs, clerked the same way, with reasons for leaving each. Is the type of job undertaken consistent with the patient's level of educational attainment?</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Menstrual History (If Female)</strong>
        <p class="text-sm">Age at menarche, duration of flow, length of cycles, any menstrual abnormalities (e.g. dysmenorrhoea), use of oral contraceptives.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Psychosexual History</strong>
        <p class="text-sm">Sexual orientation (heterosexual, homosexual, or bisexual); previous sexual experiences; history of coitarche (age, with whom, whether consensual, whether the experience was pleasurable); history of rape or incest, sexual harassment; any history of abortion.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Marital History</strong>
        <p class="text-sm">Current marital status; name, age, level of education and occupation, and address of the current partner; duration and quality of the relationship now (cordial or strained?). What is the partner's attitude to the patient's illness? Any psychiatric or medical illness in the partner? Nature and number of previous relationships.</p>
        <p class="text-sm mt-2">Number of children - name, age, level of education and occupation of each child, address, whether dead or alive, history of psychiatric illness, relationship with the patient (cordial or strained).</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Social History</strong>
        <p class="text-sm">Accommodation, household composition, financial situation, recreational activities.</p>
      </div>
      </div>
      
      <!-- 9. Substance use -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      History of Psychoactive Substance Use
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Age at first use, who introduced it, first-use experience, duration of use, history of other substances used, initial dose used and current dose used, source of finance for the drugs, and history to rule out dependence.</p>
      </div>
      
      <!-- 10. Forensic -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Forensic History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Arrests, convictions, imprisonment. Nature of the offences, especially with regard to dangerousness.</p>
      </div>
      
      <!-- 11. Pre-morbid -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Pre-Morbid History (Mnemonic CHARMS)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Is the patient gentle, kind, easy-going, versus violent, aggressive, irritable, before the illness began?</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Letter</th>
              <th class="py-2 pr-3 font-medium">Domain</th>
              <th class="py-2 font-medium">What to ask</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">C</td><td class="py-2 pr-3">Character</td><td class="py-2">Attitude and character before illness</td></tr>
            <tr><td class="py-2 pr-3">H</td><td class="py-2 pr-3">Habit</td><td class="py-2">What the patient likes doing with spare time/hobbies - cooking, music, movies, etc., and how the patient relieves stress (sleeping, reading books, etc.)</td></tr>
            <tr><td class="py-2 pr-3">A</td><td class="py-2 pr-3">Attitude</td><td class="py-2">General disposition and outlook</td></tr>
            <tr><td class="py-2 pr-3">R</td><td class="py-2 pr-3">Religiosity level</td><td class="py-2">Most patients are moderate; note if religious activity is high enough to be negatively affecting the patient</td></tr>
            <tr><td class="py-2 pr-3">M</td><td class="py-2 pr-3">Mood (prevailing)</td><td class="py-2">Generally happy or sad</td></tr>
            <tr><td class="py-2 pr-3">S</td><td class="py-2 pr-3">Sociability</td><td class="py-2">Does the patient keep friends, and how many?</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 12. MSE -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Mental State Examination (Mnemonic BAPTOAMIJI)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Letter</th>
              <th class="py-2 font-medium">Domain</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">B</td><td class="py-2">Behaviour and appearance</td></tr>
            <tr><td class="py-2 pr-3">A</td><td class="py-2">Affect and mood</td></tr>
            <tr><td class="py-2 pr-3">P</td><td class="py-2">Perception</td></tr>
            <tr><td class="py-2 pr-3">T</td><td class="py-2">Talk and thought</td></tr>
            <tr><td class="py-2 pr-3">O</td><td class="py-2">Orientation</td></tr>
            <tr><td class="py-2 pr-3">A</td><td class="py-2">Attention and concentration</td></tr>
            <tr><td class="py-2 pr-3">M</td><td class="py-2">Memory</td></tr>
            <tr><td class="py-2 pr-3">I</td><td class="py-2">Intellect</td></tr>
            <tr><td class="py-2 pr-3">J</td><td class="py-2">Judgement</td></tr>
            <tr><td class="py-2 pr-3">I</td><td class="py-2">Insight</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Behaviour and Appearance</strong>
        <p class="text-sm">The state of health, posture, cleanliness, clothing, and self-care.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li>Apparent age of the patient (young, middle age, elderly).</li>
          <li>Level of activity - is the patient calm and alert, or restless?</li>
          <li>Behaviour - cooperative/uncooperative/hostile; does the patient maintain eye contact; any episode of aggression/irritability or apparent anxiety (in a patient with suspected anxiety disorder).</li>
          <li>Any evidence of self-neglect - well/poorly groomed (appropriate clothing), well-kempt/unkempt (cleanliness of cloth, nails, hair).</li>
          <li>Motor activity - presence of involuntary or abnormal voluntary body movement? Abnormal posture?</li>
          <li>Any physical abnormalities or disabilities?</li>
        </ul>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Affect and Mood</strong>
        <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Affect</span> is the observed (objective) expression of emotion, which is short-lived, and may or may not be consistent with the patient's described emotion.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Mood</span> is the prevailing, prolonged emotional state or internal feeling tone of an individual - it is subjective. The patient is asked to grade their current mood on a scale of 0 to 10, with 0 being the saddest ever possible (e.g. loss of a loved one) and 10 being the happiest ever possible (e.g. day of wedding). Below 5 is graded sad, 5 is euthymic, above 5 is happy.</p>
        <p class="text-sm mt-2">Affect is then judged against the stated mood - it may be congruent (e.g. patient said they are happy and observations confirm it, smiling during the interaction) or incongruent (e.g. patient said they are happy but frowned or did not smile throughout), and may be described as blunted or flat.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Perception</strong>
        <p class="text-sm">This is awareness of the environment through the sense organs. Abnormalities are assessed in the five sensory modalities: auditory, visual, tactile, olfactory, gustatory. Ask for history suggestive of hallucinations, illusions, depersonalisation, or derealisation. Report as "no hallucinations, illusions, etc." if none found; if present in any modality, state it.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Talk and Thought</strong>
        <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Talk:</span> is speech spontaneous, on-prompting, or hesitant (not responding immediately), or mute? Is volume and tone normal, high, or low? Is it coherent and relevant to the discussion at hand?</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Thoughts</span> are assessed in four domains:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li><span class="font-medium">Stream of thought:</span> pressure of speech, poverty of speech, unduly brief or monosyllabic answers?</li>
          <li><span class="font-medium">Contents:</span> over-valued ideas or delusions; suicidal thoughts or deliberate self-harm, or thoughts of harm to others; obsessive thoughts, ideas, and impulses.</li>
          <li><span class="font-medium">Possession:</span> thought insertion, withdrawal, or broadcasting.</li>
          <li><span class="font-medium">Form:</span> flight of ideas, loosening of association (LOA), perseveration.</li>
        </ul>
        <div class="overflow-x-auto mt-3">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Level of LOA</th>
                <th class="py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Tangentiality</td><td class="py-2">Patient starts saying irrelevant speech from the start of talking</td></tr>
              <tr><td class="py-2 pr-3">Derailment</td><td class="py-2">Starts by saying relevant speech, then irrelevant, and never returns to relevant speech</td></tr>
              <tr><td class="py-2 pr-3">Circumstantiality</td><td class="py-2">Starts by saying relevant speech, then irrelevant, then returns to relevant speech</td></tr>
              <tr><td class="py-2 pr-3">Word salad</td><td class="py-2">Patient mixes up words</td></tr>
              <tr><td class="py-2 pr-3">Neologism</td><td class="py-2">New words are created by the patient</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Orientation</strong>
        <p class="text-sm">The ability to recognise the environment in terms of time, place, and person.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li><span class="font-medium">Time:</span> ask for the time of day without looking at a timepiece (morning, afternoon, evening, night), the day of the week, date, month, and year.</li>
          <li><span class="font-medium">Place:</span> ask for the current location (what ward is this, name of hospital), town, state, and country.</li>
          <li><span class="font-medium">Person:</span> ask the patient to identify people working in the hospital (e.g. nurses).</li>
        </ul>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Attention and Concentration</strong>
        <p class="text-sm">Attention is the ability to focus on certain portions of an experience, while concentration is the ability to sustain focus on an activity.</p>
        <p class="text-sm mt-2">Assessed using the serial 7 test: the patient serially subtracts 7 from 100, calculating in their mind and saying only the answer (93, 86, 79, 72, 65, etc.) - not verbalising "100 minus 7 equals 93." If the patient gets the first 5 answers correctly, stop; if not, continue until 5 consecutive correct answers are given. Report as normal if the patient was able to correctly deduct 7 from 100 (state the answers given).</p>
        <p class="text-sm mt-2">For a patient who cannot do the serial 7 test, use serial subtraction of 3 from 20, or recitation of the days of the week forward and backward, depending on the patient's level of education. If the patient still cannot do the above, individualise it to something they are used to - e.g. ask them to describe serially how they would prepare jollof rice.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Memory</strong>
        <p class="text-sm">The function by which information is stored (registered), retained, and recalled. Assessed under immediate recall, short-term, and long-term (recent and remote) memory.</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li><span class="font-medium">Immediate and short-term:</span> give the patient a fictitious name and address (do not use your own name or the name of hospital staff), e.g. "Salam Waje who lives at 5 Zango Jebba," and ask the patient to recall it immediately (immediate recall). Tell the patient you will ask again after five minutes while continuing other aspects of the MSE, so they don't rehearse it, then check recall (short-term memory).</li>
          <li><span class="font-medium">Long-term, recent:</span> ask about things that occurred in the last few days, e.g. what they ate the night before, or anything that can be corroborated by relatives or nursing staff.</li>
          <li><span class="font-medium">Long-term, remote:</span> ask the patient to recall personal events or well-known items of news from former years. Personal items could be the birth dates of children or names of grandchildren (provided these are known to the interviewer); news items could be the names of well-known former political leaders or days of national significance, e.g. Independence Day.</li>
        </ul>
        <p class="text-sm mt-2">Report as good, moderate (patient can recall some), or poor (patient cannot recall anything), stating what was asked for under each domain.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Intellect</strong>
        <p class="text-sm">Assessed under general knowledge, calculative/arithmetic ability, and abstraction.</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li><span class="font-medium">General knowledge:</span> ask the patient for the current governor of the state and president of the country, or the name of the Oba/Emir of their town, or general knowledge you think the patient should know and can confirm from relatives.</li>
          <li><span class="font-medium">Calculative ability:</span> give a mathematical task appropriate to the patient's level of education - e.g. for a well-educated patient, "if your salary is [amount] and a tax of 10% was paid and 5% for house rent, what amount was removed, and what amount is left?"</li>
          <li><span class="font-medium">Abstraction:</span> ask the patient to interpret a common proverb known to you - e.g. "not all that glitters is gold" (not all things are as they appear), or "he who lives in a glass house throws no stone." Local-language proverbs also work well where the patient is more comfortable, e.g. a Yoruba proverb on everyone having a specific role, or a Hausa proverb that half a loaf is better than none. The patient should give the proverbial meaning, not a concrete/literal one. If the patient cannot do this, use a similarity-and-difference test instead (e.g. what is the similarity and difference between a cat and dog, or an orange and mango).</li>
        </ul>
        <p class="text-sm mt-2">Report as good (all correct), impaired (at least one correct), or poor (none correct), stating what was asked under each domain.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Judgement</strong>
        <p class="text-sm">The ability to assess a situation correctly and act appropriately. Assessed both subjectively and objectively.</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li><span class="font-medium">Subjectively:</span> does the patient react appropriately to their environment? For example, it is poor if a patient who came into the consulting room places their legs on the table.</li>
          <li><span class="font-medium">Objectively:</span> give the patient a scenario - for example, a tap left running in a toilet has flooded the whole room, and there is a bucket and mop in the toilet; ask what they would do, serially. Correct answer: close the tap, then scoop the water with the bucket, then mop the floor. Alternatively: if walking down the street and finding a letter addressed to a fictitious name at a very far address, what would they do? Correct answer: take it to the post office, police station, or a broadcasting centre.</li>
        </ul>
        <p class="text-sm mt-2">Judgement may be graded good (if both assessments are normal), impaired (if one is abnormal), or poor (if both are abnormal).</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Insight</strong>
        <p class="text-sm">The ability to understand the true cause and meaning of a situation. Can be full, partial, or none. The following questions are asked:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li>Does the patient recognise the symptoms for which they came, or were brought, to hospital?</li>
          <li>Do the symptoms seem abnormal to the patient?</li>
          <li>Do the symptoms connote mental illness, in the patient's view?</li>
          <li>Does the patient think mental illness can be treated?</li>
          <li>Will the patient agree to comply with treatment?</li>
        </ul>
        <p class="text-sm mt-2">Insight may be complete (patient answers all questions correctly), partial (at least one correct), or absent (none correct).</p>
        <p class="text-sm mt-2"><span class="font-medium">N.B.</span> If the patient does not recognise the symptoms in themselves, give a scenario of their symptoms occurring in another (fictitious) person, then ask if it is normal or abnormal for that person, before asking other questions.</p>
      </div>
      </div>
      
      <!-- 13. Physical exam -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">13</span>
      Physical Examination
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">A psychiatric clerking still requires a thorough physical examination - CNS, respiratory, cardiovascular, abdominal, and musculoskeletal - since organic causes and comorbid physical illness must be excluded and documented alongside the psychiatric findings.</p>
      </div>
      
      <!-- 14. Summary -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">14</span>
      Summary
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Usually more elaborate than the usual medicine summary. It is a concise knowledge of important findings in the history, MSE, and physical examination. It should include:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Important positives and negatives in the history.</li>
        <li>Important points in the past psychiatric history.</li>
        <li>Important points in the personal history.</li>
        <li>Important points in the drug history and past medical history.</li>
        <li>Important positives in the mental state examination.</li>
        <li>Important positives in the physical examination.</li>
      </ul>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-3">Example: "Mrs S.W., a 45-year-old single/separated, unemployed woman, who presented on account of 3 months' duration of hearing voices not heard by others in clear consciousness (commenting on or abusing her), and belief that her father wants to harm her; no history of affective or organic symptoms. However, there was a history of decline in self-care, and the patient has been taken to a traditional healer; no orthodox intervention had been sought before presentation. She has had two previous episodes of similar illness, and is a known hypertensive patient. MSE at the time of review revealed decline in self-care, auditory hallucinations (third-person, commenting), persecutory delusions, and poor insight."</p>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always test for psychotic, affective, and organic symptoms explicitly in the HPC - this is the "rule out" step that shapes the differential before anything else.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>"Care so far" must include traditional/unorthodox treatment explicitly - this is frequently the only care sought before presentation and shapes both history and management.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use a fictitious name and address for memory testing - never your own name or a staff member's, since the patient may already know it.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Individualise cognitive testing (serial 7s, proverbs, calculations) to the patient's actual education and cultural context rather than applying one fixed test to everyone.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A psychiatric clerking still requires a full physical examination - organic and comorbid physical causes are never assumed away.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Sadock BJ, Sadock VA, Ruiz P - Kaplan and Sadock's Synopsis of Psychiatry - psychiatric history and mental state examination framework.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Oyebode F - Sims' Symptoms in the Mind: An Introduction to Descriptive Psychopathology.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'history-taking-obstetrics',
        title: 'History Taking in Obstetrics',
        category: 'History Taking',
        subCategory: 'General Approach',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>History Taking in Obstetrics</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">History Taking</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">History Taking in Obstetrics</h1>
        <p class="text-sm text-indigo-200">An obstetric history layers a full antenatal, past obstetric, and gynaecological record onto the standard medical clerking - and two calculations, the expected date of delivery and the estimated gestational age, have to be done correctly and explained clearly every time. This guide walks through the full structure, biodata to summary, with both calculations worked step by step.</p>
      </div>
      </div>
      
      <!-- 1. Biodata -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Biodata
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Name; age; occupation; address; religion and sect (if Jehovah's Witness); tribe; marital status; educational level; parity; last menstrual period (LMP); expected date of delivery (EDD); estimated gestational age (EGA); last childbirth.</p>
      </div>
      
      <!-- 2. Reason for visit -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Reason(s) for Visit
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">It may be for:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Booking</li>
        <li>Routine antenatal visit</li>
        <li>New complaint</li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Ask About</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Events since onset of pregnancy; has she been booked?</li>
        <li>Problems since onset of pregnancy and treatment received.</li>
        <li>Number of antenatal visits.</li>
        <li>Immunisations, and the gestational age at which they were received.</li>
        <li>IPT (intermittent preventive treatment) and the gestational age at which it was received.</li>
        <li>Regularity of intake of haematinics.</li>
        <li>Problems that have arisen since the onset of pregnancy and treatment given.</li>
        <li>Drugs she has been taking.</li>
        <li>Investigations done: PCV, genotype, blood group, VDRL, screening for hepatitis (HBsAg, anti-HCV), screening for HIV, urinalysis, ultrasound scan (USS). Note genotype, blood group, and HIV status specifically if known.</li>
        <li>Any new complaint - excessive vaginal discharge, bleeding per vaginam, fever, etc. - and clerk as appropriate for whichever symptom is present.</li>
      </ul>
      </div>
      
      <!-- 3. Past Obstetric History -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Past Obstetric History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Detailed history of each pregnancy, from earliest to most recent:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Year of pregnancy.</li>
        <li>Duration and outcome of pregnancy.</li>
        <li>Labour and puerperium.</li>
        <li>Mode of delivery.</li>
        <li>Any complications during labour and delivery, e.g. prolonged labour, difficult delivery.</li>
        <li>Post-partum events (post-partum haemorrhage, fever, any wound infection, especially in a patient who has had a caesarean section, etc.).</li>
        <li>Gender of baby and birth weight.</li>
        <li>Days spent in hospital before discharge.</li>
        <li>Present state of the child (alive or dead).</li>
      </ul>
      </div>
      
      <!-- 4. Gynae history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Gynaecological History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Age at menarche.</li>
        <li>Length of menstrual cycle and duration of menses.</li>
        <li>Ask about history of: menorrhagia, dyspareunia, dysmenorrhoea, contraception.</li>
        <li>Details of abortion, if any (if not already detailed in the history of previous pregnancies above).</li>
        <li>Last Pap smear.</li>
      </ul>
      </div>
      
      <!-- 5. PMH -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Past Medical History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Ask about history of:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Diabetes mellitus, tuberculosis, asthma.</li>
        <li>Blood transfusion (which may cause Rhesus isoimmunisation).</li>
        <li>Previous surgery (myomectomy, VVF repair, etc.), and medications currently being used.</li>
        <li>Drug allergies.</li>
      </ul>
      </div>
      
      <!-- 6. Family history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Family History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Diabetes mellitus, hypertension, twinning.</p>
      </div>
      
      <!-- 7. Social history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Social History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Type of marriage and occupation of the husband.</li>
        <li>Smoking of cigarettes, illicit drug use, alcohol consumption.</li>
      </ul>
      </div>
      
      <!-- 8. Drug history -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Drug History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Drugs of particular importance to ask about: antihypertensives, oral hypoglycaemic agents, tetracycline, phenytoin, warfarin.</p>
      </div>
      
      <!-- 9. Systemic review -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Systemic Review
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">A brief sweep of symptoms across each system not already covered under the reason for visit.</p>
      </div>
      
      <!-- 10. Summary -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Summary
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Should include: name, age, gravidity, parity, EGA, reasons for visit, important findings, investigations done.</p>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-3">Example: "I have presented Mrs S.A., a 25-year-old gravida 4, para 2 (one alive), EGA 22 weeks, who is here for a routine antenatal visit. She complained of generalised body pain today. No abnormality in her routine antenatal investigations done, and pregnancy has not been adversely eventful."</p>
      </div>
      
      <!-- Naegele's Rule -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">11</span>
      Calculating the EDD from the LMP
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Naegele's rule</span> (for a 28-day cycle):</p>
      <p class="text-sm bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 sans">EDD = LMP + 7 days + 1 year - 3 months</p>
      <p class="text-sm">Or, equivalently: EDD = LMP + 7 days + 9 months.</p>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-2">Example: LMP = 16/06/2008. EDD = 23/06/2008 (adding 7 days), then +1 year = 23/06/2009, then -3 months = <span class="font-medium">23/03/2009</span>.</p>
      </div>
      
      <!-- EGA -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">12</span>
      Estimating Gestational Age from the LMP
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">From the date of the LMP, reaching the same day in the next calendar month counts as four weeks. After three months have passed this way, add one extra week to correct for the accumulated rounding (since a calendar month averages slightly more than four weeks).</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Date reached</th>
              <th class="py-2 font-medium">Running total</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">LMP: 2/3/2019</td><td class="py-2">0 weeks (starting point)</td></tr>
            <tr><td class="py-2 pr-3">2/4/2019</td><td class="py-2">4 weeks</td></tr>
            <tr><td class="py-2 pr-3">2/5/2019</td><td class="py-2">8 weeks</td></tr>
            <tr><td class="py-2 pr-3">2/6/2019 (3 months reached - add 1 week correction)</td><td class="py-2">12 weeks + 1 week = 13 weeks</td></tr>
            <tr><td class="py-2 pr-3">9/6/2019 (+1 week)</td><td class="py-2">14 weeks</td></tr>
            <tr><td class="py-2 pr-3">14/6/2019 (+5 days, the date of examination)</td><td class="py-2"><span class="font-medium text-slate-800 dark:text-slate-200">EGA = 14 weeks 5 days</span></td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Comment on findings (e.g. symphysiofundal height) as compared against the EGA calculated this way from the LMP.</p>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Clerk every prior pregnancy individually in the past obstetric history - year, outcome, mode of delivery, complications, and the child's present state - not as a single summed parity figure.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Naegele's rule assumes a 28-day cycle - flag this assumption explicitly when a patient's cycle is known to differ.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Remember the 1-week correction after every 3 months when estimating gestational age by the calendar-month method.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask specifically about genotype, blood group, and HIV status if already known, rather than only ordering these afresh.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about blood transfusion history specifically for Rhesus isoimmunisation risk, not just as a generic past medical history item.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Naegele FC - Naegele's Rule for Estimating the Expected Date of Delivery.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Antenatal Care Guidelines.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Dutta DC - Textbook of Obstetrics - history-taking and gestational age estimation framework.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'history-taking-gynaecology',
        title: 'History Taking in Gynaecology',
        category: 'History Taking',
        subCategory: 'General Approach',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>History Taking in Gynaecology</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
      body { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
      .sans { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }
      </style>
      </head>
      <body class="bg-white text-slate-800 max-w-3xl mx-auto px-6 py-12 leading-relaxed">
      
      <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">History Taking</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">History Taking in Gynaecology</h1>
        <p class="text-sm text-indigo-200">A gynaecological history carries its own dedicated menstrual and obstetric sections alongside the standard medical clerking, since reproductive history routinely explains the presenting complaint. This guide walks through the full structure, biodata to summary.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Biodata
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Name; age; occupation; address; religion and sect; tribe; marital status; educational level; parity.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Presenting Complaint
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Recorded in the patient's own words, arranged chronologically. Common gynaecological presentations include delayed or absent menses, abnormal vaginal discharge, bleeding per vaginam, abdominal pain, and abdominal swelling.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      History of Presenting Complaint
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Characterise the complaint fully - onset and duration, course, severity, associated symptoms, and precipitating, aggravating, and relieving factors - directing specific follow-up questions at the symptom presented (e.g. quantifying blood loss for abnormal bleeding, or characterising discharge by colour, odour, and associated itching).</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Menstrual History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Age at menarche.</li>
        <li>Length of menstrual cycle and duration of menses; regularity.</li>
        <li>Last normal menstrual period.</li>
        <li>Amount of blood loss, and any pain with menstruation.</li>
        <li>Contraceptive history.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Obstetric History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Parity, number alive, details of pregnancy, labour and puerperium with birth weight of each child, and present state of the child/children.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Past Medical History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">History of sickle cell disease, hypertension, asthma, diabetes, psychiatric illness, blood transfusion, and surgery.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Family History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">History of similar illness in siblings/parents; family history of hypertension, diabetes mellitus.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Social History
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Marital status, husband's occupation and educational level, smoking, alcohol, multiple sexual partners.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Summary
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Brief and concise; should include relevant points such as age, parity, presenting complaint and duration, important positives and negatives, and care given so far.</p>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-3">Example: "I have presented a 24-year-old, P1+0 woman with a 2-week history of leakage of urine. Her last delivery was conducted with an instrument, 18 hours after she fell in labour."</p>
      </div>
      
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Take a full obstetric history even in a gynaecological clerking - a prior instrumental delivery, as in the worked example, can directly explain the presenting complaint.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about blood transfusion and surgical history specifically, since prior gynaecological surgery (myomectomy, VVF repair) is directly relevant to a new presentation.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always record the menstrual history in full, even when the presenting complaint seems unrelated to menstruation.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about sexual partners and contraceptive use directly and non-judgmentally - this is core clinical information, not an optional social detail.</span></li>
      </ul>
      </div>
      
      <details class="group bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700">
      <summary class="flex items-center justify-between cursor-pointer px-4 py-2 select-none">
        <h3 class="font-brand text-sm font-semibold text-stone-600 dark:text-stone-300">References</h3>
        <svg class="w-4 h-4 text-stone-400 dark:text-stone-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-stone-200 dark:border-stone-700">
        <ul class="space-y-1 text-[10px] leading-snug text-stone-500 dark:text-stone-400">
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Dutta DC - Textbook of Gynaecology - history-taking framework.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },

];
