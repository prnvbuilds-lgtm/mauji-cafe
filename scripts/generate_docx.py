import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

doc = docx.Document()

# Set standard margins
for section in doc.sections:
    section.top_margin = Inches(0.8)
    section.bottom_margin = Inches(0.8)
    section.left_margin = Inches(0.9)
    section.right_margin = Inches(0.9)

# Colors
PRIMARY = RGBColor(36, 36, 36)      # Deep Charcoal
ACCENT = RGBColor(217, 119, 6)      # Warm Amber / Gold
SECONDARY = RGBColor(85, 85, 85)   # Muted Grey

# Title
title_p = doc.add_paragraph()
title_run = title_p.add_run('MAUJI TIME CAFE & SPACES')
title_run.font.size = Pt(24)
title_run.font.bold = True
title_run.font.color.rgb = PRIMARY
title_p.paragraph_format.space_after = Pt(2)

sub_p = doc.add_paragraph()
sub_run = sub_p.add_run('Strategic Website Redesign, Tech Stack Recommendation, Competitor Blueprint & AI Automation Proposal')
sub_run.font.size = Pt(12)
sub_run.font.color.rgb = ACCENT
sub_p.paragraph_format.space_after = Pt(12)

# Meta info box
meta_table = doc.add_table(rows=1, cols=1)
meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
cell = meta_table.cell(0, 0)
tcPr = cell._tc.get_or_add_tcPr()
shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="FDFBF7"/>')
tcPr.append(shd)
cell_p = cell.paragraphs[0]
meta_run = cell_p.add_run('PREPARED FOR: Team Mauji (Pune & Nagpur) | Founders & Leadership\nPREPARED BY: Pranav P — Freelance Website & AI Automation Consultant\nCONTACT: +91 9373240827 | DATE: September 2026 | VERSION: 2.0 (Executive Redesign Edition)')
meta_run.font.size = Pt(9.5)
meta_run.font.color.rgb = SECONDARY
doc.add_paragraph().paragraph_format.space_after = Pt(8)

def add_heading(text, level=1):
    h = doc.add_heading(level=level)
    r = h.add_run(text)
    r.font.color.rgb = PRIMARY if level==1 else ACCENT
    h.paragraph_format.space_before = Pt(14)
    h.paragraph_format.space_after = Pt(6)
    return h

# 1. Executive Summary
add_heading('1. Executive Summary & The Mauji Differentiator', 1)
p = doc.add_paragraph()
p.add_run('Mauji is not a regular coffee shop. It is India’s first and largest Time Cafe (anti-cafe) and creative coworking sanctuary. In an industry dominated by rush-hour coffee dispensaries and sterile corporate desks, Mauji pioneers the concept of ')
r = p.add_run('paying for the luxury of time, slow living, and uninhibited creative expression.')
r.bold = True
p.add_run(' With unlimited craft brews, soundproof creator studios, maker spaces, and curated cultural gatherings across Pune and Nagpur, Mauji offers a multi-faceted value proposition that generic cafe websites cannot support.')

p2 = doc.add_paragraph()
p2.add_run('Currently, Mauji’s existing Wix website suffers from high latency, rigid layout limitations, and disconnected booking dashboards. To scale revenue across its 3 core pillars—')
p2.add_run('Time Cafe Patrons, Coworking Members, and Studio/Event Rentals')
p2.add_run('—Mauji requires an ultra-modern digital flagship that educates first-time visitors in under 10 seconds, delivers an interactive time rate calculator, provides an instant 24/7 AI Concierge, and converts footfall seamlessly into recurring brand advocates.')

# 2. Competitor Landscape & Teardown
add_heading('2. Competitor Benchmarking & Why Mauji Wins', 1)
p = doc.add_paragraph('To design a market-defining solution, we evaluated prominent players across the beverage and workspace sectors:')

# Table of Competitors
comp_table = doc.add_table(rows=4, cols=4)
comp_table.alignment = WD_TABLE_ALIGNMENT.CENTER
headers = ['Brand', 'Tech Stack & Model', 'What They Do Well', 'The Critical Flaw & Mauji Advantage']
hdr_row = comp_table.rows[0]
for idx, text in enumerate(headers):
    c = hdr_row.cells[idx]
    tcPr = c._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="242424"/>')
    tcPr.append(shd)
    cp = c.paragraphs[0]
    r = cp.add_run(text)
    r.font.bold = True
    r.font.size = Pt(9.5)
    r.font.color.rgb = RGBColor(255, 255, 255)

