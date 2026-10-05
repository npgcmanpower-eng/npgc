import React from 'react';
import { Mail, Shield, Award, CheckCircle, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, MEDICAL_SPECIALTIES, LICENSING_EXAMS } from '../data/companyData';

interface FooterProps {
  onNavigateToContact: (tab?: 'candidate' | 'employer' | 'consultation') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07172c] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Corporate Description */}
          <div className="lg:col-span-4">
            <BrandLogo variant="white" showSubtitle={true} className="mb-4" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-5">
              New Path Global Career Manpower Pvt. Ltd. is an overseas healthcare human resources, recruitment, medical placement, and immigration consultancy based in India. Connecting qualified healthcare professionals with reputed hospitals, clinics, pharmacies, and healthcare organizations worldwide.
            </p>
            <div className="text-xs text-emerald-400 font-semibold tracking-wide">
              {COMPANY_INFO.brandMotto}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              {COMPANY_INFO.subMotto}
            </div>
          </div>

          {/* Quick Links: Medical Specialties */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">
              Medical Disciplines
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              {MEDICAL_SPECIALTIES.slice(0, 6).map((spec) => (
                <li key={spec.id}>
                  <a
                    href="#specialties"
                    className="hover:text-white transition-colors"
                  >
                    {spec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing Examinations */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">
              Licensing Coaching
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#licensing" className="hover:text-white transition-colors">DHA Dubai</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">MOH UAE</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">HAAD / DoH Abu Dhabi</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">Saudi Prometric</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">Oman Prometric</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">NCLEX-RN (USA)</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">KAPS Pharmacist</a></li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">
              Official Desk
            </span>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <span className="block text-[11px] text-slate-500 uppercase">Direct Email</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-medium text-emerald-400 hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 uppercase">Operations Desk</span>
                <span className="text-slate-300">New Path Global Overseas Medical Services</span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigateToContact('employer')}
                  className="w-full py-2 px-3 text-xs font-bold text-white bg-[#0e3b75] hover:bg-[#0a2e5c] rounded-lg transition-colors cursor-pointer text-center"
                >
                  Hospital Manpower Requisition
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory Compliance Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-400">Regulatory & Statutory Notice:</strong> {COMPANY_INFO.disclaimer} All international recruitment and licensing preparation services comply with respective national healthcare ministries, embassy attestation standards, and ethical recruitment guidelines.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">About Us</a>
            <a href="#process" className="hover:text-slate-300 transition-colors">Our Approach</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact Form</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
