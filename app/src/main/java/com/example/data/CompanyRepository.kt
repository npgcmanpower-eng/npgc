package com.example.data

import java.util.UUID

object CompanyRepository {

    const val COMPANY_NAME = "New Path Global Career Manpower Pvt. Ltd."
    const val SHORT_NAME = "New Path Global"
    const val TAGLINE = "Your Pathway to a Global Healthcare Career"
    const val BRAND_MOTTO = "RECRUIT • TRAIN • PLACE • EMPOWER"
    const val SUB_MOTTO = "Connecting Healthcare Professionals with Global Opportunities"
    const val EMAIL = "npgcmanpower@gmail.com"
    const val HEADQUARTERS = "India (Overseas Operations: Middle East, UK/Ireland, North America, Australia)"
    const val DISCLAIMER = "Note: Immigration, licensing, and regulatory services are provided subject to the applicable laws, eligibility criteria, and decisions of the relevant statutory health and immigration authorities."

    val stats = listOf(
        CompanyStat("8+", "Global Destinations", "UAE, Saudi Arabia, Oman, Qatar, USA, UK, Ireland, Australia"),
        CompanyStat("12+", "Exam Pathways", "DHA, MOH, HAAD, Prometric, NCLEX, USMLE, KAPS & more"),
        CompanyStat("100%", "Compliance & PSV", "Primary Source Verification and DataFlow compliance"),
        CompanyStat("500+", "Healthcare Placements", "Doctors, Nurses, Pharmacists, Lab & Radiology")
    )

