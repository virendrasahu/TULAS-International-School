import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <Badge variant="red" className="mb-2">
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
