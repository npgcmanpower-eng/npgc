import React from 'react';
import { Target, Compass, HeartHandshake, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, CORE_VALUES, COMPANY_INFO } from '../data/companyData';

export const ApproachSection: React.FC = () => {
  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Section 06 · Structured Execution
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight text-balance">
            Our 5-Stage Placement Approach
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From initial credential evaluation to final post-arrival clinic integration, our transparent methodology guarantees peace of mind for both medical practitioners and sponsoring healthcare institutions.
          </p>
        </div>

        {/* 5-Step Process Horizontal Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between relative group hover:border-[#0e3b75] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-[#0e3b75]">
                    {item.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                <h3 className="text-base font-bold text-[#0a2540] mb-2">
                  {item.name}
                </h3>
                
                <p className="text-xs font-semibold text-slate-700 mb-2">
                  {item.summary}
                </p>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-400">
                  <ArrowRight className="w-5 h-5 bg-white rounded-full p-0.5 border border-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Vision & Mission & Values (Section 7, 8, 9 from PDF) */}
        <div id="about" className="mt-20 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Vision & Mission Columns */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Vision Card */}
              <div className="p-7 rounded-2xl bg-[#0a2540] text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  To become a globally trusted healthcare recruitment partner
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Connecting exceptional medical professionals with leading healthcare organizations worldwide, fostering international clinical exchange and elevating patient care standards across borders.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0e3b75] uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-2">
                  Empowering clinicians with ethical pathways
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To empower healthcare professionals with the right training, placement, and international career opportunities while delivering reliable, qualified, and ethical healthcare manpower solutions to our global clients.
                </p>
              </div>

            </div>

            {/* Core Values List */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Our Guiding Principles</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-4">
                Core Organizational Values
              </h3>

              <div className="divide-y divide-slate-100">
                {CORE_VALUES.map((val, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <h4 className="text-sm font-bold text-slate-900">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 pl-3.5 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Official Corporate Name Reminder */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{COMPANY_INFO.name}</span>
                <span className="font-semibold text-emerald-700">ISO & Government Compliant</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
