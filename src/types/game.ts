export type DifficultyLevel = 'Easy' | 'Moderate' | 'Hard';
export type Setting = 'Emergency' | 'Outpatient' | 'Ward' | 'Rural Clinic';

export interface CaseMetadata {
  id: string;
  title: string;
  specialty: string;
  difficulty: DifficultyLevel;
  setting: Setting;
  isAfricanContext: boolean;
  estimatedTime: string; // e.g. "8 min"
}

export interface PatientPresentation {
  age: number;
  sex: 'Male' | 'Female';
  chiefComplaint: string;
  duration: string;
  description: string;
}

export interface HistoryQuestion {
  id: string;
  text: string;
  answer: string;
  score: number;
  clue: string;
  category: 'High-Yield' | 'Neutral' | 'Irrelevant';
  isRevealed?: boolean; // Runtime state
}

export interface PhysicalExamAction {
  id: string;
  action: string;
  finding: string;
  score: number;
  isPerformed?: boolean; // Runtime state
}

export interface InvestigationOption {
  id: string;
  name: string;
  result: string;
  score: number;
  category: 'Bedside' | 'Laboratory' | 'Imaging';
  isPenalty?: boolean;
  penaltyReason?: string;
  isOrdered?: boolean; // Runtime state
}

export interface DiagnosisOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface ManagementAction {
  id: string;
  action: string;
  score: number;
  explanation: string;
  isPenalty?: boolean;
  penaltyReason?: string;
  isPerformed?: boolean; // Runtime state
}

export interface ClinicalCase {
  metadata: CaseMetadata;
  presentation: PatientPresentation;
  history: HistoryQuestion[];
  examination: PhysicalExamAction[];
  investigations: InvestigationOption[];
  diagnosisOptions: DiagnosisOption[];
  management: ManagementAction[];
  teachingPoints: string[];
  ssaContext: string;
}

export type GamePhase = 
  | 'start'
  | 'briefing'
  | 'history' 
  | 'examination' 
  | 'investigation' 
  | 'diagnosis' 
  | 'management' 
  | 'summary';
