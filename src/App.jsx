import useScrollAnimations from './useScrollAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Applications from './components/Applications'
import WhyTempered from './components/WhyTempered'
import Products from './components/Products'
import Process from './components/Process'
import Stats from './components/Stats'
import Trusted from './components/Trusted'
import Projects from './components/Projects'
import QuoteCTA from './components/QuoteCTA'
import Footer from './components/Footer'

export default function App() {
  useScrollAnimations()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Applications />
        <WhyTempered />
        <Products />
        <Process />
        <Stats />
        <Trusted />
        <Projects />
        <QuoteCTA />
      </main>
      <Footer />
    </>
  )
}
