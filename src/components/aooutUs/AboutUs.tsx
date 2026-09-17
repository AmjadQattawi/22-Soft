import SectionContainer from "../csscomponents/SectionContainer";
import SEO from "../SEO";
import AboutTabs from "./AboutTabs";
import CompanyHqCard from "./CompanyHqCard";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <SectionContainer
      id="about"
      className="bg-linear-to-b from-orange-50/40 via-white to-white"
    >
      <SEO
        title={t("about.seo.title")}
        description={t("about.seo.description")}
      />

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c2410c] sm:text-sm">
          {t("about.header.label")}
        </span>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#18395b] md:text-4xl lg:text-5xl">
          {t("about.header.title")}
          <span className="block text-[#f97316]">
            {t("about.header.highlight")}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {t("about.header.description")}
        </p>
      </div>

      {/* About Content */}
      <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        <AboutTabs />
        <CompanyHqCard />
      </div>
    </SectionContainer>
  );
}