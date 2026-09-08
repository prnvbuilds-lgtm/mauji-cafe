import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, defaultType, defaultHours, activeCity }) {
  const [city, setCity] = useState(activeCity || 'pune');
  const [spaceType, setSpaceType] = useState(defaultType || 'cafe');
  const [hours, setHours] = useState(defaultHours || 3);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('11:00');
  const [guests, setGuests] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const ref = 'MAUJI-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#EBE6DC] shadow-elevated relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F7F4EB] text-neutral-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B45309] uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Seamless Reservation
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-900">
                Reserve Your Space at Mauji
              </h3>
              <p className="text-xs text-neutral-500">
                No upfront payment needed. Pay cashless upon checkout at the sanctuary.
              </p>
            </div>

            {/* City Selection */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">Select Sanctuary City</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCity('pune')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center gap-1.5 ${
                    city === 'pune'
                      ? 'bg-[#1A1A1A] text-white border-black shadow-sm'
                      : 'bg-[#F7F4EB] text-neutral-700 border-[#EBE6DC]'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Pune (Bhosale Nagar)
                </button>
                <button
                  type="button"
                  onClick={() => setCity('nagpur')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center gap-1.5 ${
                    city === 'nagpur'
                      ? 'bg-[#1A1A1A] text-white border-black shadow-sm'
                      : 'bg-[#F7F4EB] text-neutral-700 border-[#EBE6DC]'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Nagpur (Laxmi Nagar)
                </button>
              </div>
            </div>

            {/* Space Type */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">Space Type</label>
              <select
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE6DC] text-xs bg-white text-neutral-900 focus:outline-none focus:border-[#D97706]"
              >
                <option value="cafe">Time Cafe Pass (₹210/hr — Unlimited Brews)</option>
                <option value="day-pass">Full Day Coworking Pass (₹899/day)</option>
                <option value="studio">Creator Studio & Podcast Rig (₹1,500/hr)</option>
                <option value="event">Event & Workshop Space (₹1,500/hr)</option>
                <option value="monthly">Monthly Resident Membership (₹10,000/mo)</option>
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Estimated Arrival</label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                />
              </div>
            </div>

            {/* Guests & Planned Hours */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Number of People</label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Estimated Hours</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Aarav Mehta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBE6DC] text-xs focus:outline-none focus:border-[#D97706]"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Confirm Spot Reservation
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider">
                Booking Pass Generated
              </span>
              <h4 className="font-editorial text-2xl font-bold text-neutral-900">
                You're all set, {name}!
              </h4>
              <p className="text-xs text-neutral-500">
                Reference Code: <strong className="text-neutral-900 font-mono text-sm">{bookingRef}</strong>
              </p>
            </div>

            <div className="bg-[#F7F4EB] p-4 rounded-2xl text-xs space-y-1.5 text-left border border-[#EBE6DC]">
              <div className="flex justify-between">
                <span className="text-neutral-500">Sanctuary:</span>
                <span className="font-semibold text-neutral-900 capitalize">Mauji {city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Date & Arrival:</span>
                <span className="font-semibold text-neutral-900">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Party Size:</span>
                <span className="font-semibold text-neutral-900">{guests} Guest{guests > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Unlimited Drinks:</span>
                <span className="font-bold text-[#10B981]">Included on arrival</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  const msg = encodeURIComponent(`Hi Mauji! My booking ref is ${bookingRef} for ${name} on ${date} at ${time}. Looking forward to visiting!`);
                  window.open(`https://wa.me/918010632001?text=${msg}`, '_blank');
                }}
                className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Save Pass to WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl border border-[#EBE6DC] text-xs font-bold text-neutral-700 hover:bg-[#F7F4EB]"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
