# Unstitched Seller Application Page

Launch your creative business with a sleek, single-page experience for becoming a seller. Developed using **React 18 + TypeScript + Vite**, styled with **Tailwind CSS**, and featuring smooth transitions and animations powered by **Framer Motion**.


## ✨ Key Features

- **Creator-Focused Hero Experience**  
  High-impact headline, marketplace value stats, and dual CTAs designed specifically to convert professional video creators.

- **Trust-Driven Benefit Cards**  
  Unique selling points such as an Elite Creator Network, Premium Quality Seal, and access to trend and growth toolkits.

- **Ultra-Clear 3-Step Selling Path**  
  A visually guided “Apply → Review → Publish” process with realistic timing to set expectations for motion designers.

- **Transparent Revenue Model**  
  Side-by-side explanation of Exclusive 75% royalties, Non-Exclusive 50% rates, and enterprise bonus pool advantages.

- **Category-Smart Content Explorer**  
  Interactive content types (Video Templates, CGI, VFX, Social Kits) with tailored requirements and creator resources.

- **Real Testimonials from Motion Designers**  
  Authentic creator stories that highlight growth, community, and long-term passive income benefits.

- **Purpose-Built Application Form**  
  Includes portfolio input, category selection, catalog description, and file upload — crafted for template creators specifically.



## 🛠 Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS
- Framer Motion (section + media animations)

## 🚀 Getting Started

```bash
# Clone repo
git clone https://github.com/lone4alker/Unstitched.git
cd Unstitched

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

```

Visit `http://localhost:5173` during development.

## 📁 File Structure (Seller Page)

```bash
src/SellerPage/
│
├── Navbar.tsx                # Sticky top navigation with smooth-scroll links
├── Hero.tsx                  # Hero banner with heading, subtext, videos & main CTA
│
├── BenefitsSection.tsx       # "Why Sell With Us" – key benefits & value props
├── ProcessSection.tsx        # "How to Become a Seller" – 3-step application flow
├── EarningSection.tsx        # Revenue distribution explained visually
├── ContentTypesSection.tsx   # Select the type of content creators can sell
├── TestimonialsSection.tsx   # Seller success stories & social proof
│
├── CTASection.tsx            # Final call-to-action + apply button
└── ApplicationForm.tsx       # Application form (contact info, portfolio, uploads, etc.)
```


## 📦 Deployment

The build output is generated in `dist/`. Deploy the folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.). Make sure environment variables for future APIs are configured through Vite’s `import.meta.env` pattern.
