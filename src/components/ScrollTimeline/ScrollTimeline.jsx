import './ScrollTimeline.css'
import { useEffect, useRef, useState } from 'react'

export default function ScrollTime({ milestones = [] }) {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const triggerPoint = windowHeight / 2
      const totalHeight = rect.height
      const scrolledPast = triggerPoint - rect.top

      let progress = scrolledPast / totalHeight
      progress = Math.max(0, Math.min(1, progress))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-timeline-root" ref={containerRef}>
      <div className="scroll-timeline-track">
        <div className="scroll-timeline-rail" />
        <div
          className="scroll-timeline-progress"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        <div className="scroll-timeline-items">
          {milestones.map((milestone, index) => {
            const itemThreshold = index / (milestones.length - 1 || 1)
            const isActive = scrollProgress >= itemThreshold - 0.05

            return (
              <div
                key={milestone.id}
                className={`scroll-timeline-item${index % 2 === 0 ? ' scroll-timeline-is-reversed' : ''}${isActive ? ' scroll-timeline-is-active' : ''}`}
              >
                <span className="scroll-timeline-marker" aria-hidden="true" />
                <div className="scroll-timeline-spacer" />
                <div className="scroll-timeline-content">
                  <span className="scroll-timeline-date">
                    {milestone.date}
                  </span>
                  <h3 className="scroll-timeline-title">{milestone.title}</h3>
                  <p className="scroll-timeline-description">{milestone.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
