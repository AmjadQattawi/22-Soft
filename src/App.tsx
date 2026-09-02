import Features from "./components/featuresComponents/Features";
import Header from "./components/Header";
import Hero from "./components/heroComponents/Hero";
import MobileApp from "./components/MobileApp";
import Overview from "./components/overviewComponents/Overview";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Features />
      <MobileApp/>
    </>
  );
}

export default App;
