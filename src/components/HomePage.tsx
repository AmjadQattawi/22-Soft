import Overview from "./overview/Overview";
import Features from "../components/features/Features";
import MobileApp from "../components/mobileApp/MobileApp";
import AboutTeaser from "./aooutUs/AboutTeaser";
import ClientsPreview from "./clients/clientsmap/ClientsPreview";
import Hero from "./heroComponents/Hero";
import Clients from "./clients/Clients";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <Hero />
      {/* <HeroSlider /> */}
      <AboutTeaser />
      <Overview />
      <Features />
      <MobileApp />
      <Clients />
    </>
  );
}