    val specialties = listOf(
        MedicalSpecialty(
            id = "doctors",
            title = "Doctors & Medical Officers",
            tagline = "General practitioners, specialists, consultants & surgeons",
            description = "We connect medical practitioners across specialties with accredited tertiary hospitals, specialty surgical centers, and private clinic networks globally.",
            keyRoles = listOf("General Practitioner (GP)", "Emergency Medicine Specialist", "Internal Medicine Physician", "Pediatrician", "Obstetrician & Gynecologist", "General Surgeon", "Anesthesiologist", "Cardiologist"),
            qualifications = listOf("MBBS", "MD / MS", "DNB", "MRCP / FRCS (or equivalent)"),
            topDestinations = listOf("UAE (Dubai/Abu Dhabi)", "Saudi Arabia", "Oman", "Qatar", "Ireland", "UK"),
            requiredExams = listOf("MOH / DHA / HAAD", "Saudi Prometric (SCFHS)", "Oman Prometric", "USMLE / PLAB")
        ),
        MedicalSpecialty(
            id = "nurses",
            title = "Nurses & Nursing Professionals",
            tagline = "Critical care, surgical, pediatric, and bedside clinical nurses",
            description = "Specialized placement for registered nurses seeking international careers in high-standard healthcare institutions with structured clinical orientation.",
            keyRoles = listOf("Staff Nurse (General Ward)", "ICU & Critical Care Nurse", "Operation Theatre (OT) Nurse", "NICU / Pediatric Nurse", "Emergency & Trauma Nurse", "Dialysis Nurse", "Nurse Supervisor"),
            qualifications = listOf("B.Sc. Nursing", "Post Basic B.Sc. Nursing", "General Nursing & Midwifery (GNM)", "M.Sc. Nursing"),
            topDestinations = listOf("USA", "UAE", "Saudi Arabia", "Ireland", "Australia", "Qatar"),
            requiredExams = listOf("NCLEX-RN", "DHA / MOH / HAAD", "Saudi Prometric", "NMBI (Ireland)", "OET / IELTS")
        ),
        MedicalSpecialty(
            id = "pharmacists",
            title = "Pharmacists & Pharmaceutical Specialists",
            tagline = "Clinical, hospital, retail & industrial pharmacy professionals",
            description = "Guiding licensed pharmacists through global licensing equivalencies, institutional hospital pharmacy roles, and advanced dispensing networks.",
            keyRoles = listOf("Clinical Pharmacist", "Hospital Pharmacist", "Retail Dispensing Pharmacist", "Industrial QC / QA Specialist", "Regulatory Affairs Specialist", "Compounding Pharmacist"),
            qualifications = listOf("B.Pharm", "Pharm.D", "M.Pharm"),
            topDestinations = listOf("UAE", "Saudi Arabia", "Oman", "Australia", "Canada"),
            requiredExams = listOf("DHA / MOH Pharmacist", "Saudi Prometric", "KAPS (Australia)", "NAPLEX / PEBC")
        ),
        MedicalSpecialty(
            id = "physiotherapists",
            title = "Physiotherapists & Rehabilitation",
            tagline = "Physical therapy, neuro-rehab & musculoskeletal care",
            description = "Staffing for dedicated physical therapy clinics, sports medicine institutions, orthopedic post-op units, and long-term geriatric rehabilitation facilities.",
            keyRoles = listOf("Cardiorespiratory Physiotherapist", "Musculoskeletal Physiotherapist", "Neurological Rehabilitation Specialist", "Sports Physical Therapist", "Pediatric Physiotherapist"),
            qualifications = listOf("BPT (Bachelor of Physiotherapy)", "MPT (Master of Physiotherapy)"),
            topDestinations = listOf("UAE", "Saudi Arabia", "Oman", "Ireland", "Australia"),
            requiredExams = listOf("DHA / HAAD Physiotherapy", "Saudi Prometric", "Oman Prometric")
        ),
        MedicalSpecialty(
            id = "lab-technologists",
            title = "Medical Laboratory Professionals",
            tagline = "Pathology, hematology, biochemistry & microbiology",
            description = "Placing accredited diagnostic scientists and technicians in automated clinical diagnostics laboratories, hospital blood banks, and research institutes.",
            keyRoles = listOf("Medical Lab Technologist (MLT)", "Histotechnologist", "Clinical Biochemist", "Microbiology Specialist", "Blood Bank Technologist", "Molecular Diagnostic Analyst"),
            qualifications = listOf("B.Sc. MLT", "M.Sc. Clinical Microbiology / Biochemistry"),
            topDestinations = listOf("UAE", "Saudi Arabia", "Qatar", "Oman", "USA"),
            requiredExams = listOf("DHA / MOH Lab Tech", "Saudi Prometric", "ASCPi (USA)")
        ),
        MedicalSpecialty(
            id = "radiology",
            title = "Radiographers & Radiology Professionals",
            tagline = "Diagnostic imaging, MRI, CT scan & ultrasound operators",
            description = "Sourcing certified imaging technicians skilled in contemporary radiology modalities for hospital trauma centers and private diagnostic chains.",
            keyRoles = listOf("Diagnostic Radiographer", "CT Scan Specialist", "MRI Technologist", "Medical Sonographer / Ultrasound", "Interventional Radiology Tech", "Mammographer"),
            qualifications = listOf("B.Sc. Medical Imaging Technology", "Diploma in Radiography (DRT)"),
            topDestinations = listOf("UAE", "Saudi Arabia", "Qatar", "Ireland"),
            requiredExams = listOf("DHA / HAAD Radiographer", "Saudi Prometric", "Oman Prometric")
        ),
        MedicalSpecialty(
            id = "allied-healthcare",
            title = "Allied Healthcare & Technical Specialists",
            tagline = "Anesthesia techs, perfusionists, dialysis & OT assistants",
            description = "Critical operating room and support staff ensuring comprehensive healthcare service delivery across leading international health systems.",
            keyRoles = listOf("Operation Theatre Technologist (OTT)", "Anesthesia Technician", "Dialysis Technologist", "Perfusionist", "Emergency Medical Technician (EMT)", "Respiratory Therapist"),
            qualifications = listOf("B.Sc. Allied Health Sciences", "Diploma in Clinical Technology"),
            topDestinations = listOf("UAE", "Saudi Arabia", "Kuwait", "Oman"),
            requiredExams = listOf("Health Authority Allied Licensing Assessments")
        )
    )

