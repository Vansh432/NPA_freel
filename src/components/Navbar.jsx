import { useState, useEffect } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-3' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center text-navy"
          >
            <TrendingUp size={20} />
          </motion.div>
          <span className="text-xl font-extrabold text-white tracking-tight">
            NPA<span className="text-gold">Resolve</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 ml-auto">
          {links.map((l, i) => (
            <motion.a key={l.label} href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -2 }}
              className="text-white/80 text-sm font-medium hover:text-gold transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <motion.a href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(212,168,83,0.35)' }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 ml-2 bg-gold text-navy font-bold text-sm px-5 py-2.5 rounded-lg shrink-0"
        >
          Free Consultation
        </motion.a>

        {/* Burger */}
        <button className="md:hidden ml-auto text-white" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <AnimatePresence mode="wait">
            <motion.span key={open ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-navy-light"
          >
            <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a key={l.label} href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-white/80 font-medium py-3 border-b border-white/8 hover:text-gold transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a href="#contact" onClick={() => setOpen(false)}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="mt-4 bg-gold text-navy font-bold text-base py-3.5 rounded-lg text-center"
              >
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
