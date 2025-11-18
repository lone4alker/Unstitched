# Envato Seller Landing Page

Modern single–page experience for onboarding Envato sellers. The page is built with **React 18 + TypeScript + Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

## Features

- Hero with looping preview videos and CTA buttons that smooth-scroll to the application form.
- “Why Sell” section with icon cards highlighting platform benefits.
- Step-by-step “How to become a seller” visualization that references `apply.png`.
- Earnings breakdown cards outlining subscription, enterprise, and marketplace revenue shares.
- Interactive content category selector that updates details per discipline.
- Testimonials grid for social proof.
- Application form with validation, portfolio upload slot, and status messaging.
- Sticky, blurred navbar with responsive link list for quick navigation.
- Final CTA banner to drive conversions.

## Tech Stack

- React 18 + Vite
- TypeScript
- Tailwind CSS
- Framer Motion (section + media animations)

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
```

Visit `http://localhost:5173` during development.

## File Structure Highlights

- `src/App.tsx` – mounts the sticky `Navbar` plus the seller page.
- `src/SellerPage/Navbar.tsx` – sticky top navigation with smooth-scroll links.
- `src/SellerPage/Hero.tsx` – full landing page implementation (all sections + form).
- `src/assets/apply.png` – hero artwork used in the process section.
- `src/components/ui/button.tsx` – shared button primitive used across CTAs.

## Customisation Tips

- Update videos, colors, and copy inside `Hero.tsx`.
- Adjust navigation links or add extra sections via `Navbar.tsx`.
- Tailwind classes govern spacing/typography; tweak the theme in `tailwind.config.*` if present.
- Hook the application form to a backend or service by replacing the placeholder submit handler.

## Deployment

The build output is generated in `dist/`. Deploy the folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.). Make sure environment variables for future APIs are configured through Vite’s `import.meta.env` pattern.
