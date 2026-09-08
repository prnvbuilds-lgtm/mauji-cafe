import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Coffee, Wifi, ShieldCheck, Sparkles, Clock, 
  CheckCircle2, Volume2, VolumeX, Play, Pause, Laptop,
  Star, ChevronRight, MapPin
} from 'lucide-react';
import { maujiData } from '../data/maujiData';

export default function Hero({ activeCity, onOpenBooking, onOpenSimulate }) {
  const currentCity = maujiData.locations[activeCity] || maujiData.locations.pune;
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToCoworking = () => {
    const el = document.getElementById('coworking-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-28 bg-[#FFFDF9]">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#FFEF98]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-6 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: stacks cleanly on mobile and tablet, keeps clear side-by-side rhythm on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-7"
          >
            
            {/* Live City Badge Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E3DCD0] text-[11px] sm:text-xs font-semibold text-neutral-800 shadow-xs max-w-full truncate"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="truncate">Welcoming in {currentCity.name}</span>
              <span className="text-neutral-400">•</span>
              <span className="text-[#B45309] font-bold shrink-0">₹210 / Hr</span>
            </motion.div>

            {/* Editorial Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-bold leading-[1.12] tracking-tight">
                An ode to slow living. <br />
                <span className="italic font-normal text-[#B45309]">Pay for time,</span> not coffee.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-light max-w-xl leading-relaxed">
                Step into India's first and largest <strong className="font-semibold text-neutral-900">Time Cafe & Coworking Sanctuary</strong>. Unlimited artisanal craft brews, high-speed fiber Wi-Fi, podcast studios, and quiet desks with zero waiter pressure.
              </p>
            </div>

            {/* Feature Highlights Grid (Clean 3-pill horizontal strip) */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 pt-1">
              <motion.div 
                whileHover={{ y: -2 }}
                className="p-2.5 sm:p-3.5 bg-white rounded-xl sm:rounded-2xl border border-[#EBE6DC] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2.5 text-center sm:text-left transition-all"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FFEF98] flex items-center justify-center text-[#B45309] shrink-0">
                  <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-neutral-900 leading-tight truncate">Unlimited Brews</div>
                  <div className="text-[9px] sm:text-[11px] text-neutral-500 hidden sm:block">Cappuccino, Brew & Tea</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className="p-2.5 sm:p-3.5 bg-white rounded-xl sm:rounded-2xl border border-[#EBE6DC] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2.5 text-center sm:text-left transition-all"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FFEF98] flex items-center justify-center text-[#B45309] shrink-0">
                  <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-neutral-900 leading-tight truncate">300 Mbps Fiber</div>
                  <div className="text-[9px] sm:text-[11px] text-neutral-500 hidden sm:block">Power at every desk</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className="p-2.5 sm:p-3.5 bg-white rounded-xl sm:rounded-2xl border border-[#EBE6DC] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2.5 text-center sm:text-left transition-all"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FFEF98] flex items-center justify-center text-[#B45309] shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-neutral-900 leading-tight truncate">100% BYO Food</div>
                  <div className="text-[9px] sm:text-[11px] text-neutral-500 hidden sm:block">Bring lunch or order</div>
                </div>
              </motion.div>
            </div>

            {/* Action CTAs (Clean, accessible, non-crowded) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToCoworking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#1A1A1A] hover:bg-black rounded-xl transition-all shadow-md group"
              >
                <Laptop className="w-4 h-4 text-[#F59E0B]" />
                <span>Book Coworking Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F59E0B]" />
              </motion.button>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenSimulate}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold text-[#1A1A1A] bg-[#FFEF98] hover:bg-[#FDE047] rounded-xl border border-[#F59E0B]/30 transition-all shadow-xs"
                  title="Test interactive check-in flow"
                >
                  <Coffee className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Check-In Demo</span>
                </motion.button>

                <a
                  href="#calculator"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-3.5 text-xs sm:text-sm font-semibold text-neutral-800 bg-white hover:bg-[#F4EFE6] rounded-xl border border-[#EBE6DC] transition-all shadow-xs"
                >
                  <Clock className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>Calculator</span>
                </a>
              </div>
            </div>

            {/* Reassurance Badges */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-neutral-500 pt-0.5">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Cashless UPI & Card Checkout
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Walk-ins Welcomed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Open Daily in Pune & Nagpur
              </span>
            </div>

          </motion.div>

          {/* Right Column: Atmospheric Brand Video Experience */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6"
          >
            <div className="relative mx-auto max-w-md md:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EBE6DC] shadow-xl bg-[#181818] p-2 sm:p-3 group">
                
                {/* Video Player Box */}
                <div className="relative h-[300px] xs:h-[340px] sm:h-[400px] md:h-[420px] lg:h-[470px] rounded-2xl overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src="https://video.wixstatic.com/video/9cfb8c_c7ec81bf52b14ec9b7307640522d52c7/1080p/mp4/file.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

                  {/* Top Floating Badges & Audio Controls */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 gap-2">
                    <div className="bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white shadow-sm flex items-center gap-1.5 border border-white/10 truncate">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <Sparkles className="w-3 h-3 text-[#F59E0B] shrink-0" />
                      <span className="truncate">{currentCity.name} Sanctuary</span>
                    </div>

                    {/* Audio & Play Controls with Waveform Indicator */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={togglePlay}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 shadow-sm border border-white/10"
                        title={isPlaying ? "Pause video" : "Play video"}
                        aria-label="Toggle video playback"
                      >
                        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all hover:scale-105 shadow-sm backdrop-blur-md text-[10px] sm:text-xs font-semibold ${
                          isMuted 
                            ? 'bg-black/70 hover:bg-black/90 text-neutral-200 border border-white/10' 
                            : 'bg-[#FFEF98] text-[#1A1A1A] font-bold border border-[#F59E0B]'
                        }`}
                        title={isMuted ? "Unmute atmospheric sound" : "Mute audio"}
                        aria-label="Toggle atmospheric sound"
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-3 h-3 text-neutral-300" />
                            <span className="hidden xs:inline">Sound Off</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3 text-[#1A1A1A] animate-pulse" />
                            <span className="hidden xs:inline">Playing Sound</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white z-10 space-y-1 sm:space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-[#FFEF98] bg-[#1A1A1A]/80 px-2 py-0.5 rounded-md border border-[#FFEF98]/20">
                        The Anti-Cafe Concept
                      </span>
                      <span className="text-[10px] sm:text-xs text-neutral-300">
                        {isMuted ? "Tap 🔊 for cafe soundscape" : "Atmospheric audio active"}
                      </span>
                    </div>

                    <div className="font-editorial text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide leading-tight">
                      Be yourself. Be a Manmauji.
                    </div>

                    <p className="text-[11px] sm:text-xs text-neutral-200 line-clamp-2 max-w-md font-light leading-relaxed">
                      "A sanctuary devoid of fear and judgments. Every room possesses its own unique emotion, whether you build, read, or indulge in unhurried conversations."
                    </p>
                  </div>

                </div>

                {/* Floating Brand Swirl - CSS spin on compositor thread */}
                <img
                  src="/images/mauji-swirl-icon.png"
                  alt="Mauji Swirl"
                  loading="lazy"
                  decoding="async"
                  className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 z-30 pointer-events-none drop-shadow-md hidden sm:block animate-[spin_25s_linear_infinite] will-change-transform"
                />

                {/* Floating Sketch Triangle Accent - CSS float */}
                <img
                  src="/images/mauji-triangle-accent.png"
                  alt="Mauji Accent"
                  loading="lazy"
                  decoding="async"
                  className="absolute -bottom-4 -right-3 w-10 sm:w-12 h-auto z-30 pointer-events-none drop-shadow-md hidden sm:block animate-[float_5s_ease-in-out_infinite] will-change-transform"
                />

                {/* Floating Per Hour Rate Tag - CSS float animation */}
                <div className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-[#EBE6DC] shadow-lg flex items-center gap-2 sm:gap-2.5 z-20 animate-[float_4s_ease-in-out_infinite] will-change-transform">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F7F4EB] text-[#B45309] flex items-center justify-center font-editorial font-bold text-base sm:text-lg shadow-inner">
                    ₹210
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-neutral-900 leading-tight">Time Cafe Pass</div>
                    <div className="text-[9px] sm:text-[11px] text-emerald-600 font-semibold">Unlimited Craft Brews</div>
                  </div>
                </div>

                {/* Floating Rating Pill - CSS float animation (offset phase) */}
                <div className="absolute top-2 right-2 sm:-top-3 sm:-right-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full border border-[#EBE6DC] shadow-lg flex items-center gap-1.5 z-20 animate-[floatReverse_4.5s_ease-in-out_infinite] will-change-transform" style={{ animationDelay: '0.8s' }}>
                  <div className="text-amber-500 text-[10px] sm:text-xs font-bold flex">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-neutral-800">4.8 (850+ Reviews)</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Media Press Recognition Ticker */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#EBE6DC]/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 text-center sm:text-left">
              Featured In Leading Media & Culture Outlets
            </p>
            <span className="text-[11px] text-[#B45309] font-semibold flex items-center gap-1">
              <span>National Press Coverage</span>
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-stretch">
            {maujiData.pressQuotes.map((item) => (
              <div
                key={item.source}
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#EBE6DC] shadow-xs hover:border-[#F59E0B]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between items-center text-center group"
              >
                <div className="h-8 sm:h-9 flex items-center justify-center mb-2 sm:mb-3">
                  <img
                    src={item.logoImage}
                    alt={item.source}
                    loading="lazy"
                    decoding="async"
                    className="max-h-6 sm:max-h-7 max-w-[110px] sm:max-w-[130px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-75 group-hover:opacity-100"
                  />
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-600 italic line-clamp-2 leading-relaxed">
                  "{item.quote}"
                </p>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#B45309] mt-2 block uppercase tracking-wider">
                  {item.source}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
