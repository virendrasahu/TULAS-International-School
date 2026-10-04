import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import Badge from '../ui/Badge';
import { schoolData } from '../../data/schoolData';
import { Trophy, Zap } from 'lucide-react';

export default function SportsFacilities() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Outdoor', 'Indoor', 'Equestrian', 'Aquatics', 'Team'];

  const filteredSports = activeCategory === 'All'
    ? schoolData.sports.items
    : schoolData.sports.items.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="sports" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up">
          <SectionHeading
            badge="16+ Sports Infrastructure"
            title={schoolData.sports.heading}
            subtitle={schoolData.sports.subheading}
          />
        </Reveal>

        {/* Sports Infrastructure Showcase Banner */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative mt-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-tis-red/30 h-56 sm:h-72 group">
            <img
              src="/images/sports-athletics.jpg"
              alt="TIS Sports Facilities & Athletics Infrastructure"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white space-y-1">
                <span className="px-3 py-1 rounded-full bg-tis-red text-white text-xs font-bold uppercase tracking-wider inline-block">
                  Olympic-Grade Infrastructure
                </span>
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  State-of-the-Art Sports Arenas & Professional Coaching
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
                  From synthetic turf football grounds and all-weather courts to equestrian arenas and semi-Olympic swimming pools, athletic excellence is integral to life at TIS.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-tis-red text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {filteredSports.map((sport, idx) => (
            <Reveal key={sport.name} direction="up" delay={0.05 * (idx % 8)}>
              <div className="p-5 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200 dark:border-tis-red/30 shadow-sm hover:shadow-lg hover:border-tis-red/50 transition-all space-y-3 group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-tis-teal/15 text-tis-teal-dark dark:text-tis-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <Badge variant="slate" className="text-[10px]">
                      {sport.category}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base">
                    {sport.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300 mt-1 leading-relaxed">
                    {sport.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-tis-red dark:text-tis-teal font-semibold">
                  <span>Professional Coaching</span>
                  <Zap className="w-3 h-3" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
