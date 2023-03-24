import Nav from './components/Hero/Nav'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Features from './components/Features/Feature'
import Notifications from './components/Features/Notifications'
import DownloadCTA from './components/DownloadCTA/DownloadCTA'
import Customers from './components/Customers/Customers'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Nav className="relative" />
    <div className="font-poppins flex flex-col gap-12 md:gap-16 lg:gap-36">
      <Hero className="" />
      <Services />
      <Features />
      <Notifications />
      <DownloadCTA />
      <Customers />
      <Footer />
    </div>
    </>
  );
}

export default App;
