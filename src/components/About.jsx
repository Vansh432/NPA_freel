import { Award, ShieldCheck, Clock, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  { icon: Award,       title: 'RBI Registered',    desc: 'Fully compliant with RBI guidelines on NPA classification, provisioning, and resolution frameworks.' },
  { icon: ShieldCheck, title: 'Legal Expertise',    desc: 'In-house legal team with deep expertise in SARFAESI, IBC, DRT, and all relevant banking laws.' },
  { icon: Clock,       title: 'Swift Timelines',    desc: 'Average resolution time 40% faster than industry benchmarks through process efficiency.' },
  { icon: Globe,       title: 'Pan-India Presence', desc: 'Operations across 22 states with dedicated teams in all major financial centres.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Trusted by India's Leading Financial Institutions
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-5">
              Founded in 2006, NPAResolve has grown into India's most trusted NPA resolution firm.
              Our multidisciplinary team of 200+ professionals — comprising bankers, lawyers,
              chartered accountants, and turnaround specialists — delivers measurable recovery
              outcomes across every asset class.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              We work alongside PSU banks, private lenders, NBFCs, and ARCs to navigate the
              complex regulatory landscape and unlock maximum value from distressed portfolios.
            </p>
            <motion.a href="#contact"
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-2 text-gold font-semibold text-base transition-all"
            >
              Schedule a Consultation →
            </motion.a>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {pillars.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="flex gap-4 items-start p-4 rounded-xl transition-colors cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="w-11 h-11 bg-gold/12 border border-gold/20 rounded-xl flex items-center justify-center text-gold shrink-0"
                >
                  <p.icon size={20} />
                </motion.div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{p.title}</h4>
                  <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Animated stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-3 bg-gradient-to-br from-white/8 to-white/3 border border-white/10 rounded-2xl p-7 flex gap-8 backdrop-blur-sm"
            >
              {[['₹12,000 Cr+', 'Total NPA Resolved'], ['94%', 'Client Retention Rate']].map(([val, lbl]) => (
                <motion.div key={lbl}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col gap-1 cursor-default"
                >
                  <span className="text-3xl font-extrabold text-gold tracking-tight">{val}</span>
                  <span className="text-xs text-white/50 uppercase tracking-widest">{lbl}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
