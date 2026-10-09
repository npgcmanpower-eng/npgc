/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { LicensingSection } from './components/LicensingSection';
import { DestinationsSection } from './components/DestinationsSection';
import { EmployerSection } from './components/EmployerSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EligibilityCheckerModal } from './components/EligibilityCheckerModal';
import { AndroidSimulator } from './components/AndroidSimulator';
import { CandidateProfession, DestinationRegion } from './types';
import { Smartphone, Globe } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'android' | 'web'>('android');
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [contactTab, setContactTab] = useState<'candidate' | 'employer' | 'consultation'>('candidate');
  const [prefilledSpecialty, setPrefilledSpecialty] = useState<string | undefined>(undefined);
  const [prefilledExam, setPrefilledExam] = useState<string | undefined>(undefined);
  const [prefilledDestination, setPrefilledDestination] = useState<string | undefined>(undefined);

  const scrollToContact = (tab: 'candidate' | 'employer' | 'consultation' = 'candidate') => {
    setContactTab(tab);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectSpecialty = (title: string) => {
    setPrefilledSpecialty(title);
    scrollToContact('candidate');
  };

  const handleSelectExam = (examCode: string) => {
    setPrefilledExam(examCode);
    scrollToContact('candidate');
  };

  const handleSelectDestination = (dest: string) => {
    setPrefilledDestination(dest);
    scrollToContact('candidate');
  };

  const handleApplyFromEligibility = (
    profession: CandidateProfession,
    destination: DestinationRegion,
    exam: string
  ) => {
    setPrefilledSpecialty(profession);
    setPrefilledDestination(destination);
    setPrefilledExam(exam);
    scrollToContact('candidate');
  };

  if (viewMode === 'android') {
    return (
      <div className="relative min-h-screen bg-slate-950">
        <AndroidSimulator onSwitchToWeb={() => setViewMode('web')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-emerald-600 selection:text-white relative">
      {/* View Switcher Floating Action */}
      <button
        onClick={() => setViewMode('android')}
        className="fixed bottom-6 right-6 z-50 bg-[#0a2540] hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-2xl border border-emerald-500/50 flex items-center gap-2 hover:scale-105 transition-all"
        title="Switch to Android App View"
      >
        <Smartphone className="w-4 h-4 text-emerald-400" />
        <span>View Android Mobile App</span>
      </button>

      {/* 3-Zone Navigation */}
      <Navbar
        onOpenEligibility={() => setIsEligibilityOpen(true)}
        onNavigateToContact={scrollToContact}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCandidateForm={() => scrollToContact('candidate')}
          onOpenEmployerForm={() => scrollToContact('employer')}
          onOpenEligibility={() => setIsEligibilityOpen(true)}
        />

        {/* 02 Medical Department Placement */}
        <SpecialtiesSection onSelectSpecialty={handleSelectSpecialty} />

        {/* 03 International Training & Licensing */}
        <LicensingSection onSelectExam={handleSelectExam} />

        {/* 04 Global Immigration & Pathways */}
        <DestinationsSection onSelectDestination={handleSelectDestination} />

        {/* 05 Employer Solutions */}
        <EmployerSection onOpenEmployerForm={() => scrollToContact('employer')} />

        {/* 06 Our Approach, Vision, Mission & Values */}
        <ApproachSection />

        {/* 07 Contact & Application Desk */}
        <ContactSection
          initialTab={contactTab}
          prefilledSpecialty={prefilledSpecialty}
          prefilledExam={prefilledExam}
          prefilledDestination={prefilledDestination}
        />
      </main>

      {/* Corporate Footer */}
      <Footer onNavigateToContact={scrollToContact} />

      {/* 60-Second Eligibility & Pathway Modal */}
      <EligibilityCheckerModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onApplyWithPath={handleApplyFromEligibility}
      />
    </div>
  );
}
