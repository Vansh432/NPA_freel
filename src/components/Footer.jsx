import { Link } from 'react-router-dom'
import { Scale, Phone, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/NPA_log.png'
const XIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const LIIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

export default function Footer() {
  return (
    <footer className="bg-navy-light text-white/65 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2.5 mb-4 select-none">
              <div className="bg-white px-3 py-1.5 rounded-xl shadow-md flex items-center border border-white/5 transition-transform duration-300 hover:scale-[1.03] inline-block">
                <img src={logo} alt="NPA BAZAAR Logo" className="h-16 w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Professional advisory platform for stressed loan resolution, SARFAESI matters, DRT/NCLT support, and structured settlement guidance.
            </p>
            <div className="flex gap-3 mb-6">
              {[XIcon, LIIcon].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.15, backgroundColor: '#e65f00', color: '#ffffff' }}
                  className="w-9 h-9 bg-white/7 rounded-lg flex items-center justify-center text-white/60 transition-colors">
                  <Icon />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:+919716188884" className="flex items-center gap-2 text-white/55 hover:text-brand-orange transition-colors">
                <Phone size={14} /> +91 97161 88884
              </a>
              <a href="mailto:gnm@vkdlnpaadvisory.com" className="flex items-center gap-2 text-white/55 hover:text-brand-orange transition-colors">
                <Mail size={14} /> gnm@vkdlnpaadvisory.com
              </a>
              <div className="flex items-start gap-2 text-white/55">
                <MapPin size={14} className="mt-0.5 shrink-0" /> Mumbai & Delhi
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="flex flex-col gap-2">
              {['SMA-1 Advisory', 'SMA-2 Advisory', 'SARFAESI Support', 'DRT Cases', 'NCLT / IBC', 'OTS Negotiation', 'Cheque Bounce'].map(l => (
                <li key={l}><Link to="/services" className="text-sm text-white/55 hover:text-brand-orange transition-colors block">{l}</Link></li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {[['Home', '/'], ['About Us', '/about'], ['Blog', '/blog'], ['FAQ', '/faq'], ['Contact Us', '/contact']].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-sm text-white/55 hover:text-brand-orange transition-colors block">{l}</Link></li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Legal</h4>
            <ul className="flex flex-col gap-2 mb-6">
              {[['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms-conditions'], ['Disclaimer', '/disclaimer'], ['Refund Policy', '/refund-policy']].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-sm text-white/55 hover:text-brand-orange transition-colors">{l}</Link></li>
              ))}
            </ul>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white/40 leading-relaxed">
              <strong className="text-white/60 block mb-1">Disclaimer</strong>
              NPA BAZAAR provides advisory/consultation support only. Outcome depends on facts and applicable laws. We are not a law firm.
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>© 2024 NPA BAZAAR. All rights reserved.</p>
          <p>SARFAESI Advisory | DRT Support | OTS Negotiation | PAN India</p>
        </div>
      </div>
    </footer>
  )
}
