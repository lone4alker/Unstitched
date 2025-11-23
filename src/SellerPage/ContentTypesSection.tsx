import { motion } from "framer-motion";
import { contentCategories } from './data/pageContent';
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function ContentTypesSection() {
    const [selectedCategory, setSelectedCategory] = useState(contentCategories[0]);
    return (
        <div>
           {/* Content categories */}
            <section id="content" className="container mx-auto px-4 py-8 md:py-12">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <div className="text-center mb-12">
                        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-3">Content type selection</p>
                        <h2 className="text-3xl font-semibold text-white mb-4">Choose what you want to sell.</h2>
                        <p className="text-slate-400">Pick a category to see how we promote it, what buyers expect, and the tooling you get.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {contentCategories.map((category) => (
                        <button
                            key={category.name}
                            className={`rounded-full border px-5 py-2 text-sm transition hover:border-emerald-400 ${
                            selectedCategory.name === category.name ? 'border-emerald-400 text-white' : 'border-slate-700 text-slate-400'
                            }`}
                            onClick={() => {
                                setSelectedCategory(category);
                            }}  
                        >
                            {category.name}
                        </button>
                        ))}
                    </div>
                    <motion.div
                        key={selectedCategory.name}
                        className={`rounded-3xl border border-slate-800 bg-linear-to-br ${selectedCategory.accent} p-8`}
                        initial={{ opacity: 0.3, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-3">{selectedCategory.name}</h3>
                            <p className="text-slate-200 mb-5">{selectedCategory.description}</p>
                            <ul className="space-y-2 text-sm text-white">
                            {selectedCategory.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                {bullet}
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-black/40 border border-white/10 p-6 text-sm text-slate-200">
                            <p className="font-semibold mb-3 text-white">Dedicated Creator Resources</p>
                            <p>• Weekly Template Trend Reports</p>
                            <p>• Video Software Setup Guides & Tips</p>
                            <p>• Exclusive Discord Community for Motion Designers</p>
                            <p>• Asset Optimization & Licensing Support</p>
                        </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section> 
        </div>
    )
}

