export type CandidateProfession =
  | 'Doctor / Medical Officer'
  | 'Nurse / Nursing Specialist'
  | 'Pharmacist / Pharmaceutical'
  | 'Physiotherapist'
  | 'Medical Laboratory Technologist'
  | 'Radiographer / Imaging Specialist'
  | 'Allied Healthcare Specialist'
  | 'Dentist / Dental Specialist'
  | 'Other Healthcare Professional';

export type DestinationRegion =
  | 'Middle East (UAE, Saudi, Oman, Qatar)'
  | 'USA & Canada'
  | 'United Kingdom & Ireland'
  | 'Australia & New Zealand'
  | 'Open to Any Destination';

export type LicensingStatus =
  | 'Already Licensed / Passed Exam'
  | 'Currently Preparing / Studying'
  | 'Need Training & Guidance'
  | 'Exam Scheduled'
  | 'Not Started Yet';

export interface CandidateApplication {
  fullName: string;
  email: string;
  phone: string;
  profession: CandidateProfession;
  qualification: string;
  experienceYears: number;
  targetDestination: DestinationRegion;
  licensingStatus: LicensingStatus;
  targetExam?: string;
  resumeFileName?: string;
  message?: string;
}

export interface EmployerInquiry {
  organizationName: string;
  contactPerson: string;
  workEmail: string;
  phone: string;
  facilityType: 'Government Hospital' | 'Private Multi-Specialty Hospital' | 'Clinic Chain' | 'Retail / Hospital Pharmacy' | 'Diagnostic Lab' | 'Other';
  countryLocation: string;
  headcountNeeded: number;
  rolesNeeded: string[];
  urgencyTimeline: 'Immediate (Within 30 Days)' | '1 - 3 Months' | 'Quarterly Ramp-up' | 'Long-term Pipeline';
  additionalRequirements?: string;
}

export interface ConsultationBooking {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: 'Exam Preparation & Training' | 'Hospital Placement' | 'Credential Verification (DataFlow)' | 'Immigration & Visa Pathway';
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
}

export interface MedicalSpecialty {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyRoles: string[];
  qualifications: string[];
  topDestinations: string[];
  requiredExams: string[];
}

export interface LicensingExamItem {
  id: string;
  code: string;
  name: string;
  authority: string;
  region: string;
  targetProfession: string;
  description: string;
  format: string;
  validity: string;
  coachingSupport: string[];
}

export interface DestinationItem {
  id: string;
  country: string;
  region: string;
  flag: string;
  summary: string;
  popularRoles: string[];
  regulatoryBody: string;
  keyBenefits: string[];
  visaCategory: string;
}
