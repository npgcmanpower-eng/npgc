import { MedicalSpecialty, LicensingExamItem, DestinationItem } from '../types';

export const COMPANY_INFO = {
  name: 'New Path Global Career Manpower Pvt. Ltd.',
  shortName: 'New Path Global',
  tagline: 'Your Pathway to a Global Healthcare Career',
  brandMotto: 'RECRUIT • TRAIN • PLACE • EMPOWER',
  subMotto: 'Connecting Healthcare Professionals with Global Opportunities',
  pillarsHeadline: 'GLOBAL TALENT | HEALTHIER TOMORROW',
  servicesHeadline: 'Global Healthcare Recruitment | Medical Placement | Training | Immigration',
  email: 'npgcmanpower@gmail.com',
  headquarters: 'India (Overseas Operations: Middle East, UK/Ireland, North America, Australia)',
  disclaimer: 'Note: Immigration, licensing, and regulatory services are provided subject to the applicable laws, eligibility criteria, and decisions of the relevant statutory health and immigration authorities.'
};

export const MEDICAL_SPECIALTIES: MedicalSpecialty[] = [
  {
    id: 'doctors',
    title: 'Doctors & Medical Officers',
    tagline: 'General practitioners, specialists, consultants & surgeons',
    description: 'We connect medical practitioners across specialties with accredited tertiary hospitals, specialty surgical centers, and private clinic networks globally.',
    keyRoles: ['General Practitioner (GP)', 'Emergency Medicine Specialist', 'Internal Medicine Physician', 'Pediatrician', 'Obstetrician & Gynecologist', 'General Surgeon', 'Anesthesiologist', 'Cardiologist'],
    qualifications: ['MBBS', 'MD / MS', 'DNB', 'MRCP / FRCS (or equivalent)'],
    topDestinations: ['UAE (Dubai/Abu Dhabi)', 'Saudi Arabia', 'Oman', 'Qatar', 'Ireland', 'UK'],
    requiredExams: ['MOH / DHA / HAAD', 'Saudi Prometric (SCFHS)', 'Oman Prometric', 'USMLE / PLAB']
  },
  {
    id: 'nurses',
    title: 'Nurses & Nursing Professionals',
    tagline: 'Critical care, surgical, pediatric, and bedside clinical nurses',
    description: 'Specialized placement for registered nurses seeking international careers in high-standard healthcare institutions with structured clinical orientation.',
    keyRoles: ['Staff Nurse (General Ward)', 'ICU & Critical Care Nurse', 'Operation Theatre (OT) Nurse', 'NICU / Pediatric Nurse', 'Emergency & Trauma Nurse', 'Dialysis Nurse', 'Nurse Supervisor'],
    qualifications: ['B.Sc. Nursing', 'Post Basic B.Sc. Nursing', 'General Nursing & Midwifery (GNM)', 'M.Sc. Nursing'],
    topDestinations: ['USA', 'UAE', 'Saudi Arabia', 'Ireland', 'Australia', 'Qatar'],
    requiredExams: ['NCLEX-RN', 'DHA / MOH / HAAD', 'Saudi Prometric', 'NMBI (Ireland)', 'OET / IELTS']
  },
  {
    id: 'pharmacists',
    title: 'Pharmacists & Pharmaceutical Specialists',
    tagline: 'Clinical, hospital, retail & industrial pharmacy professionals',
    description: 'Guiding licensed pharmacists through global licensing equivalencies, institutional hospital pharmacy roles, and advanced dispensing networks.',
    keyRoles: ['Clinical Pharmacist', 'Hospital Pharmacist', 'Retail Dispensing Pharmacist', 'Industrial QC / QA Specialist', 'Regulatory Affairs Specialist', 'Compounding Pharmacist'],
    qualifications: ['B.Pharm', 'Pharm.D', 'M.Pharm'],
    topDestinations: ['UAE', 'Saudi Arabia', 'Oman', 'Australia', 'Canada'],
    requiredExams: ['DHA / MOH Pharmacist', 'Saudi Prometric', 'KAPS (Australia)', 'NAPLEX / PEBC']
  },
  {
    id: 'physiotherapists',
    title: 'Physiotherapists & Rehabilitation',
    tagline: 'Physical therapy, neuro-rehab & musculoskeletal care',
    description: 'Staffing for dedicated physical therapy clinics, sports medicine institutions, orthopedic post-op units, and long-term geriatric rehabilitation facilities.',
    keyRoles: ['Cardiorespiratory Physiotherapist', 'Musculoskeletal Physiotherapist', 'Neurological Rehabilitation Specialist', 'Sports Physical Therapist', 'Pediatric Physiotherapist'],
    qualifications: ['BPT (Bachelor of Physiotherapy)', 'MPT (Master of Physiotherapy)'],
    topDestinations: ['UAE', 'Saudi Arabia', 'Oman', 'Ireland', 'Australia'],
    requiredExams: ['DHA / HAAD Physiotherapy', 'Saudi Prometric', 'Oman Prometric']
  },
  {
    id: 'lab-technologists',
    title: 'Medical Laboratory Professionals',
    tagline: 'Pathology, hematology, biochemistry & microbiology',
    description: 'Placing accredited diagnostic scientists and technicians in automated clinical diagnostics laboratories, hospital blood banks, and research institutes.',
    keyRoles: ['Medical Lab Technologist (MLT)', 'Histotechnologist', 'Clinical Biochemist', 'Microbiology Specialist', 'Blood Bank Technologist', 'Molecular Diagnostic Analyst'],
    qualifications: ['B.Sc. MLT / Medical Laboratory Technology', 'M.Sc. Clinical Microbiology / Biochemistry'],
    topDestinations: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'USA'],
    requiredExams: ['DHA / MOH Lab Tech', 'Saudi Prometric', 'ASCPi (USA)']
  },
  {
    id: 'radiology',
    title: 'Radiographers & Radiology Professionals',
    tagline: 'Diagnostic imaging, MRI, CT scan & ultrasound operators',
    description: 'Sourcing certified imaging technicians skilled in contemporary radiology modalities for hospital trauma centers and private diagnostic chains.',
    keyRoles: ['Diagnostic Radiographer', 'CT Scan Specialist', 'MRI Technologist', 'Medical Sonographer / Ultrasound', 'Interventional Radiology Tech', 'Mammographer'],
    qualifications: ['B.Sc. Medical Imaging Technology', 'Diploma in Radiography (DRT)'],
    topDestinations: ['UAE', 'Saudi Arabia', 'Qatar', 'Ireland'],
    requiredExams: ['DHA / HAAD Radiographer', 'Saudi Prometric', 'Oman Prometric']
  },
  {
    id: 'allied-healthcare',
    title: 'Allied Healthcare & Technical Specialists',
    tagline: 'Anesthesia techs, perfusionists, dialysis & OT assistants',
    description: 'Critical operating room and support staff ensuring comprehensive healthcare service delivery across leading international health systems.',
    keyRoles: ['Operation Theatre Technologist (OTT)', 'Anesthesia Technician', 'Dialysis Technologist', 'Perfusionist', 'Emergency Medical Technician (EMT)', 'Respiratory Therapist'],
    qualifications: ['B.Sc. Allied Health Sciences', 'Diploma in Clinical Technology'],
    topDestinations: ['UAE', 'Saudi Arabia', 'Kuwait', 'Oman'],
    requiredExams: ['Health Authority Allied Licensing Assessments']
  }
];

