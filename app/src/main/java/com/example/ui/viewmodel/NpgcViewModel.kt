package com.example.ui.viewmodel

import androidx.lifecycle.ViewModel
import com.example.data.CandidateApplication
import com.example.data.CompanyRepository
import com.example.data.ConsultationBooking
import com.example.data.EligibilityResult
import com.example.data.EmployerInquiry
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

enum class NpgcScreen(val title: String) {
    HOME("Home"),
    SPECIALTIES("Medical Disciplines"),
    EXAMS("Licensing & Exams"),
    DESTINATIONS("Global Pathways"),
    CALCULATOR("Eligibility Calculator"),
    APPLICATION_DESK("Application Desk"),
    ABOUT("About NPGC")
}

data class CandidateFormState(
    val fullName: String = "",
    val email: String = "",
    val phone: String = "",
    val profession: String = "Nurse / Nursing Specialist",
    val qualification: String = "",
    val experienceYears: String = "2 - 5 Years",
    val targetDestination: String = "Middle East (UAE, Saudi, Oman, Qatar)",
    val licensingStatus: String = "Need Training & Guidance",
    val targetExam: String = "",
    val message: String = ""
)

data class EmployerFormState(
    val organizationName: String = "",
    val contactPerson: String = "",
    val designation: String = "",
    val workEmail: String = "",
    val phone: String = "",
    val facilityType: String = "Private Multi-Specialty Hospital",
    val locationCountry: String = "United Arab Emirates",
    val rolesNeeded: String = "Staff Nurses & Specialists",
    val headcount: String = "5 - 10 Candidates",
    val timeline: String = "1 - 3 Months",
    val requirements: String = ""
)

data class ConsultationFormState(
    val fullName: String = "",
    val email: String = "",
    val phone: String = "",
    val topic: String = "Licensing Examination (Prometric / DHA / NCLEX)",
    val preferredDate: String = "",
    val preferredTime: String = "Morning (10:00 AM - 1:00 PM IST)",
    val notes: String = ""
)

data class NpgcUiState(
    val currentScreen: NpgcScreen = NpgcScreen.HOME,
    val selectedDeskTab: Int = 0, // 0 = Candidate, 1 = Employer, 2 = Consultation
    val specialtySearchQuery: String = "",
    val examSearchQuery: String = "",
    val candidateForm: CandidateFormState = CandidateFormState(),
    val employerForm: EmployerFormState = EmployerFormState(),
    val consultationForm: ConsultationFormState = ConsultationFormState(),
    val formErrors: Map<String, String> = emptyMap(),
    val isSubmitting: Boolean = false,
    val submissionSuccessRefId: String? = null,
    val submissionSuccessType: String = "",
    // Calculator State
    val calcProfession: String = "Nurse / Nursing Specialist",
    val calcExperience: String = "2 - 4 Years",
    val calcDestination: String = "Middle East (UAE, Saudi, Oman, Qatar)",
    val calcResult: EligibilityResult = CompanyRepository.calculateEligibility(
        "Nurse / Nursing Specialist",
        "2 - 4 Years",
        "Middle East (UAE, Saudi, Oman, Qatar)"
    )
)

class NpgcViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(NpgcUiState())
    val uiState: StateFlow<NpgcUiState> = _uiState.asStateFlow()

    fun navigateTo(screen: NpgcScreen) {
        _uiState.update { it.copy(currentScreen = screen) }
    }

    fun setDeskTab(tabIndex: Int) {
        _uiState.update { it.copy(selectedDeskTab = tabIndex, formErrors = emptyMap()) }
    }

    fun updateSpecialtySearch(query: String) {
        _uiState.update { it.copy(specialtySearchQuery = query) }
    }

    fun updateExamSearch(query: String) {
        _uiState.update { it.copy(examSearchQuery = query) }
    }

    fun applyFromSpecialty(specialtyTitle: String) {
        _uiState.update {
            it.copy(
                currentScreen = NpgcScreen.APPLICATION_DESK,
                selectedDeskTab = 0,
                candidateForm = it.candidateForm.copy(
                    profession = specialtyTitle,
                    message = "Inquiring about opportunities in $specialtyTitle"
                )
            )
        }
    }

    fun applyFromExam(examCode: String) {
        _uiState.update {
            it.copy(
                currentScreen = NpgcScreen.APPLICATION_DESK,
                selectedDeskTab = 0,
                candidateForm = it.candidateForm.copy(
                    targetExam = examCode,
                    message = "Inquiring about preparation coaching for $examCode"
                )
            )
        }
    }

    fun applyFromDestination(destinationCountry: String) {
        _uiState.update {
            it.copy(
                currentScreen = NpgcScreen.APPLICATION_DESK,
                selectedDeskTab = 0,
                candidateForm = it.candidateForm.copy(
                    targetDestination = destinationCountry,
                    message = "Interested in healthcare placement in $destinationCountry"
                )
            )
        }
    }

    fun applyFromCalculator(profession: String, destination: String, exam: String) {
        _uiState.update {
            it.copy(
                currentScreen = NpgcScreen.APPLICATION_DESK,
                selectedDeskTab = 0,
                candidateForm = it.candidateForm.copy(
                    profession = profession,
                    targetDestination = destination,
                    targetExam = exam,
                    message = "Pre-screened via Eligibility Calculator for $exam pathway to $destination"
                )
            )
        }
    }

    // Calculator updates
    fun updateCalcProfession(profession: String) {
        _uiState.update {
            val result = CompanyRepository.calculateEligibility(profession, it.calcExperience, it.calcDestination)
            it.copy(calcProfession = profession, calcResult = result)
        }
    }

    fun updateCalcExperience(experience: String) {
        _uiState.update {
            val result = CompanyRepository.calculateEligibility(it.calcProfession, experience, it.calcDestination)
            it.copy(calcExperience = experience, calcResult = result)
        }
    }

    fun updateCalcDestination(destination: String) {
        _uiState.update {
            val result = CompanyRepository.calculateEligibility(it.calcProfession, it.calcExperience, destination)
            it.copy(calcDestination = destination, calcResult = result)
        }
    }

    // Candidate Form updates
    fun updateCandidateForm(update: (CandidateFormState) -> CandidateFormState) {
        _uiState.update { it.copy(candidateForm = update(it.candidateForm)) }
    }

    fun submitCandidateApplication() {
        val form = _uiState.value.candidateForm
        val errors = mutableMapOf<String, String>()
        if (form.fullName.isBlank()) errors["fullName"] = "Full name is required"
        if (form.email.isBlank() || !form.email.contains("@")) errors["email"] = "Valid email is required"
        if (form.phone.isBlank()) errors["phone"] = "Phone number is required"
        if (form.qualification.isBlank()) errors["qualification"] = "Qualification is required"

        if (errors.isNotEmpty()) {
            _uiState.update { it.copy(formErrors = errors) }
            return
        }

        val app = CandidateApplication(
            id = "",
            fullName = form.fullName,
            email = form.email,
            phone = form.phone,
            profession = form.profession,
            qualification = form.qualification,
            experienceYears = form.experienceYears,
            targetDestination = form.targetDestination,
            licensingStatus = form.licensingStatus,
            targetExam = form.targetExam,
            message = form.message
        )
        val refId = CompanyRepository.submitApplication(app)
        _uiState.update {
            it.copy(
                formErrors = emptyMap(),
                submissionSuccessRefId = refId,
                submissionSuccessType = "Candidate Application",
                candidateForm = CandidateFormState()
            )
        }
    }

    // Employer Form updates
    fun updateEmployerForm(update: (EmployerFormState) -> EmployerFormState) {
        _uiState.update { it.copy(employerForm = update(it.employerForm)) }
    }

    fun submitEmployerInquiry() {
        val form = _uiState.value.employerForm
        val errors = mutableMapOf<String, String>()
        if (form.organizationName.isBlank()) errors["organizationName"] = "Organization name is required"
        if (form.contactPerson.isBlank()) errors["contactPerson"] = "Contact person is required"
        if (form.workEmail.isBlank() || !form.workEmail.contains("@")) errors["workEmail"] = "Valid work email is required"
        if (form.phone.isBlank()) errors["phone"] = "Phone number is required"

        if (errors.isNotEmpty()) {
            _uiState.update { it.copy(formErrors = errors) }
            return
        }

        val inquiry = EmployerInquiry(
            id = "",
            organizationName = form.organizationName,
            contactPerson = form.contactPerson,
            designation = form.designation,
            workEmail = form.workEmail,
            phone = form.phone,
            facilityType = form.facilityType,
            locationCountry = form.locationCountry,
            rolesNeeded = form.rolesNeeded,
            headcount = form.headcount,
            timeline = form.timeline,
            requirements = form.requirements
        )
        val refId = CompanyRepository.submitInquiry(inquiry)
        _uiState.update {
            it.copy(
                formErrors = emptyMap(),
                submissionSuccessRefId = refId,
                submissionSuccessType = "Hospital Manpower Inquiry",
                employerForm = EmployerFormState()
            )
        }
    }

    // Consultation updates
    fun updateConsultationForm(update: (ConsultationFormState) -> ConsultationFormState) {
        _uiState.update { it.copy(consultationForm = update(it.consultationForm)) }
    }

    fun submitConsultation() {
        val form = _uiState.value.consultationForm
        val errors = mutableMapOf<String, String>()
        if (form.fullName.isBlank()) errors["fullName"] = "Full name is required"
        if (form.email.isBlank() || !form.email.contains("@")) errors["email"] = "Valid email is required"
        if (form.phone.isBlank()) errors["phone"] = "Phone number is required"

        if (errors.isNotEmpty()) {
            _uiState.update { it.copy(formErrors = errors) }
            return
        }

        val booking = ConsultationBooking(
            id = "",
            fullName = form.fullName,
            email = form.email,
            phone = form.phone,
            topic = form.topic,
            preferredDate = form.preferredDate,
            preferredTime = form.preferredTime,
            notes = form.notes
        )
        val refId = CompanyRepository.submitBooking(booking)
        _uiState.update {
            it.copy(
                formErrors = emptyMap(),
                submissionSuccessRefId = refId,
                submissionSuccessType = "Consultation Request",
                consultationForm = ConsultationFormState()
            )
        }
    }

    fun dismissSuccessDialog() {
        _uiState.update { it.copy(submissionSuccessRefId = null, submissionSuccessType = "") }
    }
}
