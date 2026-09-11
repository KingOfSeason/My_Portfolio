'use client';

import React, { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

const PROFILE_IMAGE = '';

const titles = [
  'CSE Diploma Student',
  'C# Developer',
  'Web Developer',
  'Java Programmer',
  'Problem Solver',
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 bg-grid-pattern"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full hero-blob"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full hero-blob opacity-60"
          style={{ transform: 'translate(50%, 50%)' }}
        />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Eyebrow label */}
            <div
              className="opacity-0 animate-fade-in-up delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="section-label">Available for opportunities</span>
            </div>

            {/* Name */}
            <div
              className="opacity-0 animate-fade-in-up delay-200"
              style={{ animationFillMode: 'forwards' }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-none">
                Hi, I&apos;m{' '}
                <span className="text-gradient-green block sm:inline">
                  {personal.firstName}
                </span>
              </h1>
            </div>

            {/* Typewriter title */}
            <div
              className="opacity-0 animate-fade-in-up delay-300 flex items-center gap-2 min-h-[36px]"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                {displayed}
              </span>
              <span className="w-0.5 h-7 bg-primary cursor-blink rounded-full" />
            </div>

            {/* Description */}
            <p
              className="opacity-0 animate-fade-in-up delay-400 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
              style={{ animationFillMode: 'forwards' }}
            >
              {personal.description}
            </p>

            {/* Location */}
            <div
              className="opacity-0 animate-fade-in-up delay-400 flex items-center gap-2 text-sm text-muted-foreground"
              style={{ animationFillMode: 'forwards' }}
            >
              <Icon name="MapPinIcon" size={16} className="text-primary" />
              <span>{personal.location}</span>
            </div>

            {/* CTA Buttons */}
            <div
              className="opacity-0 animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-3"
              style={{ animationFillMode: 'forwards' }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary px-7 py-3.5 rounded-xl font-bold text-base min-h-[44px] flex items-center justify-center gap-2"
              >
                <Icon name="FolderOpenIcon" size={18} />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline-primary px-7 py-3.5 rounded-xl font-bold text-base min-h-[44px] flex items-center justify-center gap-2"
              >
                <Icon name="EnvelopeIcon" size={18} />
                Contact Me
              </button>
              <a
                href={personal.resumeUrl}
                className="btn-ghost px-7 py-3.5 rounded-xl font-bold text-base min-h-[44px] flex items-center justify-center gap-2 no-underline"
                download
              >
                <Icon name="ArrowDownTrayIcon" size={18} />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="opacity-0 animate-fade-in-up delay-600 flex items-center gap-3"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Find me:
              </span>
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profile"
              >
                <Icon name="LinkIcon" size={18} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="GitHub Profile"
              >
                <Icon name="CodeBracketIcon" size={18} />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Instagram Profile"
              >
                <Icon name="CameraIcon" size={18} />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="opacity-0 animate-fade-in-up delay-300 relative"
              style={{ animationFillMode: 'forwards' }}
            >
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full profile-ring animate-float p-1 opacity-60" style={{ margin: '-6px' }} />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card animate-pulse-glow">
                {PROFILE_IMAGE ? (
                  <AppImage
                    src={PROFILE_IMAGE}
                    alt="Rituraj Shukla - CSE Developer, profile photo"
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-card via-muted to-secondary flex flex-col items-center justify-center gap-3">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                      <Icon name="UserCircleIcon" size={64} className="text-primary/60" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground text-center px-4">
                      {personal.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -left-8 glass-card px-4 py-3 rounded-2xl shadow-lg animate-float hidden sm:flex items-center gap-3"
                style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="CodeBracketIcon" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">2 Projects</p>
                  <p className="text-xs text-muted-foreground">Shipped</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-8 glass-card px-4 py-3 rounded-2xl shadow-lg animate-float hidden sm:flex items-center gap-3"
                style={{ animationDelay: '2s' }}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="AcademicCapIcon" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">86%</p>
                  <p className="text-xs text-muted-foreground">10th Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}