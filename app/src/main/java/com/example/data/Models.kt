package com.example.data

data class MedicalSpecialty(
    val id: String,
    val title: String,
    val tagline: String,
    val description: String,
    val keyRoles: List<String>,
    val qualifications: List<String>,
    val topDestinations: List<String>,
    val requiredExams: List<String>
)

data class LicensingExamItem(
    val id: String,
    val code: String,
    val name: String,
    val authority: String,
    val region: String,
    val targetProfession: String,
    val description: String,
    val format: String,
    val validity: String,
    val coachingSupport: List<String>
)

data class DestinationItem(
    val id: String,
    val country: String,
    val region: String,
    val flags: String,
    val summary: String,
    val popularRoles: List<String>,
    val regulatoryBody: String,
    val keyBenefits: List<String>,
    val visaCategory: String
)

data class EmployerSolution(
    val id: String,
    val title: String,
    val description: String
)

data class ProcessStep(
    val step: String,
    val name: String,
    val summary: String,
    val details: String
)

data class CoreValue(
    val title: String,
    val description: String
)

data class CompanyStat(
    val value: String,
    val label: String,
    val detail: String
)

data class CandidateApplication(
    val id: String,
    val fullName: String,
    val email: String,
    val phone: String,
    val profession: String,
    val qualification: String,
    val experienceYears: String,
    val targetDestination: String,
    val licensingStatus: String,
    val targetExam: String,
    val message: String,
    val timestamp: Long = System.currentTimeMillis()
)

data class EmployerInquiry(
    val id: String,
    val organizationName: String,
    val contactPerson: String,
    val designation: String,
    val workEmail: String,
    val phone: String,
    val facilityType: String,
    val locationCountry: String,
    val rolesNeeded: String,
    val headcount: String,
    val timeline: String,
    val requirements: String,
    val timestamp: Long = System.currentTimeMillis()
)

data class ConsultationBooking(
    val id: String,
    val fullName: String,
    val email: String,
    val phone: String,
    val topic: String,
    val preferredDate: String,
    val preferredTime: String,
    val notes: String,
    val timestamp: Long = System.currentTimeMillis()
)

data class EligibilityResult(
    val examNeeded: String,
    val timeline: String,
    val salaryEstimate: String,
    val requirements: List<String>
)
