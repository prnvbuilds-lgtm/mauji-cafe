import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle, Phone, Sparkles, ShieldCheck, Coffee } from 'lucide-react';
import { maujiData } from '../data/maujiData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const filteredFaqs = maujiData.faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faqs" className="py-20 bg-[#FFFDF9] border-t border-[#EBE6DC] relative overflow-hidden">
      
      {/* Subtle Background Ambience Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFEF98]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#B45309]" /> Everything You Need To Know
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            Straightforward answers about our time-cafe philosophy, pet policy, workspace Wi-Fi, and cashless checkout.
          </p>
        </div>

        {/* Quick Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search questions (e.g. 'pets', 'wifi', 'food', 'billing')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-[#F7F4EB] border border-[#EBE6DC] text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-all shadow-inner"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#F9F6F0] border-[#D8CEBE] shadow-xs'
                    : 'bg-white border-[#EBE6DC] hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-neutral-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#1A1A1A] text-white rotate-180' : 'bg-[#F4EFE6] text-neutral-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#EBE6DC]/80 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F4EFE6] to-[#EAE3D2] border border-[#D8CEBE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-editorial text-xl font-bold text-neutral-900">
              Still have questions before visiting?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Our front desk manager is on WhatsApp daily from 7:30 AM to 10:30 PM.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+918010632001"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-bold border border-[#EBE6DC] shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Call Front Desk</span>
            </a>

            <a
              href="https://wa.me/918010632001?text=Hi%20Mauji,%20I%20have%20a%20question%20before%20visiting"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
