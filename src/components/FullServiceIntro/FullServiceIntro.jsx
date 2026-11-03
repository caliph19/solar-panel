import './FullServiceIntro.css'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function ScrollRevealWord({ children, index, total, progress, reducedMotion }) {
  const start = index / total
  const end = Math.min(1, start + 0.12)
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const filter = useTransform(progress, [start, end], ['blur(8px)', 'blur(0px)'])

  return (
    <motion.span
      style={{
        opacity: reducedMotion ? 1 : opacity,
        filter: reducedMotion ? 'none' : filter,
      }}
    >
      {children}
    </motion.span>
  )
}

export default function FullServiceIntro() {
  const copyRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: copyRef,
    offset: ['start 0.85', 'end 0.35'],
  })
  const copy = `At American Solar Power, we take pride in being one of Los Angeles’ leading
          full-service solar contractors, reliable, efficient, and easy to work with.
          From initial design to final installation, we manage every step in-house to
          eliminate delays and save you the hassle of micromanaging multiple teams.
          We specialize in complex projects that others shy away from, and we’re often
          called in to fix what other contractors couldn’t get right the first time.`
  const words = copy.trim().split(/\s+/)
  let wordIndex = 0

  return (
    <section className="full-service-intro-section">
      <motion.div
        className="full-service-intro-content"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <span className="full-service-intro-section-eyebrow">American Solar Power</span>
        <h2 className="full-service-intro-section-title">Full Service Solar Contractor</h2>
        <p className="full-service-intro-copy" ref={copyRef}>
          {copy.split(/(\s+)/).map((token, tokenIndex) => {
            if (!token.trim()) return token

            const index = wordIndex++
            return (
              <ScrollRevealWord
                key={tokenIndex}
                index={index}
                total={words.length}
                progress={scrollYProgress}
                reducedMotion={reducedMotion}
              >
                {token}
              </ScrollRevealWord>
            )
          })}
        </p>
        <a href="#contact" className="full-service-intro-btn-primary">Let’s talk</a>
      </motion.div>
    </section>
  )
}
