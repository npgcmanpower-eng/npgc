package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.example.ui.components.AppTopBar
import com.example.ui.components.BottomNavBar
import com.example.ui.components.SubmissionSuccessDialog
import com.example.ui.screens.AboutApproachScreen
import com.example.ui.screens.ApplicationDeskScreen
import com.example.ui.screens.DestinationsScreen
import com.example.ui.screens.EligibilityCalculatorScreen
import com.example.ui.screens.HomeScreen
import com.example.ui.screens.LicensingExamsScreen
import com.example.ui.screens.SpecialtiesScreen
import com.example.ui.theme.NpgcTheme
import com.example.ui.theme.SlateBackground
import com.example.ui.viewmodel.NpgcScreen
import com.example.ui.viewmodel.NpgcViewModel

class MainActivity : ComponentActivity() {

    private val viewModel: NpgcViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            NpgcTheme {
                MainAppScreen(viewModel = viewModel)
            }
        }
    }
}

@Composable
fun MainAppScreen(viewModel: NpgcViewModel) {
    val uiState by viewModel.uiState.collectAsState()
    val snackbarHostState = remember { SnackbarHostState() }

    // Android Predictive Back / BackHandler support
    BackHandler(enabled = uiState.currentScreen != NpgcScreen.HOME) {
        viewModel.navigateTo(NpgcScreen.HOME)
    }

    Scaffold(
        topBar = {
            AppTopBar(
                onOpenCalculator = { viewModel.navigateTo(NpgcScreen.CALCULATOR) },
                onOpenDesk = { viewModel.navigateTo(NpgcScreen.APPLICATION_DESK) }
            )
        },
        bottomBar = {
            BottomNavBar(
                currentScreen = uiState.currentScreen,
                onSelectScreen = { screen -> viewModel.navigateTo(screen) }
            )
        },
        snackbarHost = { SnackbarHost(snackbarHostState) },
        containerColor = SlateBackground
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .background(SlateBackground)
        ) {
            when (uiState.currentScreen) {
                NpgcScreen.HOME -> HomeScreen(
                    onNavigate = { screen -> viewModel.navigateTo(screen) },
                    onOpenSpecialty = { title -> viewModel.applyFromSpecialty(title) }
                )
                NpgcScreen.SPECIALTIES -> SpecialtiesScreen(
                    searchQuery = uiState.specialtySearchQuery,
                    onSearchChange = { query -> viewModel.updateSpecialtySearch(query) },
                    onApplySpecialty = { title -> viewModel.applyFromSpecialty(title) }
                )
                NpgcScreen.EXAMS -> LicensingExamsScreen(
                    searchQuery = uiState.examSearchQuery,
                    onSearchChange = { query -> viewModel.updateExamSearch(query) },
                    onApplyExam = { examCode -> viewModel.applyFromExam(examCode) }
                )
                NpgcScreen.DESTINATIONS -> DestinationsScreen(
                    onSelectDestination = { dest -> viewModel.applyFromDestination(dest) }
                )
                NpgcScreen.CALCULATOR -> EligibilityCalculatorScreen(
                    selectedProfession = uiState.calcProfession,
                    selectedExperience = uiState.calcExperience,
                    selectedDestination = uiState.calcDestination,
                    result = uiState.calcResult,
                    onProfessionChange = { prof -> viewModel.updateCalcProfession(prof) },
                    onExperienceChange = { exp -> viewModel.updateCalcExperience(exp) },
                    onDestinationChange = { dest -> viewModel.updateCalcDestination(dest) },
                    onApplyWithPathway = { prof, dest, exam ->
                        viewModel.applyFromCalculator(prof, dest, exam)
                    }
                )
                NpgcScreen.APPLICATION_DESK -> ApplicationDeskScreen(
                    selectedTab = uiState.selectedDeskTab,
                    onTabSelect = { tabIndex -> viewModel.setDeskTab(tabIndex) },
                    candidateForm = uiState.candidateForm,
                    employerForm = uiState.employerForm,
                    consultationForm = uiState.consultationForm,
                    errors = uiState.formErrors,
                    onUpdateCandidate = { update -> viewModel.updateCandidateForm(update) },
                    onUpdateEmployer = { update -> viewModel.updateEmployerForm(update) },
                    onUpdateConsultation = { update -> viewModel.updateConsultationForm(update) },
                    onSubmitCandidate = { viewModel.submitCandidateApplication() },
                    onSubmitEmployer = { viewModel.submitEmployerInquiry() },
                    onSubmitConsultation = { viewModel.submitConsultation() }
                )
                NpgcScreen.ABOUT -> AboutApproachScreen()
            }
        }
    }

    // Submission Success Dialog
    uiState.submissionSuccessRefId?.let { refId ->
        SubmissionSuccessDialog(
            refId = refId,
            submissionType = uiState.submissionSuccessType,
            onDismiss = { viewModel.dismissSuccessDialog() }
        )
    }
}
