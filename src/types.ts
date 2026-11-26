import { User as FirebaseUser } from 'firebase/auth';

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
  imageUrls?: string[];
}

export interface UserProfile {
    uid: string;
    role: string;
    specialty: Specialty | 'N/A';
}

export type AppUser = FirebaseUser & UserProfile;
