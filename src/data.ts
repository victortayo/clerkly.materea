import { Template } from '@/src/types';
import { BEHAVIORAL_TEMPLATES } from '@/src/data/templates/behavioral.ts';
import { GENERAL_OUTPATIENT_TEMPLATES } from '@/src/data/templates/general-outpatient.ts';
import { INTERNAL_MEDICINE_TEMPLATES } from '@/src/data/templates/internal-medicine.ts';
import { OB_GYN_TEMPLATES } from '@/src/data/templates/ob-gyn.ts';
import { PEDIATRICS_TEMPLATES } from '@/src/data/templates/pediatrics.ts';
import { SURGERY_TEMPLATES } from '@/src/data/templates/surgery.ts';

// This combines all the templates from the specialty files into one array.
export const INITIAL_TEMPLATES: Template[] = [
  ...BEHAVIORAL_TEMPLATES,
  ...PEDIATRICS_TEMPLATES,
  ...INTERNAL_MEDICINE_TEMPLATES,
  ...GENERAL_OUTPATIENT_TEMPLATES,
  ...SURGERY_TEMPLATES,
  ...OB_GYN_TEMPLATES,
];
