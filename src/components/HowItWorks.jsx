import React, { useState, useEffect } from 'react';
import { QrCode, Coffee, CreditCard, Sparkles, Play, Square, RefreshCw, CheckCircle2, Wifi, BellRing } from 'lucide-react';

export default function HowItWorks() {
  // Live Simulation state
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSeconds, setSimSeconds] = useState(0);
  const [beverageCount, setBeverageCount] = useState(1);
  const [showBillModal, setShowBillModal] = useState(false);

  useEffect(() => {
    let timer;
    if (isSimulating) {
      timer = setInterval(() => {
        setSimSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setSimSeconds(1);
    setBeverageCount(1);
    setShowBillModal(false);
  };

  const handleEndSimulation = () => {
    setIsSimulating(false);
    setShowBillModal(true);
  };

  const handleReset = () => {
    setIsSimulating(false);
    setSimSeconds(0);
    setBeverageCount(1);
    setShowBillModal(false);
  };

  // 1 hr base is 210, each second in simulation represents 1 minute in real life for snappy demo!
  const simulatedMinutes = Math.max(15, simSeconds * 2);
  const simulatedHours = (simulatedMinutes / 60).toFixed(1);
  const simulatedCost = Math.max(210, Math.round((simulatedMinutes / 60) * 210));

  const steps = [
    {
      num: "01",
      icon: QrCode,
      title: "Scan QR & Check In",
      desc: "Walk in, scan the reception QR code with your phone. Your check-in timestamp and dashboard activate instantly—no physical paperwork.",
      perk: "Zero wait time • Instant Wi-Fi unlock"
    },
    {
      num: "02",
      icon: Coffee,
      title: "Savor, Work & Create",
      desc: "Order unlimited craft coffees and teas to your seat. Use the maker space, plug into 300 Mbps fiber, or bring your own home lunch.",
      perk: "Unlimited specialty drinks • BYO food friendly"
    },
    {
      num: "03",
      icon: CreditCard,
      title: "Hit Checkout & Pay",
      desc: "When you're ready to head out, tap 'Check Out' on your phone. Your bill is computed to the minute. Pay via GPay, PhonePe, UPI, or Card.",
      perk: "100% Cashless • Pay strictly for time spent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F7F4EB]/50 border-y border-[#EBE6DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative">
          <img
            src="/images/deck-badge-1.png"
            alt="Mauji Stamp"
            className="absolute -top-6 right-4 sm:right-10 w-16 h-auto pointer-events-none opacity-80 rotate-12 hidden sm:block"
          />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Simple 3-Step Flow
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            How does the Time Cafe work?
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            Everything is pay-by-the-hour. No hidden fees, no awkward waiter reminders to order more food.
          </p>
        </div>

        {/* Steps Grid: one column on mobile, two on tablet, three on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-8 border border-[#EBE6DC] shadow-soft hover:shadow-elevated transition-all relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F7F4EB] group-hover:bg-[#FFEF98] text-[#B45309] flex items-center justify-center transition-colors shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-editorial text-3xl font-bold text-neutral-300 group-hover:text-[#F59E0B] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#1A1A1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F7F4EB] text-xs font-semibold text-[#B45309] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  {step.perk}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Live Check-in Simulation Dashboard Box */}
        <div className="mt-16 bg-white rounded-3xl border-2 border-[#F59E0B]/40 p-6 sm:p-8 shadow-elevated">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-[#EBE6DC]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1">
                <Play className="w-3.5 h-3.5 fill-current" /> Interactive Experience
              </div>
              <h3 className="font-editorial text-2xl font-bold text-neutral-900">
                Experience the Mauji Customer Dashboard
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Try the live check-in stopwatch below to see how visitors track their time and unlimited brews.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {!isSimulating ? (
                <button
                  onClick={handleStartSimulation}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#1A1A1A] bg-[#FFEF98] hover:bg-[#FDE047] rounded-xl border border-[#F59E0B]/30 transition-all shadow-sm"
                >
                  <Play className="w-4 h-4 fill-current text-[#B45309]" />
                  <span>Start Simulation</span>
                </button>
              ) : (
                <button
                  onClick={handleEndSimulation}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#DC2626] hover:bg-red-700 rounded-xl transition-all shadow-sm"
                >
                  <Square className="w-4 h-4 fill-current" />
                  <span>Check Out & Generate Bill</span>
                </button>
              )}

              <button
                onClick={handleReset}
                className="p-2.5 rounded-xl border border-[#EBE6DC] text-neutral-500 hover:text-neutral-900 hover:bg-[#F7F4EB] transition-colors"
                title="Reset simulation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Simulation Live Metrics Panel */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            
            {/* Metric 1: Time Elapsed */}
            <div className="p-4 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC]">
              <div className="text-xs font-semibold text-neutral-500">Session Duration</div>
              <div className="text-2xl font-bold font-editorial text-neutral-900 mt-1 flex items-baseline gap-1">
                {isSimulating ? `${simulatedHours} hrs` : "0.0 hrs"}
                <span className="text-xs font-sans text-neutral-500 font-normal">
                  ({isSimulating ? `${simulatedMinutes} mins` : "Ready"})
                </span>
              </div>
              <div className="text-[11px] text-[#B45309] font-medium mt-1">
                {isSimulating ? "● Active Clock Ticking" : "Click 'Start Simulation'"}
              </div>
            </div>

            {/* Metric 2: Live Cost */}
            <div className="p-4 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC]">
              <div className="text-xs font-semibold text-neutral-500">Current Tab</div>
              <div className="text-2xl font-bold font-editorial text-[#B45309] mt-1">
                ₹{isSimulating ? simulatedCost : 210}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                Base rate @ ₹210/hr (to the minute)
              </div>
            </div>

            {/* Metric 3: Unlimited Brews Consumed */}
            <div className="p-4 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC]">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-neutral-500">Free Brews Enjoyed</div>
                {isSimulating && (
                  <button
                    onClick={() => setBeverageCount((b) => b + 1)}
                    className="text-[10px] bg-white border border-[#EBE6DC] px-2 py-0.5 rounded font-bold text-[#B45309] hover:bg-[#FFEF98]"
                  >
                    + Order Cup
                  </button>
                )}
              </div>
              <div className="text-2xl font-bold font-editorial text-neutral-900 mt-1">
                {beverageCount} Cups
              </div>
              <div className="text-[11px] text-[#10B981] font-medium mt-1">
                ₹{beverageCount * 220} value included FREE
              </div>
            </div>

            {/* Metric 4: Amenities Connected */}
            <div className="p-4 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC]">
              <div className="text-xs font-semibold text-neutral-500">Sanctuary Perks</div>
              <div className="text-sm font-bold text-neutral-900 mt-2 flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-[#10B981]" /> 300 Mbps Connected
              </div>
              <div className="text-[11px] text-neutral-500 mt-1 flex items-center gap-1">
                <BellRing className="w-3 h-3 text-[#F59E0B]" /> BYO Meals Allowed
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bill Simulation Modal */}
      {showBillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-[#EBE6DC] shadow-elevated space-y-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-neutral-900">
                Checkout Summary
              </h4>
              <p className="text-xs text-neutral-500 mt-0.5">
                Mauji Time Cafe Cashless Slip
              </p>
            </div>

            <div className="bg-[#F7F4EB] p-4 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Duration Spent:</span>
                <span className="font-bold text-neutral-900">{simulatedHours} Hours ({simulatedMinutes} mins)</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Specialty Coffees Consumed:</span>
                <span className="font-bold text-[#10B981]">{beverageCount} Cups (₹{beverageCount * 220} free)</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>High-Speed Wi-Fi & Snacks:</span>
                <span className="font-bold text-[#10B981]">Included (₹0)</span>
              </div>
              <div className="pt-2 border-t border-[#EBE6DC] flex justify-between text-sm font-bold text-neutral-900">
                <span>Total Amount Due:</span>
                <span className="text-[#B45309]">₹{simulatedCost}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => setShowBillModal(false)}
                className="w-full py-2.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-black transition-colors"
              >
                Close & Return
              </button>
              <p className="text-[10px] text-center text-neutral-400">
                In real life, you simply scan UPI QR or tap Card at the front counter.
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