comp_data = [
    ('Kiosk Kaffee\n(kiosk-kaffee.com)', 'WordPress + Elementor\n(High-volume grab & go)', 'Vibrant franchise landing page, simple coffee menu showcases.', 'Built solely for quick beverage sales. Zero time-spent concept, no desk booking, slow mobile load (~4.2s), heavy plugin dependencies. Mauji is an immersive destination, not a takeaway kiosk.'),
    ('Third Wave Coffee / Blue Tokai', 'Shopify Plus / Next.js\n(Artisanal specialty chain)', 'Polished D2C bean commerce, elegant food imagery, mobile loyalty app.', 'Expensive cup pricing (₹250-₹380/cup). Sitting for a 3-hour work session costs ₹600+ with awkward waiter pressure. Mauji offers unlimited brews + high-speed Wi-Fi @ just ₹210/hr with zero guilt.'),
    ('WeWork / GoFloaters / MyHQ', 'Custom React & Mobile\n(Flexible workspace broker)', 'Clear hourly and monthly desk booking engines, search filters.', 'Cold, sterile corporate cubicle feel. Sub-par instant machine coffee. No soul, no creator studios, no pottery workshops. Mauji blends cafe warmth with creative maker infrastructure.')
]

for row_idx, data in enumerate(comp_data, start=1):
    row = comp_table.rows[row_idx]
    bg = "FDFBF7" if row_idx % 2 == 1 else "FFFFFF"
    for col_idx, text in enumerate(data):
        c = row.cells[col_idx]
        tcPr = c._tc.get_or_add_tcPr()
        shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{bg}"/>')
        tcPr.append(shd)
        cp = c.paragraphs[0]
        r = cp.add_run(text)
        r.font.size = Pt(8.5)

# 3. Tech Stack Evaluation
add_heading('3. Tech Stack Recommendation: WordPress vs. React vs. Flutter', 1)
doc.add_paragraph('Selecting the optimal architecture determines website loading speed, search engine rankings (SEO), ease of adding custom calculators/dashboards, and long-term maintenance costs.')

tech_table = doc.add_table(rows=4, cols=5)
tech_table.alignment = WD_TABLE_ALIGNMENT.CENTER
t_headers = ['Architecture', 'Speed & Performance', 'Custom Interactivity', 'Security & Maintenance', 'Strategic Verdict']
hdr_row2 = tech_table.rows[0]
for idx, text in enumerate(t_headers):
    c = hdr_row2.cells[idx]
    tcPr = c._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="242424"/>')
    tcPr.append(shd)
    cp = c.paragraphs[0]
    r = cp.add_run(text)
    r.font.bold = True
    r.font.size = Pt(9)
    r.font.color.rgb = RGBColor(255, 255, 255)

tech_data = [
    ('WordPress + Elementor\n(Kiosk Kaffee style)', 'Slow (Lighthouse 40-55)\nHeavy CSS/JS bloat', 'Limited. Requires complex custom PHP plugins for rate calculation.', 'High maintenance. Plugin vulnerabilities, database crashes, security patches.', 'NOT RECOMMENDED for Mauji. Turns sluggish as custom booking logic is added.'),
    ('Custom Headless React (Vite / Next.js) + Tailwind', 'Ultra-Fast (Lighthouse 95-100)\nSub-second load times', 'Unlimited. Native reactive sliders, live AI chat widgets, QR pass flows.', 'Extremely Low. No database attack surface, free CDN hosting, high reliability.', 'RECOMMENDED CHOICE (Standard of modern premium hospitality brands).'),
    ('Flutter Web', 'Poor web startup time\n(3-5MB WASM bundle)', 'High interactivity, but poor text selection and clumsy browser feel.', 'Low server maintenance, but heavy client runtime.', 'NOT RECOMMENDED for Web. Poor SEO indexation; better reserved for standalone mobile app.')
]

for row_idx, data in enumerate(tech_data, start=1):
    row = tech_table.rows[row_idx]
    bg = "FDFBF7" if row_idx % 2 == 1 else "FFFFFF"
    for col_idx, text in enumerate(data):
        c = row.cells[col_idx]
        tcPr = c._tc.get_or_add_tcPr()
        shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{bg}"/>')
        tcPr.append(shd)
        cp = c.paragraphs[0]
        r = cp.add_run(text)
        r.font.size = Pt(8.5)
        if col_idx == 4 and 'RECOMMENDED CHOICE' in text:
            r.font.bold = True
            r.font.color.rgb = RGBColor(16, 185, 129)

