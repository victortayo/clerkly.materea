export type Specialty = 
  | 'Pediatrics'
  | 'Internal Medicine'
  | 'Obstetrics and Gynecology'
  | 'Surgery'
  | 'General Outpatient'
  | 'Behavioral Sciences';

export interface Template {
  id: string;
  title: string;
  specialty: Specialty;
  subSpecialty: string;
  condition: string;
  symptoms: string[];
  contributor: string;
  lastModified: string;
  summary: string;
  content: string;
  documentation?: string;
  bookmarkCount: number;
}
