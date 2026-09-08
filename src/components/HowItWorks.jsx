import React from 'react';
import { QrCode, Coffee, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';
import { publicAsset } from '../utils/publicAsset';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: QrCode,
      title: 'Scan QR & Check In',
      desc: 'Walk in, scan the reception QR code with your phone, and settle into the space—no physical paperwork.',
      perk: 'Zero wait time • Instant Wi-Fi unlock',
    },
    {
      num: '02',
      icon: Coffee,
      title: 'Savor, Work & Create',
      desc: 'Enjoy unlimited craft coffees and teas, use the maker space, plug into high-speed Wi-Fi, or bring your own lunch.',
      perk: 'Unlimited specialty drinks • BYO food friendly',
    },
    {
      num: '03',
      icon: CreditCard,
      title: 'Check Out & Pay',
      desc: 'When you are ready to leave, check out at the counter. Your bill is calculated for the time you spent with us.',
      perk: 'Cashless-friendly • Pay only for time spent',
    },
  ];

  return (
    <section id="how-it-works" className="relative border-y border-[#EBE6DC] bg-[#F7F4EB]/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <img
            src={publicAsset('images/deck-badge-1.png')}
            alt="Mauji stamp"
            className="pointer-events-none absolute -top-6 right-4 hidden h-auto w-16 rotate-12 opacity-80 sm:block sm:right-10"
          />
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEF98] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B45309]">
            <Sparkles className="h-3.5 w-3.5" /> Simple 3-Step Flow
          </div>
          <h2 className="font-editorial text-3xl font-bold text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            How does the Time Cafe work?
          </h2>
          <p className="text-base text-neutral-600 sm:text-lg">
            Everything is pay-by-the-hour. No hidden fees, no awkward waiter reminders to order more food.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#EBE6DC] bg-white p-8 shadow-soft transition-all hover:shadow-elevated"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F4EB] text-[#B45309] shadow-inner transition-colors group-hover:bg-[#FFEF98]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-editorial text-3xl font-bold text-neutral-300 transition-colors group-hover:text-[#F59E0B]">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mb-2 font-editorial text-xl font-bold text-[#1A1A1A]">{step.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-600">{step.desc}</p>
                </div>

                <div className="flex items-center gap-1.5 border-t border-[#F7F4EB] pt-4 text-xs font-semibold text-[#B45309]">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  {step.perk}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
