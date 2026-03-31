
export interface CalculatorInput {
    name: string;
    type: 'number' | 'select' | 'boolean' | 'date';
    options?: string[];
    unit?: string;
    min?: number;
    max?: number;
    step?: number;
}

export interface Calculator {
    name: string;
    category: string;
    description: string;
    explanation: string;
    inputs: CalculatorInput[];
    calculation: (inputs: { [key: string]: any }) => { result: number | string; interpretation: string; recommendation?: string, color?: string, redFlag?: string };
}

// --- Calculation Functions ---

const gcsCalculation = (inputs: { Eyes: string; Verbal: string; Motor: string }) => {
    const scores = {
        'Eyes': { 'Spontaneous': 4, 'To Voice': 3, 'To Pain': 2, 'None': 1 },
        'Verbal': { 'Oriented': 5, 'Confused': 4, 'Inappropriate Words': 3, 'Incomprehensible Sounds': 2, 'None': 1 },
        'Motor': { 'Obeys Commands': 6, 'Localizes Pain': 5, 'Withdraws from Pain': 4, 'Flexion to Pain': 3, 'Extension to Pain': 2, 'None': 1 }
    };
    const eyeScore = scores['Eyes'][inputs.Eyes] ?? 0;
    const verbalScore = scores['Verbal'][inputs.Verbal] ?? 0;
    const motorScore = scores['Motor'][inputs.Motor] ?? 0;
    const totalScore = eyeScore + verbalScore + motorScore;

    let interpretation = '';
    let color = 'text-green-500';
    if (totalScore <= 8) {
        interpretation = 'Severe head injury';
        color = 'text-red-500';
    } else if (totalScore <= 12) {
        interpretation = 'Moderate head injury';
        color = 'text-yellow-500';
    } else {
        interpretation = 'Mild head injury';
    }
    return { result: totalScore, interpretation, color, recommendation: "GCS < 13 warrants urgent neurosurgical consultation. Consider CT head." };
};

const qsofaCalculation = (inputs: { 'Respiratory Rate': number; 'Altered Mentation': boolean; 'Systolic BP': number }) => {
    let score = 0;
    if (inputs['Respiratory Rate'] >= 22) score++;
    if (inputs['Altered Mentation']) score++;
    if (inputs['Systolic BP'] <= 100) score++;

    let interpretation = 'Low risk for poor outcome';
    let recommendation = 'Continue monitoring.';
    let color = 'text-green-500';

    if (score >= 2) {
        interpretation = 'High risk for poor outcome';
        recommendation = 'Assess for organ dysfunction (lactate, CRT, urine output). Consider escalating care to ICU if signs of sepsis are present.';
        color = 'text-red-500';
    }
    return { result: score, interpretation, recommendation, color };
};

const curb65Calculation = (inputs: { 'Confusion': boolean; 'Urea > 7 mmol/L': boolean; 'Resp Rate >= 30': boolean; 'BP < 90/60': boolean; 'Age >= 65': boolean; }) => {
    let score = 0;
    if (inputs.Confusion) score++;
    if (inputs['Urea > 7 mmol/L']) score++;
    if (inputs['Resp Rate >= 30']) score++;
    if (inputs['BP < 90/60']) score++;
    if (inputs['Age >= 65']) score++;

    let interpretation = 'Low severity';
    let recommendation = 'Consider outpatient treatment.';
    let color = 'text-green-500';

    if (score >= 3) {
        interpretation = 'High severity';
        recommendation = 'Manage in hospital as severe pneumonia; consider ICU assessment.';
        color = 'text-red-500';
    } else if (score >= 1) {
        interpretation = 'Moderate severity';
        recommendation = 'Consider hospital supervised treatment.';
        color = 'text-yellow-500';
    }

    return { result: score, interpretation, recommendation, color };
};


const news2Calculation = (inputs: { 'Respiratory Rate': number; 'O2 Saturation': number; 'Supplemental O2': boolean; 'Systolic BP': number; 'Heart Rate': number; 'Consciousness': string; 'Temperature': number }) => {
    let score = 0;
    // RR
    if (inputs['Respiratory Rate'] <= 8) score += 3;
    else if (inputs['Respiratory Rate'] >= 25) score += 3;
    else if (inputs['Respiratory Rate'] >= 21) score += 2;
    else if (inputs['Respiratory Rate'] >= 9 && inputs['Respiratory Rate'] <= 11) score += 1;
    // O2 Sats
    if (inputs['O2 Saturation'] <= 91) score += 3;
    else if (inputs['O2 Saturation'] <= 93) score += 2;
    else if (inputs['O2 Saturation'] <= 95) score += 1;
    // Supp O2
    if (inputs['Supplemental O2']) score += 2;
    // SBP
    if (inputs['Systolic BP'] <= 90) score += 3;
    else if (inputs['Systolic BP'] <= 100) score += 2;
    else if (inputs['Systolic BP'] <= 110) score += 1;
    else if (inputs['Systolic BP'] >= 220) score += 3;
    // HR
    if (inputs['Heart Rate'] <= 40) score += 3;
    else if (inputs['Heart Rate'] >= 131) score += 3;
    else if (inputs['Heart Rate'] >= 111) score += 2;
    else if (inputs['Heart Rate'] >= 91) score += 1;
    else if (inputs['Heart Rate'] >= 41 && inputs['Heart Rate'] <= 50) score += 1;
    // Consciousness
    if (inputs['Consciousness'] !== 'Alert') score += 3;
    // Temp
    if (inputs['Temperature'] <= 35.0) score += 3;
    else if (inputs['Temperature'] >= 39.1) score += 2;
    else if (inputs['Temperature'] >= 38.1) score += 1;
    else if (inputs['Temperature'] <= 36.0) score += 1;

    let interpretation = 'Low clinical risk';
    let recommendation = 'Continue routine monitoring.';
    let color = 'text-green-500';
    if (score >= 7) {
        interpretation = 'High clinical risk';
        recommendation = 'Urgent review by critical care team. Consider transfer to higher level of care.';
        color = 'text-red-500';
    } else if (score >= 5) {
        interpretation = 'Medium clinical risk';
        recommendation = 'Urgent review by clinician. Increase frequency of monitoring.';
        color = 'text-yellow-500';
    } else if (score >= 1) {
        interpretation = 'Low-medium clinical risk';
        recommendation = 'Inform clinician for assessment. Increase frequency of monitoring.';
        color = 'text-blue-500';
    }
    
    return { result: score, interpretation, recommendation, color };
};

const shockIndexCalculation = (inputs: { 'Heart Rate': number; 'Systolic BP': number }) => {
    if (inputs['Systolic BP'] === 0) return { result: 'N/A', interpretation: 'Invalid BP', recommendation: 'Systolic BP cannot be zero.' };
    const si = inputs['Heart Rate'] / inputs['Systolic BP'];
    const result = parseFloat(si.toFixed(2));

    let interpretation = 'Normal';
    let recommendation = 'Patient appears hemodynamically stable.';
    let color = 'text-green-500';
    if (result > 0.9) {
        interpretation = 'High - Suggests Shock';
        recommendation = 'Patient may be in shock. Assess for causes of hypotension/tachycardia (e.g., hemorrhage, sepsis).';
        color = 'text-red-500';
    } else if (result > 0.7) {
        interpretation = 'Elevated';
        recommendation = 'Monitor closely. May indicate early or impending shock.';
        color = 'text-yellow-500';
    }
    return { result, interpretation, recommendation, color };
};

