import React, { useState } from 'react';
import { 
  Home, 
  Stethoscope, 
  BookOpen, 
  Plane, 
  Send, 
  Info, 
  Sparkles, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Building2, 
  Calendar, 
  Copy, 
  Check, 
  Wifi, 
  Battery, 
  ChevronRight,
  ShieldCheck,
  Award,
  Globe,
  Clock,
  Briefcase,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, MEDICAL_SPECIALTIES, LICENSING_EXAMS, DESTINATIONS, EMPLOYER_SOLUTIONS, PROCESS_STEPS, CORE_VALUES, STATS } from '../data/companyData';
import { CandidateProfession, DestinationRegion } from '../types';

interface AndroidSimulatorProps {
  onSwitchToWeb?: () => void;
}

export const AndroidSimulator: React.FC<AndroidSimulatorProps> = ({ onSwitchToWeb }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'specialties' | 'licensing' | 'destinations' | 'calculator' | 'desk' | 'about'>('home');
  const [deskSubTab, setDeskSubTab] = useState<'candidate' | 'employer' | 'consultation'>('candidate');
  
  // Search states
  const [specialtyQuery, setSpecialtyQuery] = useState('');
  const [examQuery, setExamQuery] = useState('');

  // Calculator State
  const [calcProf, setCalcProf] = useState<string>('Nurse / Nursing Specialist');
  const [calcExp, setCalcExp] = useState<string>('2 - 4 Years');
  const [calcDest, setCalcDest] = useState<string>('Middle East (UAE, Saudi, Oman, Qatar)');

  // Form States
  const [candName, setCandName] = useState('');
  const [candEmail, setCandEmail] = useState('');
  const [candPhone, setCandPhone] = useState('');
  const [candDegree, setCandDegree] = useState('');
  const [candExam, setCandExam] = useState('');
  const [candNotes, setCandNotes] = useState('');

  const [empOrg, setEmpOrg] = useState('');
  const [empPerson, setEmpPerson] = useState('');
  const [empEmail, setEmpEmail] = useState('');
  const [empPhone, setEmpPhone] = useState('');
  const [empRoles, setEmpRoles] = useState('');

  const [consName, setConsName] = useState('');
  const [consEmail, setConsEmail] = useState('');
  const [consPhone, setConsPhone] = useState('');
  const [consTopic, setConsTopic] = useState('Licensing Examination (Prometric / DHA / NCLEX)');

  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [submissionTitle, setSubmissionTitle] = useState('');
  const [copied, setCopied] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Filtered Specialties
  const filteredSpecialties = MEDICAL_SPECIALTIES.filter(s => 
    s.title.toLowerCase().includes(specialtyQuery.toLowerCase()) ||
    s.tagline.toLowerCase().includes(specialtyQuery.toLowerCase()) ||
    s.keyRoles.some(r => r.toLowerCase().includes(specialtyQuery.toLowerCase()))
  );

  // Filtered Exams
  const filteredExams = LICENSING_EXAMS.filter(e =>
    e.code.toLowerCase().includes(examQuery.toLowerCase()) ||
    e.name.toLowerCase().includes(examQuery.toLowerCase()) ||
    e.authority.toLowerCase().includes(examQuery.toLowerCase())
  );

  // Calculate recommendation
  const getCalcResult = () => {
    let exam = 'DHA / MOH Prometric';
    let timeline = '60 - 90 Days';
    let salary = 'AED 7,000 - 15,000 / month (Tax-Free) + Housing Allowance';
    let requirements = [
      'Valid Nursing / Medical Degree with Transcripts',
      'Minimum 2 years continuous clinical hospital experience',
      'Primary Source Verification (DataFlow PSV Report)',
      'Certificate of Good Standing from home state council'
    ];

    if (calcDest.includes('USA')) {
      exam = calcProf.includes('Doctor') ? 'USMLE Step 1 & Step 2 CK' : 'NCLEX-RN';
      timeline = '6 - 12 Months';
      salary = '$36 - $52 / hour + Overtime + Green Card Sponsorship';
      requirements = [
        'Recognized Baccalaureate Degree in Medicine or Nursing',
        'Passing score on NCLEX-RN / USMLE',
        'CGFNS Credentials Evaluation & VisaScreen certificate',
        'Academic IELTS 6.5+ or OET Grade B'
      ];
    } else if (calcDest.includes('United Kingdom') || calcDest.includes('Ireland')) {
      exam = calcProf.includes('Nurse') ? 'NMBI / NMC CBT & OSCE' : 'IMC / GMC Registration';
      timeline = '4 - 6 Months';
      salary = '€36,000 - €48,000 / annum + Relocation Support';
      requirements = [
        'Recognized Healthcare Diploma or Bachelor Degree',
        'OET score B in all sub-tests or IELTS Academic 7.0',
        'CBT theory exam cleared',
        'Critical Skills Employment Permit approval'
      ];
    } else if (calcDest.includes('Australia')) {
      exam = calcProf.includes('Pharmacist') ? 'KAPS (Australia Pharmacy Council)' : 'AHPRA Outcome Letter';
      timeline = '5 - 8 Months';
      salary = 'AUD $75,000 - $110,000 / annum + Superannuation';
      requirements = [
        'AHPRA initial assessment',
        'Pass in designated competency test (KAPS / NCLEX-RN)',
        'Positive Skill Assessment via ANMAC / APC',
        'Subclass 482 / 186 visa nomination'
      ];
    }

    return { exam, timeline, salary, requirements };
  };

  const calcResult = getCalcResult();

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candName || !candEmail || !candPhone || !candDegree) {
      setFormError('Please fill in all mandatory fields (*)');
      return;
    }
    setFormError(null);
    const ref = `NPGC-APP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setSubmittedRefId(ref);
    setSubmissionTitle('Candidate Application Dossier');
    setCandName('');
    setCandEmail('');
    setCandPhone('');
    setCandDegree('');
  };

  const handleEmployerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!empOrg || !empPerson || !empEmail || !empPhone) {
      setFormError('Please fill in all required institutional details (*)');
      return;
    }
    setFormError(null);
    const ref = `NPGC-EMP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setSubmittedRefId(ref);
    setSubmissionTitle('Hospital Manpower Inquiry');
    setEmpOrg('');
    setEmpPerson('');
    setEmpEmail('');
    setEmpPhone('');
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consName || !consEmail || !consPhone) {
      setFormError('Please provide your name, email and phone number (*)');
      return;
    }
    setFormError(null);
    const ref = `NPGC-CSL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setSubmittedRefId(ref);
    setSubmissionTitle('1-on-1 Regulatory Advisory Session');
    setConsName('');
    setConsEmail('');
    setConsPhone('');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-0 sm:p-6 font-sans">
      {/* Top Banner Control on Desktop */}
      <div className="w-full max-w-md hidden sm:flex items-center justify-between mb-3 px-2 text-white">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase text-slate-300">
            Android App (Kotlin & Jetpack Compose)
          </span>
        </div>
        {onSwitchToWeb && (
          <button
            onClick={onSwitchToWeb}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 px-3 py-1 rounded-full font-medium transition-colors"
          >
            🌐 Web Portal View
          </button>
        )}
      </div>

      {/* Responsive App Frame (Full-screen on Mobile, Phone Mock on Desktop) */}
      <div className="w-full sm:max-w-md bg-white sm:rounded-[38px] shadow-2xl sm:border-4 sm:border-slate-800 overflow-hidden flex flex-col h-screen sm:h-[844px] relative">
        {/* Android Status Bar */}
        <div className="bg-[#0a2540] text-slate-200 px-4 sm:px-6 pt-2 pb-1.5 flex items-center justify-between text-xs select-none">
          <span className="font-semibold tracking-tight text-[11px]">9:41</span>
          <div className="hidden sm:block w-28 h-4 bg-slate-950 rounded-full mx-auto" />
          <div className="flex items-center gap-1.5 text-slate-300">
            {onSwitchToWeb && (
              <button
                onClick={onSwitchToWeb}
                className="sm:hidden text-[10px] bg-slate-800/80 text-emerald-400 px-2 py-0.5 rounded border border-slate-700 mr-2"
              >
                Web
              </button>
            )}
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* M3 App Top Bar */}
        <div className="bg-[#0a2540] text-white px-4 py-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-white leading-tight">
                New Path Global
              </h1>
              <p className="text-[9px] text-emerald-400 font-semibold tracking-wider uppercase">
                RECRUIT • TRAIN • PLACE • EMPOWER
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`p-1.5 rounded-lg transition-colors ${activeTab === 'calculator' ? 'bg-emerald-500 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
              title="Eligibility Calculator"
            >
              <Calculator className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('desk')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors"
            >
              <Send className="w-3 h-3" />
              <span>Apply</span>
            </button>
          </div>
        </div>

        {/* App Scrollable Content Canvas */}
        <div className="flex-1 overflow-y-auto bg-[#f8fafc] text-slate-800">
          {/* HOME SCREEN */}
          {activeTab === 'home' && (
            <div className="pb-6">
              {/* Hero Banner */}
              <div className="relative bg-[#0a2540] text-white p-5 overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block bg-emerald-500/25 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 tracking-wide uppercase">
                    GLOBAL TALENT • HEALTHIER TOMORROW
                  </span>
                  <h2 className="text-xl font-extrabold leading-tight mb-2">
                    Global Healthcare Recruitment & Placement
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Placing doctors, nurses, pharmacists & allied specialists across the Middle East, UK, Ireland, USA & Australia.
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('calculator')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Check 60s Eligibility</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('desk')}
                      className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Recruitment Benchmarks Grid */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Recruitment Metrics
                  </h3>
                  <span className="text-[10px] text-emerald-600 font-semibold">100% PSV Compliant</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {STATS.map((s, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="text-lg font-black text-emerald-600 leading-none mb-1">{s.value}</div>
                      <div className="text-xs font-bold text-slate-800 leading-tight">{s.label}</div>
                      <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fast Feature Links */}
              <div className="px-4 space-y-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Core Modules
                </h3>
                <div
                  onClick={() => setActiveTab('specialties')}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3 cursor-pointer hover:border-emerald-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900">Medical Disciplines</div>
                    <div className="text-[11px] text-slate-500 truncate">7 clinical fields: Doctors, Nurses, Pharma & Allied</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </div>

                <div
                  onClick={() => setActiveTab('licensing')}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3 cursor-pointer hover:border-emerald-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900">Licensing & Board Exams</div>
                    <div className="text-[11px] text-slate-500 truncate">Prometric, DHA, MOH, HAAD, NCLEX, USMLE & KAPS</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </div>

                <div
                  onClick={() => setActiveTab('destinations')}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3 cursor-pointer hover:border-emerald-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900">Global Destination Pathways</div>
                    <div className="text-[11px] text-slate-500 truncate">Gulf Cooperation Council, USA, UK, Ireland, Australia</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </div>
              </div>

              {/* 5-Step Process */}
              <div className="mt-5 bg-[#0f172a] text-white p-4">
                <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  Structured Deployment
                </div>
                <h4 className="text-sm font-bold text-white mb-3">
                  5-Step Global Healthcare Career Pathway
                </h4>
                <div className="space-y-3">
                  {PROCESS_STEPS.map(s => (
                    <div key={s.step} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {s.step}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white">{s.name}</div>
                        <div className="text-[11px] text-slate-400 leading-tight">{s.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SPECIALTIES SCREEN */}
          {activeTab === 'specialties' && (
            <div className="p-4 space-y-3 pb-8">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">02 • CLINICAL DISCIPLINES</span>
                <h2 className="text-lg font-bold text-slate-900">Medical Department Placement</h2>
                <p className="text-xs text-slate-600">Accredited hospital roles for clinicians and allied staff.</p>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search doctor, nurse, qualification..."
                  value={specialtyQuery}
                  onChange={e => setSpecialtyQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-emerald-500"
                />
              </div>

              <div className="space-y-3">
                {filteredSpecialties.map(specialty => (
                  <div key={specialty.id} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-xs font-bold text-slate-900">{specialty.title}</h3>
                      <span className="text-[9px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full shrink-0">
                        Accredited
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">{specialty.description}</p>
                    
                    <div className="text-[10px] font-semibold text-slate-400 mb-1 uppercase tracking-wide">Key Roles:</div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {specialty.keyRoles.slice(0, 4).map((role, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded">
                          {role}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setCandNotes(`Interested in specialty: ${specialty.title}`);
                        setActiveTab('desk');
                      }}
                      className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold py-1.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Apply for this Field</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LICENSING EXAMS SCREEN */}
          {activeTab === 'licensing' && (
            <div className="p-4 space-y-3 pb-8">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">03 • TRAINING & LICENSING</span>
                <h2 className="text-lg font-bold text-slate-900">International Licensing Exams</h2>
                <p className="text-xs text-slate-600">Prometric, DHA, MOH, NCLEX, USMLE & KAPS preparation suites.</p>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search DHA, Prometric, NCLEX..."
                  value={examQuery}
                  onChange={e => setExamQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-emerald-500"
                />
              </div>

              <div className="space-y-3">
                {filteredExams.map(exam => (
                  <div key={exam.id} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#0a2540] text-white text-[10px] font-extrabold px-2 py-0.5 rounded">
                          {exam.code}
                        </span>
                        <h3 className="text-xs font-bold text-slate-900 truncate">{exam.name}</h3>
                      </div>
                    </div>
                    <div className="text-[10px] text-emerald-600 font-medium mb-1.5">{exam.authority} • {exam.region}</div>
                    <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">{exam.description}</p>
                    
                    <div className="bg-slate-50 p-2 rounded text-[10px] text-slate-600 space-y-1 mb-2.5">
                      <div><strong className="text-slate-700">Format:</strong> {exam.format}</div>
                      <div><strong className="text-slate-700">Validity:</strong> {exam.validity}</div>
                    </div>

                    <button
                      onClick={() => {
                        setCandExam(exam.code);
                        setCandNotes(`Enrolling for preparation coaching for: ${exam.code}`);
                        setActiveTab('desk');
                      }}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-1.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Prepare for {exam.code}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DESTINATIONS SCREEN */}
          {activeTab === 'destinations' && (
            <div className="p-4 space-y-3 pb-8">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">04 • OVERSEAS PATHWAYS</span>
                <h2 className="text-lg font-bold text-slate-900">Global Hospital Pathways</h2>
                <p className="text-xs text-slate-600">Tax-free compensation, immigration routes and employer sponsorship.</p>
              </div>

              <div className="space-y-3">
                {DESTINATIONS.map(d => (
                  <div key={d.id} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{d.flag}</span>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 leading-tight">{d.country}</h3>
                        <span className="text-[10px] text-emerald-600 font-medium">{d.region}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">{d.summary}</p>
                    
                    <div className="bg-slate-50 p-2 rounded text-[10px] space-y-1 mb-2.5 text-slate-700">
                      <div><strong className="text-slate-800">Visa Category:</strong> {d.visaCategory}</div>
                      <div><strong className="text-slate-800">Regulatory:</strong> {d.regulatoryBody}</div>
                    </div>

                    <button
                      onClick={() => {
                        setCandNotes(`Inquiring about hospital opportunities in ${d.country}`);
                        setActiveTab('desk');
                      }}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-1.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Explore {d.country.split('&')[0].trim()}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CALCULATOR SCREEN */}
          {activeTab === 'calculator' && (
            <div className="p-4 space-y-3 pb-8">
              <div className="bg-[#0a2540] text-white p-3.5 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-bold text-white">Global Licensure Calculator</h2>
                </div>
                <p className="text-[11px] text-slate-300">Determine your mandatory licensing prerequisites in 60 seconds.</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Clinical Profession</label>
                  <select
                    value={calcProf}
                    onChange={e => setCalcProf(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                  >
                    <option>Doctor / Medical Officer</option>
                    <option>Nurse / Nursing Specialist</option>
                    <option>Pharmacist / Pharmaceutical</option>
                    <option>Physiotherapist</option>
                    <option>Medical Laboratory Technologist</option>
                    <option>Radiographer / Imaging Specialist</option>
                    <option>Allied Healthcare Specialist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Clinical Experience</label>
                  <select
                    value={calcExp}
                    onChange={e => setCalcExp(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                  >
                    <option>Less than 2 Years</option>
                    <option>2 - 4 Years</option>
                    <option>5 - 8 Years</option>
                    <option>8+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Target Destination</label>
                  <select
                    value={calcDest}
                    onChange={e => setCalcDest(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                  >
                    <option>Middle East (UAE, Saudi, Oman, Qatar)</option>
                    <option>USA & Canada</option>
                    <option>United Kingdom & Ireland</option>
                    <option>Australia & New Zealand</option>
                  </select>
                </div>
              </div>

              {/* Live Result Card */}
              <div className="bg-white p-4 rounded-xl border-2 border-emerald-500 shadow-sm space-y-2.5">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">RECOMMENDED PATHWAY</span>
                <div className="text-base font-black text-slate-900">{calcResult.exam}</div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 p-2 rounded">
                    <div className="text-[10px] text-slate-400">Processing Timeline</div>
                    <div className="font-bold text-slate-800">{calcResult.timeline}</div>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded">
                    <div className="text-[10px] text-emerald-700">Salary Package</div>
                    <div className="font-bold text-emerald-800 text-[11px] truncate">Competitive</div>
                  </div>
                </div>

                <div className="text-[11px] bg-slate-50 p-2 rounded text-slate-700">
                  <strong className="text-slate-800">Compensation:</strong> {calcResult.salary}
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-700 uppercase">Mandatory Compliance Checklist:</div>
                  {calcResult.requirements.map((r, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setCandExam(calcResult.exam);
                    setCandNotes(`Pathway calculation for ${calcProf} to ${calcDest} (${calcResult.exam})`);
                    setActiveTab('desk');
                  }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 shadow-sm transition-colors mt-2"
                >
                  <span>Apply with This Verified Pathway</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* APPLICATION DESK SCREEN */}
          {activeTab === 'desk' && (
            <div className="p-4 space-y-3 pb-8">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">07 • CORPORATE DESK</span>
                <h2 className="text-lg font-bold text-slate-900">Application & Sourcing Desk</h2>
                <p className="text-xs text-slate-600">Direct transmission to NPGC overseas deployment directors.</p>
              </div>

              {/* Sub-tabs */}
              <div className="flex bg-slate-100 p-1 rounded-lg gap-1">
                <button
                  onClick={() => setDeskSubTab('candidate')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${deskSubTab === 'candidate' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Candidate
                </button>
                <button
                  onClick={() => setDeskSubTab('employer')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${deskSubTab === 'employer' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Hospital Sourcing
                </button>
                <button
                  onClick={() => setDeskSubTab('consultation')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${deskSubTab === 'consultation' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Advisory Session
                </button>
              </div>

              {formError && (
                <div className="bg-red-50 text-red-700 text-xs p-2.5 rounded-lg border border-red-200">
                  {formError}
                </div>
              )}

              {/* Candidate Form */}
              {deskSubTab === 'candidate' && (
                <form onSubmit={handleCandidateSubmit} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5">
                  <h3 className="text-xs font-bold text-slate-900">Healthcare Professional Registration</h3>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Full Legal Name *</label>
                    <input
                      type="text"
                      placeholder="Dr. / Nurse Jane Doe"
                      value={candName}
                      onChange={e => setCandName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={candEmail}
                      onChange={e => setCandEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      placeholder="+91 / +971..."
                      value={candPhone}
                      onChange={e => setCandPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Highest Degree / Council *</label>
                    <input
                      type="text"
                      placeholder="MBBS / B.Sc Nursing / Pharm.D"
                      value={candDegree}
                      onChange={e => setCandDegree(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Target Exam (if any)</label>
                    <input
                      type="text"
                      placeholder="DHA, NCLEX, Prometric..."
                      value={candExam}
                      onChange={e => setCandExam(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Notes / Career Goals</label>
                    <textarea
                      rows={2}
                      placeholder="Specify your preferred country, clinical department..."
                      value={candNotes}
                      onChange={e => setCandNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Dossier to NPGC Desk</span>
                  </button>
                </form>
              )}

              {/* Employer Form */}
              {deskSubTab === 'employer' && (
                <form onSubmit={handleEmployerSubmit} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5">
                  <h3 className="text-xs font-bold text-slate-900">Hospital Sourcing & Quota Request</h3>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Healthcare Organization *</label>
                    <input
                      type="text"
                      placeholder="e.g. Royal Specialty Hospital LLC"
                      value={empOrg}
                      onChange={e => setEmpOrg(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Contact Officer / Medical Director *</label>
                    <input
                      type="text"
                      placeholder="Dr. Ahmed / HR Manager"
                      value={empPerson}
                      onChange={e => setEmpPerson(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      placeholder="hr@hospital.com"
                      value={empEmail}
                      onChange={e => setEmpEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+971..."
                      value={empPhone}
                      onChange={e => setEmpPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Positions & Volume Needed</label>
                    <input
                      type="text"
                      placeholder="e.g. 15 ICU Nurses, 2 Cardiologists"
                      value={empRoles}
                      onChange={e => setEmpRoles(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0a2540] hover:bg-slate-800 text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Submit Institutional Request</span>
                  </button>
                </form>
              )}

              {/* Consultation Form */}
              {deskSubTab === 'consultation' && (
                <form onSubmit={handleConsultSubmit} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5">
                  <h3 className="text-xs font-bold text-slate-900">1-on-1 Regulatory Advisory Session</h3>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={consName}
                      onChange={e => setConsName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Email *</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={consEmail}
                      onChange={e => setConsEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      value={consPhone}
                      onChange={e => setConsPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Topic</label>
                    <select
                      value={consTopic}
                      onChange={e => setConsTopic(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800"
                    >
                      <option>Licensing Examination (Prometric / DHA / NCLEX)</option>
                      <option>Primary Source Verification (DataFlow)</option>
                      <option>Permanent Residency & Immigration Pathway</option>
                      <option>Hospital Placement Interview Prep</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Request Advisory Slot</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ABOUT SCREEN */}
          {activeTab === 'about' && (
            <div className="p-4 space-y-3 pb-8">
              <div className="bg-[#0a2540] text-white p-4 rounded-xl">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">OFFICIAL PROFILE</span>
                <h2 className="text-base font-extrabold text-white mt-1 leading-snug">{COMPANY_INFO.name}</h2>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{COMPANY_INFO.subMotto}</p>
                <div className="mt-3 inline-block bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                  {COMPANY_INFO.brandMotto}
                </div>
              </div>

              {/* Employer Solutions */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wide">Employer Solutions Portfolio</h3>
                {EMPLOYER_SOLUTIONS.slice(0, 4).map((s, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-slate-900">{s.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{s.description}</div>
                  </div>
                ))}
              </div>

              {/* Compliance & Contact */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-800">Corporate Headquarters & Desk</div>
                <div className="text-slate-600">Email: <span className="text-emerald-700 font-semibold">{COMPANY_INFO.email}</span></div>
                <div className="text-slate-600">{COMPANY_INFO.headquarters}</div>
                <div className="text-[10px] text-slate-400 border-t border-slate-100 pt-2 leading-relaxed">
                  {COMPANY_INFO.disclaimer}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* M3 Bottom Navigation Bar */}
        <div className="bg-[#0a2540] border-t border-slate-800 px-2 py-1.5 flex items-center justify-around select-none">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${activeTab === 'home' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Home className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Home</span>
          </button>

          <button
            onClick={() => setActiveTab('specialties')}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${activeTab === 'specialties' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Stethoscope className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Specialties</span>
          </button>

          <button
            onClick={() => setActiveTab('licensing')}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${activeTab === 'licensing' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Exams</span>
          </button>

          <button
            onClick={() => setActiveTab('destinations')}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${activeTab === 'destinations' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Plane className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Pathways</span>
          </button>

          <button
            onClick={() => setActiveTab('desk')}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${activeTab === 'desk' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Send className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Apply</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${activeTab === 'about' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Info className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">About</span>
          </button>
        </div>

        {/* Android Navigation Bar (Home indicator) */}
        <div className="bg-[#0a2540] pb-2 flex justify-center">
          <div className="w-32 h-1 bg-slate-600 rounded-full" />
        </div>
      </div>

      {/* Success Dialog Modal */}
      {submittedRefId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl text-center animate-in fade-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Application Received</h3>
            <p className="text-xs text-emerald-600 font-semibold mb-2">{submissionTitle}</p>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Your inquiry has been logged. Our international placement director will contact you within 24–48 business hours.
            </p>

            <div className="bg-slate-100 p-2.5 rounded-lg mb-4 text-left">
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">OFFICIAL REFERENCE ID</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">{submittedRefId}</div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(submittedRefId);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Ref'}</span>
              </button>
              <button
                onClick={() => setSubmittedRefId(null)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors"
              >
                Return to App
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
