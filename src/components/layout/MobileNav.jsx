import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, GraduationCap } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { schoolData } from '../../data/schoolData';
import instituteLogo from '../../assets/InstituteLogo.png';

export default function MobileNav({ isOpen, onClose, navItems, theme, toggleTheme, onOpenModal }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[990] lg:hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <img
                    src={instituteLogo}
                    alt="Tulas International School Logo"
                    className="h-11 w-auto object-contain drop-shadow-md shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm font-heading leading-tight">
                      Tulas International
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Dehradun</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                  <button
                    onClick={onClose}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <nav className="py-6 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-tis-red dark:hover:text-tis-teal transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Footer Details & Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <a href={`tel:${schoolData.info.helpline}`} className="flex items-center gap-2 text-tis-red font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>Helpline: {schoolData.info.helpline}</span>
                </a>
                <a href={`mailto:${schoolData.info.email}`} className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-tis-teal" />
                  <span>{schoolData.info.email}</span>
                </a>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  onOpenModal();
                }}
                className="w-full"
                icon={GraduationCap}
              >
                Apply for Admission
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
