import GoldDXHero from "./GoldDXHero";
import RequestDemo from "./requestdemo/RequestDemo";
import GoldDXFeatures from "./GoldDXFeatures";
import GoldDXPlans from "./GoldDXPlans";
import GoldDXClients from "./GoldDXClients";
import SEO from "../SEO";

export default function GoldDXLandingPage() {
  return (
    <>

      <SEO
        title="22-Gold DX | Jewelry Management Software by 22-Soft"
        description="22-Gold DX is jewelry management software designed for jewelry businesses, with inventory management, POS and invoicing, reporting, mobile operations, and RFID jewelry inventory tracking."
      />
      <GoldDXHero />
      <RequestDemo />

      <GoldDXClients />
      <GoldDXFeatures />
      <GoldDXPlans />
    </>
  );
}
