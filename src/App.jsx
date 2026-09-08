import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AiConcierge from './components/AiConcierge';
import BookingModal from './components/BookingModal';

// ─── Lazy-loaded page views (code-split per route) ─────────────────────────
const HomePage     = lazy(() => import('./pages/HomePage'));
const CoworkingPage = lazy(() => import('./pages/CoworkingPage'));
const TimeCafePage  = lazy(() => import('./pages/TimeCafePage'));
const SpacesPage    = lazy(() => import('./pages/SpacesPage'));
const PricingPage   = lazy(() => import('./pages/PricingPage'));
const EventsPage    = lazy(() => import('./pages/EventsPage'));
const StoryPage     = lazy(() => import('./pages/StoryPage'));
const BookingPage   = lazy(() => import('./pages/BookingPage'));

// ─── Lightweight skeleton shown during code-split loading ──────────────────
function PageSkeleton() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-[#FFEF98] border-t-[#B45309] animate-spin" />
        <p className="text-xs font-semibold text-neutral-400 tracking-wider uppercase">
          Brewing your experience…
        </p>
      </div>
    </div>
  );
}


// Scroll to top or anchor on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [activeCity, setActiveCity] = useState('pune');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('cafe');
  const [bookingHours, setBookingHours] = useState(3);

  const handleOpenBooking = (type = 'cafe', hours = 3) => {
    setBookingType(type);
    setBookingHours(hours);
    setIsBookingOpen(true);
  };

  const handleOpenSimulate = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#1A1A1A]">
        {/* Navigation with Centered Middle Logo & Multi-page + Single-page links */}
        <Navbar
          activeCity={activeCity}
          setActiveCity={setActiveCity}
          onOpenBooking={handleOpenBooking}
          onOpenSimulate={handleOpenSimulate}
        />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
            {/* 1. Complete Single-Page Overview */}
            <Route
              path="/"
              element={
                <HomePage
                  activeCity={activeCity}
                  setActiveCity={setActiveCity}
                  onOpenBooking={handleOpenBooking}
                  onOpenSimulate={handleOpenSimulate}
                />
              }
            />

            {/* 2. Dedicated Coworking Pass & Desk Deep-Dive */}
            <Route
              path="/coworking"
              element={
                <CoworkingPage
                  activeCity={activeCity}
                  setActiveCity={setActiveCity}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />

            {/* 3. Dedicated Time Cafe / Anti-Cafe Concept */}
            <Route
              path="/time-cafe"
              element={
                <TimeCafePage
                  activeCity={activeCity}
                  onOpenBooking={handleOpenBooking}
                  onOpenSimulate={handleOpenSimulate}
                />
              }
            />

            {/* 4. Dedicated Catalog of All 8 Mauji Spaces */}
            <Route
              path="/spaces"
              element={
                <SpacesPage
                  activeCity={activeCity}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />

            {/* 5. Dedicated Pricing & Comparison Guide */}
            <Route
              path="/pricing"
              element={<PricingPage onOpenBooking={handleOpenBooking} />}
            />

            {/* 6. Dedicated Community Events & Salons Feed */}
            <Route
              path="/events"
              element={<EventsPage activeCity={activeCity} />}
            />

            {/* 7. Dedicated Story & Flagship Guide */}
            <Route
              path="/story"
              element={
                <StoryPage
                  activeCity={activeCity}
                  setActiveCity={setActiveCity}
                />
              }
            />

            {/* 8. Dedicated Reservation & Booking Portal */}
            <Route
              path="/book"
              element={
                <BookingPage
                  activeCity={activeCity}
                  setActiveCity={setActiveCity}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
          </Routes>
          </Suspense>
        </main>

        {/* Floating 24/7 AI Concierge Assistant */}
        <AiConcierge onOpenBooking={handleOpenBooking} />

        {/* Global Booking / Reservation Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          defaultType={bookingType}
          defaultHours={bookingHours}
          activeCity={activeCity}
        />

        {/* Global Rich Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
