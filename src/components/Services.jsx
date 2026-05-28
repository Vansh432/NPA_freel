import { Briefcase, Scale, Building2, BarChart3, FileText, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const services = [
  { icon: Briefcase, title: 'Debt Restructuring', desc: 'Comprehensive restructuring solutions including OTS (One-Time Settlement), rescheduling, and conversion of debt to equity for financially stressed borrowers.' },
  { icon: Scale, title: 'Legal Recovery', desc: 'Expert legal proceedings under SARFAESI Act, DRT, IBC/NCLT, and RDDBFI Act to enforce security interests and maximize asset recovery.' },
  { icon: Building2, title: 'Asset Monetization', desc: 'Strategic disposal and auction of secured assets, properties, and collateral to optimize recovery value for lenders and creditors.' },
  { icon: BarChart3, title: 'ARC Portfolio Management', desc: 'End-to-end management of stressed asset portfolios acquired by Asset Reconstruction Companies, from due diligence to resolution.' },
  { icon: FileText, title: 'IBC / Insolvency Services', desc: 'Complete Insolvency & Bankruptcy Code advisory — from CIRP initiation and IRP/RP services to resolution planning and liquidation management.' },
  { icon: Users, title: 'MSME NPA Advisory', desc: 'Specialized resolution strategies for MSME borrowers including pre-NPA counselling, emergency credit assessment, and turnaround planning.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            Our Services
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4 leading-tight">
            Comprehensive NPA<br />Resolution Solutions
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            From early-stage stress to full insolvency proceedings, we cover every stage of the NPA lifecycle.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(s => (
            <motion.div key={s.title} variants={card}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(10,22,40,0.12)', borderColor: '#d4a853' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 group relative overflow-hidden cursor-pointer"
            >
              {/* Gradient reveal on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold-dark mb-5 relative z-10"
              >
                <s.icon size={26} />
              </motion.div>
              <h3 className="text-navy font-bold text-lg mb-3 relative z-10">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 relative z-10">{s.desc}</p>
              <motion.a href="#contact"
                className="text-gold-dark text-sm font-semibold inline-flex items-center gap-1.5 relative z-10"
                whileHover={{ x: 4 }}
              >
                Learn more <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
