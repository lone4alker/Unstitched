import { motion } from "framer-motion";
import { sellerSteps } from './data/pageContent';
import { Button } from "@/components/ui/button";
import applyImg from '../assets/apply.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function HowtoBecomeSeller() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
        {/* How to become */}
      <section id="how" className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            className="lg:w-1/2 flex justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src={applyImg}
              alt="How to become an Envato Author illustration"
              className="w-full max-w-xl drop-shadow-[0_45px_95px_rgba(16,185,129,0.25)] mix-blend-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            className="lg:w-1/2 lg:pl-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4">How to become a seller</p>
            <h2 className="text-3xl font-semibold text-white mb-6">Three simple steps to go live.</h2>
            <div className="space-y-6">
              {sellerSteps.map((step, index) => (
                <div key={step.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 text-lg font-semibold text-emerald-300">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-white">{step.label}</h3>
                      <span className="text-xs uppercase tracking-wide text-slate-400">{step.time}</span>
                    </div>
                    <p className="text-sm text-slate-400">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold" onClick={() => scrollToSection('apply')}>
                Start my application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    )
}