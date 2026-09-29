import { LearningModule } from '../../types/learn';

export const PHYSICAL_EXAMINATION_CONTENT: LearningModule[] = [


    {
        id: 'examination-general-physical',
        title: 'General Physical Examination',
        category: 'Physical Examination',
        subCategory: 'Internal Medicine',
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
      
      {
        id: 'exam-cns',
        title: 'CNS Examination',
        category: 'Physical Examination',
        subCategory: 'Internal Medicine',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Central Nervous System Examination</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Physical Examination</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Central Nervous System Examination</h1>
        <p class="text-sm text-indigo-200">A CNS examination moves through higher cortical function, the twelve cranial nerves, and the motor system in a fixed order - and the value is almost entirely in localisation: which specific nerve, tract, or level is affected, not just that "something neurological" is wrong. This guide covers the full sequence with the mnemonics, technique, and clinical correlates for each part.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Overview
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">This involves:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Test for higher cortical functions: Consciousness, Orientation, Speech, Memory, Intellect, Attention & concentration, and Judgement (acronym <span class="font-medium">COSMIAJ</span>).</li>
        <li>Pupillary light reflex.</li>
        <li>Test for meningeal irritation.</li>
        <li>Cranial nerve examination.</li>
        <li>Motor system examination.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Higher Cortical Function (COSMIAJ)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Consciousness (Glasgow Coma Scale)</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Best motor response</th>
                <th class="py-2 pr-3 font-medium">Best verbal response</th>
                <th class="py-2 font-medium">Eye opening</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">6 - Obeying commands</td><td class="py-2 pr-3">5 - Oriented (time, place, person)</td><td class="py-2">4 - Spontaneous</td></tr>
              <tr><td class="py-2 pr-3">5 - Localising to pain</td><td class="py-2 pr-3">4 - Confused conversation</td><td class="py-2">3 - In response to speech</td></tr>
              <tr><td class="py-2 pr-3">4 - Withdrawing to pain</td><td class="py-2 pr-3">3 - Inappropriate speech</td><td class="py-2">2 - In response to pain</td></tr>
              <tr><td class="py-2 pr-3">3 - Flexor response to pain</td><td class="py-2 pr-3">2 - Incomprehensible sounds</td><td class="py-2">1 - None</td></tr>
              <tr><td class="py-2 pr-3">2 - Extensor response to pain</td><td class="py-2 pr-3">1 - None</td><td class="py-2"></td></tr>
              <tr><td class="py-2 pr-3">1 - No response to pain</td><td class="py-2 pr-3"></td><td class="py-2"></td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">Total scale of 3-15. Normal = &ge; 14. Impaired consciousness = 9-13. Unarousable state of unconsciousness = &le; 8.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Orientation</strong>
        <p class="text-sm">Test for in time, place, and person.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Speech</strong>
        <p class="text-sm">Is it spontaneous, hesitant, or mute? Is the tone and volume normal, high, or low? Is it coherent and relevant to the discussion at hand?</p>
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">Types of aphasia:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li><span class="font-medium">Broca's (motor/expressive) aphasia.</span></li>
          <li><span class="font-medium">Wernicke's (sensory/receptive/jargon) aphasia.</span></li>
          <li><span class="font-medium">Verbatism:</span> difficulty repeating words (arcuate fasciculus is affected).</li>
          <li><span class="font-medium">Nominal aphasia:</span> difficulty naming common things. Due to an angular gyrus lesion.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Memory</strong>
        <p class="text-sm">Test for immediate recall and register, short term, and long term memory.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Intellect</strong>
        <p class="text-sm">Test for general knowledge, calculative/arithmetic ability, and abstraction.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Attention and Concentration</strong>
        <p class="text-sm">Using the serial 7 test (patient serially deducts 7 from 100), or counting the days of the week forward and backward.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Judgement</strong>
        <p class="text-sm">Using the tap water test.</p>
      </div>
      <p class="text-sm italic">Note: see the Psychiatry guide for details on how to carry out a full higher cortical or mental state examination.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Pupillary Light Reflex and Fundoscopy
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Pupillary light reflexes, performed on both eyes. Fundoscopy: using a fundoscope.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Describing Pupillary Response</strong>
        <p class="text-sm">Normal recorded as: <span class="font-medium">PERRLA</span> (Pupils Equal, Round, Reactive to Light and Accommodation).</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Clinical correlates:</span> loss of acuity is usually due to refractory error; other causes include glaucoma, optic neuritis, etc.</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li>Abnormal response can be secondary to: direct or indirect damage to CN II or III, or parasympathetic injury to CN III, or damage to the sympathetic neuron; drugs.</li>
          <li><span class="font-medium">Causes of abnormal constriction</span> include: Horner's syndrome; drugs like morphine, heroine.</li>
          <li><span class="font-medium">Causes of abnormal dilation:</span> lesion of CN III; neurosyphilis; drugs like atropine, sympathomimetics.</li>
        </ul>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Cranial Nerve Examination - Overview
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">I - Olfactory, II - Optic, III - Oculomotor, IV - Trochlear, V - Trigeminal, VI - Abducens, VII - Facial, VIII - Vestibulocochlear, IX - Glossopharyngeal, X - Vagus, XI - Spinal Accessory, XII - Hypoglossal.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li><span class="font-medium">Sensory only:</span> CNs I, II, VIII.</li>
        <li><span class="font-medium">Motor only:</span> CNs III, IV, VI, XI, XII.</li>
        <li><span class="font-medium">Sensory and motor (both):</span> CNs V, VII, IX, X.</li>
      </ul>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-2">Mnemonic for sensory/motor/both: "Some Say Marry Money But My Brother Says Big Brain Matters Most" (S = sensory, M = motor, B = both).</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Origins of the Cranial Nerves</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Cerebrum: CNs I and II.</li>
          <li>Midbrain: CNs III and IV.</li>
          <li>Pons: CNs V, VI, VII, and VIII.</li>
          <li>Medulla: CNs IX, X, XI, and XII.</li>
        </ul>
        <p class="text-sm mt-1 italic">Easy recall: 2, 2, 4, 4.</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">I) CN I - Olfactory Nerve</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> innervates olfactory and nasal mucosa (smell).</p>
      <p class="text-sm mt-2"><span class="font-medium">Technique:</span> the patient is presented with a non-offending substance with a familiar odour. With the patient's eyes closed, the substance is positioned close to each nostril at separate times.</p>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">II) CN II - Optic Nerve</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> sensory to the eyes.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Technique - involves testing for:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li><span class="font-medium">Visual acuity:</span> using Snellen's eye chart or a pocket Snellen's eye chart.</li>
        <li><span class="font-medium">Colour:</span> using Ishihara plates, which identifies patients who are colour-blind. If not available, ask the patient to identify colour of objects in the surroundings.</li>
        <li><span class="font-medium">Visual fields:</span> test for the four quadrants in both eyes.</li>
        <li><span class="font-medium">Reflexes:</span> using a pen torch, check for both direct and concentric (consensual) pupillary light reflexes, performed on both eyes.</li>
        <li><span class="font-medium">Fundoscopy:</span> using a fundoscope.</li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">III) CN III, IV, and VI - Oculomotor, Trochlear, Abducens</strong>
      <p class="text-sm"><span class="font-medium">Function</span> (pneumonic: SO4, LR6, and others are innervated by CN III) - examined together, since they innervate the extraocular muscles of the eye.</p>
      <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
        <li><span class="font-medium">CN VI (Abducens):</span> innervates the lateral rectus (LR) muscle &rarr; moves the eye laterally.</li>
        <li><span class="font-medium">CN IV (Trochlear):</span> innervates the superior oblique (SO) muscle &rarr; moves the eye down when looking towards the nose; also rotates internally.</li>
        <li><span class="font-medium">CN III (Oculomotor):</span> innervates all other muscles of eye movement (medial rectus, superior rectus, inferior rectus, and inferior oblique). It also raises the eyelid (levator palpebrae superioris) and mediates pupillary constriction.</li>
      </ul>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Technique for examining extraocular movement:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>The patient's head is kept still and directly in front of the examiner.</li>
        <li>The patient is instructed to follow the examiner's index finger with their eyes while the examiner traces the letter "H".</li>
        <li>The eyes should move in all directions, in a coordinated, smooth, and symmetric fashion.</li>
      </ul>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Clinical correlates:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Upper ptosis - complete paralysis of the 3rd CN.</li>
        <li>Muscular atrophy.</li>
        <li>CN IV - double vision, rare alone.</li>
        <li>CN VI - it abducts the eye, so there is diplopia on moving to the affected side.</li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">IV) CN V - Trigeminal Nerve</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> sensory to the face, motor to the muscles of mastication.</p>
      <p class="text-sm mt-2">Both the sensory and motor components of this nerve are assessed. The corneal reflex is also checked.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Sensory:</p>
      <p class="text-sm">Ask the patient to close their eyes. Use cotton wool to touch each of the 3 areas: ophthalmic area (on the forehead), maxillary area (on the cheek), and mandibular area (around the jawline). Touch lightly, noting whether the patient detects the stimulus.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Motor:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Instruct the patient to open their mouth, then clench their teeth. The examiner palpates the temporal and masseter muscles as they clench.</li>
        <li>Ask the patient to then open their mouth against resistance.</li>
        <li>Perform a jaw jerk on the patient (place your left index finger on the chin of the patient, striking it with a tendon hammer).</li>
      </ul>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Corneal reflex:</p>
      <p class="text-sm">Elicited by touching the cornea with the tip of cotton wool. This should cause the patient to shut their eyelids.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Clinical correlates:</p>
      <ul class="list-disc pl-5 space-y-2 text-sm mt-1">
        <li><span class="font-medium">Trigeminal neuralgia (tic douloureux):</span> pain in the face on testing for sensory function of the nerve.</li>
        <li><span class="font-medium">Syringomyelia:</span> could cause sensory loss.</li>
        <li>If there is absence of the corneal reflex without facial nerve palsy, there is abnormality in the sensory portion of the trigeminal nerve.</li>
        <li>Lesion to the trigeminal nerve can occur in the brainstem or along its course. Diseases affecting the nerve at the brainstem include syringobulbia, multiple sclerosis. Compression of the nerve by a tumour is usually an acoustic neuroma. Herpes zoster can affect the trigeminal ganglion.</li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">V) CN VII - Facial Nerve</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> supplies motor branches to the muscles of facial expression and also the stapedius muscle. Supplies sensory branches to the anterior 2/3rd of the tongue.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Technique - on inspection:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Look for loss of the nasolabial fold, deviation of the angle of the mouth (to the contralateral side, C.L.S.), redness of the eyes (corneal irritation due to partial closure on the affected side).</li>
        <li>Instruct the patient to smile and reveal their teeth (there is deviation to the unaffected side).</li>
        <li>Ask the patient to whistle (weakness on the affected side).</li>
        <li>Ask the patient to puff out their cheeks and don't allow you to deflate it (easily deflated on the affected side).</li>
        <li>Ask the patient to close both eyes firmly and not allow you to open it (easily opened on the affected side).</li>
        <li>Instruct the patient to wrinkle their forehead and note the presence of the folds - if present, this indicates the lower motor neuron (LMN) is preserved, and only the upper motor neuron (UMN) is affected.</li>
        <li>Check for hyperacusis - make a sound near the patient's ear (painful sensitivity to sound if the nerve to the stapedius is affected).</li>
        <li>Check the taste of the two sides of the anterior 2/3rd of the tongue (lost on the affected side).</li>
      </ul>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Clinical correlates:</p>
      <p class="text-sm">The facial nerve can be affected in an upper motor neuron (UMN) or lower motor neuron (LMN) lesion. But in a UMN lesion, only the lower part of the face is affected - i.e. the patient will still be able to move their eyes and wrinkle their forehead. In an LMN lesion, the whole affected side of the face is affected.</p>
      <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
        <li>In FN lesions, any attempt to close the eyelids will cause the eye on the paralysed side to roll upwards (a.k.a. Bell's sign).</li>
        <li>Lesions that could affect the facial nerve include: neoplasms in the pons, poliomyelitis, GBS, leprosy, herpes zoster, Bell's palsy, fracture of the base of the skull.</li>
        <li><span class="font-medium">Bell's palsy:</span> paresis or paralysis, usually unilateral, of facial muscles, caused by dysfunction of the facial nerve. An LMN lesion can also affect the sensory part of the facial nerve.</li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">VI) CN VIII - Vestibulocochlear Nerve</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> provides innervation to the hearing apparatus of the ear (for hearing and balancing).</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Acoustic branch:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Check hearing from the external auditory meatus by rubbing fingers lightly together or whispering next to the patient, either ear from behind, and ask the patient if they can hear it.</li>
        <li>Stay a few distances away, say some words, and ask the patient to repeat.</li>
        <li>If there is significant hearing loss, determine whether it is conductive (i.e. external canal up to middle ear) or sensorineural (due to cochlea or CN VIII damage).</li>
      </ul>
      <p class="text-sm mt-2">Weber's and Rinne's tests are used to differentiate between conductive and sensorineural hearing loss.</p>
      <p class="text-sm italic">N.B. A tuning fork with frequency 512 Hz is used, and it is done in a quiet room.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Weber's test:</p>
      <p class="text-sm">Strike the tuning fork on your olecranon process and place it on the centre of the patient's forehead, and ask if it is equal or louder in either ear. Normally, it should be heard equally in both ears.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Rinne's test (air vs bone conduction):</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>A vibrating tuning fork is placed on the mastoid behind the patient's ear. Ask when the patient stops hearing it.</li>
        <li>When the patient can no longer hear it, strike it again and place it close to the patient's ear so they can hear it.</li>
        <li>Normal: air conduction (through the ear) better than bone conduction (through the mastoid) - Rinne positive.</li>
      </ul>
      <div class="overflow-x-auto mt-3">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 pr-3 font-medium">Expected finding</th>
              <th class="py-2 pr-3 font-medium">Conductive hearing loss (CHL)</th>
              <th class="py-2 font-medium">Sensorineural hearing loss (SNHL)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Weber</td><td class="py-2 pr-3">No lateralisation</td><td class="py-2 pr-3">Lateralisation to the ear with loss</td><td class="py-2">Lateralisation to the better hearing ear</td></tr>
            <tr><td class="py-2 pr-3">Rinne</td><td class="py-2 pr-3">Air conduction better than bone conduction (Rinne positive)</td><td class="py-2 pr-3">Bone conduction better than air conduction (Rinne negative)</td><td class="py-2">Air conduction better than bone conduction</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Vestibular branch (balance):</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Check for nystagmus.</li>
        <li>Do the Romberg test to check for balance.</li>
        <li>Also assess gait.</li>
      </ul>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Clinical correlates:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Causes of conductive deafness include: foreign bodies, wax in the ear, otitis media.</li>
        <li>Conditions that could affect the (sensorineural) nerve include: Meniere's disease, trauma, meningitis, tumour, etc.</li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">VII) CN IX and CN X - Tested Together</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> motor to the pharynx; sensory to the posterior tongue.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Technique:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Instruct the patient to stick out their tongue as they say "AHH." Use a tongue depressor if you can't see well. Check to see if the uvula is midline or deviated.</li>
        <li>Provoke the gag reflex by giving the patient fluid to swallow (the reflex is absent if the nerve is damaged).</li>
        <li>Sensory: test for taste in the posterior 1/3rd of the tongue.</li>
      </ul>
      <p class="text-sm mt-2 italic"><span class="font-medium not-italic">N.B.</span> CN IX is the afferent limb, while CN X is the efferent limb.</p>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">VIII) CN XI - Spinal Accessory Nerve</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> supplies the trapezius and sternocleidomastoid muscle.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Technique:</p>
      <p class="text-sm">Tested by contraction of the respective muscles.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li><span class="font-medium">Trapezius:</span> ask the patient to shrug shoulders against your resistance.</li>
        <li><span class="font-medium">Sternocleidomastoid:</span> place your palm on the cheek and ask the patient to turn their head against your resistance, and take note of the contraction of the muscle (weak on an affected side).</li>
      </ul>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">IX) CN XII - Hypoglossal Nerve</strong>
      <p class="text-sm"><span class="font-medium">Function:</span> supplies motor branches to the tongue.</p>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Technique:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Instruct the patient to stick out their tongue. Check if it is midline (i.e. no deviation).</li>
        <li>Check strength by directing the patient to push the tip into the inside of either cheek while you push from outside.</li>
        <li>Check for atrophy and fasciculations.</li>
      </ul>
      <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Clinical correlates:</p>
      <p class="text-sm">With a unilateral lesion, the tongue is protruded to the normal side.</p>
      </div>
      
      <!-- Motor system -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Motor System Examination (Acronym PATRIC-G)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium">Inspection:</span> for muscle bulk (normal or wasted).</li>
        <li><span class="font-medium">Asymmetry:</span> use a tape measure to determine.</li>
        <li><span class="font-medium">Power:</span> assess each group of muscle in the upper and lower limbs.</li>
      </ul>
      <div class="overflow-x-auto mt-2">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Grade</th>
              <th class="py-2 font-medium">Power</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">0</td><td class="py-2">No movement</td></tr>
            <tr><td class="py-2 pr-3">1</td><td class="py-2">Flickers of movement</td></tr>
            <tr><td class="py-2 pr-3">2</td><td class="py-2">Horizontal movement (side to side)</td></tr>
            <tr><td class="py-2 pr-3">3</td><td class="py-2">Movement against gravity</td></tr>
            <tr><td class="py-2 pr-3">4</td><td class="py-2">Movement against moderate resistance</td></tr>
            <tr><td class="py-2 pr-3">5</td><td class="py-2">Full power</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
        <li><span class="font-medium">Tone:</span> the resistance across joints on passive movement. Test across all joints.</li>
        <li><span class="font-medium">Reflex:</span>
          <ul class="list-disc pl-5 space-y-1 mt-1">
            <li><span class="font-medium">Deep tendon reflex:</span> upper limb - biceps jerk, radio-brachialis, supinator, and triceps jerk. Lower limb - knee and ankle jerk.</li>
            <li><span class="font-medium">Superficial reflex:</span> abdominal reflex, cremasteric reflex.</li>
          </ul>
        </li>
      </ul>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Features of Upper and Lower Motor Neuron Lesion</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Feature</th>
                <th class="py-2 pr-3 font-medium">LMN lesion</th>
                <th class="py-2 font-medium">UMN lesion</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Weakness</td><td class="py-2 pr-3">Present</td><td class="py-2">Present</td></tr>
              <tr><td class="py-2 pr-3">Tone</td><td class="py-2 pr-3">Hypotonia</td><td class="py-2">Hypertonia</td></tr>
              <tr><td class="py-2 pr-3">Tendon reflex</td><td class="py-2 pr-3">Absent</td><td class="py-2">Hyper-reflexia</td></tr>
              <tr><td class="py-2 pr-3">Muscle wasting</td><td class="py-2 pr-3">Present</td><td class="py-2">Little or no atrophy</td></tr>
              <tr><td class="py-2 pr-3">Fasciculation in affected muscle</td><td class="py-2 pr-3">Present</td><td class="py-2">Absent</td></tr>
              <tr><td class="py-2 pr-3">Ankle clonus</td><td class="py-2 pr-3">No ankle clonus</td><td class="py-2">Present, may or may not be sustained</td></tr>
              <tr><td class="py-2 pr-3">Plantar response</td><td class="py-2 pr-3">Normal</td><td class="py-2">Extensor plantar response (Babinski)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Coordination</strong>
        <p class="text-sm">Methods are: upper limbs - finger to nose test, or rapidly alternating hand tapping test; lower limbs - heel to chin test, or Romberg test.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Gait</strong>
        <p class="text-sm">To assess gait disorder: check the patient's stance in the primary position, then observe the patient walking. Pay attention to step length, the arm swing, and regularity.</p>
      </div>
      </div>
      
      <!-- Gait disorders -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Gait Disorders
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Gait</th>
              <th class="py-2 pr-3 font-medium">Description</th>
              <th class="py-2 font-medium">Causes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 font-medium">Spastic</td><td class="py-2 pr-3">Stiff, circumduction of legs, &plusmn; scuffing of the toe of the shoes</td><td class="py-2">Brain abscess, brain tumour; cerebral palsy, stroke; MS, SACD of the cord</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Shuffling (extrapyramidal)</td><td class="py-2 pr-3">Flexed posture, shuffling feet, slow to start, postural instability</td><td class="py-2">Example: Parkinson's disease</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Apraxic</td><td class="py-2 pr-3">Pathognomonic "gluing-to-the-floor" on attempting walking, or a wide-based, unsteady gait with a tendency to fall, like a novice on an ice-rink</td><td class="py-2">Normal pressure hydrocephalus, multi-infarct states</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Ataxic</td><td class="py-2 pr-3">Wide-based; falls; cannot walk heel-to-toe</td><td class="py-2">Cerebellar lesions (e.g. MS, posterior fossa tumours, alcohol, phenytoin toxicity); proprioceptive sensory loss (e.g. sensory neuropathies, Vitamin B12 deficiency) - often worse in the dark, or with eyes closed</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Myopathic (waddling)</td><td class="py-2 pr-3">Waddle (hip girdle weakness). Cannot climb steps or stand from sitting</td><td class="py-2">-</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Psychogenic</td><td class="py-2 pr-3">Often a bizarre gait not conforming to any pattern of organic gait disturbance. Suspect if there is profound gait disturbance with inability even to stand, without any signs when examined on the couch</td><td class="py-2">This may occur with midline cerebellar lesions, normal pressure hydrocephalus, and rare tumours</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- Sensory system -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Sensory System
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Modality</th>
              <th class="py-2 font-medium">Test</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Tactile</td><td class="py-2">Use cotton wool</td></tr>
            <tr><td class="py-2 pr-3">Position sense</td><td class="py-2">Ask the patient to close their eyes, move a toe up or down, and ask if it is up or down</td></tr>
            <tr><td class="py-2 pr-3">Vibration</td><td class="py-2">Tuning fork</td></tr>
            <tr><td class="py-2 pr-3">Pain</td><td class="py-2">Superficial - use a pin; deep - pressure on the Achilles tendon</td></tr>
            <tr><td class="py-2 pr-3">Temperature</td><td class="py-2">Warm/cold test tubes</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A preserved ability to wrinkle the forehead in a facial droop points to a UMN lesion; loss of the whole side of the face points to LMN - this single test localises the lesion immediately.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use Weber's and Rinne's together, not alone - Rinne distinguishes conductive from sensorineural loss in each ear, and Weber confirms which ear is actually affected.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Reflex, tone, and wasting findings together separate an LMN from a UMN lesion far more reliably than weakness alone, since weakness is present in both.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Recognise the specific gait pattern rather than describing gait generically - "wide-based and falls, worse with eyes closed" points specifically toward a proprioceptive or cerebellar cause, and each gait pattern narrows the differential meaningfully.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Test cranial nerves in a fixed order every time (I through XII) - skipping around under time pressure is how a deficit gets missed.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Macleod's Clinical Examination - cranial nerve and motor system examination technique.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Teasdale G, Jennett B - Assessment of Coma and Impaired Consciousness: A Practical Scale.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'exam-respiratory',
        title: 'Respiratory Examination',
        category: 'Physical Examination',
        subCategory: 'Internal Medicine',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Respiratory System Examination</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Physical Examination</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Respiratory System Examination</h1>
        <p class="text-sm text-indigo-200">The respiratory examination follows the standard inspection-palpation-percussion-auscultation sequence, but the real skill is in matching what you hear to a specific mechanism rather than just naming a sound. This guide covers the full technique, front to back, with a reference table mapping each abnormal breath sound to its description and most likely causes.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      General Approach
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Expose the patient from the neck to the groin area. Then proceed with inspection, palpation, percussion, and finally auscultation.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Inspection
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Count the respiratory rate (normal respiratory rate in adults is 12-20 cycles/min).</li>
        <li>Look for features of respiratory distress: flaring of alae nasi; chest recessions (supraclavicular, suprasternal, sternal, intercostal, subcostal, and lower chest wall in-drawings).</li>
        <li>Check for chest symmetry, both from the side and from the foot of the bed.</li>
        <li>Look for any abnormalities like pectus excavatum, pectus carinatum, barrel chest, etc.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Palpation
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">T - Tracheal position.</span></li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">E - Expansion of the chest.</span> Tested for in the upper, middle, and lower zones of the lung over the chest.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">T - Tactile fremitus.</span> Use the ulnar side of your palm and ask the patient to say "99" or "moin-moin." Tested for in the upper (left and right), middle (2 left and right), and lower zones (left and right) of the lung anteriorly, and middle (left and right) and lower zones (left and right) laterally.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Percussion
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Percuss in an orderly fashion as for tactile fremitus, i.e. anteriorly and laterally.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Normal is resonant.</li>
        <li>Hyperresonant - in emphysema, pneumothorax.</li>
        <li>Dullness - in lung consolidation, collapse, fibrosis, pleural thickening.</li>
        <li>Stony dull - pleural effusion.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Auscultation
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>In an orderly fashion, over the lung zones, and listen for breath sound. Normal is vesicular. Bronchial sound may be heard in consolidation (pneumonia), fibrosis. Rhonchi are heard in asthma, COPD.</li>
        <li>Also listen for air entry (may be reduced in lung consolidation, lung fibrosis, etc.).</li>
        <li>Added sound - fine crepitation is heard in pulmonary oedema; coarse creps is heard in pneumonia.</li>
        <li>Vocal resonance - say "99" (similar to tactile fremitus).</li>
      </ul>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">N.B.</span> Finish with the anterior chest first, then posteriorly, repeating these steps - chest wall expansion, tactile fremitus, percussion, auscultation.</p>
      </div>
      </div>
      
      <!-- Abnormal sounds table -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Abnormal Breath Sounds Reference
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Abnormal sound</th>
              <th class="py-2 pr-3 font-medium">Description</th>
              <th class="py-2 font-medium">Causes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 font-medium">Bronchial breath sounds</td><td class="py-2 pr-3">Inspiratory and expiratory components are of equal length, with a short gap preceding expiration</td><td class="py-2">Consolidation, e.g. pneumonia, pulmonary fibrosis</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Amphoteric breath sound</td><td class="py-2 pr-3">A variant of bronchial breath sound</td><td class="py-2">Cavitation within the lungs</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Crackles</td><td class="py-2 pr-3">Short explosive sounds, often bubbling or clicking, usually due to sudden changes in gas pressure (sudden opening of previously closed small airways), usually evident at the height of inspiration</td><td class="py-2">Chronic obstructive pulmonary disease (COPD); bronchiectasis; bronchopneumonia</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Crepitation</td><td class="py-2 pr-3">Are like crackles but the sound is fine in character</td><td class="py-2">Pulmonary oedema; pulmonary fibrosis</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Wheeze and rhonchi</td><td class="py-2 pr-3">Musical sound associated with small airway narrowing on expiration. Wheeze is heard without a stethoscope, while rhonchi is heard with a stethoscope</td><td class="py-2">Asthma; COPD</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Stridor</td><td class="py-2 pr-3">Large airway obstruction, usually inspiratory, could be heard with or without a stethoscope</td><td class="py-2">Laryngeal disease; localised tracheal or laryngeal airway narrowing</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Pleural rub</td><td class="py-2 pr-3">Cracking or rubbing sound felt on palpation or audible with a stethoscope, usually associated with pleuritic pain, but the sound disappears when a pleural effusion ensues</td><td class="py-2">Pleural inflammation</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always finish the anterior and lateral chest before moving posteriorly, repeating the full expansion-fremitus-percussion-auscultation sequence each time.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Distinguish wheeze (audible without a stethoscope) from rhonchi (heard with one) - both reflect small airway narrowing, but the distinction is worth stating precisely.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A pleural rub that disappears once effusion develops is a genuinely useful bedside clue to disease progression, not a sign the pathology has resolved.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Bronchial breath sounds over a peripheral lung zone are abnormal - normal vesicular sound is what should be heard there, so their presence itself signals underlying consolidation.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Bailey and Love's Short Practice of Surgery / Macleod's Clinical Examination - respiratory examination technique and abnormal breath sound classification.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'exam-cardiovascular',
        title: 'Cardiovascular Examination',
        category: 'Physical Examination',
        subCategory: 'Internal Medicine',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Cardiovascular System Examination</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Physical Examination</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Cardiovascular System Examination</h1>
        <p class="text-sm text-indigo-200">A systematic CVS examination moves from general inspection through the pulse, blood pressure, JVP, and precordium, to auscultation - and closes by checking the lungs and liver for evidence of failure. This guide covers the full sequence, with reference tables mapping abnormal pulses and abnormal heart sounds to their clinical implications.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      General Approach
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">The examination of the CVS should be systematic and proceed as follows: general examination, pulse, blood pressure, jugular venous pressure, inspection of the precordium, location of the apex beat, palpation of the precordial area, auscultation of the heart, auscultation of the base of the lungs at the posterior chest wall, and checking for tender hepatomegaly on the abdomen.</p>
      <p class="text-sm">Introduce yourself to the patient, and recline the patient at 45&deg;.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      General Examination
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Look for pallor, cyanosis, proptosis (thyroid disease), signs of hyperlipidaemia (corneal arcus, xanthelasma, tendon xanthomas), finger and toe clubbing (Tetralogy of Fallot, subacute endocarditis), splinter haemorrhage (infective endocarditis), and pedal oedema.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Pulse
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Arterial pulses should be palpated for evaluation of rate, rhythm, character, symmetry, volume, and thickness.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Rate</strong>
        <p class="text-sm">Varies with the age of the patient. Adult rate between 60-100 beats per minute is normal.</p>
        <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Bradycardia (rate &lt; 60 bpm when awake, or &lt; 50 bpm when asleep):</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li><span class="font-medium">Physiological:</span> trained athlete, sleep.</li>
          <li><span class="font-medium">Pathological:</span> conduction pathway block (SA node block, AV node block); hypothyroidism, hypothermia, raised intracranial pressure; drugs - use of beta-blockers, excessive dosage of digitalis.</li>
        </ul>
        <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Tachycardia (rate &gt; 100 bpm):</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li>Fever, anaemia, excessive blood loss.</li>
          <li>Drugs - sympathomimetics (adrenaline, noradrenaline, etc.), atropine, digoxin.</li>
          <li>Heart failure, myocardial infarction.</li>
          <li>Thyrotoxicosis, phaeochromocytoma.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Rhythm</strong>
        <p class="text-sm">Could be regular or irregular. Irregular rhythm could also be regularly irregular (e.g. ectopic beats) or irregularly irregular (e.g. atrial fibrillation).</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Symmetry</strong>
        <p class="text-sm">Symmetry of the radial, brachial, carotid, femoral, popliteal, and pedal (tibialis posterior and dorsalis pedis) pulses should be confirmed. Comparisons should be made between the femoral and radial pulses - when the femoral pulse is delayed and weaker, there's obstruction along the aorta at a point distal to the origin of the subclavian vessels. This is frequently due to coarctation of the aorta.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Volume and Character</strong>
        <p class="text-sm"><span class="font-medium">Volume</span> - small, normal, large. <span class="font-medium">Character</span> - a normal pulse has an upstroke followed by a downstroke.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Thickness</strong>
        <p class="text-sm">Check for a thickened arterial wall and locomotor brachialis.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Blood Pressure
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">After measuring while sitting, ask the patient to stand for some minutes and then measure while standing. Orthostatic hypotension is when the drop in BP while standing is &gt; 20 mmHg (systolic) or &gt; 10 mmHg (diastolic).</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Jugular Venous Pressure and Precordium
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Inspection of the Precordium</strong>
        <p class="text-sm">Look for bulging and hyperactivity.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Location of the Apex Beat</strong>
        <p class="text-sm">The apex beat is defined as the lowest and most lateral point at which the cardiac impulse can be palpated. It is normally located in the 5th intercostal space, mid-clavicular line.</p>
        <p class="text-sm mt-2">A displaced apex beat might be due to cardiac enlargement, deformities of the thoracic cage (e.g. scoliosis), or a shift in the mediastinum.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Palpation of the Precordial Area
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Palpate for apical and parasternal heave. Seen in left ventricular hypertrophy (LVH) and right ventricular hypertrophy (RVH) respectively.</li>
        <li>Palpate for thrills (palpable murmur) on the four valvular areas.</li>
      </ul>
      <div class="overflow-x-auto mt-2">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Thrill</th>
              <th class="py-2 font-medium">Suggests</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Systolic thrill at the apex</td><td class="py-2">Mitral regurgitation</td></tr>
            <tr><td class="py-2 pr-3">Diastolic thrill at the apex</td><td class="py-2">Mitral stenosis</td></tr>
            <tr><td class="py-2 pr-3">Systolic thrill over the pulmonary area</td><td class="py-2">Pulmonary stenosis</td></tr>
            <tr><td class="py-2 pr-3">Systolic thrill in the aortic area</td><td class="py-2">Aortic stenosis</td></tr>
            <tr><td class="py-2 pr-3">Systolic thrill at the lower part of the left parasternal area</td><td class="py-2">Ventricular septal defect</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Auscultation of the Heart
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Listen for S1, S2, S3, S4.</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium">S1</span> - closure of the AV valves (mitral and tricuspid valves).</li>
        <li><span class="font-medium">S2</span> - closure of the semilunar valves (aortic and pulmonary valves).</li>
        <li><span class="font-medium">S3</span> - early diastolic sound caused by rapid filling of the ventricles. Physiologic in young people and pregnant women, but pathologic after 40 years. Also occurs in high-output states caused by anaemia, fever, pregnancy.</li>
        <li><span class="font-medium">S4</span> - late diastole sound caused by atrial contraction. Could be physiologic after 50 years, but audible S4 is pathological, caused by a stiff, hypertrophied ventricle (hypertension, aortic stenosis, hypertrophic cardiomyopathy).</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Auscultation of the Base of the Lungs, and Checking for Tender Hepatomegaly
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Auscultate the base of the lungs at the posterior chest wall - fine crepitations (crackles) are present at the base of the lungs in pulmonary oedema.</p>
      <p class="text-sm mt-2">Check for tender hepatomegaly on the abdomen - the liver is enlarged and may be tender in right-sided heart failure.</p>
      </div>
      
      <!-- Abnormal pulses table -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Abnormal Pulses and Their Implications
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Pulse abnormality</th>
              <th class="py-2 pr-3 font-medium">Description</th>
              <th class="py-2 font-medium">Implication</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 font-medium">Collapsing pulse (water hammer, cannon ball, pulsus celer)</td><td class="py-2 pr-3">Volume is large with rapid upstroke and downstroke; patients usually have visible carotid pulsation</td><td class="py-2">Aortic regurgitation, fistulae, PDA; hyperkinetic states - thyrotoxicosis, anaemia, fever, pregnancy, beriberi</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Delay (radio-femoral)</td><td class="py-2 pr-3">Delayed or weaker femoral pulse compared to radial - usually symmetrical</td><td class="py-2">Coarctation of the aorta</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Pulselessness</td><td class="py-2 pr-3">Pulsation cannot be felt, usually absence of upper limb pulsation bilaterally, but lower limb pulse is preserved (reversed coarctation of aorta)</td><td class="py-2">Takayasu disease (pulseless disease); atherosclerosis; thromboembolism; aortic dissection (less common)</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Regularly irregular</td><td class="py-2 pr-3">Basically regular but interrupted by occasional irregularity</td><td class="py-2">Ectopic beats</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Irregularly irregular</td><td class="py-2 pr-3">Completely irregular rhythm</td><td class="py-2">Atrial fibrillation; frequent ectopics</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Slow pulse</td><td class="py-2 pr-3">Pulse rate &lt; 60/min - called bradycardia</td><td class="py-2">Complete heart block (&lt; 40/min); athletic fitness; drugs - digitalis, beta-blockers; hypothyroidism; raised intracranial pressure; vasomotor syncope</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Fast pulse</td><td class="py-2 pr-3">&gt; 100/min - called tachycardia</td><td class="py-2">Emotional problems; thyrotoxicosis; anaemia; excess fluid or blood loss; drugs - atropine or sympathomimetics</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Small volume</td><td class="py-2 pr-3">Due to obstruction to blood flow in the heart or vessels, pump failure, or hypovolaemia</td><td class="py-2">Aortic stenosis; pulmonary embolism; heart failure; blood or fluid loss</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Paradoxical pulse (pulsus paradoxus)</td><td class="py-2 pr-3">An inspiratory decline in systolic pressure greater than 10 mmHg</td><td class="py-2">Cardiac tamponade; constrictive pericarditis; obstructive pulmonary disease; pericardial effusion; endomyocardial fibrosis</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- Abnormal heart sounds table -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Abnormal Heart Sounds and Their Implications
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Heart sound</th>
              <th class="py-2 pr-3 font-medium">Description</th>
              <th class="py-2 pr-3 font-medium">Abnormal variant</th>
              <th class="py-2 font-medium">Implication</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3 font-medium">S1 (first heart sound)</td><td class="py-2 pr-3">Closure of the AV valve at onset of systole</td><td class="py-2 pr-3">Accentuation</td><td class="py-2">Mitral stenosis</td></tr>
            <tr><td class="py-2 pr-3 font-medium">S2 (second heart sound)</td><td class="py-2 pr-3">Closure of pulmonary and aortic valve following ventricular ejection</td><td class="py-2 pr-3">Exaggerated splitting</td><td class="py-2">Right bundle branch block</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Reversed splitting</td><td class="py-2">Left bundle branch block; aortic stenosis</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Fixed splitting</td><td class="py-2">Atrial septal defect</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Single, absent aortic component</td><td class="py-2">Severe aortic stenosis</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Single, absent pulmonary component</td><td class="py-2">Severe pulmonary stenosis; Tetralogy of Fallot</td></tr>
            <tr><td class="py-2 pr-3 font-medium">S3 (third heart sound, abnormal)</td><td class="py-2 pr-3">Could be physiologic in children, young adults &lt; 40 years, hyperkinetic states (fever, anaemia, pregnancy, thyrotoxicosis)</td><td class="py-2 pr-3">After 40 years</td><td class="py-2">Left ventricular failure; mitral regurgitation; constrictive pericarditis</td></tr>
            <tr><td class="py-2 pr-3 font-medium">S4 (abnormal sound)</td><td class="py-2 pr-3">Sometimes in the elderly &gt; 40 years, low frequency, heard late in diastole, gives a gallop rhythm</td><td class="py-2 pr-3">-</td><td class="py-2">Hypertension; aortic stenosis; hypertrophic cardiomyopathy</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Systolic clicks and opening snaps</td><td class="py-2 pr-3">Silent and should not be heard</td><td class="py-2 pr-3">Heard in early systole preceding an ejection murmur</td><td class="py-2">Aortic stenosis; congenital bicuspid aortic valve</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Later in systole, particularly when the sound is followed by a murmur</td><td class="py-2">Mitral valve prolapse</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Early diastole, preceding a mid-diastolic murmur</td><td class="py-2">Mitral stenosis</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Murmurs</td><td class="py-2 pr-3">Increased flow through a valve, could be physiologic or innocent (usually mid-systolic timing)</td><td class="py-2 pr-3">Mid-systolic or ejection systolic murmur</td><td class="py-2">Aortic or pulmonary valve stenosis</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Pansystolic murmur</td><td class="py-2">Mitral or tricuspid regurgitation; ventricular septal defect</td></tr>
            <tr><td class="py-2 pr-3"></td><td class="py-2 pr-3"></td><td class="py-2 pr-3">Diastolic murmur</td><td class="py-2">Mitral stenosis; aortic or pulmonary regurgitation; tricuspid stenosis (rarely, at the tricuspid area)</td></tr>
            <tr><td class="py-2 pr-3 font-medium">Continuous venous hums at the base of the heart</td><td class="py-2 pr-3">Hyperkinetic states in infants; disappear on lying flat</td><td class="py-2 pr-3">Friction rub and hums</td><td class="py-2">Pericarditis</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A radio-femoral delay should specifically raise coarctation of the aorta - check for it explicitly, not just note "pulses palpable."</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>An S3 is physiological under 40 and often pathological over 40 - age changes how the same sound should be interpreted.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Systolic clicks and opening snaps should never be heard normally - their presence, and their exact timing within systole or diastole, localises the underlying valve lesion.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always complete the exam by checking the lung bases and the liver - a cardiac exam that stops at the precordium misses the evidence of failure it's often trying to find.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check for orthostatic hypotension explicitly (sitting then standing) rather than a single seated reading, particularly when syncope or dizziness is part of the presentation.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Macleod's Clinical Examination - cardiovascular examination technique, pulse and heart sound classification.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Bailey and Love's Short Practice of Surgery - vascular and pulse examination reference.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'exam-abdominal',
        title: 'Abdominal Examination',
        category: 'Physical Examination',
        subCategory: 'Internal Medicine',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Abdominal Examination</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Physical Examination</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Abdominal Examination</h1>
        <p class="text-sm text-indigo-200">A full abdominal examination goes well beyond "soft, non-tender" - organ-specific palpation technique, percussion patterns, and a proper ascites work-up all carry real diagnostic weight. This guide covers inspection through auscultation, with dedicated technique for the spleen, liver, kidneys, and bladder, and the full shifting dullness/fluid thrill sequence for detecting ascites.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      General Approach
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Extent of exposure should be from the nipple line to the pubic symphysis.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Inspection
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Inspect the shape of the abdomen from the foot of the bed and both sides of the bed. Normal contour is full or flat.</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Generalised distention:</span> the 5 Fs - food, fluid, flatus, foetus, and fat.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Localised distention:</span> hernia, organomegaly, obstruction.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Scaphoid (sunken):</span> starvation, malignancy.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Movement of the abdominal wall:</span> normally moves with respiration. Reduced or absent (still, silent abdomen) suggests generalised peritonitis. Visible pulsation in the epigastrium suggests abdominal aorta (aneurysm). Visible peristaltic waves suggest pyloric obstruction, congenital pyloric stenosis, or obstruction of the distal small bowel.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Umbilicus:</span> in normal conditions, slightly retracted and inverted. Everted in umbilical hernia. Smiling and everted in ascites. Omphalolith, though rare, may be found in elderly obese people.</li>
      </ul>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Skin of the Abdomen</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Smooth and shiny if markedly distended.</li>
          <li>Visible superficial veins - seen in IVC obstruction, caput medusae (portal hypertension).</li>
          <li>Scars and scarification marks - note the site and describe the appearance briefly.</li>
          <li>Note hair distribution: female (inverted triangle - apex downward); male (apex upward, reaching the abdomen). Female pattern of distribution in a male can indicate chronic liver disease; a male pattern of distribution in a female may indicate some degree of virilisation.</li>
          <li>Hernia orifices - ask the patient to cough with their face away from the examiner, and note if there is a bulging mass (both on standing and lying down).</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Genitalia</strong>
        <p class="text-sm">Ask for permission to examine the genitalia. Expose to mid-thigh, inspect the genitalia for swellings or irregularities, then cover up the groin area back to the level of the pubic symphysis.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Palpation
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">The patient should be relaxed - reassure the patient, enquire about any site of pain, and palpate that site last.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Procedure for Palpation</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Hold your hand flat and relaxed, moulded to the abdominal wall.</li>
          <li>Apply gentle but firm pressure with slight flexion at the metacarpophalangeal joint.</li>
          <li>Look at the patient's face while palpating to ensure there is no pain.</li>
        </ul>
        <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
          <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">N.B.</span> Do not poke suddenly with fingertips. Ask the patient to breathe deeply, or distract them, to relax a tensed abdomen.</p>
        </div>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li>Start from the right iliac fossa (RIF) and end at the umbilicus or the site of pain.</li>
          <li><span class="font-medium">Light palpation:</span> for tenderness. The abdomen is rigid and tender to palpation in peritonitis, and elastic and resistant to palpation in TB enteritis.</li>
          <li><span class="font-medium">Deep palpation:</span> for organomegaly. The spleen and liver are palpable if enlarged.</li>
        </ul>
        <p class="text-sm mt-2"><span class="font-medium">N.B.</span> For any swelling palpated, note the following: site, size, shape, surface, edge, consistency, if tender, mobility.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      The Spleen
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Pattern of enlargement is from the left hypochondriac region to the right iliac fossa.</p>
      <p class="text-sm"><span class="font-medium">Massive splenomegaly:</span> size &gt; 20cm, or &gt; 8cm below the costal margin.</p>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">Causes of massive splenomegaly:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li><span class="font-medium">Infections:</span> parasites - tropical splenomegaly syndrome, kala-azar (visceral leishmaniasis); virus - infectious mononucleosis.</li>
        <li><span class="font-medium">Malignancies:</span> AML, ALL, CML, CLL, polycythaemia vera; leukaemias, lymphomas.</li>
        <li><span class="font-medium">Infiltrative disease:</span> e.g. myelofibrosis, Gaucher's disease.</li>
      </ul>
      <p class="text-sm mt-2">Other causes of an enlarged spleen (not massive) are: abscess, TB, sarcoidosis, hydatid cyst, etc.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      The Liver
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Pattern of enlargement is from the right hypochondriac region to the right iliac fossa.</p>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">Note the consistency of the liver:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Soft (tender) - heart failure.</li>
        <li>Firm and regular - cirrhosis.</li>
        <li>Hard, irregular, painless - secondary cancer.</li>
      </ul>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">Causes of an enlarged liver:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Liver pathology, e.g. liver cancer.</li>
        <li>Congestive heart failure.</li>
        <li>Infections - abscess, TB, malaria, schistosomiasis, hydatid disease.</li>
        <li>Haematologic - sickle cell disease, thalassaemia.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      The Kidneys and Bladder
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Palpating for the Kidneys</strong>
        <p class="text-sm">Ballotable when low in position (left kidney), or enlarged - i.e. can be pushed from one hand to the other. Ballotable kidneys can be seen in renal cell cancer.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Bladder</strong>
        <p class="text-sm">Palpable only when enlarged, as a suprapubic, smooth, firm, regular, oval swelling. Causes of distension: urinary retention, etc.</p>
        <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Characteristics of an enlarged bladder:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li>Symmetric suprapubic swelling.</li>
          <li>You can get above and laterally, but not below it.</li>
          <li>Upper border may reach the umbilicus.</li>
          <li>Pressure on it causes desire for micturition.</li>
          <li>Dull to percussion.</li>
        </ul>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Detection of the Pattern of Blood Flow in Obstruction
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">This is also done on palpation. Empty a segment of a visible superficial vein by massage, and occlude it for a few seconds. If the direction of refill is upwards, this indicates IVC obstruction; and vice versa indicates SVC obstruction.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Percussion
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Normal percussion note is: liver - dull; other areas - tympanitic.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Confirming Liver Span</strong>
        <p class="text-sm">Confirms liver length: from the 5th ICS to the right costal margin (RCM). Normal is 8-12cm as elicited by dullness.</p>
        <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Technique:</p>
        <p class="text-sm">Locate the manubriosternal joint, which corresponds to the second rib. Percuss the intercostal spaces starting with the one below the second rib (2nd ICS). Dull percussion notes are normally heard from around the 5th ICS to the RCM.</p>
        <p class="text-sm mt-2">Reduced dullness: severe emphysema, large pneumothorax, post-laparotomy or laparoscopy.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Confirming Enlarged Spleen and Bladder</strong>
        <p class="text-sm"><span class="font-medium">Confirming an enlarged spleen:</span> dull percussion note extending from the lower ribs to the lumbar region. <span class="font-medium">Confirming an enlarged bladder:</span> dull percussion note in the suprapubic region.</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Demonstration of Ascites</strong>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200">Shifting dullness:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Place your left hand in the longitudinal axis on the midline. Percuss laterally to the left and right flanks - a dull percussion note is heard.</li>
        <li>The patient is turned towards the examiner to lie in the right lateral position; wait a few seconds.</li>
        <li>Percuss the left flank - a resonant percussion note is heard.</li>
        <li>Turn the patient to the other side to lie in the left lateral position; wait a few seconds.</li>
        <li>Percuss the right flank - a resonant percussion note is heard.</li>
        <li>Dullness is felt on dependent sites due to movement of fluid via gravity.</li>
        <li>Shifting dullness can be confirmed by finding the right border of dullness when the patient is facing the left.</li>
      </ul>
      <p class="text-sm mt-2">For fluid &gt; 1.5L, demonstrate a fluid thrill.</p>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">Fluid thrill:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
        <li>Place one hand over the lumbar region.</li>
        <li>An assistant should place the side of their hand longitudinally in the midline.</li>
        <li>Tap the opposite lumbar region - a fluid thrill is felt on the opposite hand.</li>
      </ul>
      <p class="text-sm mt-2 italic">N.B. The effect of the assistant's hand is to dampen any impulse that may be transmitted through the fat of the abdominal wall.</p>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">Puddle sign:</p>
      <p class="text-sm">For fluid 120-500mL, but not widely practiced due to its discomforting nature.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Renal Angle Tenderness
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Tell the patient to sit up. Gently hit each flank, and notice if the patient feels pain.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">10</span>
      Auscultation
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Bowel Sounds</strong>
        <p class="text-sm">Place the stethoscope at McBurney's point (2/3 of the distance from the umbilicus to the ASIS) and listen for three minutes.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li><span class="font-medium">Normoactive:</span> 2-3 sounds/min.</li>
          <li><span class="font-medium">Hyperactive:</span> hungry, simple acute mechanical obstructions.</li>
          <li><span class="font-medium">Reduced or absent:</span> obstruction causing necrosis of the small bowel, generalised peritonitis.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Succussion Splash</strong>
        <p class="text-sm">Place the stethoscope over the epigastrium. Strike the patient from side to side - a splashing sound is heard if the stomach is distended with fluid.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Vascular Bruits</strong>
        <p class="text-sm">Listen for vascular bruits - relevant in suspected renal artery stenosis or aortic pathology.</p>
      </div>
      <p class="text-sm">Finally, do a digital rectal examination where clinically indicated.</p>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always look at the patient's face during palpation, and palpate a painful site last - both matter for getting an accurate, cooperative examination.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Liver consistency (soft/tender vs firm/regular vs hard/irregular) narrows the cause meaningfully - heart failure, cirrhosis, and malignancy each have a distinct feel.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Shifting dullness detects ascites at much lower volumes than a fluid thrill - reserve the fluid thrill for when a larger volume (&gt;1.5L) is already suspected.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>An enlarged bladder classically cannot be palpated below - if you can get below a suprapubic swelling, reconsider the diagnosis.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Reduced or absent bowel sounds is a more urgent finding than hyperactive sounds - it points toward necrosis or peritonitis rather than simple mechanical obstruction.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Macleod's Clinical Examination - abdominal examination technique and organ palpation reference.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Bailey and Love's Short Practice of Surgery - splenomegaly and hepatomegaly classification.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'exam-pediatrics',
        title: 'Physical Examination in Pediatrics',
        category: 'Physical Examination',
        subCategory: 'Pediatrics',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Physical Examination in Pediatrics</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Physical Examination</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Physical Examination in Pediatrics</h1>
        <p class="text-sm text-indigo-200">Paediatric examination adds two things a general medicine clerking doesn't need - anthropometry benchmarked against age, and vital sign ranges that shift meaningfully across the paediatric age spectrum. This guide covers general principles, general examination, anthropometry, and full systemic examination, with the age-related reference tables that make the numbers usable at the bedside.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      General Principles for All Examinations
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Come to the right side of the patient.</li>
        <li>Greet the patient and guardian, and introduce yourself.</li>
        <li>Take consent from the guardian, and from the patient too if old enough.</li>
        <li>Expose the patient very well - i.e. the chest, abdomen, upper and lower limbs. Only cover the genital area.</li>
        <li>Always ask for any area of pain, and look at the patient's face whenever they are touched (even when checking for capillary refill).</li>
        <li>After examination, cover the patient and say thanks.</li>
      </ol>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      General Examination
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Comment on the General Appearance</strong>
        <p class="text-sm">Age (acutely or chronically ill-looking), and mental state (conscious, drowsy, or comatose) - e.g. "a conscious, chronically ill-looking child evidenced by...".</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Evidence of acute illness:</span> pain, respiratory distress, irritability, lethargy, toxic-looking.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Evidence of chronic illness:</span> obvious muscle wasting, bony prominences, hanging skin folds.</li>
          <li>Look at the bedside and foot of the bed for: position or posture of the patient (cardiac position in heart failure, tripod position in epiglottitis/meningitis), decorticate (flexion of limbs) or decerebrate (extension) posture, any deformity, obesity, swelling, scarification marks, IV line or urinary catheter in situ.</li>
        </ul>
        <p class="text-sm mt-2"><span class="font-medium">N.B.</span> Only report a finding if present; don't report its absence.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Hair</strong>
        <p class="text-sm">Look for fluffiness, and feel for grittiness.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Eyes</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Pallor - conjunctiva.</li>
          <li>Jaundice - sclera.</li>
          <li>Swollen face - look for it.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Buccal Cavity and Tongue</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Central cyanosis, pallor, dehydration.</li>
          <li>Open the mouth and comment on oral hygiene - good or bad?</li>
          <li>Bring out the tongue, then look for dehydration on the surface of the tongue (dry surface indicates dehydration). Roll it up and ask the patient to retract the lower lip without the finger touching the mucosa, then look for cyanosis and pallor. Close the mouth.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Skin</strong>
        <p class="text-sm">Turgor, for dehydration - using your thumb and index finger, draw up the skin over the abdomen for about 3 seconds and release (slow to return if dehydrated).</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Hand</strong>
        <p class="text-sm">Pallor, capillary refill, clubbing, cyanosis.</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Pallor (palmar surface):</span> check for paleness of the palms. Bring the patient's hands together and compare with the closest relative's.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Capillary refill (dorsal surface):</span> press the fingernail and see how fast the blood refills (normal &lt; 2s).</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Clubbing:</span> (i) press the nail bed for fluctuancy for both hands; (ii) bring the two hands together and place the palmar surface on your left hand, bend down to the level, inspect from the lateral side, and look for convexity of the nail; (iii) oppose the dorsal surface of corresponding finger nails to check for the diamond-shaped window - lost if the finger is clubbed (Schamroth's test).</li>
        </ul>
        <div class="overflow-x-auto mt-3">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Grade</th>
                <th class="py-2 font-medium">Finding</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">1</td><td class="py-2">No visible clubbing - fluctuation and softening of the nail bed only</td></tr>
              <tr><td class="py-2 pr-3">2</td><td class="py-2">Mild clubbing - loss of angle between nail bed and nail fold (Lovibond angle); diamond-shaped window is lost</td></tr>
              <tr><td class="py-2 pr-3">3</td><td class="py-2">Moderate - increased convexity of the nail fold</td></tr>
              <tr><td class="py-2 pr-3">4</td><td class="py-2">Gross clubbing - thickening of the whole distal finger (drumstick appearance)</td></tr>
              <tr><td class="py-2 pr-3">5</td><td class="py-2">Hypertrophic osteoarthropathy - shiny aspect and striation of nail and skin</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Causes of clubbing:</span> lung disease (suppurative disease - lung abscess, empyema, bronchiectasis, cystic fibrosis; complicated TB; lung cancer, mainly non-small cell); cardiovascular (congenital cyanotic heart disease, e.g. Tetralogy of Fallot; subacute bacterial endocarditis); GIT (malabsorption syndrome, liver cirrhosis).</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Lower Limbs</strong>
        <p class="text-sm">Capillary refill, clubbing, oedema. Sites for checking pedal oedema are on bony prominences, e.g. dorsum of foot (tarsal bone and medial malleoli), leg (mid tibia bone anteriorly), knee, thigh, and sacrum, in ascending manner.</p>
        <p class="text-sm mt-2">Check whether the landmark is positive: (i) press the tarsal bone on the dorsum of both feet with your thumb for about 5 seconds and look at the patient's face for any tenderness; (ii) ensure your thumbs are at the same level; (iii) remove your hand over it to see if there is any depression; (iv) move to the medial malleoli and press; (v) if positive, ascend to the leg, etc.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Regional Lymph Nodes</strong>
        <p class="text-sm">Start with the head and neck region - has 8 groups, 5 anteriorly and 3 posteriorly. Examine the anterior group from the back of the patient, starting from submental &rarr; submandibular &rarr; pre-auricular &rarr; anterior cervical (both upper and lower group) &rarr; supraclavicular (ask the patient to shrug their shoulder, then palpate the SVC space). Examine the posterior group from the front - occipital &rarr; post-auricular &rarr; posterior cervical (upper and lower).</p>
        <p class="text-sm mt-2">Tell the patient to lie down on their back and check the 5 groups in the axillary region: rest the upper limb on your left (examining) hand to make the patient comfortable, then check medial &rarr; anterior &rarr; posterior &rarr; apical group; change the hand and check the lateral group.</p>
        <p class="text-sm mt-2">Palpate the epitrochlear group at the epitrochlear region, and the inguinal region.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Term</th>
                <th class="py-2 font-medium">Definition</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Significant lymphadenopathy</td><td class="py-2">Inguinal node size &ge; 2cm; any size in the epitrochlear region; &gt; 1-1.5cm for others</td></tr>
              <tr><td class="py-2 pr-3">Generalised</td><td class="py-2">&ge; 2 non-contiguous site lymphadenopathy</td></tr>
              <tr><td class="py-2 pr-3">Persistent</td><td class="py-2">Generalised lymphadenopathy persisting for more than 3 months</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <p class="text-sm text-rose-900 dark:text-rose-300 mb-2 font-medium">Worrisome features of lymphadenopathy:</p>
      <ul class="space-y-2 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Cervical node &gt; 2cm</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Supraclavicular location</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Lack of associated infectious symptoms</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span>Hard, firm, or matted consistency of enlarged nodes</span></li>
      </ul>
      <p class="text-sm text-rose-900 dark:text-rose-300 mt-3">Do a thorough general examination from head to toe and comment appropriately.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Anthropometry
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">(a) Occipito-Frontal Circumference (OFC)</strong>
        <p class="text-sm">Locate and palpate the occiput and the sinciput. Place the tape, cm surface down, over the occiput, bring it forward, and make sure it is taut. Turn to the cm surface and measure.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li>Normal at birth for a term baby = 35 &plusmn; 2cm.</li>
          <li><span class="font-medium">1st year:</span> 1st 2 months of life, increase by 4cm; next 2 months by 3cm; next 2 months by 2cm; next 6 months by 1cm every 2 months. Thus 4+3+2+1+1+1 = 12cm gained in the 1st year.</li>
          <li>2nd and 3rd year - increase by 2cm each.</li>
          <li>4th and 5th year - increase by 1.5cm each.</li>
          <li>6th and 7th year - increase by 1cm each.</li>
          <li>By the end of the 7th year, the adult size is reached: 56 &plusmn; 2cm.</li>
        </ul>
        <p class="text-sm mt-2"><span class="font-medium">Note:</span> for preterm babies, the OFC equalises with a term baby at 18 months.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">(b) Weight</strong>
        <p class="text-sm">Weighing scale: bassinet (use in &lt; 2 years) and beam balance. For the beam balance, adjust the scale to zero (if not possible, note the parallax error), tell the patient to remove their shoe, tell the child to stand on it looking straight, and check your reading.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li>Birth weight for a normal term newborn = 2.5-3.5kg.</li>
          <li>Loses 10% of body weight within the 1st 7 days of life; regains birth weight by the 10th day of life.</li>
          <li>Preterm may lose up to 15% of birth weight, and regains it by the 15th day of life.</li>
          <li>A preterm baby's weight equalises with a term baby's by 24 months.</li>
        </ul>
        <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Weight estimation based on age:</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Age</th>
                <th class="py-2 font-medium">Formula</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">0-3 months</td><td class="py-2">(n - 10) &times; 30 + BW (n = age in days, BW = birth weight)</td></tr>
              <tr><td class="py-2 pr-3">4-12 months</td><td class="py-2">(n + 8) &divide; 2 (n = age in months)</td></tr>
              <tr><td class="py-2 pr-3">1-6 years</td><td class="py-2">2n + 8 (n = age in years)</td></tr>
              <tr><td class="py-2 pr-3">7-12 years</td><td class="py-2">(7n - 5) &divide; 2 (n = age in years)</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">Weight of a patient is expressed as a % of expected.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">(c) Height / Length</strong>
        <p class="text-sm"><span class="font-medium">Height</span> is measured with the patient in the erect position. <span class="font-medium">Length</span> is taken with the patient supine (used in the first 12 months, i.e. infants) - length reads about 1.25cm more than height would, because the effect of gravity reduces joint spaces while standing, and the curvature of the spine seen erect is lost while supine.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Length technique:</span> tell the patient to remove their shoe and stand against a wall; feet touching each other, heels touching the wall; the back must also touch the wall; raise the patient's chin so the occiput touches the wall; place your ruler on the head to touch the wall; measure.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
          <li>At birth, length = 50cm &plusmn; 5cm.</li>
          <li>In the 1st year, the patient gains 25cm: 3.5cm/month (1st 3/12), 2cm/month (2nd 3/12), 1.5cm/month (3rd 3/12), and 1.2cm/month (last 3/12).</li>
          <li>&gt; 1 year: height = 6n + 77 (n = age in years).</li>
          <li>A preterm baby's length equalises with a term baby's at 40 months.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">(d) Chest Circumference</strong>
        <p class="text-sm">Measure at the nipple level and ensure the tape is taut. Is 2-4cm less than OFC at birth. Equal with OFC at 1 year. After 1 year, chest circumference &gt; OFC.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">(e) Mid-Arm Circumference (MAC)</strong>
        <p class="text-sm">Measure the upper arm from the acromion to the olecranon process (palpate for these landmarks before measuring). Note the middle of the length, and measure the MUAC there. Relevant in patients between 1-5 years because MAC is relatively constant in this age group.</p>
        <p class="text-sm mt-2">Shakir's strip can also be used (colour-coded): MAC &lt; 12.5cm, red = malnourished; 12.5-14cm, yellow = borderline malnourished; 14-16cm, green = well nourished.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Systemic Examination: Respiratory System
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Start with the system with the major pathology. For systems with a rate associated with them (e.g. respiratory and cardiovascular), state the rate first - know the correct rate for each system according to age.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Inspection</strong>
        <p class="text-sm">Count the respiratory rate (RR).</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Age</th>
                <th class="py-2 font-medium">Normal RR (breaths/min)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Premature</td><td class="py-2">40-70</td></tr>
              <tr><td class="py-2 pr-3">0-3 months</td><td class="py-2">35-55</td></tr>
              <tr><td class="py-2 pr-3">3-6 months</td><td class="py-2">30-45</td></tr>
              <tr><td class="py-2 pr-3">6-12 months</td><td class="py-2">25-40</td></tr>
              <tr><td class="py-2 pr-3">1-3 years</td><td class="py-2">20-30</td></tr>
              <tr><td class="py-2 pr-3">3-6 years</td><td class="py-2">20-25</td></tr>
              <tr><td class="py-2 pr-3">6-12 years</td><td class="py-2">14-22</td></tr>
              <tr><td class="py-2 pr-3">&gt; 12 years</td><td class="py-2">12-18</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Source: Nelson Textbook of Pediatrics, 19th Edition.</p>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Age-related tachypnoea (fast breathing):</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Age</th>
                <th class="py-2 font-medium">RR (cycles/min)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Birth-2 months</td><td class="py-2">&gt; 60</td></tr>
              <tr><td class="py-2 pr-3">2 months-&le;1 year</td><td class="py-2">&gt; 50</td></tr>
              <tr><td class="py-2 pr-3">1-&le;5 years</td><td class="py-2">&gt; 40</td></tr>
              <tr><td class="py-2 pr-3">5-8 years</td><td class="py-2">&gt; 35</td></tr>
              <tr><td class="py-2 pr-3">8-10 years</td><td class="py-2">&gt; 30</td></tr>
              <tr><td class="py-2 pr-3">10-12 years</td><td class="py-2">&gt; 28</td></tr>
              <tr><td class="py-2 pr-3">&gt; 12 years</td><td class="py-2">&gt; 24</td></tr>
            </tbody>
          </table>
        </div>
      
        <p class="text-sm mt-3"><span class="font-medium text-slate-800 dark:text-slate-200">Features of respiratory distress:</span> flaring of alae nasi; chest recessions (supraclavicular, suprasternal, sternal, intercostal, subcostal, and lower chest wall in-drawings).</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Chest wall symmetry:</span> bend down to the patient's level and look at the bedside and at the foot of the bed. Symmetrical or asymmetrical? Any chest deformity, tube in-situ? Report only if present.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Palpation</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li><span class="font-medium">Tracheal position:</span> can be central or deviated to a side (left or right).</li>
          <li><span class="font-medium">Expansion of the chest:</span> assess all lung zones. Report as equal or reduced on a side.</li>
          <li><span class="font-medium">Tactile fremitus:</span> in an orderly fashion, compare the right and left side of each zone before moving to the next zone. Report as equal or reduced on a side.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Percussion</strong>
        <p class="text-sm">Percuss on the middle phalanx of the middle finger on the chest, ensuring movement of the other hand is from the wrist and not the elbow. Compare left and right. Report as resonant (normal), hyper-resonant (e.g. pneumothorax), dull (consolidation, e.g. pneumonia), or stony dull (pleural effusion). Also done in an orderly fashion.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Auscultation</strong>
        <p class="text-sm">Listen for:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><span class="font-medium">Breath sounds:</span> can be bronchovesicular (normal in 5-6 months of age), vesicular (normal &gt; 6 months of age), bronchial (consolidation).</li>
          <li><span class="font-medium">Air entry:</span> compare all zones - can be equal or reduced on a side.</li>
          <li><span class="font-medium">Added sound:</span> crepitations (fine or coarse), rhonchi, transmitted sound.</li>
          <li><span class="font-medium">Vocal resonance:</span> same as tactile fremitus but heard with the stethoscope. Report the same as tactile fremitus.</li>
        </ul>
        <p class="text-sm mt-2"><span class="font-medium">Note:</span> finish with the anterior and lateral chest wall first, then posteriorly - assessing for expansion, tactile fremitus, percussion, and auscultation.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Systemic Examination: Cardiovascular System
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Put the patient in the cardiac position - raise the bed to an angle of 45&deg;.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Examine the Pulse</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Rate, rhythm, volume (full or reduced).</li>
          <li>Character (bounding, e.g. in anaemia; weak and thready, e.g. in shock).</li>
          <li>Synchronicity with other peripheral pulses (e.g. radio-femoral delay in coarctation of the aorta).</li>
        </ul>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Age</th>
                <th class="py-2 pr-3 font-medium">Heart rate (b/min)</th>
                <th class="py-2 font-medium">BP sys/dias (mmHg)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Premature</td><td class="py-2 pr-3">120-170</td><td class="py-2">55-75/35-45</td></tr>
              <tr><td class="py-2 pr-3">0-3 months</td><td class="py-2 pr-3">100-150</td><td class="py-2">65-85/45-55</td></tr>
              <tr><td class="py-2 pr-3">3-6 months</td><td class="py-2 pr-3">90-120</td><td class="py-2">70-90/50-65</td></tr>
              <tr><td class="py-2 pr-3">6-12 months</td><td class="py-2 pr-3">80-120</td><td class="py-2">80-100/55-65</td></tr>
              <tr><td class="py-2 pr-3">1-3 years</td><td class="py-2 pr-3">70-110</td><td class="py-2">90-105/55-70</td></tr>
              <tr><td class="py-2 pr-3">3-6 years</td><td class="py-2 pr-3">65-110</td><td class="py-2">95-110/60-75</td></tr>
              <tr><td class="py-2 pr-3">6-12 years</td><td class="py-2 pr-3">65-95</td><td class="py-2">100-120/60-75</td></tr>
              <tr><td class="py-2 pr-3">&gt; 12 years</td><td class="py-2 pr-3">55-85</td><td class="py-2">110-135/65-85</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Source: Nelson Textbook of Pediatrics, 19th Edition.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Blood Pressure</strong>
        <p class="text-sm">Use an appropriate cuff - the length of the cuff should be 50% of the upper arm's length, while the breadth should be about 2/3rd of the MUAC.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Jugular Venous Pressure (Older Child)</strong>
        <p class="text-sm">Turn the patient's face to the left side, expose the right neck, and inspect for the prominent jugular vein. Palpating the liver may make it more prominent (hepatojugular reflux). If present, use the two-ruler method to measure it.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Examine the Precordium</strong>
        <p class="text-sm"><span class="font-medium">Inspection:</span> bend down both at the bedside and foot of the bed for activity (hyperactive?), chest symmetry, and bulging.</p>
        <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Palpation</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-1">
          <li><span class="font-medium">Apex beat:</span> (i) locate the area of maximal cardiac activity, starting from the lowermost and outermost area of the left side of the heart; (ii) use a single finger to localise the point; (iii) use the other hand to palpate for the sternal angle (2nd ICS); (iv) count inferiorly through the intercostal spaces to determine the position of the apex. Normal: &le; 4 years, left 4th ICS mid-clavicular line; &gt; 4 years, left 5th ICS mid-clavicular line.</li>
          <li><span class="font-medium">Thrills</span> (palpable murmur) on the 4 valvular areas, using the pulps of 1 or 2 fingers. A thrust is felt if present.</li>
          <li><span class="font-medium">Heaving</span> on the apex and left lower sternal border, using the heel/base of the thenar/hypothenar eminences of the palmar surface of the examining hand. Heaving at the apex and left lower sternal border indicate RVH and LVH respectively.</li>
        </ul>
        <p class="text-sm mt-2 font-medium text-slate-800 dark:text-slate-200">Auscultation</p>
        <p class="text-sm">Insert the ear piece of your stethoscope into your ear and tap the bell and diaphragm to confirm it's functional. Listen to all areas first with the diaphragm for heart sound and character, then with the bell (ideal for murmur).</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li>Mitral valve (apex) - rate, sounds and murmurs.</li>
          <li>Tricuspid (left lower sternal border), pulmonary (2nd left ICS), and aortic area (2nd right ICS) - for murmur.</li>
        </ul>
        <p class="text-sm mt-2"><span class="font-medium">N.B.</span> If a murmur is present, determine the grading (1-6) and the possible direction of radiation.</p>
        <p class="text-sm mt-2">Auscultate the base of the lungs for fine crepitation - pulmonary oedema.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Systemic Examination: Abdominal Examination
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Inspection</strong>
        <p class="text-sm">Inspect by bending to the level of the bed, at both the side and foot of the bed, looking for: flat/full/scaphoid/distended abdomen? Symmetry? Does it move with respiration? Umbilicus - everted or inverted. Scars, incisions, prominent veins (look for these, but only report if present). Hernias at the inguinal region - ask the patient to look towards their left and cough (cough impulse).</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Palpation</strong>
        <p class="text-sm">Ask the patient: is anywhere in the abdomen paining you?</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-2">
          <li><span class="font-medium">Light palpation for tenderness:</span> palpate all 9 regions in an orderly fashion. Also check for renal angle tenderness - give a light blow to the renal angle. <span class="font-medium">N.B.</span> if the patient has a localised pain, gently palpate that point last.</li>
          <li><span class="font-medium">Deep palpation:</span> for organ enlargement and possible other masses at the 9 regions. If an organ is enlarged, characterise its size, surface, consistency, shape, and attachment to the skin and underlying structures. Then feel for liver, spleen, and ballot for kidneys.</li>
          <li>For hepatomegaly and splenomegaly, measure size below the costal margin, ideally using a tape measure (an average adult finger corresponds to about 2cm in width).</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Percussion</strong>
        <p class="text-sm">Measure the liver span (normal 6-8cm). Check for ascites by shifting dullness - other methods are fluid thrill and the puddle sign.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Auscultation</strong>
        <p class="text-sm">Bowel sound: normoactive (3-5 per minute); hyperactive (&gt; 5/min); hypoactive (&lt; 3/min); absent (no sound in 3 minutes). Check for hepatic and renal bruits.</p>
      </div>
      <p class="text-sm">Finally, do a digital rectal examination (never forget!).</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Systemic Examination: Central Nervous System
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Assess the mental state, cranial nerves, and sensory and motor function.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Mental State (Acronym COSMI)</strong>
        <p class="text-sm"><span class="font-medium">Consciousness</span> - conscious and alert, or drowsy or comatose. If consciousness is altered, assess with the GCS or the Blantyre Coma Scale (BCS).</p>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Blantyre Coma Scale - scale of 0-5; unarousable coma if &lt; 3. Used in younger age.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Response</th>
                <th class="py-2 font-medium">Score</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Best motor response - localises painful stimuli</td><td class="py-2">2</td></tr>
              <tr><td class="py-2 pr-3">Best motor response - withdraws limbs from pain</td><td class="py-2">1</td></tr>
              <tr><td class="py-2 pr-3">Best motor response - no response</td><td class="py-2">0</td></tr>
              <tr><td class="py-2 pr-3">Best verbal response - appropriate cry</td><td class="py-2">1</td></tr>
              <tr><td class="py-2 pr-3">Best verbal response - moan or inappropriate cry</td><td class="py-2">0</td></tr>
              <tr><td class="py-2 pr-3">Eye movement - directed, e.g. follows object</td><td class="py-2">1</td></tr>
              <tr><td class="py-2 pr-3">Eye movement - not directed</td><td class="py-2">0</td></tr>
            </tbody>
          </table>
        </div>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Glasgow Coma Scale - scale of 3-15. Normal &ge; 14; impaired consciousness &lt; 14; unarousable coma &lt; 10.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Response</th>
                <th class="py-2 font-medium">Score</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Eye opening - spontaneous</td><td class="py-2">4</td></tr>
              <tr><td class="py-2 pr-3">Eye opening - to command</td><td class="py-2">3</td></tr>
              <tr><td class="py-2 pr-3">Eye opening - to pain</td><td class="py-2">2</td></tr>
              <tr><td class="py-2 pr-3">Eye opening - no response</td><td class="py-2">1</td></tr>
              <tr><td class="py-2 pr-3">Verbal (older child) - appropriate/well-oriented words</td><td class="py-2">5</td></tr>
              <tr><td class="py-2 pr-3">Verbal (older child) - confused</td><td class="py-2">4</td></tr>
              <tr><td class="py-2 pr-3">Verbal (older child) - inappropriate words</td><td class="py-2">3</td></tr>
              <tr><td class="py-2 pr-3">Verbal (older child) - incomprehensible words</td><td class="py-2">2</td></tr>
              <tr><td class="py-2 pr-3">Verbal (older child) - nil</td><td class="py-2">1</td></tr>
              <tr><td class="py-2 pr-3">Verbal (infant) - coos and babbles</td><td class="py-2">5</td></tr>
              <tr><td class="py-2 pr-3">Verbal (infant) - irritable cries</td><td class="py-2">4</td></tr>
              <tr><td class="py-2 pr-3">Verbal (infant) - cries to pain</td><td class="py-2">3</td></tr>
              <tr><td class="py-2 pr-3">Verbal (infant) - moan to pain</td><td class="py-2">2</td></tr>
              <tr><td class="py-2 pr-3">Verbal (infant) - nil</td><td class="py-2">1</td></tr>
              <tr><td class="py-2 pr-3">Motor - obeys command</td><td class="py-2">6</td></tr>
              <tr><td class="py-2 pr-3">Motor - localises pain</td><td class="py-2">5</td></tr>
              <tr><td class="py-2 pr-3">Motor - withdraws from pain</td><td class="py-2">4</td></tr>
              <tr><td class="py-2 pr-3">Motor - abnormal flexion posture (decorticate)*</td><td class="py-2">3</td></tr>
              <tr><td class="py-2 pr-3">Motor - abnormal extension (decerebrate)**</td><td class="py-2">2</td></tr>
              <tr><td class="py-2 pr-3">Motor - nil</td><td class="py-2">1</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">*Indicates the lesion is above the brainstem (cortex). **Indicates the lesion is at the level of the brainstem.</p>
      
        <p class="text-sm mt-3"><span class="font-medium text-slate-800 dark:text-slate-200">Orientation</span> - in time, place, and person (only in an older child).</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Memory</span> - immediate, short term, and long term (only in an older child).</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Cranial Nerves</strong>
        <p class="text-sm">I - Olfactory; II - Optic; III - Oculomotor; IV - Trochlear; V - Trigeminal; VI - Abducens; VII - Facial; VIII - Vestibulocochlear; IX - Glossopharyngeal; X - Vagus; XI - Accessory; XII - Hypoglossal.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Nerve(s)</th>
                <th class="py-2 font-medium">Test</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Olfactory</td><td class="py-2">Smell</td></tr>
              <tr><td class="py-2 pr-3">Optic</td><td class="py-2">Visual acuity (using Snell's chart) and colour vision</td></tr>
              <tr><td class="py-2 pr-3">Oculomotor, Trochlear, Abducens</td><td class="py-2">Upward, downward, and lateral gaze respectively; pupillary constriction (light reflex - III)</td></tr>
              <tr><td class="py-2 pr-3">Trigeminal</td><td class="py-2">Motor - clench teeth, palpate pterygoid and temporal muscles. Sensory - ask patient to close eyes and compare touch sensation using cotton wool on the right and left upper, middle, and lower face; ask if feeling anything</td></tr>
              <tr><td class="py-2 pr-3">Facial</td><td class="py-2">Motor - wrinkle forehead (present in UMN lesion - tell the patient to look up); shut eyes tightly, don't allow to open (partially open on affected side); loss of nasolabial fold on affected side; smile/show teeth (in infants, assess when crying or smiling) - deviation of angle of mouth to normal side; whistle - deviation to normal side; puff cheek and don't allow deflation - abnormal on affected side. Sensory - put a tasty substance on the two sides of the anterior tongue, lost on the affected side (supplies anterior 2/3rd of tongue); chorda tympani branch test - go to the back of the patient and whistle - patient would over-react (hyperacusis)</td></tr>
              <tr><td class="py-2 pr-3">Vestibular</td><td class="py-2">Hearing</td></tr>
              <tr><td class="py-2 pr-3">Glossopharyngeal</td><td class="py-2">Taste (posterior 1/3rd of tongue)</td></tr>
              <tr><td class="py-2 pr-3">Vagus</td><td class="py-2">Say "ah ah" and look for deviation of the uvula</td></tr>
              <tr><td class="py-2 pr-3">Accessory</td><td class="py-2">Shrug shoulders against resistance; rotate chin against resistance - abnormal on affected side</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2"><span class="font-medium">N.B.</span> Normal - report as no obvious cranial nerve deficit.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Motor System (Acronym PATRIC-G)</strong>
        <p class="text-sm">Of upper and lower limbs.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Letter</th>
                <th class="py-2 font-medium">Domain</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">P</td><td class="py-2">Power</td></tr>
              <tr><td class="py-2 pr-3">A</td><td class="py-2">Asymmetry</td></tr>
              <tr><td class="py-2 pr-3">T</td><td class="py-2">Tone</td></tr>
              <tr><td class="py-2 pr-3">R</td><td class="py-2">Reflexes</td></tr>
              <tr><td class="py-2 pr-3">I</td><td class="py-2">Inspection (fasciculation, bulk)</td></tr>
              <tr><td class="py-2 pr-3">C</td><td class="py-2">Coordination</td></tr>
              <tr><td class="py-2 pr-3">G</td><td class="py-2">Gait</td></tr>
            </tbody>
          </table>
        </div>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Start with Inspection:</p>
        <ul class="list-disc pl-5 space-y-2 text-sm mt-1">
          <li><span class="font-medium">Fasciculation</span> (involuntary movement) over the thigh and gastrocnemius. If absent, tap the muscle; if still absent, report as no fasciculation.</li>
          <li><span class="font-medium">Muscle bulk</span> - normal bulk, or wasted, or asymmetry in bulk.</li>
          <li><span class="font-medium">Asymmetry:</span> (i) identify a fixed landmark on the upper or lower limb, e.g. tibial tuberosity, acromion process; (ii) measure the circumference of the suspected part X cm from this point; (iii) do the same on the contralateral limb and compare - if equal, it is normal.</li>
        </ul>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Power (movement and strength):</p>
        <p class="text-sm">Assess each group of muscles of the upper and lower limbs by placing your hand on the group of muscles to be assessed and asking the patient to move the part against your resistance.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li><span class="font-medium">Upper limbs:</span> arm - flexors, extensors, adductors, and abductors; forearm (elbow joint) - flexors and extensors group; intrinsic muscles of the hand.</li>
          <li><span class="font-medium">Lower limbs:</span> hip - flexors, extensor, abductors and adductors; knee - flexors and extensor; ankle - dorsi-flexors and planta-flexors.</li>
        </ul>
        <p class="text-sm mt-2">If all is normal, report as full power in both limbs. Otherwise state the group affected and the grade.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Grade</th>
                <th class="py-2 font-medium">Power</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">0</td><td class="py-2">No movement</td></tr>
              <tr><td class="py-2 pr-3">I</td><td class="py-2">Flickers of movement</td></tr>
              <tr><td class="py-2 pr-3">II</td><td class="py-2">Horizontal movement (side-to-side)</td></tr>
              <tr><td class="py-2 pr-3">III</td><td class="py-2">Against gravity</td></tr>
              <tr><td class="py-2 pr-3">IV</td><td class="py-2">Against moderate resistance</td></tr>
              <tr><td class="py-2 pr-3">V</td><td class="py-2">Full power</td></tr>
            </tbody>
          </table>
        </div>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Tone:</p>
        <p class="text-sm">The resistance across joints on passive movement.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li><span class="font-medium">Upper limb:</span> GHJ - roll in and out; elbow - flex and extend the joint; wrist - rotate clockwise and anticlockwise.</li>
          <li><span class="font-medium">Lower limb:</span> ankle joint - rotate clockwise and anticlockwise; knee joint - slightly flex the hip, then flex and extend fully the knee; hip joint - rock from side to side.</li>
        </ul>
        <p class="text-sm mt-2">Report as tone is normal, hyper, or hypotonic.</p>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Reflexes:</p>
        <p class="text-sm"><span class="font-medium">Upper limbs:</span> biceps jerk, radio-brachialis, supinator jerk, and triceps jerk. <span class="font-medium">Lower limbs:</span> knee jerk (L2, 3, 4); ankle jerk (S2, 3), over the Achilles tendon.</p>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Coordination:</p>
        <p class="text-sm">Assess by: <span class="font-medium">upper limb</span> - finger-to-nose test, rapidly alternating hand tapping test, etc. <span class="font-medium">Lower limb</span> - heel-knee test, Romberg test.</p>
      
        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">Gait:</p>
        <p class="text-sm">Abnormal movement - ask the patient to walk.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Features of Upper vs Lower Motor Neuron Lesion</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Feature</th>
                <th class="py-2 pr-3 font-medium">LMN lesion</th>
                <th class="py-2 font-medium">UMN lesion</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Weakness</td><td class="py-2 pr-3">Present</td><td class="py-2">Present</td></tr>
              <tr><td class="py-2 pr-3">Tone</td><td class="py-2 pr-3">Hypotonia</td><td class="py-2">Hypertonia</td></tr>
              <tr><td class="py-2 pr-3">Tendon reflex</td><td class="py-2 pr-3">Absent</td><td class="py-2">Hyper-reflexia</td></tr>
              <tr><td class="py-2 pr-3">Muscle bulk</td><td class="py-2 pr-3">Wasting</td><td class="py-2">Little or no atrophy</td></tr>
              <tr><td class="py-2 pr-3">Fasciculation in affected muscle</td><td class="py-2 pr-3">Present</td><td class="py-2">Absent</td></tr>
              <tr><td class="py-2 pr-3">Ankle clonus</td><td class="py-2 pr-3">No sustained clonus</td><td class="py-2">Sustained clonus</td></tr>
              <tr><td class="py-2 pr-3">Plantar response</td><td class="py-2 pr-3">Normal</td><td class="py-2">Extensor (Babinski)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Sensory Function</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Modality</th>
                <th class="py-2 font-medium">Test</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Tactile</td><td class="py-2">Use cotton wool</td></tr>
              <tr><td class="py-2 pr-3">Position sense</td><td class="py-2">Ask patient to close eyes, move the toes up and down, and ask if up or down</td></tr>
              <tr><td class="py-2 pr-3">Vibration</td><td class="py-2">Tuning fork</td></tr>
              <tr><td class="py-2 pr-3">Pain</td><td class="py-2">Superficial - use a pin; deep - pressure on the Achilles tendon</td></tr>
              <tr><td class="py-2 pr-3">Temperature</td><td class="py-2">Warm/cold test tubes</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Beyond the Examination: Investigation, Treatment, and Follow-Up
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Investigation</strong>
        <p class="text-sm">Divide into specific and general. Start with specific investigations and state the expected results for each. Investigations serve to: confirm or exclude differentials; determine the extent of the problem and complications; and follow up progress.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Treatment</strong>
        <p class="text-sm">Divided into specific and supportive.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Follow-Up Care</strong>
        <p class="text-sm">Advice before discharge; prevention of trigger factors; identify or watch out for complications; counselling.</p>
      </div>
      </div>
      
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always look at the patient's face when touching them, even for capillary refill - discomfort is a finding, not a distraction from one.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Know the age-appropriate normal range before interpreting a respiratory rate, heart rate, or blood pressure - the same number can be normal or a danger sign purely depending on age.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use the Blantyre Coma Scale in younger children and the GCS in older children - they are not interchangeable, and each has its own scoring logic.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>MUAC is only reliable as a nutritional marker between 1-5 years, since it's relatively constant in that age band specifically.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never skip the digital rectal exam in a full abdominal examination, and never omit the general examination in favour of jumping straight to the system you suspect is affected.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Nelson Textbook of Pediatrics, 19th Edition - age-related vital sign reference ranges.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Molyneux ME, Taylor TE - Blantyre Coma Scale for Young Children with Cerebral Malaria.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Teasdale G, Jennett B - Assessment of Coma and Impaired Consciousness: A Practical Scale.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      {
        id: 'exam-obstetric',
        title: 'Physical Examination in Obstetrics',
        category: 'Physical Examination',
        subCategory: 'Obstetrics',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Physical Examination in Obstetrics</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Physical Examination</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Physical Examination in Obstetrics</h1>
        <p class="text-sm text-indigo-200">The obstetric examination centres on a systematic abdominal exam - inspection, palpation of the poles, symphysiofundal height, and fetal heart auscultation - supported by a general exam and, where indicated, a pelvic exam. This guide covers the full sequence, including clinical fetal weight estimation formulas checked against their original sources.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      General Examination
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Be courteous and ask for consent. Always examine from the right side of the patient.</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Hair.</li>
        <li>Eyes - pallor, jaundice.</li>
        <li>Tongue and buccal mucosa.</li>
        <li>Pallor, cyanosis, dehydration, dental hygiene, oral thrush.</li>
        <li>Peripheral lymph nodes - axilla, cervical.</li>
        <li>Thyroid gland (for goitre), breast (for masses, appearance of the nipple, e.g. flattened).</li>
        <li>Hands - pallor, finger clubbing, capillary refill (normal 2-3 seconds).</li>
        <li>Temperature - febrile or not.</li>
        <li>Pedal oedema - present or not; if present, determine the extent.</li>
      </ul>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Also note:</span> height - for risk of cephalopelvic disproportion (CPD) in women &lt; 1.50m. Weight - women &lt; 45kg are more likely to have small-for-gestational-age (SGA) babies, while women &gt; 90kg may have abnormal glucose tolerance with possible fetal macrosomia.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Abdominal Examination
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Expose the abdomen from the xiphisternum (or just below the breast) to the pubic symphysis. This should be done by the patient. Follow inspection, palpation, and auscultation (IPA).</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">a. Inspection</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Shape and size of the uterus, any obvious asymmetry or fetal movement.</li>
          <li>Surgical scars - midline infraumbilical, Pfannenstiel, gridiron (appendicectomy), umbilical (laparoscopy), loin (kidney transplant), etc.</li>
          <li>Striae gravidarum and linea nigra.</li>
          <li>Umbilicus - inverted or everted.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">b. Palpation</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Ensure to look at the patient's face while palpating.</li>
          <li>Light palpation on all 9 regions for tenderness.</li>
          <li>Deep palpation for organ enlargement, e.g. liver and spleen; kidneys are also balloted.</li>
        </ul>
        <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
          <p class="text-sm text-amber-900 dark:text-amber-300">To palpate for splenic enlargement in a pregnant patient (&gt; 20 weeks gestation), start from the left iliac fossa, since the uterus may have ascended into the region of the abdomen the spleen is usually approached from.</p>
        </div>
        <p class="text-sm mt-2">The bladder should be emptied to allow for easier palpation during an obstetric examination.</p>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">i. Symphysiofundal Height (SFH) Measurement</strong>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Using the ulnar border of the left hand, palpate for the fundus.</li>
        <li>Apply and stretch a tape measure (cm side facing outwards) to the pubic symphysis, which is already identified by the right hand, then turn the tape over and read in cm.</li>
        <li>Comment on findings as compared to the estimated gestational age (EGA) from the LMP.</li>
      </ul>
      <p class="text-sm mt-2 italic">N.B. SFH becomes less accurate as the pregnancy gets older.</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">SFH-EGA Incompatibility</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">SFH &gt; EGA</th>
                <th class="py-2 font-medium">SFH &lt; EGA</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Error in dates</td><td class="py-2">Error in dates</td></tr>
              <tr><td class="py-2 pr-3">Healthy large fetus</td><td class="py-2">Healthy but constitutionally small fetus</td></tr>
              <tr><td class="py-2 pr-3">Multiple pregnancy</td><td class="py-2">Fetal descent into the pelvis (2-4 weeks before delivery)</td></tr>
              <tr><td class="py-2 pr-3">Polyhydramnios</td><td class="py-2">Oligohydramnios</td></tr>
              <tr><td class="py-2 pr-3">Large for gestational age babies, i.e. macrosomia</td><td class="py-2">Small for gestational age, i.e. IUGR</td></tr>
              <tr><td class="py-2 pr-3">Gestational diabetes</td><td class="py-2">Transverse lie</td></tr>
              <tr><td class="py-2 pr-3">Hydatidiform mole</td><td class="py-2">-</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Palpate the Poles</strong>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium">ii. Fundal pole:</span> to determine whether the head (round, hard, and ballotable) or the buttocks (soft and broad) occupies the fundus.</li>
        <li><span class="font-medium">iii. Lower pole:</span> to determine whether the head or the buttocks occupies the lower uterine segment.</li>
        <li><span class="font-medium">iv. Lateral palpation:</span> to determine the fetal back (firm and continuous) and limbs (irregular shapes and knuckles).</li>
        <li><span class="font-medium">v. Demonstrate lie:</span> holding each pole with thumb and forefingers, check the long axis of the fetus in relation to the mother. The lie can be longitudinal, oblique, or transverse.</li>
        <li><span class="font-medium">vi. Demonstrate presentation.</span></li>
        <li><span class="font-medium">vii. Auscultation:</span> listen over the fetal back or anterior shoulder for fetal heart tones with a Pinard stethoscope. Count and compare with the maternal pulse. For a cephalic presentation, listen below the umbilicus; for breech, listen above the umbilicus.</li>
      </ul>
      </div>
      
      <!-- Fetal weight estimation -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Methods of Fetal Weight Estimation (EFW)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">a. Johnson's Formula</strong>
        <p class="text-sm bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 sans">EFW (g) = (SFH in cm - X) &times; 155</p>
        <p class="text-sm mt-2">Where X is determined by the station of the fetal head on vaginal examination, not simply "engaged" or "not engaged":</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li>X = 13, when the presenting part is above the ischial spines (not engaged, "minus" station).</li>
          <li>X = 12, when the presenting part is at the ischial spines ("zero" station).</li>
          <li>X = 11, when the presenting part is below the ischial spines ("plus" station).</li>
        </ul>
        <p class="text-sm mt-2">For a maternal weight over roughly 91kg, 1cm is subtracted from the measured fundal height before applying the formula, to correct for excess abdominal wall thickness.</p>
        <p class="text-sm mt-2">Johnson's formula is a simple bedside estimate, useful where ultrasound isn't accessible, but it carries a meaningfully wider margin of error than ultrasound-based estimation and shouldn't be treated as equivalent to it.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">b. Dare's Formula</strong>
        <p class="text-sm bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 sans">EFW (g) = SFH (cm) &times; Abdominal girth (cm), both measured at the level of the umbilicus</p>
        <p class="text-sm mt-2">Developed and validated by Dare et al. at Obafemi Awolowo University Teaching Hospital, Ile-Ife, in 1988, specifically for estimating fetal weight at term. This is distinct from McDonald's rule, an older and separate formula used to estimate <em>gestational age</em> (not fetal weight) from SFH between roughly 20 and 34 weeks - the two are easy to conflate by name but serve different purposes and should not be used interchangeably.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">c. Ultrasound Estimation</strong>
        <p class="text-sm">The reference standard where available, most commonly using Hadlock's formula, which combines biparietal diameter, head circumference, abdominal circumference, and femur length. Clinical (Johnson's or Dare's) and ultrasound-based estimates have both been shown in comparative studies to fall within about 10% of actual birth weight in a majority of cases, and neither is reliably superior to the other in experienced hands - so a clinical estimate is a reasonable and valid method, not merely a fallback, though ultrasound remains preferred when accessible, particularly at extremes of estimated weight.</p>
      </div>
      </div>
      
      <!-- Pelvic exam -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Pelvic Examination
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">a. Vaginal Examination</strong>
        <p class="text-sm">For clinical pelvimetry at around 36 weeks. This is not routinely done except in select cases.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">b. Speculum Exam (in Obstetrics)</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>To assess cervical length and defects of the cervix.</li>
          <li>To take a cervical smear.</li>
          <li>To check for liquor drainage.</li>
          <li>To take a high vaginal and endocervical swab for microscopy, culture, and sensitivity (M/C/S).</li>
          <li>Removal of a cervical (McDonald/Shirodkar) cerclage suture, where present.</li>
        </ul>
      </div>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Note:</span> if asked to do an abdominal examination, it involves light and deep palpation as well as examination of the uterus, as detailed above.</p>
      </div>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>SFH becomes progressively less accurate as pregnancy advances - a discrepancy from expected EGA is a prompt for the differential, not an automatic red flag.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Johnson's formula uses a three-tier station system (X = 13/12/11), not a simple engaged/not-engaged split - using the wrong constant meaningfully skews the estimate.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Don't confuse Dare's formula (fetal weight, SFH &times; abdominal girth) with McDonald's rule (gestational age, from SFH alone) - they share a naming pattern but answer different questions.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Fetal heart auscultation location follows presentation, not a fixed spot - below the umbilicus for cephalic, above for breech.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Empty the bladder before an obstetric abdominal exam - it materially improves palpation accuracy.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Johnson EG, Toshach CE - Estimation of Fetal Weight Using External Uterine Measurements, 1954.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Dare FO, et al. - Obafemi Awolowo University Teaching Hospital Complex, Ile-Ife - Symphysiofundal Height and Abdominal Girth Product for Fetal Weight Estimation, 1988.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Hadlock FP, et al. - Estimation of Fetal Weight with the Use of Head, Body, and Femur Measurements.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Dutta DC - Textbook of Obstetrics - abdominal and pelvic examination technique.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      
      
      

      

];
