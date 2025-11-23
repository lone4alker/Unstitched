import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion'
import { contentCategories } from './data/pageContent';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Application() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        portfolio: '',
        category: contentCategories[0].name,
        message: '',
    });
    const [sampleFile, setSampleFile] = useState<File | null>(null);
    const [formStatus, setFormStatus] = useState('');
    
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        setSampleFile(file);
    };
    
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
          setFormStatus('Please complete the required fields before submitting.');
          return;
        }
        setFormStatus('Thanks! Your application has been captured. We will reach out shortly.');
        setFormData({
          name: '',
          email: '',
          portfolio: '',
          category: contentCategories[0].name,
          message: '',
        });
        setSampleFile(null);
        event.currentTarget.reset();
    };
    
    return (
        <div>
            {/* Application form */}
            <section id="apply" className="container mx-auto px-4 py-8 md:py-16">
                <motion.div
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Apply today</p>
                    <h2 className="text-3xl font-semibold text-white">Tell us about your work.</h2>
                    <p className="text-slate-400 text-sm">
                        Share links or upload portfolio samples. Our review takes up to <strong>14 days</strong>. We’ll follow up via email with next steps and feedback.
                    </p>
                    <div className="text-sm text-slate-400">
                        Questions? Email <a href="mailto:authors@envato.com" className="text-emerald-300 underline">authors@envato.com</a>
                    </div>
                    </div>
                    <form className="lg:w-2/3 space-y-4" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="text-xs uppercase tracking-wide text-slate-400">Full name*</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-2 w-full rounded-xl border border-slate-700 bg-black/40 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                            placeholder="Ava Creator"
                        />
                        </div>
                        <div>
                        <label className="text-xs uppercase tracking-wide text-slate-400">Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-2 w-full rounded-xl border border-slate-700 bg-black/40 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                            placeholder="you@studio.com"
                        />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-wide text-slate-400">Portfolio URL</label>
                        <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-xl border border-slate-700 bg-black/40 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                        placeholder="https://"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="text-xs uppercase tracking-wide text-slate-400">Primary category*</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="mt-2 w-full rounded-xl border border-slate-700 bg-black/40 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                        >
                            {contentCategories.map((category) => (
                            <option key={category.name} value={category.name} className="text-black">
                                {category.name}
                            </option>
                            ))}
                        </select>
                        </div>
                        <div>
                        <label className="text-xs uppercase tracking-wide text-slate-400">Upload sample</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-2 block w-full text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-500/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-200 hover:file:bg-emerald-500/40"
                        />
                        {sampleFile && <p className="text-xs text-slate-500 mt-1">{sampleFile.name}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-wide text-slate-400">Tell us about your catalog*</label>
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2 h-32 w-full rounded-xl border border-slate-700 bg-black/40 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                        placeholder="Share themes, release cadence, inspiration, or any stats you already have."
                        />
                    </div>
                    {formStatus && <p className="text-sm text-emerald-300">{formStatus}</p>}
                    <div className="flex flex-wrap gap-4">
                        <Button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8">
                        Submit application
                        </Button>
                        <Button
                        type="button"
                        variant="outline"
                        className="border-black text-black hover:bg-black/10 px-8"
                        onClick={() => scrollToSection('hero')}
                        >
                        Back to top
                        </Button>
                    </div>
                    </form>
                </div>
                </motion.div>
            </section>
        </div>
    )
}