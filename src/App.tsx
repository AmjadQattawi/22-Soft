import AboutUs from "./components/aooutUs/AboutUs";
import Clients from "./components/clients/Clients";
import ContactUs from "./components/contactUsComponents/ContactUs";
import Footer from "./components/footerComponents/Footer";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Hero from "./components/heroComponents/Hero";
import MobileApp from "./components/mobileApp/MobileApp";
import Overview from "./components/overviewComponents/Overview";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Features />
      <MobileApp />
      <Clients />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
