import './Hero.css'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import solarHero from '../../images/solar6.png'   // ← your PNG file

const stats = [
  { value: 120, suffix: '+', label: 'Employees' },
  { value: 1300, suffix: '+', label: 'Clients' },
  { value: 1000, suffix: '+', label: 'Installations' },
  { value: 36, suffix: '', label: 'Active Projects' },
]

function HeroStatCount({ value, active }) {
  const count = useMotionValue(0)
  const formattedCount = useTransform(count, (current) => Math.round(current).toLocaleString())
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!active) return undefined

    const controls = animate(count, value, {
      duration: prefersReducedMotion ? 0 : 1,
      ease: 'easeOut',
    })
    return () => controls.stop()
  }, [active, count, prefersReducedMotion, value])

  return <motion.span>{formattedCount}</motion.span>
}

export default function Hero() {
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="hero" className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://assets.mixkit.co/videos/46623/46623-thumb-360-0.jpg"
        aria-hidden="true"
      >
        <source src="https://assets.mixkit.co/videos/46623/46623-720.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="hero-title">
            We must be the change we seek in the world
          </h1>
          <p className="hero-sub">California&apos;s premium solar installation subcontractor</p>
          <div className="hero-actions">
            <button
              type="button"
              className="hero-btn-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Reach out to us
              <span className="hero-btn-arrow" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <img
            className="hero-image"
            src={solarHero}
            alt="Solar panels"
            loading="eager"
          />
        </motion.div>
      </div>

      <motion.div
        className="hero-stats"
        ref={statsRef}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        {stats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <span className="hero-stat-value">
              <HeroStatCount value={stat.value} active={statsInView} />
              {stat.suffix}
            </span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}