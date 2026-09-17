import CompanyVisual from "../../assets/hero/CompanyVisual.webp";
import { useTranslation } from "react-i18next";

export default function SlideOne() {
  const { t } = useTranslation();

  return (
    <div  className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Content */}
      <div className="text-center lg:text-start">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8A3D] md:text-sm">
          {t("home.hero.slideOne.label")}
        </span>

        <h1  className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t("home.hero.slideOne.title")}
          <span className="block text-[#FF8A3D]">
            {t("home.hero.slideOne.highlight")}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
          {t("home.hero.slideOne.description")}
        </p>

        <div className="mt-8">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-200 hover:scale-105 hover:bg-[#ea580c] sm:text-base"
          >
            {t("home.hero.slideOne.button")}
          </a>
        </div>
      </div>  

      {/* Company Visual */}
      <div className="flex items-center justify-center">
        <img
          src={CompanyVisual}
          fetchPriority="high"
          alt="22-Soft Software Solutions"
          className="w-full max-w-2xl object-contain"
        />
      </div>
    </div>
  );
}