import { motion } from 'framer-motion';
import { testimonialsData } from './data/pageContent';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
    return (
        <div>
            {/* Testimonials */}
            <section id="testimonials" className="container mx-auto px-4 py-8 md:py-12">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-3">Creator stories</p>
                    <h2 className="text-3xl font-semibold text-white mb-4">Proof from authors like you.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonialsData.map((testimonial) => (
                    <motion.div
                        key={testimonial.author}
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
                        whileHover={{ y: -8, borderColor: '#34d399' }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                        <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" />
                        <div>
                            <p className="font-semibold text-white">{testimonial.author}</p>
                            <p className="text-xs uppercase tracking-wide text-slate-400">{testimonial.role}</p>
                        </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    </motion.div>
                    ))}
                </div>
                </motion.div>
            </section>
        </div>
    )
}