export const LICENSING_EXAMS: LicensingExamItem[] = [
  {
    id: 'dha',
    code: 'DHA',
    name: 'Dubai Health Authority Assessment',
    authority: 'Government of Dubai, UAE',
    region: 'Middle East (Dubai)',
    targetProfession: 'Doctors, Nurses, Pharmacists, Allied Health',
    description: 'Mandatory licensing requirement for all medical professionals wishing to practice in private and public healthcare facilities within Dubai.',
    format: 'Computer-Based Test (Prometric) · Multiple Choice Questions (100-150 MCQs)',
    validity: 'Eligibility letter valid for 1 year upon passing',
    coachingSupport: ['Prometric Question Bank Practice', 'DataFlow PSV Verification Guidance', 'Eligibility Assessment & Document Audit', 'Full Mock Simulations']
  },
  {
    id: 'moh-uae',
    code: 'MOH',
    name: 'Ministry of Health & Prevention (UAE)',
    authority: 'Federal MOHAP, UAE',
    region: 'Northern Emirates (Sharjah, Ajman, RAK, Fujairah, UAQ)',
    targetProfession: 'Doctors, Nurses, Allied Health, Pharmacists',
    description: 'Federal medical license allowing clinical practice across Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.',
    format: 'CBT Prometric Examination or Oral Evaluation depending on discipline',
    validity: 'Evaluation pass certificate valid across Federal facilities',
    coachingSupport: ['Subject-wise syllabus revision', 'Previous years question analysis', 'Application & Primary Source Verification (PSV)']
  },
  {
    id: 'haad-doh',
    code: 'HAAD / DoH',
    name: 'Department of Health Abu Dhabi',
    authority: 'DoH Abu Dhabi, UAE',
    region: 'Abu Dhabi & Al Ain',
    targetProfession: 'Physicians, Nursing Staff, Allied Health Specialists',
    description: 'Regulatory credential required to serve in Abu Dhabi and Al Ain healthcare networks (Cleveland Clinic Abu Dhabi, SEHA, Burjeel, NMC).',
    format: 'Computer-Based Testing (Pearson VUE / Prometric)',
    validity: 'Valid across Abu Dhabi emirate with mutual conversion to DHA/MOH',
    coachingSupport: ['Specialized nursing/physician test suites', 'Clinical scenario mastery', 'Licensing credential submission assistance']
  },
  {
    id: 'saudi-prometric',
    code: 'Saudi Prometric (SCFHS)',
    name: 'Saudi Commission for Health Specialties',
    authority: 'Kingdom of Saudi Arabia (SCFHS)',
    region: 'Saudi Arabia',
    targetProfession: 'All Medical, Nursing, and Healthcare Specialties',
    description: 'Mandatory qualification exam for international healthcare staff joining Ministry of Health (MOH) and prestigious private hospitals across the Kingdom.',
    format: 'Prometric Computerized Exam (150 MCQs, 3 Hours)',
    validity: 'Pass result valid for classification and Mumaris+ registration',
    coachingSupport: ['Mumaris+ account setup & verification', 'SCFHS blueprint topic coverage', 'Extensive Prometric question pool drills']
  },
  {
    id: 'oman-prometric',
    code: 'Oman Prometric (OMSB)',
    name: 'Oman Medical Specialty Board Examination',
    authority: 'Sultanate of Oman',
    region: 'Oman (Muscat & Regional Governorates)',
    targetProfession: 'Doctors, Staff Nurses, Lab Technicians',
    description: 'Standardized competency exam for healthcare workers seeking placement in Oman public hospitals and premier healthcare clinics.',
    format: 'Prometric CBT (100 questions, 2.5 hours)',
    validity: 'Recognized for Oman MOH license endorsement',
    coachingSupport: ['OMSB clinical guidelines', 'High-yield subject notes', 'Dataflow verification coordination']
  },
  {
    id: 'qatar-prometric',
    code: 'Qatar Prometric (DHP)',
    name: 'Department of Healthcare Professions',
    authority: 'Ministry of Public Health, Qatar',
    region: 'Qatar (Doha & Hamad Medical Corp partners)',
    targetProfession: 'Nurses, Allied Health, Pharmacists, Doctors',
    description: 'Mandatory licensing exam for healthcare professionals joining Hamad Medical Corporation or private healthcare organizations in Qatar.',
    format: 'Prometric Exam Center CBT format',
    validity: 'Valid for DHP professional registration',
    coachingSupport: ['Customized Qatar health exam test bank', 'Credential pre-evaluation', 'Application guidance']
  },
  {
    id: 'nclex-rn',
    code: 'NCLEX-RN',
    name: 'National Council Licensure Examination',
    authority: 'NCSBN (National Council of State Boards of Nursing, USA)',
    region: 'United States & Canada',
    targetProfession: 'Registered Nurses (B.Sc. / GNM)',
    description: 'Gold standard nationwide examination for licensing of nurses in the United States and Canada, unlocking permanent residency (Green Card / EB-3) avenues.',
    format: 'Next Generation NCLEX (NGN) - Computer Adaptive Test (CAT) (85-150 Questions)',
    validity: 'Permanent upon state licensure issuance',
    coachingSupport: ['Next Generation NCLEX case studies training', 'Clinical judgment model coaching', 'CGFNS & State Board credential application', 'VisaScreen coordination']
  },
  {
    id: 'usmle',
    code: 'USMLE',
    name: 'United States Medical Licensing Examination',
    authority: 'FSMB & NBME, USA',
    region: 'United States',
    targetProfession: 'Medical Doctors (MBBS / MD)',
    description: 'Three-step examination program assessing a physician’s ability to apply knowledge, concepts, and principles fundamental to patient care in the US.',
    format: 'Step 1 (Computerized test), Step 2 CK (Clinical Knowledge), Step 3',
    validity: 'ECFMG certification pathway for medical residency matching',
    coachingSupport: ['First Aid & UWorld strategic guidance', 'ECFMG portal documentation assistance', 'Clinical pathway orientation']
  },
  {
    id: 'kaps-australia',
    code: 'KAPS / APEC',
    name: 'Knowledge Assessment of Pharmaceutical Sciences',
    authority: 'Australian Pharmacy Council (APC)',
    region: 'Australia & New Zealand',
    targetProfession: 'Pharmacists (B.Pharm / Pharm.D)',
    description: 'Crucial competency assessment enabling overseas qualified pharmacists to register and practice in Australia and pursue Australian skilled migration.',
    format: 'Two papers (100 MCQs each: Paper 1 Pharmaceutical Chemistry/Physiology, Paper 2 Pharmaceutics/Therapeutics)',
    validity: 'Certificate valid for 3 years towards AHPRA provisional registration',
    coachingSupport: ['Comprehensive 2-paper curriculum syllabus review', 'Australian clinical pharmacy practice standards', 'AHPRA initial filing guidance']
  }
];

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'middle-east',
    country: 'United Arab Emirates & Gulf Cooperation Council',
    region: 'Middle East (UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait)',
    flag: '🇦🇪 🇸🇦 🇴🇲 🇶🇦',
    summary: 'Tax-free compensation packages, tax-free allowances, modern hospital infrastructure, and swift licensing-to-departure processing (averaging 60-90 days).',
    popularRoles: ['ICU & OT Nurses', 'Specialist Doctors', 'Hospital Pharmacists', 'Radiology Technicians', 'Physiotherapists'],
    regulatoryBody: 'DHA / MOH / HAAD / SCFHS / OMSB / DHP',
    keyBenefits: ['Tax-free salaries with end-of-service gratuity', 'Furnished accommodation or housing allowance', 'Annual round-trip air tickets & medical coverage', 'Family sponsorship support'],
    visaCategory: 'Employment Residence Visa (Sponsored by Hospital)'
  },
  {
    id: 'usa-canada',
    country: 'United States & Canada',
    region: 'North America',
    flag: '🇺🇸 🇨🇦',
    summary: 'Premier clinical advancement, global standard salaries, and clear immigration pathways including EB-3 Immigrant Visas (Green Card) for Registered Nurses.',
    popularRoles: ['Registered Nurses (NCLEX qualified)', 'Specialist Medical Doctors', 'Clinical Research Technologists'],
    regulatoryBody: 'State Boards of Nursing, CGFNS, ECFMG, NNAS',
    keyBenefits: ['Permanent Residency (EB-3 Green Card) sponsorship for nurses', 'Competitive clinical wages ($35 - $55+ / hour)', 'Comprehensive 401(k), health and dental insurance', 'Direct path to citizenship'],
    visaCategory: 'EB-3 Immigrant Visa / H-1B / Permanent Resident'
  },
  {
    id: 'ireland-uk',
    country: 'Ireland & United Kingdom',
    region: 'Europe',
    flag: '🇮🇪 🇬🇧',
    summary: 'Direct placement in state health services (HSE Ireland and NHS UK trusts) with clear adaptation courses, Critical Skills Employment Permits, and family reunion.',
    popularRoles: ['Staff Nurses (General, Midwifery, Critical Care)', 'Consultant Physicians', 'Radiographers', 'Medical Lab Technicians'],
    regulatoryBody: 'NMBI (Ireland) / NMC & GMC (UK) / CORU',
    keyBenefits: ['Critical Skills Employment Permit with 2-year Stamp 4 PR route', 'Public health pension plan & continuous medical education (CME)', 'Free schooling for children & public health coverage', 'Relocation packages and initial accommodation allowances'],
    visaCategory: 'Critical Skills Employment Permit / Skilled Worker Visa'
  },
  {
    id: 'australia-nz',
    country: 'Australia & New Zealand',
    region: 'Australasia',
    flag: '🇦🇺 🇳🇿',
    summary: 'High quality of life, outstanding healthcare funding, and high-demand skilled migration quotas across regional and metropolitan public health networks.',
    popularRoles: ['Registered Nurses', 'General Practitioners', 'Clinical Pharmacists (KAPS)', 'Diagnostic Radiographers', 'Physiotherapists'],
    regulatoryBody: 'AHPRA (Australia) / MCNZ / Nursing Council of NZ',
    keyBenefits: ['Subclass 186/482/189/190 permanent residency visas', 'Work-life balance with standard 38-hour work weeks', 'Relocation assistance bonuses for regional health areas', 'World-leading public infrastructure and education'],
    visaCategory: 'Skilled Independent / Employer Nominated Visa'
  }
];

