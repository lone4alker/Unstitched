import { motion } from 'framer-motion';
import { earningsCards } from './data/pageContent';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function EarningsSection() {
    return (
        <div>
            {/* Earnings */}
            <section id="earnings" className="container mx-auto px-4 py-8 md:py-12">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-3">Earnings breakdown</p>
                    <h2 className="text-3xl font-semibold text-white mb-4">Transparent, scalable revenue share.</h2>
                    <p className="text-slate-400 max-w-3xl mx-auto">
                    Subscription revenue, enterprise bonuses, and marketplace sales add up to create a diversified earning stream. Your catalog works 24/7; we make sure it keeps paying you back.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {earningsCards.map((item) => (
                    <motion.div
                        key={item.label}
                        className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center"
                        whileHover={{ y: -5, borderColor: '#34d399' }}
                    >
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                        <p className="text-4xl font-bold text-emerald-400 my-4">{item.value}</p>
                        <p className="text-sm text-slate-400">{item.description}</p>
                    </motion.div>
                    ))}
                </div>
                </motion.div>
            </section>
        </div>
    )
}