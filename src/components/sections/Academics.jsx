import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';
import { BookOpen, CheckCircle, GraduationCap } from 'lucide-react';

export default function Academics({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentLevel = schoolData.academics.levels[activeTab];

  return (
    <section id="academics" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up">
          <SectionHeading
            badge="Academic Programs"
            title={schoolData.academics.heading}
            subtitle={schoolData.academics.subheading}
          />
        </Reveal>

        {/* Tab Buttons */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-100 dark:bg-gradient-to-r dark:from-[#3D000B] dark:to-black border border-transparent dark:border-tis-red/30 max-w-2xl mx-auto">
            {schoolData.academics.levels.map((level, idx) => (
              <button
                key={level.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex-1 min-w-[140px] text-center cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white dark:bg-tis-red text-tis-red dark:text-white shadow-md font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {level.name.split('(')[0]}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active Tab Panel */}
        <div className="mt-10">
          <Reveal key={currentLevel.id} direction="fade">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200 dark:border-tis-red/40 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-tis-teal/15 text-tis-teal-dark dark:text-tis-teal text-xs font-bold">
                  {currentLevel.tagline}
                </span>

                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                  {currentLevel.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed">
                  {currentLevel.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentLevel.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                      <CheckCircle className="w-4 h-4 text-tis-red shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="primary" size="md" onClick={onOpenModal} icon={GraduationCap}>
                    Inquire About Syllabus & Admissions
                  </Button>
                </div>
              </div>

              {/* Right Side Visual Box */}
              <div className="lg:col-span-5">
                <div className="relative p-6 rounded-2xl overflow-hidden text-white space-y-4 shadow-xl border border-tis-red/30 group">
                  <img
                    src={activeTab === 0 ? '/images/academics-learning.jpg' : '/images/stem-lab.jpg'}
                    alt="TIS Academic Learning Environment"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/50" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white">
                      CBSE Affiliated Curriculum
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Integrated learning modules combining theoretical rigor with practical laboratory work, STEM projects, and regular assessments.
                    </p>
                    <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-slate-200">
                      <span>Class 4th to 12th Entry</span>
                      <span className="font-bold text-tis-teal">Co-Ed Boarding</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
