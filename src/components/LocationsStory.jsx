import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { maujiData } from '../data/maujiData';
import { publicAsset } from '../utils/publicAsset';

export default function LocationsStory({ activeCity, setActiveCity }) {
  const currentCity = maujiData.locations[activeCity];

  return (
    <section id="story" className="py-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part 1: Our Story / The Anti-Cafe Philosophy */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Born in 2020 • Pune
            </div>
            
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
              A sanctuary devoid of fear & judgments.
            </h2>

            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              <p>
                The concept of creating a <strong>Time Cafe (anti-cafe)</strong> was conceived by founder <strong>Vandit Purohit</strong> during a restless season of ordinary life. As time progressed, it transformed into what we see today: a place where thoughts are ignited, questions are pondered, and understanding is nurtured.
              </p>
              <p>
                As an anti-cafe, Mauji boldly challenges the hustle limitations of traditional commercial coffee chains. We give you the space to be a true <em>Mauji</em>—a person unburdened by the restlessness of the world, liberated from judgments and guilt.
              </p>
              <p className="italic font-editorial text-lg text-[#B45309]">
                "Become a manmauji (free-spirited) at Mauji."
              </p>
            </div>

            {/* Founder Profile Card */}
            <div className="p-4 rounded-2xl bg-[#F7F4EB] border border-[#EBE6DC] flex items-center gap-4">
              <img
                src={publicAsset('images/founder-portrait.png')}
                alt="Vandit Purohit"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#D97706] shadow-sm"
              />
              <div>
                <div className="font-editorial text-base font-bold text-neutral-900">Vandit Purohit</div>
                <div className="text-xs text-[#B45309] font-medium">Founder & Chief Dreamer, Mauji Time Cafe</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">"Built with an urge to celebrate time, not hurry it."</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-neutral-700">
              <span className="flex items-center gap-1.5 bg-[#F7F4EB] px-3 py-1.5 rounded-lg border border-[#EBE6DC]">
                <Heart className="w-3.5 h-3.5 text-[#DC2626] fill-current" /> Zero Guilt Seating
              </span>
              <span className="flex items-center gap-1.5 bg-[#F7F4EB] px-3 py-1.5 rounded-lg border border-[#EBE6DC]">
                <Clock className="w-3.5 h-3.5 text-[#B45309]" /> Savor Slow Living
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Real Mauji Deck Stamp */}
            <img
              src={publicAsset('images/deck-badge-2.png')}
              alt="Mauji Deck"
              className="absolute -top-8 -right-6 w-20 h-auto z-20 pointer-events-none drop-shadow-md hidden sm:block rotate-6"
            />

            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-3.5">
                <div className="rounded-2xl overflow-hidden shadow-soft border border-[#EBE6DC] group">
                  <img
                    src={publicAsset('images/mauji-ambiance-vase.jpg')}
                    alt="Mauji Signature Corner"
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 text-[10px] text-neutral-500 text-center bg-white font-medium">
                    Signature Mauji Pampas Corner
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-soft border border-[#EBE6DC] group">
                  <img
                    src={publicAsset('images/gallery-1.png')}
                    alt="Mauji Community Lounge"
                    loading="lazy"
                    decoding="async"
                    className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 text-[10px] text-neutral-500 text-center bg-white font-medium">
                    Creative Coworking Sanctuary
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-soft border border-[#EBE6DC] group">
                  <img
                    src={publicAsset('images/gallery-2.png')}
                    alt="Mauji Cozy Nooks"
                    loading="lazy"
                    decoding="async"
                    className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 text-[10px] text-neutral-500 text-center bg-white font-medium">
                    Sunlit Work Desks & Reading
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-soft border border-[#EBE6DC] group">
                  <img
                    src={publicAsset('images/gallery-3.png')}
                    alt="Mauji Ambiance"
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 text-[10px] text-neutral-500 text-center bg-white font-medium">
                    Artisanal Brew Counter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Location Switcher & Detailed Coordinates */}
        <div className="bg-[#F7F4EB] rounded-3xl p-8 sm:p-12 border border-[#EBE6DC]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#EBE6DC]">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B45309] mb-1">
                Find Your Nearest Sanctuary
              </div>
              <h3 className="font-editorial text-3xl font-bold text-neutral-900">
                Mauji in Pune & Nagpur
              </h3>
            </div>

            {/* Switcher Buttons */}
            <div className="flex p-1 bg-white rounded-full border border-[#EBE6DC] shadow-soft">
              <button
                onClick={() => setActiveCity('pune')}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                  activeCity === 'pune' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-600 hover:text-black'
                }`}
              >
                Pune Flagship
              </button>
              <button
                onClick={() => setActiveCity('nagpur')}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                  activeCity === 'nagpur' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-600 hover:text-black'
                }`}
              >
                Nagpur Space
              </button>
            </div>
          </div>

          {/* Location Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B45309] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Address</div>
                  <div className="text-base font-semibold text-neutral-900 mt-0.5">
                    {currentCity.address}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">{currentCity.area}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B45309] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Operating Timings</div>
                  <div className="text-base font-semibold text-neutral-900 mt-0.5">
                    {currentCity.hours}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">Open every day of the week</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B45309] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Direct Concierge</div>
                  <a href={`tel:${currentCity.phone}`} className="text-base font-semibold text-neutral-900 hover:text-[#B45309] transition-colors mt-0.5 block">
                    {currentCity.phone}
                  </a>
                  <a href={`mailto:${currentCity.email}`} className="text-xs text-neutral-500 hover:underline">
                    {currentCity.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={currentCity.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
                </a>
              </div>
            </div>

            {/* Highlights of this location */}
            <div className="bg-white p-6 rounded-2xl border border-[#EBE6DC] shadow-soft space-y-3">
              <h4 className="font-editorial text-lg font-bold text-neutral-900">
                Space Features at {currentCity.name}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {currentCity.vibe}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {currentCity.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 bg-[#F7F4EB] p-2 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
