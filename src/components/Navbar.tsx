import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenEligibility: () => void;
  onNavigateToContact: (tab?: 'candidate' | 'employer' | 'consultation') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEligibility,
  onNavigateToContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Specialties', href: '#specialties' },
    { name: 'Licensing & Exams', href: '#licensing' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'For Employers', href: '#employers' },
    { name: 'Our Process', href: '#process' },
    { name: 'About Us', href: '#about' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Banner Notice: Ethical Manpower & Compliance Guarantee */}
      <div className="bg-[#0b1f3a] text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-300">
              Government Registered Overseas Healthcare Recruitment & Licensing Consultancy
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-[11px]">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-semibold tracking-wide">
              {COMPANY_INFO.brandMotto}
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to 3-Zone Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Title (Single Element Wordmark) */}
            <a
              href="#"
              className="group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
              aria-label="New Path Global Career Manpower Homepage"
            >
              <BrandLogo variant="compact" showSubtitle={true} />
            </a>

            {/* Zone 2: 4-6 Clean Text Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="whitespace-nowrap transition-colors hover:text-[#0b3875] relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 Primary Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenEligibility}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Eligibility Check</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateToContact('candidate')}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0e3b75] hover:bg-[#092b59] active:bg-[#072044] rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Apply / Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigateToContact('candidate')}
                className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#0e3b75] rounded-md"
              >
                Apply
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEligibility();
                  }}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Check Licensure Eligibility</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToContact('candidate');
                  }}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#0e3b75] hover:bg-[#0a2c58] rounded-lg text-center"
                >
                  Candidate Application
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToContact('employer');
                  }}
                  className="w-full py-2.5 px-4 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center"
                >
                  Hospital Manpower Request
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
