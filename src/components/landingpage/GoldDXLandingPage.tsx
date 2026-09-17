import GoldDXHero from "./GoldDXHero";
import RequestDemo from "./requestdemo/RequestDemo";
import GoldDXFeatures from "./GoldDXFeatures";
import GoldDXPlans from "./GoldDXPlans";
import GoldDXClients from "./GoldDXClients";
import SEO from "../SEO";
import { useTranslation } from "react-i18next";

export default function GoldDXLandingPage() {
  const { t } = useTranslation();

  return (
    <>

      <SEO
        title={t("goldDX.seo.title")}
        description={t("goldDX.seo.description")}
      />
      <GoldDXHero />
      <RequestDemo />

      <GoldDXClients />
      <GoldDXFeatures />
      <GoldDXPlans />
    </>
  );
}