import auditTrailDesktop from "../../assets/landing page/audit_trail_desktop.png";
import inventoryStockMobile from "../../assets/landing page/inventory_stock_mobile.jpg";
import mobileSalesManagement from "../../assets/landing page/mobile_sales_management.jpg";
import businessInsightsDashboard from "../../assets/landing page/business_insights_dashboard.png";
import profitOverviewMobile from "../../assets/landing page/profit_overview_mobile.jpg";
import salesInvoiceDesktop from "../../assets/landing page/sales_invoice_desktop.png";
// ============================================================
// FEATURES DATA
// ============================================================
const features = [
  {
    number: "01",
    category: "Precise Inventory",
    title: "Inventory & Stock Management",
    description:
      "Gain better control over your jewelry inventory with a centralized system designed for daily stock operations. 22-Gold DX helps you organize jewelry items, monitor stock movements, maintain detailed item information, and keep inventory records connected across your business. With clearer visibility into available stock and ongoing movements, your team can manage inventory more efficiently, reduce manual work, and access the information they need when handling day-to-day jewelry operations.",
    image: inventoryStockMobile,
    imageAlt: "22-Gold DX Inventory Management",
    imageType: "mobile",
  },

  {
    number: "02",
    category: "Fast POS & Invoicing",
    title: "Smart Retail POS & Invoicing",
    description:
      "Simplify the sales process with a point-of-sale and invoicing experience built around jewelry retail operations. Handle daily transactions, create and manage sales invoices, access product information, and keep customer transactions organized within the same connected system. The streamlined workflow helps your team complete sales more efficiently while keeping important sales information available for reporting and business management.",
    image: salesInvoiceDesktop,
    imageAlt: "22-Gold DX Sales Invoice",
    imageType: "desktop",
  },

  {
    number: "03",
    category: "Market Analytics",
    title: "Sales & Business Insights",
    description:
      "Turn everyday business activity into information that is easier to understand and use. 22-Gold DX provides dashboards and reports that help you review sales activity, monitor business performance, and follow important operational information from one place. Instead of relying only on scattered records, management can get a clearer view of business activity and use that information to support faster and more informed decisions.",
    image: businessInsightsDashboard,
    imageAlt: "22-Gold DX Business Insights Dashboard",
    imageType: "desktop",
  },

  {
    number: "04",
    category: "Financial Control",
    title: "Profit & Financial Overview",
    description:
      "Keep a clearer view of the financial performance of your jewelry business by bringing important financial information together with your daily operations. Review profit information, follow key financial figures, and access organized business data through clear dashboards and reports. This gives management better visibility into financial performance and makes it easier to understand how everyday sales and operations are contributing to the overall business.",
    image: profitOverviewMobile,
    imageAlt: "22-Gold DX Profit Overview",
    imageType: "mobile",
  },

  {
    number: "05",
    category: "Mobile App",
    title: "Mobile Business Management",
    description:
      "Stay connected to your jewelry business even when you are away from the desktop. The 22-Gold DX mobile experience gives you convenient access to important sales, inventory, and business information from your mobile device. Review key activity, follow operational data, and keep important information within reach wherever your work takes you. This gives owners and managers greater flexibility while staying connected to the daily performance of their business.",
    image: mobileSalesManagement,
    imageAlt: "22-Gold DX Mobile Business Management",
    imageType: "mobile",
  },

  {
    number: "06",
    category: "Security & Control",
    title: "Audit Trail & Financial Ledger",
    description:
      "Maintain greater visibility and control over important financial and operational records with organized transaction tracking. 22-Gold DX helps keep business activity documented and makes it easier to review transactions, financial records, and changes when needed. A clearer audit trail supports better accountability, simplifies the process of reviewing historical activity, and gives management a more structured view of how transactions move through the business.",
    image: auditTrailDesktop,
    imageAlt: "22-Gold DX Audit Trail",
    imageType: "desktop",
  },
];

// ============================================================
// FEATURES SECTION
// ============================================================

export default function GoldDXFeatures() {
  return (
    <section id="features" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#f97316]">
            22-Gold DX Features
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#18395b] sm:text-4xl">
            Everything You Need to Manage
            <span className="block text-[#f97316]">Your Jewelry Business</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Powerful tools designed to simplify daily jewelry operations, from
            inventory and sales to analytics and financial management.
          </p>
        </div>

        {/* ====================================================
            FEATURES LIST
        ===================================================== */}
        <div className="mt-20 space-y-24">
          {features.map((feature, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={feature.number}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* =================================================
                    FEATURE CONTENT
                ================================================== */}
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#f97316]">
                      {feature.category}
                    </span>

                    <div className="h-px w-10 bg-orange-200" />
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-[#18395b] sm:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  <span className="mt-7 block text-5xl font-extrabold text-slate-100">
                    {feature.number}
                  </span>
                </div>

                {/* =================================================
                    FEATURE IMAGE
                ================================================== */}
                {/* =================================================    FEATURE IMAGE================================================== */}
                <div
                  className={`relative flex min-h-[360px] items-center justify-center overflow-hidden ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  {/* Background */}
                  <div className="absolute inset-4 rounded-[32px] bg-linear-to-br from-slate-50 via-white to-orange-50" />

                  {/* Orange Glow */}
                  <div className="absolute h-56 w-56 rounded-full bg-orange-100/70 blur-3xl" />

                  {/* Screenshot */}
                  {feature.imageType === "mobile" ? (
                    <div className="relative z-10 flex h-[320px] w-[170px] items-center justify-center rounded-[30px] border-[6px] border-slate-900 bg-slate-900 p-[3px] ">
                      {/* Speaker */}
                      <div className="absolute left-1/2 top-[7px] z-20 h-[4px] w-10 -translate-x-1/2 rounded-full bg-slate-600" />

                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="h-full w-full rounded-[22px] object-cover object-top"
                      />
                    </div>
                  ) : (
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="relative z-10 max-h-[340px] max-w-[90%] object-contain drop-shadow-[0_20px_35px_rgba(15,23,42,0.16)] transition-transform duration-500 hover:scale-[1.03]"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
