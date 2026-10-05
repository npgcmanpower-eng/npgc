import React, { useState } from 'react';
import { Stethoscope, Check, ArrowRight, Sparkles, GraduationCap, MapPin, FileCheck2 } from 'lucide-react';
import { MEDICAL_SPECIALTIES } from '../data/companyData';
import { MedicalSpecialty } from '../types';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectSpecialty }) => {
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>(MEDICAL_SPECIALTIES[0].id);

  const activeSpecialty = MEDICAL_SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || MEDICAL_SPECIALTIES[0];

  return (
    <section id="specialties" className="py-16 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Section 02 · Clinical Divisions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight text-balance">
            Medical Department Placement
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Medical placement is one of our core services. We support healthcare professionals in identifying appropriate international employment opportunities and help healthcare employers source qualified clinical specialists according to their workforce requirements.
          </p>
        </div>

        {/* Interactive Discipline Tabs & Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Specialties List (Segmented Buttons) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
              Select Professional Discipline
            </span>

            <div className="space-y-1.5" role="tablist" aria-label="Medical Disciplines">
              {MEDICAL_SPECIALTIES.map((spec) => {
                const isActive = spec.id === selectedSpecialtyId;
                return (
                  <button
                    key={spec.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedSpecialtyId(spec.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#0e3b75] shadow-sm text-[#0a2540]'
                        : 'bg-white/60 hover:bg-white border-slate-200/80 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        <span className={isActive ? 'text-[#0e3b75]' : 'text-slate-400'}>
                          <Stethoscope className="w-4 h-4" />
                        </span>
                        <span>{spec.title}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {spec.tagline}
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#0e3b75] translate-x-1' : 'text-slate-300'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Card for Active Specialty */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Overseas Career Stream
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] mt-2">
                  {activeSpecialty.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  {activeSpecialty.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectSpecialty(activeSpecialty.title)}
                className="shrink-0 px-5 py-2.5 text-xs font-bold text-white bg-[#0e3b75] hover:bg-[#092955] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Apply for this Role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Grid of Placement Specifics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              
              {/* Common Target Positions */}
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">
                  <Stethoscope className="w-4 h-4 text-[#0e3b75]" />
                  <span>Key Placed Positions</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeSpecialty.keyRoles.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Qualifications & Licensing */}
              <div className="space-y-6">
                
                {/* Qualifications */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-[#0e3b75]" />
                    <span>Eligible Degrees / Credentials</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {activeSpecialty.qualifications.map((q, idx) => (
                      <span key={idx} className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Required Exams */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span>Mandatory Licensing Examinations</span>
                  </div>
                  <div className="text-xs text-slate-700 font-medium space-y-1">
                    {activeSpecialty.requiredExams.map((exam, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{exam}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Destinations Footer Row */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="font-semibold text-slate-800">Primary Hiring Regions:</span>
                <span>{activeSpecialty.topDestinations.join(' · ')}</span>
              </div>
              <span className="text-slate-400">
                DataFlow PSV & Visa Clearances Managed
              </span>
            </div>

          </div>

        </div>

        {/* Feature Spotlight Card with Generated Visual Asset */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[260px]">
              <img
                src="/src/assets/images/medical_department_placement_1791195626498.jpg"
                alt="Clinical nurse and doctor discussing patient digital diagnostic records"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/40 lg:to-transparent" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10">
              <div className="text-xs font-bold text-[#0e3b75] uppercase tracking-wider mb-2">
                Ethical Deployment · Zero Exploitation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] tracking-tight">
                Direct Hospital Contracts & Transparent Compensation
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Unlike informal recruiters, New Path Global works strictly with accredited healthcare employers and government bodies. We provide verified offer letters, guaranteed work-hours agreements, housing allowances, and direct salary structures without hidden clawbacks or unauthorized deductions.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Direct Ministry & Hospital Hiring</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Family Visa & Gratuity Benefits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Departure Orientation & Relocation Help</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
