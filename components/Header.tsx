
import React from 'react';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <a
    href={href}
    className={`px-3 py-1.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-black/5 dark:hover:bg-white/5 hover:text-accent-light dark:hover:text-accent-dark transition-colors ${className}`}
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-40">
      <div className="container max-w-6xl mx-auto px-5">
        <nav className="flex items-center justify-between gap-3 bg-gradient-to-r from-white/10 dark:from-white/5 to-transparent p-2.5 md:px-4 rounded-xl backdrop-blur-md shadow-lg shadow-black/20 ring-1 ring-black/5 dark:ring-white/10">
          <div className="font-bold text-lg tracking-wide">Anthony David</div>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="hidden md:flex items-center gap-1">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
            </div>
            <NavLink href="#contact" className="md:hidden">Contact</NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-light dark:text-muted-dark hover:bg-black/5 dark:hover:bg-white/5 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              aria-label="Toggle theme"
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
