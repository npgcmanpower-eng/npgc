import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, User, Clock, FileUp, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CandidateProfession, DestinationRegion, LicensingStatus } from '../types';

interface ContactSectionProps {
  initialTab?: 'candidate' | 'employer' | 'consultation';
  prefilledSpecialty?: string;
  prefilledExam?: string;
  prefilledDestination?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialTab = 'candidate',
  prefilledSpecialty,
  prefilledExam,
  prefilledDestination
}) => {
  const [activeTab, setActiveTab] = useState<'candidate' | 'employer' | 'consultation'>(initialTab);

  // Candidate Form State
  const [candidateForm, setCandidateForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: (prefilledSpecialty || 'Nurse / Nursing Specialist') as CandidateProfession,
    qualification: '',
    experienceYears: '2 - 5 Years',
    targetDestination: (prefilledDestination || 'Middle East (UAE, Saudi, Oman, Qatar)') as DestinationRegion,
    licensingStatus: 'Need Training & Guidance' as LicensingStatus,
    targetExam: prefilledExam || '',
    message: '',
    resumeFileName: ''
  });

  // Employer Form State
  const [employerForm, setEmployerForm] = useState({
    organizationName: '',
    contactPerson: '',
    designation: '',
    workEmail: '',
    phone: '',
    facilityType: 'Private Multi-Specialty Hospital',
    locationCountry: 'United Arab Emirates',
    rolesNeeded: 'Staff Nurses & Specialists',
    headcount: '5 - 10 Candidates',
    timeline: '1 - 3 Months',
    requirements: ''
  });

  // Consultation Booking State
  const [consultForm, setConsultForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: 'Licensing Examination (Prometric / DHA / NCLEX)',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM IST)',
    notes: ''
  });

  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    tab: 'candidate' | 'employer' | 'consultation';
    email: string;
    name: string;
  } | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  // If props update
  React.useEffect(() => {
    if (prefilledSpecialty) {
      setActiveTab('candidate');
      setCandidateForm((prev) => ({ ...prev, message: `Inquiring for specialty: ${prefilledSpecialty}` }));
    }
    if (prefilledExam) {
      setActiveTab('candidate');
      setCandidateForm((prev) => ({ ...prev, targetExam: prefilledExam }));
    }
    if (prefilledDestination) {
      setActiveTab('candidate');
      setCandidateForm((prev) => ({ ...prev, message: `Preferred Destination: ${prefilledDestination}` }));
    }
  }, [prefilledSpecialty, prefilledExam, prefilledDestination]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!candidateForm.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!candidateForm.email.trim() || !validateEmail(candidateForm.email)) newErrors.email = 'Valid email is required';
    if (!candidateForm.phone.trim()) newErrors.phone = 'Phone / WhatsApp is required';
    if (!candidateForm.qualification.trim()) newErrors.qualification = 'Highest Qualification is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const refCode = `NPG-CAND-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedData({
      referenceId: refCode,
      tab: 'candidate',
      email: candidateForm.email,
      name: candidateForm.fullName
    });
  };

  const handleEmployerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!employerForm.organizationName.trim()) newErrors.organizationName = 'Hospital / Organization Name is required';
    if (!employerForm.contactPerson.trim()) newErrors.contactPerson = 'Contact Person Name is required';
    if (!employerForm.workEmail.trim() || !validateEmail(employerForm.workEmail)) newErrors.workEmail = 'Valid work email is required';
    if (!employerForm.phone.trim()) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const refCode = `NPG-HOSP-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedData({
      referenceId: refCode,
      tab: 'employer',
      email: employerForm.workEmail,
      name: employerForm.contactPerson
    });
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!consultForm.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!consultForm.email.trim() || !validateEmail(consultForm.email)) newErrors.email = 'Valid email is required';
    if (!consultForm.phone.trim()) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const refCode = `NPG-ADVISORY-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedData({
      referenceId: refCode,
      tab: 'consultation',
      email: consultForm.email,
      name: consultForm.fullName
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMockResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCandidateForm({ ...candidateForm, resumeFileName: e.target.files[0].name });
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Section 07 · Direct Engagement
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight text-balance">
            Contact & Application Desk
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Whether you are a healthcare professional planning your global licensing exam or a hospital administration seeking qualified clinical staffing, our advisory team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Hub */}
          <div className="lg:col-span-8 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            
            {/* Form Mode Tabs (Interactive Segmented Control) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('candidate');
                  setSubmittedData(null);
                  setErrors({});
                }}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'candidate'
                    ? 'bg-white text-[#0a2540] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#0e3b75]" />
                <span>Healthcare Candidates</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('employer');
                  setSubmittedData(null);
                  setErrors({});
                }}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'employer'
                    ? 'bg-white text-[#0a2540] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#0e3b75]" />
                <span>Healthcare Employers</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('consultation');
                  setSubmittedData(null);
                  setErrors({});
                }}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'consultation'
                    ? 'bg-white text-[#0a2540] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Book 1-on-1 Advisory</span>
              </button>
            </div>

            {/* Submission Confirmation Card */}
            {submittedData ? (
              <div className="bg-white border border-emerald-200 rounded-xl p-6 sm:p-8 text-center animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Submission Successfully Received
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540]">
                  Thank you, {submittedData.name}!
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Your request has been logged under Tracking Reference ID:
                </p>
                <div className="mt-3 inline-block px-4 py-1.5 bg-slate-100 rounded-lg text-sm font-mono font-bold text-[#0e3b75] border border-slate-300">
                  {submittedData.referenceId}
                </div>

                <div className="mt-6 text-xs text-slate-500 max-w-md mx-auto leading-relaxed border-t border-slate-100 pt-4">
                  Our healthcare licensing and recruitment officers will review your dossier and contact you via email at <span className="font-semibold text-slate-700">{submittedData.email}</span> within 24 business hours.
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Inquiry%20Ref%3A%20${submittedData.referenceId}`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#0e3b75] hover:bg-[#092955] rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Supporting Documents via Email</span>
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* 1. Candidate Application Form */}
                {activeTab === 'candidate' && (
                  <form onSubmit={handleCandidateSubmit} className="space-y-4">
                    <div className="text-xs text-slate-500 font-medium pb-2 border-b border-slate-200">
                      Submit your credentials for overseas healthcare placement and international licensing assistance.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={candidateForm.fullName}
                          onChange={(e) => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
                          placeholder="e.g. Dr. Priya Sharma / Alex Mathew"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={candidateForm.email}
                          onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                          placeholder="candidate@example.com"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={candidateForm.phone}
                          onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                          placeholder="+91 / +971 XXXXX XXXXX"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Professional Category *
                        </label>
                        <select
                          value={candidateForm.profession}
                          onChange={(e) => setCandidateForm({ ...candidateForm, profession: e.target.value as CandidateProfession })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="Doctor / Medical Officer">Doctor / Medical Officer</option>
                          <option value="Nurse / Nursing Specialist">Nurse / Nursing Specialist</option>
                          <option value="Pharmacist / Pharmaceutical">Pharmacist / Pharmaceutical</option>
                          <option value="Physiotherapist">Physiotherapist</option>
                          <option value="Medical Laboratory Technologist">Medical Laboratory Technologist</option>
                          <option value="Radiographer / Imaging Specialist">Radiographer / Imaging Specialist</option>
                          <option value="Allied Healthcare Specialist">Allied Healthcare Specialist</option>
                          <option value="Dentist / Dental Specialist">Dentist / Dental Specialist</option>
                          <option value="Other Healthcare Professional">Other Healthcare Professional</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Highest Qualification *
                        </label>
                        <input
                          type="text"
                          required
                          value={candidateForm.qualification}
                          onChange={(e) => setCandidateForm({ ...candidateForm, qualification: e.target.value })}
                          placeholder="e.g. MBBS / B.Sc Nursing / Pharm.D"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.qualification && <p className="text-[11px] text-red-600 mt-1">{errors.qualification}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Clinical Experience
                        </label>
                        <select
                          value={candidateForm.experienceYears}
                          onChange={(e) => setCandidateForm({ ...candidateForm, experienceYears: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="Fresh Graduate / < 1 Year">Fresh Graduate / &lt; 1 Year</option>
                          <option value="1 - 2 Years">1 - 2 Years</option>
                          <option value="2 - 5 Years">2 - 5 Years (Meets Middle East Eligibility)</option>
                          <option value="5 - 10 Years">5 - 10 Years (Senior / Specialist)</option>
                          <option value="10+ Years">10+ Years (Consultant / Head of Dept)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Target Destination
                        </label>
                        <select
                          value={candidateForm.targetDestination}
                          onChange={(e) => setCandidateForm({ ...candidateForm, targetDestination: e.target.value as DestinationRegion })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="Middle East (UAE, Saudi, Oman, Qatar)">Middle East (UAE, Saudi, Oman, Qatar)</option>
                          <option value="USA & Canada">USA & Canada</option>
                          <option value="United Kingdom & Ireland">United Kingdom & Ireland</option>
                          <option value="Australia & New Zealand">Australia & New Zealand</option>
                          <option value="Open to Any Destination">Open to Any Destination</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Licensing Exam Status
                        </label>
                        <select
                          value={candidateForm.licensingStatus}
                          onChange={(e) => setCandidateForm({ ...candidateForm, licensingStatus: e.target.value as LicensingStatus })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="Need Training & Guidance">Need Training & Guidance (Full Coaching)</option>
                          <option value="Already Licensed / Passed Exam">Already Licensed / Passed Exam (Ready for Placement)</option>
                          <option value="Currently Preparing / Studying">Currently Preparing / Studying</option>
                          <option value="Exam Scheduled">Exam Scheduled within next 30 days</option>
                          <option value="Not Started Yet">Not Started Yet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Specific Exam (Optional)
                        </label>
                        <input
                          type="text"
                          value={candidateForm.targetExam}
                          onChange={(e) => setCandidateForm({ ...candidateForm, targetExam: e.target.value })}
                          placeholder="e.g. DHA, MOH, NCLEX-RN, Saudi Prometric"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Resume Upload Box */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Attach CV / Resume (PDF / Word)
                      </label>
                      <div className="border-2 border-dashed border-slate-300 hover:border-[#0e3b75] rounded-xl p-3 text-center bg-white transition-colors">
                        <input
                          type="file"
                          id="candidate-resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleMockResumeUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="candidate-resume"
                          className="cursor-pointer flex flex-col items-center justify-center gap-1"
                        >
                          <FileUp className="w-5 h-5 text-slate-400" />
                          <span className="text-xs font-semibold text-[#0e3b75]">
                            {candidateForm.resumeFileName ? candidateForm.resumeFileName : 'Click to select CV document or drag and drop'}
                          </span>
                          <span className="text-[11px] text-slate-400">PDF, DOC up to 10MB</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Additional Notes or Specific Queries
                      </label>
                      <textarea
                        rows={2}
                        value={candidateForm.message}
                        onChange={(e) => setCandidateForm({ ...candidateForm, message: e.target.value })}
                        placeholder="Specify any previous hospital experience, preferred timeline, or licensing questions..."
                        className="w-full text-xs sm:text-sm p-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-[#0e3b75] hover:bg-[#092955] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Candidate Application</span>
                    </button>
                  </form>
                )}

                {/* 2. Employer Requisition Form */}
                {activeTab === 'employer' && (
                  <form onSubmit={handleEmployerSubmit} className="space-y-4">
                    <div className="text-xs text-slate-500 font-medium pb-2 border-b border-slate-200">
                      Submit institutional manpower requirements for healthcare staffing, credential verification, and overseas deployment.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Healthcare Organization / Hospital Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={employerForm.organizationName}
                          onChange={(e) => setEmployerForm({ ...employerForm, organizationName: e.target.value })}
                          placeholder="e.g. Emirates Hospital Group / Royal Care Clinic"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.organizationName && <p className="text-[11px] text-red-600 mt-1">{errors.organizationName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Contact Person & Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={employerForm.contactPerson}
                          onChange={(e) => setEmployerForm({ ...employerForm, contactPerson: e.target.value })}
                          placeholder="e.g. Dr. K. Wilson, Medical Director / HR Head"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.contactPerson && <p className="text-[11px] text-red-600 mt-1">{errors.contactPerson}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Official Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={employerForm.workEmail}
                          onChange={(e) => setEmployerForm({ ...employerForm, workEmail: e.target.value })}
                          placeholder="hr@hospitalgroup.com"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.workEmail && <p className="text-[11px] text-red-600 mt-1">{errors.workEmail}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Corporate Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={employerForm.phone}
                          onChange={(e) => setEmployerForm({ ...employerForm, phone: e.target.value })}
                          placeholder="+971 / +966 / +1 XXXXX XXXXX"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Facility Type
                        </label>
                        <select
                          value={employerForm.facilityType}
                          onChange={(e) => setEmployerForm({ ...employerForm, facilityType: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="Private Multi-Specialty Hospital">Private Multi-Specialty Hospital</option>
                          <option value="Government Hospital / Ministry">Government Hospital / Ministry</option>
                          <option value="Day Surgery Center / Specialized Clinic">Day Surgery Center / Clinic</option>
                          <option value="Retail / Hospital Pharmacy Chain">Retail / Hospital Pharmacy Chain</option>
                          <option value="Diagnostic Laboratory Network">Diagnostic Laboratory Network</option>
                          <option value="Home Healthcare & Rehabilitation">Home Healthcare & Rehabilitation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Deployment Country
                        </label>
                        <input
                          type="text"
                          value={employerForm.locationCountry}
                          onChange={(e) => setEmployerForm({ ...employerForm, locationCountry: e.target.value })}
                          placeholder="e.g. UAE (Dubai/Abu Dhabi), Saudi Arabia, Oman"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Required Headcount
                        </label>
                        <select
                          value={employerForm.headcount}
                          onChange={(e) => setEmployerForm({ ...employerForm, headcount: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="1 - 4 Specialists">1 - 4 Key Positions</option>
                          <option value="5 - 10 Candidates">5 - 10 Candidates</option>
                          <option value="10 - 25 Batch Deployment">10 - 25 Batch Deployment</option>
                          <option value="25+ Large Scale Manpower">25+ Large Scale Manpower</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Specific Roles & Medical Specialties Needed
                      </label>
                      <input
                        type="text"
                        value={employerForm.rolesNeeded}
                        onChange={(e) => setEmployerForm({ ...employerForm, rolesNeeded: e.target.value })}
                        placeholder="e.g. 5 ICU Nurses (DHA), 2 Anesthesiologists, 4 Radiographers"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Requirements, Benefits Package & Sourcing Notes
                      </label>
                      <textarea
                        rows={2}
                        value={employerForm.requirements}
                        onChange={(e) => setEmployerForm({ ...employerForm, requirements: e.target.value })}
                        placeholder="Specify salary brackets, accommodation provisions, target deployment deadline..."
                        className="w-full text-xs sm:text-sm p-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-[#0e3b75] hover:bg-[#092955] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Building2 className="w-4 h-4" />
                      <span>Submit Hospital Staffing Requisition</span>
                    </button>
                  </form>
                )}

                {/* 3. 1-on-1 Consultation Booking Form */}
                {activeTab === 'consultation' && (
                  <form onSubmit={handleConsultSubmit} className="space-y-4">
                    <div className="text-xs text-slate-500 font-medium pb-2 border-b border-slate-200">
                      Schedule a free 20-minute video or phone consultation with a senior healthcare licensing specialist.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={consultForm.fullName}
                          onChange={(e) => setConsultForm({ ...consultForm, fullName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={consultForm.email}
                          onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                          placeholder="yourname@gmail.com"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={consultForm.phone}
                          onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                          placeholder="+91 / +971 XXXXX XXXXX"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                        {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Advisory Focus
                        </label>
                        <select
                          value={consultForm.topic}
                          onChange={(e) => setConsultForm({ ...consultForm, topic: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="Licensing Examination (Prometric / DHA / NCLEX)">Licensing Examination (Prometric / DHA / NCLEX)</option>
                          <option value="DataFlow & Primary Source Verification (PSV)">DataFlow & Primary Source Verification (PSV)</option>
                          <option value="Middle East Hospital Placement (UAE / Saudi / Oman)">Middle East Hospital Placement (UAE / Saudi / Oman)</option>
                          <option value="UK & Ireland Healthcare Immigration">UK & Ireland Healthcare Immigration</option>
                          <option value="USA NCLEX & Green Card Pathway">USA NCLEX & Green Card Pathway</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Preferred Day
                        </label>
                        <input
                          type="date"
                          value={consultForm.preferredDate}
                          onChange={(e) => setConsultForm({ ...consultForm, preferredDate: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Preferred Time Window
                        </label>
                        <select
                          value={consultForm.preferredTime}
                          onChange={(e) => setConsultForm({ ...consultForm, preferredTime: e.target.value })}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0e3b75] focus:border-transparent transition-all"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM IST)">Morning (10:00 AM - 1:00 PM IST)</option>
                          <option value="Afternoon (2:00 PM - 5:00 PM IST)">Afternoon (2:00 PM - 5:00 PM IST)</option>
                          <option value="Evening (5:00 PM - 8:00 PM IST)">Evening (5:00 PM - 8:00 PM IST)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Confirm Free Advisory Appointment</span>
                    </button>
                  </form>
                )}
              </>
            )}

          </div>

          {/* Right Column: Direct Corporate Contacts & Verification Badges */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Official Email Card */}
            <div className="bg-[#0a2540] text-white rounded-2xl p-6 sm:p-7 shadow-xs">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Official Communications
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                New Path Global Career Manpower
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                All official candidate verifications, hospital mandates, and agreements are issued exclusively through our registered corporate email.
              </p>

              <div className="space-y-4 text-xs">
                
                {/* Email Box */}
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Corporate Email Desk</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                {/* Operations Coverage */}
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    Operational Headquarters
                  </div>
                  <div className="flex items-start gap-2 text-slate-200">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">India Central Operations</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Active Overseas Placement Liaison: UAE, Saudi Arabia, Oman, Qatar, Ireland, UK & North America.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    Response Guarantee
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Candidate profile assessment within 24 business hours.</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Anti-Fraud / Ethical Notice Card */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-emerald-950">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 text-emerald-700" />
                <span>Fair Recruitment Guarantee</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                New Path Global strictly adheres to the ILO general principles and operational guidelines for fair recruitment. We do not work through unauthorized brokers. Please verify all offer letters directly with our official desk.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
