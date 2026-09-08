import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Coffee, ShieldCheck, Heart, Sparkles, Utensils, 
  ArrowRight, Check, HelpCircle, AlertCircle, Phone, BookOpen, Smile
} from 'lucide-react';
import TimeCalculator from '../components/TimeCalculator';
import { maujiData } from '../data/maujiData';

export default function TimeCafePage({ activeCity, onOpenBooking, onOpenSimulate }) {
  const currentCity = maujiData.locations[activeCity] || maujiData.locations.pune;

  const beverageMenu = [
    { category: "Espresso Bar", items: ["Double Espresso", "Americano (Hot / Iced)", "Café Latte", "Cappuccino", "Flat White", "Cortado"], badge: "100% Free" },
    { category: "Manual Brews", items: ["V60 Pour Over", "Aeropress", "French Press", "Cold Brew on Tap"], badge: "Artisanal Beans" },
    { category: "Artisanal Teas & Tisanes", items: ["Kashmiri Kahwa", "Chamomile Mint", "Assam Single Estate", "Lemon Ginger Hibiscus", "Masala Chai"], badge: "Unlimited Refills" },
    { category: "Comfort & Coolers", items: ["Belgian Hot Chocolate", "Iced Matcha Latte", "Citrus Cold Brew Tonic", "Cucumber Mint Cooler"], badge: "Included" }
  ];

  const rules = [
    {
      title: "Clock-In at Reception",
      desc: "Receive your Mauji Wooden Token upon arrival. That's when your gentle time starts.",
      icon: Clock
    },
    {
      title: "Unlimited Barista Coffee",
      desc: "Order as many specialty coffees, single-origin pour overs, and tisanes as you wish. ₹0 extra.",
      icon: Coffee
    },
    {
      title: "100% BYO Food Allowed",
      desc: "Bring your favorite mom-made dabba, order Zomato/Swiggy directly to your table. We provide cutlery.",
      icon: Utensils
    },
    {
      title: "Clock-Out & Pay for Time Only",
      desc: "Hand over your token on your way out. You are billed purely for the minutes spent.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#EBE6DC] overflow-hidden">
        <div className="absolute top-0 right-10 w-80 h-80 bg-[#FFEF98]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309]">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>The Original Anti-Cafe Experience • {currentCity.name}</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Pay for Time, <br />
                <span className="italic font-normal text-[#B45309]">not for your coffee.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                India's pioneer Time Cafe where your minutes buy you complete freedom. Enjoy unlimited artisanal craft coffees, books, garden hammocks, and warm company without a waiter hovering over you with the bill.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  <span>Reserve a Time Pass</span>
                </button>
                <a
                  href="#calculator"
                  className="px-5 py-3.5 rounded-full bg-white hover:bg-[#F4EFE6] text-neutral-800 font-bold text-xs sm:text-sm border border-[#EBE6DC] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-[#B45309]" />
                  <span>Calculate Your Bill</span>
                </a>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs text-neutral-500 font-mono">
                <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#EBE6DC]">
                  ⏱️ 1st Hour: <strong>₹180</strong>
                </span>
                <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#EBE6DC]">
                  ⚡ Additional Minutes: <strong>₹3/min</strong>
                </span>
                <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#EBE6DC]">
                  ☕ Unlimited Craft Coffee: <strong>₹0</strong>
                </span>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EBE6DC] shadow-xl bg-white p-2">
                <img 
                  src="/images/coffee-pour.png" 
                  alt="Artisanal Pour Over Coffee at Mauji" 
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl" 
                />
                <div className="absolute top-5 left-5 bg-[#1A1A1A]/90 backdrop-blur-md text-[#FFEF98] text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                  Unlimited Single Origin Roasts
                </div>
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#EBE6DC] shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-neutral-900">Slow Living Sanctuary</div>
                    <div className="text-[11px] text-neutral-500">Read, write, daydream, or converse</div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Open Daily</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars of the Anti-Cafe */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-neutral-900">
              How the Time Cafe Works
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              No tricky menus. No minimum spend requirements. Complete transparency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rules.map((rule, idx) => {
              const Icon = rule.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EBE6DC] shadow-xs relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#FFEF98] text-[#B45309] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400">Step 0{idx + 1}</span>
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-neutral-900">{rule.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{rule.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complimentary Craft Beverage Bar */}
      <section className="py-16 bg-white border-b border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">All Inclusive</span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-neutral-900 mt-1">
                The Complimentary Beverage Bar
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-xl">
                Every cup is fresh-ground from premium Arabica beans sourced from Chikmagalur and Nilgiri estates. Unlimited refills throughout your stay.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>₹0 Additional Charge on All Brews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beverageMenu.map((group, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC]">
                <div className="flex items-center justify-between border-b border-[#EBE6DC] pb-3 mb-4">
                  <h3 className="font-editorial text-lg font-bold text-neutral-900">{group.category}</h3>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-[#FFEF98] text-[#B45309]">
                    {group.badge}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-xs text-neutral-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* BYO Food Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#F4EFE6] to-[#FAF8F5] border border-[#E3DCD0] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#B45309] flex items-center justify-center shrink-0 shadow-xs">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-editorial text-xl font-bold text-neutral-900">Bring Your Own Food (BYO Policy)</h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
                  Unlike traditional cafes that confiscate outside food, Mauji encourages you to bring your home-cooked lunchbox or order via Swiggy/Zomato. We gladly provide ceramic plates, cutlery, microwave warm-up, and drinking water.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs shrink-0 cursor-pointer shadow-sm transition-all"
            >
              Book a Time Slot
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Calculator Section */}
      <section id="calculator">
        <TimeCalculator onOpenBooking={onOpenBooking} />
      </section>

    </div>
  );
}
