import auditTrailDesktop from "../../assets/landing page/audit_trail_desktop.png";
import inventoryStockMobile from "../../assets/landing page/inventory_stock_mobile.jpg";
import mobileSalesManagement from "../../assets/landing page/mobile_sales_management.jpg";
import businessInsightsDashboard from "../../assets/landing page/business_insights_dashboard.png";
import profitOverviewMobile from "../../assets/landing page/profit_overview_mobile.jpg";
import salesInvoiceDesktop from "../../assets/landing page/sales_invoice_desktop.png";
import zebraRfidReader from "../../assets/landing page/rfid_item_locator.png";
import rfidSmartInventory from "../../assets/landing page/rfid/rfid_smart_inventory.jpeg";

// ============================================================
// FEATURES DATA
// ============================================================
const features = [
  {
    number: "01",
    category: "RFID Inventory",
    title: "RFID Jewelry Inventory Tracking",
    description:
      "Speed up physical inventory counts with RFID technology integrated with 22-Gold DX. Using compatible Zebra RFID readers, your team can scan tagged jewelry items, instantly identify detected pieces, compare physical stock with system records, and reduce the time and manual effort required for inventory checks.",
    image: rfidSmartInventory,
    deviceImage: zebraRfidReader,
    imageAlt: "22-Gold DX Smart RFID Inventory",
    imageType: "rfid",
  },
  {
    number: "02",
    category: "Mobile App",
    title: "Mobile Business Management",
    description:
      "Stay connected to your jewelry business even when you are away from the desktop. The 22-Gold DX mobile experience gives you convenient access to important sales, inventory, and business information from your mobile device. Review key activity, follow operational data, and keep important information within reach wherever your work takes you. This gives owners and managers greater flexibility while staying connected to the daily performance of their business.",
    image: mobileSalesManagement,
    imageAlt: "22-Gold DX Mobile Business Management",
    imageType: "mobile",
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
    category: "Fast POS & Invoicing",
    title: "Jewelry POS & Invoicing Software",
    description:
      "Simplify the sales process with a point-of-sale and invoicing experience built around jewelry retail operations. Handle daily transactions, create and manage sales invoices, access product information, and keep customer transactions organized within the same connected system. The streamlined workflow helps your team complete sales more efficiently while keeping important sales information available for reporting and business management.",
    image: salesInvoiceDesktop,
    imageAlt: "22-Gold DX Sales Invoice",
    imageType: "desktop",
  },



  {
    number: "05",
    category: "Financial Control",
    title: "Profit & Financial Overview",
    description:
      "Keep a clearer view of the financial performance of your jewelry business by bringing important financial information together with your daily operations. Review profit information, follow key financial figures, and access organized business data through clear dashboards and reports. This gives management better visibility into financial performance and makes it easier to understand how everyday sales and operations are contributing to the overall business.",
    image: profitOverviewMobile,
    imageAlt: "22-Gold DX Profit Overview",
    imageType: "mobile",
  },

  {
    number: "06",
    category: "Precise Inventory",
    title: "Jewelry Inventory Management Software",
    description:
      "Gain better control over your jewelry inventory with a centralized system designed for daily stock operations. 22-Gold DX helps you organize jewelry items, monitor stock movements, maintain detailed item information, and keep inventory records connected across your business. With clearer visibility into available stock and ongoing movements, your team can manage inventory more efficiently, reduce manual work, and access the information they need when handling day-to-day jewelry operations.",
    image: inventoryStockMobile,
    imageAlt: "22-Gold DX Inventory Management",
    imageType: "mobile",
  },

  {
    number: "07",
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
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#c94f00]">
            22-Gold DX Features
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#18395b] sm:text-4xl">
            Everything You Need to Manage
            <span className="block text-[#c94f00]">Your Jewelry Business</span>
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
                {/* FEATURE CONTENT */}
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#c94f00]">
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

                  <span className="mt-7 block text-5xl font-extrabold text-slate-300">
                    {feature.number}
                  </span>
                </div>


                {/* FEATURE IMAGE  */}
                <div
                  className={`relative flex min-h-90  items-center justify-center overflow-hidden ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  {/* Background */}
                  <div className="absolute inset-2 rounded-4xl bg-linear-to-br from-slate-50 via-white to-orange-50   "  />

                  {/* Orange Glow */}
                  <div className="absolute h-56 w-56 rounded-full bg-orange-100/70 blur-3xl" />

                  {/* Screenshot */}
                  {feature.imageType === "rfid" ? (
                    <div className="relative z-10 flex h-87.5 w-full items-center justify-center">
                      {/* RFID Visual Card */}

                      {/* Soft Glow */}
                      <div className="absolute left-[20%] top-[20%] h-44 w-44 rounded-full bg-orange-200/40 blur-3xl" />
                      <div className="absolute bottom-[15%] right-[18%] h-40 w-40 rounded-full bg-[#18395b]/10 blur-3xl" />

                      {/* Zebra RFID Reader */}
                      <img
                        src={feature.deviceImage}
                        alt="Zebra RFID Reader"
                        className="absolute left-[12%] top-1/2 z-10 w-[48%] max-w-75 -translate-y-1/2 object-contain drop-shadow-[0_25px_30px_rgba(15,23,42,0.22)]  transition-transform duration-500  "
                      />

                      {/* Smart Inventory Phone */}
                      <div className="absolute right-[15%] top-1/2 z-20 h-75 w-39.5 -translate-y-1/2 rounded-[30px] border-[6px] border-slate-900 bg-slate-900 p-0.75` shadow-[0_25px_40px_rgba(15,23,42,0.28)] transition-transform duration-500  ">
                        {/* Speaker */}
                        <div className="absolute left-1/2 top-1.75 z-30 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-600" />

                        <img
                          src={feature.image}
                          alt={feature.imageAlt}
                          className="h-full w-full rounded-[21px] object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : feature.imageType === "mobile" ? (
                    /* Mobile */
                    <div className="relative z-10 flex h-80 w-42.5 items-center justify-center rounded-[30px] border-[6px] border-slate-900 bg-slate-900 p-0.75`">
                      <div className="absolute left-1/2 top-1.75 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-600" />

                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="h-full w-full rounded-[22px] object-cover object-top"
                      />
                    </div>
                  ) : (
                    /* Desktop */
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="relative z-10 max-h-85 max-w-[90%] object-contain drop-shadow-[0_20px_35px_rgba(15,23,42,0.16)] transition-transform duration-500 hover:scale-[1.03]"
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
