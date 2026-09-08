export const maujiData = {
  brand: {
    name: "Mauji Time Cafe & Spaces",
    tagline: "An ode to slow living — Be yourself, be a Mauji",
    subtitle: "India's first & largest hybrid Time Cafe, creative studio, and judgment-free coworking sanctuary.",
    hourlyRate: 210,
    phone: "+91 8010632001",
    email: "pune@maujicafe.com",
  },
  locations: {
    pune: {
      id: "pune",
      name: "Pune Flagship",
      area: "Bhosale Nagar / Senapati Bapat Road",
      address: "11, Sahajeevan Society, Bhosale Nagar, Pune, Maharashtra 411007",
      phone: "+91 8010632001",
      email: "pune@maujicafe.com",
      hours: "7:30 AM – 10:30 PM (Mon - Sun)",
      vibe: "Lush garden courtyard, sunlit book corners, maker studio & community patio.",
      features: [
        "Garden Courtyard & Quiet Zones",
        "Acoustic Podcast & Shoot Studio",
        "Pottery & Clay Maker Workshop",
        "Co-working Desks with High-Speed LAN",
        "Curated Library with 500+ Books",
        "Private Meeting Pods"
      ],
      mapUrl: "https://maps.google.com/?q=Mauji+Time+Cafe+Pune"
    },
    nagpur: {
      id: "nagpur",
      name: "Nagpur Space",
      area: "Laxmi Nagar",
      address: "Plot 14, Laxmi Nagar, Nagpur, Maharashtra 440022",
      phone: "+91 8010632001",
      email: "nagpur@maujicafe.com",
      hours: "8:00 AM – 10:00 PM (Mon - Sun)",
      vibe: "Vibrant cultural hub, intimate music lounge & creative brainstorm sanctuary.",
      features: [
        "Acoustic Open Mic & Screening Lounge",
        "Quiet Coworking Focus Hub",
        "Artisan Pour-Over & Tea Bar",
        "Creator Content Corner",
        "BYO Food Dining Nook",
        "High-Speed 300 Mbps Wi-Fi"
      ],
      mapUrl: "https://maps.google.com/?q=Mauji+Time+Cafe+Nagpur"
    }
  },
  elements: [
    {
      id: "time-cafe",
      category: "cafe-work",
      title: "The Time Cafe",
      badge: "Flagship Concept",
      headline: "Pay for time, not coffee. Endless craft brews included.",
      description: "Step into an unhurried haven. No waiters hovering, no rush to reorder just to keep your seat. Your hourly pass covers unlimited specialty cappuccinos, pour-overs, iced teas, and savory nibbles.",
      pricing: "₹210 / hour",
      perks: ["Unlimited hot & cold craft beverages", "Complimentary freshly baked bites", "Zero waiter interruption", "BYO food friendly"],
      image: "/images/mauji-ambiance-vase.jpg"
    },
    {
      id: "workspace",
      category: "cafe-work",
      title: "Coworking & Desks",
      badge: "Productivity",
      headline: "Thoughtfully crafted for freelancers, writers & small agile teams.",
      description: "Ergonomic seating, redundant high-speed fiber Wi-Fi, surge-protected charging ports at every seat, and both quiet focus corners and collaborative communal tables.",
      pricing: "From ₹899 / day or ₹10,000 / month",
      perks: ["300 Mbps symmetrical fiber line", "Power plugs at every desk", "Quiet call pods available", "Daily artisanal snacks included"],
      image: "/images/gallery-1.png"
    },
    {
      id: "studio",
      category: "creator",
      title: "Creator Studio",
      badge: "Media Production",
      headline: "Acoustic playground for podcasts, reels, and product shoots.",
      description: "Equipped with sound-absorbing acoustic paneling, professional softbox and ring lighting, broadcast-grade microphones, multi-color seamless backdrops, and fast upload lines.",
      pricing: "₹1,500 / hour",
      perks: ["Podcasting multi-mic audio rig", "Continuous video lights & ring lights", "Multi-colored paper seamless backdrops", "Complimentary beverage service for shoot team"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "event-spaces",
      category: "culture",
      title: "Event Spaces",
      badge: "Community",
      headline: "From Business Showers to Acoustic Gigs and Art Fleas.",
      description: "Versatile indoor lounge and serene courtyard stage. Complete AV setup with HD projectors, surround sound, cordless microphones, and marketing support to our 10,000+ member community.",
      pricing: "₹1,500 / hour",
      perks: ["Seating for 20 to 70 guests", "Full AV projector & PA sound system", "Event marketing on Mauji WhatsApp & IG", "Dedicated event host on ground"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "art-store",
      category: "culture",
      title: "The Art Store",
      badge: "Independent Artisans",
      headline: "Discover and support indie creators, painters & ceramists.",
      description: "A permanent boutique marketplace where local artists exhibit and sell their handmade art, prints, ceramics, organic candles, and curated zines.",
      pricing: "Boutique collection",
      perks: ["100% locally sourced artwork", "Hand-poured candles & stationery", "Zero platform middleman fee for artists", "New artist popups every month"],
      image: "/images/gallery-4.png"
    },
    {
      id: "library",
      category: "culture",
      title: "Curated Library",
      badge: "Mind & Soul",
      headline: "500+ handpicked books spanning literature, design, and philosophy.",
      description: "Curated from our founder's private shelves and community book-swap contributions. Sink into a plush wingback armchair and lose track of time in good company.",
      pricing: "Included with Time Pass",
      perks: ["Fiction, design & business masterclasses", "Free community book-exchange shelf", "Deep focus reading nooks", "Silent reading hours on weekdays"],
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "maker-space",
      category: "creator",
      title: "Maker Space",
      badge: "Hands-on DIY",
      headline: "Pottery wheels, clay modeling, prototyping, and tactile craft.",
      description: "Get your hands dirty! Our maker space offers pottery wheels, sculpting tools, craft papers, and raw materials. Beginner-friendly guided workshops hosted every weekend.",
      pricing: "Workshop & walk-in access",
      perks: ["Electric pottery wheels & clay sets", "Sculpting tools & carving knives", "Weekend artist-led classes", "All beginner-level friendly"],
      image: "/images/gallery-2.png"
    },
    {
      id: "kitchen",
      category: "cafe-work",
      title: "The Kitchen",
      badge: "Artisanal Bites",
      headline: "Wholesome gourmet flavors crafted with soul. Plus: BYO friendly!",
      description: "Fresh artisanal sourdough toasts, wholesome grain bowls, and handcrafted pastas. And remember: Mauji proudly allows you to bring home tiffins or order Swiggy right to your table!",
      pricing: "A-la-carte menu & BYO food",
      perks: ["Artisanal sourdough & pasta", "Wholesome ingredient sourcing", "Zero corkage on BYO food & tiffins", "Orders delivered straight to table"],
      image: "/images/gallery-3.png"
    }
  ],
  pricingTiers: [
    {
      id: "hourly",
      name: "Time Cafe Pass",
      price: "₹210",
      period: "per hour",
      popular: false,
      tagline: "Pay only for the minutes you stay. Leave whenever you wish.",
      features: [
        "Unlimited freshly brewed hot & cold coffees",
        "Unlimited artisanal teas & herbal infusions",
        "Complimentary light savory snack platter",
        "Blazing 300 Mbps Wi-Fi & surge-protected power",
        "Access to Curated Library & Board Games",
        "100% BYO Food friendly (Bring home meals or order Swiggy)"
      ],
      cta: "Check In Now",
      type: "hourly"
    },
    {
      id: "day-pass",
      name: "Full Day Coworking Pass",
      price: "₹899",
      period: "up to 10 hours",
      popular: true,
      tagline: "The ultimate productivity day for freelancers and focused builders.",
      features: [
        "All Time Cafe unlimited beverages throughout the day",
        "Dedicated ergonomic desk with dual-monitor friendly space",
        "Come-and-go flexibility with day wristband",
        "Complimentary printing & scanning credits",
        "Priority access to quiet meeting nooks",
        "Saves over ₹1,200 compared to hourly rates"
      ],
      cta: "Book Day Pass",
      type: "day"
    },
    {
      id: "monthly",
      name: "Monthly Resident Membership",
      price: "₹10,000",
      period: "per month",
      popular: false,
      tagline: "Your second home. Dedicated desk, community perks, and creator hours.",
      features: [
        "Unlimited monthly hours & priority desk booking",
        "Endless craft beverages & daily house snacks",
        "5 Free Hours of Private Podcast Studio or Meeting Room",
        "Free or 50% VIP discount on all Mauji weekend workshops",
        "Official Mauji Creator Directory listing & networking",
        "Mail & parcel reception service"
      ],
      cta: "Apply For Membership",
      type: "monthly"
    },
    {
      id: "studio-booking",
      name: "Creator Studio Hire",
      price: "₹1,500",
      period: "per hour",
      popular: false,
      tagline: "Professional podcasting, video production, and editorial shoots.",
      features: [
        "Acoustically dampened private studio room",
        "Multi-mic podcast console + continuous video lights",
        "Color backdrops (White, Sage, Warm Ivory, Terracotta)",
        "High-speed wired upload line for RAW footage",
        "Complimentary coffee bar for cast & crew",
        "Assistance with basic lighting setup"
      ],
      cta: "Reserve Studio",
      type: "studio"
    }
  ],
  events: [
    {
      id: "e1",
      title: "Swifties Acoustic Night & Watch Party",
      city: "pune",
      date: "Saturday, 7:00 PM",
      category: "Music & Community",
      price: "₹399",
      seatsTotal: 40,
      seatsLeft: 6,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
      description: "Sing along to your favorite Eras over bottomless lavender iced lattes and fresh fairy cookies."
    },
    {
      id: "e2",
      title: "Business Shower: Celebrating Indie Founders",
      city: "pune",
      date: "Sunday, 5:00 PM",
      category: "Startups & Networking",
      price: "Free RSVP",
      seatsTotal: 50,
      seatsLeft: 11,
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
      description: "A Mauji original concept! Like a baby shower, but celebrating friends launching new businesses, books, or art lines."
    },
    {
      id: "e3",
      title: "Hand-Building Pottery & Glazing Workshop",
      city: "nagpur",
      date: "Next Saturday, 11:00 AM",
      category: "Art & Craft",
      price: "₹1,200",
      seatsTotal: 15,
      seatsLeft: 3,
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80",
      description: "Learn tactile pinch-pot and coil pottery techniques with Master Ceramist. Includes all clays and kiln firing."
    },
    {
      id: "e4",
      title: "Nazm: Poetry & Acoustic Open Mic",
      city: "nagpur",
      date: "Next Sunday, 6:30 PM",
      category: "Performing Arts",
      price: "₹250",
      seatsTotal: 45,
      seatsLeft: 8,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      description: "An evening of raw words, heartfelt shayari, and soulful strings in our intimate Nagpur lounge."
    }
  ],
  pressQuotes: [
    {
      source: "The Times of India",
      quote: "Mauji is revolutionizing cafe culture with its radical pay-by-the-hour anti-cafe model.",
      logoImage: "/images/press-toi.png"
    },
    {
      source: "The Indian Express",
      quote: "A true sanctuary for creators, writers, and slow-living enthusiasts who value freedom over haste.",
      logoImage: "/images/press-indian-express.png"
    },
    {
      source: "LBB (Little Black Book)",
      quote: "Pune's biggest time cafe where your thoughts flow freely over endless cappuccinos.",
      logoImage: "/images/press-lbb.png"
    },
    {
      source: "WhatsHot Pune",
      quote: "An aesthetic paradise combining coworking, podcast studios, and heartwarming weekend events.",
      logoImage: "/images/press-whatshot.png"
    }
  ],

  // Comprehensive Craft Beverage Bar Menu (All included free with Time Pass)
  coffeeMenu: {
    espressoBar: [
      { name: "Single Origin Cortado", notes: "Rich 1:1 espresso and silky textured milk", roast: "Medium Dark", included: true },
      { name: "Velvet Cappuccino", notes: "Double shot espresso with dense, creamy microfoam", roast: "Chikmagalur Arabica", included: true },
      { name: "Flat White", notes: "Intense espresso with glossy, smooth steamed milk", roast: "Estate Blend", included: true },
      { name: "Classic Americano", notes: "Diluted espresso with floral crema and sweet citrus notes", roast: "Medium Roast", included: true },
      { name: "Cafe Mocha", notes: "Single origin espresso fused with 55% artisanal dark cacao", roast: "Dark Roast", included: true }
    ],
    manualBrews: [
      { name: "V60 Hand Pour-Over", notes: "Clean, tea-like body highlighting delicate jasmine and berry notes", origin: "Wayanad Estate", included: true },
      { name: "AeroPress Immersion Brew", notes: "Full-bodied, velvety brew with low acidity and cocoa finish", origin: "Coorg Selection", included: true },
      { name: "Cold Drip Slow Extract", notes: "18-hour cold brewed concentrate served over hand-cut ice", origin: "Single Origin Arabica", included: true },
      { name: "Vietnamese Spiced Iced Coffee", notes: "Bold Robusta dark roast with condensed milk over crushed ice", origin: "Estate Blend", included: true }
    ],
    botanicalTeas: [
      { name: "Kashmiri Saffron Kahwa", notes: "Green tea steeped with saffron, whole cardamom & crushed almonds", included: true },
      { name: "Hibiscus Lavender Iced Tisane", notes: "Ruby red tart infusion steeped with dried lavender petals", included: true },
      { name: "Chamomile Lemongrass Serenity", notes: "Caffeine-free soothing botanical infusion for deep work", included: true },
      { name: "Organic Masala Chai", notes: "Slow-simmered Assam CTC with fresh crushed ginger and spices", included: true }
    ],
    complimentaryNibbles: [
      { name: "Fresh Rosemary Garlic Focaccia crisps", included: true },
      { name: "Caramelized Banana Walnut Tea Cake slices", included: true },
      { name: "Roasted Himalayan Spiced Foxnuts (Makhana)", included: true },
      { name: "Butter Shortbread & Sesame Crackers", included: true }
    ]
  },

  // Starbucks vs. Mauji Comparative ROI Data for Business conversion
  comparisonMatrix: {
    hoursSpent: 3,
    commercialCafe: {
      name: "Commercial Cafe Chain (e.g. Starbucks)",
      coffeeCost: 720, // 2 drinks @ 360
      foodCost: 350,
      totalCost: 1070,
      wifiSpeed: "30 Mbps (throttled)",
      atmosphere: "Noisy, high waiter turnover pressure",
      powerPlugs: "Few, hard to find",
      byoFood: "Forbidden",
      tipping: "Expected"
    },
    mauji: {
      name: "Mauji Time Cafe & Sanctuary",
      hourlyRate: 210,
      totalCost: 630, // 3 x 210
      netSavings: 440,
      savingsPercent: "41%",
      wifiSpeed: "300 Mbps symmetrical fiber line",
      atmosphere: "Unhurried, judgment-free, serene garden nooks",
      powerPlugs: "Surge-protected plugs at every single desk",
      byoFood: "100% welcomed (bring tiffin or Swiggy/Zomato)",
      tipping: "Strictly Zero Tipping Policy"
    }
  },

  // Frequently Asked Questions (Comprehensive Business FAQ)
  faqs: [
    {
      q: "How does the hourly Time Cafe billing work?",
      a: "When you arrive, you scan the front desk QR code or receive a brass time coin. Your timer begins. When you're ready to leave, you check out at the counter or on your phone. You pay ₹210 for the first hour, and subsequent time is pro-rated to the exact minute. You never pay for unspent time."
    },
    {
      q: "Are coffees and snacks really unlimited?",
      a: "Yes, 100%! Your hourly pass covers unlimited craft cappuccinos, lattes, manual pour-overs (V60 & AeroPress), iced teas, and house-baked bites. There are no surprise beverage add-ons or bill inflation."
    },
    {
      q: "Can I bring my own food or order Swiggy / Zomato?",
      a: "Absolutely! Mauji is an anti-cafe. We actively encourage you to bring your home tiffin, packed lunch, or order from your favorite restaurants via Swiggy/Zomato directly to our reception. We even provide plates and cutlery."
    },
    {
      q: "Are both Pune and Nagpur spaces pet-friendly?",
      a: "Yes! Dogs and cats are cherished family at Mauji. Our outdoor garden courtyards and pet-friendly lounges welcome leashed pets. We have fresh water bowls and quiet corners for your fur babies."
    },
    {
      q: "What are the Wi-Fi speeds, and is power available?",
      a: "We provide dual redundant 300 Mbps symmetrical enterprise fiber lines with UPS backup. Every single desk and table features universal surge-protected power plugs so your laptop never runs out of juice."
    },
    {
      q: "Can I attend confidential Zoom calls or phone meetings?",
      a: "Yes. We have sound-dampened private phone booths and quiet courtyard corners specifically for voice and video calls, ensuring you don't disturb others or compromise privacy."
    },
    {
      q: "Do you offer GST tax invoices for freelancers and corporate expense claims?",
      a: "Yes. All hourly passes, coworking memberships, and studio bookings come with automatic GST invoices eligible for business input tax credit. Just provide your GSTIN at checkout or during online reservation."
    },
    {
      q: "Is parking available at both locations?",
      a: "Yes. In Pune (Bhosale Nagar / Sahakar Nagar), we have dedicated two-wheeler parking inside the property and ample tree-lined street parking for cars. In Nagpur (Laxmi Nagar), dedicated parking slots are available right outside."
    }
  ],

  // B2B & Corporate Team Packages
  corporatePackages: [
    {
      id: "team-day",
      name: "Startup Team Sprint Day",
      capacity: "Up to 10 builders",
      price: "₹6,999 / day",
      perks: [
        "Dedicated reserved cluster of 10 desks",
        "Unlimited barista coffee & artisan teas all day",
        "2 hours private Meeting Room / TV screen access",
        "300 Mbps dedicated Wi-Fi SSID",
        "Valid GST input credit invoice"
      ]
    },
    {
      id: "business-shower",
      name: "Mauji Business Shower / Launch",
      capacity: "25 - 60 attendees",
      price: "₹12,500 / 3 hours",
      perks: [
        "Exclusive courtyard stage or indoor gallery setup",
        "HD Projector, PA sound system & 2 cordless mics",
        "Welcome artisanal drink for every guest",
        "Event feature on Mauji WhatsApp (10k+ network)",
        "Dedicated on-ground hospitality host"
      ]
    },
    {
      id: "studio-podcast",
      name: "Commercial Studio Production",
      capacity: "Up to 8 crew members",
      price: "₹1,500 / hour",
      perks: [
        "Acoustically treated studio room",
        "Multi-mic podcast console & studio monitors",
        "Continuous softbox & ring lights with gels",
        "High-speed wired line for gigabit footage sync",
        "Coffee & refreshments for entire production crew"
      ]
    }
  ]
};

