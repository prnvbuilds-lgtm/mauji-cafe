import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Coffee, Clock, ArrowRight } from 'lucide-react';
import { maujiData } from '../data/maujiData';

export default function AiConcierge({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste & Welcome to Mauji! ☕ I'm your AI Concierge. How can I help you savor your time today?",
      quickChips: [
        "How does ₹210/hr pricing work?",
        "Can I bring my own food (BYO)?",
        "What equipment is in the Studio?",
        "How do I host a Business Shower?",
        "Where are your Pune & Nagpur spaces?"
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const knowledgeBase = {
    pricing: "Our Time Cafe operates on a pay-by-the-hour model starting @ ₹210/hour (with per-minute precision after the 1st hour). This includes 100% UNLIMITED specialty coffees (Cappuccino, Cold Brew, Pour-overs), teas, light snacks, 300 Mbps Wi-Fi, and library access. We also cap full days at ₹899!",
    byo: "Yes, 100%! Mauji is proudly a BYO (Bring Your Own) cafe. You are warmly welcomed to bring homemade tiffins, lunchboxes, or order directly via Zomato/Swiggy to our tables. We charge zero corkage or penalty for bringing outside food!",
    studio: "Our private Creator Studio is acoustically treated and rented @ ₹1,500/hour. It features multi-mic podcast setups, continuous studio softboxes, multi-color seamless paper backdrops, and high-speed upload lines for 4K video exports.",
    shower: "A 'Business Shower' is a signature Mauji tradition! Like a baby shower, but celebrating your new company, book launch, coffee roaster, or creative brand. We provide the venue, seating, AV sound, and announce it to our 10,000+ community.",
    location: "We have two beautiful sanctuaries:\n• Pune Flagship: Bhosale Nagar (near Senapati Bapat Road) — open 7:30 AM to 10:30 PM.\n• Nagpur Space: Laxmi Nagar — open 8:00 AM to 10:00 PM.\nNo reservations needed for regular cafe visits; just walk in and scan the QR code!"
  };

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('210') || q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('hour')) {
      return knowledgeBase.pricing;
    } else if (q.includes('byo') || q.includes('food') || q.includes('bring') || q.includes('swiggy') || q.includes('zomato') || q.includes('tiffin')) {
      return knowledgeBase.byo;
    } else if (q.includes('studio') || q.includes('podcast') || q.includes('shoot') || q.includes('gear') || q.includes('camera')) {
      return knowledgeBase.studio;
    } else if (q.includes('shower') || q.includes('business') || q.includes('host') || q.includes('event')) {
      return knowledgeBase.shower;
    } else if (q.includes('address') || q.includes('location') || q.includes('pune') || q.includes('nagpur') || q.includes('where')) {
      return knowledgeBase.location;
    } else {
      return `Thank you for asking! Mauji is India's first Time Cafe where you pay ₹210/hr for unlimited craft beverages and serene work/relaxation space. Would you like to book a desk, reserve the studio, or connect with our Pune team at +91 8010632001?`;
    }
  };

  const handleSend = (userText) => {
    const textToSend = userText || inputVal;
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: reply,
          action: textToSend.toLowerCase().includes('studio') || textToSend.toLowerCase().includes('book') ? 'booking' : null
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-3 bg-[#1A1A1A] hover:bg-black text-white rounded-full shadow-elevated border border-[#F59E0B]/40 transition-all hover:scale-105 active:scale-95"
            aria-label="Open Mauji AI Assistant"
          >
            <div className="w-8 h-8 rounded-full bg-[#FFEF98] text-[#1A1A1A] flex items-center justify-center font-bold text-sm shadow-inner">
              <Bot className="w-4 h-4 text-[#B45309]" />
            </div>
            <div className="text-left pr-1">
              <div className="text-xs font-bold text-[#FFEF98] leading-tight flex items-center gap-1">
                <span>Ask Mauji AI</span>
                <Sparkles className="w-3 h-3 text-[#F59E0B]" />
              </div>
              <div className="text-[10px] text-neutral-300">Instant answers 24/7</div>
            </div>
          </button>
        )}
      </div>

      {/* Expandable Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-white rounded-3xl border border-[#EBE6DC] shadow-elevated overflow-hidden flex flex-col h-[520px] animate-scale-up">
          
          {/* Chat Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFEF98] text-[#1A1A1A] flex items-center justify-center font-editorial font-bold text-lg">
                M
              </div>
              <div>
                <div className="font-editorial text-base font-bold flex items-center gap-1.5">
                  <span>Mauji Concierge</span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                </div>
                <div className="text-[11px] text-[#FFEF98]/80">
                  AI Slow-Living Guide • Pune & Nagpur
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FFFDF9]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#1A1A1A] text-white rounded-br-none'
                      : 'bg-[#F7F4EB] text-neutral-800 border border-[#EBE6DC] rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Quick chip options */}
                {msg.quickChips && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                    {msg.quickChips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(chip)}
                        className="text-[11px] font-medium bg-white hover:bg-[#FFEF98] text-neutral-800 px-2.5 py-1 rounded-full border border-[#EBE6DC] transition-colors shadow-soft text-left"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                {/* Optional Action Button */}
                {msg.action === 'booking' && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking('studio');
                    }}
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold bg-[#1A1A1A] text-white px-3 py-1.5 rounded-lg hover:bg-black"
                  >
                    <span>Reserve Studio Space</span>
                    <ArrowRight className="w-3 h-3 text-[#F59E0B]" />
                  </button>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-[#F7F4EB] px-3 py-2 rounded-2xl rounded-bl-none text-xs text-neutral-500 w-20 border border-[#EBE6DC]">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 border-t border-[#EBE6DC] bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask anything about Mauji..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl bg-[#F7F4EB] border border-[#EBE6DC] text-xs text-neutral-900 focus:outline-none focus:border-[#D97706]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#1A1A1A] hover:bg-black text-[#FFEF98] transition-colors"
                disabled={!inputVal.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
