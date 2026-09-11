'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function EducationSection() {
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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 sm:py-28 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="reveal-on-scroll mb-16 text-center">
          <p className="section-label mb-3">Academic Background</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            My <span className="text-gradient-green">Education</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {portfolioData?.education?.map((edu, i) => (
              <div
                key={edu?.id}
                className={`reveal-on-scroll stagger-${i + 1} relative flex gap-6 sm:gap-10`}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      edu?.current
                        ? 'bg-primary border-primary shadow-lg shadow-primary/30 animate-pulse-glow'
                        : 'bg-card border-border hover:border-primary/40'
                    }`}
                  >
                    <Icon
                      name={edu?.current ? 'AcademicCapIcon' : 'CheckCircleIcon'}
                      size={20}
                      className={edu?.current ? 'text-primary-foreground' : 'text-muted-foreground'}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 glass-card glass-card-hover rounded-2xl p-6 sm:p-8 mb-2 ${
                    edu?.current ? 'education-card-active' : ''
                  }`}
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {edu?.current && (
                          <span className="tag-chip text-xs">Current</span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                        {edu?.degree}
                      </h3>
                      <p className="text-sm text-primary font-semibold mt-1">{edu?.institution}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-xs font-semibold text-muted-foreground">
                        <Icon name="CalendarIcon" size={12} />
                        {edu?.year}
                      </div>
                      {edu?.score !== 'In Progress' && (
                        <div className="mt-2 text-right">
                          <span className="text-xl font-extrabold text-primary">{edu?.score}</span>
                          <span className="text-xs text-muted-foreground block">{edu?.scoreLabel}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}