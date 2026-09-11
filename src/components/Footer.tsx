import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const year = new Date()?.getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-border bg-secondary/50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Linear Single-Row Pattern */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-bold text-base text-foreground">
              Rituraj<span className="text-primary">.</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1 flex-wrap justify-center">
            {['Home', 'About', 'Skills', 'Projects', 'Contact']?.map((item, i, arr) => (
              <React.Fragment key={item}>
                <a
                  href={`#${item?.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 min-h-[44px] flex items-center"
                >
                  {item}
                </a>
                {i < arr?.length - 1 && (
                  <span className="text-border text-xs">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Social + Copyright */}
          <div className="flex items-center gap-3">
            <a
              href={personal?.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <Icon name="LinkIcon" size={16} />
            </a>
            <a
              href={personal?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <Icon name="CodeBracketIcon" size={16} />
            </a>
            <span className="text-xs text-muted-foreground ml-1">
              © {year}
            </span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-5 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            Built with{' '}
            <span className="text-primary font-semibold">Next.js</span> &{' '}
            <span className="text-primary font-semibold">Tailwind CSS</span>
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}