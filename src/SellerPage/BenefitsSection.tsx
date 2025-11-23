import { motion } from "framer-motion";
import { benefitsData } from './data/pageContent';;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function WhySellWithUs() {
    return (
        <div>
            {/* Why Sell */}
            <section id="why" className="container mx-auto px-4 py-8 md:py-12">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
                    <div className="lg:w-1/3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4">Why sell with us</p>
                    <h2 className="text-3xl font-semibold mb-4 text-white">Build Your Legacy. Earn on Autopilot.</h2>
                    <p className="text-slate-400">
                        Stop trading time for money. Submit your templates once and let our focused, global marketplace handle the rest—marketing, curation, and a reliable passive income stream.
                    </p>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefitsData.map((benefit) => (
                        <motion.div
                        key={benefit.title}
                        className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
                        whileHover={{ y: -6, borderColor: '#34d399' }}
                        >
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-slate-400 text-sm">{benefit.copy}</p>
                        </motion.div>
                    ))}
                    </div>
                </div>
                </motion.div>
            </section>
      </div>
    )
}