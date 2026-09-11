'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

const skillIconMap: Record<string, string> = {
  CSharpIcon: 'CodeBracketSquareIcon',
  JavaIcon: 'CpuChipIcon',
  HtmlIcon: 'WindowIcon',
  CssIcon: 'SwatchIcon',
  JsIcon: 'BoltIcon',
  SqlIcon: 'CircleStackIcon',
};

const skillColorMap: Record<string, { bg: string; text: string; bar: string }> = {
  'C#': { bg: 'bg-purple-500/10', text: 'text-purple-400', bar: 'bg-purple-400' },
  Java: { bg: 'bg-orange-500/10', text: 'text-orange-400', bar: 'bg-orange-400' },
  HTML: { bg: 'bg-red-500/10', text: 'text-red-400', bar: 'bg-red-400' },
  CSS: { bg: 'bg-blue-500/10', text: 'text-blue-400', bar: 'bg-blue-400' },
  JavaScript: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', bar: 'bg-yellow-400' },
  MSSQL: { bg: 'bg-primary/10', text: 'text-primary', bar: 'bg-primary' },
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach((bar) => {
              const target = bar.getAttribute('data-width') || '0';
              bar.style.width = target + '%';
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barsRef.current) barObserver.observe(barsRef.current);
    return () => barObserver.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-secondary/30 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="reveal-on-scroll mb-16 text-center">
          <p className="section-label mb-3">What I Know</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Technical <span className="text-gradient-green">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div ref={barsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.skills.map((skill, i) => {
            const iconName = skillIconMap[skill.icon] || 'CodeBracketIcon';
            const colors = skillColorMap[skill.name] || { bg: 'bg-primary/10', text: 'text-primary', bar: 'bg-primary' };

            return (
              <div
                key={skill.name}
                className={`reveal-on-scroll stagger-${i + 1} glass-card glass-card-hover p-6 rounded-2xl group`}
              >
                {/* Icon + Name row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center skill-icon-bg`}>
                      <Icon name={iconName as 'CodeBracketIcon'} size={22} className={colors.text} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{skill.name}</h3>
                      <span className="text-xs text-muted-foreground">{skill.category}</span>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${colors.text}`}>{skill.level}%</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`skill-bar-fill h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                    data-width={skill.level}
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}