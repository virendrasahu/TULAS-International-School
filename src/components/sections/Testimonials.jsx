import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import { schoolData } from '../../data/schoolData';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages = [
  { url: '/images/campus-life.jpg', alt: 'TIS campus environment and student activities' },
  { url: '/images/sports-athletics.jpg', alt: 'TIS sports facilities and athletics' },
  { url: '/images/academics-learning.jpg', alt: 'Interactive classroom learning at TIS' },
  { url: '/images/residential-boarding.jpg', alt: 'Residential boarding hostel and student care' },
  { url: '/images/stem-lab.jpg', alt: 'Science laboratory and academic exposure' },
  { url: '/images/about-campus.jpg', alt: 'TIS modern green campus architecture' }
];

export default function Testimonials() {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, schoolData.testimonials.length - cardsPerPage);

  // Safety check on window resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Subtle Autoplay (5.5s, pauses on hover/focus & reduced motion)
  useEffect(() => {
    if (isPaused) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  // Mobile Touch / Swipe Handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minDistance = 40;

    if (distance > minDistance) {
      // Swipe left -> Next slide
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else if (distance < -minDistance) {
      // Swipe right -> Prev slide
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    } else if (e.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up">
          <SectionHeading
            badge="Parent Feedback"
            title="What Parents Say About TIS"
            subtitle="Genuine reviews from parents who trusted Tulas International School for their children's residential journey"
          />
        </Reveal>

        {/* Carousel Container */}
        <Reveal direction="up" delay={0.2}>
          <div
            className="relative mt-10 focus:outline-none focus:ring-2 focus:ring-tis-red/50 rounded-3xl p-1"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-label="Parent Testimonials Carousel. Use left and right arrow keys to navigate."
          >
            <div className="overflow-hidden rounded-3xl py-2">
              <motion.div
                className="flex -mx-3"
                animate={{ x: `-${currentIndex * (100 / cardsPerPage)}%` }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              >
                {schoolData.testimonials.map((t, idx) => {
                  const imgObj = testimonialImages[idx % testimonialImages.length];
                  return (
                    <div
                      key={t.name}
                      className="shrink-0 px-3 flex flex-col"
                      style={{ width: `${100 / cardsPerPage}%` }}
                    >
                      <div className="p-0 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200 dark:border-tis-red/30 shadow-sm hover:shadow-lg hover:border-tis-red/50 transition-all overflow-hidden flex flex-col justify-between h-full group">
                        
                        {/* Contextual Unsplash Image Header (approx 38% height) */}
                        <div className="relative h-44 sm:h-48 w-full overflow-hidden shrink-0">
                          <img
                            src={imgObj.url}
                            alt={imgObj.alt}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-black/80 via-transparent to-transparent" />
                          <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-full bg-slate-900/80 dark:bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wide">
                            TIS Experience
                          </span>
                        </div>

                        {/* Testimonial Text & Details */}
                        <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                          <div className="space-y-3">
                            {/* Rating Stars */}
                            <div className="flex items-center space-x-1 text-amber-500" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                              {[...Array(t.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500" />
                              ))}
                            </div>

                            <Quote className="w-7 h-7 text-tis-red/40 dark:text-tis-teal/40" />

                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                              "{t.comment}"
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                            <div>
                              <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                                {t.name}
                              </h4>
                              <span className="text-xs text-tis-red dark:text-tis-teal font-medium block">
                                {t.relation}
                              </span>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Carousel Navigation Controls & Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
              
              {/* Pagination Dots */}
              <div className="flex items-center space-x-2" role="tablist" aria-label="Testimonial slide dots">
                {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    aria-selected={currentIndex === dotIdx}
                    role="tab"
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-tis-red ${
                      currentIndex === dotIdx
                        ? 'w-8 bg-tis-red dark:bg-tis-teal'
                        : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))}
                  aria-label="Previous testimonial slide"
                  className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-tis-red hover:text-white dark:hover:bg-tis-red dark:hover:text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-tis-red cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))}
                  aria-label="Next testimonial slide"
                  className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-tis-red hover:text-white dark:hover:bg-tis-red dark:hover:text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-tis-red cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
