import { useTranslation } from "react-i18next";

export default function FooterHours() {
  const { t } = useTranslation();

  return (
    <div className="lg:col-span-2 space-y-4">
      <p className="text-white font-bold text-base uppercase tracking-wider">
        {t("footer.hours.title")}
      </p>
      <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
        <div>
          <p className="text-white font-semibold">
            {t("footer.hours.sundayThursday")}
          </p>
          <p className="text-slate-300">{t("footer.hours.weekdayTime")}</p>
        </div>
        <div className="pt-1">
          <p className="text-white font-semibold">
            {t("footer.hours.fridaySaturday")}
          </p>
          <p className="text-rose-300 font-medium">
            {t("footer.hours.closed")}
          </p>
        </div>
        <p className="text-[11px] text-slate-400 pt-2">
          {t("footer.hours.note")}
        </p>
      </div>
    </div>
  );
}