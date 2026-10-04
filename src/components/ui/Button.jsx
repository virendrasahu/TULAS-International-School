import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  type = 'button',
  className = '',
  icon: Icon,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-sm';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-tis-red to-tis-red-dark text-white hover:shadow-lg hover:shadow-tis-red/25 focus:ring-tis-red border border-tis-red/30',
    secondary: 'bg-tis-teal text-slate-950 font-bold hover:bg-tis-teal-dark hover:text-white focus:ring-tis-teal',
    gold: 'bg-gradient-to-r from-tis-gold to-amber-600 text-slate-950 font-bold hover:shadow-md focus:ring-tis-gold',
    outline: 'border-2 border-tis-red text-tis-red dark:text-red-400 dark:border-red-500 hover:bg-tis-red hover:text-white dark:hover:bg-tis-red dark:hover:text-white focus:ring-tis-red',
    ghost: 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        href={href}
        className={combinedClass}
        {...props}
      >
        {children}
        {Icon && <Icon className="w-4 h-4" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </motion.button>
  );
}
