import './About.css'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        {/* Left: content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="about-section-eyebrow">About Us</span>
          <h2 className="about-section-title">
            Los Angeles&apos; Trusted{' '}
            <span className="about-title-accent">Solar Partner</span>{' '}
            Since 2009
          </h2>
          <p className="about-text">
            American Solar Power Inc. is a premier full-service solar and roofing contractor headquartered
            in Los Angeles, California. Since our founding in 2009, we&apos;ve been delivering reliable,
            high-performance solar installations for residential homes, commercial businesses, and public entities.
          </p>
          <p className="about-text">
            We serve as both a primary contractor — managing projects from design through completion — and as
            a trusted subcontractor for major developers and solar companies tackling large-scale commercial installations.
          </p>

          <div className="about-highlights">
            {[
              { icon: '📍', label: 'Headquarters', val: '2000 N Figueroa St, Los Angeles, CA 90065' },
              { icon: '📞', label: 'Phone', val: '(866) 890-1240' },
              { icon: '📧', label: 'Email', val: 'info@asolarp.com' },
              { icon: '🗓️', label: 'Founded', val: '2009 — 15+ Years in Business' },
            ].map((h) => (
              <div className="about-highlight" key={h.label}>
                <span className="about-hl-icon">{h.icon}</span>
                <div>
                  <div className="about-hl-label">{h.label}</div>
                  <div className="about-hl-val">{h.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-badges">
            {['Licensed Contractor', 'Fully Insured', 'NABCEP Certified', 'CA CSLB Registered'].map((b) => (
              <span key={b} className="about-badge">{b}</span>
            ))}
          </div>
        </motion.div>

        {/* Right: visual panel */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Main card */}
          <img
            className="about-photo"
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=85"
            alt="Solar panels installed on a sunny California rooftop"
            loading="lazy"
          />
          <div className="about-card">
            <div className="about-card-header">
              <div className="about-card-dot about-card-dot--green" />
              <div className="about-card-dot" />
              <div className="about-card-dot" />
              <span className="about-card-caption">
                American Solar Power — Overview
              </span>
            </div>
            <div className="about-card-body">
              <div className="about-stat-row">
                <div className="about-stat">
                  <div className="about-as-number">15+</div>
                  <div className="about-as-label">Years Experience</div>
                </div>
                <div className="about-stat">
                  <div className="about-as-number">5K+</div>
                  <div className="about-as-label">Projects Completed</div>
                </div>
                <div className="about-stat">
                  <div className="about-as-number">100%</div>
                  <div className="about-as-label">Permit Success Rate</div>
                </div>
              </div>

              <div className="about-service-tags">
                <div className="about-ast-title">Service Areas</div>
                <div className="about-ast-list">
                  {['Los Angeles', 'Orange County', 'San Diego', 'Riverside', 'San Bernardino', 'Ventura'].map((area) => (
                    <span key={area} className="about-ast-tag">{area}</span>
                  ))}
                </div>
              </div>

              <div className="about-rating">
                <div className="about-ar-stars">★★★★★</div>
                <div className="about-ar-text">
                  <strong>4.9 / 5.0</strong> avg. rating across 500+ verified reviews
                </div>
              </div>

              <div className="about-partners">
                <div className="about-ap-label">Trusted Partners</div>
                <div className="about-ap-logos">
                  {['SunPower', 'Enphase', 'SolarEdge', 'LG Solar', 'Tesla'].map((p) => (
                    <div key={p} className="about-ap-logo">{p}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <motion.div
            className="about-float"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="about-af-icon">🏆</span>
            <div>
              <div className="about-af-title">Top Rated</div>
              <div className="about-af-sub">LA Solar Contractor 2024</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
