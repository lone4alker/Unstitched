import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  heroStats,
  heroVideos,
} from './data/pageContent';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <motion.section
        id="hero"
        className="container mx-auto px-4 pt-32 pb-20 md:pt-36 md:pb-24"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl bg-linear-to-br from-slate-900 via-black to-emerald-950 p-10 shadow-[0_20px_120px_rgba(0,0,0,0.45)]">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Become an Unstitched Seller</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Launch your creative business on the world's leading digital marketplace.
            </h1>
            <p className="text-lg text-slate-300">
              Submit once, earn forever. Tap into curated demand, hands-on support, and a revenue model built for long-term growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-6"
                onClick={() => scrollToSection('apply')}
              >
                Apply now
              </Button>
              <Button
                variant="outline"
                className="bg-emerald-600 hover:bg-emerald-400 text-black font-semibold px-8 py-6"
                onClick={() => scrollToSection('content')}
              >
                Explore categories
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              {heroStats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="flex w-full max-w-3xl gap-4 h-56 md:h-72">
              {heroVideos.map((src, index) => (
                <motion.div
                  key={src}
                  className="group flex-1 overflow-hidden rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                >
                  <video
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