# 4. Core Transformation Pillars
add_heading('4. Core Features of the Redesigned Mauji Platform', 1)
features = [
    ('1. City Context Switcher (Pune / Nagpur)', 'Dynamic one-click toggle instantly personalizes addresses, upcoming city-specific events, studio facilities, and local contact numbers without disjointed sub-domains.'),
    ('2. Live Interactive Time Cafe Bill & ROI Calculator', 'Enables guests to slide hours spent (e.g. 1 hr to full day) and see their total price, showing how many coffees they get for free and how much money they save compared to traditional coffeehouse chains.'),
    ('3. 24/7 AI Mauji Concierge Assistant', 'An intelligent on-site assistant answering common customer queries instantly—hours, BYO food policies, studio gear specs, membership rates, and parking details—capturing warm leads automatically.'),
    ('4. The 8 Mauji Elements Experience Matrix', 'Rich, interactive storytelling showcasing Time Cafe, Coworking, Creator Studio, Event Spaces, Art Store, Curated Library, Maker Workshop, and The Kitchen with filterable categories.'),
    ('5. Seamless Event RSVPs & Studio Inquiries', 'Direct digital reservation flow for signature Mauji events (Swifties Nights, Business Showers, Pottery masterclasses) linked to automated WhatsApp confirmation hooks.'),
    ('6. Automated Post-Visit Review & Retention Engine', 'Automated post-checkout follow-up sequences encouraging visitors to leave 5-star Google Reviews and join the VIP Slow-Living Club broadcast list.')
]
for title, desc in features:
    p = doc.add_paragraph()
    r1 = p.add_run(f'{title}: ')
    r1.bold = True
    r1.font.color.rgb = PRIMARY
    r2 = p.add_run(desc)
    p.paragraph_format.space_after = Pt(4)

# 5. Pricing Schedule & Package Options
add_heading('5. Investment & Transparent Pricing Schedule', 1)
doc.add_paragraph('We offer modular, transparent pricing tailored to Mauji’s phased digital roadmap:')

price_table = doc.add_table(rows=4, cols=4)
price_table.alignment = WD_TABLE_ALIGNMENT.CENTER
p_headers = ['Tier / Package', 'Investment (INR)', 'Ideal For', 'Included Deliverables']
hdr_row3 = price_table.rows[0]
for idx, text in enumerate(p_headers):
    c = hdr_row3.cells[idx]
    tcPr = c._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="242424"/>')
    tcPr.append(shd)
    cp = c.paragraphs[0]
    r = cp.add_run(text)
    r.font.bold = True
    r.font.size = Pt(9)
    r.font.color.rgb = RGBColor(255, 255, 255)

pricing_data = [
    ('Tier 1: AI Automation & Lead Concierge', '₹12,000 – ₹15,000\n(One-time setup)', 'Immediate query handling on existing site', 'Custom trained AI Concierge widget, FAQ automated response system, lead capture webhook to WhatsApp/Email, automated post-checkout Google Review generation flow.'),
    ('Tier 2: Complete Website Redesign (Recommended)', '₹35,000 – ₹42,000\n(Turnkey launch)', 'Complete modern brand upgrade & conversion', 'High-performance React/Vite web application, 8 Elements interactive gallery, Live Time Bill Calculator, City Switcher (Pune/Nagpur), Events feed & booking forms, SEO optimization, mobile-first responsiveness.'),
    ('Tier 3: Enterprise Experiential Ecosystem', '₹52,000 – ₹65,000\n(Full Platform)', 'End-to-end digital dominance', 'Everything in Tier 1 & 2 + integrated dashboard sync, member portal gateway, automated SMS/WhatsApp notifications, dynamic event ticketing integration, and 6 months dedicated maintenance.')
]

for row_idx, data in enumerate(pricing_data, start=1):
    row = price_table.rows[row_idx]
    bg = "FDFBF7" if row_idx % 2 == 1 else "FFFFFF"
    for col_idx, text in enumerate(data):
        c = row.cells[col_idx]
        tcPr = c._tc.get_or_add_tcPr()
        shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{bg}"/>')
        tcPr.append(shd)
        cp = c.paragraphs[0]
        r = cp.add_run(text)
        r.font.size = Pt(8.5)
        if col_idx == 1:
            r.font.bold = True
            r.font.color.rgb = ACCENT

# 6. Roadmap & Next Steps
add_heading('6. 2-Day Working Sample & Next Steps', 1)
p = doc.add_paragraph()
p.add_run('To give Team Mauji complete peace of mind, we have built a ')
r = p.add_run('fully interactive, live working prototype')
r.bold = True
p.add_run(' showcasing the exact proposed redesign, live Time Calculator, AI Concierge, and Pune/Nagpur switcher.\n\nNext Action: Let’s schedule a 15-minute walkthrough call this week to review the live interactive demo and select the tier that best accelerates Mauji’s expansion.')

# Save document
doc.save('Mauji_Website_AI_Automation_Plan.docx')
print('SUCCESS_DOCX_GENERATED')
