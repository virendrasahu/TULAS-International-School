import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { schoolData } from '../../data/schoolData';
import Button from '../ui/Button';
import instituteLogo from '../../assets/InstituteLogo.png';

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: School Brand & Overview */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={instituteLogo}
                alt="Tulas International School Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-lg shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-heading font-extrabold text-white text-xl sm:text-2xl tracking-tight leading-tight">
                  TULAS INTERNATIONAL SCHOOL
                </h3>
                <p className="text-xs text-tis-teal font-semibold tracking-wider uppercase mt-0.5">
                  Dehradun, Uttarakhand • CBSE Affiliated
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Established in 2012 under Rishabh Educational Trust, TIS is a top-ranked CBSE co-educational boarding and day school. We combine ancient Gurukul values with contemporary global education across a 22-acre green campus.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <Button variant="primary" size="sm" onClick={onOpenModal}>
                Enquire Now
              </Button>
              <a
                href={schoolData.info.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-tis-teal hover:text-white transition-colors py-2 px-3 rounded-xl bg-slate-900 border border-slate-800"
              >
                <span>Apply Online</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base tracking-wide border-l-2 border-tis-red pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-tis-teal transition-colors">About Modern Gurukul</a>
              </li>
              <li>
                <a href="#stats" className="hover:text-tis-teal transition-colors">Campus Highlights</a>
              </li>
              <li>
                <a href="#rankings" className="hover:text-tis-teal transition-colors">National Rankings</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-tis-teal transition-colors">Academic Curriculum</a>
              </li>
              <li>
                <a href="#sports" className="hover:text-tis-teal transition-colors">16+ Sports Facilities</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-tis-teal transition-colors">Campus & Hostels</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Mandatory Disclosures & Information */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base tracking-wide border-l-2 border-tis-teal pl-3">
              Information & Policies
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#contact" className="hover:text-tis-teal transition-colors">Admissions Process</a>
              </li>
              <li>
                <a href={schoolData.info.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-tis-teal transition-colors inline-flex items-center gap-1">
                  <span>Google Maps Location</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><span className="text-slate-500 cursor-not-allowed">Mandatory Public Disclosure</span></li>
              <li><span className="text-slate-500 cursor-not-allowed">Child Safety & Welfare Policy</span></li>
              <li><span className="text-slate-500 cursor-not-allowed">Boarding House Guidelines</span></li>
              <li><span className="text-slate-500 cursor-not-allowed">Calendar & Terms</span></li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base tracking-wide border-l-2 border-tis-gold pl-3">
              Contact School
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tis-red shrink-0 mt-0.5" />
                <span>{schoolData.info.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tis-teal shrink-0" />
                <div>
                  <a href={`tel:${schoolData.info.helpline}`} className="text-white hover:text-tis-teal font-semibold block">
                    {schoolData.info.helpline}
                  </a>
                  <span className="text-[11px] text-slate-500">Landline: {schoolData.info.landline}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tis-gold shrink-0" />
                <a href={`mailto:${schoolData.info.email}`} className="hover:text-tis-teal transition-colors">
                  {schoolData.info.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Tulas International School, Dehradun. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors">Terms & Conditions</span>
            <span className="hover:text-slate-400 transition-colors">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
