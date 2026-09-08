import React, { useState } from 'react';
import { Calculator, Sparkles, Coffee, ShieldCheck, Wifi, ArrowRight, Check } from 'lucide-react';

export default function TimeCalculator({ onOpenBooking }) {
  const [hours, setHours] = useState(3);
  const [spaceType, setSpaceType] = useState('cafe'); // 'cafe' | 'studio' | 'event'

  const spaces = [
    { id: 'cafe', name: 'Time Cafe Pass', rate: 210, unit: 'per hr', desc: 'Unlimited specialty brews, Wi-Fi & cozy work desks' },
    { id: 'studio', name: 'Creator Studio', rate: 1500, unit: 'per hr', desc: 'Acoustic podcast & video room, lights & microphones' },
    { id: 'event', name: 'Event Hall', rate: 1500, unit: 'per hr', desc: 'Workshops, open mics, screenings & business showers' },
  ];

  const currentSpace = spaces.find((s) => s.id === spaceType) || spaces[0];

  // Calculations
  const isFullDay = spaceType === 'cafe' && hours >= 5;
  const standardCost = hours * currentSpace.rate;
  const actualCost = isFullDay ? 899 : standardCost;
  const freeDrinks = spaceType === 'cafe' ? Math.max(1, Math.round(hours * 0.9)) : 0;
  const standardCafeValue = freeDrinks * 220; // Avg ₹220 per cappuccino/cold brew at Blue Tokai/Starbucks
  const netSavings = Math.max(0, standardCafeValue - actualCost + 300); // including wifi & table charge value

  return (
    <section id="calculator" className="py-20 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Transparent Pricing Calculator
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Calculate your time & ROI
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            See how much you save at Mauji compared to standard commercial coffeehouse chains.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EBE6DC] shadow-elevated overflow-hidden">
          <div className="grid md:grid-cols-12">
            
            {/* Left Column: Interactive Sliders & Space Picker */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Space Selection Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  1. Select Experience or Space
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {spaces.map((sp) => (
                    <button
                      key={sp.id}
                      onClick={() => setSpaceType(sp.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        spaceType === sp.id
                          ? 'bg-[#1A1A1A] text-white border-black shadow-sm'
                          : 'bg-[#F7F4EB] text-neutral-700 border-[#EBE6DC] hover:border-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{sp.name}</div>
                      <div className={`text-[11px] mt-1 ${spaceType === sp.id ? 'text-[#FFEF98]' : 'text-[#B45309]'}`}>
                        ₹{sp.rate}/hr
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-2 italic">
                  {currentSpace.desc}
                </p>
              </div>

              {/* Hours Duration Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    2. Planned Duration
                  </label>
                  <span className="font-editorial text-2xl font-bold text-neutral-900">
                    {hours} {hours === 1 ? 'Hour' : 'Hours'}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EBE6DC] rounded-lg appearance-none cursor-pointer accent-[#D97706]"
                />

                <div className="flex justify-between text-[11px] font-medium text-neutral-400 px-1">
                  <span>1 hr (Quick drop-in)</span>
                  <span>4 hrs (Work block)</span>
                  <span>10 hrs (Full day)</span>
                </div>
              </div>

              {/* Included Perks Checklist */}
              <div className="space-y-2 pt-2 border-t border-[#F7F4EB]">
                <div className="text-xs font-bold text-neutral-700">What's automatically included:</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>Unlimited Specialty Drinks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>300 Mbps Dedicated LAN</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>BYO Food & Tiffin Welcomed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Curated Library Access</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Computed Tally & ROI Card */}
            <div className="md:col-span-5 bg-[#F7F4EB] p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#EBE6DC]">
              
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#B45309] uppercase tracking-wider">
                  Estimated Total
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-editorial font-bold text-neutral-900">
                    ₹{actualCost}
                  </div>
                  {isFullDay && (
                    <div className="inline-block mt-1 bg-[#10B981]/15 text-[#10B981] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      🎉 Full-Day Cap applied! (Saves ₹{standardCost - 899})
                    </div>
                  )}
                  <p className="text-xs text-neutral-500 mt-1">
                    For {hours} hours of access with unlimited drinks
                  </p>
                </div>

                {spaceType === 'cafe' && (
                  <div className="bg-white p-4 rounded-xl border border-[#EBE6DC] shadow-soft space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Free specialty coffees:</span>
                      <span className="font-bold text-neutral-900">~{freeDrinks} Cups</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Cost at Starbucks/Blue Tokai:</span>
                      <span className="line-through text-neutral-400">₹{standardCafeValue}</span>
                    </div>
                    <div className="pt-2 border-t border-[#F7F4EB] flex justify-between text-xs font-bold text-[#10B981]">
                      <span>Estimated Value Delivered:</span>
                      <span>₹{standardCafeValue + 400}+</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking(spaceType, hours)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Reserve This Experience</span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-neutral-500 mt-2">
                  No payment required right now. Pay cashless when you visit.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
