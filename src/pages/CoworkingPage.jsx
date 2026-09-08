import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Wifi, ShieldCheck, Coffee, Users, CheckCircle2, 
  MapPin, Clock, ArrowRight, Sparkles, Phone, MessageSquare, Star, Check 
} from 'lucide-react';
import CoworkingBooking from '../components/CoworkingBooking';
import { maujiData } from '../data/maujiData';

export default function CoworkingPage({ activeCity, setActiveCity, onOpenBooking }) {
  const currentCity = maujiData.locations[activeCity] || maujiData.locations.pune;

  const amenities = [
    { title: "300 Mbps Symmetrical Line", desc: "Dual ISP failover with uninterrupted UPS backup.", icon: Wifi },
    { title: "Surge Plugs at Every Seat", desc: "Universal charging ports and USB-C docks.", icon: Laptop },
    { title: "Unlimited Craft Brews", desc: "Endless espresso, manual pour-overs and tisanes (₹0 extra).", icon: Coffee },
    { title: "Private Call Pods", desc: "Acoustically treated booths for Zoom & phone calls.", icon: Users },
    { title: "100% BYO Food Welcome", desc: "Bring your home tiffin or order Swiggy/Zomato.", icon: ShieldCheck },
    { title: "Pet Friendly Spaces", desc: "Leashed fur babies are always welcome in the garden.", icon: Sparkles }
  ];

  const plans = [
    {
      name: "Day Pass (Flex)",
      price: "₹899",
      period: "per day",
      badge: "Flexible",
      desc: "Perfect for remote workers, travelers, and focused drop-ins.",
      perks: ["Any desk in library or courtyard", "Unlimited barista coffees & teas", "300 Mbps high-speed Wi-Fi", "Access to phone booths"]
    },
    {
      name: "Weekly Sprint Pass",
      price: "₹4,045",
      period: "6 days",
      badge: "Save 10%",
      popular: true,
      desc: "Ideal for consultants, sprint teams, and project deliveries.",
      perks: ["Reserved desk area all week", "Unlimited coffee & morning snack", "2 hours meeting room access", "Lockable locker space"]
    },
    {
      name: "Monthly Resident Desk",
      price: "₹10,000",
      period: "per month",
      badge: "Best Value",
      desc: "Your dedicated creative home with fixed ergonomic workstation.",
      perks: ["Dedicated ergonomic desk & chair", "Unlimited specialty coffee all month", "10 hours meeting room access", "Business GST billing & mail handling"]
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#EBE6DC]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFEF98]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-xs font-bold text-[#B45309]">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Coworking Sanctuary • {currentCity.name}</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Quiet desks. Endless craft coffee. <br />
                <span className="italic font-normal text-[#B45309]">Zero waiter pressure.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                Tired of noisy cafes where you have to buy a coffee every hour just to keep your seat? Mauji gives you ergonomic desks, 300 Mbps fiber, and judgment-free community spaces.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#coworking-booking"
                  className="px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Laptop className="w-4 h-4 text-[#F59E0B]" />
                  <span>Reserve a Desk Today →</span>
                </a>
                <a
                  href={`tel:${currentCity.phone}`}
                  className="px-5 py-3.5 rounded-full bg-white hover:bg-[#F4EFE6] text-neutral-800 font-bold text-xs sm:text-sm border border-[#EBE6DC] flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#B45309]" />
                  <span>Call Front Desk</span>
                </a>
              </div>

              <div className="flex items-center gap-6 pt-2 text-xs text-neutral-500 font-medium">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Walk-ins Welcomed Everyday
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" /> 4.8 / 5.0 (850+ Reviews)
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EBE6DC] shadow-xl bg-white p-2">
                <img 
                  src="/images/gallery-1.png" 
                  alt="Mauji Coworking Sanctuary" 
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl" 
                />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#EBE6DC] shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-neutral-900">Bhosale Nagar, Pune Flagship</div>
                    <div className="text-[11px] text-emerald-600 font-semibold">🟢 6 Desks Available Today</div>
                  </div>
                  <span className="font-mono font-bold text-sm text-[#B45309]">₹899/day</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plan Tiers Overview */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-neutral-900">
              Transparent Membership Passes
            </h2>
            <p className="text-sm text-neutral-600">
              No long commitments. Pay as you go or choose a residency pass with guaranteed GST input tax credit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 sm:p-8 rounded-3xl border-2 flex flex-col justify-between transition-all bg-white ${
                  plan.popular ? 'border-[#1A1A1A] shadow-xl relative' : 'border-[#EBE6DC] shadow-xs'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#FFEF98] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-500 uppercase">{plan.badge}</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-neutral-900 mt-1">{plan.name}</h3>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{plan.desc}</p>
                  
                  <div className="my-6">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#1A1A1A]">{plan.price}</span>
                    <span className="text-xs text-neutral-500 ml-1.5">/ {plan.period}</span>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-[#EBE6DC]">
                    {plan.perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#coworking-booking"
                  className={`mt-8 w-full py-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#1A1A1A] hover:bg-black text-white shadow-sm'
                      : 'bg-[#F4EFE6] hover:bg-[#EAE4D7] text-neutral-800'
                  }`}
                >
                  <span>Select {plan.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Redesigned Interactive Booking System */}
      <CoworkingBooking activeCity={activeCity} setActiveCity={setActiveCity} />

      {/* Amenities Grid */}
      <section className="py-16 bg-white border-t border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="font-editorial text-3xl font-bold text-neutral-900">
              Crafted for Deep Work & Quiet Focus
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Everything you need to deliver your best work without distractions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFEF98] text-[#B45309] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
