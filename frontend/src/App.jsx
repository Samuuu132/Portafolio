import { PortfolioProvider } from './context/PortfolioContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/ui/Hero'
import About from './components/ui/About'
import Tech from './components/ui/Tech'
import Projects from './components/ui/Projects'
import Contact from './components/ui/Contact'

function App() {
  return (
    <PortfolioProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </PortfolioProvider>
  )
}

export default App