export const EMPLOYER_SOLUTIONS = [
  {
    title: 'Healthcare Manpower Sourcing',
    description: 'Direct pipeline to thousands of pre-qualified medical doctors, nurses, pharmacists, and allied technologists ready for overseas deployment.'
  },
  {
    title: 'Candidate Screening & Profile Evaluation',
    description: 'Multi-layer screening verifying clinical competencies, registration history, language fluency, and technical capabilities before shortlisting.'
  },
  {
    title: 'Medical Professional Recruitment',
    description: 'End-to-end management of interviews, clinical skill assessments, client interview scheduling, and contract negotiation.'
  },
  {
    title: 'International Placement & DataFlow Verification',
    description: 'Coordination of Primary Source Verification (DataFlow / TrueProfile) ensuring 100% credential legitimacy and institutional peace of mind.'
  },
  {
    title: 'Training & Licensing Coordination',
    description: 'In-house preparation for destination-specific health board exams (Prometric, DHA, MOH, NCLEX) accelerating readiness for deployment.'
  },
  {
    title: 'Immigration & Career Pathway Support',
    description: 'Assisting candidates and employer legal teams with embassy attestation, medical fitness clearances, visa processing, and relocation support.'
  },
  {
    title: 'Long-term Employer Partnership',
    description: 'Continuous pipeline development with low attrition, candidate onboarding support, and replacement guarantees during probation.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Understand',
    summary: 'Understand employer requirements and candidate career goals.',
    details: 'We analyze hospital workforce needs, required certifications, experience levels, and match them with candidates seeking growth abroad.'
  },
  {
    step: '02',
    name: 'Identify',
    summary: 'Source and identify suitable healthcare professionals.',
    details: 'Our recruitment specialists tap into verified healthcare databases, reviewing qualifications, clinical track records, and initial eligibility.'
  },
  {
    step: '03',
    name: 'Prepare',
    summary: 'Support candidates with relevant training and licensing preparation.',
    details: 'Structured coaching for Prometric, NCLEX, DHA, MOH, or KAPS examinations alongside DataFlow credential verification processing.'
  },
  {
    step: '04',
    name: 'Place',
    summary: 'Connect qualified professionals with appropriate international opportunities.',
    details: 'Interview coordination, offer letter management, salary negotiation, and credential alignment with destination hospital policies.'
  },
  {
    step: '05',
    name: 'Support',
    summary: 'Provide immigration and career pathway guidance as applicable.',
    details: 'Visa documentation, medical clearance guidance, departure briefing, and post-arrival settling support in the destination country.'
  }
];

