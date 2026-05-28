import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'NPAResolve helped us recover over ₹800 Cr from a severely stressed real estate portfolio in under 18 months. Their legal expertise and negotiation skills are unmatched.',
    name: 'Ramesh Iyer',
    role: 'Executive Director – Credit, State Bank of India',
    initials: 'RI',
    color: 'from-blue-900 to-navy-mid',
  },
  {
    quote: 'The team guided our NBFC through a complex IBC resolution process seamlessly. They maintained full regulatory compliance while achieving a recovery rate well above expectations.',
    name: 'Priya Sharma',
    role: 'Chief Risk Officer, Mahindra Finance',
    initials: 'PS',
    color: 'from-navy to-navy-mid',
  },
  {
    quote: "As an ARC acquiring a stressed portfolio, NPAResolve's due diligence and post-acquisition resolution support was invaluable. They consistently deliver results.",
    name: 'Anil Mehra',
    role: 'MD & CEO, Edelweiss ARC',
    initials: 'AM',
    color: 'from-emerald-900 to-navy-mid',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 text-lg">Trusted by India's top banks, NBFCs, and ARCs for over 18 years.</p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={item}
              whileHover={{ y: -8, boxShadow: '0 28px 56px rgba(10,22,40,0.14)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden group"
            >
              {/* Subtle bg shine on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Stars */}
              <div className="flex gap-1 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <motion.span key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 + j * 0.06 }}
                  >
                    <Star size={14} className="fill-gold text-gold" />
                  </motion.span>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="relative z-10 w-fit">
                <Quote className="text-gold opacity-60" size={28} />
              </motion.div>

              <p className="text-slate-600 text-sm leading-relaxed italic flex-1 relative z-10">{t.quote}</p>

              <div className="flex items-center gap-3.5 relative z-10">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-gold font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-navy font-bold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
