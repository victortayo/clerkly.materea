export type Specialty = 
  | 'Pediatrics'
  | 'Internal Medicine'
  | 'Obstetrics and Gynecology'
  | 'Surgery'
  | 'General Outpatient';

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
  bookmarkCount: number;
}
