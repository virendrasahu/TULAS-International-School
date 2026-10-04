import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import { schoolData } from '../../data/schoolData';
import { Trees, Trophy, Users, HeartPulse } from 'lucide-react';

export default function Statistics() {
  const iconMap = {
    Tree: Trees,
    Trophy: Trophy,
    Users: Users,
    HeartPulse: HeartPulse
  };

  return (
    <section id="stats" className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tis-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal direction="down">
          <SectionHeading
            badge="Campus Highlights"
            title="Tulas At A Glance"
            subtitle="Factual metrics defining our residential education excellence in Dehradun"
            className="[&_h2]:text-white [&_p]:text-slate-400"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {schoolData.stats.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Trophy;
            return (
              <Reveal key={stat.label} direction="up" delay={0.15 * idx}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#3D000B] via-[#1A0208] to-black border border-tis-red/30 hover:border-tis-red/60 transition-all space-y-4 group shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-tis-red/30 text-red-300 group-hover:bg-tis-red group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-xl font-bold text-tis-teal">{stat.suffix}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-100 mt-1">
                      {stat.label}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stat.description}
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
