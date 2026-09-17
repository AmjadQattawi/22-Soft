import { useTranslation } from "react-i18next";

const FEATURES = [
  {
    title: "enhancedDesktopExperience",
  },
  {
    title: "rfidJewelryInventory",
  },
  {
    title: "mobileCompanionApp",
  },
];

export default function OverviewDetails() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-2xl font-bold text-[#18395b] md:text-3xl">
        {t("home.overviewDetails.title")}
      </h3>

      <p className="mt-5 leading-7 text-slate-600">
        {t("home.overviewDetails.description")}
      </p>

      <div className="mt-8 space-y-5">
        {FEATURES.map((feature, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-[#18395b]">
              {t(`home.overviewDetails.features.${feature.title}.title`)}
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              {t(`home.overviewDetails.features.${feature.title}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}