import guy1 from '../../assets/guy1.jpg';
import girl1 from '../../assets/girl1.jpg';
import girl2 from '../../assets/girl2.jpg';

// --- HERO SECTION STATS ---
export const heroStats = [
  '1.5M+ Professional Video Producers Reached',
  'Top Exclusive Authors Earn $50k+/year',
  'Up to 75% Royalty Share for Exclusives',
];

// --- HERO SECTION VISUALS (Placeholder URLs) ---
export const heroVideos = [
  // These URLs are placeholders. In a real application, they would link to high-quality video templates.
  'https://video.wixstatic.com/video/b0bce6_d6f44653ffaa405dac32d41edcd03526/720p/mp4/file.mp4',
  'https://video.wixstatic.com/video/b0bce6_f17674d1a87d44a7b7676cb80ea865d8/720p/mp4/file.mp4',
  'https://video.wixstatic.com/video/b0bce6_990f350725d847b1aa72fb724b4c13a8/720p/mp4/file.mp4',
];

// --- BENEFITS SECTION DATA ---
export const benefitsData = [
  {
    title: 'Elite Creator Network',
    copy: 'Join a hand-selected community of top motion designers and template creators. Quality over quantity ensures better earnings.',
    icon: (
      <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m4 0h.01M7 16h10M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Premium Quality Seal',
    copy: 'Our rigorous review process maintains high standards. This trusted seal builds buyer confidence, leading to higher conversions for your work.',
    icon: (
      <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Growth Toolkits & Data',
    copy: 'Free access to market trend reports, sales data, and promotional opportunities to maximize your long-term passive revenue.',
    icon: (
      <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.866 0-7 2.239-7 5 0 1.657 1.343 3 3 3h8a3 3 0 003-3c0-2.761-3.134-5-7-5z" />
      </svg>
    ),
  },
  {
    title: 'Access Premium Buyers',
    copy: 'Instantly connect with professional video editors, agencies, and production companies actively searching for top-tier assets.',
    icon: (
      <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2a3 3 0 015.356-1.857M12 8a3 3 0 110-6 3 3 0 010 6zm7 3a3 3 0 110-6 3 3 0 010 6zm-14 0a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    ),
  },
];

// --- SELLER PROCESS STEPS ---
export const sellerSteps = [
  { 
    label: 'Apply', 
    detail: 'Share your portfolio and motion design expertise in a quick, 5-minute application.', 
    time: '5 minutes' 
  },
  { 
    label: 'Review', 
    detail: 'Expert curators check your templates for technical excellence, originality, and market readiness.', 
    time: 'Up to 14 days' 
  },
  { 
    label: 'Publish', 
    detail: 'Go live instantly! Access your seller dashboard, data tools, and begin generating passive income.', 
    time: 'Instantly after approval' 
  },
];

// --- EARNINGS BREAKDOWN CARDS (Refined) ---
export const earningsCards = [
  { label: 'Exclusive Author Royalty', value: '75%', description: 'The highest split in the industry for exclusive video templates and motion graphics assets. Be rewarded for loyalty.' },
  { label: 'Non-Exclusive Rate', value: '50%', description: 'Earn a flat, competitive royalty share for assets sold across multiple platforms with full flexibility.' },
  { label: 'Pro-User Access', value: 'Bonus Pool Share', description: 'Benefit from enterprise and agency client subscriptions searching for custom, high-value production assets.' },
];

// --- ACCEPTED CONTENT CATEGORIES (Refined) ---
export const contentCategories = [
  {
    name: 'Video Templates (After Effects & Premiere Pro)',
    description: 'Editable title sequences, openers, intros, and lower-thirds optimized for high performance in popular editing software.',
    bullets: ['4K & High-Res ready templates', 'Optimized MOGRT/Project file structures', 'Clear template documentation'],
    accent: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    name: '3D/CGI Assets & Footage',
    description: 'Complex computer-generated imagery (CGI) models, rendered footage, VFX elements, and pre-keyed greenscreen assets.',
    bullets: ['Source files included (e.g., Blender, C4D)', 'PBR Textures & Materials support', 'Commercial usage rights support'],
    accent: 'from-emerald-500/20 to-lime-500/10',
  },
  {
    name: 'VFX Overlays & Color Grading (LUTs)',
    description: 'Specialized visual effects like virtual anamorphic flares, cinematic grain, color grading presets (LUTs), and seamless transitions.',
    bullets: ['Native software format support', 'Easily stackable effects/overlays', 'Detailed installation instructions'],
    accent: 'from-purple-500/20 to-pink-500/10',
  },
  {
    name: 'Vertical & Social Video Kits',
    description: 'Templates and assets specifically designed for vertical video platforms like Instagram Reels, TikTok, and YouTube Shorts.',
    bullets: ['Aspect ratio optimized (9:16)', 'Trendy sound design & text styles', 'Fast rendering presets'],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
];

// --- TESTIMONIALS DATA (Rewritten for Motion Designers with Real Images) ---
export const testimonialsData = [
  {
    quote: "The curated environment means I'm only competing against the best. My earnings jumped 40% after focusing exclusively on Unstitched because buyers trust the 'Premium Quality Seal'.",
    author: 'Alexandr Volkov',
    role: 'Senior Motion Graphic Artist, Berlin',
    avatar: guy1, // Using imported image
  },
  {
    quote: "Selling on Unstitched simplified everything. The 75% exclusive royalty is unmatched, letting me step back from client work and focus entirely on building my passive template library.",
    author: 'Priya Sharma',
    role: 'VFX Template Developer, Mumbai',
    avatar: girl1, // Using imported image
  },
  {
    quote: "The free growth toolkits and trend data are game-changers. I can pivot my content creation instantly to match what the pro-users are actually searching for.",
    author: 'Chen Wei',
    role: 'Video Production Agency Owner, Shanghai',
    avatar: girl2, // Using imported image
  },
];