const anionGapCalculation = (inputs: { 'Sodium': number; 'Potassium': number; 'Chloride': number; 'Bicarbonate': number; }) => {
    const result = (inputs.Sodium + inputs.Potassium) - (inputs.Chloride + inputs.Bicarbonate);
    
    let interpretation = 'Normal Anion Gap';
    let recommendation = 'Consider non-anion gap causes of metabolic acidosis if clinically suspected.';
    let color = 'text-green-500';
    let redFlag = '';

    if (result > 16) {
        interpretation = 'High Anion Gap';
        recommendation = 'Suggests metabolic acidosis. Use MUDPILES mnemonic (Methanol, Uremia, DKA, Paraldehyde, Iron/Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates).';
        color = 'text-red-500';
        redFlag = 'High anion gap may indicate a serious underlying condition.';
    } else if (result < 8) {
        interpretation = 'Low Anion Gap';
        recommendation = 'Usually due to lab error or low albumin. Can be seen in multiple myeloma.';
        color = 'text-yellow-500';
    }
    return { result, interpretation, recommendation, color, redFlag };
};

const correctedCalciumCalculation = (inputs: { 'Serum Calcium': number; 'Serum Albumin': number; }) => {
    const result = inputs['Serum Calcium'] + 0.8 * (4.0 - inputs['Serum Albumin']);
    const correctedCa = parseFloat(result.toFixed(2));

    let interpretation = 'Normocalcemia';
    let recommendation = 'Calcium level is within normal limits.';
    let color = 'text-green-500';
    let redFlag = '';

    if (correctedCa > 10.2) {
        interpretation = 'Hypercalcemia';
        recommendation = 'Investigate for causes (e.g., hyperparathyroidism, malignancy). Consider hydration, bisphosphonates.';
        color = 'text-red-500';
        redFlag = 'Significant hypercalcemia can cause cardiac arrhythmias.';
    } else if (correctedCa < 8.5) {
        interpretation = 'Hypocalcemia';
        recommendation = 'Check ECG for QT prolongation. Consider calcium gluconate infusion if symptomatic. Check magnesium levels.';
        color = 'text-yellow-500';
        redFlag = 'Symptomatic hypocalcemia requires urgent correction.';
    }
    return { result: correctedCa, interpretation, recommendation, color, redFlag };
};

const ckdEpiEgfrCalculation = (inputs: { 'Creatinine': number; 'Age': number; 'Sex': string; }) => {
    const kappa = inputs.Sex === 'Female' ? 0.7 : 0.9;
    const alpha = inputs.Sex === 'Female' ? -0.241 : -0.302;
    const sex_factor = inputs.Sex === 'Female' ? 1.012 : 1;
    
    const egfr = 142 * Math.pow(Math.min(inputs.Creatinine / kappa, 1), alpha) * Math.pow(Math.max(inputs.Creatinine / kappa, 1), -1.200) * Math.pow(0.9938, inputs.Age) * sex_factor;
    const result = parseFloat(egfr.toFixed(0));

    let interpretation = 'Normal GFR';
    let color = 'text-green-500';

    if (result < 15) {
        interpretation = 'Kidney Failure (Stage 5)';
        color = 'text-red-500';
    } else if (result < 30) {
        interpretation = 'Severe CKD (Stage 4)';
        color = 'text-red-500';
    } else if (result < 60) {
        interpretation = 'Moderate CKD (Stage 3)';
        color = 'text-yellow-500';
    } else if (result < 90) {
        interpretation = 'Mild CKD (Stage 2)';
        color = 'text-blue-500';
    }

    return { result, interpretation, color, recommendation: 'Refer to nephrology if eGFR < 30 or rapidly declining.' };
};

const fenaCalculation = (inputs: { 'Serum Sodium': number; 'Urine Sodium': number; 'Serum Creatinine': number; 'Urine Creatinine': number; }) => {
    const fena = (inputs['Urine Sodium'] * inputs['Serum Creatinine']) / (inputs['Serum Sodium'] * inputs['Urine Creatinine']) * 100;
    const result = parseFloat(fena.toFixed(2));

    let interpretation = 'Post-renal or ATN';
    let recommendation = 'Suggests intrinsic renal damage (Acute Tubular Necrosis). Manage underlying cause.';
    let color = 'text-red-500';

    if (result < 1) {
        interpretation = 'Pre-renal Azotemia';
        recommendation = 'Suggests decreased renal perfusion. Consider fluid challenge.';
        color = 'text-yellow-500';
    } else if (result > 4) {
        interpretation = 'Post-renal Obstruction';
        recommendation = 'Suggests obstruction. Consider bladder scan or renal ultrasound.';
    }
    return { result: `${result}%`, interpretation, recommendation, color };
};

const correctedSodiumCalculation = (inputs: { 'Serum Sodium': number; 'Serum Glucose': number; }) => {
    // For every 100 mg/dL glucose over 100, add 1.6 mEq to sodium
    const correctedNa = inputs['Serum Sodium'] + 1.6 * ((inputs['Serum Glucose'] - 100) / 100);
    const result = parseFloat(correctedNa.toFixed(1));
    
    return { result, interpretation: 'Sodium corrected for hyperglycemia', color: 'text-blue-500', recommendation: 'Use this value for clinical decisions regarding sodium balance.' };
};

const potassiumDeficitCalculation = (inputs: { 'Current Potassium': number; }) => {
    if (inputs['Current Potassium'] >= 4.0) {
        return { result: 0, interpretation: 'Normal Potassium', color: 'text-green-500', recommendation: 'No deficit.' };
    }
    const deficit = (4.0 - inputs['Current Potassium']) * 100;
    return { result: `~${deficit.toFixed(0)} mEq`, interpretation: 'Estimated Total Body Deficit', color: 'text-yellow-500', recommendation: 'This is an estimate. Replete cautiously, typically no faster than 10-20 mEq/hr. Re-check levels frequently.', redFlag: 'Rapid potassium repletion is dangerous.' };
};

const heartScoreCalculation = (inputs: { 'History': string; 'ECG': string; 'Age': number; 'Risk Factors': string; 'Troponin': string; }) => {
    let score = 0;
    const historyScores = { 'Slightly': 0, 'Moderately': 1, 'Highly': 2 };
    const ecgScores = { 'Normal': 0, 'Non-specific': 1, 'Significant ST': 2 };
    const riskScores = { '0': 0, '1-2': 1, '3+': 2 };
    const tropScores = { 'Normal': 0, '1-3x': 1, '>3x': 2 };

    score += historyScores[inputs.History] ?? 0;
    score += ecgScores[inputs.ECG] ?? 0;
    if (inputs.Age >= 65) score += 2; else if (inputs.Age >= 45) score += 1;
    score += riskScores[inputs['Risk Factors']] ?? 0;
    score += tropScores[inputs.Troponin] ?? 0;

    let interpretation = 'Low Risk (0-3)';
    let color = 'text-green-500';
    let recommendation = '1.7% risk of MACE. Consider discharge.';
    if (score >= 7) {
        interpretation = 'High Risk (7-10)';
        color = 'text-red-500';
        recommendation = '72.7% risk of MACE. Urgent inpatient admission and intervention.';
    } else if (score >= 4) {
        interpretation = 'Moderate Risk (4-6)';
        color = 'text-yellow-500';
        recommendation = '20.3% risk of MACE. Admit for observation and further testing.';
    }

    return { result: score, interpretation, recommendation, color };
};