    val licensingExams = listOf(
        LicensingExamItem(
            id = "dha",
            code = "DHA",
            name = "Dubai Health Authority Assessment",
            authority = "Government of Dubai, UAE",
            region = "Middle East (Dubai)",
            targetProfession = "Doctors, Nurses, Pharmacists, Allied Health",
            description = "Mandatory licensing requirement for all medical professionals wishing to practice in private and public healthcare facilities within Dubai.",
            format = "Computer-Based Test (Prometric) · Multiple Choice Questions (100-150 MCQs)",
            validity = "Eligibility letter valid for 1 year upon passing",
            coachingSupport = listOf("Prometric Question Bank Practice", "DataFlow PSV Verification Guidance", "Eligibility Assessment & Document Audit", "Full Mock Simulations")
        ),
        LicensingExamItem(
            id = "moh-uae",
            code = "MOH",
            name = "Ministry of Health & Prevention (UAE)",
            authority = "Federal MOHAP, UAE",
            region = "Northern Emirates (Sharjah, Ajman, RAK, Fujairah, UAQ)",
            targetProfession = "Doctors, Nurses, Allied Health, Pharmacists",
            description = "Federal medical license allowing clinical practice across Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
            format = "CBT Prometric Examination or Oral Evaluation depending on discipline",
            validity = "Evaluation pass certificate valid across Federal facilities",
            coachingSupport = listOf("Subject-wise syllabus revision", "Previous years question analysis", "Application & Primary Source Verification (PSV)")
        ),
        LicensingExamItem(
            id = "haad-doh",
            code = "HAAD / DoH",
            name = "Department of Health Abu Dhabi",
            authority = "DoH Abu Dhabi, UAE",
            region = "Abu Dhabi & Al Ain",
            targetProfession = "Physicians, Nursing Staff, Allied Health Specialists",
            description = "Regulatory credential required to serve in Abu Dhabi and Al Ain healthcare networks (Cleveland Clinic Abu Dhabi, SEHA, Burjeel, NMC).",
            format = "Computer-Based Testing (Pearson VUE / Prometric)",
            validity = "Valid across Abu Dhabi emirate with mutual conversion to DHA/MOH",
            coachingSupport = listOf("Specialized nursing/physician test suites", "Clinical scenario mastery", "Licensing credential submission assistance")
        ),
        LicensingExamItem(
            id = "saudi-prometric",
            code = "Saudi Prometric (SCFHS)",
            name = "Saudi Commission for Health Specialties",
            authority = "Kingdom of Saudi Arabia (SCFHS)",
            region = "Saudi Arabia",
            targetProfession = "All Medical, Nursing, and Healthcare Specialties",
            description = "Mandatory qualification exam for international healthcare staff joining Ministry of Health (MOH) and prestigious private hospitals across the Kingdom.",
            format = "Prometric Computerized Exam (150 MCQs, 3 Hours)",
            validity = "Pass result valid for classification and Mumaris+ registration",
            coachingSupport = listOf("Mumaris+ account setup & verification", "SCFHS blueprint topic coverage", "Extensive Prometric question pool drills")
        ),
        LicensingExamItem(
            id = "oman-prometric",
            code = "Oman Prometric (OMSB)",
            name = "Oman Medical Specialty Board Examination",
            authority = "Sultanate of Oman",
            region = "Oman (Muscat & Regional Governorates)",
            targetProfession = "Doctors, Staff Nurses, Lab Technicians",
            description = "Standardized competency exam for healthcare workers seeking placement in Oman public hospitals and premier healthcare clinics.",
            format = "Prometric CBT (100 questions, 2.5 hours)",
            validity = "Recognized for Oman MOH license endorsement",
            coachingSupport = listOf("OMSB clinical guidelines", "High-yield subject notes", "Dataflow verification coordination")
        ),
        LicensingExamItem(
            id = "qatar-prometric",
            code = "Qatar Prometric (DHP)",
            name = "Department of Healthcare Professions",
            authority = "Ministry of Public Health, Qatar",
            region = "Qatar (Doha & Hamad Medical Corp partners)",
            targetProfession = "Nurses, Allied Health, Pharmacists, Doctors",
            description = "Mandatory licensing exam for healthcare professionals joining Hamad Medical Corporation or private healthcare organizations in Qatar.",
            format = "Prometric Exam Center CBT format",
            validity = "Valid for DHP professional registration",
            coachingSupport = listOf("Customized Qatar health exam test bank", "Credential pre-evaluation", "Application guidance")
        ),
        LicensingExamItem(
            id = "nclex-rn",
            code = "NCLEX-RN",
            name = "National Council Licensure Examination",
            authority = "NCSBN (National Council of State Boards of Nursing, USA)",
            region = "United States & Canada",
            targetProfession = "Registered Nurses (B.Sc. / GNM)",
            description = "Gold standard nationwide examination for licensing of nurses in the United States and Canada, unlocking permanent residency (Green Card / EB-3) avenues.",
            format = "Next Generation NCLEX (NGN) - Computer Adaptive Test (CAT) (85-150 Questions)",
            validity = "Permanent upon state licensure issuance",
            coachingSupport = listOf("Next Generation NCLEX case studies training", "Clinical judgment model coaching", "CGFNS & State Board credential application", "VisaScreen coordination")
        ),
        LicensingExamItem(
            id = "usmle",
            code = "USMLE",
            name = "United States Medical Licensing Examination",
            authority = "FSMB & NBME, USA",
            region = "United States",
            targetProfession = "Medical Doctors (MBBS / MD)",
            description = "Three-step examination program assessing a physician's ability to apply knowledge, concepts, and principles fundamental to patient care in the US.",
            format = "Step 1 (Computerized test), Step 2 CK (Clinical Knowledge), Step 3",
            validity = "ECFMG certification pathway for medical residency matching",
            coachingSupport = listOf("First Aid & UWorld strategic guidance", "ECFMG portal documentation assistance", "Clinical pathway orientation")
        ),
        LicensingExamItem(
            id = "kaps-australia",
            code = "KAPS / APEC",
            name = "Knowledge Assessment of Pharmaceutical Sciences",
            authority = "Australian Pharmacy Council (APC)",
            region = "Australia & New Zealand",
            targetProfession = "Pharmacists (B.Pharm / Pharm.D)",
            description = "Crucial competency assessment enabling overseas qualified pharmacists to register and practice in Australia and pursue Australian skilled migration.",
            format = "Two papers (100 MCQs each: Paper 1 Chemistry/Physiology, Paper 2 Pharmaceutics/Therapeutics)",
            validity = "Certificate valid for 3 years towards AHPRA provisional registration",
            coachingSupport = listOf("Comprehensive 2-paper curriculum syllabus review", "Australian clinical pharmacy practice standards", "AHPRA initial filing guidance")
        )
    )

