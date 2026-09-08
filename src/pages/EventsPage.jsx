import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Calendar, MapPin, Users, Heart, ArrowRight, 
  MessageSquare, Check, Mic, Palette, BookOpen, Coffee 
} from 'lucide-react';
import EventsFeed from '../components/EventsFeed';
import { maujiData } from '../data/maujiData';

export default function EventsPage({ activeCity }) {
  const currentCity = maujiData.locations[activeCity] || maujiData.locations.pune;

  const eventTypes = [
    { title: "Business Showers", desc: "Celebrate and launch local indie ventures, books, and freelance studios with community love.", icon: Sparkles },
    { title: "Intimate Music & Open Mics", desc: "Acoustic indie sets, jazz evenings, and unplugged poetry in our garden courtyard.", icon: Mic },
    { title: "Art & Pottery Workshops", desc: "Tactile offline creation — clay modeling, watercolor journaling, and coffee painting.", icon: Palette },
    { title: "Reading & Book Clubs", desc: "Silent reading parties and moderated literary salons surrounded by 2,000+ curated books.", icon: BookOpen }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      
      {/* Page Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#EBE6DC] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFEF98]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309]">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Cultural Happenings & Salons • {currentCity.name}</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Where curious minds <br />
              <span className="italic font-normal text-[#B45309]">gather and create.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Mauji is more than desks and coffee — it's a living cultural commons. From founder business showers to Sunday jazz sessions and pottery workshops, there is always something warm brewing.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Mauji Events */}
      <section className="py-12 bg-white border-b border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFEF98] text-[#B45309] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial text-lg font-bold text-neutral-900">{type.title}</h3>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Events Feed with RSVP & Filters */}
      <EventsFeed activeCity={activeCity} />

      {/* Host an Event at Mauji Banner */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#EBE6DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EBE6DC] shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">Community Curators & Artists</span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-900">
                Want to host your workshop, launch, or meetup at Mauji?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We provide our spaces, AV sound equipment, projection, specialty coffee service, and promotional reach to our 10,000+ community members.
              </p>
            </div>
            <a
              href="https://wa.me/918010632001?text=Hi%20Mauji!%20I%20would%20like%20to%20host%20an%20event%20/%20workshop%20at%20Mauji."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#FFEF98]" />
              <span>Propose Your Event</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
