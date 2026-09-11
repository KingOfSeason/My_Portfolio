'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 sm:py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="reveal-on-scroll mb-16 text-center">
          <p className="section-label mb-3">What I've Built</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            My <span className="text-gradient-green">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {portfolioData?.projects?.map((project, i) => (
            <div
              key={project?.id}
              className={`reveal-on-scroll stagger-${i + 1} glass-card rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10`}
            >
              {/* Project Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <AppImage
                  src={project?.image}
                  alt={`${project?.name} - project screenshot showing the application interface`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                {/* Featured badge */}
                {project?.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="tag-chip bg-primary text-primary-foreground border-primary/50 text-xs font-bold px-3 py-1">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Quick links on hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project?.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-primary transition-colors"
                    aria-label={`View ${project?.name} on GitHub`}
                  >
                    <Icon name="CodeBracketIcon" size={16} />
                  </a>
                  {project?.liveUrl !== '#' && (
                    <a
                      href={project?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-primary transition-colors"
                      aria-label={`View ${project?.name} live demo`}
                    >
                      <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project?.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project?.longDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project?.tech?.map((tech) => (
                    <span key={tech} className="tag-chip">{tech}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project?.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-primary flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 min-h-[44px] no-underline"
                    aria-label={`View ${project?.name} source code on GitHub`}
                  >
                    <Icon name="CodeBracketIcon" size={16} />
                    GitHub
                  </a>
                  {project?.liveUrl !== '#' ? (
                    <a
                      href={project?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 min-h-[44px] no-underline"
                      aria-label={`View ${project?.name} live demo`}
                    >
                      <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 min-h-[44px] bg-muted text-muted-foreground cursor-not-allowed"
                    >
                      <Icon name="LockClosedIcon" size={16} />
                      Local App
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal-on-scroll mt-12 text-center">
          <a
            href={portfolioData?.personal?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base no-underline min-h-[44px]"
          >
            <Icon name="CodeBracketIcon" size={20} />
            View All Projects on GitHub
            <Icon name="ArrowTopRightOnSquareIcon" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}