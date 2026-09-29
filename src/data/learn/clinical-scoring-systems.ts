import { LearningModule } from '../../types/learn';

export const CLINICAL_SCORING_SYSTEMS_CONTENT: LearningModule[] = [


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
      


];
