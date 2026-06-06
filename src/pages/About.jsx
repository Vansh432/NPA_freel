import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Target, Eye, CheckCircle2, Users, Shield, Clock, Globe } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const team = [
  {
    name: 'Mr. Dubey',
    role: 'Senior Banking & Legal Advisor',
    exp: '20+ Years',
    domain: 'Banking & SARFAESI Recovery',
    icon: '👨‍⚖️',
    bio: 'Former senior banking professional with deep expertise in NPA recovery, SARFAESI proceedings, DRT litigation, and structured loan settlements. Has handled 2000+ NPA cases across PSU and private banks.',
    tags: ['SARFAESI', 'DRT', 'NPA Recovery', 'Bank Negotiation'],
  },
  {
    name: 'Mr. Mandol',
    role: 'Consultation & OTS Specialist',
    exp: '15+ Years',
    domain: 'Loan Settlement Advisory',
    icon: '🤝',
    bio: 'Specialises in OTS (One Time Settlement) negotiation, bank communication strategy, and borrower representation. Known for achieving below-market settlement amounts through expert negotiation.',
    tags: ['OTS Negotiation', 'NCLT/IBC', 'Restructuring', 'Borrower Advisory'],
  },
]

const milestones = [
  { year: '2006', title: 'Founded in Mumbai', desc: 'NPA Bazar established as a specialist NPA advisory firm, serving PSU bank borrowers.' },
  { year: '2010', title: 'Delhi Office Opened', desc: 'Expanded with a dedicated office in Delhi to serve North India clients and DRT cases.' },
  { year: '2016', title: 'IBC Advisory Added', desc: 'Added NCLT/IBC advisory services after the Insolvency & Bankruptcy Code was enacted.' },
  { year: '2020', title: 'PAN India — Remote Consultation', desc: 'Launched remote video consultation, now serving clients across all 28 states of India.' },
  { year: '2024', title: '5000+ Cases Resolved', desc: 'Crossed 5000 resolved cases with ₹500+ Cr in total settlements negotiated for clients.' },
]

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We give honest assessments — we tell you if your case is strong or weak before taking it up.' },
  { icon: Users, title: 'Client First', desc: 'Every strategy is built around your financial situation, not a one-size-fits-all template.' },
  { icon: Clock, title: 'Speed', desc: 'In NPA matters, every day counts. We act with urgency and deliver structured plans fast.' },
  { icon: Globe, title: 'Accessibility', desc: 'PAN India reach via remote consultation — no matter where you are, we can help.' },
]

const stats = [
  { val: '5000+', lbl: 'Cases Resolved' },
  { val: '₹500 Cr+', lbl: 'Settlements' },
  { val: '94%', lbl: 'Success Rate' },
  { val: '18+', lbl: 'Years Exp.' },
  { val: '22', lbl: 'States Covered' },
  { val: '2', lbl: 'Offices' },
]

