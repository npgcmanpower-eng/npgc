package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
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
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material.icons.filled.Assignment
import androidx.compose.material.icons.filled.AttachMoney
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Schedule
import androidx.compose.material.icons.filled.Shield
import androidx.compose.material.icons.filled.Sparkles
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.EligibilityResult
import com.example.ui.theme.EmeraldDark
import com.example.ui.theme.EmeraldLight
import com.example.ui.theme.EmeraldPrimary
import com.example.ui.theme.NavySurface
import com.example.ui.theme.TextPrimary
import com.example.ui.theme.TextSecondary

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EligibilityCalculatorScreen(
    selectedProfession: String,
    selectedExperience: String,
    selectedDestination: String,
    result: EligibilityResult,
    onProfessionChange: (String) -> Unit,
    onExperienceChange: (String) -> Unit,
    onDestinationChange: (String) -> Unit,
    onApplyWithPathway: (profession: String, destination: String, exam: String) -> Unit
) {
    val professions = listOf(
        "Doctor / Medical Officer",
        "Nurse / Nursing Specialist",
        "Pharmacist / Pharmaceutical",
        "Physiotherapist",
        "Medical Laboratory Technologist",
        "Radiographer / Imaging Specialist",
        "Allied Healthcare Specialist"
    )

    val experiences = listOf(
        "Less than 2 Years",
        "2 - 4 Years",
        "5 - 8 Years",
        "8+ Years (Senior / Consultant)"
    )

    val destinations = listOf(
        "Middle East (UAE, Saudi, Oman, Qatar)",
        "USA & Canada",
        "United Kingdom & Ireland",
        "Australia & New Zealand"
    )

    var expExpandedProf by remember { mutableStateOf(false) }
    var expExpandedExp by remember { mutableStateOf(false) }
    var expExpandedDest by remember { mutableStateOf(false) }

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .testTag("eligibility_calculator_screen"),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Header
        item {
            Card(
                colors = CardDefaults.cardColors(containerColor = NavySurface),
                shape = RoundedCornerShape(16.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(18.dp)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Box(
                            modifier = Modifier
                                .size(36.dp)
                                .clip(CircleShape)
                                .background(EmeraldPrimary.copy(alpha = 0.25f)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Default.Sparkles,
                                contentDescription = null,
                                tint = EmeraldLight,
                                modifier = Modifier.size(20.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(10.dp))
                        Column {
                            Text(
                                text = "Global Licensure Calculator",
                                fontWeight = FontWeight.Bold,
                                fontSize = 18.sp,
                                color = Color.White
                            )
                            Text(
                                text = "Determine your prerequisite exam & eligibility in 60s",
                                fontSize = 12.sp,
                                color = Color(0xFFCBD5E1)
                            )
                        }
                    }
                }
            }
        }

        // Selection Controls Card
        item {
            Card(
                colors = CardDefaults.cardColors(containerColor = Color.White),
                shape = RoundedCornerShape(14.dp),
                elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Text(
                        text = "1. Your Healthcare Profile",
                        fontWeight = FontWeight.Bold,
                        fontSize = 15.sp,
                        color = TextPrimary
                    )

                    // Profession Dropdown
                    ExposedDropdownMenuBox(
                        expanded = expExpandedProf,
                        onExpandedChange = { expExpandedProf = !expExpandedProf }
                    ) {
                        OutlinedTextField(
                            value = selectedProfession,
                            onValueChange = {},
                            readOnly = true,
                            label = { Text("Clinical Profession") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expExpandedProf) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor()
                                .testTag("calc_profession_dropdown")
                        )
                        ExposedDropdownMenu(
                            expanded = expExpandedProf,
                            onDismissRequest = { expExpandedProf = false }
                        ) {
                            professions.forEach { prof ->
                                DropdownMenuItem(
                                    text = { Text(prof) },
                                    onClick = {
                                        onProfessionChange(prof)
                                        expExpandedProf = false
                                    }
                                )
                            }
                        }
                    }

                    // Experience Dropdown
                    ExposedDropdownMenuBox(
                        expanded = expExpandedExp,
                        onExpandedChange = { expExpandedExp = !expExpandedExp }
                    ) {
                        OutlinedTextField(
                            value = selectedExperience,
                            onValueChange = {},
                            readOnly = true,
                            label = { Text("Clinical Experience") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expExpandedExp) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor()
                                .testTag("calc_experience_dropdown")
                        )
                        ExposedDropdownMenu(
                            expanded = expExpandedExp,
                            onDismissRequest = { expExpandedExp = false }
                        ) {
                            experiences.forEach { exp ->
                                DropdownMenuItem(
                                    text = { Text(exp) },
                                    onClick = {
                                        onExperienceChange(exp)
                                        expExpandedExp = false
                                    }
                                )
                            }
                        }
                    }

                    // Destination Dropdown
                    ExposedDropdownMenuBox(
                        expanded = expExpandedDest,
                        onExpandedChange = { expExpandedDest = !expExpandedDest }
                    ) {
                        OutlinedTextField(
                            value = selectedDestination,
                            onValueChange = {},
                            readOnly = true,
                            label = { Text("Target Country / Region") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expExpandedDest) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor()
                                .testTag("calc_destination_dropdown")
                        )
                        ExposedDropdownMenu(
                            expanded = expExpandedDest,
                            onDismissRequest = { expExpandedDest = false }
                        ) {
                            destinations.forEach { dest ->
                                DropdownMenuItem(
                                    text = { Text(dest) },
                                    onClick = {
                                        onDestinationChange(dest)
                                        expExpandedDest = false
                                    }
                                )
                            }
                        }
                    }
                }
            }
        }

        // Live Calculated Result Card
        item {
            Card(
                colors = CardDefaults.cardColors(containerColor = Color.White),
                shape = RoundedCornerShape(14.dp),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .testTag("calc_result_card")
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "RECOMMENDED PATHWAY",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = EmeraldPrimary,
                        letterSpacing = 1.sp
                    )

                    Spacer(modifier = Modifier.height(6.dp))

                    Text(
                        text = result.examNeeded,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = NavySurface
                    )

                    Spacer(modifier = Modifier.height(12.dp))

                    // Timeline & Salary Pills
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Surface(
                            color = Color(0xFFEFF6FF),
                            shape = RoundedCornerShape(8.dp),
                            modifier = Modifier.weight(1f)
                        ) {
                            Row(
                                modifier = Modifier.padding(10.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Icon(
                                    imageVector = Icons.Default.Schedule,
                                    contentDescription = null,
                                    tint = Color(0xFF2563EB),
                                    modifier = Modifier.size(16.dp)
                                )
                                Spacer(modifier = Modifier.width(6.dp))
                                Column {
                                    Text("Timeline", fontSize = 10.sp, color = TextSecondary)
                                    Text(result.timeline, fontSize = 12.sp, fontWeight = FontWeight.Bold, color = TextPrimary)
                                }
                            }
                        }

                        Surface(
                            color = Color(0xFFECFDF5),
                            shape = RoundedCornerShape(8.dp),
                            modifier = Modifier.weight(1f)
                        ) {
                            Row(
                                modifier = Modifier.padding(10.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Icon(
                                    imageVector = Icons.Default.AttachMoney,
                                    contentDescription = null,
                                    tint = EmeraldDark,
                                    modifier = Modifier.size(16.dp)
                                )
                                Spacer(modifier = Modifier.width(6.dp))
                                Column {
                                    Text("Earnings", fontSize = 10.sp, color = TextSecondary)
                                    Text("Competitive", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = EmeraldDark)
                                }
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(10.dp))

                    Surface(
                        color = Color(0xFFF8FAFC),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(
                            text = "Est. Range: ${result.salaryEstimate}",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = TextPrimary,
                            modifier = Modifier.padding(8.dp)
                        )
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    Text(
                        text = "Document Checklist & Compliance:",
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold,
                        color = TextPrimary
                    )

                    Spacer(modifier = Modifier.height(6.dp))

                    result.requirements.forEach { req ->
                        Row(
                            modifier = Modifier.padding(vertical = 2.dp),
                            verticalAlignment = Alignment.Top
                        ) {
                            Icon(
                                imageVector = Icons.Default.CheckCircle,
                                contentDescription = null,
                                tint = EmeraldPrimary,
                                modifier = Modifier
                                    .size(14.dp)
                                    .padding(top = 2.dp)
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = req,
                                fontSize = 12.sp,
                                color = TextSecondary,
                                lineHeight = 16.sp
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(16.dp))

                    Button(
                        onClick = {
                            onApplyWithPathway(
                                selectedProfession,
                                selectedDestination,
                                result.examNeeded
                            )
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = EmeraldPrimary),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier
                            .fillMaxWidth()
                            .testTag("apply_from_calculator_button")
                    ) {
                        Text("Apply with This Pathway")
                        Spacer(modifier = Modifier.width(6.dp))
                        Icon(
                            imageVector = Icons.Default.ArrowForward,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                    }
                }
            }
        }
    }
}
