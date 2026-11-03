import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import FullServiceIntro from '../../components/FullServiceIntro/FullServiceIntro'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import WhyUs from '../../components/WhyUs/WhyUs'
import Process from '../../components/Process/Process'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <FullServiceIntro />
      <Services />
      <About />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