export default function About() {
  return (
    <>
          <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle,var(--color-brand-orange),transparent)', top: '-25%', right: '-10%' }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(circle,var(--color-brand-green),transparent)', bottom: '-10%', left: '-5%' }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} />
 
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.span {...fade()}
            className="inline-flex items-center gap-2 bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
            About NPA BAZAAR
          </motion.span>
          <motion.h1 {...fade(0.1)} className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
            Trusted NPA Resolution<br /><span className="text-brand-orange">Since 2006</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            NPA BAZAAR is a professional advisory platform assisting individuals and businesses in stressed loan resolution, SARFAESI matters, DRT/NCLT support, and structured settlement guidance.
          </motion.p>

          {/* Stats ribbon */}
          <motion.div {...fade(0.3)}
            className="grid grid-cols-3 md:grid-cols-6 rounded-2xl overflow-hidden border border-white/10 divide-x divide-y md:divide-y-0 divide-white/10"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            {stats.map(s => (
              <div key={s.lbl} className="flex flex-col items-center py-5 px-3 gap-0.5">
                <span className="text-xl md:text-2xl font-extrabold text-brand-orange">{s.val}</span>
                <span className="text-xs text-white/50 uppercase tracking-wider text-center">{s.lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange-dark border border-brand-orange/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Who We Are</span>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">
                India's Specialist in<br />Stressed Loan Advisory
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5 text-base">
                Founded in 2006, NPA BAZAAR has grown into one of India's most trusted NPA resolution advisory firms. Our multidisciplinary team comprises former bankers, legal experts, and financial advisors with deep knowledge of India's banking recovery laws.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 text-base">
                We work alongside PSU banks, private lenders, NBFCs, and ARCs to help borrowers navigate the complex regulatory landscape — whether it is a SARFAESI notice, DRT case, OTS negotiation, or NCLT insolvency proceeding.
              </p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white font-bold px-7 py-3.5 rounded-xl hover:bg-navy-mid transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/20">
                Get Free Consultation <ArrowRight size={17} />
              </Link>
            </motion.div>
 
            {/* Stats grid */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div key={s.lbl}
                   initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                   whileHover={{ scale: 1.05, y: -3 }}
                   className="bg-navy rounded-2xl p-6 text-center shadow-lg shadow-navy/10">
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-orange mb-1 tracking-tight">{s.val}</div>
                  <div className="text-white/55 text-xs uppercase tracking-wider">{s.lbl}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 relative overflow-hidden bg-navy">
        {/* Background decoration */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <motion.div className="absolute w-[500px] h-[500px] rounded-full opacity-12 blur-[90px] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#d4a853,transparent)', top: '-20%', left: '-5%' }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity }} />
        <motion.div className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[80px] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#3b6fd4,transparent)', bottom: '-15%', right: '-5%' }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity, delay: 2 }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Our Purpose
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-white/55 text-lg max-w-lg mx-auto">
              Two guiding principles behind everything we do at NPA BAZAAR.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, rgba(230,95,0,0.12) 0%, rgba(255,255,255,0.04) 100%)', border: '1px solid rgba(230,95,0,0.25)' }}
            >
              {/* Top glow bar */}
              <div className="h-1 w-full bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange" />

              <div className="p-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20"
                  style={{ background: 'linear-gradient(135deg, var(--color-brand-orange), var(--color-brand-orange-light))' }}
                >
                  <Target size={30} className="text-white" />
                </motion.div>

                <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.15em] block mb-3">Our Mission</span>
                <h3 className="font-serif text-3xl text-white mb-5 leading-tight">
                  Accessible Financial Resolution for Every Borrower
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  To provide accessible, professional financial dispute guidance and structured resolution support to every stressed borrower in India — regardless of loan size, geography, or complexity.
                </p>

                {/* Mission points */}
                <div className="flex flex-col gap-3">
                  {[
                    'Expert guidance at every stage — SMA, NPA, SARFAESI, DRT, NCLT',
                    'Affordable advisory with transparent fee structure',
                    'PAN India reach through remote consultation',
                    'Protecting borrower rights under Indian banking laws',
                  ].map((pt, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-brand-green-light shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{pt}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, rgba(59,111,212,0.12) 0%, rgba(255,255,255,0.04) 100%)', border: '1px solid rgba(59,111,212,0.25)' }}
            >
              {/* Top glow bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500" />

              <div className="p-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20"
                  style={{ background: 'linear-gradient(135deg, #3b6fd4, #6394e8)' }}
                >
                  <Eye size={30} className="text-white" />
                </motion.div>

                <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.15em] block mb-3">Our Vision</span>
                <h3 className="font-serif text-3xl text-white mb-5 leading-tight">
                  A Transparent Banking Resolution Ecosystem
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  To create a transparent, efficient banking resolution ecosystem in India — where borrowers know their rights, banks recover efficiently, and financial disputes are resolved without unnecessary litigation.
                </p>

                {/* Vision points */}
                <div className="flex flex-col gap-3">
                  {[
                    'Borrowers empowered with knowledge of their legal rights',
                    'Faster resolution through negotiation over litigation',
                    'Reduced NPA burden on India\'s banking system',
                    'Standardised, ethical advisory practices across the industry',
                  ].map((pt, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{pt}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange-dark border border-brand-orange/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Core Values</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">How We Work</h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">The principles that guide every case we take on.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(10,22,40,0.12)' }}
                className="bg-white border border-slate-200 rounded-2xl p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-orange-light scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <motion.div whileHover={{ scale: 1.15, rotate: 8 }}
                  className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-brand-orange mb-5 shadow-md shadow-navy/15">
                  <v.icon size={22} />
                </motion.div>
                <h3 className="text-navy font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange-dark border border-brand-orange/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Our Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">18 Years of Excellence</h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">From a Mumbai startup to a PAN India advisory platform.</p>
          </motion.div>

          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                {/* Icon + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.15, 1], opacity: [0, 1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-brand-orange/30 z-10 group-hover:shadow-brand-orange/50 transition-shadow"
                  >
                    {m.year}
                  </motion.div>
                  {i < milestones.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                      className="w-0.5 flex-1 my-3 origin-top"
                      style={{ background: 'linear-gradient(to bottom, var(--color-brand-orange), #e2e8f0)', minHeight: '40px' }}
                    />
                  )}
                </div>
 
                {/* Content */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex-1 ${i < milestones.length - 1 ? 'pb-10' : ''} pt-3`}
                >
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 group-hover:border-brand-orange/40 group-hover:shadow-md transition-all duration-300">
                    <h3 className="text-navy font-bold text-lg mb-1.5">{m.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <motion.div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#d4a853,transparent)', top: '-10%', right: '-5%' }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Our Team</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Meet Our Experts</h2>
            <p className="text-white/55 text-lg max-w-md mx-auto">Experienced professionals who have handled thousands of NPA cases.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.3)' }}
                className="rounded-3xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                {/* Card top bar */}
                <div className="h-1 bg-gradient-to-r from-brand-orange to-brand-orange-light" />
 
                <div className="p-8">
                  {/* Avatar area */}
                  <div className="flex items-center gap-5 mb-6">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-brand-orange/15 border border-brand-orange/25 flex items-center justify-center text-4xl">
                      {t.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{t.name}</h3>
                      <p className="text-brand-orange text-sm font-semibold">{t.role}</p>
                      <p className="text-white/40 text-xs mt-0.5">{t.exp} · {t.domain}</p>
                    </div>
                  </div>
 
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{t.bio}</p>
 
                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange-dark border border-brand-orange/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Locations</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Visit Us</h2>
            <p className="text-slate-500 text-lg max-w-sm mx-auto">Two offices. Remote consultation available PAN India.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { city: 'Mumbai', addr: '502, Awadhoot CHSL, Jaiprakash Road, Azad Nagar, Andheri (W), Mumbai 400053', phone: '+91 97161 88884', flag: '🏙️', color: 'from-blue-900/60 to-navy' },
              { city: 'Delhi',  addr: '09, 3rd Floor, Regal Building, Connaught Place, New Delhi – 110001', phone: '+91 97161 88884', flag: '🏛️', color: 'from-indigo-900/60 to-navy' },
            ].map((o, i) => (
              <motion.div key={o.city}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(10,22,40,0.12)' }}
                className="rounded-3xl overflow-hidden border border-slate-200 group"
              >
                {/* Map-style header */}
                <div className={`bg-gradient-to-br ${o.color} h-28 flex items-end p-6`}>
                  <span className="text-5xl">{o.flag}</span>
                </div>
                <div className="p-7 bg-white">
                  <h3 className="text-navy font-bold text-xl mb-4">{o.city} Office</h3>
                  <div className="flex items-start gap-3 text-slate-500 text-sm mb-3">
                    <MapPin size={16} className="shrink-0 mt-0.5 text-brand-orange-dark" />
                    <span>{o.addr}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <Phone size={16} className="text-brand-orange-dark" />
                    <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="hover:text-navy transition-colors font-medium">{o.phone}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.3)} className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-mid transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/20">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
