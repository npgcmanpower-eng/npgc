import React from 'react';
import { Globe, MapPin, Check, AlertCircle, ArrowRight, ShieldCheck, Plane } from 'lucide-react';
import { DESTINATIONS, COMPANY_INFO } from '../data/companyData';

interface DestinationsSectionProps {
  onSelectDestination: (destinationName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectDestination }) => {
  return (
    <section id="destinations" className="py-16 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Section 04 · Global Mobility & Regulation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight text-balance">
            Global Immigration & Career Pathways
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We provide recruitment, career pathway, and immigration support for medical and healthcare professionals exploring international opportunities. Services are tailored to the destination country, professional category, and applicable regulatory requirements.
          </p>
        </div>

        {/* Global Campus Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-sm border border-slate-200 bg-slate-900">
          <img
            src="/src/assets/images/international_healthcare_hospital_1791195671312.jpg"
            alt="International hospital medical campus and modern glass pavilion"
            className="w-full h-56 sm:h-72 lg:h-80 object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 via-[#0a2540]/70 to-transparent flex items-center p-6 sm:p-12">
            <div className="max-w-xl text-white">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                <Plane className="w-4 h-4" />
                <span>Verified Overseas Employment Contracts</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Global Healthcare Manpower Deployments
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                Direct partnerships with major healthcare clusters across the Gulf Cooperation Council (UAE, KSA, Oman, Qatar), Ireland HSE, UK NHS, and North American institutions.
              </p>
            </div>
          </div>
        </div>

        {/* Destinations Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#0e3b75]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl" aria-hidden="true">
                    {dest.flag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Visa: {dest.visaCategory}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0a2540] mt-1">
                  {dest.country}
                </h3>
                <span className="text-xs font-medium text-emerald-700 block mb-3">
                  {dest.region}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {dest.summary}
                </p>

                {/* Popular Roles */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    High Demand Roles:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popularRoles.map((role, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Pathway Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {dest.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Regulatory: {dest.regulatoryBody}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectDestination(dest.country)}
                  className="px-3.5 py-1.5 text-xs font-bold text-[#0e3b75] hover:text-white hover:bg-[#0e3b75] border border-[#0e3b75] rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Select Destination</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Regulatory Disclaimer Box (Explicitly required by company profile) */}
        <div className="mt-10 p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <span className="font-bold block mb-0.5">Mandatory Statutory & Regulatory Notice:</span>
            {COMPANY_INFO.disclaimer}
          </div>
        </div>

      </div>
    </section>
  );
};
