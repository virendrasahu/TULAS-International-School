import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import { schoolData } from '../../data/schoolData';
import { Award, UserCheck } from 'lucide-react';

export default function Personalities() {
  return (
    <section id="visitors" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal direction="up">
          <SectionHeading
            badge="Eminent Campus Visitors"
            title="Influential Personalities On Campus"
            subtitle="Olympic Champions, National Sports Captains, Leaders & Youth Icons who have visited Tulas"
            className="[&_h2]:text-white [&_p]:text-slate-400"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {schoolData.personalities.map((person, idx) => (
            <Reveal key={person.name} direction="up" delay={0.08 * idx}>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#3D000B] via-[#1A0208] to-black border border-tis-red/30 hover:border-tis-red/60 transition-all space-y-4 h-full flex flex-col justify-between group shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-tis-red/30 text-red-200 text-[10px] font-bold uppercase tracking-wider">
                      {person.badge}
                    </span>
                    <UserCheck className="w-4 h-4 text-slate-400 group-hover:text-tis-teal transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg group-hover:text-tis-teal transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-xs text-tis-teal font-semibold mt-0.5">
                      {person.role}
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{person.description}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Award className="w-3.5 h-3.5 text-tis-gold" />
                  <span>Campus Interaction & Mentorship</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
