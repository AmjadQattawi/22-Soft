// ============================================================
// PLANS DATA
// ============================================================

const plans = [
  {
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
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#f97316]">
            Choose Your Plan
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#18395b] sm:text-4xl">
            A Plan for Every
            <span className="text-[#f97316]"> Jewelry Business</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Whether you operate a single store or manage multiple branches,
            choose the 22-Gold DX plan that fits your business needs.
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
                <span className="absolute right-6 top-6 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#f97316]">
                  Most Popular
                </span>
              )}

              {/* =================================================
                  PLAN INFO
              ================================================== */}
              <div>
                <h3 className="text-2xl font-extrabold text-[#18395b]">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-100" />

              {/* =================================================
                  PLAN FEATURES
              ================================================== */}
              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    {/* Check Icon */}
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-[#f97316]">
                      ✓
                    </span>

                    <span>{feature}</span>
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
                    ? "bg-[#f97316] text-white shadow-lg shadow-orange-500/20 hover:bg-[#ea580c]"
                    : "border border-[#f97316] text-[#f97316] hover:bg-orange-50"
                }`}
              >
                Request Demo
              </a>
            </article>
          ))}
        </div>

        {/* ====================================================
            BOTTOM NOTE
        ===================================================== */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Not sure which plan fits your business? Request a demo and our team
          will help you find the right solution.
        </p>

      </div>
    </section>
  );
}