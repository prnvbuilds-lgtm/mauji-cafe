import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Users, Clock, Wifi, Coffee, ArrowRight, Check, 
  MapPin, Phone, MessageSquare, X, ShieldCheck, Calendar 
} from 'lucide-react';
import { maujiData } from '../data/maujiData';

export default function SpacesPage({ activeCity, onOpenBooking }) {
  const currentCity = maujiData.locations[activeCity] || maujiData.locations.pune;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalSpace, setActiveModalSpace] = useState(null);

  const categories = [
    { id: 'all', label: 'All 8 Spaces' },
    { id: 'cafe-work', label: 'Work & Focus' },
    { id: 'creator', label: 'Studio & Media' },
    { id: 'culture', label: 'Gatherings & Culture' }
  ];

  const filteredSpaces = selectedCategory === 'all'
    ? maujiData.elements
    : maujiData.elements.filter(s => s.category === selectedCategory);

  const handleWhatsApp = (spaceTitle) => {
    const text = encodeURIComponent(`Hi Mauji Team! I would like to check availability and book ${spaceTitle} at ${currentCity.name}.`);
    window.open(`https://wa.me/918010632001?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#EBE6DC] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFEF98]/25 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309]">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Architectural Sanctuary • {currentCity.name}</span>
            </div>
            
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Spaces Designed for <br />
              <span className="italic font-normal text-[#B45309]">Every Rhythm of Mind.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              From whisper-quiet reading libraries and sunny courtyard nooks to broadcast-ready podcast studios and private boardroom suites — discover our 8 distinct architectural micro-zones.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#1A1A1A] text-[#FFEF98] shadow-md scale-105'
                      : 'bg-white text-neutral-600 border border-[#EBE6DC] hover:border-neutral-400 hover:text-neutral-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpaces.map((space) => {
            const perksList = space.perks || space.highlights || [];
            const displayRate = space.pricing || space.rate || "Included in Pass";
            const badgeLabel = space.badge || space.marathiSubtitle || space.category;

            return (
              <div
                key={space.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#EBE6DC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image */}
                  <div className="relative h-56 overflow-hidden bg-neutral-100">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-neutral-900 flex items-center gap-1.5 shadow-xs">
                      <Users className="w-3.5 h-3.5 text-[#B45309]" />
                      <span>{space.capacity || 'Open Seating'}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#1A1A1A]/85 backdrop-blur-md text-[#FFEF98] px-3 py-1 rounded-full text-xs font-mono font-bold">
                      {displayRate}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#B45309] bg-[#FFEF98]/50 px-2.5 py-0.5 rounded-full">
                        {badgeLabel}
                      </span>
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-neutral-900">{space.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {space.description}
                    </p>

                    {/* Highlights / Perks */}
                    <div className="pt-2 space-y-1.5 border-t border-[#F0EBE1]">
                      {perksList.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalSpace(space)}
                    className="flex-1 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFE6] text-neutral-800 font-bold text-xs border border-[#EBE6DC] transition-all cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleWhatsApp(space.title)}
                    className="px-4 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeModalSpace && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#EBE6DC] shadow-2xl relative p-6 sm:p-8"
            >
              <button
                onClick={() => setActiveModalSpace(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <img
                  src={activeModalSpace.image}
                  alt={activeModalSpace.title}
                  className="w-full h-64 sm:h-72 object-cover rounded-2xl"
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-[#B45309] uppercase">
                      {activeModalSpace.badge || activeModalSpace.marathiSubtitle || activeModalSpace.category}
                    </span>
                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-900">{activeModalSpace.title}</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-400">Pricing Rate</div>
                    <div className="font-mono text-xl font-bold text-[#B45309]">
                      {activeModalSpace.pricing || activeModalSpace.rate || 'Included in Pass'}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">{activeModalSpace.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 py-3 border-y border-[#EBE6DC]">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-neutral-500" />
                    <div>
                      <div className="text-[11px] text-neutral-400 font-bold uppercase">Seating Capacity</div>
                      <div className="text-xs font-bold text-neutral-800">
                        {activeModalSpace.capacity || 'Open Lounge & Garden'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-neutral-500" />
                    <div>
                      <div className="text-[11px] text-neutral-400 font-bold uppercase">Included Amenities</div>
                      <div className="text-xs font-bold text-neutral-800">Unlimited Specialty Brews & High-Speed WiFi</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">Space Specifications</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {(activeModalSpace.perks || activeModalSpace.highlights || []).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EBE6DC]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={() => handleWhatsApp(activeModalSpace.title)}
                    className="flex-1 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FFEF98]" />
                    <span>Inquire / Reserve via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalSpace(null);
                      if (onOpenBooking) onOpenBooking();
                    }}
                    className="px-6 py-3 rounded-full bg-[#FFEF98] hover:bg-[#FDE047] text-neutral-900 font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    Quick Book
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
