import './Navbar.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`navbar-root ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <a href="#hero" className="navbar-nb-brand">
          <div className="navbar-nb-logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="url(#sun-grad)" />
              <circle cx="14" cy="14" r="6" fill="#0a0f1e" />
              <defs>
                <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fcd34d" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar-nb-name">American<span className="navbar-nb-accent"> Solar</span></span>
        </a>

        <nav className="navbar-nb-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar-nb-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-nb-right">
          <a href="tel:8668901240" className="navbar-nb-phone">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (866) 890-1240
          </a>
          <a href="#contact" className="navbar-nb-cta">Get Free Quote</a>
          <button className="navbar-nb-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.32 }}
          >
            <button className="navbar-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
            <div className="navbar-mobile-brand">
              <span className="navbar-nb-name">American<span className="navbar-nb-accent"> Solar</span></span>
            </div>
            <nav className="navbar-mobile-nav">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="navbar-mobile-link" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#contact" className="navbar-nb-cta navbar-mobile-cta" onClick={() => setMobileOpen(false)}>Get Free Quote</a>
            <a href="tel:8668901240" className="navbar-mobile-phone">(866) 890-1240</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
