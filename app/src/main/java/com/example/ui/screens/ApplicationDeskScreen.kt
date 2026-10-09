package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Business
import androidx.compose.material.icons.filled.CalendarMonth
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Error
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.Send
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
import androidx.compose.material3.TabRowDefaults
import androidx.compose.material3.TabRowDefaults.tabIndicatorOffset
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.EmeraldDark
import com.example.ui.theme.EmeraldPrimary
import com.example.ui.theme.NavySurface
import com.example.ui.theme.TextPrimary
import com.example.ui.theme.TextSecondary
import com.example.ui.viewmodel.CandidateFormState
import com.example.ui.viewmodel.ConsultationFormState
import com.example.ui.viewmodel.EmployerFormState

@Composable
fun ApplicationDeskScreen(
    selectedTab: Int,
    onTabSelect: (Int) -> Unit,
    candidateForm: CandidateFormState,
    employerForm: EmployerFormState,
    consultationForm: ConsultationFormState,
    errors: Map<String, String>,
    onUpdateCandidate: ((CandidateFormState) -> CandidateFormState) -> Unit,
    onUpdateEmployer: ((EmployerFormState) -> EmployerFormState) -> Unit,
    onUpdateConsultation: ((ConsultationFormState) -> ConsultationFormState) -> Unit,
    onSubmitCandidate: () -> Unit,
    onSubmitEmployer: () -> Unit,
    onSubmitConsultation: () -> Unit
) {
    val tabs = listOf("Candidate", "Hospital Sourcing", "Consultation")

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .testTag("application_desk_screen"),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Header
        item {
            Column {
                Text(
                    text = "07 • RECRUITMENT & ADVISORY DESK",
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    color = EmeraldPrimary,
                    letterSpacing = 1.sp
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Application & Inquiries",
                    fontSize = 22.sp,
                    fontWeight = FontWeight.Bold,
                    color = TextPrimary
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Direct submission to our medical placement coordinators and hospital client relations team.",
                    fontSize = 13.sp,
                    color = TextSecondary,
                    lineHeight = 18.sp
                )
            }
        }

        // Tabs
        item {
            TabRow(
                selectedTabIndex = selectedTab,
                containerColor = Color.White,
                contentColor = EmeraldPrimary,
                indicator = { tabPositions ->
                    TabRowDefaults.SecondaryIndicator(
                        Modifier.tabIndicatorOffset(tabPositions[selectedTab]),
                        color = EmeraldPrimary
                    )
                }
            ) {
                tabs.forEachIndexed { index, title ->
                    Tab(
                        selected = selectedTab == index,
                        onClick = { onTabSelect(index) },
                        text = {
                            Text(
                                text = title,
                                fontSize = 12.sp,
                                fontWeight = if (selectedTab == index) FontWeight.Bold else FontWeight.Medium
                            )
                        },
                        modifier = Modifier.testTag("desk_tab_$index")
                    )
                }
            }
        }

        // Form Content based on tab
        item {
            Card(
                colors = CardDefaults.cardColors(containerColor = Color.White),
                shape = RoundedCornerShape(14.dp),
                elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                when (selectedTab) {
                    0 -> CandidateFormView(
                        form = candidateForm,
                        errors = errors,
                        onUpdate = onUpdateCandidate,
                        onSubmit = onSubmitCandidate
                    )
                    1 -> EmployerFormView(
                        form = employerForm,
                        errors = errors,
                        onUpdate = onUpdateEmployer,
                        onSubmit = onSubmitEmployer
                    )
                    2 -> ConsultationFormView(
                        form = consultationForm,
                        errors = errors,
                        onUpdate = onUpdateConsultation,
                        onSubmit = onSubmitConsultation
                    )
                }
            }
        }
    }
}

