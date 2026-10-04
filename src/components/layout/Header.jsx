import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { schoolData } from '../../data/schoolData';

export default function Header({ onOpenModal }) {
  return (
    <div className="bg-slate-900 dark:bg-gradient-to-r dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black text-slate-300 text-xs py-2 px-4 border-b border-slate-800 dark:border-tis-red/40 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${schoolData.info.helpline}`}
            className="flex items-center gap-1.5 hover:text-tis-teal transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-tis-red" />
            <span>Admissions Helpline: <strong className="text-white">{schoolData.info.helpline}</strong></span>
          </a>
          <a
            href={`mailto:${schoolData.info.email}`}
            className="flex items-center gap-1.5 hover:text-tis-teal transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-tis-teal" />
            <span>{schoolData.info.email}</span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-tis-gold" />
            <span className="truncate max-w-xs">{schoolData.info.address}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="bg-tis-red/20 text-tis-red px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-tis-red/30">
            CBSE Boarding & Day School
          </span>
          <button
            onClick={onOpenModal}
            className="text-tis-teal hover:underline font-semibold transition-colors"
          >
            Enquire Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
