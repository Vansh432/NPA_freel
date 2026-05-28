import { ArrowRight, ShieldCheck, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { value: 12000, suffix: ' Cr+', prefix: '₹', label: 'NPA Resolved' },
  { value: 500,   suffix: '+',    prefix: '',  label: 'Clients Served' },
  { value: 94,    suffix: '%',    prefix: '',  label: 'Success Rate' },
  { value: 18,    suffix: '+',    prefix: '',  label: 'Years Experience' },
]

function StatItem({ stat, started }) {
  const count = useCounter(stat.value, 2200, started)
  return (
    <div className="flex flex-col items-center py-6 px-4 gap-1">
      <span className="text-3xl font-extrabold text-gold tracking-tight">
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </span>
      <span className="text-xs text-white/60 uppercase tracking-widest">{stat.label}</span>
    </div>
  )
}

const floating = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function Hero() {
  const [statsRef, statsInView] = useInView()

  return (
    <section className="relative min-h-screen bg-navy flex flex-col items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

        {/* Animated glows */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #d4a853, transparent)', top: '-20%', right: '-10%' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.25, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[80px]"
          style={{ background: 'radial-gradient(circle, #3b6fd4, transparent)', bottom: '-10%', left: '-5%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            className="absolute rounded-full bg-gold/20"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -(20 + i * 8), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/30 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-7"
        >
          <motion.span animate={{ rotate: [0, 15, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }}>
            <ShieldCheck size={14} />
          </motion.span>
          RBI & SARFAESI Compliant Resolution Framework
        </motion.div>

        {/* Headline — word by word */}
        <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.15]">
          {['Transform Your', 'Non-Performing Assets', 'Into Recoveries'].map((line, li) => (
            <motion.div key={li}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + li * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={li === 1 ? 'text-gold' : ''}
            >
              {line}
              {li < 2 && <br />}
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          India's leading NPA resolution specialists. We partner with banks, NBFCs, and
          ARCs to recover stressed assets through legally compliant, result-driven strategies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a href="#contact" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gold text-navy font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-gold/25 w-full sm:w-auto justify-center">
            Get Free Consultation
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>
          <motion.a href="tel:+918000000000" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white/8 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 hover:bg-white/14 hover:border-white/40 transition-colors w-full sm:w-auto justify-center">
            <Phone size={16} /> Talk to an Expert
          </motion.a>
        </motion.div>

        {/* Stats with counting animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/10 divide-x divide-white/10"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} started={statsInView} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-2 bg-gold rounded-full"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
