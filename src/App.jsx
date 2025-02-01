import './App.css';
import About from './components/About';
import AboutFoundation from './components/AboutFoundation';
import ContactUs from './components/ContactUs';
import Donation from './components/Donation';
import Footer from './components/Footer';
import FounderDetails from './components/FounderDetails';
import Header from './components/Header';
import Home from './components/Home';
import Impact from './components/Impact';
import OurValue from './components/OurValue';
import PopularSection from './components/PopularSection';
function App() {

  return (
      <>
        <Header/>
        <main>
          <Home/>
          <About/>
          <Impact/>
          <AboutFoundation/>
          <PopularSection/>
          <OurValue/>
          <FounderDetails/>
          <ContactUs/>
          <Donation/>
        </main>
        <Footer/>
      </>

  )
}

export default App
