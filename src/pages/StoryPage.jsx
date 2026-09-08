import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Heart, Clock, MapPin, Phone, Mail, 
  ExternalLink, Compass, Award, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import LocationsStory from '../components/LocationsStory';
import FaqSection from '../components/FaqSection';
import { maujiData } from '../data/maujiData';

export default function StoryPage({ activeCity, setActiveCity }) {
  const currentCity = maujiData.locations[activeCity] || maujiData.locations.pune;

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      
      {/* Page Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#EBE6DC] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFEF98]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309]">
              <Heart className="w-3.5 h-3.5 text-[#DC2626] fill-current" />
              <span>The Anti-Hustle Philosophy</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              An ode to slow living <br />
              <span className="italic font-normal text-[#B45309]">in a hurried world.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Founded in Pune in 2020 by Vandit Purohit, Mauji was created to answer a single question: Why should existing in a cafe come with the pressure of continuous consumption?
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Locations Component */}
      <LocationsStory activeCity={activeCity} setActiveCity={setActiveCity} />

      {/* Both Flagship Outposts Grid */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">Visit Us</span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-neutral-900">
              Our Flagship Sanctuaries
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Open 7 days a week. Walk-ins welcomed anytime with zero prior booking required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(maujiData.locations).map(([key, loc]) => (
              <div 
                key={key} 
                className={`p-6 sm:p-8 rounded-3xl bg-white border-2 transition-all shadow-sm ${
                  activeCity === key ? 'border-[#B45309] ring-2 ring-[#FFEF98]' : 'border-[#EBE6DC]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📍</span>
                    <h3 className="font-editorial text-2xl font-bold text-neutral-900">{loc.name}</h3>
                  </div>
                  <button
                    onClick={() => setActiveCity(key)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeCity === key
                        ? 'bg-[#1A1A1A] text-[#FFEF98]'
                        : 'bg-[#FAF8F5] text-neutral-600 hover:bg-[#F4EFE6]'
                    }`}
                  >
                    {activeCity === key ? 'Active City' : 'Set as City'}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                  {loc.address}
                </p>

                <div className="space-y-3 text-xs text-neutral-700 py-4 border-y border-[#EBE6DC]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B45309]" />
                    <span><strong>Hours:</strong> {loc.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B45309]" />
                    <span><strong>Phone:</strong> {loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#B45309]" />
                    <span><strong>Email:</strong> {loc.email}</span>
                  </div>
                </div>

                <div className="pt-6 flex items-center gap-3">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFEF98]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection />

    </div>
  );
}