@Composable
fun CandidateFormView(
    form: CandidateFormState,
    errors: Map<String, String>,
    onUpdate: ((CandidateFormState) -> CandidateFormState) -> Unit,
    onSubmit: () -> Unit
) {
    Column(
        modifier = Modifier.padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Text(
            text = "Healthcare Professional Application",
            fontWeight = FontWeight.Bold,
            fontSize = 16.sp,
            color = TextPrimary
        )

        // Full Name
        OutlinedTextField(
            value = form.fullName,
            onValueChange = { value -> onUpdate { it.copy(fullName = value) } },
            label = { Text("Full Legal Name *") },
            isError = errors.containsKey("fullName"),
            supportingText = errors["fullName"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("candidate_name_input"),
            singleLine = true
        )

        // Email
        OutlinedTextField(
            value = form.email,
            onValueChange = { value -> onUpdate { it.copy(email = value) } },
            label = { Text("Email Address *") },
            isError = errors.containsKey("email"),
            supportingText = errors["email"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("candidate_email_input"),
            singleLine = true
        )

        // Phone
        OutlinedTextField(
            value = form.phone,
            onValueChange = { value -> onUpdate { it.copy(phone = value) } },
            label = { Text("Mobile / WhatsApp Number *") },
            isError = errors.containsKey("phone"),
            supportingText = errors["phone"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("candidate_phone_input"),
            singleLine = true
        )

        // Profession
        OutlinedTextField(
            value = form.profession,
            onValueChange = { value -> onUpdate { it.copy(profession = value) } },
            label = { Text("Clinical Profession") },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("candidate_profession_input"),
            singleLine = true
        )

        // Highest Qualification
        OutlinedTextField(
            value = form.qualification,
            onValueChange = { value -> onUpdate { it.copy(qualification = value) } },
            label = { Text("Highest Medical / Clinical Degree *") },
            placeholder = { Text("e.g. MBBS, B.Sc. Nursing, Pharm.D, BPT") },
            isError = errors.containsKey("qualification"),
            supportingText = errors["qualification"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("candidate_qualification_input"),
            singleLine = true
        )

        // Experience
        OutlinedTextField(
            value = form.experienceYears,
            onValueChange = { value -> onUpdate { it.copy(experienceYears = value) } },
            label = { Text("Years of Clinical Experience") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        // Target Destination
        OutlinedTextField(
            value = form.targetDestination,
            onValueChange = { value -> onUpdate { it.copy(targetDestination = value) } },
            label = { Text("Preferred Destination Country / Region") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        // Licensing Exam / Status
        OutlinedTextField(
            value = form.targetExam,
            onValueChange = { value -> onUpdate { it.copy(targetExam = value) } },
            label = { Text("Target Exam (e.g. DHA, NCLEX, Prometric)") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        // Message
        OutlinedTextField(
            value = form.message,
            onValueChange = { value -> onUpdate { it.copy(message = value) } },
            label = { Text("Career Goals / Additional Notes") },
            modifier = Modifier.fillMaxWidth(),
            minLines = 3
        )

        Spacer(modifier = Modifier.height(4.dp))

        Button(
            onClick = onSubmit,
            colors = ButtonDefaults.buttonColors(containerColor = EmeraldPrimary),
            shape = RoundedCornerShape(8.dp),
            modifier = Modifier
                .fillMaxWidth()
                .testTag("candidate_submit_button")
        ) {
            Icon(imageVector = Icons.Default.Send, contentDescription = null, modifier = Modifier.size(16.dp))
            Spacer(modifier = Modifier.width(6.dp))
            Text("Submit Application Dossier")
        }
    }
}

@Composable
fun EmployerFormView(
    form: EmployerFormState,
    errors: Map<String, String>,
    onUpdate: ((EmployerFormState) -> EmployerFormState) -> Unit,
    onSubmit: () -> Unit
) {
    Column(
        modifier = Modifier.padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Text(
            text = "Hospital & Facility Manpower Sourcing",
            fontWeight = FontWeight.Bold,
            fontSize = 16.sp,
            color = TextPrimary
        )

        OutlinedTextField(
            value = form.organizationName,
            onValueChange = { value -> onUpdate { it.copy(organizationName = value) } },
            label = { Text("Hospital / Healthcare Facility Name *") },
            isError = errors.containsKey("organizationName"),
            supportingText = errors["organizationName"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("employer_org_input"),
            singleLine = true
        )

        OutlinedTextField(
            value = form.contactPerson,
            onValueChange = { value -> onUpdate { it.copy(contactPerson = value) } },
            label = { Text("Authorized Contact Person / HR Lead *") },
            isError = errors.containsKey("contactPerson"),
            supportingText = errors["contactPerson"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("employer_contact_input"),
            singleLine = true
        )

        OutlinedTextField(
            value = form.workEmail,
            onValueChange = { value -> onUpdate { it.copy(workEmail = value) } },
            label = { Text("Institutional Work Email *") },
            isError = errors.containsKey("workEmail"),
            supportingText = errors["workEmail"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("employer_email_input"),
            singleLine = true
        )

        OutlinedTextField(
            value = form.phone,
            onValueChange = { value -> onUpdate { it.copy(phone = value) } },
            label = { Text("Direct Telephone / Cell *") },
            isError = errors.containsKey("phone"),
            supportingText = errors["phone"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("employer_phone_input"),
            singleLine = true
        )

        OutlinedTextField(
            value = form.locationCountry,
            onValueChange = { value -> onUpdate { it.copy(locationCountry = value) } },
            label = { Text("Hospital Country / Location") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        OutlinedTextField(
            value = form.rolesNeeded,
            onValueChange = { value -> onUpdate { it.copy(rolesNeeded = value) } },
            label = { Text("Clinical Staff Categories Needed") },
            placeholder = { Text("e.g. ICU Staff Nurses, General Surgeons, Radiographers") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        OutlinedTextField(
            value = form.headcount,
            onValueChange = { value -> onUpdate { it.copy(headcount = value) } },
            label = { Text("Estimated Headcount Needed") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        OutlinedTextField(
            value = form.requirements,
            onValueChange = { value -> onUpdate { it.copy(requirements = value) } },
            label = { Text("Specific Staffing Criteria / Notes") },
            modifier = Modifier.fillMaxWidth(),
            minLines = 3
        )

        Spacer(modifier = Modifier.height(4.dp))

        Button(
            onClick = onSubmit,
            colors = ButtonDefaults.buttonColors(containerColor = NavySurface),
            shape = RoundedCornerShape(8.dp),
            modifier = Modifier
                .fillMaxWidth()
                .testTag("employer_submit_button")
        ) {
            Icon(imageVector = Icons.Default.Business, contentDescription = null, modifier = Modifier.size(16.dp))
            Spacer(modifier = Modifier.width(6.dp))
            Text("Submit Hospital Sourcing Inquiry")
        }
    }
}

@Composable
fun ConsultationFormView(
    form: ConsultationFormState,
    errors: Map<String, String>,
    onUpdate: ((ConsultationFormState) -> ConsultationFormState) -> Unit,
    onSubmit: () -> Unit
) {
    Column(
        modifier = Modifier.padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Text(
            text = "1-on-1 Regulatory Advisory Session",
            fontWeight = FontWeight.Bold,
            fontSize = 16.sp,
            color = TextPrimary
        )

        OutlinedTextField(
            value = form.fullName,
            onValueChange = { value -> onUpdate { it.copy(fullName = value) } },
            label = { Text("Your Full Name *") },
            isError = errors.containsKey("fullName"),
            supportingText = errors["fullName"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("consult_name_input"),
            singleLine = true
        )

        OutlinedTextField(
            value = form.email,
            onValueChange = { value -> onUpdate { it.copy(email = value) } },
            label = { Text("Email Address *") },
            isError = errors.containsKey("email"),
            supportingText = errors["email"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("consult_email_input"),
            singleLine = true
        )

        OutlinedTextField(
            value = form.phone,
            onValueChange = { value -> onUpdate { it.copy(phone = value) } },
            label = { Text("Phone / WhatsApp *") },
            isError = errors.containsKey("phone"),
            supportingText = errors["phone"]?.let { { Text(it, color = Color.Red) } },
            modifier = Modifier
                .fillMaxWidth()
                .testTag("consult_phone_input"),
            singleLine = true
        )

        OutlinedTextField(
            value = form.topic,
            onValueChange = { value -> onUpdate { it.copy(topic = value) } },
            label = { Text("Advisory Topic") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        OutlinedTextField(
            value = form.preferredDate,
            onValueChange = { value -> onUpdate { it.copy(preferredDate = value) } },
            label = { Text("Preferred Date (e.g. DD/MM/YYYY)") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true
        )

        OutlinedTextField(
            value = form.notes,
            onValueChange = { value -> onUpdate { it.copy(notes = value) } },
            label = { Text("Questions for Advisory Team") },
            modifier = Modifier.fillMaxWidth(),
            minLines = 2
        )

        Spacer(modifier = Modifier.height(4.dp))

        Button(
            onClick = onSubmit,
            colors = ButtonDefaults.buttonColors(containerColor = EmeraldPrimary),
            shape = RoundedCornerShape(8.dp),
            modifier = Modifier
                .fillMaxWidth()
                .testTag("consult_submit_button")
        ) {
            Icon(imageVector = Icons.Default.CalendarMonth, contentDescription = null, modifier = Modifier.size(16.dp))
            Spacer(modifier = Modifier.width(6.dp))
            Text("Request Consultation Slot")
        }
    }
}
