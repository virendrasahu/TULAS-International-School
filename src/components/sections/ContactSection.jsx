import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../../animation/Reveal';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up">
          <SectionHeading
            badge="Get In Touch"
            title="Contact Tulas International School"
            subtitle="Reach out to our admissions office or visit our 22-acre campus in Dehradun"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          
          {/* Left Info & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="right">
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200 dark:border-tis-red/40 shadow-lg space-y-6">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  School Campus & Contact Info
                </h3>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-tis-red shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Address:</strong>
                      <span>{schoolData.info.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-tis-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Admissions Helpline:</strong>
                      <a href={`tel:${schoolData.info.helpline}`} className="text-tis-red dark:text-tis-teal font-semibold hover:underline">
                        {schoolData.info.helpline}
                      </a>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">Landlines: {schoolData.info.landline}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-tis-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Email Address:</strong>
                      <a href={`mailto:${schoolData.info.email}`} className="hover:underline">
                        {schoolData.info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Office Hours:</strong>
                      <span>Monday to Saturday: 8:30 AM – 5:30 PM</span>
                    </div>
                  </div>
                </div>

                {/* Responsive Map iFrame */}
                <div className="pt-2">
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-tis-red/30">
                    <iframe
                      title="Tulas International School Location Map"
                      src="https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India&t=m&z=12&output=embed&iwloc=near"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Direct Contact Form */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#3D000B] dark:via-[#1A0208] dark:to-black border border-slate-200 dark:border-tis-red/40 shadow-lg space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                    Send Us A Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
                    Have questions regarding fee structure, hostel facilities, or campus visits? Fill out the form below.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl">
                    <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    <h4 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Our admissions desk has received your message and will respond to <span className="font-semibold text-tis-red dark:text-red-400">{formState.email || formState.phone}</span> shortly.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="Mobile Number"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                        Your Query / Message
                      </label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="How can we assist you?"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-black/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red dark:focus:border-tis-red placeholder:dark:text-slate-500"
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full" icon={Send}>
                      Submit Message
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
