import SectionContainer from "../csscomponents/SectionContainer";
import SEO from "../SEO";
import AboutTabs from "./AboutTabs";
import CompanyHqCard from "./CompanyHqCard";

export default function AboutUs() {
  return (
    <SectionContainer
      id="about"
      className="bg-linear-to-b from-orange-50/40 via-white to-white"
    >
      <SEO
        title="About 22-Soft | Jewelry Software Solutions"
        description="Learn about 22-Soft and our focus on developing software solutions that help jewelry businesses manage their daily operations more efficiently."
      />

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c2410c] sm:text-sm">
          About 22-Soft
        </span>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#18395b] md:text-4xl lg:text-5xl">
          Software Built for
          <span className="block text-[#f97316]">
            Modern Jewelry Businesses
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          We develop specialized software solutions that help jewelry
          businesses manage inventory, sales, accounting, and daily operations
          with greater control and efficiency.
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