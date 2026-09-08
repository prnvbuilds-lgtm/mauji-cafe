import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Check, X, ArrowRight, ShieldCheck, Clock, 
  Coffee, HelpCircle, Phone, MessageSquare, Building2 
} from 'lucide-react';
import PricingSection from '../components/PricingSection';
import { maujiData } from '../data/maujiData';

export default function PricingPage({ onOpenBooking }) {
  const comparison = [
    {
      feature: "Cost Model",
      traditional: "Pay per drink/food item (₹250 - ₹400 per cup)",
      mauji: "Pay purely for time spent (Starts at ₹180/hr)",
      winner: "mauji"
    },
    {
      feature: "Specialty Coffee",
      traditional: "Pay extra for each cup (₹300 - ₹450 each)",
      mauji: "100% Unlimited artisanal brews included (₹0 extra)",
      winner: "mauji"
    },
    {
      feature: "Outside Food (BYO)",
      traditional: "Strictly prohibited or confiscated",
      mauji: "100% Welcomed (Tiffin, Swiggy, Zomato + free cutlery)",
      winner: "mauji"
    },
    {
      feature: "Waiter / Table Pressure",
      traditional: "Frequent check-ins forcing re-orders",
      mauji: "Zero waiter intrusion; stay and focus peacefully",
      winner: "mauji"
    },
    {
      feature: "Wi-Fi & Power",
      traditional: "Frequent disconnects, limited surge sockets",
      mauji: "300 Mbps dual fiber failover, sockets at every seat",
      winner: "mauji"
    },
    {
      feature: "GST Input Tax Credit",
      traditional: "Rarely provided for individual cafe bills",
      mauji: "Automated GST business invoices provided for all passes",
      winner: "mauji"
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      
      {/* Page Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#EBE6DC] overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#FFEF98]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309]">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Transparent Pricing Guarantee</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Invest in your focus. <br />
              <span className="italic font-normal text-[#B45309]">Not overpriced lattes.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              No hidden service charges. No minimum drink mandates. Just transparent, honest rates with unlimited artisan coffee and tea poured all day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Sections (Tabs: Hourly, Coworking, Corporate) */}
      <PricingSection onOpenBooking={onOpenBooking} />

      {/* Traditional Cafe vs Mauji Comparison Matrix */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#EBE6DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">Value Breakdown</span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-neutral-900">
              Traditional Cafe vs Mauji Time Cafe
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Why remote workers, creators, and freelancers make the switch.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#EBE6DC] bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#EBE6DC] bg-[#FAF8F5]">
                  <th className="p-4 sm:p-5 font-bold text-neutral-500 uppercase tracking-wider text-xs">Experience</th>
                  <th className="p-4 sm:p-5 font-bold text-neutral-400 text-xs">Traditional Coffee Chains</th>
                  <th className="p-4 sm:p-5 font-bold text-neutral-900 bg-[#FFEF98]/40 text-xs">
                    <span className="text-[#B45309]">Mauji Time Cafe</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBE6DC]">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/60 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-neutral-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-neutral-500">{row.traditional}</td>
                    <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FFEF98]/20 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.mauji}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Corporate & Team Offsite Banner */}
      <section className="py-16 bg-white border-t border-[#EBE6DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-[#1A1A1A] to-[#2D2A26] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FFEF98] font-bold">
                Custom Enterprise & Team Packages
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
                Planning a team offsite, startup sprint, or private buyout?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                We provide full-floor buyouts, whiteboards, catering partnerships, 4K projection, and curated coffee tastings for teams of 10 to 60.
              </p>
            </div>
            <a
              href="https://wa.me/918010632001?text=Hi%20Mauji!%20I%20would%20like%20to%20inquire%20about%20a%20Corporate%20Sprint%20/%20Team%20Buyout%20package."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#FFEF98] hover:bg-[#FDE047] text-neutral-900 font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#B45309]" />
              <span>Request Corporate Quote</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
