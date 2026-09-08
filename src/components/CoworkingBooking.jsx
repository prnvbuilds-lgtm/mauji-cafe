import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, Users, Monitor, Lock, Coffee, Wifi, Calendar, Clock, 
  MapPin, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Check, 
  MessageSquare, Star, ChevronRight, Zap, Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CoworkingBooking({ activeCity, setActiveCity }) {
  const [selectedDesk, setSelectedDesk] = useState('hot-desk');
  const [selectedZone, setSelectedZone] = useState('library');
  const [selectedPlan, setSelectedPlan] = useState('day');
  const [hasMonitor, setHasMonitor] = useState(false);
  const [hasLocker, setHasLocker] = useState(false);
  
  // Date and guest info
  const [dateType, setDateType] = useState('today');
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
  const [arrivalTime, setArrivalTime] = useState('09:30');
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isReserved, setIsReserved] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const deskOptions = [
    {
      id: 'hot-desk',
      name: 'Hot Desk / Flex Seat',
      category: 'Drop-In & Flex',
      rateDay: 899,
      rateWeek: 4045,
      rateMonth: 10000,
      badge: 'Most Popular',
      image: '/images/gallery-1.png',
      desc: 'Flexible ergonomic seating anywhere in our shared garden courtyard or library. Includes unlimited specialty coffees & teas.',
      features: ['Power at every single desk', '300 Mbps symmetrical fiber', 'Unlimited artisanal brews (₹0)', 'Access to phone call booths'],
      spotsLeft: 6
    },
    {
      id: 'dedicated-desk',
      name: 'Dedicated Ergonomic Desk',
      category: 'Reserved Workspace',
      rateDay: 1199,
      rateWeek: 5395,
      rateMonth: 12500,
      badge: 'Ergonomic Choice',
      image: '/images/gallery-2.png',
      desc: 'Your reserved fixed desk every single day with high-end ergonomic mesh chair and personal locker space.',
      features: ['Fixed personal desk space', 'High-back ergonomic mesh chair', 'Lockable pedestal drawer', 'Priority meeting room credit'],
      spotsLeft: 3
    },
    {
      id: 'focus-pod',
      name: 'Private Focus Pod (Solo)',
      category: 'Acoustic Soundproof',
      rateDay: 1800,
      rateWeek: 8100,
      rateMonth: 16000,
      badge: 'Video Call Ready',
      image: '/images/mauji-ambiance-vase.jpg',
      desc: 'Sound-dampened private booth. Ideal for confidential client calls, video podcasts, and deep coding sprints.',
      features: ['Acoustic sound dampening panels', 'Adjustable softbox lighting', 'Built-in USB-C docking hub', 'Zero acoustic interference'],
      spotsLeft: 2
    },
    {
      id: 'team-pod',
      name: 'Team Strategy Pod (4–6 Seats)',
      category: 'Private Team Suite',
      rateDay: 3600,
      rateWeek: 16200,
      rateMonth: 38000,
      badge: 'Team Sprint',
      image: '/images/gallery-3.png',
      desc: 'Private collaborative team suite equipped with a 55" 4K presentation screen, magnetic glass whiteboard, and beverage service.',
      features: ['Seats up to 6 team members', '55" 4K wireless casting display', 'Magnetic glass whiteboard', 'Dedicated barista tea service'],
      spotsLeft: 1
    }
  ];

  const zones = [
    {
      id: 'library',
      name: 'Quiet Library Zone',
      tag: 'Deep Focus',
      icon: '📚',
      ambiance: 'Silent reading tables, ambient amber lamps, surrounded by 500+ curated volumes.'
    },
    {
      id: 'courtyard',
      name: 'Garden Courtyard Patio',
      tag: 'Lush & Green',
      icon: '🌿',
      ambiance: 'Open-air shaded courtyard, lush leafy plants, gentle birdsong, and fresh breeze.'
    },
    {
      id: 'maker-hall',
      name: 'Creator Collaborative Hall',
      tag: 'Founder Energy',
      icon: '💡',
      ambiance: 'Buzzing with indie founders, designers, whiteboards, and product prototyping tables.'
    }
  ];

  const currentDesk = deskOptions.find((d) => d.id === selectedDesk) || deskOptions[0];

  // Pricing calculation
  const baseRate = selectedPlan === 'month' 
    ? currentDesk.rateMonth 
    : selectedPlan === 'week' 
      ? currentDesk.rateWeek 
      : currentDesk.rateDay;

  const monitorAddon = hasMonitor ? (selectedPlan === 'month' ? 2000 : selectedPlan === 'week' ? 600 : 150) : 0;
  const lockerAddon = hasLocker ? (selectedPlan === 'month' ? 800 : selectedPlan === 'week' ? 200 : 50) : 0;
  const totalAmount = baseRate + monitorAddon + lockerAddon;
  const coffeeRefillsIncluded = selectedPlan === 'month' ? 'Unlimited (~₹6,000 value)' : selectedPlan === 'week' ? 'Unlimited (~₹2,200 value)' : 'Endless (~₹720 value)';

  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !whatsapp.trim()) {
      alert("Please enter your name and WhatsApp number to generate your pass.");
      return;
    }

    const refCode = `MAUJI-${activeCity.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsReserved(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#1A1A1A', '#FFEF98', '#10B981']
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="coworking-booking" className="py-16 sm:py-24 bg-[#FFFDF9] relative overflow-hidden border-t border-[#EBE6DC]">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#FFEF98]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            <Laptop className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Sanctuary Workspace Booking</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Reserve Your Productive Sanctuary
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            High-speed 300 Mbps fiber, ergonomic comfort, and endless artisanal brews on tap. Zero waiter pressure. Select your desk, pick your vibe, and receive your digital desk pass instantly.
          </p>

          {/* Location Toggle within Booking */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center bg-[#F4EFE6] p-1 rounded-full border border-[#E3DCD0]">
              <button
                type="button"
                onClick={() => setActiveCity('pune')}
                className={`px-3 sm:px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeCity === 'pune' 
                    ? 'bg-[#1A1A1A] text-white shadow-xs' 
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                <span className="hidden sm:inline">Pune Flagship (Bhosale Nagar)</span>
                <span className="sm:hidden">Pune</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveCity('nagpur')}
                className={`px-3 sm:px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeCity === 'nagpur' 
                    ? 'bg-[#1A1A1A] text-white shadow-xs' 
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                <span className="hidden sm:inline">Nagpur Hub (Laxmi Nagar)</span>
                <span className="sm:hidden">Nagpur</span>
              </button>
            </div>
          </div>
        </div>

        {/* Confirmation Screen OR Interactive Booking Workspace */}
        <AnimatePresence mode="wait">
          {isReserved ? (
            /* Digital Boarding Pass Ticket (Luxury Receipt) */
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl mx-auto bg-white rounded-3xl border border-[#EBE6DC] shadow-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="text-center space-y-2 border-b border-[#EBE6DC] pb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFEF98] text-[#B45309] flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                  Pass Confirmed • Reserved for You
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  You're Booked at Mauji {activeCity === 'pune' ? 'Pune' : 'Nagpur'}!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
                  Show this pass at reception on arrival. Your desk, 300 Mbps Wi-Fi, and endless craft coffee bar await you.
                </p>
              </div>

              {/* Boarding Pass Ticket Card */}
              <div className="bg-[#FBF9F4] rounded-2xl border border-[#EBE6DC] p-5 space-y-4 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Pass Reference</span>
                    <div className="font-mono text-lg font-bold text-[#1A1A1A] tracking-wider">{bookingRef}</div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase">
                    Active Desk Pass
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-[#EBE6DC]/80">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold">Guest</span>
                    <div className="font-bold text-neutral-900 truncate">{fullName}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold">Desk Style</span>
                    <div className="font-bold text-neutral-900 truncate">{currentDesk.name}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold">Zone</span>
                    <div className="font-bold text-neutral-900 truncate">{zones.find(z => z.id === selectedZone)?.name}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold">Date</span>
                    <div className="font-bold text-neutral-900">{bookingDate}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold">Arrival</span>
                    <div className="font-bold text-neutral-900">{arrivalTime} AM</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold">Amount Due</span>
                    <div className="font-bold text-[#B45309] font-mono">₹{totalAmount.toLocaleString('en-IN')}</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#EBE6DC] flex items-center justify-between text-xs">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Coffee className="w-4 h-4 text-[#B45309]" />
                    <span>Endless Craft Coffee Bar Included</span>
                  </span>
                  <span className="font-bold font-mono text-emerald-600">₹0 Extra</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/918010632001?text=Hi%20Mauji,%20I%20have%20booked%20${encodeURIComponent(currentDesk.name)}%20at%20${activeCity}%20(Ref:%20${bookingRef})%20for%20${bookingDate}.%20Please%20keep%20my%20desk%20ready!`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Desk Pass to WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsReserved(false)}
                  className="w-full py-3 rounded-xl bg-[#F4EFE6] hover:bg-[#EAE4D7] text-neutral-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Book Another Desk or Change Selection
                </button>
              </div>
            </motion.div>
          ) : (
            /* Luxury Booking Form Grid (Left: Desk & Options, Right: Live Summary) */
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Step-by-Step Customization */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-6 sm:space-y-8">
                
                {/* Step 1: Select Desk Tier */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white text-[11px] flex items-center justify-center font-bold">1</span>
                      <span>Select Desk Style & Workspace Tier</span>
                    </label>
                    <span className="text-[11px] text-[#B45309] font-medium pl-7 sm:pl-0">
                      All include unlimited coffee & 300 Mbps Wi-Fi
                    </span>
                  </div>

                  {/* 4 Desk Cards Grid - 1 col on mobile, 2 col on sm+ */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {deskOptions.map((desk) => {
                      const isSelected = selectedDesk === desk.id;
                      return (
                        <motion.div
                          key={desk.id}
                          whileHover={{ y: -2 }}
                          onClick={() => setSelectedDesk(desk.id)}
                          className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                            isSelected 
                              ? 'border-[#1A1A1A] bg-white shadow-md' 
                              : 'border-[#EBE6DC] bg-[#FAF8F5] hover:border-neutral-400 hover:bg-white'
                          }`}
                        >
                          {/* Selected Checkmark Badge */}
                          {isSelected && (
                            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}

                          <div>
                            {/* Desk Thumbnail Photo */}
                            <div className="h-28 rounded-xl overflow-hidden mb-3 relative bg-neutral-100">
                              <img 
                                src={desk.image} 
                                alt={desk.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                              <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 text-white backdrop-blur-xs">
                                {desk.badge}
                              </span>
                            </div>

                            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{desk.category}</div>
                            <h3 className="text-sm font-bold text-neutral-900 leading-snug">{desk.name}</h3>
                            <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed line-clamp-2">{desk.desc}</p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-[#EBE6DC]/80 flex items-baseline justify-between">
                            <div>
                              <span className="text-base font-bold text-[#B45309] font-mono">
                                ₹{desk.rateDay.toLocaleString('en-IN')}
                              </span>
                              <span className="text-[10px] text-neutral-500 ml-1">/ day</span>
                            </div>
                            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                              {desk.spotsLeft} left today
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Duration / Plan Switcher */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white text-[11px] flex items-center justify-center font-bold">2</span>
                    <span>Choose Duration Pass</span>
                  </label>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { id: 'day', label: 'Day Pass', sub: 'Flexible 1-Day' },
                      { id: 'week', label: 'Weekly Pass', sub: '6 Days • Save 10%' },
                      { id: 'month', label: 'Monthly Resident', sub: '30 Days • Best Value' }
                    ].map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedPlan === plan.id
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                            : 'bg-white text-neutral-700 border-[#EBE6DC] hover:border-neutral-400'
                        }`}
                      >
                        <div className="font-bold text-xs">{plan.label}</div>
                        <div className={`text-[10px] mt-0.5 ${selectedPlan === plan.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {plan.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Select Atmosphere Zone */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white text-[11px] flex items-center justify-center font-bold">3</span>
                    <span>Select Preferred Work Zone & Atmosphere</span>
                  </label>

                  {/* Zone cards: 1-col mobile, 3-col sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {zones.map((zone) => {
                      const isSelected = selectedZone === zone.id;
                      return (
                        <div
                          key={zone.id}
                          onClick={() => setSelectedZone(zone.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                            isSelected 
                              ? 'border-[#B45309] bg-[#FFFDF9] shadow-xs' 
                              : 'border-[#EBE6DC] bg-[#FAF8F5] hover:border-neutral-400'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-lg">{zone.icon}</span>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-[#FFEF98] text-[#B45309]' : 'bg-neutral-200 text-neutral-600'}`}>
                              {zone.tag}
                            </span>
                          </div>
                          <div className="font-bold text-xs text-neutral-900">{zone.name}</div>
                          <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{zone.ambiance}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Add-On Gear Perks */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white text-[11px] flex items-center justify-center font-bold">4</span>
                    <span>Optional Gear & Amenities</span>
                  </label>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div 
                      onClick={() => setHasMonitor(!hasMonitor)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        hasMonitor ? 'border-[#B45309] bg-[#FFFDF9]' : 'border-[#EBE6DC] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${hasMonitor ? 'bg-[#FFEF98] text-[#B45309]' : 'bg-neutral-100 text-neutral-500'}`}>
                          <Monitor className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-900">27" 4K External Monitor</div>
                          <div className="text-[10px] text-neutral-500">+₹150/day (USB-C & HDMI)</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${hasMonitor ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white' : 'border-neutral-300'}`}>
                        {hasMonitor && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    <div 
                      onClick={() => setHasLocker(!hasLocker)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        hasLocker ? 'border-[#B45309] bg-[#FFFDF9]' : 'border-[#EBE6DC] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${hasLocker ? 'bg-[#FFEF98] text-[#B45309]' : 'bg-neutral-100 text-neutral-500'}`}>
                          <Lock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-900">Lockable Storage Pedestal</div>
                          <div className="text-[10px] text-neutral-500">+₹50/day (Keyed access)</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${hasLocker ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white' : 'border-neutral-300'}`}>
                        {hasLocker && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Summary & Checkout (not sticky on mobile) */}
              <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
                <form 
                  onSubmit={handleBookSubmit}
                  className="bg-white rounded-3xl border border-[#EBE6DC] shadow-xl p-5 sm:p-6 space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#EBE6DC] pb-3">
                    <h3 className="font-editorial text-lg font-bold text-[#1A1A1A]">
                      Your Pass Summary
                    </h3>
                    <span className="text-[10px] font-bold text-[#B45309] bg-[#FFEF98] px-2 py-0.5 rounded-full uppercase">
                      {activeCity === 'pune' ? 'Pune Flagship' : 'Nagpur Space'}
                    </span>
                  </div>

                  {/* Chosen Item Recap */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between font-bold text-neutral-900">
                      <span>{currentDesk.name}</span>
                      <span className="font-mono">₹{baseRate.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Plan: <strong className="text-neutral-800 uppercase">{selectedPlan}</strong> • Zone: <strong className="text-neutral-800">{zones.find(z => z.id === selectedZone)?.name}</strong>
                    </div>

                    {hasMonitor && (
                      <div className="flex justify-between text-neutral-600 text-[11px]">
                        <span>27" 4K Monitor Add-on</span>
                        <span className="font-mono">+₹{monitorAddon}</span>
                      </div>
                    )}

                    {hasLocker && (
                      <div className="flex justify-between text-neutral-600 text-[11px]">
                        <span>Storage Pedestal Add-on</span>
                        <span className="font-mono">+₹{lockerAddon}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-emerald-700 bg-emerald-50 p-2 rounded-lg text-[11px] font-semibold">
                      <span className="flex items-center gap-1">
                        <Coffee className="w-3.5 h-3.5 text-[#B45309]" />
                        Endless Craft Brews
                      </span>
                      <span>INCLUDED (₹0)</span>
                    </div>

                    <div className="flex justify-between text-neutral-600 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Wifi className="w-3.5 h-3.5 text-neutral-400" />
                        300 Mbps Symmetrical Line
                      </span>
                      <span>INCLUDED</span>
                    </div>
                  </div>

                  {/* Total Price Box */}
                  <div className="pt-3 border-t border-[#EBE6DC] flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Total Pass Price</div>
                      <div className="text-[10px] text-neutral-400">All taxes & amenities included</div>
                    </div>
                    <div className="text-2xl font-bold font-mono text-[#1A1A1A]">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Date & Contact Inputs */}
                  <div className="space-y-3 pt-2 border-t border-[#EBE6DC]">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-bold text-neutral-600 uppercase">Arrival Date</label>
                        <input 
                          type="date" 
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full mt-1 p-2 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC] text-xs font-semibold text-neutral-900 focus:outline-none focus:border-[#B45309]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-neutral-600 uppercase">Estimated Time</label>
                        <select
                          value={arrivalTime}
                          onChange={(e) => setArrivalTime(e.target.value)}
                          className="w-full mt-1 p-2 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC] text-xs font-semibold text-neutral-900 focus:outline-none focus:border-[#B45309]"
                        >
                          <option value="08:00">08:00 AM</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="09:30">09:30 AM</option>
                          <option value="10:30">10:30 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-neutral-600 uppercase">Your Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Aditi Kulkarni"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC] text-xs text-neutral-900 focus:outline-none focus:border-[#B45309]"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-neutral-600 uppercase">WhatsApp Number (For instant pass)</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC] text-xs text-neutral-900 focus:outline-none focus:border-[#B45309]"
                        required
                      />
                    </div>
                  </div>

                  {/* Submission Trigger */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                    <span>Confirm & Generate Desk Pass →</span>
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No advance payment needed • Pay at counter on check-in</span>
                  </div>
                </form>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
