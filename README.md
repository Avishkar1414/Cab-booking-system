<<<<<<< HEAD
# Nova Cabs — Premium Cab Booking Website

A futuristic, neon-glass cab booking site built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. No login required — bookings are confirmed directly over WhatsApp.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## WhatsApp number

The booking flow, floating WhatsApp button, and contact info are all wired to **+91 80103 58049**. If you ever need to change it, update it in one place:

**`lib/whatsapp.ts`**
```ts
export const WHATSAPP_NUMBER = "918010358049";
```

Use the international format with no `+`, spaces, or dashes. The displayed phone numbers in `components/sections/Contact.tsx` and `components/layout/Footer.tsx` are separate text and would need updating too if the number changes.

## Project structure

```
app/                 Next.js App Router pages, layout, SEO files (sitemap, robots)
components/
  layout/            Navbar, Footer, MobileBottomNav
  sections/           Hero, BookingCard, FareCalculator, Fleet, WhyChooseUs,
                      Services, Reviews, FAQ, Contact
  ui/                 Reusable primitives: Button, GlassCard, SectionHeading,
                      FormFields, VehicleIcon, ParticleField, toasts, etc.
data/                 Vehicle pricing, services, features, reviews, FAQs
lib/                  Fare calculation, WhatsApp message builder, types, utils
hooks/                useToast, useScrollPosition, useTilt
```

## Editing fare pricing

All vehicle rates live in **`data/vehicles.ts`** as a single source of truth — both the live Fare Calculator and the Fleet cards read from it. Edit the `rates` object per vehicle to change pricing; nothing else needs to change.

## Editing the booking WhatsApp message

The message template lives in **`lib/whatsapp.ts`** in `buildWhatsAppMessage()`. Edit the `lines` array to change wording or add fields.

## Content you'll likely want to personalize

- `data/reviews.ts` — replace with real customer reviews
- `data/faqs.ts` — adjust policies (cancellation window, payment methods, etc.)
- `components/sections/Contact.tsx` — map embed currently points to a placeholder location; update the `src` query in the iframe to your city
- `app/layout.tsx` — `siteUrl` and Open Graph image path for SEO/social sharing
- `public/images/og-cover.jpg` — add a real 1200×630 image for social link previews (not included)

## Notes

- Vehicle illustrations are custom inline SVGs (`components/ui/VehicleIcon.tsx`) rather than photos — swap in real fleet photography by replacing the icon usage in `Fleet.tsx` and `FareCalculator.tsx` with `<Image>` components if you'd prefer.
- Reduced-motion preference is respected globally (`app/globals.css`).
- All forms validate required fields before opening WhatsApp.
=======
# Cab-booking-system
>>>>>>> efefbfd6031b0932f2cd5474e608bf99ac1e92bd
