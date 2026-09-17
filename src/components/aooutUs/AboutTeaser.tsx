import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WHY_ITEMS = [
  {
    icon: "💬",
    title: "personalizedSupport",
  },
  {
    icon: "🎓",
    title: "comprehensiveTraining",
  },
  {
    icon: "🛠️",
    title: "technicalAssistance",
  },
  {
    icon: "⚙️",
    title: "continuousFeedback",
  },
];

export default function AboutTeaser() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-slate-100/70 px-6 md:px-10 py-12 md:py-16 lg:py-14">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900  tracking-wider uppercase">
          {t("home.aboutTeaser.title")}
        </h2>

        <p className="text-slate-600 text-sm sm:text-lg leading-relaxed   mx-auto">
          {t("home.aboutTeaser.description")}
        </p>

        <div className="pt-2">
          <Link
            to="/about"
            className="inline-block px-8 py-2 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs"
          >
            {t("home.aboutTeaser.button")}
          </Link>
        </div>



        <div className="relative my-14">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300/80" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-100/70 px-6 text-1xl md:text-2xl font-bold tracking-widest text-slate-700 uppercase">
              {t("home.aboutTeaser.whyTitle")}
            </span>
          </div>
        </div>

        {/* Four column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center pt-2">
          {WHY_ITEMS.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-slate-200/70 text-slate-600 text-xl">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">
                {t(`home.aboutTeaser.items.${item.title}.title`)}
              </h3>
              <p className="text-slate-600 text-sm sm:text-lg leading-relaxed   mx-auto">
                {t(`home.aboutTeaser.items.${item.title}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}