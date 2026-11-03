import './Stats.css'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { value: 15, suffix: '+', label: 'Years in Business', desc: 'Serving California since 2009', icon: '📅', color: '#f59e0b' },
  { value: 5000, suffix: '+', label: 'Projects Completed', desc: 'Residential & commercial installs', icon: '⚡', color: '#10b981' },
  { value: 2.4, suffix: ' GW', decimals: 1, label: 'Clean Energy Delivered', desc: 'Powering thousands of homes', icon: '☀️', color: '#6366f1' },
  { value: 18, suffix: 'K+', label: 'Homes Powered', desc: 'Across Los Angeles & beyond', icon: '🏠', color: '#ec4899' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Based on verified reviews', icon: '⭐', color: '#f97316' },
  { value: 866, suffix: '-890', label: 'Always Reachable', desc: 'Call us: (866) 890-1240', icon: '📞', color: '#14b8a6' },
]

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="stats" className="stats-section" ref={ref}>
      <div className="stats-bg-pattern" />

      <div className="stats-container">
        <motion.div
          className="stats-section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="stats-section-eyebrow">By the Numbers</span>
          <h2 className="stats-section-title">
            Proven Results That{' '}
            <span className="stats-title-accent">Speak for Themselves</span>
          </h2>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats-stat-box"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ '--stat-color': stat.color }}
            >
              <div className="stats-stat-box-icon">{stat.icon}</div>
              <div className="stats-stat-box-number">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={0.2 + i * 0.1}
                    decimals={stat.decimals || 0}
                  />
                )}
                <span className="stats-stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stats-stat-box-label">{stat.label}</div>
              <div className="stats-stat-box-desc">{stat.desc}</div>
              <div className="stats-stat-box-glow" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="stats-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>Ready to add your project to our success story?</p>
          <a href="#contact" className="stats-btn-primary">Start Your Solar Journey</a>
        </motion.div>
      </div>
    </section>
  )
}
