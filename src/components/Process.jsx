import { ClipboardList, Search, Lightbulb, Gavel, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { icon: ClipboardList, num: '01', title: 'Initial Assessment', desc: 'Comprehensive review of the NPA account — loan documents, security interests, borrower financials, and litigation history.' },
  { icon: Search,        num: '02', title: 'Due Diligence',      desc: 'In-depth valuation of collateral, investigation of assets, and assessment of borrower repayment capacity and willingness.' },
  { icon: Lightbulb,    num: '03', title: 'Resolution Strategy', desc: 'Tailored resolution plan — OTS, restructuring, IBC filing, or asset sale — designed to maximize recovery within legal timelines.' },
  { icon: Gavel,        num: '04', title: 'Execution',           desc: 'Coordinated execution of the resolution strategy with legal teams, courts, borrowers, and regulatory bodies.' },
  { icon: CheckCircle2, num: '05', title: 'Recovery & Closure',  desc: 'Realization of proceeds, account closure, and post-resolution compliance reporting to regulatory authorities.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark border border-gold/25 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            How It Works
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Our Proven Resolution Process</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            A structured, transparent five-step framework that turns stressed assets into successful recoveries.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-2xl mx-auto flex flex-col">
          {steps.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex gap-7 group"
            >
              {/* Icon + line */}
              <div className="flex flex-col items-center shrink-0">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileInView={{ scale: [0.5, 1.1, 1], opacity: [0, 1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="w-13 h-13 bg-navy rounded-full flex items-center justify-center text-gold z-10 shadow-lg shadow-navy/20 group-hover:bg-navy-mid transition-colors duration-300"
                >
                  <step.icon size={22} />
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                    className="w-0.5 flex-1 my-2 bg-gradient-to-b from-navy-mid to-slate-200 min-h-[40px] origin-top"
                  />
                )}
              </div>

              {/* Content */}
              <div className={`${i < steps.length - 1 ? 'pb-10' : ''} flex-1`}>
                <span className="text-xs font-bold text-gold-dark uppercase tracking-widest block mb-1.5">{step.num}</span>
                <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-navy-mid transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
