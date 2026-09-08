import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, ArrowRight, MessageSquare, ShieldCheck, Briefcase, Clock, Laptop } from 'lucide-react';
import { maujiData } from '../data/maujiData';

export default function PricingSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('hourly'); // 'hourly' | 'coworking' | 'corporate'

  const handleWhatsAppInquiry = (planName) => {
    const text = encodeURIComponent(`Hi Team Mauji! I am interested in booking / getting more details about the ${planName} at Mauji Time Cafe.`);
    window.open(`https://wa.me/918010632001?text=${text}`, '_blank');
  };

  const tabs = [
    { id: 'hourly', label: 'Time Passes', icon: Clock, subtitle: 'Pay for time, unlimited craft brews' },
    { id: 'coworking', label: 'Coworking Passes', icon: Laptop, subtitle: 'Day, weekly & monthly resident desks' },
    { id: 'corporate', label: 'B2B & Teams', icon: Briefcase, subtitle: 'Startup sprints, shoots & private buyouts' },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Honest & Transparent Pricing
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Plans for every rhythm
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            From a quick 1-hour coffee brainstorm to dedicated monthly desks and corporate offsites.
          </p>

          {/* Pricing Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white shadow-md'
                      : 'bg-[#F4EFE6] text-neutral-700 hover:bg-[#EAE4D7] border border-[#E3DCD0]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FFEF98]' : 'text-[#B45309]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Pricing Content */}
        {activeTab === 'hourly' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Standard 1-Hour Pass */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EBE6DC] shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Drop-In Pass
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-editorial text-4xl font-bold text-neutral-900">₹210</span>
                  <span className="text-xs text-neutral-500">/first hour</span>
                </div>
                <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
                  Pro-rated to the exact minute after the first hour. Leave whenever you wish.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#F4EFE6]">
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Unlimited craft cappuccinos & pour-overs</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Complimentary rosemary focaccia & tea cake</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>300 Mbps fiber & charging at every desk</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>100% BYO Food allowed (zero restriction)</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenBooking('cafe', 1)}
                  className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Check In Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                </button>
              </div>
            </div>

            {/* 5-Hour Work Block Pass */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#1A1A1A] text-white border-2 border-[#F59E0B] shadow-elevated transition-all flex flex-col justify-between relative md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-black text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                ★ Best For Deep Work
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  5-Hour Flexi Block
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-editorial text-4xl font-bold text-white">₹850</span>
                  <span className="text-xs text-neutral-400">/5 hours</span>
                </div>
                <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
                  Saves ₹200 vs. hourly rate. Ideal for creators and consultants putting in a focused sprint.
                </p>
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#FFEF98] shrink-0 mt-0.5" />
                    <span>All Time Cafe unlimited beverages</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#FFEF98] shrink-0 mt-0.5" />
                    <span>Continuous snack refills & bakery bites</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#FFEF98] shrink-0 mt-0.5" />
                    <span>Access to acoustic call pods for Zoom calls</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#FFEF98] shrink-0 mt-0.5" />
                    <span>Valid GST input credit invoice</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenBooking('cafe', 5)}
                  className="w-full py-3 px-4 rounded-xl bg-[#FFEF98] hover:bg-[#FDE047] text-[#1A1A1A] text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book 5-Hour Block</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
                </button>
              </div>
            </div>

            {/* 10-Hour Full Day Pass */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EBE6DC] shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Full Day Pass
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-editorial text-4xl font-bold text-neutral-900">₹899</span>
                  <span className="text-xs text-neutral-500">/up to 10 hrs</span>
                </div>
                <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
                  The ultimate daily sanctuary pass. Work, read, sip, and collaborate from morning till night.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#F4EFE6]">
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>All-day unlimited espresso, cold brews & teas</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Come-and-go flexibility with day wristband</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Free printing & scanning up to 15 pages</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Saves over ₹1,200 compared to hourly rates</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenBooking('day-pass')}
                  className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book Day Pass</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                </button>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'coworking' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Day Pass */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EBE6DC] shadow-soft flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Daily Coworking Pass
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-editorial text-4xl font-bold text-neutral-900">₹899</span>
                  <span className="text-xs text-neutral-500">/day</span>
                </div>
                <p className="text-xs text-neutral-600 mb-6">
                  For visiting entrepreneurs, remote workers, and traveling freelancers.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#F4EFE6]">
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Ergonomic desk with power plugs</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Endless barista specialty coffee bar</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>High-speed redundant 300 Mbps fiber</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#coworking-booking"
                  className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Select Desk in System</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                </a>
              </div>
            </div>

            {/* Weekly Pass */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#1A1A1A] text-white border-2 border-[#F59E0B] shadow-elevated flex flex-col justify-between relative md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-black text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                ★ 6-Day Access
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Weekly Builder Pass
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-editorial text-4xl font-bold text-white">₹3,499</span>
                  <span className="text-xs text-neutral-400">/6 days</span>
                </div>
                <p className="text-xs text-neutral-300 mb-6">
                  Perfect for intensive project build weeks and hackathons.
                </p>
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#FFEF98] shrink-0 mt-0.5" />
                    <span>6 days of full access (Mon - Sat)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#FFEF98] shrink-0 mt-0.5" />
                    <span>Complimentary locker storage</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#FFEF98] shrink-0 mt-0.5" />
                    <span>2 hours private meeting pod credits</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#coworking-booking"
                  className="w-full py-3 px-4 rounded-xl bg-[#FFEF98] hover:bg-[#FDE047] text-[#1A1A1A] text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book Weekly Pass</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
                </a>
              </div>
            </div>

            {/* Monthly Resident */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EBE6DC] shadow-soft flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Monthly Resident
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-editorial text-4xl font-bold text-neutral-900">₹10,000</span>
                  <span className="text-xs text-neutral-500">/month</span>
                </div>
                <p className="text-xs text-neutral-600 mb-6">
                  Your fixed productive second home. Dedicated desk, community events & benefits.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#F4EFE6]">
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>24/7 designated desk with locker</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Free entry to all weekend Mauji gigs</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Business address & mail handling support</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleWhatsAppInquiry('Monthly Resident Membership')}
                  className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                </button>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'corporate' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {maujiData.corporatePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EBE6DC] shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] mb-1">
                    {pkg.capacity}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-neutral-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-editorial text-3xl font-bold text-neutral-900 mb-4">
                    {pkg.price}
                  </div>
                  <div className="space-y-2.5 pt-4 border-t border-[#F4EFE6]">
                    {pkg.perks.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleWhatsAppInquiry(pkg.name)}
                    className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GST & Cashless Assurance Bar */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-[#F7F4EB] border border-[#EBE6DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>All corporate & resident bookings receive valid <strong>GST input credit tax invoices</strong>.</span>
          </div>
          <button
            onClick={() => handleWhatsAppInquiry('Corporate Tax Invoice')}
            className="text-neutral-900 font-bold hover:underline shrink-0 text-xs"
          >
            Need custom team invoice? →
          </button>
        </div>

      </div>
    </section>
  );
}
