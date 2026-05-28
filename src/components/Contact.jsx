import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const contactInfo = [
  { icon: Phone,  label: 'Call Us',     value: '+91 80000 00000' },
  { icon: Mail,   label: 'Email',       value: 'resolution@nparesolve.in' },
  { icon: MapPin, label: 'Head Office', value: 'Nariman Point, Mumbai – 400 021' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', npa: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const inputCls = name => `w-full bg-white border rounded-lg px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-300 outline-none transition-all duration-200 ${
    focused === name ? 'border-gold ring-2 ring-gold/15 shadow-sm' : 'border-slate-200'
  }`
  const fieldProps = name => ({
    name,
    onFocus: () => setFocused(name),
    onBlur:  () => setFocused(''),
    className: inputCls(name),
  })

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2"
          >
            <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-5 leading-tight">
              Start Your NPA<br />Resolution Journey
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10">
              Our expert team provides a free initial assessment of your NPA portfolio.
              Fill out the form and we'll respond within 24 hours.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((c, i) => (
                <motion.div key={c.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold-dark shrink-0"
                  >
                    <c.icon size={18} />
                  </motion.div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-navy font-semibold text-sm">{c.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-14 flex flex-col items-center text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle size={56} className="text-emerald-500" />
                  </motion.div>
                  <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-navy font-bold text-2xl">Thank You!</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="text-slate-500 text-sm leading-relaxed max-w-sm">
                    Your inquiry has been received. Our team will contact you within 24 business hours.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-9 flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[['name','Full Name *','Rajesh Kumar','text'], ['org','Organisation *','Bank / NBFC / ARC','text']].map(([name, label, placeholder, type]) => (
                      <motion.div key={name} className="flex flex-col gap-1.5" whileFocus={{ scale: 1.01 }}>
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">{label}</label>
                        <input type={type} value={form[name]} onChange={handleChange} placeholder={placeholder} required {...fieldProps(name)} />
                      </motion.div>
                    ))}
                    {[['email','Email Address *','you@organisation.com','email'], ['phone','Phone Number *','+91 98765 43210','tel']].map(([name, label, placeholder, type]) => (
                      <motion.div key={name} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">{label}</label>
                        <input type={type} value={form[name]} onChange={handleChange} placeholder={placeholder} required {...fieldProps(name)} />
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 tracking-wide">Approximate NPA Size</label>
                    <select value={form.npa} {...fieldProps('npa')} onChange={handleChange}>
                      <option value="">Select range</option>
                      {['Below ₹1 Crore','₹1 Cr – ₹10 Cr','₹10 Cr – ₹100 Cr','₹100 Cr – ₹500 Cr','Above ₹500 Crore'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 tracking-wide">Brief Description</label>
                    <textarea value={form.message} onChange={handleChange} rows={4}
                      placeholder="Describe the nature of the NPA — asset type, sector, current status..."
                      {...fieldProps('message')} className={`${inputCls('message')} resize-y`} />
                  </div>

                  <motion.button type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 12px 28px rgba(10,22,40,0.2)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2.5 bg-navy text-white font-bold text-base py-3.5 rounded-xl transition-colors hover:bg-navy-mid"
                  >
                    <Send size={16} /> Submit Inquiry
                  </motion.button>

                  <p className="text-center text-xs text-slate-400 leading-relaxed">
                    All information shared is strictly confidential and protected under our NDA policy.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
