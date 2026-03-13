import { GoogleGenAI } from "@google/genai";
import { ClinicalCase } from "../types/game";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateClinicalCase(
  difficulty: 'Easy' | 'Moderate' | 'Hard' = 'Moderate',
  specialty?: string
): Promise<ClinicalCase> {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    You are a senior medical educator designing a clinical simulation case for medical students in Sub-Saharan Africa.
    
    Generate a complete, playable clinical case in JSON format.
    The case should be realistic, educational, and challenging.
    
    Target Difficulty: ${difficulty}
    ${specialty ? `Target Specialty: ${specialty}` : ''}
    
    The JSON output must strictly adhere to the following structure:
    {
      "metadata": {
        "id": "string (unique)",
        "title": "string",
        "specialty": "string",
        "difficulty": "${difficulty}",
        "setting": "Emergency" | "Outpatient" | "Ward" | "Rural Clinic",
        "isAfricanContext": boolean (true for most cases),
        "estimatedTime": "string (e.g. '8 min')"
      },
      "presentation": {
        "age": number,
        "sex": "Male" | "Female",
        "chiefComplaint": "string",
        "duration": "string",
        "description": "string (brief opening description, do not reveal diagnosis)"
      },
      "history": [
        {
          "id": "string",
          "text": "string (the question to ask)",
          "answer": "string (the patient's response)",
          "score": number (positive for good questions, 0 or negative for bad ones),
          "clue": "string (what this reveals)",
          "category": "High-Yield" | "Neutral" | "Irrelevant"
        }
        // Generate 8-12 questions: 4-5 High-Yield, 3-4 Neutral, 2-3 Irrelevant
      ],
      "examination": [
        {
          "id": "string",
          "action": "string (e.g., 'Check temperature')",
          "finding": "string (e.g., '39.6°C')",
          "score": number
        }
        // Generate 8-10 exam actions
      ],
      "investigations": [
        {
          "id": "string",
          "name": "string (e.g., 'Full Blood Count')",
          "result": "string",
          "score": number,
          "category": "Bedside" | "Laboratory" | "Imaging",
          "isPenalty": boolean,
          "penaltyReason": "string (optional, required if isPenalty is true)"
        }
        // Generate 6-8 options including 1-2 penalty items
      ],
      "diagnosisOptions": [
        {
          "id": "string",
          "text": "string",
          "isCorrect": boolean
        }
        // Generate 4 options: 1 correct, 3 plausible distractors
      ],
      "management": [
        {
          "id": "string",
          "action": "string",
          "score": number,
          "explanation": "string",
          "isPenalty": boolean,
          "penaltyReason": "string (optional, required if isPenalty is true)"
        }
        // Generate 5-7 management actions including 1-2 high-harm penalties
      ],
      "teachingPoints": [
        "string", "string", "string", "string"
      ],
      "ssaContext": "string (Epidemiology, local drugs, guideline notes)"
    }

    IMPORTANT GUIDELINES:
    1. DIVERSITY OF CONDITIONS: Select from a VERY WIDE VARIETY of conditions seen in Nigeria/Sub-Saharan Africa. Do NOT just focus on Sickle Cell or TB. Include a mix of infectious diseases (e.g., Lassa fever, Typhoid, severe Malaria, HIV complications, Meningitis, Tetanus), non-communicable diseases (e.g., hypertensive emergencies, DKA, heart failure, asthma exacerbation), obstetric emergencies (e.g., eclampsia, PPH, ruptured ectopic), pediatric conditions (e.g., SAM, neonatal sepsis, severe pneumonia), and surgical emergencies (e.g., acute abdomen, trauma).
    2. PLAUSIBLE DISTRACTORS: All options (history, exams, investigations, diagnosis, management) MUST be clinically plausible. Avoid obviously irrelevant or absurd options. Distractors should represent common mistakes or lower-yield questions that a junior doctor might realistically consider. The exercise must train real decision-making.
    3. CONTEXT APPROPRIATE: Do NOT ask about "travel to a malaria endemic region" since the setting IS endemic. Instead, ask about the use of insecticide-treated nets, indoor residual spraying, or local environmental factors.
    4. SPECIFIC MANAGEMENT: In the management section, be highly specific. Include exact medications, doses, routes, durations, and specific fluid regimens (e.g., "IV Ceftriaxone 1g 12-hourly for 7 days", "Normal Saline 1L over 1 hour"). Avoid generic statements like "Give antibiotics" or "Give IV fluids".
    5. CLINICAL DEPTH: Add depth to the simulation. Make the patient's history and presentation nuanced. Ensure clinical accuracy.
    6. SCORES: Reward good clinical reasoning and penalize dangerous actions. Penalty items must have clear rationales.
    7. Do not reveal the diagnosis in the initial presentation.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as ClinicalCase;
  } catch (error) {
    console.error("Error generating clinical case:", error);
    throw error;
  }
}
