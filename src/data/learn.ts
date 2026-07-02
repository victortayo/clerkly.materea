
export type LearningModuleCategory = 'Symptom Clerking' | 'Physical Examination' | 'Laboratory Interpretation' | 'Clinical Scoring Systems';

export interface LearningModule {
  id: string;
  title: string;
  category: LearningModuleCategory;
  content: string; 
}

export const clerklyLearnLibrary: LearningModule[] = [
  {
    id: 'symptom-clerking-fever',
    title: 'Clerking a Fever Patient',
    category: 'Symptom Clerking',
    content: `
<h1 class="font-brand text-4xl font-bold mb-4 text-slate-900 dark:text-white">Clerking a Fever Patient</h1>

<div class="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800/50 mb-8">
  <h2 class="font-brand text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-2">Guiding Principles</h2>
  <ul class="space-y-2 list-disc pl-5 text-indigo-900/80 dark:text-indigo-200/80 text-sm">
    <li>Fever is a symptom, not a diagnosis. Your primary goal is to find the source.</li>
    <li>Before taking a detailed history, spend 30-60 seconds assessing for instability. Rule out the killers first.</li>
    <li>The differential diagnosis for fever is vast and varies significantly with age, immune status, and geographical location.</li>
    <li>In Nigeria, always consider Malaria, Tuberculosis, and HIV in cases of persistent or unexplained fever.</li>
  </ul>
</div>

<div class="space-y-8">

  <div>
    <h2 class="font-brand text-2xl font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Step 1: Assess for Stability (ABCDE)</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <strong class="font-bold text-lg text-slate-800 dark:text-slate-200">A - Airway</strong>
        <ul class="list-disc pl-5 mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
          <li>Is it patent?</li>
          <li>Any stridor or gurgling sounds?</li>
          <li>Risk of aspiration?</li>
        </ul>
      </div>
      <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <strong class="font-bold text-lg text-slate-800 dark:text-slate-200">B - Breathing</strong>
        <ul class="list-disc pl-5 mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
          <li>Respiratory rate &amp; SpO₂</li>
          <li>Work of breathing (accessory muscles)</li>
          <li>Auscultate for abnormal sounds</li>
        </ul>
      </div>
      <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <strong class="font-bold text-lg text-slate-800 dark:text-slate-200">C - Circulation</strong>
        <ul class="list-disc pl-5 mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
          <li>Pulse rate &amp; Blood pressure</li>
          <li>Capillary refill time (&lt;2s)</li>
          <li>Peripheral perfusion (warm/cold)</li>
          <li>Urine output</li>
        </ul>
      </div>
      <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <strong class="font-bold text-lg text-slate-800 dark:text-slate-200">D - Disability</strong>
        <ul class="list-disc pl-5 mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
          <li>AVPU or GCS</li>
          <li>Blood glucose</li>
          <li>Pupil size and reactivity</li>
          <li>Check for neck stiffness</li>
        </ul>
      </div>
    </div>
     <div class="mt-4 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <strong class="font-bold text-lg text-slate-800 dark:text-slate-200">E - Exposure</strong>
        <ul class="list-disc pl-5 mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
          <li>Measure temperature</li>
          <li>Check for rashes, petechiae, or purpura</li>
           <li>Look for sources: cellulitis, wounds, abscesses</li>
        </ul>
      </div>
  </div>

  <div class="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-xl border border-rose-200 dark:border-rose-800/50">
      <h3 class="font-bold text-lg text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2"><i class="fa-solid fa-flag"></i>Urgent Red Flags</h3>
      <p class="text-rose-900/80 dark:text-rose-200/80 text-sm">If you see these signs during your initial assessment, escalate for immediate management:</p>
      <ul class="mt-2 space-y-1 list-disc pl-5 text-sm text-rose-900/80 dark:text-rose-200/80">
          <li>Altered consciousness, persistent seizures, or neck stiffness (Meningitis, Severe Malaria)</li>
          <li>Hypotension, tachycardia, poor perfusion (Septic Shock)</li>
          <li>Severe respiratory distress or cyanosis (Severe Pneumonia, PE)</li>
          <li>Non-blanching petechial or purpuric rash (Meningococcemia)</li>
      </ul>
  </div>

  <div>
    <h2 class="font-brand text-2xl font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Step 2: Focused History</h2>
    <div>
      <h3 class="font-bold text-lg text-slate-800 dark:text-slate-300 mb-2">Characterizing the Fever</h3>
      <p class="text-slate-600 dark:text-slate-400 text-sm">Ask about onset, duration, pattern (e.g., continuous, intermittent), highest recorded temperature, and associated symptoms like chills, rigors, and night sweats.</p>
    </div>
  </div>

   <div>
    <h3 class="font-bold text-lg text-slate-800 dark:text-slate-300 mb-2">Localizing Symptoms</h3>
    <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Systematically ask about symptoms to pinpoint the source of infection:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Respiratory:</strong> Cough, chest pain, SOB</div>
        <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Gastrointestinal:</strong> Abdominal pain, diarrhea, vomiting, jaundice</div>
        <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Genitourinary:</strong> Dysuria, frequency, flank pain</div>
        <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Neurological:</strong> Headache, confusion, neck stiffness</div>
    </div>
  </div>

  <div>
      <h2 class="font-brand text-2xl font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Step 3: Examination &amp; Investigations</h2>
      <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">Perform a full head-to-toe examination. Pay close attention to vital signs, hydration status, and look for a source (e.g., crackles in the lungs, abdominal tenderness, a skin rash, or a heart murmur).</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 class="font-bold text-md text-slate-800 dark:text-slate-300 mb-1">Baseline Tests (Nigeria)</h4>
              <ul class="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400">
                  <li>Malaria RDT/Microscopy</li>
                  <li>Full Blood Count (FBC)</li>
                  <li>Urinalysis</li>
              </ul>
          </div>
          <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 class="font-bold text-md text-slate-800 dark:text-slate-300 mb-1">Crucial Second-Line Tests</h4>
              <ul class="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400">
                  <li><strong>Blood Culture (before antibiotics)</strong></li>
                  <li>Chest X-ray</li>
                  <li>HIV Test (with consent)</li>
                  <li>Sputum GeneXpert (if TB suspected)</li>
              </ul>
          </div>
      </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800/50">
    <h3 class="font-bold text-lg text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2"><i class="fa-solid fa-lightbulb"></i>Common Pitfalls in Nigeria</h3>
    <ul class="space-y-1 list-disc pl-5 text-sm text-amber-900/80 dark:text-amber-200/80">
        <li><strong>Not every fever is malaria.</strong> Test before you treat.</li>
        <li><strong>The Widal test is unreliable for diagnosing typhoid.</strong> Use blood culture.</li>
        <li><strong>Always consider Tuberculosis and HIV</strong> in any fever lasting more than two weeks.</li>
        <li>A fever in a neonate or an immunocompromised patient is an emergency until proven otherwise.</li>
    </ul>
  </div>
</div>
`
  }
]
