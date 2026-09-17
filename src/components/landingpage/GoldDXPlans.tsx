import { useTranslation } from "react-i18next";

// ============================================================
// PLANS DATA
// ============================================================

const plans = [
  {
    translationKey: "starter",
    name: "Starter",
    description: "Single store getting started",
    features: [
      "Desktop ERP for one location",
      "Sales & inventory modules",
      "Standard reports",
      "Email support",
    ],
    popular: false,
  },

  {
    translationKey: "pro",
    name: "Pro",
    description: "Growing multi-branch business",
    features: [
      "Multi-branch management",
      "Mobile companion app",
      "Advanced analytics",
      "Priority support & training",
    ],
    popular: true,
  },

  {
    translationKey: "enterprise",
    name: "Enterprise",
    description: "Full chain & custom needs",
    features: [
      "RFID & custom integrations",
      "Dedicated account manager",
      "On-site training",
      "Tailored deployment",
    ],
    popular: false,
  },
];

// ============================================================
// PLANS SECTION
// ============================================================

export default function GoldDXPlans() {
  const { t } = useTranslation();

  return (
    <section
      id="plans"
      className="bg-linear-to-b from-white via-slate-50 to-white py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#c94f00]">
            {t("goldDX.plans.label")}
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#18395b] sm:text-4xl">
            {t("goldDX.plans.title")}
            <span className="text-[#c94f00]">
              {t("goldDX.plans.highlight")}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {t("goldDX.plans.description")}
          </p>
        </div>

        {/* ====================================================
            PLANS GRID
        ===================================================== */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] ${
                plan.popular
                  ? "border-2 border-[#f97316] shadow-[0_15px_45px_rgba(249,115,22,0.12)]"
                  : "border border-slate-200"
              }`}
            >
              {/* =================================================
                  MOST POPULAR BADGE
              ================================================== */}
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#b94700]">
                  {t("goldDX.plans.mostPopular")}
                </span>
              )}

              {/* =================================================
                  PLAN INFO
              ================================================== */}
              <div>
                <h3 dir="ltr" className="text-2xl font-extrabold text-[#18395b]">
                  {t(`goldDX.plans.items.${plan.translationKey}.name`)}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {t(`goldDX.plans.items.${plan.translationKey}.description`)}
                </p>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-100" />

              {/* =================================================
                  PLAN FEATURES
              ================================================== */}
              <ul className="flex-1 space-y-4">
                {plan.features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    {/* Check Icon */}
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-[#c94f00]">
                      ✓
                    </span>

                    <span>
                      {t(
                        `goldDX.plans.items.${plan.translationKey}.features.${index}`,
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* =================================================
                  REQUEST DEMO BUTTON
              ================================================== */}
              <a
                href="#request-demo"
                className={`mt-9 flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition ${
                  plan.popular
                    ? "bg-[#c94f00] text-white shadow-lg shadow-orange-500/20 hover:bg-[#ea580c]"
                    : "border border-[#c94f00] text-[#c94f00] hover:bg-orange-50"
                }`}
              >
                {t("goldDX.plans.requestDemo")}
              </a>
            </article>
          ))}
        </div>

        {/* ====================================================
            BOTTOM NOTE
        ===================================================== */}
        <p className="mt-8 text-center text-sm text-slate-500">
          {t("goldDX.plans.bottomNote")}
        </p>

      </div>
    </section>
  );
}