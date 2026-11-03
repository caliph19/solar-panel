import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="url(#sun-grad-f)" />
                <circle cx="14" cy="14" r="6" fill="#0a0f1e" />
                <defs>
                  <radialGradient id="sun-grad-f" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fcd34d" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </radialGradient>
                </defs>
              </svg>
              <span className="footer-brand-name">
                American<span className="footer-brand-accent"> Solar</span> Power
              </span>
            </div>
            <p className="footer-tagline">
              Los Angeles&apos; premier full-service solar and roofing contractor.
              Powering California homes and businesses since 2009.
            </p>
            <div className="footer-contact-chips">
              <a href="tel:8668901240" className="footer-fcc">📞 (866) 890-1240</a>
              <a href="mailto:info@asolarp.com" className="footer-fcc">📧 info@asolarp.com</a>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                {['Residential Solar', 'Commercial Solar', 'Ground Mount Systems', 'Solar Carports', 'Removal & Replacement', 'System Diagnostics', 'O&M & Consulting', 'Roofing Services'].map(s => (
                  <li key={s}><a href="#services">{s}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {[['About Us', '#about'], ['Our Process', '#process'], ['Contact Us', '#contact'], ['Get Free Quote', '#contact']].map(([label, href]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Service Areas</h4>
              <ul>
                {['Los Angeles', 'Orange County', 'San Diego', 'Riverside', 'San Bernardino', 'Ventura County', 'All of California'].map(a => (
                  <li key={a}><a href="#contact">{a}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} American Solar Power Inc. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>2000 N Figueroa St, Los Angeles, CA 90065</span>
            <span>·</span>
            <span>CA CSLB Licensed</span>
            <span>·</span>
            <span>Fully Insured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
