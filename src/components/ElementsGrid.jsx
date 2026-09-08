import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { maujiData } from '../data/maujiData';
import { Sparkles, ArrowRight, Check, X, MessageSquare, ShieldCheck, MapPin, Coffee, Calendar } from 'lucide-react';

export default function ElementsGrid({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedElement, setSelectedElement] = useState(null);

  const categories = [
    { id: 'all', label: 'All 8 Elements' },
    { id: 'cafe-work', label: 'Cafe & Work' },
    { id: 'creator', label: 'Creator & Media' },
    { id: 'culture', label: 'Culture & Arts' },
  ];

  const filteredElements = activeCategory === 'all'
    ? maujiData.elements
    : maujiData.elements.filter((el) => el.category === activeCategory);

  const handleWhatsAppInquiry = (title) => {
    const text = encodeURIComponent(`Hi Team Mauji! I would like to reserve / inquire about ${title} at Mauji Time Cafe.`);
    window.open(`https://wa.me/918010632001?text=${text}`, '_blank');
  };

  return (
    <section id="elements" className="py-20 bg-[#F7F4EB]/40 border-t border-[#EBE6DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Design & Hospitality Architecture
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            The 8 Mauji Elements
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            Every room possesses its own distinct emotion. Coexist, collaborate, build, or recharge in your own rhythm.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-white text-neutral-600 border border-[#EBE6DC] hover:border-neutral-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Elements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredElements.map((el) => (
            <div
              key={el.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-soft hover:shadow-elevated transition-shadow card-hover flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedElement(el)}
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative h-48 overflow-hidden bg-neutral-900">
                  <img
                    src={el.image}
                    alt={el.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-neutral-900 border border-[#EBE6DC] shadow-xs">
                    {el.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#1A1A1A]/90 backdrop-blur-md text-[#FFEF98] px-2.5 py-0.5 rounded text-xs font-bold border border-white/10">
                    {el.pricing}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-editorial text-xl font-bold text-neutral-900 group-hover:text-[#B45309] transition-colors">
                    {el.title}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {el.description}
                  </p>

                  {/* Perks list preview */}
                  <div className="space-y-1.5 pt-3">
                    {el.perks.slice(0, 2).map((perk, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-700">
                        <Check className="w-3 h-3 text-[#10B981] flex-shrink-0" />
                        <span className="truncate">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedElement(el);
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-[#F7F4EB] group-hover:bg-[#FFEF98] text-neutral-900 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Specs & Rates</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ========================================================= */}
      {/* Interactive Element Detail Modal                          */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedElement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedElement(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-xl w-full border border-[#EBE6DC] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-56 sm:h-64 w-full bg-neutral-950">
                <img
                  src={selectedElement.image}
                  alt={selectedElement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <button
                  onClick={() => setSelectedElement(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFEF98] bg-[#1A1A1A]/80 px-2 py-0.5 rounded border border-[#FFEF98]/20">
                    {selectedElement.badge}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
                    {selectedElement.title}
                  </h3>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 sm:p-7 space-y-5">
                <div>
                  <div className="text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1">
                    {selectedElement.headline}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {selectedElement.description}
                  </p>
                </div>

                {/* Pricing Banner */}
                <div className="p-3.5 rounded-2xl bg-[#F7F4EB] border border-[#EBE6DC] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Starting Access Rate</div>
                    <div className="font-editorial text-2xl font-bold text-neutral-900">{selectedElement.pricing}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-[#10B981] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      ✓ Unlimited craft drinks included
                    </span>
                  </div>
                </div>

                {/* Full Perks Checklist */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Included Amenities & Equipment:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedElement.perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 bg-neutral-50 p-2 rounded-xl border border-neutral-100">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#EBE6DC] flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      const id = selectedElement.id;
                      setSelectedElement(null);
                      onOpenBooking(id);
                    }}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Reserve / Book Space</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppInquiry(selectedElement.title)}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#F7F4EB] hover:bg-[#EAE4D7] text-neutral-800 text-xs font-bold border border-[#EBE6DC] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
