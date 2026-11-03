import './Services.css'
import CircularCarousel from '../ConnectedCarousel/ConnectedCarousel'



const services = [
  {
    id: 'residential-solar',
    category: 'Homes',
    title: 'Residential Solar',
    desc: 'Custom rooftop solar designed to lower your home energy costs.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    alt: 'Solar panels installed on a sunny rooftop',
  },
  {
    id: 'commercial-solar',
    category: 'Businesses',
    title: 'Commercial Solar',
    desc: 'Scalable solar installations that help businesses cut operating costs.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85',
    alt: 'Large solar array for commercial energy',
  },
  {
    id: 'ground-mount-systems',
    category: 'Open land',
    title: 'Ground Mount Systems',
    desc: 'Ground-mounted arrays positioned for dependable, high-yield output.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85',
    alt: 'Rows of ground-mounted solar panels',
  },
  {
    id: 'solar-carports',
    category: 'Parking',
    title: 'Solar Carports',
    desc: 'Solar canopies that generate energy while providing covered parking.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1400&q=85',
    alt: 'Solar panels on a large canopy',
  },
  {
    id: 'removal-replacement',
    category: 'Roof projects',
    title: 'Removal & Replacement',
    desc: 'Careful panel removal and reinstallation for roof repairs or upgrades.',
    image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1400&q=85',
    alt: 'Technician working on rooftop solar panels',
  },
  {
    id: 'operations-maintenance',
    category: 'Ongoing care',
    title: 'O&M & Consulting',
    desc: 'Ongoing maintenance and performance support to keep systems efficient.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85',
    alt: 'Solar panel system in operation',
  },
  {
    id: 'system-diagnostics',
    category: 'System health',
    title: 'System Diagnostics',
    desc: 'Expert testing to identify faults and restore your system’s performance.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    alt: 'Close view of rooftop photovoltaic panels',
  },
  {
    id: 'roofing-services',
    category: 'Roofing',
    title: 'Full Roofing Services',
    desc: 'Roofing expertise that protects your property and solar investment.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    alt: 'Solar installation on a residential roof',
  },
]
const carouselItems = services.map((service) => ({
  src: service.image,
  alt: service.alt,
  title: service.title,
  subtitle: service.category,
}))
export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-heading">
        <span className="services-section-eyebrow">What We Do</span>
        <h2 className="services-section-title">Solar Services</h2>
      </div>
<CircularCarousel
  items={carouselItems}
  captions
  cardWidth={300}
  aspectRatio={0.8}
  fadeColor="#ffffff"
/>
    </section>
  )
}
