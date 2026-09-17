import { useTranslation } from "react-i18next";

export default function FooterNav() {
  const { t } = useTranslation();

  return (
    <div className="lg:col-span-2 space-y-4">
      <p className="text-white font-bold text-base uppercase tracking-wider">
        {t("footer.navigation.title")}
      </p>
      <ul className="space-y-2.5 text-sm text-slate-300">
        <li>
          <a href="#overview" className="hover:text-[#FF8A3D] transition">
            {t("footer.navigation.overview")}
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-[#FF8A3D] transition">
            {t("footer.navigation.coreFeatures")}
          </a>
        </li>
        <li>
          <a href="#clients" className="hover:text-[#FF8A3D] transition">
            {t("footer.navigation.keyClients")}
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#FF8A3D] transition">
            {t("footer.navigation.aboutUs")}
          </a>
        </li>
        <li>
          <a href="contact" className="text-[#FF8A3D] hover:underline font-semibold">
            {t("footer.navigation.contactUs")}
          </a>
        </li>
      </ul>
    </div>
  );
}