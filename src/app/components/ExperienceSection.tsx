'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  Internship: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
  Training: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
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
    <section id="experience" className="py-20 sm:py-28 bg-secondary/30 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="reveal-on-scroll mb-16 text-center">
          <p className="section-label mb-3">Work History</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            My <span className="text-gradient-green">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp, i) => {
            const colors = typeColors[exp.type] || typeColors['Internship'];
            return (
              <div
                key={exp.id}
                className={`reveal-on-scroll stagger-${i + 1} glass-card glass-card-hover rounded-2xl p-7 sm:p-9`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={exp.icon as 'BriefcaseIcon'} size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-semibold text-base mt-0.5">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${colors.bg} ${colors.text} ${colors.border}`}>
                      {exp.type}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{exp.duration}</span>
                  </div>
                </div>

                {/* Description bullets */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tag-chip">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}