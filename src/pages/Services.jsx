import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { services } from '../data/content'

function ServiceCard({ s, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div id={s.id}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/8 transition-shadow duration-300"
    >
      {/* Card header */}
      <div className="h-1.5 bg-gradient-to-r from-gold to-gold-light" />
      <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">{s.icon}</div>
            <div className="flex-1">
              <h3 className="text-navy font-bold text-xl mb-1">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.short}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-slate-50 rounded-xl p-5 mb-5">
            <h4 className="text-navy font-bold text-sm mb-2">Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{s.overview}</p>
          </div>

          {/* Who needs */}
          <div className="mb-5">
            <h4 className="text-navy font-semibold text-sm mb-1">Who Needs This?</h4>
            <p className="text-slate-500 text-sm">{s.whoNeeds}</p>
          </div>

          {/* Process + Docs collapsible */}
          <button onClick={() => setOpen(o => !o)}
            className="w-full flex items-center justify-between text-gold-dark font-semibold text-sm py-3 border-t border-slate-100">
            View Process & Documents
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                  <div>
                    <h4 className="text-navy font-bold text-sm mb-3">Our Process</h4>
                    <ul className="flex flex-col gap-2">
                      {s.process.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-5 h-5 rounded-full bg-gold/15 text-gold-dark font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-sm mb-3">Required Documents</h4>
                    <ul className="flex flex-col gap-2">
                      {s.documents.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-gold mt-0.5">✓</span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* FAQs */}
                <div className="mt-5 border-t border-slate-100 pt-5">
                  <h4 className="text-navy font-bold text-sm mb-3">FAQs</h4>
                  {s.faqs.map((f, i) => (
                    <div key={i} className="mb-3">
                      <p className="text-navy font-semibold text-sm">Q: {f.q}</p>
                      <p className="text-slate-500 text-sm mt-1">{f.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <a href="https://wa.me/919716188884" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-navy-mid transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/20">
              Get Free Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:col-span-5 w-full h-64 sm:h-80 lg:h-full lg:min-h-[380px] relative rounded-2xl overflow-hidden shadow-md group shrink-0 lg:sticky lg:top-28">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[80px]"
          style={{ background: 'radial-gradient(circle,#d4a853,transparent)', top: '-10%', right: '0' }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Our Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white mb-5">
            Complete NPA &amp; Loan<br /><span className="text-gold">Recovery Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            From SMA-1 warning stage to NCLT insolvency proceedings — we cover every aspect of the stressed loan lifecycle with expert guidance.
          </motion.p>

          {/* Service nav pills */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mt-8">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="text-xs font-semibold bg-white/8 border border-white/15 text-white/80 px-3 py-1.5 rounded-full hover:bg-gold hover:text-navy hover:border-gold transition-all">
                {s.icon} {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {services.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-4xl text-white mb-4">Not Sure Which Service You Need?</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-8">
            Share your case details and our experts will recommend the right approach.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919716188884" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-light transition-all">
              WhatsApp for Free Advice <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/8 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/14 transition-all">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
