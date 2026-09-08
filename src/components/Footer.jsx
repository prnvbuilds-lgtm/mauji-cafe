import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Check, Phone, MapPin, Sparkles, Clock, ArrowUp, 
  ExternalLink, Coffee, ShieldCheck, Heart, Camera, MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { maujiData } from '../data/maujiData';
import { publicAsset } from '../utils/publicAsset';

const GALLERY_MOMENTS = [
  {
    image: publicAsset('images/gallery-1.png'),
    caption: 'Sunlit Reading Sanctuary',
    location: 'Pune Flagship',
    tag: '#SlowMornings'
  },
  {
    image: publicAsset('images/gallery-2.png'),
    caption: 'Artisanal Pour-Over & Brew Bar',
    location: 'Open Coffee Lab',
    tag: '#UnlimitedCraft'
  },
  {
    image: publicAsset('images/gallery-3.png'),
    caption: 'Collaborative Creator Hub',
    location: 'Maker Desks',
    tag: '#DeepWork'
  },
  {
    image: publicAsset('images/gallery-4.png'),
    caption: 'Acoustic Evenings & Open Mics',
    location: 'Courtyard Stage',
    tag: '#MaujiVibes'
  },
  {
    image: publicAsset('images/mauji-ambiance-vase.jpg'),
    caption: 'Botanical Courtyard Nooks',
    location: 'Nagpur & Pune',
    tag: '#ThirdSpace'
  }
];

