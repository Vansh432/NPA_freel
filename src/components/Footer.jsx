import { TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  Services: ['Debt Restructuring', 'Legal Recovery', 'Asset Monetization', 'ARC Portfolio Mgmt', 'IBC / Insolvency', 'MSME Advisory'],
  Company:  ['About Us', 'Our Team', 'Careers', 'Press & Media', 'CSR Initiatives'],
  Legal:    ['Terms of Service', 'Privacy Policy', 'Disclaimer', 'RBI Compliance', 'NDA Policy'],
}

const XIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const LIIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const YTIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>

export default function Footer() {
  return (
    <footer className="bg-navy-light text-white/65 pt-18 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center text-navy">
                <TrendingUp size={17} />
              </motion.div>
              <span className="text-lg font-extrabold text-white">NPA<span className="text-gold">Resolve</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              India's most trusted NPA resolution specialists. Delivering compliant, result-driven recoveries since 2006.
            </p>
            <div className="flex gap-3">
              {[XIcon, LIIcon, YTIcon].map((Icon, i) => (
                <motion.a key={i} href="#"
                  whileHover={{ scale: 1.15, backgroundColor: '#d4a853', color: '#0a1628' }}
                  className="w-9 h-9 bg-white/7 rounded-lg flex items-center justify-center text-white/60 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links], si) => (
            <motion.div key={section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (si + 1) * 0.1 }}
            >
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l, li) => (
                  <motion.li key={l}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.08 + li * 0.05 }}
                  >
                    <motion.a href="#" whileHover={{ x: 4, color: '#d4a853' }}
                      className="text-sm text-white/55 inline-block transition-colors">
                      {l}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="py-6 flex flex-col items-center gap-1.5 text-center">
          <p className="text-xs text-white/35">© 2024 NPAResolve Financial Services Pvt. Ltd. All rights reserved.</p>
          <p className="text-xs text-white/25">SARFAESI Authorised | IBC Registered | RBI Regulated | CIN: U65999MH2006PTC000000</p>
        </div>
      </div>
    </footer>
  )
}
