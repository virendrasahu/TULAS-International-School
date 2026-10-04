import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import ScrollProgress from './animation/ScrollProgress';
import CustomCursor from './animation/CustomCursor';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Modal from './components/ui/Modal';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Statistics from './components/sections/Statistics';
import RankingsAwards from './components/sections/RankingsAwards';
import Academics from './components/sections/Academics';
import SportsFacilities from './components/sections/SportsFacilities';
import Facilities from './components/sections/Facilities';
import Personalities from './components/sections/Personalities';
import Testimonials from './components/sections/Testimonials';
import AdmissionsCTA from './components/sections/AdmissionsCTA';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Standout Feature 3: Framer Motion Scroll Progress Bar */}
      <ScrollProgress />

      {/* Optional Standout Feature 4: Desktop Custom Cursor */}
      <CustomCursor />

      {/* Layout Header & Navbar */}
      <Header onOpenModal={handleOpenModal} />
      <Navbar theme={theme} toggleTheme={toggleTheme} onOpenModal={handleOpenModal} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero onOpenModal={handleOpenModal} />
        <About />
        <Statistics />
        <RankingsAwards />
        <Academics onOpenModal={handleOpenModal} />
        <SportsFacilities />
        <Facilities />
        <Personalities />
        <Testimonials />
        <AdmissionsCTA onOpenModal={handleOpenModal} />
        <ContactSection />
      </main>

      {/* Layout Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Quick Enquiry Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
