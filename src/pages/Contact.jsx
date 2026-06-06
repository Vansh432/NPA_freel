import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone,  label: 'Call Us',       value: '+91 97161 88884',       href: 'tel:+919716188884' },
  { icon: Mail,   label: 'Email',          value: 'gnm@vkdlnpaadvisory.com',     href: 'mailto:gnm@vkdlnpaadvisory.com' },
  { icon: MapPin, label: 'Mumbai Office',  value: '502, Awadhoot CHSL, Jaiprakash Road, Azad Nagar, Andheri (W), Mumbai 400053', href: null },
  { icon: MapPin, label: 'Delhi Office',   value: '09, 3rd Floor, Regal Building, Connaught Place, New Delhi – 110001', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', caseType: '', npa: '', message: '', attachment: null })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')
  const [attachmentPreview, setAttachmentPreview] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFileChange = e => {
    const file = e.target.files?.[0] || null
    if (attachmentPreview) URL.revokeObjectURL(attachmentPreview)
    setForm(f => ({ ...f, attachment: file }))
    setAttachmentPreview(file ? URL.createObjectURL(file) : '')
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    if (attachmentPreview) {
      URL.revokeObjectURL(attachmentPreview)
      setAttachmentPreview('')
    }
  }

  const cls = name => `w-full bg-white border rounded-lg px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-300 outline-none transition-all duration-200 ${focused === name ? 'border-gold ring-2 ring-gold/15 shadow-sm' : 'border-slate-200'}`
  const fp = name => ({ name, onFocus: () => setFocused(name), onBlur: () => setFocused(''), className: cls(name) })

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{ background: 'radial-gradient(circle,#d4a853,transparent)', top: '-5%', right: '5%' }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white mb-5">
            Get Expert Help<br /><span className="text-gold">Today — It's Free</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/65 text-lg">
            Share your case details. Our experts will review and respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-3">We're Here to Help</h2>
                <p className="text-slate-500 text-sm leading-relaxed">Whether you have a SARFAESI notice, NPA account, OTS query, or cheque bounce case — reach out through any of these channels.</p>
              </div>

              {/* WhatsApp highlight */}
              <motion.a href="https://wa.me/919716188884" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-green-400 bg-green-50">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: '#25D366' }}>
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-green-800 font-bold text-sm">WhatsApp — Fastest Response</div>
                  <div className="text-green-600 text-xs">Usually replies within 30 minutes</div>
                </div>
              </motion.a>

              {contactInfo.map((c, i) => (
                <motion.div key={c.label}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ x: 4 }} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold-dark shrink-0">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="text-navy font-semibold text-sm hover:text-gold-dark transition-colors">{c.value}</a>
                      : <div className="text-navy font-semibold text-sm">{c.value}</div>
                    }
                  </div>
                </motion.div>
              ))}

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-amber-800 text-xs leading-relaxed">
                  <strong>Disclaimer:</strong> NPA Bazar provides advisory and consultation support only. Outcomes depend on facts and applicable laws. We are not a law firm.
                </p>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white border border-slate-200 rounded-2xl p-16 flex flex-col items-center text-center gap-4">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                      <CheckCircle size={56} className="text-emerald-500" />
                    </motion.div>
                    <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                      className="text-navy font-bold text-2xl">Case Received!</motion.h3>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                      className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      Our expert team will review your case and contact you within 24 hours. For urgent matters, WhatsApp us directly.
                    </motion.p>
                    <motion.a href="https://wa.me/919716188884" target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                      className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl mt-2 hover:bg-green-600 transition-colors">
                      Continue on WhatsApp
                    </motion.a>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit}
                    className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-5">
                    <h3 className="text-navy font-bold text-lg">Submit Your Case Details</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">Full Name *</label>
                        <input type="text" value={form.name} onChange={handleChange} placeholder="Rajesh Kumar" required {...fp('name')} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">Organisation / Business</label>
                        <input type="text" value={form.org} onChange={handleChange} placeholder="Company / Individual" {...fp('org')} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">Email Address *</label>
                        <input type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required {...fp('email')} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">Mobile Number *</label>
                        <input type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required {...fp('phone')} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">Case Type *</label>
                        <select value={form.caseType} onChange={handleChange} required {...fp('caseType')}>
                          <option value="">Select case type</option>
                          {['SMA-1','SMA-2','SARFAESI / 13(2) Notice','SARFAESI / 13(4) Action','Bank Locked Property','DRT Case','NCLT / IBC','OTS Negotiation','Cheque Bounce / 138','Other'].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600 tracking-wide">Approximate Loan Amount</label>
                        <select value={form.npa} onChange={handleChange} {...fp('npa')}>
                          <option value="">Select range</option>
                          {['Below ₹10 Lakh','₹10 Lakh – ₹1 Crore','₹1 Cr – ₹10 Cr','₹10 Cr – ₹100 Cr','Above ₹100 Crore'].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-600 tracking-wide">Brief Case Description *</label>
                      <textarea value={form.message} onChange={handleChange} rows={4} required
                        placeholder="Describe your situation — bank name, loan type, notice received, property status, what help you need..."
                        {...fp('message')} className={`${cls('message')} resize-y`} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-600 tracking-wide">Preferred Consultation Mode</label>
                      <div className="flex flex-wrap gap-3">
                        {['Phone Call', 'Video Call', 'WhatsApp', 'Office Visit'].map(mode => (
                          <label key={mode} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="mode" value={mode} className="accent-gold" />
                            <span className="text-sm text-slate-600">{mode}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-600 tracking-wide">Attach Image (optional)</label>
                      <input type="file" accept="image/*" onChange={handleFileChange} {...fp('attachment')} />
                      {attachmentPreview && (
                        <img src={attachmentPreview} alt="preview" className="mt-2 max-h-40 rounded-md object-cover" />
                      )}
                    </div>

                    <motion.button type="submit"
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 28px rgba(10,22,40,0.2)' }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2.5 bg-navy text-white font-bold text-base py-3.5 rounded-xl hover:bg-navy-mid transition-colors">
                      <Send size={16} /> Submit Case Details
                    </motion.button>

                    <p className="text-center text-xs text-slate-400">All information is strictly confidential. We never share your data.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
