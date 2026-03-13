import { GoogleGenAI, Type } from "@google/genai";
import { Template } from "../types";

// Initialize Gemini AI
// Note: In a real production app, we should probably proxy this through a backend to keep the key secret,
// but for this preview environment, we use the client-side key as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateClinicalInsight(template: Template) {
  try {
    const model = "gemini-3-flash-preview";
    const prompt = `
      You are a senior clinical consultant specializing in medicine in Sub-Saharan Africa. Provide a highly detailed, practical, and medically accurate clinical insight for the following condition: ${template.condition}.
      
      CRITICAL INSTRUCTIONS:
      1. SPECIFICITY: When mentioning medications, YOU MUST PROVIDE STANDARD DOSAGES, routes, and frequencies (e.g., "Ceftriaxone 2g IV daily").
      2. CONTEXT: Contrast "Gold Standard" care with "Practical Management" for resource-limited Sub-Saharan African settings where applicable.
      
      Please structure your response in JSON format with the following keys:
      - managementPrinciples: An array of strings. Each principle should be detailed. Include specific drug dosages and treatment protocols. Mention gold standard vs practical alternatives here.
      - criticalActions: An array of strings listing "What MUST be done" (Urgent/Critical actions). Be specific (e.g., "Start IV fluids immediately: Normal Saline 500ml bolus").
      - contraindications: An array of strings listing "What SHOULD NOT be done" (Contraindications/Pitfalls).
      - contextualNotes: A string providing specific pearls for Sub-Saharan Africa (e.g., availability of specific drugs, common co-morbidities like HIV/TB to consider, cost considerations).
      
      Template Content for context:
      ${template.content.substring(0, 1000)}...
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as { 
      managementPrinciples: string[], 
      criticalActions: string[], 
      contraindications: string[], 
      contextualNotes: string 
    };
  } catch (error) {
    console.error("Error generating insight:", error);
    throw error;
  }
}

export async function assistClerking(notes: string, task: string | string[]) {
  try {
    const model = "gemini-3-flash-preview";
    
    const basePrompt = `You are a Clinical Documentation and Decision-Support Assistant with the knowledge of clinicians with many years of experience designed to help healthcare professionals transform rough clinical notes into structured, high-quality medical documentation and clinical reasoning outputs.
Your users are medical students, interns, residents, and clinicians, primarily working in resource-variable healthcare settings such as hospitals and clinics in low- and middle-income countries.
Your outputs must resemble real clinician documentation, matching the language, style, and structure familiar to practicing doctors.
You function as a digital resident or assistant, helping clinicians:
- clean up documentation
- generate structured clerking notes
- brainstorm differential diagnoses
- summarize patient cases
- construct management plans

IMPORTANT: Do NOT use special formatting like asterisks (**) or markdown bolding in your output. Use plain text formatting, spacing, and standard punctuation.

Style and Language Requirements:
- Use clear medical English
- Use clinician shorthand where appropriate. Use standard abbreviations commonly used in Nigerian notes (e.g., PC, HPC/HPI, PTP, Hx, O/E, RR, PR, SpO2, cpm (cycles per minute), bpm (beats per minute), NAD, RS, CVS, GIT, CNS, MSS). Do not over-explain abbreviations.
- Avoid unnecessary verbosity
- Maintain chronological clinical storytelling
- Adapt documentation style depending on medical specialty (e.g., birth history for Pediatrics, comorbidities for Internal Medicine, pain characteristics for Surgery, LMP/parity for OBGYN).
- Adapt to setting (concise for outpatient, detailed for inpatient).
- All responses must be grounded in solid medical evidence (WHO, NICE, CDC).
- Consider local healthcare realities (availability of investigations, common medications, resource limitations in LMICs).
- Avoid unsafe or experimental treatments.
- Present information as clinical support, not definitive diagnosis.

Patient Demographics Generation Guidelines (if generating a Complete Note):
- Generate plausible demographic information consistent with the Nigerian context if not provided (Age, Sex, Address/Location, Tribe/Ethnic group, Occupation, Caregiver).
- Biodata format: For adults, prefer a narrative format (e.g., "A 35-year-old male trader who resides in Surulere, Lagos State."). For pediatrics, you may use a list format (Name, Age, Sex, Address, Tribe, Religion, Caregiver).
- Address examples: Surulere, Lagos State; Dutse, Jigawa State; Ogbomosho, Oyo State. Locations can come from any state across Nigeria to maintain variety. Avoid overly specific street addresses.
- Tribe examples: Yoruba, Hausa, Igbo, Tiv, Fulani, Efik, Ibibio, Edo, Kanuri, Nupe, Ijaw, Urhobo.
- Occupation examples: Trader, Civil servant, Farmer, Teacher, Artisan, Student, Commercial driver, Tailor, Mechanic.
- DO NOT invent demographics if not necessary for the task (e.g., when generating only a diagnosis list or summary).

Presenting Complaints (PC) Guidelines:
- Use medical shorthand for durations instead of writing out days/weeks/months.
- Examples: use "x 4/7" for 4 days, "x 3/7" for 3 days, "x 3h" for 3 hours, "x 2/52" for 2 weeks, "x 5/12" for 5 months.
- Example PC:
  1. Fever x 4/7
  2. Cough x 3/7
  3. Shortness of breath x 1/7

History of Presenting Complaint (HPC) Guidelines:
- DO NOT repeat the patient demographic at the start of the HPC since it has already been stated in the Biodata.
- Start directly with the chronological narrative. For example: "He/she was apparently well until 4 days ago [i.e. when he developed the first symptom]..."
- Then move on to the next symptom: "...3 days prior to presentation he also developed coughing..." and so on.

Physical Examination Documentation Guidelines:
- Internal Medicine: General Examination (Level of consciousness, general appearance, devices, vital signs, head/neck, specific signs like clubbing/edema) and Systemic Examination (CNS, Motor, CVS, Respiratory, Abdominal).
- Surgery: General Examination and Focused Local/Regional Examination (IPPA, 6S for lumps, ulcer characteristics, acute abdomen signs, MSS).
- Include only clinically relevant examination findings. Use plausible values where values are missing.

Pediatric Clerking Guidelines (Use when the patient is a child):
- IMPORTANT: Apply these pediatric guidelines ONLY when clinically appropriate and relevant to the specific case. Do not force irrelevant sections (e.g., detailed birth history for an older teenager unless indicated). Supplement these structures with current best practices and the latest evidence-based medical guidelines.
- Biodata (NASRATI): Name, Age, Sex, Religion, Address, Tribe, and Informant (relationship and reliability).
- Presenting Complaint (PC): Max 3-5 complaints in chronological order (oldest to most recent). If hospitalized, document time on admission and reason.
- History of Presenting Complaint (HPC - The 5 C's):
  - Characterize: site, onset, duration, quantity, quality (use SOCRATES/OLD CARTS for pain).
  - Course: progressively worsening, improving, or static.
  - Cause: identify etiology and rule out differentials.
  - Complications: suspected secondary disease processes.
  - Care so far: treatments at home, referral centers, or since admission.
- Past Medical History (PMH): similar past illnesses, chronic conditions (e.g., SCD, asthma), hospitalizations, transfusions, surgeries.
- Birth History: Pre-natal, Natal, Post-Natal details (conception, antenatal visits, illnesses, gestational age, mode/place of delivery, condition at birth, birth weight, resuscitation).
- Dietary History (FADU): exclusive breastfeeding duration, supplementary/complementary feeding, Frequency, Adequacy, Density, and Utilization of feeds.
- Immunization History: vaccines received and dates (mention evidence like certificate or BCG scar).
- Developmental History: milestones across Gross Motor, Fine Motor, Language/Verbal, Social, and Cognitive domains.
- Family and Social History: family tree, parental education/occupation, housing conditions (ventilation, overcrowding), water sources/refuse disposal.
- Review of Systems: pertinent positives and negatives for other systems.
- Summary: 3-4 sentences including brief biodata, primary complaints with key positive/negative findings, and current clinical status/interventions.

Pediatric Physical Examination Documentation:
- General Examination: age, appearance (acutely/chronically ill or toxic-looking), level of consciousness, respiratory/painful distress. Presence/absence of pallor, jaundice, cyanosis, dehydration, lymphadenopathy.
- Anthropometry: Weight, Height/Length, OFC, MUAC. Compare against standard charts for adequacy.
- Systemic Examination:
  - Respiratory: RR (compare to age norms), chest symmetry, expansion, tracheal position, percussion notes, breath sounds.
  - Cardiovascular: pulse (rate, rhythm, volume), BP, precordial findings (apex beat, heaves, thrills, heart sounds S1, S2, S3).
  - Abdominal: shape (full, flat, scaphoid, distended), palpation (tenderness, masses), organomegaly (liver/spleen size below costal margin), percussion (ascites), bowel sounds.
  - Neurologic: mental state (COSMI: Consciousness, Orientation, Speech, Memory, Intellect), consciousness (Paediatric GCS or Blantyre Coma Scale), motor system (PATRIC-G: Inspection, Bulk, Asymmetry, Power, Reflexes, Coordination, Gait).

Obstetric Clerking Guidelines (Use when the patient is pregnant or presenting for obstetric care):
- IMPORTANT: Apply these structures only when clinically appropriate. Avoid forcing irrelevant sections. Adapt documentation based on the specific scenario (e.g., ANC booking, routine ANC, Labour ward). Incorporate current obstetric best practices and evidence-based guidelines.
- Biodata: Name, Age, Occupation, Address, Religion, Tribe, Marital status, Educational level. Crucially include Gravidity (G) and Parity (P) (e.g., G3 P2+0).
- Obstetric Dates: Last Menstrual Period (LMP), Expected Date of Delivery (EDD using Naegele's rule), Estimated Gestational Age (EGA).
- Presenting Complaint (PC): In patient's own words, chronological order with duration (e.g., Lower abdominal pain x 6 hours, Vaginal bleeding x 3 hours).
- History of Present Pregnancy (Index Pregnancy): Booking status, Antenatal Care (ANC) visits, medications (iron, folic acid), immunizations (Tetanus toxoid), routine investigations (PCV, Blood group, Genotype, HIV, Urinalysis).
- Past Obstetric History: Chronological account of previous pregnancies (year, duration, mode of delivery, complications, birth weight, outcome, current status).
- Gynaecological History: Menarche, menstrual cycle pattern, contraceptive use, last Pap smear.
- Medical/Surgical/Family/Social History: Chronic conditions (DM, HTN, SCD, asthma), previous surgeries (CS, myomectomy), family history of twinning/hereditary diseases, marital structure (monogamous/polygamous), smoking/alcohol.
- Obstetric Physical Examination:
  - General: Level of consciousness, distress, pallor, jaundice, pedal edema. Vital signs (BP, PR, RR, Temp). Anthropometry (Height, Weight - note short stature <1.50m). Breast exam (symmetry, lumps, nipples).
  - Abdominal (Obstetric) Exam: Inspection (gravid enlargement, scars, striae gravidarum, linea nigra). Palpation (Symphysio-Fundal Height [SFH], Leopold Maneuvers [fundal, lateral, pelvic, engagement]). Auscultation (Fetal heart rate [FHR] normally 120-160 bpm).
  - Pelvic Exam: Vaginal Examination (VE) for cervical dilatation, effacement, fetal station, membrane status (routine in labor, not always required at booking). Speculum if indicated.
- Obstetric Summary: Age, G/P, EGA, major complaint, key clinical findings (e.g., "A 28-year-old G3 P2+0 woman at 32 weeks gestation who presented with lower abdominal pain of 6 hours duration associated with vaginal bleeding.").`;

    const tasks = Array.isArray(task) ? task : [task];
    let taskInstructions = "";

    if (tasks.includes('complete')) {
      taskInstructions += `\n\nTask: Complete Note
Act as a medical scribe. Convert fragmented notes into a fully structured clinical clerking note written in professional medical language.
Structure typically includes:
- Patient Identification
- Presenting Complaints (PC)
- History of Presenting Complaint (HPC)
- Past Medical History
- Drug History
- Family History
- Social History
- Review of Systems
- Physical Examination (use structured headings)
- Assessment
- Differential Diagnoses (2-4 plausible alternatives)
- Initial Investigation Plan (prioritize commonly available tests like FBC, MPS, Urinalysis, Blood culture, CXR)
- Initial Management Plan (urgent interventions first)`;
    }

    if (tasks.includes('diagnosis')) {
      taskInstructions += `\n\nTask: Suggest Diagnosis
Analyze the symptoms and findings and generate a differential diagnosis list.
- Place the most likely diagnosis first.
- Provide brief clinical reasoning.
- Include 3-6 possible diagnoses.
Format:
Most Likely Diagnosis
1. [Diagnosis]
   - [Reasoning]
Other Possible Diagnoses
2. [Diagnosis]
3. [Diagnosis]`;
    }

    if (tasks.includes('summary')) {
      taskInstructions += `\n\nTask: Generate Summary
Produce a structured clinical case summary (2-4 sentences) written in the style commonly used during ward rounds or patient handovers.
Include:
1. Biodata (Initials, Age, Sex. e.g., "I have presented Mr S.A, a 40-year-old male...")
2. Presenting Complaints (onset, duration, key characteristics)
3. Duration of Hospitalisation (if admitted)
4. Important Positives and Negatives
5. Management History (investigations, treatments)
6. Clinical Progress
Write as one cohesive narrative. No bullet points.`;
    }

    if (tasks.includes('plan')) {
      taskInstructions += `\n\nTask: Create Plan
Generate a step-by-step management plan.
- Prioritize urgent and life-threatening issues.
- Include diagnostic and therapeutic steps.
- Reflect real clinical workflow.
Structure:
Immediate Actions
- [Actions]
Investigations
- [Tests]
Treatment
- [Therapies]
Monitoring
- [Parameters]`;
    }

    const prompt = `${basePrompt}\n${taskInstructions}\n\nPerform the requested tasks based on the following clinical notes:\n\nNotes:\n${notes}`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error assisting clerking:", error);
    throw error;
  }
}

export interface LearningModule {
  symptom: string;
  definition: string;
  clinical_context: string;
  core_characterization_questions: string[];
  additional_relevant_questions: string[];
  red_flag_questions: string[];
  associated_symptoms: string[];
  important_differential_diagnoses: string[];
  interactive_questions: {
    question: string;
    options: string[];
    correct_answer: string;
    explanation: string;
  }[];
  common_clerking_mistakes: string[];
  quick_clerking_checklist: string[];
}

export interface PhysicalExamModule {
  examination: string;
  clinical_context: string;
  overview: string;
  indications: string[];
  step_by_step_technique: {
    step_name: string;
    description: string;
    scoring_or_details: { score: string; response: string }[];
  }[];
  important_clinical_findings: string[];
  interpretation: string[];
  interactive_questions: {
    question: string;
    options: string[];
    correct_answer: string;
    explanation: string;
  }[];
  common_mistakes: string[];
  quick_checklist: string[];
}

export async function generatePhysicalExamModule(examination: string, context: string, difficulty: string): Promise<PhysicalExamModule | null> {
  try {
    const model = 'gemini-3.1-pro-preview';

    const prompt = `You are a clinical educator designing training modules for medical students and junior doctors in Sub-Saharan Africa.

Your task is to generate a Physical Examination Mastery Module.

The goal is to teach learners how to properly perform, interpret, and use physical examination findings in clinical reasoning.

The module must be clinically accurate, realistic, and aligned with modern medical practice.

Generate a Physical Examination Mastery Module using the following parameters:
Examination: ${examination}
Clinical Setting: ${context}
Difficulty: ${difficulty}

The module should include:
- Examination overview
- Indications for performing the exam
- Step-by-step examination technique (include scoring or details if applicable)
- Important clinical findings
- Interpretation of findings
- 3 interactive learning questions with plausible answer options
- Common mistakes
- Quick examination checklist

Ensure that:
- Questions reflect real clinical reasoning
- Distractor options are clinically plausible
- Content is relevant to Sub-Saharan clinical practice

Return the output in the structured JSON format provided.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            examination: { type: Type.STRING },
            clinical_context: { type: Type.STRING },
            overview: { type: Type.STRING },
            indications: { type: Type.ARRAY, items: { type: Type.STRING } },
            step_by_step_technique: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  step_name: { type: Type.STRING },
                  description: { type: Type.STRING },
                  scoring_or_details: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        score: { type: Type.STRING },
                        response: { type: Type.STRING }
                      },
                      required: ["score", "response"]
                    }
                  }
                },
                required: ["step_name", "description", "scoring_or_details"]
              }
            },
            important_clinical_findings: { type: Type.ARRAY, items: { type: Type.STRING } },
            interpretation: { type: Type.ARRAY, items: { type: Type.STRING } },
            interactive_questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correct_answer: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                },
                required: ["question", "options", "correct_answer", "explanation"]
              }
            },
            common_mistakes: { type: Type.ARRAY, items: { type: Type.STRING } },
            quick_checklist: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: [
            "examination", "clinical_context", "overview", "indications",
            "step_by_step_technique", "important_clinical_findings", "interpretation",
            "interactive_questions", "common_mistakes", "quick_checklist"
          ]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as PhysicalExamModule;
    }
    return null;
  } catch (error) {
    console.error("Error generating physical exam module:", error);
    throw error;
  }
}