const PRESS_BADGES = [
  { name: 'Times of India', src: publicAsset('images/press-toi.png'), quote: 'India’s pioneer in the time-cafe revolution' },
  { name: 'The Indian Express', src: publicAsset('images/press-indian-express.png'), quote: 'A judgment-free creative haven for unhurried minds' },
  { name: 'LBB', src: publicAsset('images/press-lbb.png'), quote: 'Best coworking & artisanal cafe in Maharashtra' },
  { name: 'WhatsHot', src: publicAsset('images/press-whatshot.png'), quote: 'Where work meets soul, coffee & boundless community' }
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Fire festive golden confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.85 },
      colors: ['#FFEF98', '#F59E0B', '#E5A93C', '#FFFFFF']
    });

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#121212] text-white pt-16 pb-12 border-t border-neutral-800/80 relative overflow-hidden font-sans">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFEF98]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP SECTION: Moments at Mauji (Instagram Photo Strip)     */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-neutral-800/80">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFEF98] uppercase">
                <Camera className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Life Inside The Time Cafe</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Moments of Slow Living, Deep Work & Music
              </h3>
            </div>
            
            <a 
              href="https://instagram.com/maujitimecafe" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#FFEF98] text-xs font-semibold text-neutral-300 hover:text-white transition-all group w-fit"
            >
              <span>Follow @maujitimecafe</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FFEF98] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* 5-Column Responsive Visual Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {GALLERY_MOMENTS.map((item, index) => (
              <div
                key={index}
                className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer shadow-lg card-hover"
                onClick={() => setActivePhoto(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                {/* Floating Tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#FFEF98] border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 space-y-0.5">
                  <p className="text-xs font-semibold text-white leading-tight line-clamp-1">
                    {item.caption}
                  </p>
                  <p className="text-[10px] text-neutral-400">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MIDDLE SECTION: Newsletter Club & VIP Broadcast           */}
        {/* ========================================================= */}
        <div className="relative rounded-3xl p-8 sm:p-12 border border-neutral-800 bg-gradient-to-br from-[#1C1C1C] via-[#222222] to-[#181818] shadow-2xl overflow-hidden">
          
          {/* Subtle Decorative Spinning Stamp in Background - CSS spin */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 pointer-events-none">
            <img 
              src={publicAsset('images/deck-badge-2.png')}
              alt="Mauji Emblem" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain animate-[spin_40s_linear_infinite] will-change-transform"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEF98]/10 border border-[#FFEF98]/20 text-xs font-bold text-[#FFEF98] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" /> 
                <span>The Slow-Living Broadcast</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Get invite-only passes to secret gigs & business showers
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Join 12,000+ creators, freelancers, and entrepreneurs. Enjoy secret workshop drops, priority coworking desk passes, and fortnightly soulful essays. Zero spam.
              </p>

              {/* Benefit Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-[11px] text-neutral-400">
                <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                  ☕ 1st Free Hour Pass
                </span>
                <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                  🎟️ Secret Acoustic Gigs
                </span>
                <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                  💼 Coworker Perks
                </span>
              </div>
            </div>

            {/* Newsletter Input Box */}
            <div className="w-full lg:w-auto min-w-[320px] max-w-md">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex gap-2 bg-neutral-900/90 p-1.5 rounded-2xl border border-neutral-700 focus-within:border-[#F59E0B] transition-colors shadow-inner">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-transparent text-xs text-white placeholder:text-neutral-500 focus:outline-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#FFEF98] hover:bg-[#FDE047] text-[#1A1A1A] text-xs font-bold transition-colors whitespace-nowrap shadow-md"
                    >
                      Join Club
                    </motion.button>
                  </div>
                  <p className="text-[10px] text-neutral-500 text-center lg:text-left">
                    🔒 We respect your quiet time. Unsubscribe anytime with 1 click.
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-[#10B981]/15 border border-[#10B981]/40 rounded-2xl text-xs text-[#10B981] font-semibold text-center flex items-center justify-center gap-3 shadow-inner"
                >
                  <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">Welcome to the Mauji Circle!</p>
                    <p className="text-[11px] text-[#10B981]">Your welcome code is on its way to your inbox.</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SANCTUARY CARDS: Dual-City Physical Spaces                */}
        {/* ========================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Our Sanctuaries & Contact Coordinates</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pune Flagship Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all space-y-4 group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-editorial text-xl font-bold text-white group-hover:text-[#FFEF98] transition-colors">
                      {maujiData.locations.pune.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Open Now
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    {maujiData.locations.pune.area}
                  </p>
                </div>
                
                <span className="text-[11px] font-mono text-[#FFEF98] bg-[#FFEF98]/10 px-2.5 py-1 rounded-lg border border-[#FFEF98]/20">
                  Flagship Sanctuary
                </span>
              </div>

              <div className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{maujiData.locations.pune.address}</span>
                </p>
                <p className="flex items-center gap-2 text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span>{maujiData.locations.pune.hours}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <a 
                  href={`tel:${maujiData.locations.pune.phone}`} 
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{maujiData.locations.pune.phone}</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/918010632001?text=Hi%20Mauji%20Pune,%20I%20would%20like%20to%20know%20about%20desk%20availability"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors text-[11px] font-semibold"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-400" /> WhatsApp
                  </a>
                  <a
                    href={maujiData.locations.pune.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFEF98] hover:bg-[#FDE047] text-[#1A1A1A] transition-colors text-[11px] font-bold"
                  >
                    Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Nagpur Space Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all space-y-4 group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-editorial text-xl font-bold text-white group-hover:text-[#FFEF98] transition-colors">
                      {maujiData.locations.nagpur.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Open Now
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    {maujiData.locations.nagpur.area}
                  </p>
                </div>

                <span className="text-[11px] font-mono text-[#FFEF98] bg-[#FFEF98]/10 px-2.5 py-1 rounded-lg border border-[#FFEF98]/20">
                  Culture & Music Space
                </span>
              </div>

              <div className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{maujiData.locations.nagpur.address}</span>
                </p>
                <p className="flex items-center gap-2 text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span>{maujiData.locations.nagpur.hours}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <a 
                  href={`tel:${maujiData.locations.nagpur.phone}`} 
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{maujiData.locations.nagpur.phone}</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/918010632001?text=Hi%20Mauji%20Nagpur,%20I%20would%20like%20to%20reserve%20a%20space"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors text-[11px] font-semibold"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-400" /> WhatsApp
                  </a>
                  <a
                    href={maujiData.locations.nagpur.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFEF98] hover:bg-[#FDE047] text-[#1A1A1A] transition-colors text-[11px] font-bold"
                  >
                    Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* CORE FOOTER NAVIGATION & BRAND HERITAGE                   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pt-8 border-t border-neutral-800/80 text-xs">
          
          {/* Brand & Manifesto Column */}
          <div className="col-span-2 md:col-span-4 space-y-4 pr-0 md:pr-6">
            <div className="flex items-center gap-3">
              <img 
                src={publicAsset('images/mauji-logo.png')}
                alt="Mauji Logo" 
                className="h-10 w-auto object-contain brightness-110 drop-shadow-md"
              />
              <img 
                src={publicAsset('images/mauji-hindi.png')}
                alt="माउजी" 
                className="h-7 w-auto object-contain opacity-90 invert"
              />
            </div>
            
            <p className="text-neutral-400 text-xs leading-relaxed">
              India's first & largest Time Cafe. A design-driven sanctuary for unhurried conversations, unlimited craft beverages, creative production, and soulful community.
            </p>

            <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-[11px] text-neutral-400 italic">
              "We don't sell coffee; we give you the space to exist, create, and belong without a timer on your soul." 
              <span className="block not-italic font-semibold text-neutral-300 mt-1 text-[10px]">— Vandit Purohit, Founder</span>
            </div>

            {/* Social Channels with Spring Animations */}
            <div className="flex items-center gap-2.5 text-neutral-400 pt-1">
              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }} 
                href="https://instagram.com/maujitimecafe" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-[#FFEF98] hover:border-[#FFEF98]/40 transition-colors" 
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }} 
                href="https://linkedin.com/company/mauji" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-[#FFEF98] hover:border-[#FFEF98]/40 transition-colors" 
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }} 
                href="https://facebook.com/maujispaces" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-[#FFEF98] hover:border-[#FFEF98]/40 transition-colors" 
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, scale: 1.05 }} 
                href="https://x.com/maujicafe" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-[#FFEF98] hover:border-[#FFEF98]/40 transition-colors" 
                title="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Nav: The Spaces */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] text-[#FFEF98]">
              The Spaces
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/time-cafe" className="hover:text-white transition-colors">The Time Cafe</Link></li>
              <li><Link to="/coworking" className="hover:text-white transition-colors">Coworking Desks</Link></li>
              <li><Link to="/spaces" className="hover:text-white transition-colors">Podcast & Media Studio</Link></li>
              <li><Link to="/spaces" className="hover:text-white transition-colors">Clay Maker Workshop</Link></li>
              <li><Link to="/spaces" className="hover:text-white transition-colors">Curated Library</Link></li>
              <li><Link to="/spaces" className="hover:text-white transition-colors">Meeting Boardroom</Link></li>
            </ul>
          </div>

          {/* Quick Nav: Community & Gigs */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] text-[#FFEF98]">
              Community
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/events" className="hover:text-white transition-colors">Acoustic Open Mics</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Business Showers</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Pottery Workshops</Link></li>
              <li><Link to="/story" className="hover:text-white transition-colors">Founder’s Journey</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Transparent Pricing</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors font-semibold text-[#FFEF98]">Reserve Workspace</Link></li>
            </ul>
          </div>

          {/* Quick Nav: Space Policies & Ethos */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] text-[#FFEF98]">
              Slow Ethos
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center gap-1.5 text-neutral-300">
                <Coffee className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Unlimited Brews</span>
              </li>
              <li className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Cashless</span>
              </li>
              <li className="flex items-center gap-1.5 text-neutral-300">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Pet-Friendly Nooks</span>
              </li>
              <li><span className="text-neutral-400">BYO Food Permitted</span></li>
              <li><span className="text-neutral-400">Zero Tipping Space</span></li>
            </ul>
          </div>

          {/* Media & Press Recognition Column */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] text-[#FFEF98]">
              In The Press
            </div>
            <div className="space-y-2.5">
              {PRESS_BADGES.map((press, i) => (
                <div key={i} className="group flex items-center gap-2 p-1.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <img 
                    src={press.src} 
                    alt={press.name} 
                    className="h-3.5 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
                  />
                  <span className="text-[10px] text-neutral-400 group-hover:text-neutral-200 transition-colors line-clamp-1">
                    {press.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: Legal entities, System Status & Back to Top */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-neutral-500">
          
          <div className="space-y-1 text-center md:text-left">
            <p className="text-neutral-400">
              © {new Date().getFullYear()} Mauji - The Time Cafe & Spaces. All rights reserved.
            </p>
            <p className="text-[10px] text-neutral-500">
              Operated under <span className="text-neutral-400">Trawork LLP</span> • <span className="text-neutral-400">CreativeShala LLP</span> • <span className="text-neutral-400">Third Space Hospitality and Space Solution Pvt. Ltd.</span>
            </p>
          </div>

          {/* Live Capacity & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pune & Nagpur: <strong>Desks Available Today</strong></span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-[#FFEF98] hover:text-[#1A1A1A] text-neutral-300 text-[11px] font-semibold transition-colors"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </motion.button>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* Lightbox / Modal for Moments Gallery Photo Click          */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 rounded-3xl overflow-hidden max-w-lg w-full border border-neutral-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 sm:h-80 w-full bg-black">
                <img 
                  src={activePhoto.image} 
                  alt={activePhoto.caption} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#FFEF98] bg-[#FFEF98]/10 px-2.5 py-1 rounded-md border border-[#FFEF98]/20">
                    {activePhoto.tag}
                  </span>
                  <span className="text-xs text-neutral-400">{activePhoto.location}</span>
                </div>
                <h4 className="font-editorial text-xl font-bold text-white">
                  {activePhoto.caption}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Every nook at Mauji is designed to quiet mental clutter. Whether you're sinking into a book, recording a podcast, or nursing an artisanal pour-over, time bends to your rhythm here.
                </p>
                <div className="pt-2 flex items-center justify-end">
                  <a
                    href="https://instagram.com/maujitimecafe"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFEF98] text-[#1A1A1A] font-bold text-xs hover:bg-[#FDE047] transition-colors"
                  >
                    View on Instagram <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}

