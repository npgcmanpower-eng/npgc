import React, { useState } from 'react';
import { BookOpen, CheckCircle, Search, Award, HelpCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { LICENSING_EXAMS } from '../data/companyData';
import { LicensingExamItem } from '../types';

interface LicensingSectionProps {
  onSelectExam: (examCode: string) => void;
}

export const LicensingSection: React.FC<LicensingSectionProps> = ({ onSelectExam }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'middle-east' | 'western'>('all');
  const [activeExamId, setActiveExamId] = useState<string>(LICENSING_EXAMS[0].id);

  const filteredExams = LICENSING_EXAMS.filter((exam) => {
    if (filterCategory === 'middle-east') {
      return ['dha', 'moh-uae', 'haad-doh', 'saudi-prometric', 'oman-prometric', 'qatar-prometric'].includes(exam.id);
    }
    if (filterCategory === 'western') {
      return ['nclex-rn', 'usmle', 'kaps-australia'].includes(exam.id);
    }
    return true;
  });

  const selectedExam = LICENSING_EXAMS.find((e) => e.id === activeExamId) || LICENSING_EXAMS[0];

  return (
    <section id="licensing" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Section 03 · Examination & Competency
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight text-balance">
            International Training & Licensing
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our experienced team of trainers provides focused preparation and professional guidance to help healthcare professionals prepare for international licensing, eligibility, and competency examinations. Training is structured strictly around the requirements of the relevant professional and healthcare authorities.
          </p>
        </div>

        {/* Training Feature Banner with Generated Image */}
        <div className="mb-12 bg-slate-900 rounded-2xl overflow-hidden shadow-md text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-6 sm:p-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Structured Healthcare Exam Curriculum</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
                Comprehensive Coaching for Prometric, NCLEX & Global Boards
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Clearing statutory licensing is the single most critical step for an overseas healthcare placement. We supply candidates with high-yield question banks, previous examination trend analysis, clinical scenario workshops, and end-to-end DataFlow Primary Source Verification assistance.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subject-wise Video Lessons & Mock Tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>DataFlow & TrueProfile Documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mumaris+ & Sheryan Account Filing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Exam Slot Booking & Center Assistance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[280px]">
              <img
                src="/src/assets/images/global_licensing_training_1791195649975.jpg"
                alt="Healthcare professionals in training lab reviewing licensing exam study material"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
            </div>

          </div>
        </div>

        {/* Interactive Filter Controls (Segmented Control - Allowed by Zero-Pill Rules) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Examinations ({LICENSING_EXAMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('middle-east')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'middle-east'
                  ? 'bg-white text-[#0e3b75] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Middle East Prometric (MOH · DHA · HAAD · SCFHS)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('western')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'western'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              US / UK / Australia (NCLEX · USMLE · KAPS)
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Click any exam to view syllabus breakdown & coaching support
          </div>
        </div>

        {/* Exams Grid & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Exam Pills/Cards List */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3">
            {filteredExams.map((exam) => {
              const isSelected = exam.id === activeExamId;
              return (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => setActiveExamId(exam.id)}
                  className={`text-left p-4 rounded-xl transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-50 border-[#0e3b75] shadow-xs ring-1 ring-[#0e3b75]'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-bold text-[#0a2540]">
                      {exam.code}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {exam.region}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-1 line-clamp-1">
                    {exam.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Target: {exam.targetProfession}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Exam Detailed Blueprint */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-[#0e3b75] uppercase tracking-wide">
                  {selectedExam.region} · {selectedExam.authority}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0a2540] mt-1">
                  {selectedExam.code}
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {selectedExam.name}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectExam(selectedExam.code)}
                className="shrink-0 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Enroll in {selectedExam.code} Coaching</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-xs text-slate-600 leading-relaxed">
              <p className="text-slate-800 text-sm">
                {selectedExam.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1 uppercase tracking-wider text-[11px]">
                    Exam Pattern & Format
                  </span>
                  <span>{selectedExam.format}</span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1 uppercase tracking-wider text-[11px]">
                    Eligibility & Validity
                  </span>
                  <span>{selectedExam.validity}</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="font-bold text-slate-900 block mb-2 uppercase tracking-wider text-[11px]">
                  What New Path Global Training Includes:
                </span>
                <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
                  {selectedExam.coachingSupport.map((supportItem, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{supportItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note / Regulatory Notice */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2 text-[11px] text-slate-500">
              <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                All licensing exams are conducted by authorized test administrators (Prometric, Pearson VUE, NCSBN, etc.) subject to respective health ministry guidelines. New Path Global acts as your official preparatory and logistics coordinator.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
