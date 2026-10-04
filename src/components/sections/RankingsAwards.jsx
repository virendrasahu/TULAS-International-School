import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import { schoolData } from '../../data/schoolData';
import { Award, Star } from 'lucide-react';

export default function RankingsAwards() {
  return (
    <section id="rankings" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up">
          <SectionHeading
            badge="Recognitions & Achievements"
            title="Award-Winning Residential Excellence"
            subtitle="Consistently ranked among the top co-educational boarding institutions in India"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {schoolData.rankings.map((award, idx) => (
            <Reveal key={award.location} direction="up" delay={0.1 * idx}>
              <div className="relative p-6 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200 dark:border-tis-red/40 shadow-sm hover:shadow-lg hover:border-tis-red/60 transition-all text-center space-y-4 overflow-hidden group">
                {/* Top Badge Accent */}
                <div className="w-16 h-16 rounded-full bg-tis-red/10 text-tis-red dark:bg-tis-red/30 dark:text-red-300 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-4xl font-heading font-extrabold text-slate-900 dark:text-white block">
                    {award.rank}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-tis-red dark:text-tis-teal block">
                    {award.location}
                  </span>
                  <h3 className="font-heading font-bold text-slate-800 dark:text-slate-200 text-sm">
                    {award.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>{award.source}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
