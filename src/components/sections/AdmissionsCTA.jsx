import React from 'react';
import Reveal from '../../animation/Reveal';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';
import { GraduationCap, Phone } from 'lucide-react';

export default function AdmissionsCTA({ onOpenModal }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-tis-red via-tis-red-dark to-slate-950 text-white relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/campus-life.jpg"
          alt="TIS Campus Life & Students"
          loading="lazy"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tis-red/90 via-tis-red-dark/95 to-slate-950/95" />
      </div>

      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal direction="down">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              Admissions Open 2026-2027
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Begin Your Child's Journey At Tulas International
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Join Dehradun's premier CBSE co-ed boarding school. Experience academic rigor, 16+ sports, and holistic Modern Gurukul mentorship.
            </p>
          </div>
        </Reveal>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {schoolData.admissionSteps.map((step, idx) => (
            <Reveal key={step.step} direction="up" delay={0.1 * idx}>
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3 relative group hover:bg-white/15 transition-colors">
                <span className="text-3xl font-heading font-extrabold text-tis-teal block">
                  {step.step}
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Action Buttons & Helpline */}
        <Reveal direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={onOpenModal}
              icon={GraduationCap}
              className="w-full sm:w-auto"
            >
              Apply / Enquire Online
            </Button>

            <a
              href={`tel:${schoolData.info.helpline}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-base transition-all"
            >
              <Phone className="w-4 h-4 text-tis-teal" />
              <span>Call Helpline: {schoolData.info.helpline}</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
