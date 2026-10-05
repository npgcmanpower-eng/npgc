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
import { CandidateProfession, DestinationRegion } from './types';

export default function App() {
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

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-emerald-600 selection:text-white">
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
