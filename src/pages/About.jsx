import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const team = [
  { name: 'Mr. Dubey', role: 'Senior Banking & Legal Advisor', exp: '20+ Years in Banking & SARFAESI Recovery', icon: '👨‍⚖️', bio: 'Former senior banking professional with deep expertise in NPA recovery, SARFAESI proceedings, DRT litigation, and structured loan settlements. Has handled 2000+ NPA cases across PSU and private banks.' },
  { name: 'Mr. Mandol', role: 'Consultation & OTS Specialist', exp: '15+ Years in Loan Settlement Advisory', icon: '🤝', bio: 'Specializes in OTS (One Time Settlement) negotiation, bank communication strategy, and borrower representation. Known for achieving below-market settlement amounts through expert negotiation.' },
]

const milestones = [
  { year: '2006', title: 'Founded', desc: 'NPA Bazar established in Mumbai as a specialist NPA advisory firm.' },
  { year: '2010', title: 'Delhi Office', desc: 'Expanded with a dedicated office in Delhi to serve North India clients.' },
  { year: '2016', title: 'IBC Launch', desc: 'Added NCLT/IBC advisory services after Insolvency & Bankruptcy Code was enacted.' },
  { year: '2020', title: 'PAN India', desc: 'Remote consultation launched — now serving clients across all 28 states.' },
  { year: '2024', title: '5000+ Cases', desc: 'Crossed 5000 cases resolved with ₹500+ Cr in settlements.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[80px]"
          style={{ background: 'radial-gradient(circle,#d4a853,transparent)', top: '-20%', right: '-10%' }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.span {...fade()} className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            About NPA Bazar
          </motion.span>
          <motion.h1 {...fade(0.1)} className="font-serif text-5xl md:text-6xl text-white mb-6">
            Trusted NPA Resolution<br /><span className="text-gold">Since 2006</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
            NPA Bazar is a professional advisory platform assisting individuals and businesses in stressed loan resolution, SARFAESI matters, DRT/NCLT support, and structured settlement guidance.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Who We Are</span>
              <h2 className="font-serif text-4xl text-navy mb-6 leading-tight">India's Specialist in Stressed Loan Advisory</h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                Founded in 2006, NPA Bazar has grown into one of India's most trusted NPA resolution advisory firms. Our multidisciplinary team comprises former bankers, legal experts, and financial advisors with deep knowledge of India's banking recovery laws.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We work alongside PSU banks, private lenders, NBFCs, and ARCs to help borrowers navigate the complex regulatory landscape — whether it is a SARFAESI notice, DRT case, OTS negotiation, or NCLT insolvency proceeding.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[['🎯','Mission','Provide accessible, professional financial dispute guidance and structured resolution support to every stressed borrower in India.'],['🌟','Vision','Create a transparent banking resolution ecosystem where borrowers know their rights and banks recover efficiently.']].map(([ico, title, desc]) => (
                  <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="text-2xl mb-2">{ico}</div>
                    <h4 className="text-navy font-bold text-sm mb-1">{title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4">
              {[['5000+','Cases Resolved'],['₹500 Cr+','Settlements'],['94%','Success Rate'],['18+','Years Exp.'],['PAN India','22 States'],['2 Offices','Mumbai & Delhi']].map(([val, lbl]) => (
                <motion.div key={lbl} whileHover={{ scale: 1.04 }}
                  className="bg-navy rounded-2xl p-6 text-center">
                  <div className="text-2xl font-extrabold text-gold mb-1">{val}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">{lbl}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Our Journey</span>
            <h2 className="font-serif text-4xl text-navy">18 Years of Excellence</h2>
          </motion.div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <motion.div whileInView={{ scale: [0.5, 1.1, 1] }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-navy font-extrabold text-sm shadow-lg shadow-gold/25 z-10">{m.year}</motion.div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 my-2 bg-gradient-to-b from-gold/50 to-slate-200 min-h-[32px]" />}
                </div>
                <div className={`${i < milestones.length - 1 ? 'pb-8' : ''} flex-1 pt-4`}>
                  <h3 className="text-navy font-bold text-base mb-1">{m.title}</h3>
                  <p className="text-slate-500 text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Management</span>
            <h2 className="font-serif text-4xl text-white">Meet Our Experts</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-5xl mb-4">{t.icon}</div>
                <h3 className="text-white font-bold text-xl mb-1">{t.name}</h3>
                <p className="text-gold text-sm font-semibold mb-1">{t.role}</p>
                <p className="text-white/40 text-xs mb-4">{t.exp}</p>
                <p className="text-white/60 text-sm leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Office Locations</span>
            <h2 className="font-serif text-4xl text-navy">We Are Here for You</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { city: 'Mumbai', addr: 'Nariman Point, Mumbai – 400 021, Maharashtra', phone: '+91 80000 00000', flag: '🏙️' },
              { city: 'Delhi', addr: 'Connaught Place, New Delhi – 110 001', phone: '+91 80000 00001', flag: '🏛️' },
            ].map((o, i) => (
              <motion.div key={o.city}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(10,22,40,0.1)' }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <div className="text-4xl mb-4">{o.flag}</div>
                <h3 className="text-navy font-bold text-xl mb-3">{o.city} Office</h3>
                <div className="flex items-start gap-3 text-slate-500 text-sm mb-2">
                  <MapPin size={16} className="shrink-0 mt-0.5 text-gold-dark" />{o.addr}
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Phone size={16} className="text-gold-dark" />{o.phone}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade(0.3)} className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-mid transition-all">
              Contact Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
