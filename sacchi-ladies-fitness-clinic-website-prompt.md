## 1. Project Overview

Build a **single-page application (SPA)** — no backend, no database, no server — for a physiotherapy and women's fitness clinic. The site must be a **static, self-contained, deployable-anywhere** website (works on Netlify, Vercel, GitHub Pages, or even a plain hosting `public_html` folder). All "form submission" must resolve into a **pre-filled WhatsApp message** using the `wa.me` deep link — no server, no email service, no database required.

**Business:** Sacchi And Ladies Fitness Clinic
**Category:** Physiotherapy Clinic + Women's Fitness Center
**Tone:** Trustworthy, clinical-yet-warm, women-friendly, professional healthcare aesthetic — NOT a generic gym. Think "clinic meets wellness studio."

---

## 2. Business Information (use exactly as given)

- **Clinic Name:** Sacchi And Ladies Fitness Clinic
- **Address:** G1, G2, Maruti Complex, Opposite Kedareshvar Complex, Near Swaminarayan Mandir, Rajiv Nagar, Bardoli - 394601, Gujarat
- **Phone / WhatsApp:** +91 84879 41823
- **Timings:**
  - Monday – Saturday: 9:00 AM – 12:00 PM & 2:00 PM – 5:30 PM
  - Sunday: Closed

### Services (must be listed as distinct, individually selectable service cards)
1. **Orthopedic & General Physiotherapy** — Targeted treatment for musculoskeletal conditions, including joint pain, arthritis, back pain, and Prolapsed Intervertebral Disc (PIVD / slip disc).
2. **Injury & Post-Surgical Rehabilitation** — Specialized recovery plans to restore natural bodily movement, strength, and function after surgeries or sports injuries.
3. **Therapeutic Techniques** — Electrotherapy, mechanical traction, mobilization, stretching, and physical therapy exercises for pain relief and posture correction.
4. **Women's Fitness & Wellness** — Fitness and exercise conditioning programs tailored specifically for women, including weight management and functional physical training.

---

## 3. Tech Stack Requirements

- Pure **HTML5 + CSS3 + Vanilla JS** (preferred, zero dependencies, fastest load) **OR** a single-file **React SPA** (if the buyer wants a modern component structure) — build using **Vite** if React is chosen, so it compiles to static files.
- **No backend, no API calls, no database, no CMS.** All content is hardcoded in the SPA.
- **No form-submission libraries** (no Formspree/EmailJS) — the ONLY output of the booking form is a WhatsApp redirect.
- Must be a **single deployable bundle** (or single HTML file for the vanilla version) so it's trivial to re-sell/deploy to multiple clinic clients by just swapping content variables.
- All content (name, address, phone, services, timings) should live in **one central config object/JSON block at the top of the file** so it can be white-labeled quickly for future clients.
- Fully **offline-capable** static assets (no CDN dependency for critical rendering — icon fonts/images can use CDN but page must not break without them).

---

## 4. Responsive / UX Requirements

Must be **flawless** across:
- **Mobile** (360px–480px) — primary audience, most traffic will be phone users searching "physiotherapy near me"
- **Tablet** (768px–1024px)
- **Desktop** (1280px+)

### UX Principles
- **Mobile-first design.** Build mobile layout first, scale up.
- **Sticky/floating action buttons on mobile**: a persistent bottom bar or floating button with two quick actions — "📞 Call Now" and "💬 WhatsApp" — always visible while scrolling.
- **Sticky header on desktop/tablet** with logo, nav links (Home, About, Services, Timings, Book Appointment, Contact), and a WhatsApp CTA button.
- **Hamburger menu** on mobile with smooth slide-in drawer.
- Smooth scroll to sections via anchor links (`#services`, `#book`, `#contact`).
- **Fast load** — no heavy hero video, use optimized SVG illustrations or a compressed hero image relevant to physiotherapy/women's wellness.
- **Accessible**: proper `alt` text, semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), sufficient color contrast (WCAG AA), form labels tied to inputs, keyboard-navigable.
- **Micro-interactions**: subtle hover states, button press feedback, card lift-on-hover (desktop only, disabled on touch), scroll-reveal animations (fade/slide-up) using IntersectionObserver — keep animations lightweight and non-janky.
- **Loading performance**: inline critical CSS or keep CSS in a single small file; lazy-load below-the-fold images.

---

## 5. Design Direction (Visual Identity)

- **Color palette:** Since this is a *women's* clinic, avoid generic "hospital blue-white" only. Suggested palette:
  - Primary: Deep teal or muted rose/mauve (e.g., `#0F6E6E` teal or `#B76E79` rose-gold) — conveys calm + care
  - Secondary/Accent: Soft blush pink or warm coral for CTAs (`#E8927C` or similar)
  - Neutral base: Off-white / cream background (`#FAF7F5`), charcoal text (`#2B2B2B`)
  - Use a **soft gradient or organic blob shapes** in the hero — avoid sharp corporate clinical starkness; keep it warm and approachable.