export interface LabInterpretationModule {
  investigation: string;
  clinical_context: string;
  overview: string;
  normal_reference_ranges: { test: string; normal_range: string }[];
  sample_clinical_scenario: string;
  laboratory_results: { test: string; result: string }[];
  interpretation_question: {
    question: string;
    options: string[];
    correct_answer: string;
    explanation: string;
  };
  differential_diagnoses: string[];
  clinical_significance: string[];
  next_management_steps: string[];
  common_mistakes: string[];
}

export async function generateLabInterpretationModule(investigation: string, context: string, difficulty: string): Promise<LabInterpretationModule | null> {
  try {
    const model = 'gemini-3.1-pro-preview';

    const prompt = `You are a clinical educator designing training modules for medical students and junior doctors in Sub-Saharan Africa.

Your task is to generate a Laboratory Interpretation Mastery Module.

The goal is to teach learners how to interpret common laboratory investigations, connect abnormal results to clinical diagnoses, identify dangerous abnormalities, and decide appropriate next steps.

The module must be clinically accurate, realistic, and aligned with modern medical practice.

Generate a Laboratory Interpretation Mastery Module using the following parameters:
Investigation: ${investigation}
Clinical Setting: ${context}
Difficulty: ${difficulty}

The module should include:
- Investigation overview
- Normal reference ranges (for adults)
- A sample clinical scenario
- A laboratory results table with abnormal findings
- 1 interactive interpretation question with plausible answer options
- Differential diagnoses
- Clinical significance
- Next management steps
- Common interpretation mistakes

Ensure that:
- Questions reflect real clinical reasoning
- Distractor options are clinically plausible
- Content is relevant to Sub-Saharan clinical practice

Return the output in the structured JSON format provided.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            investigation: { type: Type.STRING },
            clinical_context: { type: Type.STRING },
            overview: { type: Type.STRING },
            normal_reference_ranges: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  test: { type: Type.STRING },
                  normal_range: { type: Type.STRING }
                },
                required: ["test", "normal_range"]
              }
            },
            sample_clinical_scenario: { type: Type.STRING },
            laboratory_results: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  test: { type: Type.STRING },
                  result: { type: Type.STRING }
                },
                required: ["test", "result"]
              }
            },
            interpretation_question: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correct_answer: { type: Type.STRING },
                explanation: { type: Type.STRING }
              },
              required: ["question", "options", "correct_answer", "explanation"]
            },
            differential_diagnoses: { type: Type.ARRAY, items: { type: Type.STRING } },
            clinical_significance: { type: Type.ARRAY, items: { type: Type.STRING } },
            next_management_steps: { type: Type.ARRAY, items: { type: Type.STRING } },
            common_mistakes: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: [
            "investigation", "clinical_context", "overview", "normal_reference_ranges",
            "sample_clinical_scenario", "laboratory_results", "interpretation_question",
            "differential_diagnoses", "clinical_significance", "next_management_steps",
            "common_mistakes"
          ]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as LabInterpretationModule;
    }
    return null;
  } catch (error) {
    console.error("Error generating lab interpretation module:", error);
    throw error;
  }
}

export interface ClinicalScoringModule {
  scoring_system: string;
  clinical_context: string;
  learning_objective: string;
  clinical_scenario: {
    age: string;
    symptoms: string;
    physical_exam_findings: string;
    relevant_laboratory_values: string;
  };
  interactive_questions: {
    question: string;
    options: string[];
    correct_answer: string;
    explanation: string;
  }[];
  explanation: {
    score_calculation: string;
    clinical_significance: string;
    mortality_or_risk_implications: string;
    correct_management: string;
  };
  african_clinical_context: string;
}

export async function generateClinicalScoringModule(scoringSystem: string, context: string, difficulty: string): Promise<ClinicalScoringModule | null> {
  try {
    const model = 'gemini-3.1-pro-preview';

    const prompt = `You are an expert medical educator designing interactive clinical learning modules for medical students and junior doctors in Sub-Saharan Africa.

Your task is to generate a Clinical Scoring System training module.

The module should teach:
• When the scoring system is used
• How to calculate it
• How to interpret it
• What management decisions follow

The case must be realistic and clinically relevant.

Generate a Clinical Scoring System Mastery Module using the following parameters:
Scoring System: ${scoringSystem}
Clinical Setting: ${context}
Difficulty: ${difficulty}

OUTPUT STRUCTURE:

1. TITLE
Name of scoring system and clinical context

2. LEARNING OBJECTIVE
What the learner should understand

3. CLINICAL SCENARIO
Short realistic patient case including:
• Age
• Symptoms
• Physical exam findings
• Relevant laboratory values

4. QUESTION 1 — SCORE SELECTION
Ask which scoring system should be used.
Provide 4 options including distractors.

5. QUESTION 2 — VARIABLE IDENTIFICATION
Ask which variables contribute to the score.
Provide 4–6 options.

6. QUESTION 3 — SCORE CALCULATION
Ask the learner to calculate the total score.
Provide multiple choices.

7. QUESTION 4 — CLINICAL INTERPRETATION
Ask what the score means.
Provide options.

8. QUESTION 5 — MANAGEMENT DECISION
Ask the correct next step in management.
Provide 4 options.

9. EXPLANATION
Explain:
• How the score was calculated
• Clinical significance
• Mortality or risk implications
• Correct management

10. AFRICAN CLINICAL CONTEXT
Add a short explanation of relevance in African healthcare settings.

IMPORTANT RULES

• Follow latest international guidelines
• Use realistic clinical numbers
• Include common mistakes as distractor answers
• Avoid overly rare diseases
• Focus on practical clinical decision making

Return the output in the structured JSON format provided.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            scoring_system: { type: Type.STRING },
            clinical_context: { type: Type.STRING },
            learning_objective: { type: Type.STRING },
            clinical_scenario: {
              type: Type.OBJECT,
              properties: {
                age: { type: Type.STRING },
                symptoms: { type: Type.STRING },
                physical_exam_findings: { type: Type.STRING },
                relevant_laboratory_values: { type: Type.STRING }
              },
              required: ["age", "symptoms", "physical_exam_findings", "relevant_laboratory_values"]
            },
            interactive_questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correct_answer: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                },
                required: ["question", "options", "correct_answer", "explanation"]
              }
            },
            explanation: {
              type: Type.OBJECT,
              properties: {
                score_calculation: { type: Type.STRING },
                clinical_significance: { type: Type.STRING },
                mortality_or_risk_implications: { type: Type.STRING },
                correct_management: { type: Type.STRING }
              },
              required: ["score_calculation", "clinical_significance", "mortality_or_risk_implications", "correct_management"]
            },
            african_clinical_context: { type: Type.STRING }
          },
          required: [
            "scoring_system", "clinical_context", "learning_objective", "clinical_scenario",
            "interactive_questions", "explanation", "african_clinical_context"
          ]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as ClinicalScoringModule;
    }
    return null;
  } catch (error) {
    console.error("Error generating clinical scoring module:", error);
    throw error;
  }
}

