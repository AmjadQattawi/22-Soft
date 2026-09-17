import { Link } from "react-router-dom";
import logo from "../../assets/company Logo/logo-22-Soft.webp";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();

// t("welcome")             // جيب الترجمة حسب اللغة الحالية
// i18n.changeLanguage("ar") // غيّر اللغة للعربي
// i18n.changeLanguage("en") // غيّر اللغة للإنجليزي

  function changeLanguage(language: "en" | "ar") {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }
  return (
    <header
      className="
    sticky top-0 z-50
    bg-linear-to-r from-[#e5e7f2] via-[#18395b] to-[#e5e7f2]
    
    backdrop-blur-md
    border-none
  "
    >
      <div className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <img src={logo} alt="22-Soft" className="h-18 w-auto" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-white hover:text-[#c94f00] px-3  text-sm font-medium transition-colors duration-200"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/22-gold-dx"
            className="text-white hover:text-[#c94f00] px-3  text-sm font-medium transition-colors duration-200"
          >
            {t("header.products")}
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-[#c94f00] px-3  text-sm font-medium transition-colors duration-200"
          >
            {t("header.aboutUs")}
          </Link>

<button
  onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
  className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-3 py-1.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#c94f00] hover:bg-white/10 hover:text-[#c94f00]"
>
  <span>🌐</span>
  <span>{i18n.language === "en" ? "العربية" : "EN"}</span>
</button>
        </nav>

        {/* Action Button */}
        <Link
          to="/22-gold-dx"
          className="px-5 py-2 bg-[#c94f00] hover:bg-[#ea580c] active:scale-95 text-white rounded-xl text-sm sm:text-base font-semibold transition duration-200 shadow-lg shadow-orange-500/20 hover:scale-105"
        >
          {t("header.requestDemo")}
        </Link>
      </div>
    </header>
  );
}
