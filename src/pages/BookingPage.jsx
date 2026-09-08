import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Laptop, Clock, Users, ShieldCheck, 
  HelpCircle, Phone, MessageSquare, Check, ArrowRight, Star
} from 'lucide-react';
import CoworkingBooking from '../components/CoworkingBooking';
import { maujiData } from '../data/maujiData';

export default function BookingPage({ activeCity, setActiveCity, onOpenBooking }) {
  const currentCity = maujiData.locations[activeCity] || maujiData.locations.pune;
  const [bookingType, setBookingType] = useState('coworking'); // 'coworking' | 'timecafe' | 'studio'

  const bookingTabs = [
    { id: 'coworking', label: 'Coworking Desk Pass', icon: Laptop, badge: 'High-Speed Wi-Fi' },
    { id: 'timecafe', label: 'Time Cafe Table', icon: Clock, badge: 'Unlimited Coffee' },
    { id: 'studio', label: 'Meeting Room / Studio', icon: Users, badge: 'Private & AV' },
  ];

  const handleWhatsAppBooking = (type) => {
    const text = encodeURIComponent(`Hi Mauji Team! I want to book a ${type} reservation at Mauji ${currentCity.name}. Please confirm availability.`);
    window.open(`https://wa.me/918010632001?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      
      {/* Page Header */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-16 border-b border-[#EBE6DC] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFEF98]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309]">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Instant Confirmation • {currentCity.name}</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Reserve Your Mauji Sanctuary
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Select your preferred experience below. From flexible hot desks to private podcast recording suites and hourly time tables.
            </p>

            {/* Segmented Booking Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {bookingTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = bookingType === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setBookingType(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1A1A1A] text-[#FFEF98] shadow-md scale-105'
                        : 'bg-white text-neutral-700 border border-[#EBE6DC] hover:border-neutral-400'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFEF98]' : 'text-[#B45309]'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Content */}
      <section className="py-12">
        {bookingType === 'coworking' && (
          <CoworkingBooking activeCity={activeCity} setActiveCity={setActiveCity} />
        )}

        {bookingType === 'timecafe' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-3xl border-2 border-[#EBE6DC] p-6 sm:p-10 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-[#EBE6DC] pb-4">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-neutral-900">Time Cafe Walk-In or Reserved Table</h3>
                  <p className="text-xs text-neutral-500">Pay for minutes spent. Unlimited artisanal coffee bar included.</p>
                </div>
                <span className="font-mono font-bold text-xl text-[#B45309]">₹180 / 1st hr</span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC]">
                  <div className="text-xs font-bold text-neutral-500 uppercase">1 Hour Pass</div>
                  <div className="font-mono text-2xl font-bold text-neutral-900 mt-1">₹180</div>
                  <div className="text-[11px] text-neutral-500 mt-2">Perfect for a quiet read or quick brainstorm.</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC]">
                  <div className="text-xs font-bold text-neutral-500 uppercase">Half Day (4 Hours)</div>
                  <div className="font-mono text-2xl font-bold text-neutral-900 mt-1">₹600</div>
                  <div className="text-[11px] text-neutral-500 mt-2">Cap rate with multiple craft coffee refills.</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC]">
                  <div className="text-xs font-bold text-neutral-500 uppercase">Full Day Pass</div>
                  <div className="font-mono text-2xl font-bold text-neutral-900 mt-1">₹899</div>
                  <div className="text-[11px] text-neutral-500 mt-2">Unlimited day stay with free Wi-Fi & coffee.</div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => handleWhatsAppBooking('Time Cafe Table')}
                  className="w-full sm:w-auto flex-1 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#FFEF98]" />
                  <span>Reserve Table via WhatsApp</span>
                </button>
                <a
                  href={`tel:${currentCity.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFE6] text-neutral-800 font-bold text-xs sm:text-sm border border-[#EBE6DC] flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#B45309]" />
                  <span>Call Front Desk: {currentCity.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {bookingType === 'studio' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-3xl border-2 border-[#EBE6DC] p-6 sm:p-10 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-[#EBE6DC] pb-4">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-neutral-900">Meeting Room & Creator Studio Booking</h3>
                  <p className="text-xs text-neutral-500">Private soundproof rooms equipped with 4K display and podcast mics.</p>
                </div>
                <span className="font-mono font-bold text-xl text-[#B45309]">From ₹500/hr</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#B45309] uppercase">Private Boardroom</span>
                    <span className="font-mono font-bold text-sm text-neutral-900">₹600 / hr</span>
                  </div>
                  <p className="text-xs text-neutral-600">8 to 10 person capacity, large whiteboard, 4K screen, HDMI & Apple AirPlay.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#B45309] uppercase">Podcast / Media Studio</span>
                    <span className="font-mono font-bold text-sm text-neutral-900">₹750 / hr</span>
                  </div>
                  <p className="text-xs text-neutral-600">Acoustically isolated, 2x Shure SM7B microphones, Rodecaster Pro audio interface.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => handleWhatsAppBooking('Meeting Room / Studio')}
                  className="w-full sm:w-auto flex-1 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#FFEF98]" />
                  <span>Check Studio Availability via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Assurance / Guarantees */}
      <section className="py-12 bg-[#FAF8F5] border-t border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0 border border-[#EBE6DC]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">100% Flexible Cancellations</h4>
                <p className="text-[11px] text-neutral-500 mt-1">Reschedule or cancel your day pass anytime up to 2 hours before arrival.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#B45309] flex items-center justify-center shrink-0 border border-[#EBE6DC]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">Walk-Ins Always Welcomed</h4>
                <p className="text-[11px] text-neutral-500 mt-1">No prior booking required. Just walk in, pick your spot, and start sipping.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#EBE6DC]">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">GST Business Billing</h4>
                <p className="text-[11px] text-neutral-500 mt-1">Claim 18% GST input credit on all passes and resident desk invoices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
