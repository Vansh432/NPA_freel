import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Scale } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about' },
  { label: 'Services',    href: '/services' },
  { label: 'Blog',        href: '/blog' },
  { label: 'FAQ',         href: '/faq' },
  { label: 'Contact Us',  href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/97 backdrop-blur-xl shadow-2xl shadow-black/30 py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <motion.div whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center text-navy">
            <Scale size={19} />
          </motion.div>
          <span className="text-xl font-extrabold text-white tracking-tight">
            NPA <span className="text-gold">Bazar</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {links.map((l, i) => {
            const active = location.pathname === l.href
            return (
              <motion.div key={l.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}>
                <Link to={l.href}
                  className={`text-sm font-medium relative group transition-colors ${active ? 'text-gold' : 'text-white/80 hover:text-gold'}`}>
                  {l.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </motion.div>
            )
          })}
        </nav>

        <motion.a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          className="hidden lg:inline-flex items-center gap-2 ml-2 bg-gold text-navy font-bold text-sm px-5 py-2.5 rounded-lg shrink-0 shadow-lg shadow-gold/20">
          Free Consultation
        </motion.a>

        <button className="lg:hidden ml-auto text-white" onClick={() => setOpen(o => !o)}>
          <AnimatePresence mode="wait">
            <motion.span key={open ? 'x' : 'm'}
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-navy-light border-t border-white/8"
          >
            <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div key={l.label} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <Link to={l.href} className={`block py-3 border-b border-white/8 font-medium ${location.pathname === l.href ? 'text-gold' : 'text-white/80'}`}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="mt-4 bg-gold text-navy font-bold py-3.5 rounded-lg text-center">
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
