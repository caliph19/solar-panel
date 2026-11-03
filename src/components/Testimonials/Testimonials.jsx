import './Testimonials.css'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Michael T.',
    location: 'Los Angeles, CA',
    text: 'The team was professional, clean, and finished ahead of schedule. Our energy bills are now much lower.',
    rating: 5,
    project: 'Residential — 8.4 kW System',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Sarah & James K.',
    location: 'Riverside, CA',
    text: 'Every step was seamless. They handled the permits and paperwork, making the installation easy.',
    rating: 5,
    project: 'Residential — 12 kW System',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'David Chen',
    location: 'Orange County, CA',
    text: 'Their crew was disciplined, safe, and delivered excellent work. We look forward to working together again.',
    rating: 5,
    project: 'Commercial — 180 kW System',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Patricia M.',
    location: 'San Diego, CA',
    text: 'The diagnostics team quickly found the issue and improved my system’s performance. Impressive service.',
    rating: 5,
    project: 'O&M — Diagnostics & Repair',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials-section-eyebrow">What Clients Say</span>
          <h2 className="testimonials-section-title">
            Trusted by Homeowners &amp;{' '}
            <span className="testimonials-title-accent">Businesses Across California</span>
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonials-testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="testimonials-t-stars">
                {'★'.repeat(t.rating)}
              </div>
              <blockquote className="testimonials-t-text">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="testimonials-t-footer">
                <img className="testimonials-t-avatar" src={t.image} alt="" loading="lazy" />
                <div>
                  <div className="testimonials-t-name">{t.name}</div>
                  <div className="testimonials-t-meta">{t.location}</div>
                </div>
                <div className="testimonials-t-project">{t.project}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