const timiScoreCalculation = (inputs: { 'Age >= 75': boolean; 'Age 65-74': boolean; '3+ CAD risk factors': boolean; 'Aspirin use in past 7 days': boolean; 'Known CAD with >50% stenosis': boolean; 'Recent (<=24h) severe angina': boolean; 'Elevated cardiac markers': boolean; 'ST deviation >= 0.5mm': boolean; }) => {
    let score = 0;
    if (inputs['Age >= 75']) score++;
    if (inputs['Age 65-74']) score++;
    if (inputs['3+ CAD risk factors']) score++;
    if (inputs['Aspirin use in past 7 days']) score++;
    if (inputs['Known CAD with >50% stenosis']) score++;
    if (inputs['Recent (<=24h) severe angina']) score++;
    if (inputs['Elevated cardiac markers']) score++;
    if (inputs['ST deviation >= 0.5mm']) score++;

    const riskMap = ['5%', '8%', '13%', '20%', '26%', '41%', '41%+'];
    const interpretation = `Risk of death, MI, or urgent revascularization in 14 days: ${riskMap[score]}`;
    let color = 'text-green-500';
    if (score >= 5) color = 'text-red-500';
    else if (score >= 2) color = 'text-yellow-500';
    
    return { result: score, interpretation, color };
};

const cha2ds2vascCalculation = (inputs: { 'Congestive Heart Failure': boolean; 'Hypertension': boolean; 'Age >= 75': boolean; 'Diabetes': boolean; 'Stroke/TIA/TE': boolean; 'Vascular Disease': boolean; 'Age 65-74': boolean; 'Sex is Female': boolean; }) => {
    let score = 0;
    if (inputs['Congestive Heart Failure']) score++;
    if (inputs['Hypertension']) score++;
    if (inputs['Age >= 75']) score += 2;
    if (inputs['Diabetes']) score++;
    if (inputs['Stroke/TIA/TE']) score += 2;
    if (inputs['Vascular Disease']) score++;
    if (inputs['Age 65-74']) score++;
    if (inputs['Sex is Female']) score++;

    const risk = [0, 1.3, 2.2, 3.2, 4.0, 6.7, 9.8, 9.6, 12.5, 15.2];
    const interpretation = `Adjusted annual stroke risk: ${risk[score]}%`;
    let recommendation = 'Consider anticoagulation.';
    if (score === 0) recommendation = 'Low risk. Anticoagulation may not be required.';
    if (score >= 2) recommendation = 'Anticoagulation is recommended.';
    
    return { result: score, interpretation, recommendation, color: score >= 2 ? 'text-red-500' : 'text-yellow-500' };
};

const hasBledCalculation = (inputs: { 'Hypertension': boolean; 'Abnormal Renal/Liver': boolean; 'Stroke': boolean; 'Bleeding History': boolean; 'Labile INR': boolean; 'Age > 65': boolean; 'Drugs/Alcohol': boolean; }) => {
    let score = 0;
    if (inputs.Hypertension) score++;
    if (inputs['Abnormal Renal/Liver']) score++;
    if (inputs.Stroke) score++;
    if (inputs['Bleeding History']) score++;
    if (inputs['Labile INR']) score++;
    if (inputs['Age > 65']) score++;
    if (inputs['Drugs/Alcohol']) score++;

    let interpretation = 'Low risk of bleeding';
    let color = 'text-green-500';

    if (score >= 3) {
        interpretation = 'High risk of bleeding';
        recommendation = 'Caution advised when prescribing anticoagulants. Regular review and follow-up are necessary.';
        color = 'text-red-500';
    } else {
        recommendation = `Annual major bleeding risk is ~${[1.13, 1.02, 1.88, 3.74, 3.74, 3.74, 3.74, 3.74, 3.74, 3.74][score]}%.`;
    }

    return { result: score, interpretation, recommendation, color };
};

const wellsScoreDvtCalculation = (inputs: { 'Active Cancer': boolean; 'Paralysis/Immobilization': boolean; 'Bedridden >3 days/Surgery <12 wks': boolean; 'Localized Tenderness': boolean; 'Entire Leg Swollen': boolean; 'Calf Swelling >3cm': boolean; 'Pitting Edema': boolean; 'Collateral Superficial Veins': boolean; 'Alternative Diagnosis as Likely': boolean; }) => {
    let score = 0;
    if (inputs['Active Cancer']) score++;
    if (inputs['Paralysis/Immobilization']) score++;
    if (inputs['Bedridden >3 days/Surgery <12 wks']) score++;
    if (inputs['Localized Tenderness']) score++;
    if (inputs['Entire Leg Swollen']) score++;
    if (inputs['Calf Swelling >3cm']) score++;
    if (inputs['Pitting Edema']) score++;
    if (inputs['Collateral Superficial Veins']) score++;
    if (inputs['Alternative Diagnosis as Likely']) score -= 2;

    let interpretation = 'DVT Unlikely';
    let color = 'text-green-500';
    if (score >= 3) {
        interpretation = 'DVT Likely';
        color = 'text-red-500';
    } else if (score >= 1) {
        interpretation = 'Moderate Risk';
        color = 'text-yellow-500';
    }

    return { result: score, interpretation, color, recommendation: 'Score >= 2: DVT Likely. Consider imaging.' };
};

const wellsScorePeCalculation = (inputs: { 'Clinical signs of DVT': boolean; 'PE is #1 diagnosis': boolean; 'Heart rate > 100': boolean; 'Immobilization or surgery in prev 4 wks': boolean; 'Previous DVT/PE': boolean; 'Hemoptysis': boolean; 'Malignancy': boolean; }) => {
    let score = 0;
    if (inputs['Clinical signs of DVT']) score += 3;
    if (inputs['PE is #1 diagnosis']) score += 3;
    if (inputs['Heart rate > 100']) score += 1.5;
    if (inputs['Immobilization or surgery in prev 4 wks']) score += 1.5;
    if (inputs['Previous DVT/PE']) score += 1.5;
    if (inputs.Hemoptysis) score++;
    if (inputs.Malignancy) score++;

    let interpretation = 'PE Unlikely';
    let color = 'text-green-500';
    let recommendation = 'Consider D-dimer to rule out PE.';
    if (score > 6) {
        interpretation = 'High Risk';
        color = 'text-red-500';
        recommendation = 'Consider CTA.';
    } else if (score > 2) {
        interpretation = 'Moderate Risk';
        color = 'text-yellow-500';
        recommendation = 'Consider D-dimer or CTA.';
    }

    return { result: score, interpretation, color, recommendation };
};


const mapCalculation = (inputs: { 'Systolic BP': number; 'Diastolic BP': number; }) => {
    const map = (1/3 * inputs['Systolic BP']) + (2/3 * inputs['Diastolic BP']);
    const result = parseFloat(map.toFixed(1));

    let interpretation = 'Normal';
    let color = 'text-green-500';
    let recommendation = 'Perfusion is likely adequate.';
    if (result < 65) {
        interpretation = 'Low';
        color = 'text-red-500';
        recommendation = 'May indicate inadequate organ perfusion. Target MAP > 65 mmHg in most settings (e.g. sepsis).';
    }
    return { result, interpretation, recommendation, color };
};

const bmiCalculation = (inputs: { 'Weight': number; 'Height': number; }) => {
    const heightM = inputs.Height / 100;
    const bmi = inputs.Weight / (heightM * heightM);
    const result = parseFloat(bmi.toFixed(1));

    let interpretation = 'Normal weight';
    let color = 'text-green-500';
    if (result < 18.5) { interpretation = 'Underweight'; color = 'text-yellow-500'; }
    else if (result >= 25) { interpretation = 'Overweight'; color = 'text-yellow-500'; }
    else if (result >= 30) { interpretation = 'Obese'; color = 'text-red-500'; }
    
    return { result, interpretation, color };
};

const bsaCalculation = (inputs: { 'Weight': number; 'Height': number; }) => {
    const bsa = Math.sqrt((inputs.Weight * inputs.Height) / 3600);
    return { result: `${bsa.toFixed(2)} m²`, interpretation: 'Du Bois Formula', color: 'text-blue-500' };
};

