export type LearningModuleCategory = 'Symptom Clerking' | 'Physical Examination' | 'Laboratory Interpretation' | 'Clinical Scoring Systems' | 'Counselling' | 'Treatment' | 'Procedures' | 'History Taking';

export type SymptomSubCategory = 
  | 'General Constitutional Symptoms' | 'Pain' | 'Respiratory' | 'Cardiovascular' 
  | 'Gastrointestinal' | 'Urinary' | 'Male Genitourinary' | 'Gynaecological' 
  | 'Obstetric' | 'Neurological' | 'Musculoskeletal' | 'Dermatological' 
  | 'Eye' | 'Ear' | 'Nose' | 'Throat' | 'Psychiatric' | 'Paediatric' 
  | 'Surgical' | 'Endocrine' | 'Hematological' | 'Infectious Disease' | 'Emergency';

export interface LearningModule {
  id: string;
  title: string;
  category: LearningModuleCategory;
  subCategory?: string;
  content: string; 
}