    val destinations = listOf(
        DestinationItem(
            id = "middle-east",
            country = "United Arab Emirates & Gulf Cooperation Council",
            region = "Middle East (UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait)",
            flags = "🇦🇪 🇸🇦 🇴🇲 🇶🇦",
            summary = "Tax-free compensation packages, tax-free allowances, modern hospital infrastructure, and swift licensing-to-departure processing (averaging 60-90 days).",
            popularRoles = listOf("ICU & OT Nurses", "Specialist Doctors", "Hospital Pharmacists", "Radiology Technicians", "Physiotherapists"),
            regulatoryBody = "DHA / MOH / HAAD / SCFHS / OMSB / DHP",
            keyBenefits = listOf("Tax-free salaries with end-of-service gratuity", "Furnished accommodation or housing allowance", "Annual round-trip air tickets & medical coverage", "Family sponsorship support"),
            visaCategory = "Employment Residence Visa (Hospital Sponsored)"
        ),
        DestinationItem(
            id = "usa-canada",
            country = "United States & Canada",
            region = "North America",
            flags = "🇺🇸 🇨🇦",
            summary = "Premier clinical advancement, global standard salaries, and clear immigration pathways including EB-3 Immigrant Visas (Green Card) for Registered Nurses.",
            popularRoles = listOf("Registered Nurses (NCLEX qualified)", "Specialist Medical Doctors", "Clinical Research Technologists"),
            regulatoryBody = "State Boards of Nursing, CGFNS, ECFMG, NNAS",
            keyBenefits = listOf("Permanent Residency (EB-3 Green Card) sponsorship for nurses", "Competitive clinical wages ($35 - $55+ / hour)", "Comprehensive 401(k), health and dental insurance", "Direct path to citizenship"),
            visaCategory = "EB-3 Immigrant Visa / H-1B / Permanent Resident"
        ),
        DestinationItem(
            id = "ireland-uk",
            country = "Ireland & United Kingdom",
            region = "Europe",
            flags = "🇮🇪 🇬🇧",
            summary = "Direct placement in state health services (HSE Ireland and NHS UK trusts) with clear adaptation courses, Critical Skills Employment Permits, and family reunion.",
            popularRoles = listOf("Staff Nurses (General, Midwifery, Critical Care)", "Consultant Physicians", "Radiographers", "Medical Lab Technicians"),
            regulatoryBody = "NMBI (Ireland) / NMC & GMC (UK) / CORU",
            keyBenefits = listOf("Critical Skills Employment Permit with 2-year Stamp 4 PR route", "Public health pension plan & continuous medical education (CME)", "Free schooling for children & public health coverage", "Relocation packages and initial accommodation allowances"),
            visaCategory = "Critical Skills Employment Permit / Skilled Worker Visa"
        ),
        DestinationItem(
            id = "australia-nz",
            country = "Australia & New Zealand",
            region = "Australasia",
            flags = "🇦🇺 🇳🇿",
            summary = "High quality of life, outstanding healthcare funding, and high-demand skilled migration quotas across regional and metropolitan public health networks.",
            popularRoles = listOf("Registered Nurses", "General Practitioners", "Clinical Pharmacists (KAPS)", "Diagnostic Radiographers", "Physiotherapists"),
            regulatoryBody = "AHPRA (Australia) / MCNZ / Nursing Council of NZ",
            keyBenefits = listOf("Subclass 186/482/189/190 permanent residency visas", "Work-life balance with standard 38-hour work weeks", "Relocation assistance bonuses for regional health areas", "World-leading public infrastructure and education"),
            visaCategory = "Skilled Independent / Employer Nominated Visa"
        )
    )

