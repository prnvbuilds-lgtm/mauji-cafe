import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import TimeCalculator from '../components/TimeCalculator';

// ─── Lazy-load heavy below-fold sections ──────────────────────────────────────
// These are code-split so they don't block the above-fold render
const CoworkingBooking = lazy(() => import('../components/CoworkingBooking'));
const ElementsGrid     = lazy(() => import('../components/ElementsGrid'));
const PricingSection   = lazy(() => import('../components/PricingSection'));
const EventsFeed       = lazy(() => import('../components/EventsFeed'));
const LocationsStory   = lazy(() => import('../components/LocationsStory'));
const FaqSection       = lazy(() => import('../components/FaqSection'));

// Minimal section skeleton while lazy chunks load
function SectionSkeleton() {
  return (
    <div className="py-20 px-4 flex justify-center">
      <div className="w-8 h-8 rounded-full border-4 border-[#FFEF98] border-t-[#B45309] animate-spin" />
    </div>
  );
}

export default function HomePage({ activeCity, setActiveCity, onOpenBooking, onOpenSimulate }) {
  return (
    <div>
      {/* ── Above fold: loaded eagerly ──────────────── */}
      <Hero
        activeCity={activeCity}
        onOpenBooking={onOpenBooking}
        onOpenSimulate={onOpenSimulate}
      />

      {/* How It Works & Anti-Cafe Concept */}
      <HowItWorks />

      {/* ── Below fold: lazy-loaded independently ──── */}

      {/* Luxury Coworking Booking Flow */}
      <Suspense fallback={<SectionSkeleton />}>
        <CoworkingBooking
          activeCity={activeCity}
          setActiveCity={setActiveCity}
        />
      </Suspense>

      {/* Live Interactive Rate Calculator */}
      <Suspense fallback={<SectionSkeleton />}>
        <TimeCalculator onOpenBooking={onOpenBooking} />
      </Suspense>

      {/* The 8 Mauji Elements Showcase */}
      <Suspense fallback={<SectionSkeleton />}>
        <ElementsGrid onOpenBooking={onOpenBooking} />
      </Suspense>

      {/* Transparent Pricing & Comparison Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <PricingSection onOpenBooking={onOpenBooking} />
      </Suspense>

      {/* Upcoming Community Events & Showers */}
      <Suspense fallback={<SectionSkeleton />}>
        <EventsFeed activeCity={activeCity} />
      </Suspense>

      {/* Locations & Our Story */}
      <Suspense fallback={<SectionSkeleton />}>
        <LocationsStory
          activeCity={activeCity}
          setActiveCity={setActiveCity}
        />
      </Suspense>

      {/* Customer FAQs & Support */}
      <Suspense fallback={<SectionSkeleton />}>
        <FaqSection />
      </Suspense>
    </div>
  );
}
