import { PortfolioProvider } from './context/PortfolioContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/ui/Hero'
import About from './components/ui/About'

function App() {
  return (
    <PortfolioProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </PortfolioProvider>
  )
}

export default App