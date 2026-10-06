import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2, Award, Building2, Users, Sparkles } from 'lucide-react';
import { STATS, COMPANY_INFO } from '../data/companyData';
import logoImg from '../assets/images/logo.png';
import groupDoctorsImg from '../assets/images/group_doctors.jpg';

interface HeroProps {
  onOpenCandidateForm: () => void;
  onOpenEmployerForm: () => void;
  onOpenEligibility: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCandidateForm,
  onOpenEmployerForm,
  onOpenEligibility
}) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Background Accent Subtle Glow */}
      <div 
        className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 left-0 -ml-48 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed Metadata Trust Line (Zero-Pill Compliance) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-700 uppercase mb-4">
              <span>Recruit</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Train</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Place</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Empower</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#0a2540] tracking-tight leading-[1.15] text-balance mb-5 font-serif sm:font-sans">
              Connecting Healthcare Professionals with Reputed Global Hospitals & Healthcare Organizations
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              New Path Global Career Manpower Pvt. Ltd. is an overseas healthcare human resources, recruitment, medical placement, and immigration consultancy based in India. We specialize in supporting medical, pharmaceutical, nursing, and allied health specialists to achieve authorized international placement.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onOpenCandidateForm}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#0e3b75] hover:bg-[#0a2c58] active:bg-[#071f3f] rounded-xl transition-all shadow-md shadow-blue-950/10 flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e3b75]"
              >
                <span>Apply as Healthcare Professional</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={onOpenEmployerForm}
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>Hire Clinical Manpower</span>
              </button>
            </div>

            {/* Adjacency Trust Markers (Unboxed) */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Primary Source Verification (DataFlow)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>MOH / DHA / Prometric / NCLEX Coaching</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Ethical Recruitment</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dominant Visual Asset with Official Credential Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
              <img
                src={groupDoctorsImg}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1600&q=80";
                }}
                alt="Group of specialist doctors, critical care nurses, and clinical healthcare professionals"
                className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/95 via-[#0a192f]/35 to-transparent pointer-events-none" />

              {/* Floating Verified Official Logo Credential Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2.5 transition-transform hover:scale-102">
                <img
                  src={logoImg}
                  alt="NPGC Official Logo"
                  className="w-9 h-9 object-contain rounded-lg bg-white p-0.5 border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Govt. Registered</span>
                  </div>
                  <div className="text-xs font-bold text-[#0a2540] leading-none mt-0.5">
                    Medical Manpower
                  </div>
                </div>
              </div>

              {/* Quick Eligibility Tool Trigger Floating in Corner */}
              <button
                type="button"
                onClick={onOpenEligibility}
                className="absolute top-4 right-4 bg-white/95 hover:bg-white text-[#0a2540] text-xs font-bold py-2 px-3 rounded-lg shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pathway Calculator</span>
              </button>

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                <div className="flex items-center justify-between mb-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  <span>Authorized International Placements</span>
                  <span className="text-slate-300">UAE · KSA · UK · USA · Ireland</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Specialist Doctors, Critical Care Nurses & Allied Scientists
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Comprehensive DataFlow Primary Source Verification, Prometric/MOH/NCLEX coaching, and embassy medical visa clearances.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency Stats Section */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0e3b75] font-mono tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