- **Typography:**
  - Headings: a confident, modern serif or rounded sans (e.g., "Poppins", "Fraunces", or "DM Serif Display" for headings)
  - Body: clean sans-serif (e.g., "Inter", "Nunito Sans")
- **Iconography:** Use a consistent icon set (Lucide, Phosphor, or Heroicons) for services — e.g., bone/joint icon, recovery icon, electrotherapy/pulse icon, women's fitness icon.
- **Imagery:** Physiotherapy session photos, women exercising, therapeutic equipment (traction, electrotherapy) — use tasteful stock photography or elegant SVG illustrations if no real photos are provided. Avoid anything overly "gym-bro."
- **Overall feel:** Should look like a premium, trustworthy local healthcare brand — the kind of site a woman in her 30s–60s dealing with back pain or a sports injury would feel instantly comfortable booking through.

---

## 6. Page Structure / Sections (in order)

### A. Header / Navbar
- Logo/Clinic name (text-based logo is fine — e.g., "Sacchi & Ladies" in styled typography, tagline below: "Fitness & Physiotherapy Clinic")
- Nav: Home | About | Services | Timings | Book Appointment | Contact
- CTA button: "Book Now" (scrolls to form) + WhatsApp icon button

### B. Hero Section
- Strong headline (e.g., "Restoring Movement, Empowering Women's Wellness")
- Subheadline mentioning physiotherapy + women's fitness combined offering
- Two CTAs: **"Book an Appointment"** (scroll to form) and **"Chat on WhatsApp"** (opens WhatsApp directly)
- Trust badges row: e.g., "Certified Physiotherapists", "Women-Focused Care", "Modern Equipment" (icons + short labels)
- Hero visual: illustration/photo relevant to physiotherapy/women's fitness

### C. About Section
- Short paragraph about the clinic's mission — combining clinical physiotherapy expertise with women-centric fitness/wellness programs
- Optional stats row: e.g., "Years of Experience", "Patients Treated", "Recovery Success" (use placeholder numbers, clearly marked as editable)

### D. Services Section (`#services`)
- Grid of **4 service cards** (2x2 on tablet/desktop, stacked on mobile), each with:
  - Icon
  - Service title
  - Short description (from Section 2 above)
  - "Select this service" / "Book This" button → scrolls to booking form **and pre-selects this service in the dropdown**
- Each card should be visually distinct but consistent (equal height, consistent padding)

### E. Why Choose Us Section
- 3–4 short value props: e.g., "Personalized Treatment Plans", "Women-Only Comfortable Environment", "Advanced Therapeutic Equipment", "Convenient Bardoli Location"
- Icon + short text, laid out in a grid

### F. Timings Section (`#timings`)
- Clean visual timetable/card showing:
  - Mon–Sat: 9:00 AM – 12:00 PM | 2:00 PM – 5:30 PM
  - Sunday: Closed
- Highlight "Open Now / Closed Now" dynamically using JS based on the visitor's local time (nice-to-have touch that feels premium — compute against IST since clinic is in Gujarat)

### G. Booking Form Section (`#book`) — **CORE FEATURE**
See detailed spec in Section 7 below.

### H. Location / Contact Section (`#contact`)
- Full address displayed clearly, with a **"Get Directions" button** linking to Google Maps (`https://www.google.com/maps/search/?api=1&query=` + URL-encoded address)
- Embedded Google Map iframe (using the address, no API key needed for basic embed)
- Click-to-call phone number (`tel:+918487941823`)
- Click-to-chat WhatsApp button (`https://wa.me/918487941823`)
- Social links placeholder (Instagram/Facebook — optional, can be left as placeholder icons)

### I. Footer
- Clinic name + short tagline
- Quick links (repeat nav)
- Address + phone (repeated for SEO/accessibility)
- Timings summary
- Copyright line
- "Designed & Developed by [Your Brand]" — since you're reselling this, put your own credit line here, easily configurable

### J. Floating Mobile Action Bar
- Fixed to bottom of viewport on mobile only
- Two buttons: **Call Now** | **WhatsApp Us**
- Should not overlap content; add bottom padding to page to compensate

---

## 7. Booking Form — Detailed Spec (WhatsApp Integration)

This is the most important functional piece. Build it carefully.

### Form Fields
1. **Full Name** (text, required)
2. **Mobile Number** (tel, required, basic 10-digit validation for Indian numbers)
3. **Service Required** (dropdown/select, required) — options:
   - Orthopedic & General Physiotherapy
   - Injury & Post-Surgical Rehabilitation
   - Therapeutic Techniques (Electrotherapy / Traction / Mobilization)
   - Women's Fitness & Wellness
   - Not sure / General Consultation
4. **Preferred Date** (date picker, required, disable past dates, disable Sundays since clinic is closed)
5. **Preferred Time Slot** (dropdown, required) — options:
   - Morning (9:00 AM – 12:00 PM)
   - Afternoon/Evening (2:00 PM – 5:30 PM)
