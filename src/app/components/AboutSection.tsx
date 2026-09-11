'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

const introCards = [
  {
    icon: 'AcademicCapIcon',
    title: 'Diploma CSE Student',
    description: 'Pursuing CSE at Govt. Polytechnic Sikandara, Kanpur Dehat (2024–2027).',
    color: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    icon: 'CodeBracketIcon',
    title: 'Software Development',
    description: 'Building desktop and web applications using C#, Java, and JavaScript.',
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: 'CpuChipIcon',
    title: 'Project Building',
    description: 'Creating practical solutions — from grade trackers to student management systems.',
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
  },
  {
    icon: 'MapPinIcon',
    title: 'Based in India',
    description: 'Fatehpur, Uttar Pradesh — open to remote work and local opportunities.',
    color: 'from-orange-500/20 to-orange-500/5',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { personal } = portfolioData;

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

  return (
    <section id="about" className="py-20 sm:py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="reveal-on-scroll mb-16 text-center">
          <p className="section-label mb-3">Who I Am</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            About <span className="text-gradient-green">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Intro paragraph */}
        <div className="reveal-on-scroll stagger-1 max-w-3xl mx-auto mb-16">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center">
            I&apos;m a <span className="text-foreground font-semibold">Computer Science Engineering student</span> with
            a passion for building software that solves real problems. Currently in my diploma program at{' '}
            <span className="text-primary font-semibold">Government Polytechnic Sikandara</span>, I combine
            academic learning with hands-on project work and industrial training to grow as a developer.
          </p>
        </div>

        {/* 4 Intro Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {introCards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal-on-scroll stagger-${i + 2} glass-card glass-card-hover p-6 rounded-2xl`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                <Icon name={card.icon as 'AcademicCapIcon'} size={24} className={card.iconColor} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="reveal-on-scroll stagger-2">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="BookOpenIcon" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Currently Learning</h3>
                <p className="text-sm text-muted-foreground">Expanding my skills stack</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personal.currentlyLearning.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold text-muted-foreground">Languages:</span>
              {portfolioData.languages.map((lang) => (
                <span key={lang} className="tag-chip">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}