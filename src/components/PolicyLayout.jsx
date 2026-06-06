import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MapPin, Globe, CalendarDays } from 'lucide-react'
import { CONTACT, EFFECTIVE_DATE } from '../data/policies'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const slugifyHeading = (h) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function Block({ part }) {
  return (
    <div className="text-slate-600 text-[15px] leading-relaxed">
      {part.subheading && (
        <h4 className="text-navy font-semibold text-base mb-3 mt-2">{part.subheading}</h4>
      )}
      {part.text && <p className="mb-3">{part.text}</p>}
      {part.list && (
        <ul className="grid gap-2 mb-3 sm:grid-cols-2">
          {part.list.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {part.outro && <p className="mb-1">{part.outro}</p>}
    </div>
  )
}

export default function PolicyLayout({ policy }) {
  const sections = policy.sections.map((s) => ({ ...s, id: slugifyHeading(s.heading) }))

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle,var(--color-brand-orange),transparent)', top: '-20%', right: '-5%' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(circle,var(--color-brand-green),transparent)', bottom: '-15%', left: '-5%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
 
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.span
            {...fade()}
            className="inline-flex items-center gap-2 bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7"
          >
            Legal · NPA BAZAAR
          </motion.span>
          <motion.h1
            {...fade(0.1)}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-[1.1]"
          >
            {policy.title}
          </motion.h1>
          <motion.p
            {...fade(0.2)}
            className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-7"
          >
            {policy.tagline}
          </motion.p>
          <motion.div
            {...fade(0.3)}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-4 py-2 rounded-full"
          >
            <CalendarDays size={14} className="text-brand-orange" />
            Effective Date: <span className="text-white/85 font-semibold">{EFFECTIVE_DATE}</span>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO + CONTENT ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
            {/* Sticky ToC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-navy font-bold text-xs uppercase tracking-widest mb-4">On this page</p>
                <ul className="flex flex-col gap-1.5 max-h-[70vh] overflow-y-auto pr-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-slate-500 hover:text-brand-orange hover:bg-white border-l-2 border-transparent hover:border-brand-orange transition-all pl-3 py-1.5 rounded-r-md"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0">
              {policy.intro && (
                <motion.div
                  {...fade()}
                  className="bg-white border border-slate-200 rounded-2xl p-7 mb-8 shadow-sm"
                >
                  <p className="text-slate-600 leading-relaxed text-[15px]">{policy.intro}</p>
                </motion.div>
              )}

              <div className="flex flex-col gap-5">
                {sections.map((s, i) => (
                  <motion.article
                    key={s.id}
                    id={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45, delay: Math.min(i * 0.03, 0.2) }}
                    className="bg-white border border-slate-200 rounded-2xl p-7 scroll-mt-28 hover:border-brand-orange/30 hover:shadow-md transition-all"
                  >
                    <h3 className="font-serif text-2xl text-navy mb-4 leading-tight">{s.heading}</h3>
                    <div className="flex flex-col gap-4">
                      {s.parts.map((p, idx) => (
                        <Block key={idx} part={p} />
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARD ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            {...fade()}
            className="relative rounded-3xl overflow-hidden bg-navy text-white p-10 md:p-14">
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
              style={{ background: 'radial-gradient(circle,var(--color-brand-orange),transparent)', top: '-30%', right: '-10%' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
                Need help understanding this?
              </span>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">Talk to our team</h3>
              <p className="text-white/65 leading-relaxed mb-8 max-w-2xl">
                If you have any questions about this policy, our advisory services, or your case, our team is available
                via the channels below.
              </p>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 hover:bg-white/10 hover:border-brand-orange/30 transition-all"
                >
                  <Mail size={18} className="text-brand-orange shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-white/45 uppercase tracking-wider">Email</div>
                    <div className="text-sm font-semibold truncate">{CONTACT.email}</div>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 hover:bg-white/10 hover:border-brand-orange/30 transition-all"
                >
                  <Phone size={18} className="text-brand-orange shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-white/45 uppercase tracking-wider">WhatsApp / Call</div>
                    <div className="text-sm font-semibold">{CONTACT.whatsapp}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5">
                  <Globe size={18} className="text-brand-orange shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-white/45 uppercase tracking-wider">Website</div>
                    <div className="text-sm font-semibold">{CONTACT.website}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5">
                  <MapPin size={18} className="text-brand-orange shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-white/45 uppercase tracking-wider">Offices</div>
                    <div className="text-sm font-semibold">{CONTACT.offices}</div>
                  </div>
                </div>
              </div>
 
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
              >
                Contact Us <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
