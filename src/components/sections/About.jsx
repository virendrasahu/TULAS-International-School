import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import { schoolData } from '../../data/schoolData';
import { BookOpen, ShieldCheck, Globe, Home, Quote } from 'lucide-react';

export default function About() {
  const icons = [BookOpen, ShieldCheck, Globe, Home];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up">
          <SectionHeading
            badge="School Philosophy"
            title={schoolData.about.heading}
            subtitle={schoolData.about.subheading}
          />
        </Reveal>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {schoolData.about.quotes.map((q, idx) => (
            <Reveal key={idx} direction={idx === 0 ? 'right' : 'left'} delay={0.2 * idx}>
              <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200/80 dark:border-tis-red/40 shadow-md space-y-4">
                <Quote className="w-10 h-10 text-tis-red/40 dark:text-tis-teal/40" />
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white leading-snug">
                  “{q.quote}”
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed">
                  {q.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Campus Photography Showcase */}
        <Reveal direction="up" delay={0.3}>
          <div className="my-10 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-tis-red/40 group">
            <div className="h-64 sm:h-80 md:h-96 w-full relative">
              <img
                src="/images/about-campus.jpg"
                alt="Tulas International School Campus"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-1">
                  <span className="px-3 py-1 rounded-full bg-tis-red text-white text-xs font-bold uppercase tracking-wider inline-block">
                    Dehradun Campus
                  </span>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    22-Acre Modern Gurukul Environment
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
                    Surrounded by nature in the serene foothills of the Himalayas, offering a tranquil sanctuary for academic excellence and holistic development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {schoolData.about.pillars.map((pillar, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <Reveal key={pillar.title} direction="up" delay={0.1 * idx}>
                <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200 dark:border-tis-red/30 shadow-sm hover:shadow-md hover:border-tis-red/50 transition-all space-y-3 h-full">
                  <div className="w-12 h-12 rounded-xl bg-tis-red/10 dark:bg-tis-red/30 text-tis-red dark:text-red-300 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
