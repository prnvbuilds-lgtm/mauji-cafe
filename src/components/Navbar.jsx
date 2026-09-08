import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Menu, X, Coffee, Calendar, Phone, Sparkles, 
  Laptop, ChevronDown, ChevronRight, MessageCircle, ExternalLink,
  ShieldCheck, Heart, Compass, BookOpen
} from 'lucide-react';
import { maujiData } from '../data/maujiData';
import { publicAsset } from '../utils/publicAsset';

export default function Navbar({ activeCity, setActiveCity, onOpenBooking, onOpenSimulate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [spacesDropdownOpen, setSpacesDropdownOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || menuModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, menuModalOpen]);

  // Handle cross-page and in-page anchor scrolling smoothly
  const handleNavClick = (path, hash) => {
    setMobileMenuOpen(false);
    setSpacesDropdownOpen(false);

    if (path) {
      navigate(path);
      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    if (hash) {
      if (location.pathname === '/' || location.pathname === '') {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/${hash}`);
      }
    }
  };

  // Short, punchy, elegant menu names (Balanced Left & Right wings around Middle Logo)
  const leftNavLinks = [
    { label: "Concept", to: "/", hash: "#how-it-works", icon: Clock },
    { 
      label: "Spaces", 
      to: "/spaces", 
      hasDropdown: true,
      icon: Compass 
    },
    { 
      label: "Cowork", 
      to: "/coworking", 
      badge: "₹899", 
      highlight: true,
      icon: Laptop 
    },
  ];

  const rightNavLinks = [
    { label: "Time Cafe", to: "/time-cafe", icon: Coffee },
    { label: "Pricing", to: "/pricing", icon: ShieldCheck },
    { label: "Story", to: "/story", icon: Heart },
  ];

  // Combined for mobile drawer
  const allNavLinks = [
    { label: "Overview Home", to: "/", icon: Sparkles },
    { label: "Concept & How It Works", to: "/", hash: "#how-it-works", icon: Clock },
    { label: "Coworking Sanctuary", to: "/coworking", badge: "₹899/day", highlight: true, icon: Laptop },
    { label: "Time Cafe (Pay for Time)", to: "/time-cafe", icon: Coffee },
    { label: "The 8 Spaces", to: "/spaces", icon: Compass },
    { label: "Transparent Pricing", to: "/pricing", icon: ShieldCheck },
    { label: "Community Events", to: "/events", icon: Calendar },
    { label: "Our Story & Founder", to: "/story", icon: Heart },
    { label: "Reserve / Book Desk", to: "/book", icon: Laptop, highlight: true },
  ];

  const spacesList = [
    { name: "The Time Cafe", desc: "Pay for time, endless specialty brews included", to: "/time-cafe", icon: Coffee },
    { name: "Coworking Desks", desc: "Ergonomic seating, 300 Mbps fiber & power at every desk", to: "/coworking", icon: Laptop, badge: "Popular" },
    { name: "The 8 Spaces Catalog", desc: "Explore all private pods, studios & garden nooks", to: "/spaces", icon: Compass },
    { name: "Creator & Podcast Studio", desc: "Acoustic audio console, backdrops & video lights", to: "/spaces", icon: Sparkles },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FFFDF9]/95 backdrop-blur-xl border-b border-[#EBE6DC] shadow-sm' 
        : 'bg-[#FFFDF9]/92 backdrop-blur-md border-b border-[#EBE6DC]/80'
    }`}>
      
      {/* ========================================================= */}
      {/* TOP MICRO BAR: Status, City Tagline & Direct Hotline      */}
      {/* ========================================================= */}
      <div className="bg-[#1C1815] text-[#FFFDF9] text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Left Status & Operating Hours */}
          <div className="flex items-center gap-3 text-neutral-300 text-[10px] sm:text-xs shrink-0">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold">Open Now</span>
              <span className="text-neutral-400 hidden sm:inline">(7:30 AM – 10:30 PM)</span>
            </span>

            <span className="text-neutral-600 hidden md:inline">|</span>

            <span className="text-neutral-300 hidden md:inline truncate max-w-[230px] lg:max-w-none">
              India's 1st & Largest Time Cafe • <span className="text-[#FFEF98] font-medium">मनमौजी बना, निवांत जगा!</span>
            </span>
          </div>

          {/* Right Free Menu Trigger & Hotline */}
          <div className="flex items-center gap-3.5 text-neutral-300 text-[10px] sm:text-xs shrink-0">
            <button
              onClick={() => setMenuModalOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2A241E] hover:bg-[#383028] text-[#FFEF98] text-[10px] font-bold border border-[#F59E0B]/30 transition-all cursor-pointer"
            >
              <Coffee className="w-3 h-3 text-[#F59E0B]" />
              <span>Free Brew Bar (₹0 Extra)</span>
            </button>

            <a 
              href="tel:+918010632001" 
              className="hover:text-[#FFEF98] flex items-center gap-1 transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-[#F59E0B]" />
              <span className="hidden sm:inline">+91 8010632001</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN NAVIGATION BAR WITH CENTERED MIDDLE LOGO             */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16 sm:h-17' : 'h-18 sm:h-20'}`}>
          
          {/* ======================================================= */}
          {/* 1. LEFT WING: Short Navigation Links (Desktop)          */}
          {/* ======================================================= */}
          <div className="hidden xl:flex items-center gap-1 flex-1 justify-start">
            <nav 
              className="flex items-center gap-1"
              onMouseLeave={() => { setHoveredNav(null); setSpacesDropdownOpen(false); }}
            >
              {leftNavLinks.map((link) => {
                const isHovered = hoveredNav === link.label;
                const isActive = location.pathname === link.to && (!link.hash || location.hash === link.hash);
                
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => { setHoveredNav(link.label); setSpacesDropdownOpen(true); }}
                    >
                      <button
                        onClick={() => handleNavClick(link.to, link.hash)}
                        className={`relative text-[13px] font-bold py-2 px-3.5 rounded-xl flex items-center gap-1 transition-colors cursor-pointer ${
                          isActive ? 'text-[#B45309]' : 'text-neutral-700 hover:text-[#1A1A1A]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${spacesDropdownOpen ? 'rotate-180 text-[#1A1A1A]' : ''}`} />
                        
                        {isHovered && (
                          <motion.span
                            layoutId="navHoverPill"
                            className="absolute inset-0 bg-[#F4EFE6]/85 rounded-xl -z-10"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </button>

                      {/* Spaces Dropdown Menu */}
                      <AnimatePresence>
                        {spacesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.96 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 w-72 mt-1.5 p-2 bg-[#FFFDF9] rounded-2xl shadow-xl border border-[#EBE6DC] z-50 space-y-1"
                          >
                            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                              Explore Mauji Spaces
                            </div>
                            {spacesList.map((space) => {
                              const IconComponent = space.icon;
                              return (
                                <button
                                  key={space.name}
                                  onClick={() => handleNavClick(space.to)}
                                  className="w-full text-left group flex items-start gap-3 p-2 rounded-xl hover:bg-[#F7F4EB] transition-colors cursor-pointer"
                                >
                                  <div className="p-2 rounded-lg bg-[#FFEF98]/50 group-hover:bg-[#FFEF98] text-[#1A1A1A] shrink-0 transition-colors">
                                    <IconComponent className="w-4 h-4 text-[#B45309]" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-neutral-800 group-hover:text-[#B45309] transition-colors">
                                        {space.name}
                                      </span>
                                      {space.badge && (
                                        <span className="text-[9px] bg-[#F59E0B] text-white px-1.5 py-0.2 rounded font-bold">
                                          {space.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[10px] text-neutral-500 leading-tight mt-0.5 line-clamp-1">
                                      {space.desc}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.to, link.hash)}
                    onMouseEnter={() => { setHoveredNav(link.label); setSpacesDropdownOpen(false); }}
                    className={`relative text-[13px] font-bold py-2 px-3.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                      link.highlight 
                        ? 'text-[#B45309]' 
                        : isActive 
                        ? 'text-[#B45309]' 
                        : 'text-neutral-700 hover:text-[#1A1A1A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] bg-[#D97706] text-white px-1.5 py-0.2 rounded font-bold uppercase tracking-wider">
                        {link.badge}
                      </span>
                    )}
                    
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverPill"
                        className={`absolute inset-0 rounded-xl -z-10 ${
                          link.highlight ? 'bg-[#FFEF98]/60' : 'bg-[#F4EFE6]/85'
                        }`}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile Left: Hamburger + Quick City Pill */}
          <div className="flex items-center gap-2 xl:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-black rounded-xl hover:bg-[#F4EFE6] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            <button
              onClick={() => setActiveCity(activeCity === 'pune' ? 'nagpur' : 'pune')}
              className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-[#F4EFE6] text-neutral-800 rounded-full border border-[#E3DCD0] active:scale-95 transition-transform cursor-pointer"
              title="Switch Location"
            >
              <MapPin className="w-3 h-3 text-[#F59E0B]" />
              <span>{activeCity === 'pune' ? 'Pune' : 'Nagpur'}</span>
            </button>
          </div>

          {/* ======================================================= */}
          {/* 2. MIDDLE LOGO LOCKUP (Center Jewel)                    */}
          {/* ======================================================= */}
          <div className="shrink-0 flex items-center justify-center px-3 sm:px-6">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col items-center justify-center group text-center" 
              aria-label="Mauji Home"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  src={publicAsset('images/mauji-logo.png')}
                  alt="Mauji The Time Cafe"
                  className="h-8 sm:h-9 lg:h-10 w-auto object-contain drop-shadow-xs"
                />
                <div className="w-px h-5 sm:h-6 bg-[#EBE6DC]" />
                <img
                  src={publicAsset('images/mauji-hindi.png')}
                  alt="मौजी"
                  className="h-4 sm:h-5 lg:h-5.5 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="text-[9px] font-mono tracking-[0.18em] text-[#B45309] uppercase font-bold mt-0.5">
                पुणे • नागपूर
              </span>
            </Link>
          </div>

          {/* ======================================================= */}
          {/* 3. RIGHT WING: Short Navigation Links & Action Cluster   */}
          {/* ======================================================= */}
          <div className="flex items-center gap-3 lg:gap-5 flex-1 justify-end">
            
            {/* Right Nav Links (Desktop) */}
            <nav 
              className="hidden xl:flex items-center gap-1"
              onMouseLeave={() => setHoveredNav(null)}
            >
              {rightNavLinks.map((link) => {
                const isHovered = hoveredNav === link.label;
                const isActive = location.pathname === link.to;

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.to, link.hash)}
                    onMouseEnter={() => setHoveredNav(link.label)}
                    className={`relative text-[13px] font-bold py-2 px-3.5 rounded-xl transition-colors cursor-pointer ${
                      isActive ? 'text-[#B45309]' : 'text-neutral-700 hover:text-[#1A1A1A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverPill"
                        className="absolute inset-0 bg-[#F4EFE6]/85 rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Sliding City Pill Switcher (Pune / Nagpur) */}
            <div className="hidden sm:flex items-center bg-[#F4EFE6] p-1 rounded-full border border-[#E3DCD0] relative shadow-inner">
              <button
                onClick={() => setActiveCity('pune')}
                className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  activeCity === 'pune' ? 'text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${activeCity === 'pune' ? 'text-[#FFEF98]' : 'text-[#F59E0B]'}`} />
                <span>Pune</span>
              </button>
              <button
                onClick={() => setActiveCity('nagpur')}
                className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  activeCity === 'nagpur' ? 'text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${activeCity === 'nagpur' ? 'text-[#FFEF98]' : 'text-[#F59E0B]'}`} />
                <span>Nagpur</span>
              </button>

              <motion.div
                layoutId="navActiveCityPill"
                className="absolute inset-y-1 rounded-full bg-[#1A1A1A] shadow-xs"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                style={{
                  left: activeCity === 'pune' ? '4px' : '50%',
                  right: activeCity === 'pune' ? '50%' : '4px',
                }}
              />
            </div>

            {/* Primary Action CTA: High-Contrast Rounded Pill Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick('/book')}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold text-white bg-[#1A1A1A] hover:bg-black transition-all shadow-sm group cursor-pointer whitespace-nowrap shrink-0"
            >
              <Laptop className="w-3.5 h-3.5 text-[#F59E0B] group-hover:rotate-6 transition-transform" />
              <span>Book a Desk</span>
            </motion.button>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE FULL-HEIGHT SLIDE DRAWER                           */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 80px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="xl:hidden border-b border-[#EBE6DC] bg-[#FFFDF9] px-4 pt-3 pb-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
          >
            <div className="space-y-4">
              
              {/* Dual-City Cards */}
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Select Sanctuary
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveCity('pune')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      activeCity === 'pune'
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                        : 'bg-[#F9F6F0] text-neutral-700 border-[#EBE6DC]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Pune Flagship</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className={`text-[10px] mt-1 ${activeCity === 'pune' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Bhosale Nagar • 120+ Desks
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveCity('nagpur')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      activeCity === 'nagpur'
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                        : 'bg-[#F9F6F0] text-neutral-700 border-[#EBE6DC]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Nagpur Space</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className={`text-[10px] mt-1 ${activeCity === 'nagpur' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Laxmi Nagar • Creative Hub
                    </p>
                  </button>
                </div>
              </div>

              {/* Navigation Items with Icons */}
              <div className="pt-2 divide-y divide-[#F4EFE6]">
                {allNavLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.to && (!link.hash || location.hash === link.hash);

                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.to, link.hash)}
                      className={`w-full py-3 px-2 flex items-center justify-between text-left rounded-xl transition-colors cursor-pointer ${
                        isActive 
                          ? 'bg-[#FFEF98]/30 font-bold text-[#B45309]' 
                          : 'hover:bg-[#F7F4EB] text-neutral-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${
                          link.highlight ? 'bg-[#FFEF98] text-[#B45309]' : 'bg-[#F4EFE6] text-neutral-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-sm ${link.highlight ? 'font-bold text-[#B45309]' : 'font-medium'}`}>
                          {link.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {link.badge && (
                          <span className="text-[10px] font-mono font-bold bg-[#D97706] text-white px-2 py-0.5 rounded-full">
                            {link.badge}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 space-y-3 border-t border-[#EBE6DC]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('/book');
                }}
                className="w-full py-3.5 rounded-2xl bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
              >
                <Laptop className="w-4 h-4 text-[#F59E0B]" />
                <span>Reserve a Desk Pass</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${maujiData.locations[activeCity].phone}`}
                  className="py-2.5 px-3 rounded-xl bg-white border border-[#EBE6DC] text-neutral-800 font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>Call Desk</span>
                </a>
                <a
                  href="https://wa.me/918010632001?text=Hi%20Mauji!%20I%20would%20like%20to%20reserve%20a%20seat"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25D366]/10 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-[#25D366]/30"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* FREE ARTISANAL BREW BAR MODAL                             */}
      {/* ========================================================= */}
      <AnimatePresence>
        {menuModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#EBE6DC] shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setMenuModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEF98] text-[#B45309] text-xs font-bold uppercase tracking-wider">
                  <Coffee className="w-3.5 h-3.5" /> 100% Inclusive With Every Pass
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-900">
                  Complimentary Artisanal Beverage Bar
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Unlike traditional coffee chains where each specialty cup costs ₹250 to ₹400, your time pass at Mauji includes unlimited freshly pulled artisanal brews.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] space-y-1.5">
                    <div className="font-bold text-xs text-neutral-900">Espresso & Milk</div>
                    <p className="text-[11px] text-neutral-500">Double Espresso, Americano, Latte, Flat White, Cortado, Cappuccino</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] space-y-1.5">
                    <div className="font-bold text-xs text-neutral-900">Manual Slow Brews</div>
                    <p className="text-[11px] text-neutral-500">Aeropress, V60 Pourover, French Press, Single-Estate Cold Brew</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] space-y-1.5">
                    <div className="font-bold text-xs text-neutral-900">Artisanal Teas & Tisanes</div>
                    <p className="text-[11px] text-neutral-500">Kashmiri Kahwa, Chamomile Mint, Single-Estate Assam, Masala Chai</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EBE6DC] space-y-1.5">
                    <div className="font-bold text-xs text-neutral-900">Sweet & Botanical</div>
                    <p className="text-[11px] text-neutral-500">Belgian Hot Chocolate, Hibiscus Iced Cooler, Fresh Mint Tonic</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#EBE6DC]">
                  <span className="text-xs font-bold text-emerald-600">✓ Zero Extra Charges</span>
                  <button
                    onClick={() => {
                      setMenuModalOpen(false);
                      handleNavClick('/book');
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs cursor-pointer shadow-sm"
                  >
                    Reserve Time Pass
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </header>
  );
}
