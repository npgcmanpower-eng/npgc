import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { CandidateProfession, DestinationRegion } from '../types';

interface EligibilityCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyWithPath: (profession: CandidateProfession, destination: DestinationRegion, exam: string) => void;
}

export const EligibilityCheckerModal: React.FC<EligibilityCheckerModalProps> = ({
  isOpen,
  onClose,
  onApplyWithPath
}) => {
  const [step, setStep] = useState<number>(1);
  const [profession, setProfession] = useState<CandidateProfession>('Nurse / Nursing Specialist');
  const [experience, setExperience] = useState<string>('2 - 4 Years');
  const [destination, setDestination] = useState<DestinationRegion>('Middle East (UAE, Saudi, Oman, Qatar)');

  if (!isOpen) return null;

  // Calculate recommendation based on selections
  const getRecommendation = () => {
    let examNeeded = 'DHA / MOH Prometric';
    let timeline = '60 - 90 Days';
    let requirements = [
      'Valid Nursing / Medical Degree with Transcripts',
      'Minimum 2 years continuous clinical hospital experience',
      'Primary Source Verification (DataFlow PSV Report)',
      'Certificate of Good Standing from home state council'
    ];
    let salaryEstimate = 'AED 7,000 - 15,000 / month (Tax-Free) + Housing Allowance';

    if (destination === 'USA & Canada') {
      examNeeded = profession.includes('Doctor') ? 'USMLE Step 1 & Step 2 CK' : 'NCLEX-RN';
      timeline = '6 - 12 Months';
      salaryEstimate = '$36 - $52 / hour + Overtime + Green Card Sponsorship';
      requirements = [
        'Recognized Baccalaureate Degree in Medicine or Nursing',
        'Passing score on NCLEX-RN / USMLE',
        'CGFNS Credentials Evaluation Service & VisaScreen certificate',
        'Academic IELTS 6.5+ or OET Grade B'
      ];
    } else if (destination === 'United Kingdom & Ireland') {
      examNeeded = profession.includes('Nurse') ? 'NMBI / NMC CBT & OSCE' : 'IMC / GMC Registration';
      timeline = '4 - 6 Months';
      salaryEstimate = '€36,000 - €48,000 / annum + Relocation Support';
      requirements = [
        'Recognized Healthcare Diploma or Bachelor Degree',
        'OET score B in all sub-tests or IELTS Academic 7.0',
        'CBT theory exam cleared',
        'Critical Skills Employment Permit approval'
      ];
    } else if (destination === 'Australia & New Zealand') {
      examNeeded = profession.includes('Pharmacist') ? 'KAPS (Australia Pharmacy Council)' : 'AHPRA Outcome Letter';
      timeline = '5 - 8 Months';
      salaryEstimate = 'AUD $75,000 - $110,000 / annum + Superannuation';
      requirements = [
        'AHPRA initial assessment',
        'Pass in designated competency test (KAPS / NCLEX-RN)',
        'Positive Skill Assessment via ANMAC / APC',
        'Subclass 482 / 186 visa nomination'
      ];
    }

    return { examNeeded, timeline, requirements, salaryEstimate };
  };

  const recommendation = getRecommendation();

  const handleFinish = () => {
    onApplyWithPath(profession, destination, recommendation.examNeeded);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="eligibility-title"
      >
        {/* Header */}
        <div className="bg-[#0a2540] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 id="eligibility-title" className="text-base font-bold text-white">
                Global Pathway & Licensure Calculator
              </h3>
              <p className="text-xs text-slate-300">
                Determine your overseas licensing prerequisites in 60 seconds
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Step 1 of 2 · Clinical Background
              </span>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  What is your medical discipline?
                </label>
                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value as CandidateProfession)}
                  className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-[#0e3b75]"
                >
                  <option value="Doctor / Medical Officer">Doctor / Medical Officer (MBBS, MD, MS)</option>
                  <option value="Nurse / Nursing Specialist">Nurse (B.Sc / Post Basic / GNM / M.Sc)</option>
                  <option value="Pharmacist / Pharmaceutical">Pharmacist (B.Pharm / Pharm.D / M.Pharm)</option>
                  <option value="Physiotherapist">Physiotherapist (BPT / MPT)</option>
                  <option value="Medical Laboratory Technologist">Medical Lab Technologist (B.Sc MLT)</option>
                  <option value="Radiographer / Imaging Specialist">Radiographer / Sonographer (B.Sc MIT)</option>
                  <option value="Allied Healthcare Specialist">Allied Healthcare / OT / Anesthesia Tech</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  How many years of post-registration clinical experience do you have?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Less than 1 Year', '1 - 2 Years', '2 - 4 Years', '5+ Years'].map((exp) => (
                    <button
                      key={exp}
                      type="button"
                      onClick={() => setExperience(exp)}
                      className={`p-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                        experience === exp
                          ? 'bg-[#0e3b75] text-white border-[#0e3b75]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {exp}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target Destination Region
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value as DestinationRegion)}
                  className="w-full text-xs sm:text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-[#0e3b75]"
                >
                  <option value="Middle East (UAE, Saudi, Oman, Qatar)">Middle East (UAE, Saudi Arabia, Oman, Qatar)</option>
                  <option value="USA & Canada">USA & Canada (NCLEX / USMLE)</option>
                  <option value="United Kingdom & Ireland">United Kingdom & Ireland</option>
                  <option value="Australia & New Zealand">Australia & New Zealand</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full mt-4 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#0e3b75] hover:bg-[#082952] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Generate Pathway Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Step 2 of 2 · Custom Pathway Profile
              </span>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Profile Assessment:</span>
                  <span className="font-semibold text-slate-800">{experience} Experience</span>
                </div>
                <h4 className="text-base font-bold text-[#0a2540]">
                  {profession} &rarr; {destination}
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-emerald-50/70 border border-emerald-200 p-3 rounded-xl">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase block mb-0.5">
                    Target Licensing Exam
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {recommendation.examNeeded}
                  </span>
                </div>

                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl">
                  <span className="text-[11px] font-bold text-blue-800 uppercase block mb-0.5">
                    Estimated Timeline
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {recommendation.timeline}
                  </span>
                </div>
              </div>

              {/* Requirements checklist */}
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-800 block mb-2">
                  Prerequisites & Documentation:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {recommendation.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Salary bracket */}
              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900">
                <span className="font-bold block mb-0.5">Estimated Clinical Compensation:</span>
                <span>{recommendation.salaryEstimate}</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleFinish}
                  className="flex-1 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Apply with This Profile Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>New Path Global Verification Desk</span>
          <span className="text-emerald-700 font-semibold">100% Free Consultation</span>
        </div>
      </div>
    </div>
  );
};
