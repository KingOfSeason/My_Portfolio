'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map((l) => l.href.replace('#', ''));
    let current = 'home';
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) current = id;
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => handleNavClick('#home')}
          >
            <AppLogo size={36} />
            <span className="font-bold text-lg tracking-tight text-foreground hidden sm:block">
              Rituraj<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary px-5 py-2.5 rounded-xl text-sm font-bold"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-border text-foreground hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-card border-l border-border flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <span className="font-bold text-lg text-foreground">
              Rituraj<span className="text-primary">.</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <Icon name="XMarkIcon" size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 min-h-[44px] ${
                    isActive
                      ? 'text-primary bg-primary/10 border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="px-4 pb-8">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary w-full py-3.5 rounded-xl text-base font-bold min-h-[44px]"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}