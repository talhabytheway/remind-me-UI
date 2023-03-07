import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features/Feature'
import Notifications from './components/Features/Notifications'
import DownloadCTA from './components/DownloadCTA'
import Customers from './components/Customers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Features />
      <Notifications />
      <DownloadCTA />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
