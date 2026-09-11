import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import EducationSection from '@/app/components/EducationSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import CertificatesSection from '@/app/components/CertificatesSection';
import ContactSection from '@/app/components/ContactSection';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}