import React from 'react';
import { ShieldCheck, Award, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Reveal from '../../animation/Reveal';
import { schoolData } from '../../data/schoolData';
import websiteBanner from '../../assets/WebsiteBannerImage.png';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28 bg-slate-50 dark:bg-slate-950">
      {/* TULAS Campus Aerial Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-90 dark:opacity-60 transition-opacity duration-300"
        style={{ backgroundImage: `url(${websiteBanner})` }}
        aria-hidden="true"
      />

      {/* Red-infused Horizontal Gradient Overlay in Light and Dark Modes */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-red-100/90 via-white/70 to-white/10 dark:from-[#4A000D]/95 dark:via-[#1A0208]/85 dark:to-slate-950/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-tis-red/10 via-tis-teal/5 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-gradient-to-r dark:from-[#3D000B] dark:to-black border border-tis-red/20 text-tis-red dark:text-red-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
                <ShieldCheck className="w-4 h-4 text-tis-red" />
                <span>{schoolData.hero.badge}</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Where Heritage Meets{' '}
                <span className="bg-gradient-to-r from-tis-red via-red-600 to-amber-600 bg-clip-text text-transparent">
                  Future-Ready
                </span>{' '}
                Education.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-900 dark:text-slate-100 max-w-2xl mx-auto lg:mx-0 font-semibold leading-relaxed drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)] dark:drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {schoolData.hero.subheading}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenModal}
                  icon={ArrowRight}
                  className="w-full sm:w-auto shadow-lg shadow-tis-red/20"
                >
                  {schoolData.hero.primaryCta}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#about"
                  className="w-full sm:w-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md font-bold shadow-sm"
                >
                  {schoolData.hero.secondaryCta}
                </Button>
              </div>
            </Reveal>

            {/* Quick Metrics Badges */}
            <Reveal direction="up" delay={0.5}>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-gradient-to-r dark:from-[#3D000B] dark:to-black backdrop-blur-md border border-white/90 dark:border-tis-red/30 shadow-md grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="block text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    22 Acres
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-300">Green Campus</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-heading text-tis-red dark:text-red-400">
                    16+ Sports
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-300">Olympic Infrastructure</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-heading text-tis-teal-dark dark:text-tis-teal">
                    6:1 Ratio
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-300">Student Mentorship</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Hero Graphic Card */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="scale" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Back Glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-tis-red to-tis-teal opacity-20 blur-xl" />

                {/* Main Card Container with Dark Red & Black Gradient in Dark Mode */}
                <div className="relative rounded-3xl bg-white/95 dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black backdrop-blur-md border border-slate-200 dark:border-tis-red/40 p-6 sm:p-8 shadow-2xl space-y-6">
                  
                  {/* Card Header Badge */}
                  <div className="flex items-center justify-between">
                    <Badge variant="teal" icon={Sparkles}>
                      Modern Gurukul Ethos
                    </Badge>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                      Est. 2012
                    </span>
                  </div>

                  {/* Campus Visual Frame */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 text-white p-6 flex flex-col justify-between shadow-inner">
                    {/* Background preview image inside visual frame */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{ backgroundImage: `url(${websiteBanner})` }}
                    />
                    
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white">
                        Dehradun, India
                      </span>
                      <div className="w-8 h-8 rounded-full bg-tis-red flex items-center justify-center text-white shadow-md">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="z-10 space-y-1">
                      <span className="text-xs text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-tis-teal" /> Chakrata Road, Dhoolkot
                      </span>
                      <h3 className="text-xl font-heading font-extrabold text-white">
                        Ranked #1 Boarding School
                      </h3>
                      <p className="text-xs text-slate-300">
                        Top CBSE Residential School for Boys & Girls (Class 4 to 12)
                      </p>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50/90 dark:bg-black/60 border border-slate-100 dark:border-tis-red/30">
                      <span className="font-bold text-slate-900 dark:text-white block">24/7 Infirmary</span>
                      <span className="text-slate-500 dark:text-slate-400">Resident Medical Staff</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50/90 dark:bg-black/60 border border-slate-100 dark:border-tis-red/30">
                      <span className="font-bold text-slate-900 dark:text-white block">Organic Dining</span>
                      <span className="text-slate-500 dark:text-slate-400">Farm Fresh Nutrition</span>
                    </div>
                  </div>

                  {/* Floating Action CTA */}
                  <button
                    onClick={onOpenModal}
                    className="w-full py-3 rounded-xl bg-slate-900 dark:bg-tis-red dark:hover:bg-tis-red-dark text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                  >
                    <span>Schedule Campus Visit</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
