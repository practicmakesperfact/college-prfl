import { useState } from 'react'
import { LangProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import About from './components/About'
import Admissions from './components/Admissions'
import News from './components/News'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'
import ScrollToTop from './components/ScrollToTop'
import Leadership from './components/Leadership'
import Gallery from './components/Gallery'
import Departments from './components/Departments'
import DigitalLibrary from './components/DigitalLibrary'
import './index.css'

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')

  const openRegistration = () => setIsRegistrationOpen(true)
  const closeRegistration = () => setIsRegistrationOpen(false)

  return (
    <LangProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar activePage={activePage} setActivePage={setActivePage} onApplyClick={openRegistration} />
        <main>
          <Hero onApplyClick={openRegistration} />
          <Stats />
          <About />
          <Leadership />
          <Gallery />
          <Programs onApplyClick={openRegistration} />
          <Departments />
          <DigitalLibrary />
          <Admissions onApplyClick={openRegistration} />
          <Testimonials />
          <News />
          <Contact />
        </main>
        <Footer onApplyClick={openRegistration} />
        {isRegistrationOpen && <RegistrationModal onClose={closeRegistration} />}
        <ScrollToTop />
      </div>
    </LangProvider>
  )
}

export default App
