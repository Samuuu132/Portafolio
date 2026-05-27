import { PortfolioProvider } from './context/PortfolioContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/ui/Hero'

function App() {
  return (
    <PortfolioProvider>
      <Navbar />
      <main>
        <Hero />
      </main>
    </PortfolioProvider>
  )
}

export default App