    val employerSolutions = listOf(
        EmployerSolution("1", "Healthcare Manpower Sourcing", "Direct pipeline to thousands of pre-qualified medical doctors, nurses, pharmacists, and allied technologists ready for overseas deployment."),
        EmployerSolution("2", "Candidate Screening & Profile Evaluation", "Multi-layer screening verifying clinical competencies, registration history, language fluency, and technical capabilities before shortlisting."),
        EmployerSolution("3", "Medical Professional Recruitment", "End-to-end management of interviews, clinical skill assessments, client interview scheduling, and contract negotiation."),
        EmployerSolution("4", "International Placement & DataFlow Verification", "Coordination of Primary Source Verification (DataFlow / TrueProfile) ensuring 100% credential legitimacy and institutional peace of mind."),
        EmployerSolution("5", "Training & Licensing Coordination", "In-house preparation for destination-specific health board exams (Prometric, DHA, MOH, NCLEX) accelerating readiness for deployment."),
        EmployerSolution("6", "Immigration & Career Pathway Support", "Assisting candidates and employer legal teams with embassy attestation, medical fitness clearances, visa processing, and relocation support."),
        EmployerSolution("7", "Long-term Employer Partnership", "Continuous pipeline development with low attrition, candidate onboarding support, and replacement guarantees during probation.")
    )

    val processSteps = listOf(
        ProcessStep("01", "Understand", "Understand employer requirements and candidate career goals.", "We analyze hospital workforce needs, required certifications, experience levels, and match them with candidates seeking growth abroad."),
        ProcessStep("02", "Identify", "Source and identify suitable healthcare professionals.", "Our recruitment specialists tap into verified healthcare databases, reviewing qualifications, clinical track records, and initial eligibility."),
        ProcessStep("03", "Prepare", "Support candidates with relevant training and licensing preparation.", "Structured coaching for Prometric, NCLEX, DHA, MOH, or KAPS examinations alongside DataFlow credential verification processing."),
        ProcessStep("04", "Place", "Connect qualified professionals with appropriate international opportunities.", "Interview coordination, offer letter management, salary negotiation, and credential alignment with destination hospital policies."),
        ProcessStep("05", "Support", "Provide immigration and career pathway guidance as applicable.", "Visa documentation, medical clearance guidance, departure briefing, and post-arrival settling support in the destination country.")
    )

