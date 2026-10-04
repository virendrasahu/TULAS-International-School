import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import { schoolData } from '../../data/schoolData';
import { Home, Utensils, HeartPulse, Laptop, Music, Sparkles } from 'lucide-react';

export default function Facilities() {
  const iconMap = {
    Home,
    Utensils,
    HeartPulse,
    Laptop,
    Music,
    Sparkles
  };

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up">
          <SectionHeading
            badge="Infrastructure & Amenities"
            title="World-Class Residential Facilities"
            subtitle="Designed for comfort, security, health, and holistic personal growth"
          />
        </Reveal>

        {/* Residential Life Showcase Banner */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative mt-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-tis-red/30 h-56 sm:h-72 group">
            <img
              src="/images/residential-boarding.jpg"
              alt="Modern Residential Boarding Facilities & Dining at TIS"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white space-y-1">
                <span className="px-3 py-1 rounded-full bg-tis-teal text-slate-950 text-xs font-bold uppercase tracking-wider inline-block">
                  Home Away From Home
                </span>
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Ergonomic Hostels, Organic Dining & Pastoral Care
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
                  Air-conditioned dormitories, 24/7 medical supervision, and wholesome nutritional dining planned by expert chefs create a secure and warm residential environment.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {schoolData.facilities.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Sparkles;
            return (
              <Reveal key={fac.title} direction="up" delay={0.1 * idx}>
                <div className="p-7 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200/80 dark:border-tis-red/30 hover:border-tis-red/50 transition-all space-y-4 group h-full">
                  <div className="w-12 h-12 rounded-2xl bg-tis-red/10 dark:bg-tis-red/30 text-tis-red dark:text-red-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {fac.description}
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
