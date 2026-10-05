import React from 'react';
import { Building2, ShieldCheck, Users, Clock, Award, FileSearch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EMPLOYER_SOLUTIONS } from '../data/companyData';

interface EmployerSectionProps {
  onOpenEmployerForm: () => void;
}

export const EmployerSection: React.FC<EmployerSectionProps> = ({ onOpenEmployerForm }) => {
  return (
    <section id="employers" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
              Section 05 · Institutional Healthcare Staffing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight text-balance">
              Services for Healthcare Employers & Hospital Groups
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We understand that hospitals, clinics, pharmacies, and healthcare organizations require dependable, credential-verified access to clinical manpower. Our recruitment engine supports employers from vacancy assessment to final clinical induction.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenEmployerForm}
            className="self-start lg:self-auto shrink-0 px-6 py-3.5 text-xs font-bold text-white bg-[#0e3b75] hover:bg-[#082852] rounded-xl transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Building2 className="w-4 h-4" />
            <span>Submit Manpower Requisition</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 7 Core Employer Capabilities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EMPLOYER_SOLUTIONS.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                idx === 0
                  ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0a2540] to-[#0e3b75] text-white border-[#0a2540]'
                  : 'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  idx === 0 ? 'bg-white/10 text-emerald-400' : 'bg-slate-200/70 text-slate-700'
                }`}>
                  Capability 0{idx + 1}
                </span>
                <CheckCircle2 className={`w-5 h-5 ${idx === 0 ? 'text-emerald-400' : 'text-emerald-600'}`} />
              </div>

              <h3 className={`text-lg font-bold ${idx === 0 ? 'text-white' : 'text-[#0a2540]'}`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                idx === 0 ? 'text-slate-200' : 'text-slate-600'
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* B2B Assurance Bar */}
        <div className="mt-12 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-emerald-950">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                Zero Document Fraud
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Direct primary source verification through DataFlow, TrueProfile, and statutory councils prior to candidate submission.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                Pre-Departure Clinical Orientation
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Candidates are coached on destination hospital protocols, electronic medical record (EMR) systems, and clinical etiquette.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                Probation Replacement Assurance
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Guaranteed complimentary replacement in the rare event of candidate mismatch during initial probationary assessment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
