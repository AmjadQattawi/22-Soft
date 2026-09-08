import Hero from "../components/heroComponents/Hero";
import Overview from "../components/overviewComponents/Overview";
import Features from "../components/features/Features";
import MobileApp from "../components/mobileApp/MobileApp";
import AboutUs from "../components/aooutUs/AboutUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Overview />
      <Features />
      <MobileApp />
      
    </>
  );
}