export interface ManagementPlanModule {
  disease: string;
  clinical_context: string;
  learning_objective: string;
  clinical_scenario: {
    age: string;
    symptoms: string;
    vital_signs: string;
    physical_exam_findings: string;
    key_lab_results: string;
  };
  interactive_questions: {
    question: string;
    options: string[];
    correct_answer: string;
    explanation: string;
  }[];
  full_management_plan: {
    immediate_care: string;
    definitive_therapy: string;
    medication_dosing: string;
    fluid_therapy: string;
    electrolyte_correction: string;
    monitoring_parameters: string;
    disposition: string;
  };
  african_clinical_context: string;
}

export async function generateManagementPlanModule(disease: string, context: string, difficulty: string): Promise<ManagementPlanModule | null> {
  try {
    const model = 'gemini-3.1-pro-preview';

    const prompt = `You are an expert clinician and medical educator designing interactive training modules that teach guideline-based management of diseases.

Your goal is to train medical students and junior doctors to construct complete and safe management plans.

The module must focus on practical treatment decisions including:
• medication choice
• dosing
• route
• duration
• fluid therapy
• electrolyte correction
• monitoring
• disposition

OUTPUT STRUCTURE

1. TITLE
Disease and clinical scenario.

2. LEARNING OBJECTIVE
What the learner will master.

3. CLINICAL SCENARIO
Provide a realistic patient case including:
• age
• symptoms
• vital signs
• physical exam findings
• key lab results if relevant.

4. QUESTION 1 — IMMEDIATE STABILIZATION
Ask what the most important immediate action is.

5. QUESTION 2 — DEFINITIVE TREATMENT
Ask the appropriate first-line treatment.

6. QUESTION 3 — MEDICATION DOSING
Ask the correct dose of the medication.

7. QUESTION 4 — TREATMENT DURATION
Ask the correct duration of therapy.

8. QUESTION 5 — SUPPORTIVE MANAGEMENT
Ask about fluids, oxygen, symptomatic treatment, or monitoring.

9. QUESTION 6 — DISPOSITION
Ask where the patient should be managed (home, ward, ICU).

10. FULL MANAGEMENT PLAN
Provide a structured explanation including:
Immediate care
Definitive therapy
Medication dosing
Fluid therapy if needed
Electrolyte correction if relevant
Monitoring parameters
Disposition

11. AFRICAN CLINICAL CONTEXT
Explain how the disease is commonly managed in African healthcare systems and relevant epidemiology.

IMPORTANT RULES

• Use guideline-based medicine (WHO, NICE, IDSA, ACC/AHA where appropriate)
• Include realistic medication doses
• Avoid rare diseases
• Focus on practical clinical decision making
• Include common errors as distractor answers

Generate a Management Plan Mastery Module using the following parameters:
Disease: ${disease}
Clinical Setting: ${context}
Difficulty: ${difficulty}

Return the output in the structured JSON format provided.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            disease: { type: Type.STRING },
            clinical_context: { type: Type.STRING },
            learning_objective: { type: Type.STRING },
            clinical_scenario: {
              type: Type.OBJECT,
              properties: {
                age: { type: Type.STRING },
                symptoms: { type: Type.STRING },
                vital_signs: { type: Type.STRING },
                physical_exam_findings: { type: Type.STRING },
                key_lab_results: { type: Type.STRING }
              },
              required: ["age", "symptoms", "vital_signs", "physical_exam_findings", "key_lab_results"]
            },
            interactive_questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correct_answer: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                },
                required: ["question", "options", "correct_answer", "explanation"]
              }
            },
            full_management_plan: {
              type: Type.OBJECT,
              properties: {
                immediate_care: { type: Type.STRING },
                definitive_therapy: { type: Type.STRING },
                medication_dosing: { type: Type.STRING },
                fluid_therapy: { type: Type.STRING },
                electrolyte_correction: { type: Type.STRING },
                monitoring_parameters: { type: Type.STRING },
                disposition: { type: Type.STRING }
              },
              required: ["immediate_care", "definitive_therapy", "medication_dosing", "fluid_therapy", "electrolyte_correction", "monitoring_parameters", "disposition"]
            },
            african_clinical_context: { type: Type.STRING }
          },
          required: [
            "disease", "clinical_context", "learning_objective", "clinical_scenario",
            "interactive_questions", "full_management_plan", "african_clinical_context"
          ]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as ManagementPlanModule;
    }
    return null;
  } catch (error) {
    console.error("Error generating management plan module:", error);
    throw error;
  }
}

export async function generateLearningModule(symptom: string, context: string, difficulty: string): Promise<LearningModule | null> {
  try {
    const model = 'gemini-3.1-pro-preview'; // Use a more capable model for structured JSON generation

    const prompt = `You are a clinical educator designing training modules for medical students and junior doctors in Sub-Saharan Africa.

Your task is to generate a Symptom Clerking Training Module.

The goal is to teach learners how to properly characterize and clerk a symptom during history taking, identify red flags, interpret key findings, and connect them to clinical reasoning.

The module must be clinically accurate, realistic, and aligned with modern medical practice.

Avoid trivial or unrealistic options. All questions and answer options must be clinically plausible.

Focus on conditions commonly encountered in African clinical settings.

Generate a Symptom Clerking Training Module using the following parameters:
Symptom: ${symptom}
Clinical Setting: ${context}
Difficulty: ${difficulty}

The module should include:
- A concise symptom definition
- Key symptom characterization questions
- Red flag questions
- Important associated symptoms
- Common differential diagnoses
- 3 interactive learning questions with plausible answer options
- Common clerking mistakes
- A quick clerking checklist

Ensure that:
- Questions reflect real clinical reasoning
- Distractor options are clinically plausible
- Content is relevant to Sub-Saharan clinical practice

Return the output in the structured JSON format provided.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            symptom: { type: Type.STRING },
            definition: { type: Type.STRING },
            clinical_context: { type: Type.STRING },
            core_characterization_questions: { type: Type.ARRAY, items: { type: Type.STRING } },
            additional_relevant_questions: { type: Type.ARRAY, items: { type: Type.STRING } },
            red_flag_questions: { type: Type.ARRAY, items: { type: Type.STRING } },
            associated_symptoms: { type: Type.ARRAY, items: { type: Type.STRING } },
            important_differential_diagnoses: { type: Type.ARRAY, items: { type: Type.STRING } },
            interactive_questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correct_answer: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                },
                required: ["question", "options", "correct_answer", "explanation"]
              }
            },
            common_clerking_mistakes: { type: Type.ARRAY, items: { type: Type.STRING } },
            quick_clerking_checklist: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: [
            "symptom", "definition", "clinical_context", "core_characterization_questions",
            "additional_relevant_questions", "red_flag_questions", "associated_symptoms",
            "important_differential_diagnoses", "interactive_questions", "common_clerking_mistakes",
            "quick_clerking_checklist"
          ]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as LearningModule;
    }
    return null;
  } catch (error) {
    console.error("Error generating learning module:", error);
    throw error;
  }
}