const unitConversionCalculation = (inputs: { 'Value': number; 'Conversion': string; }) => {
    let result: number | string = 'N/A';
    let interpretation = '';
    const { Value, Conversion } = inputs;

    if (Conversion === 'mg/dL to mmol/L (Glucose)') {
        result = (Value / 18).toFixed(2) + ' mmol/L';
        interpretation = 'Glucose (mg/dL to mmol/L)';
    } else if (Conversion === 'mmol/L to mg/dL (Glucose)') {
        result = (Value * 18).toFixed(2) + ' mg/dL';
        interpretation = 'Glucose (mmol/L to mg/dL)';
    }

    return { result, interpretation, color: 'text-blue-500' };
};

const infusionRateCalculation = (inputs: { 'Volume': number; 'Time': number; }) => {
    const rate = inputs.Volume / inputs.Time;
    return { result: `${rate.toFixed(1)} mL/hr`, interpretation: 'Infusion Rate', color: 'text-blue-500' };
};

const dripRateCalculation = (inputs: { 'Volume': number; 'Time': number; 'Drop Factor': number; }) => {
    const rate = (inputs.Volume * inputs['Drop Factor']) / (inputs.Time * 60);
    return { result: `${rate.toFixed(0)} gtts/min`, interpretation: 'Drip Rate', color: 'text-blue-500' };
};


const idealBodyWeightCalculation = (inputs: { 'Height': number; 'Sex': string; }) => {
    const heightInches = inputs.Height / 2.54;
    let ibw = 0;
    if (inputs.Sex === 'Male') {
        ibw = 50 + 2.3 * (heightInches - 60);
    } else {
        ibw = 45.5 + 2.3 * (heightInches - 60);
    }
    return { result: `${ibw.toFixed(1)} kg`, interpretation: 'Devine formula', color: 'text-blue-500' };
};

const adjustedBodyWeightCalculation = (inputs: { 'Actual Weight': number; 'Ideal Weight': number; }) => {
    const adjBw = inputs['Ideal Weight'] + 0.4 * (inputs['Actual Weight'] - inputs['Ideal Weight']);
    return { result: `${adjBw.toFixed(1)} kg`, interpretation: 'Used for drug dosing in overweight patients.', color: 'text-blue-500' };
};

const freeWaterDeficitCalculation = (inputs: { 'Serum Sodium': number; 'Weight': number; 'Sex': string; }) => {
    const waterPercentage = inputs.Sex === 'Male' ? 0.6 : 0.5;
    const deficit = waterPercentage * inputs.Weight * ((inputs['Serum Sodium'] / 140) - 1);
    return { result: `${deficit.toFixed(1)} L`, interpretation: 'Volume of free water to correct hypernatremia.', color: 'text-yellow-500', recommendation: 'Correct slowly to avoid cerebral edema. Typically replace over 24-48 hours.' };
};

const eddCalculation = (inputs: { 'Last Menstrual Period': string }) => {
    if (!inputs['Last Menstrual Period']) return { result: 'N/A', interpretation: 'Please select a date.' };
    const lmp = new Date(inputs['Last Menstrual Period']);
    const edd = new Date(lmp);
    edd.setDate(edd.getDate() + 280); // 280 days (40 weeks)
    const result = edd.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return { result, interpretation: "Based on 280 days from LMP", color: 'text-blue-500' };
};

const gestationalAgeCalculation = (inputs: { 'Last Menstrual Period': string }) => {
    if (!inputs['Last Menstrual Period']) return { result: 'N/A', interpretation: 'Please select a date.' };
    const lmp = new Date(inputs['Last Menstrual Period']);
    const today = new Date();
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return { result: 'N/A', interpretation: 'LMP cannot be in the future.' };
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    const result = `${weeks} weeks, ${days} days`;
    return { result, interpretation: 'Current gestational age', color: 'text-blue-500' };
};

const bishopScoreCalculation = (inputs: { 'Dilation': string; 'Effacement': string; 'Station': string; 'Position': string; 'Consistency': string; }) => {
    const scores = {
        Dilation: { 'Closed': 0, '1-2 cm': 1, '3-4 cm': 2, '>= 5 cm': 3 },
        Effacement: { '0-30%': 0, '40-50%': 1, '60-70%': 2, '>= 80%': 3 },
        Station: { '-3': 0, '-2': 1, '-1, 0': 2, '+1, +2': 3 },
        Position: { 'Posterior': 0, 'Mid': 1, 'Anterior': 2 },
        Consistency: { 'Firm': 0, 'Medium': 1, 'Soft': 2 }
    };
    const score = (scores.Dilation[inputs.Dilation] ?? 0) +
                  (scores.Effacement[inputs.Effacement] ?? 0) +
                  (scores.Station[inputs.Station] ?? 0) +
                  (scores.Position[inputs.Position] ?? 0) +
                  (scores.Consistency[inputs.Consistency] ?? 0);

    let interpretation = 'Favorable for induction';
    let recommendation = 'Score >= 8 suggests a high likelihood of successful induction.';
    let color = 'text-green-500';
    if (score < 5) {
        interpretation = 'Unfavorable for induction';
        recommendation = 'Cervical ripening may be required.';
        color = 'text-red-500';
    }
    return { result: score, interpretation, recommendation, color };
};

const apgarCalculation = (inputs: { 'Appearance': string; 'Pulse': string; 'Grimace': string; 'Activity': string; 'Respiration': string; }) => {
    const scores = {
        Appearance: { 'Blue/Pale': 0, 'Acrocyanotic': 1, 'Pink': 2 },
        Pulse: { 'Absent': 0, '<100': 1, '>=100': 2 },
        Grimace: { 'None': 0, 'Grimace': 1, 'Cry/Cough': 2 },
        Activity: { 'Limp': 0, 'Some Flexion': 1, 'Active': 2 },
        Respiration: { 'Absent': 0, 'Slow/Irregular': 1, 'Good Cry': 2 }
    };
    const score = (scores.Appearance[inputs.Appearance] ?? 0) +
                  (scores.Pulse[inputs.Pulse] ?? 0) +
                  (scores.Grimace[inputs.Grimace] ?? 0) +
                  (scores.Activity[inputs.Activity] ?? 0) +
                  (scores.Respiration[inputs.Respiration] ?? 0);

    let interpretation = 'Reassuring';
    let recommendation = 'Routine care.';
    let color = 'text-green-500';
    if (score <= 3) {
        interpretation = 'Critically Low';
        recommendation = 'Immediate resuscitation required.';
        color = 'text-red-500';
    } else if (score <= 6) {
        interpretation = 'Moderately Low';
        recommendation = 'Supportive measures may be needed (e.g., oxygen, stimulation).';
        color = 'text-yellow-500';
    }
    return { result: score, interpretation, recommendation, color };
};

const pediatricWeightEstimationCalculation = (inputs: { 'Age': number; 'Unit': string }) => {
    const age = inputs.Age;
    const unit = inputs.Unit;
    let weight = 0;

    if (unit === 'months') {
        if (age >= 3 && age <= 12) {
            weight = (age + 9) / 2;
        } else {
            return { result: 'N/A', interpretation: 'Formula is for ages 3-12 months.', color: 'text-red-500' };
        }
    } else if (unit === 'years') {
        if (age >= 1 && age <= 6) {
            weight = (age * 2) + 8;
        } else if (age >= 7 && age <= 12) {
            weight = (age * 7 - 5) / 2;
        } else {
             return { result: 'N/A', interpretation: 'Formula is for ages 1-12 years.', color: 'text-red-500' };
        }
    }
    return { result: `${weight.toFixed(1)} kg`, interpretation: 'Estimated weight based on age.', color: 'text-blue-500' };
};

