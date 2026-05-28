import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { faqs } from '../data/content'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border border-slate-200 rounded-xl overflow-hidden bg-white"
    >
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 transition-colors">
        <span className="text-navy font-semibold text-sm leading-snug">{faq.q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-gold-dark">
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="px-6 pb-6 pt-0 border-t border-slate-100">
              <p className="text-slate-600 text-sm leading-relaxed mt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const cibil = [
  { event: 'SMA Stage', impact: 'Minor', color: 'bg-yellow-100 text-yellow-800' },
  { event: 'NPA Declaration', impact: 'Severe', color: 'bg-red-100 text-red-800' },
  { event: 'OTS Settlement', impact: 'Negative remark', color: 'bg-orange-100 text-orange-800' },
  { event: 'Cheque Bounce', impact: 'High negative', color: 'bg-red-100 text-red-800' },
  { event: 'DRT Case', impact: 'Serious', color: 'bg-red-200 text-red-900' },
  { event: 'Wilful Default', impact: 'Extreme', color: 'bg-red-300 text-red-900' },
]

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{ background: 'radial-gradient(circle,#d4a853,transparent)', top: '-10%', right: '5%' }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            FAQ
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white mb-5">
            Frequently Asked<br /><span className="text-gold">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/65 text-lg">
            Everything you need to know about NPA, SARFAESI, OTS, DRT, and banking recovery.
          </motion.p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => <FAQItem key={i} faq={f} index={i} />)}
          </div>
        </div>
      </section>

      {/* CIBIL impact table */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="font-serif text-3xl text-navy mb-3">CIBIL Impact Summary</h2>
            <p className="text-slate-500">How different banking events affect your credit score.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 font-semibold">Event</th>
                  <th className="text-left px-6 py-4 font-semibold">CIBIL Impact</th>
                </tr>
              </thead>
              <tbody>
                {cibil.map((c, i) => (
                  <tr key={c.event} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 text-slate-700 font-medium">{c.event}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.color}`}>{c.impact}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-4xl text-white mb-4">Still Have Questions?</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-8">Our experts are available for a free initial consultation. Ask us anything about your specific case.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-light transition-all">
              Ask on WhatsApp <ArrowRight size={18} />
            </a>
            <a href="tel:+918000000000"
              className="inline-flex items-center justify-center gap-2 bg-white/8 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/14 transition-all">
              Call Our Experts
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
