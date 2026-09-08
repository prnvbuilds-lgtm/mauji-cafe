import React, { useState } from 'react';
import { Calendar, MapPin, Ticket, Sparkles, Users, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { maujiData } from '../data/maujiData';

export default function EventsFeed({ activeCity }) {
  const [selectedCityFilter, setSelectedCityFilter] = useState(activeCity || 'all');
  const [rsvpModalEvent, setRsvpModalEvent] = useState(null);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const displayedEvents = selectedCityFilter === 'all'
    ? maujiData.events
    : maujiData.events.filter((e) => e.city.toLowerCase() === selectedCityFilter.toLowerCase());

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!attendeeName || !attendeePhone) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setRsvpSuccess(true);
    setTimeout(() => {
      setRsvpSuccess(false);
      setRsvpModalEvent(null);
      setAttendeeName('');
      setAttendeePhone('');
    }, 2800);
  };

  return (
    <section id="events" className="py-20 bg-[#F7F4EB]/60 border-t border-[#EBE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Community Gatherings
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              Upcoming Events at Mauji
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-xl">
              From lively music gigs to indie Business Showers and weekend pottery jams. Experience genuine connection.
            </p>
          </div>

          {/* City Toggle Pills */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-[#EBE6DC] shadow-soft">
            <button
              onClick={() => setSelectedCityFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                selectedCityFilter === 'all' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              All Cities
            </button>
            <button
              onClick={() => setSelectedCityFilter('pune')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                selectedCityFilter === 'pune' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Pune
            </button>
            <button
              onClick={() => setSelectedCityFilter('nagpur')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                selectedCityFilter === 'nagpur' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Nagpur
            </button>
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Category Pill */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 backdrop-blur-md text-[#FFEF98] text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {evt.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 text-neutral-900 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-[#B45309]" />
                    <span className="capitalize">{evt.city}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B45309]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.date}</span>
                  </div>

                  <h3 className="font-editorial text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#B45309] transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="pt-3 border-t border-[#F7F4EB] flex items-center justify-between text-xs">
                    <div className="font-bold text-neutral-900">
                      {evt.price}
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 flex items-center gap-1">
                      <Users className="w-3 h-3 text-[#10B981]" />
                      <span>{evt.seatsLeft} spots left</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setRsvpModalEvent(evt)}
                  className="w-full py-2.5 px-4 text-xs font-bold rounded-xl bg-[#1A1A1A] hover:bg-black text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Ticket className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Reserve Seat</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Business Shower Spotlight Box */}
        <div className="mt-14 bg-gradient-to-r from-[#1A1A1A] to-[#2E2E2E] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-elevated">
          <div className="space-y-2 max-w-xl">
            <span className="inline-block bg-[#FFEF98] text-[#1A1A1A] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Mauji Signature Format
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Want to host a "Business Shower" for your new venture?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Just like a baby shower celebrates a child, a Business Shower celebrates you launching a new creative agency, book, coffee roastery, or indie label. We provide the venue, logistics, and co-marketing!
            </p>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent("Hi Mauji team! I want to host a Business Shower for my venture.");
              window.open(`https://wa.me/918010632001?text=${text}`, '_blank');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#FFEF98] hover:bg-[#FDE047] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            Host A Business Shower
          </button>
        </div>

      </div>

      {/* RSVP Modal */}
      {rsvpModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#EBE6DC] shadow-elevated relative space-y-4">
            
            {!rsvpSuccess ? (
              <>
                <div className="text-center space-y-1">
                  <span className="text-[11px] font-bold text-[#B45309] uppercase tracking-wider">
                    Instant RSVP
                  </span>
                  <h4 className="font-editorial text-2xl font-bold text-neutral-900">
                    {rsvpModalEvent.title}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    {rsvpModalEvent.date} • {rsvpModalEvent.city.toUpperCase()}
                  </p>
                </div>

                <div className="bg-[#F7F4EB] p-3.5 rounded-xl text-xs flex justify-between items-center">
                  <span className="text-neutral-600">Ticket Price:</span>
                  <span className="font-bold text-neutral-900">{rsvpModalEvent.price}</span>
                </div>

                <form onSubmit={handleRsvpSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={attendeeName}
                      onChange={(e) => setAttendeeName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={attendeePhone}
                      onChange={(e) => setAttendeePhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                    />
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setRsvpModalEvent(null)}
                      className="flex-1 py-2.5 rounded-xl border border-[#EBE6DC] text-xs font-semibold text-neutral-600 hover:bg-[#F7F4EB]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold transition-all shadow-md"
                    >
                      Confirm Seat RSVP
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-editorial text-2xl font-bold text-neutral-900">
                  Seat Confirmed!
                </h4>
                <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
                  Thank you, <span className="font-bold">{attendeeName}</span>. A WhatsApp pass confirmation has been sent to your number. See you at Mauji!
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
