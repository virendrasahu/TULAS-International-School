import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send } from 'lucide-react';
import Button from './Button';

export default function Modal({ isOpen, onClose, defaultGrade = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: defaultGrade,
    state: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide student/parent name and mobile number.');
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', grade: '', state: '' });
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card with Dark Red & Black Gradient in Dark Mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-white dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black rounded-3xl shadow-2xl dark:shadow-[0_20px_60px_rgba(185,1,36,0.35)] border border-slate-200 dark:border-tis-red/40 p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Dark mode subtle ambient background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tis-red/20 rounded-full blur-3xl pointer-events-none hidden dark:block" />

            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-black/50 dark:hover:bg-tis-red/40 dark:border dark:border-white/10 transition-colors z-20"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4 relative z-10">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-slate-600 dark:text-slate-200 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Tulas International School. Our admissions counselor will contact you shortly at <span className="font-semibold text-tis-red dark:text-red-400">{formData.phone}</span>.
                </p>
                <div className="pt-4">
                  <Button variant="primary" onClick={resetAndClose} className="w-full">
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-tis-red dark:text-red-400">
                    Admissions 2026-27
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-1">
                    Enquire Now at TIS
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
                    Discover how Tulas International School empowers students for academic & life success.
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-300 text-xs">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                      Student / Parent Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                        Applying for Class
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red"
                      >
                        <option value="" className="dark:bg-slate-900">Select Grade</option>
                        <option value="Class IV" className="dark:bg-slate-900">Class IV</option>
                        <option value="Class V" className="dark:bg-slate-900">Class V</option>
                        <option value="Class VI" className="dark:bg-slate-900">Class VI</option>
                        <option value="Class VII" className="dark:bg-slate-900">Class VII</option>
                        <option value="Class VIII" className="dark:bg-slate-900">Class VIII</option>
                        <option value="Class IX" className="dark:bg-slate-900">Class IX</option>
                        <option value="Class X" className="dark:bg-slate-900">Class X</option>
                        <option value="Class XI" className="dark:bg-slate-900">Class XI</option>
                        <option value="Class XII" className="dark:bg-slate-900">Class XII</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                        State / Region
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="e.g. Uttarakhand, Delhi"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <Button type="submit" variant="primary" className="w-full" icon={Send}>
                      Submit Admission Enquiry
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 dark:text-slate-400">
                    By submitting, you agree to receive official admission communications from TIS Dehradun.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