const pediatricFluidRequirementsCalculation = (inputs: { 'Weight': number }) => {
    const weight = inputs.Weight;
    let dailyFluid = 0;

    if (weight <= 10) {
        dailyFluid = weight * 100;
    } else if (weight <= 20) {
        dailyFluid = (10 * 100) + ((weight - 10) * 50);
    } else {
        dailyFluid = (10 * 100) + (10 * 50) + ((weight - 20) * 20);
    }

    const hourlyFluid = dailyFluid / 24;

    return {
        result: `${dailyFluid.toFixed(0)} mL/day`,
        interpretation: `Equivalent to ${hourlyFluid.toFixed(1)} mL/hr.`,
        recommendation: 'This is a baseline requirement. Adjust for clinical status (fever, dehydration, etc.).',
        color: 'text-blue-500'
    };
};

const childPughScoreCalculation = (inputs: { 'Bilirubin': string; 'Albumin': string; 'INR': string; 'Ascites': string; 'Encephalopathy': string; }) => {
    const scores = {
        Bilirubin: { '<2': 1, '2-3': 2, '>3': 3 },
        Albumin: { '>3.5': 1, '2.8-3.5': 2, '<2.8': 3 },
        INR: { '<1.7': 1, '1.7-2.3': 2, '>2.3': 3 },
        Ascites: { 'None': 1, 'Slight': 2, 'Moderate': 3 },
        Encephalopathy: { 'None': 1, 'Grade 1-2': 2, 'Grade 3-4': 3 }
    };
    const score = (scores.Bilirubin[inputs.Bilirubin] ?? 0) +
                  (scores.Albumin[inputs.Albumin] ?? 0) +
                  (scores.INR[inputs.INR] ?? 0) +
                  (scores.Ascites[inputs.Ascites] ?? 0) +
                  (scores.Encephalopathy[inputs.Encephalopathy] ?? 0);

    let interpretation = 'Class A';
    let recommendation = '1-year survival: 100%\n2-year survival: 85%';
    let color = 'text-green-500';

    if (score >= 10) {
        interpretation = 'Class C';
        recommendation = '1-year survival: 45%\n2-year survival: 35%';
        color = 'text-red-500';
    } else if (score >= 7) {
        interpretation = 'Class B';
        recommendation = '1-year survival: 81%\n2-year survival: 57%';
        color = 'text-yellow-500';
    }

    return { result: score, interpretation, recommendation, color };
};




// --- Calculator Definitions ---

