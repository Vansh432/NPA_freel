import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react'
import { blogs } from '../data/content'

const categories = ['All', 'Banking Recovery', 'SARFAESI', 'DRT', 'OTS', 'Cheque Bounce', 'NCLT']

function BlogList() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-1.5 bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Blog & Resources
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl text-white mb-5">
            NPA & Banking<br /><span className="text-brand-orange">Knowledge Hub</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/65 text-lg">
            Expert articles on SARFAESI, DRT, OTS, Cheque Bounce, and all banking recovery matters.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${active === c ? 'bg-navy text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-orange hover:text-brand-orange'}`}>
                {c}
              </button>
            ))}
          </motion.div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((b, i) => (
              <motion.div key={b.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,22,40,0.12)', border: '1px solid rgba(230,95,0,0.2)' }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden group transition-all">
                <div className="h-1.5 bg-gradient-to-r from-brand-green via-brand-orange to-brand-orange-light" />
                <div className="p-7 flex flex-col h-full">
                  <span className="text-xs font-bold text-brand-orange bg-brand-orange/8 px-3 py-1 rounded-full mb-3 self-start">{b.category}</span>
                  <h3 className="text-navy font-bold text-base mb-2 leading-snug group-hover:text-navy-mid transition-colors flex-1">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{b.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-400">{b.date}</span>
                    <Link to={`/blog/${b.id}`} className="text-brand-orange text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read more <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function BlogPost({ id }) {
  const post = blogs.find(b => b.id === id)
  if (!post) return <div className="pt-40 text-center text-navy text-2xl">Article not found.</div>

  const paragraphs = post.content.split('\n\n')

  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-1 text-white/60 hover:text-brand-orange text-sm mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </motion.div>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center text-xs font-bold text-brand-orange bg-brand-orange/15 border border-brand-orange/30 px-3 py-1 rounded-full mb-4">
            {post.category}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">{post.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/50 text-sm">{post.date} · NPA BAZAAR Editorial</motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="prose prose-slate max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return <h3 key={i} className="text-navy font-bold text-xl mt-8 mb-3">{para.replace(/\*\*/g, '')}</h3>
              }
              if (para.includes('**')) {
                const parts = para.split(/\*\*(.*?)\*\*/g)
                return (
                  <p key={i} className="text-slate-600 text-base leading-relaxed mb-4">
                    {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-navy">{p}</strong> : p)}
                  </p>
                )
              }
              if (para.match(/^\d+\./)) {
                return (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 mb-4">
                    {para.split('\n').map((line, j) => (
                      <p key={j} className="text-slate-600 text-sm mb-1">{line}</p>
                    ))}
                  </div>
                )
              }
              return <p key={i} className="text-slate-600 text-base leading-relaxed mb-4">{para}</p>
            })}
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 bg-navy rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl text-white mb-3">Need Expert Help With Your Case?</h3>
            <p className="text-white/60 text-sm mb-6">Our experts provide free initial consultation for your NPA or recovery matter.</p>
            <a href="https://wa.me/919716188884" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all shadow-md shadow-brand-orange/25">
              WhatsApp for Free Consultation <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Related */}
          <div className="mt-14">
            <h3 className="text-navy font-bold text-xl mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogs.filter(b => b.id !== id).slice(0, 2).map(b => (
                <Link key={b.id} to={`/blog/${b.id}`}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-brand-orange hover:shadow-lg transition-all group">
                  <span className="text-xs font-bold text-brand-orange">{b.category}</span>
                  <h4 className="text-navy font-bold text-sm mt-1 group-hover:text-navy-mid transition-colors">{b.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function Blog() {
  const { id } = useParams()
  return id ? <BlogPost id={id} /> : <BlogList />
}
