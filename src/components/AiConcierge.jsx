import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Bot, CalendarDays, Check, ChevronRight, Coffee, MapPin, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { maujiData } from '../data/maujiData';

const today = new Date().toISOString().slice(0, 10);
const services = {
  cafe: ['Time Cafe', 'Unlimited brews included', '₹210/hr'],
  'day-pass': ['Coworking day pass', 'A focused day at Mauji', '₹899/day'],
  studio: ['Creator Studio', 'Podcasting & shoot-ready', '₹1,500/hr'],
  event: ['Event space', 'Workshops & celebrations', 'From ₹1,500/hr'],
};
const message = (role, text, choices = []) => ({ id: crypto.randomUUID(), role, text, choices });

export default function AiConcierge({ onOpenBooking }) {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [booking, setBooking] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const [draft, setDraft] = useState({ city: 'pune', service: 'cafe', date: today, time: '11:00', guests: '1', name: '', phone: '' });
  const [messages, setMessages] = useState([message('bot', 'Namaste — I’m Mauji Guide. I can help you choose a space, answer questions, or arrange a visit.', [
    ['Plan a visit', 'book'], ['How pricing works', 'pricing'], ['Pune or Nagpur?', 'location'], ['Explore the studio', 'studio'],
  ])]);
  const endRef = useRef(null);
  const triggerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { if (open) inputRef.current?.focus(); else triggerRef.current?.focus(); }, [open]);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }), [messages, booking, typing, reducedMotion]);
  useEffect(() => { const close = (e) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  const append = (item) => setMessages((items) => [...items, item]);
  const update = (name, value) => setDraft((current) => ({ ...current, [name]: value }));

  const response = (query) => {
    const q = query.toLowerCase();
    if (q.includes('book') || q.includes('visit') || q.includes('reserve')) return message('bot', 'Lovely. Share a few details below and I’ll prepare a clear reservation request for our team.');
    if (q.includes('price') || q.includes('cost') || q.includes('pricing')) return message('bot', 'Time Cafe visits start at ₹210/hour, including craft beverages, Wi-Fi and library access. Coworking day passes are ₹899.', [['Plan a visit', 'book']]);
    if (q.includes('food') || q.includes('byo') || q.includes('tiffin')) return message('bot', 'Yes — Mauji is BYO-friendly. Bring a tiffin or order food in; there is no corkage charge.', [['Plan a visit', 'book']]);
    if (q.includes('studio') || q.includes('podcast') || q.includes('shoot')) return message('bot', 'The Creator Studio is ₹1,500/hour and is set up for podcasts, shoots and quick uploads.', [['Reserve Creator Studio', 'studio-book']]);
    if (q.includes('pune') || q.includes('nagpur') || q.includes('location') || q.includes('where')) return message('bot', 'We welcome you in Pune (Bhosale Nagar, 7:30 AM–10:30 PM) and Nagpur (Laxmi Nagar, 8 AM–10 PM).', [['Pune', 'pune'], ['Nagpur', 'nagpur']]);
    return message('bot', 'I can help with pricing, locations, BYO food, coworking, the studio, or a visit request. What would make your Mauji plan easier?', [['Plan a visit', 'book'], ['Pricing', 'pricing']]);
  };
  const send = (value = input) => {
    const text = value.trim();
    if (!text) return;
    append(message('user', text)); setInput(''); setTyping(true);
    window.setTimeout(() => { append(response(text)); setTyping(false); if (/book|visit|reserve/.test(text.toLowerCase())) { setReady(false); setBooking(true); } }, 450);
  };
  const choose = ([label, action]) => {
    if (action === 'book' || action === 'studio-book') { if (action === 'studio-book') update('service', 'studio'); append(message('user', label)); append(message('bot', 'Wonderful — complete the visit card below. No payment is taken in chat.')); setReady(false); setBooking(true); return; }
    if (action === 'pune' || action === 'nagpur') { update('city', action); append(message('user', label)); append(message('bot', 'Perfect — ' + maujiData.locations[action].name + ' it is. Would you like to arrange a visit?', [['Plan a visit', 'book']])); return; }
    send(action);
  };
  const submit = (event) => {
    event.preventDefault();
    if (!draft.name.trim() || !/^\+?[0-9\s-]{8,}$/.test(draft.phone)) { setError('Add your name and a valid phone number so our team can confirm your request.'); return; }
    setError(''); setReady(true); append(message('bot', 'Your reservation details are ready. Send them to our team on WhatsApp to confirm availability — no payment is taken here.'));
  };
  const whatsapp = encodeURIComponent('Hello Mauji team! I would like to request a booking.\n\nName: ' + draft.name + '\nPhone: ' + draft.phone + '\nLocation: ' + maujiData.locations[draft.city].name + '\nExperience: ' + services[draft.service][0] + '\nDate: ' + draft.date + '\nTime: ' + draft.time + '\nGuests: ' + draft.guests);

  return <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
    <AnimatePresence>{open && <motion.section initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : 12 }} transition={{ duration: 0.2 }} role="dialog" aria-modal="true" aria-labelledby="mauji-guide-title" className="fixed inset-3 flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-[28px] border border-[#E8DFC9] bg-[#FFFDF9] shadow-2xl sm:inset-auto sm:bottom-0 sm:right-0 sm:h-[680px] sm:w-[430px]">
      <header className="bg-[#1A1A1A] p-5 text-white"><div className="flex items-start justify-between"><div className="flex gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFEF98] text-[#B45309]"><Bot aria-hidden="true" className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h2 id="mauji-guide-title" className="font-editorial text-lg font-bold">Mauji Guide</h2><span className="h-2 w-2 rounded-full bg-[#68D391]" aria-label="Available" /></div><p className="mt-0.5 text-xs text-[#FFEF98]/80">Plan a slower, better day.</p></div></div><button onClick={() => setOpen(false)} aria-label="Close Mauji Guide" className="rounded-xl p-2 text-neutral-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFEF98]"><X aria-hidden="true" className="h-5 w-5" /></button></div></header>
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5" aria-live="polite">
        {messages.map((item) => <div key={item.id} className={item.role === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'}><div className={item.role === 'user' ? 'max-w-[86%] rounded-2xl rounded-br-sm bg-[#1A1A1A] px-4 py-3 text-sm text-white' : 'max-w-[90%] rounded-2xl rounded-bl-sm border border-[#E8DFC9] bg-white px-4 py-3 text-sm leading-relaxed text-neutral-700 shadow-sm'}>{item.role === 'bot' && <span className="mb-1.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#B45309]"><Sparkles aria-hidden="true" className="h-3 w-3" /> Mauji Guide</span>}{item.text}</div>{item.choices.length > 0 && <div className="mt-2 flex max-w-[95%] flex-wrap gap-2">{item.choices.map((choice) => <button key={choice[0]} onClick={() => choose(choice)} className="rounded-full border border-[#E8DFC9] bg-white px-3 py-1.5 text-left text-xs font-semibold text-neutral-700 transition hover:border-[#D97706] hover:bg-[#FFEF98] focus:outline-none focus:ring-2 focus:ring-[#D97706]">{choice[0]}<ChevronRight aria-hidden="true" className="ml-1 inline h-3 w-3" /></button>)}</div>}</div>)}
        {booking && !ready && <form onSubmit={submit} className="rounded-2xl border border-[#F2C879] bg-[#FFF8E6] p-4 shadow-sm" aria-label="Book through Mauji Guide"><div className="mb-3 flex gap-2"><CalendarDays aria-hidden="true" className="h-4 w-4 text-[#B45309]" /><div><p className="text-sm font-bold text-neutral-900">Create a visit request</p><p className="text-[11px] text-neutral-600">No payment is taken in chat.</p></div></div><div className="grid grid-cols-2 gap-2"><label className="text-xs font-semibold">City<select value={draft.city} onChange={(e) => update('city', e.target.value)} className="mt-1 w-full rounded-xl border border-[#E8DFC9] bg-white p-2 text-xs"><option value="pune">Pune</option><option value="nagpur">Nagpur</option></select></label><label className="text-xs font-semibold">Experience<select value={draft.service} onChange={(e) => update('service', e.target.value)} className="mt-1 w-full rounded-xl border border-[#E8DFC9] bg-white p-2 text-xs">{Object.entries(services).map(([key, service]) => <option key={key} value={key}>{service[0]}</option>)}</select></label><label className="text-xs font-semibold">Date<input required min={today} type="date" value={draft.date} onChange={(e) => update('date', e.target.value)} className="mt-1 w-full rounded-xl border border-[#E8DFC9] bg-white p-2 text-xs" /></label><label className="text-xs font-semibold">Arrival time<input required type="time" value={draft.time} onChange={(e) => update('time', e.target.value)} className="mt-1 w-full rounded-xl border border-[#E8DFC9] bg-white p-2 text-xs" /></label><label className="col-span-2 text-xs font-semibold">Guests<input min="1" max="50" type="number" value={draft.guests} onChange={(e) => update('guests', e.target.value)} className="mt-1 w-full rounded-xl border border-[#E8DFC9] bg-white p-2 text-xs" /></label><label className="col-span-2 text-xs font-semibold">Your name<input required value={draft.name} onChange={(e) => update('name', e.target.value)} className="mt-1 w-full rounded-xl border border-[#E8DFC9] bg-white p-2 text-xs" placeholder="Name for the reservation" /></label><label className="col-span-2 text-xs font-semibold">Phone / WhatsApp<input required inputMode="tel" value={draft.phone} onChange={(e) => update('phone', e.target.value)} className="mt-1 w-full rounded-xl border border-[#E8DFC9] bg-white p-2 text-xs" placeholder="+91 98765 43210" /></label></div><p className="mt-3 text-[11px] font-medium text-[#B45309]">{services[draft.service][1]} · {services[draft.service][2]}</p>{error && <p role="alert" className="mt-2 text-xs text-red-700">{error}</p>}<button type="submit" className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-4 py-2.5 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#D97706]"><Check aria-hidden="true" className="h-4 w-4 text-[#FFEF98]" /> Prepare WhatsApp request</button></form>}
        {ready && <div className="rounded-2xl border border-[#A7D9B7] bg-[#F1FBF4] p-4"><p className="text-sm font-bold text-neutral-900">Almost there, {draft.name}.</p><p className="mt-1 text-xs text-neutral-600">Send the prepared message to confirm availability.</p><a href={'https://wa.me/918010632001?text=' + whatsapp} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#1E8E4E] px-4 py-2.5 text-xs font-bold text-white"><MessageCircle aria-hidden="true" className="h-4 w-4" /> Send booking request on WhatsApp</a></div>}
        {typing && <div className="w-fit rounded-2xl border border-[#E8DFC9] bg-white px-3 py-2 text-xs text-neutral-500">Mauji Guide is thinking…</div>}<div ref={endRef} />
      </div>
      <form onSubmit={(e) => { e.preventDefault(); send(); }} className="border-t border-[#E8DFC9] bg-white p-3"><div className="flex items-center gap-2 rounded-2xl bg-[#F7F4EB] p-1.5"><input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder={'Ask about Mauji or type “book”'} className="min-w-0 flex-1 bg-transparent px-2 text-sm text-neutral-900 outline-none placeholder:text-neutral-400" aria-label="Message Mauji Guide" /><button type="submit" disabled={!input.trim() || typing} aria-label="Send message" className="grid h-9 w-9 place-items-center rounded-xl bg-[#1A1A1A] text-[#FFEF98] disabled:opacity-40"><Send aria-hidden="true" className="h-4 w-4" /></button></div><button type="button" onClick={() => { setOpen(false); onOpenBooking('cafe'); }} className="mt-2 w-full text-center text-[11px] font-semibold text-[#B45309] hover:underline">Prefer the full reservation form?</button></form>
    </motion.section>}</AnimatePresence>
    {!open && <motion.button ref={triggerRef} onClick={() => setOpen(true)} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} aria-label="Open Mauji Guide" className="flex items-center gap-3 rounded-full border border-[#F2C879] bg-[#1A1A1A] py-2 pl-2 pr-4 text-left text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFEF98] text-[#B45309]"><Coffee aria-hidden="true" className="h-5 w-5" /></span><span><span className="flex items-center gap-1 text-xs font-bold text-[#FFEF98]">Ask Mauji <Sparkles aria-hidden="true" className="h-3 w-3" /></span><span className="text-[10px] text-neutral-300">Plan your visit</span></span></motion.button>}
  </div>;
}
