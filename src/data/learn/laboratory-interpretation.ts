import { LearningModule } from '../../types/learn';

export const LABORATORY_INTERPRETATION_CONTENT: LearningModule[] = [

      // LABORATORY INTERPRETATIONS
      {
        id: 'lab-female-hormonal-profile',
        title: 'Female Hormonal Profile',
        category: 'Laboratory Interpretation',
        subCategory: 'Endocrinology',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Interpreting the Female Hormonal Profile</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Laboratory Interpretation</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting the Female Hormonal Profile</h1>
        <p class="text-sm text-indigo-200">Hormonal profiles are requested for irregular menses, suspected PCOS, infertility workup, hirsutism, suspected menopause, and galactorrhoea. The single most common source of misinterpretation in this panel is not the values themselves but the timing of the sample relative to the menstrual cycle - a normal or abnormal-looking result can mean opposite things depending on cycle day, and this is frequently not documented or considered when the result is reviewed.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      The Panel and What Each Component Reflects
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 font-medium">What it reflects</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">FSH (follicle-stimulating hormone)</td><td class="py-2">Pituitary drive for follicular development; rises when ovarian reserve is declining (less negative feedback from the ovary)</td></tr>
            <tr><td class="py-2 pr-3">LH (luteinising hormone)</td><td class="py-2">Pituitary hormone triggering ovulation; the LH surge precedes ovulation by ~24-36 hours</td></tr>
            <tr><td class="py-2 pr-3">Oestradiol</td><td class="py-2">Primary oestrogen, produced by the developing follicle; rises through the follicular phase, peaks just before ovulation</td></tr>
            <tr><td class="py-2 pr-3">Progesterone</td><td class="py-2">Produced by the corpus luteum after ovulation; the key marker used to confirm that ovulation has occurred</td></tr>
            <tr><td class="py-2 pr-3">Prolactin</td><td class="py-2">Pituitary hormone; pathological elevation suppresses GnRH pulsatility and can cause menstrual irregularity, galactorrhoea, and infertility</td></tr>
            <tr><td class="py-2 pr-3">Testosterone (total/free)</td><td class="py-2">Assesses for hyperandrogenism - relevant in suspected PCOS or other virilising conditions</td></tr>
            <tr><td class="py-2 pr-3">AMH (anti-Müllerian hormone)</td><td class="py-2">Produced by small ovarian follicles; used as a marker of ovarian reserve, and does not fluctuate significantly with the menstrual cycle (a practical advantage over FSH/oestradiol)</td></tr>
            <tr><td class="py-2 pr-3">TSH</td><td class="py-2">Requested alongside this panel routinely, since both hypo- and hyperthyroidism can cause menstrual irregularity and hyperprolactinaemia (see TFT guide for detail)</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Why Cycle Timing Is the Central Interpretive Issue
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Unlike most other panels in this series, several of these hormones are only interpretable with reference to cycle day - the same oestradiol value can be entirely normal on day 12 and clearly abnormal on day 3.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 pr-3 font-medium">Correct timing</th>
              <th class="py-2 font-medium">Why</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">FSH, LH, oestradiol (baseline/ovarian reserve)</td><td class="py-2 pr-3">Day 2-4 of the cycle (early follicular phase)</td><td class="py-2">Reflects baseline pituitary-ovarian axis activity before the dominant follicle has developed and begun suppressing FSH</td></tr>
            <tr><td class="py-2 pr-3">Progesterone</td><td class="py-2 pr-3">Day 21 of a 28-day cycle, or 7 days before the expected next period</td><td class="py-2">Confirms whether ovulation has occurred - timed too early or late, a genuinely ovulatory cycle can appear anovulatory on the result</td></tr>
            <tr><td class="py-2 pr-3">Prolactin</td><td class="py-2 pr-3">Any time, but ideally fasting, mid-morning, and after avoiding breast stimulation/examination and stress immediately beforehand</td><td class="py-2">Prolactin is highly sensitive to acute stressors and recent breast stimulation, producing transient elevation unrelated to any pathology</td></tr>
            <tr><td class="py-2 pr-3">Testosterone</td><td class="py-2 pr-3">Morning sample preferred, given diurnal variation; timing relative to cycle is less critical</td><td class="py-2">-</td></tr>
            <tr><td class="py-2 pr-3">AMH</td><td class="py-2 pr-3">Any day of the cycle</td><td class="py-2">One of the few hormones in this panel that does not require cycle-day timing</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">The single most common error in this panel across Nigerian practice is a day 2-4 hormone profile drawn on whatever day the patient happens to present, without documenting or controlling for cycle day - this can produce a result that looks like diminished ovarian reserve or an abnormal LH:FSH ratio purely as an artefact of timing, prompting unnecessary anxiety or incorrect diagnosis.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Interpreting FSH, LH, and Oestradiol Together
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Baseline (Day 2-4) Values and What They Suggest</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Pattern</th>
                <th class="py-2 font-medium">Suggests</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">FSH normal, LH normal, oestradiol normal</td><td class="py-2">Reassuring baseline; does not by itself confirm normal ovulation - pair with mid-luteal progesterone</td></tr>
              <tr><td class="py-2 pr-3">FSH elevated (particularly &gt;10-12 IU/L, assay-dependent)</td><td class="py-2">Diminished ovarian reserve; markedly elevated FSH (&gt;25-40 IU/L) with amenorrhoea suggests premature ovarian insufficiency</td></tr>
              <tr><td class="py-2 pr-3">LH:FSH ratio elevated (classically &gt;2:1 or &gt;3:1)</td><td class="py-2">Historically associated with PCOS, though current PCOS diagnostic criteria (Section 5) do not require this ratio and it is not a reliable standalone diagnostic marker</td></tr>
              <tr><td class="py-2 pr-3">Oestradiol elevated at baseline (day 2-4)</td><td class="py-2">Can falsely suppress FSH into the "normal" range, masking diminished ovarian reserve</td></tr>
              <tr><td class="py-2 pr-3">FSH and LH both low, with low oestradiol</td><td class="py-2">Suggests hypothalamic-pituitary dysfunction (functional hypothalamic amenorrhoea, significant weight loss/low body weight, excessive exercise, or a pituitary/hypothalamic lesion) rather than primary ovarian failure</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Confirming Ovulation with Mid-Luteal Progesterone</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Progesterone (mid-luteal, nmol/L)</th>
                <th class="py-2 font-medium">Interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">&gt; 30</td><td class="py-2">Consistent with ovulation having occurred</td></tr>
              <tr><td class="py-2 pr-3">10-30</td><td class="py-2">Equivocal - repeat, ideally with better cycle-day timing</td></tr>
              <tr><td class="py-2 pr-3">&lt; 10</td><td class="py-2">Suggests anovulation, but must be interpreted alongside correct timing before concluding this</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Prolactin
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Level</th>
              <th class="py-2 font-medium">Interpretation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Mildly elevated (roughly up to 2-3&times; upper limit)</td><td class="py-2">Consider physiological causes first - stress, recent breast examination/stimulation, recent intercourse, or medication effect - before extensive workup</td></tr>
            <tr><td class="py-2 pr-3">Moderately elevated</td><td class="py-2">Consider hypothyroidism (check TFTs alongside), medication effect (many antipsychotics, metoclopramide, some antihypertensives), or a prolactinoma</td></tr>
            <tr><td class="py-2 pr-3">Markedly elevated (often &gt;100 ng/mL / &gt;2000 mIU/L, assay-dependent)</td><td class="py-2">Strongly suggests a prolactinoma - proceed to pituitary imaging (MRI where accessible)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Practical approach:</span> repeat a mildly-to-moderately elevated prolactin before extensive workup, ensuring the repeat sample avoids recent breast stimulation/examination and acute stress, and check TSH concurrently. Ask specifically about medications and breastfeeding status, which physiologically elevates prolactin.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      PCOS - A Frequently Misapplied Diagnosis
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Polycystic ovary syndrome is commonly over-diagnosed on the basis of ultrasound findings alone, or under-recognised when the classic "cystic ovary" appearance is absent. The current diagnostic framework is the <span class="font-medium text-slate-800 dark:text-slate-200">2023 International Evidence-Based Guideline</span>, which builds on and refines the original consensus-based Rotterdam criteria rather than replacing them outright.</p>
      <p class="text-sm">For adults, diagnosis still requires <span class="font-medium text-slate-800 dark:text-slate-200">at least 2 of the following 3</span>, with other causes excluded:</p>
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Clinical (hirsutism, acne) or biochemical (elevated free/total testosterone) hyperandrogenism</li>
        <li>Ovulatory dysfunction (oligo-ovulation or anovulation, i.e. irregular or absent periods)</li>
        <li>Polycystic ovarian morphology - and as of the 2023 update, this can now be established either by ultrasound <span class="font-medium text-slate-800 dark:text-slate-200">or by an elevated AMH level</span>, a genuine change from the original Rotterdam criteria, useful where ultrasound access or expertise is limited</li>
      </ol>
      <p class="text-sm">Where irregular cycles and clinical/biochemical hyperandrogenism are both already present - which covers roughly 70% of presentations - neither ultrasound nor AMH is required to confirm the diagnosis; the first two criteria alone are sufficient once other causes are excluded.</p>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Adolescents are a specific exception:</span> ultrasound and AMH are <span class="font-medium">not recommended</span> for PCOS diagnosis in adolescents at all, due to poor specificity in this age group. In adolescents, diagnosis requires <span class="font-medium">both</span> hyperandrogenism and ovulatory dysfunction to be present, not 2 of 3, with other causes excluded. Where features are suggestive but full criteria aren't met, "increased risk of PCOS" is the more appropriate label, with reassessment by around 8 years post-menarche.</p>
      </div>
      <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Common misapplications:</span></p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Diagnosing PCOS on ultrasound findings alone, without menstrual irregularity or hyperandrogenism.</li>
        <li>Ordering an LH:FSH ratio and treating an elevated ratio as diagnostic - not part of current criteria.</li>
        <li>Not excluding other causes (thyroid dysfunction, hyperprolactinaemia, non-classic congenital adrenal hyperplasia, androgen-secreting tumour with rapid virilisation) before settling on PCOS.</li>
      </ul>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Note: some recent international consensus material has floated renaming PCOS to "Polyendocrine Metabolic Ovarian Syndrome" (PMOS), with a possible formal nomenclature change in a future guideline update. The diagnostic criteria above are unaffected; mentioned only so the two names aren't mistaken for different conditions if encountered in newer literature.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      AMH and Ovarian Reserve
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">AMH now serves two related but distinct purposes worth keeping separate in your reasoning:</p>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Ovarian reserve/fertility treatment planning</span> - AMH predicts likely response to ovarian stimulation but is <span class="font-medium">not a reliable predictor of natural fertility potential or time to conception</span> in an individual patient.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">PCOS diagnosis (adults only)</span> - an elevated AMH can now substitute for ultrasound as evidence of polycystic ovarian morphology, one of the three Rotterdam-derived criteria (Section 5). This is a diagnostic use, distinct from its reserve-prediction use, and does not apply in adolescents.</li>
      </ul>
      <p class="text-sm">Values fall with hormonal contraceptive use, and should ideally be measured off hormonal contraception. Reference ranges vary meaningfully by assay platform - trend within the same lab/assay for serial comparisons.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Common Clinical Scenarios in Nigerian Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Infertility Workup</strong>
        <p class="text-sm">Given the significant social and cultural weight placed on fertility and childbearing in many Nigerian communities, infertility investigation carries a psychological dimension deserving explicit acknowledgement. Ensure both partners are investigated - female-factor causes should not be assumed in isolation without a semen analysis, which is inexpensive relative to the female workup and frequently deprioritised due to stigma.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Herbal and Traditional Fertility Remedies</strong>
        <p class="text-sm">Ask specifically and non-judgementally about herbal preparations taken for fertility or menstrual regulation - some have genuine hormonal activity (phytoestrogens and similar compounds) that can affect both symptoms and test interpretation.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Postpartum and Breastfeeding Patients</strong>
        <p class="text-sm">Prolactin is physiologically elevated during breastfeeding, and this should not trigger a pituitary workup in an appropriately breastfeeding postpartum woman with otherwise unremarkable findings. Lactational amenorrhoea is expected, physiological, within the normal postpartum timeframe.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Perimenopause and Menopause</strong>
        <p class="text-sm">An elevated FSH supports a diagnosis of menopause/perimenopause in a compatible clinical picture, but FSH fluctuates significantly during the transition - a single normal FSH does not exclude perimenopause in a symptomatic patient.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Common Pitfalls
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Interpreting FSH/LH/oestradiol without documenting or controlling for cycle day.</li>
        <li>Diagnosing PCOS on ultrasound appearance alone, without menstrual irregularity or hyperandrogenism present.</li>
        <li>Treating an isolated elevated LH:FSH ratio as diagnostic of PCOS.</li>
        <li>Using ultrasound or AMH to diagnose PCOS in an adolescent - neither is recommended in this age group.</li>
        <li>Not repeating a mildly elevated prolactin before extensive workup, or not accounting for recent breast stimulation, stress, or medication effect.</li>
        <li>Missing hypothyroidism as a cause of menstrual irregularity and hyperprolactinaemia by not checking TSH.</li>
        <li>Interpreting AMH as a fertility guarantee or prediction of natural conception timeline.</li>
        <li>Investigating only the female partner in a couple presenting with infertility, without a concurrent semen analysis.</li>
        <li>Mistaking physiological postpartum/lactational prolactin elevation and amenorrhoea for pathology.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Reading Order in Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Confirm and document cycle day at the time of sampling before interpreting FSH, LH, or oestradiol.</li>
        <li>Use mid-luteal progesterone to confirm ovulation rather than relying on baseline hormones alone.</li>
        <li>Check TSH and prolactin alongside the reproductive panel.</li>
        <li>Apply the full current diagnostic criteria before diagnosing PCOS, using the adult or adolescent framework as appropriate (Section 5).</li>
        <li>In an infertility workup, ensure male-factor investigation proceeds alongside the female hormonal workup, not after it.</li>
        <li>Use AMH appropriately for its specific purpose - ovarian reserve/stimulation planning, or as an accepted PCOM substitute in adult PCOS diagnosis - not as a natural fertility predictor.</li>
      </ol>
      </div>
      
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always document cycle day before interpreting FSH, LH, or oestradiol.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>AMH can now substitute for ultrasound in adult PCOS diagnosis - but never in adolescents.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>PCOS in adolescents needs both hyperandrogenism and ovulatory dysfunction, not 2 of 3.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Repeat an unexpected prolactin before extensive workup, and check TSH alongside it every time.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never investigate infertility as a one-partner problem.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Teede HJ, et al. - Recommendations from the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>International Evidence-Based Guideline for PCOS 2023 - Adolescent-Specific Recommendations, BMC Medicine.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Infertility Definitions and Terminology.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'lab-male-hormonal-profile',
        title: 'Male Hormonal Profile',
        category: 'Laboratory Interpretation',
        subCategory: 'Endocrinology',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Interpreting the Male Hormonal Profile</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Laboratory Interpretation</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting the Male Hormonal Profile</h1>
        <p class="text-sm text-indigo-200">Male hormonal testing is requested for suspected hypogonadism (low libido, erectile dysfunction, fatigue, reduced muscle mass), infertility workup, and gynaecomastia. Unlike the female panel, there is no cycle to time against, but there is a different timing issue that is just as commonly missed - testosterone has a pronounced diurnal rhythm, and a large proportion of "low testosterone" results in practice reflect afternoon sampling rather than genuine hypogonadism.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      The Panel and What Each Component Reflects
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 font-medium">What it reflects</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Total testosterone</td><td class="py-2">Overall testosterone production; the primary initial screening test</td></tr>
            <tr><td class="py-2 pr-3">Free testosterone</td><td class="py-2">The biologically active, unbound fraction - more informative than total testosterone when SHBG is abnormal (obesity, ageing, thyroid disease, liver disease all alter SHBG and can make total testosterone misleading)</td></tr>
            <tr><td class="py-2 pr-3">SHBG</td><td class="py-2">Binding protein for testosterone; needed to properly interpret total testosterone when clinical suspicion and total testosterone disagree</td></tr>
            <tr><td class="py-2 pr-3">LH</td><td class="py-2">Pituitary drive for Leydig cell testosterone production; distinguishes primary (testicular) from secondary (pituitary/hypothalamic) hypogonadism</td></tr>
            <tr><td class="py-2 pr-3">FSH</td><td class="py-2">Pituitary drive for spermatogenesis (Sertoli cell function); particularly relevant in the infertility workup</td></tr>
            <tr><td class="py-2 pr-3">Prolactin</td><td class="py-2">Pathological elevation suppresses GnRH pulsatility, causing secondary hypogonadism</td></tr>
            <tr><td class="py-2 pr-3">Oestradiol</td><td class="py-2">Produced by peripheral aromatisation of testosterone; relevant in gynaecomastia workup and in obesity</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Timing - The Central Interpretive Issue
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Testosterone should be measured in the morning, ideally 7-10 AM and fasting</span>, given a pronounced diurnal rhythm - levels can be meaningfully lower by afternoon, particularly in younger men where the diurnal variation is most pronounced. A borderline-low or low testosterone drawn in the afternoon, or non-fasting, should be repeated under correct conditions before concluding hypogonadism.</p>
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200">Additional factors that transiently lower testosterone before diagnosing hypogonadism from a single result:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Acute illness of any kind (including febrile illness)</li>
        <li>Recent significant physical or psychological stress</li>
        <li>Recent significant alcohol intake</li>
        <li>Poorly controlled diabetes or acute metabolic derangement</li>
      </ul>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-3">Practical rule: a single low testosterone result, especially if drawn outside the morning window, non-fasting, or during acute illness, should be repeated under correct conditions before a diagnosis of hypogonadism is made or treatment is started.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Interpreting Testosterone
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Current major guidelines do not converge on one single cutoff, which is worth knowing so a result isn't read as more precise than the evidence actually is:</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Source</th>
              <th class="py-2 font-medium">Threshold for low testosterone</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">American Urological Association (AUA)</td><td class="py-2">&lt; 300 ng/dL (&lt; 10.4 nmol/L)</td></tr>
            <tr><td class="py-2 pr-3">Endocrine Society</td><td class="py-2">&lt; 264 ng/dL (&lt; 9.2 nmol/L) - the CDC-harmonized lower limit of normal in healthy, non-obese young men</td></tr>
            <tr><td class="py-2 pr-3">Other societies (AACE, ISA, EAU/ISSM)</td><td class="py-2">Range from 200-350 ng/dL - reflects genuine ongoing disagreement, not a settled single number</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">In practice, a total testosterone consistently below roughly <span class="font-medium text-slate-800 dark:text-slate-200">264-300 ng/dL (9.2-10.4 nmol/L)</span> on properly timed, repeated morning samples, together with compatible symptoms, is a reasonable diagnostic threshold - use whichever specific cutoff your local guideline or laboratory's assay standardisation supports, and be consistent about it.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Diagnosis requires both a low testosterone level on at least two properly timed, fasting morning samples, and compatible clinical symptoms.</span></p>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Severe secondary hypogonadism threshold:</span> a testosterone below roughly 150 ng/dL (5.2 nmol/L) with a low or inappropriately normal LH warrants pituitary MRI regardless of the prolactin result, since non-secreting pituitary adenomas can present this way without hyperprolactinaemia.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">When Free Testosterone Matters More Than Total</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Obesity (lowers SHBG, which can make total testosterone appear low despite normal free testosterone)</li>
          <li>Older age (SHBG tends to rise with age)</li>
          <li>Thyroid dysfunction and liver disease (both alter SHBG)</li>
          <li>Where clinical suspicion is strong but total testosterone is borderline/normal, free testosterone adds useful information</li>
        </ul>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Distinguishing Primary from Secondary Hypogonadism
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Once a confirmed low testosterone is established, LH (and FSH, particularly relevant for the fertility dimension) localises the problem.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">LH</th>
              <th class="py-2 pr-3 font-medium">Testosterone</th>
              <th class="py-2 pr-3 font-medium">Pattern</th>
              <th class="py-2 font-medium">Suggests</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">High</td><td class="py-2 pr-3">Low</td><td class="py-2 pr-3">Primary hypogonadism</td><td class="py-2">Testicular failure. Causes: mumps orchitis, testicular trauma, chemotherapy/radiation, Klinefelter syndrome, cryptorchidism history, varicocele in some cases</td></tr>
            <tr><td class="py-2 pr-3">Low or inappropriately normal</td><td class="py-2 pr-3">Low</td><td class="py-2 pr-3">Secondary (hypogonadotropic) hypogonadism</td><td class="py-2">Pituitary/hypothalamic problem, or functional suppression - hyperprolactinaemia, significant obesity, chronic illness, opioid use, anabolic steroid use, pituitary lesion</td></tr>
            <tr><td class="py-2 pr-3">Normal/borderline</td><td class="py-2 pr-3">Low-normal</td><td class="py-2 pr-3">Age-related/functional decline, or early/compensated primary hypogonadism</td><td class="py-2">Often multifactorial (obesity, metabolic syndrome, chronic illness combined)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Prolactin should be checked in any patient with confirmed low testosterone and low/inappropriately normal LH</span>, since hyperprolactinaemia is a treatable cause of secondary hypogonadism.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Common Clinical Scenarios in Nigerian Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Anabolic-Androgenic Steroid Use</strong>
        <p class="text-sm">Increasingly relevant given gym culture and unregulated access to injectable and oral anabolic agents. Exogenous androgen use suppresses endogenous LH/FSH, producing low LH, low FSH, and testosterone that can appear normal-to-high while on the substance but drops significantly after discontinuation - ask specifically about supplement and injectable use in any young man with unexplained low LH/FSH, testicular atrophy, or infertility.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Chronic Illness - TB, HIV</strong>
        <p class="text-sm">Chronic infections and their treatment can suppress the hypothalamic-pituitary-gonadal axis and lower testosterone functionally. Treat the underlying chronic illness first, and repeat testing once the acute or poorly controlled phase has stabilised, before considering testosterone replacement.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Obesity-Related Hypogonadism</strong>
        <p class="text-sm">Visceral adiposity increases peripheral aromatisation of testosterone to oestradiol and lowers SHBG, producing low total testosterone with relatively preserved or even elevated oestradiol. Weight loss is a legitimate first-line intervention and can meaningfully improve testosterone without pharmacological treatment.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Herbal and Traditional "Virility" Remedies</strong>
        <p class="text-sm">Ask specifically and non-judgementally about herbal preparations, supplements, or traditional remedies taken for sexual performance - some contain undisclosed pharmacologically active compounds (including, in documented cases, undisclosed phosphodiesterase-5 inhibitors) that can affect both symptoms and the clinical picture.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Infertility Workup</strong>
        <p class="text-sm">Male-factor infertility carries significant stigma in many Nigerian communities, and investigation is sometimes avoided or delayed. Semen analysis is the primary, inexpensive first-line test - hormonal testing is generally reserved for men with an abnormal semen analysis or specific indication.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Parameter</th>
                <th class="py-2 font-medium">WHO 6th edition (2021) lower reference limit</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Volume</td><td class="py-2">1.4 mL</td></tr>
              <tr><td class="py-2 pr-3">Sperm concentration</td><td class="py-2">16 million/mL</td></tr>
              <tr><td class="py-2 pr-3">Total sperm number</td><td class="py-2">39 million per ejaculate</td></tr>
              <tr><td class="py-2 pr-3">Total motility</td><td class="py-2">42%</td></tr>
              <tr><td class="py-2 pr-3">Progressive motility</td><td class="py-2">30%</td></tr>
              <tr><td class="py-2 pr-3">Vitality</td><td class="py-2">54%</td></tr>
              <tr><td class="py-2 pr-3">Normal morphology (strict/Kruger criteria)</td><td class="py-2">4%</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">These are 5th percentile values from a large fertile-population reference cohort, not pass/fail thresholds - the WHO manual frames them as decision limits to interpret alongside the clinical picture, and a single below-threshold result should prompt a repeat (sperm production takes roughly 72 days) rather than an immediate infertility diagnosis.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Gynaecomastia Workup
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">A brief note given its overlap with this panel: true glandular gynaecomastia in an adult male warrants assessment of the oestrogen:androgen balance - check testosterone, oestradiol, LH, and consider hepatic and renal function and a medication review (spironolactone, certain antiretrovirals, and other drugs are recognised causes). Rule out a testicular or, rarely, adrenal tumour in a patient with rapidly progressive gynaecomastia, particularly if unilateral or associated with a palpable testicular mass.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Common Pitfalls
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Diagnosing hypogonadism from a single, non-morning or non-fasting testosterone sample.</li>
        <li>Not repeating a low result before starting testosterone replacement therapy.</li>
        <li>Relying on total testosterone alone in an obese or older patient without considering SHBG or free testosterone.</li>
        <li>Not checking prolactin in a patient with confirmed low testosterone and low/inappropriately normal LH.</li>
        <li>Not asking about anabolic steroid or supplement use.</li>
        <li>Ordering hormonal testing before semen analysis in a couple presenting with infertility.</li>
        <li>Attributing all symptoms of fatigue, low libido, or erectile dysfunction to "low testosterone" without confirmed biochemical hypogonadism.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Reading Order in Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Confirm the testosterone sample was drawn in the morning (7-10 AM) and fasting; repeat under correct conditions if not.</li>
        <li>Require a confirmed low result on at least two properly timed samples, alongside compatible symptoms, before diagnosing hypogonadism.</li>
        <li>Use LH (and FSH where fertility is relevant) to localise the problem as primary versus secondary (Section 4).</li>
        <li>Check prolactin in any confirmed secondary hypogonadism pattern, and obtain pituitary imaging regardless of prolactin if testosterone is below roughly 150 ng/dL with a low/inappropriately normal LH.</li>
        <li>Actively screen for reversible/functional contributors before attributing findings purely to primary gonadal failure.</li>
        <li>In an infertility context, start with semen analysis rather than the hormonal panel.</li>
      </ol>
      </div>
      
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always confirm morning, fasting timing before acting on a low testosterone result.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Major guidelines disagree on the exact cutoff (264-300 ng/dL) - be consistent with one framework.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Testosterone below ~150 ng/dL with a low/inappropriately normal LH needs pituitary MRI even if prolactin is normal.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Semen analysis comes before hormonal testing in an infertility workup.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask directly about anabolic steroid, supplement, and herbal "virility" remedy use.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Urological Association - Evaluation and Management of Testosterone Deficiency Guideline.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Bhasin S, et al. - Testosterone Therapy in Men with Hypogonadism: An Endocrine Society Clinical Practice Guideline. JCEM, 2018.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - WHO Laboratory Manual for the Examination and Processing of Human Semen, 6th edition, 2021.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'lab-electrolytes-urea-creatinine',
        title: 'Electrolytes, Urea, and Creatinine',
        category: 'Laboratory Interpretation',
        subCategory: 'Nephrology',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Interpreting Electrolytes, Urea, and Creatinine (E/U/Cr)</title>
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
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting Electrolytes, Urea, and Creatinine (E/U/Cr)</h1>
        <p class="text-sm text-indigo-200">E/U/Cr is requested constantly in Nigerian practice - for dehydration, sepsis, suspected AKI, herbal or traditional remedy toxicity, and as a baseline before starting nephrotoxic drugs - but is frequently read as a single "normal/abnormal" verdict rather than a set of individually interpretable values that, read together, usually tell a specific mechanistic story.</p>
      </div>
      </div>
      
      <!-- 1. Sodium -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Sodium (Na&#8314;)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 font-medium">Na&#8314; (mmol/L)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Hyponatraemia</td><td class="py-2">&lt; 135</td></tr>
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2">135-145</td></tr>
            <tr><td class="py-2 pr-3">Hypernatraemia</td><td class="py-2">&gt; 145</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Sodium reflects water balance far more than total body sodium content in most clinical scenarios - a low sodium usually means relatively too much water, not too little salt, and correcting it by giving salt rather than addressing water balance is a common error.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Hyponatraemia - Common Causes Here</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Gastroenteritis with free water replacement (oral rehydration or plain water without adequate electrolyte content).</li>
          <li>Excessive antipyretic use with poor oral electrolyte intake in febrile illness.</li>
          <li>SIADH - meningitis, cerebral malaria, and pneumonia are all recognised precipitants locally.</li>
          <li>Diuretic use (thiazides particularly).</li>
          <li>Heart failure and cirrhosis (dilutional, with total body sodium often actually increased).</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Hypernatraemia - Common Causes</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Inadequate free water intake relative to losses, particularly in infants, the elderly, or anyone unable to access water independently.</li>
          <li>Diarrhoeal illness with hypotonic fluid loss.</li>
          <li>Diabetes insipidus (uncommon, but consider with very dilute urine output despite hypernatraemia).</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">What to Do Next</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li>Correlate with clinical volume status (skin turgor, mucous membranes, JVP, blood pressure) before choosing a fluid strategy - the sodium number alone does not tell you whether the patient is volume-depleted, euvolaemic, or volume-overloaded, and each requires a different fluid approach.</li>
          <li>Correct chronic hyponatraemia slowly - rapid correction (generally not exceeding 8-10 mmol/L in 24 hours) is essential to avoid osmotic demyelination syndrome; this matters particularly where a patient presents with a markedly low sodium of unknown duration and the temptation is to correct quickly.</li>
          <li>In acute, symptomatic hyponatraemia (seizures, severe confusion), more urgent correction with hypertonic saline is warranted despite the general slow-correction rule - distinguish acute symptomatic hyponatraemia from chronic, incidentally discovered hyponatraemia before deciding on correction speed.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Common Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Treating hyponatraemia by restricting fluids in a volume-depleted patient - this worsens the underlying problem; volume depletion needs isotonic fluid replacement, not restriction.</li>
          <li>Correcting sodium too rapidly in a patient with unknown duration of hyponatraemia, risking osmotic demyelination.</li>
          <li>Missing SIADH as a cause in a febrile or neurologically unwell patient, and attributing hyponatraemia only to poor oral intake.</li>
        </ul>
      </div>
      </div>
      
      <!-- 2. Potassium -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Potassium (K&#8314;)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 font-medium">K&#8314; (mmol/L)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Hypokalaemia</td><td class="py-2">&lt; 3.5</td></tr>
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2">3.5-5.0</td></tr>
            <tr><td class="py-2 pr-3">Hyperkalaemia</td><td class="py-2">&gt; 5.0</td></tr>
            <tr><td class="py-2 pr-3">Severe hyperkalaemia</td><td class="py-2">&gt; 6.5, or any level with ECG changes</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Hypokalaemia - Common Causes</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Gastrointestinal losses (vomiting, diarrhoea - very common given the burden of diarrhoeal disease).</li>
          <li>Diuretic use (loop and thiazide diuretics).</li>
          <li>Poor dietary intake in malnourished patients.</li>
          <li>Metabolic alkalosis (potassium shifts intracellularly).</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Hyperkalaemia - Common Causes</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Acute kidney injury (reduced excretion) - this is the dominant cause to actively exclude in this setting.</li>
          <li>Severe haemolysis, including from malaria itself in a severe case.</li>
          <li>Tissue breakdown (rhabdomyolysis, tumour lysis, severe burns).</li>
          <li>Metabolic acidosis (extracellular shift).</li>
          <li>Certain herbal preparations and unregulated remedies with unclear potassium content or renal effects.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">What to Do Next</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Always obtain an ECG in significant hyperkalaemia</span> (&gt;6.0 mmol/L, or any level with clinical concern) - peaked T waves, widened QRS, and loss of P waves indicate a cardiac emergency requiring immediate treatment (calcium gluconate for cardiac membrane stabilisation, followed by measures to shift potassium intracellularly - insulin-dextrose, salbutamol nebulisation - and measures to remove potassium, including dialysis where accessible).</li>
          <li>Treat hyperkalaemia on clinical urgency and ECG findings rather than waiting for a repeat sample to confirm, given how quickly this can become fatal.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Check for a haemolysed sample</span> before acting on an unexpectedly high potassium in an otherwise well patient - this is extremely common and discussed further below.</li>
          <li>For hypokalaemia, correlate with magnesium where possible - hypomagnesaemia frequently coexists and potassium replacement will not correct fully until magnesium is also corrected.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Common Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Acting on a falsely elevated potassium from a haemolysed sample.</span> Difficult venepuncture, prolonged tourniquet time, sample transport delays, and processing delays in a hot climate all promote in-vitro haemolysis and cellular potassium leakage into serum, producing a falsely high result. Where a hyperkalaemia result is discordant with the clinical picture (well patient, no ECG changes, no risk factors), request a fresh, promptly processed sample before treating.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Under-recognising hyperkalaemia risk in AKI</span> - potassium should be checked early and monitored serially in any patient with confirmed or suspected AKI, rather than only when clinical symptoms prompt testing.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Over-aggressive correction of hypokalaemia via rapid IV potassium</span>, risking iatrogenic hyperkalaemia and cardiac arrhythmia - potassium replacement rate should be limited and, where significant IV correction is needed, ideally with cardiac monitoring.</li>
        </ul>
      </div>
      </div>
      
      <!-- 3. Urea and Creatinine -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Urea and Creatinine
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Marker</th>
              <th class="py-2 font-medium">Typical adult reference range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Urea</td><td class="py-2">2.5-7.5 mmol/L</td></tr>
            <tr><td class="py-2 pr-3">Creatinine</td><td class="py-2">60-110 &micro;mol/L (varies by muscle mass, sex, and lab - confirm your local lab's reference range rather than assuming this applies universally)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Creatinine is a more specific marker of renal filtration than urea, since urea production and excretion are affected by many non-renal factors. Reading them together, rather than urea or creatinine in isolation, differentiates prerenal, renal, and postrenal causes of an elevated result.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Pattern</th>
              <th class="py-2 pr-3 font-medium">Urea:creatinine ratio</th>
              <th class="py-2 font-medium">Suggests</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Disproportionately raised urea relative to creatinine</td><td class="py-2 pr-3">Elevated ratio</td><td class="py-2">Prerenal - dehydration, GI bleeding (blood is a protein load, raising urea independent of renal function), high catabolic state, high-protein diet</td></tr>
            <tr><td class="py-2 pr-3">Urea and creatinine raised proportionately</td><td class="py-2 pr-3">Ratio normal/unchanged</td><td class="py-2">Intrinsic renal disease</td></tr>
            <tr><td class="py-2 pr-3">Creatinine raised more than expected from urea</td><td class="py-2 pr-3">Reduced ratio</td><td class="py-2">Consider rhabdomyolysis (creatinine rises disproportionately from muscle breakdown) or reduced urea production (severe liver disease, malnutrition - urea synthesis is hepatic)</td></tr>
          </tbody>
        </table>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Staging AKI (KDIGO)</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Stage</th>
                <th class="py-2 pr-3 font-medium">Creatinine criteria</th>
                <th class="py-2 font-medium">Urine output criteria</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Stage 1</td><td class="py-2 pr-3">1.5-1.9&times; baseline, or rise &ge; 26.5 &micro;mol/L within 48 hours</td><td class="py-2">&lt; 0.5 mL/kg/hr for 6-12 hours</td></tr>
              <tr><td class="py-2 pr-3">Stage 2</td><td class="py-2 pr-3">2.0-2.9&times; baseline</td><td class="py-2">&lt; 0.5 mL/kg/hr for &ge; 12 hours</td></tr>
              <tr><td class="py-2 pr-3">Stage 3</td><td class="py-2 pr-3">&ge; 3&times; baseline, or creatinine &ge; 353.6 &micro;mol/L, or initiation of renal replacement therapy</td><td class="py-2">&lt; 0.3 mL/kg/hr for &ge; 24 hours, or anuria for &ge; 12 hours</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">This staging is unchanged from the 2012 KDIGO criteria, still the current global standard - confirmed accurate against the source guideline.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">What to Do Next</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li>Establish or estimate a baseline creatinine where possible - a "normal" creatinine in a young previously fit patient may still represent a significant acute rise from their individual baseline, and AKI staging depends on the trajectory, not a single value against a population reference range.</li>
          <li>Actively ask about herbal or traditional remedy use in any patient with unexplained renal impairment - see the dedicated note below.</li>
          <li>Correlate with the clinical context: malaria (both direct renal involvement in severe disease and dehydration-driven prerenal injury), sepsis, obstetric haemorrhage or eclampsia-related AKI, and NSAID use are all common precipitants worth actively screening for.</li>
          <li>For chronic kidney disease staging, estimate GFR (via Cockcroft-Gault or CKD-EPI formulas) rather than relying on creatinine alone, since creatinine is affected by muscle mass and a "normal" creatinine can still reflect significantly reduced GFR in a patient with low muscle mass.</li>
        </ul>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Herbal and Traditional Remedy Nephrotoxicity - A Major Local Cause</strong>
        <p class="text-sm">This deserves more than a passing mention: herbal remedy-induced nephrotoxicity is estimated to account for roughly 30-35% of acute renal failure cases across Africa, and a University College Hospital, Ibadan case series found herbal nephrotoxicity was the leading identifiable precipitant of acute tubular necrosis in its cohort (37.5% of cases), ahead of sepsis. This is not a minor or exotic differential - it should be screened for routinely, not only when other causes have been excluded.</p>
        <p class="text-sm mt-2">Preparations implicated in Nigerian case reports and studies include various "agbo" concoctions sold under names like Agbo Jedi-Jedi, Alomo Bitters, Opa Eyin, and various "bitters" or "cleanser" preparations marketed for stomach or system "washing"; so-called "holy water" or "green water" preparations; and preparations containing mango bark/leaf, cashew shoot, pawpaw leaf, neem ("dogon yaro"), or Solanum erianthum. The active nephrotoxic component is often unidentified, but some traditional preparations globally contain aristolochic acid, a well-documented and potent nephrotoxin, and locally-sourced products may also be adulterated with heavy metals or undeclared pharmaceutical agents that independently contribute to renal injury.</p>
        <p class="text-sm mt-2">Ask specifically and non-judgmentally, using the actual local terms patients use (agbo, bitters, cleansers) rather than only "herbal medicine," since patients may not associate a locally familiar preparation with that broader category.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Common Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Treating a single creatinine value as sufficient for AKI diagnosis without trend or baseline context.</span> AKI is defined by change over time, not an absolute threshold alone.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Missing prerenal AKI from dehydration in febrile illness</span> (malaria, typhoid, gastroenteritis) - this is often reversible with prompt rehydration, and recognising the prerenal pattern (raised urea:creatinine ratio) versus established intrinsic renal injury changes both prognosis and fluid management urgency.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Not asking about herbal/traditional remedy use</span> in unexplained renal impairment - a major and probably still underrecognised contributor to AKI and CKD in Nigerian practice, as above.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Using creatinine alone to assess renal function in patients with very low or very high muscle mass</span> (severely malnourished patients, amputees, bodybuilders) without adjusting interpretation - creatinine production depends on muscle mass, so the same creatinine value represents different actual GFR in different patients.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Overlooking medication dose adjustment</span> once renal impairment is identified - many commonly used drugs (certain antibiotics, metformin, some antimalarials) require dose adjustment or avoidance in significant renal impairment, and this is easy to miss once the abnormal result itself has been noted and "actioned" on paper.</li>
        </ul>
      </div>
      </div>
      
      <!-- 4. Reading order -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Reading Order in Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Check sodium and potassium first for any values requiring immediate action (severe hyper/hypokalaemia with ECG changes, severe hypo/hypernatraemia with neurological symptoms).</li>
        <li>Assess urea and creatinine together, using the urea:creatinine ratio to distinguish a prerenal pattern from established intrinsic renal injury.</li>
        <li>Compare against any available baseline to determine whether this represents an acute change (AKI) or a chronic, stable abnormality (CKD) - the distinction changes both urgency and the diagnostic approach.</li>
        <li>Correlate all findings with the clinical picture - volume status, precipitating illness, medication history (including herbal/traditional remedies), and urine output.</li>
        <li>Reassess trend with repeat testing rather than treating a single result as the final word, particularly in an unwell or deteriorating patient.</li>
      </ol>
      </div>
      
      <!-- 5. Findings not to be missed -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Findings That Must Not Be Missed
      </h2>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Potassium &gt; 6.0 mmol/L, or any level with ECG changes</span> - get an ECG and treat on clinical urgency; do not wait for a repeat sample.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Acute symptomatic hyponatraemia</span> (seizures, severe confusion) - this needs urgent correction with hypertonic saline, unlike chronic hyponatraemia which must be corrected slowly.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Unexplained renal impairment without a specific history of herbal or traditional remedy use having been asked about</span> - given this accounts for roughly a third of acute renal failure in African case series, this question should be routine, not an afterthought.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A raised urea:creatinine ratio in a febrile, dehydrated patient</span> - this is often reversible prerenal injury; prompt rehydration changes the trajectory significantly.</span></li>
      </ul>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Correlate sodium with clinical volume status - the number alone doesn't tell you whether to give fluid or restrict it.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Rule out a haemolysed sample before treating an unexpected hyperkalaemia in a well patient.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use the urea:creatinine ratio to separate prerenal from intrinsic renal causes - this changes both urgency and fluid strategy.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about herbal and traditional remedy use routinely in renal impairment, using the actual local terms - this is a leading, not incidental, cause locally.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>AKI is defined by trend, not a single value - always seek or estimate a baseline before staging.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Kidney Disease: Improving Global Outcomes (KDIGO) - Clinical Practice Guideline for Acute Kidney Injury, 2012.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Akpan EE, Ekrikpo UE - Acute Renal Failure Induced by Chinese Herbal Medication in Nigeria. Case Reports in Medicine, 2015.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Kadiri S, et al. - Causes of Acute Tubular Necrosis in Nigeria, University College Hospital, Ibadan.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'lab-liver-function-tests',
        title: 'Liver Function Tests',
        category: 'Laboratory Interpretation',
        subCategory: 'Hepatology',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Interpreting Liver Function Tests (LFTs)</title>
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
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting Liver Function Tests (LFTs)</h1>
        <p class="text-sm text-indigo-200">LFTs are requested constantly in Nigerian practice - for jaundice, suspected viral hepatitis, before and during anti-tuberculous therapy, in antenatal care, and in anyone with suspected herbal or traditional remedy toxicity. The panel is a set of markers reflecting different aspects of liver function and injury, not a single "liver is fine/not fine" verdict, and the pattern across markers usually points toward a specific mechanism before any imaging or further workup is needed.</p>
      </div>
      </div>
      
      <!-- 1. The Panel -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      The Panel and What Each Component Reflects
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 font-medium">What it reflects</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">ALT (alanine aminotransferase)</td><td class="py-2">Hepatocellular injury - relatively liver-specific</td></tr>
            <tr><td class="py-2 pr-3">AST (aspartate aminotransferase)</td><td class="py-2">Hepatocellular injury, but also present in muscle, heart, and red cells - less liver-specific than ALT</td></tr>
            <tr><td class="py-2 pr-3">ALP (alkaline phosphatase)</td><td class="py-2">Biliary/cholestatic injury; also present in bone, placenta, and gut - needs clinical context or GGT to confirm hepatobiliary origin</td></tr>
            <tr><td class="py-2 pr-3">GGT (gamma-glutamyl transferase)</td><td class="py-2">Confirms hepatobiliary origin of a raised ALP; also sensitive to alcohol use and enzyme induction by certain drugs</td></tr>
            <tr><td class="py-2 pr-3">Total bilirubin</td><td class="py-2">Overall bilirubin load - split into direct (conjugated) and indirect (unconjugated) to localise the problem</td></tr>
            <tr><td class="py-2 pr-3">Direct (conjugated) bilirubin</td><td class="py-2">Raised in hepatocellular and cholestatic disease - the liver has conjugated it but excretion is impaired</td></tr>
            <tr><td class="py-2 pr-3">Indirect (unconjugated) bilirubin</td><td class="py-2">Raised in haemolysis or impaired hepatic conjugation (e.g. Gilbert syndrome) - the liver hasn't yet processed it</td></tr>
            <tr><td class="py-2 pr-3">Albumin</td><td class="py-2">Synthetic liver function; also affected by nutritional status, inflammation, and nephrotic losses - a marker of chronic rather than acute liver function</td></tr>
            <tr><td class="py-2 pr-3">Prothrombin time (PT/INR)</td><td class="py-2">Synthetic liver function, reflecting clotting factor production - more sensitive to acute hepatic synthetic failure than albumin, which has a longer half-life</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 2. Reference Ranges -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Reference Ranges
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 font-medium">Typical adult reference range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">ALT</td><td class="py-2">7-40 U/L</td></tr>
            <tr><td class="py-2 pr-3">AST</td><td class="py-2">8-40 U/L</td></tr>
            <tr><td class="py-2 pr-3">ALP</td><td class="py-2">40-130 U/L</td></tr>
            <tr><td class="py-2 pr-3">GGT</td><td class="py-2">9-48 U/L (men), 9-32 U/L (women)</td></tr>
            <tr><td class="py-2 pr-3">Total bilirubin</td><td class="py-2">3-17 &micro;mol/L</td></tr>
            <tr><td class="py-2 pr-3">Direct bilirubin</td><td class="py-2">0-5 &micro;mol/L</td></tr>
            <tr><td class="py-2 pr-3">Albumin</td><td class="py-2">35-50 g/L</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Ranges vary by lab and assay - interpret against the specific range printed on the result. Pregnancy physiologically alters some of these values (ALP rises from placental production; albumin falls from haemodilution), which matters when interpreting LFTs in antenatal patients (Section 5).</p>
      </div>
      
      <!-- 3. Pattern -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Recognising the Pattern
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Pattern</th>
              <th class="py-2 pr-3 font-medium">ALT/AST</th>
              <th class="py-2 pr-3 font-medium">ALP/GGT</th>
              <th class="py-2 font-medium">Typical mechanism</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Hepatocellular</td><td class="py-2 pr-3">Markedly raised (often &gt;5-10&times; upper limit in acute injury)</td><td class="py-2 pr-3">Normal or mildly raised</td><td class="py-2">Viral hepatitis, drug-induced liver injury, ischaemic hepatitis, severe malaria-related hepatic involvement</td></tr>
            <tr><td class="py-2 pr-3">Cholestatic</td><td class="py-2 pr-3">Normal or mildly raised</td><td class="py-2 pr-3">Markedly raised, GGT confirms hepatobiliary origin</td><td class="py-2">Biliary obstruction (gallstones, stricture, malignancy), some drug reactions, primary biliary/sclerosing cholangitis</td></tr>
            <tr><td class="py-2 pr-3">Mixed</td><td class="py-2 pr-3">Both moderately raised</td><td class="py-2 pr-3">Both moderately raised</td><td class="py-2">Many drug-induced injuries, some viral hepatitis, infiltrative disease</td></tr>
            <tr><td class="py-2 pr-3">Isolated hyperbilirubinaemia, indirect-predominant</td><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">Normal</td><td class="py-2">Haemolysis, Gilbert syndrome - this is not primary liver disease</td></tr>
            <tr><td class="py-2 pr-3">Isolated hyperbilirubinaemia, direct-predominant</td><td class="py-2 pr-3">Normal or mildly raised</td><td class="py-2 pr-3">Normal or mildly raised</td><td class="py-2">Early cholestasis, some inherited conjugation/excretion disorders (Dubin-Johnson, Rotor)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">The pattern, read together, usually narrows the differential more efficiently than any single value. A markedly raised ALT with normal ALP points strongly toward a hepatocellular process; a markedly raised ALP with GGT confirmation and near-normal transaminases points toward obstruction - these two categories have substantially different next steps (Section 6).</p>
      </div>
      
      <!-- 4. Magnitude -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Magnitude Matters
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">ALT/AST elevation</th>
              <th class="py-2 font-medium">Typical causes to consider</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Mild (1-3&times; upper limit)</td><td class="py-2">Fatty liver, chronic viral hepatitis, alcohol, many drugs including some antituberculous agents at a subclinical level</td></tr>
            <tr><td class="py-2 pr-3">Moderate (3-10&times; upper limit)</td><td class="py-2">Active viral hepatitis, more significant drug-induced injury, autoimmune hepatitis</td></tr>
            <tr><td class="py-2 pr-3">Marked (&gt;10-15&times; upper limit, often into the thousands)</td><td class="py-2">Acute viral hepatitis, severe drug-induced liver injury, ischaemic/hypoxic hepatitis (shock liver), acute severe malaria with hepatic involvement</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">A very high transaminase level (often described informally as "liver enzymes in the thousands") with a relatively preserved bilirubin and INR suggests the liver is injured but still functioning synthetically - the trend and synthetic function (Section 1, PT/INR and albumin) matter more for prognosis than the peak transaminase number itself.</p>
      </div>
      
      <!-- 5. Clinical Scenarios -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Common Clinical Scenarios in Nigerian Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Viral Hepatitis (B and C)</strong>
        <p class="text-sm">Given the endemic burden of chronic hepatitis B in Nigeria, LFTs in a patient with risk factors or incidental abnormal results should prompt hepatitis B and C serology rather than treating a hepatocellular pattern as idiopathic. A normal ALT does not exclude chronic hepatitis B - many patients with chronic infection have normal or near-normal transaminases despite ongoing viral replication, particularly in the immune-tolerant phase; serology and viral load assessment, not ALT alone, establish the diagnosis and phase.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Anti-Tuberculous Therapy</strong>
        <p class="text-sm">Isoniazid, rifampicin, and pyrazinamide are all potentially hepatotoxic. Baseline LFTs before starting treatment, and monitoring during the first weeks (particularly in patients with pre-existing liver disease, viral hepatitis co-infection, alcohol use, low BMI, or older age - all independently associated with higher hepatotoxicity risk in African cohorts), are standard practice.</p>
        <p class="text-sm mt-2">The widely used stopping criteria (American Thoracic Society, and reflected in national TB programme practice where a distinct local numeric threshold isn't separately specified): discontinue hepatotoxic agents if ALT rises to <span class="font-medium text-slate-800 dark:text-slate-200">3 times the upper limit of normal with symptoms</span> of hepatitis (nausea, vomiting, jaundice, abdominal pain) or a raised bilirubin, or if ALT rises to <span class="font-medium text-slate-800 dark:text-slate-200">5 times the upper limit of normal even without symptoms</span>.</p>
        <p class="text-sm mt-2">Reintroduction is generally still pursued once LFTs normalise, even in patients who were asymptomatic, since rifampicin and isoniazid are the most bactericidal agents and non-hepatotoxic substitutes are less effective and require longer, more complex regimens. The standard approach (reflected in Nigerian paediatric and adult practice) is sequential reintroduction starting with rifampicin first, then isoniazid added a few days later if tolerated, with pyrazinamide reintroduced last or omitted from the regimen altogether if hepatotoxicity recurs - full-dose reintroduction of a pyrazinamide-containing regimen carries a meaningfully higher recurrence rate than gradual, sequential reintroduction. Confirm the specific protocol in use against current National Tuberculosis and Leprosy Control Programme (NTBLCP) guidance.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Herbal and Traditional Remedy Hepatotoxicity</strong>
        <p class="text-sm">A significant and likely underrecognised cause of drug-induced liver injury in Nigerian practice. Ask specifically and non-judgementally about herbal preparations, concoctions, and traditional remedies in any patient with unexplained hepatocellular injury - this history is often not volunteered without direct, repeated questioning, in the same way discussed for nephrotoxicity in the E/U/Cr guide.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Severe Malaria</strong>
        <p class="text-sm">Hepatic involvement (jaundice, moderately raised transaminases) occurs in severe malaria and can be difficult to distinguish from primary hepatitis on LFTs alone - the broader clinical picture (fever pattern, parasitaemia, other severity markers) should guide the diagnosis, and LFT abnormalities in this context often improve with antimalarial treatment rather than requiring separate hepatic workup, provided the pattern and trajectory fit.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Pregnancy-Related Liver Disease</strong>
        <p class="text-sm">LFT abnormalities in pregnancy carry a specific differential that should not be forced into the standard non-pregnant framework.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Condition</th>
                <th class="py-2 pr-3 font-medium">Typical LFT pattern</th>
                <th class="py-2 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Intrahepatic cholestasis of pregnancy</td><td class="py-2 pr-3">Raised ALT, raised bile acids (where available), pruritus without rash</td><td class="py-2">Third trimester typically; itching, particularly palms/soles, is the key clinical clue</td></tr>
              <tr><td class="py-2 pr-3">Pre-eclampsia/HELLP syndrome</td><td class="py-2 pr-3">Raised AST/ALT, low platelets, evidence of haemolysis (raised LDH, low haptoglobin, schistocytes)</td><td class="py-2">An obstetric emergency - LFT abnormality here is one component of a broader syndrome, not an isolated liver problem</td></tr>
              <tr><td class="py-2 pr-3">Acute fatty liver of pregnancy</td><td class="py-2 pr-3">Markedly raised transaminases, low glucose, deranged clotting, raised ammonia</td><td class="py-2">Rare but life-threatening; requires urgent recognition and delivery</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">LFT abnormality discovered in the third trimester should prompt this specific differential rather than being worked up as if the patient were not pregnant.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Sickle Cell Disease</strong>
        <p class="text-sm">Chronic haemolysis produces a raised indirect bilirubin as a baseline finding, not evidence of hepatic dysfunction - recognising this baseline pattern avoids unnecessary hepatic workup in a patient whose LFTs otherwise show no hepatocellular or cholestatic abnormality. Sickle hepatopathy (from vaso-occlusion within the liver itself) is a separate, less common entity that does produce genuine hepatocellular pattern changes and should be considered in a patient with SCD and new transaminase elevation beyond what chronic haemolysis alone would explain.</p>
      </div>
      </div>
      
      <!-- 6. What to do next -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      What to Do Next, by Pattern
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Hepatocellular pattern:</span> hepatitis B/C serology, history of alcohol/herbal/drug exposure, consider hepatitis A/E in the appropriate exposure context, correlate with malaria testing if febrile.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Cholestatic pattern:</span> abdominal ultrasound to assess for biliary obstruction/dilatation, review medication list for cholestatic drug reactions, consider malignancy in an older patient with a new obstructive pattern.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Isolated indirect hyperbilirubinaemia:</span> assess for haemolysis (reticulocyte count, blood film, haptoglobin/LDH where available) before assuming Gilbert syndrome; in a patient with known SCD, this is frequently the expected baseline.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Any marked elevation with synthetic dysfunction</span> (prolonged INR, falling albumin, encephalopathy): treat as acute liver failure until proven otherwise - this is a medical emergency requiring urgent escalation, not routine outpatient follow-up.</li>
      </ul>
      </div>
      
      <!-- 7. Pitfalls -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Common Pitfalls
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Treating a raised ALP as liver disease without checking GGT or clinical context, when it may be bone- or pregnancy-related in origin.</li>
        <li>Assuming a normal ALT excludes chronic hepatitis B - a substantial proportion of chronically infected patients have normal or near-normal transaminases; screen by risk factor and serology, not by ALT alone.</li>
        <li>Not asking about herbal/traditional remedy use in unexplained hepatocellular injury, in the same way this is under-asked for renal impairment.</li>
        <li>Forcing pregnancy-related LFT abnormalities into the standard non-pregnant differential rather than considering the pregnancy-specific conditions in Section 5.</li>
        <li>Missing sickle cell disease as the explanation for a chronically raised indirect bilirubin, and pursuing an unnecessary hepatic workup rather than recognising the expected haemolytic pattern.</li>
        <li>Not correlating anti-TB drug LFT monitoring with symptoms and trend, either stopping too early on a mild, asymptomatic, stable rise, or continuing too long through a significant symptomatic rise.</li>
        <li>Treating peak transaminase level alone as the marker of severity, without weighing synthetic function (INR, albumin) - a patient with very high transaminases but preserved synthetic function has a different prognosis from one with more modest transaminase elevation but a prolonged INR.</li>
      </ul>
      </div>
      
      <!-- 8. Reading order -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Reading Order in Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Classify the pattern: hepatocellular, cholestatic, mixed, or isolated hyperbilirubinaemia (Section 3).</li>
        <li>Assess magnitude of transaminase elevation and correlate with the clinical timeline (Section 4).</li>
        <li>Check synthetic function (INR, albumin) in any patient with significant abnormality - this determines urgency more than the transaminase level alone.</li>
        <li>Apply the relevant clinical context: pregnancy, known SCD, TB treatment, malaria, and directed questioning about alcohol and herbal remedy use.</li>
        <li>Direct further workup by pattern (Section 6) rather than a generic "repeat in some weeks" for every abnormal result.</li>
        <li>Escalate urgently for any evidence of synthetic dysfunction or encephalopathy - this does not wait for outpatient follow-up.</li>
      </ol>
      </div>
      
      <!-- 9. Findings not to be missed -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">9</span>
      Findings That Must Not Be Missed
      </h2>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Any marked LFT abnormality with a prolonged INR, falling albumin, or encephalopathy</span> - treat as acute liver failure until proven otherwise and escalate urgently.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">ALT &ge; 3&times; ULN with symptoms, or &ge; 5&times; ULN without symptoms, on anti-TB therapy</span> - stop the hepatotoxic agents; do not push through on the assumption it will settle.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">New LFT abnormality in the third trimester</span> - work up against the pregnancy-specific differential (ICP, HELLP, AFLP) rather than the standard non-pregnant framework.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Unexplained hepatocellular injury without a herbal/traditional remedy history having been asked about</span> - ask specifically before labelling the picture idiopathic.</span></li>
      </ul>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Read the pattern across the whole panel, not any single marker - hepatocellular vs cholestatic vs isolated hyperbilirubinaemia points to different next steps.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Synthetic function (INR, albumin) determines urgency more reliably than the transaminase level alone.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>On anti-TB therapy, reintroduce sequentially - rifampicin first, then isoniazid, then pyrazinamide last or omitted - rather than restarting the full regimen at once.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A normal ALT does not exclude chronic hepatitis B - screen by risk factor and serology.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ask about herbal and traditional remedy use routinely in unexplained liver injury, not only after other causes are exhausted.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Thoracic Society/CDC/Infectious Diseases Society of America - Official Statement: Hepatotoxicity of Antituberculosis Therapy.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Tuberculosis and Leprosy Control Programme, Nigeria - Diagnosis and Treatment Guidelines.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Sanni FO, et al. (University of Ilorin Teaching Hospital) - Hepatotoxicity Due to Antituberculosis Therapy Among Paediatric Patients.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'lab-thyroid-function-tests',
        title: 'Thyroid Function Tests',
        category: 'Laboratory Interpretation',
        subCategory: 'Endocrinology',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Interpreting Thyroid Function Tests (TFTs)</title>
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
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting Thyroid Function Tests (TFTs)</h1>
        <p class="text-sm text-indigo-200">TFTs are requested for a wide range of presentations - goitre, unexplained weight change, fatigue, palpitations, menstrual irregularity, infertility, and as part of antenatal or neonatal screening - but the results are frequently misread in isolation, without the pattern-recognition that TSH and free T4/T3 together are meant to provide. In Nigeria specifically, iodine status, cost-driven test selection, and pregnancy-specific reference ranges all shape how these results should be read.</p>
      </div>
      </div>
      
      <!-- 1. The Panel -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      The Basic Panel and What Each Component Measures
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 font-medium">What it reflects</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">TSH (thyroid-stimulating hormone)</td><td class="py-2">Pituitary response to circulating thyroid hormone levels - the most sensitive single marker of thyroid status in a patient with an intact hypothalamic-pituitary axis</td></tr>
            <tr><td class="py-2 pr-3">Free T4 (FT4)</td><td class="py-2">Circulating unbound thyroxine, the main hormone secreted by the thyroid</td></tr>
            <tr><td class="py-2 pr-3">Free T3 (FT3)</td><td class="py-2">Circulating unbound triiodothyronine, the more metabolically active hormone, largely converted from T4 peripherally</td></tr>
            <tr><td class="py-2 pr-3">Total T4/T3</td><td class="py-2">Bound plus unbound hormone - affected by binding protein levels (pregnancy, oestrogen use, liver disease, malnutrition all alter binding protein levels), making free hormone assays generally more reliable where available</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">TSH is the correct first-line screening test</span> in a patient with a normally functioning pituitary and hypothalamus. Requesting a full panel (TSH + FT4 + FT3) as the routine first test, rather than TSH alone with reflex testing if abnormal, is common in Nigerian practice partly due to how panels are packaged and priced by labs - but understanding the TSH-first logic still matters for interpretation, particularly when only partial results come back or when cost constraints limit what can be ordered.</p>
      </div>
      
      <!-- 2. Reference Ranges -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Reference Ranges
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 font-medium">Typical adult reference range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">TSH</td><td class="py-2">0.4-4.0 mIU/L (varies by assay/lab)</td></tr>
            <tr><td class="py-2 pr-3">Free T4</td><td class="py-2">10-25 pmol/L (varies by assay/lab)</td></tr>
            <tr><td class="py-2 pr-3">Free T3</td><td class="py-2">3.5-6.5 pmol/L (varies by assay/lab)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Reference ranges vary meaningfully between assay platforms and labs - always interpret against the specific range printed on the result, not a memorised figure, particularly when comparing serial results from different facilities.</p>
      </div>
      
      <!-- 3. Pattern -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Interpreting the Pattern
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">TSH</th>
              <th class="py-2 pr-3 font-medium">FT4</th>
              <th class="py-2 pr-3 font-medium">Pattern</th>
              <th class="py-2 font-medium">Interpretation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">High</td><td class="py-2 pr-3">Low</td><td class="py-2 pr-3">Classic</td><td class="py-2">Primary hypothyroidism</td></tr>
            <tr><td class="py-2 pr-3">High</td><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">Subclinical</td><td class="py-2">Subclinical hypothyroidism</td></tr>
            <tr><td class="py-2 pr-3">Low</td><td class="py-2 pr-3">High</td><td class="py-2 pr-3">Classic</td><td class="py-2">Primary hyperthyroidism (thyrotoxicosis)</td></tr>
            <tr><td class="py-2 pr-3">Low</td><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">Subclinical</td><td class="py-2">Subclinical hyperthyroidism</td></tr>
            <tr><td class="py-2 pr-3">Low</td><td class="py-2 pr-3">Low</td><td class="py-2 pr-3">Atypical</td><td class="py-2">Consider secondary (pituitary) hypothyroidism, or non-thyroidal illness (sick euthyroid syndrome) - see Section 5</td></tr>
            <tr><td class="py-2 pr-3">High</td><td class="py-2 pr-3">High</td><td class="py-2 pr-3">Atypical</td><td class="py-2">Consider TSH-secreting pituitary adenoma (rare), thyroid hormone resistance, or poor compliance with levothyroxine with a recent dose taken just before sampling (transient FT4 elevation)</td></tr>
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">Euthyroid</td><td class="py-2">Thyroid function is not the explanation for the presenting complaint - look elsewhere, or reconsider timing/technical factors if the clinical suspicion remains strong</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Reading the pattern, not the single value, is the core skill. An isolated TSH result without a paired FT4 tells you direction but not always magnitude or category (overt vs subclinical) - this distinction changes management, particularly around whether to treat.</p>
      </div>
      
      <!-- 4. Clinical Scenarios -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Common Clinical Scenarios in Nigerian Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Goitre with Normal TFTs (Euthyroid Goitre)</strong>
        <p class="text-sm">Common where iodine deficiency remains present despite universal salt iodisation programmes, or from other causes of simple/colloid goitre. Normal TFTs with a goitre do not exclude a structural indication for further evaluation (ultrasound, and where relevant, fine-needle aspiration) - thyroid function and thyroid structure are separate questions, and a euthyroid patient can still have a nodule or mass requiring assessment.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Postpartum Thyroid Dysfunction</strong>
        <p class="text-sm">Postpartum thyroiditis (a transient thyrotoxic phase, sometimes followed by a hypothyroid phase, in the months following delivery) is under-recognised in Nigerian practice, where postpartum fatigue, mood change, and palpitations are often attributed to normal postpartum adjustment rather than screened for thyroid dysfunction. Consider TFTs in a postpartum woman with persistent or atypical symptoms.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Pregnancy</strong>
        <p class="text-sm">TSH reference ranges shift in pregnancy - largely due to the thyrotropic effect of hCG, which is highest in the first trimester - and trimester-specific, population-based reference ranges are recommended wherever available, since they are more accurate than any fixed cutoff.</p>
        <p class="text-sm mt-2">Where local trimester-specific ranges are not available, current ATA guidance recommends a fixed working upper limit for TSH of <span class="font-medium text-slate-800 dark:text-slate-200">4.0 mIU/L</span> (roughly 0.5 mIU/L below the standard non-pregnant upper limit), applied from around weeks 7-12, with a gradual return toward the non-pregnant range through the second and third trimesters. This supersedes the older, frequently-cited 2011 figure of a fixed 0.1-2.5 mIU/L first-trimester range - that fixed lower cutoff was found in later studies to overdiagnose subclinical hypothyroidism and lead to unnecessary treatment, which is why the guidance was revised upward. Be aware that even the 4.0 mIU/L fallback is an imperfect substitute for a real local reference range - population data show a fixed cutoff correctly identifies less than half of true overt hypothyroidism cases in some cohorts, misclassifying the remainder as euthyroid or subclinical.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Treatment thresholds for subclinical hypothyroidism in pregnancy</span> depend on thyroid peroxidase antibody (TPOAb) status, not TSH alone:</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">TPOAb status</th>
                <th class="py-2 pr-3 font-medium">TSH</th>
                <th class="py-2 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Positive</td><td class="py-2 pr-3">Above the pregnancy-specific range (or &gt;4.0 mIU/L if using the fallback)</td><td class="py-2">Treat with levothyroxine (strong recommendation)</td></tr>
              <tr><td class="py-2 pr-3">Positive</td><td class="py-2 pr-3">2.5 mIU/L up to the upper limit</td><td class="py-2">Treatment may be considered (weak recommendation)</td></tr>
              <tr><td class="py-2 pr-3">Negative</td><td class="py-2 pr-3">&gt; 10.0 mIU/L</td><td class="py-2">Treat regardless of trimester (strong recommendation)</td></tr>
              <tr><td class="py-2 pr-3">Negative</td><td class="py-2 pr-3">Above the pregnancy-specific range but &lt; 10.0 mIU/L</td><td class="py-2">Treatment may be considered, particularly if identified in the first trimester (weak recommendation)</td></tr>
              <tr><td class="py-2 pr-3">Negative</td><td class="py-2 pr-3">Normal TSH</td><td class="py-2">Levothyroxine not recommended</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">TB and Rifampicin</strong>
        <p class="text-sm">Rifampicin is a potent inducer of hepatic cytochrome P450 enzymes (particularly CYP3A4) and UGT conjugating enzymes, which increases the metabolic clearance and biliary excretion of thyroid hormone. In a patient with a normally functioning thyroid, this typically produces a mild fall in total/free T4 <span class="font-medium text-slate-800 dark:text-slate-200">without</span> a compensatory rise in TSH, because the thyroid gland increases output to compensate (thyroid volume has been shown to increase measurably during rifampicin treatment as part of this compensation) - a mildly low FT4 with a normal TSH on rifampicin is not, by itself, evidence of thyroid disease.</p>
        <p class="text-sm mt-2">The clinically important exception is a patient with reduced thyroid reserve - established hypothyroidism on levothyroxine replacement, prior thyroidectomy, or underlying autoimmune thyroiditis - who cannot mount this compensatory increase. In this group, rifampicin can precipitate genuine, sometimes marked, hypothyroidism, with one study reporting roughly a quarter of patients on replacement levothyroxine needing a dose increase after starting rifampicin. Check TFTs before starting rifampicin in any patient with known thyroid disease or on levothyroxine, and recheck at around 3 and 6 months into treatment - spacing the two drugs apart during the day does not prevent this interaction, since it works through metabolism rather than absorption, so the fix is dose adjustment, not timing.</p>
      </div>
      </div>
      
      <!-- 5. Sick Euthyroid -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Sick Euthyroid Syndrome (Non-Thyroidal Illness)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Acute severe illness - sepsis, severe malaria, major trauma, prolonged starvation - commonly alters TFTs without true thyroid disease being present. This is a frequent source of misinterpretation in acutely unwell Nigerian inpatients where TFTs are checked as part of a broad workup.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Pattern</th>
              <th class="py-2 font-medium">Typical finding in sick euthyroid syndrome</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Low T3</td><td class="py-2">Reduced peripheral conversion of T4 to T3 - often the earliest and most consistent change</td></tr>
            <tr><td class="py-2 pr-3">Low or low-normal T4</td><td class="py-2">Seen with more severe or prolonged illness</td></tr>
            <tr><td class="py-2 pr-3">TSH</td><td class="py-2">Usually normal or mildly low during acute illness, sometimes mildly elevated during the recovery phase</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Practical implication:</span> avoid diagnosing or treating thyroid dysfunction based on TFTs drawn during acute severe illness. Where thyroid function genuinely needs assessment, repeat testing after clinical recovery gives a much more interpretable result. Treating a sick euthyroid pattern as true hypothyroidism and starting levothyroxine in an acutely unwell patient is a recognised and avoidable error.</p>
      </div>
      
      <!-- 6. Pitfalls -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Common Pitfalls
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Ordering and interpreting FT4/FT3 without TSH, or vice versa, and drawing a firm conclusion from a partial panel - cost constraints sometimes limit testing to what a patient can afford, but this should be explicit in the clinical reasoning ("TSH pending, working diagnosis based on FT4 alone") rather than treated as equivalent to a full panel result.</li>
        <li>Interpreting TFTs drawn during acute illness as reflective of baseline thyroid status, without considering sick euthyroid syndrome (Section 5).</li>
        <li>Applying non-pregnant TSH reference ranges to a pregnant patient, risking a missed diagnosis (using too high a cutoff) or overdiagnosis (using too low a cutoff) depending on direction.</li>
        <li>Treating subclinical hypothyroidism the same as overt hypothyroidism without considering the specific indications for treatment at the subclinical stage (Section 4) - not every subclinical result requires immediate levothyroxine.</li>
        <li>Missing a goitre's structural workup because TFTs are normal - euthyroid does not mean "nothing further to do" in a patient with a palpable thyroid abnormality.</li>
        <li>Not accounting for timing relative to levothyroxine dosing when a treated hypothyroid patient's FT4 looks unexpectedly high with a still-elevated TSH - this combination can reflect poor adherence with a dose taken shortly before the blood draw ("white coat compliance"), rather than a need to increase the dose; ask specifically about the timing of the last dose relative to sampling.</li>
        <li>Not repeating an unexpected or discordant result before acting on it - assay interference, sample handling issues, and biotin supplement use (biotin can interfere with some immunoassay platforms, producing falsely low TSH and falsely high FT4/FT3) are all recognised causes of a result that doesn't fit the clinical picture.</li>
      </ul>
      </div>
      
      <!-- 7. Reading order -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Reading Order in Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Confirm which tests were actually done (TSH alone, or paired with FT4/FT3) and interpret within that limitation rather than assuming a complete picture.</li>
        <li>Classify the pattern using Section 3 - high/low TSH against high/low/normal FT4 - before attaching a diagnosis.</li>
        <li>Consider the clinical context specifically: is the patient acutely unwell (consider sick euthyroid), pregnant (use trimester-specific or the 4.0 mIU/L fallback range), postpartum (consider postpartum thyroiditis), or on rifampicin (consider the expected mild FT4 fall, and check for reduced thyroid reserve).</li>
        <li>For a goitre with normal TFTs, proceed to structural assessment rather than closing the workup.</li>
        <li>Where a result is unexpected or doesn't fit the clinical picture, repeat before treating, and specifically ask about biotin supplement use and, in a treated patient, the timing of the last levothyroxine dose relative to sampling.</li>
      </ol>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Read TSH and FT4 together as a pattern - a single value tells you direction but not the full clinical category.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>In pregnancy, use a trimester-specific local range where available; where not, 4.0 mIU/L is the current fallback upper limit for TSH - not the older 2.5 mIU/L figure.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>TPOAb status, not TSH alone, determines whether subclinical hypothyroidism in pregnancy needs treatment.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check TFTs before starting rifampicin in anyone with known thyroid disease or on levothyroxine, and recheck at 3 and 6 months - dose adjustment, not timing separation, is the fix.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Never diagnose thyroid disease from TFTs drawn during acute severe illness - repeat after recovery instead.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Thyroid Association - 2017 Guidelines for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum (and subsequent update).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Ohnhaus EE, et al. - Influence of Rifampicin on Thyroid Gland Volume, Thyroid Hormones, and Antipyrine Metabolism. European Journal of Endocrinology.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Effect of Rifampin on Thyroid Function Test in Patients on Levothyroxine Medication. PLOS ONE.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Iodine Deficiency Disorders and Universal Salt Iodisation Guidance.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'lab-lipid-profile',
        title: 'Lipid Profile',
        category: 'Laboratory Interpretation',
        subCategory: 'Cardiometabolic',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Interpreting the Lipid Profile</title>
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
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Laboratory Interpretation</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting the Lipid Profile</h1>
        <p class="text-sm text-indigo-200">Lipid testing is increasingly requested in Nigerian practice as cardiovascular risk factors - obesity, hypertension, diabetes, urbanisation-linked dietary change - become more prevalent. The panel is frequently read as a single "cholesterol is high/normal" verdict, when in practice each component carries different implications, and the decision to treat rests on overall cardiovascular risk rather than any single number in isolation.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      The Panel and What Each Component Reflects
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Test</th>
              <th class="py-2 font-medium">What it reflects</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Total cholesterol</td><td class="py-2">Sum of cholesterol carried in all lipoprotein particles (LDL, HDL, VLDL) - the least specific single number in the panel</td></tr>
            <tr><td class="py-2 pr-3">LDL-cholesterol (LDL-C)</td><td class="py-2">The primary atherogenic particle and the main treatment target in most cardiovascular risk reduction guidance</td></tr>
            <tr><td class="py-2 pr-3">HDL-cholesterol (HDL-C)</td><td class="py-2">Involved in reverse cholesterol transport; higher levels are generally associated with lower cardiovascular risk, though HDL-raising interventions have not reliably translated into outcome benefit in trials</td></tr>
            <tr><td class="py-2 pr-3">Triglycerides</td><td class="py-2">Reflects dietary fat/carbohydrate load, hepatic VLDL production, and metabolic status; markedly elevated levels carry a distinct risk (pancreatitis) separate from atherosclerotic risk</td></tr>
            <tr><td class="py-2 pr-3">Non-HDL cholesterol</td><td class="py-2">Total cholesterol minus HDL - captures all atherogenic particles (LDL plus VLDL/remnants) and does not require fasting, making it a practical alternative to LDL-C in many settings</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Reference Ranges and Categories
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Parameter</th>
              <th class="py-2 pr-3 font-medium">Desirable</th>
              <th class="py-2 pr-3 font-medium">Borderline</th>
              <th class="py-2 font-medium">High</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Total cholesterol</td><td class="py-2 pr-3">&lt; 5.2 mmol/L (200 mg/dL)</td><td class="py-2 pr-3">5.2-6.2 mmol/L</td><td class="py-2">&ge; 6.2 mmol/L</td></tr>
            <tr><td class="py-2 pr-3">LDL-C</td><td class="py-2 pr-3">&lt; 2.6 mmol/L (optimal)</td><td class="py-2 pr-3">2.6-4.1 mmol/L</td><td class="py-2">&ge; 4.1 mmol/L</td></tr>
            <tr><td class="py-2 pr-3">HDL-C</td><td class="py-2 pr-3" colspan="2">&ge; 1.0 mmol/L (men), &ge; 1.3 mmol/L (women) - low if below this</td><td class="py-2">High HDL (&ge; 1.6 mmol/L) considered protective</td></tr>
            <tr><td class="py-2 pr-3">Triglycerides</td><td class="py-2 pr-3">&lt; 1.7 mmol/L</td><td class="py-2 pr-3">1.7-2.3 mmol/L</td><td class="py-2">&ge; 2.3 mmol/L (&ge; 5.6 mmol/L = high; &ge; 11.3 mmol/L = severe, sharply increased pancreatitis risk)</td></tr>
            <tr><td class="py-2 pr-3">Non-HDL-C</td><td class="py-2 pr-3">&lt; 3.4 mmol/L</td><td class="py-2 pr-3">3.4-4.9 mmol/L</td><td class="py-2">&ge; 4.9 mmol/L</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">These categories describe where a value sits descriptively, but current guidance frames LDL-C management around individualised treatment goals by risk category, rather than a single population-wide cutoff applied to everyone - see Section 4.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Fasting vs Non-Fasting
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li>Traditional practice required a 9-12 hour fast before lipid testing, primarily because triglycerides rise significantly after a meal (and LDL-C, when calculated rather than directly measured, depends on the triglyceride value - see below).</li>
        <li>Current guidance from major cardiology bodies accepts <span class="font-medium text-slate-800 dark:text-slate-200">non-fasting lipid panels for routine screening and cardiovascular risk assessment</span> in adults 20 years and older not already on lipid-lowering therapy, since non-fasting values predict cardiovascular risk comparably well and improve practical test uptake.</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">Fasting remains preferred when triglycerides are the primary focus</span> - assessing for severe hypertriglyceridaemia, or confirming a markedly elevated non-fasting triglyceride result (current guidance suggests repeating fasting if a non-fasting triglyceride is &ge; 4.5 mmol/L / 400 mg/dL or higher).</li>
        <li><span class="font-medium text-slate-800 dark:text-slate-200">This matters directly for how LDL-C is often reported:</span> where LDL-C is calculated (Friedewald equation: LDL-C = Total cholesterol - HDL-C - Triglycerides/2.2 in mmol/L) rather than directly measured, a non-fasting triglyceride value can distort the calculated LDL-C - worth being aware of which method the local lab uses, since directly measured LDL-C avoids this issue entirely.</li>
      </ul>
      <p class="text-sm border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 italic mt-3">"You do not necessarily need to fast for this test in most cases, but if we're specifically checking for a triglyceride problem, or if a previous non-fasting result showed a notably high triglyceride level, a fasting sample gives a clearer picture."</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Cardiovascular Risk Stratification
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Treatment decisions, particularly around starting a statin, are driven by overall cardiovascular risk, not LDL-C alone. A patient with a moderately elevated LDL-C but multiple other risk factors may warrant treatment sooner than a patient with a higher LDL-C but no other risk factors.</p>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Factors incorporated into risk assessment:</span> age, sex, blood pressure, diabetes status, smoking status, total cholesterol/HDL-C ratio or LDL-C, family history of premature cardiovascular disease, and existing cardiovascular disease or diabetic end-organ damage (which automatically places a patient in a high-risk category regardless of calculated score).</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Current Risk Categories and LDL-C Goals</strong>
        <p class="text-sm">US guidance moved from the 2018 ACC/AHA framework to a newer risk calculator (PREVENT-ASCVD, replacing the older Pooled Cohort Equations, which had been found to overestimate 10-year risk by roughly 40-50%). Risk categories under this newer framework are lower-numbered than the 2018 categories, so a "high risk" label under one framework does not map directly onto the same numeric threshold under the other:</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">10-year ASCVD risk category</th>
                <th class="py-2 font-medium">Approximate threshold</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Low</td><td class="py-2">&lt; 3%</td></tr>
              <tr><td class="py-2 pr-3">Borderline</td><td class="py-2">3% to &lt; 5%</td></tr>
              <tr><td class="py-2 pr-3">Intermediate</td><td class="py-2">5% to &lt; 10%</td></tr>
              <tr><td class="py-2 pr-3">High</td><td class="py-2">&ge; 10%</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">LDL-C treatment goals by clinical situation:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm mt-1">
          <li>Established ASCVD, very high risk: LDL-C &lt; 1.4 mmol/L (55 mg/dL) and non-HDL-C &lt; 2.2 mmol/L (85 mg/dL)</li>
          <li>High-risk primary prevention: LDL-C &lt; 1.8 mmol/L (70 mg/dL)</li>
          <li>Borderline/intermediate risk: LDL-C &lt; 2.6 mmol/L (100 mg/dL)</li>
          <li>Severe primary hypercholesterolaemia (LDL-C &ge; 4.9 mmol/L / 190 mg/dL): high-intensity statin recommended without needing a formal risk calculation</li>
          <li>Diabetes, ages 40-75: moderate-intensity statin generally indicated without needing a formal risk calculation, escalating to high-intensity as additional risk factors accrue</li>
        </ul>
      </div>
      
      <p class="text-sm mt-2">Where formal cardiovascular risk calculators are not readily used in routine Nigerian practice, the presence of diabetes, established vascular disease, LDL-C &ge; 4.9 mmol/L, or multiple concurrent risk factors (hypertension plus smoking plus strong family history, for example) should be treated as sufficient grounds to consider statin therapy without necessarily waiting for a formal risk score.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Secondary Causes of Dyslipidaemia
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <p class="text-sm">A lipid abnormality is not always primary - screening for a secondary cause is worthwhile, particularly with a marked or atypical abnormality, or in a younger patient.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Secondary cause</th>
              <th class="py-2 font-medium">Typical lipid effect</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Hypothyroidism</td><td class="py-2">Raised total cholesterol and LDL-C - check TSH in any new significant dyslipidaemia, particularly with other suggestive features</td></tr>
            <tr><td class="py-2 pr-3">Uncontrolled diabetes</td><td class="py-2">Raised triglycerides, low HDL-C, small dense LDL particles (not always reflected simply in standard LDL-C)</td></tr>
            <tr><td class="py-2 pr-3">Nephrotic syndrome</td><td class="py-2">Marked hypercholesterolaemia from increased hepatic lipoprotein synthesis</td></tr>
            <tr><td class="py-2 pr-3">Chronic kidney disease</td><td class="py-2">Raised triglycerides, altered lipoprotein metabolism</td></tr>
            <tr><td class="py-2 pr-3">Alcohol excess</td><td class="py-2">Raised triglycerides, sometimes markedly so</td></tr>
            <tr><td class="py-2 pr-3">Liver disease (cholestatic)</td><td class="py-2">Raised total cholesterol</td></tr>
            <tr><td class="py-2 pr-3">Certain medications</td><td class="py-2">Thiazides, non-selective beta-blockers, corticosteroids, and some older antiretrovirals can all worsen the lipid profile - review medication list, particularly in a patient on long-term HIV treatment</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Correcting the secondary cause where identified (treating hypothyroidism, improving glycaemic control, addressing alcohol use) often improves the lipid profile substantially, sometimes without requiring separate lipid-lowering therapy.</p>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Common Clinical Scenarios in Nigerian Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700">Underdiagnosed Familial Hypercholesterolaemia</strong>
        <p class="text-sm">A markedly elevated LDL-C (particularly with a family history of early cardiovascular events, or physical signs such as tendon xanthomas or corneal arcus in a younger patient) should raise suspicion for familial hypercholesterolaemia - a genetic condition that is likely underdiagnosed in Nigerian practice given limited routine lipid screening and cascade family testing. This warrants more assertive treatment and, where feasible, screening of first-degree relatives.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Dietary Pattern Considerations</strong>
        <p class="text-sm">Traditional Nigerian diets vary widely, but heavy use of palm oil, fried foods, and, in some contexts, increasing intake of processed and refined foods with urbanisation all contribute to dyslipidaemia risk. Dietary counselling should be specific and practical rather than generic "eat healthy" advice.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Antiretroviral-Related Dyslipidaemia</strong>
        <p class="text-sm">The lipid effect of antiretroviral therapy depends heavily on the specific regimen. Older, ritonavir-boosted protease inhibitor-based regimens are the most consistently associated with significant dyslipidaemia (raised triglycerides and LDL-C). Current first-line regimens built around dolutegravir and other integrase strand transfer inhibitors have a comparatively neutral lipid profile, though dolutegravir is independently associated with weight gain, which can indirectly worsen the lipid and metabolic profile over time. Check a baseline and periodic lipid profile in patients on long-term ART, particularly if the regimen includes an older protease inhibitor or if there has been substantial weight gain since starting treatment.</p>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Access and Cost Considerations</strong>
        <p class="text-sm">Statin availability and affordability vary across the country, and this legitimately affects treatment planning. Where cost limits options, prioritising treatment for the highest-risk patients (established cardiovascular disease, diabetes with additional risk factors) over borderline primary prevention cases is a reasonable, evidence-consistent approach when resources must be allocated.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">7</span>
      Common Pitfalls
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Treating total cholesterol as the primary decision-making number - LDL-C (or non-HDL-C where LDL-C isn't directly available) is the more clinically meaningful target; total cholesterol alone can be misleading, particularly when HDL-C is very high or very low.</li>
        <li>Requiring a fasting sample for every lipid test, creating an unnecessary barrier to testing when non-fasting is acceptable for most routine screening purposes.</li>
        <li>Not checking for secondary causes in a new, marked, or atypical dyslipidaemia - particularly missing hypothyroidism or poorly controlled diabetes as the actual driver.</li>
        <li>Applying a single fixed LDL-C threshold to every patient rather than considering overall cardiovascular risk, potentially undertreating a high-risk patient with a "borderline" LDL-C or overtreating a low-risk patient with a mildly elevated one.</li>
        <li>Missing familial hypercholesterolaemia in a younger patient with a markedly elevated LDL-C, by attributing it to diet and lifestyle alone without considering a genetic cause and family screening.</li>
        <li>Not treating markedly elevated triglycerides (&ge; 11.3 mmol/L) as an acute pancreatitis priority distinct from cardiovascular risk - this level warrants more urgent dietary and pharmacological intervention than routine dyslipidaemia management timelines would suggest.</li>
        <li>Discontinuing statin therapy once lipid levels normalise, without explaining that ongoing therapy is what maintains the improved levels - the same "I feel fine, so I can stop" adherence pattern seen with hypertension and diabetes applies directly here, and deserves the same explicit counselling.</li>
      </ul>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">8</span>
      Reading Order in Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Confirm whether the sample was fasting or non-fasting, and whether this matters for the specific question being asked (Section 3).</li>
        <li>Assess LDL-C (or non-HDL-C) as the primary treatment-relevant number, not total cholesterol alone.</li>
        <li>Check triglycerides specifically for markedly elevated values requiring urgent attention (pancreatitis risk) separate from routine cardiovascular risk management.</li>
        <li>Place the result in the context of overall cardiovascular risk (Section 4) rather than treating any single lipid value in isolation.</li>
        <li>Screen for secondary causes, particularly with a marked, atypical, or early-onset abnormality.</li>
        <li>Reinforce that ongoing treatment (medication and lifestyle) maintains improved levels - normalisation is not a treatment endpoint to stop at.</li>
      </ol>
      </div>
      
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>LDL-C, not total cholesterol, is the number that drives treatment decisions.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Non-fasting samples are acceptable for routine screening - fasting is only needed when triglycerides are specifically the focus.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Treatment goals are now individualised by risk category (as low as &lt;1.4 mmol/L for very-high-risk secondary prevention), not a single fixed cutoff for everyone.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Screen for secondary causes (hypothyroidism especially) before committing a younger or atypical patient to lifelong primary dyslipidaemia treatment.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Treat triglycerides &ge; 11.3 mmol/L as a pancreatitis emergency in waiting, not just a cardiovascular risk number.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>ACC/AHA/Multisociety - 2026 Guideline on the Management of Dyslipidemia (superseding the 2018 Guideline on the Management of Blood Cholesterol).</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>American Heart Association - PREVENT-ASCVD Risk Equations.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>DHHS/WHO Antiretroviral Guidelines - Lipid Effects by Regimen Class.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'lab-fbs-rbs-hba1c',
        title: 'FBS, RBS, and HbA1c',
        category: 'Laboratory Interpretation',
        subCategory: 'Endocrinology',
        content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Interpreting FBS, RBS, and HbA1c</title>
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
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting FBS, RBS, and HbA1c</h1>
        <p class="text-sm text-indigo-200">These three tests answer different questions - a point-in-time glucose level, a random snapshot, and an average over months - and are frequently misread as interchangeable. In Nigerian practice, sample-handling delays, endemic haemoglobinopathies, and chronic anaemia all distort these results in specific, predictable ways that are worth knowing before acting on a number.</p>
      </div>
      </div>
      
      <!-- 1. FBS -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Fasting Blood Sugar (FBS)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">FBS is measured after at least 8 hours without caloric intake, reflecting hepatic glucose output and basal insulin sensitivity in the absence of a recent meal.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 font-medium">FBS (mmol/L)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2">&lt; 5.6</td></tr>
            <tr><td class="py-2 pr-3">Impaired fasting glucose (prediabetes)</td><td class="py-2">5.6-6.9</td></tr>
            <tr><td class="py-2 pr-3">Diabetes</td><td class="py-2">&ge; 7.0</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">What to Do Next</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>A single elevated FBS is not sufficient for a diabetes diagnosis outside overt symptomatic hyperglycaemia - confirm with a repeat FBS, an OGTT, or HbA1c on a separate occasion.</li>
          <li>In a patient with classic symptoms (polyuria, polydipsia, unexplained weight loss) plus an unambiguously elevated FBS, a single result is diagnostic and repeat testing before starting treatment is not necessary.</li>
          <li>An FBS in the impaired range should prompt counselling on prediabetes and lifestyle intervention, not dismissal as a normal variant.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Common Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li><span class="font-medium text-slate-800 dark:text-slate-200">"Fasting" not genuinely enforced.</span> Patients frequently report as fasting after a short overnight gap, or after consuming tea, pap, or other calorie-containing drinks they don't count as food. A falsely low or inconsistent FBS in a patient with a clinical picture suggestive of diabetes should prompt a more carefully supervised repeat test rather than acceptance at face value.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Delayed sample processing lowering the result.</span> Glucose continues to be metabolised by red and white cells in a whole blood sample sitting at room temperature awaiting analysis - a meaningful concern where samples travel between collection point and lab, or sit for extended periods before processing. Fluoride-oxalate collection tubes prevent this; plain tubes without prompt processing can produce a falsely low reading, occasionally enough to mask a diagnosis.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Missing the diagnosis in a patient who is unwell at the time of testing</span>, since acute illness (infection, particularly malaria) can transiently affect glucose in either direction - a single abnormal or borderline result during acute illness should be interpreted cautiously and, where diabetes is not already known, revisited once the patient has recovered.</li>
        </ul>
      </div>
      </div>
      
      <!-- 2. RBS -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      Random Blood Sugar (RBS)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">RBS is taken without regard to time since the last meal, and is most useful as a rapid screening or emergency assessment tool rather than a definitive diagnostic test on its own.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 pr-3 font-medium">RBS (mmol/L)</th>
              <th class="py-2 font-medium">Interpretation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Unequivocally normal</td><td class="py-2 pr-3">&lt; 7.8</td><td class="py-2">Diabetes unlikely on this result alone</td></tr>
            <tr><td class="py-2 pr-3">Equivocal</td><td class="py-2 pr-3">7.8-11.0</td><td class="py-2">Requires confirmatory testing (FBS, OGTT, or HbA1c)</td></tr>
            <tr><td class="py-2 pr-3">Diagnostic (with classic symptoms)</td><td class="py-2 pr-3">&ge; 11.1</td><td class="py-2">Sufficient for diagnosis if accompanied by polyuria, polydipsia, or unexplained weight loss</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">What to Do Next</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>RBS &ge; 11.1 mmol/L without classic symptoms should be followed by confirmatory testing rather than an immediate diagnosis of diabetes.</li>
          <li>In the emergency setting - an unconscious, confused, or critically unwell patient - RBS (via glucometer) is the appropriate immediate test, both to identify hypoglycaemia as a reversible cause of altered consciousness and to flag marked hyperglycaemia requiring urgent management (e.g. diabetic ketoacidosis, hyperosmolar state).</li>
          <li>A very low RBS in a collapsed or unconscious patient should prompt immediate glucose correction before waiting for any confirmatory laboratory result - treat first in this specific scenario.</li>
        </ul>
      </div>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Common Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Using RBS alone to rule out diabetes.</span> A normal RBS shortly after a meal does not exclude diabetes in a patient with a suggestive history - a normal RBS is reassuring only in the sense of excluding severe, acute hyperglycaemia at that moment, not diabetes as an underlying diagnosis.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Glucometer accuracy at extremes.</span> Point-of-care glucometers, the primary tool for RBS in most Nigerian facilities, lose accuracy at very high and very low glucose values, and are also affected by severe anaemia, dehydration, and poor peripheral perfusion in a shocked patient - where the clinical picture and glucometer reading disagree markedly, treat the clinical picture as more reliable and send a formal laboratory sample where feasible.</li>
          <li><span class="font-medium text-slate-800 dark:text-slate-200">Not accounting for time since last meal when interpreting a value in the equivocal range.</span> A value of 9 mmol/L taken 30 minutes after a heavy meal carries different weight than the same value taken 4 hours after eating - document timing where possible rather than treating RBS values as directly comparable across encounters.</li>
        </ul>
      </div>
      </div>
      
      <!-- 3. HbA1c -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      HbA1c
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">HbA1c reflects the proportion of haemoglobin that has become glycated over the lifespan of circulating red cells, giving an average glucose exposure over approximately the preceding 8-12 weeks (weighted more toward the most recent 30 days).</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 font-medium">HbA1c (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2">&lt; 5.7</td></tr>
            <tr><td class="py-2 pr-3">Prediabetes</td><td class="py-2">5.7-6.4</td></tr>
            <tr><td class="py-2 pr-3">Diabetes</td><td class="py-2">&ge; 6.5</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm"><span class="font-medium text-slate-800 dark:text-slate-200">Target for known diabetes:</span> generally &lt; 7% for most adults, individualised higher for elderly or frail patients, and individualised lower in selected younger patients without significant hypoglycaemia risk.</p>
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">What to Do Next</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Use HbA1c for diagnosis where feasible and for monitoring long-term control every 3 months in patients on active treatment adjustment, or every 6 months once stable at target.</li>
          <li>Where HbA1c and a same-day glucose value disagree substantially, consider the pitfalls below (haemoglobinopathy, anaemia, recent transfusion) before assuming laboratory error.</li>
          <li>A rising HbA1c despite reported medication adherence should prompt review of the actual regimen, dietary pattern, and adherence in detail - before escalating therapy, confirm the input (adherence, diet) rather than assuming the current regimen has simply become inadequate.</li>
        </ul>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-2">Common Pitfalls - This Is Where Nigerian Context Matters Most</strong>
        <p class="text-sm">Haemoglobinopathies invalidate standard HbA1c interpretation. Given the prevalence of sickle cell trait and disease, and HbC trait, in the Nigerian population, this is the single most important pitfall in this section.</p>
        <div class="overflow-x-auto mt-3">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Condition</th>
                <th class="py-2 font-medium">Effect on HbA1c</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Sickle cell trait (HbAS)</td><td class="py-2">Red cell lifespan is essentially normal, so the biological premise of the test holds - but this does not guarantee an accurate reading. A 2026 West African study (Korle Bu Teaching Hospital, Accra) directly comparing methods found that immunoturbidimetric assays - a common, lower-cost method used in many African labs - significantly underestimated HbA1c in HbAS patients compared with HPLC (mean 5.1% vs 5.9%). This under-reading was severe enough that immunoassay classified none of the HbAS patients with genotype-confirmed diabetes as diabetic, while HPLC correctly identified 4% as diabetic. If the method in use locally is not confirmed as validated for HbAS, treat a reassuring result with caution rather than certainty.</td></tr>
              <tr><td class="py-2 pr-3">Sickle cell disease (HbSS)</td><td class="py-2">Reduced red cell lifespan falsely lowers HbA1c regardless of actual glycaemic control - a normal or low HbA1c in a patient with HbSS does not reliably rule out poor glycaemic control.</td></tr>
              <tr><td class="py-2 pr-3">HbC trait (HbAC), also relevant in West Africa</td><td class="py-2">Mild, method-dependent interference reported; HbCC disease causes more significant haemolysis and a greater risk of spuriously low results, similar in principle to HbSS.</td></tr>
              <tr><td class="py-2 pr-3">Any haemolytic process (including chronic malaria-related haemolysis)</td><td class="py-2">Shortened red cell survival lowers HbA1c independent of true glucose exposure.</td></tr>
              <tr><td class="py-2 pr-3">Iron deficiency anaemia</td><td class="py-2">Tends to falsely raise HbA1c.</td></tr>
              <tr><td class="py-2 pr-3">Recent blood transfusion</td><td class="py-2">Introduces donor red cells of a different age distribution and glycation history, invalidating the result for a period following transfusion.</td></tr>
              <tr><td class="py-2 pr-3">Pregnancy</td><td class="py-2">Physiological changes in red cell turnover affect HbA1c; fasting/OGTT-based diagnosis is preferred in pregnancy rather than HbA1c.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-3"><span class="font-medium text-slate-800 dark:text-slate-200">Practical implication:</span> in a patient with known or suspected sickle cell trait or disease, HbC trait, or significant chronic anaemia from any cause, do not rely on HbA1c alone as the marker of glycaemic control - and where HbA1c is used, boronate affinity HPLC or enzymatic methods are the least affected by these variants if a choice of assay is available locally. Use fasting and random glucose monitoring, and where feasible, fructosamine (reflecting a shorter, 2-3 week window and unaffected by red cell lifespan - normal range roughly 200-285 &micro;mol/L, though the result becomes unreliable if serum albumin is below 3.0 g/dL, relevant in malnutrition, nephrotic syndrome, or chronic liver disease) as an alternative in these specific patients.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Other pitfalls:</span> treating HbA1c as reflective of very recent (days) glucose changes - it cannot detect a change in control from the past few days and should not be used to assess the effect of a very recent intervention. Also, not accounting for the assay method's known interference profile - different HbA1c platforms have different vulnerabilities to haemoglobin variants, and what holds for one method does not automatically apply to another.</p>
      </div>
      </div>
      
      <!-- 4. Reconciling -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Reconciling Discordant Results
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Scenario</th>
              <th class="py-2 pr-3 font-medium">Likely explanation</th>
              <th class="py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">High FBS/RBS, unexpectedly normal/low HbA1c</td><td class="py-2 pr-3">Haemolysis, haemoglobinopathy (especially HbSS), recent significant blood loss, or very recent onset of hyperglycaemia (HbA1c hasn't caught up yet)</td><td class="py-2">Investigate for haemolytic/haemoglobinopathy causes; rely on direct glucose monitoring in the interim</td></tr>
            <tr><td class="py-2 pr-3">Normal FBS/RBS, unexpectedly high HbA1c</td><td class="py-2 pr-3">Iron deficiency anaemia, or genuinely fluctuating glucose control not captured by a single point-in-time sample (e.g. marked post-meal spikes with normal fasting values)</td><td class="py-2">Check iron studies; consider post-prandial glucose testing to capture the pattern a single fasting value misses</td></tr>
            <tr><td class="py-2 pr-3">FBS normal, RBS/OGTT elevated</td><td class="py-2 pr-3">Isolated post-prandial impairment - common in early type 2 diabetes, where fasting glucose is preserved longer than post-meal handling</td><td class="py-2">Do not exclude diabetes on a normal FBS alone if clinical suspicion is present; proceed to OGTT or HbA1c</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      
      <!-- 5. Reading order -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">5</span>
      Reading Order in Practice
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Establish which question is being asked: is this a diagnostic test, a monitoring test, or an emergency assessment? This determines which of the three is appropriate, rather than defaulting to whichever is easiest to obtain.</li>
        <li>For diagnosis, confirm any single abnormal result with a second test on a separate occasion, unless classic symptoms with unambiguous hyperglycaemia are present.</li>
        <li>Before accepting an unexpected HbA1c result, actively consider haemoglobinopathy and haemolysis - particularly relevant given local prevalence - rather than treating the number at face value.</li>
        <li>In the emergency setting, use RBS via glucometer immediately, treat hypoglycaemia on the spot if found, and send a formal laboratory sample where the glucometer reading and clinical picture disagree.</li>
        <li>For ongoing monitoring in a patient with known diabetes and a coexisting haemoglobinopathy or chronic haemolytic condition, use direct glucose monitoring (and fructosamine where available) rather than relying on HbA1c as the primary control marker.</li>
      </ol>
      </div>
      
      <!-- 6. Findings not to be missed -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">6</span>
      Findings That Must Not Be Missed
      </h2>
      
      <div class="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-700 mb-6">
      <ul class="space-y-2.5 text-sm text-rose-900 dark:text-rose-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A very low RBS in a collapsed or unconscious patient</span> - correct immediately; do not wait for a confirmatory laboratory result.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A reassuringly normal HbA1c in a patient with sickle cell trait, sickle cell disease, or HbC trait</span> - do not accept this at face value without knowing whether the local assay method is validated for that variant; use direct glucose monitoring or fructosamine instead where there is doubt.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">A normal FBS that doesn't fit the clinical picture</span> - consider a delayed, poorly handled sample or an inadequately enforced fast before ruling out diabetes.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#e11d48"/><path d="M12 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.1" fill="#fff"/></svg><span><span class="font-medium">Marked glucometer-clinical picture disagreement in a shocked or severely anaemic patient</span> - trust the clinical picture and send a formal laboratory sample.</span></li>
      </ul>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>FBS, RBS, and HbA1c answer different clinical questions - match the test to the question rather than treating them as interchangeable.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Sickle cell trait is common enough locally that a normal HbA1c should not be assumed accurate by default - the assay method matters as much as the number.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Confirm any single abnormal diagnostic result on a separate occasion, unless classic symptoms with unambiguous hyperglycaemia are already present.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use fructosamine or direct glucose monitoring, not HbA1c, as the primary control marker in patients with a haemoglobinopathy or chronic haemolysis.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>In an emergency, treat a very low glucometer reading immediately - do not wait for laboratory confirmation.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Kumahor E, et al. (Korle Bu Teaching Hospital, Accra) - Immunoassay Underestimation of HbA1c in Sickle Cell Trait. Presented at ADLM 2026.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>National Glycohemoglobin Standardization Program (NGSP) - Factors that Interfere with HbA1c Test Results.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Sickle Cell Foundation Nigeria - Clinical Guidelines for the Management of Sickle Cell Disease.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },
      {
        id: 'lab-full-blood-count-v2',
        title: 'Full Blood Count (FBC)',
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
      
      <div class="relative overflow-hidden rounded-3xl border border-indigo-900/50 shadow-xl mb-8 bg-indigo-950 dark:bg-slate-900">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div class="relative p-6 sm:p-8">
        <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">Laboratory Interpretation</span>
        <h1 class="font-brand text-3xl font-bold mb-3 text-white">Interpreting the Full Blood Count (FBC)</h1>
        <p class="text-sm text-indigo-200">The FBC is frequently the only investigation available at the point of decision - CRP and procalcitonin are not routinely accessible outside tertiary centres, and blood culture, where run at all, takes days. Every parameter has to be read for its underlying mechanism, and reference ranges shift substantially with age - a value alarming in an adult can be entirely normal in a neonate, and vice versa. This is a common source of misinterpretation in paediatric FBCs specifically.</p>
      </div>
      </div>
      
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">1</span>
      Haemoglobin (Hb) / Packed Cell Volume (PCV)
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Hb and PCV move together (PCV &asymp; 3 &times; Hb &plusmn; 3, when Hb is in g/dL and PCV in %). PCV by microhaematocrit centrifugation is usually the first value available outside teaching hospitals - faster, cheaper, and requires only a capillary sample.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Age group</th>
              <th class="py-2 pr-3 font-medium">Hb (g/dL)</th>
              <th class="py-2 font-medium">PCV (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Birth (term, cord blood)</td><td class="py-2 pr-3">14.0-20.0</td><td class="py-2">45-65</td></tr>
            <tr><td class="py-2 pr-3">2 weeks</td><td class="py-2 pr-3">12.5-20.0</td><td class="py-2">40-65</td></tr>
            <tr><td class="py-2 pr-3">1 month</td><td class="py-2 pr-3">10.0-18.0</td><td class="py-2">33-55</td></tr>
            <tr><td class="py-2 pr-3">2 months</td><td class="py-2 pr-3">9.0-14.0</td><td class="py-2">28-42</td></tr>
            <tr><td class="py-2 pr-3">3-6 months</td><td class="py-2 pr-3">9.5-13.5</td><td class="py-2">29-41</td></tr>
            <tr><td class="py-2 pr-3">6 months-2 years</td><td class="py-2 pr-3">10.5-13.5</td><td class="py-2">33-39</td></tr>
            <tr><td class="py-2 pr-3">2-6 years</td><td class="py-2 pr-3">11.5-13.5</td><td class="py-2">34-40</td></tr>
            <tr><td class="py-2 pr-3">6-12 years</td><td class="py-2 pr-3">11.5-15.5</td><td class="py-2">35-45</td></tr>
            <tr><td class="py-2 pr-3">Adult men</td><td class="py-2 pr-3">13.0-17.0</td><td class="py-2">40-52</td></tr>
            <tr><td class="py-2 pr-3">Adult women (non-pregnant)</td><td class="py-2 pr-3">12.0-15.5</td><td class="py-2">36-48</td></tr>
            <tr><td class="py-2 pr-3">Pregnant women</td><td class="py-2 pr-3">&ge; 11.0 (WHO cutoff for anaemia)</td><td class="py-2">&ge; 33</td></tr>
          </tbody>
        </table>
      </div>
      <div class="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">The physiological nadir at 2-3 months</span> is worth knowing explicitly: Hb normally falls after birth as fetal haemoglobin production declines and erythropoiesis temporarily slows before adult-pattern production ramps up. A Hb of 9.5-10 g/dL at 2 months of age is a normal physiological finding, not anaemia requiring workup - this is one of the more common sources of unnecessary parental alarm and unnecessary investigation in this age group when adult or even older-infant reference ranges are mistakenly applied.</p>
      </div>
      
      <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-3">WHO anaemia thresholds (diagnostic cutoffs, distinct from the full reference range above):</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Population</th>
              <th class="py-2 pr-3 font-medium">Hb threshold for anaemia</th>
              <th class="py-2 font-medium">Severe anaemia</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Children 6-59 months</td><td class="py-2 pr-3">&lt; 11 g/dL</td><td class="py-2">&lt; 7 g/dL</td></tr>
            <tr><td class="py-2 pr-3">Children 5-11 years</td><td class="py-2 pr-3">&lt; 11.5 g/dL</td><td class="py-2">&lt; 8 g/dL</td></tr>
            <tr><td class="py-2 pr-3">Children 12-14 years</td><td class="py-2 pr-3">&lt; 12 g/dL</td><td class="py-2">&lt; 8 g/dL</td></tr>
            <tr><td class="py-2 pr-3">Adult men</td><td class="py-2 pr-3">&lt; 13 g/dL</td><td class="py-2">&lt; 8 g/dL</td></tr>
            <tr><td class="py-2 pr-3">Non-pregnant women</td><td class="py-2 pr-3">&lt; 12 g/dL</td><td class="py-2">&lt; 8 g/dL</td></tr>
            <tr><td class="py-2 pr-3">Pregnant women</td><td class="py-2 pr-3">&lt; 11 g/dL</td><td class="py-2">&lt; 7 g/dL</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">The degree of anaemia matters more than the classification. Hb 4 g/dL and Hb 10 g/dL are managed on entirely different timelines regardless of which side of a threshold each falls on.</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Classification by MCV</strong>
        <p class="text-sm">MCV reference ranges also shift with age - neonates and young infants are normally macrocytic relative to adult ranges, a point that matters when applying the same microcytic/normocytic/macrocytic framework across age groups.</p>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Age group</th>
                <th class="py-2 font-medium">Normal MCV range (fL)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Birth</td><td class="py-2">98-118</td></tr>
              <tr><td class="py-2 pr-3">1 month</td><td class="py-2">85-105</td></tr>
              <tr><td class="py-2 pr-3">6 months-2 years</td><td class="py-2">70-86</td></tr>
              <tr><td class="py-2 pr-3">2-6 years</td><td class="py-2">75-87</td></tr>
              <tr><td class="py-2 pr-3">6-12 years</td><td class="py-2">77-95</td></tr>
              <tr><td class="py-2 pr-3">Adult</td><td class="py-2">80-100</td></tr>
            </tbody>
          </table>
        </div>
        <div class="overflow-x-auto mt-3">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">MCV pattern (adult reference)</th>
                <th class="py-2 font-medium">Principal causes in this setting</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Microcytic (&lt; 80 fL)</td><td class="py-2">Iron deficiency (hookworm, menorrhagia, peptic ulcer disease), thalassaemia trait</td></tr>
              <tr><td class="py-2 pr-3">Normocytic (80-100 fL)</td><td class="py-2">Malaria-associated anaemia, anaemia of chronic disease, acute haemorrhage, early haemolysis</td></tr>
              <tr><td class="py-2 pr-3">Macrocytic (&gt; 100 fL)</td><td class="py-2">Folate/B12 deficiency, reticulocytosis from active haemolysis (check genotype)</td></tr>
            </tbody>
          </table>
        </div>
      
        <div class="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
          <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">Microcytic anaemia - a concrete way to separate iron deficiency from thalassaemia trait when they look identical on Hb/MCV alone:</span> the Mentzer Index (MCV in fL &divide; RBC count in millions/&micro;L) is a simple, validated bedside calculation from numbers already on the printout. A value &gt; 13 favours iron deficiency (bone marrow makes fewer, small cells, so both RBC count and MCV are low); a value &lt; 13 favours thalassaemia trait (RBC count stays normal or high while cells are small, due to a globin synthesis defect rather than a marrow output problem). A raised RDW (heterogeneous cell population) also favours iron deficiency over thalassaemia trait, which typically has a more uniform (normal RDW) population of small cells - but the Mentzer Index is the more specific and reproducible of the two. Where iron studies are available, a low ferritin confirms iron deficiency; ferritin is an acute-phase reactant and can be falsely normal or elevated in concurrent infection or inflammation, which is common in febrile Nigerian patients being worked up for anaemia simultaneously. Neither tool replaces haemoglobin electrophoresis where thalassaemia trait needs formal confirmation, but both are useful to triage who actually needs that more expensive test.</p>
        </div>
      
        <p class="text-sm mt-3"><span class="font-medium text-slate-800 dark:text-slate-200">Normocytic anaemia:</span> malaria destroys parasitised and non-parasitised red cells (bystander haemolysis via splenic clearance and complement-mediated destruction), and also suppresses erythropoiesis through cytokine-mediated dyserythropoiesis during acute infection - the anaemia can worsen for several days into treatment even as parasitaemia clears. Anaemia of chronic disease (from cytokine-driven iron sequestration by hepcidin) is common in TB, HIV, and chronic osteomyelitis.</p>
        <p class="text-sm mt-2"><span class="font-medium text-slate-800 dark:text-slate-200">Macrocytic anaemia:</span> reticulocytosis from ongoing haemolysis (raised MCV reflects the larger reticulocyte population entering circulation) should prompt a genotype check if not already known, alongside LDH and unconjugated bilirubin where available. Nutritional macrocytic anaemia from folate deficiency is more common than B12 deficiency in most Nigerian dietary patterns.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Peripheral Film Correlation</strong>
        <p class="text-sm">The film adds information the automated count cannot: sickle cells and target cells (haemoglobinopathy), hypochromic microcytes with anisopoikilocytosis (iron deficiency), and malaria parasites with species identification and parasite density. Requesting a film alongside the FBC, rather than only on request after an abnormal count, changes management more often than the Hb value alone.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Transfusion Decision-Making</strong>
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
              <tr><td class="py-2 pr-3">&lt; 4 g/dL</td><td class="py-2 pr-3">Any</td><td class="py-2">Transfuse; use packed cells with slow rate and diuretic cover if any sign of cardiac strain</td></tr>
              <tr><td class="py-2 pr-3">4-6 g/dL</td><td class="py-2 pr-3">Symptomatic (tachycardia, tachypnoea, heart failure signs)</td><td class="py-2">Transfuse packed cells cautiously; consider furosemide cover</td></tr>
              <tr><td class="py-2 pr-3">4-6 g/dL</td><td class="py-2 pr-3">Asymptomatic, haemodynamically stable</td><td class="py-2">Individualise; correct underlying cause first if feasible</td></tr>
              <tr><td class="py-2 pr-3">&gt; 7 g/dL</td><td class="py-2 pr-3">Stable</td><td class="py-2">Transfusion rarely indicated; treat cause</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">Anaemic heart failure changes the transfusion approach substantially - packed red cells rather than whole blood, slower infusion rate, and diuretic cover to avoid precipitating acute pulmonary oedema in a heart already volume-loaded from chronic compensation.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Applying adult or older-child Hb/PCV reference ranges to a neonate or young infant, misreading the normal physiological nadir at 2-3 months as pathological anaemia.</li>
          <li>Interpreting the Hb number without requesting a film. A PCV of 28% could represent simple iron deficiency or an active haemolytic crisis; the film (and reticulocyte count, where available) differentiates them.</li>
          <li>Missing sickle cell disease in an adult with chronic normocytic-to-macrocytic anaemia. Genotype is inexpensive and should be checked with a history of painful crises, jaundice, or a spleen that has become impalpable over time (autosplenectomy in adult HbSS).</li>
          <li>Attributing all anaemia in a febrile patient to malaria without film confirmation, particularly in areas of high hookworm prevalence where coexisting iron deficiency is common.</li>
          <li>Over-relying on PCV in acute haemorrhage. PCV can remain deceptively normal for several hours after acute bleeding, before compensatory haemodilution occurs. A normal PCV immediately post-haemorrhage does not exclude significant blood loss.</li>
        </ul>
      </div>
      </div>
      
      <!-- WBC section -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">2</span>
      White Blood Cell (WBC) Count and Differential
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Total WBC count is substantially higher in neonates and young infants than in adults, and falls progressively through childhood - an adult reference range applied to a young child will over-call leucocytosis that is, in fact, entirely age-appropriate.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Age group</th>
              <th class="py-2 font-medium">Total WBC (&times;10&sup9;/L)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Birth</td><td class="py-2">9.0-30.0</td></tr>
            <tr><td class="py-2 pr-3">24 hours</td><td class="py-2">9.4-34.0</td></tr>
            <tr><td class="py-2 pr-3">1 month</td><td class="py-2">5.0-19.5</td></tr>
            <tr><td class="py-2 pr-3">6 months-2 years</td><td class="py-2">6.0-17.5</td></tr>
            <tr><td class="py-2 pr-3">2-6 years</td><td class="py-2">5.5-15.5</td></tr>
            <tr><td class="py-2 pr-3">6-12 years</td><td class="py-2">4.5-13.5</td></tr>
            <tr><td class="py-2 pr-3">Adult</td><td class="py-2">4.0-11.0</td></tr>
          </tbody>
        </table>
      </div>
      
      <p class="text-sm mt-2">The differential should be read both ways: percentages are what most lab printouts lead with, but absolute counts (percentage &times; total WBC) are what actually determines whether neutropenia, lymphopenia, or eosinophilia is clinically real - a normal percentage in the context of a low total WBC can still represent an abnormal absolute count, and vice versa.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Cell type</th>
              <th class="py-2 pr-3 font-medium">Adult reference (%)</th>
              <th class="py-2 font-medium">Adult reference, absolute (&times;10&sup9;/L)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Neutrophils</td><td class="py-2 pr-3">40-75%</td><td class="py-2">2.0-7.5</td></tr>
            <tr><td class="py-2 pr-3">Lymphocytes</td><td class="py-2 pr-3">20-45%</td><td class="py-2">1.0-4.0</td></tr>
            <tr><td class="py-2 pr-3">Monocytes</td><td class="py-2 pr-3">2-10%</td><td class="py-2">0.2-1.0</td></tr>
            <tr><td class="py-2 pr-3">Eosinophils</td><td class="py-2 pr-3">1-6%</td><td class="py-2">0.02-0.5</td></tr>
            <tr><td class="py-2 pr-3">Basophils</td><td class="py-2 pr-3">0-1%</td><td class="py-2">0.0-0.1</td></tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
        <p class="text-sm text-amber-900 dark:text-amber-300"><span class="font-medium">The neutrophil-lymphocyte crossover in children</span> is a frequently missed age-related pattern: neonates and adults are neutrophil-predominant, but infants and young children are physiologically lymphocyte-predominant, with the crossover occurring roughly in the first week of life and again (in reverse) around 4-6 years of age.</p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Age group</th>
              <th class="py-2 pr-3 font-medium">Predominant cell type</th>
              <th class="py-2 pr-3 font-medium">Approx. neutrophil %</th>
              <th class="py-2 font-medium">Approx. lymphocyte %</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Birth</td><td class="py-2 pr-3">Neutrophil</td><td class="py-2 pr-3">50-70%</td><td class="py-2">20-30%</td></tr>
            <tr><td class="py-2 pr-3">1-4 weeks</td><td class="py-2 pr-3">Transitioning</td><td class="py-2 pr-3">30-50%</td><td class="py-2">40-60%</td></tr>
            <tr><td class="py-2 pr-3">4 weeks-4 years</td><td class="py-2 pr-3">Lymphocyte</td><td class="py-2 pr-3">20-40%</td><td class="py-2">45-70%</td></tr>
            <tr><td class="py-2 pr-3">4-6 years</td><td class="py-2 pr-3">Transitioning back</td><td class="py-2 pr-3">35-50%</td><td class="py-2">35-50%</td></tr>
            <tr><td class="py-2 pr-3">&gt; 6 years/adult</td><td class="py-2 pr-3">Neutrophil</td><td class="py-2 pr-3">40-75%</td><td class="py-2">20-45%</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Practical implication: a differential showing lymphocyte predominance in a well 2-year-old is a normal finding, not a marker of viral infection or any pathology - applying adult-pattern expectations (neutrophil predominance as "normal") to this age group is a common and avoidable misreading.</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Interpreting Differential Patterns</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs sans border-collapse">
            <thead>
              <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
                <th class="py-2 pr-3 font-medium">Pattern</th>
                <th class="py-2 font-medium">Principal causes in this setting</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              <tr><td class="py-2 pr-3">Neutrophilia</td><td class="py-2">Bacterial infection, stress response, corticosteroids, acute malaria (neutrophil-predominant leucocytosis mimicking bacterial sepsis)</td></tr>
              <tr><td class="py-2 pr-3">Lymphocytosis</td><td class="py-2">Viral infections, pertussis (infants - classically a marked absolute lymphocytosis), atypical lymphocytosis in typhoid or viral hepatitis; physiological lymphocyte predominance in the 4-week-4-year age range should not be mistaken for pathological lymphocytosis</td></tr>
              <tr><td class="py-2 pr-3">Eosinophilia</td><td class="py-2">Hookworm, ascariasis, schistosomiasis, filariasis, strongyloidiasis; allergic causes lower on the list here than in non-endemic settings</td></tr>
              <tr><td class="py-2 pr-3">Leucopenia/neutropenia</td><td class="py-2">Typhoid fever (classically leucopenic, not leucocytotic), viral infections, overwhelming sepsis (a late and ominous finding)</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm mt-2">Malaria-associated neutrophilia occurs through cytokine-mediated demargination and bone marrow release during the febrile paroxysm, and is indistinguishable on the differential alone from bacterial sepsis. This overlap is a major driver of unnecessary co-prescription of antibiotics alongside antimalarials.</p>
        <p class="text-sm mt-2">Typhoid's classical leucopenia reflects endotoxin-mediated bone marrow suppression and splenic sequestration; a normal or raised WBC does not exclude typhoid, particularly with intestinal perforation or secondary bacterial infection, where a reactive leucocytosis can supervene.</p>
        <p class="text-sm mt-2">Marked eosinophilia (roughly &gt; 1.5 &times; 10&sup9;/L absolute) in a patient with nonspecific gastrointestinal or dermatological symptoms warrants stool microscopy for ova and parasites; empirical deworming is reasonable even without a confirmed organism, given the sensitivity limitations of single-sample stool microscopy for helminth ova.</p>
      </div>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Applying adult total WBC and differential reference ranges to a neonate or young child, over-calling leucocytosis or misreading physiological lymphocyte predominance as abnormal.</li>
          <li>Reading the differential only as percentages without calculating the absolute count, missing a real neutropenia or eosinophilia masked by a shifted total WBC.</li>
          <li>Treating a raised WBC as confirmation of bacterial infection and adding antibiotics by default. Malaria alone frequently produces a neutrophil-predominant leucocytosis.</li>
          <li>Assuming a normal or low WBC excludes serious infection. Typhoid classically presents with a normal-to-low count; a normal WBC is sometimes used incorrectly to argue against a typhoid diagnosis already supported by the clinical picture.</li>
          <li>Dismissing eosinophilia as an incidental finding rather than investigating it, in a population with substantial helminth burden.</li>
          <li>Using the WBC count in isolation to decide "infection versus no infection" where CRP/procalcitonin are unavailable - the gap should be closed with more clinical correlation (fever pattern, focus of infection, response to treatment), not less.</li>
        </ul>
      </div>
      </div>
      
      <!-- Platelet section -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">3</span>
      Platelet Count
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-3 text-slate-700 dark:text-slate-300">
      <p class="text-sm">Platelet counts are broadly similar across childhood and adulthood, unlike Hb and WBC, though neonates can run at the lower end of the range physiologically in the first days of life.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs sans border-collapse">
          <thead>
            <tr class="border-b border-slate-300 dark:border-slate-600 text-left text-slate-500 dark:text-slate-400">
              <th class="py-2 pr-3 font-medium">Category</th>
              <th class="py-2 pr-3 font-medium">Range (&times;10&sup9;/L)</th>
              <th class="py-2 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td class="py-2 pr-3">Normal</td><td class="py-2 pr-3">150-450</td><td class="py-2">-</td></tr>
            <tr><td class="py-2 pr-3">Mild thrombocytopenia</td><td class="py-2 pr-3">100-150</td><td class="py-2">Common, usually asymptomatic</td></tr>
            <tr><td class="py-2 pr-3">Moderate thrombocytopenia</td><td class="py-2 pr-3">50-100</td><td class="py-2">Monitor; bleeding risk low without other coagulopathy</td></tr>
            <tr><td class="py-2 pr-3">Severe thrombocytopenia</td><td class="py-2 pr-3">&lt; 50</td><td class="py-2">Bleeding risk rises, especially with trauma or invasive procedures</td></tr>
            <tr><td class="py-2 pr-3">Critical</td><td class="py-2 pr-3">&lt; 20</td><td class="py-2">Spontaneous bleeding risk; consider transfusion if bleeding or pre-procedure</td></tr>
            <tr><td class="py-2 pr-3">Thrombocytosis</td><td class="py-2 pr-3">&gt; 450</td><td class="py-2">Reactive or, rarely, primary</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm">Neonates in the first week can transiently run lower without pathology.</p>
      <p class="text-sm mt-2">Thrombocytopenia in acute malaria is near-universal and multifactorial - splenic sequestration and destruction of platelets, bone marrow suppression, and immune-mediated platelet destruction via antiplatelet antibodies triggered by the infection. It is usually not, on its own, an indication for platelet transfusion; the priority is antimalarial treatment, with the count typically recovering over 7-10 days.</p>
      <p class="text-sm mt-2">Dengue-associated thrombocytopenia (increasingly reported in Nigeria) tends to be more marked and is accompanied by capillary leak in severe disease - rising haematocrit alongside falling platelets is a warning sign for progression to dengue haemorrhagic fever/dengue shock syndrome, distinct from the malaria pattern.</p>
      <p class="text-sm mt-2">Thrombocytosis (reactive, &gt; 450 &times; 10&sup9;/L) occurs with iron deficiency, chronic inflammatory states, and hyposplenism - relevant in sickle cell disease patients who have autosplenectomised and lost the spleen's normal platelet-clearance function.</p>
      
      <div>
        <strong class="block font-semibold text-slate-800 dark:text-slate-200 pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 mt-3">Pitfalls</strong>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Pursuing platelet transfusion for isolated thrombocytopenia in confirmed malaria without active bleeding - rarely indicated, and platelet products are limited in most Nigerian blood banks in any case.</li>
          <li>Not considering dengue in a thrombocytopenic febrile patient once malaria and typhoid have been excluded, particularly during rainy season peaks in urban centres.</li>
          <li>Reading a single platelet value in isolation rather than trending it over 24-48 hours; in malaria or dengue, the trajectory (and any rising haematocrit alongside falling platelets) carries more information than one number.</li>
          <li>Over-interpreting a mildly low platelet count in a first-week neonate without clinical correlation, given the physiologically wider and occasionally lower range in this specific window.</li>
        </ul>
      </div>
      </div>
      
      <!-- Reading order -->
      <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
      <span class="bg-indigo-950 dark:bg-indigo-900 text-white w-6 h-6 rounded-md inline-flex items-center justify-center text-xs shrink-0 font-sans mt-0.5">4</span>
      Reading Order
      </h2>
      
      <div class="space-y-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 text-slate-700 dark:text-slate-300">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li>Confirm the patient's age bracket before interpreting any value - Hb, PCV, MCV, total WBC, and the differential all have age-specific reference ranges, and the single most avoidable error in this whole panel is applying adult ranges to a child.</li>
        <li>PCV/Hb - presence and severity of anaemia, against the correct age-specific reference and WHO diagnostic threshold.</li>
        <li>MCV (&plusmn; RDW, or the Mentzer Index where microcytosis needs narrowing) - narrows the anaemia differential, again against the age-appropriate range.</li>
        <li>WBC total plus differential, read as both percentages and absolute counts - pattern suggesting bacterial, malarial, viral, or parasitic process, accounting for the physiological neutrophil-lymphocyte crossover in young children.</li>
        <li>Platelets - evidence toward malaria, dengue, typhoid, or bleeding risk.</li>
        <li>Peripheral film, wherever available - the single most informative addition to a basic FBC in this setting, and underused relative to its diagnostic yield.</li>
      </ol>
      </div>
      
      <!-- Key Clinical Takeaways -->
      <div class="p-4 sm:p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <h3 class="font-brand text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 pb-2 border-b border-indigo-200 dark:border-indigo-600">Key Clinical Takeaways</h3>
      <ul class="space-y-2.5 text-sm text-indigo-900 dark:text-indigo-300">
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Always confirm age bracket first - it changes what's normal for Hb, WBC, MCV, and the differential all at once.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Use the Mentzer Index (MCV &divide; RBC count, cutoff 13) as a quick, validated first-pass tool to triage iron deficiency from thalassaemia trait before committing to electrophoresis.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A well 2-year-old with lymphocyte predominance is normal - don't chase a viral cause that isn't there.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>A normal or low WBC never excludes typhoid - it's the classical pattern, not a reason to doubt the diagnosis.</span></li>
        <li class="flex gap-2.5 items-start"><svg class="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#4338ca"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Don't transfuse platelets for isolated malaria-associated thrombocytopenia without active bleeding - treat the malaria and trend the count.</span></li>
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
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Nelson Textbook of Pediatrics - age-related haematological reference ranges.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Mentzer WC Jr - Differentiation of Iron Deficiency from Thalassaemia Trait. The Lancet, 1973.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>World Health Organization - Haemoglobin Concentrations for the Diagnosis of Anaemia and Assessment of Severity.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>WHO Guidelines for the Treatment of Malaria.</li>
          <li class="pl-4 -indent-4"><span aria-hidden="true">&bull;&nbsp;&nbsp;</span>Federal Ministry of Health, Nigeria - Standard Treatment Guidelines.</li>
        </ul>
      </div>
      </details>
      
      </body>
      </html>
        `
      },


];
