import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Disclaimer from './pages/Disclaimer'
import RefundPolicy from './pages/RefundPolicy'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/about"             element={<About />} />
          <Route path="/services"          element={<Services />} />
          <Route path="/blog"              element={<Blog />} />
          <Route path="/blog/:id"          element={<Blog />} />
          <Route path="/faq"               element={<FAQ />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
          <Route path="/terms-conditions"  element={<TermsConditions />} />
          <Route path="/disclaimer"        element={<Disclaimer />} />
          <Route path="/refund-policy"     element={<RefundPolicy />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}
