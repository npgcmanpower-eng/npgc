package com.example.ui.components

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Assignment
import androidx.compose.material.icons.filled.Calculate
import androidx.compose.material.icons.filled.FlightTakeoff
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.LocalHospital
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material.icons.filled.Send
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.unit.sp
import com.example.ui.theme.EmeraldDark
import com.example.ui.theme.EmeraldLight
import com.example.ui.theme.EmeraldPrimary
import com.example.ui.theme.NavySurface
import com.example.ui.viewmodel.NpgcScreen

@Composable
fun BottomNavBar(
    currentScreen: NpgcScreen,
    onSelectScreen: (NpgcScreen) -> Unit
) {
    val items = listOf(
        Triple(NpgcScreen.HOME, "Home", Icons.Default.Home),
        Triple(NpgcScreen.SPECIALTIES, "Specialties", Icons.Default.LocalHospital),
        Triple(NpgcScreen.EXAMS, "Licensing", Icons.Default.MenuBook),
        Triple(NpgcScreen.DESTINATIONS, "Pathways", Icons.Default.FlightTakeoff),
        Triple(NpgcScreen.APPLICATION_DESK, "Apply", Icons.Default.Send),
        Triple(NpgcScreen.ABOUT, "About", Icons.Default.Info)
    )

    NavigationBar(
        containerColor = NavySurface,
        contentColor = Color.White
    ) {
        items.forEach { (screen, label, icon) ->
            val isSelected = currentScreen == screen
            NavigationBarItem(
                selected = isSelected,
                onClick = { onSelectScreen(screen) },
                icon = {
                    Icon(
                        imageVector = icon,
                        contentDescription = label
                    )
                },
                label = {
                    Text(
                        text = label,
                        fontSize = 10.sp
                    )
                },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = EmeraldDark,
                    selectedTextColor = EmeraldLight,
                    unselectedIconColor = Color(0xFF94A3B8),
                    unselectedTextColor = Color(0xFF94A3B8),
                    indicatorColor = EmeraldLight
                ),
                modifier = Modifier.testTag("nav_item_${screen.name.lowercase()}")
            )
        }
    }
}