6. **Additional Notes / Symptoms** (textarea, optional) — placeholder: "Briefly describe your condition or concern (optional)"

### Validation
- Client-side only (no backend). Required field checks, phone number pattern check (`^[6-9]\d{9}$` for Indian mobile), date not empty and not Sunday.
- Inline error messages under each field (red text, no ugly browser default alerts).
- Submit button disabled/shows shake animation on invalid submit; enabled + clear state on valid input.

### On Submit — WhatsApp Message Construction
When the form is valid and submitted, JS should:
1. Build a **nicely formatted, emoji-enhanced WhatsApp message** using the form data via `encodeURIComponent()`.
2. Redirect the user (`window.open` in a new tab, or same-tab redirect) to:
   `https://wa.me/918487941823?text=<encoded_message>`

**Message template to construct (example):**
```
Hello Sacchi And Ladies Fitness Clinic! 👋

I would like to book an appointment.

🧑 Name: {{fullName}}
📞 Contact: {{mobileNumber}}
🩺 Service: {{selectedService}}
📅 Preferred Date: {{formattedDate}}
⏰ Preferred Time: {{selectedTimeSlot}}
📝 Notes: {{additionalNotes or "N/A"}}

Please confirm my appointment. Thank you!
```
- Date should be formatted human-readable (e.g., "Monday, 4 August 2026") not raw `yyyy-mm-dd`.
- If "Notes" is empty, show "N/A" instead of blank.
- After clicking submit, show a small on-page success toast ("Redirecting you to WhatsApp...") before/while opening the WhatsApp link, so the user isn't confused by the tab switch.
- The **service selected from the Services section cards** (see Section 6D) should auto-populate this dropdown when the user clicks "Book This" on a specific service card — use JS to set the select value and scroll to the form.

### Form UX Details
- Two-column layout on desktop/tablet (Name+Phone side by side, Date+Time side by side), single column stacked on mobile.
- Floating/animated labels or clean top-aligned labels — pick one consistent style, modern minimal input styling (rounded corners, soft border, focus-glow in brand accent color).
- Submit button: full-width on mobile, prominent, WhatsApp-green accent OR brand accent color with a WhatsApp icon inside it, label: **"Book via WhatsApp"**.
- No page reload — everything is JS-driven (`preventDefault()` on form submit).

---

## 8. SEO & Metadata (even for a no-backend SPA)

- Proper `<title>`: "Sacchi And Ladies Fitness Clinic | Physiotherapy & Women's Fitness in Bardoli"
- `<meta name="description">` summarizing services + location
- Open Graph tags (`og:title`, `og:description`, `og:image`) for WhatsApp/social link previews — **important** since users will be sharing this via WhatsApp
- Favicon
- `<html lang="en">`
- Local business **Schema.org JSON-LD** markup (`LocalBusiness` / `MedicalClinic` type) embedded with name, address, phone, geo, opening hours — boosts Google visibility for local search ("physiotherapist near Bardoli")

---

## 9. Nice-to-Have Enhancements (optional, add if scope allows)

- **Testimonials section** (placeholder patient reviews with name + short quote + star rating) — clearly marked as sample content to be replaced by the client.
- **FAQ accordion** (e.g., "Do I need a doctor's referral?", "What should I wear/bring?", "Is this clinic women-only?").
- **Before/After or "What to Expect" step-by-step process section** (Consultation → Assessment → Treatment Plan → Recovery).
- **Dark mode toggle** (low priority, skip unless requested).
- **Scroll-to-top button** on long scroll.
- **Simple entrance animations** using CSS `@keyframes` or a lightweight library (AOS) — keep total JS payload small.

---

## 10. Deliverable & Reusability Notes (since this will be resold)

- Keep **all editable business data** (name, address, phone, services array, timings, colors) in a single top-level config block/object so it can be swapped for a new clinic client in minutes.
- Comment the code clearly in sections matching this document's structure.
- Ensure the WhatsApp number and Maps address are the ONLY two things that need to change to fully re-target this template to a different local business.
- Provide the final build as a clean static export (`dist/` folder or single `index.html` + `styles.css` + `script.js`) ready for direct upload to any hosting.

---

## 11. Summary Instruction (paste this as the actual build prompt)

> Build a fully responsive, no-backend single-page website for "Sacchi And Ladies Fitness Clinic" (physiotherapy + women's fitness clinic in Bardoli, Gujarat) following the structure, design direction, content, and WhatsApp-integrated booking form exactly as specified in this document. Prioritize a polished, warm, trustworthy healthcare-meets-wellness visual identity, flawless mobile/tablet/desktop responsiveness, and a booking form that converts all submitted data into a perfectly formatted pre-filled WhatsApp message sent to +91 84879 41823 with no backend or third-party form service involved.

---

*End of prompt document.*
