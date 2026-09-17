import { useTranslation } from "react-i18next";

export default function FooterBottomBar() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
      <p>© {currentYear} 22-Soft. {t("footer.bottom.allRightsReserved")}</p>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-white transition">
          {t("footer.bottom.privacyPolicy")}
        </a>
        <span>•</span>
        <a href="#" className="hover:text-white transition">
          {t("footer.bottom.termsOfService")}
        </a>
        <span>•</span>
        <span className="text-slate-400">
          {t("footer.bottom.builtFor")}
        </span>
      </div>
    </div>
  );
}