    val coreValues = listOf(
        CoreValue("Professionalism", "Maintaining the highest clinical recruitment standards and transparent communication across all candidate and hospital interactions."),
        CoreValue("Integrity & Ethical Recruitment", "Strict adherence to fair recruitment principles, zero illegal sub-agent involvement, and honest regulatory advisory."),
        CoreValue("Candidate Empowerment", "Equipping doctors, nurses, and allied workers with the knowledge, test-taking mastery, and confidence to succeed internationally."),
        CoreValue("Client Commitment", "Reliable, SLA-driven manpower solutions that reduce clinical vacancy rates and maintain high standards of patient care."),
        CoreValue("Global Career Development", "Building long-term pathways that advance medical careers, enhance financial stability, and enrich global healthcare systems.")
    )

    fun calculateEligibility(profession: String, experience: String, destination: String): EligibilityResult {
        var exam = "DHA / MOH Prometric"
        var timeline = "60 - 90 Days"
        var salary = "AED 7,000 - 15,000 / month (Tax-Free) + Housing Allowance"
        var requirements = listOf(
            "Valid Nursing / Medical Degree with Transcripts",
            "Minimum 2 years continuous clinical hospital experience",
            "Primary Source Verification (DataFlow PSV Report)",
            "Certificate of Good Standing from home state council"
        )

        when {
            destination.contains("USA") -> {
                exam = if (profession.contains("Doctor")) "USMLE Step 1 & Step 2 CK" else "NCLEX-RN"
                timeline = "6 - 12 Months"
                salary = "$36 - $52 / hour + Overtime + Green Card Sponsorship"
                requirements = listOf(
                    "Recognized Baccalaureate Degree in Medicine or Nursing",
                    "Passing score on NCLEX-RN / USMLE",
                    "CGFNS Credentials Evaluation Service & VisaScreen certificate",
                    "Academic IELTS 6.5+ or OET Grade B"
                )
            }
            destination.contains("United Kingdom") || destination.contains("Ireland") -> {
                exam = if (profession.contains("Nurse")) "NMBI / NMC CBT & OSCE" else "IMC / GMC Registration"
                timeline = "4 - 6 Months"
                salary = "€36,000 - €48,000 / annum + Relocation Support"
                requirements = listOf(
                    "Recognized Healthcare Diploma or Bachelor Degree",
                    "OET score B in all sub-tests or IELTS Academic 7.0",
                    "CBT theory exam cleared",
                    "Critical Skills Employment Permit approval"
                )
            }
            destination.contains("Australia") -> {
                exam = if (profession.contains("Pharmacist")) "KAPS (Australia Pharmacy Council)" else "AHPRA Outcome Letter"
                timeline = "5 - 8 Months"
                salary = "AUD $75,000 - $110,000 / annum + Superannuation"
                requirements = listOf(
                    "AHPRA initial assessment",
                    "Pass in designated competency test (KAPS / NCLEX-RN)",
                    "Positive Skill Assessment via ANMAC / APC",
                    "Subclass 482 / 186 visa nomination"
                )
            }
        }

        return EligibilityResult(exam, timeline, salary, requirements)
    }

    // In-memory submissions store
    private val submittedApplications = mutableListOf<CandidateApplication>()
    private val submittedInquiries = mutableListOf<EmployerInquiry>()
    private val submittedBookings = mutableListOf<ConsultationBooking>()

    fun submitApplication(app: CandidateApplication): String {
        val refId = "NPGC-APP-${UUID.randomUUID().toString().take(6).uppercase()}"
        submittedApplications.add(app.copy(id = refId))
        return refId
    }

    fun submitInquiry(inquiry: EmployerInquiry): String {
        val refId = "NPGC-EMP-${UUID.randomUUID().toString().take(6).uppercase()}"
        submittedInquiries.add(inquiry.copy(id = refId))
        return refId
    }

    fun submitBooking(booking: ConsultationBooking): String {
        val refId = "NPGC-CSL-${UUID.randomUUID().toString().take(6).uppercase()}"
        submittedBookings.add(booking.copy(id = refId))
        return refId
    }
}
