import React from 'react';

export default function Badge({ children, variant = 'red', className = '', icon: Icon }) {
  const variantStyles = {
    red: 'bg-tis-red/10 text-tis-red border-tis-red/20 dark:bg-tis-red/20 dark:text-red-300 dark:border-tis-red/40',
    teal: 'bg-tis-teal/15 text-tis-teal-dark dark:text-tis-teal border-tis-teal/30',
    gold: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
    slate: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
