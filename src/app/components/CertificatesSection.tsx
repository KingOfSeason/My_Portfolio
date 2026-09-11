'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

const certTypeConfig: Record<string, { icon: string; color: string; bg: string }> = {
  Training: { icon: 'WrenchScrewdriverIcon', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  Internship: { icon: 'BriefcaseIcon', color: 'text-primary', bg: 'bg-primary/10' },
  'Online Course': { icon: 'AcademicCapIcon', color: 'text-purple-400', bg: 'bg-purple-500/10' },
};

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" className="py-20 sm:py-28 bg-secondary/30 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="reveal-on-scroll mb-16 text-center">
          <p className="section-label mb-3">Recognition</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Certificates &{' '}
            <span className="text-gradient-green">Achievements</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certificates.map((cert, i) => {
            const config = certTypeConfig[cert.type] || certTypeConfig['Online Course'];
            return (
              <div
                key={cert.id}
                className={`reveal-on-scroll stagger-${i + 1} glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden group`}
              >
                {/* Placeholder diagonal pattern */}
                {cert.placeholder && (
                  <div className="absolute inset-0 cert-placeholder rounded-2xl opacity-50" />
                )}

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${config.bg} flex items-center justify-center mb-5`}>
                    <Icon name={config.icon as 'AcademicCapIcon'} size={26} className={config.color} />
                  </div>

                  {/* Type badge */}
                  <span className={`tag-chip inline-block mb-4`}>{cert.type}</span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>

                  {/* Placeholder note */}
                  {cert.placeholder && (
                    <div className="mt-5 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="ClockIcon" size={12} className="text-primary" />
                        <span>Certificate to be uploaded</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}