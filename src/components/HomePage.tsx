import Overview from "./overview/Overview";
import Features from "../components/features/Features";
import MobileApp from "../components/mobileApp/MobileApp";
import AboutTeaser from "./aooutUs/AboutTeaser";
import Hero from "./heroComponents/Hero";
import Clients from "./clients/Clients";
import SEO from "./SEO";
import RFIDSection from "./rfid/RFIDSection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="22-Soft | Jewelry Software Solutions"
        description="22-Soft provides software solutions for jewelry businesses, helping manage inventory, sales, operations, reporting, and business performance."
      />
      <Hero />
      <AboutTeaser />
      <Overview />
      <Features />
      <RFIDSection /> 
      <MobileApp />
      <Clients />
    </>
  );
}
