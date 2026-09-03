import AboutUs from "./components/AboutUs";
import AboutUsss from "./components/AboutUsss";
import Clients from "./components/clients/Clients";
import Features from "./components/featuresComponents/Features";
import Header from "./components/Header";
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

      <hr />
      <hr />
      <hr />
      <hr />

      <AboutUsss />
    </>
  );
}

export default App;