export const calculators: Calculator[] = [
    // Emergency & Resuscitation
    {
        name: 'Glasgow Coma Scale (GCS)',
        category: 'Emergency & Resuscitation',
        description: 'Assess level of consciousness after head injury.',
        explanation: `The GCS is scored between 3 and 15 and is the sum of three components:

- Eyes (E): 4=Spontaneous, 3=To voice, 2=To pain, 1=None
- Verbal (V): 5=Oriented, 4=Confused, 3=Inappropriate words, 2=Incomprehensible sounds, 1=None
- Motor (M): 6=Obeys commands, 5=Localizes pain, 4=Withdraws from pain, 3=Flexion to pain, 2=Extension to pain, 1=None`,
        inputs: [
            { name: 'Eyes', type: 'select', options: ['Spontaneous', 'To Voice', 'To Pain', 'None'] },
            { name: 'Verbal', type: 'select', options: ['Oriented', 'Confused', 'Inappropriate Words', 'Incomprehensible Sounds', 'None'] },
            { name: 'Motor', type: 'select', options: ['Obeys Commands', 'Localizes Pain', 'Withdraws from Pain', 'Flexion to Pain', 'Extension to Pain', 'None'] },
        ],
        calculation: gcsCalculation as any,
    },
    {
        name: 'qSOFA Score',
        category: 'Emergency & Resuscitation',
        description: 'Quickly assess for sepsis-related organ dysfunction.',
        explanation: `The qSOFA score is the sum of points for three clinical criteria:

- Respiratory Rate >= 22/min (1 point)
- Altered Mentation (GCS < 15) (1 point)
- Systolic Blood Pressure <= 100 mmHg (1 point)

A score of 2 or more suggests a greater risk of a poor outcome.`,
        inputs: [
            { name: 'Respiratory Rate', type: 'number', unit: '/min', min: 0, step: 1 },
            { name: 'Altered Mentation', type: 'boolean' },
            { name: 'Systolic BP', type: 'number', unit: 'mmHg', min: 0, step: 1 },
        ],
        calculation: qsofaCalculation,
    },
    {
        name: 'CURB-65 Score',
        category: 'Emergency & Resuscitation',
        description: 'Assess severity of community-acquired pneumonia.',
        explanation: `The CURB-65 score is an acronym for five risk factors:

- Confusion (new disorientation)
- Urea > 7 mmol/L (or BUN > 19 mg/dL)
- Respiratory Rate >= 30 breaths/min
- Blood Pressure (SBP < 90 or DBP <= 60)
- Age >= 65 years

One point is given for each factor.`,
        inputs: [
            { name: 'Confusion', type: 'boolean' },
            { name: 'Urea > 7 mmol/L', type: 'boolean' },
            { name: 'Resp Rate >= 30', type: 'boolean' },
            { name: 'BP < 90/60', type: 'boolean' },
            { name: 'Age >= 65', type: 'boolean' },
        ],
        calculation: curb65Calculation,
    },
    {
        name: 'NEWS2 Score',
        category: 'Emergency & Resuscitation',
        description: 'National Early Warning Score for acute illness severity.',
        explanation: `The NEWS2 score is based on six physiological parameters, each scored and summed. A higher score indicates greater clinical deterioration.

- Respiratory Rate: 9-11 (1), 12-20 (0), 21-24 (2), >=25 (3), <=8 (3)
- O2 Saturation: >=96 (0), 94-95 (1), 92-93 (2), <=91 (3)
- Supplemental O2: Yes (2), No (0)
- Systolic BP: >=220 (3), 111-219 (0), 101-110 (1), 91-100 (2), <=90 (3)
- Heart Rate: >=131 (3), 111-130 (2), 91-110 (1), 51-90 (0), 41-50 (1), <=40 (3)
- Consciousness: Alert (0), Not Alert (3)
- Temperature: >=39.1 (2), 38.1-39.0 (1), 36.1-38.0 (0), 35.1-36.0 (1), <=35.0 (3)`,
        inputs: [
            { name: 'Respiratory Rate', type: 'number', unit: '/min', min: 0, step: 1 },
            { name: 'O2 Saturation', type: 'number', unit: '%', min: 0, max: 100, step: 1 },
            { name: 'Supplemental O2', type: 'boolean' },
            { name: 'Systolic BP', type: 'number', unit: 'mmHg', min: 0, step: 1 },
            { name: 'Heart Rate', type: 'number', unit: 'bpm', min: 0, step: 1 },
            { name: 'Consciousness', type: 'select', options: ['Alert', 'Confused', 'Voice', 'Pain', 'Unresponsive'] },
            { name: 'Temperature', type: 'number', unit: '°C', min: 30, max: 45, step: 0.1 },
        ],
        calculation: news2Calculation as any,
    },
    {
        name: 'Shock Index',
        category: 'Emergency & Resuscitation',
        description: 'Assess for shock (HR / SBP). Normal is 0.5-0.7.',
        explanation: `The Shock Index is calculated using the formula:

Shock Index = Heart Rate / Systolic Blood Pressure

A normal index is 0.5-0.7. A value > 0.9 suggests shock.`,
        inputs: [
            { name: 'Heart Rate', type: 'number', unit: 'bpm', min: 0, step: 1 },
            { name: 'Systolic BP', type: 'number', unit: 'mmHg', min: 1, step: 1 },
        ],
        calculation: shockIndexCalculation,
    },
    {
        name: 'Anion Gap',
        category: 'Emergency & Resuscitation',
        description: 'Helps differentiate causes of metabolic acidosis.',
        explanation: `The Anion Gap is calculated as:

Anion Gap = (Na⁺ + K⁺) - (Cl⁻ + HCO₃⁻)

A normal anion gap is 8-16 mEq/L. A high gap suggests metabolic acidosis.`,
        inputs: [
            { name: 'Sodium', type: 'number', unit: 'mEq/L', min: 0, step: 0.1 },
            { name: 'Potassium', type: 'number', unit: 'mEq/L', min: 0, step: 0.1 },
            { name: 'Chloride', type: 'number', unit: 'mEq/L', min: 0, step: 0.1 },
            { name: 'Bicarbonate', type: 'number', unit: 'mEq/L', min: 0, step: 0.1 },
        ],
        calculation: anionGapCalculation,
    },
    {
        name: 'Corrected Calcium',
        category: 'Emergency & Resuscitation',
        description: 'Adjusts for low albumin to get a true calcium level.',
        explanation: `The formula corrects for albumin binding:

Corrected Ca²⁺ = Serum Ca²⁺ + 0.8 * (4.0 - Serum Albumin)

This provides a more accurate calcium level in patients with abnormal albumin.`,
        inputs: [
            { name: 'Serum Calcium', type: 'number', unit: 'mg/dL', min: 0, step: 0.1 },
            { name: 'Serum Albumin', type: 'number', unit: 'g/dL', min: 0, step: 0.1 },
        ],
        calculation: correctedCalciumCalculation,
    },

    // Renal & Electrolytes
    {
        name: 'eGFR (CKD-EPI 2021)',
        category: 'Renal & Electrolytes',
        description: 'Estimates GFR using the 2021 CKD-EPI equation.',
        explanation: `The 2021 CKD-EPI equation is complex:

eGFR = 142 * min(Cr/κ, 1)ᵃ * max(Cr/κ, 1)⁻¹.¹²⁰⁰ * 0.9938ᴬᵍᵉ * (1.012 if Female)

- Cr: Serum Creatinine
- κ: 0.7 (F), 0.9 (M)
- α: -0.241 (F), -0.302 (M)`,
        inputs: [
            { name: 'Creatinine', type: 'number', unit: 'mg/dL', min: 0.1, step: 0.1 },
            { name: 'Age', type: 'number', unit: 'years', min: 1, step: 1 },
            { name: 'Sex', type: 'select', options: ['Female', 'Male'] },
        ],
        calculation: ckdEpiEgfrCalculation,
    },
    {
        name: 'Fractional Excretion of Na+ (FeNa)',
        category: 'Renal & Electrolytes',
        description: 'Differentiates pre-renal AKI from ATN.',
        explanation: `FeNa is calculated as:

FeNa = ((Urine Na⁺ * Serum Cr) / (Serum Na⁺ * Urine Cr)) * 100

- FeNa < 1% suggests pre-renal AKI.
- FeNa > 2% suggests ATN.`,
        inputs: [
            { name: 'Serum Sodium', type: 'number', unit: 'mEq/L', step: 1 },
            { name: 'Urine Sodium', type: 'number', unit: 'mEq/L', step: 1 },
            { name: 'Serum Creatinine', type: 'number', unit: 'mg/dL', step: 0.1 },
            { name: 'Urine Creatinine', type: 'number', unit: 'mg/dL', step: 1 },
        ],
        calculation: fenaCalculation,
    },
    {
        name: 'Corrected Sodium (Hyperglycemia)',
        category: 'Renal & Electrolytes',
        description: 'Corrects serum sodium for high blood glucose.',
        explanation: `The formula is:

Corrected Na⁺ = Measured Na⁺ + 1.6 * ((Glucose - 100) / 100)

This accounts for the osmotic effect of high glucose.`,
        inputs: [
            { name: 'Serum Sodium', type: 'number', unit: 'mEq/L', step: 1 },
            { name: 'Serum Glucose', type: 'number', unit: 'mg/dL', step: 10 },
        ],
        calculation: correctedSodiumCalculation,
    },
    {
        name: 'Potassium Deficit',
        category: 'Renal & Electrolytes',
        description: 'Estimates total body potassium deficit (for K < 4.0).',
        explanation: `This is an estimation based on the rule that for every 1 mEq/L drop in serum K⁺ below 4.0, there is a total body deficit of about 200-400 mEq.

The calculator uses a simplified formula:
Deficit (mEq) ≈ (4.0 - Current K⁺) * 100`,
        inputs: [
            { name: 'Current Potassium', type: 'number', unit: 'mEq/L', min: 1, max: 4.0, step: 0.1 },
        ],
        calculation: potassiumDeficitCalculation,
    },

    // Cardiology
    {
        name: 'HEART Score',
        category: 'Cardiology',
        description: 'Risk stratify chest pain patients for MACE.',
        explanation: `The HEART score is the sum of points from 5 components:

- History: Slightly (0), Moderately (1), Highly (2)
- ECG: Normal (0), Non-specific (1), Significant ST (2)
- Age: <45 (0), 45-64 (1), >=65 (2)
- Risk Factors: 0 (0), 1-2 (1), 3+ (2)
- Troponin: Normal (0), 1-3x (1), >3x (2)

A higher score indicates greater MACE risk.`,
        inputs: [
            { name: 'History', type: 'select', options: ['Slightly', 'Moderately', 'Highly'] },
            { name: 'ECG', type: 'select', options: ['Normal', 'Non-specific', 'Significant ST'] },
            { name: 'Age', type: 'number', unit: 'years', min: 1, step: 1 },
            { name: 'Risk Factors', type: 'select', options: ['0', '1-2', '3+'] },
            { name: 'Troponin', type: 'select', options: ['Normal', '1-3x', '>3x'] }
        ],
        calculation: heartScoreCalculation as any,
    },
    {
        name: 'TIMI Score (UA/NSTEMI)',
        category: 'Cardiology',
        description: 'Risk of death/MI in patients with UA/NSTEMI.',
        explanation: `The TIMI score is the sum of 1 point for each of the following:

- Age >= 65 years
- 3+ CAD risk factors
- Known CAD (>50% stenosis)
- Aspirin use in past 7 days
- Recent (<=24h) severe angina
- Elevated cardiac markers
- ST deviation >= 0.5mm`,
        inputs: [
            { name: 'Age >= 75', type: 'boolean' },
            { name: 'Age 65-74', type: 'boolean' },
            { name: '3+ CAD risk factors', type: 'boolean' },
            { name: 'Aspirin use in past 7 days', type: 'boolean' },
            { name: 'Known CAD with >50% stenosis', type: 'boolean' },
            { name: 'Recent (<=24h) severe angina', type: 'boolean' },
            { name: 'Elevated cardiac markers', type: 'boolean' },
            { name: 'ST deviation >= 0.5mm', type: 'boolean' },
        ],
        calculation: timiScoreCalculation,
    },
    {
        name: 'CHA2DS2-VASc Score',
        category: 'Cardiology',
        description: 'Stroke risk in atrial fibrillation.',
        explanation: `Calculates stroke risk in AF. The score is an acronym:

- C (CHF): 1
- H (Hypertension): 1
- A2 (Age >= 75): 2
- D (Diabetes): 1
- S2 (Stroke/TIA/TE): 2
- V (Vascular disease): 1
- A (Age 65-74): 1
- Sc (Sex, female): 1`,
        inputs: [
            { name: 'Congestive Heart Failure', type: 'boolean' },
            { name: 'Hypertension', type: 'boolean' },
            { name: 'Age >= 75', type: 'boolean' },
            { name: 'Diabetes', type: 'boolean' },
            { name: 'Stroke/TIA/TE', type: 'boolean' },
            { name: 'Vascular Disease', type: 'boolean' },
            { name: 'Age 65-74', type: 'boolean' },
            { name: 'Sex is Female', type: 'boolean' },
        ],
        calculation: cha2ds2vascCalculation,
    },
    {
        name: 'HAS-BLED Score',
        category: 'Cardiology',
        description: 'Bleeding risk on anticoagulation in AF.',
        explanation: `Estimates major bleeding risk in AF patients on anticoagulation:

- H (Hypertension): 1
- A (Abnormal Renal/Liver function): 1 pt each
- S (Stroke): 1
- B (Bleeding history): 1
- L (Labile INR): 1
- E (Elderly, Age > 65): 1
- D (Drugs/Alcohol): 1 pt each`,
        inputs: [
            { name: 'Hypertension', type: 'boolean' },
            { name: 'Abnormal Renal/Liver', type: 'boolean' },
            { name: 'Stroke', type: 'boolean' },
            { name: 'Bleeding History', type: 'boolean' },
            { name: 'Labile INR', type: 'boolean' },
            { name: 'Age > 65', type: 'boolean' },
            { name: 'Drugs/Alcohol', type: 'boolean' },
        ],
        calculation: hasBledCalculation,
    },
    {
        name: "Wells' Score for DVT",
        category: 'Cardiology',
        description: 'Estimates the pre-test probability of deep vein thrombosis.',
        explanation: `Each of the following criteria gets 1 point, except the last which gets -2 points:

- Active cancer
- Paralysis, paresis, or recent plaster immobilization of the lower extremities
- Recently bedridden for 3 days or more, or major surgery within 12 weeks
- Localized tenderness along the distribution of the deep venous system
- Entire leg swollen
- Calf swelling at least 3 cm larger than asymptomatic side
- Pitting edema confined to the symptomatic leg
- Collateral superficial veins (nonvaricose)
- An alternative diagnosis is at least as likely as DVT (-2 points)`,
        inputs: [
            { name: 'Active Cancer', type: 'boolean' },
            { name: 'Paralysis/Immobilization', type: 'boolean' },
            { name: 'Bedridden >3 days/Surgery <12 wks', type: 'boolean' },
            { name: 'Localized Tenderness', type: 'boolean' },
            { name: 'Entire Leg Swollen', type: 'boolean' },
            { name: 'Calf Swelling >3cm', type: 'boolean' },
            { name: 'Pitting Edema', type: 'boolean' },
            { name: 'Collateral Superficial Veins', type: 'boolean' },
            { name: 'Alternative Diagnosis as Likely', type: 'boolean' },
        ],
        calculation: wellsScoreDvtCalculation,
    },
    {
        name: "Wells' Score for PE",
        category: 'Cardiology',
        description: 'Estimates the pre-test probability of pulmonary embolism.',
        explanation: `Points are assigned as follows:

- Clinical signs and symptoms of DVT (3 points)
- PE is #1 diagnosis OR equally likely (3 points)
- Heart rate > 100 (1.5 points)
- Immobilization at least 3 days OR surgery in the previous 4 weeks (1.5 points)
- Previous, objectively diagnosed DVT or PE (1.5 points)
- Hemoptysis (1 point)
- Malignancy with treatment within 6 months or palliative (1 point)`,
        inputs: [
            { name: 'Clinical signs of DVT', type: 'boolean' },
            { name: 'PE is #1 diagnosis', type: 'boolean' },
            { name: 'Heart rate > 100', type: 'boolean' },
            { name: 'Immobilization or surgery in prev 4 wks', type: 'boolean' },
            { name: 'Previous DVT/PE', type: 'boolean' },
            { name: 'Hemoptysis', type: 'boolean' },
            { name: 'Malignancy', type: 'boolean' },
        ],
        calculation: wellsScorePeCalculation,
    },
    {
        name: 'Mean Arterial Pressure (MAP)',
        category: 'Cardiology',
        description: 'Average arterial pressure during a cardiac cycle.',
        explanation: `MAP is calculated as:

MAP = Diastolic BP + 1/3 * (Systolic BP - Diastolic BP)

Or, alternatively:
MAP = ((2 * Diastolic BP) + Systolic BP) / 3

A MAP > 65 mmHg is a common target.`,
        inputs: [
            { name: 'Systolic BP', type: 'number', unit: 'mmHg', min: 1, step: 1 },
            { name: 'Diastolic BP', type: 'number', unit: 'mmHg', min: 1, step: 1 },
        ],
        calculation: mapCalculation,
    },
        // Gastroenterology
    {
        name: 'Child-Pugh Score',
        category: 'Gastroenterology',
        description: 'Assesses prognosis of chronic liver disease.',
        explanation: `The Child-Pugh score uses 5 factors to assess liver disease severity. Points are summed to determine class (A, B, C).

- Bilirubin (mg/dL): <2 (1), 2-3 (2), >3 (3)
- Albumin (g/dL): >3.5 (1), 2.8-3.5 (2), <2.8 (3)
- INR: <1.7 (1), 1.7-2.3 (2), >2.3 (3)
- Ascites: None (1), Slight (2), Moderate (3)
- Encephalopathy: None (1), Grade 1-2 (2), Grade 3-4 (3)`,
        inputs: [
            { name: 'Bilirubin', type: 'select', options: ['<2', '2-3', '>3'] },
            { name: 'Albumin', type: 'select', options: ['>3.5', '2.8-3.5', '<2.8'] },
            { name: 'INR', type: 'select', options: ['<1.7', '1.7-2.3', '>2.3'] },
            { name: 'Ascites', type: 'select', options: ['None', 'Slight', 'Moderate'] },
            { name: 'Encephalopathy', type: 'select', options: ['None', 'Grade 1-2', 'Grade 3-4'] },
        ],
        calculation: childPughScoreCalculation as any,
    },


    // Obstetrics
    {
        name: 'Estimated Delivery Date (EDD)',
        category: 'Obstetrics',
        description: "Calculates EDD based on LMP.",
        explanation: `Naegele's rule is used:

EDD = LMP + 280 days (40 weeks)`,
        inputs: [
            { name: 'Last Menstrual Period', type: 'date' },
        ],
        calculation: eddCalculation,
    },
    {
        name: 'Gestational Age',
        category: 'Obstetrics',
        description: 'Calculates gestational age from LMP.',
        explanation: `Gestational age is the time from the first day of the Last Menstrual Period (LMP) to the current date.`,
        inputs: [
            { name: 'Last Menstrual Period', type: 'date' },
        ],
        calculation: gestationalAgeCalculation,
    },
    {
        name: 'Bishop Score',
        category: 'Obstetrics',
        description: 'Assesses cervical favorability for induction.',
        explanation: `The Bishop score is the sum of scores for 5 components:

- Dilation: Closed(0), 1-2(1), 3-4(2), >=5(3)
- Effacement: 0-30%(0), 40-50%(1), 60-70%(2), >=80%(3)
- Station: -3(0), -2(1), -1/0(2), +1/+2(3)
- Position: Posterior(0), Mid(1), Anterior(2)
- Consistency: Firm(0), Medium(1), Soft(2)

A score >= 8 is favorable for induction.`,
        inputs: [
            { name: 'Dilation', type: 'select', options: ['Closed', '1-2 cm', '3-4 cm', '>= 5 cm'] },
            { name: 'Effacement', type: 'select', options: ['0-30%', '40-50%', '60-70%', '>= 80%'] },
            { name: 'Station', type: 'select', options: ['-3', '-2', '-1, 0', '+1, +2'] },
            { name: 'Position', type: 'select', options: ['Posterior', 'Mid', 'Anterior'] },
            { name: 'Consistency', type: 'select', options: ['Firm', 'Medium', 'Soft'] },
        ],
        calculation: bishopScoreCalculation as any,
    },
    {
        name: 'APGAR Score',
        category: 'Obstetrics',
        description: "Quick assessment of a newborn's health.",
        explanation: `The APGAR score is the sum of points for 5 criteria:

- Appearance: Blue/Pale(0), Acrocyanotic(1), Pink(2)
- Pulse: Absent(0), <100(1), >=100(2)
- Grimace: None(0), Grimace(1), Cry/Cough(2)
- Activity: Limp(0), Some Flexion(1), Active(2)
- Respiration: Absent(0), Slow/Irregular(1), Good Cry(2)

Assessed at 1 and 5 minutes after birth.`,
        inputs: [
            { name: 'Appearance', type: 'select', options: ['Blue/Pale', 'Acrocyanotic', 'Pink'] },
            { name: 'Pulse', type: 'select', options: ['Absent', '<100', '>=100'] },
            { name: 'Grimace', type: 'select', options: ['None', 'Grimace', 'Cry/Cough'] },
            { name: 'Activity', type: 'select', options: ['Limp', 'Some Flexion', 'Active'] },
            { name: 'Respiration', type: 'select', options: ['Absent', 'Slow/Irregular', 'Good Cry'] },
        ],
        calculation: apgarCalculation as any,
    },
        // Pediatrics
    {
        name: 'Pediatric Weight Estimation',
        category: 'Pediatrics',
        description: "Estimate a child's weight based on age.",
        explanation: `Estimates weight using common age-based formulas:

- 3-12 months: (Age in months + 9) / 2
- 1-6 years: (Age in years * 2) + 8
- 7-12 years: (Age in years * 7 - 5) / 2`,
        inputs: [
            { name: 'Age', type: 'number', min: 1, step: 1 },
            { name: 'Unit', type: 'select', options: ['years', 'months'] },
        ],
        calculation: pediatricWeightEstimationCalculation,
    },
    {
        name: 'Pediatric Fluid Requirements',
        category: 'Pediatrics',
        description: 'Calculate maintenance fluid needs (Holliday-Segar).',
        explanation: `Calculates daily maintenance fluid requirements based on the Holliday-Segar formula:

- First 10 kg: 100 mL/kg/day
- Next 10 kg (11-20 kg): 50 mL/kg/day
- Each additional kg (>20 kg): 20 mL/kg/day`,
        inputs: [
            { name: 'Weight', type: 'number', unit: 'kg', min: 1, step: 0.5 },
        ],
        calculation: pediatricFluidRequirementsCalculation,
    },

        // Utilities
    {
        name: 'Unit Conversion',
        category: 'Utilities',
        description: 'Convert between common clinical units.',
        explanation: `Currently supports glucose conversions:

- mg/dL to mmol/L: Value / 18
- mmol/L to mg/dL: Value * 18`,
        inputs: [
            { name: 'Value', type: 'number', min: 0, step: 1 },
            { name: 'Conversion', type: 'select', options: ['mg/dL to mmol/L (Glucose)', 'mmol/L to mg/dL (Glucose)'] },
        ],
        calculation: unitConversionCalculation as any,
    },
    {
        name: 'Infusion Rate',
        category: 'Utilities',
        description: 'Calculate the rate in mL/hour.',
        explanation: `Calculates the infusion rate:

Rate (mL/hr) = Total Volume (mL) / Time (hours)`,
        inputs: [
            { name: 'Volume', type: 'number', unit: 'mL', min: 1, step: 1 },
            { name: 'Time', type: 'number', unit: 'hours', min: 0.1, step: 0.1 },
        ],
        calculation: infusionRateCalculation,
    },
    {
        name: 'Drip Rate',
        category: 'Utilities',
        description: 'Calculate the drip rate in drops/minute.',
        explanation: `Calculates the drip rate for a gravity infusion:

Rate (gtts/min) = (Volume (mL) * Drop Factor) / Time (min)`,
        inputs: [
            { name: 'Volume', type: 'number', unit: 'mL', min: 1, step: 1 },
            { name: 'Time', type: 'number', unit: 'min', min: 1, step: 1 },
            { name: 'Drop Factor', type: 'number', unit: 'gtts/mL', min: 1, step: 1 },
        ],
        calculation: dripRateCalculation,
    },
    {
        name: 'Body Surface Area (BSA)',
        category: 'Utilities',
        description: 'Calculate BSA using the Du Bois formula.',
        explanation: `The Du Bois formula is used:

BSA (m²) = 0.007184 * Height (cm)⁰.⁷²⁵ * Weight (kg)⁰.⁴²⁵

This calculator uses a common simplified version:
BSA (m²) = sqrt((Height(cm) * Weight(kg)) / 3600)`,
        inputs: [
            { name: 'Height', type: 'number', unit: 'cm', min: 1, step: 1 },
            { name: 'Weight', type: 'number', unit: 'kg', min: 1, step: 0.5 },
        ],
        calculation: bsaCalculation,
    },
        {
        name: 'Body Mass Index (BMI)',
        category: 'Utilities',
        description: 'Standard measure of body fat based on height and weight.',
        explanation: `BMI is calculated as:

BMI = Weight (kg) / (Height (m))²`,
        inputs: [
            { name: 'Weight', type: 'number', unit: 'kg', min: 1, step: 0.5 },
            { name: 'Height', type: 'number', unit: 'cm', min: 1, step: 1 },
        ],
        calculation: bmiCalculation,
    },
    {
        name: 'Ideal Body Weight',
        category: 'Utilities',
        description: 'Devine formula for ideal body weight.',
        explanation: `The Devine formula is used:

- Men: IBW (kg) = 50 + 2.3 * (Height (in) - 60)
- Women: IBW (kg) = 45.5 + 2.3 * (Height (in) - 60)`,
        inputs: [
            { name: 'Height', type: 'number', unit: 'cm', min: 1, step: 1 },
            { name: 'Sex', type: 'select', options: ['Male', 'Female'] },
        ],
        calculation: idealBodyWeightCalculation,
    },
    {
        name: 'Adjusted Body Weight',
        category: 'Utilities',
        description: 'For drug dosing in overweight patients.',
        explanation: `Adjusted Body Weight is calculated as:

AdjBW (kg) = IBW + 0.4 * (Actual Weight - IBW)

Useful for certain drug dosing.`,
        inputs: [
            { name: 'Actual Weight', type: 'number', unit: 'kg', min: 1, step: 0.5 },
            { name: 'Ideal Weight', type: 'number', unit: 'kg', min: 1, step: 0.5 },
        ],
        calculation: adjustedBodyWeightCalculation,
    },
    {
        name: 'Free Water Deficit',
        category: 'Utilities',
        description: 'Corrects hypernatremia.',
        explanation: `The formula is:

Deficit (L) = TBW * ((Serum Na⁺ / 140) - 1)

- Total Body Water (TBW) is ~60% (men) or ~50% (women) of weight.`,
        inputs: [
            { name: 'Serum Sodium', type: 'number', unit: 'mEq/L', min: 140, step: 1 },
            { name: 'Weight', type: 'number', unit: 'kg', min: 1, step: 0.5 },
            { name: 'Sex', type: 'select', options: ['Male', 'Female'] },
        ],
        calculation: freeWaterDeficitCalculation,
    },
];
