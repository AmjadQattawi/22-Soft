import GoldDXHero from "./GoldDXHero";
import RequestDemo from "./requestdemo/RequestDemo";
import GoldDXFeatures from "./GoldDXFeatures";
import GoldDXPlans from "./GoldDXPlans";
import GoldDXClients from "./GoldDXClients";

export default function GoldDXLandingPage() {
  return (
    <>

      <GoldDXHero />
      <RequestDemo />

      <GoldDXClients />
      <GoldDXFeatures />
      <GoldDXPlans />
    </>
  );
}
