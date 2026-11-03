import './WhyUs.css'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
const reasons = [
  {
    icon: '✳',
    title: 'Experience that shows',
    desc: 'Since 2009, we’ve delivered dependable solar work for homes, businesses, and large-scale projects.',
  },
  {
    icon: '⌂',
    title: 'Licensed and insured',
    desc: 'Our licensed, insured team puts safety, quality, and accountability first on every job.',
  },
  {
    icon: '⌁',
    title: 'Thoughtful system design',
    desc: 'We tailor each project to the property, energy goals, and real-world site conditions.',
  },
  {
    icon: '✓',
    title: 'Projects handled in-house',
    desc: 'From design and permits through installation, one coordinated team keeps work moving.',
  },
  {
    icon: '⚡',
    title: 'Complex work welcome',
    desc: 'We take on challenging installations and help resolve issues when previous work falls short.',
  },
  {
    icon: '↗',
    title: 'Support beyond install',
    desc: 'Diagnostics, maintenance, and consulting help keep solar systems performing over time.',
  },
]

const IMAGE_URL = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85'

export default function WhyUs() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const stageRef = useRef(null)
  const [maxShift, setMaxShift] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const trackX = useTransform(scrollYProgress, (progress) => (
    reducedMotion ? 0 : -maxShift * progress
  ))

  useEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    if (!track || !stage) return undefined

    const updateOverflow = () => {
      const shift = Math.max(0, track.scrollWidth - stage.clientWidth)
      setMaxShift(shift)
      setSectionHeight(window.innerHeight + shift)
    }

    updateOverflow()
    const observer = new ResizeObserver(updateOverflow)
    observer.observe(track)
    observer.observe(stage)
    window.addEventListener('resize', updateOverflow)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateOverflow)
    }
  }, [])

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={!reducedMotion && sectionHeight > 0 ? { height: sectionHeight } : undefined}
      className={`why-us-why-timeline-section${reducedMotion ? ' why-us-why-timeline-section--reduced' : ''}`}
      aria-labelledby="why-timeline-title"
    >
      <div className="why-us-why-timeline-stage" ref={stageRef}>
        <motion.div className="why-us-why-timeline-track" ref={trackRef} style={{ x: trackX }}>
          <div className="why-us-why-timeline-intro">
            <img
              className="why-us-why-timeline-photo"
              src={IMAGE_URL}
              alt="A solar farm with rows of photovoltaic panels"
              loading="lazy"
            />
            <div className="why-us-why-timeline-intro-copy">
              <span className="why-us-section-eyebrow">Why Choose Us</span>
              <h2 id="why-timeline-title">Built for better solar projects.</h2>
              <p>Reliable people. Thoughtful work. Support that lasts beyond installation.</p>
              <a href="#contact" className="why-us-btn-primary">Let’s work together <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="why-us-why-timeline-journey">
            <div className="why-us-why-timeline-rail" aria-hidden="true">
              <span />
            </div>
            {reasons.map((reason, index) => (
              <motion.article
                className={`why-us-why-timeline-item ${index % 2 === 0 ? 'why-us-is-top' : 'why-us-is-bottom'}${index === reasons.length - 1 ? ' why-us-is-terminal' : ''}`}
                key={reason.title}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : index * 0.08 }}
              >
                <div className="why-us-why-timeline-content">
                  <div className="why-us-why-timeline-content-inner">
                    <span className="why-us-why-timeline-icon" aria-hidden="true">{reason.icon}</span>
                    <h3>{reason.title}</h3>
                    <p>{reason.desc}</p>
                  </div>
                </div>
                <span className="why-us-why-timeline-marker" aria-hidden="true" />
                <span className="why-us-why-timeline-stem" aria-hidden="true" />
                {index !== reasons.length - 1 && <span className="why-us-why-timeline-endpoint" aria-hidden="true" />}
                <span className="why-us-why-timeline-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </motion.article>
            ))}
          </div>
        </motion.div></div>
    </section>
  )
}
