import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import applyImg from '../assets/apply.png';
import {
  benefitsData,
  sellerSteps,
  earningsCards,
  contentCategories,
  testimonialsData,
  heroStats,
  heroVideos,
} from './data/pageContent';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function EnvatoAuthorContent() {
  const [selectedCategory, setSelectedCategory] = useState(contentCategories[0]);
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
    <div className="min-h-screen bg-black text-slate-100">
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

      {/* Why Sell */}
      <section id="why" className="container mx-auto px-4 py-16 md:py-20">
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

      {/* How to become */}
      <section id="how" className="container mx-auto px-4 py-16 md:py-20">
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-emerald-400/40 text-lg font-semibold text-emerald-300">
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

      {/* Earnings */}
      <section id="earnings" className="container mx-auto px-4 py-16 md:py-20">
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

      {/* Content categories */}
      <section id="content" className="container mx-auto px-4 py-16 md:py-20">
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
                  setFormData((prev) => ({ ...prev, category: category.name }));
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
          <motion.div
            key={selectedCategory.name}
            className={`rounded-3xl border border-slate-800 bg-gradient-to-br ${selectedCategory.accent} p-8`}
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

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-16 md:py-20">
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

      {/* Application form */}
      <section id="apply" className="container mx-auto px-4 py-16 md:py-24">
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

      {/* Final CTA */}
      <section className="container mx-auto px-4 pb-24">
        <motion.div
          className="rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-12 text-center text-black"
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
  );
}

