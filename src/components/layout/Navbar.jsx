import React, { useState, useEffect } from 'react';
import { Menu, GraduationCap } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import MobileNav from './MobileNav';
import instituteLogo from '../../assets/InstituteLogo.png';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#stats' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Academics', href: '#academics' },
  { label: 'Sports', href: '#sports' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Visitors', href: '#visitors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme, onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[90] transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-gradient-to-r dark:from-[#3D000B]/95 dark:via-[#1A0208]/95 dark:to-black/95 backdrop-blur-md shadow-md dark:shadow-[0_4px_25px_rgba(185,1,36,0.35)] py-3 border-b-2 border-slate-200 dark:border-tis-red/60'
            : 'bg-white/90 dark:bg-gradient-to-r dark:from-[#3D000B]/90 dark:via-[#1A0208]/90 dark:to-black/90 backdrop-blur-md shadow-sm dark:shadow-[0_4px_20px_rgba(185,1,36,0.25)] py-4 border-b-2 border-slate-200/80 dark:border-tis-red/50'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-tis-red rounded-xl p-1">
            <img
              src={instituteLogo}
              alt="Tulas International School Logo"
              className="h-11 sm:h-13 md:h-14 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="block font-heading font-extrabold text-slate-900 dark:text-white text-base sm:text-lg md:text-xl leading-tight tracking-tight group-hover:text-tis-red transition-colors">
                TULAS
              </span>
              <span className="block text-[10px] sm:text-[11px] md:text-xs font-bold text-tis-red dark:text-tis-teal tracking-wider uppercase leading-none mt-0.5">
                International School
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-tis-red dark:hover:text-tis-teal hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenModal}
              icon={GraduationCap}
              className="hidden sm:inline-flex"
            >
              Admissions
            </Button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-tis-red"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navItems={navItems}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenModal={onOpenModal}
      />
    </>
  );
}
