import './Contact.css'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, send to API here
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left contact-info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="contact-section-eyebrow">Get In Touch</span>
            <h2 className="contact-section-title">
              Start Your Free{' '}
              <span className="contact-title-accent">Solar Consultation</span>
            </h2>
            <p className="contact-intro">
              No pressure. No jargon. Just an honest conversation about how solar can work for your home or business.
              Get a custom proposal — completely free.
            </p>

            <img
              className="contact-photo"
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85"
              alt="Solar panels on a rooftop"
              loading="lazy"
            />

            <div className="contact-cards">
              <div className="contact-cc-item">
                <div className="contact-cc-icon">📞</div>
                <div>
                  <div className="contact-cc-label">Call Us</div>
                  <a href="tel:8668901240" className="contact-cc-value">(866) 890-1240</a>
                </div>
              </div>
              <div className="contact-cc-item">
                <div className="contact-cc-icon">📧</div>
                <div>
                  <div className="contact-cc-label">Email Us</div>
                  <a href="mailto:info@asolarp.com" className="contact-cc-value">info@asolarp.com</a>
                </div>
              </div>
              <div className="contact-cc-item">
                <div className="contact-cc-icon">📍</div>
                <div>
                  <div className="contact-cc-label">Office</div>
                  <div className="contact-cc-value">2000 N Figueroa St<br />Los Angeles, CA 90065</div>
                </div>
              </div>
              <div className="contact-cc-item">
                <div className="contact-cc-icon">🕐</div>
                <div>
                  <div className="contact-cc-label">Business Hours</div>
                  <div className="contact-cc-value">Mon–Fri: 8AM–6PM<br />Sat: 9AM–2PM</div>
                </div>
              </div>
            </div>

            <div className="contact-guarantee">
              <div className="contact-cg-icon">🛡️</div>
              <div>
                <strong>Our Promise</strong>
                <p>We respond to every inquiry within 24 hours. Your consultation is 100% free with no obligation to proceed.</p>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-header">
                  <h3>Request Your Free Quote</h3>
                  <p>Fill in the details below and we&apos;ll be in touch within 24 hours.</p>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option>Residential Solar</option>
                      <option>Commercial Solar</option>
                      <option>Ground Mount System</option>
                      <option>Solar Carport</option>
                      <option>Removal & Replacement</option>
                      <option>System Diagnostics</option>
                      <option>O&M / Consulting</option>
                      <option>Roofing Services</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Describe your property, current electricity bill, or any specific questions..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contact-form-submit">
                  <span>Send My Free Quote Request</span>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </button>

                <p className="contact-form-privacy">
                  🔒 Your information is secure and will never be sold or shared.
                </p>
              </form>
            ) : (
              <motion.div
                className="contact-form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="contact-success-icon">✅</div>
                <h3>Thank You, {form.name || 'Friend'}!</h3>
                <p>
                  We received your quote request and our team will reach out within 24 hours.
                  In the meantime, feel free to call us at{' '}
                  <a href="tel:8668901240">(866) 890-1240</a>.
                </p>
                <button className="contact-btn-primary" onClick={() => setSubmitted(false)}>
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
