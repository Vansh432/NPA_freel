import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Phone, Star, ChevronRight } from 'lucide-react'
import { services, steps, whyUs, testimonials, blogs, faqs } from '../data/content'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

/* ─── Animated counter stat ─── */
function StatItem({ value, suffix, prefix, label, started }) {
  const count = useCounter(value, 2200, started)
  return (
    <div className="flex flex-col items-center py-6 px-4 gap-1">
      <span className="text-3xl font-extrabold text-gold tracking-tight">{prefix}{count.toLocaleString()}{suffix}</span>
      <span className="text-xs text-white/60 uppercase tracking-widest text-center">{label}</span>
    </div>
  )
}

const heroStats = [
  { value: 5000, suffix: '+',  prefix: '',  label: 'Cases Handled' },
  { value: 94,   suffix: '%',  prefix: '',  label: 'Success Rate' },
  { value: 500,  suffix: '+',  prefix: '₹', label: 'Cr Settlements' },
  { value: 18,   suffix: '+',  prefix: '',  label: 'Years Experience' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Home() {
  const [statsRef, statsInView] = useInView()

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen bg-navy flex flex-col items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
          <motion.div className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[100px]"
            style={{ background: 'radial-gradient(circle, #d4a853, transparent)', top: '-20%', right: '-10%' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.26, 0.18] }}
            transition={{ duration: 6, repeat: Infinity }} />
          <motion.div className="absolute w-[500px] h-[500px] rounded-full opacity-12 blur-[80px]"
            style={{ background: 'radial-gradient(circle, #3b6fd4, transparent)', bottom: '-10%', left: '-5%' }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} />
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full bg-gold/20"
              style={{ width: `${8 + i * 4}px`, height: `${8 + i * 4}px`, left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -(20 + i * 8), 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
              transition={{ duration: 3 + i * 0.8, repeat: Infinity, delay: i * 0.5 }} />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/30 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
            <ShieldCheck size={14} /> SARFAESI • DRT • NCLT • OTS • Cheque Bounce
          </motion.div>

          {['Stressed Loan &', 'NPA Resolution', 'Experts'].map((line, i) => (
            <motion.h1 key={i}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.16 }}
              className={`font-serif leading-[1.15] block ${i === 1 ? 'text-gold' : 'text-white'} text-5xl md:text-6xl lg:text-7xl`}>
              {line}
            </motion.h1>
          ))}

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
            Expert Guidance for SMA, SARFAESI, DRT, NCLT, OTS &amp; Banking Recovery Matters
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 flex-wrap">
            <motion.a href="https://wa.me/919716188884?text=Hello%2C%20I%20need%20a%20free%20consultation" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-gold text-navy font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-gold/25 w-full sm:w-auto justify-center">
              Get Free Consultation <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight size={18} /></motion.span>
            </motion.a>
            <motion.a href="tel:+919716188884" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-white/8 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 hover:bg-white/14 transition-all w-full sm:w-auto justify-center">
              <Phone size={16} /> Call Now
            </motion.a>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact"
                className="flex items-center gap-2 bg-white/8 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 hover:bg-white/14 transition-all w-full sm:w-auto justify-center">
                Upload Your Case
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero feature badges */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-3 mb-10">
            {[['🏛️','Banking & Legal Experts'],['🌏','PAN India Support'],['🔒','Confidential Handling'],['⚡','Fast Resolution']].map(([ico, txt]) => (
              <span key={txt} className="inline-flex items-center gap-2 bg-white/6 border border-white/12 text-white/75 text-xs px-4 py-2 rounded-full">
                {ico} {txt}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div ref={statsRef}
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/10 divide-x divide-y md:divide-y-0 divide-white/10"
            style={{ background: 'rgba(255,255,255,0.04)' }}>
            {heroStats.map(s => <StatItem key={s.label} {...s} started={statsInView} />)}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <motion.div className="w-1 h-2 bg-gold rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Our Services</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Comprehensive NPA Resolution</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">From SMA warning stage to full insolvency proceedings, we cover every stage of the stressed loan lifecycle.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => (
              <motion.div key={s.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,22,40,0.12)' }}
                className="bg-white border border-slate-200 rounded-2xl p-6 group relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                
                {/* Service Card Image Header */}
                <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur shadow-sm rounded-xl flex items-center justify-center text-xl z-10">
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-navy font-bold text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.short}</p>
                <Link to={`/services#${s.id}`} className="text-gold-dark text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.2)} className="text-center mt-10">
            <Link to="/services"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all duration-300">
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">How It Works</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">5 Simple Steps to Resolution</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">A transparent, structured process — from case registration to final settlement.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px border-t-2 border-dashed border-white/15 z-0" />}
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-navy font-extrabold text-lg mb-4 relative z-10 shadow-lg shadow-gold/25">
                  {step.num}
                </motion.div>
                <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.3)} className="text-center mt-12">
            <a href="https://wa.me/919716188884" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/25">
              Start Your Case Now <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Why Choose Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">The NPA Bazar Advantage</h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto">Thousands of borrowers have trusted us to navigate India's complex banking recovery landscape.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <motion.div key={w.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,22,40,0.1)' }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center group">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-4xl mb-4">{w.icon}</motion.div>
                <h3 className="text-navy font-bold text-base mb-2">{w.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Client Reviews</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Real Results, Real People</h2>
            <p className="text-slate-500 text-lg">Trusted by thousands of borrowers across India.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(10,22,40,0.12)' }}
                className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.span key={j} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}>
                      <Star size={14} className="fill-gold text-gold" />
                    </motion.span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic flex-1">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center text-gold font-bold text-xs shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.city} · {t.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Latest Articles</span>
              <h2 className="font-serif text-4xl md:text-5xl text-navy">From Our Blog</h2>
            </div>
            <Link to="/blog" className="text-gold-dark font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all shrink-0">View All Articles <ChevronRight size={16} /></Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((b, i) => (
              <motion.div key={b.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(10,22,40,0.1)' }}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden group">
                <div className="h-3 bg-gradient-to-r from-gold to-gold-light" />
                <div className="p-7">
                  <span className="text-xs font-bold text-gold-dark bg-gold/10 px-3 py-1 rounded-full">{b.category}</span>
                  <h3 className="text-navy font-bold text-base mt-3 mb-2 leading-snug group-hover:text-navy-mid transition-colors">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{b.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{b.date}</span>
                    <Link to={`/blog/${b.id}`} className="text-gold-dark text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read more <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ PREVIEW ─── */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">FAQ</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Common Questions</h2>
            <p className="text-white/60 text-lg">Quick answers to the most frequent NPA & recovery questions.</p>
          </motion.div>

          <div className="flex flex-col gap-4 mb-10">
            {faqs.slice(0, 5).map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-white font-semibold text-sm mb-2">Q: {f.q}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.2)} className="text-center">
            <Link to="/faq" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-gold-light transition-all">
              View All FAQs <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 bg-gradient-to-br from-gold via-gold-light to-gold relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.15) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 {...fade()} className="font-serif text-4xl md:text-5xl text-navy mb-4">
            Got a SARFAESI Notice or NPA Problem?
          </motion.h2>
          <motion.p {...fade(0.1)} className="text-navy/70 text-lg mb-8">
            Don't wait. Every day counts. Get a free expert consultation today.
          </motion.p>
          <motion.div {...fade(0.2)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="https://wa.me/919716188884" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg">
              WhatsApp Now <ArrowRight size={18} />
            </motion.a>
            <motion.a href="tel:+919716188884"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-white/30 text-navy font-bold px-8 py-4 rounded-xl text-base border-2 border-navy/20">
              <Phone size={18} /> Call Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