export const CORE_VALUES = [
  {
    title: 'Professionalism',
    description: 'Maintaining the highest clinical recruitment standards and transparent communication across all candidate and hospital interactions.'
  },
  {
    title: 'Integrity & Ethical Recruitment',
    description: 'Strict adherence to fair recruitment principles, zero illegal sub-agent involvement, and honest regulatory advisory.'
  },
  {
    title: 'Candidate Empowerment',
    description: 'Equipping doctors, nurses, and allied workers with the knowledge, test-taking mastery, and confidence to succeed internationally.'
  },
  {
    title: 'Client Commitment',
    description: 'Reliable, SLA-driven manpower solutions that reduce clinical vacancy rates and maintain high standards of patient care.'
  },
  {
    title: 'Global Career Development',
    description: 'Building long-term pathways that advance medical careers, enhance financial stability, and enrich global healthcare systems.'
  }
];

export const STATS = [
  { value: '8+', label: 'Global Placement Destinations', detail: 'UAE, Saudi Arabia, Oman, Qatar, USA, UK, Ireland, Australia' },
  { value: '12+', label: 'Licensing Exam Pathways', detail: 'DHA, MOH, HAAD, Prometric, NCLEX, USMLE, KAPS & more' },
  { value: '100%', label: 'Ethical & Compliance-First', detail: 'Primary Source Verification and DataFlow compliance' },
  { value: '500+', label: 'Hospital & Healthcare Roles', detail: 'Doctors, Nurses, Pharmacists, Lab & Radiology' }
];
