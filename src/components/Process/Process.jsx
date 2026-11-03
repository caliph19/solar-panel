import './Process.css'
// components/Process.jsx
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Site Assessment",
    desc: "Our certified engineers visit your property to evaluate roof condition, sun exposure, utility bills, and energy goals. We deliver a custom system design at zero cost.",
    icon: "🔍",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    detail:
      "Includes: Roof inspection · Shading analysis · Utility bill review · Custom design proposal",
  },
  {
    num: "02",
    title: "System Design & Approval",
    desc: "We design a solar system optimized for your property. Our team handles all permits, HOA approvals, and utility interconnection paperwork — you sit back and relax.",
    icon: "📐",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
    detail:
      "Includes: 3D system modeling · Permit applications · HOA coordination · Utility approval",
  },
  {
    num: "03",
    title: "Expert Installation",
    desc: "Our NABCEP-certified installers mount your panels with precision and safety. Most residential installs are completed in just 1–2 days with zero damage to your roof.",
    icon: "🔧",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80",
    detail:
      "Includes: Certified install crew · Quality materials · Clean worksite · Same-day inspection",
  },
  {
    num: "04",
    title: "Monitoring & Maintenance",
    desc: "We activate your system and connect you to our 24/7 performance monitoring platform. If anything needs attention, our service team is a phone call away — for life.",
    icon: "📡",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
    detail:
      "Includes: 24/7 remote monitoring · Annual cleaning · Inverter monitoring · Priority service",
  },
];

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="process" className="process-section" ref={ref}>
      <div className="process-container">
        <motion.div
          className="process-section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="process-section-eyebrow">How It Works</span>
          <h2 className="process-section-title">
            From Consultation to <span className="process-title-accent">Clean Power</span>
          </h2>
          <p className="process-section-desc">
            Our streamlined 4-step process makes going solar simple, transparent, and
            stress-free. We handle everything — all you need to do is enjoy the savings.
          </p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-step"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15 }}
            >
              <div className="process-step-connector">
                <div className="process-step-num-badge">{step.num}</div>
                {i < steps.length - 1 && <div className="process-step-line" />}
              </div>
              <div className="process-step-card">
                <img className="process-step-image" src={step.image} alt="" loading="lazy" />
                <div className="process-step-icon">{step.icon}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
                <div className="process-step-detail">
                  <span className="process-detail-label">What&apos;s included:</span>
                  <p>{step.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          className="process-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="process-banner-icon">⚡</div>
          <div className="process-banner-content">
            <h3>
              Average time from assessment to activation:{" "}
              <span className="process-banner-time">6–8 weeks</span>
            </h3>
            <p>
              Most homeowners see their first utility bill savings within 30 days of
              activation.
            </p>
          </div>
          <a href="#contact" className="process-btn-primary">
            Start Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}