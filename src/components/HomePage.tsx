import Overview from "../components/overviewComponents/Overview";
import Features from "../components/features/Features";
import MobileApp from "../components/mobileApp/MobileApp";
import HeroSlider from "./heroComponents/HeroSlider";
import AboutTeaser from "./aooutUs/AboutTeaser";
 

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      
<HeroSlider/>
<AboutTeaser />
      <Overview />
      <Features />
      <MobileApp />
      
    </>
  );
}