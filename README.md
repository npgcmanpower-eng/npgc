# New Path Global Career Manpower (Android)

Official mobile application for **New Path Global Career Manpower Pvt. Ltd.** — connecting healthcare professionals with global hospital careers, international licensing examinations, and immigration pathways.

## Brand Motto
> **RECRUIT • TRAIN • PLACE • EMPOWER**  
> *Connecting Healthcare Professionals with Global Opportunities*

## Application Architecture & Stack
- **Target Runtime**: Android (API 26 to 35)
- **Language**: Kotlin 2.0.21
- **UI Toolkit**: Jetpack Compose with Material Design 3 (M3)
- **Architecture**: MVVM (Model-View-ViewModel) + StateFlow
- **Theme**: Emerald & Navy clinical palette with light & dark mode support
- **Design System**: Material Design 3 Edge-to-Edge with full WindowInsets handling & Predictive Back support

## Ported Features
1. **01 Hero & Global Benchmarks**:
   - Executive corporate hero with visual asset support
   - Verified recruitment metrics (8+ Destinations, 12+ Exam pathways, 100% PSV compliance, 500+ Hospital roles)
   - Quick routing to Eligibility Calculator & Application Desk

2. **02 Medical Department Placement (Specialties)**:
   - 7 Clinical Disciplines: Doctors & Medical Officers, Nurses & Nursing Professionals, Pharmacists & Pharmaceutical, Physiotherapists & Rehab, Medical Laboratory Technologists, Radiography Specialists, Allied Healthcare
   - Dynamic search filtering by role, qualification, or discipline
   - Direct "Apply for Specialty" routing with prefilled data

3. **03 International Training & Licensing**:
   - Full regulatory profiles for DHA (Dubai), MOH (UAE), HAAD/DoH (Abu Dhabi), Saudi Prometric (SCFHS), Oman Prometric (OMSB), Qatar Prometric (DHP), NCLEX-RN (USA/Canada), USMLE (USA), and KAPS (Australia)
   - Exam formats, passing validity, and DataFlow PSV coaching support
   - "Prepare with NPGC" direct enrollment action

4. **04 Global Immigration Pathways**:
   - GCC / Middle East (tax-free packages, family sponsorship)
   - North America (EB-3 Green Card sponsorship for nurses, USMLE)
   - United Kingdom & Ireland (HSE/NHS placement, Critical Skills permit)
   - Australia & New Zealand (AHPRA registration, skilled migration visas)

5. **05 60-Second Eligibility & Licensure Calculator**:
   - Interactive 3-variable calculator (Profession, Experience, Destination)
   - Instant computation of prerequisite licensing exam, processing timeline, estimated salary package, and mandatory document checklist
   - Direct conversion action to Application Desk

6. **06 Corporate Application & Advisory Desk**:
   - 3 Dedicated Submissions: Healthcare Professional Application, Hospital Sourcing Inquiry, 1-on-1 Regulatory Advisory Session
   - Client-side validation with real-time error messages
   - Generates official Reference ID (e.g. `NPGC-APP-XXXXXX`) with copy-to-clipboard and confirmation dialog

7. **07 Corporate Approach & Compliance**:
   - 5-step structured process: Understand, Identify, Prepare, Place, Support
   - Code of Ethics & Core Values
   - Corporate headquarters and statutory disclaimer

## Project Structure
```
app/
├── src/main/
│   ├── AndroidManifest.xml
│   ├── java/com/example/
│   │   ├── MainActivity.kt
│   │   ├── data/
│   │   │   ├── Models.kt
│   │   │   └── CompanyRepository.kt
│   │   ├── ui/
│   │   │   ├── components/
│   │   │   │   ├── AppTopBar.kt
│   │   │   │   ├── BottomNavBar.kt
│   │   │   │   └── SubmissionSuccessDialog.kt
│   │   │   ├── screens/
│   │   │   │   ├── HomeScreen.kt
│   │   │   │   ├── SpecialtiesScreen.kt
│   │   │   │   ├── LicensingExamsScreen.kt
│   │   │   │   ├── DestinationsScreen.kt
│   │   │   │   ├── EligibilityCalculatorScreen.kt
│   │   │   │   ├── ApplicationDeskScreen.kt
│   │   │   │   └── AboutApproachScreen.kt
│   │   │   ├── theme/
│   │   │   │   ├── Color.kt
│   │   │   │   ├── Theme.kt
│   │   │   │   └── Type.kt
│   │   │   └── viewmodel/
│   │   │       └── NpgcViewModel.kt
│   └── res/
│       ├── drawable/
│       ├── mipmap-*/
│       └── values/
├── build.gradle.kts
└── proguard-rules.pro
```
