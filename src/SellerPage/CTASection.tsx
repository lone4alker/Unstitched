import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function CTA() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* Final CTA */}
            <section className="container mx-auto px-4 pb-12">
                <motion.div
                className="rounded-3xl bg-linear-to-r from-emerald-500 to-cyan-500 px-8 py-12 text-center text-black"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl font-semibold mb-3">Ready to introduce your work to millions?</h2>
                    <p className="text-black/70 mb-6">Apply now and launch a global storefront backed by Envato’s reach, data, and marketing engine.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="bg-black text-white hover:bg-slate-900 px-8" onClick={() => scrollToSection('apply')}>
                            Apply now
                        </Button>
                        <Button variant="outline" className="border-black text-black hover:bg-black/10 px-8" onClick={() => scrollToSection('why')}>
                            Learn more
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}